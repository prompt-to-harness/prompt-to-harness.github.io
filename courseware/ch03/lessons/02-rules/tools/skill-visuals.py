"""3.2 可编辑知识图；用对象、原话、对应与分步变化解释既定讲述。"""
from html import escape as e
import re

INK='#243042'; TOOL='#0b6b5f'; CONTEXT='#6e6043'; AGENT='#5a51d1'; GATE='#ac3615'; OK='#15803d'


def txt(x,y,text,size=24,color=INK,anchor='start',kind='',weight=400,cls=''):
    c = ' '.join(x for x in (kind, cls) if x)
    return f'<text x="{x}" y="{y}" fill="{color}" font-size="{size}" text-anchor="{anchor}" font-weight="{weight}" class="{c}">{e(text)}</text>'


def lines(x,y,items,size=24,leading=36,color=INK,kind=''):
    return ''.join(txt(x,y+i*leading,t,size,color,kind=kind) for i,t in enumerate(items))


def path(d,color=INK,width=2,dashed=False,arrow=False):
    return f'<path class="'+('sv-sketch' if width > 1.5 else 'sv-clean')+f'" d="{d}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"'+(' stroke-dasharray="7 6"' if dashed else '')+(' marker-end="url(#sv-arrow)"' if arrow else '')+'/>'


def rect(x,y,w,h,fill='#fffdf7',stroke=INK,r=7,dashed=False,rough=True):
    return f'<rect class="'+('sv-sketch' if rough and stroke != 'none' else 'sv-clean')+f'" x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="2"'+(' stroke-dasharray="7 6"' if dashed else '')+'/>'


def group(content,step=None,cls=''):
    return '<g'+(f' data-reveal="{step}"' if step is not None else '')+(f' class="{cls}"' if cls else '')+'>'+content+'</g>'


def paper(x,y,w,h,color=CONTEXT,fill='#fffdf7'):
    return f'<path class="sv-sketch" d="M{x+2} {y} L{x+w-28} {y} L{x+w} {y+28} L{x+w} {y+h} L{x} {y+h} Z M{x+w-28} {y} V{y+28} H{x+w}" fill="{fill}" stroke="{color}" stroke-width="2" stroke-linejoin="round"/>'


def person(x,y,scale=1,color=INK):
    # 人与 AI 用可识别轮廓区分，保留原有占位与角色色。
    if color == AGENT:
        body=f'<path d="M32 5 V14 M27 5 H37" fill="none" stroke="{color}" stroke-width="3"/><rect x="6" y="17" width="52" height="47" rx="13" fill="#edebfb" stroke="{color}" stroke-width="3"/><circle cx="23" cy="39" r="4" fill="{color}"/><circle cx="42" cy="39" r="4" fill="{color}"/><path d="M23 53 H42 M0 31 V47 M64 31 V47" stroke="{color}" stroke-width="3"/><path d="M4 113 V88 Q4 73 20 73 H44 Q60 73 60 88 V113 Z" fill="{color}"/><rect x="23" y="87" width="18" height="10" rx="3" fill="#edebfb"/>'
    else:
        body=f'<path d="M4 116 V93 Q4 70 32 70 Q60 70 60 93 V116 Z" fill="{color}"/><path d="M24 72 L32 91 L41 72" fill="#fffdf7"/><ellipse cx="32" cy="36" rx="22" ry="27" fill="#fffdf7" stroke="{color}" stroke-width="3"/><path d="M10 32 Q8 4 34 7 Q56 8 55 30 Q40 31 28 17 Q20 30 10 32" fill="{color}"/><circle cx="25" cy="38" r="1.6" fill="{color}"/><circle cx="41" cy="38" r="1.6" fill="{color}"/><path d="M26 51 Q32 56 39 50" fill="none" stroke="{color}" stroke-width="2"/>'
    return f'<g transform="translate({x} {y}) scale({scale})">{body}</g>'


