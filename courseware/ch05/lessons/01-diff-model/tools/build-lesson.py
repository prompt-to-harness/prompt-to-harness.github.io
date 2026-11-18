#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""5.1 规格写好了，怎么知道第一个任务做对了：页面源，生成 lesson.js。"""
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
    teach,
)

lesson = Lesson(
    __file__,
    "5.1",
    "规格写好了，怎么知道第一个任务做对了",
    summary="从一组能当场核对的输入看清差异模型，立住本章工作方式，再用七组已核算期望判断第一个任务的完成边界。",
    prep=[
        "在教学副本 jsoncrack.com 核对当前位于 course/ch05-baseline 规格提交，git status --short 工作区干净",
        "编辑器预先打开 docs/specs/TASKS.md（TASK-01）、SPEC.md、ACCEPTANCE.md 与 docs/specs/fixtures/",
        "准备一个位于仓库外的工作目录（如 /tmp/ch05-check）存放不入库的一次性核对脚本",
    ],
)
scene = lesson.scene

KEY_ORDER_BEFORE = [
    "{",
    '  "user": { "name": "Lin", "age": 20 },',
    '  "active": true',
    "}",
]

KEY_ORDER_AFTER = [
    "{",
    '  "active": true,',
    '  "user": { "age": 20, "name": "Lin" }',
    "}",
]

FIXTURE_CARDS = [
    ("ctx", "key-order", "对象键换序 → 0 处差异"),
    ("ctx", "identical", "字节完全一致 → 0 处差异"),
    ("us", "nested", "增 / 删 / 改各 1，祖先不计 → 3 处"),
    ("us", "array-index", "[10,20] → [5,10,20] 按下标 → 3 处"),
]

FIXTURE_CARDS_ROW2 = [
    ("tool", "type-change", '1 → "1" 记 changed → 1 处'),
    ("tool", "subtree", "整棵子树增删只计根 → 2 处"),
    ("ok", "null-equiv", "null 等同路径不存在（REQ-038）"),
]

EXPECT_ROWS = [
    ("fixtures/key-order", True, "差异数 0，全部 unchanged，无下层变化标记"),
    ("fixtures/identical", True, "差异数 0，无任何标记"),
    ("fixtures/nested", False, "差异数 3（age 改 · active 删 · role 增）；/ 与 /user 标下层有变化但不计处"),
    ("fixtures/array-index", False, "[10,20] → [5,10,20] 差异数 3（下标 0、1 改，下标 2 增），不做移动配对"),
    ("fixtures/type-change", False, '/v 由 1 变为 "1" 记 changed，差异数 1'),
    ("fixtures/subtree", False, "差异数 2（只在 /gone 与 /extra 根计处，子节点带状态不单计）"),
    ("fixtures/null-equiv", False, '{"a":null} 与 {} 差异数 0；{"a":1} 变 {"a":null} 记 /a removed、差异数 1'),
]


# ---------- 开篇 ----------
scene(
    id="p01",
    segment="开篇",
    layout="lesson-cover",
    label="规格写好了，怎么知道第一个任务做对了",
    title="怎么知道第一个任务做对了？",
    lead="上一章提交了规格基线，生产代码还没有 JSON Diff；这一节先完成并核对第一个任务",
    html=cover_handoff(
        1,
        "第 4 章已就位",
        "已提交的五层规格与固定素材",
        "<code>docs/specs/</code> 与 <code>fixtures/</code> 已入库，生产代码尚未改动",
        "5.1 完成后留下",
        [
            "通过七组固定素材验证的纯函数差异模型",
            "工作区外的一次性核对脚本与检查结果",
            "<code>CH05_IMPLEMENTATION.md</code> 实施记录初稿",
        ],
    ),
    steps=["本章位置", "第 4 章已就位", "本节要留下什么"],
)


# ---------- 可核对的输入 ----------
scene(
    id="p02",
    segment="可核对的输入",
    label="这组输入，差异该是多少",
    title="这组输入，差异该是多少？",
    lead="先不讲任务步骤，打开 docs/specs/fixtures/key-order/，按已批准规则判断比较结果。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch">'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch" data-reveal="0">'
        + json_card("Before", KEY_ORDER_BEFORE, "key-order/before.json")
        + json_card("After", KEY_ORDER_AFTER, "key-order/after.json")
        + "</div>"
        '<div class="p-box" data-role="us" data-reveal="2" style="display:flex;flex-direction:column;justify-content:center;padding:16px 20px">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3 style="font-size:25px;margin:4px 0 8px">按已批准的 Spec，差异数是几？</h3>'
        '<p style="font-size:19px;color:var(--p-muted)">提示：回想 4.3 对字段顺序的决定</p></div></div>'
        '<div class="p-bar is-light" data-reveal="1">两份 JSON 的字段集合与值完全一致，只是顶层与 <code>user</code> 内部的<b>键顺序</b>调换了</div>'
        '<div class="p-bar" data-reveal="3">差异数为 <b>0</b>，所有路径均为 <code>unchanged</code>，不出现「字段顺序变化」条目（<code>REQ-007</code> · <code>AC-006</code>）</div>'
        '<p class="source-note">实际素材：docs/specs/fixtures/key-order/；按已批准规则核算</p>'
    ),
    steps=["固定输入 Before 与 After", "只是键顺序不同", "先自己判断", "差异数为 0"],
)

