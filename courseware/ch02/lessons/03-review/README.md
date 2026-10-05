# 2.3 AI 交回的改动，收不收

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

先看范围再看内容，对照完成标准决定接受、缩小还是拒绝；用提交让“拒绝”变便宜。8 页。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章提案](../../../../docs/outline/proposals/2026-10-02-ch02-adjustments.md)。首版（2026-10-03），未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js` 与 `script.md`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。

```sh
python3 courseware/ch02/lessons/03-review/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 画面中的命令输出来自排练版 homepage-v1 在 Git 2.50.1 下的一次运行（2026-10-03）；录制时换成 2.2 的真实 diff。
- p41 的 `git revert` 在临时分支演示；实测撤回提交会连同记录文件一起撤回，口播据此讲“一次提交只放一件事”。
- 真实 diff 干净时，p39 快速带过，以 p41 为主（提案决定 21）；不准备坏 diff（决定 7）。
