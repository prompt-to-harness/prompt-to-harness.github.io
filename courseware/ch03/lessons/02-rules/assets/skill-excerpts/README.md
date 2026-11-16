# 真实 Skill 节选截图

来源为 openai/plugins 固定提交 `0722921d5542fc593105c27bd52630babd8b8c2a` 的 Game Studio。这里仅保留少量原文节选的重排截图，不是 GitHub 页面截图；省略处标为 `…`，中文解释另放在 PPT 中。

| 文件 | 用途 | 来源定位 |
| --- | --- | --- |
| identity.png | 名称与描述如何帮助选择 | skills/game-studio/SKILL.md 文件头；描述仅保留首句 |
| workflow.png | 通用方法怎样落到玩家动作 | 同文件 Default Workflow 第一项 |
| reference.png | 原文如何引用资料 | 同文件 References 的 Engine selection 项 |
| conditions.png | 资料提供具体判断条件 | references/engine-selection.md 的 Phaser 适用条件前两项 |

重建：在仓库根目录运行 `uv run python courseware/ch03/lessons/02-rules/tools/build-skill-excerpts.py`。脚本从固定版本读取原文并核对节选，使用 Playwright 排版、截图；完整第三方文件不保存进仓库。截图中的省略标记与来源页眉为课程添加。
