#!/bin/sh
# 启动课件预览服务并打开浏览器。用这个服务打开逐字稿页（speaker.html）时，口播可以逐句直接改，
# 保存后自动写回 script.json 并重建，没有授权弹窗。按 Ctrl-C 停止服务。
# 用法：sh tools/edit-courseware.sh [端口，默认 8841]
set -eu
cd "$(dirname "$0")/.."
PORT="${1:-8841}"
URL="http://127.0.0.1:$PORT/courseware/"

open_url() {
  if command -v open >/dev/null 2>&1; then open "$1"
  elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$1"
  else echo "请在浏览器打开 $1"
  fi
}

# 服务已经在跑就只开浏览器，不重复启动
if curl -fs "http://127.0.0.1:$PORT/__script/ping" >/dev/null 2>&1; then
  echo "课件服务已在运行：$URL"
  open_url "$URL"
  exit 0
fi

(sleep 1; open_url "$URL") &
exec python3 tools/serve-courseware.py --port "$PORT"
