# 2.3 AI 交回的改动，收不收

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

先看范围再看内容，对照完成标准决定接受、缩小还是拒绝；用提交让“拒绝”变便宜。8 页。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章提案](../../../../docs/outline/proposals/2026-10-02-ch02-adjustments.md)。首版（2026-10-03），未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js` 与 `script.md`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/03-review/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 画面中的命令输出来自排练版 homepage-v1 在 Git 2.50.1 下的一次运行（2026-10-03）；录制时换成 2.2 的真实 diff。
- p40 代码与记录分两次提交（2026-10-05 讲师确认，解决“同一次提交里撤回会带走记录”和“提交后再改记录导致 revert 失败”两个问题）；p41 的 `git revert <哈希>` 在临时分支演示，2026-10-05 在临时仓库实测撤回只影响 App.tsx。
- 真实 diff 干净时，p39 快速带过，以 p41 为主（提案决定 21）；不准备坏 diff（决定 7）。
