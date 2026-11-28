#!/usr/bin/env python3
"""4.5 都定清楚了，为什么不一次写完：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与第 4 章视觉组件见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
实跑请求保存在分镜；页面展示组织请求的要素、审查观察点和一次备课实跑说明，不预写 Agent 回复。
"""
import sys
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import (  # noqa: E402
    Lesson,
    cover_handoff,
    layer_strip,
    pop,
    quiz_cards,
    repro,
    review_board,
    sketch_recap,
    spec_delegation,
)

lesson = Lesson(
    __file__,
    "4.5",
    "都定清楚了，为什么不一次写完",
    summary="比较两种改法并写下计划，按依赖拆成可检查的任务，留下 Plan、Tasks 和完整追踪，提交规格基线，交给第 5 章。",
)
scene = lesson.scene

TASKS = [
    ("us", "TASK-01", "差异模型", "按路径对齐，算状态、计数与派生标记", "固定素材核对纯逻辑"),
    ("ctx", "TASK-02", "合并图映射", "映射到现有图，保留 removed 与必要祖先", "图数据表达状态与筛选上下文"),
    ("tool", "TASK-03", "双输入与错误", "Before/After、单侧错误、上次有效结果", "正常比较、报错与恢复路径"),
    ("ok", "TASK-04", "摘要筛选验收", "摘要、只看变化、非纯颜色、整体验收", "当前验收项 + 单输入回归"),
]

PROMPT_P55_TEACHER = """请先阅读已经审过的 docs/specs/SPEC.md（32 条 Approved：REQ-001~REQ-031 与 REQ-038）、docs/specs/ACCEPTANCE.md（23 条验收案例 AC-01~AC-23）、docs/specs/fixtures/README.md，以及 docs/specs/BRIEF.md 里「已核实约束」中的仓库事实。不要再重复走一遍从输入到渲染的源码导览。

请先针对这次实施做一轮很薄的影响面核对：这次方案会改到哪些具体位置、入口落在哪里（同时守住 REQ-038 不破坏现有单份 JSON 查看链路）、用什么命令和方式验证。没有源码依据，就不要把文件路径和命令写进计划。

然后比较两种改法：一种是在界面里直接比较两份 JSON 并生成展示；另一种是先形成独立的差异模型，再映射到现有图数据。请根据刚才核对到的依据做出选择，说明取舍，不要在没有依据时预先认定只能选哪一种。

在此之后，起草 docs/specs/PLAN.md 和 docs/specs/TASKS.md，并补全已批准需求、验收案例与任务的完整对应关系。

这一步只新建 docs/specs/PLAN.md 和 docs/specs/TASKS.md，不要修改生产代码，不要修改 BRIEF.md、SPEC.md、ACCEPTANCE.md 和 docs/specs/fixtures/，也不要执行 git commit。

要求：
1. PLAN.md 写清所选方案、取舍原因、影响范围（附源码依据）、验证入口、风险和回退安排，以及入口改造落点（回应 SPEC §13 OQ-10 留给 Plan 的部分）。只换适配位置就更新 Plan 和相关任务即可；不要在计划里改变已经批准的产品行为。
2. 按依赖把实施拆成 4 项可检查的任务，写进 TASKS.md（正式编号可按 TASK-01~TASK-04）：
   - 差异模型（含键序忽略、数组按索引、类型变化、REQ-003 的 null 规则、直接状态、派生标记与计数，用固定素材核对纯逻辑）；
   - 合并图映射（将差异模型映射到现有图数据，保留 removed 节点与必要祖先，并按 2000 上限含 removed 节点核对超限）；
   - 双输入与错误状态（接入 Before / After 两侧输入、单侧出错指明哪一侧、保留上次有效结果、首次即错空状态与本地处理验证）；
   - 摘要、筛选与整体验收（接入差异摘要、「只看变化」、非纯颜色文字或符号、360px 窄屏，完成当前整体验收并回归 REQ-038 / AC-23 原有单输入路径）。
   后一项承接前一项已确认的结果。每项任务写清：输入、允许改动范围、依赖、对应的 REQ-* 与 AC-*（引用实际编号）、验证方法与完成标准。
3. 完整的 REQ-* ↔ AC-* ↔ TASK-* 对应追踪表集中写在 TASKS.md，确保全部 32 条 Approved 需求与 23 条 AC 都有落点，尤其把「忽略对象键顺序」（REQ-001 → AC-02 → c02-key-order）从规则一路串通到相关任务。各文档用编号引用，不靠复制大段正文保持一致。
4. 尚未决定的 6 条 Draft（REQ-032~REQ-037，如 1 与 1.0 数值字面量、浏览器本地存储、节点点击详情、独立差异清单、摘要扩展内容、大输入验收规模）在文档中单独列出交给我决定，不要写成实现决定；5 条 Deferred（REQ-039~REQ-043，VS Code 插件、其他数据格式、写回导出分享、元素对齐与移动检测、字段顺序敏感场景）与浏览器扩展不纳入本次任务。
5. 写完后检查追踪表一致性，并运行 git status --short --untracked-files=all 给我看。"""

