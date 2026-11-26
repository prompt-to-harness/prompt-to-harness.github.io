#!/usr/bin/env python3
"""Render complete archived files with lecture navigation, without summaries."""
import html
import json
from pathlib import Path

HERE = Path(__file__).resolve().parents[1]
OUT = HERE / 'evidence/audio-reference-iteration'
FILES = {
    'original-skill': ('original/SKILL.md', [('资源表与工作流', '三个资源各自独立', '5. **核对令牌**')]),
    'revised-skill': ('revised/SKILL.md', [('声音资源', '| **音效**'), ('声音工作流', '5. **接声音**'), ('声音规则与用法', '## 声音规则（核心）', "bindSoundToggle(document.getElementById('sound-toggle'))"), ('用法片段', '## 用法片段'), ('验证', '## 验证')]),
    'reference-sound': ('reference-game/src/sound.js', [('声音开关', 'export function setSoundEnabled'), ('翻牌与配对声音', '  flip() {'), ('胜利声音', '  win() {')]),
    'added-sound': ('revised/assets/js/purple-sound.js', [('声音文件', '')]),
    'sound-guide': ('revised/references/sound.md', [('声音使用说明', '')]),
    'skill-diff': ('skill.diff', [('修改差异', '')]),
    'game-source': ('with-audio/js/game.js', [('收集与受伤事件接线', "play('pickup')", "play('error')")]),
}

for name, (source, marks) in FILES.items():
    lines = (OUT / source).read_text().splitlines()
    stops = []
    for mark in marks:
        label, needle = mark[:2]
        line = next((i for i, value in enumerate(lines, 1) if needle in value), None)
        if line is None:
            raise ValueError(f'{source}: {needle!r} not found')
        stop = {'id': f'L{line}', 'label': label}
        if len(mark) == 3:
            end = next((i for i, value in enumerate(lines, 1) if i >= line and mark[2] in value), None)
            if end is None:
                raise ValueError(f'{source}: end {mark[2]!r} not found after line {line}')
            stop['end'] = f'L{end}'
        stops.append(stop)
    text = '\n'.join(f'<span id="L{i}">{html.escape(line)}</span>' for i, line in enumerate(lines, 1))
    nav = html.escape(json.dumps(stops, ensure_ascii=False), quote=True)
    page = f'''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(source)}</title><style>body{{margin:0;background:#f8f7f3;color:#26332e;font:18px/1.6 system-ui}}main{{max-width:1100px;margin:auto;padding:24px 24px 100px}}pre{{white-space:pre-wrap;overflow-wrap:anywhere;background:white;border:1px solid #ddd;padding:20px;font:14px/1.65 monospace}}</style><main><h1>{html.escape(source)}</h1><nav data-source="{html.escape(source, quote=True)}" data-evidence-stops="{nav}"></nav><pre>{text}</pre></main><script src="../../evidence-navigation.js"></script></html>'''
    (OUT / f'{name}.html').write_text(page)
