#!/usr/bin/env python3
"""3.2 初稿配套画面；口播唯一来源为 ../script.json。"""
import sys
import re
import json
import importlib.util
import subprocess
from pathlib import Path
from html import escape
from markdown_it import MarkdownIt
sys.path.insert(0, str(Path(__file__).resolve().parents[3] / 'tools'))
from lessonkit import Lesson, ref

lesson = Lesson(__file__, '3.2', '读懂一份完整的游戏开发 Skill',
                summary='主动调用 Skill，理解自然语言选用，并检查描述是否准确表达适用范围。')
BASE = 'https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/'

def box(step, title, body, role='tool'):
    return f'<div class="p-box" data-role="{role}" data-reveal="{step}"><h3>{title}</h3><p>{body}</p></div>'

def source_link(text, url):
    return f'<a href="{escape(url, quote=True)}" target="_blank" rel="noopener">{escape(text)}</a>'

def add(id, segment, title, lead, html, steps, refs=None, layout='content'):
    lesson.scene(id=id, segment=segment, title=title, lead=lead, label=title,
                 html=html, steps=steps, refs=refs or [], layout=layout)

def write_evidence(source_name, output_name, title, intro):
    """从去敏的 Markdown 源生成阅读页；不复制私有日志或第三方文件。"""
    source = Path(__file__).resolve().parents[3] / 'materials/minimax-20261106' / source_name
    text = source.read_text()
    headings = list(re.finditer(r'^## ([ES]\d+) (.+)$', text, re.M))
    md = MarkdownIt('commonmark', {'html': False})
    nav, sections = [], []
    for i, heading in enumerate(headings):
        anchor, section_title = heading.group(1).lower(), heading.group(2)
        end = headings[i + 1].start() if i + 1 < len(headings) else len(text)
        nav.append(f'<a href="#{anchor}">{escape(heading.group(1))}</a>')
        sections.append(f'<section id="{anchor}"><h2>{escape(heading.group(1) + " · " + section_title)}</h2>'
                        + md.render(text[heading.end():end]) + '</section>')
    html = '''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>__TITLE__ · Skill 讲解证据</title>
<link rel="stylesheet" href="../../../shared/tokens.css">
<style>body{margin:0;background:var(--color-paper);color:var(--color-ink);font-family:var(--font-body);line-height:1.8}
main{max-width:1050px;margin:auto;padding:24px}a{color:#14613f}h1{font-size:32px}h2{font-size:26px}
nav{position:sticky;top:0;display:flex;flex-wrap:wrap;gap:18px;padding:12px;background:var(--color-paper);border-bottom:1px solid #aebbb4}
section{scroll-margin-top:80px;padding:32px 0;border-bottom:1px solid #aebbb4;font-size:19px;overflow-wrap:anywhere}
pre{padding:18px;overflow:auto;background:#eaf0ef;font-size:16px;line-height:1.65}blockquote{margin-left:0;padding-left:20px;border-left:3px solid #497266}
@media(max-width:600px){main{padding:16px}h1{font-size:26px}section{font-size:17px}nav{gap:12px}}</style></head><body><main>
<header><a href="index.html#p08">返回课件</a><h1>__TITLE__</h1>
<p>__INTRO__</p></header>'''
    html = html.replace('__TITLE__', escape(title)).replace('__INTRO__', escape(intro))
    html += '<nav aria-label="证据定位">' + ''.join(nav) + '</nav>' + ''.join(sections) + '</main></body></html>\n'
    (Path(__file__).resolve().parents[1] / output_name).write_text(html)

HERE = Path(__file__).resolve().parents[1]
subprocess.run([sys.executable, str(Path(__file__).with_name('build-selection-materials.py'))], check=True)
spec = importlib.util.spec_from_file_location('selection_slides', Path(__file__).with_name('selection-slides.py'))
selection = importlib.util.module_from_spec(spec)
spec.loader.exec_module(selection)
evidence = json.loads((HERE / 'selection-evidence.json').read_text())
selection.build(lesson, evidence)

