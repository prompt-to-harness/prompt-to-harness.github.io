#!/usr/bin/env bash
# 第 3 章追赶实验：沿用第 2 章的做法，换成第 3 章的前提清单与确认语。
# 用法：courseware/ch03/materials/catchup/run-catchup.sh <学员起点目录> [运行目录]
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$(cd "$1" && pwd)"; BASE="$(dirname "$SRC")"
REPO="$(cd "$HERE/../../../.." && pwd)"
source "$REPO/tools/lab-lib.sh"
lab_run_dir "$REPO/lab-runs/ch03-catchup/$(basename "$SRC")-$(date +%H%M%S)" "${2:-}"
cp -R "$SRC" "$APP"; (cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1) && say "依赖已安装"
URL="file://$BASE/course-starter.git"; TAG=ch03-start-v1
PROMPT="$(sed -e "s|{URL}|$URL|; s|{TAG}|$TAG|" "$HERE/prompt-ch03.txt")"; printf '%s\n' "$PROMPT" > "$LOG/prompt.txt"
codex_step check -s workspace-write "$PROMPT"
if [ -n "$(git -C "$APP" status --porcelain)" ]; then say "确认前就改了文件"; else
  codex_step apply resume --last -c sandbox_mode='"workspace-write"' "只做补齐第 3 章前提所必需的改动，可选的建议先不做；我的个人内容、仓库名和已有的决定保持不变。改完告诉我需要我运行哪些命令。"; fi
set +e; (cd "$APP" && npm run build > "$LOG/build.log" 2>&1); echo $? > "$LOG/build-exit"; set -e
git -C "$APP" status --porcelain --untracked-files=all > "$LOG/status.txt"; git -C "$APP" diff > "$LOG/diff.txt"
say "完成：$RUN"
