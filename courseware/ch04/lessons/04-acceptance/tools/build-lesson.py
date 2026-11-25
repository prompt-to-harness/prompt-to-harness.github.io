#!/usr/bin/env python3
"""4.4 光靠文字规则，拿什么判对错：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
实跑请求保存在分镜；页面展示组织请求的要素、审查观察点和一次备课实跑示例。
"""
import sys
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import (  # noqa: E402
    Lesson,
    cover_handoff,
    judge_split,
    pop,
    quiz_cards,
    repro,
    review_board,
    sketch_recap,
    spec_delegation,
    sym_badge,
)

# p44 案例组：(揭示组, 案例或检查组, 核对要点)
GROUPS = [
    (0, "相同输入、键换序", "差异数都为 0"),
    (0, "增删改、嵌套", "核对状态、计数和筛选；整棵增删时根计 1 处"),
    (0, "数组按索引", "<code>[10,20]</code> → <code>[5,10,20]</code>，两处 changed、一处 added，共 3 处，不报告移动"),
    (1, "类型、空值", "类型变化按已批准规则核算；<code>null</code> 与字段缺失按同样规则处理，并有对应验收案例"),
    (1, "非法输入", "指明是 Before 还是 After 出错，保留上次有效结果"),
    (1, "节点上限", "按 dev:www 环境的 2000 核算，removed 计入；超限不画图，只提示图太大"),
    (2, "窄屏、可辨认", "360px 宽窗口可操作、可查看；状态不单靠颜色；键盘不是必做组"),
    (2, "本地处理", "只查这次比较有没有把 JSON 发出去"),
]

PROMPT_P45_TEACHER = """请先阅读已经审过的 docs/specs/SPEC.md，根据其中已批准（Approved）的 32 条规则（REQ-001~REQ-031 与 REQ-038），起草 docs/specs/ACCEPTANCE.md，并在 docs/specs/fixtures/ 下保存固定素材与素材索引。同时建立实际存在的 REQ-* 与 AC-* 的对应关系。

这一步只新建 docs/specs/ACCEPTANCE.md 和 docs/specs/fixtures/ 下的文件，不要修改生产代码，也不要修改 docs/specs/BRIEF.md、docs/specs/SPEC.md 或 docs/specs/sources/requirement-note.md。

要求：
1. 每条验收案例使用 Given–When–Then 写清固定输入、操作步骤和可核算的预期；JSON 路径统一用斜杠形式（例如 /user/age、/active、/role，根路径写成 /），不要混用点号写法。
2. 每条案例关联 SPEC.md 中实际存在的 REQ-*，不要编造编号。一个案例可以同时核对多条规则。
3. 只为 32 条 Approved 规则固定验收标准。6 条 Draft（REQ-032~REQ-037，如 1 与 1.0、本地存储、节点点击详情等）与 5 条 Deferred（REQ-039~REQ-043）单独列出留给人决定，不要自行补成标准答案，也不要改动状态。
4. 纳入下面这对已经手算过的嵌套案例，并保存对应 fixture：
   Before：{"user":{"name":"Lin","age":20},"active":true}
   After：{"user":{"name":"Lin","age":21},"role":"student"}
   预期按已批准规则核算：/user/age 为 changed、/active 为 removed、/role 为 added，/user 为 unchanged 且带 hasDiffDescendant 不计入差异数；直接差异共 3 处；开启“只看变化”后保留 /user、隐藏 /user/name、差异数仍为 3。
5. 扩展到一组验收，覆盖全部 Approved 规则：
   - 相同输入与只改对象键顺序（差异数都为 0）；
   - 增删改与整棵对象或数组增删（只在根计 1 处，内部子节点仍逐个标为 added / removed）；
   - 数组按索引比较：[10,20] → [5,10,20]（两处 changed、一处 added，共 3 处，不报告移动）；
   - 类型变化（如 1 变成 "1" 统一记为 changed）与字段值为 null 等同于路径不存在（REQ-003），固定对应案例；
   - 非法输入：分别验证 Before 出错、After 出错（保留上次有效结果），以及首次比较即出错（显示空状态和错误提示），改回合法输入后恢复正常比较；
   - 窄屏与可辨认：360px 宽窗口中两侧输入、错误提示和结果都能操作与查看；每种状态除颜色外还有文字或符号（键盘操作未在 SPEC 批准，不写为必做组）；
   - 本地处理：只核对本次比较和切换“只看变化”时，两份 JSON 内容没有因比较功能被发送到网络（页面上其他无关请求不视为违反）；
   - 原有单输入链路兼容（REQ-038）：核对新增 JSON Diff 功能后，原有单份 JSON 输入与可视化查看保持可用。
6. 节点上限案例按 pnpm dev:www 环境的 2000 核算，removed 节点也计入上限；准备低于上限与超过上限的可重现对照素材（写清节点数估算口径，不把行数直接当节点数），超过上限时只提示图太大、不渲染合并图，且不出现指向外部产品的升级链接。
7. 在 ACCEPTANCE.md 中附上 REQ-* 与 AC-* 的覆盖对应表，检查全部 32 条 Approved 规则至少各有 1 条对应 AC-*，且每条 AC-* 都能指回需求并真正在核对那条行为。完成后运行 git status --short --untracked-files=all 给我看。"""