add('p08', '认识 Skill', '读懂一份 Skill',
    '一份 Skill 以 SKILL.md 为入口：名称与描述帮助判断用途，正文提供具体方法，引用连接配套资源或其他专项 Skill。使用时，模型先取得可用 Skill 的名称与描述，选用后加载完整指导，相关资料按需要继续读取；引用存在不等于已经读取。本例的技术选择包含默认路线与例外，工作流程从玩家动作和游戏循环推进到技术、界面、素材与试玩，输出要求把这些考虑落实为当前游戏的方案。通过选型资料、专项试玩指导、第一节截图发现牌面错误的记录，以及一次保存的规划回复，理解通用指导怎样与具体任务结合。规划实录采用项目内文件显式读取，不能证明自动发现或安装，也未执行方案中的开发和检查。',
    '<style>#p08 .p-box{padding:8px 16px}#p08 .p-box h3{font-size:24px;margin:0 0 4px}#p08 .p-box p{font-size:21px;line-height:1.4;margin:0}#p08 .source-entries{font-size:19px;line-height:1.5;margin:8px 0 0}</style>'
    +'<div class="p-pair" style="grid-template-columns:1fr 1fr">'+box(0,'1 · 一份 Skill 由什么组成？','名称与描述：任务范围与适用情境<br>正文：选择依据、工作步骤、输出要求<br>引用：配套资料与独立的专项 Skill')
    +box(1,'2 · Agent 什么时候读到这些内容？','名称与描述先供选择<br>选用后加载完整指导<br>相关资源按需读取（渐进加载）')+'</div>'
    +box(2,'3 · 正文里的指导具体怎样起作用？','技术选择：默认路线与例外条件<br>开发流程：玩家动作与循环 → 技术、界面、素材 → 试玩与交付')
    +'<p class="source-entries">原文：'+source_link('game-studio / SKILL.md',BASE+'skills/game-studio/SKILL.md')+' · '+source_link('技术选型',BASE+'references/engine-selection.md')+' · '+source_link('game-playtest',BASE+'skills/game-playtest/SKILL.md')+'<br>实际材料：'+source_link('05 号截图检查原始记录','http://127.0.0.1:4397/inspect/?run=mm-memory&sample=cli&line=86')+' · '+source_link('规划小任务','skill-reading-trial.html#s01')+'</p>',
    ['一份 Skill 由什么组成','Agent 什么时候读到内容','正文指导怎样用于具体任务'],
    [ref('Skill 的结构与使用','https://developers.openai.com/plugins/concepts/skills',group='概念',kind='read')])

add('p09', '认识 Skill', '把方法用到这次任务里',
    '下面是教学假设：每翻两张算一步，重开后步数与计时归零。用它说明通用方法怎样与具体规则、项目材料和当前范围结合。',
    '<div class="p-pair" style="grid-template-columns:repeat(2,minmax(0,1fr))">'+box(0,'Skill 提供的方法','检查操作、状态变化与界面反馈')
    +box(0,'这次采用的规则','每翻两张算一步<br>重开后步数、计时归零','us')+'</div>'
    +'<div class="p-box" data-role="us" data-reveal="1"><h3>任务信息</h3><p>项目：当前仓库的记忆翻牌<br>重点：计步与重开<br>范围：先给人工试玩清单，不改代码</p></div>',
    ['方法与具体标准','项目与范围'],
    [ref('game-playtest/SKILL.md · 固定版本',BASE+'skills/game-playtest/SKILL.md',group='原文')])

add('p10', '认识 Plugin', 'Skill 与 Plugin 怎样对应',
    'Game Studio 插件包含多份 Skill，其中有一份同名的入口 Skill。打开目录与声明，可以把整套内容和其中的任务指导对应起来。',
    '<div class="p-pair" style="grid-template-columns:repeat(2,minmax(0,1fr))">'
    +box(0,source_link('Game Studio · 插件目录',BASE.replace('/blob/','/tree/')),'<code>skills/</code>：任务指导<br><code>references/</code>：参考资料<br><code>scripts/</code>：配套脚本<br><code>assets/</code>：插件图标')
    +box(1,source_link('plugin.json · 声明文件',BASE+'.codex-plugin/plugin.json'),'<code>&quot;name&quot;: &quot;game-studio&quot;,</code><br><code>&quot;version&quot;: &quot;0.1.2&quot;,</code><br><code>&quot;skills&quot;: &quot;./skills/&quot;</code><br>同文件还有用途描述与仓库来源')+'</div>'
    +'<div class="p-bar is-light" data-reveal="2"><b>Skill</b>：任务指导与资源　<b>Plugin</b>：组织、分发和管理能力</div>',
    ['整套与单份','声明与内容','归纳关系'],
    [ref('Plugin architecture', 'https://developers.openai.com/plugins/concepts/plugins',group='概念',kind='read')])

