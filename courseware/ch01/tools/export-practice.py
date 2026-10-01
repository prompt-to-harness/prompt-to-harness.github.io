#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Export selected progressive lessons as offline practice and acceptance pages."""
import argparse
import html
import json
from pathlib import Path
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--lessons', nargs='+', type=int, choices=[1,3,4,5,6], required=True)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
for source in sorted((root/'lessons').glob('*/lesson.js')):
    n=int(source.parent.name.split('-')[0])
    if n not in args.lessons: continue
    lesson=json.loads(source.read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
    sections=[]
    for scene in lesson['scenes']:
        prompt=('<div class="prompt"><div class="prompt-label"><span>完整请求 · 可选中复制</span></div><pre><code>'+html.escape(scene['prompt'])+'</code></pre></div>') if scene.get('prompt') else ''
        body=scene['html'].replace('<svg ', '<div class="diagram-scroll" tabindex="0"><svg ').replace('</svg>', '</svg></div>')
        lede=('<p class="lede">'+scene['lead']+'</p>') if scene.get('lead') else ''
        sections.append(f'<section class="scene {scene.get("layout", "")}" id="{scene["id"]}"><h2>{scene["title"]}</h2>{lede}<div class="scene-content">{prompt}{body}</div><p><a href="index.html#{scene["id"]}">返回对应课件</a> · <a href="speaker.html#{scene["id"]}">讲稿与操作分支</a></p></section>')
    text='<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+html.escape(lesson['title'])+' · 练习与验收</title><link rel="stylesheet" href="../../../shared/tokens.css"><link rel="stylesheet" href="../../../shared/styles.css"><link rel="stylesheet" href="../../shared/progressive.css"><link rel="stylesheet" href="../../../shared/parts/parts.css"><script src="../../../shared/parts/parts.js" defer></script><style>main{max-width:1168px;margin:auto;padding:24px}.scene{padding:32px 0;min-height:0}.scene-content{display:flex;flex-direction:column}iframe{width:100%;height:240px}pre{overflow-wrap:anywhere;white-space:pre-wrap}</style></head><body data-mode="scroll"><main><h1>'+html.escape(lesson['title'])+' · 练习与验收</h1><p>先在演示模式独立判断，再查看本页完整解析。教学示意不等于自己的实操证据；按大纲要求提交原有证据文件。</p>'+''.join(sections)+'<p><a href="../../index.html">返回第一章</a></p></main></body></html>'
    # Live controls belong to the player. Practice keeps the separate-open link and static starter preview.
    import re
    text=re.sub(r'<button[^>]*data-demo-(?:connect|reload)[^>]*>.*?</button>', '', text)
    text=text.replace('再点“连接练习副本”', '再使用“独立打开”')
    source.with_name('practice.html').write_text(text)
    print(f'1.{n}: practice exported')
