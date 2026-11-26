"""3.2.2 官方文章解读后的总结；同一张结构图用于组成与渐进披露。"""
from html import escape
from pathlib import Path
import importlib.util

IDS = ['p07o', 'p07m', 'p07os', 'p07p', 'p07ox', 'p07l', 'p07q']


def apply(scenes, scripts, reading):
    spec=importlib.util.spec_from_file_location('resource_visual',Path(__file__).with_name('skill-visuals.py'))
    v=importlib.util.module_from_spec(spec);spec.loader.exec_module(v)
    t,rect,path,group=v.txt,v.rect,v.path,v.group
    material = reading['materials']
    def link(key):
        item = material[key]
        return f'<a target="_blank" rel="noopener" href="{escape(item["url"], quote=True)}">{escape(item["label"])} ↗</a>'
    def actions(keys):
        return '<div class="reading-actions">' + ''.join(link(k) for k in keys) + '</div>'
    def add(id,title,lead,body,steps,keys,svg=False):
        scenes[:] = [s for s in scenes if s['id'] != id]
        scenes.append(dict(id=id,title=title,label=title,segment='认识完整 Skill 的组成与组织',lead=lead,
          layout='reading-slide resource-slide'+(' selection-slide' if svg else ''),
          html=(v.svg(id,body,410,title) if svg else '<div class="resource-board">'+body+'</div>')+actions(keys),
          steps=steps,source='index.html#'+id,seconds=40*len(steps)))

    def skill_map(progressive=False):
        # topology: assets/skill-map/structure.mmd; pretty-mermaid 布局核对后适配 1168×410。
        # 保留两层包含、三条不同取用动作、边界外的专项引用；文字不施加手绘滤镜。
        out=t(0,22,'一份 Skill · 组织示意',24,kind='sv-hand')
        out+=rect(0,34,850,266,'none','#9c8b66',9,dashed=True)
        out+=v.paper(20,66,310,218,'#6e6043')+t(38,94,'SKILL.md',22,kind='sv-code')
        meta=rect(36,106,278,62,'#f2ede1','none',4)+t(50,127,'name / description',20,kind='sv-code')+t(50,158,'识别身份与适用情境',20)
        core=rect(36,181,278,86,'#f2ede1','none',4)+t(50,202,'正文 · 核心工作指导',23,weight=700)+t(50,233,'流程、规则与判断依据',20)+t(50,264,'按需取用的条件和入口',20)
        out+=group(meta,cls='map-meta')+group(core,cls='map-body')
        support=t(480,57,'配套文件 · 按需提供',20,color='#6e6043')
        for y,name,detail,verb,color in [(70,'references/','细则、背景、长示例','查阅','#6e6043'),(148,'scripts/','可执行的处理过程','运行','#0b6b5f'),(226,'assets/','模板、图片、数据','使用','#6e6043')]:
            support+=rect(480,y,350,60,'#fffdf7',color)+t(498,y+20,name,22,color,kind='sv-code')+t(498,y+52,detail,20)
            support+=path(f'M330 224 H365 Q386 224 386 {y+30} H469',color,2,arrow=True)
            support+=rect(398,y+14,60,29,'#f4f2eb','none',rough=False)+t(428,y+36,verb,20,color,anchor='middle')
        out+=group(support,None if progressive else 1,'map-resources')
        external=t(934,142,'边界之外',20,color='#6e6043')+v.paper(930,158,226,112,'#6e6043')+t(948,191,'另一份 Skill',24,kind='sv-hand')+t(948,223,'自己的适用范围',20)+t(948,250,'与专项工作指导',20)
        external+=path('M175 284 V310 Q175 324 194 324 H1024 Q1043 324 1043 305 V278','#6e6043',2,dashed=True,arrow=True)
        external+=rect(512,308,180,30,'#f4f2eb','none',rough=False)+t(602,330,'引用专项指导',21,color='#6e6043',anchor='middle')
        out+=group(external,None if progressive else 2,'map-external')
        if progressive:
            out+=group('',1,'phase-1')+group('',2,'phase-2')
            out+=group(t(0,382,'① 识别与选用：当前任务适合哪份指导？',23),cls='map-note-0')
            out+=group(t(0,382,'② 核心指导 + 本次输入：决定这一次怎样做',23),1,'map-note-1')
            out+=group(t(0,382,'③ 按任务展开细节 · 渐进披露',23)+t(1150,382,'正文建议控制在 500 行以内',19,color='#6e6043',anchor='end'),2,'map-note-2')
        else:out+=t(0,382,'入口与核心方法先清楚，细节、程序与材料按需配套',23)
        return out

    # 同一完整结构图作锚点：所有节点始终可见，只改变讲解焦点。
    def anchor_map(note):
        return (skill_map().replace(' data-reveal="1"', '').replace(' data-reveal="2"', '')
                .replace('入口与核心方法先清楚，细节、程序与材料按需配套', note))
    for id, title, note, focus, keys in [
        ('p07o', '同一套知识，按任务需要逐层取用', '正文提供核心工作指导；下面展开它怎样组织一项工作', 'body', ['anthropicArticle', 'openaiArticle']),
        ('p07os', '同一套知识，按任务需要逐层取用', '正文保留核心指导，资料、程序与素材按需取用', 'resources', ['authoringReferences', 'supportGuide']),
        ('p07ox', '同一套知识，按任务需要逐层取用', '同样通过引用，查阅另一份 Skill 的专项工作指导', 'external', ['old5', 'trialA'])
    ]:
        add(id, title, note, anchor_map(note), [note], keys, True)
        next(scene for scene in scenes if scene['id'] == id)['layout'] += ' anchor-map focus-' + focus

    body='''<div class="reference-scene">
<div class="reference-pair"><section class="reference-source"><span class="file-label">SKILL.md · 正文示意</span><p>需要填写 PDF 表单时，<br>查阅 <strong>forms.md</strong> 中的填写与检查方法</p><div class="reference-annotation"><span>什么时候用</span><span>打开哪里 · 用它做什么</span></div></section><div class="reference-arrow">沿链接查阅 <b>⟶</b></div><section class="reference-file"><span class="file-label">forms.md</span><h3>PDF 表单填写</h3><p>适用场景 · 具体步骤 · 检查方法</p><div class="paper-lines"><i></i><i></i><i></i></div></section></div>
<p class="diagram-note">正文给出使用条件与入口，配套文件说明自己的用途</p></div>'''
    add('p07p','从正文的一句引用，找到需要的文件','以正文示意中的引用句连到 forms.md，解释使用条件、入口和用途。示意不代表本课已执行 PDF 任务。',body,['引用句怎样连接配套文件'],['authoringReferences','authoringScripts','supportGuide'])

    labels=['任务边界','工作方法','检查依据','交付要求']
    panels=[
        '<h3>先交代负责什么，以及需要什么</h3><div class="scope-example"><div class="example-paper"><small>工作范围</small><strong>填写 PDF 表单</strong><p>把提供的内容填入对应字段</p></div><div class="input-pair"><span>开始前需要</span><p>一份 PDF 表单</p><b>＋</b><p>要填写的内容</p></div></div>',
        '<h3>Step by step，每步说明具体做法</h3><div class="method-chain"><div><strong>分析</strong><p>运行哪个脚本<br>得到哪些字段信息</p></div><b>→</b><div><strong>映射</strong><p>整理字段对应关系<br>说明需要核对的事项</p></div><b>→</b><div><strong>填写</strong><p>怎样执行填写<br>填写前有哪些检查</p></div></div><p class="writing-takeaway">步骤名称下面，还要写清操作、所用文件与注意事项</p>',
        '<h3>给出检查什么、怎样判断的依据</h3><div class="check-options"><section><small>文字说明</small><strong>列出检查要求</strong><p>字段对应是否正确<br>填写内容是否遗漏</p></section><section><small>检查脚本</small><strong>配上使用说明</strong><p>什么时候运行 · 需要什么输入<br>怎样运行 · 怎样看检查结果</p></section></div><p class="writing-takeaway">根据检查内容，提供文字依据或可运行的检查方法</p>',
        '<h3>用要求或模板，约定交付内容与格式</h3><div class="delivery-example"><section><small>直接写要求</small><strong>交付填写完成的 PDF</strong><p>说明尚未填好的内容</p></section><section class="example-paper"><small>报告模板示意</small><p>完成情况 <span>____________</span></p><p>未完成项 <span>____________</span></p><p>需要补充的信息 <span>_______</span></p></section></div>'
    ]
    body='<div class="writing-switch"><nav class="writing-nav" aria-label="正文写作要点">'+''.join(f'<div class="writing-nav-item writing-nav-{i}"><span>0{i+1}</span>{label}</div>' for i,label in enumerate(labels))+'</nav><div class="writing-panels">'
    body+=''.join(f'<section class="writing-panel" data-reveal="{i}">{panel}</section>' for i,panel in enumerate(panels))
    body+='</div></div>'
    add('p07m','Skill 正文通常要写清什么','左侧保持四项导航；右侧依次展开范围与输入、逐步做法、检查依据、交付要求。',body,labels,['workflowBoundary','authoringWorkflow'])

    add('p07q','同一套知识，按任务需要逐层取用',
        '在同一张结构图上观察识别与选用、核心指导、按需展开细节三个层次。本次请求提供具体目标与环境，Skill 提供可复用方法。500 行是篇幅建议。接下来的三轮记录用于核对本次实际取用及执行，不预设所有配套文件都会被使用。',skill_map(True),
        ['识别身份与适用情境','读取核心指导，结合本次输入','按需展开资料、程序与材料'],['disclosure','old5','trialA'],True)

    # 模板与示例沿用当前真实画面；更新其教学职责，口播仍由唯一源映射。
    template=next(s for s in scenes if s['id']=='p07l')
    template['title']=template['label']='不同写法，表达不同的工作知识'
    template['lead']='模板约定输出结构，示例展示具体程度，条件句限定何时采取行动。正文的表达方式按要支持的判断选择，内容较长时也可以单独引用。'
    template['segment']='认识完整 Skill 的组成与组织'
    template['steps']=['报告的空结构','同一结构填入具体内容','条件决定采用哪个流程']
    template['html']=template['html'].split('<div class="reading-actions">',1)[0]+actions(['authoringPatterns'])
    by_id={s['id']:s for s in scenes}
    for id in IDS:
        scene=by_id[id]; slots={}
        for frame in reading['plannedFrames']:
            for screen in frame['screens']:
                if screen.get('ppt',{}).get('id')==id:
                    block=scripts[frame['scriptSource']][screen['scriptStep']]
                    slots[screen['ppt']['step']]='\n\n'.join(block.split('\n\n')[1:])
        supplemental = next((page for page in reading['summarySlidePlan']['pages'] if page['scene'] == id and page['status'].startswith('补充')), None)
        if supplemental and not slots:
            scene['script'] = [''] * len(scene['steps'])
            continue
        if id == 'p07m':
            # 本轮仅调整 PPT；讲师要求保留逐字稿，四步口播待单独同步。
            scene['script'] = [''] * len(scene['steps'])
            continue
        assert sorted(slots)==list(range(len(scene['steps']))),(id,slots)
        scene['script']=[slots[i] for i in range(len(slots))]
    return scenes
