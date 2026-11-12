#!/usr/bin/env python3
"""5.1 规格写好了，怎么知道第一个任务做对了：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch05/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页按已确认的逐页内容制作；p06、p07 先占位，待备课实跑后再写。不预写 Agent 回答或运行结果。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map, pop  # noqa: E402

lesson = Lesson(
    __file__, "5.1", "规格写好了，怎么知道第一个任务做对了",
    summary="从一组能当场核对的输入看清差异模型，立住本章工作方式，再用六组已核算期望判断第一个任务的完成边界。",
)
scene = lesson.scene


def plain_tree(label, body):
    """一棵不加状态色的 Before 或 After 结构树，键顺序与固定素材一致。"""
    return f'<div><h3 style="font-size:18px;margin:0 0 6px">{label}</h3><ul class="p-tree">{body}</ul></div>'


# docs/specs/fixtures/key-order/ 的实际嵌套输入，键顺序与文件一致
TREE_BEFORE = (
    '<li><span class="p-path">user</span>'
    '<ul>'
    '<li><span class="p-path">name: Lin</span></li>'
    '<li><span class="p-path">age: 20</span></li>'
    '</ul></li>'
    '<li><span class="p-path">active: true</span></li>'
)
TREE_AFTER = (
    '<li><span class="p-path">active: true</span></li>'
    '<li><span class="p-path">user</span>'
    '<ul>'
    '<li><span class="p-path">age: 20</span></li>'
    '<li><span class="p-path">name: Lin</span></li>'
    '</ul></li>'
)

EXPECT = [
    ("<code>fixtures/key-order</code>", "差异数 0，无任何状态或「下层有变化」标记"),
    ("<code>fixtures/identical</code>", "差异数 0，无任何标记"),
    (
        "<code>fixtures/nested</code>",
        "差异数 3；<code>/user/age</code> 为 <code>changed</code>，"
        "<code>/active</code> 为 <code>removed</code>，<code>/role</code> 为 <code>added</code>；"
        "<code>/</code> 与 <code>/user</code> 带「下层有变化」标记，不计入差异数",
    ),
    (
        "<code>fixtures/array-index</code>",
        "<code>[10,20]</code> 变为 <code>[5,10,20]</code>，差异数 3："
        "下标 0、1 为 <code>changed</code>，下标 2 为 <code>added</code>，不报告移动或元素配对",
    ),
    (
        "<code>fixtures/type-change</code>",
        "<code>/v</code> 由数字 <code>1</code> 变为字符串 <code>\"1\"</code>，记为 <code>changed</code>，差异数 1",
    ),
    (
        "<code>fixtures/subtree</code>",
        "差异数 2：<code>/gone</code> 与 <code>/extra</code> 各计 1 处；其子路径各自带状态，但不单独计处",
    ),
]


# ---------- 开篇 ----------
scene(
    id="p01", segment="开篇", layout="lesson-cover",
    label="规格写好了，怎么知道第一个任务做对了", title="怎么知道第一个任务做对了？",
    lead="上一章留下了已经提交的规格基线，生产代码里还没有 JSON Diff。这一章按规格把 JSON Diff 分片实现。这一节先回答：规格写好了，怎么知道第一个任务做对了？",
    html=(
        chapter_map(1)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:22px">第 4 章留下：<b>已提交的规格基线</b>；生产代码里还没有 JSON Diff</div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:14px">本节要留下：已验证的差异模型、工作区外的一次性核对脚本和实际检查结果，以及 <code>CH05_IMPLEMENTATION.md</code> 初稿</div>'
    ),
    steps=["本章位置", "第 4 章留下什么", "本节要留下什么"],
)


# ---------- 可核对的输入 ----------
scene(
    id="p02", segment="可核对的输入",
    label="这组输入，差异该是多少", title="这组输入，差异该是多少？",
    lead="规格已经写好，先不要从任务步骤讲起。下面是实际的 fixtures/key-order，请先按已经批准的规则判断：这组输入，差异该是多少？",
    html=(
        '<style>'
        '#p02 .p02-row{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:20px;margin-top:14px;align-items:stretch}'
        '#p02 .p02-trees{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:stretch;min-width:0}'
        '#p02 .p02-trees>div{display:flex;flex-direction:column;min-width:0}'
        '#p02 .p02-trees .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}'
        '#p02 .p-tree li{padding:1px 0}#p02 .p-tree ul{padding-left:24px;margin-left:8px}'
        '#p02 .p02-ask{display:flex;flex-direction:column;justify-content:center;height:100%;box-sizing:border-box;padding:16px 20px}'
        '#p02 .p02-ask h3{font-size:24px;margin:10px 0 0;line-height:1.4}'
        '</style>'
        '<div class="p02-row">'
        '<div class="p02-trees" data-reveal="0">'
        + plain_tree("Before", TREE_BEFORE) + plain_tree("After", TREE_AFTER) + '</div>'
        '<div class="p-box p02-ask" data-role="us" data-reveal="2">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3>这组输入，差异该是多少？</h3></div></div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">字段与值相同，只是顶层和嵌套对象的<b>键顺序</b>不同</div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:10px">差异数 <b>0</b>，全部 <code>unchanged</code>，不该出现「字段顺序变化」</div>'
        '<p class="source-note">实际素材：docs/specs/fixtures/key-order/；按已批准规则判断，不是产品跑出来的结果</p>'
    ),
    steps=["Before 和 After", "键顺序不同", "先自己判断", "差异数是 0"],
)

scene(
    id="p03", segment="可核对的输入",
    label="检查的是键顺序，还是对调两侧", title="检查的是键顺序，还是对调两侧？",
    lead="上一页的零差异，检查的是对象键顺序。请分清这件事和对调 Before 与 After 有什么不同，以及比较时该怎样对齐两侧。先看对照，再看对齐方式。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:24px" data-reveal="0">'
        '<div class="p-box" data-role="ctx"><span class="p-tag" data-role="ctx">键换序</span>'
        '<h3 style="margin:10px 0 0">字段与值相同，只是键顺序不同</h3>'
        '<p>差异数是 0</p></div>'
        '<div class="p-box" data-role="gate"><span class="p-tag" data-role="gate">对调两侧</span>'
        '<h3 style="margin:10px 0 0">把 Before 和 After 对调</h3>'
        '<p>新增和删除会反向</p></div></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="padding:12px 18px;margin-top:16px">'
        '<span class="p-tag" data-role="ctx">现有解析器</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">按出现顺序发放节点 id；若复用，键换序会被误报</h3></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">差异模型要<b>按路径对齐</b>两侧，不复用那套 id</div>'
    ),
    steps=["两种不是同一件事", "不要复用节点 id", "按路径对齐"],
)

scene(
    id="p04", segment="可核对的输入",
    label="除了键换序，第一个任务还要看什么", title="除了键换序，第一个任务还要看什么？",
    lead="键换序让人看见第一项工作的一部分结果，但还不能覆盖任务要求的全部案例。这一页先列出范围，先不下完成结论。除了键换序，第一个任务还要看什么？",
    html=(
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 20px">'
        '<span class="p-tag" data-role="ctx"><code>TASK-01</code> 还要覆盖</span>'
        '<p style="font-size:22px;margin:10px 0 0"><code>identical</code> · <code>nested</code> · <code>array-index</code> · <code>type-change</code> · <code>subtree</code></p></div>'
        '<div class="p-bar is-light" data-reveal="0" style="margin-top:12px">对应 <code>AC-002</code>、<code>AC-003</code>、<code>AC-005</code> 至 <code>AC-009</code>、<code>AC-011</code>，以实际文件为准</div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:10px">筛选界面属于后续任务。本节只核对状态、差异数，以及「下层有变化」标记</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:10px">期望表和「是否已经完成」，放到看完检查之后再判断</div>'
    ),
    steps=["还要覆盖的素材", "本节核对什么", "完成与否稍后判断"],
)


# ---------- 本章怎么干活 ----------
scene(
    id="p05", segment="本章怎么干活",
    label="怎样让 Agent 只完成这一个任务", title="怎样让 Agent 只完成这一个任务？",
    lead="有了可核对的范围，再确定这次怎么让 Agent 只完成这一个任务。先看清起点、验证方式，以及请求里要写清的几件事。先看懂，这一页还不发出请求。",
    html=(
        '<div class="p-grid" style="--n:3">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">起点</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">从规格提交创建功能分支</h3>'
        '<p>核对版本和工作区</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">验证</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">一次性脚本，不入库</h3>'
        '<p>对照六组已核算期望，再跑共享包 lint；不引入测试框架</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2"><span class="p-tag" data-role="agent">请求要素</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">任务、案例和允许范围</h3>'
        '<p>带上关联规则、素材、全局约束和非目标</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:14px">允许新增 <code>packages/jsoncrack-react/src/diff/</code> 并更新导出；不改共享组件、渲染、网页版和现有 <code>parser.ts</code></div>'
        + '<div style="margin-top:12px" data-reveal="2">'
        + pop(
            "演示请求草案（按自己的规格调整）",
            "一份请求草案",
            '<p style="margin:0 0 8px">这份草案供备课实跑使用，不是固定的复制模板。用自己已经审过的规格和任务组织请求。</p>'
            '<p style="margin:0 0 8px">要写清：只完成当前差异模型任务；用六组已核算期望核对，不要用待验证的比较逻辑生成期望；一次性脚本留在工作区外，不要提交；然后再运行 <code>pnpm --filter jsoncrack-react run lint</code></p>'
            '<p style="margin:0"><code>null</code> 与字段缺失仍是未决项，不要写成实现决定。值等价判定收敛到一个可替换的函数，除此之外不预设语义。</p>',
        )
        + '</div>'
    ),
    steps=["确定起点", "怎样验证", "请求里要写清什么"],
)


def pending(pid, segment, question, note):
    scene(
        id=pid, segment=segment,
        label=question.rstrip("？"), title=question,
        lead="本页在演练之后再写",
        html=f'<div class="p-bar is-light" data-reveal="0">{note}</div>',
        steps=["待演练后制作"],
    )


pending(
    "p06", "本章怎么干活",
    "当前副本对得上起点吗？请求该怎么发出？",
    "待备课实跑后再写；不预写 Agent 回答",
)


# ---------- 完成边界 ----------
pending(
    "p07", "完成边界",
    "怎样判断这一次做到了完成边界？",
    "待备课实跑后再写；不预写运行结果",
)

scene(
    id="p08", segment="完成边界",
    label="相同输入和键换序都通过了，差异模型任务就完成了吗",
    title="相同输入和键换序都通过了，差异模型任务就完成了吗？",
    lead="如果相同输入和对象键换序都通过了，差异模型任务就一定完成了吗？请先判断，再看六组已核算的期望。这是本节的学员判断，先不要下结论。",
    html=(
        '<style>'
        'body[data-mode=slides] #p08 .scene-content{top:220px;gap:8px}'
        '#p08 .p-matrix span{padding:4px 10px;font-size:17px;line-height:1.35}'
        '#p08 .p08-ask{padding:10px 20px}'
        '#p08 .p08-ask h3{font-size:24px;margin:8px 0 0;line-height:1.4}'
        '</style>'
        '<div class="p-box p08-ask" data-role="us" data-reveal="0">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3>相同输入和键换序都通过了，差异模型任务就完成了吗？</h3></div>'
        '<div class="p-matrix" style="grid-template-columns:200px minmax(0,1fr);margin-top:8px" data-reveal="1">'
        '<div class="is-head"><span>素材</span><span>已核算的期望</span></div>'
        + "".join(f'<div><span>{n}</span><span>{e}</span></div>' for n, e in EXPECT)
        + '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:8px"><b>没有</b>，数组、类型变化、嵌套路径和子树计数若属于该任务，仍要按各自要求检查；还要回看允许范围和可解释的 diff</div>'
        '<p class="source-note">期望以当前规格基线的实际文件为准</p>'
    ),
    steps=["先判断", "六组已核算期望", "还不算完成"],
)


# ---------- 自检与交接 ----------
scene(
    id="p09", segment="自检与交接",
    label="检查结果和期望不一致时，这两种做法哪样对",
    title="检查结果和期望不一致时，这两种做法哪样对？",
    lead="跑完检查后，结果有可能和已经核算过的期望对不上。这一问和上一页的完成边界不是同一件事。请先自己判断这两种做法哪样对，再看参考结论。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div>'
        '<h3>把预期改成当前实现的结果，让检查通过</h3>'
        '<div data-reveal="1"><p>不对。不能为了让检查通过，改已经核算过的期望</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        '<h3>先确认输入、期望与 Spec，再看实现和核对脚本哪里偏离</h3>'
        '<div data-reveal="2"><p>对。先核对依据，再看实现和脚本各自哪里偏离</p></div></div></div>'
        '</div>'
        '<p class="source-note">教学对照，不是某一次实际运行</p>'
    ),
    steps=["两种做法", "第一种", "第二种"],
)

scene(
    id="p10", segment="自检与交接",
    label="带着什么进入 5.2", title="带着什么进入 5.2？",
    lead="实现可以与讲师不同，但要能解释固定输入、预期、实际结果和代码改动。受阻时记录实际进展，不承诺章节级恢复点。请看这一节留下什么，以及怎样进入 5.2。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3>'
        '<div class="p-star" style="width:280px;font-size:22px">两个案例通过了<br>还不等于任务完成</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">已验证的差异模型</li>'
        '<li class="is-pass">工作区外的一次性脚本和实际检查结果</li>'
        '<li class="is-pass">CH05_IMPLEMENTATION.md 初稿</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>5.2 合并图</h3>'
        '<p>拿着已验证的模型，去看被删除的字段怎样出现在合并图里</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()
