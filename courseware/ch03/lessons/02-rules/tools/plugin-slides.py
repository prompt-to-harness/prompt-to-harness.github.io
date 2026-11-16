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
    # 外框先绘制，后揭示，避免新背景遮住原有的四份指导。
    body=g(r(4,6,1152,248,'#fffdf7','#6e6043')+t(24,38,'Game Studio Plugin',28,color='#6e6043',kind='sv-hand')+t(1132,38,'统一身份 · 版本 · 组成声明',22,color='#6e6043',anchor='end'),1)
    body+=t(28,76,'前面按任务准备的四份指导',22,color='#6e6043')
    for x,y,name,primary in [(28,94,'game-playtest',True),(370,94,'game-ui-frontend',True),(28,166,'web-game-foundations',False),(370,166,'react-three-fiber-game',False)]:
        body+=r(x,y,318,58,'#e0f3ef' if primary else '#f2ede1','#0b6b5f' if primary else '#b7ad97')+t(x+16,y+35,name,21,color='#0b6b5f' if primary else '#6e6043',kind='sv-code')
    body+=g(line('M720 65 V232','#b7ad97',1.5)+t(752,76,'包内的其他代表指导',22,color='#6e6043')+t(752,126,'game-studio',23,kind='sv-code')+t(752,170,'phaser-2d-game',23,kind='sv-code')+t(752,216,'…及配套资料、脚本',22,color='#6e6043'),1)
    body+=g(
        r(28,274,154,48,'#f2ede1','#6e6043')+t(105,306,'提供者',23,anchor='middle')
        +line('M192 298 H258',arrow=True)
        +r(270,274,170,48,'#e0f3ef','#0b6b5f')+t(355,306,'整包安装',23,color='#0b6b5f',anchor='middle')
        +line('M450 298 H516',arrow=True)
        +r(528,274,154,48,'#fffdf7','#243042')+t(605,306,'使用者',23,anchor='middle')
        +line('M692 298 H758',arrow=True)
        +r(770,274,256,48,'#e0f3ef','#0b6b5f')+t(898,306,'按任务选用 Skill',23,color='#0b6b5f',anchor='middle')
        +t(28,356,'一份 Skill 也能打包；安装不代表包内所有指导都执行',21,color='#6e6043'),2)
    add('p324a','Plugin 把相关能力作为一包提供','从按任务准备指导文件，到通过统一入口安装扩展包。',body,['已有四份指导','完整包的身份与组成','整包安装，按需选用'],[speech('r324-2',i) for i in range(3)],[('Game Studio 固定版本目录',reading['materials']['plugin-tree']['url']),('Plugin 架构','https://developers.openai.com/plugins/concepts/plugins')])
    body=r(4,8,812,292,'#fffdf7','#6e6043')+t(28,43,'团队游戏开发 Plugin',28,kind='sv-hand')+t(790,42,'教学假设 · 按用途选配',21,color='#6e6043',anchor='end')
    body+=r(28,65,764,58,'#e0f3ef','#0b6b5f')+t(48,102,'Skill',25,color='#0b6b5f',weight=700)+t(192,102,'试玩方法、报告要求',24)
    body+=g(r(28,143,764,58,'#e0f3ef','#0b6b5f')+t(48,180,'MCP',25,color='#0b6b5f',weight=700)+t(192,180,'接入查询已有缺陷的工具',24)+line('M816 172 H888',color='#0b6b5f',arrow=True)+r(904,132,244,80,'#f2ede1','#6e6043')+t(1026,165,'团队缺陷库',24,anchor='middle')+t(1026,196,'远端服务 · 包外',20,color='#6e6043',anchor='middle'),1)
    body+=g(r(28,221,764,58,'#f2ede1','#6e6043')+t(48,258,'Hook',25,color='#6e6043',weight=700)+t(192,258,'会话开始',23)+line('M308 250 H352',arrow=True)+t(376,258,'环境检查脚本',23)+t(772,258,'SessionStart',20,color='#6e6043',anchor='end')+t(28,340,'Hook：需宿主支持、脚本可用，并完成信任确认',22,color='#6e6043'),2)
    add('p324b','Plugin 还可以提供工具接入与事件触发','这是教学示意，不代表 Game Studio 包含 MCP 或 Hook。',body,['Skill 提供工作方法','MCP 接入工具与服务','Hook 按事件触发命令'],[speech('r324-3',0),speech('r324-3',1),speech('r324-4',0)],[('Skill 与 MCP','https://developers.openai.com/plugins/concepts/skills'),('Hook 支持条件','https://developers.openai.com/plugins/build/plugins#bundled-mcp-servers-and-lifecycle-hooks')])

    body=t(24,54,'什么时候用？',29)+t(580,54,'要求够具体吗？',29)
    body+=t(24,102,'说明适用任务与条件',24)+t(580,102,'把风格拆成可执行的要求',24)
    body+=t(24,184,'需要哪些参考？',29)+t(580,184,'怎样核对？',29)
    body+=t(24,232,'正文留入口，连接参考图与资源',24)+t(580,232,'确认实际读取，再检查游戏结果',24)
    body+=line('M24 270 H1144')+t(24,312,'暂停修改初稿，保留前后两版',27,color='#0b6b5f')+t(24,354,'接下来：相关指导与资源，怎样一起提供给别人？',24)
    add('p324c','再看你在 3.1 写下的指导','从第一版想法，到可以使用和核对的指导。',body,['审阅初稿，接到整包提供'],[speech('r324-review',0)],[])

    scenes[-1]["segment"] = "认识复杂 Skill 的资料、脚本与资源"
