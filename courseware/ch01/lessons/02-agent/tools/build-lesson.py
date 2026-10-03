#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the lesson and editable diagram sources; no external runtime dependencies."""
import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
D = ROOT / 'diagrams'
D.mkdir(exist_ok=True)
C = dict(ink='#243042', muted='#5B6573', agent='#5A51D1', agentL='#EDEBFB', tool='#0B6B5F', toolL='#E0F3EF', ctx='#6E6043', ctxL='#F2EDE1', risk='#D9481C', riskL='#FCE6DD', ok='#15803D', okL='#E3F2E6', paper='#F4F2EB')
def esc(v): return html.escape(str(v), quote=True)
def reveal(step, content, tag='div', cls=''):
    return f'<{tag} data-reveal="{step}" class="{cls}">{content}</{tag}>'
def txt(x,y,lines,size=22,color='ink',anchor='start',cls=''):
    if isinstance(lines,str): lines=[lines]
    return f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="{size}" fill="{C.get(color,color)}" class="{cls}">'+''.join(f'<tspan x="{x}" dy="{0 if i==0 else size*1.45}">{esc(t)}</tspan>' for i,t in enumerate(lines))+'</text>'
def box(x,y,w,h,fill='paper',stroke='ink',rough=True):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{C.get(fill,fill)}" stroke="{C.get(stroke,stroke)}" stroke-width="2"'+(' class="sketch"' if rough else '')+'/>'
def svg(name,title,body):
    defs=f'<defs><filter id="rough-{name}" filterUnits="userSpaceOnUse" x="-30" y="-30" width="1228" height="430"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="2.3"/></filter><marker id="arrow-{name}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="{C["ink"]}"/></marker></defs>'
    result=f'<svg xmlns="http://www.w3.org/2000/svg" class="lesson-diagram" viewBox="0 0 1168 370" role="img" aria-labelledby="title-{name}" style="--rough:url(#rough-{name})"><title id="title-{name}">{esc(title)}</title><style>.diagram-arrow{{fill:none;stroke:#243042;stroke-width:2.5}}.sketch{{filter:var(--rough)}}text{{font-family:Course Sans,Noto Sans SC,sans-serif}}.diagram-title{{font-family:Course Title,Noto Sans SC,sans-serif}}</style>{defs}{body}</svg>'
    (D/f'{name}.svg').write_text(result)
    return result

def graph_source(name,title,nodes,edges):
    """Same IDs and labels are used in Mermaid, Archscribe and the adapted SVG."""
    m=['flowchart LR']+[f'  {n["id"]}["{n["label"]}"]' for n in nodes]
    for e in edges:
        m.append(f'  {e["from"]} -->'+(f'|"{e["label"]}"|' if e.get('label') else '')+f' {e["to"]}')
    (D/f'{name}.mmd').write_text('\n'.join(m)+'\n')
    spec={'layout':'graph','style':'paper','animation':'flow','motion_level':'none','density':'airy','direction':'down','footer':'逻辑校样；课堂使用同源节点的横向分步图。','title':{'prefix':'1.2','highlight':title,'subtitle':'同源节点与连接 · 正式课件另按正文区适配'},'nodes':nodes,'edges':edges}
    (D/f'{name}.archscribe.json').write_text(json.dumps(spec,ensure_ascii=False,indent=2)+'\n')
    return spec

loop_nodes=[dict(id=i,label=l,body=b,icon=icon,accent=a) for i,l,b,icon,a in [
('input','任务输入','只改指定欢迎语','message','white'),('action','提出动作','请求读取目标文件','agent','purple'),('tool','工具执行','执行文件读取','terminal','green'),('result','结果返回','文件内容或报错','file','amber'),('next','下一步','修改、再读或停止','decision','purple'),('end','退出循环','完成或需要停止','check','white')]]
loop_edges=[dict(**{'from':a,'to':b}) for a,b in [('input','action'),('action','tool'),('tool','result'),('result','next')]]+[{'from':'next','to':'action','label':'继续：依据结果提出新动作','kind':'loop'},{'from':'next','to':'end','label':'完成或停止'}]
graph_source('agent-loop','任务执行循环',loop_nodes,loop_edges)
body=''
steps=[0,1,1,2,3]
for j,n in enumerate(loop_nodes[:5]):
    x=10+j*232; tone=['ink','agent','tool','ctx','agent'][j]; fill=['paper','agentL','toolL','ctxL','agentL'][j]
    content=box(x,35,210,112,fill,tone)+txt(x+18,65,f'0{j+1}',18,tone)+txt(x+105,99,n['label'],27,tone,'middle','diagram-title')+txt(x+105,128,n['body'],18,'muted','middle')
    body+=reveal(steps[j],f'<g data-node="{n["id"]}">{content}</g>','g')
    if j:
        body+=reveal(steps[j],f'<path data-edge="{loop_nodes[j-1]["id"]}:{n["id"]}" d="M{x-22} 91H{x-6}" class="diagram-arrow" marker-end="url(#arrow-agent-loop)"/>','g')