lesson = Lesson(
    __file__, "4.4", "光靠文字规则，拿什么判对错",
    summary="用一对嵌套 JSON 手工核算路径、状态和计数，写成可重复核对的验收案例，扩展到一组覆盖，再交给 Agent 起草第三份规格 Acceptance。",
)
scene = lesson.scene


def plain_tree(label, body):
    """一棵不加状态色的 Before 或 After 结构树。"""
    return f'<div><h3 style="font-size:18px;margin:0 0 6px">{label}</h3><ul class="p-tree">{body}</ul></div>'


TREE_BEFORE = (
    '<li><span class="p-path">user</span>'
    '<ul>'
    '<li><span class="p-path">name: Lin</span></li>'
    '<li><span class="p-path">age: 20</span></li>'
    '</ul></li>'
    '<li><span class="p-path">active: true</span></li>'
)
TREE_AFTER = (
    '<li><span class="p-path">user</span>'
    '<ul>'
    '<li><span class="p-path">name: Lin</span></li>'
    '<li><span class="p-path">age: 21</span></li>'
    '</ul></li>'
    '<li><span class="p-path">role: student</span></li>'
)

TREE_FILTERED = (
    '<ul class="p-tree">'
    f'<li class="is-open"><span class="p-path">user</span>{sym_badge("anc", "▽ 下面有变化")}{sym_badge("nocnt", "保留定位")}'
    '<ul>'
    f'<li class="is-dim"><span class="p-path">name: Lin</span>{sym_badge("nocnt", "隐藏")}</li>'
    f'<li class="is-target"><span class="p-path">age: 20 → 21</span>{sym_badge("chg", "~ changed")}</li>'
    '</ul></li>'
    f'<li class="is-block"><span class="p-path">active: true</span>{sym_badge("rem", "− removed")}</li>'
    f'<li class="is-allow"><span class="p-path">role: student</span>{sym_badge("add", "+ added")}</li>'
    '</ul>'
)


# ---------- 开篇 ----------
scene(
    id="p39", segment="开篇", layout="lesson-cover",
    label="光靠文字规则，拿什么判对错", title="光靠文字，拿什么判对错？",
    lead="上一节留下了经过审查的 Spec。这一节用固定输入、动作和可核算结果，写成第三份规格 Acceptance",
    html=cover_handoff(
        now=4, lit=("Acceptance",), done=("Brief", "Spec"),
        prev_tag="4.3 承接", prev_title="经过审查的 SPEC.md",
        prev_desc="核心规则 · 代价范围 · Open 问题去向",
        next_tag="4.4 产出",
        deliverables=[
            "按规则手算过的嵌套样例",
            "<code>ACCEPTANCE.md</code>（Given–When–Then）",
            "固定素材 <code>docs/specs/fixtures/</code>",
        ],
    ),
    steps=["本章位置", "这一节补哪一层", "从自己的 Spec 开始"],
)


