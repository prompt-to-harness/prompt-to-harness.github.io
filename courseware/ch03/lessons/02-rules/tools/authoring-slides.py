"""第二部分的四张知识 PPT；正文复用 script.json，不另存口播。"""
from html import escape

IDS = ['p07e', 'p07f', 'p07g', 'p07h']


def build(scripts, plan):
    scenes = []

    def actions(*keys):
        return '<div class="authoring-actions">' + ''.join(
            f'<a href="{escape(plan["materials"][key]["url"], quote=True)}" target="_blank" rel="noopener">'
            f'{escape(plan["materials"][key]["label"])} ↗</a>' for key in keys) + '</div>'

    def narration(frame, paragraphs, cue):
        # 只生成对应 PPT 的操作提示，原口播仍取自同一份 script.json。
        source = [text for step in scripts[frame] for text in step.split('\n\n') if not text.startswith('【')]
        return '【操作提示｜' + cue + '】\n\n' + '\n\n'.join(source[i] for i in paragraphs)

    def add(id, segment, title, lead, html, steps, source, mapping, cues):
        scenes.append(dict(id=id, segment=segment, title=title, label=title, lead=lead,
            layout='authoring-slide', html=html, steps=steps,
            script=[narration(source, refs, cue) for refs, cue in zip(mapping, cues)],
            source='index.html#' + id, seconds=30 * len(steps)))

    add('p07e', '正文与复用', '正文留下会影响行动的指导',
        '正文保留每次开展任务都需要的目的、输入、关键做法、条件与例外、输出和检查要求。刚才的默认技术路线、工作步骤和检查计划结构都属于会改变行动的指导。只在特定情况需要的长例子或详细规则可以放入 Reference，但正文必须交代读取条件与路径。没有增加具体要求的重复口号可以删除。长度取决于任务需要，不把行数说成产品硬上限，也不为缩短而删掉关键条件。',
        '''<div class="authoring-edit">
          <div class="authoring-file"><h3>SKILL.md <small>内容取舍示例 · 课程归纳</small></h3>
            <div class="authoring-edit-row"><p>输入不足时，先询问必要规则</p><b>保留</b></div>
            <div class="authoring-edit-row"><p>每项检查写前置状态、操作、可见结果</p><b>保留</b></div>
            <div class="authoring-edit-row is-reference" data-reveal="1"><p>详细选型条件、较长的翻牌案例</p><b>移出</b></div>
            <div class="authoring-edit-row is-remove" data-reveal="1"><p><s>认真检查，保证质量</s></p><b>删除</b></div>
          </div>
          <div class="authoring-edit-why"><h3>每段怎样影响工作？</h3><p>改变行动、选择或交付物<br>选用后就应读到</p>
            <div data-reveal="1"><h3>只在特定情况需要？</h3><p>放入 Reference<br>正文保留读取条件与路径</p></div>
          </div>
        </div><p class="authoring-takeaway" data-reveal="2">按信息用途控制长度，关键条件不能省</p>'''
        + actions('core-notes', 'entry'),
        ['保留必要指导', '按需引用，删除重复', '按用途控制长度'], 'b13', [[0], [1], [2]],
        ['第 6 页第 1 步；先看正文中的输入与输出要求。', '第 6 页第 2 步；展开可移入资料的内容与删除项。', '第 6 页第 3 步；收束正文长度的判断，再进入下一页。'])

    add('p07f', '正文与复用', '资料与独立工作怎样分工',
        '详细例子和选型条件作为 Reference，多个 Skill 可以共同引用一份资料。能独立交代输入和产出的界面调整或试玩工作，可以组织为另一份 Skill。脚本承担重复计算和确定的文件处理，素材提供模板或待处理输入；入口需要说明使用条件、路径和输入输出，实际执行仍依赖工具与环境。引用关系不等于必然调用，也不表示启动子 Agent。下一个检查计划示例从单个 SKILL.md 开始，有实际需要时再增加资源。',
        '''<div class="authoring-reuse">
          <div class="authoring-reuse-row"><h3>共享知识</h3>
            <div class="authoring-shared-sources"><code>game-studio</code><code>web-game-foundations</code></div>
            <div class="authoring-converge" aria-label="两份 Skill 引用同一个文件"><i></i><i></i></div>
            <div class="authoring-reuse-target"><code>engine-selection.md</code><p>同一份选型资料，只维护一处</p></div>
          </div>
          <div class="authoring-reuse-row"><h3>专项工作</h3><div class="authoring-work-source"><code>game-studio</code><p>需要界面设计时</p></div>
            <div class="authoring-arrow" aria-label="入口引用专项指导"></div>
            <div class="authoring-reuse-target"><code>game-ui-frontend</code><p>提供界面设计方法与检查标准</p></div>
          </div>
        </div>
        <div class="authoring-resources" data-reveal="1"><p><b>脚本</b>　重复计算、确定的文件处理</p><p><b>素材</b>　模板、待处理的图片</p></div>
        <p class="authoring-takeaway" data-reveal="2">手动检查计划：先把一项任务写进一个 SKILL.md</p>'''
        + actions('sharing', 'create'),
        ['共享资料与专项工作', '配套脚本与素材', '从单文件开始'], 'b14', [[0], [1], [2]],
        ['第 7 页第 1 步；对照共享一个文件与复用一项独立工作。', '第 7 页第 2 步；展开脚本和素材的职责。', '第 7 页第 3 步；讲完另开“单文件编写顺序演示”，从空目录开始。'])

    add('p07g', '学习检查', '例子变长、标准共用时怎样安排',
        '先暂停判断两种情况：翻牌例子变长，哪些内容仍留在正文；另一份 Skill 也需要相同标准，是否复制一份。通用检查方法继续留在正文，较长案例可以移入按需引用的文件，并交代何时读取及如何按当前规则调整。共享标准维护一份、分别引用。只有出现可独立开展的任务时，才考虑拆成另一份 Skill。画面中的扩展路径是课程拟写示例，当前最小 Skill 仍只有一个文件，未实测扩展后的读取。',
        '''<div class="authoring-exercise">
          <article><h3>翻牌例子越来越长</h3><p class="authoring-exercise-question">哪些留在正文，哪些移出去？</p>
            <div data-reveal="1"><p><b>正文保留</b> 输入分支、通用检查方法</p><p><b>按需引用</b> 较长的翻牌案例</p>
              <pre>references/memory-cases.md</pre><p class="authoring-small">拟写路径；正文注明遇到翻牌任务时读取，按当前规则选用</p></div>
          </article>
          <article><h3>另一份 Skill 也要用同一标准</h3><p class="authoring-exercise-question">复制一份，还是共用？</p>
            <div data-reveal="2"><p><b>同一份标准</b> 维护一处，分别引用</p><p>更新时只改共享文件</p>
              <p class="authoring-small">若要拆出一项独立工作，再另写 Skill，说明输入与产出</p></div>
          </article>
        </div>''' + actions('check-notes', 'example'),
        ['暂停判断两个情境', '展开长例子的处理', '展开共用标准的处理'], 'b21', [[0], [1], [2]],
        ['第 8 页第 1 步；先显示两个问题，留出暂停判断的时间。', '第 8 页第 2 步；展开长例子与正文的分工，说明路径为拟写。', '第 8 页第 3 步；展开共享标准，再进入收尾页。'])

    add('p07h', '学习检查', '把读、改、写接到下一轮开发',
        '本节留下两项具体产物：已有 game-studio 的一处输出要求修改，以及课程自写的单文件 game-check-plan。修改项用相同请求核对读取与返回；最小文件用完整翻牌规则、缺失规则和躲避规则三类输入检查，并据实际问题修订。发现、读取、按要求输出和内容正确需要分别核对，检查计划还需实际执行。内容扩展时按用途判断留在正文、作为资料或拆成独立工作。下一节回到躲避游戏开发，观察指导怎样落实到方案、代码与检查。',
        '''<div class="authoring-deliverables">
          <article><h3>已有 Skill 的一处修改</h3><code>game-studio / Output Expectations</code><p>检查项细化为<br><strong>前置状态、操作、可见结果</strong></p><p class="authoring-small">同请求复核：读到新版了吗？输出采用了吗？</p></article>
          <article><h3>从零写出的最小文件</h3><code>game-check-plan / SKILL.md</code><p>根据游戏规则<br><strong>只生成手动检查计划</strong></p><p class="authoring-small">三类输入：完整规则、缺失规则、另一玩法</p></article>
        </div>
        <p class="authoring-next" data-reveal="1">下一节：用指导开发躲避游戏，继续核对代码与检查</p>'''
        + actions('change', 'example', 'transfer'),
        ['回看修改与最小文件', '承接下一轮开发'], 'b22', [[0], [1]],
        ['第 9 页第 1 步；回看两项产物及其核对方法。', '第 9 页第 2 步；收束拆分判断，进入 3.3。'])
    return scenes
