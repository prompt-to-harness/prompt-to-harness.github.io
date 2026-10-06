# 2.2 只改一处，并证明改好了

[打开课件](index.html) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

先分清模型、会话、文件与进程各记住什么，再选会话；用当前证据让 Codex 只改项目区，并用三种视口、键盘和构建证明没弄坏别的。15 页。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章提案](../../../../docs/outline/proposals/2026-10-02-ch02-adjustments.md)。首版（2026-10-03），未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js` 与 `script.md`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/02-iteration/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- p21–p24、p27 的数字与行为来自 2026-10-02 讲师机器上的单次运行（Codex 0.160.0 + MiniMax），见提案“实测记录”；p22 是按记录结构整理的示意图，录制时换成 claude-tap 的相邻请求 diff 截图。
- p25–p26 的仓库数据 2026-10-03 在 openai/codex main（b741e48）上复核：通用指令 `codex-rs/protocol/src/prompts/base_instructions/default.md`；按模型的指令在 `codex-rs/core/`（提案记录的路径有误）。
- p26 于 2026-10-05 改为对比两次真实请求：本机 codex-cli 0.160.0、隔离 HOME、claude-tap `--tap-export-prompt`（本地应答、不访问上游、无真实密钥），模型名分别为 MiniMax-M3 与 gpt-5.5。当前 Codex 的按模型指令来自 `codex-rs/models-manager/models.json`；p26 旧版对比的 `codex-rs/core/gpt_*_prompt.md` 自 2026-01 起已无代码引用。复现步骤见 p26 讲师备注，审查见 `docs/reviews/ch02/2026-10-05-2.2-p25-p26-claude.md`。
- p29 的项目经历用 [`../../materials/README.md`](../../materials/README.md) 中两位讲师经历聚合的三条；p30–p32 的 Codex 计划、diff 与检查结果以录制实际为准，排练版预估见 `materials/homepage-v1.diff`。
- p27 是试讲过满时第一个移到配套页的内容，移走时同步移走 p33 第 2 题。