body+=reveal(4,'<path data-edge="next:action" d="M1043 147V205H347V154" class="diagram-arrow sketch" marker-end="url(#arrow-agent-loop)"/>'+txt(657,238,'继续：依据结果提出新动作',22,'agent','middle')+'<path data-edge="next:end" d="M1043 205V276" class="diagram-arrow sketch" marker-end="url(#arrow-agent-loop)"/>'+txt(1030,258,'完成或停止',18,'ink','end')+'<g data-node="end">'+box(936,285,214,60)+txt(1043,325,'退出循环',25,'ink','middle','diagram-title')+'</g>'+txt(20,305,['人的位置：确认目标与范围','按授权执行，依据结果验收'],22), 'g')
loop_svg=svg('agent-loop','五节点执行循环：继续回到提出动作，完成或停止退出',body)

context_nodes=[{'id':'repo','label':'项目中的文件','icon':'folder','accent':'white'},{'id':'read','label':'工具读取','icon':'scan','accent':'green'},{'id':'context','label':'供判断使用的上下文','icon':'clipboard','accent':'amber'}]
context_edges=[{'from':'repo','to':'read','label':'选择相关文件'},{'from':'read','to':'context','label':'成功返回并纳入'}]
graph_source('context','可访问与已读取',context_nodes,context_edges)
body=reveal(0,'<g data-node="repo">'+box(10,30,335,225)+txt(32,70,'项目中可访问',28,'ink',cls='diagram-title')+txt(32,117,['setup-check/index.html','README.md','其他页面与样式'],23)+txt(32,229,'文件存在 ≠ 有读取证据',20,'risk')+'</g>','g')
body+=reveal(1,'<path data-edge="repo:read" d="M347 135H439" class="diagram-arrow" marker-end="url(#arrow-context)"/>'+txt(394,105,'选择',20,'ink','middle')+'<g data-node="read">'+box(450,91,245,88,'toolL','tool')+txt(572,129,'工具读取',27,'tool','middle','diagram-title')+txt(572,157,'先检查成功返回',20,'tool','middle')+'</g><path data-edge="read:context" d="M698 135H796" class="diagram-arrow" marker-end="url(#arrow-context)"/>'+txt(746,105,'纳入',20,'ink','middle'),'g')
body+=reveal(2,'<g data-node="context">'+box(807,30,350,225,'ctxL','ctx')+txt(829,70,'当前有依据的信息',27,'ctx',cls='diagram-title')+txt(829,116,['你的目标与约束','已读取的欢迎语','工具返回与反馈'],23,'ctx')+'</g>'+txt(20,322,'判断一条结论前，先问：它依据哪段要求、哪次返回？',26,'ink',cls='diagram-title'),'g')
context_svg=svg('context','项目文件通过工具读取，成功返回并纳入上下文；用户要求也是上下文的一部分',body)

route_nodes=[{'id':i,'label':l,'body':b,'icon':ic,'accent':'white'} for i,l,b,ic in [('prompt','Prompt','说清当前任务','message'),('vibe','Vibe Coding','看结果再迭代','iterate'),('sdd','SDD','固定需求与验收','clipboard'),('harness','Harness','复用规则与检查','guardrail')]]
route_edges=[{'from':a,'to':b,'label':'保留并增加'} for a,b in [('prompt','vibe'),('vibe','sdd'),('sdd','harness')]]
graph_source('course-route','能力逐层叠加',route_nodes,route_edges)
body=''
for j,n in enumerate(route_nodes):
    x=12+j*290; y=146-j*38
    content=f'<g data-node="{n["id"]}">'+box(x,y,272,150)+txt(x+20,y+40,n['label'],30,'ink',cls='diagram-title')+txt(x+20,y+81,n['body'],23)+txt(x+20,y+119,['任务说明','页面与检查记录','规格与验收条目','规则与检查入口'][j],19,'muted')+'</g>'
    if j: content+=f'<path data-edge="{route_nodes[j-1]["id"]}:{n["id"]}" d="M{x-16} {y+80}H{x-5}" class="diagram-arrow" marker-end="url(#arrow-course-route)"/>'
    body+=reveal(j,content,'g')
