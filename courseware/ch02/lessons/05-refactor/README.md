# 2.5 用好 context 的三个做法

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

第 2 章最后一节，由另一位讲师分享三条用好 context 的做法：看懂重发的代价（2.1 那一问的 8 次请求按官方价格换算），换会话时自己写交接（和 2.2 的压缩摘要对照），换一个工具看同一句话的请求（Codex 与 Claude Code 对照）。最后回看全章、预告第 3 章。5 页（p59–p63），看懂即可，不设练习。依据[第 2 章文件](../../../../docs/chapters/ch02.md) 2.5（C2-37）。2026-10-21 按新分镜重做，数字来自同日各一次实测；未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)。

```sh
python3 courseware/ch02/lessons/05-refactor/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 三条的实测记录、待核实事项见[分镜](STORYBOARD.md)；价格以录制当天的 MiniMax 定价页为准。
- 原 2.5 的五张分拣卡（p53–p58）已转入[软件工程候选池](../../../../docs/software-engineering/software-engineering-problem-pool.md)第 2 题；`evidence/` 里的截图是它们的素材，本节页面不再引用，由 `materials/refactor-cards/shoot.py` 生成，留给以后使用。
