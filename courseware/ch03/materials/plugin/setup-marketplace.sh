#!/usr/bin/env bash
# 第 3 章预检 C：为 API key 登录（含课程基线 clean-codex.sh / MiniMax）准备一个只含 Game Studio 的本地插件市场。
# 用法：courseware/ch03/materials/plugin/setup-marketplace.sh <目录> [openai/plugins 提交]
# 之后：CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=<home> tools/clean-codex.sh -- plugin marketplace add <目录>
#       CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=<home> tools/clean-codex.sh -- plugin add game-studio@course-lab
#
# 为什么需要：API key 登录时 Codex 读 openai/plugins 的 .agents/plugins/api_marketplace.json（子模块源码
# core-plugins/src/manager.rs target_curated_marketplace、startup_sync.rs），该提交里没有这个文件，
# “OpenAI Curated”列表为空，`plugin add game-studio@openai-curated` 报找不到。
set -euo pipefail
DIR="${1:?用法：setup-marketplace.sh <目录> [提交]}"
SHA="${2:-82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8}"   # 2026-10-06 Codex 启动时同步到的版本
[ -e "$DIR" ] && { echo "目录已存在：$DIR" >&2; exit 1; }
git clone -q --filter=blob:none --no-checkout https://github.com/openai/plugins.git "$DIR/upstream"
git -C "$DIR/upstream" sparse-checkout set plugins/game-studio
git -C "$DIR/upstream" checkout -q "$SHA"
mkdir -p "$DIR/.agents/plugins" "$DIR/plugins"
cp -R "$DIR/upstream/plugins/game-studio" "$DIR/plugins/"
cat > "$DIR/.agents/plugins/marketplace.json" <<JSON
{"name": "course-lab",
 "interface": {"displayName": "Course lab: Game Studio @ ${SHA:0:7}"},
 "plugins": [{"name": "game-studio", "source": {"source": "local", "path": "./plugins/game-studio"},
              "policy": {"installation": "AVAILABLE", "authentication": "ON_INSTALL"}, "category": "Coding"}]}
JSON
echo "已准备：$DIR（openai/plugins $SHA 的 plugins/game-studio）"
ls "$DIR/plugins/game-studio/skills"
