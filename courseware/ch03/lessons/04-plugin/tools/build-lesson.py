# -*- coding: utf-8 -*-
"""Build 3.4 slides and narration from their editable sources."""
import json
from pathlib import Path
P=Path(__file__).resolve().parents[1]
scripts=json.loads((P/'script.json').read_text())
def a(url,text): return f'<a href="{url}" target="_blank" rel="noopener">{text} ↗</a>'
def outline(kind='paper'):
    paths={
        'paper':('0 0 400 300','M9 5 H355 L385 34 V294 H9 Z M355 5 V34 H385'),
        'folder':('0 0 400 300','M7 5 H133 L163 31 H393 V294 H7 Z'),
        'round':('0 0 400 300','M20 5 H380 Q395 5 395 20 V280 Q395 295 380 295 H20 Q5 295 5 280 V20 Q5 5 20 5 Z'),
        'bubble':('0 0 400 300','M20 5 H380 Q395 5 395 20 V250 Q395 265 380 265 H110 L75 295 L82 265 H20 Q5 265 5 250 V20 Q5 5 20 5 Z'),
        # Left tail stays inside the viewBox; text padding must clear x=56.
        'talk':('0 0 400 300','M64 8 H384 Q392 8 392 16 V284 Q392 292 384 292 H64 Q56 292 56 284 V170 L8 146 L56 122 V16 Q56 8 64 8 Z'),
        'banner':('0 0 720 150','M22 8 H698 Q712 8 712 22 V128 Q712 142 698 142 H22 Q8 142 8 128 V22 Q8 8 22 8 Z'),
    }
    box,path=paths[kind]
    return f'<svg class="ink-outline" viewBox="{box}" preserveAspectRatio="none" aria-hidden="true"><path d="{path}"/></svg>'
def arrow():
    return '<svg class="ink-arrow" viewBox="0 0 80 40" aria-hidden="true"><path d="M4 21 Q34 19 68 20 M56 9 L71 20 L57 31"/></svg>'
def person():
    return '<svg class="ink-person" viewBox="0 0 80 120" aria-hidden="true"><circle cx="40" cy="29" r="22"/><path d="M9 109 V85 Q9 59 40 59 Q71 59 71 85 V109 Q40 119 9 109 Z"/></svg>'
def paper(content,cls=''):
    return '<div class="paper-object '+cls+'">'+outline()+content+'</div>'
def folder(content,cls=''):
    return '<div class="folder-object '+cls+'">'+outline('folder')+content+'</div>'
def linkitem(name,desc,url):
    return '<div class="resource-item">'+a(url,name)+'<p>'+desc+'</p></div>'
scenes=[]
def scene(id,title,html,steps,segment='寻找 Skill'):
    assert len(scripts[id])==len(steps)
    scenes.append(dict(id=id,title=title,label=title,segment=segment,lead='',html='<div class="resources-slide r34-'+id+'">'+html+'</div>',steps=steps,script=scripts[id],teaching=[],source='index.html#'+id,seconds=30*len(steps)))
scene('ui-opening','社区里，已经有很多现成的 Skill',
    '<div class="opening-layout"><figure><img src="assets/impeccable-hotel.webp" alt="Impeccable 作者展示的酒店主题网页"><figcaption><span class="style-judge">看作品，判断风格</span>'+a('https://impeccable.style/gallery/','Impeccable 作者作品')+'</figcaption></figure><div class="opening-uses"><section><h3>界面设计</h3><p>这张图是 Impeccable</p><p>还有 Anthropic 的 frontend-design</p></section><div class="more-uses" data-reveal="1"><section><h3>前端审查</h3><p>Vercel · web-design-guidelines</p></section><section><h3>开发规划</h3><p>Superpowers · writing-plans</p></section><section><h3>组织测试</h3><p>test-driven-development</p></section></div></div></div>',
    ['现成的 UI 指导','还有其他开发用途'])
