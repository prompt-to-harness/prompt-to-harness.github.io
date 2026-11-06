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


def anchor(style="stairs", lit=(), done=(), reveal_each=False, loops=False, loop_reveal=None):
    """五层锚点图。全章用阶梯 stairs（讲师 2026-11-05 选定）；flow（流程加回路）、files（文件清单）是当时的备选样稿。

    lit 为本页点亮的层（实心）；done 为已完成的层；两者都为空时五层照常显示。
    其余层画成虚线、变淡，表示后面的小节才补。reveal_each=True 时第 i 层带 data-reveal=i（4.1 逐层揭示）。
    loops=True 时画两条返回回路（只有 flow 画成回线，其余风格写在底部），loop_reveal 是它们出现的步骤。
    颜色：五层都是写进仓库、给人和 Agent 读的文件，用 ctx；回到 Spec 要人决定，用 us。
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

    # files：随代码进 Git 的五份文件逐行列出（存放目录在 4.2–4.5 再定）
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
