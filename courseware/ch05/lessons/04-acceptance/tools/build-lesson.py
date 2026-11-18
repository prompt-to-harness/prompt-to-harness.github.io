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
    summary="先把摘要和「只看变化」接到界面上并做局部检查，再按整组验收和 Review 判断整个功能有没有做完。",
    prep=[
        "确认教学副本处于同一功能分支，前三个任务已完成且共享包已最新构建",
        "启动 pnpm dev:www（开发环境上限 2000），准备浏览器 360px 尺寸、网络面板与灰度显示检查",
        "编辑器打开 docs/specs/ACCEPTANCE.md（AC-001～AC-021）与 TASKS.md（TASK-04）",
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
    lead="模型、映射与双输入已接通；本节先补齐摘要与筛选，再做全量验收和 Review",
    html=cover_handoff(
        4,
        "5.1–5.3 已就位",
        "模型、合并图与双输入错误恢复已通",
        "界面尚缺差异摘要、「只看变化」开关与无外链超限提示",
        "5.4 分两段收口",
        [
            "前半段：补齐摘要、筛选、灰度可辨认与超限提示",
            "后半段：走完 <code>AC-001~021</code>、单输入回归与 Review",
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
    lead="先补齐界面上的差异摘要区，用 fixtures/nested 核对摘要数字为什么是 3 而不是 5。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;align-items:stretch">'
        '<div data-reveal="0">'
        '<h3 style="font-size:20px;margin:0 0 6px">同一组嵌套输入（nested）</h3>'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'
        + json_card("Before", NESTED_BEFORE)
        + json_card("After", NESTED_AFTER)
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:10px;padding:7px 14px;font-size:18.5px">同理：<code>subtree</code> 整棵子树增删只在根部计 <b>2</b> 处（<code>AC-009</code>）</div>'
        "</div>"
        '<div data-reveal="1">'
        '<h3 style="font-size:20px;margin:0 0 6px">逐节点核对是否计入摘要（AC-003）</h3>'
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
    lead="把 5.2 图数据里的祖先信息接到界面开关上，对照两种筛选效果。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.1fr;gap:20px;align-items:stretch">'
        '<div data-reveal="0" style="display:flex;flex-direction:column;justify-content:space-between">'
        '<div><div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">藏掉全部未变化节点</h3><span class="p-chip" data-role="gate">✗ 上下文丢失</span></div>'
        + TREE_HIDE_ALL
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:8px;padding:7px 14px;font-size:18.5px"><code>/user</code> 容器消失，看不出 <code>age</code> 属于哪个对象</div></div>'
        '<div data-reveal="1" style="display:flex;flex-direction:column;justify-content:space-between">'
        '<div><div class="p-head" style="margin-bottom:6px"><h3 style="font-size:21px;margin:0">保留通向差异的必要祖先</h3><span class="p-chip" data-role="ok">✓ AC-004</span></div>'
        + TREE_KEEP_CONTEXT
        + "</div>"
        '<div class="p-bar is-light" style="margin-top:8px;padding:7px 14px;font-size:18.5px">可见 <b>5</b> 条路径，<code>/user/name</code> 隐藏，差异数保持 <b>3</b></div></div></div>'
        '<div class="p-bar" data-reveal="2"><code>/user</code> 留下是为了保留路径上下文，不增加差异数；关闭开关后 <code>/user/name</code> 重新显示</div>'
    ),
    steps=["全藏会丢失路径上下文", "保留必要祖先与 removed", "切换开关不改变差异数"],
)

scene(
    id="p34",
    segment="还没看见的部分",
    label="收尾验收查什么？对不上时回哪一层",
    title="收尾验收查什么？对不上时回哪一层？",
    lead="前半段补齐灰度与超限局部检查，后半段全量走查并按三类情况处理规格回环。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="0" style="padding:11px 16px">'
        '<div class="p-head"><h3 style="font-size:21px">前半段：剩余两项局部检查</h3><span class="p-tag" data-role="ctx">AC-015~017</span></div>'
        '<p style="font-size:18px">1. <b>灰度可辨认</b>：去色后凭符号/文字区分四状态<br>2. <b>上限 2000</b>：超限不画图只提示太大、无外链，removed 计入</p></div>'
        '<div class="p-box" data-role="us" data-reveal="1" style="padding:11px 16px">'
        '<div class="p-head"><h3 style="font-size:21px">后半段：全量验收与回归</h3><span class="p-tag" data-role="us">整组收口</span></div>'
        '<p style="font-size:18px">走完 <b>AC-001～AC-021</b>（含 <code>null</code> 等价）+ <code>360px</code> 窄窗 + 筛选态网络零外发 + 单输入五路回归 + Review</p></div></div>'
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
    steps=["灰度与节点上限局部检查", "AC-001~021 全量走查与回归", "结果对不上时的三条回环路径"],
)


# ---------- 怎样发出请求 ----------
scene(
    id="p35",
    segment="怎样发出请求",
    label="怎样发一次请求，完成收尾与整体验收",
    title="怎样发一次请求，完成收尾与整体验收？",
    lead="接上最后一块视图拼图，跑通构建、全套验收与单输入五路回归。",
    html=(
        diff_arch(active="ui", done=("model", "graph", "input"), reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">构建 + 全量走查 + 五路回归</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:18.5px">跑 <code>www lint</code> 与 <code>build:www</code>；在 <code>dev:www</code> 走完 <code>AC-001~021</code>、三项专项及 Graph / Tree / 导入 / <code>?json=</code> / widget</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">守住未决边界与人工 Review</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:18.5px">不固化 <code>REQ-032~037</code>，不做第 6 章 <code>CR-01</code>；可用 <code>/review</code> 辅助查 diff，最终由人按证据裁决</p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-04 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-04</code> 及关联 Spec、Acceptance 与固定素材，基于前三个任务的成果完成摘要、筛选与整体验收</p>'
            '<p style="margin:0 0 8px">允许范围：在 Diff 视图新增差异摘要区、「只看变化」开关与无外链的专用超限提示组件；不改单输入原 <code>NotSupported</code> 组件，不固化 <code>REQ-032~037</code>，不做第 6 章 <code>CR-01</code></p>'
            '<p style="margin:0">运行 <code>pnpm --filter www run lint</code> 与 <code>pnpm build:www</code>，启动 <code>pnpm dev:www</code> 按 <code>AC-001～AC-021</code> 逐条走查，完成 360px、灰度、网络面板核对与单输入五路回归</p>',
        )
        + "</div></div></div>"
    ),
    steps=["接齐最后一块视图切片", "构建与全套验收回归", "未决边界与 Review 要求"],
)

pending(
    scene,
    "p36",
    "怎样发出请求",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在 5.3 分支基础上发出 TASK-04 收尾与验收请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p37",
    "完成边界",
    "怎样判断摘要、筛选和整个功能做到了完成边界？",
    "实操页占位：正式录制时展示摘要筛选、超限灰度、360px、单输入回归与 Review 结果",
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
        '<span class="p-tag" data-role="ctx">5.1 模型脚本</span>'
        '<h3 style="font-size:21px;margin:4px 0">只保纯函数</h3>'
        '<p style="font-size:18px">证明路径比较与计数规则，不保画布与页面</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="0" style="padding:12px 14px">'
        '<span class="p-tag" data-role="ctx">5.2 映射脚本</span>'
        '<h3 style="font-size:21px;margin:4px 0">只保图数据</h3>'
        '<p style="font-size:18px">证明节点与连边结构，不保网页开关交互</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="padding:12px 14px">'
        '<span class="p-tag" data-role="ctx">5.3 + 5.4 前半</span>'
        '<h3 style="font-size:21px;margin:4px 0">只保局部交互</h3>'
        '<p style="font-size:18px">nested 上能读摘要和切开关，尚未覆盖全量边界</p></div>'
        '<div class="p-box" data-role="gate" data-reveal="1" style="padding:12px 14px">'
        '<span class="p-tag" data-role="gate">5.4 后半必查</span>'
        '<h3 style="font-size:21px;margin:4px 0">整体验收收口</h3>'
        '<p style="font-size:18px">超限、灰度、360px、网络面板、五路回归与 Review</p></div></div>'
        '<div class="p-bar" data-reveal="2">四层证据各司其职、<b>不能互相替代</b>；全套 <code>AC-001~021</code>、单输入回归与 Review 全部过关才算完成</div>'
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
        ["界面拼齐不等于做完", "全套 AC + 回归 + Review", "冲突按层级回溯规格"],
        "交接给第 6 章",
        [
            "通过本章验收的 JSON Diff 与本地检查点",
            "代码 Review 结论与可解释的 <code>git diff</code>",
            "完整的 <code>CH05_IMPLEMENTATION.md</code>",
        ],
        "下一节 5.5",
        "可带走的招数",
        "不再写新功能、不设门禁，轻松看一组随手能用的 Vibe Coding 招数",
    ),
    steps=["核心判断", "交接给第 6 章的成果", "进入 5.5 经验分享"],
)

lesson.write()
