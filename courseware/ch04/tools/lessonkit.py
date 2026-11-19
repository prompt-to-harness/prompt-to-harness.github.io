"""第 4 章各节 build-lesson.py 共用的骨架（从第 3 章 lessonkit.py 复制，只改章节常量）：页面登记、章节地图与输出。

每节的 tools/build-lesson.py 只写本节内容：

    lesson = Lesson(__file__, "4.1", "接手大项目，还能边聊边改吗", summary="…")
    scene = lesson.scene
    scene(id="p02", …)
    lesson.write()

steps 与 script 一一对应；data-reveal 最大值 = 步骤数 - 1。
scene["seconds"] 只用于章节条的宽度比例（按步骤数计算），不是时长估算。
"""
import json
import urllib.parse
from html import escape
from pathlib import Path

CHAPTER = "第 4 章 · SDD"
SECTIONS = [("4.1", "接手工程"), ("4.2", "形成 Brief"), ("4.3", "批准 Spec"), ("4.4", "写验收"), ("4.5", "拆任务"), ("4.6", "MCP 工具")]

# 阅读模式窄屏下，代码讲解（p-walk）、正反对照（p-claim）与主栏加侧栏（p-aside）改为单列，代码行允许折行
NARROW = '<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style>'


def teach(*pairs):
    return [{"title": t, "text": x} for t, x in pairs]


def ref(text, url, group="", kind="live", quote=""):
    """一条原文链接，放进 scene(refs=[…])，由播放器渲染（courseware/shared/app.js）。

    kind="live"：画面最下一行（零件 .p-refs），随最后一步出现，录制时点开；
    kind="read"：不上画面，只在阅读模式与讲解全文列出。
    同一 group 的相邻链接合成一组。网址固定到具体版本，不指向会变的 main。
    quote：本页引用的是长文的某一段时，写那段开头的几个字（原文照抄、页面里唯一），拼成文本片段链接
    #:~:text=…，打开后滚到那段并高亮；页面有稳定的标题锚点时直接在 url 里写 #锚点，不用 quote。
    规则见 docs/production/external-sources.md“链接到段落”。
    """
    assert kind in ("live", "read"), kind
    assert url.startswith("https://"), url
    if quote:
        assert "#" not in url, ("quote 和 #锚点只用一种", url)
        # 文本片段里的 - , & 是分隔符，必须转义（quote 默认不转义 -）
        url += "#:~:text=" + urllib.parse.quote(quote, safe="").replace("-", "%2D")
    return {"kind": kind, "group": group, "text": text, "url": url}


def repro(steps, note="", label="复现这个实验"):
    """页面上的折叠按钮：点开才显示复现步骤，放进 scene(repro=…)，由播放器渲染（courseware/shared/app.js）。

    steps 为 [(说明, 命令或 None), …]；命令按原样显示，可选中复制。演示模式下按钮在标题上方一行、
    不占正文位置，展开后叠在画面上方；阅读模式下在副标题之后展开。
    """
    assert steps and all(len(s) == 2 and s[0] for s in steps), steps
    return {"label": label, "steps": [{"text": t, "code": c or ""} for t, c in steps], "note": note}


def code_lines(*rows):
    """.p-code 里的逐行内容：rows 为 (类名, 已转义的文本)；类名 add / del / hl / at，空串为普通行。

    每行一个块级 span，避免 pre 里的换行符和块级 .add/.del 叠出空行。
    """
    return "".join(
        f'<span class="{cls}">{text}</span>' if cls else f'<span style="display:block">{text}</span>'
        for cls, text in rows
    )


def diff_boxes(path):
    """把一份 git diff 按文件拆成 .p-code 代码框：去掉 git 头，保留 @@ 行，行内容原样转义。"""
    boxes = []
    for chunk in Path(path).read_text().split("diff --git ")[1:]:
        rows = chunk.splitlines()
        name = rows[0].split(" b/")[-1]
        new = any(r.startswith("new file") for r in rows)
        body, started = [], False
        for r in rows[1:]:
            if r.startswith("@@"):
                started = True
                body.append(("at", escape(r)))
            elif started:
                cls = "add" if r.startswith("+") else "del" if r.startswith("-") else ""
                body.append((cls, escape(r) or " "))
        plus = sum(1 for c, _ in body if c == "add")
        minus = sum(1 for c, _ in body if c == "del")
        boxes.append(
            f'<div class="p-code"><div class="p-code-head"><span>{name}{"（新文件）" if new else ""}</span><span>+{plus} −{minus}</span></div>'
            f"<pre>{code_lines(*body)}</pre></div>"
        )
    return "".join(boxes)


