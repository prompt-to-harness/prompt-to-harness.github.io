#!/usr/bin/env bash
# 从本地个人主页出发，按第 2 章课件真实跑一遍主线 2.1 → 2.2 → 2.3，得到个人主页发布候选与全部记录。可重复运行，每次一个新目录。
# 用法：courseware/ch02/materials/mainline/run-v1.sh [运行目录]   # 默认 <本仓库>/lab-runs/mainline/v1-<时间>
#       V0=<首页目录> …/run-v1.sh                                # 换一个 v0（默认第 1 章参考快照 ch01-complete）
# 需要：MINIMAX_API_KEY、Node/npm、uv（claude-tap 与浏览器检查）。不发布，不推送。
#
# Codex 的两步都是真实运行（tools/clean-codex.sh，隔离 HOME + MiniMax）；Prompt 从课件 lesson.js 读取。
# 人的部分按课件示例代答并在记录中标明：2.1 的核对记录与性质标签（fixtures/）、2.2 对计划的确认、
# 2.2 的检查（verify.py）、2.3 的评审结论。检查不通过时停在提交之前，留给人判断。
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
source "$REPO/tools/lab-lib.sh"
V0="${V0:-$REPO/starters/personal-homepage/ch01-complete}"
lab_run_dir "$REPO/lab-runs/mainline/v1-$(date +%Y%m%d-%H%M%S)" "${1:-}"

# ---------- 起点：v0 ----------
say "起点：复制 v0（$V0）"
cp -R "$V0" "$APP"
rm -rf "$APP/node_modules" "$APP/dist"
# 防止讲师笔记混进 v0：它曾放在快照目录里，Codex 在 2.1 直接引用其中的结论（2026-10-06 第一轮实测，笔记已移出快照）
rm -f "$APP/CHECKPOINT.md"
lab_commit_start "v0：起点"
(cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1)
say "npm ci 完成（Node $(node -v)）"

# ---------- 2.1 反馈核对 ----------
mkdir -p "$APP/docs/evidence"
cp "$HERE/fixtures/feedback-record.md" "$APP/docs/evidence/CH02_VIBE_ITERATIONS.md"
say "2.1 p06：人写下三条反馈与核对记录（课程示例，代答）"
codex_step 2.1-p07 -s read-only "$(lab_prompt ch02 01-request p07)"
cat "$HERE/fixtures/labels.md" >> "$APP/docs/evidence/CH02_VIBE_ITERATIONS.md"
say "2.1 p17：人补上性质标签，选定第 3 条（代答）"

# ---------- 2.2 只改项目区 ----------
P29="$(lab_prompt ch02 02-iteration p29)"
ITEMS="$(cat "$HERE/fixtures/experiences.txt")"
P29="$(python3 -c 'import re,sys; p,i=sys.argv[1],sys.argv[2]; print(re.sub(r"<[^>]*>", "\n" + i, p, count=1))' "$P29" "$ITEMS")"
printf '%s\n' "$P29" > "$LOG/2.2-p29.prompt.txt"
"${LAB_GIT[@]}" -C "$APP" rev-parse --short HEAD > "$LOG/rollback-point"
codex_step 2.2-p29-plan -s workspace-write "$P29"
if [ -n "$(git -C "$APP" status --porcelain -- . ':!docs/evidence')" ]; then
  say "2.2 p30：Codex 没等确认就改了文件，记录为现象，不再发确认"
  echo "edited-before-confirm" > "$LOG/2.2-confirm"
else
  say "2.2 p30：人看过计划，确认执行（代答）"
  echo "confirmed" > "$LOG/2.2-confirm"
  codex_step 2.2-p30-confirm resume --last -c sandbox_mode='"workspace-write"' "确认，按计划执行。"
fi

