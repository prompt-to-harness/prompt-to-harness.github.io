"""Audio enhancement: goal, reuse, change, and independent verification."""
import json
from html import escape

def build(lesson,pop):
 raw=(lesson.here/'screen-plan.js').read_text()
 data=json.loads(raw[raw.index('{'):].rstrip(';\n'))
 screens={s['id']:s for p in data['parts'] for g in p['groups'] for s in g['screens']}
 route=[('audio-goal','明确目标与请求'),('audio-result','新对话验证')]
 def link(url,label):return '<a href="'+url+'" target="_blank" rel="noopener">'+label+' ↗</a>'
 def material(path,label):
  urls={'before/index.html':'evidence/audio-reference-iteration/baseline/index.html',
        'after/index.html':'evidence/audio-reference-iteration/with-audio/index.html'}
  return link(urls[path],label)
 def prompt(id,label):
  text=screens[id]['prompts'][0]['text']
  return pop(label,label,('<p>四要素整理稿，尚未重新执行；本轮结果对应实际发送原文</p>' if id=='audio-guidance' else '')+'<div class="creation-prompt"><pre>'+escape(text)+'</pre><button type="button" data-creation-copy>复制完整 Prompt</button><span role="status"></span></div>')
 def actual_prompt():
  text=(lesson.here/'evidence/audio-reference-iteration/author-prompt.txt').read_text()
  return pop('本轮实际发送 Prompt · 可复制','本轮实际发送 Prompt','<div class="creation-prompt"><pre>'+escape(text)+'</pre><button type="button" data-creation-copy>复制完整 Prompt</button><span role="status"></span></div>')
 def scene(id,screen,title,body,links,takeaway):
  progress='<nav class="size-progress" aria-label="声音优化步骤">'+'<i aria-hidden="true">→</i>'.join('<a href="index.html?mode=slides#'+key+'"'+(' aria-current="step"' if key==id else '')+'><span>'+str(n)+'</span>'+label+'</a>' for n,(key,label) in enumerate(route,1))+'</nav>' if id!='audio-preview' else ''
  html='<div class="size-case audio-case">'+progress+'<div class="size-focus">'+body+'<p class="size-takeaway">'+takeaway+'</p><nav class="size-nav">'+links+'</nav></div></div>'
  lesson.scene(id=id,narration_source={'file':'screen-plan.js','screen':screen},segment='音效迭代',label=title,title=title,lead='',html=html,steps=[title])
 def pair(left,right,related=False):return '<div class="size-contrast"><section>'+left+'</section><span class="size-join" aria-hidden="true">'+('＋' if related else '<svg viewBox="0 0 60 36"><path d="M4 20 Q27 15 53 18 M43 7 L54 18 L42 29"/></svg>')+'</span><section class="size-choice p-box">'+right+'</section></div>'
 scene('audio-goal','iteration-criteria','让后续游戏也带上声音反馈',
  pair('<span class="size-label">这次增加</span><h3>收集、受伤有不同声音</h3><p>玩家可以关闭音效</p>','<span class="size-label">继续保留</span><h3>原有布局与玩法</h3><p>开场确认 · 画面反馈<br>限时收集 · 结算重开</p>',related=True),
  prompt('audio-guidance','查看优化 Prompt · 四要素稿')+actual_prompt()+link('http://127.0.0.1:4397/inspect/?topic=audio-reference-author','打开优化日志'), '先说清希望增加什么，以及怎样算做好')
 scene('audio-result','audio-regenerate','新增能力要生效，原有能力也要保留',
  '<div class="audio-checks"><section><h3>新对话调用</h3><p>修改后的 Skill<br>空项目生成游戏</p></section><section><h3>实际试听</h3><p>触发收集、受伤<br>关闭声音后再试</p></section><section><h3>检查原有体验</h3><p>开场、反馈、结算、重开<br>剩余问题继续修</p></section></div>',
  prompt('audio-regenerate','开发请求 · 可复制')+material('after/index.html','修改版游戏'), '用真实任务检验新增能力，也检查原有功能')
