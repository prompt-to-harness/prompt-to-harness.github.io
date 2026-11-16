# 制作规范

备课方法统一由 [course-prep](../../.agents/skills/course-prep/SKILL.md)维护。这里保存编辑判据、视觉参数、工程实现资料和历史记录，不另定教学流程、页型组合或阶段审批。当前效果见[视觉系统](../../demos/visual-system/README.md)；[早期制作讨论](../design/course-design-principles.md)按需参考。

- [提前准备材料：来源、展示与复用](prepared-materials.md)：材料分层判断、3.1 新旧入口映射与后续小节复用
- [学生独立使用材料：交接边界与待定事项](student-materials-handoff.md)：教师备课与后续学生交付的分工，尚未建立独立 Skill
- [演示页视觉设计规范](visual-design-system.md)
- [第 1 章视觉盘点](ch01-visual-inventory.md)：逐页的模式、零件与定制分级，视觉重刷的起点
- [课件零件库](parts.md)：可组合的页面零件与用法，1.2 节为样板
- [课件制作手册](lesson-authoring-playbook.md)：历史实现资料；按需查播放器字段、评论命令与实验脚本，不作为备课流程
- [屏幕短文字的常见别扭说法](wording-patterns.md)：W1–W8 模式、高频词和节标题句式，备课者定期对照（编辑规则 ED-014）
- [外部佐证](external-sources.md)：官方文章、研究与 X 帖子的选材标准，截图还是重画，文件放哪，截图工具 `capture-source.py`
- [课件字体](fonts.md)：字体选择理由、来源、子集生成与更换步骤
- [课程终端形态](terminal-mode.md)：Codex 全屏 transcript 与终端 scrollback 的差异，课程为什么保留终端 scrollback
- [外部设计 skill 评估：impeccable](impeccable-evaluation.md)：采纳了哪些方法，detector 试扫结果和待复核的问题
- [生图使用提案](imagegen-pilot-proposal.md)：待讨论的章首／章末复用安排、选页标准与统一风格；尚未替代现有视觉规范
- [三猫姿态研究](cat-pose-research.md)：参考图研究与最新头颈／猫爪／章节互动约定；旧无互动方向已标为历史探索
- [Screen Studio 转写与润色工具](../../tools/screenstudio-transcript/README.md)：提取音轨、Apple 转写、保留时间戳润色及剪辑索引

## course-prep 分发包融合（2026-11-09）

本次按讲师要求，用 `course-prep.zip` 为底稿替换 [course-prep](../../.agents/skills/course-prep/SKILL.md)，保留包内视觉样例、规范快照、样例清单与按录制顺序核对和复验的方法。现有版本的相关更新融入原职责文件，不另存一套规则：

| 当前仓库已有的更新 | 融入位置与处理 |
| --- | --- |
| 先定目标与知识主干，再对齐画面与讲述线，之后制作 PPT 和逐字稿；局部修改从当前阶段进入 | Skill 入口、`references/preparation.md`；保留分发包的环境校准与录制验收，校准片段按当前阶段提供讲述要点或已有口播，不提前强写新逐字稿 |
| 以最新明确反馈和有效讨论稿为依据，保留当前修改，不用旧稿推翻新决定 | 入口、`preparation.md`；HTML 在既定大结构内优化，不因续作重走完整设计 |
| 主区配对“在什么画面／讲什么内容”，操作在发生处写；备课分析另放 | `references/spoken-script.md`；不机械固定三栏、段数或页数 |
| 原稿、已保存修改及评论定位保留；同一画面的连续口播合为一块，只在实际切换时拆分 | `spoken-script.md`；复用原源文件，不维护同义讲法副本 |
| 知识主干不等于运行步骤；文件案例支持整体理解，真实记录区分产品错误、测试假设与环境问题 | `preparation.md`、`spoken-script.md`；不将未使用 Skill 时已有的实现或修复归因于 Skill |
| 图中关系必须可见，画面说明要落实到原文、数据、对象和标注 | `references/ppt.md`；与包内可播放样例并用，不能以跳转走查通过替代内容通过 |
| 跨窗口交接带有效设计、范围、材料、未完成项，并提示重读更新的方法 | 入口、`preparation.md`；跨项目分享保留整个资源包 |
| lesson-polish 已注销；编辑、视觉及验证规则仍维护唯一真源 | 清理对其 Skill 入口的依赖，保留可用的普通审查与试讲方法；本仓库读当前 `docs/production/`，跨项目参考包内快照 |

包内 `ppt_gate.py` 等是来源工作区的历史工具说明，当前仓库没有这些实现；不将安装 Skill 表述为已接入门禁。`manifest.json` 保存原分发指纹及融合后文件指纹。此次融合不修改课次结构、页面或讲稿，也不代表历史案例或教学效果重新通过验证。

本次验证：Skill 格式、方法文档本地链接、41 项文件指纹通过；浏览器加载 21 个样例状态及配套口播页，无脚本错误或本地资源缺失，抽看两张样例截图；`make check` 通过（编辑检查保留 7 条提示）。未逐项重审历史样例的内容与动画，也未试讲。

## 指导职责去重（2026-11-11）

按讲师要求扫描 AGENTS/CLAUDE、项目 Skills、docs/agents、docs/production、docs/design、章节维护入口及 course-prep 分发快照中的备课指导。处理定位重叠，不改课程正文或历史运行结论。

| 发现的重叠 | 当前归属与处理 |
| --- | --- |
| courseware-workflow 与 course-prep 都规定备课阶段、分镜和绘图工具 | 前者只留播放器实现；删除 pretty-mermaid / archscribe 的指定要求 |
| 制作手册、视觉规范又规定固定页型、段落时长与讲述顺序 | 方法归 course-prep；手册降为历史实现资料，视觉规范移除固定流程 |
| lesson-polish 注销后仍提供分层、审批、试讲和审查流程 | 旧入口改为 course-prep 跳转，历史由 Git 追溯 |
| 章节 Skill、外部佐证 Skill 重复通用方法或增加阶段确认 | 章节入口只定位内容和实现；佐证工具限定检索取证职责，按现有授权推进 |
| docs/design 历史方案与包内规范快照像当前要求 | 明确历史与快照边界，不能作为并行备课指导 |
| 编辑判据、视觉参数、内容源与方法的边界 | 保留原职责；course-prep 统一调用，不在各文件新增备课流程 |

历史审查、实际工具使用记录、课程案例中的 Skill 及第三方材料不因名称命中而删除。未修改主线程正在制作的课件、逐字稿或讲述线。本轮检查：27 个指导与索引文件的局部修改，214 个本地 Markdown 链接目标均存在，限定本轮文件的 `git diff --check` 通过；按内容设计、口播、PPT、局部修改四类请求走查入口，均路由到 course-prep 对应方法。这是作者路由走查，未执行独立模型行为测试、全量课件构建或课程试讲。

最终复查：清理零件库的旧流程链接，以及视觉规范的硬性字数拆页与旧转场引用。当前 207 个本地 Markdown 链接目标均存在，限定本轮文件的 `git diff --check` 通过。分发清单 43 项中 42 项匹配；`references/spoken-script.md` 指纹与当前文件不符，该文件不属于本轮修改，留待其编辑完成后更新清单。本轮未运行会重建课件的全量检查，也未执行独立模型行为验证。