scene(
    id="p03",
    segment="可核对的输入",
    label="检查键顺序，还是对调两侧",
    title="检查键顺序，还是对调两侧？",
    lead="分清对象内部键换序与对调 Before / After 的区别，并看清为什么不能复用现有解析器的节点 id。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:20px" data-reveal="0">'
        '<div class="p-box" data-role="ctx" style="padding:14px 18px"><div class="p-head"><h3>对象内部键换序</h3><span class="p-tag" data-role="ctx">结果不变</span></div>'
        '<p style="font-family:var(--p-mono);font-size:18px">{"a":1,"b":2} ↔ {"b":2,"a":1}</p>'
        '<p style="margin-top:6px">两侧同路径取值相同，差异数恒为 <b>0</b></p></div>'
        '<div class="p-box" data-role="gate" style="padding:14px 18px"><div class="p-head"><h3>对调 Before 与 After</h3><span class="p-tag" data-role="gate">方向反转</span></div>'
        '<p style="font-family:var(--p-mono);font-size:18px">{"x":1} → {} 为 removed；反过来是 added</p>'
        '<p style="margin-top:6px">不能笼统写成「输入顺序不影响结果」</p></div></div>'
        '<div class="p-pair" style="margin-top:4px">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="1" style="padding:12px 16px">'
        '<span class="p-tag" data-role="gate">现有 parser.ts 的风险</span>'
        '<p style="font-size:19.5px">按字段<b>出现顺序</b>发放节点 id，直接复用会把键换序误报成差异</p></div>'
        '<div class="p-join" data-reveal="2"><span>改用</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="tool" data-reveal="2" style="padding:12px 16px">'
        '<span class="p-tag" data-role="tool">差异模型做法</span>'
        '<p style="font-size:19.5px">绕开节点 id，统一按 <code>/user/name</code> 这样的 <b>JSON 路径</b>对齐两侧</p></div></div>'
    ),
    steps=["键换序 vs 对调两侧", "parser.ts 顺序 id 风险", "按 JSON 路径对齐"],
)

scene(
    id="p04",
    segment="可核对的输入",
    label="除了键换序，模型还要覆盖哪些情况",
    title="除了键换序，模型还要覆盖哪些情况？",
    lead="键换序只验证了一条规则；当前基线上 TASK-01 一共要跑通七组固定素材。",
    html=(
        '<div class="ch5-fx-grid" data-reveal="0">'
        + "".join(
            f'<div class="ch5-fx-card" data-role="{r}"><code>{n}</code><span>{d}</span></div>'
            for r, n, d in FIXTURE_CARDS
        )
        + "</div>"
        '<div class="ch5-fx-grid" style="grid-template-columns:repeat(3,minmax(0,1fr))" data-reveal="1">'
        + "".join(
            f'<div class="ch5-fx-card" data-role="{r}"><code>{n}</code><span>{d}</span></div>'
            for r, n, d in FIXTURE_CARDS_ROW2
        )
        + "</div>"
        '<div class="p-bar" data-reveal="2">本节只核对纯函数输出的<b>状态、差异数与下层变化标记</b>；合并图、双输入、筛选与超限留给后续任务</div>'
        '<p class="source-note">对应 AC-002、AC-003、AC-005～AC-009、AC-011、AC-020、AC-021（编号以各自规格为准）</p>'
    ),
    steps=["四组基础比较规则", "三组类型、子树与空值规则", "本节纯函数核对边界"],
)


