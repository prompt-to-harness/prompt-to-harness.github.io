#!/usr/bin/env python3
"""Export the shared lesson source into the instructor's Markdown script."""
import json
import re
from pathlib import Path

demo = Path(__file__).resolve().parents[1]
source = (demo / "lesson.js").read_text()
lesson = json.loads(source.removeprefix("window.lesson = ").strip().removesuffix(";"))
chapter_docs = demo.parents[2] / "docs" / "archive" / "working-drafts-ch01"
notes = json.loads((chapter_docs / "ch01-01-recording-notes.json").read_text())
out = chapter_docs / "ch01-01-script.md"
lines = [
    f"# 第 1 章第 1 节：{lesson['title']} · 逐字稿",
    "",
    "> 2026-09-21 · 备课逐字稿；正文来自 demos/archive/working-drafts-ch01-presentation/lesson.js，制作说明来自 docs/archive/working-drafts-ch01/ch01-01-recording-notes.json。修改后运行 python3 demos/archive/working-drafts-ch01-presentation/scripts/export-script.py。",
    "",
    "本稿围绕画面和操作准备，详细检查与恢复步骤见配套页。建议时长沿用试录预算，含实操，需试讲校准，不用重复讲解填满。模型回复不写成固定台词，实际输出以录制为准。",
    "",
    "录前条件：已安装并能使用 Codex App；教学项目已下载、能按说明运行，README 中有可定位的「项目介绍」；请先按 [第一节环境卡](ch01-01-environment.md) 填写并核验 Starter Repo、基线、版本、命令和正常输出。当前 HTML 样板不代表已验证这些外部条件。核心路径从干净的教学副本开始。",
    "",
    "本节只修改项目介绍，不生成正式首页。第 5 节再完成首页 v0、开发预览、production build 和检查点。",
    "",
]
for index, scene in enumerate(lesson["scenes"], 1):
    scene = {**scene, **notes[scene["id"]]}
    title = re.sub("<[^>]*>", "", scene["title"])
    lines += [f"## {index:02d} · {scene['label']}", "", f"**画面标题**：{title}", "", f"**建议时长**：{scene['duration']}", "", f"**画面与切点**：{scene['visual']}", "", "### 口播", ""]
    for paragraph in scene["script"]:
        lines += [paragraph, ""]
    if scene.get("commands"):
        lines += ["### 命令与检查", ""]
        for item in scene["commands"]:
            lines += [f"- `{item['command']}`：{item['label']}。{item['description']}", ""]
    if scene.get("prompt"):
        lines += ["### 实际输入", "", "```text", scene["prompt"], "```", ""]
    lines += ["### 实操与证据", "", scene["practice"], "", f"保留：{scene['evidence']}", ""]
lines += [
    "## 录制交接", "",
    "按上面的讲述点编号命名片段，区分 lecture（HTML）和 practice（App/实际项目）。同一讲述点有多个 take 时标明采用哪一条，不混接不同起点的因果过程。",
    "",
    "剪辑可缩短安装和等待；保留真实目标、目录核对、计划、改动和验证。示意 diff 与预设自检题必须保留其标识。未运行的页面、构建、测试不得配上已通过的结论。",
    "",
    "若 App 回复与准备不同，围绕目标、范围和证据重新讲述；若基础环境阻断，单独录补救说明或引用对应帮助材料。不要通过清理学员已有工作来制造统一画面。",
    "",
]
out.write_text("\n".join(lines))
print(out)