# ---------- 手工核算 ----------
scene(
    id="p40", segment="手工核算",
    label="这句话够不够", title="只显示变化，并统计差异数量",
    lead="这句规则看似明确。光靠它，还不够判断做对了。下面是合成样例，先按已确认的规则自己判断，不是产品跑出来的结果。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:10px 18px">'
        '<span class="p-tag" data-role="us">一句规则</span>'
        '<h3 style="font-size:22px;margin:6px 0 0">“只显示变化，并统计差异数量”</h3></div>'
        '<style>'
        '#p40 .p40-trees{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch;min-width:0}'
        '#p40 .p40-trees>div{display:flex;flex-direction:column;min-width:0}'
        '#p40 .p40-trees .p-tree{flex:1;padding:8px 12px;font-size:17.5px;line-height:1.4}'
        '#p40 .p-tree li{padding:1px 0}#p40 .p-tree ul{padding-left:22px;margin-left:8px}'
        '@media(max-width:760px){body[data-mode="scroll"] #p40 .p40-trees{grid-template-columns:minmax(0,1fr)}}'
        '</style>'
        '<div class="ch4-split" style="--cols:minmax(0,1.25fr) minmax(0,0.75fr);gap:18px;margin-top:12px">'
        '<div class="p40-trees" data-reveal="1">'
        + plain_tree("Before", TREE_BEFORE) + plain_tree("After", TREE_AFTER) + '</div>'
        '<div class="p-box" data-role="us" data-reveal="2" style="display:flex;flex-direction:column;justify-content:center;padding:14px 18px">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3 style="font-size:22px;margin:8px 0 0;line-height:1.38">哪些地方变了，各是什么状态？</h3>'
        '<p style="margin:8px 0 0;font-size:18px;color:var(--p-muted)">这页先不公布答案</p></div></div>'
        '<p class="source-note" style="margin-top:6px">合成教学样例，按已确认规则手算；JSON Diff 尚未实现</p>'
    ),
    steps=["一句规则", "一对结构树", "先自己判断"],
)

scene(
    id="p41", segment="手工核算",
    label="哪些地方变了", title="这组 JSON 里，哪些地方变了？",
    lead="按已经确认的规则，把路径和状态核对出来。这是手算结果，不是产品跑出来的。",
    html=(
        '<style>'
        '#p41 .p41-trees{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:stretch;min-width:0}'
        '#p41 .p41-trees>div{display:flex;flex-direction:column;min-width:0}'
        '#p41 .p41-trees .p-tree{flex:1;padding:6px 10px;font-size:17px;line-height:1.35}'
        '#p41 .p-tree li{padding:1px 0}#p41 .p-tree ul{padding-left:20px;margin-left:6px}'
        '#p41 .p-matrix span{padding:5px 10px}'
        '@media(max-width:760px){body[data-mode="scroll"] #p41 .p41-trees{grid-template-columns:minmax(0,1fr)}}'
        '</style>'
        '<div class="ch4-split" style="--cols:minmax(0,0.88fr) minmax(0,1.12fr);gap:16px;align-items:start">'
        '<div class="p41-trees" data-reveal="0">'
        + plain_tree("Before", TREE_BEFORE) + plain_tree("After", TREE_AFTER) + '</div>'
        '<div>'
        '<div class="p-matrix" style="grid-template-columns:minmax(0,0.9fr) minmax(0,1.15fr) minmax(0,1.1fr)" data-reveal="0">'
        '<div class="is-head"><span>路径</span><span>直接状态</span><span>理由</span></div>'
        f'<div><span style="font-family:var(--p-mono);font-size:17px">/user/age</span><span>{sym_badge("chg", "~ changed")}</span><span style="font-size:17.5px">数值由 20 变成 21</span></div>'
        f'<div><span style="font-family:var(--p-mono);font-size:17px">/active</span><span>{sym_badge("rem", "− removed")}</span><span style="font-size:17.5px">只存在于 Before</span></div>'
        f'<div><span style="font-family:var(--p-mono);font-size:17px">/role</span><span>{sym_badge("add", "+ added")}</span><span style="font-size:17.5px">只存在于 After</span></div>'
        '</div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="padding:8px 12px;margin-top:8px">'
        '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
        '<span class="p-tag" data-role="ctx">/user</span>'
        f'{sym_badge("anc", "▽ hasDiffDescendant")}{sym_badge("nocnt", "不计入")}</div>'
        '<p style="margin:5px 0 0;font-size:17.5px">对象本身是 <code>unchanged</code>，靠派生标记带路</p></div>'
        '</div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:8px">直接差异共 <b>3 处</b>；还没有打开“只看变化”</div>'
        '<p class="source-note" style="margin-top:4px">按已确认规则手算；JSON Diff 尚未实现</p>'
    ),
    steps=["三条路径", "/user 怎么计", "共 3 处"],
)

