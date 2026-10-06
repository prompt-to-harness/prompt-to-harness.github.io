#!/usr/bin/env bash
# 从 course-starter 出发，按第 1 章课件真实跑一遍 1.1 → 1.4 → 1.5，得到首页 v0 候选与全部记录。可重复运行，每次一个新目录。
# 用法：courseware/ch01/materials/mainline/run-v0.sh [运行目录]   # 默认 <本仓库>/lab-runs/mainline/v0-<时间>
#       STARTER=<course-starter 检出目录> STARTER_REF=<提交> …/run-v0.sh
#       默认用本仓库下的 course-starter/（已被 git 忽略）的 main；10-03 排练用的是 2106e575f9d0。
# 需要：MINIMAX_API_KEY、Node/npm、uv。不发布，不推送。
#
# Codex 的每一步都是真实运行（tools/clean-codex.sh，隔离 HOME + MiniMax）；Prompt 从课件 lesson.js 读取。
# 人的部分按课件示例代答并在记录中标明：确认计划、1.4 p22-answers 的四问四答、人写的 PROMPT_V1.md（取自
# 10-03 排练快照）、1.5 由人安装依赖与构建、检查（verify.py）。检查不通过时把证据交回 Codex 修，最多 FIX_ROUNDS 轮。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
STARTER="${STARTER:-$REPO/course-starter}"
STARTER_REF="${STARTER_REF:-main}"
FIX_ROUNDS="${FIX_ROUNDS:-2}"
VERIFY="$REPO/courseware/ch02/materials/mainline/verify.py"
RUN="${1:-$REPO/lab-runs/mainline/v0-$(date +%Y%m%d-%H%M%S)}"
mkdir -p "$(dirname "$RUN")"
RUN="$(cd "$(dirname "$RUN")" && pwd)/$(basename "$RUN")"
APP="$RUN/repo"; LOG="$RUN/logs"
[ -e "$RUN" ] && { echo "运行目录已存在：$RUN" >&2; exit 1; }
mkdir -p "$LOG" "$APP"
GIT=(git -c user.name="讲师排练" -c user.email=rehearsal@example.invalid)
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }

prompt_of() {  # 课件中某页的 prompt 字段
  python3 - "$REPO/courseware/ch01/lessons/$1/lesson.js" "$2" <<'EOF'
import json, sys
s = open(sys.argv[1]).read()
scenes = json.loads(s[s.index('{'):s.rstrip().rstrip(';').rindex('}') + 1])['scenes']
print(next(x for x in scenes if x['id'] == sys.argv[2])['prompt'])
EOF
}

codex_step() {  # codex_step <名字> <exec 参数…>
  local name="$1"; shift
  local start=$SECONDS
  (cd "$APP" && CLEAN_CODEX_HOME="$RUN/home" CLEAN_CODEX_NO_OPEN=1 "$REPO/tools/clean-codex.sh" --tap -- exec "$@" \
      --json -o "$LOG/$name.answer.md" < /dev/null > "$LOG/$name.out" 2> "$LOG/$name.err") || say "$name 退出码非 0"
  grep -o 'Trace session: [0-9a-f-]*' "$LOG/$name.out" "$LOG/$name.err" 2>/dev/null | head -1 | awk '{print $3}' > "$LOG/$name.tap-session" || true
  grep '^{' "$LOG/$name.out" > "$LOG/$name.events.jsonl" || true
  say "$name 完成，用时 $((SECONDS - start)) 秒"
}
changed() { git -C "$APP" status --porcelain; }
commit_all() { "${GIT[@]}" -C "$APP" add -A && "${GIT[@]}" -C "$APP" commit -qm "$1"; }

# ---------- 起点：course-starter ----------
REF="$(git -C "$STARTER" rev-parse "$STARTER_REF")"
git -C "$STARTER" archive "$REF" | tar -x -C "$APP"
"${GIT[@]}" -C "$APP" init -q -b main && commit_all "起点：course-starter $REF"
echo "$REF" > "$LOG/starter-ref"
say "起点：course-starter $REF"

# ---------- 1.1 欢迎语 ----------
WELCOME="你好，欢迎来到 Vibe Coding 课堂！"
codex_step 1.1-p04-plan -s workspace-write "$(prompt_of 01-environment p04)"
if [ -z "$(changed)" ]; then
  say "1.1：人看过计划，确认（代答）"
  codex_step 1.1-p04-confirm resume --last -c sandbox_mode='"workspace-write"' "确认，按计划修改。"
fi
for round in $(seq 1 "$FIX_ROUNDS"); do
  ACTUAL="$(python3 -c 'import re,sys; m=re.search(r"id=\"welcome-message\"[^>]*>(.*?)</", open(sys.argv[1]).read(), re.S); print(m.group(1).strip() if m else "")' "$APP/setup-check/index.html")"
  [ "$ACTUAL" = "$WELCOME" ] && break
  say "1.1：复验不一致（“$ACTUAL”），交回修正第 $round 轮"
  codex_step "1.1-fix$round" resume --last -c sandbox_mode='"workspace-write"' "复验不一致：页面显示“$ACTUAL”；任务要求是“$WELCOME”。请只改这一处，不改其余内容、结构或样式。修正后逐字核对，并检查完整 Diff。"
