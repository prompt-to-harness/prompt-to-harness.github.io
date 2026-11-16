# 第 6 章：社区 SDD - 用 GSD 构建测试闭环并完成规则变更

> 状态（2026-11-16）：章级故事线第二版已由用户确认，并同步内部大纲。6.1–6.5「本节内容」已确认。章内页号已整理为 p01–p50。非实操页与初稿口播已按分镜写入各节 `build-lesson.py` / `script.json` 并生成页面；实操页（6.1 的 p06、p07，6.2 的 p16、p17，6.4 的 p34、p35、p37）仍为占位，不预写运行结果。尚未录制。地图短标题仍为暂用。

本目录保存小节备课稿。章内地图短标题暂用「定位 SDD 与 GSD / 构建工作流 / 验收流程 / 完成 CR-01 / 应用招数」，正式用词留到逐节讨论时确认。章级故事线见 [2026-11-14 第 6 章 Storyboard](../../docs/outline/proposals/2026-11-14-ch06-storyboard.md)。

| 小节 | 内容入口 | 当前制作阶段 |
| --- | --- | --- |
| 6.1 已有规格，为什么还要再接一套框架？ | [STORYBOARD](lessons/01-sdd-and-gsd/STORYBOARD.md) | 本节内容已确认；非实操页与初稿口播已生成；p06、p07 仍为实操占位 |
| 6.2 怎样在当前仓库把 GSD 工作流建起来？ | [STORYBOARD](lessons/02-build-workflow/STORYBOARD.md) | 本节内容已确认；非实操页与初稿口播已生成；p16、p17 仍为实操占位 |
| 6.3 怎样判断这条 GSD 流程符合预期？ | [STORYBOARD](lessons/03-review-workflow/STORYBOARD.md) | 本节内容已确认；11 页非实操页与初稿口播已生成；p24 只列检查点，不预写现场结果 |
| 6.4 用已验收的流程，怎样把 CR-01 做完并让人认可？ | [STORYBOARD](lessons/04-cr01-and-uat/STORYBOARD.md) | 本节内容已确认；非实操页与初稿口播已生成；p34、p35、p37 仍为实操占位 |
| 6.5 ChatGPT app 有哪些 trick 值得带走？ | [STORYBOARD](lessons/05-chatgpt-tricks/STORYBOARD.md) | 本节内容已确认；10 页与初稿口播已生成；技巧页先留官方说明与观察点，演示片段待按录制版本核验 |

## 文件分工

每节 `STORYBOARD.md` 依次放“本节内容”“逐页安排”“素材状态与操作备注”。连贯讲述只在本节内容维护；逐页安排在分页讨论后补充；素材区记录请求草案、来源与核验状态。

页面由各节 `tools/build-lesson.py` 读取同目录 `script.json` 生成 `lesson.js`。共用骨架在 `courseware/ch06/tools/lessonkit.py`（从第 5 章复制，只改章节常量）。改源文件后运行 `python3 courseware/tools/rebuild-lesson.py courseware/ch06/lessons/<节目录>`。不要手改 `lesson.js`。

## 硬约束（各节共用）

- GSD 固定为 `open-gsd/gsd-core v1.13.0`，commit `b5b9814f033b6d32810562fd4068e1f107da29ec`，MIT。未实测前，不能宣称实操已经走通。
- 不能另起一套规划覆盖已有五层文档；权威需求仍留在课程副本的 `docs/specs/`。
- 本章指定目标仍是 CR-01：在「输入非法时保留上次有效结果」之上，给出可见提示「上次有效结果（当前输入无效）」。四个验收案例沿用内部大纲 `AC-CR01-1` 至 `AC-CR01-4`。
- 对第五章的输入只写成检查点，不写死尚未存在的 commit、测试名单、文件路径或运行数字。CR-01 在真实实现里是缺口还是已有等价提示，等第五章实跑后再如实记录，不在分镜里预选分支。
- 5.5 不是进入第 6 章的门禁。第 7 章从独立仓库冷启动，不复制 `.planning/`。
- 课程术语里可选编码界面应称 Codex App，不要用「ChatGPT App」代指它。6.5 讲的是 ChatGPT 应用本身（网页、桌面、手机）。
- 平台交付版按 2026-10-25 约定，备课期间不逐次同步。
