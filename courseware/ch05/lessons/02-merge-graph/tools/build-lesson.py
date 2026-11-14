#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""5.2 字段删掉了，结果图上怎样看见它：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch05/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页按已确认的逐页内容制作；p16、p17 先占位，待备课实跑后再写。不预写 Agent 回答或运行结果。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map, pop  # noqa: E402

lesson = Lesson(
    __file__, "5.2", "字段删掉了，结果图上怎样看见它",
    summary="从同一组嵌套素材里被删掉的字段出发，看清只按 After 构图为什么看不见它，再把两侧映射到现有图数据上并核对照射结果。",
)
scene = lesson.scene


def plain_tree(label, body):
    """一棵不加状态色的 Before 或 After 结构树，键顺序与固定素材一致。"""
    return f'<div><h3 style="font-size:18px;margin:0 0 6px">{label}</h3><ul class="p-tree">{body}</ul></div>'


# docs/specs/fixtures/nested/ 的实际嵌套输入，键顺序与文件一致
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

# 同一张能表达状态的合并图（课程自绘示意，含未筛选的 /user/name）
TREE_MERGE = (
    '<ul class="p-tree">'
    '<li class="is-open"><span class="p-path">user</span><span class="p-note">unchanged · 下面有变化</span>'
    '<ul>'
    '<li><span class="p-path">name: Lin</span></li>'
    '<li class="is-target"><span class="p-path">age: 20 → 21</span><span class="p-note">changed</span></li>'
    '</ul></li>'
    '<li class="is-block"><span class="p-path">active: true</span><span class="p-note">removed</span></li>'
    '<li class="is-allow"><span class="p-path">role: student</span><span class="p-note">added</span></li>'
    '</ul>'
)

# 按「只看变化」算出的可见集合（图数据，不是界面）
TREE_VISIBLE = (
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
    id="p11", segment="开篇", layout="lesson-cover",
    label="字段删掉了，结果图上怎样看见它", title="图上怎样看见被删掉的字段？",
    lead="上一节留下了已验证的差异模型，生产代码里还没有合并图。这一节要回答：字段删掉了，结果图上怎样看见它？",
    html=(
        chapter_map(2)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:22px">5.1 留下：<b>已验证的差异模型</b>；生产代码里还没有合并图</div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:14px">本节要留下：可被现有图消费的映射、工作区外的一次性脚本和实际检查结果，并更新 <code>CH05_IMPLEMENTATION.md</code></div>'
    ),
    steps=["本章位置", "5.1 留下什么", "本节要留下什么"],
)


# ---------- 被删掉的字段 ----------
scene(
    id="p12", segment="被删掉的字段",
    label="只拿 After 来构图，被删掉的字段在哪里", title="只拿 After 来构图，被删掉的字段在哪里？",
    lead="规格已经要求删除字段作为 removed 留在结果里。先不要从映射步骤讲起。下面是实际的 fixtures/nested，请先判断：只拿 After 来构图，被删掉的字段在哪里？",
    html=(
        '<style>'
        '#p12 .p12-row{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.75fr);gap:20px;margin-top:14px;align-items:stretch}'
        '#p12 .p52-trees{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:stretch;min-width:0}'
        '#p12 .p52-trees>div{display:flex;flex-direction:column;min-width:0}'
        '#p12 .p52-trees .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}'
        '#p12 .p-tree li{padding:1px 0}#p12 .p-tree ul{padding-left:24px;margin-left:8px}'
        '#p12 .p12-ask{display:flex;flex-direction:column;justify-content:center;height:100%;box-sizing:border-box;padding:16px 20px}'
        '#p12 .p12-ask h3{font-size:24px;margin:10px 0 0;line-height:1.4}'
        '</style>'
        '<div class="p12-row">'
        '<div class="p52-trees" data-reveal="0">'
        + plain_tree("Before", TREE_BEFORE) + plain_tree("After", TREE_AFTER) + '</div>'
        '<div class="p-box p12-ask" data-role="us" data-reveal="2">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3>只拿 After 来构图，这个字段在哪里？</h3></div></div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px"><code>/active</code> 只存在于 <b>Before</b></div>'
        '<p class="source-note">实际素材：docs/specs/fixtures/nested/；按已批准规则判断，不是产品跑出来的结果</p>'
    ),
    steps=["Before 和 After", "/active 只在 Before", "先自己判断"],
)

