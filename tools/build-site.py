#!/usr/bin/env python3
"""Build the public GitHub Pages site into _site/.

The site carries public courseware and its interactive examples, plus the
offline setup-check page that lesson 1.1 embeds. Markdown notes, speaker/script
pages, production files and archives stay out of the site.

Usage: python3 tools/build-site.py [--out DIR]
Exits non-zero if a published page links to a file that is not in the site.
"""
import argparse
import json
import re
import shutil
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
MEMORY_LESSON = Path('ch03/lessons/01-memory-game')
MEMORY_GAMES = f'courseware/{MEMORY_LESSON.as_posix()}/games'

# (source dir relative to repo root, destination relative to site root)
SITE_SOURCES = [
    ('courseware', 'courseware'),
    ('starters/ch03-memory-cases', MEMORY_GAMES),
    ('starters/personal-homepage/setup-check', 'starters/personal-homepage/setup-check'),
]

MEMORY_PAGES = {'index.html', 'lesson.js', 'memory-slides.css', 'memory-slides.js',
                'ppt-location.js', 'cases.html', 'game-only.html', 'case-map.json'}
MEMORY_EVIDENCE = Path('evidence/minimax-20261106/screenshot-initial.png')
SHOWCASE = ROOT / 'tools/ch03-showcase'

# Set to True to also publish speaker.html pages (full-text narration views).
PUBLISH_SPEAKER_PAGES = False

SKIP_DIRS = {'tools', 'archive', 'production', 'materials', 'promo', '.hallmark'}
SKIP_SUFFIXES = {'.md', '.py', '.mmd', '.excalidraw'}
SKIP_ENDINGS = ('.archscribe.json',)
# Generated narration data, old local shortcuts and draft presentation samples.
SKIP_NAMES = {
    'script.json', 'comments.json', '.comments.lock', 'screen-plan.json',
    'speaker-history.html', 'speaker-archive.html', 'reading-script.html', 'reading-data.js',
    'authoring-evidence.html', 'authoring-evidence.css', 'skill-relations-preview.html',
}
SPEAKER_NAME = 'speaker.html'

# An anchor to a speaker page (with or without a #fragment), plus a leading " · " separator.
SPEAKER_LINK = re.compile(r'(?:\s*·\s*)?<a\b[^>]*\bhref="[^"]*speaker\.html[^"]*"[^>]*>.*?</a>', re.S)

ROOT_INDEX = """<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="refresh" content="0; url=courseware/">
<title>Prompt to Harness</title></head>
<body><p><a href="courseware/">进入课程首页</a></p></body></html>
"""


def wanted(path: Path, rel: Path) -> bool:
    if any(part in SKIP_DIRS for part in rel.parts[:-1]):
        return False
    if path.suffix in SKIP_SUFFIXES or path.name.endswith(SKIP_ENDINGS) or path.name in SKIP_NAMES or path.name.startswith('.comments-'):
        return False
    if path.name in {SPEAKER_NAME, 'speaker-data.js'} and not PUBLISH_SPEAKER_PAGES:
        return False
    return True


def courseware_in_release(rel: Path) -> bool:
    # Chapter 3 currently publishes its landing page and section 3.1.
    if rel.parts[0] != MEMORY_LESSON.parts[0]:
        return True
    if rel == Path('ch03/index.html'):
        return True
    if rel.is_relative_to(MEMORY_LESSON):
        entry = rel.relative_to(MEMORY_LESSON)
        return (entry.name in MEMORY_PAGES and len(entry.parts) == 1
                or entry.parts[0] in {'assets', 'games'} or entry == MEMORY_EVIDENCE)
    return False


def copy_sources(out: Path):
    copied = 0
    for src_rel, dst_rel in SITE_SOURCES:
        src = ROOT / src_rel
        for path in sorted(src.rglob('*')):
            if not path.is_file():
                continue
            rel = path.relative_to(src)
            if dst_rel == 'courseware' and not courseware_in_release(rel):
                continue
            if not wanted(path, rel):
                continue
            target = out / dst_rel / rel
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, target)
            copied += 1
    return copied


def strip_speaker_links(out: Path):
    if PUBLISH_SPEAKER_PAGES:
        return 0
    stripped = 0
    for page in out.rglob('*.html'):
        text = page.read_text(encoding='utf-8')
        new, n = SPEAKER_LINK.subn('', text)
        if n:
            page.write_text(new, encoding='utf-8')
            stripped += n
    return stripped


