#!/usr/bin/env python3
"""4.4 光靠文字规则，拿什么判对错：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
实跑请求保存在分镜；页面展示组织请求的要素、审查观察点和一次备课实跑示例。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, pop, repro  # noqa: E402

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
    '<li class="is-open"><span class="p-path">user</span><span class="p-note">unchanged · 下面有变化</span>'
    '<ul>'
    '<li class="is-dim"><span class="p-path">name: Lin</span><span class="p-note">隐藏</span></li>'
    '<li class="is-target"><span class="p-path">age: 20 → 21</span><span class="p-note">changed</span></li>'
    '</ul></li>'
    '<li class="is-block"><span class="p-path">active: true</span><span class="p-note">removed</span></li>'
    '<li class="is-allow"><span class="p-path">role: student</span><span class="p-note">added</span></li>'
    '</ul>'
)


# ---------- 开篇 ----------
scene(
    id="p39", segment="开篇", layout="lesson-cover",
    label="光靠文字规则，拿什么判对错", title="光靠文字，拿什么判对错？",
    lead="上一节留下了经过审查的 Spec。这一节用固定输入、动作和可核算结果，写成第三份规格 Acceptance",
    html=(
        chapter_map(4)
        + '<div style="margin-top:26px">' + anchor(lit=("Acceptance",), done=("Brief", "Spec"), mini=True, reveal=1) + '</div>'
        + '<div class="p-bar is-light" data-reveal="2" style="margin-top:18px">手里有：<b>自己的 SPEC.md</b></div>'
    ),
    steps=["本章位置", "这一节补哪一层", "从自己的 Spec 开始"],
)


# ---------- 手工核算 ----------
scene(
    id="p40", segment="手工核算",
    label="这句话够不够", title="只显示变化，并统计差异数量",
    lead="这句规则看似明确。光靠它，还不够判断做对了。下面是合成样例，先按已确认的规则自己判断，不是产品跑出来的结果。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 20px">'
        '<span class="p-tag" data-role="us">一句规则</span>'
        '<h3 style="font-size:24px;margin:8px 0 0">“只显示变化，并统计差异数量”</h3></div>'
        '<style>'
        '#p40 .p40-row{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:20px;margin-top:14px;align-items:stretch}'
        '#p40 .p40-trees{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:stretch;min-width:0}'
        '#p40 .p40-trees>div{display:flex;flex-direction:column;min-width:0}'
        '#p40 .p40-trees .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}'
        '#p40 .p-tree li{padding:1px 0}#p40 .p-tree ul{padding-left:24px;margin-left:8px}'
        '#p40 .p40-ask{display:flex;flex-direction:column;justify-content:center;height:100%;box-sizing:border-box;padding:16px 20px}'
        '#p40 .p40-ask h3{font-size:24px;margin:10px 0 0;line-height:1.4}'
        '#p40 .p40-ask p{margin:10px 0 0;font-size:18px;color:var(--p-muted)}'
        '</style>'
        '<div class="p40-row">'
        '<div class="p40-trees" data-reveal="1">'
        + plain_tree("Before", TREE_BEFORE) + plain_tree("After", TREE_AFTER) + '</div>'
        '<div class="p-box p40-ask" data-role="us" data-reveal="2">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3>哪些地方变了，各是什么状态？</h3>'
        '<p>这页先不公布答案</p></div></div>'
        '<p class="source-note">合成教学样例，按已确认规则手算；JSON Diff 尚未实现</p>'
    ),
    steps=["一句规则", "一对结构树", "先自己判断"],
)

scene(
    id="p41", segment="手工核算",
    label="哪些地方变了", title="这组 JSON 里，哪些地方变了？",
    lead="按已经确认的规则，把路径和状态核对出来。这是手算结果，不是产品跑出来的。",
    html=(
        '<style>'
        '#p41 .p41-row{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:20px;align-items:start}'
        '#p41 .p41-trees{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch;min-width:0}'
        '#p41 .p41-trees>div{display:flex;flex-direction:column;min-width:0}'
        '#p41 .p41-trees .p-tree{flex:1;padding:8px 12px;font-size:17px;line-height:1.4}'
        '#p41 .p-tree li{padding:1px 0}#p41 .p-tree ul{padding-left:22px;margin-left:8px}'
        '</style>'
        '<div class="p41-row">'
        '<div class="p41-trees" data-reveal="0">'
        + plain_tree("Before", TREE_BEFORE) + plain_tree("After", TREE_AFTER) + '</div>'
        '<div>'
        '<div class="p-matrix" style="grid-template-columns:1.1fr .8fr 1.3fr" data-reveal="0">'
        '<div class="is-head"><span>路径</span><span>直接状态</span><span>理由</span></div>'
        '<div><span style="font-family:var(--p-mono)">/user/age</span><span><code>changed</code></span><span>数值由 20 变成 21</span></div>'
        '<div><span style="font-family:var(--p-mono)">/active</span><span><code>removed</code></span><span>只存在于 Before</span></div>'
        '<div><span style="font-family:var(--p-mono)">/role</span><span><code>added</code></span><span>只存在于 After</span></div>'
        '</div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="padding:10px 16px;margin-top:14px">'
        '<span class="p-tag" data-role="ctx">/user</span>'
        '<p style="margin:8px 0 0"><code>unchanged</code>，带 <code>hasDiffDescendant</code>，不计入</p></div>'
        '</div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">直接差异共 <b>3 处</b>；还没有打开“只看变化”</div>'
        '<p class="source-note">按已确认规则手算；JSON Diff 尚未实现</p>'
    ),
    steps=["三条路径", "/user 怎么计", "共 3 处"],
)

scene(
    id="p42", segment="手工核算",
    label="筛选后计数变不变", title="筛选后留下了 /user，差异数要不要变成 4？",
    lead="打开“只看变化”后，图上会留下什么？请先判断差异数变不变。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:24px;align-items:start">'
        f'<div data-reveal="0"><h3 style="font-size:20px;margin:0 0 8px">只看变化（示意）</h3>{TREE_FILTERED}</div>'
        '<div class="p-box" data-role="us" data-reveal="1" style="padding:12px 18px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:24px;margin:10px 0 0">留下了 <code>/user</code>，差异数要不要从 3 变成 4？</h3></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">不要，仍为 <b>3</b>。保留祖先是为了定位，筛选前后计数不变</div>'
        '<p class="source-note">合并图为课程自绘示意，JSON Diff 尚未实现</p>'
    ),
    steps=["筛选后留下什么", "先判断计数", "仍为 3"],
)


# ---------- 写成验收 ----------
scene(
    id="p43", segment="写成验收",
    label="写成可核对的案例", title="怎样把刚才的判断写成可重复核对的案例？",
    lead="刚才的判断不能只留在讲述里。写成输入、动作和预期，以后每次都能按同样条件检查。这就是 Acceptance。",
    html=(
        '<div class="p-matrix" style="grid-template-columns:160px minmax(0,1fr)" data-reveal="0">'
        '<div class="is-head"><span>部分</span><span>这条案例写什么</span></div>'
        '<div><span><b>Given</b>　给定</span><span>上面固定的 Before 和 After，筛选设为关闭</span></div>'
        '<div><span><b>When</b>　操作</span><span>比较两份输入，再开启“只看变化”</span></div>'
        '<div><span><b>Then</b>　预期</span><span><code>/user/age</code> 为 <code>changed</code>、<code>/active</code> 为 <code>removed</code>、<code>/role</code> 为 <code>added</code>；差异数为 3，筛选前后不变；<code>/user</code> 保留，<code>/user/name</code> 隐藏</span></div>'
        '</div>'
        '<div class="p-grid" style="--n:2;margin-top:16px" data-reveal="1">'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">写入哪里</span>'
        '<h3 style="font-size:22px;margin:8px 0 0"><code>ACCEPTANCE.md</code></h3>'
        '<p>给 <code>AC-*</code> 编号，关联自己 Spec 里的 <code>REQ-*</code></p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="2"><span class="p-tag" data-role="ctx">固定素材</span>'
        '<h3 style="font-size:22px;margin:8px 0 0"><code>docs/specs/fixtures/</code></h3>'
        '<p>和其它规格资产放在一起，不能只写“应该正确”</p></div>'
        '</div>'
    ),
    steps=["Given–When–Then", "编号和关联", "固定素材放哪里"],
)

scene(
    id="p44", segment="写成验收",
    label="一条案例够不够", title="一条案例够不够覆盖全部规则？",
    lead="一个嵌套案例盖不住全部已批准规则。回到 Spec，优先复用上一节已经用过的小例子，再补错误和使用条件。",
    html=(
        '<style>#p44 .p-matrix span{padding:4px 10px;font-size:18px;line-height:1.3}</style>'
        '<div class="p-matrix" style="grid-template-columns:200px minmax(0,1fr)">'
        '<div class="is-head" data-reveal="0"><span>案例或检查组</span><span>需要核对什么</span></div>'
        + "".join(
            f'<div data-reveal="{g}"><span style="font-weight:700">{b}</span><span>{d}</span></div>'
            for g, b, d in GROUPS)
        + '</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:10px">这几组通过了，还<b>不能</b>宣布整功能验收完成：错误、上限、窄屏、可辨认、本地处理仍要核对</div>'
    ),
    steps=["常见案例", "类型、错误与上限", "窄屏与本地处理", "几个案例通过就算完成吗"],
)

scene(
    id="p45", segment="写成验收",
    label="让 Agent 起草验收", title="怎样让 Agent 起草验收？",
    lead="结合自己已经审过的 Spec 组织请求：说明依据和目标文件，要求每条案例写清固定输入、动作和预期，并关联实际存在的 REQ",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:24px">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">依据与产出</span>'
        '<h3 style="margin:10px 0">已审过的 <code>SPEC.md</code></h3>'
        '<p>请 Agent 起草 <code>ACCEPTANCE.md</code> 和固定素材</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">每条案例</span>'
        '<h3 style="margin:10px 0">输入 · 动作 · 预期</h3>'
        '<p>关联实际存在的 <code>REQ-*</code></p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:16px">只写规格和验收素材，<b>不改生产代码</b>；未决行为交给人</div>'
        '<div class="p-box is-soft" data-role="us" data-reveal="3" style="padding:10px 16px;margin-top:14px">'
        '<span class="p-tag" data-role="us">表达示例 · 按实际情况调整</span>'
        '<p style="font-size:20px;margin:8px 0 0">“依据已审过的 Spec 起草 Acceptance 和固定素材；每条案例写清输入、动作和预期，并关联实际存在的 REQ。”</p></div>'
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
    html=(
        '<style>@media(max-width:760px){body[data-mode="scroll"] #p46 .p-watch,'
        'body[data-mode="scroll"] #p46 .p-pop .p-pair{grid-template-columns:minmax(0,1fr)!important}'
        'body[data-mode="scroll"] #p46 .p-watch li{display:grid;grid-template-columns:36px minmax(0,1fr);gap:4px 12px}'
        'body[data-mode="scroll"] #p46 .p-watch li small{grid-column:2}'
        'body[data-mode="scroll"] #p46 .review-actions .p-bar{min-width:0!important}}</style>'
        '<ol class="p-watch" style="gap:14px">'
        '<li data-reveal="0">嵌套案例<small>路径、状态、计数、筛选是否和手算一致</small></li>'
        '<li data-reveal="1">错误或边界<small>前置、动作、预期是否足以重做</small></li>'
        '<li data-reveal="2">覆盖检查<small>已批准规则都有对应 AC，并且真正在核对那条行为</small></li></ol>'
        '<div class="review-actions" data-reveal="3" style="display:flex;align-items:center;gap:16px;margin-top:16px;flex-wrap:wrap">'
        '<div class="p-bar is-light" style="flex:1;min-width:360px;margin:0">审完看 <b>git status</b>：新增只在 docs/specs/；本节不提交</div>'
        + pop("一次实跑：路径写法和本地处理口径", "示例：路径与口径",
              '<p style="margin:0">2026-11-10 备课实跑；以下是初稿和修改稿的摘录。每次生成的编号和内容可能不同</p>'
              '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:16px">'
              '<div class="p-box" data-role="gate"><span class="p-tag" data-role="gate">初稿</span>'
              '<h3 style="font-size:20px">路径和口径</h3>'
              '<p>路径写成 <code>user.age</code></p>'
              '<p>本地处理写成“没有因比较产生的请求”</p></div>'
              '<div class="p-box" data-role="us"><span class="p-tag" data-role="us">修改后</span>'
              '<h3 style="font-size:20px">统一写法，收紧核对范围</h3>'
              '<p>路径统一成 <code>/user/age</code>，根为 <code>/</code></p>'
              '<p>只核对此次比较有没有把 JSON 内容发出去</p></div></div>')
        + '</div>'
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
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>“比较这两份 JSON，筛选后结果应该正确。”</h3>'
        '<div data-reveal="1"><p>不能当。没写清是哪些路径、什么状态、差异数是多少</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        '<h3>“<code>/user/age</code> 为 <code>changed</code>，<code>/active</code> 为 <code>removed</code>，<code>/role</code> 为 <code>added</code>；差异数为 3，筛选前后不变；<code>/user</code> 保留，<code>/user/name</code> 隐藏。”</h3>'
        '<div data-reveal="2"><p>能当。输入、动作对上后，可以按同样条件再检查一遍<br><a href="#p43">回看怎样写成案例</a></p></div></div></div>'
        '</div>'
    ),
    steps=["两段文字", "第一段", "第二段"],
)

scene(
    id="p48", segment="自检与交接",
    label="小结", title="这一节留下什么",
    lead="已批准的规则被写成可核算的案例。未决规则仍由人决定。下一节再决定怎么实施。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3><div class="p-star" style="width:250px;font-size:22px">固定输入<br>动作和预期<br>能重复核对</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">经过核算的 ACCEPTANCE.md</li>'
        '<li class="is-pass">docs/specs/fixtures/</li>'
        '<li class="is-pass">REQ-* 与 AC-* 的对应关系</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>4.5 都定清楚了，为什么不一次写完？</h3><p>决定怎样实施；规格到 4.5 一起提交</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()