# ---------- 本章怎么干活 ----------
scene(
    id="p05",
    segment="本章怎么干活",
    label="怎样让 Agent 只完成这一个任务",
    title="怎样让 Agent 只完成这一个任务？",
    lead="先在全章架构图里锁死修改边界，再明确离线核对方式与委托请求要素。",
    html=(
        diff_arch(active="model", reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">离线验证（不引测试框架）</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:19px">工作区外一次性脚本跑齐 <b>7 组固定素材</b>对照手算期望，再跑 <code>pnpm --filter jsoncrack-react run lint</code></p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">请求要素与未决收敛</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:19px">带齐 <code>TASK-01</code>、关联规则与全局非目标；<code>null</code> 按 <code>REQ-038</code> 等同缺失，其余未决细则收敛进单一值比较函数</p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-01 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-01</code> 及关联的已批准 Spec、Acceptance、<code>docs/specs/fixtures/</code> 固定素材与全局非目标，只完成差异模型任务</p>'
            '<p style="margin:0 0 8px">允许范围：新增 <code>packages/jsoncrack-react/src/diff/</code> 并更新共享包导出；不改共享组件、渲染、网页版与 <code>parser.ts</code>。按路径对齐两侧；<code>null</code> 与字段缺失按 <code>REQ-038</code> 同等处理，<code>1</code> 与 <code>1.0</code> 等未决细则收敛到可替换函数</p>'
            '<p style="margin:0">用留在工作区外的一次性脚本跑齐 <code>key-order</code>、<code>identical</code>、<code>nested</code>、<code>array-index</code>、<code>type-change</code>、<code>subtree</code>、<code>null-equiv</code> 七组已核算期望（不调用待测逻辑自产期望），并运行 <code>pnpm --filter jsoncrack-react run lint</code></p>',
        )
        + "</div></div></div>"
    ),
    steps=["锁死架构修改边界", "工作区外脚本与 lint 验证", "委托要素与请求参考"],
    teaching=teach(("工作方式只立一次", "5.1 用这一页把“定范围 → 委托 → 独立期望核对 → 查 diff”立住，5.2–5.4 直接沿用，不再重复讲流程定义。")),
)

pending(
    scene,
    "p06",
    "本章怎么干活",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在教学副本核对分支起点并发出 TASK-01 请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p07",
    "完成边界",
    "怎样判断这一次做到了完成边界？",
    "实操页占位：正式录制时展示 git status、diff 范围与七组素材核对输出",
)

scene(
    id="p08",
    segment="完成边界",
    label="只过两组案例，模型任务算完成了吗",
    title="只过两组案例，模型任务算完成了吗？",
    lead="相同输入和对象键换序都通过了，先对照完整期望表判断还差什么。",
    html=(
        '<div class="ch5-table">'
        '<div class="is-head"><span>固定素材</span><span>当前状态</span><span>独立核算期望（不能由待测逻辑生成）</span></div>'
        + "".join(
            f'<div data-reveal="{0 if done else 1}">'
            f'<span><code>{name}</code></span>'
            f'<span><em style="font-style:normal" class="p-chip" data-role="{"ok" if done else "gate"}">{"已抽查 ✓" if done else "仍须核对"}</em></span>'
            f"<span>{exp}</span></div>"
            for name, done, exp in EXPECT_ROWS
        )
        + "</div>"
        '<div class="p-bar" data-reveal="2">还不算完成：<b>7 组期望全部对上</b>、<code>lint</code> 通过，且 <code>git diff</code> 只落在允许范围内，才能标记任务完成</div>'
    ),
    steps=["已抽查的两组零差异案例", "其余五组必查规则", "回看 diff 边界才算完成"],
)


# ---------- 自检与交接 ----------
scene(
    id="p09",
    segment="自检与交接",
    label="核对结果与期望不符，哪种做法对",
    title="核对结果与期望不符，哪种做法对？",
    lead="跑完一次性脚本后，如果某组输出和手算期望对不上，先自己判断该怎么处理。",
    html=quiz_cards(
        "把脚本里的预期改成当前实现跑出来的结果，让检查先通过",
        "不对。期望来自已批准的规则与人工核算，改期望迁就实现会让检查彻底失效",
        "先核对固定输入、手算期望与 Spec，再排查模型实现或脚本哪里写偏了",
        "对。先确认判断基准无误，再定位代码或脚本偏离，绝不拿错误逻辑自证正确",
        right=2,
    ),
    steps=["暂停比较两种做法", "做法一为什么错", "做法二为什么对"],
)

scene(
    id="p10",
    segment="自检与交接",
    label="带着什么进入 5.2",
    title="带着什么进入 5.2？",
    lead="实现写法可以与讲师不同，但必须能解释固定输入、预期、实际结果与代码改动。",
    html=sketch_recap(
        "本节核心判断",
        ["跑通两个例子", "不等于任务完成", "全量期望 + diff 边界都要过"],
        "本节留下",
        [
            "通过七组素材验证的差异模型",
            "工作区外的一次性核对脚本与结果",
            "<code>CH05_IMPLEMENTATION.md</code> 初稿",
        ],
        "下一节 5.2",
        "合并图映射",
        "拿着已验证的模型，解决被删除的字段怎样画到结果图上",
    ),
    steps=["核心判断", "本节留下的成果", "进入 5.2 合并图"],
)

lesson.write()
