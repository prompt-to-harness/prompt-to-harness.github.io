#!/usr/bin/env python3
"""从核对后的去敏节选生成回放页，不发布完整第三方文件和原始会话。"""
import json
from html import escape as e
from pathlib import Path

HERE=Path(__file__).resolve().parents[1]
d=json.loads((HERE/'selection-evidence.json').read_text())
assert d['read']['exitCode']==0 and d['metadataLocator'] and d['answerExcerpt']
SOURCE='https://github.com/openai/plugins/blob/'+d['sourceCommit']+'/plugins/game-studio/skills/game-playtest/SKILL.md#L1-L4'

def pre(text): return '<pre>'+e(text)+'</pre>'
def prompt(text):return '<div class="request"><p>发给 Codex 的请求</p>'+pre(text)+'<button class="copy" type="button">复制请求</button></div>'
def checklist(text):
    """保持原文和顺序，将已核验的 Markdown 表格节选排成可读表格。"""
    import re
    rows=[line.strip().strip('|').split('|') for line in text.splitlines() if line.strip().startswith('|')]
    assert len(rows)==4 and all(len(row)==4 for row in rows)
    def cell(value):return re.sub(r'\*\*(.*?)\*\*',r'<strong>\1</strong>',e(value.strip()))
    return '<table><thead><tr><th>编号</th><th>操作／前置状态</th><th>预期结果</th><th>待检查</th></tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+cell(v)+'</td>' for v in row)+'</tr>' for row in rows)+'</tbody></table>'

screens=d['explicitScreens']
explicit='<p>终端真实屏幕文字摘录。省去窗口顶部和本机路径，保留菜单与输入框；不是界面截图。</p>'
for key,title in [('01-skills-menu','输入 /skills 后'),('02-skill-list','进入 List skills'),('03-inserted','选中 Game Playtest')]:
    explicit+=f'<h3>{title}</h3>'+pre(screens[key])