def bubble(x,y,w,h,content,stroke=INK,fill='#fffdf7'):
    return f'<path class="sv-sketch" d="M{x+12} {y} H{x+w-12} Q{x+w} {y} {x+w} {y+12} V{y+h-12} Q{x+w} {y+h} {x+w-12} {y+h} H{x+56} L{x+28} {y+h+25} L{x+34} {y+h} H{x+12} Q{x} {y+h} {x} {y+h-12} V{y+12} Q{x} {y} {x+12} {y}" fill="{fill}" stroke="{stroke}" stroke-width="2.5"/>'+content


def svg(id,body,height=370,label=''):
    # 沿用 shared/parts/parts.js 的手绘参数；局部 userSpaceOnUse 避免直线零高度被裁切。
    # 只给图形加滤镜，文字和代码保持工整；ID 逐图唯一。
    content=f'<svg class="skill-visual" style="--sv-rough:url(#{id}-rough)" viewBox="0 0 1168 {height}" role="img" aria-label="{e(label or id,quote=True)}"><defs><filter id="{id}-rough" filterUnits="userSpaceOnUse" x="-20" y="-20" width="1208" height="{height+40}"><feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter><marker id="sv-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0 0 L8 4 L0 8 Z" fill="context-stroke"/></marker></defs>'+body+'</svg>'
    return content.replace('sv-arrow',id+'-arrow')


