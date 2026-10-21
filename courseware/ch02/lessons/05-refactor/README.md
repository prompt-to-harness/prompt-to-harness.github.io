# 2.5 AI 说“只是重构”

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

> **已被取代**：按[第 2 章文件](../../../../docs/chapters/ch02.md) C2-37，2.5 改为工程经验分享；本节课件重做前保留现状。

开头是课程设定的发布之后的情境：个人主页已上线，Codex 交回五个说明都写“只是重构，行为不变”的改动（五张卡是教学材料，不是真实运行）；学员先问“这个结论的依据在哪”，说明和 diff 只能推断，再用运行检查分拣哪几张保持了可观察行为；受欢迎的行为变化也需另行确认（⑤ 就地复述第 1 章“项目卡不跳转”的决定）；收尾回指 2.2、2.4 两次依据在 context 里的真实对照，点出本章回到 context 的运行结果只有 build，铺垫第 4–6 章，并回看全章五个问题。9 页：总览一页，①②、③、④、⑤ 各一页对照（2026-10-06 由一张结论表拆开），之后是定义、自检、小结。2026-10-05 由“两份 diff 二选一”改为分拣题（讲师确认，原因见 [STORYBOARD](STORYBOARD.md)）。依据[第 2 章文件](../../../../docs/chapters/ch02.md)。首版（2026-10-03），2026-10-20 按 Context 主线改 p54–p58，同日按讲师决定改开头情境与讨论点；未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/05-refactor/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 证据图在 [`evidence/`](evidence/)，由 [`../../materials/refactor-cards/shoot.py`](../../materials/refactor-cards/shoot.py) 生成（2026-10-06，个人主页发布候选，1440×900、DPR 2）；脚本同时打印行为核对结果。录制版换成讲师冻结的 homepage-v1 重跑，并按输出更新口播数字。
- ①② 的“完整 diff”弹窗（零件 `.p-pop`）在构建时直接读取 `materials/refactor-cards/` 的原始 diff。
- 五张卡的 diff 与行为核对见 [`../../materials/README.md`](../../materials/README.md)（2026-10-05，排练版 homepage-v1，单次）：①② 渲染结果与 homepage-v1 逐字相同；③ 顺序变了；④ 描述样式丢失、卡片变高，构建仍成功；⑤ 三张卡进入 Tab 顺序。
- 录制版基于讲师冻结的 homepage-v1 重新制作五张卡，并按 materials README 重做检查；p54 的行数、p55-3–p55-5 的顺序与尺寸随之更新。证据图默认用静态截图，只有 p55-5 的 Tab 焦点切到实操按一次（2026-10-20 讲师决定，准备方法见该页讲师提示）。
