"""第 5 章各节 build-lesson.py 共用的骨架与视觉零件库。

每节的 tools/build-lesson.py 维护本节画面结构，口播唯一来源在同目录 script.json：

    lesson = Lesson(__file__, "5.1", "规格写好了，怎么知道第一个任务做对了", summary="…", prep=[…])
    scene = lesson.scene
    scene(id="p01", …)
    lesson.write()

steps 与 script 一一对应；data-reveal 最大值 = 步骤数 - 1。
scene["seconds"] 只用于章节条的宽度比例（按步骤数计算），不是时长估算。
"""
import json
import urllib.parse
from html import escape
from pathlib import Path

CHAPTER = "第 5 章 · SDD"
SECTIONS = [
    ("5.1", "差异模型"),
    ("5.2", "合并图"),
    ("5.3", "双输入"),
    ("5.4", "整体验收"),
    ("5.5", "可带走的招数"),
]

# 全章共用的 JSON Diff 四步实施切片（5.1–5.4 逐节推进）
ARCH_SLICES = [
    ("model", "5.1 差异模型", "packages/jsoncrack-react/src/diff/", "按路径对齐两侧，算状态、计数与祖先标记"),
    ("graph", "5.2 合并图映射", "NodeData / EdgeData + 可选入口", "保留 removed 与必要祖先，赋予状态符号"),
    ("input", "5.3 双输入与错误", "apps/www DiffView + 独立状态", "接入 Before / After，出错保留上次结果"),
    ("ui", "5.4 摘要 · 筛选 · 验收", "只看变化 + 无外链超限 + 全量走查", "补齐摘要与筛选，走完 AC-001~021 与回归"),
]


def teach(*pairs):
    return [{"title": t, "text": x} for t, x in pairs]


def ref(text, url, group="", kind="live", quote=""):
    """一条原文链接，放进 scene(refs=[…])，由播放器渲染（courseware/shared/app.js）。"""
    assert kind in ("live", "read"), kind
    assert url.startswith("https://"), url
    if quote:
        assert "#" not in url, ("quote 和 #锚点只用一种", url)
        url += "#:~:text=" + urllib.parse.quote(quote, safe="").replace("-", "%2D")
    return {"kind": kind, "group": group, "text": text, "url": url}


def repro(steps, note="", label="复现这个实验"):
    """页面上的折叠按钮：点开才显示复现步骤，放进 scene(repro=…)。"""
    assert steps and all(len(s) == 2 and s[0] for s in steps), steps
    return {"label": label, "steps": [{"text": t, "code": c or ""} for t, c in steps], "note": note}


def code_lines(*rows):
    """.p-code 里的逐行内容：rows 为 (类名, 已转义的文本)；类名 add / del / hl / at，空串为普通行。"""
    return "".join(
        f'<span class="{cls}">{text}</span>' if cls else f'<span style="display:block">{text}</span>'
        for cls, text in rows
    )


def json_card(head_left, lines, head_right="", error=False):
    """工整浅色纸面 JSON 代码卡片（复用 .p-code，取代深黑裸 pre）。

    lines: 字符串列表，或 (cls, text) 元组列表（cls 取 '' / 'add' / 'del' / 'hl'）。
    """
    norm = [(r if isinstance(r, tuple) else ("", r)) for r in lines]
    body = code_lines(*[(c, escape(t)) for c, t in norm])
    err_cls = " is-err" if error else ""
    right_html = f"<span>{head_right}</span>" if head_right else ""
    return (
        f'<div class="p-code ch5-code{err_cls}">'
        f'<div class="p-code-head"><span>{head_left}</span>{right_html}</div>'
        f"<pre>{body}</pre></div>"
    )


def sym_badge(kind, text=None):
    """节点状态符号徽章（同时用符号和文字表达状态，呼应 REQ-026 非纯颜色可辨认）。"""
    presets = {
        "add": ("is-add", "+ added"),
        "rem": ("is-rem", "− removed"),
        "chg": ("is-chg", "~ changed"),
        "anc": ("is-anc", "= unchanged · 下层有变化"),
        "cnt": ("is-cnt", "计 1"),
        "nocnt": ("is-nocnt", "不计"),
    }
    cls, default_txt = presets[kind]
    return f'<span class="ch5-sym {cls}">{text or default_txt}</span>'


def pop(title, label, body):
    """页内弹窗（零件 .p-pop）：label 是按钮文字，title 是弹窗标题，body 为内容 HTML。"""
    return (
        f'<details class="p-pop"><summary>{label}</summary><div class="p-pop-body">'
        f'<div class="p-pop-head"><span>{title}</span>'
        "<button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div>"
        f"{body}</div></details>"
    )


def chapter_map(now):
    """开篇用的本章五节地图；now 为当前节序号（1–5），之前的节标为已完成。"""
    items = []
    for i, (num, name) in enumerate(SECTIONS, 1):
        cls = ' class="is-now"' if i == now else (' class="is-done"' if i < now else "")
        items.append(f"<li{cls}><b>{num}</b>{name}</li>")
    return '<ol class="p-map">' + "".join(items) + "</ol>"


