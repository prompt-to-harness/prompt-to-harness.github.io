# 社区与实践者课程/框架知识点盘点（截至 2026-10-20）

> 用途：和课程大纲（Prompt → Vibe Coding → SDD → Harness）对照，找出“房间里的大象”。
> 标记：**已核实** = 本次直接抓取了原始页面（GitHub 仓库、作者本人博客、官方文档），内容按 2026-10-20 抓取时的页面写；**二手** = 只看到了搜索摘要或第三方转述，没打开原文；**待实测** = 需要在工具里实际跑一遍才能确认。
> 公开仓库规则：全部为转述，直接引用都不超过 15 个词。

## 问题 1：知名实践者资源各讲了什么

### Takeaway
各家的主线高度一致：模型无状态 → 上下文是稀缺资源（上下文腐烂/smart zone、压缩、交接）→ 用 AGENTS.md、skills、subagents 引导 → 用确定性检查（测试/lint/类型）给 agent 反馈闭环 → 人类审查 diff，不读 agent 写的总结 → 规划/规格（spec、ticket）支撑多会话工作。“Harness engineering”在 2026 年 2–4 月成为通用术语，并被拆成“前馈引导 + 反馈传感器”。

### Cited Findings

**Matt Pocock：Dictionary of AI Coding（已核实，抓取 2026-10-20）**
- 全书 7 节：模型；会话、上下文窗口与轮次；工具与环境；失败模式；交接（Handoffs）；记忆与引导（Memory and Steering）；工作模式（Patterns of Work）— [dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding)
- 模型与计费层：token、next-token prediction、非确定性、effort（推理深度旋钮）、input/output tokens、prefix cache 与 cache tokens；把“harness”定义为模型外层的工具、系统提示词、权限和上下文管理 — [同上](https://github.com/mattpocock/dictionary-of-ai-coding)
- 工具与环境：tool call/tool result、MCP、permission request、permission mode、agent mode（如 plan mode、bypass）、sandbox — [同上](https://github.com/mattpocock/dictionary-of-ai-coding)
- 失败模式单列一节：sycophancy（谄媚）、hallucination（分事实性错误与忠实性漂移）、knowledge cutoff、attention degradation、“smart zone / dumb zone”（作者称起点有争议，约在 125K–150K tokens）— [同上](https://github.com/mattpocock/dictionary-of-ai-coding)
- 交接一节：clearing、handoff、primary vs secondary source（一手材料 vs 转述，转述会过时）、handoff artifact、spec（由多张 ticket 组成的多会话交接文档）、ticket、compaction、autocompact — [同上](https://github.com/mattpocock/dictionary-of-ai-coding)
- 记忆与引导：memory system、AGENTS.md（短小、始终加载）、progressive disclosure、context pointer、skill、subagent（独立上下文，只回传一个结果）— [同上](https://github.com/mattpocock/dictionary-of-ai-coding)
- 工作模式：human-in-the-loop vs AFK（无人值守，最后再审）、automated check（确定性）vs automated review（另一个 agent 判断）vs human review（读真实 diff 而非 agent 总结）、vibe coding（不读代码只看效果）、design concept、grilling（让 agent 一次问一个决策地拷问你）、prototyping、DX vs AX（agent experience）、software factory、dark factory（无人审查）— [同上](https://github.com/mattpocock/dictionary-of-ai-coding)

**Matt Pocock：AI Coding Crash Course with Claude Code（已核实，页面仅标 © 2026）**
- 6 部分：开始之前（环境、迁移、第一次改动）→ 概念 → 熟悉 Claude Code（会话、上下文、权限、IDE、subagents）→ 基础（探索代码库、做功能、`grill-me` 和 `handoff` 两个 skill）→ 引导（AGENTS.md/CLAUDE.md、自定义 skill、修剪上下文）→ 规划（写 spec → 拆成多阶段 tickets → 逐阶段实现）— [ai-coding-crash-course](https://github.com/ai-hero-dev/ai-coding-crash-course)
- 用一个真实全栈项目贯穿（React Router v7、SQLite+Drizzle、Vitest），每课有 checkpoint commit，可 `reset`/`cherry-pick` 到某课 — [同上](https://github.com/ai-hero-dev/ai-coding-crash-course)
- 对本课程的启示：结构和我们“递进项目 + 可跳课 checkpoint”的做法相近；它的“规划”落点是 spec→ticket→分阶段实现，不是重型 SDD 框架。

**Simon Willison（已核实）**
- 《Agentic Engineering Patterns》指南（2026-02-23 起连载，持续更新），6 节 17 章：原则（什么是 agentic engineering、写代码变便宜了、积累你会做的事、AI 应帮我们写更好的代码、反模式）；使用 coding agent（agent 原理：提示词模板、token 缓存、工具调用、推理、循环；配合 Git 使用；subagents）；测试与 QA（red/green TDD、先跑测试、agent 手动测试/浏览器自动化）；理解代码（线性走读、交互式讲解）；带注释的提示词；附录 — [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
- 反模式里点名：把未经审查的代码丢给协作者 — [同上](https://simonwillison.net/guides/agentic-engineering-patterns/)
- 2025-03-19：反对把所有 AI 辅助编程都叫 vibe coding；他的界定是“没审查就上线的代码”，审查、测试过且能解释的才算软件开发 — [Not all AI-assisted programming is vibe coding](https://simonwillison.net/2025/Mar/19/vibe-coding/)（二手：经搜索摘要确认，未全文抓取）
- 2025-06-16 “lethal trifecta”见问题 2 — [The lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

**Andrej Karpathy（二手）**
- 2025-02 提出 vibe coding；2026-04 Sequoia AI Ascent 演讲把 vibe coding 定位为“抬高下限”，把 agentic engineering 作为需要验证和新架构的下一阶段；继续讲 Software 3.0（用提示词、上下文、工具、记忆给 LLM 编程）和“参差不齐的能力”（在可验证领域最强）— [aktagon 摘要](https://signals.aktagon.com/articles/2026/05/from-vibe-coding-to-agentic-engineering-andrej-karpathy-on-the-evolution-of-ai-assisted-programming/)、[letsdatascience](https://letsdatascience.com/news/karpathy-explains-vibe-coding-to-agentic-engineering-2d34b5c2)
- 注意：以上均为二手博客转述，未找到演讲原始稿；有一个来源称他后来加入 Anthropic，仅单一来源，不可采信。

**Addy Osmani（部分已核实）**
- 2026-04-19《Agent Harness Engineering》（已核实）：agent = 模型 + harness；harness 包括系统提示词/AGENTS.md/skills/subagent 提示词、工具与 MCP 描述、文件系统/沙箱/浏览器、编排（subagent、交接、模型路由）、hooks、可观测性（日志、trace、成本与延迟）— [addyosmani.com](https://addyosmani.com/blog/agent-harness-engineering/)
- 同文建议：ratchet（每个错误变成规则/hook/检查，模型变强后再拆掉）；AGENTS.md 每一行都要对应真实失败，作者自己控制在 60 行以内；工具少而精；审查工具描述（恶意 MCP 可借描述注入指令）；生成与评估分离（agent 自评偏高）；动手前约定“done”的标准；“成功静默、失败详细”；上下文腐烂、压缩、大输出落盘、skills 渐进披露、长任务用交接文件重置；Ralph loop — [同上](https://addyosmani.com/blog/agent-harness-engineering/)
- 同文称：只改 harness 不换模型，某 agent 在 Terminal Bench 2.0 从前 30 升到前 5（作者转述的案例，待核实原始数据）— [同上](https://addyosmani.com/blog/agent-harness-engineering/)
- “70% 问题”（2024-12）：AI 很快完成约 70%，剩下的边界情况、安全、生产集成依然难 — [Zed 转述](https://zed.dev/blog/ai-70-problem-addy-osmani)（二手）
- 《Skill Atrophy》：审查 AI 代码需要深入理解代码，人的角色从写转向评估，反而要求更强的能力 — [addyosmani.com/agentic-engineering/skill-atrophy](https://addyosmani.com/agentic-engineering/skill-atrophy/)（二手：搜索摘要）
- 书名从《Vibe Coding》改为《Beyond Vibe Coding》（O'Reilly）— [O'Reilly](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/ch04.html)（二手）

**shanraisshan/claude-code-best-practice（已核实，抓取时约 67.8k stars；最新 tip 文件标 2026-04-16）**
- 副标题即“从 vibe coding 到 agentic engineering”；概念表覆盖 subagents、commands、skills、workflows、hooks、MCP、plugins、settings、status line、memory（CLAUDE.md 与 rules）、checkpointing、sessions、context window — [repo](https://github.com/shanraisshan/claude-code-best-practice)
- 比较社区开发流程框架（Superpowers、Spec Kit、gstack、OpenSpec、BMAD、GSD），归纳为共同模式 Research → Plan → Execute → Review → Ship — [同上](https://github.com/shanraisshan/claude-code-best-practice)
- 有“跨模型工作流”一节（通过插件/MCP/路由调用 Codex、Gemini）— [同上](https://github.com/shanraisshan/claude-code-best-practice)
- 83 条技巧中的代表：上下文用量保持在约 40% 以下、60% 左右收尾；带焦点提示手动 compact 而不是等 autocompact；失败时 rewind 而不是叠加纠正；每轮都是分支点（继续/回退/清空/压缩/交给 subagent）；用 worktree + 多 agent 并行；让 agent 证明改动有效、开 PR 前对 main 做 diff；用另一个 agent 审查；查用量限额；Opus 规划 + Sonnet 写码 — [同上](https://github.com/shanraisshan/claude-code-best-practice)
- 注意：这些是 Claude Code 专属命令，映射到 Codex 时需逐项核实（待实测）。

**Harness engineering 文章群**
- Birgitta Böckeler（Thoughtworks）2026-04-02《Harness engineering for coding agent users》（已核实）：guides（前馈：约定、AGENTS.md、skills、codemod）vs sensors（反馈：lint、测试、结构检查、审查 agent）；computational（确定、便宜、每次都跑）vs inferential（LLM 评审，慢、贵、不稳定）；人的工作是迭代 harness，重复出现的问题就补引导或传感器；检查尽量左移；三类调控：可维护性（最容易）、架构适应度、行为（最难，AI 生成的测试还不够可信）；“harnessability”：强类型、清晰模块边界的代码库更好约束，遗留代码最需要也最难 — [martinfowler.com](https://martinfowler.com/articles/harness-engineering.html)
- arXiv 论文称该术语于 2026-02 开始流行，研究了 11 个 coding agent 的源码 — [arXiv 2609.00006](https://arxiv.org/pdf/2609.00006)（二手：仅搜索摘要）
- Faros AI 把 harness 拆成五层：工具编排、验证闭环、上下文与记忆、护栏、可观测性 — [faros.ai](https://www.faros.ai/blog/harness-engineering)（二手，厂商博客）

**SDD 框架**
- GitHub Spec Kit（已核实，页面未标版本；有 2026-10-16 讨论“Spec Kit 1.0”的视频）：SDD 流程命令为 `/speckit-constitution` → `specify` → `plan` → `tasks` → `implement` → `converge`（迭代直到收敛）；另有 bug 修复与想法评估两个扩展流程；强调这些是独立入口而非必经阶段，每步输出要先人工审查 — [github/spec-kit](https://github.com/github/spec-kit)
- Spec Kit 命令名与旧版（`/specify`、`/clarify`、`/analyze`）不同；页面未直接列出 Codex 支持，需看其 integrations 文档（待核实）— [同上](https://github.com/github/spec-kit)
- Kiro（二手，来自官方文档页的搜索摘要）：一个 spec = `.kiro/specs/` 下的 requirements.md（用户故事 + EARS 格式验收标准 WHEN…THE SYSTEM SHALL…）、design.md、tasks.md；有 requirements-first 与 design-first 两种变体；bugfix spec 用 bugfix.md — [kiro.dev/docs/specs/concepts](https://kiro.dev/docs/specs/concepts)、[requirements-first](https://kiro.dev/docs/specs/feature-specs/requirements-first/)
- GSD（Get Shit Done，二手）：以“对抗上下文腐烂”为卖点，研究/规划/执行放到全新上下文的 subagent 中，主会话保持精简；wave 执行、原子提交、手动验证；2026-04 报道称支持 14 个运行时（含 Codex）；存在 fork（get-shit-done-redux / @opengsd），需确认指的是哪一个 — [augmentcode](https://www.augmentcode.com/learn/gsd-stars-spec-driven-dev-claude-code)、[mintlify 文档镜像](https://www.mintlify.com/gsd-build/get-shit-done)
- BMAD：本次没找到可靠一手资料，只在 claude-code-best-practice 的框架对比中出现 — [repo](https://github.com/shanraisshan/claude-code-best-practice)

### Inferences
- 社区共识已从“写好提示词”转到“管好上下文 + 搭好反馈闭环”。课程四层主线方向对，但 Prompt 层若只讲措辞技巧，会和社区重心错位。
- Pocock 的“交接/handoff artifact + 一手 vs 转述”和 Böckeler 的“guides vs sensors”是两个特别好教、和工具无关的框架，可直接用作 Harness 章的骨架概念。
- Spec Kit 自己也说阶段可选、从最小改动开始，说明 SDD 不应教成必须走完的重流程；Pocock 课程用的是轻量的 spec→ticket。

### Gaps
- Karpathy 2026 演讲没找到原始稿，相关表述都是二手。
- BMAD 的结构和 Kiro 的最新文档未直接抓取。
- AI Hero 课程逐课标题未列出；Willison 指南各章发布日期页面上没有。
- Spec Kit 对 Codex 的支持情况待核实。

## 问题 2：它们坚持强调的横切主题

### Takeaway
安全（提示注入/lethal trifecta、恶意 skill/MCP/仓库供应链）、验证（测试作为 agent 反馈闭环、TDD、生成与评估分离）、人类审查责任、上下文管理、技能退化/边用边学，是最常被强调的横切主题；成本/token 和模型选择出现在术语和技巧层面，evals 主要以“LLM 当评审”的形式出现。

### Cited Findings

**提示注入与 lethal trifecta（已核实）**
- 三要素：私有数据访问 + 暴露于不可信内容 + 对外通信（外泄渠道）；三者同时具备就可被诱导泄露数据 — [Willison 2025-06-16](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)
- 原因：LLM 无法可靠区分可信指令和内容里嵌入的指令；靠提示词防御是概率性的；对号称拦截 95% 攻击的护栏产品持怀疑态度 — [同上](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)
- 单个工具也能凑齐三要素：GitHub MCP 读公开 issue（不可信）、访问私有仓库、开 PR（外泄）— [同上](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)
- 缓解：用户避免组合三要素；开发者在 agent 读入不可信输入后限制其触发后果性操作 — [同上](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)
- Osmani 也提醒工具描述会进入提示词，恶意 MCP 可借此注入 — [addyosmani.com](https://addyosmani.com/blog/agent-harness-engineering/)

**OWASP（二手）**
- OWASP Top 10 for Agentic Applications for 2026 于 2025-12-09 发布，编号 ASI01–ASI10；第三方摘要列出的主题含规划/目标劫持、工具滥用、身份与权限、供应链、代码执行、记忆投毒、agent 间通信、级联失败、人机信任、失控 agent — [genai.owasp.org](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026)、[Modulos 摘要](https://docs.modulos.ai/frameworks/owasp-top-10-agentic)
- 精确条目名称待对照官方页面核实。

**供应链：恶意 skills / MCP / 仓库（二手，多为厂商研究）**
- Snyk “ToxicSkills” 审计（截至 2026-02）扫描 3,984 个 skills，约 36.8% 至少有一个安全缺陷、13.4% 有严重问题；ClawHavoc 活动据称在 2026-01 至 02 间投毒约 1,184 个 ClawHub skills — [Obot 汇总](https://obot.ai/blog/mcp-security-agent-skills-supply-chain/)
- 恶意 skill 以 agent 的权限运行（文件、云凭证、外发通道），还能通过提示注入操纵 agent — [同上](https://obot.ai/blog/mcp-security-agent-skills-supply-chain/)
- “FakeGit/AgentBaiting”：攻击者制作的 README 安装步骤被 coding agent 采纳执行；MCP 服务器缺少签名标准、注册表扫描不一致 — [CSA research note](https://labs.cloudsecurityalliance.org/research/csa-research-note-fakegit-agentbaiting-mcp-supply-chain-2026/)（该 note 自述为 AI 辅助生成、未经 CSA 正式审查）
- 恶意仓库可携带项目配置，在用户接受信任提示后自动启用 MCP 服务器 — 同上搜索结果中引用的 Adversa “TrustFall” 研究（二手，未抓原文）

**验证与测试作为反馈闭环（已核实，多源）**
- Willison：red/green TDD、开工先跑现有测试、agent 手动测试与浏览器自动化 — [指南](https://simonwillison.net/guides/agentic-engineering-patterns/)
- Pocock：automated check 是 agent 能据此自我纠正的确定性检查 — [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)
- Böckeler：computational sensors 每次改动都跑；行为正确性最难，AI 写的测试不能单独作为依据 — [martinfowler.com](https://martinfowler.com/articles/harness-engineering.html)
- Osmani：hooks 在编辑后/提交前强制跑类型检查、lint、测试；生成与评估分离 — [addyosmani.com](https://addyosmani.com/blog/agent-harness-engineering/)
- claude-code-best-practice：让 agent 证明改动有效，用独立上下文的 agent 审查 — [repo](https://github.com/shanraisshan/claude-code-best-practice)

**人类审查责任（已核实，多源）**
- Pocock 把 human review 定义为读真实 diff 而不是 agent 总结；dark factory 被单独命名为“无人审查”的极端 — [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)
- Willison：未审查代码不该交给协作者；vibe coding 只指未审查代码 — [指南](https://simonwillison.net/guides/agentic-engineering-patterns/)
- Böckeler：好的 harness 减少审查苦工，但不消除人的判断 — [martinfowler.com](https://martinfowler.com/articles/harness-engineering.html)
- New Stack：AI 可能给资深工程师造成新的代码审查瓶颈；DORA 数据显示对 AI 编码的好感度两年内从 70% 降到 60% — [The New Stack](https://thenewstack.io/is-ai-creating-a-new-code-review-bottleneck-for-senior-engineers/)（二手）

**技能退化 / 边用边学（二手但有一手研究）**
- Anthropic 2026-01 随机对照试验：52 名不熟悉 Trio 库的 Python 开发者，用 AI 组随后测验得分约低 17%，速度提升不显著；把 AI 用来理解概念（问“为什么”）的人学得更好；仅一小时任务，范围有限 — [Anthropic](https://www.anthropic.com/news/AI-assistance-coding-skills)、[InfoQ](https://infoq.com/news/2026/02/ai-coding-skill-formation/)
- Osmani《Skill Atrophy》：评估比写需要更强的理解 — [addyosmani.com](https://addyosmani.com/agentic-engineering/skill-atrophy/)
- Willison 指南单设“理解代码”一节（线性走读、交互式讲解），把 agent 当理解代码的工具 — [指南](https://simonwillison.net/guides/agentic-engineering-patterns/)

**生产力的真实证据（二手）**
- METR 2025 RCT：16 名资深开源开发者用 AI 后完成任务慢约 19%，但自认为快了约 20% — [getdx 转述](https://getdx.com/blog/metr-study-on-how-ai-affects-developer-productivity/)
- METR 2026 更新：2025-08 开始的新实验数据不可靠（开发者不愿在无 AI 条件下工作），在改实验设计 — [robbowley 转述](https://blog.robbowley.net/2026/04/04/metrs-developer-productivity-research-2026-update/)

**成本与 token（已核实）**
- Pocock：输入 token 是账单大头、输出 token 更贵、prefix cache 降低重复历史成本、effort 旋钮权衡深度与成本 — [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)
- Willison “agent 原理”章讲 token 缓存 — [指南](https://simonwillison.net/guides/agentic-engineering-patterns/)
- Osmani：可观测性包括成本与延迟计量 — [addyosmani.com](https://addyosmani.com/blog/agent-harness-engineering/)
- claude-code-best-practice：查用量限额、按任务分配模型 — [repo](https://github.com/shanraisshan/claude-code-best-practice)

**模型选择与 benchmark（已核实，较弱）**
- Osmani：harness 好坏可让同一模型在 Terminal Bench 2.0 排名大幅变化；模型在特定 harness 中后训练，可能过拟合该工具集 — [addyosmani.com](https://addyosmani.com/blog/agent-harness-engineering/)
- claude-code-best-practice：强模型规划、弱/快模型写码 — [repo](https://github.com/shanraisshan/claude-code-best-practice)
- Pocock：knowledge cutoff 意味着新 API 要放进上下文 — [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)

**Evals（已核实，较弱）**
- 出现形式主要是 inferential sensor / LLM-as-judge（Böckeler）和 automated review（Pocock），而非独立的 eval 体系 — [martinfowler.com](https://martinfowler.com/articles/harness-engineering.html)、[dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)

**并行 agent、worktree、后台/云 agent（已核实）**
- claude-code-best-practice：worktree + agent teams 并行；Remote Control、Routines 等后台功能列为“热门功能” — [repo](https://github.com/shanraisshan/claude-code-best-practice)
- Pocock：AFK、software factory（由 issue/定时/CI 失败触发会话）— [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)
- Willison：并行 subagents、专职 subagents；Git 与 agent 配合一章 — [指南](https://simonwillison.net/guides/agentic-engineering-patterns/)
- Osmani：多 agent 并行协调列为未解决问题 — [addyosmani.com](https://addyosmani.com/blog/agent-harness-engineering/)

**调试与遗留代码（已核实，较弱）**
- Böckeler：遗留代码最需要 harness、也最难加 — [martinfowler.com](https://martinfowler.com/articles/harness-engineering.html)
- Spec Kit 有专门的 bug 修复扩展流程（assess → fix → test，结论为 verified/partial/failed）— [spec-kit](https://github.com/github/spec-kit)
- claude-code-best-practice 技巧分类含 debugging；Pocock 课程从“探索已有代码库”开始 — [repo](https://github.com/shanraisshan/claude-code-best-practice)、[crash course](https://github.com/ai-hero-dev/ai-coding-crash-course)

### Inferences
- 安全不只是“别泄露密钥”：社区把提示注入视为结构性、无法靠提示词根治的问题，供应链（skills、MCP、README 指令）是 2026 年新增的主战场。
- 技能退化有 RCT 证据（Anthropic），且直接关系到本课程受众（学生和初级开发者）；这是很强的“房间里的大象”。
- 成本和模型选择在社区里多是工具层技巧，不是独立章节；课程讲到“为什么用量会涨”（输入 token 随历史增长）即可，不必单设一章。

### Gaps
- OWASP 条目原文未抓取；Snyk ToxicSkills 原报告未抓取，数字为转述。
- 没有找到社区课程对“evals”系统化的教学，只有 LLM 当评审的提法。
- 后台/云 agent 的具体产品行为（Codex cloud 等）不在本次范围，需在官方文档调研中核实。

## 问题 3：哪些主题在 3 个以上独立来源中出现（强信号）

### Takeaway
强信号（≥3 个独立来源）：上下文管理/上下文腐烂、AGENTS.md 类项目说明（短小）、skills 与渐进披露、subagents、测试/确定性检查作为反馈闭环、人类审查真实代码、vibe coding 与工程化的区分、规划/spec 先行、提示注入与工具/MCP 风险、并行 agent 与 Git/worktree、“把重复错误变成规则或检查”的迭代。中等信号（2 个）：技能退化、成本/token、生成与评估分离、遗留代码。弱信号：evals 体系、benchmark 选型。

### Cited Findings
- 上下文管理/腐烂/压缩/交接：Pocock（smart zone、compaction、handoff）、Osmani（context rot、重置）、claude-code-best-practice（40% 规则）、GSD（以对抗上下文腐烂为核心）— [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)、[Osmani](https://addyosmani.com/blog/agent-harness-engineering/)、[ccbp](https://github.com/shanraisshan/claude-code-best-practice)、[GSD 转述](https://www.augmentcode.com/learn/gsd-stars-spec-driven-dev-claude-code)
- AGENTS.md/项目说明：Pocock（课程“引导”节 + 词条）、Osmani（≤60 行、每行对应真实失败）、Böckeler（列为 guide）、ccbp（memory/rules）— [crash course](https://github.com/ai-hero-dev/ai-coding-crash-course)、[Osmani](https://addyosmani.com/blog/agent-harness-engineering/)、[Fowler](https://martinfowler.com/articles/harness-engineering.html)、[ccbp](https://github.com/shanraisshan/claude-code-best-practice)
- Skills/渐进披露：Pocock、Osmani、Böckeler、ccbp — 同上四个链接
- Subagents：Pocock、Willison、Osmani、ccbp、GSD — [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)、[Willison](https://simonwillison.net/guides/agentic-engineering-patterns/)、[Osmani](https://addyosmani.com/blog/agent-harness-engineering/)、[ccbp](https://github.com/shanraisshan/claude-code-best-practice)
- 测试/确定性检查反馈：Willison、Pocock、Böckeler、Osmani、ccbp — 见问题 2
- 人类审查真实 diff：Pocock、Willison、Böckeler、Spec Kit（每步先审）— 见问题 2 与 [spec-kit](https://github.com/github/spec-kit)
- vibe coding vs 工程化：Willison（2025-03 与 2026 指南）、Karpathy（二手）、Osmani（书名改动）、Pocock（词条）、ccbp（副标题）— 见问题 1
- 规划/spec 先行：Pocock（spec→ticket）、Spec Kit、Kiro、GSD、Osmani（sprint contract、plan 文件）— 见问题 1
- 提示注入/MCP/供应链：Willison、Osmani、OWASP、CSA/Obot — 见问题 2
- 并行 agent/Git/worktree：Willison（Git 章、并行 subagents）、ccbp（worktree）、Pocock（AFK、software factory）、Osmani（列为开放问题）— 见问题 2
- 把重复错误变成规则/检查（ratchet / steering loop）：Osmani、Böckeler、Faros（二手）— [Osmani](https://addyosmani.com/blog/agent-harness-engineering/)、[Fowler](https://martinfowler.com/articles/harness-engineering.html)、[Faros](https://www.faros.ai/blog/harness-engineering)
- 失败模式（谄媚、幻觉、知识截止）：明确成节的只有 Pocock；Osmani 提到 agent 自评偏高 — [dictionary](https://github.com/mattpocock/dictionary-of-ai-coding)、[Osmani](https://addyosmani.com/blog/agent-harness-engineering/)

### Inferences（供与大纲对照时使用，需对照大纲本身确认）
- 可能的“房间里的大象”候选（需与 `docs/outline/` 核对是否已覆盖）：
  1. **提示注入与供应链**：lethal trifecta 框架 + 第三方 skill/MCP/README 指令的风险，强信号且 2026 年事件密集。
  2. **技能退化与边用边学**：有 RCT 证据，且受众正是学生和初级开发者，最该讲。
  3. **审查真实 diff，而不是 agent 的总结**：一手 vs 转述的区分。
  4. **失败模式词汇**：谄媚、幻觉、知识截止、上下文退化，是学员理解“为什么要验证”的前提。
  5. **把重复错误变成规则/检查**（ratchet/steering loop），这是 Harness 层的核心动作。
  6. **对生产力宣传保持怀疑**：METR 的感知与实测差距，适合放在课程开篇纠偏。
- 社区普遍以 Claude Code 为载体；本课程用 Codex，所有命令级技巧都要换成 Codex 等价物并实测，不能照搬。

### Gaps
- “3+ 独立来源”的计数基于本次抓取的约 10 个来源，未做系统抽样；Willison 与 Osmani 互相引用，独立性有限。
- 未调研中文社区课程，未覆盖视频课程（如 DeepLearning.AI 等）。
