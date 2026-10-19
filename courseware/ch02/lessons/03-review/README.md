# 2.3 AI 交回的改动，要不要接受

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

先看范围再看内容，对照完成标准，再回看请求记录里 Codex 当时看到了什么，决定接受、缩小还是拒绝；用提交让“拒绝”变便宜，回退靠 git，不靠清空对话。9 页。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章 Context 主线提案](../../../../docs/outline/proposals/2026-10-19-ch02-context-storyline.md)。首版（2026-10-03），2026-10-20 按 Context 主线改版；未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/03-review/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 画面中的命令输出来自排练版 homepage-v1 在 Git 2.50.1 下的运行（2026-10-03；p40–p41 的提交与撤回 2026-10-20 按“一次提交”重跑）；录制时换成 2.2 的真实 diff。
- p38a 的请求记录是结构示意，录制时换成 claude-tap 里 2.2 本轮那几次请求的实际内容，工具名、命令和次数以记录为准。
- p40 一次提交，提交说明写本轮目标与改动文件（2026-10-19 取消记录文件，原“代码与记录分两次提交”不再需要）；p41 的 `git revert <哈希>` 在临时分支演示，2026-10-20 在临时仓库实测撤回提交只改 App.tsx、原提交保留。
- 真实 diff 干净时，p39 快速带过，以 p41 为主（提案决定 21）；不准备坏 diff（决定 7）。
