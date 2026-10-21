# 讲师实验脚本的共享库：用 source 引入，不单独运行。所有驱动都建立在 tools/clean-codex.sh 之上。
#
#   source "$(cd "$(dirname "$0")/../../../.." && pwd)/tools/lab-lib.sh"
#   lab_run_dir "$REPO/lab-runs/<实验>/<名字>-$(date +%Y%m%d-%H%M%S)" "${1:-}"
#
# 运行目录的统一结构：
#   <运行目录>/repo    Codex 的工作目录（实验起点的副本）
#   <运行目录>/home    clean-codex 的 HOME，同一次运行的各步共享，resume --last 才接得上
#   <运行目录>/logs    steps.log（时间线）和每一步的记录：
#     exec 驱动：<步骤名>.out / .err / .events.jsonl / .answer.md / .tap-session / .seconds，
#                回合因上游错误中断时，中断的那份事件改名为 <步骤名>.failed<n>.events.jsonl
#     tmux 驱动：<步骤名>.screen.txt（回答结束时的画面与最近 200 行滚动记录）、<会话名>.scrollback.txt、tap-session
#
# 两种驱动用同一种步骤文件：一行一条输入，空行跳过，以 # 开头的行是注释。只有一条 prompt 时就只有一行。
# exec 驱动（lab_exec_steps）：第一行新开会话，之后的行 resume --last；稳定，有结构化日志，默认用它。
# tmux 驱动（lab_tmux_steps）：在交互界面里逐行输入；只给离不开交互界面的实验用（/compact 等斜杠命令），
#   靠读屏幕判断状态，Codex 改了界面文案就要校准下面的 LAB_TUI_* 文字。
# 课程主线这类要按结果分支的脚本直接调用 codex_step，不用步骤文件。
#
# 需要先设好 RUN / APP / LOG（lab_run_dir 会设）。可调的环境变量见各函数注释。

LAB_REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LAB_CONTINUE_PROMPT="刚才的回合因为网络错误中断了，请接着完成上一个请求。"
LAB_GIT=(git -c user.name="讲师排练" -c user.email=rehearsal@example.invalid)

say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }

lab_run_dir() {  # lab_run_dir <默认运行目录> [指定的运行目录]：设 RUN、APP、LOG；目录已存在就退出，不覆盖
  RUN="${2:-$1}"
  mkdir -p "$(dirname "$RUN")"
  RUN="$(cd "$(dirname "$RUN")" && pwd)/$(basename "$RUN")"
  [ -e "$RUN" ] && { echo "运行目录已存在：$RUN" >&2; exit 1; }
  APP="$RUN/repo"; LOG="$RUN/logs"
  mkdir -p "$LOG"
}

lab_prompt() {  # lab_prompt <章，如 ch01> <课次目录，如 01-environment> <页 id>：课件 lesson.js 中这一页的 prompt 字段
  python3 - "$LAB_REPO/courseware/$1/lessons/$2/lesson.js" "$3" <<'EOF'
import json, sys
s = open(sys.argv[1]).read()
scenes = json.loads(s[s.index('{'):s.rstrip().rstrip(';').rindex('}') + 1])['scenes']
print(next(x for x in scenes if x['id'] == sys.argv[2])['prompt'])
EOF
}

lab_commit_start() {  # lab_commit_start <提交说明>：把 $APP 建成一个新的 Git 仓库并提交全部文件，作为回退点
  "${LAB_GIT[@]}" -C "$APP" init -q -b main
  "${LAB_GIT[@]}" -C "$APP" add -A && "${LAB_GIT[@]}" -C "$APP" commit -qm "$1"
}

# ---------- exec 驱动 ----------

