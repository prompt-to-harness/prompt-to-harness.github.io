"""三个任务的知识—实例对应页；讲稿由画面映射读取。"""
from html import escape

def apply(scenes, scripts, reading):
    def links(keys):
        keys = [*keys, *[k+"Backup" for k in keys if k+"Backup" in reading["materials"]]]
        def link(k):
            item=reading['materials'][k]
            return f'<a target="_blank" rel="noopener" href="{escape(item["url"],quote=True)}">{escape(item["label"])} ↗</a>'
        if len(keys)>4:
            return '<div class="reading-actions">'+''.join(link(k) for k in keys[:3])+'<details class="reading-menu"><summary>实录与备用原文</summary><nav>'+''.join(link(k) for k in keys[3:])+'</nav></details></div>'
        return '<div class="reading-actions">'+''.join(link(k) for k in keys)+'</div>'
    def pair(a,b):
        return '<div class="task-pair"><section>'+a+'</section><section>'+b+'</section></div>'
    def table(headers,rows):
        return '<table class="task-table"><thead><tr>'+''.join('<th>'+h+'</th>' for h in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+c+'</td>' for c in row)+'</tr>' for row in rows)+'</tbody></table>'
    bodies=[
        pair('<h3>本次任务 · 规则与边界</h3><p>六对才通关 · 检查前三对 · 保留源码</p>', '<h3>Skill 正文 · 可复用方法</h3><p>试玩流程 · 工具条件 · 报告要求</p>')+
        '<div data-reveal="1">'+table(['共同方法','结合本次任务，形成具体检查'],[
            ['尝试主要操作','翻牌、配对，检查第三对完成后的状态'],
            ['留下可核对的证据','对照实际牌面、进度与通关提示'],
            ['报告复现与差异','预期 3/6 且能继续；记录实际结果与影响']])+'</div>'+
        '<p class="task-result is-risk" data-reveal="2"><strong>本轮观察</strong>　只完成三对，却显示 6/6 并通关 → 提前通关</p>',
        pair('<h3>正文 · 共同流程与入口</h3><p>试玩、取证、报告 → Full checklist</p>', '<h3>Reference · 补充检查细则</h3><p>通用条目：恢复状态能否正常工作</p>')+
        '<div data-reveal="1"><p class="task-action">本例动作：通关后点击「再来一次」</p>'+table(['要判断什么','本游戏的具体预期'],[
            ['状态恢复到新一局','计数归零 · 通关提示消失 · 牌面重新扣下'],
            ['新一局可以继续操作','再次翻开一张牌']])+'</div>'+
        '<p class="task-result is-ok" data-reveal="2"><strong>本轮结果</strong>　状态已重置；再次翻牌成功 → 分别支持两层预期</p>',
        pair('<h3>game-playtest · 共同流程</h3><p>怎样试玩、取证和报告</p>', '<h3>game-ui-frontend · 专项指导</h3><p>信息层级 · 保护游戏区 · 桌面与手机</p>')+
        '<div data-reveal="1">'+table(['专项知识在本例中的用法','对应的检查问题'],[
            ['保护游戏区域','信息区有没有遮挡牌阵？'],
            ['操作时获得所需信息','窄屏底部翻牌时，还看得到计数吗？']])+'</div>'+
        '<div class="task-results" data-reveal="2"><p class="is-ok"><strong>遮挡</strong>　重叠面积为 0</p><p class="is-risk"><strong>可见性</strong>　计数已不在视口</p></div>'
    ]
    titles=['共同方法怎样用于当前任务','Reference 怎样变成具体检查','专项 Skill 怎样补充判断依据']
    keys=[['workflow','tooling','reporting','earlyClear','outputA','reportA'],['references','checklist','readB','restartResult'],['references','frontend','readC','desktopPair','mobileBottom','narrowResult']]
    for n,(title,body) in enumerate(zip(titles,bodies),1):
        id=f'p07t{n}';frame=next(f for f in reading['plannedFrames'] + reading.get('historicalFrames', []) if f['id']==f'plan323-{n+1}');mapped={screen['ppt']['step']:screen for screen in frame['screens'] if screen.get('ppt',{}).get('id')==id}
        assert sorted(mapped)==[0,1,2]
        narration=['\n\n'.join(scripts[frame['scriptSource']][mapped[k]['scriptStep']].split('\n\n')[1:]) for k in range(3)]
        scenes.append(dict(id=id,title=title,label=title,segment=frame['group'],lead=['任务规则与正文方法共同形成检查；实际证据支持本轮结论。','正文提供入口，清单提供条目；结合当前游戏形成动作、预期与可核对的结果。','共同流程与专项判断配合使用；按当前任务选用标准，分别核对不同检查问题。'][n-1],layout='reading-slide task-slide',html='<div class="task-board">'+body+'</div>'+links(keys[n-1]),steps=['建立知识关系','对应当前任务','用实际结果核对'],script=narration,source='index.html#'+id,seconds=120))
