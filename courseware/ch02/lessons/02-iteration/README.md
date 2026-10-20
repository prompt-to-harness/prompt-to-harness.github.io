# 2.2 补上项目经历，看对话怎么变长

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

对话每多一轮，前面的内容都会被重发；`/clear` 和压缩之后还剩什么，在请求记录里看得到。项目上，把自己的项目经历加进首页，并用三种屏幕尺寸、键盘和构建证明没弄坏别的。15 页，页序 p20 p21 p22 p23 p24 p27a p28 p29 p30 p30a p31 p27 p32 p33 p34（id 不按页序）。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章 Context 主线提案](../../../../docs/outline/proposals/2026-10-19-ch02-context-storyline.md)。2026-10-20 按重写后的分镜重做，未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/02-iteration/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- p21、p23、p24 的数字与行为来自 2026-10-02 讲师机器上的单次运行（Codex 0.160.0 + MiniMax），见 [2026-10-02 第 2 章提案](../../../../docs/outline/proposals/2026-10-02-ch02-adjustments.md)“实测记录”。p24 的“失败调用留在之后每次请求里”按同一记录的重发方式推断，录制时在记录里逐次指认。
- p22 是示意图：按 2026-10-02 那次运行里相邻两次请求的结构，画成 2.1 两步 Prompt 的样子；2.1 两步的实际记录录到后替换。
- p27a 的 `/clear`、`/new` 说明 2026-10-19 在 openai/codex main 的 `codex-rs/tui/src/slash_command.rs` 核对；“清空后请求只剩初始内容”未实测，画面是示意，录制时按实际记录替换。
- p27 主讲用本节真实会话压缩；画面下方方框是 `materials/compact/` 独立实验（2026-10-05，5 次运行）的结果，已标明来源。录制时会话太短、看不出差别，就改用独立实验并如实说明。
- p29 的项目经历用 [`../../materials/README.md`](../../materials/README.md) 中两位讲师经历聚合的三条；p30–p31 的 Codex 计划、diff 与检查结果以录制实际为准，排练版预估见 `materials/homepage-v1.diff`。
- 原 p25、p26（Codex 版本与模型指令对比）2026-10-19 移出主课，计划放配套页，配套页尚未制作；素材与核对记录见本文件和 `tools/build-lesson.py` 的 git 历史（审查见 `docs/reviews/ch02/2026-10-05-2.2-p25-p26-claude.md`）。
- 第 2 章不设固定记录文件；p32 只是一页建议，不计入验收。
