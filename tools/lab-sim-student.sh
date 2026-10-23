#!/usr/bin/env bash
# 讲师用：模拟学员和被测 Codex 多轮对话做一个任务，做完用 tools/lab-collect.mjs 收尾。
# 学员侧：每轮跑一次 clean-codex 的 exec -s read-only（独立 HOME），读人设文件与到目前为止的对话，
#         可以只读查看项目，最终回答就是要发的下一条消息；认为目标达成时只写 ###STOP###。
# 被测侧：lab-lib 的 codex_step（clean-codex --tap exec），第一轮新开会话，之后 resume --last，请求经 claude-tap 记录。
# 学员不用这个脚本。
#
# 用法：
#   tools/lab-sim-student.sh <学员人设文件> <起点目录> [运行目录]
#   例：tools/lab-sim-student.sh courseware/ch03/materials/sim-student/student-3.1.md starters/personal-homepage/ch02-candidate
#
# 起点目录复制到 <运行目录>/repo；不是 Git 仓库就建一个并提交；有 package.json 而没有 node_modules 就先 npm ci。
# 默认运行目录：<本仓库>/lab-runs/sim-student/<人设文件名>-<时间>；结果在 <运行目录>/lab-out/（run.json、diff.patch、dist/）
#
# 环境变量：
#   LAB_SIM_TURNS=5            学员最多发几条消息
#   LAB_SIM_EFFORT=max         两侧的推理档位
#   LAB_SIM_SANDBOX=workspace-write  被测方的沙箱模式
#   LAB_SIM_GROUP              run.json 的组名，默认“模拟学员-<人设文件名>”
#   CLEAN_CODEX_MODEL          同 clean-codex.sh，两侧共用
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/lab-lib.sh"

[ $# -ge 2 ] || { awk 'NR>1 && /^#/ {sub(/^# ?/,""); print; next} NR>1 {exit}' "$0"; exit 2; }
PERSONA="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
SRC="$(cd "$2" && pwd)"
NAME="$(basename "${PERSONA%.*}")"
lab_run_dir "$LAB_REPO/lab-runs/sim-student/$NAME-$(date +%Y%m%d-%H%M%S)" "${3:-}"

cp -R "$SRC/." "$APP"
rm -rf "$APP/dist"
[ -d "$APP/.git" ] || lab_commit_start "起点：$(basename "$SRC")"
if [ -f "$APP/package.json" ] && [ ! -d "$APP/node_modules" ]; then
  (cd "$APP" && npm ci --no-audit --no-fund > "$LOG/npm-ci.log" 2>&1)
fi
START="$(git -C "$APP" rev-parse HEAD)"
SANDBOX="${LAB_SIM_SANDBOX:-workspace-write}"
EFFORT=(-c "model_reasoning_effort=\"${LAB_SIM_EFFORT:-max}\"")
TRANSCRIPT="$LOG/transcript.md"; : > "$TRANSCRIPT"
cp "$PERSONA" "$LOG/persona.md"
say "起点 $SRC（$START），人设 $PERSONA"

student_turn() {  # student_turn <轮次>：学员读人设与对话记录，把下一条消息写到 $LOG/s<轮次>.txt
  local n="$1" prompt
  prompt="$(cat "$PERSONA")

以下是到目前为止你和编程助手的对话（还没开始时为空）：
<对话>
$(cat "$TRANSCRIPT")
</对话>

现在写你要发的第 $n 条消息。"
  (cd "$APP" && CLEAN_CODEX_HOME="$RUN/student-home" CLEAN_CODEX_NO_OPEN=1 "$LAB_REPO/tools/clean-codex.sh" -- exec \
      -s read-only "${EFFORT[@]}" --json -o "$LOG/s$n.txt" "$prompt" < /dev/null > "$LOG/s$n.events.jsonl" 2> "$LOG/s$n.err") \
    || say "学员第 $n 轮退出码非 0"
}

for n in $(seq 1 "${LAB_SIM_TURNS:-5}"); do
  student_turn "$n"
  msg="$(cat "$LOG/s$n.txt" 2>/dev/null || true)"
  [ -z "$msg" ] && { say "学员第 $n 轮没有输出，结束"; break; }
  if printf '%s' "$msg" | grep -q '###STOP###'; then say "学员结束对话（第 $n 轮）"; break; fi
  say "学员 $n：$(printf '%s' "$msg" | tr '\n' ' ' | cut -c1-120)"
  printf '\n### 学员\n%s\n' "$msg" >> "$TRANSCRIPT"
  if [ "$n" = 1 ]; then
    codex_step "t$n" -s "$SANDBOX" "${EFFORT[@]}" "$msg"
  else
    codex_step "t$n" resume --last -c sandbox_mode="\"$SANDBOX\"" "${EFFORT[@]}" "$msg"
  fi
  printf '\n### 编程助手\n%s\n' "$(head -c 6000 "$LOG/t$n.answer.md" 2>/dev/null)" >> "$TRANSCRIPT"
done

node "$LAB_REPO/tools/lab-collect.mjs" --repo "$APP" --start "$START" --codex-home "$RUN/home" \
  --group "${LAB_SIM_GROUP:-模拟学员-$NAME}" --driver simulated-user-local \
  --prompt "模拟学员人设：$(basename "$PERSONA")；下面是被测 Codex 实际收到的消息" --out "$RUN/lab-out" | tee -a "$LOG/steps.log"
