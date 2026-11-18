#!/usr/bin/env python3
"""6.3 怎样判断这条 GSD 流程符合预期：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图、外部截图与重画图内联见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
已完成整节视觉重设计（含 .p-claim、.p-quad、.p-comic、p26a 外部截图佐证页与 p27 四步排障手绘图）；p24 不预写现场结果。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import NARROW, Lesson, chapter_map, redrawn, ref, shot  # noqa: E402

lesson = Lesson(
    __file__, "6.3", "怎样判断这条 GSD 流程符合预期",
    summary="先立住验收标准，再讲钻牛角尖、X-Y problem 与四步排障；对照 6.2 留下的计划列出现场检查表，不预写结果，不改生产代码。",
    prep=[
        "保持 6.2 建流后的工作区状态，准备好 .planning/ 与 docs/specs/ 供 p24 现场对照；开录前确认生产源码无改动。",
        "本节不发起新的代码修改请求，聚焦工作流人工验收标准与排障判断。",
    ],
)
scene = lesson.scene


scene(
    id="p21", segment="开篇", layout="lesson-cover",
    label="怎样判断这条 GSD 流程符合预期",
    title="怎样判断这条 GSD 流程符合预期？",
    lead="6.2 已生成工作流与计划；动手改代码前先踩一脚刹车，立一道人工验收闸门",
    html=(
        chapter_map(3)
        + '<div class="p-flow" style="--n:3;column-gap:38px;margin-top:18px" data-reveal="1">'
        '<div class="p-node" data-role="ctx"><span class="p-num">6.2 已交出</span><h3>工作流与计划</h3><p>映射、验证矩阵与任务草稿</p></div>'
        '<div class="p-node" data-role="gate"><span class="p-num">6.3 · 当前闸门</span><h3>先验收流程本身</h3><p>不重做建流，也不急着改代码</p></div>'
        '<div class="p-node" data-role="us" style="opacity:.72"><span class="p-num">6.4 合格后再进</span><h3>红绿实现与 UAT</h3><p>用验过的流程改产品</p></div></div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:12px">本节问题：怎样判断这条 GSD 流程符合预期？先验流程，再去实施</div>'
    ),
    steps=["本章位置", "建流与实施之间的人工闸门", "本节问题"],
)

scene(
    id="p22", segment="验收标准",
    label="框架标记完成了，是不是就等于流程通过了",
    title="框架标了完成，就等于流程通过吗？",
    lead="框架打出的完成标记只说明命令步骤走完，不能代替人对规格依据、验证去向和停止条件的实际观察。",
    html=(
        NARROW
        + '<div class="p-claim" style="gap:32px">'
        '<div class="p-box" data-role="agent" data-reveal="0" style="padding:12px 16px">'
        '<span class="p-tag" data-role="agent" style="margin-bottom:6px">框架状态输出</span>'
        '<q style="font-size:24px;margin-top:6px">Phase 1 planning complete ✓<br><em>ready to execute</em></q>'
        '<p style="margin-top:8px;font-size:18px;color:var(--p-muted)">只证明命令步骤跑完了，不证明计划内容没跑偏</p></div>'
        '<ul class="p-checks">'
        '<li data-reveal="0"><div><b>命令步骤已跑完</b><small>工作区里生成了阶段计划文件</small></div></li>'
        '<li class="is-no" data-reveal="1"><div><b>原规格还是不是依据？</b><small>有没有偷偷另起一套需求，待人打开核对</small></div></li>'
        '<li class="is-no" data-reveal="1"><div><b>四个案例都有验证去向吗？</b><small>断言落在可见行为还是私有细节，待人核对</small></div></li>'
        '<li class="is-no" data-reveal="1"><div><b>停止条件与介入点清楚吗？</b><small>越界时能否当场停下，待人核对</small></div></li>'
        '</ul></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:4px;padding:7px 18px;font-size:20px">框架完成状态 ≠ 人工验收通过；不能拿一句绿字直接放行进入实施</div>'
    ),
    steps=["看框架的完成提示", "三件框架替不了的核对", "完成标记不等于放行"],
    refs=[
        ref("Codex 官方文档：Best practices（验证与审查）", "https://learn.chatgpt.com/guides/best-practices", "官方依据"),
    ],
)

scene(
    id="p23", segment="验收标准",
    label="验收时到底要看哪几件事",
    title="验收工作流时，盯紧哪四件事？",
    lead="把验收标准收成四个象限：规格依据、验证去向、范围与停止条件、人工介入点。缺任何一项都不能进入 6.4。",
    html=(
        '<div class="p-quad" style="--h:158px">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><h3>01</h3>'
        '<div class="p-quote">规格依据未变</div>'
        '<div class="p-then"><code>docs/specs/</code> 仍是唯一源，CR-01 是追加而非替换</div></div>'
        '<div class="p-box" data-role="ok" data-reveal="1"><h3>02</h3>'
        '<div class="p-quote">验证去向齐全</div>'
        '<div class="p-then">原验收与四新案例全有落点，视觉体验明确归人工</div></div>'
        '<div class="p-box" data-role="tool" data-reveal="2"><h3>03</h3>'
        '<div class="p-quote">范围与停止条件</div>'
        '<div class="p-then">标明来源、允许文件与断言，生产代码修改保持串行</div></div>'
        '<div class="p-box" data-role="us" data-reveal="3"><h3>04</h3>'
        '<div class="p-quote">人工检查点可介入</div>'
        '<div class="p-then">任务间可停下抽查，绝不用「文档变长」冒充已核验</div></div>'
        '</div>'
    ),
    steps=["01 规格依据未变", "02 验证去向齐全", "03 范围与停止条件", "04 人工检查点可介入"],
)

scene(
    id="p24", segment="验收标准",
    label="对照刚才建好的工作流，这些检查点能对上吗",
    title="对照 6.2 产物，现场逐项怎么查？",
    lead="打开 6.2 留下的映射、验证矩阵和阶段计划，按四行检查表逐项核对；本页只列检查动作与拦截信号，不预写某一次现场结果。",
    html=(
        '<div class="p-rec" style="--rf:18px">'
        '<div class="is-head"><span>打开哪份产物</span><span>现场核对什么具体对象</span><span>出现什么信号就拦下</span></div>'
        '<div class="is-fail" data-reveal="0">'
        '<div class="p-cell"><code>.planning/</code> 映射与阶段文档</div>'
        '<div class="p-cell"><code>REQ-CR01</code> 与原编号能否逐条指回 <code>docs/specs/</code></div>'
        '<div class="p-why">脱离原规格另编一套新需求</div></div>'
        '<div class="is-fail" data-reveal="0">'
        '<div class="p-cell">验证去向矩阵</div>'
        '<div class="p-cell"><code>AC-CR01-1~4</code> 与原验收是否落到 <code>node:test</code> / 浏览器 / 人工</div>'
        '<div class="p-why">漏掉案例，或只靠覆盖率充数</div></div>'
        '<div class="is-fail" data-reveal="1">'
        '<div class="p-cell">Phase 1 任务计划</div>'
        '<div class="p-cell">是否 ≤ 3 个串行任务，允许文件与停止条件是否明确</div>'
        '<div class="p-why">夹带未批准依赖或跨端重构</div></div>'
        '<div class="is-fail" data-reveal="1">'
        '<div class="p-cell">工作区 <code>git status</code></div>'
        '<div class="p-cell">6.2 建流阶段是否守住了零生产代码改动</div>'
        '<div class="p-why">还没验流程就提前改了源码</div></div>'
        '</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:10px;font-size:19px">只列通用核对单，不预写现场表格结果；全部过关后才放行到 6.4</div>'
    ),
    steps=["查规格映射与验证矩阵", "查任务边界与工作区状态", "过关后才放行到 6.4"],
)

scene(
    id="p25", segment="使用中的坑",
    label="什么是钻牛角尖，课堂上怎么认出它",
    title="什么是钻牛角尖，怎么当场认出它？",
    lead="第一种高频陷阱：方向一开始就偏了，却在同一条无效路径上连续追加指令硬推，导致上下文越滚越长、问题还在原地。",
    html=(
        '<div class="p-comic" style="height:292px">'
        '<div class="p-panel" data-reveal="0" style="padding:48px 16px 14px"><span class="p-cap">1 · 起点走偏</span>'
        '<div class="p-bubble is-ai" style="font-size:19px">我已帮你重新规划了一套 12 步的新产品需求！</div>'
        '<div class="p-avatar is-ai" style="width:62px;height:62px">AI</div></div>'
        '<div class="p-panel" data-reveal="1" style="padding:48px 16px 14px"><span class="p-cap">2 · 连续打补丁硬推</span>'
        '<div class="p-bubble" style="font-size:19px">别改第 3 条，再补两条限制重试一次！</div>'
        '<div class="p-row"><div class="p-avatar" style="width:62px;height:62px">我们</div><div class="p-bubble is-ai" style="font-size:17px">收到，又加了 4 个新文件…</div></div></div>'
        '<div class="p-panel" data-reveal="2" style="padding:48px 16px 14px"><span class="p-cap">3 · 第 6 轮仍在原地</span>'
        '<div class="p-term" style="font-size:15.5px;margin-bottom:4px;padding:6px 12px">context: 78%<br><span class="bad">规格被冲乱 · 原问题未解</span></div>'
        '<div class="p-row"><div class="p-avatar" style="width:62px;height:62px">我们</div><div class="p-bubble" style="font-size:18px">路错了！停下换问题！</div></div></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:6px;padding:7px 18px;font-size:19.5px">识别信号：上下文越来越长、补丁越打越多、核心偏离没变 → <b>立刻喊停，回原规格重开</b></div>'
    ),
    steps=["第 1 格：起点已经偏离原规格", "第 2 格：顺着错路连续补指令", "第 3 格：上下文膨胀，果断喊停"],
)

scene(
    id="p26", segment="使用中的坑",
    label="什么是 X-Y problem，它和 CR-01 有什么关系",
    title="什么是 X-Y problem，和 CR-01 有何关系？",
    lead="第二种高频陷阱：把自己临时猜想的实现手段 Y 当成需求去追问 AI，忘了真正要交付给用户的产品行为 X。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;gap:18px">'
        '<div class="p-box" data-role="ok" data-reveal="0" style="padding:16px 20px">'
        '<div class="p-head"><h3>真正要解决的问题 X</h3><span class="p-tag" data-role="ok">产品目标</span></div>'
        '<p class="p-big" style="font-size:23px">输入变非法时，用户一眼认出当前图是「上次有效结果」</p>'
        '<p class="p-sub" style="margin-top:8px">属于可观察行为，由 <code>AC-CR01-1~4</code> 直接验收</p></div>'
        '<div class="p-join" data-reveal="1"><b>≠</b><span>别拿手段<br>代替目标</span></div>'
        '<div class="p-box is-dashed" data-role="agent" data-reveal="1" style="padding:16px 20px">'
        '<div class="p-head"><h3>预先想好的手段 Y</h3><span class="p-tag" data-role="agent">局部猜想</span></div>'
        '<p class="p-big" style="font-size:23px">追问「怎么在 store 里加 <code>isStaleBanner</code> 字段或新类名」</p>'
        '<p class="p-sub" style="margin-top:8px">手段也许有用，但写成需求就会绑死实现、漏测真实体验</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">验收计划时重点看：断言在测<b>用户看得见的行为 X</b>，还是在测某个<b>预设手段 Y</b></div>'
    ),
    steps=["真正要解决的产品问题 X", "预先想好的实现手段 Y", "验收断言必须锚定 X"],
)

scene(
    id="p26a", segment="使用中的坑", layout="evidence-scene",
    label="X-Y problem：为什么别拿手段代替问题",
    title="X-Y problem：为什么别拿手段代替问题？",
    lead="打开 xyproblem.info 的经典定义：当你只拿着预设手段 Y 去提问时，AI 会顺从地把 Y 越写越复杂，却没人替你守住真正的目标 X。",
    html=shot(
        "external/xyproblem-definition.png",
        "xyproblem.info · The XY Problem — What is it?",
        "xyproblem.info 网站对 The XY Problem 的定义与六步过程截图",
        height=340,
        note="向 AI 提问或审计划时先把最终可观察目标 X 摆在最前面，别让 AI 顺着预设手段 Y 盲目写到底",
        reveal=0,
        note_reveal=1,
    ),
    steps=["看 xyproblem.info 六步拆解", "对 AI 更要先亮明目标 X"],
    refs=[
        ref("The XY Problem 原文说明", "https://xyproblem.info/", "社区共识"),
    ],
)

scene(
    id="p27", segment="使用中的坑",
    label="遇到问题，应该先做什么",
    title="遇到问题时，硬推和排障差在哪？",
    lead="出问题时不要连续加指令硬推，也不要先改代码再倒改规格凑数；按「先复现 → 缩小范围 → 对照已有规格 → 分流修改」四步走。",
    html=redrawn(
        "gsd-workflow",
        "troubleshoot-loop",
        style="course",
        max_height=336,
        source="课程自绘：对照原地连续硬推死循环与先复现、缩小范围、对照规格再分流修改的四步法",
    ),
    steps=["上排：连续硬推的死循环", "下排：复现、缩范围、对规格", "右侧分流：修工作流还是修实现"],
)

scene(
    id="p28", segment="使用中的坑",
    label="哪些做法看似有进展，实则已经走偏",
    title="哪些做法看似有进展，实则已走偏？",
    lead="这四类做法表面上都在往前跑，但都会掏空后续验证的可靠性；在进入 6.4 实施前一次拦住。",
    html=(
        '<div class="p-rec" style="--rf:18px">'
        '<div class="is-head"><span>表面看起来像进展</span><span>背后漏掉了什么</span><span>在 6.3 怎么拦住</span></div>'
        '<div class="is-fail" data-reveal="0">'
        '<div class="p-cell">还没核对映射就往下派发</div>'
        '<div class="p-cell">输入依据可能已偏离原五层规格</div>'
        '<div class="p-why">先逐条核完编号映射再放行</div></div>'
        '<div class="is-fail" data-reveal="1">'
        '<div class="p-cell">先改实现，再补必过的测试</div>'
        '<div class="p-cell">断言没见过失败，测不出真差距</div>'
        '<div class="p-why">强制 6.4 失败测试先行</div></div>'
        '<div class="is-fail" data-reveal="2">'
        '<div class="p-cell">把「流程跑完」当成「结果对了」</div>'
        '<div class="p-cell">命令退出码为 0 不代表提示可读</div>'
        '<div class="p-why">保留任务间检查与人工 UAT</div></div>'
        '<div class="is-fail" data-reveal="3">'
        '<div class="p-cell">拿测试个数或覆盖率当证据</div>'
        '<div class="p-cell">数字好看仍可能漏掉双错恢复边界</div>'
        '<div class="p-why">只认四个固定案例与原验收</div></div>'
        '</div>'
    ),
    steps=["没核映射就派发", "先改代码再补测试", "把跑完当成结果对", "拿数量或覆盖率充数"],
)

scene(
    id="p29", segment="判断与自检",
    label="计划写全了、框架也显示完成了，是不是就可以直接发布",
    title="计划核完了、状态也绿了，能直接发布吗？",
    lead="计划写全了、框架也显示规划完成了，请对比「已拿到的」与「6.4 才要做的」，判断现在能不能直接发布。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:10px 18px">'
        '<div class="p-head"><h3 style="font-size:23px">学员判断：计划核对通过、框架状态也显示完成，现在能直接发布吗？</h3><span class="p-tag" data-role="us">先想一步</span></div></div>'
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:10px" data-reveal="1">'
        '<div class="p-box" data-role="ok" style="padding:14px 18px">'
        '<div class="p-head"><h3 style="font-size:23px">6.3 已经拿到的</h3><span class="p-tag" data-role="ok">施工通行证</span></div>'
        '<p style="font-size:19px">确认工作流仍以 <code>docs/specs/</code> 为依据、验证去向齐全、排障顺序清楚</p></div>'
        '<div class="p-box is-dashed" data-role="gate" style="padding:14px 18px">'
        '<div class="p-head"><h3 style="font-size:23px">6.4 还没发生的</h3><span class="p-tag" data-role="gate">交付硬证据</span></div>'
        '<p style="font-size:19px">失败测试尚未报红、最小实现尚未落盘、人工 UAT 尚未走过真实界面</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px"><b>不可以发布</b>：本节发出的是进入 6.4 实施的通行证，尚未实施的计划不等于 CR-01 已完成</div>'
    ),
    steps=["先做判断", "对比施工通行证与交付硬证据", "不可直接发布"],
)

scene(
    id="p30", segment="判断与自检",
    label="工作流跑到一半失败了，这两种做法哪样对",
    title="工作流跑到一半报错了，怎么应对？",
    lead="工作流执行中途遇到报错或偏离时，请先暂停比较下面两种应对方式，再看盖章结论。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先比较两种做法，自己选定再往下看</span>'
        '<div class="p-quiz" style="margin-top:12px">'
        '<div class="p-q" data-role="gate">'
        '<div class="p-say">做法 A：留在原长对话里继续追加更细的指令，硬逼它给出一个完成标记</div>'
        '<span class="p-stamp" data-role="gate" data-reveal="1">✗ 钻牛角尖</span>'
        '<div style="margin-top:8px;font-size:19px;color:#A8350F" data-reveal="1">在错误路径上连续打补丁只会污染上下文，拿到的完成标记也不可信</div></div>'
        '<div class="p-q" data-role="ok">'
        '<div class="p-say">做法 B：先复现并缩小范围，打开 <code>docs/specs/</code> 对清差距，再决定修流程还是修代码</div>'
        '<span class="p-stamp" data-role="ok" data-reveal="2">✓ 四步排障</span>'
        '<div style="margin-top:8px;font-size:19px;color:#11652F" data-reveal="2">先锚定已批准规格看清真差距，改哪一层都有明确依据</div></div></div>'
    ),
    steps=["暂停比较两种做法", "做法 A：钻牛角尖", "做法 B：四步排障"],
)

scene(
    id="p31", segment="小结",
    label="带着什么进入 6.4", title="带着什么进入 6.4？",
    lead="本节不产出生产代码。收住已验收的工作流、四项观察点与排障避坑共识，进入 6.4 用失败测试先行与人工 UAT 完成 CR-01。",
    html=(
        '<div class="p-sketch">'
        '<div class="p-ribbon" data-reveal="0">6.3 小结 · 流程先过人工关，排障不往死胡同推</div>'
        '<div data-reveal="0"><h3 style="text-align:center">一个核心判断</h3>'
        '<div class="p-star" style="width:220px;font-size:22px">框架显示完成<br>只是走完步骤<br>不能代替观察</div></div>'
        '<div data-reveal="1"><h3>本节留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass" style="font-size:21px">经四象限核对的工作流</li>'
        '<li class="is-pass" style="font-size:21px">钻牛角尖与 X-Y 避坑判断</li>'
        '<li class="is-pass" style="font-size:21px">复现→缩范围→对规格排障法</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>6.4 完成 CR-01</h3>'
        '<p>先写失败测试，再做最小实现与回归，最后走一遍人工 UAT</p></div></div>'
        '</div>'
    ),
    steps=["一个核心判断", "本节留下的", "下一节 6.4"],
)

lesson.write()