def pop(title, label, body):
    """页内弹窗（零件 .p-pop）：label 是按钮文字，title 是弹窗标题，body 为内容 HTML。

    演示模式点开后盖住整个正文区；祖先元素不要设 position，否则只盖住所在那一栏。
    """
    return (
        f'<details class="p-pop"><summary>{label}</summary><div class="p-pop-body">'
        f'<div class="p-pop-head"><span>{title}</span>'
        "<button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div>"
        f"{body}</div></details>"
    )


def chapter_map(now):
    """开篇用的本章六节地图；now 为当前节序号（1–6），之前的节标为已完成。"""
    items = []
    for i, (num, name) in enumerate(SECTIONS, 1):
        cls = ' class="is-now"' if i == now else (' class="is-done"' if i < now else "")
        items.append(f"<li{cls}><b>{num}</b>{name}</li>")
    return '<ol class="p-map">' + "".join(items) + "</ol>"


# 全章锚点图：五层规格（4.1 STORYBOARD“围绕同一句需求介绍五层关系”）。4.1 逐层揭示，4.2–4.5 点亮本节对应层。
# 每层：名称、眼前要回答的问题、留下的文件
LAYERS = [
    ("Brief", "谁在什么场景下用，这次做到哪？", "BRIEF.md"),
    ("Spec", "什么算不同，用户看到什么？", "SPEC.md"),
    ("Acceptance", "给定输入，怎样判对错？", "ACCEPTANCE.md"),
    ("Plan", "在这个仓库里怎么改？", "PLAN.md"),
    ("Tasks", "按什么顺序做，怎样算完成？", "TASKS.md"),
]
# 两条返回回路：(从哪层, 回到哪层, 说明)
LOOPS = [("Acceptance", "Spec", "规则没定 → 回 Spec"), ("Tasks", "Plan", "改法要调 → 回 Plan")]
ANCHOR_STYLES = ("stairs", "flow", "files")


