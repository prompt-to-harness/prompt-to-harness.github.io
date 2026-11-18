# 第 6 章：社区 SDD - 用 GSD 构建测试闭环并完成规则变更

> 状态（2026-11-18）：章级故事线第二版与 6.1–6.5「本节内容」已确认，并同步内部大纲。讲师确认本章采用**零新增依赖验证方案**（Node.js 24+ 内置 `node:test` + `node:assert` 配合仓库既有 `lint` / `build` 与浏览器回归走查，不改写 JSON Crack 上游依赖锁文件）。6.1–6.5 全部非实操页已完成视觉重设计、公开一手资料截图（`p03a`、`p15a`、`p26a`、`p38a`、`p45a`）与七张课程手绘结构图接入（保持 `p01–p50` 稳定编号不重排）及口播打磨。实操页（6.1 的 p06、p07，6.2 的 p16、p17，6.4 的 p34、p35、p37）仍保持诚实占位，不预写运行结果或预选分支。尚未录制。地图短标题仍为暂用。

本目录保存小节备课稿。章内地图短标题暂用「定位 SDD 与 GSD / 构建工作流 / 验收流程 / 完成 CR-01 / 应用招数」，正式用词留到逐节讨论时确认。章级故事线见 [2026-11-14 第 6 章 Storyboard](../../docs/outline/proposals/2026-11-14-ch06-storyboard.md)。

| 小节 | 内容入口 | 当前制作阶段 |
| --- | --- | --- |
| 6.1 已有规格，为什么还要再接一套框架？ | [STORYBOARD](lessons/01-sdd-and-gsd/STORYBOARD.md) | 12 页（含 `p03a` 公开说明页、`p05a` mapper 分工图）；非实操页已完成视觉重设计与口播打磨；p06、p07 仍为实操占位 |
| 6.2 怎样在当前仓库把 GSD 工作流建起来？ | [STORYBOARD](lessons/02-build-workflow/STORYBOARD.md) | 11 页（含 `p15` 规格接入图、`p15a` 零新增依赖 `node:test` 佐证页）；非实操页已完成视觉重设计与口播打磨；p16、p17 仍为实操占位 |
| 6.3 怎样判断这条 GSD 流程符合预期？ | [STORYBOARD](lessons/03-review-workflow/STORYBOARD.md) | 12 页（含三格漫画、`p26a` X-Y problem 公开佐证页、`p27` 四步排障图）；已完成视觉重设计与口播打磨；p24 只列检查点，不预写现场结果 |
| 6.4 用已验收的流程，怎样把 CR-01 做完并让人认可？ | [STORYBOARD](lessons/04-cr01-and-uat/STORYBOARD.md) | 10 页（含 `p33` 红绿双检查点分流图、`p36` UAT 五步恢复链图、`p38a` Fowler 测试细网佐证页）；非实操页已完成视觉重设计与口播打磨；p34、p35、p37 仍为实操占位 |
| 6.5 ChatGPT app 有哪些 trick 值得带走？ | [STORYBOARD](lessons/05-chatgpt-tricks/STORYBOARD.md) | 11 页（含项目隔离对照、对话分支树、Chat Bar 示意、`p45a` 官方桌面工作台截图页、`p46` 定时任务隔离墙图、`p48` 手机 Remote 双通路图）；已完成视觉重设计与口播打磨，待录制前按版本核验可演示项 |

## 外部佐证与图表（6.1–6.5）

总索引与复现命令见 [materials/external/README.md](materials/external/README.md)。