scene(
    id="p42", segment="手工核算",
    label="筛选后计数变不变", title="筛选后留下了 /user，差异数要不要变成 4？",
    lead="打开“只看变化”后，图上会留下什么？请先判断差异数变不变。",
    html=(
        '<style>#p42 .p-tree{padding:8px 14px;font-size:17px;line-height:1.38}</style>'
        + judge_split(
            left_html=(
                f'<div data-reveal="0"><h3 style="font-size:19px;margin:0 0 8px">只看变化（示意）</h3>{TREE_FILTERED}</div>'
            ),
            right_cards=(
                '<div class="p-box" data-role="us" data-reveal="1" style="padding:12px 16px">'
                '<span class="p-tag" data-role="us">学员判断</span>'
                '<h3 style="font-size:21px;margin:8px 0 0">留下了 <code>/user</code>，差异数要不要从 3 变成 4？</h3></div>'
                '<div class="p-box" data-role="ok" data-reveal="2" style="padding:12px 16px">'
                '<span class="p-tag" data-role="ok">✓ 不要，仍为 3 处</span>'
                '<p style="font-size:18px;margin:8px 0 0">保留 <code>/user</code> 祖先只为了定位差异，筛选前后计数规则不变</p></div>'
            ),
            cols="minmax(0,1.16fr) minmax(0,0.84fr)",
        )
        + '<p class="source-note" style="margin-top:8px">合并图为课程自绘示意，JSON Diff 尚未实现</p>'
    ),
    steps=["筛选后留下什么", "先判断计数", "仍为 3"],
)


# ---------- 写成验收 ----------
scene(
    id="p43", segment="写成验收",
    label="写成可核对的案例", title="怎样把刚才的判断写成可重复核对的案例？",
    lead="刚才的判断不能只留在讲述里。写成输入、动作和预期，以后每次都能按同样条件检查。这就是 Acceptance。",
    html=(
        '<div class="ch4-2col-wide" style="--cols:minmax(0,1.32fr) minmax(0,0.88fr);gap:14px;align-items:start">'
        '<div class="ch4-gwt" data-reveal="0">'
        '<div class="ch4-gwt-row"><span class="p-tag" data-role="ctx">Given · 给定</span>'
        '<span style="font-size:18px">上面固定的 Before 和 After，筛选设为关闭</span></div>'
        '<div class="ch4-gwt-row"><span class="p-tag" data-role="tool">When · 操作</span>'
        '<span style="font-size:18px">比较两份输入，再开启“只看变化”</span></div>'
        '<div class="ch4-gwt-row"><span class="p-tag" data-role="ok">Then · 预期</span>'
        '<span style="font-size:17.5px"><code>/user/age</code> 为 <code>changed</code>、<code>/active</code> 为 <code>removed</code>、<code>/role</code> 为 <code>added</code>；差异数为 3，筛选前后不变；<code>/user</code> 保留，<code>/user/name</code> 隐藏</span></div>'
        '</div>'
        '<div class="ch4-stack">'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">写入哪里</span>'
        '<h3 style="font-size:21px;margin:6px 0 4px"><code>ACCEPTANCE.md</code></h3>'
        '<p style="font-size:18px;margin:0">给 <code>AC-*</code> 编号，关联自己 Spec 里的 <code>REQ-*</code></p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="2"><span class="p-tag" data-role="ctx">固定素材</span>'
        '<h3 style="font-size:21px;margin:6px 0 4px"><code>docs/specs/fixtures/</code></h3>'
        '<p style="font-size:18px;margin:0">和其它规格资产放在一起，不能只写“应该正确”</p></div>'
        '</div></div>'
    ),
    steps=["Given–When–Then", "编号和关联", "固定素材放哪里"],
)

