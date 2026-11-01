# 第三章：用小游戏体验快速迭代与 Plugin

> 设计、范围、验收与待定事项只在[内部大纲第三章](../../docs/outline/course-outline-internal.md#第-3-章vibe-coding-与能力扩展--用两个小游戏理解-skill-与-plugin)维护。本文件只作课件导航。以下为旧版课件目录，待新小节安排确认后同步；均未试讲、未录制。

| 小节 | 分镜 |
| --- | --- |
| 3.1 一句话加一个记忆翻牌 | [STORYBOARD](lessons/01-memory-game/STORYBOARD.md) · [课件](lessons/01-memory-game/index.html) |
| 3.2 这条规则是谁定的 | [STORYBOARD](lessons/02-rules/STORYBOARD.md) · [课件](lessons/02-rules/index.html) |
| 3.3 挑一个缺陷，按证据修 | [STORYBOARD](lessons/03-debug/STORYBOARD.md) · [课件](lessons/03-debug/index.html) |
| 3.4 做游戏的经验，有人打包好了吗 | [STORYBOARD](lessons/04-plugin/STORYBOARD.md) · [课件](lessons/04-plugin/index.html) |
| 3.5 插件有自己的主张 | [STORYBOARD](lessons/05-game-studio/STORYBOARD.md) · [课件](lessons/05-game-studio/index.html) |
| 3.6 那条规则，下次 Codex 从哪里知道 | [STORYBOARD](lessons/06-sources/STORYBOARD.md) · [课件](lessons/06-sources/index.html) |
| 3.7 重开时，还有什么要清理 | [STORYBOARD](lessons/07-cleanup/STORYBOARD.md) · [课件](lessons/07-cleanup/index.html) |

## 课件维护

每节 `tools/build-lesson.py` 是画面与结构的内容源，口播在本节的 `script.json`，两者一起生成 `lesson.js`；全章共用的骨架在 [`tools/lessonkit.py`](tools/lessonkit.py)（从第 2 章复制，只改章节常量）。

```sh
for f in courseware/ch03/lessons/*/tools/build-lesson.py; do python3 "$f"; done
make check
```
