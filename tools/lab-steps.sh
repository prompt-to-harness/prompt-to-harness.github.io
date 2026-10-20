#!/usr/bin/env bash
# 讲师用：按步骤文件在 clean-codex（MiniMax）基线下跑一轮，记录放进统一结构的运行目录（见 tools/lab-lib.sh）。
# 学员自己用 tools/clean-codex.sh 即可，不需要这个脚本。
#
# 用法：
#   tools/lab-steps.sh <步骤文件> <起点目录> [运行目录]           # exec 驱动（默认）
#   tools/lab-steps.sh --tmux <步骤文件> <起点目录> [运行目录]    # tmux 驱动：步骤里有 /compact 等斜杠命令时用
#
# 步骤文件一行一条输入，空行跳过，# 开头是注释；只有一条 prompt 就只写一行。
# 起点目录复制到 <运行目录>/repo；不是 Git 仓库就建一个并提交，便于看 Codex 改了什么。
# 默认运行目录：<本仓库>/lab-runs/steps/<步骤文件名>-<时间>
#
# 环境变量：
#   LAB_SANDBOX=read-only     exec 驱动的沙箱模式（read-only / workspace-write）
#   LAB_RETRIES=2             exec 回合因上游错误中断时自动续跑的次数，0 关闭
#   LAB_SESSION=<名字>        tmux 会话名，固定后便于另开终端 tmux attach -r -t <名字> 旁观
#   LAB_HOLD=3                tmux 驱动结束后停留的秒数
#   LAB_TMUX_APPROVE=1        tmux 驱动遇到运行命令的申请时同意（默认停下，记为失败）
#   CLEAN_CODEX_MODEL         同 clean-codex.sh
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/lab-lib.sh"

driver=exec
[ "${1:-}" = "--tmux" ] && { driver=tmux; shift; }
[ $# -ge 2 ] || { awk 'NR>1 && /^#/ {sub(/^# ?/,""); print; next} NR>1 {exit}' "$0"; exit 2; }
STEPS="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
SRC="$(cd "$2" && pwd)"
lab_run_dir "$LAB_REPO/lab-runs/steps/$(basename "${STEPS%.*}")-$(date +%Y%m%d-%H%M%S)" "${3:-}"

cp -R "$SRC" "$APP"
rm -rf "$APP/node_modules" "$APP/dist"
[ -d "$APP/.git" ] || lab_commit_start "起点：$(basename "$SRC")"
say "起点：$SRC（$driver 驱动，步骤 $STEPS）"

if [ "$driver" = exec ]; then
  lab_exec_steps "$STEPS"
else
  lab_tmux_steps "${LAB_SESSION:-lab-$$}" "$STEPS"
fi
git -C "$APP" status --porcelain --untracked-files=all > "$LOG/status.txt"
git -C "$APP" diff > "$LOG/diff.txt"
say "完成：$RUN"
echo "$RUN"
