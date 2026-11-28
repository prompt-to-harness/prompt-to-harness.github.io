#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""5.4 各部分都做了，能说整个功能完成了吗：页面源，生成 lesson.js。"""
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
    "5.4",
    "各部分都做了，能说整个功能完成了吗",
    summary="先把摘要、「只看变化」与状态符号定稿接到界面，再按 AC-01~AC-23、三端 lint/build 与单输入回归判断整个功能是否完成。",
    prep=[
        "确认教学副本处于同一功能分支，TASK-01~TASK-03 已完成且共享包已最新 build",
        "启动 pnpm dev:www（开发环境上限 2000），准备浏览器 360px 窄窗、Network 面板与灰度检查",
        "编辑器打开 ACCEPTANCE.md（AC-01~AC-23）、TASKS.md（TASK-04）与全部 20 组素材（含 c23-single-input）",
    ],
)
scene = lesson.scene

NESTED_BEFORE = [
    "{",
    '  "user": { "name": "Lin", "age": 20 },',
    '  "active": true',
    "}",
]

NESTED_AFTER = [
    "{",
    '  "user": { "name": "Lin", "age": 21 },',
    '  "role": "student"',
    "}",
]

TREE_COUNT = (
    '<ul class="p-tree ch5-tree">'
    f'<li class="is-open"><span class="p-path">/</span>{sym_badge("anc")}{sym_badge("nocnt")}'
    "<ul>"
    f'<li class="is-open"><span class="p-path">user</span>{sym_badge("anc")}{sym_badge("nocnt")}'
    "<ul>"
    '<li><span class="p-path">name: Lin</span></li>'
    f'<li class="is-target"><span class="p-path">age: 20 → 21</span>{sym_badge("chg")}{sym_badge("cnt")}</li>'
    "</ul></li>"
    f'<li class="is-block"><span class="p-path">active: true</span>{sym_badge("rem")}{sym_badge("cnt")}</li>'
    f'<li class="is-allow"><span class="p-path">role: student</span>{sym_badge("add")}{sym_badge("cnt")}</li>'
    "</ul></li></ul>"
)

TREE_HIDE_ALL = (
    '<ul class="p-tree ch5-tree">'
    f'<li class="is-target"><span class="p-path">age: 20 → 21</span>{sym_badge("chg")}</li>'
    f'<li class="is-block"><span class="p-path">active: true</span>{sym_badge("rem")}</li>'
    f'<li class="is-allow"><span class="p-path">role: student</span>{sym_badge("add")}</li>'
    "</ul>"
)

TREE_KEEP_CONTEXT = (
    '<ul class="p-tree ch5-tree">'
    f'<li class="is-open"><span class="p-path">/</span>{sym_badge("anc")}'
    "<ul>"
    f'<li class="is-open"><span class="p-path">user</span>{sym_badge("anc")}'
    "<ul>"
    '<li class="is-dim"><span class="p-path">name: Lin</span><span class="p-note">隐藏</span></li>'
    f'<li class="is-target"><span class="p-path">age: 20 → 21</span>{sym_badge("chg")}</li>'
    "</ul></li>"
    f'<li class="is-block"><span class="p-path">active: true</span>{sym_badge("rem")}</li>'
    f'<li class="is-allow"><span class="p-path">role: student</span>{sym_badge("add")}</li>'
    "</ul></li></ul>"
)


# ---------- 开篇 ----------
scene(
    id="p31",
    segment="开篇",
    layout="lesson-cover",
    label="各部分都做了，能说整个功能完成了吗",
    title="能说整个功能完成了吗？",
    lead="模型、DiffGraph 与 /diff 已通；本节补齐摘要筛选、定稿符号并全量验收",
    html=cover_handoff(
        4,
        "5.1–5.3 已就位",
        "模型、合并图与 /diff 报错保留已通",
        "界面尚缺差异摘要、「只看变化」开关与四状态文字/符号定稿",
        "5.4 分两段收口",
        [
            "前半段：补齐摘要、筛选、定稿状态符号（<code>AC-21</code>）",
            "后半段：全量 <code>AC-01~23</code>、三端 <code>lint/build</code> 与 Review",
        ],
    ),
    steps=["本章位置", "5.1–5.3 已就位", "两段收口安排"],
)


