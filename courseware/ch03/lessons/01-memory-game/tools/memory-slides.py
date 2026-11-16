"""八页 PPT；标题与页序来自讲述线，口播沿用唯一源坐标。"""
import json


def build(here, scripts, plan):
    scenes = []
    purple = 'evidence/minimax-20261106/screenshot-initial.png'
    def add(page, html, refs, cue, actions=()):
        meta = next(x for x in plan['design']['ppt_pages'] if x['id']==page)
        narration = '\n\n'.join(scripts[k][s].split('\n\n')[p] for k,s,p in refs)
        scenes.append(dict(id=page,segment={'s01':'作品目标','s02':'开发请求','s03':'过程与质量','s04':'方法与复用','s05':'交付与回顾'}[meta['unit']],title=meta['title'],label=meta['title'],lead='',layout='memory-slide m31-slide m31-'+page+(' m31-knowledge' if page in {'p05','p06','p06c','p06d','p06b'} else ''),html=html if page in {'p05','p06','p06c','p06d','p06b'} else '<div class="m31-content">'+html+'</div>',steps=[meta['title']],script=['【操作提示｜'+cue+'】\n\n'+narration],source='index.html#'+page,seconds=60,repro={'label':'讲师材料','steps':[{'text':label,'jump':True,'links':[{'text':label,'url':url}]} for label,url in actions]}))
    add('p01','''<div class="m31-opening">
      <div class="m31-opening-copy"><h3>让来访者在你的主页上，<br>玩一局</h3><a class="m31-demo" href="http://127.0.0.1:4397/games/a2/index.html" target="_blank" rel="noopener">打开游戏，看看玩法 <span aria-hidden="true">↗</span></a></div>
      <div class="m31-home-sketch" role="img" aria-label="作品示意：个人主页中加入一个翻牌游戏，卡片里有一对相同的星星图案。">
        <div class="m31-browser-bar"><i></i><i></i><i></i><span>我的个人主页</span></div>
        <div class="m31-home-body"><div class="m31-profile"><strong>示例同学</strong><span>正在学习 AI 协作开发</span><div class="m31-home-nav"><b>查看项目</b><b>记忆翻牌</b></div></div><div class="m31-game-sketch"><div class="m31-sketch-label">记忆翻牌<span>作品示意</span></div><div class="m31-card-grid"><span class="is-pair">★</span><span>?</span><span>?</span><span>?</span><span class="is-pair">★</span><span>?</span></div></div></div>
      </div>
    </div>''', [('part-1',0,1)], '说明主页新增游戏的目标，借示意图认识翻牌配对，再打开参照游戏。')
    add('p01b', '', [('part-2',0,1),('part-2',0,2),('part-2',0,3)], '展示并复制完整请求，切到已有主页项目的新会话发送。')
    scenes[-1].update(layout='prompt-scene m31-prompt', html='', prompt=plan['prompts']['initial-request']['text'])
    case_links = next(frame['links'] for frame in plan['frames'] if frame['id'] == 'f15')
    case_actions = [
        ('官方 Log Viewer 介绍页', 'https://inspect.aisi.org.uk/log-viewer'),
        ('05 号游戏完整记录', case_links[-1][1]),
    ]
    add('p05','<div class="v-group"><div class="v-branch"><section class="v-branch-task memory-frame"><h3>同一个开发任务</h3><p>相同的目标与条件</p></section><svg class="v-branch-arrows" viewBox="0 0 90 220" aria-hidden="true"><g fill="none" stroke="#68717b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 110 C40 110 40 48 78 48 M66 38 L79 48 L66 58"/><path d="M10 110 C40 110 40 172 78 172 M66 162 L79 172 L66 182"/></g></svg><div class="v-branch-routes"><section><p class="v-label">一种可能的过程</p><p class="v-route-line">先规划 <span>→</span> 实现 <span>→</span> 检查规则与画面</p></section><section><p class="v-label">另一种可能的过程</p><p class="v-route-line">直接实现 <span>→</span> 构建检查 <span>→</span> 交付</p></section></div></div><h3 class="v-conclusion">一次成功，不保证下一次仍采用同样的做法</h3></div>', [('part-3',8,16)], '对比两种可能的开发过程，指出检查覆盖范围的差别，再解释为什么一次成功不能保证下次采用同样做法。示意不作为随机性实验。', actions=case_actions)
    add('p06','<div class="v-group"><p class="v-intro">目标说明要做出什么，指导补充怎样开展工作</p><div class="v-guides"><section><h3>规划</h3><p>先考虑完整的<br>使用过程</p></section><section><h3>要求</h3><p>明确必须满足的<br>规则与限制</p></section><section><h3>验证</h3><p>检查功能与实际画面<br>修改后复查</p></section></div><p class="v-boundary">明确关键做法，同时保留具体设计的选择空间</p></div>', [('part-4',0,1)], '目标说明要什么；三项指导说明决策依据，不是三个强制动画步骤。')
    add('p06c','<div class="v-group"><div class="v-inputs"><section class="memory-frame"><div><p class="v-label">本次任务</p><h3>这次要交付什么</h3><p>目标、具体条件与限制</p><p class="v-example">例如：配齐六对才通关</p></div></section><i>＋</i><section class="memory-frame"><div><p class="v-label">可复用指导</p><h3>这类工作怎样做</h3><p>适用做法与检查要求</p><p class="v-example">例如：按当前规则检查通关和重开</p></div></section></div><div class="v-merge">↓</div><h3 class="v-conclusion">结合当前任务，决定具体方案并执行</h3></div>', [('part-4',0,2)], '先解释任务与指导的分工，再用一行游戏例子确认理解。')
    add('p06d','<div class="v-group"><div class="v-skill-flow"><section class="v-endpoint"><h3>当前任务</h3><p>目标与具体条件</p></section><i>→</i><section class="v-skill memory-frame"><p class="v-label">读取适用的 Skill</p><h3>一类任务可复用的指导</h3><p>适合什么任务<br>怎样开展工作<br>怎样检查与交付</p></section><i>→</i><section class="v-endpoint"><h3>结合任务执行</h3><p>落实到当前项目</p></section></div><p class="v-boundary">读取了指导，仍要检查是否落实、结果是否正确</p></div>', [('part-4',0,8),('part-4',0,9)], '定义 Skill，并说明按需读取、结合任务执行及验证的关系；随后回现场。', [('回到现场试玩与发布','speaker.html#f18')])
    add('p06b','<div class="v-group"><div class="v-recap"><section><p class="v-label">作品收获</p><h3>主页上多了一个<br>可玩的翻牌游戏</h3><p>能进入 · 能完成一局 · 能重新开始</p></section><section><p class="v-label">认识收获</p><h3>验证这次的结果<br>留下可复用的做法</h3><p>过程可能变化，结果需要验证。<br>可复用的指导可以整理为 Skill</p></section></div></div>', [('part-6',2,2)], '本次公开主页通过检查后，才返回本页回顾。')
    add('p06a',f'<figure class="m31-reference"><img src="{purple}" alt="紫色翻牌游戏的背景、牌背与操作区域" width="1200" height="900"></figure><div class="m31-reflection"><p>保留哪些特点？</p><p>怎样写成可执行的指导？</p><p>怎样检查新游戏？</p><small>暂停写下初稿，下一节带着方法回看</small></div>', [('part-6',2,4),('part-6',2,5)], '展示参照与三个问题，邀请暂停写初稿并保存；下一节学方法后回看。', [('下一节：认识与使用 Skill','../02-rules/index.html?mode=slides#p07')])
    for scene in scenes:
        if scene['id'] == 'p06a':
            scene['title'] = '换一个游戏，<br>怎样延续<br>这套视觉风格？'
        if not scene['repro']['steps']:
            del scene['repro']
    lesson=dict(title='经历一次真实的游戏开发',chapter='第 3 章 · Vibe Coding 与能力扩展',section='03.01',summary='给主页增加翻牌游戏，从案例理解过程变化与质量，复用方法并核对自己的交付。',scenes=scenes,segments=[{'label':label,'seconds':sum(s['seconds'] for s in scenes if s['segment']==label)} for label in dict.fromkeys(s['segment'] for s in scenes)])
    (here/'lesson.js').write_text('window.lesson = '+json.dumps(lesson,ensure_ascii=False,indent=2)+';\n')
