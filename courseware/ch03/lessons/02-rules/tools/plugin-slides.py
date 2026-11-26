"""3.2.4：整包提供与可选组成；口播来自 script.json。"""
import importlib.util
from pathlib import Path

def apply(scenes, scripts, reading):
    spec=importlib.util.spec_from_file_location('plugin_visuals',Path(__file__).with_name('skill-visuals.py'))
    v=importlib.util.module_from_spec(spec);spec.loader.exec_module(v)
    t,r,g,line=v.txt,v.rect,v.group,v.path
    def speech(source,step):
        return '\n\n'.join(scripts[source][step].split('\n\n')[1:])
    def add(id,title,lead,body,steps,script,links):
        actions='<div class="reading-actions">'+''.join(f'<a href="{url}" target="_blank" rel="noopener">{label} ↗</a>' for label,url in links)+'</div>'
        scenes.append(dict(id=id,title=title,label=title,segment='Plugin 组织与分发',lead=lead,layout='selection-slide reading-slide plugin-slide',html=v.svg(id,body,370,title)+actions,steps=steps,script=script,source='index.html#'+id,seconds=150))
    # GitHub 连续带读之后，统一回到这一张关系图。
    body=r(4,8,1152,318,'#fffdf7','#6e6043')+t(26,42,'Game Studio Plugin',28,kind='sv-hand')+t(1134,42,'统一身份 · 整包安装与分发',22,color='#6e6043',anchor='end')
    body+=t(26,82,'game-studio：判断任务，转向专项指导',24)
    for x,name,role in [(28,'game-ui-frontend','界面方法'),(386,'game-playtest','试玩检查'),(744,'sprite-pipeline','动画素材')]:
        body+=r(x,100,330,68,'#f2ede1','#6e6043')+t(x+16,126,name,19,kind='sv-code')+t(x+16,156,role,19,color='#6e6043')
    body+=g(line('M193 174 V202 H367 V226',arrow=True)+line('M551 174 V202 H407 V226',arrow=True)
        +r(128,232,518,60,'#f2ede1','#6e6043')+t(387,254,'references/playtest-checklist.md',18,kind='sv-code',anchor='middle')+t(387,283,'共同检查依据',19,color='#6e6043',anchor='middle')
        +line('M909 174 V226',color='#0b6b5f',arrow=True)+r(710,232,408,60,'#e0f3ef','#0b6b5f')+t(914,254,'scripts/normalize_sprite_strip.py',17,kind='sv-code',anchor='middle')+t(914,283,'配套处理脚本',19,color='#0b6b5f',anchor='middle'),1)
    body+=t(26,354,'代表 Skill 与实际引用节选 · 按当前任务使用',22,color='#6e6043')
    add('p324a','一套能力，怎样组织在一起','',body,['整包提供，指导各有职责','共同资料与配套脚本'],[speech('r324-summary',i) for i in range(2)],[('Game Studio 原件',reading['materials']['plugin-tree']['url']),('安装回放',reading['materials']['plugin-run-source']['url'])])
