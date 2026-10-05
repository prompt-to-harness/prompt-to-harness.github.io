"""第 2 章各节 build-lesson.py 共用的骨架：页面登记、章节地图与输出。

每节的 tools/build-lesson.py 只写本节内容：

    lesson = Lesson(__file__, "2.3", "AI 交回的改动，收不收", summary="…")
    scene, KICK = lesson.scene, lesson.kick
    scene(id="p35", …)
    lesson.write()

steps 与 script 一一对应；data-reveal 最大值 = 步骤数 - 1。
scene["seconds"] 只用于章节条的宽度比例（按步骤数计算），不是时长估算。
"""
import json
from pathlib import Path

CHAPTER = "第 2 章 · Vibe Coding"
SECTIONS = [("2.1", "听反馈"), ("2.2", "改一处"), ("2.3", "审改动"), ("2.4", "公开发布"), ("2.5", "只是重构？")]

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
        self.number, self.title, self.summary = number, title, summary
        self.kick = f"第 2 章 · {number} · "
        self.scenes = []

    def scene(self, **kw):
        kw.setdefault("teaching", [])
        if not kw.get("refs"):
            kw.pop("refs", None)
        kw["source"] = f"index.html#{kw['id']}"
        kw["seconds"] = 30 * len(kw["steps"])
        assert len(kw["steps"]) == len(kw["script"]), kw["id"]
        self.scenes.append(kw)

    def write(self):
        scenes = self.scenes
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

        lines = [f"# {self.number} {self.title}", "", "> 由 tools/build-lesson.py 生成。", ""]
        for s in scenes:
            lines += [f"## {s['id'].upper()} {s['label']}", "", f"[对应课件](index.html#{s['id']})", "", "### 口播", ""]
            for i, (beat, text) in enumerate(zip(s["steps"], s["script"])):
                lines += [f"**第 {i + 1} 步 · {beat}**（[演示](index.html?mode=slides&step={i}#{s['id']})）", "", text, ""]
            if s.get("refs"):
                lines += ["### 原文与链接", ""]
                lines += [f"- {'画面上' if r['kind'] == 'live' else '延伸'} · {r['group'] + ' · ' if r['group'] else ''}[{r['text']}]({r['url']})" for r in s["refs"]]
                lines += [""]
            if s.get("prompt"):
                lines += ["### 请求", "", "```text", s["prompt"], "```", ""]
            for item in s["teaching"]:
                lines += [f"### {item['title']}", "", item["text"], ""]
        (self.here / "script.md").write_text("\n".join(lines))
        print(f"{self.number}: {len(scenes)} pages, {sum(len(s['steps']) for s in scenes)} steps")
