#!/usr/bin/env bash
# 第 3 章追赶实验：沿用第 2 章的做法，换成第 3 章的前提清单与确认语。
# 用法：courseware/ch03/materials/catchup/run-catchup.sh <学员起点目录> [运行目录]
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$(cd "$1" && pwd)"; BASE="$(dirname "$SRC")"
REPO="$(cd "$HERE/../../../.." && pwd)"
RUN="${2:-$REPO/lab-runs/ch03-catchup/$(basename "$SRC")-$(date +%H%M%S)}"
mkdir -p "$(dirname "$RUN")"; RUN="$(cd "$(dirname "$RUN")" && pwd)/$(basename "$RUN")"
[ -e "$RUN" ] && { echo "已存在：$RUN" >&2; exit 1; }
APP="$RUN/repo"; LOG="$RUN/logs"; mkdir -p "$LOG"
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }
step() { local name="$1"; shift; local start=$SECONDS
  (cd "$APP" && CLEAN_CODEX_HOME="$RUN/home" CLEAN_CODEX_NO_OPEN=1 "$REPO/tools/clean-codex.sh" --tap -- exec "$@" \
      --json -o "$LOG/$name.answer.md" < /dev/null > "$LOG/$name.out" 2> "$LOG/$name.err") || say "$name 退出码非 0"
  grep '^{' "$LOG/$name.out" > "$LOG/$name.events.jsonl" || true; say "$name 完成，用时 $((SECONDS - start)) 秒"; }
retry() { for i in 1 2; do grep -q '"turn.failed"' "$LOG/$1.events.jsonl" 2>/dev/null || return 0
  say "$1 回合中断（上游错误），第 $i 次续跑"; mv "$LOG/$1.events.jsonl" "$LOG/$1.failed$i.events.jsonl"
  step "$1" resume --last -c sandbox_mode='"workspace-write"' "刚才的回合因为网络错误中断了，请接着完成上一个请求。"; done; }
cp -R "$SRC" "$APP"; (cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1) && say "依赖已安装"
URL="file://$BASE/course-starter.git"; TAG=ch03-start-v1
PROMPT="$(sed -e "s|{URL}|$URL|; s|{TAG}|$TAG|" "$HERE/prompt-ch03.txt")"; printf '%s\n' "$PROMPT" > "$LOG/prompt.txt"
step check -s workspace-write "$PROMPT"; retry check
if [ -n "$(git -C "$APP" status --porcelain)" ]; then say "确认前就改了文件"; else
  step apply resume --last -c sandbox_mode='"workspace-write"' "只做补齐第 3 章前提所必需的改动，可选的建议先不做；我的个人内容、仓库名和已有的决定保持不变。改完告诉我需要我运行哪些命令。"; retry apply; fi
set +e; (cd "$APP" && npm run build > "$LOG/build.log" 2>&1); echo $? > "$LOG/build-exit"; set -e
git -C "$APP" status --porcelain --untracked-files=all > "$LOG/status.txt"; git -C "$APP" diff > "$LOG/diff.txt"
say "完成：$RUN"
