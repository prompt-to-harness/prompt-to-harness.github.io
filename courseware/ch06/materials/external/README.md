# 第 6 章外部佐证与重画图元登记表

> 2026-11-18 建立并补齐 6.1–6.5。规则见 [docs/production/external-sources.md](../../../../docs/production/external-sources.md)。本目录按主题分组，不进 Pages 站点；已采用的公开网页截图放在对应小节的 `external/`，课程手绘与 Excalidraw 双版重画 SVG 在 `gsd-workflow/` 维护并由构建脚本内联。

## 主题索引

| 目录或位置 | 内容 | 图元或来源入口 |
| --- | --- | --- |
| `gsd-workflow/` | 6.1 mapper 分工图、6.2 五层规格单向接入图、6.3 四步排障图、6.4 红绿双检查点分流图与 UAT 五步恢复链图、6.5 定时任务隔离墙图与手机 Remote 双通路图（课程手绘与 Excalidraw 两版） | [figures.py](gsd-workflow/figures.py) |
| `../../lessons/01-sdd-and-gsd/external/` | 6.1 `p03a` 采用的 `open-gsd/gsd-core` 固定 commit README 核心说明截图 | GitHub 固定提交 `b5b9814f` |
| `../../lessons/02-build-workflow/external/` | 6.2 `p15a` 采用的 Node.js 官方内置 `node:test` 测试运行器说明截图（支撑零新增依赖方案） | `nodejs.org/api/test.html` |
| `../../lessons/03-review-workflow/external/` | 6.3 `p26a` 采用的 `xyproblem.info` 核心定义与六步现象截图 | `xyproblem.info` |
| `../../lessons/04-cr01-and-uat/external/` | 6.4 `p38a` 采用的 Martin Fowler *Exploratory Testing* 脚本测试「细网」局限性与配图截图 | `martinfowler.com/bliki/ExploratoryTesting.html` |
| `../../lessons/05-chatgpt-tricks/external/` | 6.5 `p45a` 采用的 OpenAI 官方文档 ChatGPT 桌面工作台（整合 Projects、Codex 与文档成品）截图 | `learn.chatgpt.com/codex/app` |

## 素材总登记表

状态：`候选`（截了图，待选）、`采用`（已写进分镜与页面）、`不用`（删图，保留这一行和理由）、`重画`（按公开资料或课程结构绘制两版 SVG）。

