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
    summary="从一组能当场核对的输入看清差异模型，立住本章工作方式，再用 13 组固定素材期望判断第一个任务的完成边界。",
    prep=[
        "在教学副本 jsoncrack.com 核对当前位于第 4 章提交的规格基线（course/ch04-baseline），git status --short 工作区干净",
        "编辑器预先打开 docs/specs/TASKS.md（TASK-01）、SPEC.md、ACCEPTANCE.md、PLAN.md 与 docs/specs/fixtures/index.json",
        "确认终端 Node.js 版本可直接执行 packages/jsoncrack-react/scripts/check-diff.ts（Node 22.6+，推荐 Node 24+）",
    ],
)
scene = lesson.scene

KEY_ORDER_BEFORE = [
    "{",
    '  "name": "Lin",',
    '  "age": 20,',
    '  "tags": ["a", "b"]',
    "}",
]

KEY_ORDER_AFTER = [
    "{",
    '  "tags": ["a", "b"],',
    '  "age": 20,',
    '  "name": "Lin"',
    "}",
]

FIXTURE_CARDS = [
    ("ctx", "c01-identical", "完全一致 → 0 处差异"),
    ("ctx", "c02-key-order", "对象键换序 → 0 处差异"),
    ("us", "c03 · c04 嵌套与混合", "nested / crud 增删改 → 3 处"),
    ("us", "c09-array-index", "[10,20] → [5,10,20] → 3 处"),
]

FIXTURE_CARDS_ROW2 = [
    ("tool", "c10-type-change", '1 → "1" 记 changed → 1 处'),
    ("tool", "c05~c08 子树整增删", "对象 / 数组子树仅根计 → 1 处"),
    ("ok", "c11~c13 null 等价", "null 视同路径不存在（REQ-003）"),
]

EXPECT_ROWS = [
    ("c02-key-order", True, "对象键换序：差异数 0，全部 unchanged，无顺序变化条目"),
    ("c01-identical", True, "相同输入：差异数 0，全部节点 unchanged"),
    ("c03-nested / c04-crud", False, "差异数 3；c03 的 / 与 /user 带 hasDiffDescendant 不计处"),
    ("c09-array-index", False, "[10,20] → [5,10,20] 差异数 3（0、1 改，2 增），无移动标记"),
    ("c10-type-change", False, '/count 由 1 变为 "1" 记 changed，差异数 1，不单分类型分类'),
    ("c05~c08 子树整增删", False, "新增或删除 /cfg（5 节点）、/list（4 节点）均只在根计 1 处"),
    ("c11~c13 null 等价", False, "null 视同缺失：null↔1 记 added/removed（1 处）；双 null 记 0"),
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
        "已提交的五层规格与 20 组固定素材",
        "<code>docs/specs/</code> 与 <code>fixtures/</code> 已入库，生产代码尚未改动",
        "5.1 完成后留下",
        [
            "纯函数差异模型与不引入 React 的包导出入口",
            "零依赖 <code>scripts/check-diff.ts</code> 核对 <b>13 组</b>素材通过",
            "共享包 <code>lint / build</code> 通过与实施记录初稿",
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
    lead="先不讲任务步骤，打开 docs/specs/fixtures/c02-key-order.*，按已批准规则判断比较结果。",
    html=(
        '<div class="ch5-2col" style="display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:20px;align-items:stretch">'
        '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:stretch" data-reveal="0">'
        + json_card("Before", KEY_ORDER_BEFORE, "c02-key-order.before.json")
        + json_card("After", KEY_ORDER_AFTER, "c02-key-order.after.json")
        + "</div>"
        '<div class="p-box" data-role="us" data-reveal="2" style="display:flex;flex-direction:column;justify-content:center;padding:16px 20px">'
        '<span class="p-tag" data-role="us">请先判断</span>'
        '<h3 style="font-size:25px;margin:4px 0 8px">按已批准的 Spec，差异数是几？</h3>'
        '<p style="font-size:19px;color:var(--p-muted)">提示：回想 4.3 对字段顺序的决定</p></div></div>'
        '<div class="p-bar is-light" data-reveal="1">两份 JSON 的字段集合与值完全一致，只是 <code>name</code>、<code>age</code>、<code>tags</code> 的<b>键顺序</b>调换了</div>'
        '<div class="p-bar" data-reveal="3">差异数为 <b>0</b>，全部节点为 <code>unchanged</code>，不产生任何增删改（<code>REQ-001</code> · <code>AC-02</code>）</div>'
        '<p class="source-note">实际素材：docs/specs/fixtures/c02-key-order.before.json / after.json</p>'
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
        '<p style="font-size:19.5px">用自增序号发放节点 <code>id</code>（<code>nodeId++</code>），两次解析同路径也会拿到不同编号</p></div>'
        '<div class="p-join" data-reveal="2"><span>改用</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="tool" data-reveal="2" style="padding:12px 16px">'
        '<span class="p-tag" data-role="tool">差异模型做法</span>'
        '<p style="font-size:19.5px">绕开节点 <code>id</code>，统一按 <code>/user/name</code> 这样的 <b>JSON 路径</b>对齐两侧</p></div></div>'
    ),
    steps=["键换序 vs 对调两侧", "parser.ts 自增 id 风险", "按 JSON 路径对齐"],
)

scene(
    id="p04",
    segment="可核对的输入",
    label="除了键换序，模型还要覆盖哪些情况",
    title="除了键换序，模型还要覆盖哪些情况？",
    lead="键换序只验证了一条规则；当前基线上 TASK-01 要用 13 组固定素材核对七类比较规则。",
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
        '<div class="p-bar" data-reveal="2">TASK-01 共 <b>13 组素材（c01–c13）</b>，只核对纯函数与无 React 入口；合并图、双输入、超限留后续任务</div>'
        '<p class="source-note">对应 AC-02、AC-04～AC-13（含 AC-01、AC-03 模型侧），预期直接取自 fixtures/index.json</p>'
    ),
    steps=["四类基础与数组比较规则", "三类类型、子树与 null 规则", "13 组素材核对边界"],
)


