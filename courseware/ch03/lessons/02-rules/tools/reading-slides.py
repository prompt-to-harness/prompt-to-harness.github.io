"""3.2.2–3.2.3 的知识页，口播复用唯一源。"""
from html import escape
import importlib.util
from pathlib import Path

IDS = ['p07i', 'p07j', 'p07j1', 'p07t1', 'p07t2', 'p07t3', 'p07o', 'p07p', 'p07m', 'p07l', 'p07q', 'p324c', 'p324a', 'p324b']


def build(scripts, reading):
    materials = reading['materials']
    groups = {unit['section']: unit['group'] for unit in reading['units']}
    group_by_source = {source: groups[number.rsplit('.', 1)[0]]
                       for number, sources in reading['placements'].items() for source in sources}
    OFFICIAL = materials['official']['url']
    PLAY = materials['playtest']['url']
    SPEC = materials['bodySpec']['url']
    spec = importlib.util.spec_from_file_location('reading_visual_base', Path(__file__).with_name('skill-visuals.py'))
    v = importlib.util.module_from_spec(spec); spec.loader.exec_module(v)
    t, lines, rect, group, path = v.txt, v.lines, v.rect, v.group, v.path
    scenes = []
    def link(label, url):
        return f'<a target="_blank" rel="noopener" href="{escape(url,quote=True)}">{escape(label)} ↗</a>'
    def add(id, title, lead, body, steps, source, spans, links, more=()):
        paragraphs = [p for step in scripts[source] for p in step.split('\n\n') if not p.startswith('【')]
        html=v.svg(id,body,370,title)+'<div class="reading-actions">'+''.join(link(*item) for item in links)
        if more:
            html+='<details class="reading-menu"><summary>原文定位与案例</summary><nav>'+''.join(link(*item) for item in more)+'</nav></details>'
        html+='</div>'
        narration=['\n\n'.join(paragraphs[i] for i in indices) for indices in spans]
        assert all(narration), id
        scenes.append(dict(id=id,segment=group_by_source[source],title=title,label=title,lead=lead,
            layout='selection-slide reading-slide', html=html,steps=steps,script=narration,
            source='index.html#'+id,seconds=35*len(steps)))

    # 同一份文件分成文件头和正文；正文只示意 Markdown 形式，不提前列出具体栏目。
    body=v.paper(0,4,648,354,'#6e6043')+t(28,38,'SKILL.md',24,kind='sv-code')+t(196,38,'同一份文件',20,color='#6e6043')
    body+=rect(24,54,600,112,'#f2ede1','none',6,rough=False)+t(40,82,'文件头',20,color='#6e6043')
    body+=t(40,114,'name: game-playtest',20,kind='sv-code')
    body+=t(40,146,'description: 浏览器游戏试玩与前端检查',20,kind='sv-code')+t(604,146,'概括',18,color='#6e6043',anchor='end')
    body+=rect(24,178,600,164,'#e0f3ef','none',6,rough=False)+t(40,206,'下面是正文',22,color='#0b6b5f',weight=700)
    body+=t(40,238,'## 标题',20,kind='sv-code')+t(196,238,'按任务命名',20,color='#6e6043')
    body+=t(40,268,'- 列表',20,kind='sv-code')+t(196,268,'要点、条件、检查项',20,color='#6e6043')
    body+=t(40,298,'``` 代码',20,kind='sv-code')+t(196,298,'命令或配置片段',20,color='#6e6043')
    body+=path('M40 312 H604','#0b6b5f',1)+t(40,332,'内容块不是固定栏目',19,color='#6e6043')
    body+=path('M652 110 H710',color='#6e6043',width=2.5,arrow=True)
    body+=rect(722,54,430,112,'#f2ede1','#6e6043',8)+t(746,98,'识别与选用',29,kind='sv-hand')+t(746,136,'这份指导适合当前任务吗？',20,color='#6e6043')
    body+=path('M652 260 H710',color='#0b6b5f',width=2.5,arrow=True)
    body+=rect(722,196,430,126,'#e0f3ef','#0b6b5f',8)+t(746,244,'选用后的详细指导',28,color='#0b6b5f',kind='sv-hand')+t(746,284,'怎样做、看什么、交出什么',20)
    add('p07i','从“是否选用”读到“具体怎样工作”','文件头的名称与描述帮助识别和选用，Markdown 正文用标题、列表和代码块交代具体工作方法。图内为结构示意，description 的中文是概括；正文写哪些内容、用什么标题，按任务组织。',body,
        ['文件头与正文的职责'],'r322-1',[[0,1]],[('下一页：认识官方示例','index.html?mode=slides&part=2&step=0#p07j')])

    # 用途先给出可指认的关系；浏览器框只说明交付结构，不画成真实截图，也不预告技术栈。
    body=t(0,34,'界面实验／问题复现',26,weight=700)+path('M292 26 H348',width=2.5,arrow=True)+t(364,34,'搭建最小 React 演示应用',26,color='#0b6b5f',weight=700)
    body+=rect(148,58,872,250,'#fffdf7','#8e95a2',12,rough=False)+rect(148,58,872,40,'#f4f2eb','none',12,rough=False)
    for x in [172,196,220]: body+=f'<circle class="sv-clean" cx="{x}" cy="78" r="6" fill="#8e95a2"/>'
    body+=t(584,84,'交付结构示意',20,color='#6e6043',anchor='middle')
    body+=rect(172,114,824,56,'#e0f3ef','#0b6b5f',6,rough=False)+t(584,150,'Header · 标题区',24,color='#0b6b5f',anchor='middle',weight=700)
    body+=rect(172,186,396,102,'#f2ede1','#6e6043')+t(370,224,'Card · 卡片',22,anchor='middle',weight=700)+rect(212,242,316,12,'#dfd8c6','none',4,rough=False)+rect(248,262,244,10,'#dfd8c6','none',4,rough=False)
    body+=rect(600,186,396,102,'#f2ede1','#6e6043')+t(798,224,'Card · 卡片',22,anchor='middle',weight=700)+rect(640,242,316,12,'#dfd8c6','none',4,rough=False)+rect(676,262,244,10,'#dfd8c6','none',4,rough=False)
    body+=rect(0,322,1152,38,'#f2ede1','none',6,rough=False)+t(24,348,'setup-demo-app：把这项工作的要求与做法交给 AI',21)
    # game-playtest 的定位入口放到小结页：讲完小结才切到试玩原文，入口就近。
    play_more=[('game-playtest：全貌',PLAY),('Overview：工作视角',materials['overview']['url']),('Preferred Workflow：步骤',materials['workflow']['url']),('Tooling Guidance：条件',materials['tooling']['url']),('Common Checks：检查点',materials['common']['url']),('Reporting：输出要求',materials['reporting']['url']),('References：资料入口',materials['references']['url']),('第一节朝向检查证据',materials['faceEvidence']['url']),('补充案例：步数刷新',materials['countEvidence']['url'])]
    add('p07j','setup-demo-app 用来搭建什么','这份官方示例为界面实验或问题复现搭建简单 React 网页，包含标题区和两张卡片。画面为交付结构示意，后续在真实原文中阅读技术、目录、步骤和完成标准。',body,
        ['用途与交付对象'],'r322-1',[[2]],[('打开 setup-demo-app 原文',OFFICIAL),('示例读完，返回任务小结','index.html?mode=slides&part=2&step=0#p07j1')])

    # 主流程与回路分占不同通道：上方修正（严格留在 viewBox 顶部安全区内），下方提供检查依据；产出使用中性墨色而非 Agent 紫色。
    body=v.paper(0,22,325,264,'#6e6043')+t(22,56,'工作要求',30,color='#6e6043',kind='sv-hand')+t(22,84,'When to use / What to build',19,color='#6e6043',kind='sv-code')
    body+=lines(22,126,['情境：新建演示项目','目标：简单 React 网页','组成：标题区、两张卡片','规范：只用函数组件'],22,36)
    body+=path('M343 116 C378 116 394 88 432 88',width=2.5,arrow=True)+t(387,64,'据此执行',20,anchor='middle')
    body+=rect(450,28,274,116,'#e0f3ef','#0b6b5f')+t(472,64,'执行方法',29,color='#0b6b5f',kind='sv-hand')+t(704,63,'Steps',20,color='#0b6b5f',kind='sv-code',anchor='end')+lines(472,102,['建项目、安装与配置','实现要求的界面'],22,32)
    body+=path('M587 152 V214',width=2.5,arrow=True)
    body+=rect(450,226,274,94,'#fffdf7','#243042')+t(472,262,'产出',29,color='#243042',kind='sv-hand')+t(472,298,'项目文件与运行结果',22)
    body+=path('M736 273 H844',width=2.5,arrow=True)+t(790,256,'核对',20,anchor='middle')
    body+=rect(858,226,294,94,'#e3f2e6','#15803d')+path('M882 254 L892 264 L910 244',color='#15803d',width=3)+t(926,264,'自检',30,color='#15803d',kind='sv-hand')+t(882,298,'文件、启动、其他要求',21)+t(1134,262,'DoD',19,color='#15803d',kind='sv-code',anchor='end')
    body+=path('M1005 216 C1038 88 852 12 738 72',color='#ac3615',width=2.5,arrow=True)+lines(800,138,['不符合要求','继续修正'],22,32,color='#ac3615')
    body+=path('M162 296 V344 Q162 356 180 356 H988 Q1005 356 1005 340 V328',color='#6e6043',width=2,dashed=True,arrow=True)
    body+=rect(522,338,124,28,'#f4f2eb','none',rough=False)+t(584,358,'判断依据',20,color='#6e6043',anchor='middle')
    add('p07j1','把执行、自检与修正接起来','正文可以把工作要求、执行方法和检查连接起来。完成标准和前面的明确要求共同作为自检依据；发现不符合后继续修正。图为工作关系示意，未表示官方示例曾实际运行。具体内容仍按任务取舍。',body,
        ['要求、执行、产出与自检的关系'],'r322-2',[[4,5,6]],[('继续：早期 05 翻牌游戏',materials['old5']['url']),('回看官方示例',OFFICIAL)],play_more)

    # 作用、已读例子和原文位置对齐；例子缩短后，原文标题可以保持代码字号。
    body=t(16,28,'正文里的作用',22,color='#6e6043')+t(188,28,'已读到的例子',22)+t(776,28,'原文位置',20,color='#6e6043')
    rows=[('工作说明','从玩家实际体验出发','试玩','Overview'),
          ('具体要求','只用函数组件','建项','What to build'),
          ('步骤','建项目 → 配置 → 实现界面','建项','Steps'),
          ('条件','canvas / WebGL → 查看截图','试玩','Tooling Guidance'),
          ('检查点','操作反馈、可见状态、不同视口','试玩','Common Checks'),
          ('输出要求','现象、复现、影响、可能涉及的部分','试玩','Reporting Standard'),
          ('补充资料','正文给入口，详细资料另存','试玩','References')]
    for i,(role,example,file,heading) in enumerate(rows):
        y=44+i*44
        body+=rect(0,y,1152,40,'#fffdf7' if i%2==0 else '#f4f2eb','none',0,rough=False)
        body+=t(16,y+27,role,22,weight=700)+t(188,y+27,example,22)
        body+=rect(696,y+6,64,28,'#f2ede1','none',4,rough=False)
        body+=t(728,y+26,file,20,color='#6e6043',anchor='middle')+t(776,y+27,heading,20,color='#6e6043',kind='sv-code')
    add('p07k','按作用读懂正文里的具体指导','说明、要求、步骤、条件、检查点、输出要求与资料入口，分别解决工作中的问题。每项与已读的具体例子对应；按任务取舍，各类内容可以交叉出现。',body,
        ['按作用对应具体指导'],'r322-5',[[0]],[('回看 setup-demo-app',OFFICIAL),('回看 game-playtest',PLAY)])

    # 左右四行对齐。示例是课程示意，不用 Agent 紫色；条件句单独占第三步，不并进报告字段。
    fields=['现象','复现步骤','影响','排查方向']
    filled=['页面步数没有增加','新开一局，翻开两张不配对的牌','玩家看不到已用步数','不配对时步数没有刷新']
    body=t(0,28,'模板',26,color='#0b6b5f')+v.paper(0,44,512,250,'#0b6b5f','#e0f3ef')
    example=t(548,28,'示例 · 课程示意',26,color='#6e6043')+v.paper(548,44,612,250,'#6e6043','#fffdf7')
    for i,name in enumerate(fields):
        y=96+i*48
        body+=t(24,y,name,22,color='#0b6b5f')+path(f'M156 {y-2} H472','#0b6b5f',1.5,dashed=True)
        example+=t(572,y,name,22,color='#6e6043')+t(696,y,filled[i],22)
    body+=group(example,1)
    body+=group(rect(0,312,1152,44,'#f2ede1','#6e6043',6)+t(24,340,'条件',20,color='#6e6043')+t(96,340,'canvas / WebGL',22,kind='sv-code')+t(360,340,'→',24)+t(396,340,'必须查看截图',22,color='#0b6b5f')+t(1132,340,'条件 + 检查要求',20,color='#6e6043',anchor='end'),2)
    add('p07l','模板和示例怎样交代输出要求','模板列出报告要填的四项；填好的示例示范复现步骤、现象、影响与排查方向要具体到可接手的程度。示意不是原文新增段落或新调用结果；一句话也可以同时包含条件和检查要求。',body,
        ['报告的空结构','同一结构填入具体内容','一句指导中的条件与要求'],'r322-5',[[1],[2],[3]],[('报告要求原文',materials['reporting']['url']),('补充案例：步数刷新记录',materials['countEvidence']['url'])])

    # 两份文件的真实二级标题按原文顺序排列；分组写在左侧，避免侧括注压住长标题。
    body=t(0,40,'标题结构 · 原文顺序',22,color='#6e6043')+t(1144,40,'没有统一模板',24,kind='sv-hand',anchor='end')
    def column(x,width,name,heads,groups):
        out=rect(x,54,width,300,'#fffdf7','#c8c3b6',8,rough=False)+rect(x,54,width,40,'#e0f3ef','none',8,rough=False)+t(x+16,80,name,22,color='#0b6b5f',kind='sv-code')
        for first,last,label in groups:
            y,h=102+first*34,(last-first+1)*34-6
            out+=rect(x+8,y,width-16,h,'#f2ede1','none',4,rough=False)+t(x+16,y+h/2+7,label,20,color='#6e6043')
        for i,heading in enumerate(heads):
            out+=t(x+188,124+i*34,heading,20,kind='sv-code')
        return out
    body+=column(0,496,'setup-demo-app',['When to use this','What to build','Steps','Definition of done'],
        [(0,0,'适用场景'),(1,1,'交付物'),(2,3,'步骤与完成')])
    body+=column(516,636,'game-playtest',['Overview','Preferred Workflow','Tooling Guidance','Common Checks','Responsive and Browser Checks','Reporting Standard','References'],
        [(0,1,'体验与试玩路线'),(2,4,'检查手段与要点'),(5,5,'报告要求'),(6,6,'资料入口')])
    body+=t(1132,226,'其下另有 2D、3D',20,color='#6e6043',anchor='end')
    add('p07m','工作不同，需要交代的内容也不同','并列两份 Skill 正文的二级标题（原文顺序）。左侧色带标出各组交代的内容；game-playtest 的 Common Checks 下另有 2D、3D 小节，不另计为二级标题。建项目围绕交付物和步骤，试玩指导还交代检查手段、关注点和报告要求。标题与顺序服务于任务，不是统一模板。',body,
        ['两份文件的标题结构'],'r322-6',[[0]],[('建项示例原文',OFFICIAL),('试玩指导原文',PLAY)])

    # 卡片顶避开讲师框（正文从 y 238 起，框底在画布 y 249）。删除线跟口号走，不单独留在旧坐标。
    card_y,card_h=28,188
    cards=[(0,'#0b6b5f','#e0f3ef','具体有用','保留',['canvas / WebGL 时查看截图','报告写明现象、复现、影响'],False),
           (388,'#ac3615','#fce6dd','避免重复','精简',['认真检查，保证质量'],True),
           (776,'#6e6043','#f2ede1','详细资料按需引用','正文留条件和入口',['完整检查清单','专项调试知识'],False)]
    body=''
    for x,color,fill,title,action,examples,strike in cards:
        body+=rect(x,card_y,360,card_h,fill,color)+t(x+24,card_y+36,title,24,color)+t(x+24,card_y+72,action,22)
        for i,line in enumerate(examples):
            body+=t(x+24,card_y+116+i*36,line,20)
        if strike:
            sy=card_y+116
            body+=path(f'M{x+20} {sy-14} L{x+236} {sy+4}',color,2.5)
            body+=t(x+24,sy+36,'没有检查对象和做法',20,color)
    body+=t(0,264,'500 行：篇幅建议',26)+t(292,264,'不是失效界限',22,color='#6e6043')
    body+=t(0,304,'未改上游 Skill',20,color='#6e6043')
    add('p07n','按作用取舍内容，控制正文篇幅','具体要求、条件和检查点有用就保留。重复口号没有检查对象和做法，画面上划去。大量专项资料按需引用，正文保留条件与入口。500 行以内是篇幅建议，不是失效界限。这里用前文读过的要求作取舍示意，没有修改上游 Skill。',body,
        ['具体内容的保留、精简与引用'],'r322-6',[[1,2]],[('正文与篇幅建议',SPEC)])
    spec = importlib.util.spec_from_file_location('resources_slides', Path(__file__).with_name('resources-slides.py'))
    resources = importlib.util.module_from_spec(spec); spec.loader.exec_module(resources)
    resources.apply(scenes, scripts, reading)
    spec = importlib.util.spec_from_file_location('task_slides', Path(__file__).with_name('task-slides.py'))
    tasks = importlib.util.module_from_spec(spec); spec.loader.exec_module(tasks)
    tasks.apply(scenes, scripts, reading)
    spec = importlib.util.spec_from_file_location('plugin_slides', Path(__file__).with_name('plugin-slides.py'))
    plugins = importlib.util.module_from_spec(spec); spec.loader.exec_module(plugins)
    plugins.apply(scenes, scripts, reading)
    # 旧页保留深链；正式页序按当前讲述线排列。
    return sorted(scenes, key=lambda scene: IDS.index(scene['id']) if scene['id'] in IDS else len(IDS))
