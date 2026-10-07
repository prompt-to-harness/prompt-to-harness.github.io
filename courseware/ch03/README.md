# 第三章：用小游戏体验快速迭代与 Plugin

> 状态：逐页分镜与课件首版（2026-10-06 夜）。依据[第 3 章故事线提案](../../docs/outline/proposals/2026-10-05-ch03-storyline.md)第五版：讲师授权按推荐推进，尚未经两位讲师审阅；内部大纲第 3 章尚未同步。画面中的输出来自讲师机器上的排练运行（见 [materials](materials/README.md)），不是录制版。均未试讲、未录制。

一句话主线：把只有首页的个人站点变成能玩两个小游戏的实验室，并发现“能玩”背后有一串没人亲自定过、也没写下来的规则。

| 小节 | 分镜 |
| --- | --- |
| 3.1 一句话加一个记忆翻牌 | [STORYBOARD](lessons/01-memory-game/STORYBOARD.md) · [课件](lessons/01-memory-game/index.html) |
| 3.2 这条规则是谁定的 | [STORYBOARD](lessons/02-rules/STORYBOARD.md) · [课件](lessons/02-rules/index.html) |
| 3.3 挑一个缺陷，按证据修 | [STORYBOARD](lessons/03-debug/STORYBOARD.md) · [课件](lessons/03-debug/index.html) |
| 3.4 做游戏的经验，有人打包好了吗 | [STORYBOARD](lessons/04-plugin/STORYBOARD.md) · [课件](lessons/04-plugin/index.html) |
| 3.5 插件有自己的主张 | [STORYBOARD](lessons/05-game-studio/STORYBOARD.md) · [课件](lessons/05-game-studio/index.html) |
| 3.6 那条规则，下次 Codex 从哪里知道 | [STORYBOARD](lessons/06-sources/STORYBOARD.md) · [课件](lessons/06-sources/index.html) |
| 3.7 重开时，还有什么要清理 | [STORYBOARD](lessons/07-cleanup/STORYBOARD.md) · [课件](lessons/07-cleanup/index.html) |

## 全章约定

- **页码**：全章连续编号 p01 起，规则同第 2 章（插页加后缀，不重排）。
- **方式**：跟做＝学员暂停视频完成，计入验收；看懂＝机制演示，以自检为准；示例（选做）＝讲师演示，学员可按配套材料自主尝试。
- **时长**：分镜不做页面级时长估算。
- **两条贯穿规则**：AI 替你定的“等待翻回期间的点击一律忽略”（3.2 发现，合理但没人问过你）；缺陷逼出来的“步数怎么算”（3.3 由人定下）。3.6 查这两条规则存在哪里。
- **讲师主线的实现**：排练第 8 轮的记忆翻牌（`lab-runs/ch03-mainline/v2-run8`，12 张牌互不相同、一局打不完）。学员的实现会不同；自己没发现缺陷时，用讲师那一份作复现材料。录制时以录制当天的真实实现替换，缺陷是否出现不预设。
- **本章记录文件**：`docs/evidence/CH03_MEMORY_GAME.md`（3.1–3.3、3.7）、`docs/evidence/CH03_GAME_STUDIO_PLUGIN_LAB.md`（3.4–3.5）、`docs/evidence/CH03_REQUIREMENTS_DEBT.md`（3.6）。

## 课件维护

每节 `tools/build-lesson.py` 是唯一内容源，生成 `lesson.js` 与 `script.md`；全章共用的骨架在 [`tools/lessonkit.py`](tools/lessonkit.py)（从第 2 章复制，只改章节常量）。

```sh
for f in courseware/ch03/lessons/*/tools/build-lesson.py; do python3 "$f"; done
make check
```
