#!/usr/bin/env python3
"""Start the gallery and all archived games on one persistent local server."""
from __future__ import annotations

import argparse
import functools
import json
import os
from pathlib import Path
import signal
import subprocess
import sys
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.error import URLError
from urllib.request import urlopen

HERE = Path(__file__).resolve().parent
OUT = HERE.parents[1] / 'lab-runs/ch03-showcase'
APP = 'ch03-showcase'
HEALTH = '/__showcase/health'


def inventory():
    raw = (OUT / 'data.js').read_text(encoding='utf-8')
    records = json.loads(raw.split('=', 1)[1].strip().rstrip(';'))
    missing = [r['id'] for r in records if not (OUT / r['game']).is_file()]
    return records, missing


def probe(port):
    try:
        with urlopen(f'http://127.0.0.1:{port}{HEALTH}', timeout=1) as response:
            value = json.load(response)
            if value.get('app') == APP:
                return value
    except (URLError, TimeoutError, ValueError, OSError):
        pass
    return None


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def do_GET(self):
        if self.path.split('?', 1)[0] == HEALTH:
            records, missing = inventory()
            payload = json.dumps({'app': APP, 'pid': os.getpid(),
                                  'games': len(records), 'missing': missing}).encode()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
            return
        super().do_GET()


def serve(port):
    signal.signal(signal.SIGHUP, signal.SIG_IGN)
    handler = functools.partial(Handler, directory=str(OUT))
    server = ThreadingHTTPServer(('127.0.0.1', port), handler)
    server.daemon_threads = True
    print(f'Gallery + all games: http://127.0.0.1:{port}/', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=4397)
    parser.add_argument('--foreground', action='store_true')
    parser.add_argument('--status', action='store_true')
    parser.add_argument('--stop', action='store_true')
    parser.add_argument('--no-build', action='store_true', help='Use an already built gallery')
    args = parser.parse_args()
    if args.status or args.stop:
        state = probe(args.port)
        if not state:
            print('汇总服务未运行'); return
        if args.stop:
            os.kill(state['pid'], signal.SIGTERM)
            print('汇总服务已停止'); return
        print(json.dumps(state, ensure_ascii=False)); return
    if not args.no_build:
        subprocess.run([sys.executable, str(HERE / 'build.py')], check=True)
    records, missing = inventory()
    if missing:
        raise SystemExit('缺少游戏产物：' + ', '.join(missing))
    if args.foreground:
        serve(args.port); return
    state = probe(args.port)
    if not state:
        log = OUT / 'server.log'
        with log.open('ab') as stream:
            child = subprocess.Popen(
                [sys.executable, str(Path(__file__).resolve()), '--foreground', '--no-build',
                 '--port', str(args.port)], stdin=subprocess.DEVNULL,
                stdout=stream, stderr=stream, start_new_session=True, close_fds=True)
        for _ in range(50):
            state = probe(args.port)
            if state: break
            if child.poll() is not None:
                raise SystemExit(f'服务启动失败，端口可能被占用。日志：{log}')
            time.sleep(0.1)
        if not state:
            child.terminate()
            raise SystemExit(f'服务未就绪。日志：{log}')
    print(f'http://127.0.0.1:{args.port}/ — 汇总页与 {len(records)} 个游戏已就绪')
    print('服务独立运行，关闭启动终端不会停止。')


if __name__ == '__main__':
    main()