done
git -C "$APP" diff --stat > "$LOG/1.1-diffstat.txt"
commit_all "1.1：课程欢迎语"
say "1.1：已提交，改动 $(tr '\n' ' ' < "$LOG/1.1-diffstat.txt")"

# ---------- 1.4 澄清需求 ----------
codex_step 1.4-p22 -s read-only "$(prompt_of 04-prompt p22)"
ANSWERS="回答你的问题（其余没问到的，按你建议的默认值处理，并在计划里标明）：
1. 姓名与简介：示例同学；正在学习 AI 协作开发。
2. 项目区展示：学习笔记：记录课程练习。
3. 按钮：“查看项目”跳到本页项目区；项目卡不跳转，不编造 URL。
4. 可改文件：React + TypeScript + Vite 必需的文件，具体清单请列出，等我确认。
请整理成明确的需求、小计划、预计文件清单和验收方法。仍然只读，不修改文件。"
codex_step 1.4-p22-answers resume --last -c sandbox_mode='"read-only"' "$ANSWERS"
cp "$REPO/starters/personal-homepage/ch01-complete/PROMPT_V1.md" "$APP/PROMPT_V1.md"
commit_all "1.4：PROMPT_V1（人写，取自 10-03 排练）"
say "1.4：人写下 PROMPT_V1.md（代答，取自排练快照）"

# ---------- 1.5 完成首页 ----------
codex_step 1.5-p23-plan -s workspace-write "$(prompt_of 04-prompt p23)"
if [ -z "$(changed)" ]; then
  say "1.5：人看过计划，确认；依赖由人安装（代答）"
  codex_step 1.5-p23-confirm resume --last -c sandbox_mode='"workspace-write"' "确认，按计划执行。沙箱里不能联网，依赖由我来安装：你只写文件，写完告诉我要运行哪些命令，不要自己安装。"
fi

check_v0() {  # 人装依赖、构建、检查；结果写入 logs/1.5-check<n>.json，返回是否通过
  local n="$1"
  (cd "$APP" && npm install --no-audit --no-fund > "$LOG/1.5-npm-install$n.log" 2>&1) || true
  local t=$SECONDS b=0
  (cd "$APP" && npm run build > "$LOG/1.5-build$n.log" 2>&1) || b=$?
  echo "$((SECONDS - t))" > "$LOG/1.5-build$n.seconds"
  (cd "$REPO" && VERIFY_TEXTS="示例同学|正在学习 AI 协作开发。|学习笔记|记录课程练习" uv run "$VERIFY" "$APP") > "$LOG/1.5-verify$n.json" 2> "$LOG/1.5-verify$n.err" || true
  python3 - "$LOG" "$n" "$b" "$APP" <<'EOF'
import json, sys
from pathlib import Path
log, n, build, app = Path(sys.argv[1]), sys.argv[2], int(sys.argv[3]), Path(sys.argv[4])
try:
    v = json.loads((log / f"1.5-verify{n}.json").read_text())
except Exception:
    v = {"viewports": {}}
vp = v["viewports"]
wide = vp.get("1440x900", {})
checks = {
    "build 成功": build == 0,
    "首屏与项目区文字都在": bool(vp) and all(all(x.get("texts_found", {}).values()) for x in vp.values()),
    "“查看项目”跳到 #projects": any(l["text"] == "查看项目" and l["href"] == "#projects" for l in wide.get("links", [])),
    "三种视口无横向溢出": bool(vp) and not any(x["horizontal_overflow"] for x in vp.values()),
    "1440 下内容宽度不小于 600px": wide.get("contentWidth", 0) >= 600,
    "控制台没有错误": not v.get("console_errors"),
    "产物不含环境页": not (app / "dist" / "setup-check").exists(),
}
evidence = {k: ok for k, ok in checks.items()}
evidence["1440 内容宽度"] = wide.get("contentWidth")
(log / f"1.5-check{n}.json").write_text(json.dumps({"checks": checks, "evidence": evidence}, ensure_ascii=False, indent=1))
failed = [k for k, ok in checks.items() if not ok]
print("；".join(f"{k}（实测：{evidence['1440 内容宽度']}px）" if k.startswith("1440") else k for k in failed))
EOF
}

FAILED="$(check_v0 0)"
for round in $(seq 1 "$FIX_ROUNDS"); do
  [ -z "$FAILED" ] && break
  say "1.5：复验未通过：$FAILED；把证据交回修正第 $round 轮"
  codex_step "1.5-fix$round" resume --last -c sandbox_mode='"workspace-write"' "我装好依赖、构建并在浏览器里复验，以下没有通过：$FAILED。请先说明原因，再只改相关的地方；改完告诉我怎样复验。"
  FAILED="$(check_v0 "$round")"
done
git -C "$APP" status --porcelain > "$LOG/1.5-status.txt"
git -C "$APP" diff --stat HEAD > "$LOG/1.5-diffstat.txt" || true
if [ -z "$FAILED" ]; then
  commit_all "1.5：首页 v0"
  "${GIT[@]}" -C "$APP" tag ch01-prompt-baseline
  say "1.5：检查全部通过，已提交并打 ch01-prompt-baseline"
else
  say "1.5：$FIX_ROUNDS 轮后仍未通过：$FAILED；停在提交之前，留给人判断"
fi
say "完成：$RUN"
echo "$RUN"
