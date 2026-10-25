#!/usr/bin/env python3
"""Mechanical checks for docs/production/editorial-checklist.md (ED-001, ED-007/010, ED-011, ED-012, ED-013, ED-017, ED-018).

Errors fail the run; hints are printed but never fail. Judgment rules live in the
checklist and are applied by the courseware-editorial skill, not here.
"""
import json
from html import unescape
from urllib.parse import urldefrag
import re
import subprocess
import sys
from pathlib import Path

courseware = Path(__file__).resolve().parents[1]
repo = courseware.parent
errors, hints = [], []


def source_hints(scene):
    """ED-018 candidates only: reviewers decide whether two labels cite the same source."""
    live = [ref for ref in scene.get('refs', []) if ref.get('kind', 'live') == 'live']
    if not live:
        return []
    found = []
    urls = [urldefrag(ref['url'])[0].rstrip('/') for ref in live]
    if len(urls) != len(set(urls)):
        found.append('同页 live 链接指向同一原文，核对是否可合并（不同段落链接可保留）')
    captions = []
    for m in re.finditer(r'<(p|small|figcaption)\b([^>]*)>(.*?)</\1>', scene.get('html', ''), re.S):
        classes = re.search(r'class=[\'"]([^\'"]*)[\'"]', m[2])
        if classes and 'source-note' in classes[1].split():
            continue  # hidden in presentation mode; retained for readers
        text = unescape(re.sub(r'<[^>]*>', '', m[3])).strip()
        if re.search(r'据.{1,180}(?:整理|重画|绘制)|课程自绘|固定版本', text):
            captions.append(text[:60])
    if captions:
        found.append('可见来源说明与 live 链接并存，核对是否同源并合并：' + '；'.join(captions))
    return found

# ED-001: a screen element holding a single sentence must not end with 。
screen_files = [p for p in courseware.rglob('*') if p.name in ('index.html', 'lesson.js') and 'archive' not in p.parts]
element_period = re.compile(r'>([^<>。]*)。</')
field_period = re.compile(r'"(?:title|label|kicker)":\s*"([^"。]*)。"')
# .p-evidence 阅读视图里的是请求记录原文（由 tracekit 或本节脚本从记录生成），引用不改写，不按屏幕文字检查
reading_section = re.compile(r'<section data-ev-reading=\\"[^"\\]*\\"[^>]*>.*?</section>', re.S)
for path in sorted(screen_files):
    text = path.read_text()
    text = reading_section.sub(lambda m: '\n' * m[0].count('\n'), text)
    for pattern in (element_period, field_period):
        for m in pattern.finditer(text):
            line = text.count('\n', 0, m.start()) + 1
            errors.append(f'ED-001 {path.relative_to(repo)}:{line} 单句屏幕文字以句号结尾：{m.group(1)[:30]}')