def cover_handoff(now, prev_tag, prev_title, prev_desc, next_tag, deliverables):
    """每节开篇页统一构图：五节路线图 + 左右交接双栏（上节起点 → 本节交付）。"""
    items = "".join(f"<li>{d}</li>" for d in deliverables)
    return (
        chapter_map(now)
        + '<div class="ch5-cover-grid">'
        f'<div class="p-box is-soft" data-role="ctx" data-reveal="1">'
        f'<span class="p-tag" data-role="ctx">{prev_tag}</span>'
        f"<h3>{prev_title}</h3><p>{prev_desc}</p></div>"
        '<div class="ch5-cover-arrow" data-reveal="2" aria-hidden="true">→</div>'
        f'<div class="p-box" data-role="us" data-reveal="2">'
        f'<span class="p-tag" data-role="us">{next_tag}</span>'
        f'<ul class="ch5-mini-list">{items}</ul></div>'
        "</div>"
    )


def diff_arch(active, done=(), reveal=0):
    """全章共用的 JSON Diff 模块分层接线与隔离保护图（5.1–5.4 方案页逐节点亮）。"""
    keys = {k for k, _, _, _ in ARCH_SLICES}
    assert active in keys and set(done) <= keys, (active, done)
    nodes = []
    for key, title, loc, desc in ARCH_SLICES:
        if key == active:
            cls, role, badge = "is-active", "us", "本节实现"
        elif key in done:
            cls, role, badge = "is-done", "ok", "✓ 已验证"
        else:
            cls, role, badge = "is-todo", "ctx", "后续任务"
        nodes.append(
            f'<div class="ch5-arch-node {cls}" data-role="{role}">'
            f'<div><div class="ch5-arch-top"><span><code>{loc}</code></span>'
            f'<span class="ch5-arch-badge">{badge}</span></div>'
            f"<h3>{title}</h3></div>"
            f"<p>{desc}</p></div>"
        )
    rv = f' data-reveal="{reveal}"' if reveal is not None else ""
    return (
        f'<div class="ch5-arch"{rv}>'
        f'<div class="ch5-arch-chain">{"".join(nodes)}</div>'
        '<div class="ch5-arch-guard"><b>隔离保护（全章不动）：</b>'
        "<span><code>parser.ts</code> 顺序节点 id</span> · "
        "<span><code>useJson</code> 单输入状态链路</span> · "
        "<span><code>NotSupported</code> 原超限组件</span> · "
        "<span><code>apps/vscode</code> 插件端</span></div>"
        "</div>"
    )


def quiz_cards(q1_say, q1_ans, q2_say, q2_ans, right=2):
    """双栏并排暂停自检题卡（印章揭晓，替代左上角稀疏列表与手写体长句）。"""
    assert right in (1, 2), right

    def card(idx, say, ans):
        ok = idx == right
        role = "ok" if ok else "gate"
        stamp = "✓ 做法正确" if ok else "✗ 做法不对"
        return (
            f'<div class="ch5-qcard">'
            f'<div class="ch5-qcard-head"><span class="ch5-qcard-num">{idx}</span>'
            f'<p class="ch5-qcard-say">{say}</p></div>'
            f'<span class="p-stamp" data-role="{role}" data-reveal="{idx}">{stamp}</span>'
            f'<div class="ch5-qcard-ans" data-role="{role}" data-reveal="{idx}">{ans}</div>'
            f"</div>"
        )

    return (
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再看参考结论</span>'
        '<div class="ch5-quiz-grid">'
        + card(1, q1_say, q1_ans)
        + card(2, q2_say, q2_ans)
        + "</div>"
    )


def sketch_recap(pin_label, core_lines, exits_head, exits, next_head, next_title, next_desc):
    """每节末页涂鸦小结（旋转重点贴纸 + 交付列表 + 下一节承接，360px 零溢出）。"""
    core_html = "<br>".join(core_lines)
    exit_items = "".join(f'<li class="is-pass"><span>{e}</span></li>' for e in exits)
    return (
        '<div class="p-sketch" style="align-items:start">'
        f'<div data-reveal="0"><h3 style="text-align:center">{pin_label}</h3>'
        f'<div class="ch5-takeaway-card"><span class="ch5-takeaway-pin">记住这件事</span>'
        f"<p>{core_html}</p></div></div>"
        f'<div data-reveal="1"><h3>{exits_head}</h3>'
        f'<ul class="p-exits" style="gap:10px">{exit_items}</ul></div>'
        f'<div class="p-next" data-reveal="2"><h3>{next_head}</h3>'
        f'<div class="p-box" data-role="us"><h3>{next_title}</h3><p>{next_desc}</p></div></div>'
        "</div>"
    )


def pending(scene_fn, pid, segment, question, note):
    """实操页轻量占位（待正式录制时按真实运行结果填入，不预写 Agent 回复或运行输出）。"""
    scene_fn(
        id=pid,
        segment=segment,
        label=question.rstrip("？"),
        title=question,
        lead="本页在正式录制演练后按真实运行结果补充",
        html=f'<div class="p-bar is-light" data-reveal="0">{note}</div>',
        steps=["待录制演练后补充"],
    )


class Lesson:
    def __init__(self, builder, number, title, summary, prep=()):
        self.here = Path(builder).resolve().parents[1]
        # 录前准备：开录前一次做完的事，逐字稿页顶单独一块（courseware/shared/speaker.js），不上画面
        self.prep = list(prep)
        # 口播唯一来源：本节目录下的 script.json
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
        assert len(script) == len(kw["steps"]), (kw["id"], "steps 与 script 条数不一致")
        scene = {}
        for key, value in kw.items():
            scene[key] = value
            if key == "steps":
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
        (self.here / "lesson.js").write_text(
            "window.lesson = " + json.dumps(lesson, ensure_ascii=False, indent=2) + ";\n"
        )
        print(f"{self.number}: {len(scenes)} pages, {sum(len(s['steps']) for s in scenes)} steps")
