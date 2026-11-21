#!/usr/bin/env python3
"""Serve courseware and its Starter references from a consistent root.

Local only: speaker.html pages can also save narration edits. Each lesson's narration lives
in its script.json (the single source); a save rewrites that file and rebuilds lesson.js
through courseware/tools/rebuild-lesson.py. A lesson's opening (lesson.js `intro`, hand-written
lessons only) is not tied to any page, so its edits go straight into lesson.js. The published site is static, so the
edit endpoint does not exist there and the pages stay read-only.

`--lan` also listens on the local network (a Pad can read the narration pages). Only
courseware/ and starters/ are served to other machines, read-only: the repository root
holds private and unpublished material, and editing / ping answer loopback clients only.
"""
import argparse
import ipaddress
import json
import socket
import subprocess
import sys
import threading
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, parse_qs
from course_install_demo import launch_install_demo
from script_comments import CommentError, lesson_for, load_comments, mutate_comment, prune_orphan_comments

ROOT = Path(__file__).resolve().parents[1]
COURSEWARE = ROOT / 'courseware'
REBUILD = COURSEWARE / 'tools' / 'rebuild-lesson.py'
EDIT_PATH = '/__script/edit'
PING_PATH = '/__script/ping'
COMMENTS_PATH = '/__script/comments'
INSTALL_DEMO_PATH = '/__demo/install-terminal'
LESSON_PREFIX = 'window.lesson = '  # 与 rebuild-lesson.py 写出的格式一致
LOCAL_HOSTS = {'127.0.0.1', 'localhost'}
LOOPBACK_CLIENTS = {'127.0.0.1', '::1', '::ffff:127.0.0.1'}
REMOTE_ROOTS = (COURSEWARE.resolve(), (ROOT / 'starters').resolve())  # 其他机器只能读这两个目录
EDIT_LOCK = threading.Lock()


class EditError(Exception):
    pass


class EditConflict(EditError):
    def __init__(self, current):
        super().__init__('这段口播已在别处更新，请对照最新内容后保存')
        self.current = current


def rebuild(lesson_dir):
    result = subprocess.run([sys.executable, str(REBUILD), str(lesson_dir)], cwd=ROOT, capture_output=True, text=True, timeout=120)
    if result.returncode:
        raise EditError('重建失败：' + (result.stderr or result.stdout).strip()[-600:])


def write_scripts(path, scripts):
    path.write_text(json.dumps(scripts, ensure_ascii=False, indent=2) + '\n')


def apply_edit(payload):
    page = (ROOT / payload['page'].lstrip('/')).resolve()
    lesson_dir = page.parent
    path = lesson_dir / 'script.json'
    if COURSEWARE not in lesson_dir.parents or not path.exists():
        raise EditError('找不到这一页对应的 script.json')
    # 单换行属于同一编辑段；空行是现有源稿的段落坐标分隔符。
    old = payload['old']
    new = '\n'.join(line for line in payload['new'].replace('\r\n', '\n').replace('\r', '\n').split('\n') if line.strip()).strip()
    if payload.get('screen') is not None:
        return apply_screen_edit(lesson_dir, payload, old, new)
    if payload.get('intro') is not None:
        return apply_intro_edit(lesson_dir, payload['intro'], old, new)
    original = path.read_text()
    scripts = json.loads(original)
    if payload['scene'] not in scripts:
        raise EditError(f"这一节没有页面 {payload['scene']}，请刷新页面")
    paragraphs = scripts[payload['scene']]
    step = payload['step']
    if not 0 <= step < len(paragraphs):
        raise EditError('这一步不存在，请刷新页面')
    # 一步口播可含以空行分隔的多段（操作提示与口播）；part 指其中一段
    parts = paragraphs[step].split('\n\n')
    part = payload.get('part', 0)
    if not 0 <= part < len(parts):
        raise EditError('段落位置已改变，请保留草稿并刷新页面核对')
    if parts[part] != old:
        raise EditConflict(parts[part])
    # 清空文字就是删除该段口播，但保留空位置；移除数组项会让后续
    # screen-plan 引用、已打开页面的编辑坐标和评论锚点全部错位。
    parts[part] = new
    paragraphs[step] = '\n\n'.join(parts)
    write_scripts(path, scripts)
    try:
        rebuild(lesson_dir)
    except Exception:
        path.write_text(original)
        rebuild(lesson_dir)
        raise
    return {'source': str(path.relative_to(ROOT)), 'text': new}


