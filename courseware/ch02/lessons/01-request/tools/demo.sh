#!/bin/sh
# Portable preparation and launch entry for the chapter 2 request demonstration.
set -eu

demo_root=${CH02_DEMO_ROOT:-"$HOME/course-demos"}
project="$demo_root/personal-homepage"
# 会话名：Codex 0.163.0 的会话没有名字时，每条用户消息完成后都会另发一次起标题的请求，且没有配置项能关；
# 启动时的初始输入会当普通消息发出，不执行 /rename，所以只能进入后手动输入（C2-99）
session_name=${CH02_SESSION_NAME:-ch02-demo}
snapshot=8e9a323174411a011f87e230450b9115d09b7dea
# 2.2 起各节从快照分支起跑（C2-104），例如 CH02_START=ch02/2.2-done-20261024；不设时是第 2 章起点 ch02-start-v1
start_ref=${CH02_START:-ch02-start-v1}
# 快照分支推到 course-starter 之前，可以用 CH02_SOURCE_URL 指向本机的快照仓库
source_url=${CH02_SOURCE_URL:-https://github.com/prompt-to-harness/course-starter.git}
self=$(CDPATH= cd "$(dirname "$0")" && pwd)/$(basename "$0")
# 课程环境按项目目录自动选（在项目外面，C2-110）；AGENT_LAB_HOME 仍可手动指定。由 agent-lab 自己算，保证和启动时用的是同一个目录
course_env() { agent-lab home "$project"; }

fail() { printf '%s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || fail "缺少命令：$1"; }
need_agent_lab() {
    command -v agent-lab >/dev/null 2>&1 || fail '缺少 agent-lab：按 2.1 p06-tap“使用课程独立环境”第 2 步安装（wheel，几秒钟）'
}
check_project() {
    need git
    [ -d "$project/.git" ] || fail "请先运行：sh demo.sh prepare"
    actual=$(git -C "$project" rev-parse HEAD)
    if [ -n "${CH02_START:-}" ]; then
        snapshot=$(git -C "$project" rev-parse --verify -q "origin/$start_ref^{commit}" || git -C "$project" rev-parse --verify -q "$start_ref^{commit}") \
            || fail "项目里找不到起点 ${start_ref}；请先用同一个 CH02_START 运行 prepare"
    fi
    [ "$actual" = "$snapshot" ] || fail "项目已离开录制起点 ${start_ref}：${actual}；不会自动重置。可用 CH02_DEMO_ROOT 另选目录。"
    [ -z "$(git -C "$project" status --porcelain)" ] || fail '项目存在未提交或未跟踪的改动；请保存现有工作并另选演示目录，不会自动清理。'
}
audit() {
    check_project
    current=$(CDPATH= cd "$project" && pwd -P)
    while :; do
        for name in AGENTS.md AGENTS.override.md; do
            [ -e "$current/$name" ] || continue
            # 快照里已经提交的项目规则是这一节的起点，保留；其余位置的规则仍然停下
            if [ -n "${CH02_START:-}" ] && [ "$current" = "$(CDPATH= cd "$project" && pwd -P)" ] \
                && git -C "$project" ls-files --error-unmatch "$name" >/dev/null 2>&1; then
                printf '项目自带规则（快照已提交）：%s\n' "$current/$name"
                continue
            fi
            fail "发现会影响实验的规则：${current}/${name}；请核对或另选演示目录，不会删除。"
        done
        [ ! -e "$current/.agents/skills" ] || fail "发现项目/上级 Skills：${current}/.agents/skills；请核对或另选演示目录。"
        [ "$current" != / ] || break
        current=$(dirname "$current")
    done
    need_agent_lab
    env_dir=$(course_env)
    for name in AGENTS.md AGENTS.override.md; do
        [ ! -e "$env_dir/.codex/$name" ] || fail "课程环境存在规则：$env_dir/.codex/$name"
    done
    for rule in "$env_dir/.codex/rules/"*; do
        [ ! -e "$rule" ] || fail "课程环境已保存批准规则：${rule}；请换一个项目目录（record 换标签），或用 AGENT_LAB_HOME 另选空目录。"
    done
    printf '起点：%s（%s）\n项目：%s\n课程环境：%s\n规则检查通过；实际加载内容仍以请求为准\n' "$start_ref" "$snapshot" "$project" "$env_dir"
}

prepare() {
    need git; need node; need npm
    mkdir -p "$demo_root"
    if [ ! -e "$project" ]; then
        git clone --branch "$start_ref" --single-branch "$source_url" "$project"
        git -C "$project" switch -c codex/ch02-recording
    fi
    audit
    printf 'Node：%s；npm：%s\n' "$(node --version)" "$(npm --version)"
    printf '快照 .nvmrc 声明 Node 22.19.0；本命令使用当前 Node，不自动安装或切换版本\n'
    (cd "$project" && npm ci --no-audit --no-fund && npm run build)
}
check_codex() {
    need codex; need_agent_lab
    [ -n "${MINIMAX_API_KEY:-}" ] || fail '请先在终端配置 MINIMAX_API_KEY；不要把 Key 写入脚本或录屏'
    [ -z "${COURSE_CODEX_HOME:-}" ] || fail '请先取消旧 COURSE_CODEX_HOME：课程环境现在按项目目录自动选'
    [ "$(codex --version)" = 'codex-cli 0.163.0' ] || fail '本实验冻结 Codex CLI 0.163.0；当前版本不同，需重新核验请求'
}
# 正式录制：每次用新的项目目录；课程环境跟着项目目录自动是新的。标签默认当前日期加时分。
# 精确到分钟而不是小时：一小时内重录（上一条录坏了马上再来）是最常见的情形，按小时仍会撞名。
record() {
    tag=${1:-$(date +%Y%m%d-%H%M)}
    case $tag in *[!A-Za-z0-9._-]*|'') fail "标签只能含字母、数字、点、下划线、连字符：$tag" ;; esac
    demo_root=${CH02_DEMO_ROOT:-"$HOME/course-demos/rec-$tag"}
    project="$demo_root/personal-homepage"
    [ ! -e "$project" ] || fail "项目目录已存在：${project}；请换一个标签（sh demo.sh record <标签>），不会自动重置。"
    check_codex
    env_dir=$(course_env)
    [ ! -e "$env_dir" ] || fail "课程环境已存在：${env_dir}；它可能带有旧会话与历史，请换一个标签。"
    prepare
    want=$(sed 's/^v//; s/\..*//' "$project/.nvmrc" 2>/dev/null || true)
    have=$(node --version | sed 's/^v//; s/\..*//')
    if [ -n "$want" ] && [ "$want" != "$have" ]; then
        printf '\n警告：当前 Node 主版本 %s，快照 .nvmrc 为 %s；录屏里若显示 node 版本，请先切换后重新准备（换标签）。\n' "$have" "$want"
    fi
    printf '\n录制环境已就绪（Codex %s，Key 已配置，工作区干净）。\n' "$(codex --version | sed 's/^codex-cli //')"
    printf '每个终端标签页先进入项目目录：\n  cd %s\n' "$project"
    printf '然后：\n  p01 开发服务标签页：npm run dev -- --host 127.0.0.1\n  p06-tap 起的 Codex 标签页：agent-lab codex --tap（课程环境按这个目录自动是新的：%s）\n' "$env_dir"
    printf '进入 Codex 后，发问候之前先输入：/rename ch02-%s（确认名字已显示，否则记录里会多出起标题的请求）\n' "$tag"
    narration_hint
}
# 手机照稿：课程仓库里的 edit-courseware.sh（默认局域网只读开放逐字稿页）；脱离仓库使用本脚本时跳过。
narration_hint() {
    repo=$(CDPATH= cd "$(dirname "$self")/../../../../.." 2>/dev/null && pwd) || return 0
    [ -f "$repo/tools/edit-courseware.sh" ] || return 0
    # 只认私网地址：开着 VPN 时默认路由是隧道，探测出来的地址手机连不到；先问 Wi-Fi/有线网卡，再用探测法兜底
    ip=
    for cand in "$(ipconfig getifaddr en0 2>/dev/null || true)" "$(ipconfig getifaddr en1 2>/dev/null || true)" \
        "$(python3 -c 'import socket;s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM);s.connect(("192.0.2.1",9));print(s.getsockname()[0])' 2>/dev/null || true)"; do
        case $cand in 10.*|192.168.*|172.1[6-9].*|172.2[0-9].*|172.3[01].*) ip=$cand; break ;; esac
    done
    printf '\n手机照稿（手机和电脑连同一个 Wi-Fi）：\n  在一个单独的终端标签页启动服务（默认对局域网只读开放）：sh %s/tools/edit-courseware.sh\n' "$repo"
    if [ -n "$ip" ]; then
        printf '  手机打开：http://%s:8841/courseware/ch02/lessons/01-request/speaker.html\n' "$ip"
    else
        printf '  没取到本机局域网地址；服务启动后按它打印的地址在手机上打开 .../courseware/ch02/lessons/01-request/speaker.html\n'
    fi
    printf '  录制前先用手机打开一次，确认能连通（路由器若开了客户端隔离会连不上）；A−/A+ 调字号\n'
}