add('p11', '认识 Plugin', '按需要判断选用方式',
    '把游戏例子里的认识用于其他情境。先判断缺少什么，再看实际内容及提供方式；一份 Skill 也可以通过插件提供。',
    '<div class="p-pair" style="grid-template-columns:repeat(3,minmax(0,1fr))">'
    +box(0,'需要一份做事的方法','已有项目工具，希望按团队标准审查代码<br>检查是否有适用的 Skill')
    +box(1,'需要一组相关能力','规划、实现、素材与试玩连续使用<br>检查插件提供的内容是否匹配')
    +box(2,'需要尚未接入的工具','要读文档服务中的资料，当前没有访问工具<br>检查服务连接、工具与授权')+'</div>',
    ['独立指导','相关能力','工具接入'],
    [ref('Plugin architecture · 组成与选用','https://developers.openai.com/plugins/concepts/plugins#choose-a-plugin-shape',group='概念')])

add('p12', '认识 Plugin', '根据实际组成判断能力',
    '采用前核对来源、版本、组成和任务范围。再用“装上试玩指导是否就能操作浏览器”检查我们对指导与工具的理解。',
    box(0,'采用依据','来源与版本可追溯 · 内容符合任务<br>脚本按需要核对 · 执行访问另看环境')
    +box(1,'暂停判断','装了带试玩 Skill 的插件，就一定能让 Codex 打开浏览器吗？还要核对什么？','us')
    +box(2,'解析','需要核对实际浏览器工具和运行条件<br>game-playtest 提供方法，实际动作需要可用工具','ok'),
    ['采用依据','自主判断','解析'],
    [ref('game-playtest · Tooling Guidance',BASE+'skills/game-playtest/SKILL.md#tooling-guidance',group='原文')])

prompt='请使用 Game Studio 中的 game-playtest，根据当前仓库里的记忆翻牌实现，给我一份简短的人工试玩清单，重点检查计步和重开。先给清单，不改代码，也不启动浏览器。'
add('p13', '安装与调用', '装好后，先做一个小任务',
    '沿课程预检的安装路径安装 Game Studio，核对会话可用性，再显式选用 game-playtest。安装后的状态、读取记录与任务输出分别核对。',
    box(0,'安装与确认','核对来源 → 安装 → 确认会话可用')
    +'<div class="p-box" data-role="us" data-reveal="1"><h3>一次简短调用</h3><p style="font-size:22px">'+escape(prompt)+'</p></div>'
    +'<div class="p-bar is-light" data-reveal="1">看读取记录，再把清单中的预期行为与游戏规则核对</div>',
    ['安装','调用与核对'])

add('p14', '安装与调用', '把现成方法用于自己的任务',
    '看懂内容与提供方式之后，下一节从第二个游戏的需求开始，完整经历选用、规划和实现，并观察指导怎样参与执行。',
    box(0,'遇到新的 Skill 或 Plugin','按任务看用途 · 根据组成判断能力 · 补充项目具体信息','us')
    +'<div class="p-bar is-light" data-reveal="0">下一节：提出第二个游戏，再用这些能力推进开发</div>',
    ['迁移与衔接'])
write_evidence('memory-excerpts.md', 'memory-evidence.html', '第一节翻牌开发记录',
               '来源：MiniMax 独立翻牌实验，快照 minimax-games-20261106-v1。本轮未加载游戏 Skill。原始消息、最终源码与讲师解释分别标明；这些记录用于回看实际过程。')
write_evidence('skill-reading-trial.md', 'skill-reading-trial.html', '一次翻牌规划尝试',
               '来源：2026-11-06 的独立小任务 skill-reading-20261106-v1，使用项目内的 Game Studio 指导，只生成开发方案。以下为真实请求与回复节选，方案中的开发和检查尚未执行。')
