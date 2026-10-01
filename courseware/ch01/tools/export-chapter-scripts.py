#!/usr/bin/env python3
"""Export all six browser content sources into local teaching notes."""
import argparse
import html
import json
import re
from pathlib import Path
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--lessons", nargs="+", type=int, choices=range(1, 7), help="Export only these lesson numbers")
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
for source in sorted((root / "lessons").glob("*/lesson.js")):
    number = int(source.parent.name.split("-", 1)[0])
    if args.lessons and number not in args.lessons:
        continue
    lesson = json.loads(source.read_text().removeprefix("window.lesson = ").strip().removesuffix(";"))
    lines = [f"# 1.{number} {lesson['title']}", "", "> 从演示内容源导出。操作与时长未实测，备课分支按现场事实选择。", ""]
    for scene in lesson["scenes"]:
        lines += [f"## {scene['id'].upper()} {scene['label']}", "", f"[对应课件](index.html#{scene['id']})", "", "### 口播", "", *sum(([text, ""] for text in scene["script"]), [])]
        if scene.get("steps"):
            lines += ["### 分步推进", ""]
            for i, beat in enumerate(scene["steps"]):
                lines += [f"- 第 {i + 1} 步：{beat}（[演示](index.html?mode=slides&step={i}#{scene['id']}))"]
            lines += ["", f"本页预算：{scene['seconds']} 秒（含操作或停顿，未试讲）。", ""]
        if scene.get("prompt"):
            lines += ["### 请求", "", "```text", scene["prompt"], "```", ""]
        for item in scene.get("teaching", []):
            lines += [f"### {item['title']}", "", item['text'], ""]
        notes = re.sub(r"</(?:p|h3)>", "\n\n", scene.get("notes", ""))
        notes = html.unescape(re.sub(r"<[^>]+>", "", notes))
        lines += ["### 原课件备注", "", notes, ""]
    source.with_name("script.md").write_text("\n".join(lines))
    print(f"1.{number}: {len(lesson['scenes'])} pages")
