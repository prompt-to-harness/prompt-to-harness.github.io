#!/usr/bin/env python3
"""Serve one local review and only its explicit media files, with seek support."""
import argparse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import mimetypes
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit


def make_handler(directory):
    directory = Path(directory).resolve()
    data = json.loads((directory / 'review.json').read_text(encoding='utf-8'))
    routes = {'/': directory / 'review.html', '/review.html': directory / 'review.html'}
    routes.update({'/media/' + key: Path(value['path']) for key, value in data['media'].items()})

    class Handler(BaseHTTPRequestHandler):
        def do_HEAD(self):
            self.send_file(False)

        def do_GET(self):
            self.send_file(True)

        def send_file(self, body):
            path = routes.get(unquote(urlsplit(self.path).path))
            if path is None or not path.is_file():
                self.send_error(404)
                return
            size, start, end, status = path.stat().st_size, 0, path.stat().st_size - 1, 200
            byte_range = self.headers.get('Range')
            if byte_range:
                match = re.fullmatch(r'bytes=(\d*)-(\d*)', byte_range)
                if not match or not any(match.groups()):
                    self.send_error(416)
                    return
                left, right = match.groups()
                if left:
                    start = int(left)
                    end = min(int(right), end) if right else end
                else:
                    start = max(0, size - int(right))
                if start > end or start >= size:
                    self.send_response(416)
                    self.send_header('Content-Range', f'bytes */{size}')
                    self.end_headers()
                    return
                status = 206
            self.send_response(status)
            self.send_header('Content-Type', mimetypes.guess_type(path)[0] or 'application/octet-stream')
            self.send_header('Content-Length', str(end - start + 1))
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Cache-Control', 'no-store')
            if status == 206:
                self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
            self.end_headers()
            if body:
                try:
                    with path.open('rb') as stream:
                        stream.seek(start)
                        remaining = end - start + 1
                        while remaining:
                            block = stream.read(min(remaining, 128 * 1024))
                            if not block:
                                break
                            self.wfile.write(block)
                            remaining -= len(block)
                except (BrokenPipeError, ConnectionResetError):
                    pass
    return Handler


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('directory', type=Path)
    parser.add_argument('--port', type=int, default=8768)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), make_handler(args.directory))
    print(f'http://127.0.0.1:{server.server_port}/review.html', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