case ${1:-help} in
    prepare) prepare ;;
    record) record "${2:-}" ;;
    audit) audit ;;
    homepage)
        need npm
        check_project
        cd "$project"
        exec npm run dev -- --host 127.0.0.1
        ;;
    codex)
        check_codex
        audit
        cd "$project"
        printf '\n进入 Codex 后，发问候之前先输入：/rename %s\n确认名字已显示再开始；不起名，记录里会多出起标题的请求。\n\n' "$session_name"
        exec agent-lab codex --tap
        ;;
    *)
        printf '%s\n' '用法：sh demo.sh prepare|record [标签]|audit|homepage|codex' \
            'record：正式录制前用，新建 $HOME/course-demos/rec-<标签>（标签默认是当前日期加时分，如 20261025-1432），课程环境随新项目目录自动是新的；并检查 Codex、Key、Node；已存在则拒绝；结尾会打印手机照稿的启动命令和局域网地址' \
            '默认项目：$HOME/course-demos/personal-homepage；可用 CH02_DEMO_ROOT 修改父目录' \
            '课程环境：按项目目录自动选，放在 ~/.local/share/agent-lab/projects/ 下（agent-lab home 查看）；可用 AGENT_LAB_HOME 手动指定' \
            '从某节的快照起跑：CH02_START=ch02/2.2-done-20261024（三个子命令都要带上）；快照未推送前可用 CH02_SOURCE_URL 指向本机仓库' \
            'codex 启动前会打印要手动输入的 /rename；会话名默认 ch02-demo，可用 CH02_SESSION_NAME 修改' \
            'macOS 已实测；Agent Lab 的 Linux/WSL 支持尚待实测，原生 Windows 暂不支持'
        ;;
esac
