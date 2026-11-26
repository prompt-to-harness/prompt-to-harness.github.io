#!/usr/bin/env python3
"""Render saved evidence as UTF-8 text; never execute or alter original files."""
from pathlib import Path
import html, json
p=Path(__file__).resolve().parents[1]
a=p/"evidence/audio-iteration"
items=[('original','原组件正文','original-skill.txt'),('revised','修改后组件正文','revised-skill.txt'),('historical-sound','历史整页游戏声音模块','historical-template/src/sound.js'),('added-sound','新增声音资源','after/js/purple-sound.js'),('template-sound','原模板声音模块','template-sound.js'),('events','历史游戏事件调用','historical-template/src/main.js'),('first-code','E2 首轮游戏代码','first-failure/js/game.js'),('skill-diff','Skill 修改差异','skill.diff')]
out=['<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>3.3 原文与源码查看</title><style>body{max-width:1100px;margin:32px auto;padding:0 24px;background:#f7f7f0;color:#283c31;font:18px/1.8 system-ui}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#edf1e9;padding:24px;font:18px/1.7 monospace}a{color:#326449}section{margin:60px 0}section:target,pre span:target{scroll-margin-top:110px}pre span:target{background:#fff1bf;outline:2px solid #bca162}.source-stops{position:sticky;top:0;display:flex;gap:20px;background:#f7f7f0;padding:12px;z-index:2}.source-stops button{font:inherit;cursor:pointer}</style><h1>3.3 原文与源码</h1><p>以下为保存文件的原文，仅做 HTML 转义展示，不执行源码。</p>']
for id,title,file in items:
 target={"original":"audio-origin","revised":"audio-guidance","historical-sound":"audio-scope","added-sound":"audio-resource","template-sound":"audio-origin","events":"audio-origin","first-code":"audio-playtest","skill-diff":"audio-guidance"}[id]
 text=(a/file).read_text(); lines=text.splitlines()
 rules=[]
 if id=='original':rules=[('resources','| **主题**','资源入口'),('workflow','## 工作流','工作流要求')]
 if id in ('historical-sound','added-sound'):rules=[('switch','export function setSoundEnabled','音效开关'),('pickup','  pickup()','收集音效'),('hurt','  hurt()','受伤音效')]
 if id in ('skill-diff','revised'):rules=[('scope','开发可交互小游戏时','适用范围'),('import','复制该文件到项目','资源导入'),('events','按实际游戏事件接线','事件调用'),('switch','用明确的音效开关','音效开关'),('retain','保留原有可见反馈','保留画面反馈'),('verify','验证开始、收集、受伤','验证要求')]
 if id=='first-code':rules=[('switch','setSoundEnabled(!isSoundEnabled())','音效开关'),('hurt','sfx.hurt()','受伤调用'),('pickup','sfx.pickup()','收集调用')]
 marks={};stops=[]
 for key,needle,label in rules:
  matches=[n for n,line in enumerate(lines) if needle in line]
  if not matches and id=='original':matches=[n for n,line in enumerate(lines) if 'assets/' in line]
  if not matches:raise ValueError((id,needle))
  n=matches[0];anchor=id+'-'+key;marks[n]=anchor;stops.append({'id':anchor,'label':label})
 nav='<nav class="source-stops" data-stops="'+html.escape(json.dumps(stops,ensure_ascii=False),quote=True)+'"><button data-prev>上一处</button><span role="status"></span><button data-next>下一处</button></nav>' if stops else ''
 rendered='\n'.join('<span id="'+marks.get(n,id+'-L'+str(n+1))+'">'+html.escape(line)+'</span>' for n,line in enumerate(lines))
 out.append(f'<section id="{id}"><h2>{title}</h2><p>文件：{html.escape(file)}</p><p><a href="index.html#origin">返回声音来源</a> · <a href="index.html#change">返回 Skill 差异</a> · <a href="../../speaker.html#{target}">返回讲述位置</a></p>{nav}<pre>{rendered}</pre></section>')

out.append("""<script>document.querySelectorAll('[data-stops]').forEach(nav=>{const stops=JSON.parse(nav.dataset.stops);let at=Math.max(0,stops.findIndex(s=>'#'+s.id===location.hash));const prev=nav.querySelector('[data-prev]'),next=nav.querySelector('[data-next]');function show(move){prev.disabled=at===0;next.disabled=at===stops.length-1;nav.querySelector('[role=status]').textContent=`第 ${at+1}/${stops.length} 处 · ${stops[at].label}`;if(move){history.replaceState(null,'','#'+stops[at].id);document.getElementById(stops[at].id).scrollIntoView({block:'start'});}}prev.onclick=()=>{at=Math.max(0,at-1);show(true)};next.onclick=()=>{at=Math.min(stops.length-1,at+1);show(true)};show(false);});</script></html>""");(a/'source-view.html').write_text('\n'.join(out))