def anchor(style="stairs", lit=(), done=(), reveal_each=False, loops=False, loop_reveal=None, mini=False, reveal=None):
    """五层锚点图。全章用阶梯 stairs（讲师 2026-11-05 选定）；flow（流程加回路）、files（文件清单）是当时的备选样稿。

    lit 为本页点亮的层（实心）；done 为已完成的层；两者都为空时五层照常显示。
    其余层画成虚线、变淡，表示后面的小节才补。reveal_each=True 时第 i 层带 data-reveal=i（4.1 逐层揭示）。
    loops=True 时画两条返回回路（只有 flow 画成回线，其余风格写在底部），loop_reveal 是它们出现的步骤。
    颜色：五层都是写进仓库、给人和 Agent 读的文件，用 ctx；回到 Spec 要人决定，用 us。
    mini=True 是各节开篇用的缩小版（只用于 stairs）：只留层名和文件名，不写问题；reveal 是整张图出现的步骤。
    """
    assert style in ANCHOR_STYLES, style
    names = [n for n, _, _ in LAYERS]
    assert set(lit) <= set(names) and set(done) <= set(names), (lit, done)
    plain = not lit and not done

    def state(name):
        if plain:
            return ""
        return "lit" if name in lit else ("done" if name in done else "todo")

    def rv(i):
        return f' data-reveal="{i}"' if reveal_each else ""

    lrv = f' data-reveal="{loop_reveal}"' if loop_reveal is not None else ""
    todo_css = "opacity:.42"

    if style == "stairs" and mini:
        cells = []
        for i, (name, _, f) in enumerate(LAYERS):
            s = state(name)
            cls = "p-box" + (" is-solid" if s == "lit" else " is-dashed" if s == "todo" else "")
            css = todo_css if s == "todo" else ""
            cells.append(
                f'<div class="p-stair" style="--i:{i}"><div class="{cls}" data-role="ctx" style="padding:8px 12px;{css}">'
                f'<h3 style="font-size:20px;margin:0">{name}</h3>'
                f'<p style="font-family:var(--p-mono);font-size:14px;margin:2px 0 0">{f}</p></div></div>'
            )
        attr = f' data-reveal="{reveal}"' if reveal is not None else ""
        return f'<div class="p-stairs"{attr} style="--n:5;--rise:14px;column-gap:12px;height:auto">{"".join(cells)}</div>'

    if style == "stairs":
        cells = []
        for i, (name, q, f) in enumerate(LAYERS):
            s = state(name)
            cls = "p-box" + (" is-solid" if s == "lit" else " is-dashed" if s == "todo" else "")
            css = todo_css if s == "todo" else ""
            cells.append(
                f'<div class="p-stair" style="--i:{i}"{rv(i)}><div class="{cls}" data-role="ctx" style="padding:12px 14px;{css}">'
                f'<span class="p-tag" data-role="ctx">{name}</span><h3 style="font-size:23px;margin:8px 0 6px">{q}</h3>'
                f'<p style="font-family:var(--p-mono);font-size:16px;margin:0">{f}</p></div></div>'
            )
        foot = ""
        if loops:
            foot = (f'<div class="p-base"{lrv} style="display:flex;gap:28px;font-size:20px">'
                    + "".join(f'<span>↺ {t}</span>' for _, _, t in LOOPS) + "</div>")
        return f'<div class="p-stairs" style="--n:5;--rise:34px;column-gap:14px">{"".join(cells)}{foot}</div>'

    if style == "flow":
        cells = []
        for i, (name, q, f) in enumerate(LAYERS):
            s = state(name)
            css = todo_css if s == "todo" else ""
            solid = "background:var(--c);" if s == "lit" else ""
            # 节点底色由 ::before 画，实心时用一层内衬盖住
            inner = (f'<h3 style="{"color:#fff;" if s == "lit" else ""}">{name}</h3>'
                     f'<p style="font-size:18px;{"color:#fff;" if s == "lit" else ""}">{q}</p>'
                     f'<p style="font-family:var(--p-mono);font-size:15px;margin-top:6px;{"color:#fff;" if s == "lit" else ""}">{f}</p>')
            cells.append(f'<div class="p-node" data-role="ctx"{rv(i)} style="padding:12px 10px;{css}">'
                         f'{"<i style=" + chr(34) + "position:absolute;inset:3px;z-index:-1;border-radius:12px;" + solid + chr(34) + "></i>" if solid else ""}{inner}</div>')
        back = ""
        if loops:
            for frm, to, text in LOOPS:
                a, b = names.index(to) + 1, names.index(frm) + 1
                role = "us" if to == "Spec" else "ink"
                back += (f'<div class="p-back" data-role="{role}"{lrv} style="grid-column:{a}/{b + 1};--span:{b - a + 1};--gap:26px">'
                         f'<span class="p-back-label" style="font-size:19px">{text}</span></div>')
        return f'<div class="p-flow" style="--n:5;column-gap:26px;align-items:stretch">{"".join(cells)}{back}</div>'

    # files：随代码进 Git 的五份文件逐行列出（存放在 JSON Crack 仓库的 docs/specs/，2026-11-07 确认）
    rows = []
    for i, (name, q, f) in enumerate(LAYERS):
        s = state(name)
        cls = "p-item" + (" is-picked" if s == "lit" else "")
        css = todo_css + ";border-style:dashed;background:transparent" if s == "todo" else ""
        rows.append(
            f'<div class="{cls}"{rv(i)} style="display:grid;grid-template-columns:200px 150px minmax(0,1fr);gap:14px;align-items:baseline;{css}">'
            f'<span style="font-family:var(--p-mono);font-size:18px;font-weight:700">{f}</span>'
            f'<span style="font-weight:700">{name}</span><span>{q}</span></div>'
        )
    foot = ""
    if loops:
        foot = (f'<div class="p-foot"{lrv} style="display:flex;gap:28px">'
                + "".join(f'<span>↺ {t}</span>' for _, _, t in LOOPS) + "</div>")
    return (f'<div class="p-set is-solid" data-role="ctx" style="padding:14px 20px 16px">'
            '<h3 style="font-size:22px">五份文件<span style="font-size:18px;color:var(--p-muted);margin-left:12px">随代码一起进 Git</span></h3>'
            f'<div class="p-items" style="display:flex;flex-direction:column;gap:8px">{"".join(rows)}</div>{foot}</div>')


