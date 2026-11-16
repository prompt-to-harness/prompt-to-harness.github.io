#!/usr/bin/env python3
"""第二部分讲述线的材料阅读页；原回复和文件从现有唯一源读取。"""
from pathlib import Path
from html import escape as e
import json
import difflib
from markdown_it import MarkdownIt

HERE = Path(__file__).resolve().parents[1]
M = HERE.parents[1] / 'materials/skill-authoring-20261107'
manifest = json.loads((M / 'manifest.json').read_text())
runs = {r['case']: r for r in manifest['runs']}
plan = json.loads((HERE / 'screen-plan.json').read_text())['authoring']
md = MarkdownIt('commonmark', {'html': False}).enable('table')

def render(text):
    return md.render(text).replace('<table>', '<div class="table-scroll"><table>').replace('</table>', '</table></div>')

def read(path):
    return (M / path).read_text()

def link(label, href):
    return f'<a href="{e(href, quote=True)}" target="_blank" rel="noopener">{e(label)} ↗</a>'

def material(key):
    item = plan['materials'][key]
    return link(item['label'], item['url'])

def pre(text):
    return '<pre><code>' + e(text) + '</code></pre>'

def table(head, rows):
    return '<div class="table-scroll"><table><thead><tr>' + ''.join('<th>'+e(c)+'</th>' for c in head) + '</tr></thead><tbody>' + ''.join('<tr>'+''.join('<td>'+e(c)+'</td>' for c in row)+'</tr>' for row in rows) + '</tbody></table></div>'

def excerpt(path, start, end):
    text=read(path)
    return render(text[text.index(start):text.index(end)])

def full(case):
    r = runs[case]
    return '<details><summary>打开完整原始返回</summary>' + render(read(r['reply'])) + '</details>'

def proof(case):
    r=runs[case]
    body=f'<p class="identity">{e(case)} · {e(r["version"])} · 2026-11-07 历史调用</p>'
    body+='<h3>同轮请求</h3>'+pre(read(r['prompt']))
    body+='<h3>发现与读取的核验记录</h3>'
    body+='<p>可用说明：原生 rollout 第 '+e(str(r['skill_catalog'][0]['rollout_line']))+' 行包含该 Skill。以下是实际工具读取；模型自述不作为读取凭据。</p>'
    for event in r['exact_skill_reads']:
        body+=pre(event['command'])
        body+=f'<p>events.jsonl 第 {event["events_line"]} 行 · {e(event["item_id"])} · exit {event["exit_code"]}</p>'
    body+='<details><summary>版本与来源定位</summary><p>本轮完整正文已在工具返回中核对；文件 SHA-256</p>'+pre(r['skill_sha256'])
    body+='<p>公开事件摘录与完整原始记录定位：'+link('manifest.json','../../materials/skill-authoring-20261107/manifest.json')+'</p></details>'
    return body

sections=[]
def section(id,title,body,kind='历史材料'):
    sections.append((id,title,f'<section id="{id}"><p class="kind">{e(kind)}</p><h2>{e(title)}</h2>{body}</section>'))

added='\n'.join(line[1:].strip() for line in read('planning-requirement.patch').splitlines() if line.startswith('+') and not line.startswith('+++')).removeprefix('- ').strip()
section('change','只改规划输出的一项要求',
    '<p>修改位置：课程演示副本 skills/game-studio/SKILL.md → Output Expectations → planning 条目。新增句属于课程改写。</p>'+pre(added)+
    '<h3>两版使用同一请求</h3>'+pre(read('prompts/planning.txt'))+
    '<details><summary>两版隔离条件</summary>'+table(['原版','修改版'],[['固定上游完整副本','保留相同目录与文件，增加这一行'],['name / description 原样','name / description 原样'],['original-verified 新会话','modified 新会话']])+'</details>'+
    '<p>'+link('查看补丁原件','../../materials/skill-authoring-20261107/planning-requirement.patch')+' · '+material('entry')+'</p>')
section('reads','先核对实际读到的版本',proof('original-verified')+proof('modified')+'<h3>修改版工具返回中已核对的课程新增句</h3>'+pre(added))
section('compare','从检查要点到可操作的三项结构',
    '<h3>原版：原本就有结束与重开</h3>'+excerpt('responses/original-verified.md','## 6. 测试方案','## 7. 实施顺序')+full('original-verified')+
    '<h3>修改版：检查计划（原文）</h3>'+excerpt('responses/modified.md','## 7. 检查计划','## 8. 风险与取舍')+full('modified'))
section('limits','结构采用以后，还要审阅内容',
    table(['修改版原话','讲师核对意见（不是模型回复）'],[
        ['无残留计时器/动画回调','纯手动检查需写可观察动作，例如重开、等待、再操作，核对新局没有被上一局影响'],
        ['第一张翻开时第三张不可点。','与前文两张参与判断的过程对照，需明确锁定发生在哪个时点'],
        ['桌面 4×4 居中；窄屏缩放卡牌尺寸，必要时降到 4×3 换行','同一方案规定 16 张牌，4×3 只能放 12 张，需纠正布局数量']
    ])+'<p>本次只确认新增要求被用于输出；完整方案仍有待修订项，计划中的检查尚未执行。</p>','原话与讲师分析')