_lab_exec() {  # _lab_exec <步骤名> <exec 参数…>：跑一次 codex exec，写下这一步的全部记录
  local name="$1"; shift
  local start=$SECONDS
  (cd "$APP" && CLEAN_CODEX_HOME="$RUN/home" CLEAN_CODEX_NO_OPEN=1 "$LAB_REPO/tools/clean-codex.sh" --tap -- exec "$@" \
      --json -o "$LOG/$name.answer.md" < /dev/null > "$LOG/$name.out" 2> "$LOG/$name.err") || say "$name 退出码非 0"
  grep -o 'Trace session: [0-9a-f-]*' "$LOG/$name.out" "$LOG/$name.err" 2>/dev/null | head -1 | awk '{print $3}' > "$LOG/$name.tap-session" || true
  grep '^{' "$LOG/$name.out" > "$LOG/$name.events.jsonl" || true
  echo $((SECONDS - start)) > "$LOG/$name.seconds"
  say "$name 完成，用时 $((SECONDS - start)) 秒"
}

_lab_sandbox_of() {  # 从 exec 参数里找出沙箱模式（-s X 或 -c sandbox_mode="X"），找不到就是 workspace-write
  local mode=workspace-write
  while [ $# -gt 0 ]; do
    case "$1" in
      -s|--sandbox) mode="${2:-$mode}"; shift ;;
      sandbox_mode=*) mode="${1#sandbox_mode=}"; mode="${mode//\"/}" ;;
    esac
    shift
  done
  echo "$mode"
}

# codex_step <步骤名> <exec 参数…>：例如 codex_step 1.4-p22 -s read-only "<prompt>"
#                                      codex_step 1.4-p22-answers resume --last -c sandbox_mode='"read-only"' "<回答>"
# 上游先 502、重发得 400 时回合会中断（2026-10-06 晚多次出现）：自动续一句“继续”，沙箱模式不变，
# 最多 LAB_RETRIES 次（默认 2，设 0 关闭），都记在 steps.log
codex_step() {
  local name="$1"; shift
  local mode i
  mode="$(_lab_sandbox_of "$@")"
  _lab_exec "$name" "$@"
  for i in $(seq 1 "${LAB_RETRIES:-2}"); do
    grep -q '"turn.failed"' "$LOG/$name.events.jsonl" 2>/dev/null || return 0
    say "$name 回合中断（上游错误），第 $i 次续跑"
    mv "$LOG/$name.events.jsonl" "$LOG/$name.failed$i.events.jsonl"
    _lab_exec "$name" resume --last -c sandbox_mode="\"$mode\"" "$LAB_CONTINUE_PROMPT"
  done
}

_lab_steps() {  # 逐行读步骤文件，跳过空行和注释，每行输出一条
  local line
  while IFS= read -r line || [ -n "$line" ]; do
    case "$line" in ''|'#'*) continue ;; esac
    printf '%s\n' "$line"
  done < "$1"
}

