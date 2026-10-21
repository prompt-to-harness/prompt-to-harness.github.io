# 2.3 它看到了什么，才这样改

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

先看范围再看内容，再回看请求记录：它依据什么改，看全了没有（长输出会被截断），有什么看不见（没读的文件、浏览器里的页面）；然后决定接受、缩小还是拒绝，提交一次留下检查点，接受错了用 git 退回。10 页。依据[第 2 章文件](../../../../docs/chapters/ch02.md)（C2-45）。首版 2026-10-03，2026-10-20 按 Context 主线改版，2026-10-21 改讲“可见范围”：新增 p38b、p38c，Git 收成 p40 一页，删除 p41、p41a 和三层检查；未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

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