# ---------- 还没看见的部分 ----------
scene(
    id="p32",
    segment="还没看见的部分",
    label="同一组嵌套案例，摘要差异数是几",
    title="同一组嵌套案例，摘要差异数是几？",
    lead="先补齐界面上的差异摘要区，用 c03-nested 核对摘要数字为什么是 3 而不是 5。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;align-items:stretch">'
        '<div data-reveal="0">'
        '<h3 style="font-size:20px;margin:0 0 6px">同一组嵌套输入（c03-nested）</h3>'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
        + json_card("Before", NESTED_BEFORE)
        + json_card("After", NESTED_AFTER)
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:10px;padding:7px 14px;font-size:18.5px">同理：<code>c05~c08</code> 整棵对象或数组增删只在根部计 <b>1</b> 处（<code>AC-05~08</code>）</div>'
        "</div>"
        '<div data-reveal="1">'
        '<h3 style="font-size:20px;margin:0 0 6px">逐节点核对是否计入摘要（AC-03）</h3>'
        + TREE_COUNT
        + "</div></div>"
        '<div class="p-bar" data-reveal="2">摘要差异数为 <b>3</b>，不是 5——只统计直接差异处，<code>/</code> 与 <code>/user</code> 祖先标记不重复计入</div>'
    ),
    steps=["嵌套输入与子树规则", "祖先标记不计入差异数", "摘要差异数为 3"],
)

scene(
    id="p33",
    segment="还没看见的部分",
    label="打开「只看变化」，图上该留下什么",
    title="打开「只看变化」，图上该留下什么？",
    lead="把 5.2 图数据里的可见集合接到「只看变化」开关上，对照两种筛选效果。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.1fr;gap:20px;align-items:stretch">'
        '<div data-reveal="0" style="display:flex;flex-direction:column;justify-content:space-between">'
        '<div><div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">藏掉全部未变化节点</h3><span class="p-chip" data-role="gate">✗ 上下文丢失</span></div>'
        + TREE_HIDE_ALL
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:8px;padding:7px 14px;font-size:18.5px"><code>/user</code> 容器消失，看不出 <code>age</code> 属于哪个对象</div></div>'
        '<div data-reveal="1" style="display:flex;flex-direction:column;justify-content:space-between">'
        '<div><div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">保留通向差异的必要祖先</h3><span class="p-chip" data-role="ok">✓ AC-03 · REQ-016~19</span></div>'
        + TREE_KEEP_CONTEXT
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:8px;padding:7px 14px;font-size:18.5px">保留 <code>/user</code> 与 <code>removed</code>，隐藏 <code>/user/name</code>，差异数仍为 <b>3</b></div></div></div>'
        '<div class="p-bar" data-reveal="2"><code>c06</code> 整棵被删子树在「只看变化」下同样保留显示；关闭开关后 <code>/user/name</code> 恢复</div>'
    ),
    steps=["全藏会丢失路径上下文", "保留必要祖先与 removed", "切换开关不改变差异数"],
)

