#!/usr/bin/env bash
# 讲师用：在 tmux 里按 steps.txt 自动跑一轮压缩实验，供多次运行对照。学员按 README 手动输入即可。
# 用法：courseware/ch02/materials/compact/run-tmux.sh [目标目录]   # 默认 <本仓库>/lab-runs/compact-<时间>
#       SKIP_COMPACT=1 …/run-tmux.sh   # 对照组：跳过 /compact，其余步骤相同
#       LAB_SESSION=compact-demo LAB_HOLD=60 …/run-tmux.sh   # 固定会话名便于旁观，结束后停留 60 秒
# 旁观（另开终端，只读）：tmux attach -r -t <会话名>
# 需要：tmux、MINIMAX_API_KEY（在当前 shell 或 ~/.zshrc 中）、uv（claude-tap 记录请求）。
# 结束后打印 claude-tap 的会话 id；请求存在 ~/.local/share/claude-tap/traces.sqlite3。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
DEST="${1:-$REPO/lab-runs/compact-$(date +%Y%m%d-%H%M%S)}"
SESSION="${LAB_SESSION:-compact-lab-$$}"
DB="${XDG_DATA_HOME:-$HOME/.local/share}/claude-tap/traces.sqlite3"

"$HERE/setup.sh" "$DEST" >/dev/null
before="$(sqlite3 "$DB" "select coalesce(max(started_at),'') from sessions" 2>/dev/null || true)"

trap 'tmux kill-session -t "$SESSION" 2>/dev/null || true' EXIT
tmux new-session -d -s "$SESSION" -x 200 -y 50 \
  "zsh -ic 'cd \"$DEST\" && \"$REPO/tools/clean-codex.sh\" --tap; sleep 5'"

screen() { tmux capture-pane -t "$SESSION" -p; }
tap_session() { sqlite3 "$DB" "select id from sessions where started_at > '$before' order by started_at desc limit 1" 2>/dev/null; }
# claude-tap 记录里还有发出但没返回的请求：交互界面有时在两次请求之间看起来已空闲
pending() {
  local id; id="$(tap_session)"; [ -z "$id" ] && return 1
  local sent done_
  sent="$(sqlite3 "$DB" "select count(*) from proxy_logs where session_id='$id' and message like '%→ POST%'")"
  done_="$(sqlite3 "$DB" "select count(*) from proxy_logs where session_id='$id' and message like '%← %'")"
  [ "$sent" -gt "$done_" ]
}
wait_for() { for _ in $(seq 1 60); do sleep 2; screen | grep -q "$1" && return 0; done; echo "等待超时：$1" >&2; return 1; }
# 连续 3 次（约 9 秒）看不到“esc to interrupt”才算回答结束；单次判断会在两次请求之间误判为空闲
wait_idle() {
  local idle=0
  sleep 5
  for _ in $(seq 1 300); do
    if screen | grep -q "esc to interrupt\|Compacting" || pending; then idle=0; else idle=$((idle + 1)); fi
    [ "$idle" -ge 3 ] && return 0
    sleep 3
  done
  echo "等待回答超时（15 分钟）" >&2; return 1
}

echo "旁观：tmux attach -r -t $SESSION    请求面板：http://127.0.0.1:19527" >&2
wait_for "Trust this folder"; tmux send-keys -t "$SESSION" Enter
wait_for "Ask Codex"
while IFS= read -r step; do
  [ -z "$step" ] && continue
  [ "$step" = "/compact" ] && [ "${SKIP_COMPACT:-0}" = 1 ] && continue
  tmux send-keys -t "$SESSION" -l "$step"; sleep 1; tmux send-keys -t "$SESSION" Enter
  wait_idle
  if [ "$step" = "/compact" ] && ! screen | grep -q "Context compacted"; then
    echo "没有看到 Context compacted，本轮作废" >&2; exit 1
  fi
done < "$HERE/steps.txt"

sleep "${LAB_HOLD:-3}"; tmux send-keys -t "$SESSION" C-c; sleep 1; tmux send-keys -t "$SESSION" C-c; sleep 6
tmux kill-session -t "$SESSION" 2>/dev/null || true
tap_session
