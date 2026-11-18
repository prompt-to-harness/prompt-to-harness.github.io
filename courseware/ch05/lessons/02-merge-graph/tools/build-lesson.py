#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""5.2 字段删掉了，结果图上怎样看见它：页面源，生成 lesson.js。"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import (  # noqa: E402
    Lesson,
    cover_handoff,
    diff_arch,
    json_card,
    pending,
    pop,
    quiz_cards,
    sketch_recap,
    sym_badge,
)

lesson = Lesson(
    __file__,
    "5.2",
    "字段删掉了，结果图上怎样看见它",
    summary="从同一组嵌套素材里被删掉的字段出发，看清只按 After 构图为什么看不见它，再把两侧映射到现有图数据上并核对照射结果。",
    prep=[
        "确认教学副本处于 5.1 功能分支，TASK-01 差异模型已通过七组素材核对且工作区干净",
        "编辑器定位 docs/specs/TASKS.md（TASK-02）及 docs/specs/fixtures/nested/、subtree/",
        "准备好运行共享包构建与插件端回归检查命令（pnpm --filter jsoncrack-react / vscode）",
    ],
)
scene = lesson.scene

NESTED_BEFORE = [
    "{",
    '  "user": { "name": "Lin", "age": 20 },',
    ("del", '  "active": true'),
    "}",
]

NESTED_AFTER = [
    "{",
    '  "user": { "name": "Lin", "age": 21 },',
    ("add", '  "role": "student"'),
    "}",
]

TREE_ONLY_AFTER = (
    '<ul class="p-tree ch5-tree">'
    '<li><span class="p-path">user</span>'
    "<ul>"
    '<li><span class="p-path">name: Lin</span></li>'
    '<li><span class="p-path">age: 21</span></li>'
    "</ul></li>"
    '<li><span class="p-path">role: student</span></li>'
    "</ul>"
)

TREE_MERGE = (
    '<ul class="p-tree ch5-tree">'
    f'<li class="is-open"><span class="p-path">user</span>{sym_badge("anc")}'
    "<ul>"
    '<li><span class="p-path">name: Lin</span></li>'
    f'<li class="is-target"><span class="p-path">age: 20 → 21</span>{sym_badge("chg")}</li>'
    "</ul></li>"
    f'<li class="is-block"><span class="p-path">active: true</span>{sym_badge("rem")}</li>'
    f'<li class="is-allow"><span class="p-path">role: student</span>{sym_badge("add")}</li>'
    "</ul>"
)

TREE_VISIBLE = (
    '<ul class="p-tree ch5-tree">'
    f'<li class="is-open"><span class="p-path">user</span>{sym_badge("anc")}'
    "<ul>"
    '<li class="is-dim"><span class="p-path">name: Lin</span><span class="p-note">筛选隐藏</span></li>'
    f'<li class="is-target"><span class="p-path">age: 20 → 21</span>{sym_badge("chg")}</li>'
    "</ul></li>"
    f'<li class="is-block"><span class="p-path">active: true</span>{sym_badge("rem")}</li>'
    f'<li class="is-allow"><span class="p-path">role: student</span>{sym_badge("add")}</li>'
    "</ul>"
)


# ---------- 开篇 ----------
scene(
    id="p11",
    segment="开篇",
    layout="lesson-cover",
    label="字段删掉了，结果图上怎样看见它",
    title="图上怎样看见被删掉的字段？",
    lead="5.1 已验证纯函数差异模型；这一节把两侧差异投影到 JSON Crack 现有图数据上",
    html=cover_handoff(
        2,
        "5.1 已就位",
        "按路径对齐的纯函数差异模型",
        "已能算出直接状态、差异数与祖先标记，但尚未生成画布图数据",
        "5.2 完成后留下",
        [
            "产出 <code>NodeData / EdgeData</code> 的合并图映射",
            "一次性图数据核对脚本与 <code>lint / build</code> 结果",
            "更新后的 <code>CH05_IMPLEMENTATION.md</code>",
        ],
    ),
    steps=["本章位置", "5.1 已就位", "本节要留下什么"],
)