| 讲透问题 | 材料或图元 | 形式 | 用在哪页 |
| --- | --- | --- | --- |
| Q6.1：SDD 与 GSD 是什么关系，怎样接手已有规格 | `open-gsd/gsd-core` 固定提交 README（What is GSD Core & How it works） | 证据页：截图 + `live` 原文链接 | 6.1 `p03a` |
| Q6.1：调查分工与主 Agent 核验边界 | `gsd-mapper-roles`（四角色七文档分区 + 主 Agent 抽查）配 OpenAI Codex Subagents 官方文档链接 | 课程手绘 SVG（三步揭示）+ `live` 链接 | 6.1 `p05a` |
| Q6.2：已有规格单向接入工作流、不被覆盖 | `gsd-specs-handoff`（`docs/specs/` 权威需求 → GSD 建流三步 → `.planning/` 进度区） | 课程手绘 SVG（三步揭示）+ `live` 链接 | 6.2 `p15` |
| Q6.2：零新增依赖下怎样选定自动验证方式 | Node.js 官方文档 `Test runner (node:test)` 说明与断言示例 | 证据页：截图 + `live` 原文链接 | 6.2 `p15a` |
| Q6.3：验收流程并避开 X-Y problem 与硬推 | `xyproblem.info` 核心定义与六步过程 | 证据页：截图 + `live` 原文链接 | 6.3 `p26a` |
| Q6.3：遇到问题时的正确排障顺序 | `troubleshoot-loop`（原地连续硬推死循环 vs 复现→缩小范围→对照规格→分流修改） | 课程手绘 SVG（三步揭示） | 6.3 `p27` |
| Q6.4：失败测试先行与两条现场分流检查点 | `cr01-red-green-branches`（检查点 A 标准红绿闭环 vs 检查点 B 行为已有受控变异 + 人工三查） | 课程手绘 SVG（三步揭示）+ `live` 链接 | 6.4 `p33` |
| Q6.4：自动检查边界与真人 UAT 恢复路径 | `uat-recovery-chain`（自动检查汇总 → 五步连续恢复路径 → 首次非法空状态与现场观察项） | 课程手绘 SVG（三步揭示） | 6.4 `p36` |
| Q6.4：为什么测试全绿不等于用户已经认可 | Martin Fowler *Exploratory Testing* 脚本测试「细网」局限性原文与配图（呼应 Dijkstra 论断） | 证据页：截图 + `live` 原文片段链接 | 6.4 `p38a` |
| Q6.5：分清 ChatGPT 桌面工作台与课程术语 | OpenAI 官方文档 `learn.chatgpt.com/codex/app` 桌面工作台合流界面 | 证据页：截图 + `live` 原文链接 | 6.5 `p45a` |
| Q6.5：定时任务的项目文件隔离限制与手机通路 | `scheduled-task-wall`（触发源与同项目文件隔离墙）、`mobile-remote-paths`（桌面 Remote 与云端双通路） | 课程手绘 SVG（三步揭示）+ 官方说明 `live` 链接 | 6.5 `p46`、`p48` |

## 文件分工

每节 `STORYBOARD.md` 依次放“本节内容”“逐页安排”“素材状态与操作备注”。连贯讲述只在本节内容维护；逐页安排在分页讨论后补充；素材区记录请求草案、来源与核验状态。

页面由各节 `tools/build-lesson.py` 读取同目录 `script.json` 生成 `lesson.js`。共用骨架在 [`tools/lessonkit.py`](tools/lessonkit.py)。改源文件后运行 `python3 courseware/tools/rebuild-lesson.py courseware/ch06/lessons/<节目录>`。不要手改 `lesson.js`。

## 硬约束（各节共用）

- GSD 固定为 `open-gsd/gsd-core v1.13.0`，commit `b5b9814f033b6d32810562fd4068e1f107da29ec`，MIT。未实测前，不能宣称实操已经走通。
- 不能另起一套规划覆盖已有五层文档；权威需求仍留在课程副本的 `docs/specs/`。
- **零新增依赖验证（2026-11-18 确认）**：衔接第 5 章不在 JSON Crack 上游仓库预装第三方测试框架的约定，自动验证优先采用 Node.js 24+ 内置 `node:test` 与 `node:assert` 搭配仓库既有 `lint` / `build` 与浏览器恢复路径回归，不改写上游 `package.json` 或 `pnpm-lock.yaml` 引入未批准依赖。
- 本章指定目标仍是 CR-01：在「输入非法时保留上次有效结果」之上，给出可见提示「上次有效结果（当前输入无效）」。四个验收案例沿用内部大纲 `AC-CR01-1` 至 `AC-CR01-4`。
- 对第五章的输入只写成检查点，不写死尚未存在的 commit、测试名单、文件路径或运行数字。CR-01 在真实实现里是缺口还是已有等价提示，等第五章实跑后再如实记录，不在分镜里预选分支。
- 5.5 不是进入第 6 章的门禁。第 7 章从独立仓库冷启动，不复制 `.planning/`。
- 课程术语里可选编码界面应称 Codex App，不要用「ChatGPT App」代指它。6.5 讲的是 ChatGPT 应用本身（网页、桌面、手机）。
- 平台交付版按 2026-10-25 约定，备课期间不逐次同步。