body+=reveal(3,box(12,315,1142,48,'ink')+txt(583,347,'每一层都保留：看证据、作判断、再验证',24,'#FFFFFF','middle'),'g')
route_svg=svg('course-route','Prompt、Vibe Coding、SDD、Harness 逐层叠加，始终保留验证和人工判断',body)

scenes=[]
def scene(id,label,title,lead,content,steps,script,segment,seconds,teaching='',layout=''):
    assert len(steps)==len(script),(id,len(steps),len(script))
    scenes.append(dict(id=id,label=label,title=title,lead=lead,kicker=f'第 1 章 · 1.2 · {segment}',html=content,steps=steps,script=script,segment=segment,seconds=seconds,layout=layout,teaching=[{'title':'逐步呈现与提问','text':'\n\n'.join(f'{i+1}. {s}' for i,s in enumerate(steps))},{'title':'教学边界与材料','text':teaching or '对照 1.1 本人记录；本页示意不作为真实运行证据。只解释可见动作、返回与人工决定。'}],notes=f'<p>预算 {seconds} 秒，含页内停顿；实际试讲时长未测。按左右键逐步推进，末步恢复总览。</p>',source=f'index.html#{id}'))

def strip(text,step=0,cls=''): return reveal(step,f'<p>{text}</p>',cls='conclusion '+cls)
def panel(title,text,tone='ink',step=0):
    return reveal(step,f'<h3>{title}</h3>{text}',cls='evidence-panel '+tone)