PROMPT_P56_REVISE = """请按以下 3 条审查意见修改 docs/specs/PLAN.md 和 docs/specs/TASKS.md，只改这两个文件，不要修改生产代码，不要修改 BRIEF.md、SPEC.md、ACCEPTANCE.md 和 docs/specs/fixtures/，也不要执行 git commit：
1. 修正 REQ-032 写串笔误：docs/specs/TASKS.md 第 85 行（TASK-01 完成标准）写成“键序忽略的判定集中在一个可单独替换的函数里（因为 REQ-032 仍是 Draft，见 §5）”，把已批准的 REQ-001（键序忽略）和未决定的 REQ-032（1 与 1.0 数值字面量）写串了；第 372 行（§7.3）也顺带把 REQ-001 写成了“落到单个可替换函数”。请修正这两处：REQ-001 是已批准规则，按 SPEC 执行即可；需要留出可替换判定点的是 REQ-032（数值字面量比较）。
2. 不要替 REQ-032 预设“字面量不同算变化”的实现决定：docs/specs/PLAN.md 第 157 行（风险 R-5）和 docs/specs/TASKS.md 第 273 行（§5 REQ-032）都写了“临时默认按字面量不同即算变化”。请删去这一预设：REQ-032 尚未决定，且标准 JSON 解析中 1 与 1.0 本就是数值相等，不要在本轮强行按字面量拆成变化；改为注明“在 TASK-01 留出数值比较的单一判定点，待需求负责人决定后再补对应行为与验收，本轮不写死 1 与 1.0 的字面量断言”。
3. 收清 TASK-02 上限参数的跨包口径：docs/specs/TASKS.md 第 145 行（TASK-02 完成标准）写“上限数值取自 apps/www/src/constants/graph.ts:6 的同一个 SUPPORTED_LIMIT”，但 TASK-02 位于共享包 packages/jsoncrack-react 且禁止改动 apps/**。请改为明确“共享包映射与 DiffGraph 通过参数接收上限数值，不另定硬编码默认值；由 TASK-03 在 apps/www 接入时传入 apps/www/src/constants/graph.ts:6 的 SUPPORTED_LIMIT”。
另外确认 PLAN §3 末尾的待确认项：新页面 /diff 的搜索索引策略保持默认（按 /editor 模式可索引）即可，可注明已确认。
改完后汇总改动点，并运行 git status --short --untracked-files=all 给我看。"""


