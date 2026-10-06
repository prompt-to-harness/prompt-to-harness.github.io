#!/usr/bin/env python3
"""课件里的外部链接：校验、列清单、在线检查。

链接一律写成每页的 refs（见 docs/production/lesson-authoring-playbook.md 的“外部链接”）：
kind=live 在画面最下一行，录制时点开；kind=read 只在阅读模式与讲解全文列出。
本脚本读取所有 lesson.js，收集三种来源的链接：refs、页面 HTML 里直接写的 <a href>、
口播与讲解文字里的裸网址（后者在页面上点不了，按错误处理，应改成 refs）。

    python3 courseware/tools/check-links.py            # 离线校验（make check）
    python3 courseware/tools/check-links.py --list     # 按章、节、页列出全部链接
    python3 courseware/tools/check-links.py --online   # 逐个访问，报告打不开的（需联网，不进 CI）
"""
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

courseware = Path(__file__).resolve().parents[1]
URL = re.compile(r'https?://[^\s"\'<>）)，。；、]+')
HREF = re.compile(r'href="(https?://[^"]+)"')
# 指向会变的分支，课程录好后内容会悄悄变化
UNPINNED = re.compile(r'github\.com/[^/]+/[^/]+/(blob|tree)/(main|master|HEAD)/')


def skip(url):
    return '<' in url or '://localhost' in url or '://127.0.0.1' in url


def lessons():
    for path in sorted(courseware.rglob('lesson.js')):
        if 'archive' in path.parts:
            continue
        text = re.sub(r'^\s*window\.lesson\s*=\s*', '', path.read_text()).rstrip().rstrip(';')
        yield path.relative_to(courseware.parent), json.loads(text)


def collect():
    links, errors = [], []
    for path, lesson in lessons():
        for scene in lesson['scenes']:
            where = f'{path}#{scene["id"]}'
            for ref in scene.get('refs', []):
                url = ref.get('url', '')
                if ref.get('kind') not in ('live', 'read'):
                    errors.append(f'{where}: refs 的 kind 只能是 live 或 read：{ref}')
                if not ref.get('text') or not url.startswith('https://'):
                    errors.append(f'{where}: refs 需要 text 和 https 网址：{ref}')
                if UNPINNED.search(url):
                    errors.append(f'{where}: 链接指向会变的分支，改成固定提交：{url}')
                links.append((path, scene['id'], ref.get('kind', '?'), ref.get('text', ''), url))
            for url in HREF.findall(scene.get('html', '')):
                if not skip(url):
                    links.append((path, scene['id'], 'html', '', url))
            prose = [scene.get('lead', ''), *scene.get('script', []), *(t['text'] for t in scene.get('teaching', []))]
            for url in URL.findall('\n'.join(prose)):
                if not skip(url):
                    errors.append(f'{where}: 口播或讲解里的网址在页面上点不了，改写成 refs：{url}')
                    links.append((path, scene['id'], 'text', '', url))
    return links, errors


def reachable(url):
    for method in ('HEAD', 'GET'):
        request = urllib.request.Request(url, method=method, headers={'User-Agent': 'prompt-to-harness link check'})
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                return response.status
        except urllib.error.HTTPError as error:
            if method == 'GET' or error.code not in (403, 405):
                return error.code
        except (urllib.error.URLError, TimeoutError) as error:
            return str(getattr(error, 'reason', error))
    return 'unknown'


def main():
    links, errors = collect()
    if '--list' in sys.argv:
        kinds = {'live': '画面上', 'read': '延伸', 'html': '页面内嵌', 'text': '裸网址'}
        current = None
        for path, scene, kind, text, url in links:
            if path != current:
                print(f'\n## {path.parent}')
                current = path
            print(f'- {scene} · {kinds.get(kind, kind)} · {text + " · " if text else ""}{url}')
        print()
    if '--online' in sys.argv:
        for url in sorted({link[4] for link in links}):
            status = reachable(url)
            if not (isinstance(status, int) and status < 400):
                errors.append(f'打不开（{status}）：{url}')
    for error in errors:
        print(error)
    print(f'{len(links)} external links, {len({link[4] for link in links})} unique, {len(errors)} errors')
    return bool(errors)


if __name__ == '__main__':
    sys.exit(main())
