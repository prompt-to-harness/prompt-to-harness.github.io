#!/bin/sh
# Portable preparation and launch entry for the chapter 2 request demonstration.
set -eu

demo_root=${CH02_DEMO_ROOT:-"$HOME/course-demos"}
project="$demo_root/personal-homepage"
course_home=${AGENT_LAB_HOME:-"$HOME/.local/share/agent-lab-ch02-recording"}
snapshot=8e9a323174411a011f87e230450b9115d09b7dea
source_url=https://github.com/prompt-to-harness/course-starter.git
self=$(CDPATH= cd "$(dirname "$0")" && pwd)/$(basename "$0")
agent_source='git+https://github.com/prompt-to-harness/prompt-to-harness.github.io#subdirectory=tools/agent-lab'

fail() { printf '%s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || fail "缺少命令：$1"; }
check_project() {
    need git
    [ -d "$project/.git" ] || fail "请先运行：sh demo.sh prepare"
    actual=$(git -C "$project" rev-parse HEAD)
    [ "$actual" = "$snapshot" ] || fail "项目已离开录制起点：${actual}；不会自动重置。可用 CH02_DEMO_ROOT 另选目录。"
    [ -z "$(git -C "$project" status --porcelain)" ] || fail '项目存在未提交或未跟踪的改动；请保存现有工作并另选演示目录，不会自动清理。'
}
audit() {
    check_project
    current=$(CDPATH= cd "$project" && pwd -P)
    while :; do
        for name in AGENTS.md AGENTS.override.md; do
            [ ! -e "$current/$name" ] || fail "发现会影响实验的规则：${current}/${name}；请核对或另选演示目录，不会删除。"
        done
        [ ! -e "$current/.agents/skills" ] || fail "发现项目/上级 Skills：${current}/.agents/skills；请核对或另选演示目录。"
        [ "$current" != / ] || break
        current=$(dirname "$current")
    done
    for name in AGENTS.md AGENTS.override.md; do
        [ ! -e "$course_home/codex/.codex/$name" ] || fail "专用课程 HOME 存在规则：$course_home/codex/.codex/$name"
    done
    for rule in "$course_home/codex/.codex/rules/"*; do
        [ ! -e "$rule" ] || fail "专用课程 HOME 已保存批准规则：${rule}；请用 AGENT_LAB_HOME 另选空目录。"
    done
    printf '起点：%s\n项目：%s\n专用环境：%s\n规则检查通过；实际加载内容仍以请求为准\n' "$snapshot" "$project" "$course_home"
}

prepare() {
    need git; need node; need npm
    mkdir -p "$demo_root"
    if [ ! -e "$project" ]; then
        git clone --branch ch02-start-v1 --single-branch "$source_url" "$project"
        git -C "$project" switch -c codex/ch02-recording
    fi
    audit
    printf 'Node：%s；npm：%s\n' "$(node --version)" "$(npm --version)"
    printf '快照 .nvmrc 声明 Node 22.19.0；本命令使用当前 Node，不自动安装或切换版本\n'
    (cd "$project" && npm ci --no-audit --no-fund && npm run build)
}
check_codex() {
    need uvx; need codex
    [ -n "${MINIMAX_API_KEY:-}" ] || fail '请先在终端配置 MINIMAX_API_KEY；不要把 Key 写入脚本或录屏'
    [ -z "${COURSE_CODEX_HOME:-}" ] || fail '请先取消旧 COURSE_CODEX_HOME，避免与专用 AGENT_LAB_HOME 冲突'
    [ "$(codex --version)" = 'codex-cli 0.163.0' ] || fail '本实验冻结 Codex CLI 0.163.0；当前版本不同，需重新核验请求'
}
# 正式录制：每次用新的项目目录和新的专用 HOME；未显式指定时按标签（默认当天日期）生成。
record() {
    tag=${1:-$(date +%Y%m%d)}
    case $tag in *[!A-Za-z0-9._-]*|'') fail "标签只能含字母、数字、点、下划线、连字符：$tag" ;; esac
    demo_root=${CH02_DEMO_ROOT:-"$HOME/course-demos/rec-$tag"}
    project="$demo_root/personal-homepage"
    course_home=${AGENT_LAB_HOME:-"$HOME/.local/share/agent-lab-ch02-rec-$tag"}
    [ ! -e "$project" ] || fail "项目目录已存在：${project}；请换一个标签（sh demo.sh record <标签>），不会自动重置。"
    [ ! -e "$course_home" ] || fail "专用环境已存在：${course_home}；它可能带有旧会话与历史，请换一个标签。"
    check_codex
    prepare
    want=$(sed 's/^v//; s/\..*//' "$project/.nvmrc" 2>/dev/null || true)
    have=$(node --version | sed 's/^v//; s/\..*//')
    if [ -n "$want" ] && [ "$want" != "$have" ]; then
        printf '\n警告：当前 Node 主版本 %s，快照 .nvmrc 为 %s；录屏里若显示 node 版本，请先切换后重新准备（换标签）。\n' "$have" "$want"
    fi
    printf '\n录制环境已就绪（Codex %s，Key 已配置，工作区干净）。\n' "$(codex --version | sed 's/^codex-cli //')"
    printf '每个终端标签页先粘贴这一行：\n  export CH02_DEMO_ROOT=%s AGENT_LAB_HOME=%s\n' "$demo_root" "$course_home"
    printf '然后：\n  p01 开发服务标签页：sh %s homepage\n  p06-tap 起的 Codex 标签页：sh %s codex\n' "$self" "$self"
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
        export AGENT_LAB_HOME="$course_home"
        exec uvx --from "$agent_source" agent-lab codex --tap
        ;;
    *)
        printf '%s\n' '用法：sh demo.sh prepare|record [标签]|audit|homepage|codex' \
            'record：正式录制前用，新建 $HOME/course-demos/rec-<标签>（默认当天日期）和同名新专用环境，并检查 Codex、Key、Node；已存在则拒绝' \
            '默认项目：$HOME/course-demos/personal-homepage；可用 CH02_DEMO_ROOT 修改父目录' \
            '默认环境：$HOME/.local/share/agent-lab-ch02-recording；可用 AGENT_LAB_HOME 修改' \
            'macOS 已实测；Agent Lab 的 Linux/WSL 支持尚待实测，原生 Windows 暂不支持'
        ;;
esac
