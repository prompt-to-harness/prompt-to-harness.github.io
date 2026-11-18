# 第三章：Vibe Coding 与能力扩展 — 用两个小游戏理解 Skill 与 Plugin

## 备课方法与维护定位

2026-11-11 注销 ch03-prep，第三章直接使用 [course-prep](../../.agents/skills/course-prep/SKILL.md)。历史审查中的 Skill 名称保留当时事实，不作为当前调用入口。

- 教学内容只在 [Discussion](../../docs/outline/ch03-discussion.md) 维护；讨论知识和选材时不加载页面维护方法。
- 讲述页：[3.1](lessons/01-memory-game/speaker.html)、[3.2](lessons/02-rules/speaker.html)，对应目录的 `screen-plan.json` 维护画面讲法，`script.json` 维护口播。页面已有实现不代表教学决定获准；仅维护讲述页时按需读取 Discussion 内容，不自动回改。
- [提前准备材料与 3.1 入口迁移](../../docs/production/prepared-materials.md)：查找纯游戏、主页整合示例、Inspect 原文及旧链接去向。
- 材料：[索引](materials/README.md)、[MiniMax 快照](materials/minimax-20261106/README.md)。3.2 [关系样稿](lessons/02-rules/skill-relations-preview.html)和[节选出处](lessons/02-rules/assets/skill-excerpts/README.md)只供取材，不决定教学顺序。3.3–3.5 从 Discussion 对应设计进入，旧讲稿只作取材。
- 页面编辑使用 `sh tools/edit-courseware.sh --local`。修改页面实现时保留点击编辑、Enter 或失焦保存、Esc 撤销、评论定位与原材料地址；实际核对保存、刷新持久化、撤销和评论后还原测试文字。此约束只在页面实现任务中使用。


备课从 [Discussion](../../docs/outline/ch03-discussion.md)、讲述页和 PPT 进入。使用处的网页、运行记录和实操材料随讲述线定位。