# ---------- 开篇 ----------
scene(
    id="p49",
    segment="开篇",
    layout="lesson-cover",
    label="都定清楚了，为什么不一次写完",
    title="为什么不一次写完？",
    lead="上一节留下 Spec、Acceptance 和固定素材；本节写 Plan 与 Tasks 并提交基线",
    html=cover_handoff(
        5,
        lit=("Plan",),
        done=("Brief", "Spec", "Acceptance"),
        prev_tag="上一节已就位",
        prev_title="规则、验收与固定素材",
        prev_desc="打开自己的 <code>SPEC.md</code>、<code>ACCEPTANCE.md</code> 与 <code>docs/specs/fixtures/</code>",
        next_tag="本节留下",
        deliverables=[
            "有源码依据的 <code>PLAN.md</code> 与拆好边界的 <code>TASKS.md</code>",
            "集中维护的 <code>REQ ↔ AC ↔ TASK</code> 对应关系",
            "单独提交规格基线，不改生产代码",
        ],
    ),
    steps=["本章位置", "这一节补哪一层", "从自己的规格和验收开始"],
)


# ---------- 为什么写计划 ----------
scene(
    id="p50",
    segment="为什么写计划",
    label="为什么不能拼成一个长请求",
    title="为什么不能拼成一个长请求？",
    lead="不是不能发请求，而是单靠一个很长的请求不够稳：改动面大、约束易被冲淡，事后也不好定位回退",
    html=(
        '<div class="ch4-split">'
        '<div class="p-box" data-role="gate" data-reveal="0" style="padding:14px 18px">'
        '<div class="p-head"><h3>拼成一个长请求</h3><span class="p-tag" data-role="gate">改动面太大</span></div>'
        '<div class="ch4-tangle">'
        "<span>差异计算</span><span>合并图数据</span><span>双输入状态</span><span>筛选与摘要</span>"
        "</div>"
        '<div class="ch4-risk-pill" data-reveal="1">任务一长，上下文可能被压缩——写在请求里的约束容易丢失或冲淡，一处跑偏难以定位检查</div>'
        "</div>"
        '<div class="ch4-arrow" data-reveal="2"><span>改用</span><i>→</i></div>'
        '<div class="p-box" data-role="us" data-reveal="2" style="padding:14px 18px">'
        '<div class="p-head"><h3>先定方案，再拆任务</h3><span class="p-tag" data-role="us">可核对</span></div>'
        '<ol class="ch4-step-list">'
        "<li><span><b>看清改哪里</b>：先核对本次会碰到的入口与影响面</span></li>"
        "<li><span><b>分段验对错</b>：每完成一块，就拿对应验收核对</span></li>"
        "<li><span><b>留下检查点</b>：单次改动范围小，局部不对随时回退</span></li>"
        "</ol></div></div>"
        '<div class="p-bar is-light" data-reveal="2">以 <b>Brief 里已核实的仓库事实</b>为起点，不重复走一遍从输入到渲染的源码导览</div>'
    ),
    steps=["一个长请求", "约束可能被冲淡", "还要看清改哪里"],
)

scene(
    id="p51",
    segment="为什么写计划",
    label="两种改法，该怎么选",
    title="两种改法，该怎么选？",
    lead="结合已有调用关系比较两种改法，再写下计划；没有源码依据，就不要把路径和命令写进计划",
    html=(
        '<div class="ch4-2col" data-reveal="0">'
        '<div class="p-box is-dashed ch4-opt" data-role="gate">'
        '<div class="p-head"><h3>改法一 · 界面里直比直画</h3><span class="p-tag" data-role="gate">算与画绑死</span></div>'
        '<div class="ch4-pipe">'
        '<span class="ch4-pipe-node">Before / After</span><span class="ch4-pipe-arr">→</span>'
        '<span class="ch4-pipe-node is-bad">UI 内直接比较 ＋ 生成图</span></div>'
        '<div class="ch4-opt-meta"><span><b>验证</b> 须起界面</span><span><b>风险</b> 改规则或换展示互相牵连</span></div></div>'
        '<div class="p-box ch4-opt" data-role="tool">'
        '<div class="p-head"><h3>改法二 · 先模型再映射</h3><span class="p-tag" data-role="tool">算与画分开</span></div>'
        '<div class="ch4-pipe">'
        '<span class="ch4-pipe-node">双输入</span><span class="ch4-pipe-arr">→</span>'
        '<span class="ch4-pipe-node is-good">差异模型</span><span class="ch4-pipe-arr">→</span>'
        '<span class="ch4-pipe-node is-good">合并图映射</span><span class="ch4-pipe-arr">→</span>'
        '<span class="ch4-pipe-node">现有图</span></div>'
        '<div class="ch4-opt-meta"><span><b>验证</b> 纯函数先跑素材</span><span><b>隔离</b> 算对逻辑再接图</span></div></div></div>'
        '<div class="p-box is-soft ch4-verdict-box" data-role="us" data-reveal="1">'
        '<span class="p-tag" data-role="us">课程倾向</span>'
        "<p><b>先核对「算得对不对」，再接到现有图上</b>——这是对照源码依据后的选择，路径与命令须有源码依据再进计划</p></div>"
        '<div class="p-bar" data-reveal="2"><code>PLAN.md</code> 记方案、取舍、影响范围、风险与回退：换适配改 <b>Plan</b>；改已批准行为回 <b>Spec</b>；未决细则留给人</div>'
    ),
    steps=["两种改法", "课程倾向", "Plan 写什么"],
)


