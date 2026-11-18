#!/usr/bin/env python3
"""6.2 怎样在当前仓库把 GSD 工作流建起来：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图、外部截图与重画图内联见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页已完成视觉重设计、手绘规格接入图（p15）与零新增依赖 node:test 公开佐证页（p15a）；p16、p17 先占位。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map, redrawn, ref, shot  # noqa: E402

GSD_REPO = "https://github.com/open-gsd/gsd-core"
GSD_SHA = "b5b9814f033b6d32810562fd4068e1f107da29ec"

lesson = Lesson(
    __file__, "6.2", "怎样在当前仓库把 GSD 工作流建起来",
    summary="先说清 CR-01 改什么、不改什么及四个验收案例，再核对接手检查点，采用零新增依赖方案把已有规格接进工作流；本节不改生产代码。",
    prep=[
        "在已完成 6.1 onboard 与 mapper 摸底的 JSON Crack 课程副本上继续；确认 git diff 对生产源码仍为空。",
        "提前打开 docs/specs/SPEC.md 与 docs/specs/ACCEPTANCE.md，便于演示追加 REQ-CR01 与四个 AC-CR01-* 案例。",
        "确认 node --test 在当前 Node.js 24+ 环境下可直接运行，本节只写入验证去向与计划，不提前修改生产实现。",
    ],
)
scene = lesson.scene


def pending(pid, segment, question, note):
    scene(
        id=pid, segment=segment,
        label=question.rstrip("？"), title=question,
        lead="本页在演练之后再写",
        html=f'<div class="p-bar is-light" data-reveal="0">{note}</div>',
        steps=["待演练后制作"],
    )


scene(
    id="p11", segment="开篇", layout="lesson-cover",
    label="怎样在当前仓库把 GSD 工作流建起来",
    title="怎样在当前仓库把 GSD 工作流建起来？",
    lead="6.1 已立住边界并完成只读摸底；这一节先明确靶子 CR-01，再把已有规格接进工作流，不改生产代码",
    html=(
        chapter_map(2)
        + '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px" data-reveal="1">'
        '<div class="p-box" data-role="ctx" style="padding:14px 18px">'
        '<div class="p-head"><h3>6.1 已完成</h3><span class="p-tag" data-role="ctx">只读摸底</span></div>'
        '<p>立住不覆盖 <code>docs/specs/</code> 的边界，留下代码库调查文档</p></div>'
        '<div class="p-join"><span>6.2 建流</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="tool" style="padding:14px 18px">'
        '<div class="p-head"><h3>指向 CR-01 建工作流</h3><span class="p-tag" data-role="tool">只排计划</span></div>'
        '<p>追加规则与四个案例，导入规格并确定零新增依赖验证矩阵</p></div></div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:12px">本节问题：怎样在当前仓库把 GSD 工作流建起来？先定清靶子 CR-01，再动手建流</div>'
    ),
    steps=["本章位置", "从摸底到建流", "本节问题"],
)

scene(
    id="p12", segment="本章目标",
    label="CR-01 到底改的是什么，不改什么",
    title="CR-01 到底改什么，不改什么？",
    lead="本章目标仍是 CR-01：不动底层比较算法，只在输入变非法、界面仍保留上次有效结果时，给用户补一句明确可见的提示。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;gap:18px;align-items:stretch">'
        '<div class="p-page" data-reveal="0">'
        '<div class="p-page-bar"><i></i><i></i><i></i>第 5 章原规则 · After 改为非法 {</div>'
        '<div style="padding:14px 16px;display:grid;gap:10px">'
        '<div style="padding:6px 10px;background:#FCE6DD;border-left:4px solid #D9481C;font-size:18px;color:#A8350F">After 输入错误：JSON 语法无效</div>'
        '<div style="padding:12px;border:1.5px dashed #B9B3A6;border-radius:6px;background:#F9F7F1;font-size:19px">'
        '<b>结果图：</b>保留上次有效比较（<code>n: 1 → 2</code> · 1 处 changed）<br>'
        '<span style="color:#5B6573;font-size:17px">结果区静默无提示，容易误认成当前输入的新结果</span></div></div></div>'
        '<div class="p-join" data-reveal="1"><span>CR-01</span><i class="p-arrow"></i></div>'
        '<div class="p-page" data-reveal="1">'
        '<div class="p-page-bar"><i></i><i></i><i></i>CR-01 新增规则 · 明确告知旧结果</div>'
        '<div style="padding:14px 16px;display:grid;gap:10px">'
        '<div style="padding:6px 10px;background:#FCE6DD;border-left:4px solid #D9481C;font-size:18px;color:#A8350F">After 输入错误：JSON 语法无效</div>'
        '<div style="padding:7px 12px;background:#FFF1BF;border:2px solid #243042;border-radius:6px;font-size:18px;font-weight:700;color:#243042">上次有效结果（当前输入无效）</div>'
        '<div style="padding:10px 12px;border:1.5px solid #15803D;border-radius:6px;background:#E3F2E6;font-size:18px;color:#11652F">'
        '保留原图与差异摘要；两侧恢复有效后移除提示并更新</div></div></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">非目标锁死：不改差异算法、四种状态、计数、筛选与上限；不加历史列表、自动保存或上传</div>'
    ),
    steps=["第 5 章原规则的静默区", "CR-01 新增可见提示", "非目标锁死"],
)

scene(
    id="p13", segment="本章目标",
    label="怎样才算这条规则被说清楚了",
    title="怎样才算把这条规则说清楚了？",
    lead="沿用大纲里的四个固定验收案例，全部落在用户看得见的行为与提示显隐上；规格追加进原五层文档，不把新规则说成第五章的旧缺陷。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:138px minmax(0,1.08fr) minmax(0,1.25fr)" data-reveal="0">'
        '<div class="is-head"><span>验收编号</span><span>输入与连续动作</span><span>用户可见期望</span></div>'
        '<div><span><code>AC-CR01-1</code></span><span>比较成功后，把 After 改为 <code>{</code></span><span>保留 <code>n</code> 的 changed 与原摘要；<b>显示旧结果提示</b>与 After 错误</span></div>'
        '<div><span><code>AC-CR01-2</code></span><span>把 Before 也改为 <code>{</code>，再只恢复 After</span><span>双错分别标明；仅恢复一侧后仍标 Before 错，<b>旧结果提示不消失</b></span></div>'
        '<div><span><code>AC-CR01-3</code></span><span>接着把 Before 恢复为 <code>{"n":2}</code></span><span>两侧有效并完成比较，<b>移除旧结果提示</b>，摘要更新为零差异</span></div>'
        '<div class="is-key"><span><code>AC-CR01-4</code></span><span>全新页面尚未成功比较，直接输入非法 JSON</span><span>只显示错误或空状态，<b>绝不声称存在上次有效结果</b></span></div>'
        '</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:10px;font-size:20px">四条期望全写在<b>用户可见行为</b>上，不绑死私有状态字段或 CSS 类名</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:8px;font-size:20px">在原 <code>SPEC.md</code> / <code>ACCEPTANCE.md</code> 上追加，不追溯成旧缺陷；若已有等价提示只先记下检查点</div>'
    ),
    steps=["四个固定验收案例", "期望落在可见行为", "追加规格，不追溯旧缺陷"],
)

scene(
    id="p14", segment="当前仓库",
    label="「当前仓库」指的是哪一份工作，建流前要核对什么",
    title="「当前仓库」指哪份，建流前查什么？",
    lead="所谓当前仓库，不是课件仓库，而是学员自己的 JSON Crack 课程副本。建流前逐项核对真实检查点，缺哪项就当场记下。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:24px;align-items:start">'
        '<ul class="p-tree" data-reveal="0" style="font-size:19px">'
        '<li class="is-dim"><span class="p-path">prompt-to-harness/</span><span class="p-note">课件仓库（不是操作对象）</span></li>'
        '<li class="is-open"><span class="p-path">jsoncrack.com/</span><span class="p-note">本地课程副本</span>'
        '<ul>'
        '<li class="is-target"><span class="p-path">docs/specs/</span><span class="p-note">权威五层规格</span></li>'
        '<li class="is-allow"><span class="p-path">packages/ · apps/www/</span><span class="p-note">第 5 章实现</span></li>'
        '<li><span class="p-path">.planning/</span><span class="p-note">GSD 工作区</span></li>'
        '</ul></li></ul>'
        '<ol class="p-notes">'
        '<li class="is-ok" data-reveal="1"><span><b>本地实现检查点可定位</b><small>通过第 5 章验收的提交与干净工作区</small></span></li>'
        '<li class="is-ok" data-reveal="1"><span><b>五层规格仍是唯一依据</b><small><code>docs/specs/</code> 未被初始化改写</small></span></li>'
        '<li data-reveal="1"><span><b>原验收状态与已知缺口清楚</b><small>哪些案例已核对、哪些待补自动检查</small></span></li>'
        '<li class="is-risk" data-reveal="2"><span><b>只认现场事实，不预写数字</b><small>缺哪一项就如实登记，不拿假设充当交接</small></span></li>'
        '</ol></div>'
    ),
    steps=["认准 JSON Crack 课程副本", "核对建流前检查点", "缺项如实登记"],
)

scene(
    id="p15", segment="怎样建流",
    label="怎样把已有规格接进工作流，而不另起一套规划",
    title="已有规格怎样单向接进工作流？",
    lead="通过 ingest-docs、discuss-phase 与 plan-phase 把 docs/specs/ 接入 .planning/：权威需求留在原处，计划压缩为不超过三个串行任务，本节不改生产代码。",
    html=redrawn(
        "gsd-workflow",
        "gsd-specs-handoff",
        style="course",
        max_height=308,
        source="课程自绘：对应大纲 6.2 将已有 docs/specs/ 接入 GSD .planning/ 的单向依赖与三任务上限约定",
    ),
    steps=["左：权威规格只追加", "中：GSD 建流三步与禁令", "右：进度区与三个串行任务"],
    refs=[
        ref("GSD Core v1.13.0 固定源码", f"{GSD_REPO}/tree/{GSD_SHA}", "框架源码"),
    ],
)

scene(
    id="p15a", segment="怎样建流", layout="evidence-scene",
    label="不往仓库装新包，靠什么跑自动验证",
    title="不往仓库装新包，靠什么跑自动验证？",
    lead="衔接第 5 章不在上游仓库预装第三方测试框架的基线，采用零新增依赖方案：用 Node.js 24+ 内置的 node:test 与 node:assert 编写自动断言，不污染 pnpm-lock.yaml。",
    html=shot(
        "external/nodejs-builtin-test-runner.png",
        "nodejs.org · Node.js Documentation · Test runner (node:test)",
        "Node.js 官方文档内置 node:test 测试运行器与同步断言示例截图",
        height=340,
        note="零新增依赖分流：逻辑/状态契约走 node:test · 恢复路径走浏览器回归 · 视觉可读性归人工观察",
        reveal=0,
        note_reveal=1,
    ),
    steps=["看 Node.js 内置测试运行器", "零新增依赖四层分流"],
    refs=[
        ref("Node.js 官方文档：node:test", "https://nodejs.org/api/test.html", "官方依据"),
    ],
)

pending(
    "p16", "怎样建流",
    "当前规格对得上吗？建流请求该怎么发出？",
    "待备课实跑后再写；不预写请求原文实例或 Agent 回答",
)

pending(
    "p17", "怎样建流",
    "怎样判断这条工作流真的指向 CR-01？",
    "待备课实跑后再写；不预写本次映射表、任务名或截图",
)

scene(
    id="p18", segment="判断与自检",
    label="工作流已经跑起来了，本章目标是不是就完成了",
    title="工作流跑起来了，目标就算完成了吗？",
    lead="GSD 工作流和计划生成完毕后，请先对照三道关卡判断本章目标是否已经完成。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 18px">'
        '<div class="p-head"><h3 style="font-size:24px">学员判断：计划和映射都生成好了，CR-01 是不是就算做完了？</h3><span class="p-tag" data-role="us">先想一步</span></div></div>'
        '<div class="p-flow" style="--n:3;column-gap:40px;margin-top:12px" data-reveal="1">'
        '<div class="p-node" data-role="ok"><span class="p-num">6.2 · 本节完成</span><h3>工作流与计划就位</h3><p>CR-01 已追加，验证矩阵已排好</p></div>'
        '<div class="p-node" data-role="gate"><span class="p-num">6.3 · 还没核对</span><h3>流程本身合不合格</h3><p>停止条件与验证去向待人工验收</p></div>'
        '<div class="p-node" data-role="ctx" style="opacity:.7"><span class="p-num">6.4 · 还没实施</span><h3>提示行为做没做对</h3><p>待跑失败测试、最小修改与 UAT</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px"><b>还没有</b>：建好工作流只是排好路线；6.3 先验流程，6.4 再用红绿测试与人工 UAT 证明结果</div>'
    ),
    steps=["先做判断", "对照三道关卡", "建好流不等于做完变更"],
)

scene(
    id="p19", segment="判断与自检",
    label="导入后框架生成了一份新的产品需求，哪种做法对",
    title="导入后多出一份新产品需求，怎么选？",
    lead="导入规格后，如果框架在工作区生成了一份新的产品需求文档，请先暂停判断下面两种做法哪一种正确。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先比较两种做法，自己选定再往下看</span>'
        '<div class="p-quiz" style="margin-top:12px">'
        '<div class="p-q" data-role="gate">'
        '<div class="p-say">做法 A：用新生成的产品需求替换原来的五层规格，后面直接按新需求规划</div>'
        '<span class="p-stamp" data-role="gate" data-reveal="1">✗ 偷换依据</span>'
        '<div style="margin-top:8px;font-size:19px;color:#A8350F" data-reveal="1">另起一套无关联的 GSD 需求，会让非目标、节点上限和错误恢复约束悄悄脱钩</div></div>'
        '<div class="p-q" data-role="ok">'
        '<div class="p-say">做法 B：把它当作待核对材料，仍以 <code>docs/specs/</code> 为需求依据，只追加批准的 CR-01</div>'
        '<span class="p-stamp" data-role="ok" data-reveal="2">✓ 单向接入</span>'
        '<div style="margin-top:8px;font-size:19px;color:#11652F" data-reveal="2">权威需求留在 <code>docs/specs/</code>，框架工作区只承载映射与进度</div></div></div>'
    ),
    steps=["暂停比较两种做法", "做法 A：偷换依据", "做法 B：单向接入"],
)

scene(
    id="p20", segment="小结",
    label="带着什么进入 6.3", title="带着什么进入 6.3？",
    lead="本节还没有修改生产代码。收住 6.2 留下的规格变更、零新增依赖验证矩阵和计划初稿，进入 6.3 验收这条流程。",
    html=(
        '<div class="p-sketch">'
        '<div class="p-ribbon" data-reveal="0">6.2 小结 · 靶子写进规格，进度交给工作流</div>'
        '<div data-reveal="0"><h3 style="text-align:center">一个核心判断</h3>'
        '<div class="p-star" style="width:220px;font-size:22px">工作流跑起来<br>只是排好路线<br>还不等于做完</div></div>'
        '<div data-reveal="1"><h3>本节留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass" style="font-size:21px">追加进原规格的 CR-01 与四案例</li>'
        '<li class="is-pass" style="font-size:21px">零新增依赖验证分流矩阵</li>'
        '<li class="is-pass" style="font-size:21px">≤ 3 个串行任务计划（未改生产码）</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>6.3 验收流程</h3>'
        '<p>先别急着写代码：怎样判断这条 GSD 流程符合预期？</p></div></div>'
        '</div>'
    ),
    steps=["一个核心判断", "本节留下的", "下一节 6.3"],
)

lesson.write()
