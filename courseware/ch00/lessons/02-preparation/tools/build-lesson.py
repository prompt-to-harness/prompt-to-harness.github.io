#!/usr/bin/env python3
"""Export preparation narration from lesson.js; do not edit script.md directly."""
import json
from pathlib import Path
base = Path(__file__).resolve().parents[1]
lesson = json.loads((base / 'lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
lines = ['# 0.2 ' + lesson['title'], '', '> 从 lesson.js 导出；浅色操作提示对应讲师动作，不作口播；条件分支按实际结果选择。原逐页预算 14 分 15 秒，本次扩写后的口播与操作时长待试录校准。', '']
for scene in lesson['scenes']:
    lines += ['## ' + scene['id'] + ' ' + scene['title'], '', '[对应课件](index.html#' + scene['id'] + ')', '']
    for i, text in enumerate(scene['script']):
        lines += ['### 第 ' + str(i + 1) + ' 步：' + scene['steps'][i], '', text, '']
    if scene.get('repro'):
        lines += ['### ' + scene['repro']['label'], '']
        for step in scene['repro']['steps']:
            text = step['text']
            for link in step.get('links', []):
                text = text.replace(link['text'], '[' + link['text'] + '](' + link['url'] + ')', 1)
            lines += [text, '']
            if step.get('code') and not step.get('jump'):
                lines += ['```text', step['code'], '```', '']
        if scene['repro'].get('note'):
            lines += [scene['repro']['note'], '']
    for ref in scene.get('refs', []):
        lines += ['[' + ref['text'] + '](' + ref['url'] + ')', '']
    for note in scene['teaching']:
        lines += ['### ' + note['title'], '', note['text'], '']
(base / 'script.md').write_text('\n'.join(lines))