def layer_strip(lit=(), done=(), compact=False, reveal=None):
    """升级版五层横向进度卡（需配合 ch04/chapter.css）：清晰标注已完成、本节聚焦与待补层。"""
    names = [n for n, _, _ in LAYERS]
    assert set(lit) <= set(names) and set(done) <= set(names), (lit, done)
    cells = []
    for name, _, fname in LAYERS:
        if name in lit:
            cls, badge = "is-lit", "本节"
        elif name in done:
            cls, badge = "is-done", "✓"
        else:
            cls, badge = "is-todo", "后续"
        if compact:
            cells.append(
                f'<div class="ch4-layer {cls}">'
                f'<h3>{name}</h3><span class="ch4-layer-state">{badge}</span></div>'
            )
        else:
            cells.append(
                f'<div class="ch4-layer {cls}">'
                f'<div class="ch4-layer-top"><h3>{name}</h3><span class="ch4-layer-state">{badge}</span></div>'
                f"<code>{fname}</code></div>"
            )
    attr = f' data-reveal="{reveal}"' if reveal is not None else ""
    mode_cls = " is-compact" if compact else ""
    return f'<div class="ch4-layers{mode_cls}"{attr}>{"".join(cells)}</div>'


def cover_handoff(now, lit, done, prev_tag, prev_title, prev_desc, next_tag, deliverables):
    """开篇页统一构图：六节地图 + 五层横向进度卡 + 左右交接双栏（上节起点 → 本节交付）。"""
    items = "".join(f"<li>{d}</li>" for d in deliverables)
    return (
        chapter_map(now)
        + layer_strip(lit=lit, done=done, reveal=1)
        + '<div class="ch4-handoff" data-reveal="2">'
        f'<div class="p-box is-soft" data-role="ctx">'
        f'<span class="p-tag" data-role="ctx">{prev_tag}</span>'
        f"<h3>{prev_title}</h3><p>{prev_desc}</p></div>"
        '<div class="ch4-arrow" aria-hidden="true"><i>→</i></div>'
        f'<div class="p-box" data-role="us">'
        f'<span class="p-tag" data-role="us">{next_tag}</span>'
        f'<ul class="ch4-mini-list">{items}</ul></div>'
        "</div>"
    )


def spec_delegation(inputs, inputs_note, elements, output_title, output_files, pop_title, pop_label, pop_body, pop_hint):
    """三段式「规格委托蓝图」（左输入依据 → 中请求四要素 → 右产出与示例弹窗，弹窗置于 .p-box 外以便全宽展开）。

    inputs: [(文件名, 简短说明), ...]
    elements: [(reveal步, data-key, 标签, 正文), ...]
    output_files: [(文件名, 简短说明), ...]
    """
    in_html = "".join(
        f'<div class="ch4-file-chip" data-role="ctx"><code>{f}</code><span>{d}</span></div>'
        for f, d in inputs
    )
    el_html = "".join(
        f'<div class="ch4-contract-row" data-key="{key}" data-reveal="{rv}">'
        f'<span class="ch4-contract-key">{tag}</span><span>{body}</span></div>'
        for rv, key, tag, body in elements
    )
    out_html = "".join(
        f'<div class="ch4-file-chip" data-role="agent"><code>{f}</code><span>{d}</span></div>'
        for f, d in output_files
    )
    return (
        '<div class="ch4-delegation">'
        '<div class="ch4-del-col" data-reveal="0">'
        '<div class="p-box ch4-del-card" data-role="ctx">'
        '<span class="p-tag" data-role="ctx" style="margin-bottom:2px;align-self:flex-start">读哪些依据</span>'
        f'<div class="ch4-file-stack">{in_html}</div>'
        f'<p class="ch4-del-note">{inputs_note}</p></div></div>'
        f'<div class="ch4-contract">{el_html}</div>'
        '<div class="ch4-del-col">'
        '<div class="p-box ch4-del-card" data-role="agent" data-reveal="0">'
        f'<span class="p-tag" data-role="agent" style="margin-bottom:2px;align-self:flex-start">{output_title}</span>'
        f'<div class="ch4-file-stack">{out_html}</div></div>'
        '<div class="ch4-pop-dock" data-reveal="3">'
        f'<span class="ch4-pop-dock-hint">{pop_hint}</span>'
        + pop(pop_title, pop_label, pop_body)
        + "</div></div></div>"
    )