S='执行循环'
scene('p09','把小改动拆开看','把一次小改动拆开看','1.1 做过一次 → 1.2 拆开看 → 1.3 理解权限',
'<div class="opening"><div class="welcome-sheet"><span class="eyebrow">环境检查页 · 原文</span><p class="welcome-old">你好，欢迎来到我的练习页面</p>'+reveal(1,'<span class="pencil-mark">这次只改这一句</span><p class="welcome-new">你好，欢迎来到<br>Vibe Coding 课堂！</p>')+'</div><div class="opening-question">'+reveal(0,'<p class="hand">你发出一句话，<br>谁真正改了文件？</p>')+reveal(1,'<p>今天只追三件事：<br><b>拿到什么 → 做了什么 → 凭什么相信</b></p>')+'</div></div><p class="source-note">原文来自 Starter；目标沿用 1.1。此处为任务对照，不是运行结果。</p>',
['回看原欢迎语，抛出“谁改了文件”','圈定目标，说明本节只复盘已有任务'],
['上一节改了一句欢迎语。你发出一句话，谁真正改了文件？今天把过程拆开看。','请对照自己的记录，找信息、动作和结果。没有记录时先观察教学示意，实操仍需补做。'],S,20,layout='lesson-cover')
scene('p09-request','请求与结果','“准备读取”，还不是“已经读到”','先停在请求这一刻：它已经知道文件内容了吗？',
'<div class="evidence-pair">'+panel('Agent · 提出动作','<blockquote>准备读取<br><code>setup-check/index.html</code></blockquote><span class="stamp">请求</span>','agent')+panel('工具返回 · 文件内容','<pre><code>&lt;h1 id="welcome-message"&gt;\n  你好，欢迎来到我的练习页面。\n&lt;/h1&gt;</code></pre><span class="stamp">有了返回，才能核对读到了什么</span>','ctx',1)+'</div>'+strip('提出动作 ≠ 执行成功；下一步要看返回',2)+'<p class="source-note">请求与返回为教学示意；请对应 1.1 中真实的两条记录</p>',
['只看请求，停顿 5 秒','展示返回，圈出实际欢迎语','比较请求与结果，归纳证据边界'],
['现在只看左边：“准备读取文件”。先停五秒。能不能凭这句话判断，它已经知道文件内容？不能，这只说明它提出了动作。','右边展示的是返回内容的教学示意。只有检查实际工具返回，我们才知道读到了什么，或者读取是否报错。请在自己的记录里找到请求和返回，不要把它们当成同一件事。','同样的区别也适用于修改和测试。准备修改不等于已经改对，准备测试不等于测试通过。接下来把请求、执行和返回放回整个任务。'],S,50)
scene('p09-loop','五节点循环','下一步，从上一步的返回里来','沿同一次任务，逐步连起输入、动作、执行与结果。',loop_svg,
['先看目标与范围','展开提出动作和工具执行','检查返回：内容或报错','依据返回决定下一步','显示继续回路、退出条件与人的位置'],
['起点是任务输入。我们指定目标欢迎语、文件范围和完成标准。这些要求决定了任务要往哪里走。','Agent 根据已有信息提出动作，例如请求读文件。工具负责执行具体读取。这里不能跳过执行，直接把请求当成结果。','执行后会返回文件内容，也可能返回报错。请对应自己记录中的一次返回。报错也是信息，但不能被当成读取成功。','有了返回，Agent 才继续提出修改、补充读取或提问。修改之后还要看新的返回与检查结果，不是走到第五格就自动完成。','现在看回线：需要继续就回到提出动作；完成或需要停止时退出。人确认目标、范围和授权，并依据结果决定能否接受。这里不表示每个工具动作都会逐次弹出确认框。'],S,80,'原 P09 五节点、继续回路、完成或停止出口均保留。Model 内部推理不可见，不为其补画隐藏步骤。')
scene('p09-agent','Model 与 Agent','模型提供能力，Agent 组织任务','把刚才的动作串起来，才有一轮协作过程。',
'<div class="model-comparison">'+panel('Model · 模型','<p class="large-copy">生成内容<br>作出判断</p><p>提出文字或动作建议</p>','agent')+panel('Agent · 智能体','<p class="large-copy">模型 + 上下文 + 工具<br>放进执行循环</p><p>依据返回，继续推进任务</p>','agent',1)+'</div>'+strip('模型输出有不确定性，需要用证据验证',2),
['说明模型的能力','用刚才循环解释 Agent','一句话说明不确定性'],
['Model 是模型，提供生成内容和作出判断的能力。这里不展开模型结构。','Agent 把模型、上下文、工具组织进执行循环。读文件、拿到返回、继续修改，就是具体例子。','模型输出有不确定性，需要证据验证。任务完成要看结果和范围是否满足要求。'],S,30)
S='信息与术语'
scene('p10','给记录贴标签','术语，就贴在刚才的记录上','先找到具体片段，再记它的名字。',
'<div class="labelled-records">'+reveal(0,'<div class="record-label">Prompt<br><span>提示词</span></div><div class="record-body">“只改指定欢迎语，其他内容和布局保留。”<small>你给 AI 的任务说明：目标、约束、完成标准</small></div>',cls='record ink')+reveal(1,'<div class="record-label">Tool<br><span>工具</span></div><div class="record-body">读取文件、编辑代码、运行命令的入口。<small>动作是否成功，要继续看返回</small></div>',cls='record tool')+reveal(2,'<div class="record-label">Context<br><span>上下文</span></div><div class="record-body">要求 + 已读取内容 + 工具返回 + 反馈。<small>当前任务中供判断使用的信息；Prompt 也是其中一部分</small></div>',cls='record ctx')+reveal(3,'<div class="record-label">Context Window<br><span>上下文窗口</span></div><div class="record-body">模型一次能够处理的信息容量边界。<small>Context 是信息；Context Window 限制一次能处理多少信息</small></div>',cls='record ctx')+'</div>',
['把用户要求标为 Prompt','把动作入口标为 Tool','把供判断的信息标为 Context','单独解释 Context Window：一次处理的容量边界'],
['不要先背定义。先找到你发给 AI 的任务说明，这就是 Prompt。我们在 1.4 才练习怎样写好目标、约束和完成标准，这里先认出它。','再找到读取或编辑动作使用的入口，这叫 Tool，也就是工具。Agent 提出动作，工具执行动作，返回告诉我们具体发生了什么。','Context 是当前供判断使用的信息，包括要求、已读取内容、工具返回和反馈；Prompt 也是其中一部分。','Context Window 是模型一次能够处理的信息容量边界。简单区分：前者是信息，后者限制一次能处理多少信息。后面用图示继续解释。'],S,55)
scene('p10-context','可访问与已读取','文件在项目里，不等于已经读过','先问“有哪条读取证据”，再判断结论的依据。',context_svg,
['列出可访问的项目文件','只让有读取动作的文件经过工具','检查纳入的信息，不替缺失证据补事实'],
['项目里可能有许多文件。文件存在、工具可以访问，并不等于这次任务已经读取了它。左边列的是可能访问的范围。','从范围里选出相关文件，通过工具读取。这个动作也可能失败，所以要检查返回内容、路径以及是否与任务对应。','当前能指认的依据包括任务要求和已经返回的信息。现在请指一条 AI 结论，说出它依据哪段要求或哪次返回。没有找到对应证据时，就先记录“依据不足”，不要代替它猜测。'],S,55)
scene('p10-window','上下文窗口','一次能处理的信息，有容量边界','Context 是信息；Context Window 是一次处理的容量边界。',
'<div class="window-metaphor"><div class="information-stack"><span>项目文件</span><span>历史对话</span><span>工具返回</span><span>本次要求</span></div>'+reveal(1,'<div class="window-frame"><h3>当前处理的信息</h3><p>保留相关、准确的内容</p><div class="capacity-line" aria-hidden="true"></div><p class="small-copy">容量有限，不等于记住整个项目</p></div>')+'</div>'+strip('不是资料越多越好，而是完成任务所需的信息有没有到位',2)+'<p class="source-note">容量示意，不代表具体产品的界面、比例或固定 token 数</p>',
['看信息来源，提出“会话很长就全记住了吗”','显示有限窗口，区分信息与容量','回到相关性和准确性'],
['Context Window 是上下文窗口。会话很长、文件很多，能保证所有内容都进入当前判断吗？','它描述一次处理的信息容量边界。框只是容量示意，不代表产品界面、固定数字或特定信息一定会丢失。','要关心信息是否相关、准确。请区分：Context 是信息，Context Window 限制一次处理的容量。'],S,35)
scene('p10-diff','差异与页面','两份证据，回答两个问题','Diff 看改动；页面看结果。',
'<div class="evidence-pair">'+panel('Diff · 改了什么','<div class="diff-lines"><p class="minus">− 你好，欢迎来到我的练习页面</p><p class="plus">+ 你好，欢迎来到 Vibe Coding 课堂！</p></div><p class="small-copy">核对改动内容与范围</p>','ink')+panel('页面 · 显示什么','<div class="page-evidence"><span>环境检查页</span><b>你好，欢迎来到<br>Vibe Coding 课堂！</b></div><p class="small-copy">打开正确页面，刷新并核对结果</p>','ink',1)+'</div>'+strip('“看到了新文案”，还不能单独证明“没有多改文件”',2)+'<p class="source-note">差异与页面均为教学示意，非真实执行截图；正式检查需查看完整 Diff</p>',
['解释 Diff 的作用','展示页面结果的作用','问“页面能证明没多改文件吗”'],
['Diff 是修改前后的差异。这里省略标签，只看文字变化；真实任务要查完整 Diff 和文件列表。','右边示意页面结果。实际要打开正确页面、刷新，核对文字和布局，Diff 不能代替这一步。','看到了新文案，能证明没有多改文件吗？不能，两份证据回答不同问题。接下来判断一句结论有多少依据。'],S,35)
S='判断信息'
classification=[('事实','刷新正确页面，看到了目标文案','有对应观察支持；仍需 Diff 查范围','ok'),('假设','“用户可能更喜欢活泼的文案。”','尚未确认，向用户核实','ctx'),('建议','“可以顺便加个动画。”','是可选做法，由人决定是否采纳','agent'),('决定','用户明确说：“只改文字，不加动画。”','已确认，约束本次任务范围','ink')]
scene('p11','四类信息','同一句“改好了”，你凭什么相信？','先分清信息的性质，再决定怎样处理。',
'<div class="classification">'+''.join(reveal(i,f'<span class="class-name">{title}</span><blockquote>{quote}</blockquote><p>{result}</p>',cls=f'class-row {tone}') for i,(title,quote,result,tone) in enumerate(classification))+'</div>',
['先看事实及它能支持的范围','把未经确认的偏好识别为假设','把可选做法识别为建议','用人的明确决定约束范围'],
['先带做一个例子：刷新正确页面，看到了指定新文案。观察支持“文案已显示”，但不能单独证明“没有多改文件”。事实也要说清楚它支持哪一条结论。','“用户可能更喜欢活泼一点的文案”是尚未确认的假设。它听起来合理，也不能直接变成任务要求，需要向用户核实。','“可以顺便加个动画”是在提出建议。建议提供可选做法，但提出建议和决定执行是两件事。','用户明确说“这次只改文字，不加动画”，这是已经确认的决定，用于约束任务。接下来请你判断几个容易混淆的句子，先想理由，再看解析。'],S,55)