# ---------- 被删掉的字段 ----------
scene(
    id="p12",
    segment="被删掉的字段",
    label="只拿 After 构图，被删字段去哪了",
    title="只拿 After 构图，被删字段去哪了？",
    lead="打开 docs/specs/fixtures/nested/，先看只存在于 Before 的 /active 在单侧构图下会怎样。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch">'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch" data-reveal="0">'
        + json_card("Before", NESTED_BEFORE, "nested/before.json")
        + json_card("After", NESTED_AFTER, "nested/after.json")
        + "</div>"
        '<div class="p-box" data-role="us" data-reveal="2" style="display:flex;flex-direction:column;justify-content:center;padding:16px 20px">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3 style="font-size:24px;margin:4px 0 8px">只拿 After 解析构图，图上找得到 <code>/active</code> 吗？</h3>'
        '<p style="font-size:19px;color:var(--p-muted)">找不到——它不在 After 里，单侧解析会直接丢失删除项</p></div></div>'
        '<div class="p-bar is-light" data-reveal="1"><code>/active</code> 只存在于 <b>Before</b>；已批准规则要求它作为 <code>removed</code> 保留在结果图上（<code>REQ-004</code> · <code>AC-010</code>）</div>'
        '<p class="source-note">实际素材：docs/specs/fixtures/nested/</p>'
    ),
    steps=["嵌套素材 Before 与 After", "/active 只存在于 Before", "单侧构图会丢失删除项"],
)

scene(
    id="p13",
    segment="被删掉的字段",
    label="怎样在一张图上同时看见增删改",
    title="怎样在一张图上同时看见增删改？",
    lead="对照现有单侧构图与合并图映射，看 Before 独有节点与祖先路径怎样落进同一份图数据。",
    html=(
        '<div class="p-pair">'
        '<div data-reveal="0">'
        '<div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">现有单输入构图（只看 After）</h3><span class="p-chip" data-role="gate">/active 消失</span></div>'
        + TREE_ONLY_AFTER
        + "</div>"
        '<div class="p-join" data-reveal="1"><span>投影两侧</span><i class="p-arrow"></i></div>'
        '<div data-reveal="1">'
        '<div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">合并图数据（NodeData / EdgeData）</h3><span class="p-chip" data-role="ok">保留四状态</span></div>'
        + TREE_MERGE
        + "</div></div>"
        '<div class="p-bar" data-reveal="2">不并排画两张图，也不另写渲染引擎——把两侧差异投影为现有画布可消费的<b>同一套节点与连边</b></div>'
        '<p class="source-note">合并图示意用于核对映射产出的图数据结构与符号标记</p>'
    ),
    steps=["只看 After 会丢节点", "投影为同一份合并图数据", "复用现有画布渲染"],
)

scene(
    id="p14",
    segment="被删掉的字段",
    label="本节检查到哪一步，才算映射做完",
    title="本节检查到哪一步，才算映射做完？",
    lead="明确图数据层的三项核对内容，并与 5.4 的筛选界面走查划清边界。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:20px;align-items:stretch">'
        '<div data-reveal="0">'
        '<h3 style="font-size:20px;margin:0 0 6px">图数据算出的「只看变化」可见集合</h3>'
        + TREE_VISIBLE
        + "</div>"
        '<div style="display:flex;flex-direction:column;gap:10px;justify-content:center">'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 16px">'
        '<span class="p-tag" data-role="ctx">1 · nested 图数据与可见集合</span>'
        '<p style="font-size:18.5px"><code>/</code>、<code>/user</code> 与三处差异保留，<code>/user/name</code> 排除，差异数仍为 <b>3</b></p></div>'
        '<div class="p-box" data-role="tool" data-reveal="1" style="padding:12px 16px">'
        '<span class="p-tag" data-role="tool">2 · subtree 与零差异素材</span>'
        '<p style="font-size:18.5px">被删子树全部节点仍在图数据中且只计根 <b>2</b> 处；<code>identical</code>、<code>key-order</code>、<code>null-equiv</code> 不因节点 id 误报</p></div></div></div>'
        '<div class="p-bar" data-reveal="2">本节只验<b>底层图数据与插件端无回归</b>；网页上的「只看变化」开关、摘要与超限提示留给 <b>5.4</b></div>'
    ),
    steps=["nested 节点关系与可见集合", "被删子树与零差异核对", "界面开关留给 5.4"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p15",
    segment="怎样发出请求",
    label="怎样只做图数据映射，不顺手改界面",
    title="怎样只做图数据映射，不顺手改界面？",
    lead="在架构图上锁定共享包的可选入口改动，保证既有 json 入口与 VS Code 插件端零回归。",
    html=(
        diff_arch(active="graph", done=("model",), reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">脚本 + 跨包静态验证</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:18.5px">一次性脚本验图数据；再跑 <code>jsoncrack-react</code> 的 <code>lint / build</code> 与 <code>vscode</code> 的 <code>lint</code></p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">只增可选入口，不碰网页视图</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:18.5px">给 <code>types.ts</code> 与 <code>JSONCrackComponent</code> 增可选图数据入口并渲染状态符号；双输入与筛选开关留后续任务</p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-02 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-02</code> 及关联 Spec、Acceptance 与固定素材，基于上一任务已验证的差异模型实现合并图映射</p>'
            '<p style="margin:0 0 8px">允许范围：在共享包 <code>diff/</code> 新增映射；在 <code>types.ts</code> 新增可选状态字段；在 <code>JSONCrackComponent.tsx</code> 新增可选 <code>nodes / edges</code> 入口；在节点组件渲染非纯颜色的状态符号并更新导出。不改既有 <code>json</code> 入口、<code>parser.ts</code>、超限判定逻辑与网页版视图</p>'
            '<p style="margin:0">用工作区外一次性脚本核对 <code>nested</code>、<code>subtree</code>、<code>identical</code>、<code>key-order</code>、<code>null-equiv</code> 的图数据；再运行共享包 <code>lint</code>、<code>build</code> 与 <code>pnpm --filter vscode run lint</code></p>',
        )
        + "</div></div></div>"
    ),
    steps=["锁定共享包增量边界", "图数据脚本与跨包检查", "委托要素与请求参考"],
)

