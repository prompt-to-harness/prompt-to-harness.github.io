#!/usr/bin/env bash
# 第 3 章预检 E：在记忆翻牌 v1 上装好 Game Studio（本地市场），按 3.5 的 Brief 真实运行 Codex。
# 用法：courseware/ch03/materials/mainline/run-v3.sh [运行目录]
#       BASE=<带记忆翻牌的仓库> …   # 默认 lab-runs/ch03-mainline/v2-run2/repo（扩展探查未发现缺陷的一份）
# 需要：MINIMAX_API_KEY、Node/npm、uv、网络（首次准备本地市场）。观察：计划选什么技术栈、是否新建项目或路由、
# 有没有读 Game Studio 的 Skill 全文、改动范围与 build。人的部分代答：确认计划。
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
BASE="${BASE:-$REPO/lab-runs/ch03-mainline/v2-run2/repo}"
RUN="${1:-$REPO/lab-runs/ch03-mainline/v3-$(date +%Y%m%d-%H%M%S)}"
mkdir -p "$(dirname "$RUN")"; RUN="$(cd "$(dirname "$RUN")" && pwd)/$(basename "$RUN")"
[ -e "$RUN" ] && { echo "运行目录已存在：$RUN" >&2; exit 1; }
APP="$RUN/repo"; LOG="$RUN/logs"; H="$RUN/home"; MKT="$REPO/lab-runs/ch03-plugin/mkt-e"
mkdir -p "$LOG"
say() { echo "[$(date +%H:%M:%S)] $*" | tee -a "$LOG/steps.log" >&2; }
cc() { (cd "$APP" && CLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME="$H" CLEAN_CODEX_NO_OPEN=1 "$REPO/tools/clean-codex.sh" "$@"); }

say "起点：复制 $BASE"
cp -R "$BASE" "$APP"; rm -rf "$APP/node_modules" "$APP/dist"
mkdir -p "$APP/docs/briefs"; cp "$HERE/fixtures/brief-3.5.md" "$APP/docs/briefs/CH03_DODGE_BRIEF.md"
git -C "$APP" add -A && git -c user.name=讲师排练 -c user.email=rehearsal@example.invalid -C "$APP" commit -qm "Brief：60 秒躲避与收集"
(cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1)
[ -d "$MKT" ] || "$REPO/courseware/ch03/materials/plugin/setup-marketplace.sh" "$MKT" > "$LOG/setup-marketplace.log"
CLEAN_CODEX_HOME="$H" "$REPO/tools/clean-codex.sh" -- plugin list > /dev/null 2>&1 < /dev/null || true
cc -- plugin marketplace add "$MKT" > "$LOG/plugin.log" 2>&1 < /dev/null
cc -- plugin add game-studio@course-lab >> "$LOG/plugin.log" 2>&1 < /dev/null
say "已安装 Game Studio（本地市场）"

step() {  # step <名字> <exec 参数…>
  local name="$1"; shift; local start=$SECONDS
  cc --tap -- exec "$@" --json -o "$LOG/$name.answer.md" < /dev/null > "$LOG/$name.out" 2> "$LOG/$name.err" || say "$name 退出码非 0"
  grep -o 'Trace session: [0-9a-f-]*' "$LOG/$name.out" "$LOG/$name.err" 2>/dev/null | head -1 | awk '{print $3}' > "$LOG/$name.tap-session" || true
  grep '^{' "$LOG/$name.out" > "$LOG/$name.events.jsonl" || true
  echo $((SECONDS - start)) > "$LOG/$name.seconds"; say "$name 完成，用时 $((SECONDS - start)) 秒"
}
step 3.5-plan -s workspace-write "$(cat "$HERE/fixtures/prompt-3.5.txt")"
if [ -n "$(git -C "$APP" status --porcelain)" ]; then say "没等确认就改了文件"; else
  step 3.5-exec resume --last -c sandbox_mode='"workspace-write"' "确认，按计划执行。"; fi
set +e; (cd "$APP" && npm run build > "$LOG/build.log" 2>&1); echo $? > "$LOG/build.exit"; set -e
git -C "$APP" add -A; git -C "$APP" diff --cached --stat > "$LOG/diffstat.txt"; git -C "$APP" diff --cached -- package.json > "$LOG/package.diff"
git -c user.name=讲师排练 -c user.email=rehearsal@example.invalid -C "$APP" commit -qm "第二个小游戏（预检 E，未评审）" || true
du -sh "$APP/dist/assets" > "$LOG/dist-size.txt" 2>/dev/null || true
say "build 退出码 $(cat "$LOG/build.exit")；完成：$RUN"