section('routing','同一修改版运行的真实读取顺序',
    '<p>按 events.jsonl 完成事件行排列；不表示并行命令依次启动，也不表示对应工作已完成。先取得专项指导，后读取共享资料；中途有一次目录查找失败。</p>'+
    table(['事件行 / item','工具命令（本机路径已去敏）','退出码'],[[str(x['events_line'])+' / '+x['item_id'],x['command'],str(x['exit_code'])] for x in runs['modified']['tool_events']])+
    '<p>'+material('ui')+' · '+material('playtest')+' · '+material('foundations')+'</p>')
section('sharing','两个入口，共用一份选型资料',
    '<div class="table-scroll"><table><thead><tr><th>引用来自</th><th>文件内路径</th><th>解析后的同一目标</th></tr></thead><tbody>'
    '<tr><td>skills/game-studio/SKILL.md</td><td>../../references/engine-selection.md</td><td rowspan="2" class="shared-target">references/engine-selection.md<br><strong>两份 Skill 共用这一个文件</strong></td></tr>'
    '<tr><td>skills/web-game-foundations/SKILL.md</td><td>../../references/engine-selection.md</td></tr></tbody></table></div>'
    '<p>两条引用共用一个目标；资料只维护一份。引用存在与本次已读取是不同证据。</p>'+
    table(['另一种复用','目标','提供什么'],[['game-studio 的界面路由','../game-ui-frontend/SKILL.md','独立的界面设计方法与检查标准'],['game-studio 的试玩路由','../game-playtest/SKILL.md','独立的试玩工作方法与报告要求']])+
    '<p>'+material('entry')+' · '+material('foundations')+' · '+material('engine')+' · '+material('ui')+' · '+material('playtest')+'</p>','固定文件关系 · 课程整理')
section('core','正文保留什么，哪些内容可以移走',
    table(['内容与例子','处理','判断依据'],[
        ['任务目的、必要输入、关键步骤、条件与例外、输出与检查','留在正文','每次开展这项工作需要；删掉会改变行动'],
        ['engine-selection 的详细判断；变长的翻牌案例','按需放入 Reference','只在某类情况需要，入口保留读取条件和路径'],
        ['重复口号、与任务无关的常识','删除','没有增加可执行的判断或约束']
    ])+'<p>按信息作用控制长度；不把行数当产品上限，不为精简删掉关键条件。正文也可以包含必要知识。</p><p>'+material('official')+'</p>','归纳内容备查 · 主讲使用对应 PPT')
section('split','按任务需要选择资料与配套内容',
    table(['遇到什么需要','怎样组织','入口还要交代什么'],[
        ['较长的例子、规则表或背景','Reference；共享标准维护一处','什么时候读、实际路径、用来解决什么问题'],
        ['可独立开展的试玩工作','另一份 Skill','何时使用、游戏入口与规则、希望得到的发现和证据'],
        ['重复的图片整理或确定计算','脚本','调用条件、输入输出、如何核对结果'],
        ['模板、待处理图片等输入','素材','使用位置、用途和必要限制']
    ])+'<p>当前小游戏手动检查计划：先用一个 SKILL.md，把任务说清，再按实际缺口增加资源。</p>','归纳内容备查 · 主讲使用对应 PPT')
practice=(HERE/'README.md').read_text().split('## 第二部分现场实操准备\n',1)[1].split('\n## ',1)[0]
section('practice','现场编辑与调用准备',render(practice),'录制准备 · 主讲在编辑器与 Codex 操作')
skill=read('example/game-check-plan/SKILL.md')
lines=skill.splitlines()
states=['.agents/skills/game-check-plan/\n  （尚无文件）','\n'.join(lines[:4]),'\n'.join(lines[:10]),skill]
section('create','从任务写成一份最小 Skill',
    '<p>以下四态只供取文字和排练。正式讲述切到真实编辑器，从空文件逐段输入、保存，再在该项目的新会话调用；点击四态不能代替实操。创建位置：独立示范项目中的 .agents/skills/game-check-plan/SKILL.md。</p>'+
    '<div class="build-buttons" role="group" aria-label="编写步骤">'+''.join(f'<button type="button" data-build="{i}" aria-pressed="{str(i==0).lower()}">{name}</button>' for i,name in enumerate(['空目录','名称描述','输入分支','完整正文']))+'</div>'+
    ''.join(f'<div class="build-state" data-state="{i}"'+(' hidden' if i else '')+'>'+pre(s)+'</div>' for i,s in enumerate(states))+
    '<p>'+material('example')+' · '+material('practice')+' · '+material('materials')+' · '+material('discovery')+'</p>','编写备查 · 主讲在真实编辑器操作')
