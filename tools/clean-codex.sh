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
#   MINIMAX_API_KEY      MiniMax 的 API 密钥，需要事先 export；脚本不读取任何 Codex 配置文件
#   CLEAN_CODEX_MODEL    模型名，默认 MiniMax-M3.1-Flash
#   CLEAN_CODEX_DELETE=1 退出后删除本次的 HOME（默认保留，位于 ~/.cache/clean-codex/）
#   CLEAN_CODEX_HOME     固定用这个目录作 HOME（不存在就新建，不会删除），多次运行共享会话记录，
#                        例如在另一个目录 codex exec resume；不设时每次运行都用一个新的 HOME
#   CLEAN_CODEX_KEEP_CONFIG=1 配合 CLEAN_CODEX_HOME：已有 config.toml 时不重写，保留 Codex 自己写入的设置
#                        （如 plugin marketplace add、插件开关）；不设时每次启动都重写为只含 MiniMax 的配置
#   CLEAN_CODEX_CATALOG  默认 1：写入 MiniMax 官方的模型能力目录（tools/codex-model-catalog.json）和 512K 窗口；
#                        设 0 则不写，Codex 找不到模型元数据，改用内置兜底配置（会提示 "Model metadata ... not found"）。
#                        两者的请求不同：系统指令、工具集、reasoning 参数都变（第 2 章配套实验对比过）
#   CLEAN_CODEX_NO_OPEN=1 配合 --tap：不自动在浏览器打开请求面板（批量运行用），记录照常保存
#   CLEAN_CODEX_AUTH=chatgpt 讲师实验用：不配 MiniMax，改用你自己的 ChatGPT 登录。干净 HOME 里的 auth.json
#                        是指向 ~/.codex/auth.json 的软链接，不是副本：ChatGPT 的刷新令牌会轮换，副本先刷新会让
#                        日常那份失效；Codex（0.163 / main，2026-10-20 核对 login/src/auth/storage.rs）原地改写
#                        auth.json，刷新后的令牌写回同一个文件。只适用于文件方式存登录（不是 keyring）。
#                        Skills、插件、MCP 和其他配置仍不带进来；CLEAN_CODEX_MODEL 不设时用 Codex 的默认模型。
#                        暂不支持 --tap（未核实 claude-tap 能否代理 ChatGPT 登录的流量）
#   CLEAN_CODEX_GH=1     让 Codex 能用你本机已登录的 GitHub CLI（2.4 设置 Pages 来源用）。干净 HOME 里读不到
#                        ~/.config/gh 和 macOS 钥匙串，gh 会显示未登录；打开后用 GH_CONFIG_DIR 指回 ~/.config/gh，
#                        并把干净 HOME 的 Library/Keychains 软链接到真实位置（2026-10-21 在交互界面实测：Codex 申请到沙箱外
#                        运行 gh api，批准后用上了登录；不开时 Codex 会自己发起 gh auth login，要人拒绝）。
#                        只影响 gh 和其他读钥匙串的程序，不带进 Codex 的配置、Skills 或插件
#
# 密钥只通过环境变量传给 Codex，配置文件里没有密钥，可以放心展示。
set -euo pipefail

BASE_URL="https://api.minimax.cn/v1"
MODEL="${CLEAN_CODEX_MODEL:-MiniMax-M3.1-Flash}"
REAL_HOME="$HOME"

use_tap=0
codex_args=()
while [ $# -gt 0 ]; do
  case "$1" in
    --tap) use_tap=1 ;;
    -h|--help) awk 'NR>1 && /^#/ {sub(/^# ?/,""); print; next} NR>1 {exit}' "$0"; exit 0 ;;
    --) shift; codex_args=("$@"); break ;;
    *) echo "未知参数：$1（把要交给 codex 的参数放在 -- 之后）" >&2; exit 2 ;;
  esac
  shift
done

AUTH="${CLEAN_CODEX_AUTH:-minimax}"
case "$AUTH" in
  minimax)
    if [ -z "${MINIMAX_API_KEY:-}" ]; then
      echo "没有找到 MiniMax 密钥：请在 ~/.zshenv 里加 export MINIMAX_API_KEY=\"...\"，然后新开终端" >&2
      exit 1
    fi ;;
  chatgpt)
    if [ ! -f "$REAL_HOME/.codex/auth.json" ]; then
      echo "没有找到 ~/.codex/auth.json：先在日常环境运行 codex login（文件方式存登录）" >&2
      exit 1
    fi
    if [ "$use_tap" = 1 ]; then
      echo "CLEAN_CODEX_AUTH=chatgpt 暂不支持 --tap" >&2
      exit 2
    fi ;;
  *) echo "CLEAN_CODEX_AUTH 只能是 minimax 或 chatgpt：$AUTH" >&2; exit 2 ;;
esac

command -v codex >/dev/null || { echo "找不到 codex，请先安装 Codex CLI" >&2; exit 1; }
if [ "$use_tap" = 1 ]; then
  command -v uvx >/dev/null || { echo "--tap 需要先安装 uv（提供 uvx）" >&2; exit 1; }
fi

# 不放在系统临时目录：Codex 拒绝在那里创建它的 PATH 辅助程序，行为会和学员的真实环境不同
SIM_ROOT="$REAL_HOME/.cache/clean-codex"
mkdir -p "$SIM_ROOT"
if [ -n "${CLEAN_CODEX_HOME:-}" ]; then
  mkdir -p "$CLEAN_CODEX_HOME"
  SIM_HOME="$(cd "$CLEAN_CODEX_HOME" && pwd)"
