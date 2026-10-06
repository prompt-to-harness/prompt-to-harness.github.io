#!/usr/bin/env bash
# 追赶实验的起点：一个本地的“课程起点仓库”（代替 course-starter，带 ch02-start-v1 标签），
# 以及三种学员仓库。学员仓库模拟用 Template 建的仓库：第一个提交是 course-starter 的 main。
# 用法：courseware/ch02/materials/catchup/setup-states.sh <目标目录>   # 默认 <本仓库>/lab-runs/catchup/base
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
OUT="${1:-$REPO/lab-runs/catchup/base}"
V0="$REPO/starters/personal-homepage/ch01-complete"
STARTER="$REPO/course-starter"
[ -e "$OUT" ] && { echo "已存在：$OUT" >&2; exit 1; }
mkdir -p "$OUT"; OUT="$(cd "$OUT" && pwd)"
GIT=(git -c user.name="讲师排练" -c user.email=rehearsal@example.invalid)

# 课程起点仓库：main 为 course-starter 起点；标签 ch02-start-v1 为第 2 章参考起点（第 1 章参考快照）
"${GIT[@]}" init -q --bare "$OUT/course-starter.git"
W="$OUT/work"; mkdir -p "$W"
git -C "$STARTER" archive main | tar -x -C "$W"
"${GIT[@]}" -C "$W" init -q -b main && "${GIT[@]}" -C "$W" add -A && "${GIT[@]}" -C "$W" commit -qm "course-starter 起点"
"${GIT[@]}" -C "$W" switch -qc ch02-start
find "$W" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$V0/." "$W/"
[ "${STRIP_HINT:-0}" = 1 ] && sed -i '' 's/；其中“项目卡不跳转”会在 2.1 用到//' "$W/CHECKPOINTS.md"
"${GIT[@]}" -C "$W" add -A && "${GIT[@]}" -C "$W" commit -qm "第 2 章参考起点（第 1 章参考快照）"
"${GIT[@]}" -C "$W" tag ch02-start-v1
"${GIT[@]}" -C "$W" push -q "$OUT/course-starter.git" main ch02-start ch02-start-v1
rm -rf "$W"

copy_v0_app() {  # 只复制第 1 章做出的首页文件；说明文档保持 Template（course-starter main）里的版本
  for f in PROMPT_V1.md index.html package.json package-lock.json tsconfig.app.json tsconfig.json tsconfig.node.json vite.config.ts; do cp "$V0/$f" "$1/"; done
  cp -R "$V0/src" "$1/"; cp "$V0/setup-check/index.html" "$1/setup-check/index.html"
}

new_student() {  # new_student <名字>：Template 建出的仓库，只有一个提交
  local d="$OUT/student-$1"; mkdir -p "$d"
  git -C "$STARTER" archive main | tar -x -C "$d"
  "${GIT[@]}" -C "$d" init -q -b main && "${GIT[@]}" -C "$d" add -A && "${GIT[@]}" -C "$d" commit -qm "Initial commit"
  echo "$d"
}

# (a) 做完第 1 章，个人内容换成自己的
A="$(new_student a-personal)"
copy_v0_app "$A"
python3 - "$A" <<'PY'
import sys
from pathlib import Path
d = Path(sys.argv[1])
for f in ["src/App.tsx", "index.html", "PROMPT_V1.md"]:
    p = d / f
    s = p.read_text()
    s = s.replace("示例同学", "林小雨").replace("正在学习 AI 协作开发。", "前端初学者，喜欢用照片记录城市。")
    s = s.replace("学习笔记", "摄影日记").replace("记录课程练习", "每周整理一组街拍照片")
    p.write_text(s)
PY
"${GIT[@]}" -C "$A" add -A && "${GIT[@]}" -C "$A" commit -qm "第 1 章：首页 v0（我的内容）"

# (b) 只做到 1.4：改了欢迎语、写了 PROMPT_V1.md，还没有首页应用
B="$(new_student b-only-1.4)"
python3 - "$B/setup-check/index.html" <<'PY'
import re, sys
from pathlib import Path
p = Path(sys.argv[1]); s = p.read_text()
p.write_text(re.sub(r'(id="welcome-message"[^>]*>)(.*?)(</)', r'\g<1>你好，欢迎来到 Vibe Coding 课堂！\3', s, count=1, flags=re.S))
PY
cp "$V0/PROMPT_V1.md" "$B/"
"${GIT[@]}" -C "$B" add -A && "${GIT[@]}" -C "$B" commit -qm "1.1、1.4：欢迎语与 PROMPT_V1"

# (c) 做完第 1 章，但决定让项目卡跳到作品链接
C="$(new_student c-card-links)"
copy_v0_app "$C"
python3 - "$C" <<'PY'
import sys
from pathlib import Path
d = Path(sys.argv[1])
p = d / "src/App.tsx"; s = p.read_text()
s = s.replace("description: '记录课程练习',", "description: '记录课程练习',\n    url: 'https://linxiaoyu.github.io/notes/',")
s = s.replace("<h3 className=\"project-card__name\">{project.name}</h3>", "<h3 className=\"project-card__name\"><a href={project.url}>{project.name}</a></h3>")
p.write_text(s)
p = d / "PROMPT_V1.md"; s = p.read_text()
p.write_text(s.replace("项目卡不跳转，不编造 URL", "项目卡标题链接到作品页（我提供的地址）"))
PY
"${GIT[@]}" -C "$C" add -A && "${GIT[@]}" -C "$C" commit -qm "第 1 章：首页 v0，项目卡链接到作品"
rm -f "$A/CHECKPOINT.md" "$C/CHECKPOINT.md"
if [ "${STRIP_HINT:-0}" = 1 ]; then  # 模拟 course-starter 删掉 CHECKPOINTS.md 里“项目卡不跳转会在 2.1 用到”之后的效果
  for d in "$A" "$B" "$C"; do
    sed -i '' 's/；其中“项目卡不跳转”会在 2.1 用到//' "$d/CHECKPOINTS.md"
    "${GIT[@]}" -C "$d" commit -qam "（模拟）删掉 CHECKPOINTS.md 中的提示" || true
  done
fi
echo "$OUT"
