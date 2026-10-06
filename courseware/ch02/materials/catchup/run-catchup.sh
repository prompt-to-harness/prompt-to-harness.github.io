#!/usr/bin/env bash
# 追赶实验：学员在自己的仓库里，让 Codex 克隆课程参考起点到临时目录、对照前提清单、确认后补缺。
# 用法：courseware/ch02/materials/catchup/run-catchup.sh <学员起点目录> [运行目录]
#       URL=<参考起点仓库地址> TAG=<标签> …   # 默认用 setup-states.sh 建的本地仓库与 ch02-start-v1
# 需要：MINIMAX_API_KEY、Node/npm、uv。人的部分（确认、安装依赖、检查）由脚本代答并记录。
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
SRC="$(cd "$1" && pwd)"
BASE="$(dirname "$SRC")"
URL="${URL:-file://$BASE/course-starter.git}"
TAG="${TAG:-ch02-start-v1}"
RUN="${2:-$REPO/lab-runs/catchup/$(basename "$SRC")-$(date +%H%M%S)}"
mkdir -p "$(dirname "$RUN")"; RUN="$(cd "$(dirname "$RUN")" && pwd)/$(basename "$RUN")"
[ -e "$RUN" ] && { echo "已存在：$RUN" >&2; exit 1; }
APP="$RUN/repo"; LOG="$RUN/logs"; mkdir -p "$LOG"
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }
codex_step() {
  local name="$1"; shift; local start=$SECONDS
  (cd "$APP" && CLEAN_CODEX_HOME="$RUN/home" CLEAN_CODEX_NO_OPEN=1 "$REPO/tools/clean-codex.sh" --tap -- exec "$@" \
      --json -o "$LOG/$name.answer.md" < /dev/null > "$LOG/$name.out" 2> "$LOG/$name.err") || say "$name 退出码非 0"
  grep '^{' "$LOG/$name.out" > "$LOG/$name.events.jsonl" || true
  say "$name 完成，用时 $((SECONDS - start)) 秒"
}

cp -R "$SRC" "$APP"
[ -f "$APP/package-lock.json" ] && (cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1) && say "学员原有依赖已安装"
PROMPT="$(sed -e "s|{URL}|$URL|; s|{TAG}|$TAG|" "$HERE/prompt-ch02.txt")"
printf '%s\n' "$PROMPT" > "$LOG/prompt.txt"
codex_step check -s workspace-write "$PROMPT"
if [ -n "$(git -C "$APP" status --porcelain)" ]; then
  say "Codex 在确认前就改了文件"; echo edited-before-confirm > "$LOG/confirm"
else
  echo confirmed > "$LOG/confirm"; say "人：确认（代答）"
  codex_step apply resume --last -c sandbox_mode='"workspace-write"' "${CONFIRM:-只做补齐第 2 章前提所必需的改动，可选的建议先不做；我的个人内容和已有的决定保持不变。改完告诉我需要我运行哪些命令。}"
fi

set +e
(cd "$APP" && npm install --no-audit --no-fund > "$LOG/npm-install.log" 2>&1)
(cd "$APP" && npm run build > "$LOG/build.log" 2>&1); BUILD=$?
set -e
(cd "$REPO" && VERIFY_TEXTS="${VERIFY_TEXTS:-}" uv run "$REPO/courseware/ch02/materials/mainline/verify.py" "$APP") > "$LOG/verify.json" 2> "$LOG/verify.err" || true
git -C "$APP" status --porcelain --untracked-files=all > "$LOG/status.txt"
git -C "$APP" diff > "$LOG/diff.txt"
echo "$BUILD" > "$LOG/build-exit"
say "检查：build 退出码 $BUILD"
echo "$RUN"