scene(
    id="p13", segment="被删掉的字段",
    label="怎样才能在一张图上看见它", title="怎样才能在一张图上看见它？",
    lead="只按 After 构图时，被删掉的字段不会出现。请对照「只画 After」和一张能表达状态的合并图，看 /active 怎样被看见。这一页把现象讲清，不展开实现细节。",
    html=(
        '<style>'
        '#p13 .p13-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}'
        '#p13 .p13-col{display:flex;flex-direction:column;min-width:0}'
        '#p13 .p13-col .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}'
        '#p13 .p-tree li{padding:1px 0}#p13 .p-tree ul{padding-left:24px;margin-left:8px}'
        '#p13 .p13-col h3{font-size:20px;margin:0 0 8px}'
        '</style>'
        '<div class="p13-row">'
        '<div class="p13-col" data-reveal="0"><h3>只画 After</h3>'
        '<ul class="p-tree">' + TREE_AFTER + '</ul>'
        '<div class="p-bar is-light" style="margin-top:10px"><code>/active</code> 消失</div></div>'
        '<div class="p13-col" data-reveal="1"><h3>同一张合并图</h3>'
        + TREE_MERGE + '</div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">删除信息来自 <b>Before</b>，必须把两侧映到同一张能表达状态的图上</div>'
        '<p class="source-note">合并图为课程自绘示意，用来对照映射后的图数据，不是产品界面</p>'
    ),
    steps=["只画 After", "同一张合并图", "必须映射两侧"],
)

