# 主线没漏，缺的是独立审查和注入防线

> 调研日期：2026-10-20。依据 `docs/research/notes/AI 编程官方知识点对照/` 下四份笔记（Anthropic、OpenAI、其他厂商、社区）整理，对照基线是内部大纲 `docs/outline/course-outline-internal.md`（§1.1、§6.1–6.4、各章小节）、概念地图提案第九、十节和经验分享两份提案。
> **本文是给讲师的提案，不是决定。** 所有建议都未改动大纲、平台版或课件。标注：**【已核实】** = 笔记作者直接读过该页面；**【二手】** = 只见搜索摘要或第三方转述；**【待实测】** = 文档写了，但没有在 Codex 录制版本里跑过。外部材料一律转述。

**结论先行。** 官方和社区几乎一致地认为，AI 编程最重要的是两条原则：**上下文是最稀缺的资源**，以及**验证回路必须闭合**。说到底，持久说明文件、计划、Skill、Sub-agent、Hook、权限，都是把这两条原则落成工具。本课程的四层主线和这套共识方向一致；Prompt 四要素、Context、AGENTS.md、Skill/Plugin、MCP、Sub-agent、Worktree、Hook、`codex exec` 等强信号知识点都已经有落点。其中 **Harness 前后对照评测**、**打开真实请求看 context**、**Plugin 卸载后复验**这三处，外部课程没有一家做到。真正的“房间里的大象”有三头。第一，**独立审查**：用新会话或审查 agent 只看 diff 和标准，把生成与评估分开。官方当作核心实践，本课程的 Review 全部压在人身上。第二，**prompt injection 与第三方 Skill/MCP 供应链**：官方和社区都列为一级威胁，大纲只在安全底线里写了一句。第三，**让 agent 自己跑检查并出示证据**：Anthropic 把它列为第一条实践；本课程第 1–3 章里，检查基本由人在浏览器里完成。三者都不需要新开章节。建议把第 5 章的空缺主点定为“独立 Review”，把注入风险作为第 4 章 MCP 的新增角度，并在第 3 章把重复做过的检查写成学员的第一个 Skill。这样还能同时满足讲师的要求：提前讲 Skill，并把 Skill 创建提前到第 3 章。

## 二十个知识点里，十二个得到五类以上来源的强调

下表把四份笔记中反复出现的知识点合并成 20 条。来源分七类：Anthropic（文档、Academy、工程博客）、OpenAI（Codex 文档、Academy、Cookbook）、GitHub Copilot、Google（Gemini CLI、Jules）、Cursor、DeepLearning.AI 短课、社区实践者（Pocock、Willison、Osmani、Böckeler、claude-code-best-practice、Spec Kit 等）。“✓”表示笔记里明确看到该来源讲这个主题；空白只代表本次没找到。社区各家（如 Willison 与 Osmani）互相引用，独立性有限；计数基于约 30 个来源，未做系统抽样。

| # | 知识点 | Anth. | OpenAI | GitHub | Google | Cursor | DLAI | 社区 | 计数 |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | 上下文是稀缺资源：context rot、清空、压缩、一个任务一个会话 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 2 | 项目说明文件（AGENTS.md / CLAUDE.md / rules）：短、只写猜不到的、按重复错误增补 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 3 | 给 agent 可执行的检查，要求出示证据而不是声称完成 | ✓ | ✓ | ✓ |  | ✓ | ✓ | ✓ | 6 |
| 4 | 先探索、计划再实现；让 agent 反过来访谈你，产出 spec | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 5 | Skill：按需加载（渐进式披露），什么时候值得写 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 6 | MCP：何时用、与 CLI 的取舍、来源审查 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 7 | Sub-agent：隔离上下文、只读并行起步、代价是 token | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 8 | Hook / headless / CI：确定性门禁 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 9 | 权限与沙箱；“写在说明里”不等于技术限制 | ✓ | ✓ | ✓ | ✓ | ✓ |  | ✓ | 6 |
| 10 | 模型选择、推理强度、token 成本 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 11 | 独立/自动代码审查，生成与评估分离（自评偏差） | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 7 |
| 12 | 并行会话与 worktree；云端/后台 agent 从 issue 到 PR | ✓ | ✓ | ✓ | ✓ | ✓ |  | ✓ | 6 |
| 13 | 人审真实 diff，责任在人 | ✓ | ✓ | ✓ |  | ✓ |  | ✓ | 5 |
| 14 | 读懂陌生代码库、调试、重构 | ✓ |  | ✓ |  | ✓ | ✓ | ✓ | 5 |
| 15 | prompt injection 与第三方 Skill/MCP/仓库供应链 | ✓ | ✓ |  | ✓ |  |  | ✓ | 4 |
| 16 | 长任务外部化状态：进度文件、计划文件、交接 | ✓ | ✓ |  |  |  |  | ✓ | 3 |
| 17 | 把重复错误固化为规则或检查（ratchet） | ✓ | ✓ |  |  | ✓ |  | ✓ | 4 |
| 18 | 评测：任务、grader、读 transcript、前后对照 | ✓ | ✓ |  |  |  | ✓ | ✓ | 4 |
| 19 | 失败模式：幻觉、谄媚、过早宣布完成、为过测试硬编码 | ✓ |  |  |  | ✓ |  | ✓ | 3 |
| 20 | 技能退化：用 AI 理解而不是只要答案 | ✓ |  |  |  |  |  | ✓ | 2 |

