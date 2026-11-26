#!/usr/bin/env python3
"""Build the lesson slides for 3.3 using the chapter player."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, ref, pop  # noqa: E402

lesson = Lesson(
    __file__, "3.3", "修改 Skill，并用它开发躲避游戏",
    summary="从已有材料演示三种 Skill 生成请求，再沿组件版完成声音迭代。",
)

def link(target, label):
    return f'<a href="evidence/{target}" target="_blank" rel="noopener">{label} ↗</a>'


def wrap(body, links):
    return '<div class="skill-slide">' + body + '<nav class="skill-evidence" aria-label="本页材料">' + links + '</nav></div>'


# Opening additions use the shared request source; retained slides keep stable IDs.
import json
from html import escape
creation = json.loads((lesson.here / 'creation-demos.json').read_text())
def source_shot(file, caption, key):
    # Original page captures, with separate SVG annotations; source pixels stay intact.
    marks = {
        'direct': ('1152 508', '<rect x="70" y="314" width="300" height="44"/><rect x="70" y="386" width="360" height="44"/>', '留意：成功步骤与纠正意见'),
        'creator': ('1072 492', '<rect x="54" y="201" width="280" height="43"/>', '留意：Codex 的调用写法与创建时的提问'),
        'reference': ('1152 452', '<rect x="199" y="386" width="934" height="43"/>', '留意：资料要贴合具体项目'),
    }
    viewbox, marks_svg, note = marks[key]
    src = 'external/creation-'+key+'-context.png'
    return ('<figure class="creation-source"><div class="p-page">'
            '<div class="p-page-bar"><i></i><i></i><i></i>'+caption+'</div>'
            '<a class="creation-capture" href="'+src+'" target="_blank" rel="noopener" aria-label="放大原文截图">'
            '<img src="'+src+'" alt="'+caption+'：保留上下文的原页截图">'
            '<svg viewBox="0 0 '+viewbox+'" aria-hidden="true">'+marks_svg+'</svg></a></div>'
            '<figcaption>'+note+'</figcaption></figure>')

lesson.scene(
    id='creation-evidence', narration_source={'file':'screen-plan.js','screen':'creation-methods'}, segment='生成方式', label='材料与创建方式',
    title='先把已有对话和成品交给 AI', lead='Prompt 说明任务与读取位置，文件承载具体上下文',
    html='<div class="creation-overview"><div class="creation-project"><img src="evidence/reference.png" alt="已完成的紫色翻牌游戏"><span>已完成的翻牌游戏</span></div>'
         '<div class="creation-bundle"><h3>把经验带进新会话</h3><div><b>开发对话</b><code>source-dialogue.md</code></div><div><b>最终源码</b><code>source-game/</code></div><div><b>成品截图</b><code>source-game/docs/</code></div></div>'
         '<div class="creation-guide p-box" data-role="ctx"><span class="creation-eyebrow">PROMPT</span><h3>告诉 AI<br>要提炼什么</h3><p>复用目标 · 材料位置<br>提炼边界 · 完成标准</p><strong>先读材料，再生成</strong></div></div>'
         '<div class="creation-route"><span><i>01</i>直接提炼</span><span><i>02</i>调用 skill-creator</span><span><i>03</i>补充 Reference</span></div>',steps=['材料进入新会话'])
for case in creation['cases']:
    key=case['id']
    extras={'direct':'依据已有对话、最终源码与截图，提炼可复用经验','creator':'同一份材料，在请求开头加入 $skill-creator','reference':'同一份材料，再提供参考文件并说明采用范围'}
    shots={'direct':('agentskills-extract-task.png','Agent Skills · 从实际任务提炼'),
           'creator':('openai-create-skill.png','OpenAI · Codex 内置创建工具'),
           'reference':('agentskills-synthesize.png','Agent Skills · 综合已有项目资料')}
    prompt='<div class="creation-prompt" id="creation-prompt-'+key+'"><pre>'+escape(case['prompt'])+'</pre><button type="button" data-creation-copy>复制完整 Prompt</button><span role="status"></span></div>'
    actions='<div class="creation-actions">'+pop('完整生成 Prompt','查看完整 Prompt',prompt)+'<button type="button" data-creation-copy="'+key+'">复制完整 Prompt</button><span role="status"></span></div>'
    special={'direct':'从实际材料中区分通用视觉与翻牌专属规则',
             'creator':'用创建工具组织过程，目标与材料仍由我们提供',
             'reference':'保护场地 · 按玩法安排 HUD · 排除 3D 专属要求'}
    centers={'direct':('直接提炼','提取可复用经验','区分通用视觉与翻牌规则'),
             'creator':('调用创建工具','$skill-creator','提供目标，由工具组织创建过程'),
             'reference':('补充参考','材料 + Reference','指定借鉴原则与不适用范围')}
    heading,main,note=centers[key]
    inputs='<div class="creation-materials"><span class="creation-eyebrow">同一份作品材料</span><div class="creation-paper p-box" data-role="us"><b>对话 · 源码 · 截图</b><span>最终源码 · 成品截图</span></div></div>'
    action='<div class="creation-transform"><span class="creation-eyebrow">'+heading+'</span><strong>'+main+'</strong><p>'+note+'</p></div>'
    output='<div class="creation-output"><span class="creation-eyebrow">生成后审阅</span><b>Skill 初稿</b><code>SKILL.md</code><span>正文 + 配套文件</span></div>'
    lesson.scene(id='create-'+key,narration_source={'file':'screen-plan.js','screen':'demo-'+key},segment='生成方式',label=case['title'],title=case['title'],
        lead=extras[key],html='<div class="creation-method">'+source_shot(*shots[key], key)+'<div class="creation-practice"><div class="creation-flow">'+inputs+'<svg class="creation-arrow" viewBox="0 0 72 42" aria-hidden="true"><path d="M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34"/></svg>'+action+'<svg class="creation-arrow" viewBox="0 0 72 42" aria-hidden="true"><path d="M5 23 Q29 17 61 21 M49 9 Q57 15 64 21 Q56 26 49 34"/></svg>'+output+'</div>'
        +'<div class="creation-bottom"><span>'+({'direct':'读取对话、源码与截图，再整理经验','creator':'创建工具不替代项目材料与复用目标','reference':'保护场地 · 按玩法安排 HUD · 排除 3D 专属要求'}[key])+'</span>'+actions+'</div></div></div>',steps=['官方说明与完整请求'],
        refs=[ref('原文出处',creation['sources']['creator' if key=='creator' else 'expertise'],kind='live' if key=='direct' else 'read')])

comparison = json.loads((lesson.here / 'creation-comparison.json').read_text())
comparison_prompt = '<div class="creation-prompt" id="creation-prompt-comparison"><pre>'+escape(comparison['prompt'])+'</pre><button type="button" data-creation-copy>复制完整 Prompt</button><span role="status"></span></div>'
comparison_cards = ''.join('<figure><figcaption>'+escape(c['label'])+'</figcaption><a href="evidence/creation-comparison/'+c['id']+'/index.html" target="_blank" rel="noopener"><img src="evidence/creation-comparison/'+c['id']+'/playing.png" alt="'+escape(c['label'])+'实际游戏"></a><strong>'+escape(c['skill_note'])+'</strong></figure>' for c in comparison['cases'])
lesson.scene(
    id='skill-inputs', narration_source={'file':'screen-plan.js','screen':'review-defaults'}, segment='简短对比', label='三份实际产物',
    title='安装并调用 Skill，看看游戏效果', lead='同一开发请求 · 各自只带对应 Skill · 比较实际结果',
    html='<div class="creation-compare"><div class="comparison-cards">'+comparison_cards+'</div><p class="comparison-boundary">提前准备的游戏结果 · 现场任务仍在生成</p><nav class="creation-actions">'+link('creation-comparison/index.html#skills','三种方案的游戏效果')+pop('共用开发 Prompt','共用开发 Prompt',comparison_prompt)+'<button type="button" data-creation-copy="comparison">复制开发请求</button><span role="status"></span></nav></div>',
    steps=['三份实际产物', '同题游戏结果'])

import runpy
runpy.run_path(str(Path(__file__).with_name('size-case-slides.py')))['build'](lesson, pop)

runpy.run_path(str(Path(__file__).with_name('audio-case-slides.py')))['build'](lesson, pop)

# 两个案例讲完后再展示共同总结。
summary = next(scene for scene in lesson.scenes if scene['id'] == 'size-summary')
lesson.scenes.remove(summary)
summary['segment'] = '优化总结'
lesson.scenes.append(summary)

lesson.write()

# Preserve legacy evidence anchors as routes to retained original records.
import subprocess
subprocess.run([sys.executable, str(Path(__file__).resolve().parents[5] / "tools/ch03-showcase/sync-process-links.py")], check=True)
