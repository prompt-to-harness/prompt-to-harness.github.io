#!/bin/sh
# 启动课件预览服务并打开浏览器。用这个服务打开逐字稿页（speaker.html）时，口播可以逐句直接改，
# 保存后自动写回 script.json 并重建，没有授权弹窗。按 Ctrl-C 停止服务。
# 默认同时监听局域网：Pad 等别的设备按启动时打印的地址只读查看（编辑仍只限本机页面）。
# 用法：sh tools/edit-courseware.sh [--background] [--local] [端口，默认 8841]
# --local：只监听本机，不对局域网开放。（--lan 仍可传入，等同默认，兼容旧写法。）
set -eu
cd "$(dirname "$0")/.."
BACKGROUND=0
if [ "${1:-}" = "--background" ]; then BACKGROUND=1; shift; fi
LAN="--lan"
case "${1:-}" in
  --local) LAN=""; shift ;;
  --lan) shift ;;
esac
PORT="${1:-8841}"
URL="http://127.0.0.1:$PORT/courseware/"

editor_ready() {
  curl --max-time 2 -fs "http://127.0.0.1:$PORT/__script/ping" 2>/dev/null |
    python3 -c 'import json,sys; d=json.load(sys.stdin); sys.exit(0 if d.get("ok") is True else 1)' 2>/dev/null
}
wait_editor() {
  ATTEMPT=0
  until editor_ready; do
    ATTEMPT=$((ATTEMPT + 1))
    if [ "$ATTEMPT" -ge 20 ]; then echo "编辑接口未就绪，启动失败；请检查端口 $PORT 和服务日志。" >&2; return 1; fi
    sleep 0.25
  done
}
open_url() {
  if command -v open >/dev/null 2>&1; then open "$1"
  elif command -v xdg-open >/dev/null 2>&1; then xdg-open "$1"
  else echo "请在浏览器打开 $1"
  fi
}

# 服务已经在跑就只开浏览器，不重复启动。但要局域网而在跑的服务只监听本机时，
# 开浏览器也没用（Pad 连不上），直接说明并退出，免得以为已经开放了。
# lsof 里 *:端口 表示监听所有网卡；没有 lsof 时无法判断，按已开放处理。
if editor_ready; then
  if [ -n "$LAN" ] && command -v lsof >/dev/null 2>&1 \
     && ! lsof -nP -iTCP:"$PORT" -sTCP:LISTEN 2>/dev/null | grep -q '\*:'; then
    echo "端口 $PORT 上已有一个只监听本机的课件服务，Pad 连不上。请先停掉它（它所在终端按 Ctrl-C），再重新运行本脚本。" >&2
    exit 1
  fi
  echo "课件服务已在运行：$URL"
  open_url "$URL"
  exit 0
fi

if python3 -c 'import socket,sys; s=socket.socket(); s.settimeout(1); sys.exit(0 if s.connect_ex(("127.0.0.1", int(sys.argv[1]))) == 0 else 1)' "$PORT"; then
  echo "端口 $PORT 已被不提供编辑接口的服务占用。请停止该服务后重试；课件预览必须使用编辑服务。" >&2
  exit 1
fi

# Agent 启动的临时进程可能随执行会话退出；macOS 交给 launchd 托管。
if [ "$BACKGROUND" = 1 ]; then
  if [ "$(uname -s)" != Darwin ]; then
    echo "--background 当前支持 macOS；其他系统请在独立终端启动服务。" >&2
    exit 1
  fi
  ROOT_DIR="$(pwd)"
  UV_BIN="$(command -v uv)"
  LABEL="local.courseware.preview.$PORT"
  launchctl remove "$LABEL" 2>/dev/null || true
  launchctl submit -l "$LABEL" -o "/tmp/courseware-preview-$PORT.log" -e "/tmp/courseware-preview-$PORT-error.log" -- "$UV_BIN" run --project "$ROOT_DIR" "$ROOT_DIR/tools/serve-courseware.py" $LAN --port "$PORT"
  wait_editor
  echo "后台课件编辑服务：${URL}（停止：launchctl remove ${LABEL}）"
  open_url "$URL"
  exit 0
fi

(wait_editor && open_url "$URL") &
# 用 uv run 而不是系统 python3：保存口播会用同一个解释器重跑各节的 build-lesson.py，
# 其中 2.1 依赖 markdown-it-py（pyproject 的 viewers 组），系统 Python 里没有。
# $LAN 不加引号：为空时整个词消失，不会给服务传空参数
exec uv run tools/serve-courseware.py $LAN --port "$PORT"
