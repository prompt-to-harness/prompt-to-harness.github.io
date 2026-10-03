#!/usr/bin/env bash
# 以学员基线启动 Codex CLI：全新 HOME + 只含 MiniMax provider 的配置，用来模拟学员第一天的环境。工作目录不变（在哪里运行就用哪里）。
# 不读取也不修改你日常的 ~/.codex（账户登录、Skills、插件、MCP 都不会带进来）。
#
# 用法：
#   tools/clean-codex.sh              # 干净环境直接启动 codex
#   tools/clean-codex.sh --tap        # 经 claude-tap 启动，可查看请求
#   tools/clean-codex.sh -- exec "只读：这个目录里有什么文件？"   # -- 之后的参数交给 codex
#
# 环境变量：
#   MINIMAX_API_KEY      MiniMax 的 API 密钥，需要事先 export（例如写进 ~/.zshrc）；脚本不读取任何 Codex 配置文件
#   CLEAN_CODEX_MODEL    模型名，默认 MiniMax-M3.1-Flash-Preview
#   CLEAN_CODEX_DELETE=1 退出后删除本次的 HOME（默认保留，位于 ~/.cache/clean-codex/）
#
# 密钥只通过环境变量传给 Codex，配置文件里没有密钥，可以放心展示。
set -euo pipefail

BASE_URL="https://api.minimax.cn/v1"
MODEL="${CLEAN_CODEX_MODEL:-MiniMax-M3.1-Flash-Preview}"
REAL_HOME="$HOME"

use_tap=0
codex_args=()
while [ $# -gt 0 ]; do
  case "$1" in
    --tap) use_tap=1 ;;
    -h|--help) sed -n '2,17p' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    --) shift; codex_args=("$@"); break ;;
    *) echo "未知参数：$1（把要交给 codex 的参数放在 -- 之后）" >&2; exit 2 ;;
  esac
  shift
done

if [ -z "${MINIMAX_API_KEY:-}" ]; then
  echo "没有找到 MiniMax 密钥：请在 ~/.zshrc 里加 export MINIMAX_API_KEY=\"...\"，然后新开终端" >&2
  exit 1
fi
export MINIMAX_API_KEY

command -v codex >/dev/null || { echo "找不到 codex，请先安装 Codex CLI" >&2; exit 1; }
if [ "$use_tap" = 1 ]; then
  command -v uvx >/dev/null || { echo "--tap 需要先安装 uv（提供 uvx）" >&2; exit 1; }
fi

# 不放在系统临时目录：Codex 拒绝在那里创建它的 PATH 辅助程序，行为会和学员的真实环境不同
SIM_ROOT="$REAL_HOME/.cache/clean-codex"
mkdir -p "$SIM_ROOT"
SIM_HOME="$(mktemp -d "$SIM_ROOT/home.XXXXXX")"
cleanup() {
  ln -sfn "$SIM_HOME" "$SIM_ROOT/latest-home"
  if [ "${CLEAN_CODEX_DELETE:-0}" = 1 ]; then
    rm -rf "$SIM_HOME"
  else
    echo "已保留（可查看 Codex 用到了哪些文件）：" >&2
    echo "  HOME     $SIM_HOME/.codex   （最近一次：$SIM_ROOT/latest-home）" >&2
  fi
}
trap cleanup EXIT

mkdir -p "$SIM_HOME/.codex"
cat > "$SIM_HOME/.codex/config.toml" <<EOF
model = "$MODEL"
model_provider = "minimax"
forced_login_method = "api"

[model_providers.minimax]
name = "MiniMax"
base_url = "$BASE_URL"
env_key = "MINIMAX_API_KEY"
wire_api = "responses"

# 密钥只给 Codex 本身用，不传给它执行的命令（否则模型能用 shell 读到密钥）
[shell_environment_policy]
exclude = ["MINIMAX_API_KEY"]
EOF

export HOME="$SIM_HOME"
unset CODEX_HOME OPENAI_API_KEY OPENAI_BASE_URL

echo "学员视角：HOME=$SIM_HOME  工作目录=$PWD  模型=$MODEL" >&2

if [ "$use_tap" = 1 ]; then
  # 临时 HOME 会让 uv 缓存和 claude-tap 的 trace 目录跟着消失，所以把它们指回真实位置。
  export UV_CACHE_DIR="${UV_CACHE_DIR:-$REAL_HOME/.cache/uv}"
  export XDG_DATA_HOME="${XDG_DATA_HOME:-$REAL_HOME/.local/share}"
  uvx claude-tap --tap-client codex --tap-target "$BASE_URL" -- ${codex_args[@]+"${codex_args[@]}"}
else
  codex ${codex_args[@]+"${codex_args[@]}"}
fi