def review_board(doc_tag, docs, doc_note, checks, footer_bar, example_pop=None):
    """文档审查看板：左待审文档骨架卡 + 右编号抽查清单 + 底部门禁条与备课实跑弹窗。

    docs: [(文件路径, 结构要点), ...]
    checks: [(reveal步, 标题, 说明), ...]
    """
    doc_html = "".join(
        f'<div class="ch4-doc-card"><code>{f}</code><p>{d}</p></div>'
        for f, d in docs
    )
    chk_html = "".join(
        f'<li data-reveal="{rv}"><span><b>{t}</b><small>{s}</small></span></li>'
        for rv, t, s in checks
    )
    pop_html = example_pop or ""
    return (
        '<div class="ch4-review-grid">'
        '<div class="p-box ch4-doc-outline" data-role="ctx" data-reveal="0">'
        f'<span class="p-tag" data-role="ctx" style="margin-bottom:0;align-self:flex-start">{doc_tag}</span>'
        f"{doc_html}"
        f'<p class="ch4-del-note">{doc_note}</p></div>'
        f'<ol class="ch4-review-list">{chk_html}</ol></div>'
        '<div class="ch4-review-foot" data-reveal="3">'
        f'<div class="p-bar is-light">{footer_bar}</div>{pop_html}</div>'
    )


def quiz_cards(
    q1_say,
    q1_ans,
    q2_say,
    q2_ans,
    right=2,
    stamps=("✗ 不能当", "✓ 能当"),
    labels=("第一段", "第二段"),
    verdicts=None,
):
    """双栏并排暂停自检题卡（工整印刷体排引文 + 独立顶部印章栏，零重叠）。"""
    explicit_verdicts = verdicts is not None
    if verdicts is None:
        assert right in (1, 2), right
        verdicts = (right == 1, right == 2)
    bad_stamp, ok_stamp = stamps

    def card(idx, label, say, ans, ok):
        role = "ok" if ok else "gate"
        stamp = stamps[idx - 1] if explicit_verdicts else (ok_stamp if ok else bad_stamp)
        return (
            '<div class="ch4-qcard">'
            '<div class="ch4-qcard-top">'
            f'<div class="ch4-qcard-id"><span class="ch4-qcard-num">{idx}</span>'
            f'<span class="ch4-qcard-label">{label}</span></div>'
            f'<span class="ch4-qcard-stamp" data-role="{role}" data-reveal="{idx}">{stamp}</span></div>'
            f'<p class="ch4-qcard-say">{say}</p>'
            f'<div class="ch4-qcard-ans" data-role="{role}" data-reveal="{idx}">{ans}</div>'
            "</div>"
        )

    return (
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再看参考结论</span>'
        '<div class="ch4-quiz-grid">'
        + card(1, labels[0], q1_say, q1_ans, bool(verdicts[0]))
        + card(2, labels[1], q2_say, q2_ans, bool(verdicts[1]))
        + "</div>"
    )


def sketch_recap(pin_label, pin_badge, core_lines, exits_head, exits, next_head, next_title, next_desc):
    """每节末页涂鸦小结（旋转重点贴纸卡 + 绿勾交付清单 + 下一节/下一章承接）。"""
    core_html = "<br>".join(core_lines)
    exit_items = "".join(f'<li class="is-pass"><span>{e}</span></li>' for e in exits)
    return (
        '<div class="p-sketch" style="align-items:start">'
        f'<div data-reveal="0"><h3 style="text-align:center">{pin_label}</h3>'
        f'<div class="ch4-takeaway-card"><span class="ch4-takeaway-pin">{pin_badge}</span>'
        f"<p>{core_html}</p></div></div>"
        f'<div data-reveal="1"><h3>{exits_head}</h3>'
        f'<ul class="p-exits" style="gap:10px">{exit_items}</ul></div>'
        f'<div class="p-next" data-reveal="2"><h3>{next_head}</h3>'
        f'<div class="p-box" data-role="us"><h3>{next_title}</h3><p>{next_desc}</p></div></div>'
        "</div>"
    )


def sym_badge(kind, text=None):
    """节点状态符号徽章（同时用符号与文字表达状态，呼应非纯颜色可辨认规则）。"""
    presets = {
        "add": ("is-add", "+ added"),
        "rem": ("is-rem", "− removed"),
        "chg": ("is-chg", "~ changed"),
        "anc": ("is-anc", "= unchanged · 下层有变化"),
        "nocnt": ("is-nocnt", "不计入"),
    }
    cls, default_txt = presets[kind]
    return f'<span class="ch4-sym {cls}">{text or default_txt}</span>'


def json_box(title, body, badge=None, role="ctx", cls=""):
    """统一样式的代码/JSON 样本卡片。"""
    head_badge = f'<span class="p-tag" data-role="{role}">{escape(badge)}</span>' if badge else ""
    extra = f" {cls}" if cls else ""
    return (
        f'<div class="p-box ch4-tree-card{extra}" data-role="{role}">'
        f'<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">'
        f'<strong>{escape(title)}</strong>{head_badge}</div>'
        f'<pre class="ch4-json-pre">{escape(body)}</pre>'
        f'</div>'
    )


