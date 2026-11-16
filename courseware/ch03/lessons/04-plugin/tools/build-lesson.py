#!/usr/bin/env python3
"""Build 3.4 slides and narration data from the single script.json source."""
import json
from pathlib import Path
P=Path(__file__).resolve().parents[1]
scripts=json.loads((P/'script.json').read_text())
def a(url,text): return f'<a href="{url}" target="_blank" rel="noopener">{text} ↗</a>'
def box(title,text,step=None):
 r='' if step is None else f' data-reveal="{step}"'
 return f'<div class="resource-box"{r}><h3>{title}</h3>{text}</div>'
def item(name,desc,url): return f'<div class="resource-item">{a(url,name)}<p>{desc}</p></div>'
scenes=[]
def scene(id,title,html,steps,segment='寻找 Skill'):
 assert len(scripts[id])==len(steps)
 scenes.append(dict(id=id,title=title,label=title,segment=segment,lead='',html='<div class="resources-slide">'+html+'</div>',steps=steps,script=scripts[id],teaching=[],source='index.html#'+id,seconds=30*len(steps)))
scene('ui-opening','社区里，已经有很多现成的 Skill',
 '<div class="opening-layout"><figure><img src="assets/impeccable-hotel.webp" alt="Impeccable 作者展示的酒店主题网页"><figcaption>'+a('https://impeccable.style/gallery/','Impeccable 作者作品')+'</figcaption></figure><div class="use-list"><div><h3>UI 与前端设计</h3><p>frontend-design · Impeccable</p></div><div data-reveal="1"><h3>前端审查</h3><p>Vercel · web-design-guidelines</p><h3>开发规划 / 测试</h3><p>Superpowers · writing-plans<br>test-driven-development</p></div></div></div>', ['现成的 UI 指导','还有其他开发用途'])
scene('platform-map','找 Skill，可以从三个入口开始',
 '<div class="entry-map">'+box('聚合平台','<p>集中搜索、按主题逛</p><span class="entry-symbol">搜</span>')+box('GitHub','<p>看项目说明与指导原文</p><span class="entry-symbol">{ }</span>')+box('直接找提供者','<p>Coding Agent 官方<br>技术团队 · 独立作者</p><span class="entry-symbol">人</span>')+'</div><p class="quiet-line">同一份 Skill，可能在几个入口都能找到</p>', ['三种找法'])
scene('recommended-entries','先收藏这几个入口',
 '<div class="directory"><section><h3>聚合平台</h3>'+item('skills.sh','主题与热门','https://www.skills.sh/')+item('SkillsMP','按条件筛选','https://skillsmp.com/search')+'</section><section><h3>GitHub 集合</h3>'+item('Anthropic Skills','Coding Agent 官方示例','https://github.com/anthropics/skills')+item('Vercel agent-skills','技术团队的前端指导','https://github.com/vercel-labs/agent-skills')+item('Superpowers','开发规划、测试与调试','https://github.com/obra/superpowers')+'</section><section><h3>提供者网站</h3>'+item('Impeccable','看设计作品与说明','https://impeccable.style/')+'<p class="directory-note">按自己的需要<br>继续探索</p></section></div>', ['六个入口'])
scene('lifecycle-slide','Skill 也会更新，或不再需要',
 '<div class="life-layout">'+box('有的被移除','<p>Matt Pocock · 合并冲突 Skill</p><p class="life-main">作者认为 agent 已能处理<br>移除专门指导</p><p class="condition">较弱模型可能仍需要</p>'+a('https://www.aihero.dev/skills-changelog-v13-implement-spec-pr-retro-and-glossary-md','v1.3 更新说明 · 2026-10-05'))+box('有的调整写法','<p>Superpowers · writing-plans</p><p class="life-main">针对提前开始实现的行为<br>让指导更聚焦于规划</p>'+a('https://github.com/obra/superpowers/blob/main/RELEASE-NOTES.md#v642-2026-09-25','v6.4.2 · 2026-09-25'),1)+'</div>', ['移除与适用条件','更新与持续关注'],'持续追踪')
scene('official-slide','先关注自己正在用的工具',
 '<div class="official-layout">'+box('Codex','<p>功能变化 · 当前用法</p>'+item('更新记录','发布了什么','https://developers.openai.com/codex/changelog/')+item('Skill 文档','现在怎么用','https://developers.openai.com/codex/skills/'))+box('Claude Code','<p>产品更新 · 工作方法</p>'+item('Changelog','版本变化','https://code.claude.com/docs/en/changelog')+item('Code with Claude','官方活动与主题录像','https://claude.com/code-with-claude/san-francisco'))+'</div><p class="quiet-line">使用 Cursor，也可以关注 '+a('https://cursor.com/changelog','Cursor Changelog')+'</p>', ['官方渠道'],'持续追踪')
scene('authors-slide','看实践者怎么用，也看他们怎么改',
 '<div class="author-layout"><section><h3>Matt Pocock</h3><p>开发做法 · Skill · 文章与视频</p>'+a('https://www.aihero.dev/videos','AI Hero')+'</section><section><h3>Simon Willison</h3><p>实验记录 · 原始链接 · 使用限制</p>'+a('https://simonwillison.net/tags/skills/','Skills 专题')+'</section></div><div class="author-more" data-reveal="1"><span>进阶：'+a('https://blog.fsck.com/','Jesse Vincent')+' · 工作流回顾</span><strong>所用工具的官方渠道 ＋ 一两位实践者</strong></div>', ['两位互补的作者','按需要选择'],'持续追踪')
scene('tips-slide','三个顺手可用的小技巧',
 '<div class="tips-layout">'+box('沿资源找作者','<p>一份 Skill → 作者 → 更多项目与文章</p>'+a('https://github.com/mattpocock/skills','Matt 的 Skills 仓库'))+box('同名，看来源','<p>记下 owner / repo<br>别只记 Skill 名称</p>',1)+box('留意维护状态','<p>有安装说明，也可能已归档</p><span class="archived">Archived</span><p>'+a('https://www.aihero.dev/skills-resolving-merge-conflicts','归档页示例')+'</p>',2)+'</div>', ['反向追踪','辨认同名','维护状态'],'实用 tips')
lesson=dict(title='寻找值得体验的 Skill，持续追踪 AI Coding',chapter='第 3 章 · Vibe Coding + Plugin',section='03.04',summary='寻找现成 Skill，关注官方与实践者，再补几个实用技巧。',scenes=scenes,segments=[dict(label='寻找 Skill',seconds=240),dict(label='持续追踪',seconds=300),dict(label='实用 tips',seconds=150)])
(P/'lesson.js').write_text('window.lesson = '+json.dumps(lesson,ensure_ascii=False,indent=2)+';\n')
(P/'narration-script.js').write_text('window.narrationScripts = '+json.dumps(scripts,ensure_ascii=False,indent=2)+';\n')
print('3.4: 7 pages, 12 steps; script.json is the sole narration source')