# ---------- 拆成四项任务 ----------
scene(
    id="p52",
    segment="拆成四项任务",
    label="怎样拆成可检查的任务",
    title="怎样把方案拆成可检查的任务？",
    lead="方案有了边界，再按依赖拆成四项任务写进 TASKS.md；正式编号等实际文件确定后再定",
    html=(
        layer_strip(lit=("Tasks",), done=("Brief", "Spec", "Acceptance", "Plan"), compact=True, reveal=0)
        + '<div class="ch4-task-chain" data-reveal="1">'
        + "".join(
            f'<div class="ch4-task-card" data-role="{role}">'
            f'<div><span class="ch4-task-num">{num}</span><h3>{title}</h3>'
            f'<p class="ch4-task-scope">{scope}</p></div>'
            f'<div class="ch4-task-verify"><b>主要验证：</b>{verify}</div></div>'
            for role, num, title, scope, verify in TASKS
        )
        + "</div>"
        '<div class="p-bar" data-reveal="2">后一项承接前一项结果；每项写清<b>输入、范围、依赖、对应 REQ/AC、验证与完成定义</b>（不纳入扩展）</div>'
    ),
    steps=["点亮 Tasks", "范围和验证", "依赖与写法"],
)

scene(
    id="p53",
    segment="拆成四项任务",
    label="一条规则怎样走到任务",
    title="一条规则怎样走到任务？",
    lead="用同一条「忽略对象键顺序」走一遍，看需求、验收和任务怎样用编号对上",
    html=(
        '<div class="ch4-rule-banner" data-reveal="0">'
        "<span>示例追踪规则：<b>忽略对象键顺序</b></span>"
        '<code>{"a":1,"b":2} ↔ {"b":2,"a":1} → 0 差异</code></div>'
        '<div class="ch4-trace-chain">'
        '<div class="ch4-trace-step" data-role="ctx" data-reveal="0">'
        '<div><div class="ch4-trace-head"><span class="ch4-trace-id">1 · REQ-*</span></div>'
        "<h3>Spec 写规则</h3><p>批准行为：键换序不算差异</p></div>"
        '<span class="ch4-trace-file">SPEC.md</span></div>'
        '<div class="ch4-trace-step" data-role="tool" data-reveal="0">'
        '<div><div class="ch4-trace-head"><span class="ch4-trace-id">2 · AC-*</span></div>'
        "<h3>验收固定样例</h3><p>配换序固定素材与 0 差异期望</p></div>"
        '<span class="ch4-trace-file">ACCEPTANCE.md + fixtures/</span></div>'
        '<div class="ch4-trace-step" data-role="us" data-reveal="1">'
        '<div><div class="ch4-trace-head"><span class="ch4-trace-id">3 · TASK-01</span></div>'
        "<h3>差异模型引用</h3><p>纯逻辑任务引用并跑通样例</p></div>"
        '<span class="ch4-trace-file">TASKS.md · 模型任务</span></div>'
        '<div class="ch4-trace-step" data-role="ok" data-reveal="1">'
        '<div><div class="ch4-trace-head"><span class="ch4-trace-id">4 · TASK-04</span></div>'
        "<h3>整体验收确认</h3><p>界面计数与展示遵守同规则</p></div>"
        '<span class="ch4-trace-file">TASKS.md · 整体验收</span></div></div>'
        '<div class="p-bar" data-reveal="2">完整对应关系集中写在 <b>TASKS.md</b>：各文档按编号指向正文，改规则可直接定位下游案例与任务</div>'
    ),
    steps=["Spec 到 Acceptance", "再走到任务和验收", "对应关系写在 TASKS.md"],
)

