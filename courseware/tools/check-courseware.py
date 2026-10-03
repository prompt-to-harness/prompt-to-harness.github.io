#!/usr/bin/env python3
"""Check local links, resources and scene anchors without a browser."""
import argparse
import json
import re
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--chapter", type=Path, help="Limit the check to one chapter directory; default checks all courseware")
args = parser.parse_args()
courseware = Path(__file__).resolve().parents[1]
root = args.chapter.resolve() if args.chapter else courseware
resources = courseware.parent
content_roots = (root, resources / 'starters')


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []
        self.scripts = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        for key in ('href', 'src', 'data-lesson-page'):
            if attrs.get(key):
                self.links.append(attrs[key])
        if tag == 'script' and attrs.get('src'):
            self.scripts.append(attrs['src'])


pages = {}
references = []
scene_count = 0
for path in sorted(p for directory in content_roots for p in directory.rglob('*.html')):
    page = Page()
    page.feed(path.read_text())
    for script in list(page.scripts):
        source = path.parent / script
        if source.name != 'lesson.js' or not source.is_file():
            continue
        data = json.loads(source.read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
        if path.name == 'index.html':
            scene_count += len(data['scenes'])
        for scene in data['scenes']:
            page.ids.add(scene['id'])
            page.ids.add('heading-' + scene['id'])
            # These HTML strings are inserted into the current document.
            page.feed(scene.get('html', ''))
            page.feed(scene.get('notes', ''))
    pages[path.resolve()] = page
    references.extend((path, url) for url in page.links)

for path in sorted(courseware.rglob('*.css')):
    references.extend((path, url) for url in re.findall(r'url\([\'\"]?([^\'\")]+)', path.read_text()))
markdown_files = [p for directory in content_roots for p in directory.rglob('*.md')]
markdown_files += [resources / 'WORKSPACE.md', resources / 'courseware/README.md']
for path in sorted(markdown_files):
    references.extend((path, url) for url in re.findall(r'\]\(([^\s)]+)\)', path.read_text()))

errors = []
checked = 0
for source, url in references:
    parts = urlsplit(unescape(url))
    if parts.scheme or parts.netloc or parts.path.startswith('/'):
        continue
    target = (source.parent / unquote(parts.path)).resolve() if parts.path else source.resolve()
    checked += 1
    if not target.exists():
        errors.append(f'{source.relative_to(resources)}: missing {url}')
    elif parts.fragment and target in pages and unquote(parts.fragment) not in pages[target].ids:
        errors.append(f'{source.relative_to(resources)}: missing anchor {url}')

# 播放页外壳：各章共用同一套播放器，页面必须加载同一组共享文件，且人像辅助框默认隐藏。
# 外壳是人工保持一致的，漏掉其中一项（如 body 缺 camera-hidden）不会报错，只会在录制时才发现。
shared_assets = ('shared/tokens.css', 'shared/styles.css', 'shared/presentation.css', 'shared/app.js', 'shared/presentation.js', 'shared/parts/parts.css', 'shared/parts/parts.js')
for path in sorted(root.rglob('index.html')):
    if 'archive' in path.parts:
        continue
    text = path.read_text()
    if 'id="camera-toggle"' not in text:
        continue
    name = path.relative_to(resources)
    body = re.search(r'<body[^>]*>', text)
    if not body or 'camera-hidden' not in body.group(0):
        errors.append(f'{name}: <body> 缺 camera-hidden，人像辅助框不会默认隐藏')
    if 'class="camera-guide"' not in text:
        errors.append(f'{name}: 有「显示人像辅助框」按钮但缺 .camera-guide 元素')
    linked = {(path.parent / unescape(u)).resolve() for u in re.findall(r'(?:href|src)="([^"]+)"', text) if not urlsplit(u).scheme}
    for asset in shared_assets:
        if (courseware / asset).resolve() not in linked:
            errors.append(f'{name}: 没有加载 {asset}')

# 字体缺字：全课文字中的汉字必须都在各字体子集里，否则会回退系统字体显示。
# 覆盖表由 subset-fonts.py 生成；这里只用标准库比对，范围与 subset-fonts.py 一致。
coverage = json.loads((courseware / 'tools' / 'font-coverage.json').read_text())
font_text = ''.join(
    p.read_text(errors='ignore')
    for base in (courseware, resources / 'demos' / 'parts')
    for p in sorted(base.rglob('*'))
    if p.suffix in {'.js', '.html', '.css', '.md', '.svg'} and 'archive' not in p.parts and 'fonts' not in p.parts
)
han = {c for c in font_text if '\u4e00' <= c <= '\u9fff'}
for font_id in ('title', 'cover', 'sans'):
    missing = sorted(han - set(coverage[font_id]))
    if missing:
        errors.append(f"字体 {font_id} 缺 {len(missing)} 字：{''.join(missing[:30])} —— 运行 courseware/tools/subset-fonts.py 重建子集（见 docs/production/fonts.md）")

for error in errors:
    print(error)
print(f'{len(pages)} HTML pages, {scene_count} scenes, {checked} local references, {len(errors)} errors')
import subprocess, sys
editorial = subprocess.run([sys.executable, str(Path(__file__).with_name('check-editorial.py'))])
raise SystemExit(bool(errors) or bool(editorial.returncode))