else
  SIM_HOME="$(mktemp -d "$SIM_ROOT/home.XXXXXX")"
fi
cleanup() {
  ln -sfn "$SIM_HOME" "$SIM_ROOT/latest-home"
  if [ "${CLEAN_CODEX_DELETE:-0}" = 1 ] && [ -z "${CLEAN_CODEX_HOME:-}" ]; then
    rm -rf "$SIM_HOME"
  else
    echo "已保留（可查看 Codex 用到了哪些文件）：" >&2
    echo "  HOME     $SIM_HOME/.codex   （最近一次：$SIM_ROOT/latest-home）" >&2
  fi
}
trap cleanup EXIT

# 模型能力目录：没有它，Codex 查不到 MiniMax 模型的元数据，会用兜底配置并警告 "Model metadata ... not found"。
# 内容照 MiniMax 官方文档「配置模型能力目录（可选）」：https://platform.minimax.cn/docs/m-plan/codex
mkdir -p "$SIM_HOME/.codex"
# 同一个 CLEAN_CODEX_HOME 先后用两种模式时，MiniMax 模式不能带着讲师的登录
if [ -L "$SIM_HOME/.codex/auth.json" ]; then rm "$SIM_HOME/.codex/auth.json"; fi
CATALOG_LINES=""
if [ "${CLEAN_CODEX_CATALOG:-1}" = 1 ]; then
  mkdir -p "$SIM_HOME/.codex/model-catalogs"
  cp "$(dirname "$0")/codex-model-catalog.json" "$SIM_HOME/.codex/model-catalogs/custom-catalog.json"
  CATALOG_LINES="model_context_window = 524288
model_catalog_json = \"$SIM_HOME/.codex/model-catalogs/custom-catalog.json\""
fi
if [ "${CLEAN_CODEX_KEEP_CONFIG:-0}" = 1 ] && [ -f "$SIM_HOME/.codex/config.toml" ]; then
  echo "保留已有配置：$SIM_HOME/.codex/config.toml" >&2
elif [ "$AUTH" = chatgpt ]; then
  {
    [ -n "${CLEAN_CODEX_MODEL:-}" ] && echo "model = \"$CLEAN_CODEX_MODEL\""
    echo 'forced_login_method = "chatgpt"'
  } > "$SIM_HOME/.codex/config.toml"
else
cat > "$SIM_HOME/.codex/config.toml" <<EOF
model = "$MODEL"
model_provider = "minimax"
$CATALOG_LINES
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
fi

# 密钥：Codex 按 config.toml 的 env_key 读 MINIMAX_API_KEY（与学员配置一致），这里保持原名不动，
# 并在 shell_environment_policy 里排除，不传给它执行的命令。
# 清掉本客户端的其他凭据，以及 Claude Code 的变量（与 clean-claude.sh 对称），避免日常 shell 里的串进来
unset CODEX_HOME OPENAI_API_KEY OPENAI_BASE_URL
unset ANTHROPIC_API_KEY ANTHROPIC_AUTH_TOKEN ANTHROPIC_BASE_URL CLAUDE_CONFIG_DIR CLAUDE_CODE_OAUTH_TOKEN
if [ "$AUTH" = chatgpt ]; then
  unset MINIMAX_API_KEY
  ln -sfn "$REAL_HOME/.codex/auth.json" "$SIM_HOME/.codex/auth.json"
  MODEL="${CLEAN_CODEX_MODEL:-Codex 默认}"
else
  export MINIMAX_API_KEY
fi
if [ "${CLEAN_CODEX_GH:-0}" = 1 ]; then
  command -v gh >/dev/null || { echo "CLEAN_CODEX_GH=1 需要先安装 GitHub CLI（gh）" >&2; exit 1; }
  export GH_CONFIG_DIR="${GH_CONFIG_DIR:-$REAL_HOME/.config/gh}"
  # gh 把令牌存在钥匙串里，按 HOME 找 ~/Library/Keychains
  if [ -d "$REAL_HOME/Library/Keychains" ] && [ ! -e "$SIM_HOME/Library/Keychains" ]; then
    mkdir -p "$SIM_HOME/Library"
    ln -s "$REAL_HOME/Library/Keychains" "$SIM_HOME/Library/Keychains"
  fi
fi
export HOME="$SIM_HOME"

echo "学员视角：HOME=$SIM_HOME  工作目录=$PWD  模型=$MODEL  登录=$AUTH" >&2

if [ "$use_tap" = 1 ]; then
  # claude-tap 固定版本（2026-10-20 讲师决定：它经手 API 密钥，不跟随最新版）
  # 临时 HOME 会让 uv 缓存和 claude-tap 的 trace 目录跟着消失，所以把它们指回真实位置。
  export UV_CACHE_DIR="${UV_CACHE_DIR:-$REAL_HOME/.cache/uv}"
  export XDG_DATA_HOME="${XDG_DATA_HOME:-$REAL_HOME/.local/share}"
  tap_opts=(); [ "${CLEAN_CODEX_NO_OPEN:-0}" = 1 ] && tap_opts=(--tap-no-open)
  uvx claude-tap@0.1.146 --tap-client codex --tap-target "$BASE_URL" ${tap_opts[@]+"${tap_opts[@]}"} -- ${codex_args[@]+"${codex_args[@]}"}
else
  codex ${codex_args[@]+"${codex_args[@]}"}
fi
