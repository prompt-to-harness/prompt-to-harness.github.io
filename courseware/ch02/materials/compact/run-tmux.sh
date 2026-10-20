#!/usr/bin/env bash
# 讲师用：在 tmux 里按 steps.txt 自动跑一轮压缩实验，供多次运行对照。学员按 README 手动输入即可。
# 用法：courseware/ch02/materials/compact/run-tmux.sh [运行目录]   # 默认 <本仓库>/lab-runs/compact/<时间>
#       SKIP_COMPACT=1 …/run-tmux.sh   # 对照组：跳过 /compact，其余步骤相同
#       LAB_SESSION=compact-demo LAB_HOLD=60 …/run-tmux.sh   # 固定会话名便于旁观，结束后停留 60 秒
# 旁观（另开终端，只读）：tmux attach -r -t <会话名>
# 需要：tmux、MINIMAX_API_KEY（在当前 shell 或 ~/.zshenv 中）、uv（claude-tap 记录请求）。
# 运行目录的结构与 tmux 驱动见 tools/lab-lib.sh。结束后最后一行打印 claude-tap 的会话 id，交给 extract.py；
# 请求存在 ~/.local/share/claude-tap/traces.sqlite3。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
source "$REPO/tools/lab-lib.sh"
lab_run_dir "$REPO/lab-runs/compact/$(date +%Y%m%d-%H%M%S)" "${1:-}"
SESSION="${LAB_SESSION:-compact-lab-$$}"
trap 'tmux kill-session -t "$SESSION" 2>/dev/null || true' EXIT

"$HERE/setup.sh" "$APP" >/dev/null
STEPS="$HERE/steps.txt"
if [ "${SKIP_COMPACT:-0}" = 1 ]; then
  STEPS="$LOG/steps-skip-compact.txt"
  grep -vx '/compact' "$HERE/steps.txt" > "$STEPS"
  say "对照组：跳过 /compact"
fi
lab_tmux_steps "$SESSION" "$STEPS"
tail -1 "$LOG/tap-session"
