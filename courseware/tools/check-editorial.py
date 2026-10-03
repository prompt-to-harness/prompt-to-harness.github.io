#!/usr/bin/env python3
"""Mechanical checks for docs/production/editorial-checklist.md (ED-001, ED-007/010, ED-011).

Errors fail the run; hints are printed but never fail. Judgment rules live in the
checklist and are applied by the courseware-editorial skill, not here.
"""
import re
import subprocess
import sys
from pathlib import Path

courseware = Path(__file__).resolve().parents[1]
repo = courseware.parent
errors, hints = [], []

# ED-001: a screen element holding a single sentence must not end with 。
screen_files = [p for p in courseware.rglob('*') if p.name in ('index.html', 'lesson.js') and 'archive' not in p.parts]
element_period = re.compile(r'>([^<>。]*)。</')
field_period = re.compile(r'"(?:title|label|kicker)":\s*"([^"。]*)。"')
for path in sorted(screen_files):
    text = path.read_text()
    for pattern in (element_period, field_period):
        for m in pattern.finditer(text):
            line = text.count('\n', 0, m.start()) + 1
            errors.append(f'ED-001 {path.relative_to(repo)}:{line} 单句屏幕文字以句号结尾：{m.group(1)[:30]}')

# ED-011: generated files must match their source builder
builders = list(courseware.glob('ch*/lessons/*/tools/build-lesson.py')) + list(courseware.glob('ch00/tools/build-content.py'))
for builder in sorted(builders):
    base = builder.parents[1]
    outputs = [base / 'lesson.js', base / 'script.md']
    before = {p: p.read_bytes() for p in outputs if p.exists()}
    result = subprocess.run([sys.executable, str(builder)], capture_output=True, text=True)
    if result.returncode:
        errors.append(f'ED-011 {builder.relative_to(repo)} 运行失败：{result.stderr.strip()[-120:]}')
    for p, old in before.items():
        if p.read_bytes() != old:
            p.write_bytes(old)
            errors.append(f'ED-011 {p.relative_to(repo)} 与 {builder.name} 的输出不一致：改源文件，不要只改生成物')

# ED-011: relative Markdown links must resolve (catches residue after deleting a page)
md_roots = [courseware, repo / 'docs' / 'production', repo / 'docs' / 'design']
link = re.compile(r'\[[^\]]*\]\(([^)#?\s]+)(?:[#?][^)]*)?\)')
for root in md_roots:
    for path in sorted(root.rglob('*.md')):
        if 'archive' in path.parts:
            continue
        for m in link.finditer(path.read_text()):
            target = m.group(1)
            if re.match(r'[a-z]+:', target) or target.startswith('/'):
                continue
            if not (path.parent / target).exists():
                errors.append(f'ED-011 {path.relative_to(repo)} 链接不存在：{target}')

# ED-007 / ED-010: filler phrases are a prompt to ask "does this add information", not a ban
fillers = ['这样做是为了', '这里练习的就是', '大家看', '对吧', '其实']
for path in sorted(courseware.rglob('script.md')):
    if 'archive' in path.parts:
        continue
    text = path.read_text()
    counts = {w: text.count(w) for w in fillers if text.count(w)}
    if counts:
        hints.append(f'ED-007/010 {path.relative_to(repo)} ' + '、'.join(f'{w}×{n}' for w, n in counts.items()))

for h in hints:
    print('hint  ', h)
for e in errors:
    print('error ', e)
print(f'editorial check: {len(errors)} errors, {len(hints)} hints')
sys.exit(1 if errors else 0)