def judge_split(left_html, right_cards, cols="minmax(0,0.92fr) minmax(0,1.08fr)", cls=""):
    """左样本 + 右判定卡分栏，用于规则与验收示例对照。"""
    extra = f" {cls}" if cls else ""
    return (
        f'<div class="ch4-split{extra}" style="--cols:{cols}">'
        f'<div class="ch4-stack">{left_html}</div>'
        f'<div class="ch4-stack">{right_cards}</div>'
        f'</div>'
    )


def q3_cards(items, ans_reveals=None):
    """三栏判断/结论卡，每项为 (tag, role, title, body, stamp=None, reveal=None)。"""
    cards = []
    for idx, item in enumerate(items):
        tag, role, title, body = item[:4]
        stamp = item[4] if len(item) > 4 else None
        reveal = item[5] if len(item) > 5 else None
        rv = f' data-reveal="{reveal}"' if reveal is not None else ""
        arv = f' data-reveal="{ans_reveals[idx]}"' if ans_reveals else ""
        card_role = "ink" if ans_reveals else role
        st_html = f'<span class="ch4-stamp {"is-ok" if role == "ok" else "is-bad"}"{arv}>{escape(stamp)}</span>' if stamp else ""
        cards.append(
            f'<div class="p-box ch4-q3-card" data-role="{card_role}"{rv}>'
            f'<div class="ch4-q3-head"><span class="p-tag" data-role="{role}"{arv}>{escape(tag)}</span>{st_html}</div>'
            f'<h3 style="margin:0;font-size:21px">{title}</h3>'
            f'<p style="margin:0;font-size:18px;line-height:1.45"{arv}>{body}</p>'
            f'</div>'
        )
    return '<div class="ch4-q3-grid">' + "".join(cards) + "</div>"


class Lesson:
    def __init__(self, builder, number, title, summary, prep=()):
        self.here = Path(builder).resolve().parents[1]
        # 录前准备：开录前一次做完的事，逐字稿页顶单独一块（courseware/shared/speaker.js），不上画面
        self.prep = list(prep)
        # 口播的唯一来源：本节目录下的 script.json，按页面 id 存每页的口播数组；页面里可直接改，见 tools/serve-courseware.py
        self.scripts = json.loads((self.here / "script.json").read_text())
        self.number, self.title, self.summary = number, title, summary
        self.scenes = []

    def scene(self, **kw):
        assert "kicker" not in kw, "小标题由 app.js 按“章 · 节 · 段名”生成，不再手写 kicker"
        kw.setdefault("teaching", [])
        if not kw.get("refs"):
            kw.pop("refs", None)
        kw["source"] = f"index.html#{kw['id']}"
        kw["seconds"] = 30 * len(kw["steps"])
        assert kw["id"] in self.scripts, f"script.json 里没有 {kw['id']} 的口播"
        script = self.scripts[kw["id"]]
        assert len(kw["steps"]) == len(script), (kw["id"], "steps 与 script 条数不一致")
        scene = {}
        for key, value in kw.items():
            scene[key] = value
            if key == "steps":  # script 紧跟 steps，保持 lesson.js 里的键顺序
                scene["script"] = script
        self.scenes.append(scene)

    def write(self):
        scenes = self.scenes
        unused = set(self.scripts) - {s["id"] for s in scenes}
        assert not unused, f"script.json 里有页面不存在的 id：{sorted(unused)}"
        segments = []
        for s in scenes:
            if not segments or segments[-1]["label"] != s["segment"]:
                segments.append({"label": s["segment"], "seconds": 0})
            segments[-1]["seconds"] += s["seconds"]

        major, minor = self.number.split(".")
        lesson = {
            "title": self.title,
            "chapter": CHAPTER,
            "section": f"{int(major):02d}.{int(minor):02d}",
            "summary": self.summary,
            **({"prep": self.prep} if self.prep else {}),
            "scenes": scenes,
            "segments": segments,
        }
        (self.here / "lesson.js").write_text("window.lesson = " + json.dumps(lesson, ensure_ascii=False, indent=2) + ";\n")

        print(f"{self.number}: {len(scenes)} pages, {sum(len(s['steps']) for s in scenes)} steps")