scene(
    id="p54",
    segment="拆成四项任务",
    label="模型案例通过了就算完成吗",
    title="模型案例通过了，能不能标记整个功能完成？",
    lead="请先判断，再看参考结论；这是本节的学员判断",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再看参考结论</span>'
        '<div class="ch4-judge-grid">'
        '<div class="p-box ch4-judge-q" data-role="us" data-reveal="0">'
        '<div><span class="p-tag" data-role="us">学员判断</span>'
        "<h3>差异模型的几个案例都通过了，能不能把 JSON Diff 整个功能标记完成？</h3></div>"
        '<div class="ch4-mini-progress">'
        '<span class="ch4-mp-item is-pass">✓ 差异模型</span>'
        '<span class="ch4-mp-item is-wait">○ 合并图映射</span>'
        '<span class="ch4-mp-item is-wait">○ 双输入与错误</span>'
        '<span class="ch4-mp-item is-wait">○ 摘要筛选验收</span></div></div>'
        '<div class="ch4-judge-right">'
        '<div class="p-box ch4-judge-verdict" data-role="gate" data-reveal="1">'
        '<div class="p-head"><h3>✗ 不能标记整个功能完成</h3><span class="p-tag" data-role="gate">结论</span></div>'
        "<p>这只支持当前<b>差异模型任务</b>的结论，不等于整个功能已完成</p></div>"
        '<div class="p-box is-soft ch4-judge-verdict" data-role="ctx" data-reveal="2">'
        '<div class="p-head"><h3>还要继续完成其余三段</h3><span class="p-tag" data-role="ctx">剩余验证</span></div>'
        "<p>合并图映射、双输入与错误恢复、摘要筛选及原有单输入回归，须逐项按各自任务与 AC 核对</p></div>"
        "</div></div>"
    ),
    steps=["先判断", "不能只算模型完成", "其余任务还要验证"],
)