几条依据值得单独点出来。Anthropic 的 best practices 页把上下文定为最需要管理的资源，第一条实践就是给 Claude 一个能自己验证的手段，并要求出示测试输出等证据【已核实】（[Best practices](https://code.claude.com/docs/en/best-practices)）。OpenAI 的 Codex best practices 给出的 prompt 结构是 goal、context、constraints、done when，和本课程 1.4 的四要素**完全一致**【已核实】（[Codex Best practices](https://learn.chatgpt.com/docs/learn/best-practices)）。“生成与评估分离”来自 Anthropic 2026 年的 harness 设计文章：agent 倾向于高估自己的平庸成果，独立 evaluator 更容易调得挑剔【已核实】（[Harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps)）；Codex 的 `/review` 会启动只报告、不改工作区的独立审查者，文档同时要求人对照 diff 复核【已核实，待实测】（[Code review](https://learn.chatgpt.com/docs/code-review.md)）。注入风险方面，Willison 的 lethal trifecta 指出，私有数据、不可信内容和对外通信三者同时具备，agent 就可能被诱导泄露数据【已核实】（[The lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)）；Anthropic 把仓库文件、MCP 输出、skills、memory 文件都列为注入入口【已核实】（[How we contain Claude](https://www.anthropic.com/engineering/how-we-contain-claude)）。

## 覆盖对照：十二条已覆盖，七条部分覆盖，一条基本空白

| # | 知识点 | 课程落点（以内部大纲为准） | 状态 | 说明 |
| --- | --- | --- | --- | --- |
| 1 | 上下文稀缺 | 1.2；第 2 章主线（2.1 请求组成、2.2 变长/清空/压缩）；7.2 | 已覆盖 | 比外部课程更深：直接看真实请求 |
| 2 | 项目说明文件 | 2.1 的项目层来源（只露出）；3.6 与 Memory 的边界；7.2 必做并验证 | 部分覆盖 | 第一次自己写在第 7 章，偏晚；course-starter 契约规定初始不含 `AGENTS.md`（`docs/design/course-starter-contract.md` 第 54 行） |
| 3 | agent 自查并出示证据 | 1.4 Done when；2.2/2.4/3.3 的检查多由人执行；5.x、6.3 测试；8.3 | 部分覆盖 | 前三章“人是验证回路”，没有把“让 agent 自己跑检查、拿证据回来”作为明确要求 |
| 4 | 先计划/访谈 | 1.1“复述→计划→确认”；1.4“先阅读、提问”；第 4 章五层规格；6.2 discuss | 已覆盖 | Codex 的 `/plan` 未点名【待实测】 |
| 5 | Skill | 2.1 露出（Skills 列表）；3.4 与 Plugin 区分；6.x GSD；9.2 创建 | 部分覆盖 | 第一次主讲在第 3 章，但只讲 Plugin 里的 Skill，创建迟到第 9 章 |
| 6 | MCP | 4.1 飞书只读摄入 + 快照 | 已覆盖 | 未讲“何时用 CLI 而不是 MCP”（2.4 的 `gh` 可作对照） |
| 7 | Sub-agent | 2.1 系统指令露出；6.1 GSD mapper 必做 | 已覆盖 | 首次实际使用在第 6 章 |
| 8 | Hook / headless / CI | 8.3；2.4 Actions | 已覆盖 |  |
| 9 | 权限与沙箱 | 1.3、1.6；3.4 审查；8.4 | 已覆盖 | 1.6 已讲“Prompt 中的禁止语句不是技术限制”，与官方核心心智模型一致 |
| 10 | 模型/推理/成本 | 0.2 模型接入；2.1 基线推理档位；2.2 重发的 token 代价 | 部分覆盖 | 没有“怎样选”的判断；讲师候选池已列此项 |
| 11 | 独立审查 | 2.3 提到三层检查中的“自动 Review”，本章不做；6.1 Sub-agent 是调查，不是审查 | **未覆盖** | 本次最大缺口 |
| 12 | 并行与云端 agent | 7.1/8.1 Worktree（只用于 A/B 隔离）；§6.3 明确不做并行生产修改 | 部分覆盖 | 不做并行修改是有意的取舍；issue→PR 的云端 agent 完全没有 |
| 13 | 人审 diff | 每章退出门禁；2.3、5.4、9.3 | 已覆盖 | 课程强项 |
| 14 | 陌生代码库/调试/重构 | 4.2、6.1、7.2；3.2–3.3；2.5 | 已覆盖 |  |
| 15 | 注入与供应链 | §3.2 安全底线一句（飞书内容可能含不可信指令）；3.4 Plugin 审查；§1.3 第三方 Skill 核验 | 部分覆盖 | 只有规则，没有命名的概念，也没有一次判断练习 |
| 16 | 外部化状态/交接 | 2.2“新建会话加交接”；第 4 章五层文档；6.x `.planning/` | 已覆盖 | “交接文件”这个通用名可在 2.2 点一句 |
| 17 | ratchet | 7.x 从冷启动摩擦建 Harness；9.1 单因素改进 | 已覆盖 | 可在第 9 章点名这个动作 |
| 18 | 评测 | 7.1 冻结条件；9.1 A/B 七项评分；9.4 | 已覆盖 | 比外部课程更系统；§6.1 概念表缺“评测”一行 |
| 19 | 失败模式词汇 | 1.2“说出至少 3 种失败方式”；2.5“只是重构”；6.3 检查断言独立于实现；6.5 | 部分覆盖 | 散在各处，没有统一命名 |
| 20 | 技能退化 | 0.1 第 9 问“怎样跟课才能真正学会”；§8.3 五步处理法；各章“能解释”验收 | 部分覆盖 | 做法隐含在验收里，没有点明理由和证据 |

## 三头大象排在前面，其余交给回扣和经验分享

排序依据：来源强度 × 对本课程受众的后果 × 现有覆盖的缺口大小。

| 排名 | 缺口 | 为什么是大象 | 建议落点 |
| --- | --- | --- | --- |
| 1 | **独立审查，生成与评估分离** | 7 类来源都讲。Anthropic 和 OpenAI 都把新上下文审查者当作标准步骤，GitHub、Cursor、Jules 都有产品化的 AI 审查。本课程把 Review 全放在人身上，学员会以为“人看一遍 diff”就是全部审查手段。 | **第 5 章主点**（填补概念地图里第 5 章的空缺，与第十节“Review”候选一致）：5.4 先让新会话或 `/review` 只读 diff 和 `AC-*` 出审查意见，人再逐条裁决：接受、驳回，或判定为过度工程。Anthropic 也提醒，被要求找问题的审查者总能找出一些，追着每条改会导致过度工程【已核实】（[Best practices](https://code.claude.com/docs/en/best-practices)）。回扣：6.4 GSD verify、9.3 最终 Review。 |
| 2 | **prompt injection 与供应链** | 官方把它当一级威胁，入口包括仓库、MCP、skill、memory；社区有 lethal trifecta 框架和 OWASP 2026 agentic Top 10【二手】（[OWASP](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026)）。本课程恰好让学员装 Plugin、接飞书 MCP、装 GSD，三次都是现成的判断场景。 | **第 4 章主点 MCP 的新增角度**，不另立主点：4.1 用 trifecta 检查飞书 MCP，看私有数据、不可信内容、对外通道各有没有，只读和快照分别切断了哪一条。回扣：3.3/3.4 审查第三方 Skill 和 Plugin 的脚本与外连；6.1 审 GSD 安装器和 Hook；8.4 无人值守时的权限。供应链事件（如 Snyk 对公开 skills 的审计，数字为【二手】（[Obot 汇总](https://obot.ai/blog/mcp-security-agent-skills-supply-chain/)））放第 3 章经验分享。 |
| 3 | **让 agent 自查并出示证据** | Anthropic 的第一条实践；OpenAI 要求 agent 写测试、跑检查、自审 diff【已核实】（[Codex Best practices](https://learn.chatgpt.com/docs/learn/best-practices)）；Cursor 把测试、类型检查、lint 称为 agent 能自查的可验证目标【已核实】（[Cursor Learn](https://cursor.com/learn/reviewing-testing)）。本课程第 1–3 章的检查主要由人执行，学员容易形成“验证 = 人肉点一遍”的习惯。 | **第 3 章与 Skill 合并讲**：把学员在 2.2、2.4、3.1 里已经重复做过的检查（三种屏幕尺寸、键盘、build）写成第一个 Skill，让 Codex 自己跑并带回截图和命令输出，人只核对证据。回扣：第 5 章按 `AC-*` 自查，8.3 确定性门禁。 |
| 4 | 项目 `AGENTS.md` 太晚才动手写 | 7 类来源都讲，都建议“同一错误犯两次就加一条规则”【已核实】（[Codex Best practices](https://learn.chatgpt.com/docs/learn/best-practices)；[Features overview](https://code.claude.com/docs/en/features-overview)）。 | 按讲师决定 5 提到**第 2 章主点**（见下一节）。 |
| 5 | 模型、推理强度与成本 | 7 类来源都讲，但多是工具层技巧，社区笔记也判断不必单设一章。 | **经验分享**：第 2 章（token 与缓存可视化，回扣 2.2 重发代价）；第 9 章可把推理强度作为单因素改进的候选。 |
| 6 | 失败模式词汇与技能退化 | 受众是学生，Anthropic 的随机对照试验显示，用 AI 完成陌生库任务后测验得分更低，而用 AI 问“为什么”的人学得更好【已核实】（[Anthropic](https://www.anthropic.com/news/AI-assistance-coding-skills)）。 | **经验分享**：第 5 章（呼应 5.4“能解释关键数据流”）；失败模式词汇给一页术语小抄，第 1 章作补充材料（候选池已列“AI 编程词典”）。 |
| 7 | 云端/后台 agent 从 issue 到 PR、并行委派 | 6 类来源都讲，但需要账号和远程环境，与录播跟做冲突，Codex Cloud 的现行行为也未核验。 | **只露出**：第 8 章 8.3 提一句它属于“自动化触发”，放经验分享；第 6 章经验分享用 worktree 并行让多个模型实现同一计划再比较（候选池已有）。不进主线。 |

## 修订后的各章主点：Skill 提前到第 3 章创建，第 5 章补上 Review

以下表格在概念地图提案第十节的基础上修改，遵守讲师 2026-10-20 的六条决定。每章只有 1–2 个主点，其余出现都是回扣，每次只讲新增的角度。

| 章 | 主点（建议） | 回扣（本章新增的角度） | 相对第十节草稿的变化 |
| --- | --- | --- | --- |
| 1 | Prompt 四要素；Agent 循环 | 权限仍在 1.3/1.6，作为工程实践线 | **不改正文**。只补两处：1.4 注明四要素与 OpenAI 官方结构一致，给出处；1.2 的“3 种失败方式”配一页术语小抄（补充材料） |
| 2 | Context；项目 `AGENTS.md`（首次点亮） | 会话/压缩作为展开 Context 的角度；Sub-agent 在请求里露出；“交接文件”点一句 | 2.1 先看一次没有项目层的请求，然后在 2.2 或 2.3 中，当 Codex 重复犯同一个错时，学员写**第一条**项目规则，新会话验证它出现在请求里。只写一两条，控制在 5 分钟内。需要修改 course-starter 契约第 54 行，或者由学员自建，不预置 |
| 3 | Skill；Plugin | Context 回扣：Skill 平时只有描述在 context 里，正文按需加载；安全回扣：第三方 Skill/Plugin 的脚本与外连 | Skill 先讲，并**创建第一个 Skill**（把重复检查封装起来，见大象 3）；Plugin 讲成“一组 Skill 加命令、连接器的能力包”；Memory 移出（见下）；需求债务移入 3.7 的经验分享或 4.1 开场 |
| 4 | 规格；MCP（含不可信外部输入） | Prompt 回扣：规格是更严格的任务描述；Sub-agent 首次实际使用：4.2 只读并行调查陌生仓库，用来保护主上下文【待实测】 | 注入风险作为 MCP 的审查角度（大象 2） |
| 5 | 独立 Review；验收与规格回环 | Context 回扣：新会话审查不带实现者的偏见；Skill 回扣（可选）：把 `TASK-*` 闭环封装成第二个 Skill | Review 从“候选”转为建议主点，具体做法见大象 1 |
| 6 | 社区 SDD（GSD = 一组 Skill）；Sub-agent（分区写入与主 Agent 核验） | 6.3 点名“为过测试硬编码、改测试”这一失败模式 | 不变 |
| 7 | 项目 `AGENTS.md` 重访（分层、精简、只写验证过的命令）；Worktree | Memory 对照从 3.6 移来，压到约 5 分钟，作为“版本化上下文 vs 跨会话回忆”的对比 | Memory 换到这里（讲师决定 4 允许小调整） |
| 8 | 确定性门禁：Hook 与 `codex exec` | 权限回扣：失败时停下；注入回扣：无人值守运行；云端 agent 露出 | 主点的说法从“工具名”改为“建议性 vs 强制性”，工具作为载体 |
| 9 | 评测；Skill 重访（项目 Skill 的触发测试与评测） | ratchet：把重复错误固化为规则或检查；推理强度可作为单因素 | 9.2 不再是第一次创建，改为“项目级 Skill + 用评测证明它有用 + 移除后核心检查仍在”；§6.1 补“评测”一行 |

**Skill 的三次出现**变为：第 3 章认识、审查，并把一个已做过三次的检查写成 Skill；第 6 章看出框架就是一组 Skill；第 9 章做项目级 Skill，用触发/不触发测试和前后评测证明它值得保留。第 3 章创建 Skill 不违反 §6.1 的“只封装已验证流程”：这个检查在 2.2、2.4、3.1 里已经实际做过。Anthropic 给出的触发信号也正是第三次粘贴同一段流程时就该写 Skill【已核实】（[Features overview](https://code.claude.com/docs/en/features-overview)）。Codex 文档写明 Skill 用 `SKILL.md`、团队级放在仓库 `.agents/skills`、有 `$skill-creator` 脚手架【已核实，待实测】（[Codex Best practices](https://learn.chatgpt.com/docs/learn/best-practices)）。如果第 3 章试讲超时，退路是把创建移到第 5 章，封装 `TASK-*` 闭环，仍比第 9 章早四章。

**第 3 章瘦身**（现 7 节、120 分钟）建议改为 6 节、约 115 分钟：3.1 记忆翻牌（20）→ 3.2 状态探索与证据调试（合并原 3.2 与 3.3，30）→ 3.3 Skill：是什么、从哪加载、怎么审查，并创建第一个检查 Skill（20）→ 3.4 Plugin 与 Game Studio 审查（10）→ 3.5 Game Studio 生命周期（20）→ 3.6 经验分享（15，候选：旧计时器与资源清理、社区 Skill 合集的审查实例、需求债务）。合并 3.2 与 3.3 要求探索直接接调试，不再分开回放，这一点需要试讲确认。

**Memory 的位置**：建议从第 3 章主线移到 7.2，作为上下文分层（全局 `AGENTS.md`、项目 `AGENTS.md`、Memory、代码地图）中的一项做对照。这一节的主题就是“版本化事实 vs 回忆”，Memory 不能代替仓库事实的结论放在这里最有说服力。第 2 章 2.2 讲交接时只提一句 Memory 也是一种跨会话来源，不演示。代价是第 7 章 75 分钟要挤出约 5 分钟，Memory 演示的隔离会话准备工作（§1.3）也随之移到第 7 章。

**Sub-agent 提前**：2.1 只在请求里露出；4.2 是第一次实际用，让 Sub-agent 只读调查 JSON Crack 并只回摘要，配合第 2 章“保护主上下文”的视角；第 6 章仍是主点，加深到写入分区和主 Agent 核验。Codex 文档把 Sub-agent 的主要价值写成把日志等噪声挡在主线程外，并建议先从只读并行开始【已核实，待实测】（[Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents.md)）。

## 这些是外部课程没有的，别拿去换

第一，**Harness 作为独立一层，且有受控的前后对照评测**。外部材料里，“harness”是官方术语：Anthropic 把 Claude Code 称作 agentic harness，评测文章把 agent 定义为 harness 加模型【已核实】（[Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)）。但在本次调研过的 GitHub、Google、Cursor、DeepLearning.AI 课程结构里，没有哪家把它当作独立的一层来教，最接近的只是 hooks、skills 和“可验证目标”（这是笔记作者的归纳，不是某个来源的原话）。第 7–9 章用同一任务、同一模型、隔离 worktree 做无 Harness/有 Harness 冷启动，再按冻结的评分表比较，这是本课程最独特的部分，和 Anthropic“每个 harness 组件都是对模型能力的一个假设，要定期拆掉检验”的观点直接呼应【已核实】（[Harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps)）。第二，**打开真实请求看 context**：外部课程都只讲 context 的概念和命令，本课程第 2 章让学员看到系统指令、工具定义、Skills 列表实际怎样进入请求。第三，**Plugin 的完整生命周期**，包括停用后复验仓库自身检查；外部课程只讲安装和使用。第四，**工具无关的五层规格先于社区框架**：DeepLearning.AI 的 SDD 课最接近，但它从零做 MVP（[DLAI SDD](https://www.deeplearning.ai/short-courses/spec-driven-development-with-coding-agents/)）；本课程在陌生开源仓库上做，再让 GSD 接手。第五，**三个独立的真实仓库，难度递进**，以及每章的软件工程经验（Fowler、Naur、Ousterhout）。第六，**“说明不是强制”早在 1.6 讲清**，官方把它当作核心心智模型（[Steering Claude Code](https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)）。补缺口时，这六点不应被挤掉，尤其不要为了覆盖并行/云端 agent 而削弱第 7–9 章的对照实验。

## 仍需讲师决定或核验的事项

以下几项会影响上面建议能否落地。**Codex 功能**：`/review`、`/plan`、`/goal`、Sub-agent 自定义、Hook 事件、Memories、`$skill-creator`、`.agents/skills` 都只在文档里读到【已核实文档，待实测】，录制版本要逐项跑一遍；Codex 文档站已迁到 `learn.chatgpt.com`，各页面没有日期，模型名写法也不一致（[llms.txt](https://learn.chatgpt.com/llms.txt)）。**Claude Code 专属技巧的 Codex 对应物未核实**：上下文用到 40% 就收尾、`/btw`、Stop hook、checkpoint 回滚等都来自 Claude Code 文档或社区，不能直接写进课件。**二手材料**：OpenAI 的 harness engineering 原文抓取被拒（403），“AGENTS.md 是目录不是百科、约 100 行”只有二手转述，而且转述之间有出入（[InfoQ](https://www.infoq.com/news/2026/02/openai-harness-engineering-codex)）；Snyk 的 skills 审计数字、METR 生产力研究、Karpathy 2026 演讲也都是二手，只适合经验分享，不进主线。**课程侧**：course-starter 契约规定初始不含 `AGENTS.md`，第 2 章写第一条规则需要改契约或改为学员自建；第 3 章合并 3.2/3.3 与新增 Skill 创建的时长、第 7 章吸收 Memory 的 5 分钟都没有试讲；4.2 的只读 Sub-agent 调查需要先做小实验；“学员多半已在用社区 Skill”只是讲师判断，课件不能写成事实。

## Conclusion

对照的结果改变了“缺什么”的判断。课程不缺工具名，§6.1 的概念表几乎和官方文档目录一一对应。缺的是两种**关系**：生成者与评估者的关系（谁来审 agent 的产出，人以外还能有谁），以及 agent 与它读到的内容之间的信任关系（哪些输入能当指令）。这两者都是“Review 与安全不能只靠人和规则”的延伸，正好落在本课程最强调的责任边界上。所以补缺口不需要加章，只需让第 5 章和第 4 章各自多承担一个角度。

另一个启示是 Skill 的定位。官方把 Skill 讲成“第三次重复时的封装手段”，而不是高级功能。按这个思路，Skill 应当在学员第一次感到重复的时候出现，也就是第 3 章。第 9 章的价值则变成证明一个 Skill 真的让结果变好，这正是本课程评测层独有、外部课程没有教的东西。
