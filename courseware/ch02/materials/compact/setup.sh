#!/usr/bin/env bash
# 建立 2.2 压缩实验的起点：从第 1 章参考快照取首页源码与决定记录，放进一个新的 Git 仓库。
# 用法：courseware/ch02/materials/compact/setup.sh [目标目录]   # 默认 ~/compact-lab
# 不需要 npm install：实验只让 Codex 读文件、跑 grep，不构建页面。
set -euo pipefail

REPO="$(cd "$(dirname "$0")/../../../.." && pwd)"
SRC="$REPO/starters/personal-homepage/ch01-complete"
DEST="${1:-$HOME/compact-lab}"

if [ -e "$DEST" ]; then
  echo "目标已存在：$DEST（换一个目录，或确认不需要后自行删除）" >&2
  exit 1
fi

mkdir -p "$DEST/src"
cp "$SRC/src/App.tsx" "$SRC/src/index.css" "$DEST/src/"
cp "$SRC/PROMPT_V1.md" "$SRC/package.json" "$DEST/"
git -C "$DEST" init -q
git -C "$DEST" add .
git -C "$DEST" -c user.name=lab -c user.email=lab@example.invalid commit -q -m "压缩实验起点（来自 ch01-complete）"
echo "已建立：$DEST"
echo "下一步：cd \"$DEST\" && \"$REPO/tools/clean-codex.sh\" --tap"
