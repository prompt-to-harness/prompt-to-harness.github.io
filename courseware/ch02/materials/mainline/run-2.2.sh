#!/usr/bin/env bash
# 讲师排练用：按 2026-10-22 的新流程（章文件 C2-55、C2-56、C2-58）在交互界面里跑一遍 2.2 和 2.3 的风格参考，
# 得到 2.2 的请求记录、2.3 要审的两份 diff。人写文件、人确认计划这些动作由脚本代做，记在 steps.log。
# 用法：courseware/ch02/materials/mainline/run-2.2.sh [运行目录]   # 默认 <本仓库>/lab-runs/ch02-context/2.2-profile-<时间>
#       V0=<起点目录>     换起点（默认第 1 章参考快照 ch01-complete；第 2 章起点快照做好后换成它，C2-54）
#       REF_URL=<地址>    2.3 p40a 的参考主页（默认 https://html5up.net/uploads/demos/hyperspace/）
#       STYLE=0           只跑 2.2，不跑 2.3 的风格参考
# 需要：MINIMAX_API_KEY、tmux、Node/npm、uv（claude-tap）。不推送；homepage-v1 只提交在运行目录的副本里。
# 和录制的差别：Prompt 按一行输入（tmux 逐字输入时换行会被当成发送），所以请求里的 Prompt 没有换行。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
source "$REPO/tools/lab-lib.sh"
V0="${V0:-$REPO/starters/personal-homepage/ch01-complete}"
REF_URL="${REF_URL:-https://html5up.net/uploads/demos/hyperspace/}"
lab_run_dir "$REPO/lab-runs/ch02-context/2.2-profile-$(date +%Y%m%d-%H%M%S)" "${1:-}"
export LAB_TMUX_APPROVE=1  # 起服务器、p40a 的 curl 联网这类沙箱外运行，按讲师录制时的做法同意，画面都存在 logs/

oneline() { tr '\n' ' ' | sed 's/  */ /g; s/ $//'; }
GREETING="你好，用一句话介绍你能帮我做什么。"
P29="$(lab_prompt ch02 02-iteration p29 | oneline)"
P40A="$(lab_prompt ch02 03-review p40a | sed "s#https://html5up.net/uploads/demos/hyperspace/#$REF_URL#" | oneline)"

# ---------- 起点 ----------
cp -R "$V0" "$APP"
rm -rf "$APP/node_modules" "$APP/dist" "$APP/AGENTS.md" "$APP/profile.md"
[ -d "$APP/.git" ] || lab_commit_start "起点：$(basename "$V0")"
(cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1)
say "起点：$V0（Node $(node -v)）"

S="lab-ch02-$$"
lab_tmux_start "$S"
lab_tmux_send "$S" "$GREETING" step01-greeting || { lab_tmux_stop "$S"; exit 1; }

# ---------- 2.2 p27a：先写 AGENTS.md，再 /clear ----------
printf '# 项目规则\n- 改完代码后运行 npm run build，在回复里给出结果\n- 不新增依赖\n' > "$APP/AGENTS.md"
say "2.2 p27a：人写下 AGENTS.md（代做，不提交）"
lab_tmux_send "$S" "/clear" step02-clear || { lab_tmux_stop "$S"; exit 1; }
lab_tmux_send "$S" "$GREETING" step03-greeting || { lab_tmux_stop "$S"; exit 1; }

# ---------- 2.2 p29a–p30：写 profile.md，提交 Prompt，确认计划 ----------
cp "$HERE/../profile/profile.md" "$APP/profile.md"
say "2.2 p29a：人写下 profile.md（代做：复制讲师的 materials/profile/profile.md，不提交）"
printf '%s\n' "$P29" > "$LOG/p29.prompt.txt"
lab_tmux_send "$S" "$P29" step04-p29-plan || { lab_tmux_stop "$S"; exit 1; }
lab_tmux_send "$S" "确认，按你的计划改。" step05-confirm || { lab_tmux_stop "$S"; exit 1; }
git -C "$APP" status --porcelain --untracked-files=all > "$LOG/2.2-status.txt"
git -C "$APP" diff > "$LOG/2.2-homepage-v1.diff"

# ---------- 2.2 p27：压缩，再追问 ----------
lab_tmux_send "$S" "/compact" step06-compact || { lab_tmux_stop "$S"; exit 1; }
grep -q "Context compacted" "$LOG/step06-compact.screen.txt" || say "没有看到 Context compacted，p27 的素材要另跑"
lab_tmux_send "$S" "不要运行命令，只凭现在看到的回答：npm run build 输出的最后一行是什么？" step07-after-compact || { lab_tmux_stop "$S"; exit 1; }

if [ "${STYLE:-1}" = 1 ]; then
  # ---------- 2.3 p40：提交 homepage-v1 ----------
  "${LAB_GIT[@]}" -C "$APP" add -A
  "${LAB_GIT[@]}" -C "$APP" commit -qm "homepage-v1: 补充个人经历" -m "本轮目标：把 profile.md 里的个人信息放进个人主页。"
  say "2.3 p40：人审过后提交 homepage-v1（代做，未评审，结论待讲师看 diff 后定）"
  # ---------- 2.3 p40a–p40c：参考主页改风格（第一轮；p40d 第二轮按录制时看到的差别现场说，脚本不跑） ----------
  printf '%s\n' "$P40A" > "$LOG/p40a.prompt.txt"
  lab_tmux_send "$S" "$P40A" step08-p40a-plan || { lab_tmux_stop "$S"; exit 1; }
  lab_tmux_send "$S" "确认，按你的计划改。" step09-p40a-confirm || { lab_tmux_stop "$S"; exit 1; }
  git -C "$APP" diff > "$LOG/2.3-style.diff"
  git -C "$APP" diff --stat > "$LOG/2.3-style.diffstat.txt"
fi

sleep "${LAB_HOLD:-3}"
lab_tmux_stop "$S"
say "完成：$RUN（claude-tap 会话 $(tail -1 "$LOG/tap-session" 2>/dev/null || echo 未知)）"
echo "$RUN"
