#!/usr/bin/env bash
# 第 3 章 Memory 独立实验（预检 B）：在 clean-codex（MiniMax）基线下走一遍
# “初始化 → 明确要求记住 → 新会话整理 → 新会话使用 → 关闭记忆对照”。
# 用法：courseware/ch03/materials/memory/run-memory.sh [运行目录]   # 默认 <本仓库>/lab-runs/ch03-memory/<时间>
#       SKIP_COOLDOWN=0 …   # 不改数据库，改为在会话一之后停下，6 小时后再用同一目录继续（RESUME=1）
#       会话零和会话一启动时都会整理一次，所以要等会话一之后满 6 小时
# 旁观（另开终端，只读）：tmux attach -r -t <会话名>（启动时打印）。需要 tmux、MINIMAX_API_KEY、uv。
#
# 依据（子模块 third_party/codex，b741e480）：
# - 记忆说明只在 memory_summary.md 非空时注入（ext/memories/src/prompts.rs），所以先开一次会话让后台初始化；
# - 整理成功后 6 小时内不再整理（state/src/runtime/memories.rs 的 PHASE2_SUCCESS_COOLDOWN_SECONDS），
#   默认把上次完成时间改到 6 小时前继续——这是人工构造的条件，记录在 steps.log；
# - 两个阶段默认用 OpenAI 的模型名（memories/write/src/phase1.rs、phase2.rs），这里用 -c 指到 MiniMax。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
RUN="${1:-$REPO/lab-runs/ch03-memory/$(date +%Y%m%d-%H%M%S)}"
mkdir -p "$RUN"; RUN="$(cd "$RUN" && pwd)"
APP="$RUN/repo"; HOMEDIR="$RUN/home"; MEM="$HOMEDIR/.codex/memories"
# 运行中的日志先放在运行目录之外：Codex 会去上级目录翻找，日志里的屏幕记录含有规则原文，会污染关闭记忆的对照会话
# （第 7 轮实测）。结束时再移到 <运行目录>/logs
LOG="$HOME/.cache/ch03-memory-logs/$(basename "$RUN")"
mkdir -p "$LOG"
trap 'mkdir -p "$RUN/logs" && cp -R "$LOG"/. "$RUN/logs/"' EXIT
MODEL="${CLEAN_CODEX_MODEL:-MiniMax-M3.1-Flash-Preview}"
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }

if [ "${RESUME:-0}" != 1 ]; then
  cp -R "${APP_SRC:-$REPO/starters/personal-homepage/ch02-candidate}" "$APP"
  git -C "$APP" init -q -b main && git -C "$APP" add -A
  git -c user.name=rehearsal -c user.email=r@example.invalid -C "$APP" commit -qm start
fi

launcher() {  # launcher <use_memories true|false>：写一个启动脚本，tmux 里执行
  local f="$LOG/start-$1.sh"
  cat > "$f" <<EOF
#!/bin/zsh
cd $(printf %q "$APP") && CLEAN_CODEX_HOME=$(printf %q "$HOMEDIR") CLEAN_CODEX_NO_OPEN=1 $(printf %q "$REPO/tools/clean-codex.sh") --tap -- \\
  -c features.memories=true -c memories.generate_memories=true -c memories.use_memories=$1 \\
  -c 'memories.extract_model="$MODEL"' -c 'memories.consolidation_model="$MODEL"'
sleep 5
EOF
  chmod +x "$f"; echo "$f"
}
screen() { tmux capture-pane -t "$1" -p; }          # 只看当前画面：滚动历史里有旧的“esc to interrupt”
scrollback() { tmux capture-pane -t "$1" -p -S -500; }
wait_for() { for _ in $(seq 1 60); do sleep 2; screen "$1" | grep -q "$2" && return 0; done; echo "等待超时：$2" >&2; return 1; }
# 连续 4 次（约 12 秒）看到输入框、且没有“esc to interrupt”才算回答结束；申请画面里没有输入框。
# 遇到运行命令的申请就同意一次（只会是写入记忆目录），记在日志里
wait_idle() {
  local idle=0; sleep 5
  for _ in $(seq 1 400); do
    if screen "$1" | grep -q "Yes, proceed"; then
      say "$1：Codex 申请运行命令，同意一次（见屏幕记录）"; screen "$1" >> "$LOG/$1.approval.txt"
      tmux send-keys -t "$1" Enter; sleep 3; idle=0; continue
    fi
    if screen "$1" | grep -q "Ask Codex" && ! screen "$1" | grep -q "esc to interrupt"; then
      idle=$((idle + 1)); [ "$idle" -ge 4 ] && return 0
    else idle=0; fi
    sleep 3
  done; echo "等待回答超时" >&2; return 1
}
session() {  # session <名字> <use_memories> <停留秒数> <输入>
  local name="$1" use="$2" hold="$3" msg="$4"
  local s="mem-$name-$$"
  tmux new-session -d -s "$s" -x 200 -y 50 "zsh -ic $(printf %q "$(launcher "$use")")"
  say "$name：tmux attach -r -t $s"
  wait_for "$s" "Trust this folder\|Ask Codex"
  screen "$s" | grep -q "Trust this folder" && { tmux send-keys -t "$s" Enter; wait_for "$s" "Ask Codex"; }
  tmux send-keys -t "$s" -l "$msg"; sleep 1; tmux send-keys -t "$s" Enter
  wait_idle "$s" || true
  # 会话一：Codex 有时只说“需要权限”就结束本轮，不发申请。人回一句同意（代答，记在日志里）
  if [ -n "${FOLLOWUP:-}" ] && [ -z "$(ls "$MEM/extensions/ad_hoc/notes" 2>/dev/null)" ]; then
    say "$name：没有写出笔记，人回复“$FOLLOWUP”（代答）"
    tmux send-keys -t "$s" -l "$FOLLOWUP"; sleep 1; tmux send-keys -t "$s" Enter
    wait_idle "$s" || true
  fi
  sleep "$hold"
  scrollback "$s" > "$LOG/$name.screen.txt"
  tmux send-keys -t "$s" C-c; sleep 1; tmux send-keys -t "$s" C-c; sleep 6
  tmux kill-session -t "$s" 2>/dev/null || true
  say "$name 结束；summary $(wc -c < "$MEM/memory_summary.md" 2>/dev/null || echo 0) 字节；笔记 $(ls "$MEM/extensions/ad_hoc/notes" 2>/dev/null | wc -l | tr -d ' ') 份"
}
wait_consolidated() {  # 等后台整理把笔记写进 memory_summary.md
  for _ in $(seq 1 60); do grep -q "${1}" "$MEM/memory_summary.md" 2>/dev/null && return 0; sleep 5; done; return 1
}

