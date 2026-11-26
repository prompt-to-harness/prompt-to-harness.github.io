"""Scheme-one teaching pages. Retained diagnosis, revision and independent regeneration evidence."""
import json
from html import escape

def build(lesson,pop):
 data=json.loads((lesson.here/'size-case-inputs.json').read_text())
 evidence=json.loads((lesson.here/'size-evidence-links.json').read_text())
 def link(url,label):return '<a href="'+url+'" target="_blank" rel="noopener">'+label+' ↗</a>'
 def prompt(key,label):
  body='<div class="creation-prompt" id="creation-prompt-size-'+key+'"><pre>'+escape(data[key])+'</pre><button type="button" data-creation-copy>复制完整 Prompt</button><span role="status"></span></div>'
  return pop(label,label,body)
 def nav(body):return '<nav class="size-nav">'+body+'</nav>'
 def pending(title,detail):return '<aside class="size-pending"><b>'+title+'</b><p>'+detail+'</p></aside>'
 def scene(id,screen,title,body):
  route=[('size-request','让 AI 找原因'),('size-cause','核对原因'),('size-revision','确定改法'),('size-check','重新验证')]
  if id in dict(route):
   items=[]
   for n,(key,label) in enumerate(route,1):
    current=' aria-current="step"' if key==id else ''
    items.append('<a href="index.html?mode=slides#'+key+'"'+current+'><span>'+str(n)+'</span>'+label+'</a>')
   body='<nav class="size-progress" aria-label="方案一迭代步骤">'+'<i aria-hidden="true">→</i>'.join(items)+'</nav>'+body
  lesson.scene(id=id,narration_source={'file':'screen-plan.js','screen':screen},segment='方案一迭代',label=title,title=title,lead='',html='<div class="size-case">'+body+'</div>',steps=[title])
 scene('skill-files','size-problem','方案一：风格保留了，场地却太小',
  '<div class="size-problem-layout"><figure class="size-shot"><img src="evidence/creation-comparison/direct/playing.png" alt="方案一实际游戏截图：大页面中场地只占很小一块"><svg viewBox="0 0 1280 920" aria-hidden="true"><rect x="417" y="208" width="115" height="90" rx="8"/><path d="M535 250 H770"/><text x="780" y="260">场地挤在这里</text></svg></figure><section><h3>先说清楚问题</h3><p>整体紫色风格已带过来</p><p>需要操作的场地却太小</p><strong>为什么会这样？</strong>'+nav(link('evidence/creation-comparison/direct/index.html','打开游戏')+link('evidence/creation-comparison/direct/playing.png','查看完整截图'))+'</section></div>')
 scene('size-request','size-diagnosis','把问题交给 AI，先找主要原因',
  '<div class="size-focus"><p class="size-premise">场地太小：结合截图、代码、Skill 和生成日志排查</p><div class="size-contrast"><section><span class="size-label">检查本次实现</span><h3>代码哪里出了错？</h3></section><span class="size-join">＋</span><section><span class="size-label">追查上游指导</span><h3>Skill 是否引导错了？</h3></section></div><p class="size-takeaway">先定位主要原因，再决定改哪里</p>'+nav(prompt('diagnosis','查看排查 Prompt · 可复制')+link(evidence['prompt'],'打开排查日志'))+'</div>')
 scene('size-cause','size-diagnosis-source','为什么这次要改 Skill',
  '<div class="size-focus"><div class="size-contrast"><section><span class="size-label">Skill 的通用要求</span><h3>所有玩法保留网格容器</h3><p>要求保留 <code>.board-wrap + .board</code></p></section><span class="size-join" aria-hidden="true"><svg viewBox="0 0 60 36"><path d="M4 20 Q27 15 53 18 M43 7 L54 18 L42 29"/></svg></span><section><span class="size-label">本次生成的实现</span><h3>画布被挤进网格一列</h3><p><code>.board</code> 的四列网格样式<br>覆盖了本次新增的场地样式</p></section></div><p class="size-takeaway">AI 的分析要回到实际材料中核对</p>'+nav(link('evidence/creation-comparison/direct-skill.html#stage-contract','原 Skill 场地要求')+link(evidence['cause'],'排查回复 · 逐处查看')+link('evidence/creation-comparison/direct/styles.css','游戏样式'))+'</div>')
 scene('size-revision','size-change','保留视觉风格，布局随玩法调整',
  '<div class="size-focus"><div class="size-contrast"><section><span class="size-label">原来的要求</span><h3>所有玩法沿用同一容器</h3><p>躲避游戏也要沿用<br>翻牌游戏的 <code>.board</code></p></section><span class="size-join" aria-hidden="true"><svg viewBox="0 0 60 36"><path d="M4 20 Q27 15 53 18 M43 7 L54 18 L42 29"/></svg></span><section class="size-choice p-box"><span class="size-label">修改后的要求</span><h3>按玩法选择场地布局</h3><p>网格玩法用 <code>.board</code><br>其他玩法用 <code>.stage</code>，尺寸按需确定</p></section></div><p class="size-takeaway">修改 Skill，要考虑后续复用的场景</p>'+nav(prompt('change','查看修改 Prompt · 可复制')+link('evidence/size-iteration/revised-skill.html#stage-contract','修订后的 Skill')+link('evidence/size-iteration/diff.html#L35','查看改动')+link(evidence['advice'],'AI 五条建议'))+'</div>')
 scene('size-check','size-revalidate','用新对话验证修改后的 Skill',
  '<div class="size-focus"><div class="size-contrast"><section><span class="size-label">验证条件</span><h3>相同需求，重新生成</h3><p>新对话只调用修订后的 Skill<br>不带入上一轮修复讨论</p></section><span class="size-join" aria-hidden="true"><svg viewBox="0 0 60 36"><path d="M4 20 Q27 15 53 18 M43 7 L54 18 L42 29"/></svg></span><section><span class="size-label">本轮结果</span><h3>场地恢复正常</h3><p>同一窗口下，场地由约 99 × 74<br>变为 760 × 475（16∶10）</p></section></div><p class="size-takeaway">Skill 改得有没有用，要通过实际调用来验证</p>'+nav(prompt('validation','查看开发 Prompt · 可复制')+link('evidence/creation-comparison/direct/playing.png','修改前画面')+link('evidence/size-iteration/playing.png','修改后画面')+link('evidence/size-iteration/game/index.html','试玩新游戏')+link(evidence['validation'],'验证请求')+link('evidence/size-iteration/game-styles.html#L472','本轮尺寸设置'))+'</div>')

 scene('size-summary','size-summary','一轮 Skill 优化怎么做',
  '<div class="summary-layout"><div class="summary-prep">\n<section><h3>1\u3000发现问题</h3><p>真实任务中观察，明确预期与差异</p></section><div class="summary-down">↓</div>\n<section><h3>2\u3000核对原因</h3><p>结合日志和产物，回查 Skill 指导</p></section><div class="summary-down">↓</div>\n<section><h3>3\u3000针对性修改</h3><p>筛选建议，修改相关指导与资源</p></section>\n</div><div class="size-join" aria-hidden="true"><svg viewBox="0 0 60 36"><path d="M4 20 Q27 15 53 18 M43 7 L54 18 L42 29"/></svg></div>\n<section class="summary-verify p-box"><h3>4\u3000独立验证</h3><p class="summary-condition">新对话执行同一任务，对照修改前后</p>\n<div class="summary-check"><b>问题有没有解决</b><p>重新执行原任务，检查原来的问题</p></div>\n<div class="summary-check"><b>换个任务是否适用</b><p>用其他同类任务检验复用效果</p></div>\n<div class="summary-check"><b>原有功能是否正常</b><p>检查之前的能力有没有受到影响</p></div>\n<p class="summary-return">发现问题 → 回到原因与修改</p></section></div>\n<p class="summary-source">参考方法，结合本案例归纳：<a href="https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices#evaluation-and-iteration" target="_blank" rel="noopener">Anthropic ↗</a> · <a href="https://agentskills.io/skill-creation/evaluating-skills" target="_blank" rel="noopener">Agent Skills ↗</a></p>')
