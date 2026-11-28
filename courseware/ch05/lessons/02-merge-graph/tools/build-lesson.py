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
    summary="从同一组嵌套素材里被删掉的字段出发，看清只按 After 构图为什么看不见它，再把两侧映射到独立合并图组件并核对结构与上限判定。",
    prep=[
        "确认教学副本处于 5.1 功能分支，TASK-01 差异模型与 check-diff.ts（c01–c13）已通过且工作区干净",
        "编辑器定位 docs/specs/TASKS.md（TASK-02）、PLAN.md §2.1 及 fixtures/c03-nested、c05~c08、c17~c19",
        "核对开发环境节点上限 2000（c17=2102、c18=2051 含 150 removed、c19=101）均由参数传入共享包",
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
    lead="5.1 已验证纯函数差异模型；这一节把两侧差异映射到图数据，并建立独立合并图外壳",
    html=cover_handoff(
        2,
        "5.1 已就位",
        "按路径对齐的纯函数差异模型",
        "已能算出直接状态、差异数与祖先标记，但尚未生成合并图与 <code>DiffGraph</code>",
        "5.2 完成后留下",
        [
            "合并图映射、可见集计算与含 <code>removed</code> 上限判定",
            "不动 <code>JSONCrackComponent</code> 的独立 <code>DiffGraph.tsx</code>",
            "扩展后的 <code>check-diff.ts</code> 与共享包 <code>lint / build</code>",
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
    lead="打开 docs/specs/fixtures/c03-nested.*，先看只存在于 Before 的 /active 在单侧构图下会怎样。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch">'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch" data-reveal="0">'
        + json_card("Before", NESTED_BEFORE, "c03-nested.before.json")
        + json_card("After", NESTED_AFTER, "c03-nested.after.json")
        + "</div>"
        '<div class="p-box" data-role="us" data-reveal="2" style="display:flex;flex-direction:column;justify-content:center;padding:16px 20px">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3 style="font-size:24px;margin:4px 0 8px">只拿 After 解析构图，图上找得到 <code>/active</code> 吗？</h3>'
        '<p style="font-size:19px;color:var(--p-muted)">找不到——它不在 After 里，单侧解析会直接丢失删除项</p></div></div>'
        '<div class="p-bar is-light" data-reveal="1"><code>/active</code> 只存在于 <b>Before</b>；已批准规则要求它作为 <code>removed</code> 保留在合并图上（<code>REQ-008</code> · <code>AC-03</code>）</div>'
        '<p class="source-note">实际素材：docs/specs/fixtures/c03-nested.before.json / after.json</p>'
    ),
    steps=["嵌套素材 Before 与 After", "/active 只存在于 Before", "单侧构图会丢失删除项"],
)

scene(
    id="p13",
    segment="被删掉的字段",
    label="怎样在一张图上同时看见增删改",
    title="怎样在一张图上同时看见增删改？",
    lead="对照现有单侧构图与合并图映射，看 Before 独有节点与祖先路径怎样投影到同一份图数据。",
    html=(
        '<div class="p-pair">'
        '<div data-reveal="0">'
        '<div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">现有单输入构图（只看 After）</h3><span class="p-chip" data-role="gate">/active 消失</span></div>'
        + TREE_ONLY_AFTER
        + "</div>"
        '<div class="p-join" data-reveal="1"><span>投影两侧</span><i class="p-arrow"></i></div>'
        '<div data-reveal="1">'
        '<div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">合并图数据（DiffGraph 消费）</h3><span class="p-chip" data-role="ok">保留四状态</span></div>'
        + TREE_MERGE
        + "</div></div>"
        '<div class="p-bar" data-reveal="2">不改 <code>JSONCrackComponent</code> 原外壳，新建 <code>DiffGraph.tsx</code> 复用同一套节点与连边组件渲染合并图</div>'
        '<p class="source-note">NodeData 新增可选差异状态与 hasDiffDescendant 字段，缺省不传时单输入与 VS Code 端保持原样</p>'
    ),
    steps=["只看 After 会丢节点", "投影两侧生成合并图数据", "新建 DiffGraph 复用节点组件"],
)

scene(
    id="p14",
    segment="被删掉的字段",
    label="本节检查到哪一步，才算映射做完",
    title="本节检查到哪一步，才算映射做完？",
    lead="明确合并图节点、可见集合与上限判定的核对口径，并与网页界面交互划清边界。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:20px;align-items:stretch">'
        '<div data-reveal="0">'
        '<h3 style="font-size:20px;margin:0 0 6px">图数据算出的「只看变化」可见集合</h3>'
        + TREE_VISIBLE
        + "</div>"
        '<div style="display:flex;flex-direction:column;gap:10px;justify-content:center">'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:12px 16px">'
        '<span class="p-tag" data-role="ctx">1 · 子树保留与可见集合</span>'
        '<p style="font-size:18.5px"><code>c06 / c08</code> 被删子树全节点仍在图中；<code>c03</code> 筛选可见集保留必要祖先与 <code>removed</code>，排除 <code>/user/name</code></p></div>'
        '<div class="p-box" data-role="tool" data-reveal="1" style="padding:12px 16px">'
        '<span class="p-tag" data-role="tool">2 · 上限判定（参数传入 2000）</span>'
        '<p style="font-size:18.5px"><code>c19</code>（101 节点）正常构图；<code>c17</code>（2102）与 <code>c18</code>（含 150 个 <code>removed</code> 共 2051）必须判超限（<code>REQ-025</code>）</p></div></div></div>'
        '<div class="p-bar" data-reveal="2">本节只验<b>数据映射、可见集与超限判定</b>；状态符号定稿、网页开关与超限提示框留给后续任务</div>'
    ),
    steps=["子树节点与筛选可见集合", "removed 计入上限判定", "界面提示与交互留后续任务"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p15",
    segment="怎样发出请求",
    label="怎样只做图数据映射，不顺手改界面",
    title="怎样只做图数据映射，不顺手改界面？",
    lead="在架构图上锁定 DiffGraph 与可选字段改动，不碰原画布外壳与网页端。",
    html=(
        diff_arch(active="graph", done=("model",), reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">扩展脚本 + 共享包构建</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:18.5px">扩展 <code>scripts/check-diff.ts</code> 断言 <code>c05</code>–<code>c08</code>、可见集与 <code>c17</code>–<code>c19</code>；跑共享包 <code>lint / build</code></p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">新增 DiffGraph，不动原组件外壳</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:18.5px"><code>NodeData</code> 增可选状态并在节点组件透传；上限由调用方传参，共享包不写死默认值（待 <b>5.4</b> 定稿符号形态）</p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-02 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-02</code> 及关联 Spec、Acceptance、Plan 与素材（<code>c05</code>–<code>c08</code>、<code>c17</code>–<code>c19</code>），基于 5.1 已验证的差异模型完成合并图映射与 <code>DiffGraph</code></p>'
            '<p style="margin:0 0 8px">允许范围：在 <code>packages/jsoncrack-react/src/diff/**</code> 实现节点/边映射、可见集计算与含 <code>removed</code> 的上限判定；新增独立画布外壳 <code>DiffGraph.tsx</code> 复用同一套节点/边与布局；<code>types.ts</code> 为 <code>NodeData</code> 增可选状态字段并在 <code>CustomNode</code> / <code>ObjectNode</code> / <code>TextNode</code> 透传。上限数值一律由参数接收，不在共享包写死默认值或读环境变量</p>'
            '<p style="margin:0">禁止改动：<code>parser.ts</code>、<code>JSONCrackComponent.tsx</code>、已有 <code>NodeData</code> 字段语义与 <code>apps/**</code>。扩展 <code>scripts/check-diff.ts</code>（参数传入上限 2000）跑过全量断言，再跑通 <code>pnpm --filter jsoncrack-react lint</code> 与 <code>build</code></p>',
        )
        + "</div></div></div>"
    ),
    steps=["锁定 DiffGraph 与可选字段边界", "扩展 check-diff 与共享包构建", "委托要素与参数化上限"],
)

pending(
    scene,
    "p16",
    "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在 5.1 功能分支上发出 TASK-02 合并图映射请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p17",
    "完成边界",
    "怎样判断映射做到了完成边界？",
    "实操页占位：正式录制时展示映射改动范围、c17–c19 上限断言与共享包构建输出",
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
        '<p style="font-size:19.5px">直接核实 <code>/active</code> 与被删子树节点存在、标为 <code>removed</code>，连边正确，且 <code>c18</code>（2051 节点）判为超限</p></div></div>'
        '<div class="p-bar is-light" data-reveal="2">另一条边界：图数据能算出可见集合与超限结果 <b>不等于</b>「只看变化」界面和超限提示框已验收</div>'
    ),
    steps=["只查 After 为何失效", "核对映射节点、连边与上限", "数据就绪不等于界面已验收"],
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
    lead="共享包已经能产出带四种状态的合并图与 DiffGraph 组件，且原画布组件零改动。",
    html=sketch_recap(
        "本节核心判断",
        ["删除节点来自 Before", "两侧投影进同一份合并图", "removed 节点必须计入上限"],
        "本节留下",
        [
            "合并图映射、可见集计算与 <code>c17</code>–<code>c19</code> 上限断言",
            "独立的 <code>DiffGraph.tsx</code> 与 <code>NodeData</code> 可选状态",
            "原 <code>JSONCrackComponent</code> 零改动的构建结果",
        ],
        "下一节 5.3",
        "独立路由双输入与报错",
        "在 apps/www 新增 /diff 页面接入双输入，看一边出错时已有结果该怎么办",
    ),
    steps=["核心判断", "本节留下的成果", "进入 5.3 双输入"],
)

lesson.write()