def build(prompt):
    scenes={}
    # 2026-11-13：讲师确认采用对照页的六页修改版。
    T=txt; L=lines; R=rect; P=path; G=group; I=INK; C=CONTEXT; A=AGENT; WARN=GATE
    def file_icon(x,y,w=30,h=38,color=C):
        fold=9
        return f'<path class="sv-sketch" d="M{x} {y} H{x+w-fold} L{x+w} {y+fold} V{y+h} H{x} Z M{x+w-fold} {y} V{y+fold} H{x+w}" fill="#fffdf7" stroke="{color}" stroke-width="2"/>'+P(f'M{x+6} {y+18} H{x+w-6} M{x+6} {y+25} H{x+w-6}',color,1)

    # Keep the concise copy; restore the speaker, speech bubble and reusable document.
    b=T(164,54,'同类检查，反复交代',28,kind='sv-hand')+person(44,120,.95)
    b+=bubble(164,82,424,152,L(192,137,['计步怎么算？','重开要检查什么？'],28,52))
    b+=G(P('M610 158 H676',C,2.5,arrow=True)+paper(700,82,426,152,C,'#f2ede1')
         +T(728,124,'Skill',32,kind='sv-hand')+T(728,171,'保存检查方法与要求',28,kind='sv-hand')
         +P('M914 246 V280',A,2.5,arrow=True)+T(914,316,'同类任务，AI 按需选用',27,A,anchor='middle',kind='sv-hand'),1)
    b+=T(24,382,'风格指导初稿 → 学习调用与组织 → 回看并修改',26,C)
    scenes['p07']=svg('review-p07',b,414,'每次重新交代的检查方法，保存为 Skill 后供 AI 在同类任务中按需选用')
    # Folder boundary = Plugin; small papers = Skills; selection opens that same document.
    b=f'<path class="sv-sketch" d="M24 48 V20 H174 L202 48 H458 V318 H24 Z" fill="#f2ede1" stroke="{C}" stroke-width="2"/>'
    b+=T(46,88,'Game Studio Plugin',29,kind='sv-hand')
    b+=file_icon(46,108,32,34,C)+T(100,132,'game-studio',22,kind='sv-code')
    b+=R(42,147,398,64,'#fff1bf',I)+file_icon(58,158,28,36,I)
    b+=T(100,171,'game-playtest',24,kind='sv-code')+T(100,204,'试玩检查 · 本次选用',20,C)
    b+=file_icon(46,228,32,34,C)+T(100,253,'phaser-2d-game',22,kind='sv-code')
    b+=T(46,292,'… 其他 Skill 与配套资料',21,C)
    b+=P('M472 180 H562',C,2.5,arrow=True)+T(517,156,'展开',20,C,anchor='middle')
    b+=paper(582,48,550,270,C)+T(608,86,'SKILL.md',26,kind='sv-code')
    b+=R(604,104,504,140,'#f2ede1','none',rough=False)
    b+=G(T(620,132,'name: game-playtest',22,kind='sv-code')+T(620,168,'description:',22,kind='sv-code')
         +L(640,200,['Run browser-game playtests','and frontend QA. …'],22,32,kind='sv-code'),1)
    b+=R(604,262,504,42,'none',C,dashed=True)+T(620,292,'正文',25,kind='sv-hand')+T(704,292,'具体做法',22,C)
    scenes['p07a']=svg('review-p07a',b,338,'Game Studio 中选出 game-playtest，再查看文件头的名称和适用描述')
    # Numbered stages and connecting arrows restore the installation route without extra copy.
    def badge(x,y,n,color):
     return f'<circle cx="{x}" cy="{y}" r="17" fill="#fffdf7" stroke="{color}" stroke-width="2"/>'+T(x,y+7,str(n),21,color,anchor='middle')
    b=R(24,22,326,264,'#fffdf7',C)+badge(60,60,1,C)+T(92,69,'取得文件',28,C,kind='sv-hand')
    b+=T(46,120,'核对来源与版本',24)+T(46,162,'保留引用资料及相对位置',22,C)
    b+=G(P('M360 150 H388',I,2.5,arrow=True)+R(400,22,352,264,'#fffdf7',TOOL)
         +badge(436,60,2,TOOL)+T(468,69,'放入项目',28,TOOL,kind='sv-hand')
         +R(422,94,308,58,'#e0f3ef',TOOL)+T(438,132,'.agents/skills/',25,TOOL,kind='sv-code')
         +T(424,204,'个人跨项目使用时',20,C)+T(424,245,'~/.agents/skills/',21,C,kind='sv-code'),1)
    b+=G(P('M764 150 H790',I,2.5,arrow=True)+R(802,22,338,264,'#fffdf7',I)
         +badge(838,60,3,I)+T(870,69,'确认发现',28,kind='sv-hand')
         +T(824,120,'项目内启动 Codex',23)
         +R(824,140,144,44,'#e0f3ef',TOOL)+T(840,171,'/skills',26,TOOL,kind='sv-code')
         +T(824,223,'找到 Game Playtest',22)+T(824,257,'核对当前项目来源',21,C),2)
    scenes['p07install']=svg('review-install',b,306,'取得完整文件，放到项目目录，再在 Codex 中确认能发现当前项目的 Skill')
    # Keep the terminal selection route, then combine the selected reference with task details.
    b=T(24,24,'终端选择入口',21,C)
    for i,(x,w,label) in enumerate([(24,148,'/skills'),(220,196,'List skills'),(468,228,'Game Playtest')]):
     b+=R(x,36,w,46,'#e0f3ef',TOOL)+T(x+w/2,66,label,22,TOOL,anchor='middle',kind='sv-code')
     if i<2: b+=P(f'M{x+w+8} 59 H{[212,460][i]}',I,2.5,arrow=True)
    b+=R(24,100,1116,212,'#fffdf7',I)
    b+=R(44,112,278,38,'#e0f3ef',TOOL)+T(60,140,'$game-playtest',26,TOOL,kind='sv-code')
    b+=T(342,139,'＋  本次任务',26,kind='sv-hand')
    b+=P('M48 158 H1112','#c8c3b6',1)
    b+=T(48,188,'任务',22,C)+T(138,188,'为记忆翻牌整理人工试玩清单',26)
    b+=R(40,200,1084,68,'#f2ede1','none',rough=False)+T(48,225,'规则',22,C)+T(138,221,'每翻两张算一步',24)
    b+=T(138,257,'重开：牌面关闭，配对进度与步数归零',24)
    b+=T(48,298,'范围',22,C)+T(138,298,'只给清单，不改代码、不启动浏览器',24)
    b+=R(24,332,1116,42,'#f2ede1','none',rough=False)+T(44,362,'返回后，用这些规则核对清单',27,kind='sv-hand')
    scenes['p07b']=svg('review-call',b,374,'终端依次选择 /skills、List skills、Game Playtest；选中的引用与本次任务、规则和范围共同组成请求')
    # Semantic alignment is separate from observed file reading; use correspondence lines rather than trigger arrows.
    b=R(8,24,532,208,'#fffdf7',I)+T(24,61,'本次请求',27,kind='sv-hand')+T(182,61,'未指定 Skill',20,C)
    b+=T(24,114,'为浏览器翻牌游戏',27)+T(24,160,'整理人工试玩清单',27)
    b+=T(24,204,'具体规则：计步与重开',22,C)
    match=R(660,24,480,208,'#f2ede1',C)+T(682,61,'game-playtest',22,kind='sv-code')
    match+=T(682,114,'Run browser-game',23,kind='sv-code')+T(682,160,'playtests and frontend QA. …',22,kind='sv-code')
    match+=P('M24 124 H264',C,2.5)+P('M682 124 H942',C,2.5)
    match+=P('M24 170 H264',TOOL,2.5)+P('M682 170 H1030',TOOL,2.5)
    match+=P('M552 112 H646',C,1.5,dashed=True)+P('M552 158 H646',TOOL,1.5,dashed=True)
    match+=T(682,204,'描述节选；语义对应不保证触发',21,C)
    b+=G(match,1)
    fact=R(8,252,1132,92,'#e0f3ef',TOOL,rough=False)+T(24,290,'本次读取证据',27,TOOL,kind='sv-hand')
    fact+=T(286,290,'cat …/game-playtest/SKILL.md',23,TOOL,kind='sv-code')+T(286,328,'退出 0，工具返回文件正文',22)
    b+=G(fact,2)
    scenes['p07c']=svg('review-match',b,344,'请求与可用描述同屏对应，下面独立展示读取命令与文件返回事实')
    # Two connected tasks: express the scope, then check both sides of the boundary.
    b=T(24,30,'“帮助开发游戏”',24,C)+T(252,30,'范围太宽',21,WARN)
    b+=R(24,58,1116,186,'#fffdf7',C)+T(48,84,'description · 课程改写',22,kind='sv-code')
    b+=R(40,104,1084,38,'#f2ede1','none',rough=False)+T(48,132,'任务',22,C)+T(132,132,'浏览器游戏试玩与前端质量检查',25)
    b+=G(R(40,150,1084,38,'#f2ede1','none',rough=False)+T(48,178,'情境',22,C)+T(132,178,'人工试玩清单、烟雾测试、界面检查',25)
         +R(40,196,1084,38,'#fce6dd','none',rough=False)+T(48,224,'排除',22,WARN)+T(132,224,'仅润色按钮文案，不涉及游戏检查',25),1)
    review=T(24,304,'用两类请求复核',27,kind='sv-hand')
    review+=T(280,304,'先确认新会话载入新版',21,C)
    review+=R(24,326,536,62,'#e3f2e6',OK)+T(40,365,'整理试玩清单',25)+P('M224 356 H270',OK,2,arrow=True)+T(290,365,'应选用',25,OK,kind='sv-hand')+T(402,365,'查漏选',21,C)
    review+=R(592,326,548,62,'#fce6dd',WARN)+T(608,365,'只润色按钮文案',25)+P('M810 356 H848',WARN,2,arrow=True)+T(866,365,'不应选用',25,WARN,kind='sv-hand')+T(1008,365,'查误选',21,C)
    b+=G(review,2)
    scenes['p07d']=svg('review-scope',b,402,'描述说明任务、适用情境和排除范围，再用应选用与不应选用的请求复核')

    # p07e：从正文实际移出长例子，仍用条件与路径连回原入口。
    body=paper(280,4,480,321,CONTEXT)+txt(309,45,'SKILL.md',29,kind='sv-code')+path('M310 61 H728',CONTEXT,1)
    body+=rect(304,80,431,99,'#e0f3ef',TOOL,5)+lines(319,114,['输入不足时，先询问规则','每项检查：状态、操作、可见结果'],22,37)
    body+=txt(0,112,'每次都需要',27,TOOL,kind='sv-hand')+path('M170 105 H260',TOOL,2,arrow=True)+txt(0,151,'会改变下一步行动',21,TOOL)
    moving=group(rect(305,199,244,43,'#f2ede1',CONTEXT,3)+txt(319,228,'较长的翻牌例子',24,CONTEXT),cls='sv-moving-example')
    body+=group(paper(868,4,284,185,CONTEXT)+txt(889,43,'Reference',25,CONTEXT,kind='sv-code')+txt(889,91,'只在特定情境读',22,CONTEXT)+path('M774 221 H828 V112 H856',CONTEXT,2,arrow=True)+txt(307,228,'遇到翻牌任务时，读取指定资料',21,TOOL)+path('M323 267 H690',GATE,2)+txt(320,277,'认真检查，保证质量',21,CONTEXT)+txt(884,288,'删除重复口号',22,GATE)+path('M737 268 H854',GATE,2,arrow=True),1)
    body+=moving
    body+=group(txt(0,361,'长度由任务需要决定；输入分支等关键条件始终保留',26,weight=700),2)
    scenes['p07e']=svg('p07e',body,label='正文保留输入输出指导，长例子移至 Reference 并保留读取入口，删除重复口号')

    # p07f：同一共享对象与独立任务的输入输出，沿同一维度比较。
    body=txt(0,32,'共享知识',29,kind='sv-hand')
    body+=paper(183,1,286,68,CONTEXT)+txt(201,44,'game-studio',23,kind='sv-code')+paper(183,91,286,68,CONTEXT)+txt(201,134,'web-game-foundations',20,kind='sv-code')
    body+=path('M481 35 H543 V80 H641',CONTEXT,2.5,arrow=True)+path('M481 125 H543 V80',CONTEXT,2.5)
    body+=paper(659,1,495,155,CONTEXT,'#f2ede1')+txt(680,45,'engine-selection.md',27,CONTEXT,kind='sv-code')+txt(680,88,'同一份选型依据',25)+txt(680,127,'更新时，只维护这一个文件',22,CONTEXT)
    body+=path('M0 184 H1160',CONTEXT,1)+txt(0,225,'独立工作',29,kind='sv-hand')
    body+=lines(183,224,['当前游戏与需求','需要做界面设计'],22,33)+path('M401 235 H477',INK,2,arrow=True)+paper(495,201,320,96,AGENT,'#edebfb')+txt(516,240,'game-ui-frontend',24,AGENT,kind='sv-code')+txt(516,278,'一项完整工作的指导',22,AGENT)+path('M831 248 H904',INK,2,arrow=True)+lines(930,233,['布局、交互','与检查标准'],22,32)
    body+=group(txt(0,350,'配套脚本',23,TOOL,weight=700)+txt(126,350,'重复计算、确定的文件处理',22)+txt(650,350,'素材',23,CONTEXT,weight=700)+txt(720,350,'模板、待处理图片',22),1)
    scenes['p07f']=svg('p07f',body,label='两份 Skill 共用一个选型文件；独立界面工作有自己的输入、方法和交付要求')+'<p class="sv-boundary" data-reveal="2">手动检查计划先从一个 SKILL.md 开始，有具体需要再增加资源</p>'

    # p07g：问题保留，答案通过文件与引用关系出现，不用段落替代判断。
    body=txt(0,30,'翻牌例子变长了，怎样安排？',28,kind='sv-hand')+txt(615,30,'另一份 Skill 也要用同一标准？',28,kind='sv-hand')+path('M580 0 V351',CONTEXT,1)
    body+=paper(0,74,221,200,CONTEXT)+txt(20,112,'SKILL.md',24,kind='sv-code')+lines(20,153,['输入分支','通用检查方法'],22,38)+group(txt(20,229,'越来越长的例子…',22),cls='sv-question-example')+group(txt(20,229,'翻牌时读取资料',20,TOOL),1)
    body+=group(path('M236 197 H292',CONTEXT,2,arrow=True)+paper(308,132,236,144,CONTEXT,'#f2ede1')+lines(326,171,['Reference','翻牌的长例子'],23,37)+txt(0,318,'正文留下条件和路径',23,TOOL)+txt(0,352,'拟写 references/memory-cases.md',19,CONTEXT,kind='sv-code'),1)
    body+=paper(616,74,210,72,CONTEXT)+txt(635,119,'Skill A',26,kind='sv-code')+paper(616,210,210,72,CONTEXT)+txt(635,255,'Skill B',26,kind='sv-code')
    body+=group(path('M841 110 H873 V179 H908',CONTEXT,2,arrow=True)+path('M841 245 H873 V179',CONTEXT,2)+paper(926,114,226,142,CONTEXT,'#f2ede1')+lines(945,158,['同一份标准','维护一处'],24,42)+txt(616,318,'各自引用，避免复制后分别修改',22,TOOL)+txt(616,352,'独立工作才另写 Skill',22,CONTEXT),2)
    scenes['p07g']=svg('p07g',body,label='长例子放入按需资料并保留引用；两个 Skill 共用一份标准，拟写路径未创建')

    # p07h：回到真实文件与本轮采用的检验输入，结果是计划，不是已执行检查。
    body=paper(0,0,535,227,CONTEXT)+txt(26,43,'game-studio · 一处输出要求修改',25,kind='sv-hand')+txt(26,83,'Output Expectations',22,CONTEXT,kind='sv-code')
    body+=txt(26,125,'+ 前置状态',25,TOOL)+txt(196,125,'用户操作',25,TOOL)+txt(350,125,'可见结果',25,TOOL)+path('M26 146 H506',TOOL,2)+lines(26,183,['同一个请求，核对新版读取与返回','新增要求采用了，方案内容仍需审阅'],21,31)
    body+=paper(596,0,560,227,TOOL,'#e0f3ef')+txt(621,43,'game-check-plan / SKILL.md',25,TOOL,kind='sv-code')+txt(621,84,'从零写出的最小文件',25,kind='sv-hand')
    body+=lines(621,125,['完整规则：生成计划','缺少规则：只提问','换成躲避：按本次玩法写'],23,35)
    body+=txt(0,274,'两项产物都已调用核对；计划中的游戏检查尚未执行',24,CONTEXT)
    body+=group(path('M0 311 H1160',INK,2)+txt(0,353,'下一节',27,kind='sv-hand')+txt(155,353,'用指导开发躲避游戏',31)+path('M496 343 H577',INK,2,arrow=True)+txt(609,353,'方案怎样落实为代码与检查？',27),1)
    scenes['p07h']=svg('p07h',body,label='已有输出要求修改与自写单文件，两项产物的实际调用核对及下一节开发任务')
    return scenes


def apply(data,prompt):
    visuals=build(prompt)
    for scene in data['scenes']:
        if scene['id'] not in visuals:continue
        # 操作入口沿原源文件维护；只替换学员主画面。
        old=scene['html']
        actions=re.search(r'<div class="(?:selection|authoring)-actions">.*?</div>',old,re.S)
        if scene['id'] in {'p07','p07a','p07install','p07b','p07c','p07d'}:
            copy = ('<div class="prompt sv-copy"><span>完整请求</span><button type="button" class="copy-button" data-selection-copy>复制请求</button><pre hidden><code>' + e(prompt) + '</code></pre></div>') if scene['id'] == 'p07b' else ''
            scene['html'] = visuals[scene['id']] + '<div class="selection-operations">' + (actions.group() if actions else '') + copy + '</div>'
        else:
            scene['html']=visuals[scene['id']]+(actions.group() if actions else '')
        scene['layout']+=' skill-visual-slide'
