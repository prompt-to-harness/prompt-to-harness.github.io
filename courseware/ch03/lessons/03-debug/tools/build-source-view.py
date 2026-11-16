#!/usr/bin/env python3
"""Render saved evidence as UTF-8 text; never execute or alter original files."""
from pathlib import Path
import html
p=Path(__file__).resolve().parents[1]
a=p/"evidence/audio-iteration"
items=[('original','原组件正文','original-skill.txt'),('revised','修改后组件正文','revised-skill.txt'),('historical-sound','历史整页游戏声音模块','historical-template/src/sound.js'),('added-sound','新增声音资源','after/js/purple-sound.js'),('template-sound','原模板声音模块','template-sound.js'),('events','历史游戏事件调用','historical-template/src/main.js'),('first-code','E2 首轮游戏代码','first-failure/js/game.js'),('skill-diff','Skill 修改差异','skill.diff')]
out=['<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>3.3 原文与源码查看</title><style>body{max-width:1100px;margin:32px auto;padding:0 24px;background:#f7f7f0;color:#283c31;font:18px/1.8 system-ui}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#edf1e9;padding:24px;font:18px/1.7 monospace}a{color:#326449}section{margin:60px 0}section:target{scroll-margin-top:20px}</style><h1>3.3 原文与源码</h1><p>以下为保存文件的原文，仅做 HTML 转义展示，不执行源码。</p>']
for id,title,file in items:
 target={"original":"audio-origin","revised":"audio-guidance","historical-sound":"audio-scope","added-sound":"audio-resource","template-sound":"audio-origin","events":"audio-origin","first-code":"audio-adoption","skill-diff":"audio-guidance"}[id]
 out.append(f'<section id="{id}"><h2>{title}</h2><p>文件：{html.escape(file)}</p><p><a href="index.html#origin">返回声音来源</a> · <a href="index.html#change">返回 Skill 差异</a> · <a href="../../speaker.html#{target}">返回讲述位置</a></p><pre>{html.escape((a/file).read_text())}</pre></section>')
out.append('</html>');(a/'source-view.html').write_text('\n'.join(out))
