#!/usr/bin/env python3
"""Serve courseware and its Starter references from a consistent root.

Local only: speaker.html pages can also save narration edits. Each lesson's narration lives
in its script.json (the single source); a save rewrites that file and rebuilds lesson.js
through courseware/tools/rebuild-lesson.py. A lesson's opening (lesson.js `intro`, hand-written
lessons only) is not tied to any page, so its edits go straight into lesson.js. The published site is static, so the
edit endpoint does not exist there and the pages stay read-only.
"""
import argparse
import json
import subprocess
import sys
import threading
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
COURSEWARE = ROOT / 'courseware'
REBUILD = COURSEWARE / 'tools' / 'rebuild-lesson.py'
EDIT_PATH = '/__script/edit'
PING_PATH = '/__script/ping'
LESSON_PREFIX = 'window.lesson = '  # 与 rebuild-lesson.py 写出的格式一致
LOCAL_HOSTS = {'127.0.0.1', 'localhost'}
EDIT_LOCK = threading.Lock()


class EditError(Exception):
    pass


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
    old, new = payload['old'], ' '.join(payload['new'].split())
    if not new:
        raise EditError('不能把一句口播改成空的；要删句请改源文件')
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
    if not 0 <= part < len(parts) or parts[part] != old:
        raise EditError('这句话已经在别处被改过，请刷新页面后再改')
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


def apply_intro_edit(lesson_dir, index, old, new):
    # 开场白只在手写 lesson.js 里；由构建脚本生成的节没有 intro，这里也改不到
    path = lesson_dir / 'lesson.js'
    if (lesson_dir / 'tools' / 'build-lesson.py').exists():
        raise EditError('这一节的 lesson.js 由构建脚本生成，开场白请改源文件')
    original = path.read_text()
    lesson = json.loads(original.removeprefix(LESSON_PREFIX).strip().removesuffix(';'))
    intro = lesson.get('intro', [])
    if not 0 <= index < len(intro) or intro[index] != old:
        raise EditError('这句话已经在别处被改过，请刷新页面后再改')
    intro[index] = new
    path.write_text(LESSON_PREFIX + json.dumps(lesson, ensure_ascii=False, indent=2) + ';\n')
    try:
        rebuild(lesson_dir)  # 顺带核对 script.json 与 lesson.js 仍然一致
    except Exception:
        path.write_text(original)
        raise
    return {'source': str(path.relative_to(ROOT)), 'text': new}


class Handler(SimpleHTTPRequestHandler):
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

    def do_GET(self):
        if self.path == PING_PATH:
            return self.send_json(HTTPStatus.OK, {'ok': True})
        super().do_GET()

    def local_request(self):
        # 只接受本机页面发来的 JSON：挡住别的网站借浏览器向 127.0.0.1 发写请求
        origin = urlsplit(self.headers.get('Origin', '')).hostname
        return origin in LOCAL_HOSTS and self.headers.get('Content-Type', '').startswith('application/json')

    def do_POST(self):
        if self.path != EDIT_PATH:
            return self.send_error(HTTPStatus.NOT_FOUND)
        if not self.local_request():
            return self.send_json(HTTPStatus.FORBIDDEN, {'error': '只接受本机页面的请求'})
        try:
            payload = json.loads(self.rfile.read(int(self.headers.get('Content-Length', 0))))
            with EDIT_LOCK:
                result = apply_edit(payload)
        except EditError as error:
            return self.send_json(HTTPStatus.CONFLICT, {'error': str(error)})
        except (KeyError, ValueError, TypeError, subprocess.TimeoutExpired) as error:
            return self.send_json(HTTPStatus.BAD_REQUEST, {'error': f'请求无效：{error!r}'})
        where = f'开场白第 {payload["intro"] + 1} 段' if payload.get('intro') is not None else f'{payload["scene"]} 第 {payload["step"] + 1} 步'
        print(f'edited {result["source"]} · {where}', flush=True)
        self.send_json(HTTPStatus.OK, result)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8841)
    args = parser.parse_args()
    handler = partial(Handler, directory=str(ROOT))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        print(f'Courseware: http://127.0.0.1:{server.server_port}/courseware/', flush=True)
        print('逐字稿页（speaker.html）可直接改句子，保存后写回 script.json 并重建。', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