def apply_screen_edit(lesson_dir, payload, old, new):
    path = lesson_dir / 'screen-plan.js'
    prefix = 'window.narrationData = '
    if not path.exists():
        raise EditError('找不到讲述源文件')
    original = path.read_text()
    if not original.startswith(prefix):
        raise EditError('讲述源格式不支持编辑')
    data = json.loads(original[len(prefix):].strip().removesuffix(';'))
    def walk(items):
        for item in items:
            yield item
            yield from walk(item.get('groups', []) + item.get('screens', []))
    matches = [item for item in walk(data['parts']) if item['id'] == payload['screen']]
    if len(matches) != 1 or 'script' not in matches[0] or matches[0].get('ppt'):
        raise EditError('没有唯一对应的讲述稿，请刷新页面')
    item = matches[0]
    parts = item['script'].split('\n\n')
    part = payload.get('part', 0)
    if not 0 <= part < len(parts):
        raise EditError('段落位置已改变，请保留草稿并刷新页面核对')
    if parts[part] != old:
        raise EditConflict(parts[part])
    parts[part] = new
    item['script'] = '\n\n'.join(parts)
    path.write_text(prefix + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
    return {'source': str(path.relative_to(ROOT)), 'text': new}


def apply_intro_edit(lesson_dir, index, old, new):
    # 开场白只在手写 lesson.js 里；由构建脚本生成的节没有 intro，这里也改不到
    path = lesson_dir / 'lesson.js'
    if (lesson_dir / 'tools' / 'build-lesson.py').exists():
        raise EditError('这一节的 lesson.js 由构建脚本生成，开场白请改源文件')
    original = path.read_text()
    lesson = json.loads(original.removeprefix(LESSON_PREFIX).strip().removesuffix(';'))
    intro = lesson.get('intro', [])
    if not 0 <= index < len(intro):
        raise EditError('开场白位置已改变，请保留草稿并刷新页面核对')
    if intro[index] != old:
        raise EditConflict(intro[index])
    intro[index] = new
    path.write_text(LESSON_PREFIX + json.dumps(lesson, ensure_ascii=False, indent=2) + ';\n')
    try:
        rebuild(lesson_dir)  # 顺带核对 script.json 与 lesson.js 仍然一致
    except Exception:
        path.write_text(original)
        raise
    return {'source': str(path.relative_to(ROOT)), 'text': new}


class Handler(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        if Path(path).suffix.lower() == '.md':
            return 'text/plain; charset=utf-8'
        return super().guess_type(path)

    def send_json(self, status, body):
        data = json.dumps(body, ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def end_headers(self):
        # Edits rebuild lesson.js; never let the browser serve a stale copy.
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def loopback_client(self):
        return self.client_address[0] in LOOPBACK_CLIENTS

    def remote_readable(self):
        # translate_path 已经去掉 .. 和查询串；resolve 再挡住符号链接跳出白名单
        target = Path(self.translate_path(self.path)).resolve()
        if target.name in {'comments.json', '.comments.lock'} or target.name.startswith('.comments-'):
            return False
        return any(target == root or root in target.parents for root in REMOTE_ROOTS)

    def do_GET(self):
        if self.path == PING_PATH:
            # 只有本机能编辑；别的机器 ping 不通，逐字稿页就保持只读
            if not self.loopback_client():
                return self.send_error(HTTPStatus.NOT_FOUND)
            return self.send_json(HTTPStatus.OK, {'ok': True, 'comments': True, 'installDemo': True})
        if urlsplit(self.path).path == COMMENTS_PATH:
            if not self.loopback_client():
                return self.send_error(HTTPStatus.NOT_FOUND)
            try:
                page = parse_qs(urlsplit(self.path).query).get('page', [''])[0]
                data = prune_orphan_comments(lesson_for(page))
            except (CommentError, OSError, ValueError) as error:
                return self.send_json(HTTPStatus.BAD_REQUEST, {'error': str(error)})
            return self.send_json(HTTPStatus.OK, data)
        if not self.loopback_client() and not self.remote_readable():
            return self.send_error(HTTPStatus.NOT_FOUND)
        super().do_GET()

    def do_HEAD(self):
        if not self.loopback_client() and not self.remote_readable():
            return self.send_error(HTTPStatus.NOT_FOUND)
        super().do_HEAD()

    def local_request(self):
        # 只接受本机页面发来的 JSON：Origin 挡住别的网站借浏览器发写请求，
        # 客户端地址挡住局域网里伪造 Origin 的直接请求（--lan 时必需）
        origin = urlsplit(self.headers.get('Origin', '')).hostname
        return self.loopback_client() and origin in LOCAL_HOSTS and self.headers.get('Content-Type', '').startswith('application/json')

    def do_POST(self):
        if self.path not in {EDIT_PATH, COMMENTS_PATH, INSTALL_DEMO_PATH}:
            return self.send_error(HTTPStatus.NOT_FOUND)
        if not self.local_request():
            return self.send_json(HTTPStatus.FORBIDDEN, {'error': '只接受本机页面的请求'})
        try:
            length = int(self.headers.get('Content-Length', 0))
            if not 0 < length <= 1024 * 1024:
                return self.send_json(HTTPStatus.BAD_REQUEST, {'error': '请求大小无效'})
            payload = json.loads(self.rfile.read(length))
            if not isinstance(payload, dict):
                raise ValueError('JSON object required')
            if self.path == INSTALL_DEMO_PATH:
                if self.headers.get('Origin') != 'http://' + self.headers.get('Host', ''):
                    return self.send_json(HTTPStatus.FORBIDDEN, {'error': '只接受同源页面请求'})
                result = launch_install_demo(payload)
                return self.send_json(HTTPStatus.OK, result)
            with EDIT_LOCK:
                result = mutate_comment(payload) if self.path == COMMENTS_PATH else apply_edit(payload)
        except EditConflict as error:
            return self.send_json(HTTPStatus.CONFLICT, {'error': str(error), 'current': error.current})
        except (EditError, CommentError) as error:
            return self.send_json(HTTPStatus.CONFLICT, {'error': str(error)})
        except (KeyError, ValueError, TypeError, OSError, subprocess.SubprocessError) as error:
            return self.send_json(HTTPStatus.BAD_REQUEST, {'error': f'请求无效：{error!r}'})
        if self.path == EDIT_PATH:
            where = f"讲述段 {payload['screen']}" if payload.get('screen') is not None else f'开场白第 {payload["intro"] + 1} 段' if payload.get('intro') is not None else f'{payload["scene"]} 第 {payload["step"] + 1} 步'
            print(f'edited {result["source"]} · {where}', flush=True)
        self.send_json(HTTPStatus.OK, result)


PRIVATE_LAN = [ipaddress.ip_network(net) for net in ('10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16')]


def lan_address():
    # 只认私网地址：开着 VPN 时默认路由是隧道（如 100.64.0.0/10 的 utun），手机在 Wi-Fi 上连不到它。
    # 先问 macOS 的 Wi-Fi/有线网卡；再连一个外网地址让系统选出口网卡（UDP 不会真的发包）。
    found = []
    for name in ('en0', 'en1', 'en2'):
        result = subprocess.run(['ipconfig', 'getifaddr', name], capture_output=True, text=True) if sys.platform == 'darwin' else None
        if result and result.returncode == 0:
            found.append(result.stdout.strip())
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as probe:
        try:
            probe.connect(('192.0.2.1', 9))
            found.append(probe.getsockname()[0])
        except OSError:
            pass
    for ip in found:
        if any(ipaddress.ip_address(ip) in net for net in PRIVATE_LAN):
            return ip
    return None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8841)
    parser.add_argument('--lan', action='store_true', help='also listen on the local network (read-only courseware/ and starters/)')
    args = parser.parse_args()
    handler = partial(Handler, directory=str(ROOT))
    with ThreadingHTTPServer(('0.0.0.0' if args.lan else '127.0.0.1', args.port), handler) as server:
        port = server.server_port
        print(f'Courseware: http://127.0.0.1:{port}/courseware/', flush=True)
        print('讲述页（speaker.html）支持修改已有口播和评论，分别保存到 script.json 与 comments.json。', flush=True)
        if args.lan:
            ip = lan_address()
            print('局域网只读（只开放 courseware/ 与 starters/，编辑只限本机 127.0.0.1 打开的页面）：', flush=True)
            if ip:
                print(f'  手机/Pad 打开 http://{ip}:{port}/courseware/', flush=True)
            else:
                print('  没找到私网地址（可能没连 Wi-Fi），请用 ifconfig 查本机局域网 IP 后自己拼地址。', flush=True)
            host = socket.gethostname()
            print(f'  或     http://{host if "." in host else host + ".local"}:{port}/courseware/', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