| 小节 | 讲述页或 Discussion | PPT |
| --- | --- | --- |
| 3.1 | [讲述页](lessons/01-memory-game/speaker.html) | [PPT](lessons/01-memory-game/index.html?mode=slides#p01) |
| 3.2 | [讲述页](lessons/02-rules/speaker.html) | [PPT](lessons/02-rules/index.html?mode=slides#p07) |
| 3.3 | [Discussion](../../docs/outline/ch03-discussion.md#33-修改-skill并用它开发躲避游戏) | |
| 3.4 | [讲述设计](lessons/04-plugin/speaker.html) · [源](lessons/04-plugin/screen-plan.js) | [7 页课件](lessons/04-plugin/index.html?mode=slides)与对应口播已制作；SkillsMP 补充段待复查，待讲师审阅 |
| 3.5 | [分镜](lessons/05-vibe-showcase/STORYBOARD.md) · [逐字稿](lessons/05-vibe-showcase/speaker.html) | [10 页课件（含 3 页实操与试玩演示）](lessons/05-vibe-showcase/index.html?mode=slides#p01)与对应口播已制作；待录前实跑与试讲 |

课程定稿后，录制逐字稿页、学员阅读页和章首页从确认后的内容生成。3.1、3.2 的同源录制视图可用本节 `screen-plan.json` 的 `recordingReady: true` 开放。

## 历史取材入口

各节 README 保存历史制作记录，只读备查。

旧目录及材料保留原位置，退出正式教学顺序。3.2 的旧读改写方案移至[历史取材页](lessons/02-rules/speaker-archive.html?archive=1&part=2)，沿用原稿源，不复制口播；原 b01–b22 地址自动转到该入口。

<details>
<summary>原导航与制作摘要（历史记录，不作为当前入口）</summary>

> 设计、范围、验收与待定事项只在[第三章讨论版](../../docs/outline/ch03-discussion.md)维护。本文件只作旧课件导航。2026-11-06 前三节已调整为“经历翻牌开发 → 读懂 Skill 的内容与写法 → 在躲避开发中实际使用”；第二节在示例入口简介 Plugin 与 Skill 的关系，Plugin 安装与管理的后续落点及 3.4 承接待定。3.1 已按讨论版五段画面切换重整流程、随机性案例、现场视觉调整与 Skill 承接，直接采用讨论版五段讲法，整节逐字稿已补齐，三张 PPT 已制作；3.2 第一部分已制作五页 PPT、真实调用材料与画面讲述对照，沿用可复用口播；第二部分已补齐逐字稿，并完成四页 PPT；全节共九页，真实材料继续配合讲述，界面效果实录仍待补；其余分镜、页面按各节记录继续同步。3.5 经验分享只占位，尚未按新设计试讲、录制。

| 小节 | 历史分镜与原入口 |
| --- | --- |
| 3.1 经历一次真实的游戏开发 | [历史分镜](lessons/01-memory-game/STORYBOARD.md) · [画面与讲述对照](lessons/01-memory-game/speaker.html) · [材料与准备](lessons/01-memory-game/README.md) · [PPT](lessons/01-memory-game/index.html?mode=slides#p01) |
| 3.2 读懂一份完整的游戏开发 Skill（两部分 PPT 已制作） | [历史分镜](lessons/02-rules/STORYBOARD.md) · [第一部分对照](lessons/02-rules/speaker.html) · [第二部分对照](lessons/02-rules/speaker.html?part=2) · [PPT](lessons/02-rules/index.html?mode=slides#p07) · [调用材料](lessons/02-rules/selection-evidence.html#explicit) |
| 3.3 挑一个缺陷，按证据修 | [历史分镜](lessons/03-debug/STORYBOARD.md) · [课件](lessons/03-debug/index.html) |
| 3.4 做游戏的经验，有人打包好了吗 | [历史分镜](lessons/04-plugin/STORYBOARD.md) · [课件](lessons/04-plugin/index.html) |
| 3.5 插件有自己的主张 | [历史分镜](lessons/05-game-studio/STORYBOARD.md) · [课件](lessons/05-game-studio/index.html) |
| 3.6 那条规则，下次 Codex 从哪里知道 | [历史分镜](lessons/06-sources/STORYBOARD.md) · [课件](lessons/06-sources/index.html) |
| 3.7 重开时，还有什么要清理 | [历史分镜](lessons/07-cleanup/STORYBOARD.md) · [课件](lessons/07-cleanup/index.html) |


</details>

## 历史实现说明

2026-11-07，章首页与课程首页已按讨论版同步为五节导航，前三节为“经历开发 → 读懂 Skill → 使用指导开发”。入口仅链接当前可用的 3.1 证据与阅读稿、3.2 Skill 讲解页与对应阅读稿；3.3–3.5 暂不链接旧课件，3.5 不填具体内容。3.4 承接与 Plugin 落点仍按讨论版待定。上表继续保留旧课件定位，不代表新的教学顺序。

3.1 当前采用“PPT → Codex → 真实记录 → PPT → Codex”五段画面与讲述线：先发任务，预跑记录中讲流程与不确定性，汇总后回现场补充紫色视觉要求并核对，再引出 Skill 和发布主页。主审阅页按讨论版五段组织大结构，各段完整逐字稿已补齐并保留编辑能力，同一画面的口播放在一个连续文本块内；紫色参照图、完整调整请求和修改核对在相应段内直接显示，不再保留待补占位。源文件分组与备用片段有独立入口。视觉调整未实跑，三张 PPT 已制作，尚未讲师试讲。其余小节状态仍按章设计及各节记录判断。

3.1 当前由构建入口把 script.json 与 screen-plan.json 生成阅读数据，并调用 tools/memory-slides.py 生成三张 PPT；本机历史材料另由 prepare-review.py 定位，详见本节 README。其余小节的 `tools/build-lesson.py` 是画面与结构的内容源，口播在本节的 `script.json`，两者一起生成 `lesson.js`；全章共用的骨架在 [`tools/lessonkit.py`](tools/lessonkit.py)（从第 2 章复制，只改章节常量）。

```sh
python3 courseware/ch03/lessons/01-memory-game/tools/build-lesson.py
python3 courseware/ch03/lessons/02-rules/tools/build-lesson.py
make check
```