# ---------- 2.2 检查 ----------
set +e
(cd "$APP" && npm run build > "$LOG/build.log" 2>&1); BUILD=$?
set -e
(cd "$REPO" && uv run "$HERE/verify.py" "$APP" "$HERE/fixtures/experiences.txt") > "$LOG/verify.json" 2> "$LOG/verify.err" || true
git -C "$APP" status --porcelain > "$LOG/status.txt"
git -C "$APP" diff > "$LOG/homepage-v1.diff"
git -C "$APP" diff --stat > "$LOG/diffstat.txt"
say "2.2 p31：build 退出码 $BUILD；浏览器检查见 verify.json"

# ---------- 2.3 评审与提交 ----------
python3 - "$RUN" "$BUILD" <<'EOF'
import json, sys
from pathlib import Path
run, build = Path(sys.argv[1]), int(sys.argv[2])
log = run / "logs"
changed = [l[3:] for l in (log / "status.txt").read_text().splitlines() if not l[3:].startswith("docs/evidence")]
try:
    v = json.loads((log / "verify.json").read_text())
except Exception:
    v = {"viewports": {}, "tab_stops": None}
checks = {
    "范围只含 src/App.tsx": changed == ["src/App.tsx"],
    "三种视口无横向溢出": bool(v["viewports"]) and not any(x["horizontal_overflow"] for x in v["viewports"].values()),
    "三条经历原文都在": bool(v["viewports"]) and not any(x.get("expected_missing") for x in v["viewports"].values()),
    "Tab 仍只停在“查看项目”": v.get("tab_stops") == ["A:查看项目"],
    "build 成功": build == 0,
}
verdict = "接受" if all(checks.values()) else "待人工判断"
(log / "review.json").write_text(json.dumps({"changed": changed, "checks": checks, "verdict": verdict}, ensure_ascii=False, indent=1))
print(verdict)
EOF
VERDICT="$(python3 -c 'import json,sys;print(json.load(open(sys.argv[1]))["verdict"])' "$LOG/review.json")"
say "2.3 p39：评审结论 $VERDICT"

if [ "$VERDICT" = "接受" ]; then
  "${LAB_GIT[@]}" -C "$APP" add src/App.tsx
  "${LAB_GIT[@]}" -C "$APP" commit -qm "homepage-v1: 补充项目经历"
  CODE="$(git -C "$APP" rev-parse --short HEAD)"
  "${LAB_GIT[@]}" -C "$APP" tag homepage-v1
  python3 - "$RUN" "$CODE" >> "$APP/docs/evidence/CH02_VIBE_ITERATIONS.md" <<'EOF'
import json, sys
from pathlib import Path
run, code = Path(sys.argv[1]), sys.argv[2]
log = run / "logs"
r = json.loads((log / "review.json").read_text())
v = json.loads((log / "verify.json").read_text())
vp = "、".join(f"{k} 无横向溢出" for k in v["viewports"])
print(f"""
## 第 1 轮

- 问题证据：反馈第 3 条；1440×900 下项目区只有一句“记录课程练习”
- 本轮目标：在项目区呈现我提供的三条项目经历
- 会话选择与理由：新建；2.1 的会话是只读核对，和本轮修改无关
- 改动文件：{"、".join(r["changed"])}
- 验证结果（三种视口 / 键盘 / build）：{vp}，三条经历完整显示；Tab 仍只停在“查看项目”；build 成功
- 剩余问题：第 1 条在 360×800 下未复现，未处理
- 回退点：{code}（homepage-v1 代码提交）
- 评审结论：接受；范围、内容和四项检查都有证据（讲师排练代答）
""")
EOF
  "${LAB_GIT[@]}" -C "$APP" add docs/evidence/CH02_VIBE_ITERATIONS.md
  "${LAB_GIT[@]}" -C "$APP" commit -qm "记录第 1 轮"
  say "2.3 p40：已提交代码 $CODE 与记录 $(git -C "$APP" rev-parse --short HEAD)"
else
  say "2.3：检查未全部通过，停在提交之前，见 logs/review.json"
fi
say "完成：$RUN"
echo "$RUN"
