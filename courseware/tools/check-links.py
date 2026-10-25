#!/usr/bin/env python3
"""课件里的外部链接：校验、列清单、在线检查。

链接一律写成每页的 refs（见 docs/production/lesson-authoring-playbook.md 的“外部链接”）：
kind=live 在画面最下一行，录制时点开；kind=read 只在阅读模式与讲解全文列出。
本脚本读取所有 lesson.js，收集三种来源的链接：refs、页面 HTML 里直接写的 <a href>、
口播与讲解文字里的裸网址（后者在页面上点不了，按错误处理，应改成 refs）。

    python3 courseware/tools/check-links.py            # 离线校验（make check）
    python3 courseware/tools/check-links.py --list     # 按章、节、页列出全部链接
    python3 courseware/tools/check-links.py --online   # 逐个访问，报告打不开的（需联网，不进 CI）

链接到长文某一段时用文本片段 #:~:text=…（由 lessonkit.ref 的 quote 生成）；--online 顺带核对那段文字还在原文里，
页面要登录、拦截脚本访问或靠脚本渲染时取不到正文，只提示人工打开核对，不算错误。
"""
import json
import re
import sys
import urllib.error
import urllib.parse
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
                if '#:~:text=' in url and not fragment_text(url):
                    errors.append(f'{where}: 文本片段链接没有引用文字，用 lessonkit.ref 的 quote 生成：{url}')
                links.append((path, scene['id'], ref.get('kind', '?'), ref.get('text', ''), url))
            # 外部佐证页（截图、重画）的原文链接要在画面上：至少一条 live（docs/production/external-sources.md）
            html = scene.get('html', '')
            evidence = scene.get('layout') == 'evidence-scene' or 'p-shot' in html or '重画' in html
            if evidence and not any(ref.get('kind') == 'live' for ref in scene.get('refs', [])):
                errors.append(f'{where}: 外部佐证页的原文链接要显示在画面上，refs 至少一条 kind="live"')
            for url in HREF.findall(html):
                if not skip(url):
                    links.append((path, scene['id'], 'html', '', url))
            for step in scene.get('repro', {}).get('steps', []):
                for link in step.get('links', []):
                    url = link.get('url', '')
                    if not link.get('text') or link['text'] not in step.get('text', '') or not url.startswith('https://'):
                        errors.append(f'{where}: 步骤链接需要出现在步骤文字里，并使用 https 网址：{link}')
                    elif not skip(url):
                        links.append((path, scene['id'], 'html', link['text'], url))
            prose = [scene.get('lead', ''), *scene.get('script', []), *(t['text'] for t in scene.get('teaching', []))]
            for url in URL.findall('\n'.join(prose)):
                if not skip(url):
                    errors.append(f'{where}: 口播或讲解里的网址在页面上点不了，改写成 refs：{url}')
                    links.append((path, scene['id'], 'text', '', url))
    return links, errors


def fragment_text(url):
    """文本片段 #:~:text=开头[,结尾] 里的引用文字（只取开头一段）。"""
    _, _, fragment = url.partition('#:~:text=')
    return urllib.parse.unquote(fragment.split('&')[0].split(',')[0])


def page_text(url):
    """取网页正文，取不到时返回 None；只用于核对文本片段，不解析脚本渲染的内容。"""
    request = urllib.request.Request(url, headers={'User-Agent': 'prompt-to-harness link check'})
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            html = response.read().decode('utf-8', 'replace')
    except (urllib.error.URLError, TimeoutError):
        return None
    return re.sub(r'\s+', '', re.sub(r'<[^>]+>', '', html))


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
    notes = []
    if '--online' in sys.argv:
        pages = {url.split('#')[0] for url in {link[4] for link in links}}
        status = {page: reachable(page) for page in sorted(pages)}  # 同一页面的几个段落链接只访问一次
        for page, code in status.items():
            if not (isinstance(code, int) and code < 400):
                errors.append(f'打不开（{code}）：{page}')
        for url in sorted({link[4] for link in links}):
            code = status[url.split('#')[0]]
            if '#:~:text=' in url and isinstance(code, int) and code < 400:
                quote, text = fragment_text(url), page_text(url.split('#')[0])
                if text is None or re.sub(r'\s+', '', quote) not in text:
                    notes.append(f'提示：没在取到的正文里找到“{quote}”，请在浏览器打开核对：{url}')
    for note in notes:
        print(note)
    for error in errors:
        print(error)
    print(f'{len(links)} external links, {len({link[4] for link in links})} unique, {len(errors)} errors')
    return bool(errors)


if __name__ == '__main__':
    sys.exit(main())
