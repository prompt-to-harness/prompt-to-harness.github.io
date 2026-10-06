#!/usr/bin/env bash
# 第 3 章追赶实验的起点：本地“课程起点仓库”（代替 course-starter，带 ch03-start-v1 标签）与两种学员仓库。
# 用法：courseware/ch03/materials/catchup/setup-states.sh <目标目录>   # 默认 <本仓库>/lab-runs/ch03-catchup/base
# ch03-start-v1 用第 2 章冻结候选（首页 v1）加一份标准的 Pages 发布配置，是讲师构造的草案：
# 真实标签要等第 2 章录制版发布后由讲师制作。
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$HERE/../../../.." && pwd)"
OUT="${1:-$REPO/lab-runs/ch03-catchup/base}"
V1="$REPO/starters/personal-homepage/ch02-candidate"
[ -e "$OUT" ] && { echo "已存在：$OUT" >&2; exit 1; }
mkdir -p "$OUT"; OUT="$(cd "$OUT" && pwd)"
GIT=(git -c user.name="讲师排练" -c user.email=rehearsal@example.invalid)

add_pages() {  # add_pages <目录> <仓库名>：Vite base 与 GitHub 官方 Pages 工作流
  python3 - "$1/vite.config.ts" "$2" <<'PY'
import sys
p, name = sys.argv[1], sys.argv[2]
s = open(p).read()
s = s.replace("plugins: [react()],", f"base: '/{name}/',\n  plugins: [react()],")
open(p, "w").write(s)
PY
  mkdir -p "$1/.github/workflows"
  cat > "$1/.github/workflows/deploy.yml" <<'YML'
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
YML
}

# 课程起点仓库：ch03-start-v1 = 首页 v1 + 发布配置（仓库名用课程示例 my-homepage）
"${GIT[@]}" init -q --bare "$OUT/course-starter.git"
W="$OUT/work"; cp -R "$V1" "$W"; rm -rf "$W/node_modules" "$W/dist"
add_pages "$W" my-homepage
"${GIT[@]}" -C "$W" init -q -b main && "${GIT[@]}" -C "$W" add -A && "${GIT[@]}" -C "$W" commit -qm "第 3 章参考起点（草案）"
"${GIT[@]}" -C "$W" tag ch03-start-v1 && "${GIT[@]}" -C "$W" push -q "$OUT/course-starter.git" main ch03-start-v1
rm -rf "$W"

personal() {  # 把示例同学换成学员自己的内容
  python3 - "$1" <<'PY'
import sys
from pathlib import Path
d = Path(sys.argv[1])
for f in ["src/App.tsx", "index.html"]:
    p = d / f; s = p.read_text()
    s = s.replace("示例同学", "林小雨").replace("正在学习 AI 协作开发。", "前端初学者，喜欢用照片记录城市。")
    s = s.replace("红绿灯感知量产", "街拍周记").replace("城市 NOA 红绿灯感知模块的量产方案设计、部署与加速", "每周整理一组城市街拍")
    p.write_text(s)
PY
}

# (a) 做完第 2 章：自己的内容、自己的仓库名、已发布
A="$OUT/student-a-done"; cp -R "$V1" "$A"; rm -rf "$A/node_modules" "$A/dist"; personal "$A"; add_pages "$A" lin-homepage
"${GIT[@]}" -C "$A" init -q -b main && "${GIT[@]}" -C "$A" add -A && "${GIT[@]}" -C "$A" commit -qm "第 2 章：v1 与发布配置（我的内容）"

# (b) 只做到 2.3：v1 已提交，没有发布配置
B="$OUT/student-b-no-pages"; cp -R "$V1" "$B"; rm -rf "$B/node_modules" "$B/dist"; personal "$B"
"${GIT[@]}" -C "$B" init -q -b main && "${GIT[@]}" -C "$B" add -A && "${GIT[@]}" -C "$B" commit -qm "第 2 章：v1（还没发布）"
echo "$OUT"