explicit+= '<h3>随后提交的请求</h3>'+prompt('$game-playtest '+d['prompt'])
explicit+= '<p>本次会话记录中，提交后紧接着出现包含 game-playtest 完整正文的 skill 消息。主动引用将正文随请求带入；这里不要求额外出现一次 cat 命令。</p>'
explicit+= '<h3>返回节选</h3>'+pre(d.get('explicitAnswerExcerpt',''))
explicit+= '<p>这轮还自行查找了课程目录中的游戏实现。上述节选只用于核对与请求相符的计步、重开项；输出中的其他具体实现值不作为本次规则。</p>'
sections=[('explicit','主动选择与调用',explicit),
('implicit-request','自然语言请求',prompt(d['prompt'])+'<p>本次未使用 $ 引用，也没有指定 Skill 名称。任务只是准备清单，没有执行游戏试玩。</p>'),
('metadata','模型收到的可用说明','<p>以下来自同次会话的可用 Skill 列表，按原顺序保留名称、描述首句与文件位置。省略号为课程添加。</p>'+pre(d['metadataExcerpt'])+'<p>r1 是这次输入里的目录别名；文件位置指向 game-playtest/SKILL.md。完整描述还列出烟雾测试、截图核验、浏览器自动化等情境，与实际文件一致。</p><p>同次列表中的 Skill：'+e('、'.join(d['availableSkillNames']))+'</p><p><a href="'+SOURCE+'" target="_blank" rel="noopener">打开完整原文 ↗</a></p>'),
('read','实际读取事件','<p>在上述输入之后，记录出现以下工具动作。路径中的省略号替代本机目录。</p>'+pre(d['read']['command'])+f'<dl><dt>事件</dt><dd>{e(d["read"]["item"])}</dd><dt>退出状态</dt><dd>0</dd><dt>工具返回</dt><dd>game-playtest/SKILL.md 的完整内容，已与固定版本核对</dd></dl><p>这说明该文件进入本次任务。可见记录不展示模型内部如何判断。</p>'),
('result','返回的清单节选','<p><strong>本次请求中的规则：</strong>每翻两张算一步；重开后牌面关闭、配对进度和步数归零。</p><p>按原回复顺序节选，正文不改；表头为阅读补充。A2、A3、B1、B3 是原清单的项目编号。</p>'+checklist(d['answerExcerpt'])+'<p>这里是安排怎样检查，尚未执行这些检查。</p>'),
('description','描述改写与复核','<h3>原描述的任务范围</h3>'+pre('Run browser-game playtests and frontend QA. …')+'<p>原描述已包含浏览器试玩与检查情境，本次已正确选中。</p><h3>课程改写示例</h3>'+pre(d.get('revisedDescription',''))+'<p>只在演示副本中替换 description；name、正文、引用及其余 Skill 不变。</p><h3>两类复核请求</h3>'+prompt(d['prompt'])+prompt(d.get('negativePrompt',''))+'<h3>本次实际观察</h3><table><thead><tr><th>描述版本</th><th>请求</th><th>game-playtest 读取</th><th>返回</th></tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+e(str(v))+'</td>' for v in [x['description'],x['task'],x['selected'],x['result']])+'</tr>' for x in d['runs'])+'</tbody></table><p>先确认每次新会话实际收到对应版本，再检查选用与输出。少量任务用于核对方法，不据此给出准确率或稳定性改善的结论。</p>')]
html='''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Skill 调用与选用记录</title><link rel="stylesheet" href="../../../shared/tokens.css"><style>
*{box-sizing:border-box}body{margin:0;background:var(--color-paper);color:#243042;font-family:var(--font-body);line-height:1.7}main{max-width:1120px;margin:auto;padding:28px 32px 80px}header p{color:#526059;font-size:17px}h1{font-size:34px}h2{font-size:30px}h3{font-size:22px;margin-top:30px}section p{font-size:21px}a{color:#0b6b5f}nav{display:flex;flex-wrap:wrap;gap:10px;border-block:1px solid #b8c1b9;padding:12px 0;position:sticky;top:0;background:var(--color-paper);z-index:2}nav a{padding:5px 10px;font-size:16px}nav a[aria-current=true]{background:#243042;color:#fff;text-decoration:none}pre{font-family:var(--font-mono);white-space:pre-wrap;overflow-wrap:anywhere;font-size:19px;line-height:1.65;padding:22px;background:#e9ece6;border-left:3px solid #0b6b5f}button{font:inherit;cursor:pointer;border:1px solid #acb8ae;background:transparent;padding:8px 16px;color:#243042}.request>p{font-size:16px;color:#526059;margin-bottom:0}.request pre{margin-top:6px}dt{font-weight:700}dd{margin:0 0 18px}dl{font-size:20px}table{width:100%;border-collapse:collapse;font-size:18px}th,td{text-align:left;padding:12px 10px;border-bottom:1px solid #bac2b9}#result th:first-child,#result th:last-child{white-space:nowrap;width:64px}.pager{display:flex;justify-content:space-between;margin-top:35px}section[hidden]{display:none}section{scroll-margin-top:80px}footer{font-size:15px;color:#526059;margin-top:40px}@media(max-width:900px){nav{position:static}}@media(max-width:650px){main{padding:18px}h1{font-size:28px}section p{font-size:18px}pre{font-size:15px;padding:14px}nav{position:static}table{font-size:14px}th,td{padding:8px 4px}}
</style></head><body><main><header><h1>Skill 调用与选用记录</h1><p>2026-11-07 保存的真实运行 · Codex CLI 0.163.0 · MiniMax-M3.1-Flash</p><p>固定版本的本地 Skill 副本；保留原相对引用，本次不演示 Plugin 安装</p></header><nav aria-label="回放定位">'''
nav_labels=['主动调用','自然语言请求','可用说明','实际读取','返回清单','描述复核']
html+=''.join(f'<a href="#{id}">{i+1:02d} {nav_labels[i]}</a>' for i,(id,title,_) in enumerate(sections))+'</nav>'
html+=''.join(f'<section id="{id}"><h2>{title}</h2>{body}</section>' for id,title,body in sections)
html+='''<div class="pager"><button id="prev" type="button">← 上一处</button><button id="next" type="button">下一处 →</button></div><footer>来源：同次请求、会话可用说明、工具事件与返回。完整原始记录留在本地实验目录，公开页仅保留核对后的节选。</footer></main><script>
const ids=[...document.querySelectorAll('section')].map(x=>x.id);let current=0;
function show(){current=Math.max(0,ids.indexOf(location.hash.slice(1)));document.querySelectorAll('section').forEach((s,i)=>s.hidden=i!==current);document.querySelectorAll('nav a').forEach((a,i)=>a.setAttribute('aria-current',String(i===current)));document.querySelector('#prev').disabled=current===0;document.querySelector('#next').disabled=current===ids.length-1;window.scrollTo(0,0)}
document.querySelector('#prev').onclick=()=>location.hash=ids[current-1];document.querySelector('#next').onclick=()=>location.hash=ids[current+1];window.addEventListener('hashchange',show);show();
document.querySelectorAll('.copy').forEach(button=>button.onclick=async()=>{try{await navigator.clipboard.writeText(button.parentElement.querySelector('pre').textContent);button.textContent='已复制'}catch{button.textContent='请选中上方请求复制'}});
</script></body></html>'''
(HERE/'selection-evidence.html').write_text(html)
print('selection materials: 6 locations')