scene(
    id="p34",
    segment="还没看见的部分",
    label="收尾验收查什么？对不上时回哪一层",
    title="收尾验收查什么？对不上时回哪一层？",
    lead="前半段定稿符号并局部核对，后半段跑通全套 23 条验收、三端构建与单输入回归。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:11px 16px">'
        '<div class="p-head"><h3 style="font-size:21px">前半段：符号定稿与局部检查</h3><span class="p-tag" data-role="ctx">AC-21</span></div>'
        '<p style="font-size:18px">1. <b>非纯颜色可辨认</b>：定稿节点文字/符号，去色下分辨四状态<br>2. <b>摘要与筛选</b>：仅显示直接差异数，不提前固化 <code>REQ-036</code></p></div>'
        '<div class="p-box" data-role="us" data-reveal="1" style="padding:11px 16px">'
        '<div class="p-head"><h3 style="font-size:21px">后半段：全量验收与三端回归</h3><span class="p-tag" data-role="us">AC-01~23</span></div>'
        '<p style="font-size:18px">走完 <b>20 组素材 AC-01~23</b> + <code>360px</code>（<code>AC-22</code>）+ 单输入（<code>AC-23</code>）+ <code>www/react/vscode</code> 六命令 + Review</p></div></div>'
        '<div class="p-grid" style="--n:3;gap:14px" data-reveal="2">'
        '<div class="p-box is-soft" data-role="tool" style="padding:10px 14px">'
        '<span class="p-tag" data-role="tool" style="margin-bottom:6px">规则清楚 · 结果偏离</span>'
        '<p style="font-size:18px">修代码或核对步骤，<b>绝不改期望</b></p></div>'
        '<div class="p-box is-soft" data-role="ctx" style="padding:10px 14px">'
        '<span class="p-tag" data-role="ctx" style="margin-bottom:6px">规则已定 · 漏了案例</span>'
        '<p style="font-size:18px">先补 <code>ACCEPTANCE</code> 与 <code>TASKS</code> 再回归</p></div>'
        '<div class="p-box is-soft" data-role="gate" style="padding:10px 14px">'
        '<span class="p-tag" data-role="gate" style="margin-bottom:6px">产品行为本身要改</span>'
        '<p style="font-size:18px"><b>由人批准</b>后同步 <code>SPEC → AC → TASKS</code></p></div></div>'
    ),
    steps=["状态符号定稿与局部核对", "AC-01~23 与三端六命令回归", "结果对不上时的三条回环路径"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p35",
    segment="怎样发出请求",
    label="怎样发一次请求，完成收尾与整体验收",
    title="怎样发一次请求，完成收尾与整体验收？",
    lead="接上摘要与筛选并定稿符号，跑通 23 条验收、三端 lint/build 与单输入回归。",
    html=(
        diff_arch(active="ui", done=("model", "graph", "input"), reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">AC-01~23 + 三端六命令回归</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:18.5px"><code>dev:www</code> 走完 20 组素材（含 360px、灰度与 <code>c23</code> 单输入）；跑通 <code>www / react / vscode</code> 各自 <code>lint + build</code></p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">守住未决边界与人工 Review</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:18.5px">不加 <code>REQ-032~037</code> 扩展能力，不做第 6 章 <code>CR-01</code>；可用 <code>/review</code> 查 diff，由人按证据裁决</p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-04 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-04</code> 及关联 Spec、<code>ACCEPTANCE.md</code>（AC-01~23）与全套 20 组素材，完成摘要、筛选、状态符号定稿与整体验收</p>'
            '<p style="margin:0 0 8px">允许范围：完善 <code>features/diff/**</code>、<code>useDiff.ts</code>（仅内存，不持久化）、<code>pages/diff.tsx</code> 与 <code>Navbar.tsx</code>，在 <code>CustomNode</code> / <code>ObjectNode</code> / <code>TextNode</code> 定稿非纯颜色状态文字或符号（AC-21）；如有映射缺陷可修 <code>src/diff/**</code></p>'
            '<p style="margin:0 0 8px">禁止改动：<code>§0</code> 六个禁止修改文件，且摘要仅展示直接差异数（不做 REQ-035 清单 / REQ-036 分类计数，不写 REQ-033 持久化，不做第 6 章 <code>CR-01</code>）</p>'
            '<p style="margin:0">走完 <code>AC-01</code>~<code>AC-23</code>（含 360px、灰度、Network、<code>c23-single-input</code>），跑通 <code>www</code> / <code>jsoncrack-react</code> / <code>vscode</code> 的 <code>lint</code> 与 <code>build</code> 并核查 <code>git diff --stat</code></p>',
        )
        + "</div></div></div>"
    ),
    steps=["接入摘要、筛选与符号定稿", "AC-01~23 与三端六命令回归", "未决边界与 Review 要求"],
)