# lab_exec_steps <步骤文件>：第一行新开会话，之后 resume --last；步骤名为 step01、step02…
# LAB_SANDBOX 沙箱模式，默认 read-only。斜杠命令 exec 不支持，遇到就退出，改用 tmux 驱动
lab_exec_steps() {
  local file="$1" mode="${LAB_SANDBOX:-read-only}" n=0 step
  cp "$file" "$LOG/steps.txt"
  while IFS= read -r step; do
    case "$step" in /*) echo "exec 驱动不支持斜杠命令（$step），这个实验请用 tmux 驱动" >&2; exit 2 ;; esac
  done < <(_lab_steps "$file")
  while IFS= read -r step; do
    n=$((n + 1))
    if [ "$n" = 1 ]; then
      codex_step "$(printf 'step%02d' "$n")" -s "$mode" "$step"
    else
      codex_step "$(printf 'step%02d' "$n")" resume --last -c sandbox_mode="\"$mode\"" "$step"
    fi
  done < <(_lab_steps "$file")
}

# ---------- tmux 驱动 ----------
# 下面的屏幕文字按 Codex CLI 0.160–0.163 的界面写；界面改版后先改这里
LAB_TUI_TRUST="Trust this folder"
LAB_TUI_READY="Ask Codex"
LAB_TUI_BUSY="esc to interrupt\|Compacting"
LAB_TUI_APPROVAL="Yes, proceed"
LAB_TAP_DB="${XDG_DATA_HOME:-$HOME/.local/share}/claude-tap/traces.sqlite3"
_lab_tap_query() { sqlite3 "$LAB_TAP_DB" "$1" < /dev/null 2>/dev/null; }  # 不读标准输入：步骤循环正从那里读步骤文件

lab_tmux_screen() { tmux capture-pane -t "$1" -p; }  # 只看当前画面：滚动历史里有旧的“esc to interrupt”

_lab_wait_for() {  # _lab_wait_for <会话> <文字>：最多等 2 分钟
  local i
  for i in $(seq 1 60); do sleep 2; lab_tmux_screen "$1" | grep -q "$2" && return 0; done
  echo "等待超时：$2" >&2; return 1
}

# lab_tmux_start <会话名> [clean-codex.sh 在 -- 之后的参数…]：在 tmux 里以 $APP 为工作目录启动 clean-codex --tap，
# 信任目录后等到输入框出现。HOME 用 $RUN/home；要别的 HOME 或保留配置，先设 CLEAN_CODEX_HOME / CLEAN_CODEX_KEEP_CONFIG
lab_tmux_start() {
  local s="$1"; shift
  local f="$LOG/$s.start.sh" arg
  LAB_TAP_BEFORE="$(_lab_tap_query "select coalesce(max(started_at),'') from sessions" || true)"
  {
    echo "#!/bin/zsh"
    printf 'cd %q && CLEAN_CODEX_HOME=%q CLEAN_CODEX_KEEP_CONFIG=%q CLEAN_CODEX_GH=%q CLEAN_CODEX_NO_OPEN=1 %q --tap' \
      "$APP" "${CLEAN_CODEX_HOME:-$RUN/home}" "${CLEAN_CODEX_KEEP_CONFIG:-0}" "${CLEAN_CODEX_GH:-0}" "$LAB_REPO/tools/clean-codex.sh"
    if [ $# -gt 0 ]; then printf ' --'; for arg in "$@"; do printf ' %q' "$arg"; done; fi
    printf '\nsleep 5\n'
  } > "$f"
  chmod +x "$f"
  # zsh -i：和讲师自己开终端一样加载 ~/.zshenv 与 ~/.zshrc
  tmux new-session -d -s "$s" -x 200 -y 50 "zsh -ic $(printf %q "$f")"
  say "$s：旁观 tmux attach -r -t $s    请求面板 http://127.0.0.1:19527"
  _lab_wait_for "$s" "$LAB_TUI_TRUST\|$LAB_TUI_READY"
  if lab_tmux_screen "$s" | grep -q "$LAB_TUI_TRUST"; then
    tmux send-keys -t "$s" Enter; _lab_wait_for "$s" "$LAB_TUI_READY"
  fi
}

lab_tap_session() {  # 本次 lab_tmux_start 之后最新的 claude-tap 会话 id
  _lab_tap_query "select id from sessions where started_at > '${LAB_TAP_BEFORE:-}' order by started_at desc limit 1"
}

_lab_tap_pending() {  # claude-tap 记录里还有发出但没返回的请求：交互界面有时在两次请求之间看起来已空闲
  local id sent done_
  id="$(lab_tap_session)"; [ -z "$id" ] && return 1
  sent="$(_lab_tap_query "select count(*) from proxy_logs where session_id='$id' and message like '%→ POST%'")"
  done_="$(_lab_tap_query "select count(*) from proxy_logs where session_id='$id' and message like '%← %'")"
  [ "${sent:-0}" -gt "${done_:-0}" ]
}

# lab_tmux_wait_idle <会话>：连续 4 次（约 12 秒）看到输入框、没有忙碌提示、也没有未返回的请求，才算回答结束；
# 单次判断会在两次请求之间误判为空闲。遇到运行命令的申请：LAB_TMUX_APPROVE=1 时同意一次并记下画面，
# 否则记下画面后返回失败。最多等 20 分钟
lab_tmux_wait_idle() {
  local s="$1" idle=0 i
  sleep 5
  for i in $(seq 1 400); do
    if lab_tmux_screen "$s" | grep -q "$LAB_TUI_APPROVAL"; then
      lab_tmux_screen "$s" >> "$LOG/$s.approval.txt"
      if [ "${LAB_TMUX_APPROVE:-0}" = 1 ]; then
        say "$s：Codex 申请运行命令，同意一次（画面见 $s.approval.txt）"
        tmux send-keys -t "$s" Enter; sleep 3; idle=0; continue
      fi
      say "$s：Codex 申请运行命令，本实验不预期，停下（画面见 $s.approval.txt）"; return 1
    fi
    if lab_tmux_screen "$s" | grep -q "$LAB_TUI_READY" && ! lab_tmux_screen "$s" | grep -q "$LAB_TUI_BUSY" && ! _lab_tap_pending; then
      idle=$((idle + 1)); [ "$idle" -ge 4 ] && return 0
    else
      idle=0
    fi
    sleep 3
  done
  echo "等待回答超时（20 分钟）" >&2; return 1
}

# lab_tmux_send <会话> <输入> [步骤名]：输入一行，等回答结束；给了步骤名就存下画面和最近 200 行滚动记录
# （Codex 把已结束的回答推进滚动区，只存当前画面会漏掉回答）
lab_tmux_send() {
  tmux send-keys -t "$1" -l "$2"; sleep 1; tmux send-keys -t "$1" Enter
  lab_tmux_wait_idle "$1" || return 1
  [ -n "${3:-}" ] && tmux capture-pane -t "$1" -p -S -200 > "$LOG/$3.screen.txt"
  return 0
}

# lab_tmux_stop <会话> [滚动记录文件名]：存下滚动记录（默认 <会话>.scrollback.txt），退出 Codex，关掉会话，
# 把 claude-tap 会话 id 追加到 logs/tap-session
lab_tmux_stop() {
  local s="$1"
  tmux capture-pane -t "$s" -p -S -2000 > "$LOG/${2:-$s.scrollback.txt}" 2>/dev/null || true
  tmux send-keys -t "$s" C-c 2>/dev/null; sleep 1; tmux send-keys -t "$s" C-c 2>/dev/null; sleep 6
  tmux kill-session -t "$s" 2>/dev/null || true
  lab_tap_session >> "$LOG/tap-session" || true
}

# lab_tmux_steps <会话名> <步骤文件> [clean-codex.sh 在 -- 之后的参数…]：启动、逐行输入、退出；步骤名为 step01、step02…
# LAB_HOLD 结束后停留的秒数（默认 3，便于旁观）。/compact 之后没看到“Context compacted”就判这一轮无效
lab_tmux_steps() {
  local s="$1" file="$2" n=0 step; shift 2
  cp "$file" "$LOG/steps.txt"
  lab_tmux_start "$s" "$@"
  while IFS= read -r step; do
    n=$((n + 1))
    say "$(printf 'step%02d' "$n")：$step"
    lab_tmux_send "$s" "$step" "$(printf 'step%02d' "$n")" || { lab_tmux_stop "$s"; return 1; }
    if [ "$step" = "/compact" ] && ! grep -q "Context compacted" "$LOG/$(printf 'step%02d' "$n").screen.txt"; then
      say "没有看到 Context compacted，本轮作废"; lab_tmux_stop "$s"; return 1
    fi
  done < <(_lab_steps "$file")
  sleep "${LAB_HOLD:-3}"
  lab_tmux_stop "$s"
  say "tmux 驱动完成：claude-tap 会话 $(tail -1 "$LOG/tap-session")"
}