class Refs(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key in ('href', 'src', 'poster') and value:
                self.refs.append(value)


def is_local(ref: str) -> bool:
    if ref.startswith(('#', 'data:', 'mailto:', 'javascript:', 'tel:', '//')):
        return False
    return not urlsplit(ref).scheme


def resolve(page: Path, ref: str, out: Path):
    path = unquote(urlsplit(ref).path)
    if not path:
        return None
    target = (out / path.lstrip('/')) if path.startswith('/') else (page.parent / path)
    target = target.resolve()
    if path.endswith('/') or target.is_dir():
        target = target / 'index.html'
    return target


ANCHORS = re.compile(r'(<strong>)?<a\b[^>]*\bhref="([^"]*)"[^>]*>(.*?)</a>', re.S)


def strip_unreleased_courseware_links(out: Path):
    courseware = out / 'courseware'
    for page in out.rglob('*.html'):
        original = page.read_text(encoding='utf-8')

        def keep_link(match):
            href = match[2]
            if is_local(href):
                target = resolve(page, href, out)
                if target and target.is_relative_to(courseware):
                    rel = target.relative_to(courseware)
                    if rel.parts and not courseware_in_release(rel):
                        return match[1] + match[3] if match[1] else ''
            return match[0]

        updated = ANCHORS.sub(keep_link, original)
        if updated != original:
            page.write_text(updated, encoding='utf-8')


def prepare_memory_release(out: Path):
    lesson_dir = out / 'courseware' / MEMORY_LESSON
    local_showcase = 'http://127.0.0.1:4397/'
    shutil.copy2(SHOWCASE / 'game-only.html', lesson_dir)
    cases = json.loads((SHOWCASE / 'case-map.json').read_text(encoding='utf-8'))['cases']
    public_cases = [{key: case[key] for key in ('archive_id', 'display_id')} for case in cases]
    (lesson_dir / 'case-map.json').write_text(json.dumps({'cases': public_cases}) + '\n', encoding='utf-8')

    gallery = lesson_dir / 'cases.html'
    html = gallery.read_text(encoding='utf-8')
    html = re.sub(r'<figcaption>(\d+) · .*?</figcaption>', r'<figcaption>\1 号游戏</figcaption>', html)
    html = html.replace('<figcaption>04 号游戏</figcaption>',
                        '<figcaption>04 号游戏 · 可能提前通关</figcaption>')
    html = html.replace(local_showcase + 'game-only.html', 'game-only.html')
    html = html.replace('点击图片直接试玩，点击运行记录查看原始对话与执行过程。', '点击图片打开对应的翻牌游戏。')
    html = html.split('<footer>', 1)[0] + '<footer><a href="index.html">返回 3.1 课件</a></footer></body></html>\n'
    if local_showcase in html:
        raise ValueError('Unconverted local showcase link in the public gallery')
    for case in cases:
        if not (lesson_dir / case['game']).is_file() or f'href="{case["presentation"]}"' not in html:
            raise ValueError(f'Missing game or gallery link for {case["archive_id"]}')
    gallery.write_text(html, encoding='utf-8')

    data = lesson_dir / 'lesson.js'
    prefix = 'window.lesson = '
    lesson = json.loads(data.read_text(encoding='utf-8').strip().removeprefix(prefix).removesuffix(';'))
    for scene in lesson['scenes']:
        scene.pop('repro', None)
        scene['html'] = scene['html'].replace(local_showcase + 'games/a2/index.html', 'games/a2/index.html')
    data.write_text(prefix + json.dumps(lesson, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')


def check_links(out: Path):
    problems = []
    for page in sorted(out.rglob('*.html')):
        parser = Refs()
        parser.feed(page.read_text(encoding='utf-8'))
        if page == out / 'courseware' / MEMORY_LESSON / 'index.html':
            data = page.with_name('lesson.js').read_text(encoding='utf-8')
            for scene in json.loads(data.strip().removeprefix('window.lesson = ').removesuffix(';'))['scenes']:
                parser.feed(scene['html'])
        for ref in parser.refs:
            if not is_local(ref):
                continue
            target = resolve(page, ref, out)
            if target is not None and not target.exists():
                problems.append(f'{page.relative_to(out)}: {ref}')
    for css in sorted(out.rglob('*.css')):
        for ref in re.findall(r'url\(\s*["\']?([^)"\']+)', css.read_text(encoding='utf-8')):
            if not is_local(ref):
                continue
            target = (css.parent / unquote(urlsplit(ref).path)).resolve()
            if not target.exists():
                problems.append(f'{css.relative_to(out)}: {ref}')
    return problems


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--out', type=Path, default=ROOT / '_site')
    args = parser.parse_args()
    out = args.out.resolve()
    if out.exists():
        shutil.rmtree(out)
    out.mkdir(parents=True)

    copied = copy_sources(out)
    prepare_memory_release(out)
    stripped = strip_speaker_links(out)
    strip_unreleased_courseware_links(out)
    (out / 'index.html').write_text(ROOT_INDEX, encoding='utf-8')
    (out / '.nojekyll').write_text('')

    problems = check_links(out)
    pages = len(list(out.rglob('*.html')))
    print(f'Site: {out}')
    print(f'Files copied: {copied}; HTML pages: {pages}; speaker links removed: {stripped}')
    if problems:
        print(f'{len(problems)} broken local reference(s):', file=sys.stderr)
        for line in problems:
            print('  ' + line, file=sys.stderr)
        sys.exit(1)
    print('Local links: OK')


if __name__ == '__main__':
    main()