# Page names: kicker is generated from chapter, section and segment by shared/app.js (docs/agents/courseware-workflow.md)
for path in sorted(courseware.rglob('lesson.js')):
    if 'archive' in path.parts:
        continue
    data = json.loads(path.read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
    for scene in data['scenes']:
        if 'kicker' in scene:
            errors.append(f'{path.relative_to(repo)} {scene["id"]} 手写了 kicker：小标题由段名自动生成，改 segment')
        if not scene.get('segment'):
            errors.append(f'{path.relative_to(repo)} {scene["id"]} 缺 segment：小标题、进度条和侧栏分组都靠它')
        for hint in source_hints(scene):
            hints.append(f'ED-018 {path.relative_to(repo)} {scene["id"]} {hint}')

# ED-011: generated files must match their source builder
builders = list(courseware.glob('ch*/lessons/*/tools/build-lesson.py'))
for builder in sorted(builders):
    base = builder.parents[1]
    outputs = [base / 'lesson.js']
    before = {p: p.read_bytes() for p in outputs if p.exists()}
    result = subprocess.run([sys.executable, str(builder)], capture_output=True, text=True)
    if result.returncode:
        errors.append(f'ED-011 {builder.relative_to(repo)} 运行失败：{result.stderr.strip()[-120:]}')
    for p, old in before.items():
        if p.read_bytes() != old:
            p.write_bytes(old)
            errors.append(f'ED-011 {p.relative_to(repo)} 与 {builder.name} 的输出不一致：改源文件，不要只改生成物')

# ED-011: narration lives in each lesson's script.json; hand-written lesson.js must carry the same text
for lesson_js in sorted(courseware.glob('**/lesson.js')):
    if 'archive' not in lesson_js.parts and not (lesson_js.parent / 'script.json').exists():
        errors.append(f'ED-011 {lesson_js.parent.relative_to(repo)} 缺少 script.json：口播的唯一来源，用 tools/rebuild-lesson.py 的说明补建')
result = subprocess.run([sys.executable, str(courseware / 'tools' / 'rebuild-lesson.py'), '--check'], capture_output=True, text=True)
if result.returncode:
    errors.append('ED-011 script.json 与 lesson.js 不一致：' + result.stderr.strip().replace('\n', '；'))

# ED-013: every step opens with one 【操作提示｜…】 for the recording lecturer, then spoken narration
stage = re.compile(r'【操作提示｜[^\n]+】')
# 口播中途切窗口另起一段【切换｜目标】，不念；只占一行，后面不接口播
cue = re.compile(r'【切换｜[^】\n]+】')
for path in sorted(courseware.glob('**/script.json')):
    if 'archive' in path.parts:
        continue
    for scene_id, steps in json.loads(path.read_text()).items():
        for i, step in enumerate(steps, 1):
            parts = step.split('\n\n')
            if not stage.fullmatch(parts[0]):
                errors.append(f'ED-013 {path.relative_to(repo)} {scene_id} 第 {i} 步没有以【操作提示｜…】开头')
            elif not any(part.strip() and not stage.fullmatch(part) and not part.startswith('【切换｜') for part in parts[1:]):
                errors.append(f'ED-013 {path.relative_to(repo)} {scene_id} 第 {i} 步只有操作提示，没有口播正文')
            for part in parts:
                if part.startswith('【切换｜') and not cue.fullmatch(part):
                    errors.append(f'ED-013 {path.relative_to(repo)} {scene_id} 第 {i} 步的【切换｜…】要单独成段、只写切到哪里')

# ED-013: 一页只定一种演示形态，操作提示里不留“现场演示时……”这类两可分支（提示，不报错）
undecided = re.compile(r'现场演示时|如改为现场|若想换成现场|若改为现场')
for path in sorted(courseware.rglob('script.json')):
    if 'archive' in path.parts:
        continue
    pages = sorted({scene_id for scene_id, steps in json.loads(path.read_text()).items()
                    if any(undecided.search(step.split('\n\n')[0]) for step in steps)})
    if pages:
        hints.append(f'ED-013 {path.relative_to(repo)} 演示形态未定（条件式现场分支）：' + '、'.join(pages))

# ED-011: relative Markdown links must resolve (catches residue after deleting a page)
md_roots = [courseware, repo / 'docs' / 'production', repo / 'docs' / 'design',
            repo / 'docs' / 'agents', repo / 'docs' / 'outline']
link = re.compile(r'\[[^\]]*\]\(([^)#?\s]+)(?:[#?][^)]*)?\)')
for root in md_roots:
    for path in sorted(root.rglob('*.md')):
        # 提案是讨论稿，可能链到其他人尚未提交的记录，不在这里拦
        if 'archive' in path.parts or 'proposals' in path.parts:
            continue
        for m in link.finditer(path.read_text()):
            target = m.group(1)
            if re.match(r'[a-z]+:', target) or target.startswith('/'):
                continue
            if not (path.parent / target).exists():
                errors.append(f'ED-011 {path.relative_to(repo)} 链接不存在：{target}')

# ED-012: retired wording listed in docs/production/terminology.md must not come back in current sources
terms_doc = (repo / 'docs' / 'production' / 'terminology.md').read_text()
retired_section = terms_doc.split('## 已废弃的说法', 1)[1] if '## 已废弃的说法' in terms_doc else ''
retired = []
for row in retired_section.splitlines():
    cells = [c.strip() for c in row.strip().strip('|').split('|')]
    if len(cells) == 3 and cells[0] and cells[0] not in ('废弃说法', '---'):
        retired.append((cells[0], cells[1], cells[2]))
# 已迁移的章有 LOG.md；查它的章文件，LOG 本身是历史，不查
current = sorted(p.parent / 'README.md' for p in courseware.glob('ch*/LOG.md'))
current += sorted(courseware.glob('ch*/lessons/*/script.json'))
current += sorted(courseware.glob('ch*/lessons/*/tools/build-lesson.py'))
for path in current:
    section = ''
    for no, line in enumerate(path.read_text().splitlines(), 1):
        if line.startswith('## '):
            section = line[3:].strip()
        if section in ('决策记录', '实测记录'):
            continue
        for old, new, keep in retired:
            if old in line and not (keep and keep in line):
                errors.append(f'ED-012 {path.relative_to(repo)}:{no} 已废弃的说法“{old}”，改用“{new}”')

# ED-017: in a migrated chapter (has LOG.md), the chapter file, storyboards and lesson.js agree
for log in sorted(courseware.glob('ch*/LOG.md')):
    chapter = log.parent
    readme = (chapter / 'README.md').read_text()
    # 分镜先行：只在分镜里、还没做成页面的 id，或分镜已撤、页面还没删的 id，在章文件“待定”里登记过就放行
    pending = readme.split('\n## 待定', 1)[1] if '\n## 待定' in readme else ''
    titles = {m.group(1): m.group(2) for m in
              re.finditer(r'^\| (\d+\.\d+) (.+?)（\d+ 分钟）', readme, re.M)}
    for lesson_js in sorted((chapter / 'lessons').glob('*/lesson.js')):
        text = lesson_js.read_text()
        lesson = json.loads(text[text.index('{'):text.rindex('}') + 1])
        number = '.'.join(str(int(x)) for x in lesson['section'].split('.'))
        board = lesson_js.parent / 'STORYBOARD.md'
        where = board.relative_to(repo)
        if not board.exists():
            errors.append(f'ED-017 {lesson_js.parent.relative_to(repo)} 缺 STORYBOARD.md')
            continue
        lines = board.read_text().splitlines()
        h1 = re.match(r'# \S+ 逐页分镜：(.+?)(?:（[^）]*）)?$', lines[0]) if lines else None
        names = {'章文件': titles.get(number), 'lesson.js': lesson['title'], '分镜': h1.group(1) if h1 else None}
        if len(set(names.values())) > 1:
            errors.append(f'ED-017 {number} 节标题不一致：' + '；'.join(f'{k}“{v}”' for k, v in names.items()))
        page_ids = {s['id'] for s in lesson['scenes']}
        board_ids = set(re.findall(r'^\| (p\d[\w-]*) \|', board.read_text(), re.M))
        undesigned = sorted(i for i in page_ids - board_ids if not re.search(rf'\b{re.escape(i)}\b', pending))
        unbuilt = sorted(i for i in board_ids - page_ids if not re.search(rf'\b{re.escape(i)}\b', pending))
        if undesigned:
            errors.append(f'ED-017 {where} 缺这些页面的分镜行：{undesigned}')
        if unbuilt:
            errors.append(f'ED-017 {where} 分镜里有、页面还没有，也没在章文件“待定”登记：{unbuilt}')
        first_h2 = next((n for n, l in enumerate(lines) if l.startswith('## ')), len(lines))
        if first_h2 >= len(lines) or lines[first_h2] != '## 素材状态' or sum(1 for l in lines[1:first_h2] if l.strip()) > 1:
            errors.append(f'ED-017 {where} 开头只放一段导航，第一个二级标题应是“素材状态”（节概述和变更说明不写在分镜里）')

# ED-007 / ED-010: filler phrases are a prompt to ask "does this add information", not a ban
fillers = ['这样做是为了', '这里练习的就是', '大家看', '对吧', '其实']
# 只数口播正文；【操作提示｜…】【切换｜…】不念，不计入
for path in sorted(courseware.rglob('script.json')):
    if 'archive' in path.parts:
        continue
    text = '\n'.join(part for steps in json.loads(path.read_text()).values() for step in steps
                     for part in step.split('\n\n') if not part.startswith(('【操作提示｜', '【切换｜')))
    counts = {w: text.count(w) for w in fillers if text.count(w)}
    if counts:
        hints.append(f'ED-007/010 {path.relative_to(repo)} ' + '、'.join(f'{w}×{n}' for w, n in counts.items()))

for h in hints:
    print('hint  ', h)
for e in errors:
    print('error ', e)
print(f'editorial check: {len(errors)} errors, {len(hints)} hints')
sys.exit(1 if errors else 0)