if [ "${RESUME:-0}" != 1 ]; then
  # 会话零：只读小任务。启动时后台初始化记忆目录，生成第一份 memory_summary.md
  # 2026-10-06 两个全新 home 的第一次整理都以 failed_agent 结束（原因未查明），失败后 1 小时内不重试；
  # 这里把 retry_at 改到现在再开一次会话零，最多 3 次——同样是人工构造的条件
  for attempt in 1 2 3; do
    session "s0-$attempt" true 150 "只读：src 目录下有哪些文件？"
    [ -s "$MEM/memory_summary.md" ] && break
    say "会话零第 $attempt 次后没有 memory_summary.md：$(sqlite3 "$HOMEDIR/.codex/memories_1.sqlite" "select status||' '||coalesce(last_error,'') from jobs")"
    sqlite3 "$HOMEDIR/.codex/memories_1.sqlite" "update jobs set retry_at = strftime('%s','now') - 1 where kind='memory_consolidate_global';"
    say "人工构造：把整理的重试时间改到现在"
  done
  [ -s "$MEM/memory_summary.md" ] || { say "三次会话零之后仍没有 memory_summary.md，本轮作废"; exit 1; }
  # 会话一：明确要求记住
  FOLLOWUP="同意，写进记忆笔记吧。" session s1 true 5 "记住：记忆翻牌里，两张牌不匹配、等待翻回期间的点击一律忽略。"
  # 不在会话之间往运行目录里复制笔记：Codex 会去上级目录翻找（第 7 轮关闭记忆的对照会话就读到了日志里的笔记副本）
  [ -n "$(ls "$MEM/extensions/ad_hoc/notes" 2>/dev/null)" ] || say "会话一没有写出笔记"
  [ -f "$APP/AGENTS.md" ] && say "会话一写了仓库里的 AGENTS.md（留在仓库里，作为结果）"
  if [ "${SKIP_COOLDOWN:-1}" != 1 ]; then say "停在这里：6 小时后用 RESUME=1 继续"; exit 0; fi
fi

# 会话二：新会话，启动时后台整理笔记。冷却要在这里绕过：会话一启动时也会跑一次整理（那时还没有笔记，
# 以“无变化”成功结束），会重新开始 6 小时冷却（2026-10-06 第 6 轮实测）
if [ "${SKIP_COOLDOWN:-1}" = 1 ]; then
  sqlite3 "$HOMEDIR/.codex/memories_1.sqlite" \
    "update jobs set finished_at = strftime('%s','now') - 6*3600 - 60 where kind='memory_consolidate_global';"
  say "人工构造：把上次整理完成时间改到 6 小时前，绕过 6 小时冷却"
fi
session s2 true 180 "只读：package.json 里有哪些 scripts？"
wait_consolidated "翻牌" && say "整理完成：summary 里出现了这条规则" || say "等 5 分钟仍未整理进 summary"
# 会话三：同一个问题，开记忆
session s3 true 5 "记忆翻牌里，等待翻回期间的点击，我们是怎么定的？"
# 会话四：同一个问题，关记忆作对照
session s4 false 5 "记忆翻牌里，等待翻回期间的点击，我们是怎么定的？"
cp -R "$MEM" "$LOG/memories-final" 2>/dev/null || true
[ -f "$APP/AGENTS.md" ] && cp "$APP/AGENTS.md" "$LOG/repo-AGENTS.md"
say "完成：$RUN"
