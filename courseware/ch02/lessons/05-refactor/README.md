# 2.5 AI 说“只是重构”

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

用五张提交说明都写着 refactor 的小卡做分拣，判断哪几张保持了可观察行为；受欢迎的行为变化也需另行确认；收尾铺垫“没有测试，验证很贵”。6 页。2026-10-05 由“两份 diff 二选一”改为分拣题（讲师确认，原因见 [STORYBOARD](STORYBOARD.md)）。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章提案](../../../../docs/outline/proposals/2026-10-02-ch02-adjustments.md)。首版（2026-10-03），未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js` 与 `script.md`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/05-refactor/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 五张卡的 diff 与行为核对见 [`../../materials/README.md`](../../materials/README.md)（2026-10-05，排练版 homepage-v1，单次）：①② 渲染结果与 homepage-v1 逐字相同；③ 顺序变了；④ 描述样式丢失、卡片变高，构建仍成功；⑤ 三张卡进入 Tab 顺序。
- 录制版基于讲师冻结的 homepage-v1 重新制作五张卡，并按 materials README 重做检查；p54 的行数、p55 的顺序与尺寸随之更新。p55 的录屏素材（③ 同屏、④ 并排、⑤ 连续按 Tab）尚未录制。
