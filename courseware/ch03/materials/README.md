# 第 3 章教学材料

> 状态：2026-10-06 起，第 3 章的预检与排练材料（第一批在分镜前，其余随课件制作）（见[第三章权威设计](../../../docs/outline/ch03-discussion.md)）。不是录制版，未经另一位讲师复现。本目录不进 Pages 站点（`tools/build-site.py` 跳过 `materials/`）；运行产物在被 git 忽略的 `lab-runs/`。

| 目录 | 预检 | 内容 |
| --- | --- | --- |
| [开发过程实验汇总工具](../../../tools/ch03-showcase/README.md) | — | 21 份产物按模型、游戏 Skill、对话轮次与实验条件分类；本地 HTML 可试玩、查看摘要和逐阶段执行记录，不发布原始日志 |
| [`minimax-20261106/`](minimax-20261106/README.md) | — | MiniMax 双游戏冻结快照索引，及当前 3.1、3.3 初步选材（未定稿） |
| [`skill-selection-20261107/`](skill-selection-20261107/README.md) | — | 3.2 第一部分：主动选择实录、自然语言选用、description 修改前后复核，以及可重建的演示副本 |
| [`skill-authoring-20261107/`](skill-authoring-20261107/README.md) | — | 3.2 第二部分：正文修改前后同请求对照、从零编写的小 Skill、三类输入与修订实录；完整返回、核对意见与真实日志定位 |
| [`purple-style-20261110/`](purple-style-20261110/README.md) | — | 3.3 选材：AI 从紫色游戏提炼风格 Skill，正文／正文加 CSS 示例的两任务真实局部对照、截图与浏览器核验；含调用超时边界 |
| [`simple-skill-trial-20261110/`](simple-skill-trial-20261110/README.md) | — | 3.2.2 简单正文候选：OpenAI 官方示例与 Sentry 文案实跑、核验和排除条件 |
| [`playtest-old5-20261111/`](playtest-old5-20261111/README.md) | — | 3.2.3 的三个演示任务。复现早期 05 提前通关，修复并验收，检查桌面和手机窄屏体验。含三轮日志摘录与浏览器证据 |
| [`skill-resources-20261110/`](skill-resources-20261110/README.md) | — | 3.2.3 资料、脚本与资源：sprite-pipeline 固定原文入口、自绘输入、真实局部调用、四帧产物与独立核验 |
| [`mainline/`](mainline/README.md) | A | 主线重跑：已发布的个人主页 → 3.1 记忆翻牌，及 3.2 的固定探查 |
| [`runs/`](runs/README.md) | — | 10 月 7 日同题多轮的标注与生成工具；对应 4 份游戏的[对比原型](../runs/index.html) |
| [10 月 21–22 日翻牌试点](../../../docs/outline/proposals/2026-10-21-course-experiment-bench.md#七第-3-章试点批量交互与模拟学员2026-10-2122) | — | 三组 Prompt、交互与模拟学员的历史对照；原始产物不随 Git 同步，现存 13 份本机产物及交接缺口见[溯源记录](../../../docs/reviews/ch03/2026-11-07-game-one-provenance-codex.md) |
| [`memory/`](memory/README.md) | B | 3.6 Memory 独立实验：在课程基线下写入、整理、使用、关闭对照 |
| [`plugin/`](plugin/README.md) | C | Game Studio 在 API key 登录下的安装、生效、停用与卸载 |
| [`bundle/`](bundle/README.md) | F | 3.5 的引擎体积对比：不用引擎、Phaser、React Three Fiber |
| [`prepared/`](prepared/README.md) | — | 3.7 的教学预备版本（删一行计时器清理）与核对脚本 |
| [`catchup/`](catchup/README.md) | G | “从第三章开始”：前提清单、本地参考起点草案、两种学员起点 |
| [`sim-student/`](sim-student/README.md) | — | 模拟学员的人设与私下目标，用 `tools/lab-sim-student.sh` 让它和 Codex 多轮对话做 3.1 |
| [`external/`](external/README.md) | — | 3.5 外部佐证登记表：Karpathy 造词原帖与 Jason Lemkin 删库事件一手原帖核实及截图来源 |
| `tools/` | — | `reqscan.py`：在 claude-tap 记录里逐次请求查找文字，可写出某次请求全文 |