cards=[
('① 记录中有一次目标文件读取','事实候选','核对真实日志中的路径和返回；有对应证据才成立','ctx'),
('② 刷新正确页面，显示了目标文案','事实','有对应观察支持“文案已显示”；不能单独证明改动范围','ok'),
('③ AI 说：“没有多改文件。”尚无 Diff。','待验证主张','不能直接当事实；缺少实际 Diff 和文件范围检查','risk'),
('④ “学员大概喜欢深色背景。”','假设','偏好未确认，先向用户核实','ctx'),
('⑤ “建议先看 Diff。”','建议','提出验证做法；还不表示已经执行','agent'),
('⑥ “可以考虑扩大标题字号。”','建议','可选改动，需要人决定，不能擅自扩范围','agent'),
('⑦ 教师已批准：“只改欢迎语。”','决定','需有明确确认记录；它约束可修改范围','ink'),
('⑧ 教师决定：“这次不新增依赖。”','决定','需有明确确认记录；后续执行遵守这一边界','ink')]
def card_html(items):
    return '<div class="statement-grid">'+''.join(f'<article class="statement"><span class="card-quote">{q}</span>'+reveal(1,f'<b>{kind}</b><p>{reason}</p>',cls='card-answer '+tone)+'</article>' for q,kind,reason,tone in items)+'</div>'
