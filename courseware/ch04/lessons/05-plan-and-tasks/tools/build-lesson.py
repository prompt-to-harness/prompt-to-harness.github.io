#!/usr/bin/env python3
"""4.5 都定清楚了，为什么不一次写完：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
实跑请求保存在分镜；页面展示组织请求的要素、审查观察点和一次备课实跑说明。不预写 Agent 回复。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, pop, repro  # noqa: E402

lesson = Lesson(
    __file__, "4.5", "都定清楚了，为什么不一次写完",
    summary="比较两种改法并写下计划，按依赖拆成可检查的任务，留下 Plan、Tasks 和完整追踪，提交规格基线，交给第 5 章。",
)
scene = lesson.scene

TASKS = [
    ("差异模型", "对应关系、状态与计数", "固定输入与期望，先验证纯逻辑"),
    ("合并图映射", "映射到现有图，保留 removed 与必要祖先", "图数据能表达既定状态和筛选上下文"),
    ("双输入与错误状态", "Before/After、单侧错误、上次有效结果", "正常比较、错误及恢复路径"),
    ("摘要、筛选与验收", "摘要、只看变化、非纯颜色、整体验收", "当前验收项，并回归单输入路径"),
]


# ---------- 开篇 ----------
scene(
    id="p49", segment="开篇", layout="lesson-cover",
    label="都定清楚了，为什么不一次写完", title="为什么不一次写完？",
    lead="上一节留下了已经审过的 Spec、Acceptance，以及固定素材。这一节写下 Plan 和 Tasks，并提交规格基线",
    html=(
        chapter_map(5)
        + '<div style="margin-top:26px">' + anchor(lit=("Plan",), done=("Brief", "Spec", "Acceptance"), mini=True, reveal=1) + '</div>'
        + '<div class="p-bar is-light" data-reveal="2" style="margin-top:18px">手里有：<b>自己的 SPEC.md、ACCEPTANCE.md</b>，以及 <code>docs/specs/fixtures/</code> 里的固定素材</div>'
    ),
    steps=["本章位置", "这一节补哪一层", "从自己的规格和验收开始"],
)


# ---------- 为什么还要写计划 ----------
scene(
    id="p50", segment="为什么还要写计划",
    label="为什么不能拼成一个长请求", title="为什么不能拼成一个长请求？",
    lead="不是不能发请求，而是单靠一个很长的请求不够稳。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 20px">'
        '<span class="p-tag" data-role="us">一种做法</span>'
        '<h3 style="font-size:24px;margin:8px 0 0">把规则和案例拼成一个长请求，一次把实现做完</h3></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 20px;margin-top:16px">'
        '<span class="p-tag" data-role="ctx">可能出现的情况</span>'
        '<h3 style="font-size:24px;margin:8px 0 0">任务一长，上下文可能被压缩</h3>'
        '<p>写在请求里的约束有可能丢失或被冲淡；后面的行为会不稳定，事后也不容易检查</p></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">实现不是把规则再抄一遍。还要看清<b>改哪里、怎样验证、怎样留下检查点</b>。以已经写进 Brief 的仓库事实为起点，不重复走一遍从输入到渲染的链路</div>'
    ),
    steps=["一个长请求", "约束可能被冲淡", "还要看清改哪里"],
)

scene(
    id="p51", segment="为什么还要写计划",
    label="两种改法，该怎么选", title="两种改法，该怎么选？",
    lead="先比较两种改法，再写下计划。没有源码依据，就不要把路径和命令写进计划。",
    html=(
        '<style>'
        '#p51 .scene-content{gap:8px}'
        '#p51 .p-grid{gap:12px}'
        '#p51 .p-grid .p-box{padding:10px 16px}'
        '#p51 .p-tag{margin-bottom:6px;padding:4px 10px}'
        '#p51 .p-bar{padding:8px 18px;font-size:21px}'
        '</style>'
        '<div class="p-grid" style="--n:2">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">改法一</span>'
        '<h3 style="font-size:22px;margin:6px 0 0">在界面里直接比较，并生成展示</h3>'
        '<p style="margin:4px 0 0">计算和展示绑在一起</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">改法二</span>'
        '<h3 style="font-size:22px;margin:6px 0 0">先形成差异模型，再映射到现有图</h3>'
        '<p style="margin:4px 0 0">计算和展示分开</p></div></div>'
        '<div class="p-box is-soft" data-role="us" data-reveal="1" style="padding:8px 16px">'
        '<span class="p-tag" data-role="us">对照之后</span>'
        '<h3 style="font-size:21px;margin:6px 0 0">课程倾向分开：先核对「算得对不对」，再接到现有图上</h3>'
        '<p style="margin:4px 0 0">对照会改哪里、怎样验证、会不会缠在一起。这是有依据之后的选择，不是一开始就只能这样写</p></div>'
        '<div class="p-bar" data-reveal="2">Plan 记录方案、取舍、影响范围、风险和回退。只换适配位置就更新 Plan 和任务；要改已批准的行为则回到 Spec；未决行为不要写成实现决定</div>'
    ),
    steps=["两种改法", "课程倾向", "Plan 写什么"],
)


# ---------- 拆成可检查的任务 ----------
scene(
    id="p52", segment="拆成可检查的任务",
    label="怎样拆成可检查的任务", title="怎样把方案拆成可检查的任务？",
    lead="方案有了边界，再按依赖拆开，写进 TASKS.md。正式编号等实际文件确定后再写。",
    html=(
        '<style>'
        '#p52 .p-stairs{--rise:0;column-gap:8px}'
        '#p52 .p-stairs .p-box{padding:4px 8px}'
        '#p52 .p-stairs h3{font-size:16px!important}'
        '#p52 .p-stairs p{font-size:12px!important;margin:0!important}'
        '#p52 .p-matrix span{padding:3px 8px;font-size:17px;line-height:1.25}'
        '</style>'
        '<div data-reveal="0">' + anchor(lit=("Tasks",), done=("Brief", "Spec", "Acceptance", "Plan"), mini=True) + '</div>'
        '<div class="p-matrix" style="grid-template-columns:minmax(190px,auto) minmax(0,1.15fr) minmax(0,1fr);margin-top:8px" data-reveal="1">'
        '<div class="is-head"><span>任务</span><span>实施范围</span><span>主要验证</span></div>'
        + "".join(f'<div><span style="font-weight:700">{n}</span><span>{s}</span><span>{v}</span></div>' for n, s, v in TASKS)
        + '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:8px;margin-bottom:8px">后一项承接前一项已确认的结果；每项写清输入、范围、依赖、对应需求和案例、验证与完成定义。编辑器扩展、其他数据格式不纳入这次的任务</div>'
    ),
    steps=["点亮 Tasks", "范围和验证", "依赖与写法"],
)

scene(
    id="p53", segment="拆成可检查的任务",
    label="一条规则怎样走到任务", title="一条规则怎样走到任务？",
    lead="用同一条「忽略对象键顺序」走一遍，看需求、验收和任务怎样对上。",
    html=(
        '<style>'
        '#p53 .p53-flow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;align-items:stretch}'
        '#p53 .p53-flow .p-box{padding:12px 14px}'
        '#p53 .p53-flow h3{font-size:20px;margin:8px 0 0;line-height:1.4}'
        '@media(max-width:760px){body[data-mode="scroll"] #p53 .p53-flow{grid-template-columns:minmax(0,1fr)!important}}'
        '</style>'
        '<div class="p-bar is-light" data-reveal="0">规则：忽略对象键顺序</div>'
        '<div class="p53-flow" style="margin-top:14px">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">1</span>'
        '<h3>Spec 写规则</h3></div>'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">2</span>'
        '<h3>Acceptance 固定换序样例和零差异</h3></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">3</span>'
        '<h3>差异模型任务引用它</h3></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">4</span>'
        '<h3>整体验收再确认界面</h3></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">完整对应关系集中写在 <code>TASKS.md</code>。用编号指向规则和案例正文，不靠到处复制。各人的编号可能不同，判断依据是自己已经批准的内容和对应关系</div>'
    ),
    steps=["Spec 到 Acceptance", "再走到任务和验收", "对应关系写在 TASKS.md"],
)

scene(
    id="p54", segment="拆成可检查的任务",
    label="模型案例通过了就算完成吗", title="模型案例通过了，能不能标记整个功能完成？",
    lead="请先判断，再看参考结论。这是本节的学员判断。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:16px 20px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:26px;margin:10px 0 0">差异模型的几个案例通过了，能不能把 JSON Diff 整个功能标记完成？</h3></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:16px">不能。这只支持当前<b>模型任务</b>的相应结论</div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="2" style="padding:12px 18px;margin-top:14px">'
        '<span class="p-tag" data-role="ctx">还要继续</span>'
        '<p style="font-size:20px;margin:8px 0 0">图映射、界面接入、错误恢复和整体验收，还有各自的任务和验证</p></div>'
    ),
    steps=["先判断", "不能只算模型完成", "其余任务还要验证"],
)


# ---------- 起草与审查 ----------
scene(
    id="p55", segment="起草与审查",
    label="让 Agent 起草计划和任务", title="怎样让 Agent 起草计划和任务？",
    lead="结合自己已经审过的 Spec、Acceptance，以及 Brief 里已核实的仓库事实来组织请求。先核对该实施的影响面，再比较两种改法，然后起草 Plan 和 Tasks，并补全对应关系。",
    html=(
        '<style>'
        '#p55 .scene-content{gap:6px}'
        '#p55 .p-pair .p-box{padding:8px 14px}'
        '#p55 .p-tag{margin-bottom:4px;padding:3px 8px}'
        '#p55 .p-pair h3{font-size:20px;margin:6px 0 0}'
        '#p55 .p-pair p{margin:4px 0 0;line-height:1.35}'
        '#p55 .p-bar{padding:6px 14px;font-size:19px;line-height:1.35}'
        '#p55 .p-box.is-soft p{font-size:18px;line-height:1.4;margin:6px 0 0}'
        '</style>'
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:12px">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">依据与产出</span>'
        '<h3>已审过的 <code>SPEC.md</code>、<code>ACCEPTANCE.md</code></h3>'
        '<p>以及 Brief 里已核实的仓库事实。请起草 <code>PLAN.md</code> 和 <code>TASKS.md</code>，并补全对应关系；不要再走一遍从输入到渲染的导览</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">先核对，再选择</span>'
        '<h3>先核对该实施的影响面</h3>'
        '<p>再比较两种改法并说明取舍，不要预先认定只能选哪一种。没有源码依据，就不要把路径和命令写进计划</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:8px;margin-bottom:0">只写规格资产，<b>不改生产代码</b>；不要改已经审过的 Brief、Spec、Acceptance 和固定素材。未决行为交给人，尤其是 <code>null</code> 与字段缺失。编辑器扩展和其他数据格式不纳入这次的任务</div>'
        '<div class="p-box is-soft" data-role="us" data-reveal="3" style="padding:8px 14px;margin-top:8px;margin-bottom:8px">'
        '<span class="p-tag" data-role="us">表达示例 · 按实际情况调整</span>'
        '<p>“请先阅读已经审过的 Spec、Acceptance，以及 Brief 里已核实的仓库事实。先核对该实施的影响面，再比较两种改法并说明取舍，然后起草 PLAN.md 和 TASKS.md，补全对应关系。只写规格，不改生产代码。”</p></div>'
    ),
    steps=["依据与产出", "先核对，再选择", "范围与未决事项", "按实际组织请求"],
    repro=repro([
        ("在基线副本根目录发送，保留已有的 docs/specs/（不要清空）。打开已审过的 Spec、Acceptance，以及 Brief 里已核实的仓库事实，组织起草请求。", None),
        ("先核对该实施的影响面，再比较两种改法，然后起草 PLAN.md 和 TASKS.md，并补全对应关系。只写规格，不改生产代码，也不要改已经审过的 Brief、Spec、Acceptance 和固定素材。", None),
        ("打开得到的 PLAN.md 和 TASKS.md，按下一页的观察点抽查。", None),
    ], note="请求措辞和编号会因自己的文档不同而变化；未决行为仍需人决定。", label="跟做：起草计划和任务"),
)

scene(
    id="p56", segment="起草与审查",
    label="计划和任务审什么", title="计划和任务审什么？提交什么？",
    lead="打开 Agent 生成的 PLAN.md 和 TASKS.md，对照自己的 Spec、Acceptance 和已核实的仓库事实来抽查。打开实际文件核对，不要只看「已完成」。确认之后，只把规格和素材作为基线提交，不改生产代码。",
    html=(
        '<style>@media(max-width:760px){body[data-mode="scroll"] #p56 .p-watch{'
        'grid-template-columns:minmax(0,1fr)!important}'
        'body[data-mode="scroll"] #p56 .p-watch li{display:grid;grid-template-columns:36px minmax(0,1fr);gap:4px 12px}'
        'body[data-mode="scroll"] #p56 .p-watch li small{grid-column:2}'
        'body[data-mode="scroll"] #p56 .review-actions .p-bar{min-width:0!important}}</style>'
        '<ol class="p-watch" style="gap:14px">'
        '<li data-reveal="0">抽查方案<small>取舍和影响范围是否说清；路径和命令有没有源码依据</small></li>'
        '<li data-reveal="1">抽查任务<small>四项任务的依赖、验证和完成标准是否足以检查；后一项承接前一项已确认的结果</small></li>'
        '<li data-reveal="2">抽查对应关系<small>一条已批准需求能否走到案例和任务，例如「忽略对象键顺序」；未决行为列出来交给人</small></li></ol>'
        '<div class="review-actions" data-reveal="3" style="display:flex;align-items:center;gap:16px;margin-top:16px;flex-wrap:wrap">'
        '<div class="p-bar is-light" style="flex:1;min-width:360px;margin:0">审完看 <b>git status</b>：新增和修改只在 docs/specs/；确认后由人提交规格基线，本节不实现 JSON Diff</div>'
        + pop("一次实跑：这次没有要改的地方", "示例：备课实跑",
              '<p style="margin:0">2026-11-10 备课实跑。打开 <code>PLAN.md</code> 和 <code>TASKS.md</code> 抽查后，没有要改的地方，就进入提交。每次生成的编号和内容可能不同</p>')
        + '</div>'
    ),
    steps=["抽查方案", "抽查任务", "抽查对应关系", "检查工作区并提交"],
    repro=repro([
        ("打开自己的 PLAN.md 和 TASKS.md，先抽查所选方案的取舍、影响范围，以及路径和命令有没有源码依据。", None),
        ("再抽查四项任务的依赖、验证和完成标准，并抽一条已批准需求，看能不能走到对应的案例和任务。", None),
        ("审出问题时，指出实际内容和依据，请 Agent 修改后再回看。没有问题时继续核对，不必编造修改。审完运行 git status，确认后由人提交规格基线，不要让 Agent 先提交。", "git status --short --untracked-files=all"),
    ], note="实际问题和编号可能不同；这次备课实跑没有要改的地方，就直接进入提交。本节提交只含规格和素材，不改生产代码。", label="跟做：审查并提交规格基线"),
)


# ---------- 自检与交接 ----------
scene(
    id="p57", segment="自检与交接",
    label="哪段能当实施计划", title="这两段文字，哪段能当实施计划？",
    lead="能检查、能留下检查点的，才是计划。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>“把 JSON Diff 全部实现完，对照验收就行。”</h3>'
        '<div data-reveal="1"><p>不能当。没写清怎么改、改哪里、怎样分段验证</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        '<h3>“先做差异模型，再映射到现有图；四项任务按依赖验证：模型对固定输入算出既定差异；映射保留 removed 与必要祖先；双输入能处理单侧错误并保留上次有效结果；摘要、筛选和原有单输入路径通过整体验收。”</h3>'
        '<div data-reveal="2"><p>能当。方案、影响范围、有边界的任务和验证都写清了，可以检查，也可以留下检查点<br><a href="#p51">回看两种改法</a> · <a href="#p52">回看怎样拆任务</a></p></div></div></div>'
        '</div>'
        '<p class="source-note">教学对照文字，不是某一份实际计划</p>'
    ),
    steps=["两段文字", "第一段", "第二段"],
)

scene(
    id="p58", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="未决规则仍由人决定。规格基线已经提交，生产代码保持不变，交给第 5 章按任务实现。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3><div class="p-star" style="width:280px;font-size:22px">仍用 Prompt 发起<br>依据是可查阅、<br>按版本维护的约定</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">PLAN.md</li>'
        '<li class="is-pass">TASKS.md</li>'
        '<li class="is-pass">需求、验收与任务的完整对应关系</li>'
        '<li class="is-pass">规格基线已提交</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一章</h3><div class="p-box" data-role="us">'
        '<h3>第 5 章按任务实现</h3><p>未决规则仍由人决定；生产代码保持不变</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "交给第 5 章"],
)

lesson.write()