| 文件 | 来源 | 作者 / 维护者 · 日期 | 截取 / 生成 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `gsd-core/github-gsd-core-readme.png` | [GSD Core 固定提交 README](https://github.com/open-gsd/gsd-core/tree/b5b9814f033b6d32810562fd4068e1f107da29ec) | `open-gsd/gsd-core` 维护者 · `v1.13.0`（MIT） | 2026-11-18（1196×6724） | 6.1 p03a 取样 | 不用：整页过长且顶部含动态 shields 徽章；改用只保留 What is GSD Core 与 How it works 的精裁版，原长图已删 |
| `../../lessons/01-sdd-and-gsd/external/github-gsd-core-overview.png` | 同上，“What is GSD Core”至“How it works”五步循环段落 | 同上 | 2026-11-18（1196×1182） | 6.1 p03a | 采用：字迹清晰，直接印证社区 SDD 定位、subagent 隔离上下文及五步阶段循环 |
| `gsd-workflow/redraw-gsd-mapper-roles-{course,excalidraw}.svg` | 据 `open-gsd/gsd-core` 固定提交 `gsd-map-codebase` 四角色七文档分区规则与 [OpenAI Codex Subagents 文档](https://learn.chatgpt.com/codex/agent-configuration/subagents) 绘制 | 课程图元 · 2026-11-18 | 2026-11-18 生成 | 6.1 p05a | 采用课程手绘版（`course`），Excalidraw 版同目录留存；支持三步 `data-reveal` 揭示 |
| `zero-dep-testing/nodejs-test-top.png` | [Node.js `node:test` 官方文档](https://nodejs.org/api/test.html) | Node.js Documentation | 2026-11-18（1920×1800） | 6.2 p15a 取样 | 不用：首屏默认展开目录树；改用正文说明与首个同步断言示例精裁版，原图已删 |
| `../../lessons/02-build-workflow/external/nodejs-builtin-test-runner.png` | 同上，模块简介、三种判定规则与首个 `test()` 同步示例 | 同上 | 2026-11-18（1884×1144） | 6.2 p15a | 采用：直接支撑本章“零新增依赖方案”（Node.js 24+ 内置测试运行器，不改 JSON Crack 锁文件） |
| `gsd-workflow/redraw-gsd-specs-handoff-{course,excalidraw}.svg` | 课程自绘，对应大纲 6.2 `docs/specs/` 权威需求单向接入 `.planning/` 的边界约定 | 课程图元 · 2026-11-18 | 2026-11-18 生成 | 6.2 p15 | 采用课程手绘版（`course`），Excalidraw 版同目录留存；支持三步 `data-reveal` 揭示 |
| `xy-problem/xyproblem-info-top.png` | [The XY Problem](https://xyproblem.info/) | `xyproblem.info` | 2026-11-18（1800×1800） | 6.3 p26a 取样 | 不用：含顶部目录框；改用只截“What is it?”核心定义与六步列表的版本，原图已删 |
| `../../lessons/03-review-workflow/external/xyproblem-definition.png` | 同上，“What is it?”定义段与六条典型过程 | 同上 | 2026-11-18（1444×576） | 6.3 p26a | 采用：上下留白干净，直接印证 6.3“不拿预设手段 Y 代替真实产品问题 X” |
| `gsd-workflow/redraw-troubleshoot-loop-{course,excalidraw}.svg` | 课程自绘，对照原地连续追加指令与“复现→缩小范围→对照规格→分流修改”四步排障法 | 课程图元 · 2026-11-18 | 2026-11-18 生成 | 6.3 p27 | 采用课程手绘版（`course`），Excalidraw 版同目录留存；支持三步 `data-reveal` 揭示 |
| `testing-boundary/dijkstra-ewd249-testing.png`、`dijkstra-ewd303-testing.png`（未产出截图） | UT Austin E.W. Dijkstra Archive（`EWD249` / `EWD303`） | Edsger W. Dijkstra · 1970 | 2026-11-18 尝试截取 | 6.4 p38a 候选 | 不用：站点目标段加载超时未产出截图；Dijkstra 论断改在 p38a 口播与讲义中点明，主截图改用同属大纲指定经典的 Martin Fowler *Exploratory Testing* |
| `testing-boundary/fowler-exploratory-testing.png` | [Exploratory Testing](https://martinfowler.com/bliki/ExploratoryTesting.html) | Martin Fowler · 2019-11-18 | 2026-11-18（1790×5752） | 6.4 p38a 取样 | 不用：整页含顶部作者肖像照片与底部书封；改用避开人像、只保留脚本测试「细网」局限性两段正文与配图的精裁版，原长图已删 |
| `../../lessons/04-cr01-and-uat/external/fowler-testing-net.png` | 同上，“Scripted testing can only verify what is in the script…”至细网漏洞配图 | Martin Fowler · 2019-11-18 | 2026-11-18（1348×1425） | 6.4 p38a | 采用：无第三方人像照片，字迹与配图清晰，直接支撑 6.4 结尾“测试全绿不等于用户已经认可” |
| `gsd-workflow/redraw-cr01-red-green-branches-{course,excalidraw}.svg` | 课程自绘，对应大纲 6.4 失败测试先行、两条现场分流检查点（标准补提示 vs 行为已有受控变异）与人工三查 | 课程图元 · 2026-11-18 | 2026-11-18 生成 | 6.4 p33 | 采用课程手绘版（`course`），Excalidraw 版同目录留存；支持三步 `data-reveal` 揭示 |
| `gsd-workflow/redraw-uat-recovery-chain-{course,excalidraw}.svg` | 课程自绘，对应大纲 6.4 自动检查边界、五步连续 UAT 恢复路径与首次非法空状态检查 | 课程图元 · 2026-11-18 | 2026-11-18 生成 | 6.4 p36 | 采用课程手绘版（`course`），Excalidraw 版同目录留存；支持三步 `data-reveal` 揭示 |
| `chatgpt-app/openai-codex-app-doc.png` | [ChatGPT desktop app](https://learn.chatgpt.com/codex/app) | OpenAI · 官方文档 | 2026-11-18（1898×16072） | 6.5 p45a 取样 | 不用：下半页懒加载留白过长；改用首屏标题说明与统一桌面工作台界面精裁版，原长图已删 |
| `../../lessons/05-chatgpt-tricks/external/openai-chatgpt-desktop-workspace.png` | 同上，首屏标题与整合 Projects、Codex、文档成品的桌面工作台展示区 | OpenAI · 官方文档 | 2026-11-18（1898×1682） | 6.5 p45a | 采用：直观解释为何官方桌面端容易引发名称混用，支撑课程区分 ChatGPT 应用、Codex CLI 与 Codex App |
| `gsd-workflow/redraw-scheduled-task-wall-{course,excalidraw}.svg` | 据 [ChatGPT 中的定时任务](https://help.openai.com/zh-hans-cn/articles/10291617-scheduled-tasks-in-chatgpt) 官方限制说明绘制：定时/事件触发源与同项目上传文件隔离墙 | 课程图元 · 2026-11-18 | 2026-11-18 生成 | 6.5 p46 | 采用课程手绘版（`course`），Excalidraw 版同目录留存；支持三步 `data-reveal` 揭示 |
| `gsd-workflow/redraw-mobile-remote-paths-{course,excalidraw}.svg` | 课程自绘，对应大纲 6.5 手机端 Remote 页承接桌面本地 Codex 任务与云端独立通路对照 | 课程图元 · 2026-11-18 | 2026-11-18 生成 | 6.5 p48 | 采用课程手绘版（`course`），Excalidraw 版同目录留存；支持三步 `data-reveal` 揭示 |

## 重新截取与重画命令

```bash
# 重新生成全部七张重画图的课程手绘版与 Excalidraw 版
uv run courseware/tools/redraw.py courseware/ch06/materials/external/gsd-workflow/figures.py

# 重新截取公开网页素材（大尺寸原图截取后再按空白带无损精裁至对应小节 external/）
uv run courseware/tools/capture-source.py https://github.com/open-gsd/gsd-core/tree/b5b9814f033b6d32810562fd4068e1f107da29ec courseware/ch06/materials/external/gsd-core/github-gsd-core-readme.png --selector "article.markdown-body" --width 960
uv run courseware/tools/capture-source.py https://nodejs.org/api/test.html courseware/ch06/lessons/02-build-workflow/external/nodejs-builtin-test-runner.png --text "facilitates the creation" --until "synchronous passing test" --width 1200 --lang en-US
uv run courseware/tools/capture-source.py https://xyproblem.info/ courseware/ch06/lessons/03-review-workflow/external/xyproblem-definition.png --text "The XY problem is asking about" --until "suitable solution for X" --width 880
uv run courseware/tools/capture-source.py https://martinfowler.com/bliki/ExploratoryTesting.html courseware/ch06/materials/external/testing-boundary/fowler-exploratory-testing.png --selector "main" --width 920
uv run courseware/tools/capture-source.py https://learn.chatgpt.com/codex/app courseware/ch06/materials/external/chatgpt-app/openai-codex-app-doc.png --selector "main" --width 960
```