# ---------- 起草与审查 ----------
scene(
    id="p55",
    segment="起草与审查",
    label="让 Agent 起草计划和任务",
    title="怎样让 Agent 起草计划和任务？",
    lead="结合已审过的 Spec、Acceptance 与 Brief 仓库事实组织请求：先核对影响面、再比较两种改法，然后起草 Plan 和 Tasks 并补全追踪",
    html=spec_delegation(
        inputs=[
            ("SPEC.md", "已批准的行为规则"),
            ("ACCEPTANCE.md + fixtures/", "已核算的案例与固定素材"),
            ("BRIEF.md · 已核实约束", "4.2 查实的仓库事实"),
        ],
        inputs_note="不重复走一遍 4.2 的源码导览",
        elements=[
            (1, "ctx", "先核影响", "薄核对本次改动位置、入口与验证方式；无源码依据不写入计划"),
            (1, "goal", "比对改法", "比较界面直比 vs 先模型再映射并说明取舍，不预先锁定结论"),
            (2, "limit", "立住边界", "只写规格资产，<b>不改生产代码</b>，不动已审的 Brief / Spec / Acceptance"),
            (2, "done", "留出未决", "剩余 Draft 细则（如 <code>1</code> 与 <code>1.0</code>）交给人；扩展与其他格式不入任务"),
        ],
        output_title="起草两份文件",
        output_files=[
            ("PLAN.md", "所选方案、取舍、影响范围、风险与回退"),
            ("TASKS.md", "四项有边界任务 ＋ 完整 REQ↔AC↔TASK 追踪表"),
        ],
        pop_title="组织请求表达示例（按自己的文档调整）",
        pop_label="查看组织示例",
        pop_body=(
            '<p style="margin:0 0 8px;font-size:17px">按你自己的文档与编号改写，下面先给简版表达方式，再附课堂演练时教师使用的完整 Prompt 供参考</p>'
            '<div class="p-code"><div class="p-code-head"><span>发给 Agent 的组织参考（简版）</span><span>按实际文档与编号调整</span></div>'
            '<pre style="padding:12px 14px;white-space:pre-wrap;font-size:17px;line-height:1.55">'
            "请先阅读已审过的 docs/specs/SPEC.md、docs/specs/ACCEPTANCE.md，以及 docs/specs/BRIEF.md 里已核实的仓库事实（不要再走一遍从输入到渲染的导览）。\n\n"
            "先针对这次实施做一轮很薄的影响面核对，再比较「界面直接比较」与「独立差异模型再映射」两种改法并说明取舍；没有源码依据，不要把路径和命令写进计划。\n\n"
            "随后起草 docs/specs/PLAN.md 与 docs/specs/TASKS.md，补全已批准需求、验收案例与任务的对应关系（至少把「忽略对象键顺序」串通）。只写规格，不改生产代码，不动既有文档与素材；剩余未决细则列出交给我。写完运行 git status --short --untracked-files=all。</pre></div>"
            '<p style="margin:12px 0 6px;font-size:17px"><b>课堂演练时教师 Prompt（供参考）</b>：按自己的 Spec / Acceptance 编号与实际内容调整，不必逐字照抄</p>'
            '<div class="p-code"><div class="p-code-head"><span>课堂演练时教师 Prompt（供参考）</span></div>'
            '<pre style="padding:12px 14px;white-space:pre-wrap;font-size:15.5px;line-height:1.55">'
            + escape(PROMPT_P55_TEACHER)
            + "</pre></div>"
        ),
        pop_hint="按自己文档组织措辞，点击可看完整表达示例",
    ),
    steps=["依据与产出", "先核对，再选择", "范围与未决事项", "按实际组织请求"],
    repro=repro(
        [
            ("在基线副本根目录发送，保留已有的 docs/specs/（不要清空）。打开已审过的 Spec、Acceptance，以及 Brief 里已核实的仓库事实，组织起草请求。", None),
            ("先核对该实施的影响面，再比较两种改法，然后起草 PLAN.md 和 TASKS.md，并补全对应关系。只写规格，不改生产代码，也不要改已经审过的 Brief、Spec、Acceptance 和固定素材。", None),
            ("打开得到的 PLAN.md 和 TASKS.md，按下一页的观察点抽查。", None),
        ],
        note="请求措辞和编号会因自己的文档不同而变化；剩余未决行为仍需人决定。",
        label="跟做：起草计划和任务",
    ),
)

