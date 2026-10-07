#!/usr/bin/env bash
# 第 3 章 3.3 排练：在第 8 轮的记忆翻牌 v0 上（牌组配不成对、步数只在配对时加），先只调查，人定规则后最小修复。
# 用法：courseware/ch03/materials/mainline/debug-3.3.sh [运行目录]   BASE=<仓库> 默认 v2-run8/repo
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"; REPO="$(cd "$HERE/../../../.." && pwd)"
BASE="${BASE:-$REPO/lab-runs/ch03-mainline/v2-run8/repo}"
RUN="${1:-$REPO/lab-runs/ch03-mainline/d3-$(date +%Y%m%d-%H%M%S)}"
mkdir -p "$(dirname "$RUN")"; RUN="$(cd "$(dirname "$RUN")" && pwd)/$(basename "$RUN")"
[ -e "$RUN" ] && { echo "已存在：$RUN" >&2; exit 1; }
APP="$RUN/repo"; LOG="$RUN/logs"; mkdir -p "$LOG"
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }
cp -R "$BASE" "$APP"; rm -rf "$APP/node_modules" "$APP/dist"; (cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1)
step() { local name="$1"; shift; local start=$SECONDS
  (cd "$APP" && CLEAN_CODEX_HOME="$RUN/home" CLEAN_CODEX_NO_OPEN=1 "$REPO/tools/clean-codex.sh" --tap -- exec "$@" --json -o "$LOG/$name.answer.md" < /dev/null > "$LOG/$name.out" 2> "$LOG/$name.err") || say "$name 退出码非 0"
  grep '^{' "$LOG/$name.out" > "$LOG/$name.events.jsonl" || true; echo $((SECONDS - start)) > "$LOG/$name.seconds"; say "$name 完成，用时 $((SECONDS - start)) 秒"; }
# 上游先 502、重发得 400 时回合中断（2026-10-06 晚多次出现）：续一次“继续”，最多两次，记在日志里
retry() { local name="$1" mode="$2"
  for i in 1 2; do grep -q '"turn.failed"' "$LOG/$name.events.jsonl" 2>/dev/null || return 0
    say "$name 回合中断（上游错误），第 $i 次续跑"; mv "$LOG/$name.events.jsonl" "$LOG/$name.failed$i.events.jsonl"
    step "$name" resume --last -c sandbox_mode="\"$mode\"" "刚才的回合因为网络错误中断了，请接着完成上一个请求。"; done; }
step 3.3-investigate -s read-only "$(cat "$HERE/fixtures/prompt-3.3-investigate.txt")"; retry 3.3-investigate read-only
git -C "$APP" status --porcelain > "$LOG/status-after-investigate.txt"
step 3.3-fix resume --last -c sandbox_mode='"workspace-write"' "$(cat "$HERE/fixtures/confirm-3.3.txt")"; retry 3.3-fix workspace-write
set +e; (cd "$APP" && npm run build > "$LOG/build.log" 2>&1); echo $? > "$LOG/build.exit"; set -e
git -C "$APP" diff > "$LOG/fix.diff"; git -C "$APP" diff --stat > "$LOG/fix.diffstat"
(cd "$REPO" && uv run "$HERE/probe2.py" "$APP") > "$LOG/probe2.json" 2>&1 || true
say "完成：$RUN"