pending(
    scene,
    "p36",
    "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在 5.3 分支基础上发出 TASK-04 收尾与整体验收请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p37",
    "完成边界",
    "怎样判断摘要、筛选和整个功能做到了完成边界？",
    "实操页占位：正式录制时展示 AC-01~23、三端 lint/build、禁区零改动与 Review 结果",
)

scene(
    id="p38",
    segment="完成边界",
    label="摘要和筛选能用了，就算功能做完了吗",
    title="摘要和筛选能用了，就算功能做完了吗？",
    lead="对照四层验证各自的覆盖面，看清为什么局部接通不能代替整体验收。",
    html=(
        '<div class="p-grid" style="--n:4;gap:14px">'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="0" style="padding:12px 14px">'
        '<span class="p-tag" data-role="ctx">5.1 check-diff</span>'
        '<h3 style="font-size:21px;margin:4px 0">只保纯函数</h3>'
        '<p style="font-size:18px">证明 c01–c13 模型逻辑，不保画布与页面</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="0" style="padding:12px 14px">'
        '<span class="p-tag" data-role="ctx">5.2 映射脚本</span>'
        '<h3 style="font-size:21px;margin:4px 0">只保图数据与上限</h3>'
        '<p style="font-size:18px">证明节点结构与 c18 超限，不保网页交互</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="padding:12px 14px">'
        '<span class="p-tag" data-role="ctx">5.3 + 5.4 前半</span>'
        '<h3 style="font-size:21px;margin:4px 0">只保局部界面</h3>'
        '<p style="font-size:18px">nested 上能读摘要和切开关，未覆全量边界</p></div>'
        '<div class="p-box" data-role="gate" data-reveal="1" style="padding:12px 14px">'
        '<span class="p-tag" data-role="gate">5.4 后半必查</span>'
        '<h3 style="font-size:21px;margin:4px 0">整体验收收口</h3>'
        '<p style="font-size:18px">AC-01~23、360px、AC-23、三端构建与 Review</p></div></div>'
        '<div class="p-bar" data-reveal="2">四层证据各司其职、<b>不能互相替代</b>；全套 <code>AC-01~23</code>、三端 <code>lint/build</code> 与 Review 全过才算完成</div>'
    ),
    steps=["前两节离线脚本边界", "界面局部接通 vs 全量收口", "四层证据不可互相替代"],
)


# ---------- 自检与交接 ----------
scene(
    id="p39",
    segment="自检与交接",
    label="走查结果与规则冲突，哪种做法对",
    title="走查结果与规则冲突，哪种做法对？",
    lead="整体验收走查时，如果发现计数、祖先保留或超限行为与已批准规则不符，先判断怎么处理。",
    html=quiz_cards(
        "顺着当前代码表现去改规则，或虚构一条「漏掉的需求」替代码圆场",
        "不对。不能篡改已批准规则迁就错误实现，也不能把已确认的规则重新说成未决",
        "以已批准规则为准：实现偏离修代码，漏案例补 Acceptance 与 Tasks，改行为须由人批准更新 Spec",
        "对。按真实原因分流回到对应层；若原本没有规格缺口就直接验证，绝不生造问题",
        right=2,
    ),
    steps=["暂停比较两种处理", "做法一为什么错", "做法二为什么对"],
)

scene(
    id="p40",
    segment="自检与交接",
    label="带着什么进入 5.5",
    title="带着什么进入 5.5？",
    lead="JSON Diff 在第 5 章的开发与验收至此全部收口，成果将交接给第 6 章。",
    html=sketch_recap(
        "本节核心判断",
        ["界面拼齐不等于做完", "AC-01~23 + 三端回归", "冲突按层级回溯规格"],
        "交接给第 6 章",
        [
            "通过 <code>AC-01~23</code> 的 JSON Diff 与本地检查点",
            "三端 <code>lint/build</code>、Review 结论与可解释 diff",
            "完整的 <code>CH05_IMPLEMENTATION.md</code>",
        ],
        "下一节 5.5",
        "可带走的招数",
        "不再写新功能、不设门禁，轻松看一组随手能用的 Vibe Coding 招数",
    ),
    steps=["核心判断", "交接给第 6 章的成果", "进入 5.5 经验分享"],
)

lesson.write()
