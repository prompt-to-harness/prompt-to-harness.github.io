#!/usr/bin/env bash
# 模型能力目录 A/B 实验：同一个任务（第 2 章 2.2 p29 的“补上项目经历”）、同一个 v0，分别在
#   on  = CLEAN_CODEX_CATALOG=1（官方模型能力目录 + 512K 窗口）
#   off = CLEAN_CODEX_CATALOG=0（Codex 内置兜底配置）
#   med = 目录开 + 推理档位 medium（目录默认发 max；用来分开“目录”和“max”各自的影响）
# 下各跑 N 次，A/B 交替执行以减少时段影响。只产出记录，评分用同目录的 summarize.py。
# 用法：courseware/ch02/materials/model-config/run-ab.sh [N=5] [运行目录] [配置列表，默认 "on off"，如 "med" 或 "on off med"]
# 需要：MINIMAX_API_KEY、Node/npm、codex。不需要 uv / claude-tap（因此没有浏览器检查，只有 build 与 diff 检查）。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
N="${1:-5}"
ROOT="${2:-$REPO/lab-runs/model-config/ab-$(date +%Y%m%d-%H%M%S)}"
V0="${V0:-$REPO/starters/personal-homepage/ch01-complete}"
ITEMS_FILE="$REPO/courseware/ch02/materials/mainline/fixtures/experiences.txt"
CONFIGS="${3:-on off}"
STEP_TIMEOUT="${STEP_TIMEOUT:-600}"
GIT=(git -c user.name=lab -c user.email=lab@example.invalid)
mkdir -p "$ROOT"; ROOT="$(cd "$ROOT" && pwd)"
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$ROOT/steps.log"; }

# Prompt：和 run-v1.sh 一样，从课件 lesson.js 读 p29，把占位符换成 fixtures 里的项目内容
python3 - "$REPO/courseware/ch02/lessons/02-iteration/lesson.js" "$ITEMS_FILE" > "$ROOT/prompt.txt" <<'PY'
import json, re, sys
s = open(sys.argv[1]).read()
scenes = json.loads(s[s.index('{'):s.rstrip().rstrip(';').rindex('}') + 1])['scenes']
p = next(x for x in scenes if x['id'] == 'p29')['prompt']
print(re.sub(r"<[^>]*>", "\n" + open(sys.argv[2]).read().strip(), p, count=1))
PY

# 基底：v0 + npm ci 只做一次，每次运行用 APFS 克隆复制
BASE="$ROOT/_base"
say "准备基底：复制 v0 并 npm ci"
cp -R "$V0" "$BASE"; rm -rf "$BASE/node_modules" "$BASE/dist" "$BASE/CHECKPOINT.md"
(cd "$BASE" && npm ci --no-audit --no-fund > "$ROOT/npm-ci.log" 2>&1)

run_step() {  # run_step <运行目录> <名称> <catalog 0|1> <exec 参数…>：跑一次 codex exec，带超时
  local run="$1" name="$2" cat="$3"; shift 3
  local start=$SECONDS pid
  local extra=(); [ -n "${EFFORT:-}" ] && extra=(-c "model_reasoning_effort=\"$EFFORT\"")
  ( cd "$run/repo" && CLEAN_CODEX_HOME="$run/home" CLEAN_CODEX_CATALOG="$cat" "$REPO/tools/clean-codex.sh" -- exec ${extra[@]+"${extra[@]}"} "$@" \
      --json -o "$run/$name.answer.md" < /dev/null > "$run/$name.out" 2> "$run/$name.err" ) &
  pid=$!
  while kill -0 "$pid" 2>/dev/null; do
    if [ $((SECONDS - start)) -ge "$STEP_TIMEOUT" ]; then
      # 命令行里带着 -o <这一步的输出文件>，据此连 codex 子进程一起杀，否则会留下仍在写会话的进程
      pkill -f "$run/$name.answer.md" 2>/dev/null || true; kill "$pid" 2>/dev/null || true; echo timeout > "$run/$name.timeout"; break
    fi
    sleep 2
  done
  wait "$pid" 2>/dev/null || true
  grep '^{' "$run/$name.out" > "$run/$name.events.jsonl" || true
  echo $((SECONDS - start)) > "$run/$name.seconds"
}

one_run() {  # one_run <名称 on|off> <序号>
  local cfg="$1" i="$2" cat run
  case "$cfg" in on|med) cat=1 ;; *) cat=0 ;; esac
  EFFORT=""; [ "$cfg" = med ] && EFFORT=medium
  run="$ROOT/$cfg-$i"; mkdir -p "$run"
  cp -cR "$BASE" "$run/repo" 2>/dev/null || cp -R "$BASE" "$run/repo"
  "${GIT[@]}" -C "$run/repo" init -q -b main && "${GIT[@]}" -C "$run/repo" add -A && "${GIT[@]}" -C "$run/repo" commit -qm "v0"
  say "$cfg-$i 开始"
  run_step "$run" plan "$cat" -s workspace-write "$(cat "$ROOT/prompt.txt")"
  if [ -n "$("${GIT[@]}" -C "$run/repo" status --porcelain)" ]; then
    echo "edited-before-confirm" > "$run/confirm"
  else
    echo confirmed > "$run/confirm"
    run_step "$run" confirm "$cat" resume --last -c sandbox_mode='"workspace-write"' "确认，按计划执行。"
  fi
  set +e; (cd "$run/repo" && npm run build > "$run/build.log" 2>&1); echo $? > "$run/build.exit"; set -e
  "${GIT[@]}" -C "$run/repo" add -A -- . ':!dist' ':!node_modules' 2>/dev/null || true
  "${GIT[@]}" -C "$run/repo" diff --cached > "$run/diff.patch" || true
  "${GIT[@]}" -C "$run/repo" diff --cached --stat > "$run/diffstat.txt" || true
  rm -rf "$run/repo/node_modules"   # 省空间；diff 和 build 记录已保存
  say "$cfg-$i 完成（build 退出码 $(cat "$run/build.exit")）"
}

for i in $(seq 1 "$N"); do
  # 多个配置时，奇数轮正序、偶数轮倒序，减少时段影响
  set -- $CONFIGS; [ $((i % 2)) -eq 0 ] && set -- $(printf '%s\n' "$@" | sed '1!G;h;$!d')
  for cfg in "$@"; do one_run "$cfg" "$i"; done
done
say "全部完成：$ROOT"
echo "汇总：python3 -I $HERE/summarize.py $ROOT"
