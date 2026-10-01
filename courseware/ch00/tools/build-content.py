#!/usr/bin/env python3
"""Export the interview notes. Shared fonts are rebuilt with courseware/tools/subset-fonts.py."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
lesson = json.loads((root / 'lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
lines = ['# 第 0 章：双讲师访谈提纲', '', '> 从 lesson.js 导出，页面与逐页时长以 lesson.js 为准，待试讲。讲师 A：缪东旭；讲师 B：李阳。履历已填写，具体案例待本人补充。', '']
for scene in lesson['scenes']:
    lines += [f"## {scene['id'].upper()} {scene['label']}", '', f"[对应课件](index.html#{scene['id']})", '', scene['kicker'] + f" · 预算 {scene['seconds']} 秒", '', '### 串场与回答提纲', '']
    for paragraph in scene['script']:
        lines += [paragraph, '']
    for note in scene['teaching']:
        lines += [f"### {note['title']}", '', note['text'], '']
(root / 'script.md').write_text('\n'.join(lines))
print(f"Exported {len(lesson['scenes'])} scenes to script.md")
