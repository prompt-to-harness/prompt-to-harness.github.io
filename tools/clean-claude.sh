#!/usr/bin/env bash
# 以干净环境启动 Claude Code：全新 HOME + 只指向 MiniMax（Anthropic 兼容接口）的设置，用来和 clean-codex.sh 做同条件对照。工作目录不变。
# 不读取也不修改你日常的 ~/.claude 与 ~/.claude.json（账户登录、CLAUDE.md、auto memory、Skills、插件、MCP 都不会带进来）。
# 系统级托管设置（macOS 的 /Library/Application Support/ClaudeCode/）不在 HOME 下，本脚本隔离不了。
#
# 用法：
#   tools/clean-claude.sh              # 干净环境直接启动 claude
#   tools/clean-claude.sh --tap        # 经 claude-tap 启动，可查看请求
#   tools/clean-claude.sh -- -p "只读：这个目录里有什么文件？"   # -- 之后的参数交给 claude
#
# 环境变量：
#   MINIMAX_API_KEY       MiniMax 的 API 密钥，需要事先 export；脚本不读取任何 Claude 配置文件
#   CLEAN_CLAUDE_MODEL    模型名，默认 MiniMax-M3.1-Flash（主模型、子代理与后台小任务都用它）
#   CLEAN_CLAUDE_DELETE=1 退出后删除本次的 HOME（默认保留，位于 ~/.cache/clean-claude/）
#   CLEAN_CLAUDE_HOME     固定用这个目录作 HOME（不存在就新建，不会删除），多次运行共享会话记录与 auto memory，
#                         例如之后 claude --continue；不设时每次运行都用一个新的 HOME
#   CLEAN_CLAUDE_KEEP_CONFIG=1 配合 CLEAN_CLAUDE_HOME：已有设置时不重写，保留 Claude Code 自己写入的内容
#   CLEAN_CLAUDE_NO_OPEN=1 配合 --tap：不自动在浏览器打开请求面板（批量运行用），记录照常保存
#
# 密钥只通过环境变量传给 Claude Code，设置文件里没有密钥，可以放心展示。
set -euo pipefail

BASE_URL="https://api.minimax.cn/anthropic"
MODEL="${CLEAN_CLAUDE_MODEL:-MiniMax-M3.1-Flash}"
REAL_HOME="$HOME"
# 从另一个 Claude Code 会话里启动时（例如讲师让 agent 跑实验），会继承它的 CLAUDE_CODE_* 变量，
# 其中 CLAUDE_CODE_USER_EMAIL 会被 Claude Code 写进请求、发给模型服务（2026-10-21 实测）；先全部清掉
for v in $(env | grep -oE '^(CLAUDE_CODE_[A-Za-z0-9_]*|CLAUDECODE)=' | tr -d =); do unset "$v"; done

use_tap=0
claude_args=()
while [ $# -gt 0 ]; do
  case "$1" in
    --tap) use_tap=1 ;;
    -h|--help) awk 'NR>1 && /^#/ {sub(/^# ?/,""); print; next} NR>1 {exit}' "$0"; exit 0 ;;
    --) shift; claude_args=("$@"); break ;;
    *) echo "未知参数：$1（把要交给 claude 的参数放在 -- 之后）" >&2; exit 2 ;;
  esac
  shift
done

if [ -z "${MINIMAX_API_KEY:-}" ]; then
  echo "没有找到 MiniMax 密钥：请在 ~/.zshenv 里加 export MINIMAX_API_KEY=\"...\"，然后新开终端" >&2
  exit 1
fi

command -v claude >/dev/null || { echo "找不到 claude，请先安装 Claude Code" >&2; exit 1; }
if [ "$use_tap" = 1 ]; then
  command -v uvx >/dev/null || { echo "--tap 需要先安装 uv（提供 uvx）" >&2; exit 1; }
fi