section('memory','完整规则：v3 翻牌调用',proof('created-memory-v3')+'<h3>同轮完整原始返回</h3>'+render(read(runs['created-memory-v3']['reply'])))
section('memory-review','返回计划怎样逐项验真',
    table(['原回复位置','发现的问题','讲师核对意见'],[
        ['C2：任意两张；C3：延续 C2 的不匹配状态','任意两张不保证不匹配','先通过观察确认是不匹配的一对，再检查等待与输入锁定'],
        ['C5：任意已配对进度；预期进度变为 1','前置状态与固定数值冲突','预期应是原进度 +1'],
        ['C9 与待确认 C','一处先断言动画行为，一处又待确认','用新局不受旧回调影响的可见结果核对，未知呈现先确认']
    ])+'<p>建议与原回复分开；这些建议尚未另行调用验证。</p>','讲师核对意见')
v2=read('versions/game-check-plan-v2.md')
diff=''.join(difflib.unified_diff(v2.splitlines(True),skill.splitlines(True),fromfile='game-check-plan v2',tofile='game-check-plan v3'))
section('missing','信息不足：为什么把提醒改成明确分支',
    '<h3>两个版本使用相同请求</h3>'+pre(read('prompts/created-missing.txt'))+
    '<h3>v2：缺少规则仍生成检查表</h3>'+excerpt('responses/created-missing-v2.md','## 二、关键检查项','## 三、待确认信息')+full('created-missing-v2')+
    '<h3>根据返回修订正文</h3>'+pre(diff)+
    '<h3>v3：同请求复核</h3>'+proof('created-missing-v3')+render(read('responses/created-missing-v3.md')))
section('transfer','换一种游戏：v3 躲避调用',proof('created-transfer-v3')+'<h3>同轮完整原始返回</h3>'+render(read('responses/created-transfer-v3.md'))+
    '<aside class="analysis"><h3>讲师核对意见</h3><p>本次换用了方向键、金币、障碍和 60 秒规则。返回自行加入“一次移动一格”和提前结束后倒计时冻结，输入未规定这些细节，应先确认；不把这些假定当成验收标准。</p></aside>')
section('check','两个情境，检查能否作出写法选择',
    '<h3>情境一：翻牌特有的检查例子越来越长</h3><details><summary>展开解析</summary><p>正文保留通用检查方法。较长案例放进 references/memory-cases.md，入口写清使用条件：</p>'+pre('检查对象是记忆翻牌时，读取 references/memory-cases.md，按本次玩法选择适用案例；示例中的牌数和时长以当前需求为准。')+'</details>'+
    '<h3>情境二：另一个 Skill 也要用这套检查标准</h3><details><summary>展开解析</summary><p>把标准维护在双方都能访问的一处，各自引用真实路径；不要复制两份。只有出现能独立触发、具有自己输入和结果的工作，才拆另一份 Skill。game-studio 与 web-game-foundations 共用选型资料，game-playtest 则负责专项试玩。</p></details>'+
    '<p>以上路径是课程扩展示例，尚未创建或实跑。当前最小示例仍只有 SKILL.md。</p>','归纳内容备查 · 主讲使用对应 PPT')
section('handoff','用实际产物核对读、改、写',
    table(['本节留下的产物','核对什么'],[
        ['一处正文修改与相同请求的返回','负责该行为的要求、实际读到的版本、输出是否落实'],
        ['一份最小 SKILL.md 与三类请求','正常输入能生成计划，缺失规则先提问，不同玩法不沿用旧数值'],
        ['正文、资料与独立工作的取舍','核心保留，细节按需读，共享知识只维护一处']
    ])+'<p>接下来用指导开发躲避游戏，再对照实际读取、实现与检查结果。当前产物是指导与计划，游戏行为留到真实开发中验证。</p>','归纳内容备查 · 主讲使用对应 PPT')
html='''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>3.2 第二部分 · 讲述材料与归纳样稿</title><link rel="stylesheet" href="../../../shared/tokens.css"><link rel="stylesheet" href="authoring-evidence.css"></head><body><main><header><a href="speaker.html?part=2">返回画面与讲述对照</a><h1>读懂、修改与从零编写 Skill</h1><p>11 月 7 日真实调用材料与课程归纳样稿。请求、返回、讲师核对意见分区；方案中的开发与检查均未执行。11 月 6 日规划在独立回放页保留。</p></header>'''
html+='<nav aria-label="材料定位">'+''.join(f'<a href="#{id}">{e(title)}</a>' for id,title,_ in sections)+'</nav>'
for i, (id, title, body) in enumerate(sections):
    routes=[]
    if i: routes.append(f'<a href="#{sections[i-1][0]}">← 上一段</a>')
    if i+1<len(sections): routes.append(f'<a href="#{sections[i+1][0]}">下一段：{e(sections[i+1][1])} →</a>')
    html+=body.replace('</section>', '<div class="section-route">'+' · '.join(routes)+'</div></section>')
html+='''</main><script>document.querySelectorAll('[data-build]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-state]').forEach(state=>state.hidden=state.dataset.state!==button.dataset.build);document.querySelectorAll('[data-build]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));}));</script></body></html>\n'''
(HERE/'authoring-evidence.html').write_text(html)
print(f'authoring materials: {len(sections)} sections')