pending(
    scene,
    "p16",
    "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在 5.1 功能分支上发出 TASK-02 映射请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p17",
    "完成边界",
    "怎样判断映射做到了完成边界？",
    "实操页占位：正式录制时展示映射改动范围、图数据脚本核对与构建输出",
)

scene(
    id="p18",
    segment="完成边界",
    label="只在 After 里找节点，为何验不出删除",
    title="只在 After 里找节点，为何验不出删除？",
    lead="对照错误的单侧核对与正确的合并图数据核对，守住本节的验收边界。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch">'
        '<div class="p-box" data-role="gate" data-reveal="0" style="padding:16px 20px">'
        '<div class="p-head"><h3>只查 After 输入或单侧树</h3><span class="p-tag" data-role="gate">✗ 查不到删除</span></div>'
        '<p style="font-size:19.5px">被删字段的原始键值只来自 <b>Before</b>；在 After 里找不到节点，绝不能反推「删除项不必保留」</p></div>'
        '<div class="p-box" data-role="ok" data-reveal="1" style="padding:16px 20px">'
        '<div class="p-head"><h3>查映射产出的 NodeData / EdgeData</h3><span class="p-tag" data-role="ok">✓ 证据成立</span></div>'
        '<p style="font-size:19.5px">直接核实 <code>/active</code> 节点存在、状态标为 <code>removed</code>，且父子连边挂在正确容器路径下</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">另一条边界：图数据能算出筛选可见集合 <b>不等于</b>「只看变化」界面已通过验收；界面交互留给 5.4</div>'
    ),
    steps=["只查 After 为何失效", "核对映射后的节点与连边", "数据就绪不等于界面已验收"],
)


# ---------- 自检与交接 ----------
scene(
    id="p19",
    segment="自检与交接",
    label="图数据算出了可见集合，哪种判断对",
    title="图数据算出了可见集合，哪种判断对？",
    lead="脚本已经确认映射数据能算出「只看变化」的可见节点集合，先判断该怎样记录验收状态。",
    html=quiz_cards(
        "直接把「只看变化」标记为验收通过，后面不用再查",
        "不对。本节只验证了底层图数据结构，不能替代后续任务的开关交互与界面渲染走查",
        "只确认图数据已具备筛选所需的祖先与状态信息，开关与网页走查留到 5.4",
        "对。数据层核对只证明映射达标，端到端筛选体验要等 5.4 接上界面后再验收",
        right=2,
    ),
    steps=["暂停比较两种判断", "判断一为什么错", "判断二为什么对"],
)

scene(
    id="p20",
    segment="自检与交接",
    label="带着什么进入 5.3",
    title="带着什么进入 5.3？",
    lead="共享包已经能产出带四种状态的合并图数据，并且没有破坏既有单输入入口。",
    html=sketch_recap(
        "本节核心判断",
        ["删除节点来自 Before", "必须投影两侧成合并图", "按产出节点与连边核对"],
        "本节留下",
        [
            "产出 <code>NodeData / EdgeData</code> 的合并图映射",
            "通过共享包 <code>build</code> 与 <code>vscode lint</code> 的可选入口",
            "更新后的 <code>CH05_IMPLEMENTATION.md</code>",
        ],
        "下一节 5.3",
        "双输入与错误恢复",
        "把两侧输入接到网页视图，看一边输入出错时已有结果该怎么办",
    ),
    steps=["核心判断", "本节留下的成果", "进入 5.3 双输入"],
)

lesson.write()