scene(
    id="p14", segment="被删掉的字段",
    label="本节要检查到哪一步，才算映射做完", title="本节要检查到哪一步，才算映射做完？",
    lead="现有只按一份 JSON 构图的路径不够用。这一页先说明本节检查图数据的范围，先不下完成结论，也不把筛选界面算进这一节。",
    html=(
        '<style>'
        '#p14 .p14-row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;align-items:start}'
        '#p14 .p14-tree .p-tree{padding:8px 14px;font-size:18px;line-height:1.4}'
        '#p14 .p-tree li{padding:1px 0}#p14 .p-tree ul{padding-left:24px;margin-left:8px}'
        '</style>'
        '<div class="p14-row">'
        '<div class="p14-tree" data-reveal="0">'
        '<h3 style="font-size:20px;margin:0 0 8px">按「只看变化」算出的可见集合</h3>'
        + TREE_VISIBLE + '</div>'
        '<div>'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 18px">'
        '<span class="p-tag" data-role="ctx">本节核对图数据</span>'
        '<p style="font-size:20px;margin:10px 0 0">路径、状态、父子关系，以及筛选所需的可见集合</p></div>'
        '<div class="p-bar is-light" data-reveal="0" style="margin-top:12px">可见：<code>/</code>、<code>/user</code>、<code>/user/age</code>、<code>/active</code>、<code>/role</code>；<code>/user/name</code> 隐藏；差异数仍为 <b>3</b></div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:10px"><code>subtree</code> 中 <code>/gone</code>、<code>/gone/a</code>、<code>/gone/b</code> 均为 <code>removed</code>，且仍在图数据里</div>'
        '</div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">「只看变化」开关、摘要和网页走查属于 <b>5.4</b>；期望表放到看完检查之后再完整对照</div>'
        '<p class="source-note">可见集合是图数据里的核对，不是界面走查</p>'
    ),
    steps=["图数据与可见集合", "被删子树仍保留", "筛选界面留给 5.4"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p15", segment="怎样发出请求",
    label="怎样让 Agent 只完成映射，不顺手做界面", title="怎样让 Agent 只完成映射，不顺手做界面？",
    lead="有了要核对的图数据范围，再确定这次怎么让 Agent 只完成映射。先看清起点、验证方式，以及请求里要写清的几件事。先看懂，这一页还不发出请求。",
    html=(
        '<div class="p-grid" style="--n:3">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">起点</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">接着 5.1 的功能分支</h3>'
        '<p>核对差异模型仍在，工作区可继续</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">验证</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">一次性脚本，不入库</h3>'
        '<p>核对照射后的图数据，再跑共享包 lint / build 和 <code>vscode</code> lint；不引入测试框架</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2"><span class="p-tag" data-role="agent">请求要素</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">任务、案例和允许范围</h3>'
        '<p>输入是已验证的差异模型；产出可被现有图消费的数据</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:14px">允许在共享包 <code>diff/</code> 新增映射，给 <code>types.ts</code> 与共享组件增加可选入口；不改既有 <code>json</code> 入口、<code>parser.ts</code> 和超限判定逻辑，不另做一套图。不要把启动网页、打开筛选当作本节完成条件</div>'
        + '<div style="margin-top:12px" data-reveal="2">'
        + pop(
            "演示请求草案（按自己的规格调整）",
            "一份请求草案",
            '<p style="margin:0 0 8px">这份草案供备课实跑使用，不是固定的复制模板。用自己已经审过的规格和任务组织请求。</p>'
            '<p style="margin:0 0 8px">要写清：只完成当前映射任务；输入是已验证的差异模型；用 <code>nested</code>、<code>subtree</code>、<code>identical</code> 和 <code>key-order</code> 核对照射后的图数据，不要用待验证的映射生成期望；一次性脚本留在工作区外，不要提交；然后再运行共享包 <code>lint</code> / <code>build</code> 和 <code>vscode</code> lint。不要把启动网页或打开「只看变化」作为这次的完成条件。</p>'
            '<p style="margin:0"><code>null</code> 与字段缺失沿用 4.3 已确认的规则：值为 <code>null</code> 等同于该路径不存在。双输入、筛选开关和摘要留给后续任务。</p>',
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
    "p16", "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "待备课实跑后再写；不预写 Agent 回答",
)


# ---------- 完成边界 ----------
pending(
    "p17", "完成边界",
    "怎样判断映射做到了完成边界？",
    "待备课实跑后再写；不预写运行结果",
)

scene(
    id="p18", segment="完成边界",
    label="只在 After 中找节点，为什么无法核对删除",
    title="只在 After 中找节点，为什么无法核对删除？",
    lead="映射做完后，只在 After 中找节点，为什么无法核对删除？请先判断，再看原因。这是本节的学员判断，先不要下结论。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:12px 20px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:24px;margin:8px 0 0">只在 After 中找节点，为什么无法核对删除？</h3></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:14px">删除信息来自 <b>Before</b>，要看映射后的实际节点和关系，才能判断 <code>/active</code> 是否作为 <code>removed</code> 被保留</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:10px">图数据里已经能算出筛选可见集合，也不等于「只看变化」已经验收通过；筛选界面留给 5.4</div>'
        '<p class="source-note">期望以当前规格基线的实际文件为准</p>'
    ),
    steps=["先判断", "删除信息来自 Before", "可见集合还不等于验收"],
)


# ---------- 自检与交接 ----------
scene(
    id="p19", segment="自检与交接",
    label="图数据已经能算出筛选后的可见集合，这两种做法哪样对",
    title="图数据已经能算出筛选后的可见集合，这两种做法哪样对？",
    lead="图数据里已经能算出筛选后的可见集合。这一问和上一页「为什么无法核对删除」不是同一件事。请先自己判断这两种做法哪样对，再看参考结论。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div>'
        '<h3>宣布「只看变化」已经验收通过</h3>'
        '<div data-reveal="1"><p>不对。不能把本节的数据核对，当成后面任务的界面验收</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        '<h3>这只说明图数据具备筛选所需的信息，开关和界面走查还要等到 5.4</h3>'
        '<div data-reveal="2"><p>对。可见集合可以在图数据里核对，界面验收仍留给 5.4</p></div></div></div>'
        '</div>'
        '<p class="source-note">教学对照，不是某一次实际运行</p>'
    ),
    steps=["两种做法", "第一种", "第二种"],
)

scene(
    id="p20", segment="自检与交接",
    label="带着什么进入 5.3", title="带着什么进入 5.3？",
    lead="实现可以与讲师不同，但要能解释固定输入、预期、实际图数据和代码改动。受阻时记录实际进展，不承诺章节级恢复点。请看这一节留下什么，以及怎样进入 5.3。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3>'
        '<div class="p-star" style="width:280px;font-size:22px">只按 After 构图<br>看不见被删掉的字段</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">可被现有图消费的映射</li>'
        '<li class="is-pass">工作区外的一次性脚本和实际检查结果</li>'
        '<li class="is-pass">更新后的 CH05_IMPLEMENTATION.md</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>5.3 双输入</h3>'
        '<p>拿着已验证的逻辑和图数据，去看一边输入错了时，已经得到的结果怎么办</p></div></div>'
        '</div>'
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()