scene('p11-judge','先判断，再看证据','“它说过”，不等于“它说的成立”','先判断②和③：分别能支持什么结论？缺什么证据？',
card_html(cards[:4])+strip('③保留为“待验证主张”，不强行归入四类',2)+'<p class="source-note">八卡练习 · 前四张。依据原 P11 教学草案，待与 M06 原题核对。</p>',
['停顿，让学员判断②③，其余对照','揭晓四条，重点解释证据边界','收拢：待验证主张不能因出自 AI 就成为事实'],
['请先暂停。重点比较第二条和第三条：你会怎样判断，理由是什么？其他两条先尝试，随后对照解析。我们判断的是句子里的结论，而不只是这句话是否出现过。','第二条有真实页面观察时，可以支持文案已经显示。第三条只有 AI 的保证，改动范围还没有证据。第一条也需要核对日志和返回，第四条是未确认的偏好假设。','第三条保留为待验证主张，不强塞进四类。我们可以确认 AI 说过这句话，但没有实际 Diff，不能确认它真的没有多改。把你的分类理由和缺少的证据记下来。'],S,65,'此为原 P11 八条草案的前四条，未冒称已核验的 M06 原题。请学员用本人任务片段补证据。')
scene('p11-more','建议与决定','一句建议，什么时候变成任务？','先分⑤⑥与⑦⑧，再为自己的任务补一条信息。',
card_html(cards[4:])+strip('还缺什么？目标文案 / 指定文件 / 完成标准 —— 任选一项写清',2)+'<p class="source-note">八卡练习 · 后四张。与前页共同构成草案八卡，不替代本人记录。</p>',
['先区分建议与已确认决定','揭晓四条，指出确认记录','指出一条缺失信息，留给 1.4'],
['继续看后四条。建议先看 Diff，和“已经看过 Diff”是同一回事吗？建议扩大字号，和允许它修改字号又是同一回事吗？先用自己的话区分建议和决定。','第五、第六条是在提出可选做法。第七、第八条如果有教师的明确确认记录，就属于已确认的决定。确认后的范围与边界，后续执行必须遵守。','现在回到你的首次任务，指出一条应该补充的信息。例如目标文案没有说清、文件位置没指定，或者完成标准太笼统。将它写进分类记录，留给 1.4 的 Prompt 练习补全。'],S,60,'八张陈述全部保留，重点主动判断两条易混项，其余对照解析；不要求背术语定义。')
S='失败与纠正'
def failure(no,where,issue,fix,verify,step):
    return f'<article class="failure-case"><div class="failure-head"><span>{no} · {where}</span><h3>{issue}</h3></div>'+reveal(step,f'<div class="repair"><b>纠正</b><p>{fix}</p><b>复验</b><p>{verify}</p></div>')+'</article>'