# ---------- 本章怎么干活 ----------
scene(
    id="p05",
    segment="本章怎么干活",
    label="怎样让 Agent 只完成这一个任务",
    title="怎样让 Agent 只完成这一个任务？",
    lead="先在全章架构图里锁死修改边界，再明确零依赖校验入口与委托请求要素。",
    html=(
        diff_arch(active="model", reveal=0)
        + '<div class="ch5-2col" style="display:grid;grid-template-columns:1fr 1.15fr;gap:16px;align-items:stretch">'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">无 React 入口 + 零依赖脚本</h3><span class="p-tag" data-role="ctx">怎么验</span></div>'
        '<p style="font-size:19px">Node 下跑 <code>scripts/check-diff.ts</code> 对照 <code>index.json</code> 断言 <b>13 组素材</b>，再跑共享包 <code>lint / build</code></p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:12px 16px">'
        '<div class="p-head"><h3 style="font-size:22px">请求要素与未决收敛</h3><span class="p-tag" data-role="agent">怎么派</span></div>'
        '<p style="font-size:19px">带齐 <code>TASK-01</code>、禁止改动表与 <code>c01</code>–<code>c13</code>；<code>null</code> 按 <code>REQ-003</code> 视同缺失，<code>REQ-032</code>（<code>1</code> vs <code>1.0</code>）留单一比较点</p>'
        '<div style="margin-top:8px">'
        + pop(
            "TASK-01 委托请求要素参考（按自己的规格调整）",
            "查看请求要素参考",
            '<p style="margin:0 0 8px">请阅读 <code>TASK-01</code> 及关联的 <code>SPEC.md</code>（REQ-001~014）、<code>ACCEPTANCE.md</code>、<code>PLAN.md</code> 与 <code>docs/specs/fixtures/index.json</code>，只完成纯逻辑差异模型任务</p>'
            '<p style="margin:0 0 8px">允许范围：新增 <code>packages/jsoncrack-react/src/diff/**</code>、更新 <code>index.ts</code> 与 <code>types.ts</code>（不改 <code>NodeData</code>）、在 <code>vite.config.ts</code> 与 <code>package.json</code> 增开不引入 React 的子入口，并新增零依赖脚本 <code>packages/jsoncrack-react/scripts/check-diff.ts</code></p>'
            '<p style="margin:0 0 8px">禁止改动：<code>parser.ts</code>、<code>JSONCrackComponent.tsx</code>、<code>components/**</code>、<code>apps/**</code> 与原主入口行为；不得引入测试框架，<code>REQ-032</code>（<code>1</code> 与 <code>1.0</code>）留出单一可替换数值比较点而不写死断言</p>'
            '<p style="margin:0">运行 <code>node packages/jsoncrack-react/scripts/check-diff.ts</code> 断言 <code>c01</code>–<code>c13</code> 全过，并跑通 <code>pnpm --filter jsoncrack-react lint</code> 与 <code>build</code></p>',
        )
        + "</div></div></div>"
    ),
    steps=["锁死架构与六文件禁区", "无 React 子入口与零依赖脚本", "委托要素与 REQ-032 边界"],
    teaching=teach(("工作方式只立一次", "5.1 用这一页把“定范围 → 委托 → 零依赖预期核对 → 查 diff”立住，5.2–5.4 直接沿用，不再重复讲流程定义。")),
)

