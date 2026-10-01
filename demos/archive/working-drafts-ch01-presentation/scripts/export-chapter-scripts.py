#!/usr/bin/env python3
"""Export lessons 4–6 from the same content used by the browser."""
import json
import re
from pathlib import Path

demo = Path(__file__).resolve().parents[1]
docs = demo.parents[2] / "docs" / "archive" / "working-drafts-ch01"
for number in (4, 5, 6):
    source = f"lesson-{number:02}.js"
    lesson = json.loads((demo / source).read_text().removeprefix("window.lesson = ").strip().removesuffix(";"))
    lines = [
        f"# 第 1 章第 {number} 节：{lesson['title']} · 逐字稿", "",
        f"> 2026-09-21 · 首版备稿。正文由 {source} 导出；修改内容源后运行 python3 demos/archive/working-drafts-ch01-presentation/scripts/export-chapter-scripts.py。", "",
        lesson["summary"], "",
        f"[录制说明与镜头证据](ch01-{number:02}-recording-notes.md) · "
        f"[站内练习与参考答案](../../../demos/archive/working-drafts-ch01-presentation/practice-{number:02}.html)", "",
        "真实环境、实操输出与试讲时长待核验；下面的条件性讲解不能用作已经通过的证据。", "",
    ]
    for index, scene in enumerate(lesson["scenes"], 1):
        lines += [f"## {index:02} · {scene['label']}", "",
                  f"**画面标题**：{re.sub('<[^>]*>', '', scene['title'])}", "",
                  f"**画面要点**：{scene['lead']}", "", "### 口播", ""]
        for paragraph in scene["script"]:
            lines += [paragraph, ""]
        if scene.get("prompt"):
            lines += ["### 请求", "", "```text", scene["prompt"], "```", ""]
        for item in scene.get("commands", []):
            lines += [f"- `{item['command']}`：{item['label']}。{item['description']}", ""]
    (docs / f"ch01-{number:02}-script.md").write_text("\n".join(lines))
    print(f"ch01-{number:02}-script.md: {len(lesson['scenes'])} scenes")