scene('platform-map','找 Skill，可以从三个入口开始',
    '<div class="finding-map"><div class="finding-start">'+person()+'<div class="finding-question">'+outline('bubble')+'<h3>想找一份<br>适合任务的 Skill</h3></div></div><svg class="finding-branches" viewBox="0 0 110 320" aria-hidden="true"><path d="M5 160 C50 160 50 40 96 40 M83 29 L98 40 L83 51 M5 160 H96 M83 149 L98 160 L83 171 M5 160 C50 160 50 280 96 280 M83 269 L98 280 L83 291"/></svg><div class="finding-routes"><section><span class="route-object route-stack">'+outline('round')+'<b>目录</b></span><div><h3>聚合平台</h3><p>汇集不同作者，可看社区数据</p></div></section><section><span class="route-object">'+outline('folder')+'<b>仓库</b></span><div><h3>GitHub</h3><p>看项目说明，读指导原文</p></div></section><section><span class="route-person">'+person()+'</span><div><h3>直接找提供者</h3><p>Coding Agent 官方、团队与独立作者</p></div></section></div></div><p class="closing-note">同一份 Skill，可能在几个入口都能找到</p>', ['三种找法'])
scene('recommended-entries','先收藏这几个入口',
    '<div class="resource-directory">'+folder('<h3>聚合平台</h3>'+linkitem('skills.sh','主题与热门','https://www.skills.sh/')+linkitem('SkillsMP','按条件筛选','https://skillsmp.com/search'),'directory-discover')+folder('<h3>作者与团队的集合</h3>'+linkitem('Anthropic Skills','Coding Agent 官方示例','https://github.com/anthropics/skills')+linkitem('Vercel agent-skills','技术团队的前端指导','https://github.com/vercel-labs/agent-skills')+linkitem('Superpowers','开发规划、测试与调试','https://github.com/obra/superpowers'),'directory-repos')+folder('<h3>工具官方插件目录</h3>'+linkitem('Codex','侧边栏 → 插件／技能','https://chatgpt.com/plugins')+linkitem('Claude Code','/plugin → Discover','https://code.claude.com/docs/en/discover-plugins')+linkitem('Cursor','Marketplace · Customize','https://cursor.com/marketplace'),'directory-providers')+'</div>', ['三组推荐入口'])
scene('lifecycle-slide','Skill 也会更新，或不再需要',
    '<div class="lifecycle-rows"><section class="lifecycle-row"><div class="case-reason"><h3>Matt Pocock</h3><p>自己的 agent 已能处理合并冲突</p><span class="case-condition">较弱模型可能仍需要指导</span></div>'+arrow()+paper('<span class="file-label">合并冲突 Skill</span><strong class="result-label">移除专门指导</strong>'+a('https://www.aihero.dev/skills-changelog-v13-implement-spec-pr-retro-and-glossary-md','v1.3 更新说明 · 2026-10-05'),'retired-file')+'</section><section class="lifecycle-row" data-reveal="1"><div class="case-reason"><h3>Superpowers</h3><p>有些模型写计划时，提前开始实现</p></div>'+arrow()+paper('<span class="file-label">writing-plans</span><strong class="result-label">调整指导，聚焦规划</strong>'+a('https://github.com/obra/superpowers/blob/main/RELEASE-NOTES.md#v642-2026-09-25','v6.4.2 · 2026-09-25'),'revised-file')+'</section></div><p class="closing-note lifecycle-try" data-reveal="1">跟自己的任务有关，再拿来试</p>', ['移除与适用条件','更新与持续关注'],'持续追踪')
