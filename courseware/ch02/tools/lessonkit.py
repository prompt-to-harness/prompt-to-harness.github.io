"""第 2 章各节 build-lesson.py 共用的骨架：页面登记、章节地图与输出。

每节的 tools/build-lesson.py 只写本节内容：

    lesson = Lesson(__file__, "2.3", "它看到了什么，才这样改", summary="…")
    scene = lesson.scene
    scene(id="p35", …)
    lesson.write()

steps 与 script 一一对应；data-reveal 最大值 = 步骤数 - 1。
scene["seconds"] 只用于章节条的宽度比例（按步骤数计算），不是时长估算。
"""
import json
import sys
from html import escape
from pathlib import Path

CHAPTER = "第 2 章 · Vibe Coding"
SECTIONS = [("2.1", "看请求"), ("2.2", "补经历"), ("2.3", "改风格"), ("2.4", "发布上线"), ("2.5", "用好 context")]

MEASURED = "数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。"

# 阅读模式窄屏下，代码讲解（p-walk）、正反对照（p-claim）与主栏加侧栏（p-aside）改为单列，代码行允许折行
NARROW = '<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style>'


def teach(*pairs):
    return [{"title": t, "text": x} for t, x in pairs]


def ref(text, url, group="", kind="live"):
    """一条原文链接，放进 scene(refs=[…])，由播放器渲染（courseware/shared/app.js）。

    kind="live"：画面最下一行（零件 .p-refs），随最后一步出现，录制时点开；
    kind="read"：不上画面，只在阅读模式与讲解全文列出。
    同一 group 的相邻链接合成一组。网址固定到具体版本，不指向会变的 main。
    """
    assert kind in ("live", "read"), kind
    assert url.startswith("https://"), url
    return {"kind": kind, "group": group, "text": text, "url": url}


EXTERNAL = Path(__file__).resolve().parents[1] / "materials/external"

# 嵌入课件的 claude-tap 查看器不连带滚动外层页面：实现已移到全课共用的 courseware/tools/tracekit.py，这里转出给 2.1 用。
sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "tools"))
from tracekit import keep_scroll_inside  # noqa: E402


def shot(src, bar, alt, height=440, note="", reveal=0):
    """证据页（layout="evidence-scene"）里的外部截图：顶栏 bar 写“站点 · 作者 · 日期”，图片放在本节 external/。

    规则见 docs/production/external-sources.md；height 是放映时的图高（--shot-h）。
    """
    note = f'<p class="p-shot-note">{note}</p>' if note else ""
    return (f'<div class="p-shot" style="--shot-h:{height}px" data-reveal="{reveal}"><div class="p-page">'
            f'<div class="p-page-bar"><i></i><i></i><i></i>{bar}</div><img src="{src}" alt="{escape(alt)}"></div>{note}</div>')


def redrawn(topic, name, style, source="", reveal=0, max_height=440, note=""):
    """证据页里的重画图：内联 materials/external/<topic>/redraw-<name>-<style>.svg（由 courseware/tools/redraw.py 生成），
    source 是阅读模式中的制作说明；演示来源统一由 scene 的 refs 提供。
    note 是影响理解的可见说明（如读图近似），不作为第二条出处。
    内联而不用 <img>，才能用上课件字体和抖动滤镜 #p-rough。
    """
    assert style in ("course", "excalidraw"), style
    svg = (EXTERNAL / topic / f"redraw-{name}-{style}.svg").read_text().strip()
    svg = svg.replace('<svg ', f'<svg style="display:block;max-width:100%;height:auto;max-height:{max_height}px" ', 1)
    source_html = f'<p class="source-note">{escape(source)}</p>' if source else ""
    note_html = f'<p class="p-shot-note" style="font-size:18px">{escape(note)}</p>' if note else ""
    return f'<div class="p-shot" data-reveal="{reveal}">{svg}{note_html}{source_html}</div>'


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


# 全章锚点图“这一次请求里有什么”的七块（章文件 C2-53）；各节开篇按本节高亮其中几块
ANCHOR = ["系统指令", "工具", "环境", "规则", "对话历史", "工具返回", "新的 Prompt"]


def anchor(lit=(), absent=(), outside=(), note="", reveal=None, title="这一次请求里有什么"):
    """锚点图（零件 .p-set + .p-item），全章只有一种读法（C2-86）。分类（C2-88）：系统指令是 Codex 给的全部说明
    （身份、协作、Skills 列表、权限说明）；规则只指项目里的 AGENTS.md；新的 Prompt 是我们这一轮写的话。
    lit 是这一页要看的块，粗框高亮；absent 是这次请求里没有内容的块，灰色虚线并写“这次没有”；
    其余块照常在请求里，只是这一页不看，画得浅一些。outside 是画在列外、不在请求里的东西。
    note 写给学员看：这一页为什么看这几块，不写制作说明。整列都要看时 lit 传 ANCHOR。
    """
    assert set(lit) <= set(ANCHOR) and set(absent) <= set(ANCHOR) and not set(lit) & set(absent), (lit, absent)
    attr = f' data-reveal="{reveal}"' if reveal is not None else ""
    base = "padding:4px 10px;font-size:18px"

    def item(b):
        if b in absent:
            return (f'<div class="p-item" style="{base};border-style:dashed;background:transparent;color:var(--p-muted)">'
                    f'{b}<span style="font-size:15px;margin-left:6px">这次没有</span></div>')
        if b in lit:
            return f'<div class="p-item is-picked" style="{base};font-weight:700">{b}</div>'
        return f'<div class="p-item" style="{base};background:transparent;color:var(--p-muted)">{b}</div>'

    items = "".join(item(b) for b in ANCHOR)
    out = ""
    if outside:
        out = '<div class="p-foot">不在请求里：' + "".join(
            f'<span class="p-item" style="display:inline-block;margin:4px 6px 0 0;padding:2px 8px;font-size:17px;border-style:dashed;background:transparent">{x}</span>' for x in outside
        ) + "</div>"
    foot = f'<div class="p-foot">{note}</div>' if note else ""
    return (
        f'<div class="p-set" data-role="ctx"{attr} style="padding:10px 16px 12px">'
        f'<h3 style="font-size:20px;margin-bottom:6px">{title}</h3>'
        f'<div class="p-items" style="flex-direction:row;flex-wrap:wrap;gap:6px">{items}</div>{out}{foot}</div>'
    )


def chapter_map(now):
    """开篇用的本章五节地图；now 为当前节序号（1–5），之前的节标为已完成。"""
    items = []
    for i, (num, name) in enumerate(SECTIONS, 1):
        cls = ' class="is-now"' if i == now else (' class="is-done"' if i < now else "")
        items.append(f"<li{cls}><b>{num}</b>{name}</li>")
    return '<ol class="p-map">' + "".join(items) + "</ol>"


class Lesson:
    def __init__(self, builder, number, title, summary):
        self.here = Path(builder).resolve().parents[1]
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
            "scenes": scenes,
            "segments": segments,
        }
        (self.here / "lesson.js").write_text("window.lesson = " + json.dumps(lesson, ensure_ascii=False, indent=2) + ";\n")

        print(f"{self.number}: {len(scenes)} pages, {sum(len(s['steps']) for s in scenes)} steps")
