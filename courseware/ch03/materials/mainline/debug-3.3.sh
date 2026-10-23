#!/usr/bin/env bash
# 第 3 章 3.3 排练：在第 8 轮修复前的记忆翻牌 上（牌组配不成对、步数只在配对时加），先只调查，人定规则后最小修复。
# 用法：courseware/ch03/materials/mainline/debug-3.3.sh [运行目录]   BASE=<仓库> 默认 v2-run8/repo
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"; REPO="$(cd "$HERE/../../../.." && pwd)"
source "$REPO/tools/lab-lib.sh"
BASE="${BASE:-$REPO/lab-runs/ch03-mainline/v2-run8/repo}"
lab_run_dir "$REPO/lab-runs/ch03-mainline/d3-$(date +%Y%m%d-%H%M%S)" "${1:-}"
cp -R "$BASE" "$APP"; rm -rf "$APP/node_modules" "$APP/dist"; (cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1)
codex_step 3.3-investigate -s read-only "$(cat "$HERE/fixtures/prompt-3.3-investigate.txt")"
git -C "$APP" status --porcelain > "$LOG/status-after-investigate.txt"
codex_step 3.3-fix resume --last -c sandbox_mode='"workspace-write"' "$(cat "$HERE/fixtures/confirm-3.3.txt")"
set +e; (cd "$APP" && npm run build > "$LOG/build.log" 2>&1); echo $? > "$LOG/build.exit"; set -e
git -C "$APP" diff > "$LOG/fix.diff"; git -C "$APP" diff --stat > "$LOG/fix.diffstat"
(cd "$REPO" && uv run "$HERE/probe2.py" "$APP") > "$LOG/probe2.json" 2>&1 || true
say "完成：$RUN"