scene('p12','三个常见缺口','出错了，先找缺的是哪一环','任选一种现象，先说纠正动作，再说怎样复验。',
'<div class="failure-grid">'+failure('01','任务输入','AI 自己编了文案','补目标文字、位置、完成标准','对照要求重新核对页面与 Diff',1)+failure('02','执行范围','文字改了，样式也改了','识别并撤销本次越界改动，保留原有工作','重看完整 Diff，确认只留允许改动',2)+failure('03','结果检查','只有一句“已完成”','打开正确页面，并查看完整 Diff','同时核对显示结果和改动范围',3)+'</div><p class="source-note">三种可能场景，不表示 1.1 已经全部发生；纠正后必须复验</p>',
['只给三个现象，请先选一个判断','揭晓信息缺失的纠正与复验','揭晓范围失控的纠正与复验','揭晓验证缺失，并口头复述三种失败'],
['先看三种可能的现象：文案是 AI 自己编的，样式也被改了，或者只有一句“已完成”。请选择一种，说出缺的是哪一环，以及你准备怎样验证。','第一种是信息缺失。补清目标文字、修改位置和完成标准，再检查页面与 Diff 是否匹配要求。不要让 AI 继续猜偏好。','第二种是范围失控。先用 Diff 区分本次越界改动与用户原有工作，只撤销本次不该发生的修改。然后重新检查范围，不能用整体覆盖制造新问题。','第三种是验证缺失。打开正确页面核对文字和布局，再看完整 Diff。请用自己的话复述这三种失败，以及各自的一项纠正动作；只有“再试一次”还不够具体。'],S,80)
scene('p12-trace','路径与引用','读不到，和改错地方，是两种问题','先辨认现象，纠正动作才有方向。',
'<div class="evidence-pair">'+panel('工具执行失败','<pre><code>读取结果：找不到文件</code></pre>'+reveal(1,'<p>核对当前目录与文件路径</p><p class="verification">复验：重新读取，检查返回内容</p>'),'risk')+panel('误判代码逻辑','<p class="large-copy">同名欢迎语，<br>却属于另一个页面</p>'+reveal(2,'<p>沿当前页面入口确认实际引用</p><p class="verification">复验：改对位置，再查页面与 Diff</p>'),'risk')+'</div><p class="source-note">教学变式；不在本节展开环境排障或代码架构</p>',
['对比两种现象，不急着给答案','读不到：查目录与路径','改错位置：查页面实际引用并复验'],
['再看两个变式。一个是工具读取就报“找不到文件”，另一个是修改成功，却改了另一页面的同名文案。它们需要不同的纠正。','读取失败时，先看报错，核对当前目录和目标路径；修正后重新读取，检查返回内容。不能把一次失败调用当成已了解文件。','改错地方时，沿当前页面入口确认实际引用，改对位置后重新验证页面和 Diff。不要把所有失败都归为模型不够聪明，要说明问题发生在哪里。'],S,40)
S='课程路线'
scene('p13','能力逐层叠加','项目变复杂，协作能力逐层叠加','从欢迎语的小闭环，走向可维护的项目。',route_svg,
['Prompt：说清任务','Vibe Coding：根据结果持续迭代','SDD：维护需求和验收','Harness：复用规则、检查与人工确认点'],
['把这次小任务放进整门课程。Prompt 先训练说清任务，留下有范围和完成标准的说明。本章后面做出的首页 v0，仍然是 Prompt 原型。','页面做出来以后，发现布局或行为问题，需要依据真实结果持续反馈和迭代，这就是我们接下来重点实践的 Vibe Coding。它始终包含理解、检查和人工判断。','规则更多、版本更多时，口头说过不容易维护。SDD 把需求和验收写成可以维护的规格。进入这一层，前面的运行检查仍然保留。','Harness 再把协作规则、上下文、检查入口和人工确认点组织成可复用的环境。课程依次使用个人主页、JSON Crack、dependency-cruiser 三个独立项目，迁移的是协作方法，不是继承前一仓库的代码与会话。'],S,90,'首页 v0 在 1.5 创建；这里是路线定位，不声称学员在 1.2 已完成首页。三个独立项目保持大纲规定。')
S='路标与收尾'
industry=[('代码补全','补一行或一个函数','局部续写代码','https://docs.github.com/zh/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions','GitHub 官方入门'),('RAG · 检索增强生成','查资料后解释接口','先检索相关资料，再生成回答','https://aws.amazon.com/cn/what-is/retrieval-augmented-generation/','RAG 公开入门'),('工具调用','读文件、改代码、跑测试','回到刚才的动作与返回','index.html#p09-loop','回看本节循环'),('多模态理解','根据截图指出布局问题','后续页面反馈仍需运行验证','https://ai.google.dev/gemini-api/docs/image-understanding?hl=zh-cn','图片理解参考')]
scene('p14','行业路标','补代码、查资料、动手、看图','用 90 秒建立印象：可以组合，不是互相替代。',
'<div class="industry-strip">'+''.join(reveal(i,f'<span class="industry-verb">{verb}</span><h3>{title}</h3><p>{example}</p><p class="small-copy">{meaning}</p><a href="{url}"'+(' target="_blank" rel="noopener noreferrer"' if url.startswith('http') else '')+f'>{link} ↗</a>',cls='industry-item') for i,((title,example,meaning,url,link),verb) in enumerate(zip(industry,['补','查','做','看'])))+'</div><p class="source-note">只作路标，不练习、不考核；具体可用性取决于模型与工具环境</p>',
['代码补全：解决局部续写','RAG：检索资料，提供依据','工具调用：执行动作并检查返回','多模态：截图反馈；归纳能力组合的脉络'],
['最后用九十秒认识行业里的几种能力与机制，不练习，也不考核。代码补全适合局部续写一行或一个函数；本课重点是更完整的 Agent 协作，延伸可看页面的官方入门。','RAG 是检索增强生成：先查相关资料，再据此回答，例如解释项目接口。它是一种方法，不是与所有工具严格并列的产品分类。本课提供必要上下文，不搭建检索库；阅读入口留在页面。','工具调用对应刚才的执行循环：读取文件、修改代码、运行测试。提出调用不等于成功，要检查返回和实际结果。延伸先回看本节循环图。','多模态理解把图片等输入纳入任务，例如根据截图指出布局问题。后面会用截图反馈，实际效果仍需运行验证。把行业脉络理解为从局部补全，扩展到问答与资料辅助，再到工具协作和多模态反馈；这些能力可以组合，并非互相取代。'],S,90,'行业四问：解决什么、何时用、本课关系、延伸去哪。沿用原课件资料方向，本次未重新核验外链或产品操作，不新增考核。')
scene('p14-check','暂停自检','回到你的记录，能讲清这三件事吗？','暂停自检只检查本节核心能力，不考行业名词。',
'<div class="self-check">'+''.join(f'<article><span class="check-number">{i+1}</span><h3>{q}</h3>'+reveal(i+1,f'<p>{answer}</p>')+'</article>' for i,(q,answer) in enumerate([
('Agent、Tool、Context、Window 各指什么？','用自己的话各说一句，再从本人记录中指一条对应证据'),
('一句“完成了”，还缺哪些证据？','页面核对结果，Diff 核对范围；分类理由要解释得通'),
('至少三种失败，怎样纠正和复验？','补信息、撤销本次越界改动、补结果检查；纠正后重新验证')]))+'</div>',
['暂停，先独立作答','揭晓概念自检依据','揭晓证据边界','揭晓失败自检依据'],
['请暂停，用自己的记录回答三问。能解释、指证据、说明下一步即可，不要求背定义。','第一问：Agent 组织循环，Tool 执行动作，Context 是信息，Window 是容量边界。各指一条证据。','第二问：页面核对结果，Diff 核对范围。不能把 AI 的完成说明直接当事实。','第三问：至少列三种失败，各给纠正和复验。保存概念地图与分类记录。'],S,40,'视频中的暂停跟做另计；解析计入预算。初稿写入练习仓库 docs/evidence/CH01_PROMPT_EXPERIMENT.md；尚无本人实操证据不能记为通过。')
scene('p14-summary','带走一个习惯','每到一个结论，追问一次依据','下一节 1.3：当前项目，应该允许 Agent 做到哪一步？',
'<div class="recap"><p class="hand recap-main">它拿到了什么？<br>它实际做了什么？<br>结果支持什么结论？</p><div class="recap-notes">'+reveal(0,'<p><b>四个词</b><br>Agent · Tool · Context · Window</p><p><b>三种缺口</b><br>信息不全 · 范围失控 · 没有验证</p>')+reveal(1,'<p class="deliverable"><b>留下两份记录</b><br>循环与概念地图 + 有理由的信息分类</p>')+'</div></div>',
['用三句追问收拢本节','说明产出与下一节权限衔接'],
['带走一个习惯：追问它拿到了什么、做了什么、结果支持什么。','保存概念地图、分类理由和一条缺失信息。下一节：当前项目应该允许 Agent 做到哪一步？'],S,20,'小结不引入新概念。初稿与概念地图用于 1.3/1.4 后续练习。',layout='lesson-summary')

