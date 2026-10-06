# 2.1 先听听别人怎么说

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md) · [验证记录](VALIDATION.md)

用课程示例反馈卡建立反馈基线；借一次只读核对，看懂 Codex 实际发给模型的请求由哪几块组成，以及它为什么随环境和权限变化。依据[内部大纲](../../../../docs/outline/course-outline-internal.md) 2.1 与[第 2 章提案](../../../../docs/outline/proposals/2026-10-02-ch02-adjustments.md)。未试讲。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源：页面 HTML、分步、逐字稿、阅读模式导语和讲师提示都写在里面，生成 `lesson.js` 与 `script.md`。不要直接改生成物。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/01-feedback/tools/build-lesson.py
python3 courseware/tools/check-courseware.py
```

- 页面零件来自 `courseware/shared/parts/`；字体来自 `courseware/shared/fonts/`；播放器画布和章节条使用各章共用的 `courseware/shared/presentation.css`、`evidence.css` 与 `presentation.js`（改动这些文件时要回看第 0、1、2 章）。
- 每页的 `seconds` 只用于章节条的宽度比例，按步骤数计算，不是时长估算；讲述节奏由讲师录制时调整。
- 本节暂无练习页；跟做产出写入学员仓库的 `docs/evidence/CH02_VIBE_ITERATIONS.md`。

## 素材状态

- 请求组成的字符数、token 数、隔离环境与权限对比，来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，`codex exec`），见提案“实测记录”。录制时用冻结版本重新生成统一脱敏记录，并按实际数字更新画面。
- p07 之后的 Codex 回复与 p14 的工具调用以录制实际为准，讲师提示里写了两个分支。
- p10 只引用 Codex 开源仓库基础指令的章节目录（中文意译），不大段引用原文。
- 课程示例反馈卡、分支表、claude-tap setup 页、隔离环境与对比实验页、请求解剖页尚未制作。