scene(
    id="p44", segment="写成验收",
    label="一条案例够不够", title="一条案例够不够覆盖全部规则？",
    lead="一个嵌套案例盖不住全部已批准规则。回到 Spec，优先复用上一节已经用过的小例子，再补错误和使用条件。",
    html=(
        '<style>#p44 .p-matrix span{padding:4px 10px;font-size:17.5px;line-height:1.28}</style>'
        '<div class="p-matrix" style="grid-template-columns:195px minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>案例或检查组</span><span>需要核对什么</span></div>'
        + "".join(
            f'<div data-reveal="{g}"><span style="font-weight:700">{b}</span><span>{d}</span></div>'
            for g, b, d in GROUPS)
        + '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:8px">这几组通过了，还<b>不能</b>宣布整功能验收完成：错误、上限、窄屏、可辨认、本地处理仍要核对</div>'
    ),
    steps=["常见案例", "类型、错误与上限", "窄屏与本地处理", "几个案例通过就算完成吗"],
)

scene(
    id="p45", segment="写成验收",
    label="让 Agent 起草验收", title="怎样让 Agent 起草验收？",
    lead="结合自己已经审过的 Spec 组织请求：说明依据和目标文件，要求每条案例写清固定输入、动作和预期，并关联实际存在的 REQ",
    html=spec_delegation(
        inputs=[("docs/specs/SPEC.md", "已审过且已批准的 REQ-*"), ("p41–p44 手算", "路径、状态、计数与 8 组边界")],
        inputs_note="若发现规则冲突，先回 4.3 把 Spec 审清楚",
        elements=[
            (0, "依据与目标", "依据与产出", "按已审过的 <code>SPEC.md</code> 起草验收和固定素材"),
            (1, "案例写法", "每条案例", "Given / When / Then 固定，关联实际存在的 <code>REQ-*</code>"),
            (2, "改动范围", "范围与未决", "只写规格和验收素材，不改生产代码；未决交给人"),
            (3, "请求参考", "按实际调整", "打开真实文件抽查，不只看“已完成”"),
        ],
        output_title="请 Agent 起草",
        output_files=[("docs/specs/ACCEPTANCE.md", "含 AC-* 与预期"), ("docs/specs/fixtures/", "固定测试 JSON 输入")],
        pop_title="请求表达示例",
        pop_label="示例：按实际 Spec 调整",
        pop_body=(
            '<p style="margin:0 0 8px;font-size:17px">按你自己的 Spec 与规则编号改写，下面先给简版表达方式，再附课堂演练时教师使用的完整 Prompt 供参考</p>'
            '<div class="p-code"><div class="p-code-head"><span>请求示例（简版）</span></div>'
            '<pre style="padding:12px 14px;white-space:pre-wrap;font-size:17px;line-height:1.55">'
            '依据已审过的 docs/specs/SPEC.md 起草 docs/specs/ACCEPTANCE.md 和 docs/specs/fixtures/。\n'
            '每条案例写清固定输入、动作和预期，并关联实际存在的 REQ-*。\n'
            '只写规格和验收素材，不修改生产代码；尚未决定的行为留给人决定。'
            '</pre></div>'
            '<p style="margin:12px 0 6px;font-size:17px"><b>课堂演练时教师 Prompt（供参考）</b>：按自己的 Spec 编号与实际规则调整，不必逐字照抄</p>'
            '<div class="p-code"><div class="p-code-head"><span>课堂演练时教师 Prompt（供参考）</span></div>'
            '<pre style="padding:12px 14px;white-space:pre-wrap;font-size:15.5px;line-height:1.55">'
            + escape(PROMPT_P45_TEACHER)
            + '</pre></div>'
        ),
        pop_hint="把 Spec 依据与范围写进请求，示例仅供参考",
    ),
    steps=["依据与产出", "案例怎么写", "范围与未决事项", "按实际组织请求"],
    repro=repro([
        ("打开自己在上一节审过的 SPEC.md，对照怎样写成案例、以及案例组那两页，整理要覆盖的已批准规则和仍未决定的问题。", None),
        ("向 Agent 说明依据、目标文件和案例要求，按本次实际内容组织起草请求。只写规格和验收素材，不改生产代码。", None),
        ("打开得到的 ACCEPTANCE.md 和 fixtures，按下一页的观察点抽查。", None),
    ], note="请求措辞和编号会因 Spec 不同而变化；未决行为仍需人决定。", label="跟做：起草验收"),
)

