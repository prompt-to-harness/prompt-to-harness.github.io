# 2.5 AI 说“只是重构”

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

用两份提交说明相同的教学 diff，判断哪份保持了可观察行为；受欢迎的行为变化也需另行确认；收尾铺垫“没有测试，验证很贵”。6 页。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章提案](../../../../docs/outline/proposals/2026-10-02-ch02-adjustments.md)。首版（2026-10-03），未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js` 与 `script.md`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。

```sh
python3 courseware/ch02/lessons/05-refactor/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 两份 diff 与行为核对见 [`../../materials/README.md`](../../materials/README.md)：A 渲染结果与 homepage-v1 逐字相同；B 让三张卡片进入 Tab 顺序、点击后地址多出 `#`。
- 录制版基于讲师冻结的 homepage-v1 重新制作两份 diff，并按 materials README 重做检查；p54 的文件数与行数随之更新。