# 与 clean-codex.sh 一致：不放在系统临时目录
SIM_ROOT="$REAL_HOME/.cache/clean-claude"
mkdir -p "$SIM_ROOT"
if [ -n "${CLEAN_CLAUDE_HOME:-}" ]; then
  mkdir -p "$CLEAN_CLAUDE_HOME"
  SIM_HOME="$(cd "$CLEAN_CLAUDE_HOME" && pwd)"
else
  SIM_HOME="$(mktemp -d "$SIM_ROOT/home.XXXXXX")"
fi
cleanup() {
  ln -sfn "$SIM_HOME" "$SIM_ROOT/latest-home"
  if [ "${CLEAN_CLAUDE_DELETE:-0}" = 1 ] && [ -z "${CLEAN_CLAUDE_HOME:-}" ]; then
    rm -rf "$SIM_HOME"
  else
    echo "已保留（可查看 Claude Code 用到了哪些文件）：" >&2
    echo "  HOME     $SIM_HOME/.claude   （最近一次：$SIM_ROOT/latest-home）" >&2
  fi
}
trap cleanup EXIT

mkdir -p "$SIM_HOME/.claude"
if [ "${CLEAN_CLAUDE_KEEP_CONFIG:-0}" = 1 ] && [ -f "$SIM_HOME/.claude/settings.json" ]; then
  echo "保留已有设置：$SIM_HOME/.claude/settings.json" >&2
else
# 只写非机密设置。auto memory 保持官方默认（本地会话开启），对照实验时用 /memory 或项目设置关闭。
cat > "$SIM_HOME/.claude/settings.json" <<EOF
{
  "model": "$MODEL",
  "env": {
    "ANTHROPIC_MODEL": "$MODEL",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "$MODEL",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "$MODEL",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "$MODEL",
    "CLAUDE_CODE_SUBAGENT_MODEL": "$MODEL",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "API_TIMEOUT_MS": "600000"
  }
}
EOF
fi
# 跳过首次启动的主题与登录引导（这些是界面步骤，不影响模型行为）；已有文件不覆盖
[ -f "$SIM_HOME/.claude.json" ] || echo '{"hasCompletedOnboarding": true}' > "$SIM_HOME/.claude.json"

# 密钥：Claude Code 只认 ANTHROPIC_AUTH_TOKEN（Bearer），所以改名传入；MINIMAX_API_KEY 这个名字不再保留
export ANTHROPIC_AUTH_TOKEN="$MINIMAX_API_KEY"
# 接口地址走进程环境而不写进 settings.json：settings 里的 env 会盖过 claude-tap 注入的代理地址
export ANTHROPIC_BASE_URL="$BASE_URL"
# 密钥只给 Claude Code 本身用，从它启动的 Bash、hook、MCP 子进程环境里去掉（对应 clean-codex.sh 的 shell_environment_policy）
export CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1
# 清掉本客户端的其他凭据，以及 Codex 的变量（与 clean-codex.sh 对称），避免日常 shell 里的串进来
unset MINIMAX_API_KEY ANTHROPIC_API_KEY CLAUDE_CONFIG_DIR CLAUDE_CODE_OAUTH_TOKEN
unset OPENAI_API_KEY OPENAI_BASE_URL CODEX_HOME
export HOME="$SIM_HOME"

echo "干净 Claude Code：HOME=$SIM_HOME  工作目录=$PWD  模型=$MODEL" >&2

if [ "$use_tap" = 1 ]; then
  export UV_CACHE_DIR="${UV_CACHE_DIR:-$REAL_HOME/.cache/uv}"
  export XDG_DATA_HOME="${XDG_DATA_HOME:-$REAL_HOME/.local/share}"
  tap_opts=(); [ "${CLEAN_CLAUDE_NO_OPEN:-0}" = 1 ] && tap_opts=(--tap-no-open)
  uvx claude-tap@0.1.146 --tap-client claude --tap-target "$BASE_URL" ${tap_opts[@]+"${tap_opts[@]}"} -- ${claude_args[@]+"${claude_args[@]}"}
else
  claude ${claude_args[@]+"${claude_args[@]}"}
fi
