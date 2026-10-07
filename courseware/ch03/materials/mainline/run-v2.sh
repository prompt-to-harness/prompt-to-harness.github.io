#!/usr/bin/env bash
# 第 3 章预检 A：从首页 v1 出发，按 3.1 的一句话需求真实运行 Codex，得到记忆翻牌 v0 与全部记录。可重复运行，每次一个新目录。
# 用法：courseware/ch03/materials/mainline/run-v2.sh [运行目录]   # 默认 <本仓库>/lab-runs/ch03-mainline/v2-<时间>
#       V1=<首页目录> …/run-v2.sh                                 # 换一个 v1（默认第 2 章冻结候选 ch02-candidate）
# 需要：MINIMAX_API_KEY、Node/npm、uv。不发布，不推送。之后用 probe.py 对构建产物做 3.2 的固定探查。
#
# 3.1 课件尚未写，需求句与确认语取自 fixtures/（草案）。人的部分代答并在记录中标明：
# 确认计划，并把 Codex 提的问题都交给它推荐的做法——这正是 3.2 要追问的“AI 替你定的规则”。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
V1="${V1:-$REPO/starters/personal-homepage/ch02-candidate}"
RUN="${1:-$REPO/lab-runs/ch03-mainline/v2-$(date +%Y%m%d-%H%M%S)}"
mkdir -p "$(dirname "$RUN")"
RUN="$(cd "$(dirname "$RUN")" && pwd)/$(basename "$RUN")"
APP="$RUN/repo"; LOG="$RUN/logs"
[ -e "$RUN" ] && { echo "运行目录已存在：$RUN" >&2; exit 1; }
mkdir -p "$LOG"
GIT=(git -c user.name="讲师排练" -c user.email=rehearsal@example.invalid)
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }

codex_step() {  # codex_step <名字> <exec 参数…>：记录事件、最后回答与 claude-tap 会话
  local name="$1"; shift
  local start=$SECONDS
  (cd "$APP" && CLEAN_CODEX_HOME="$RUN/home" CLEAN_CODEX_NO_OPEN=1 "$REPO/tools/clean-codex.sh" --tap -- exec "$@" \
      --json -o "$LOG/$name.answer.md" < /dev/null > "$LOG/$name.out" 2> "$LOG/$name.err") || say "$name 退出码非 0"
  grep -o 'Trace session: [0-9a-f-]*' "$LOG/$name.out" "$LOG/$name.err" 2>/dev/null | head -1 | awk '{print $3}' > "$LOG/$name.tap-session" || true
  grep '^{' "$LOG/$name.out" > "$LOG/$name.events.jsonl" || true
  echo $((SECONDS - start)) > "$LOG/$name.seconds"
  say "$name 完成，用时 $((SECONDS - start)) 秒"
}

# ---------- 起点：v1 ----------
say "起点：复制 v1（$V1）"
cp -R "$V1" "$APP"
rm -rf "$APP/node_modules" "$APP/dist"
"${GIT[@]}" -C "$APP" init -q -b main
"${GIT[@]}" -C "$APP" add -A && "${GIT[@]}" -C "$APP" commit -qm "v1：起点"
(cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1)
say "npm ci 完成（Node $(node -v)）"

# ---------- 3.1 计划与确认 ----------
cp "$HERE/fixtures/prompt-3.1.txt" "$LOG/3.1.prompt.txt"
codex_step 3.1-plan -s workspace-write "$(cat "$HERE/fixtures/prompt-3.1.txt")"
if [ -n "$(git -C "$APP" status --porcelain)" ]; then
  say "3.1：Codex 没等确认就改了文件，记录为现象，不再发确认"
  echo "edited-before-confirm" > "$LOG/3.1-confirm"
else
  say "3.1：人确认计划，问题都交给 Codex 推荐的做法（代答）"
  echo "confirmed" > "$LOG/3.1-confirm"
  codex_step 3.1-exec resume --last -c sandbox_mode='"workspace-write"' "$(cat "$HERE/fixtures/confirm-3.1.txt")"
fi

# ---------- 检查与提交 ----------
set +e
(cd "$APP" && npm run build > "$LOG/build.log" 2>&1); BUILD=$?
set -e
echo "$BUILD" > "$LOG/build.exit"
"${GIT[@]}" -C "$APP" add -A
git -C "$APP" diff --cached --stat > "$LOG/diffstat.txt"
git -C "$APP" diff --cached > "$LOG/memory-v0.diff"
"${GIT[@]}" -C "$APP" commit -qm "记忆翻牌 v0（预检 A，未经人工评审）" || true
say "build 退出码 $BUILD；diff 见 logs/memory-v0.diff"
say "完成：$RUN"
echo "$RUN"