pending(
    scene,
    "p06",
    "本章怎么干活",
    "当前副本对得上起点吗？请求该怎么发出？",
    "实操页占位：正式录制时在 course/ch04-baseline 核对起点并发出 TASK-01 请求",
)


# ---------- 完成边界 ----------
pending(
    scene,
    "p07",
    "完成边界",
    "怎样判断这一次做到了完成边界？",
    "实操页占位：正式录制时展示 git diff --stat、check-diff.ts 13 组断言与 build 输出",
)

scene(
    id="p08",
    segment="完成边界",
    label="只过两组案例，模型任务算完成了吗",
    title="只过两组案例，模型任务算完成了吗？",
    lead="相同输入和对象键换序都通过了，先对照完整 13 组期望表判断还差什么。",
    html=(
        '<div class="ch5-table">'
        '<div class="is-head"><span>固定素材（c01–c13）</span><span>当前状态</span><span>独立核算期望（取自 index.json 与 AC-01~13）</span></div>'
        + "".join(
            f'<div data-reveal="{0 if done else 1}">'
            f'<span><code>{name}</code></span>'
            f'<span><em style="font-style:normal" class="p-chip" data-role="{"ok" if done else "gate"}">{"已抽查 ✓" if done else "仍须核对"}</em></span>'
            f"<span>{exp}</span></div>"
            for name, done, exp in EXPECT_ROWS
        )
        + "</div>"
        '<div class="p-bar" data-reveal="2">还不算完成：<b>13 组素材</b>全过、无 React 入口能在 Node 下导入、<code>lint / build</code> 通过且禁区零改动才算完成</div>'
    ),
    steps=["已抽查的两组零差异案例", "其余十一组必查规则", "回看入口与 diff 边界"],
)


# ---------- 自检与交接 ----------
scene(
    id="p09",
    segment="自检与交接",
    label="核对结果与期望不符，哪种做法对",
    title="核对结果与期望不符，哪种做法对？",
    lead="跑完 check-diff.ts 后，如果某组输出和 fixtures/index.json 的预期对不上，先自己判断该怎么处理。",
    html=quiz_cards(
        "把脚本里的预期改成当前实现跑出来的结果，让检查先通过",
        "不对。期望来自已批准的 Spec 与人工核算，改期望迁就实现会让检查彻底失效",
        "先核对固定输入、预期基准与 Spec，再排查模型实现或脚本哪里写偏了",
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
        ["跑通两个例子", "不等于任务完成", "13 组素材 + 禁区边界都要过"],
        "本节留下",
        [
            "通过 <code>c01</code>–<code>c13</code> 验证的差异模型与无 React 入口",
            "零依赖校验脚本 <code>scripts/check-diff.ts</code>",
            "共享包 <code>lint / build</code> 结果与实施记录",
        ],
        "下一节 5.2",
        "合并图映射（DiffGraph）",
        "拿着已验证的模型，解决被删除的字段怎样画到结果图上",
    ),
    steps=["核心判断", "本节留下的成果", "进入 5.2 合并图"],
)

lesson.write()
