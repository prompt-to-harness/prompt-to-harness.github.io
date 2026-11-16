"""3.2.3 全局知识图与正文组织；同一张结构图用于组成与渐进披露。"""
from html import escape
from pathlib import Path
import importlib.util

IDS = ['p07o', 'p07p', 'p07m', 'p07l', 'p07q']


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
        scenes.append(dict(id=id,title=title,label=title,segment='认识复杂 Skill 的资料、脚本与资源',lead=lead,
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

    add('p07o','Skill 把可复用的工作知识组织起来',
        'SKILL.md 是入口，文件头帮助识别与选用，正文提供核心工作指导。配套 Reference 供查阅，脚本供运行，素材供使用。另一份专项 Skill 有独立适用范围，引用它不会改变其边界。图为组织示意，配套文件可选，也可引用共享目录中的资料。',skill_map(),
        ['入口文件与核心指导','三类配套文件及使用方式','另一份 Skill 的边界与引用'],['playtest','supportGuide'],True)

    body='''<p class="connection-thesis">正文保留核心方法，并交代配套文件的取用关系</p>
<table class="resource-table contract-table"><thead><tr><th>使用条件</th><th>文件入口</th><th>输入与使用方式</th><th>预期得到什么</th></tr></thead><tbody>
<tr><td>需要检查恢复状态</td><td>试玩清单</td><td><span class="res-verb is-ctx">查阅</span> 恢复细则</td><td>本次验收项目</td></tr>
<tr data-reveal="1"><td>反复执行重开验收</td><td>验收脚本</td><td><span class="res-verb is-tool">运行</span> 游戏地址、依赖</td><td>预期与实际结果</td></tr>
<tr data-reveal="1"><td>核对界面改动</td><td>已确认的基准图</td><td><span class="res-verb is-ctx">对照</span> 对应状态、视口</td><td>需要判断的视觉差异</td></tr>
</tbody></table><p class="resource-caption" data-reveal="1">组织方式示意：本轮脚本已执行；基准图仍是拟议资源</p>'''
    add('p07p','分开保存，也要把使用关系接清楚','正文交代条件、入口、输入与使用方式、预期结果。Reference 补充知识，脚本完成明确处理，素材提供具体对象。表中基准图是组织示意；实际脚本来自任务 2，整理为可复用文件仍需保留运行条件。',body,['正文怎样连接配套文件','查阅、运行与使用的区别'],['restartScript','supportGuide'])

    body='''<div class="body-knowledge"><section><h3>任务边界</h3><p>负责什么<br>需要哪些输入</p></section><section><h3>工作方法</h3><p>怎样推进<br>条件改变时怎样选</p></section><section><h3>判断依据</h3><p>怎样检查<br>何时需要修正</p></section><section><h3>交付要求</h3><p>要交出什么<br>以什么形式交付</p></section></div>
<div class="body-examples" data-reveal="1"><p><code>setup-demo-app</code><span>交付规格、建项步骤、完成标准</span></p><p><code>game-playtest</code><span>试玩流程、工具条件、检查与报告</span></p></div>
<p class="resource-caption">围绕工作组织；不是要求每份正文设置四个固定栏目</p>'''
    add('p07m','正文组织一项工作的判断与行动','任务边界、工作方法、判断依据与交付要求是阅读工作指导的分析视角，不是强制栏目。setup-demo-app 围绕项目交付组织，game-playtest 还需处理不同游戏、工具条件和检查情形；结构由工作需要决定。',body,['正文承担的四种作用','两份示例怎样围绕工作组织'],['official','playtest'])

    add('p07q','同一套知识，按任务需要逐层取用',
        '在同一张结构图上观察识别与选用、核心指导、按需展开细节三个层次。本次请求提供具体目标与环境，Skill 提供可复用方法。三轮读取记录为不同任务路径提供证据，不证明任何任务都会自动打开全部文件。渐进披露服务于核心清楚与细节可取，500 行是篇幅建议。',skill_map(True),
        ['识别身份与适用情境','读取核心指导，结合本次输入','按需展开资料、程序与材料'],['trialA','trialB','trialC','disclosure'],True)

    # 模板与示例沿用当前真实画面；更新其教学职责，口播仍由唯一源映射。
    template=next(s for s in scenes if s['id']=='p07l')
    template['title']=template['label']='不同写法，表达不同的工作知识'
    template['lead']='模板约定输出结构，示例展示具体程度，条件句限定何时采取行动。正文的表达方式按要支持的判断选择，内容较长时也可以单独引用。'
    by_id={s['id']:s for s in scenes}
    for id in IDS:
        scene=by_id[id]; slots={}
        for frame in reading['plannedFrames']:
            for screen in frame['screens']:
                if screen.get('ppt',{}).get('id')==id:
                    block=scripts[frame['scriptSource']][screen['scriptStep']]
                    slots[screen['ppt']['step']]='\n\n'.join(block.split('\n\n')[1:])
        assert sorted(slots)==list(range(len(scene['steps']))),(id,slots)
        scene['script']=[slots[i] for i in range(len(slots))]
    return scenes
