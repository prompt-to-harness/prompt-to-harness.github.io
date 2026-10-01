#!/usr/bin/env python3
"""Build the public GitHub Pages site into _site/.

The site carries reading, presentation, practice and preparation pages only:
courseware HTML plus the assets they load, and the offline setup-check page that
lesson 1.1 embeds. Markdown notes, speaker/script pages, production files and
archives stay in the repository but are not published.

Usage: python3 tools/build-site.py [--out DIR]
Exits non-zero if a published page links to a file that is not in the site.
"""
import argparse
import re
import shutil
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]

# (source dir relative to repo root, destination relative to site root)
SITE_SOURCES = [
    ('courseware', 'courseware'),
    ('starters/personal-homepage/setup-check', 'starters/personal-homepage/setup-check'),
]

# Set to True to also publish speaker.html pages (full-text narration views).
PUBLISH_SPEAKER_PAGES = False

SKIP_DIRS = {'tools', 'archive', 'production', 'materials', 'promo', '.hallmark'}
SKIP_SUFFIXES = {'.md', '.py', '.mmd', '.excalidraw'}
SKIP_ENDINGS = ('.archscribe.json',)
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
    if path.suffix in SKIP_SUFFIXES or path.name.endswith(SKIP_ENDINGS):
        return False
    if path.name == SPEAKER_NAME and not PUBLISH_SPEAKER_PAGES:
        return False
    return True


def copy_sources(out: Path):
    copied = 0
    for src_rel, dst_rel in SITE_SOURCES:
        src = ROOT / src_rel
        for path in sorted(src.rglob('*')):
            if not path.is_file():
                continue
            rel = path.relative_to(src)
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


def check_links(out: Path):
    problems = []
    for page in sorted(out.rglob('*.html')):
        parser = Refs()
        parser.feed(page.read_text(encoding='utf-8'))
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
    stripped = strip_speaker_links(out)
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