scene(
    id="p46", segment="写成验收",
    label="验收文档审什么", title="验收文档审什么？",
    lead="打开 Agent 生成的 ACCEPTANCE.md 和固定素材，对照手算和自己的 Spec 抽查。打开实际文件核对，不要只看“已完成”。",
    html=review_board(
        doc_tag="ACCEPTANCE.md + fixtures/",
        docs=[
            ("docs/specs/ACCEPTANCE.md", "Given/When/Then 清楚，关联实际的 REQ-*"),
            ("docs/specs/fixtures/", "输入输出固定可重现，与路径口径一致"),
        ],
        doc_note="发现与规则冲突时，先回 4.3 把 Spec 审清楚",
        checks=[
            (0, "嵌套案例", "路径、状态、计数、筛选是否和手算一致"),
            (1, "错误或边界", "前置、动作、预期是否足以按同步骤重做"),
            (2, "覆盖检查", "已批准规则都有对应 AC，并且真正在核对那条行为"),
        ],
        footer_bar="审完看 <b>git status</b>：新增只在 docs/specs/；本节不提交",
        example_pop=pop("一次实跑：路径写法和本地处理口径", "示例：路径与口径",
              '<p style="margin:0 0 10px;font-size:17px">2026-11-10 备课实跑；以下是初稿和修改稿的摘录。每次生成的编号和内容可能不同</p>'
              '<div class="ch4-2col">'
              '<div class="p-box" data-role="gate"><span class="p-tag" data-role="gate">初稿</span>'
              '<h3 style="font-size:20px">路径和口径</h3>'
              '<p>路径写成 <code>user.age</code></p>'
              '<p>本地处理写成“没有因比较产生的请求”</p></div>'
              '<div class="p-box" data-role="us"><span class="p-tag" data-role="us">修改后</span>'
              '<h3 style="font-size:20px">统一写法，收紧核对范围</h3>'
              '<p>路径统一成 <code>/user/age</code>，根为 <code>/</code></p>'
              '<p>只核对此次比较有没有把 JSON 内容发出去</p></div></div>'),
    ),
    steps=["嵌套案例", "错误或边界", "覆盖检查", "修改并检查"],
    repro=repro([
        ("打开自己的 ACCEPTANCE.md 和固定素材，先抽查嵌套案例的路径、状态、计数和筛选，对照前面的手算。", None),
        ("再抽一个错误或边界案例，看前置、动作和预期是否足以重做；再检查已批准规则是否都有对应案例。", None),
        ("审出问题时，指出具体内容、对照依据、修改要求和范围，按实际情况交给 Agent 修改。回看修改处，再检查工作区。", "git status --short --untracked-files=all"),
    ], note="实际问题和编号可能不同；没有审出问题时继续核对，不必编造修改。有冲突先回到上一节把规则审清楚。本节不提交。", label="跟做：审查与修改"),
)


# ---------- 自检与交接 ----------
scene(
    id="p47", segment="自检与交接",
    label="哪段能当验收案例", title="这两段文字，哪段能当验收案例？",
    lead="能重复核对的，才能当验收案例。",
    html=quiz_cards(
        "“比较这两份 JSON，筛选后结果应该正确。”",
        "<b>不能当</b>：没写清是哪些路径、什么状态、差异数是多少",
        "“<code>/user/age</code> 为 <code>changed</code>，<code>/active</code> 为 <code>removed</code>，<code>/role</code> 为 <code>added</code>；差异数为 3，筛选前后不变；<code>/user</code> 保留，<code>/user/name</code> 隐藏。”",
        '<b>能当</b>：输入、动作对上后，可以按同样条件再检查一遍<br><a href="#p43">回看怎样写成案例</a>',
        right=2,
        stamps=("✗ 不能当", "✓ 能当"),
        labels=("第一段", "第二段"),
    ),
    steps=["两段文字", "第一段", "第二段"],
)

scene(
    id="p48", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="已批准的规则被写成可核算的案例。未决规则仍由人决定。下一节再决定怎么实施。",
    html=sketch_recap(
        "一个判断", "KEY",
        ["固定输入", "动作和预期", "能重复核对"],
        "留下的",
        ["经过核算的 ACCEPTANCE.md", "docs/specs/fixtures/", "REQ-* 与 AC-* 的对应关系"],
        "下一节", "4.5 都定清楚了，为什么不一次写完？", "决定怎样实施；规格到 4.5 一起提交",
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()