scene(
    id="p56",
    segment="起草与审查",
    label="计划和任务审什么",
    title="计划和任务审什么？提交什么？",
    lead="打开实际生成的 PLAN.md 和 TASKS.md 对照抽查，不要只看「已完成」；确认后由人单独提交规格基线，不改生产代码",
    html=review_board(
        doc_tag="打开实际文件对照",
        docs=[
            ("docs/specs/PLAN.md", "方案取舍 · 影响范围 · 验证入口 · 风险与回退"),
            ("docs/specs/TASKS.md", "四项任务 · 依赖与验证 · REQ↔AC↔TASK 追踪"),
        ],
        doc_note="不只看对话里的「已完成」，逐项回查实际正文",
        checks=[
            (0, "抽查方案", "取舍和影响范围说清了吗？路径和命令有没有源码依据"),
            (1, "抽查任务", "四项任务的依赖、验证与完成标准足以检查吗？后一项是否承接前一项"),
            (2, "抽查对应关系", "挑一条已批准需求（如忽略键序），看能否走到案例与任务；未决留给人"),
        ],
        footer_bar="审完看 <code>git status</code>：新增与修改只在 <b>docs/specs/</b>；确认后<b>由人提交规格基线</b>，本节不写生产代码",
        example_pop=pop(
            "一次实跑：审查与修改示例",
            "示例：备课实跑",
            '<p style="margin:0 0 8px;font-size:17px">以下为教师演示时的审查修改 Prompt（仅供参考；每次生成的编号和内容可能不同，请按自己的实际抽查结果调整，没有审出问题时也不必编造修改）</p>'
            '<div class="p-code"><div class="p-code-head"><span>课堂演练时教师修正 Prompt（供参考）</span></div>'
            '<pre style="padding:12px 14px;white-space:pre-wrap;font-size:15.5px;line-height:1.55">'
            + escape(PROMPT_P56_REVISE)
            + '</pre></div>',
        ),
    ),
    steps=["抽查方案", "抽查任务", "抽查对应关系", "检查工作区并提交"],
    repro=repro(
        [
            ("打开自己的 PLAN.md 和 TASKS.md，先抽查所选方案的取舍、影响范围，以及路径和命令有没有源码依据。", None),
            ("再抽查四项任务的依赖、验证和完成标准，并抽一条已批准需求，看能不能走到对应的案例和任务。", None),
            ("审出问题时，指出实际内容和依据，请 Agent 修改后再回看。没有问题时继续核对，不必编造修改。审完运行 git status，确认后由人提交规格基线，不要让 Agent 先提交。", "git status --short --untracked-files=all"),
        ],
        note="实际问题和编号可能不同；没有审出问题时也不必编造修改。本节提交只含规格和素材，不改生产代码。",
        label="跟做：审查并提交规格基线",
    ),
)


# ---------- 自检与交接 ----------
scene(
    id="p57",
    segment="自检与交接",
    label="哪段能当实施计划",
    title="这两段文字，哪段能当实施计划？",
    lead="能检查、能留下检查点的，才是实施计划",
    html=(
        quiz_cards(
            "“把 JSON Diff 全部实现完，对照验收就行。”",
            "没写清怎么改、改哪里、怎样分段验证与回退，无法按任务检查",
            "“先做差异模型，再映射到现有图；四项任务按依赖验证：模型核对固定输入；映射保留 removed 与必要祖先；双输入处理单侧错误并保留上次结果；摘要、筛选与原有单输入通过整体验收。”",
            '方案、范围、任务边界与验证都清楚，能检查也能留检查点 · <a href="#p51">回看改法</a> · <a href="#p52">回看拆任务</a>',
            right=2,
            stamps=("✗ 不能当计划", "✓ 能当计划"),
            labels=("候选一", "候选二"),
        )
        + '<p class="source-note">教学对照文字，不是某一份实际计划</p>'
    ),
    steps=["两段文字", "第一段", "第二段"],
)

scene(
    id="p58",
    segment="自检与交接",
    label="小结",
    title="这一节留下什么",
    lead="规格基线已经提交，生产代码保持不变，交给第 5 章按任务实现",
    html=sketch_recap(
        "核心判断",
        "回答章首问题",
        ["仍用 Prompt 发起", "但实现依据换成", "可查阅、按版本维护的约定"],
        "本节留下",
        [
            "<code>PLAN.md</code> 与 <code>TASKS.md</code>",
            "需求、验收与任务的完整追踪表",
            "规格基线已提交（生产代码未改）",
        ],
        "下一章",
        "第 5 章 · 按任务实现",
        "拿着已提交的规格基线从 TASK-01 动手；4.6 工具经验不打断这次交接",
    ),
    steps=["一个判断", "留下的", "交给第 5 章"],
)

lesson.write()
