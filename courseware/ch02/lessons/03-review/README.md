# 2.3 参考一个主页改风格：它看到了什么

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

先给 2.2 的内容留一个检查点：只看范围和出处，提交 homepage-v1。再参考一个喜欢的主页，分两轮改出自己的风格（p40a 第一轮、p40d 第二轮），每一轮都回到请求记录问它拿到的参考是什么、有什么看不见，审过再提交或 `git restore`。8 页：p35 p36 p40 p40a p40b p40d p40c p42。依据[第 2 章文件](../../../../docs/chapters/ch02.md)（C2-61）。首版 2026-10-03，2026-10-20 按 Context 主线改版，2026-10-22 改以调整风格为重点（C2-59 至 C2-61）。未经讲师审阅，未试讲、未录制；p36、p40 仍是 2.2 旧运行的输出，p40a–p40c 只排练过一次第一轮（见章文件实测记录），p40d 没有排练。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。结构与 [2.1](../01-request/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/03-review/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- p36、p37 的命令输出来自 2026-10-20 那次 2.2 运行留下的工作区（Git 2.50.1），diff 与 `materials/homepage-v1.diff` 逐字相同；p40 的提交行和短哈希是示例。录制时按讲师 2.2 的实际 diff 讲。
- p38a 的请求记录取自 2026-10-20 那次 2.2 运行（与 2.1 同一套配置，不是同一次运行），录制时按 claude-tap 里 2.2 本轮那几次请求的实际内容讲，工具名、命令和次数以记录为准；第 5 步的 Prompt 之外调用（`npm run preview`、无头 Chrome 截图）录制时没出现就不讲。
- Git 只留 p40 一页：`git add`、`git diff --cached`、`git commit`，加一句 `git restore` / `git revert`；revert 的完整步骤在 p40 的复现按钮里（2026-10-21，C2-45）。
- p40 一次提交，提交说明写本轮目标与改动文件；`git revert <哈希>` 在临时分支演示，2026-10-20 在临时仓库实测撤回提交只改 App.tsx、原提交保留。
- 真实 diff 干净时，p39 快速带过，以 p40 为主（C2-11）；不准备坏 diff（C2-05）。