scene('official-slide','先关注自己正在用的工具',
    '<div class="official-board"><section class="official-now"><p class="board-kicker">比如，正在用 Codex</p>'+folder('<h3>Codex</h3><div class="official-papers">'+paper('<h4>发布了什么</h4>'+a('https://developers.openai.com/codex/changelog/','更新记录'))+paper('<h4>现在怎么用</h4>'+a('https://developers.openai.com/codex/skills/','Skill 文档'))+'</div>','official-folder')+'</section><section class="official-also"><p class="board-kicker">换工具，也是一样</p><div class="also-stack">'+paper('<h3>Claude Code</h3><div class="also-line"><span>发布了什么</span>'+a('https://code.claude.com/docs/en/changelog','Changelog')+'</div><div class="also-line also-event"><span>开发方法</span><span class="also-link">'+a('https://claude.com/code-with-claude/san-francisco','Code with Claude')+'<small>官方活动与主题录像</small></span></div>','also-card')+paper('<h3>Cursor</h3><div class="also-line"><span>发布了什么</span>'+a('https://cursor.com/changelog','Changelog')+'</div>','also-card')+'</div></section></div>', ['官方渠道'],'持续追踪')
scene('authors-slide','去哪里关注 AI 的新进展',
    '<div class="author-board"><div class="author-who">'+person()+'<div><h3>Andrej Karpathy</h3><p>先关注一位感兴趣的人</p></div></div><div class="author-ways"><section class="way way-x">'+outline('talk')+'<h3>X · 推特</h3><p>看近期动态与想法</p><p class="way-detail">也看看社区最近在讨论什么</p>'+a('https://twitter.com/karpathy','@karpathy')+'</section><section class="way way-yt" data-reveal="1">'+outline()+'<h3>YouTube</h3><p>看完整讲解</p><p class="way-detail">大模型原理 · 使用经验</p>'+a('https://www.youtube.com/@AndrejKarpathy','@AndrejKarpathy')+'</section></div><div class="follow-sheet" data-reveal="1">'+outline('banner')+'<strong>关注清单</strong><p>人物、频道和链接放在一起</p><p class="sheet-note">整理后给大家参考，按兴趣挑选</p></div></div>', ['X 上关注动态','YouTube 深入了解'],'持续追踪')
scene('tips-slide','三个顺手可用的小技巧',
    '<div class="tips-objects"><section class="tip-trace"><h3>沿资源找作者</h3><div class="trace-scene">'+paper('<b>Skill</b>','mini-file')+arrow()+'<div class="trace-author">'+person()+'<span>作者</span></div></div><svg class="trace-follow ink-arrow" viewBox="0 0 260 36" aria-hidden="true"><path d="M214 2 C214 20 130 10 130 29 M120 19 L130 30 L140 19"/></svg><p class="trace-result">更多 Skill 与文章</p>'+a('https://github.com/mattpocock/skills','Matt 的 Skills 仓库')+'</section><section class="tip-source" data-reveal="1"><h3>同名，看来源</h3>'+paper('<span class="file-label">frontend-design</span><p class="same-name-note">同名可能有好几份</p><div class="source-emphasis">'+outline('round')+'<b>owner / repo</b><span>作者 ／ 仓库</span></div>','source-file')+'</section><section class="tip-archive" data-reveal="2"><h3>留意维护状态</h3>'+paper('<span class="file-label">安装说明</span><span class="archived-stamp">Archived</span><p>已归档<br>看说明里有没有替代</p>','archive-file')+a('https://www.aihero.dev/skills-resolving-merge-conflicts','归档页示例')+'</section></div>', ['反向追踪','辨认同名','维护状态'],'实用 tips')
lesson=dict(title='寻找值得体验的 Skill，持续追踪 AI Coding',chapter='第 3 章 · Vibe Coding + Plugin',section='03.04',summary='寻找现成 Skill，关注官方与实践者，再补几个实用技巧。',scenes=scenes,segments=[dict(label='寻找 Skill',seconds=240),dict(label='持续追踪',seconds=300),dict(label='实用 tips',seconds=150)])
(P/'lesson.js').write_text('window.lesson = '+json.dumps(lesson,ensure_ascii=False,indent=2)+';\n')
(P/'narration-script.js').write_text('window.narrationScripts = '+json.dumps(scripts,ensure_ascii=False,indent=2)+';\n')
print('3.4: 7 pages, 12 steps; script.json is the sole narration source')