plan = json.loads((HERE / 'screen-plan.json').read_text())
# 新讲述稿沿画面单独编排；原 p08 坐标继续复用，不为口播新增正式 PPT 页。
speaker_scenes = [
    {'id': frame['id'], 'label': frame['title'], 'script': lesson.scripts.pop(frame['id'])}
    for frame in plan.get('authoring', {}).get('frames', [])
    if frame['id'] in lesson.scripts
]
for scene_id in list(lesson.scripts):
    if scene_id.startswith(("r322-", "r323-", "r324-")):
        lesson.scripts.pop(scene_id)
lesson.write()
data = json.loads((HERE / 'lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
spec = importlib.util.spec_from_file_location('authoring_slides', Path(__file__).with_name('authoring-slides.py'))
authoring_slides = importlib.util.module_from_spec(spec)
spec.loader.exec_module(authoring_slides)
scripts = json.loads((HERE / 'script.json').read_text())
data['scenes'][len(selection.IDS):len(selection.IDS)] = authoring_slides.build(scripts, plan['authoring'])
data['activeSceneIds'] = selection.IDS
data['authoringSceneIds'] = authoring_slides.IDS
data['pptSceneIds'] = selection.IDS + authoring_slides.IDS
spec = importlib.util.spec_from_file_location('skill_visuals', Path(__file__).with_name('skill-visuals.py'))
skill_visuals = importlib.util.module_from_spec(spec)
spec.loader.exec_module(skill_visuals)
skill_visuals.apply(data, evidence['prompt'])
# 3.2.2 当前六段讲述线的配套知识页；旧第二部分深链保留。
spec = importlib.util.spec_from_file_location('reading_slides', Path(__file__).with_name('reading-slides.py'))
reading_slides = importlib.util.module_from_spec(spec)
spec.loader.exec_module(reading_slides)
data['scenes'][len(selection.IDS):len(selection.IDS)] = reading_slides.build(scripts, plan['reading'])
data['readingSceneIds'] = reading_slides.IDS
data['authoringSceneIds'] = reading_slides.IDS
data['pptSceneIds'] = selection.IDS + reading_slides.IDS
data['summary'] = '调用并匹配 Skill，读懂正文与按需引用的资料、脚本和资源，用真实记录核对实际使用。'
(HERE / 'lesson.js').write_text('window.lesson = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')
by_id = {s['id']: s for s in data['scenes'] + speaker_scenes}
for frame in plan['frames']:
    blocks = by_id[frame['scene']]['script'][frame['step']].split('\n\n')
    assert 0 <= frame['start'] <= frame['end'] < len(blocks), frame['id']
for frame in plan.get('authoring', {}).get('frames', []):
    used_sources = []
    for screen in frame['screens']:
        assert screen['surface'] and screen['action'], frame['id']
        assert screen.get('reuse') or screen.get('points'), frame['id']
        if plan['authoring'].get('scriptComplete'):
            assert screen.get('reuse') and not screen.get('points'), frame['id']
        used_sources.extend(screen.get('reuse', []))
        for key in screen['materials']:
            assert key in plan['authoring']['materials'], (frame['id'], key)
    assert sorted(used_sources) == list(range(len(frame['reuse']))), (frame['id'], used_sources)
    for source in frame['reuse'] + frame.get('previousReuse', []):
        blocks = by_id[source['scene']]['script'][source['step']].split('\n\n')
        source['text'] = blocks[source['part']]
        assert not source['text'].startswith('【'), (frame['id'], source)
(HERE / 'speaker-data.js').write_text(
    'window.screenPlan = ' + json.dumps(plan, ensure_ascii=False, indent=2) + ';\n'
    + "if (new URLSearchParams(location.search).get('part') === '2' || new URLSearchParams(location.search).has('legacy')) {\n"
    + '  window.lesson.scenes.push(...' + json.dumps(speaker_scenes, ensure_ascii=False, indent=2) + ');\n}\n'
)

subprocess.run([sys.executable, str(Path(__file__).with_name("build-reading-script.py"))], check=True)

subprocess.run([sys.executable, str(Path(__file__).with_name("build-task-originals.py"))], check=True)

# Preserve legacy evidence anchors as routes to retained original records.
import subprocess
subprocess.run([sys.executable, str(Path(__file__).resolve().parents[5] / "tools/ch03-showcase/sync-process-links.py")], check=True)