lesson={'title':'Agent 执行机制与 AI 协作基础','chapter':'第 1 章 · Prompt','section':'01.02','summary':'复盘 1.1 欢迎语任务；六段主线，先证据后概念，15 分钟编排预算。','segments':[{'label':l,'seconds':sum(s['seconds'] for s in scenes if s['segment']==l)} for l in ['执行循环','信息与术语','判断信息','失败与纠正','课程路线','路标与收尾']],'scenes':scenes}
assert sum(s['seconds'] for s in scenes)==900
(ROOT/'lesson.js').write_text('window.lesson = '+json.dumps(lesson,ensure_ascii=False,indent=2)+';\n')
lines=['# 1.2 Agent 执行机制与 AI 协作基础','','> 从 tools/build-lesson.py 生成；15 分钟为编排预算，操作、课堂试讲与教学效果未验证。教学示意不作实操证据。','']
for s in scenes:
    lines += [f'## {s["id"].upper()} {s["label"]}','',f'[对应课件](index.html#{s["id"]}) · {s["seconds"]} 秒预算','']
    for i,(step,script) in enumerate(zip(s['steps'],s['script'])):
        lines += [f'### 第 {i+1} 步 · {step}','',script,'']
    lines += ['### 教学边界','',s['teaching'][1]['text'],'']
(ROOT/'script.md').write_text('\n'.join(lines))
print(f'Built {len(scenes)} scenes, {sum(len(s["steps"]) for s in scenes)} states, 900 seconds.')
