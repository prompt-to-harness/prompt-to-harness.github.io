# Anthropic 官方 AI 编程知识点清单（Claude Code 与 coding agent，截至 2026-10）

> 调研日期：2026-10-20。标注：**已核实** = 本次直接读过该页面；**待实测/二手** = 只见到标题、摘要或间接引用，未读全文，或页面描述的产品行为未亲手验证。
> 所有内容为转述；直接引语都不超过 15 个英文词。产品版本号、命令、数字均以页面当日所写为准，Claude Code 迭代很快，录制前需再核一次。
> 说明：页面上的产品行为（如 auto mode 是默认模式）只是“文档这样写”，没有在本机实测。

## 一、Claude Code 文档与 best practices 页覆盖哪些主题，哪些被定为“必须”

### Takeaway
官方 best practices 把**上下文窗口**定为“最重要的资源”，把**给 Claude 一个能自己跑的验证手段**放在第一条实践；其余主题按“先探索再计划再写码 → 具体上下文 → 配置环境（CLAUDE.md / 权限 / CLI / MCP / hooks / skills / subagents / plugins）→ 有效沟通（让 Claude 访谈你、写 spec）→ 管理会话（及早纠偏、/clear、/compact、checkpoint）→ 自动化与扩展（headless、并行、fan-out、auto mode、对抗式审查）→ 常见失败模式”排列。

### Cited Findings
**best practices 页（已核实）**
- 开篇定调：大多数实践都源于一个约束，即上下文窗口很快填满、填满后表现下降；文档称其为 "the most important resource to manage"。建议用自定义 status line 持续观察上下文用量。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 第一条实践是“给 Claude 一个验证自己工作的手段”：测试、构建、截图对比等能返回 pass/fail 的检查；没有检查时，人就成了验证回路。验证强度分四级：单条 prompt 里要求跑检查 → `/goal` 条件（独立评估器每轮复查）→ Stop hook 作确定性闸门 → 验证 subagent 或 dynamic workflow 让新模型尝试反驳。还要求 Claude 出示证据（测试输出、命令与返回、截图），而不是只声称成功。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 推荐四阶段工作流 Explore → Plan → Implement → Commit；用 plan mode（`Shift+Tab` 或 `--permission-mode plan`）把探索与执行分开；`Ctrl+G` 可在编辑器里改计划。明确说 plan mode 有开销：如果一句话能描述 diff，就跳过计划。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 提示要具体：限定范围、指向信息源（如 git 历史）、引用已有模式、描述症状加“修好”的标准；可用 `@` 引用文件、粘贴截图、给 URL、管道输入数据。— [Best practices](https://code.claude.com/docs/en/best-practices)
- CLAUDE.md：`/init` 生成初稿；只写 Claude 猜不到、且普遍适用的内容（命令、与默认不同的风格、测试方式、仓库礼仪、架构决定、环境坑）；对每行自问“删掉会不会犯错”；过长会让规则被忽略；像代码一样评审、修剪、提交进 git；偶发需要的知识放 skills。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 权限：用 `/permissions` 预批准可信工具、`/sandbox` 做 OS 级隔离；文档称 v2.1.283 起 auto mode 是交互式终端和 VS Code 的默认起始模式（分类器代人审批，只拦高风险动作）。Manual 模式下“第十次批准后你只是在点确认，而不是在审查”。— [Best practices](https://code.claude.com/docs/en/best-practices)（auto mode 默认行为：待实测）
- 优先用 CLI 工具（`gh`、`aws` 等）对接外部服务，称其最省上下文；Claude 能通过 `--help` 学会陌生 CLI。— [Best practices](https://code.claude.com/docs/en/best-practices)
- hooks 与 CLAUDE.md 的区别：CLAUDE.md 是建议性的，hooks 是确定性的、保证发生；“每次都必须发生、零例外”的动作用 hook。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 沟通：像问资深工程师一样问代码库问题（新人上手）；较大功能先让 Claude 用 AskUserQuestion 访谈你，写出 `SPEC.md`，再开**新会话**执行；好 spec 自包含、写明范围外内容、以端到端验证步骤收尾。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 会话管理：`Esc` 中断、`Esc Esc`/`/rewind` 回滚、`/clear` 切换任务；同一问题纠正超过两次就 `/clear` 重来并写更好的 prompt；`/compact <指令>` 定向压缩；可在 CLAUDE.md 写压缩时保留什么；`/btw` 问的问题不进历史；用 subagent 做调查以保护主上下文。— [Best practices](https://code.claude.com/docs/en/best-practices)
- Checkpoint：每个 prompt 都建快照，可只恢复对话、只恢复代码或都恢复；警告 checkpoint 只追踪文件编辑工具的改动，Bash 或外部进程的改动不在内，“不能替代 git”。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 自动化与扩展：`claude -p` 非交互模式（json / stream-json 输出）用于 CI 与脚本；并行方式包括 worktrees、跨会话消息、桌面 app、云端会话、agent view（研究预览）、agent teams（实验性、默认关闭）；Writer/Reviewer 双会话模式，新上下文审查不偏向自己刚写的代码；`/batch` 或循环 `claude -p` 做大规模迁移，先试 2–3 个文件再全量。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 对抗式审查：做完前让 subagent 在新上下文里只看 diff 与标准；同时提醒审查者被要求找问题时总会找到一些，追逐每个发现会导致过度工程，应只标记影响正确性或需求的缺口。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 五个常见失败模式：kitchen sink 会话、反复纠正、过度膨胀的 CLAUDE.md、trust-then-verify 缺口（“无法验证就不要发布”）、无边界的探索。— [Best practices](https://code.claude.com/docs/en/best-practices)
- 旧版工程博客 “Claude Code: Best practices for agentic coding”（2025-04-18）现在 308 永久重定向到上述文档页，说明官方把它当活文档维护。— [旧 URL](https://www.anthropic.com/engineering/claude-code-best-practices)（已核实重定向）

**How Claude Code works（已核实）**
- agentic loop 三阶段：gather context → take action → verify results，人可随时打断；模型 + 工具，外面那层管理工具和上下文的就叫 “agentic harness”。工具五类：文件操作、搜索、执行、Web、代码智能（LSP 插件）。— [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)
- 会话之间相互独立、各自从新上下文开始；跨会话靠 CLAUDE.md 与 auto memory（MEMORY.md 前 200 行或 25KB）。上下文满时先清旧工具输出再摘要，早期细节指令可能丢失，所以持久规则放 CLAUDE.md。— [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)
- 两大安全机制：checkpoints（只覆盖文件，数据库、API、部署等远端副作用无法回滚）与权限模式（Auto / Manual / Accept edits / Plan）。工作心法：“像委托给能干同事一样”，以及对话式迭代。— [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works)

**Extend Claude Code（features overview，已核实）**
- 官方建议新手**先只用 CLAUDE.md**，其余扩展“遇到具体触发信号再加”，并给出大致顺序：同一约定错两次 → 写 CLAUDE.md；总要求同一回答格式 → output style；反复敲同一段开场 prompt 或第三次粘贴同一流程 → skill；反复从浏览器复制 Claude 看不到的数据 → MCP；为找符号读大量文件 → 代码智能插件；旁支任务输出淹没对话 → subagent；希望每次自动发生 → hook；第二个仓库要同样配置 → plugin。— [Features overview](https://code.claude.com/docs/en/features-overview)
- 各功能的上下文成本对比：CLAUDE.md 与 output style 每次请求都付费；skills 只有描述常驻、正文按需；MCP 只有工具名常驻、schema 按需（tool search 默认开）；subagent 隔离；hook 默认零成本。经验值：CLAUDE.md 控制在 200 行以内。— [Features overview](https://code.claude.com/docs/en/features-overview)
- 关键区分：护栏放 hooks——CLAUDE.md 或 skill 里写“不要改 .env”只是请求，`PreToolUse` hook 拦截才是强制执行；skill vs subagent 看是否需要上下文隔离；MCP 提供连接，skill 教怎么用好连接。— [Features overview](https://code.claude.com/docs/en/features-overview)
- 还列出较新的功能：dynamic workflows（Claude 写脚本跑大量 subagent）、cross-session messaging、code intelligence（LSP）、Artifact 发布。— [Features overview](https://code.claude.com/docs/en/features-overview)（是否在课程期间稳定：待实测）

**Memory 页（已核实）**
- CLAUDE.md 与 auto memory 都是“上下文，不是强制配置”；要强制拦截用 PreToolUse hook。CLAUDE.md 有多级作用域（组织 managed、用户、项目、`CLAUDE.local.md` 个人），`.claude/rules/` 可用 `paths` 按文件路径加载；每个文件建议 200 行以内，`@import` 不会降低上下文成本。— [Memory](https://code.claude.com/docs/en/memory)
- **AGENTS.md 兼容**：没有 CLAUDE.md 时 Claude Code 直接读 AGENTS.md（文档称需 v2.1.277+）；两者并存时只读 CLAUDE.md，也可以在 CLAUDE.md 里 import AGENTS.md。— [Memory](https://code.claude.com/docs/en/memory)（与本课程用 Codex + AGENTS.md 直接相关）

**Common workflows（已核实）**
- 菜谱式覆盖：理解新代码库、定位代码、修 bug（给复现命令和堆栈）、小步可测地重构、补测试（含边界条件）、建 PR（提交前人工审阅，并让 Claude 列风险）、写文档、图片输入、`@` 引用、定时任务（cloud routines / desktop / GitHub Actions / `/loop`，无人值守的 prompt 要写清成功标准）、resume、`claude --worktree` 并行、plan mode、subagent 调研、管道进脚本。— [Common workflows](https://code.claude.com/docs/en/common-workflows)

**Security 页（已核实）**：见第四部分。

### Inferences
- 官方文档的“第一性原理”就两条：**上下文是稀缺资源**、**验证回路必须闭合**。几乎所有功能（subagent、skills 按需加载、/clear、hooks、Stop hook、/goal）都被讲成这两条原则的工具化。
- “CLAUDE.md 是建议、hooks 和权限是强制”这一区分在 best practices、features overview、memory、steering 博客中反复出现，属于官方强调的核心心智模型。
- 官方明确反对一上来配齐所有扩展，推荐“触发驱动、逐步加”的顺序，这本身就是可教的知识点。

### Gaps
- 未逐页阅读 hooks、sub-agents、skills、plugins、headless、worktrees、output-styles、checkpointing 的独立文档页，只读了总览与 best practices 中的描述；细节（事件列表、frontmatter 字段）待查。
- auto mode 默认开启、版本号 v2.1.283 / v2.1.277 等为文档原文，本机未验证。

## 二、Anthropic Academy（Skilljar）课程覆盖什么，按什么顺序

### Takeaway
与 Claude Code 直接相关的课程有四门：**Claude Code 101**（入门，从“什么是 agent”到 hooks）、**Claude Code in Action**（进阶，长时、少监督、团队化运行与验证）、**Introduction to agent skills**、**Introduction to subagents**；另有 MCP 两门（偏构建 server）和通识课 AI Fluency（4D 框架）。站点只列了一条正式“学习路径”（面向 pK-12 教师），**没有面向开发者的官方排序路径**，但文档 overview 页把 101 和 in Action 并列推荐为“下一步”。

### Cited Findings
- 课程目录：Claude Code 101、Claude Code in Action、Introduction to agent skills、Introduction to subagents、Building with the Claude API、Claude Platform 101、Introduction to MCP、MCP Advanced Topics、AI Fluency 系列、AI Capabilities and Limitations 等；唯一的 learning path 是 pK-12 教育者方向。— [Anthropic Academy 首页](https://anthropic.skilljar.com/)（已核实）
- 文档 overview 的 “Next steps” 把 Claude Academy 的 Claude Code 101 与 Claude Code in Action 一起列为推荐资源；同处还推荐博客 “A harness for every task”（dynamic workflows）。— [Overview](https://code.claude.com/docs/en/overview)（已核实；该博客未读，待实测/二手）
- **Claude Code 101**（已核实）。受众：从零学 AI 辅助工作流的新开发者，以及没试过 coding agent 的资深工程师。目标包括：解释 coding agent 与聊天工具的区别；理解 agentic loop、上下文窗口、工具、权限如何协作；多环境安装；用 approval / auto-accept / Plan Mode 写好 prompt；Explore → Plan → Code → Commit；用 `/compact` `/clear` `/context` 管理上下文；写 CLAUDE.md；建 subagent；接 MCP；写 hooks（格式化、拦截命令、通知）。模块顺序（抓取页面嵌套略乱）：What is Claude Code（含 How it works、first prompt）→ 安装 → Daily workflows（explore-plan-code-commit、Context management、Code review）→ Customizing（CLAUDE.md → Subagents → Skills → MCP → Hooks）→ Quiz。— [Claude Code 101](https://anthropic.skilljar.com/claude-code-101)
- **Claude Code in Action**（已核实，现版本）。定位：已经会用单条 prompt、想走向更长、更少监督、团队范围工作流的开发者。四模块：① Steer the Work（长会话引导：plan mode 限定范围、指导压缩保留关键细节、rewind 纠偏、在亲自引导与 goal/loop 自主运行之间取舍）② Configure Claude（让 Claude 真正遵守的 CLAUDE.md、Verification Skills、Permission Modes、Hooks）③ Automate Repeat Work（Routines 与 headless、GitHub Actions 与 Code Review）④ Verify and Share（验证无人监督的运行，力度与“你看得多少”成反比；用 hooks 以真实测试结果作闸门；把可信配置打包为 plugin 给团队）。— [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action)
  - 注意：该课程早期（2025 年）版本内容不同（据记忆偏重 context、custom commands、MCP、GitHub 集成、hooks、SDK），现版本已重写；旧版细节未核实，属二手。
- **Introduction to agent skills**（已核实）：What are skills → 创建第一个 skill → 配置与多文件 skill → skills 与其他功能的对比 → 分享 skills → 排障；页面称目标是“教 Claude 一次”。由描述推出的要点：description 决定触发、渐进式披露、`allowed-tools`、脚本不占上下文、经 plugin 或 managed settings 分发、与 subagent 结合。— [Intro to agent skills](https://anthropic.skilljar.com/introduction-to-agent-skills)
- **Introduction to subagents**（已核实）：What are subagents → 创建 → 设计有效的 subagent（结构化输出格式、报告障碍、限制工具权限）→ 有效使用（何时委托、何时不值得、常见反模式）。— [Intro to subagents](https://anthropic.skilljar.com/introduction-to-subagents)
- **AI Fluency: Framework & Foundations**（已核实，页面只列结构）：与 University College Cork、Ringling College 的学者合作；4D 框架为 Delegation、Description、Discernment、Diligence，对应委托（含项目规划）、提示技巧、Description–Discernment 循环、尽责（diligence）；页面未给出各 D 的定义。— [AI Fluency](https://anthropic.skilljar.com/ai-fluency-framework-foundations)
- Introduction to MCP：用 Python 构建 MCP server/client，覆盖 tools、resources、prompts；Advanced 覆盖 sampling、notifications、文件系统访问、transport。— [Academy 首页描述](https://anthropic.skilljar.com/)（只读了目录描述，未读课程页：待实测/二手）

### Inferences
- 官方课程的隐含顺序：AI Fluency（通识、责任）→ Claude Code 101（agent 概念 + 日常工作流 + 定制）→ skills / subagents 专题 → Claude Code in Action（长时自主运行 + 自动化 + 验证 + 团队分享）→ MCP / API（构建者方向）。
- in Action 现版本把**验证无人监督的运行**单独成一节并放在最后一个模块，与本课程“Harness”层高度对应。
- AI Fluency 的 Discernment（判断输出）/ Diligence（负责任）可对照本课程“不鼓励直接接受输出”的立场。

### Gaps
- Skilljar 页面未写各课时长、视频数，也未写先修关系。
- 4D 的官方定义需要进入课程或读配套 PDF，本次未读。

## 三、工程博客认为开发者必须理解的概念

### Takeaway
工程博客形成一条清晰的概念演进线：**Building effective agents（2024-12，先简单、workflow vs agent、ACI）→ 写工具（2025-09）→ context engineering（2025-09）→ Agent Skills（2025-10）→ sandboxing（2025-10）→ 长时 harness（2025-11）→ evals（2026-01）→ harness design 与 planner/generator/evaluator（2026-03）→ auto mode（2026-03）→ 隔离与 containment（2026-05）**。反复出现的主题：上下文有限、外部化状态（进度文件、git、JSON 特性清单）、生成与评估分离、验证要端到端、harness 组件随模型变强而需要重新审视。

### Cited Findings
**文章索引（已核实）**：engineering 页列出 26 篇，较新的包括 “How we contain Claude across products”（2026-05-25）、“April 23 postmortem”（2026-04-23）、“Scaling Managed Agents”（2026-04-08）、“Claude Code auto mode”（2026-03-25）、“Harness design for long-running application development”（2026-03-24）、“Infrastructure noise in agentic coding evals”（2026-02-05）、“Building a C compiler with a team of parallel Claudes”（2026-02-05）、“Demystifying evals”（2026-01-09）、“Effective harnesses for long-running agents”（2025-11-26）、“Advanced tool use”（2025-11-24）、“Code execution with MCP”（2025-11-04）、“Beyond permission prompts”（sandboxing，2025-10-20）、“Agent Skills”（2025-10-16）、“Effective context engineering”（2025-09-29）、“Writing effective tools for agents”（2025-09-11）、“Multi-agent research system”（2025-06-13）、“Think tool”（2025-03-20）、“Building effective agents”（2024-12-19）。— [Anthropic Engineering](https://www.anthropic.com/engineering)

**Building effective agents（2024-12-19，已核实；较早，但仍被广泛引用）**
- workflow（预定义代码路径）与 agent（LLM 自主决定流程与工具使用）的区分；从最简单方案开始，只在能被度量地改善时才加复杂度。— [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- 基本构件 augmented LLM（检索、工具、记忆）；五种 workflow 模式：prompt chaining、routing、parallelization（sectioning / voting）、orchestrator-workers、evaluator-optimizer。— 同上
- 三原则：简单、透明（展示规划步骤）、精心设计 ACI（agent-computer interface）；框架会隐藏 prompt，建议先直接调 API。工具要 poka-yoke（防呆），例如要求绝对路径，从而消除相对路径错误。— 同上
- 对 coding agent：可用自动化测试验证，所以适合 agent；但仍需要人工审查以确认符合更大的系统需求。— 同上

**Effective context engineering（2025-09-29，已核实）**
- context engineering 是“策划模型推理时看到的 token 集合”，是 prompt engineering 的延伸；目标是“最小的高信号 token 集合”。context rot：窗口越大召回越差，存在 attention budget。— [Context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- system prompt 要在“正确的高度”（介于硬编码 if-else 与空泛指引之间），从最小 prompt 出发、按观察到的失败增补；工具自包含、少重叠；少量多样的典型示例胜过罗列边界规则；just-in-time 检索（持有路径、查询等轻量引用，运行时再加载）。— 同上
- 长程技术三件套：compaction、结构化笔记（如 NOTES.md、todo）、sub-agent 架构（子代理返回约 1–2k token 的摘要）。— 同上

**Writing effective tools for agents（2025-09-11，已核实）**
- 先做原型再用真实多步任务评估；工具要少而高影响，不要每个 API 端点包一个工具；命名空间；返回高信号、自然语言的字段而非晦涩 ID；分页、过滤、截断，错误信息可操作；像对新员工一样写工具描述；把评估 transcript 交给 Claude Code 分析并改进工具，用保留集防过拟合。— [Writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents)

**Multi-agent research system（2025-06-13，已核实）**
- orchestrator-worker 架构；多 agent 适合广度优先、可并行、超出单窗口的任务，**大多数编码任务可并行部分较少**，不太适合；agent 约耗 4 倍于聊天的 token，多 agent 约 15 倍。— [Multi-agent research](https://www.anthropic.com/engineering/multi-agent-research-system)
- prompting 原则：像你的 agent 那样思考（模拟它）、教会委托（目标、输出格式、工具指引、边界）、按复杂度分配投入、工具描述要清楚；评估从约 20 个真实查询起步，评结果而非路径，用 LLM judge 加人工测试。— 同上

**Equipping agents with Agent Skills（2025-10-16，已核实）**
- skill 是含 `SKILL.md`（YAML frontmatter：name、description）的文件夹，可附脚本和资源；三级**渐进式披露**（元数据常驻 → 正文按需 → 引用文件再按需）；脚本可以执行而不把内容载入上下文；开发时“从评估开始”；安全：只装可信来源、审计脚本与依赖、警惕外连指令。与 MCP 互补。— [Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

**Effective harnesses for long-running agents（2025-11-26，已核实）**
- 问题：每个会话没有前序记忆，仅靠 compaction 不够；失败表现为一次做太多、留下半成品、过早宣布完成。— [Long-running harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- 方案：initializer agent（首个会话：`init.sh`、进度日志、首次 commit、把需求展开成 JSON 特性清单并全部标为失败）+ coding agent（之后每个会话一次只做一个特性，只能改 `passes` 字段）；选用 JSON 是因为模型较少误改 JSON；强调删改测试不可接受。每个会话开头读进度文件、git log、特性清单，跑 `init.sh` 和端到端冒烟测试；结尾 commit 并更新进度。— 同上
- 验证：Claude 常在只跑单元测试或 `curl` 后就标完成；要求用浏览器自动化（Puppeteer MCP）像真实用户那样测，效果大幅提升；也有局限（看不到浏览器原生 alert）。— 同上

**Harness design for long-running application development（2026-03-24，已核实）**
- 受 GAN 启发的 planner / generator / evaluator 三角色；evaluator 用 Playwright 像用户一样点击运行中的应用，按带硬阈值的标准打分；sprint contract：每个 sprint 前 generator 提出要做什么、如何验证，evaluator 审核到双方一致，agent 之间通过文件通信。— [Harness design](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- **自评偏差**：agent 倾向于夸自己的平庸成果；把生成与评估分开，独立 evaluator 更容易调得挑剔（但仍偏宽松，需多轮调校）。— 同上
- context reset 与 compaction 的取舍；“每个 harness 组件都编码了一个关于模型做不到什么的假设”，模型升级后要逐个移除以找出真正承重的部分（例如 sprint 结构在 Opus 4.6 上已不必要，planner 与 evaluator 仍有价值）。— 同上
- 成本示例：单 agent 20 分钟、9 美元，核心功能不工作；完整 harness 6 小时、200 美元，功能明显更完整。— 同上

**Demystifying evals for AI agents（2026-01-09，已核实）**
- 术语：task、trial、grader、transcript、outcome（环境最终状态，可能与 agent 的声称不同）、eval harness、agent harness；评“一个 agent”就是评 harness 加模型。— [Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- grader 三类：代码型、模型型、人工；capability eval（起步通过率低）与 regression eval（接近 100%）；pass@k 与 pass^k（例：单次 75% 时连过 3 次约 42%）。— 同上
- coding agent 评估：确定性 grader（测试是否通过）天然适合，可以再加 transcript 评分；路线图：尽早用 20–50 个来自真实失败的任务起步、任务无歧义并附参考解、正反例平衡、隔离环境、评结果而非步骤、**阅读 transcript**。— 同上

**其他（待实测/二手，只见标题或间接引用）**
- “Code execution with MCP”（2025-11-04）、“Advanced tool use”（2025-11-24）、“Building a C compiler with a team of parallel Claudes”（2026-02-05）、“Quantifying infrastructure noise in agentic coding evals”（2026-02-05）、“Scaling Managed Agents”（2026-04-08）、“April 23 postmortem”（2026-04-23）未读正文。— [Anthropic Engineering](https://www.anthropic.com/engineering)
- claude.com 博客 “Steering Claude Code”（2026-06-18，已核实）：七种行为塑形方式（根 CLAUDE.md、子目录 CLAUDE.md、rules、skills、subagents、hooks、output styles / system prompt append），按加载时机、是否熬过 compaction、上下文成本区分；原文要点“真正的护栏必须是确定性的”；CLAUDE.md 要有 owner、像代码一样评审；按“是否要看到中间过程”在 subagent 与 skill 之间选择；自定义 output style 可能丢掉默认的工程指令。— [Steering Claude Code](https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)

**平台 prompting 文档中的 agentic coding 条目（已核实）**
- Prompt engineering 概览把三件事列为前提：明确的成功标准、能实证测试的方法、一版初稿 prompt；没有就先去建 eval。— [Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- Prompting best practices 的 “Agentic systems” 一节：跨多个上下文窗口的工作流（首窗口搭框架、用 `tests.json` 结构化追踪测试、`init.sh`、新窗口从文件系统重建状态 vs compaction、提供 UI 验证工具）；状态管理（结构化数据用 JSON、进度用自由文本、用 git 追踪）；平衡自主与安全（不可逆、影响共享系统、破坏性动作先问人；不要用 `--no-verify` 之类绕过）；subagent 编排（警惕过度派生 subagent）；减少临时文件；**过度工程**（只做被要求的改动）；**不要只为通过测试而硬编码**（测试用于验证而不是定义解法；测试有误就告诉用户）；**减少幻觉**（没打开过的代码不做断言）。— [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

### Inferences
- 从官方材料看，“Harness”是官方术语：文档把 Claude Code 自身称为 agentic harness，evals 文章把“agent = harness + 模型”作为定义，2025-11 与 2026-03 两篇专门讲长时 harness 设计。本课程第四层的命名与官方用法一致，可直接引用这些定义。
- 长时 harness 的“外部化状态”三件套（JSON 特性清单、进度文件、git）+ 启动例程 + 端到端验证，是官方给出的、可被学员复现的具体模式，适合放进项目实操。
- “自评偏差 / 生成与评估分离”和“harness 组件随模型过时”是 2026 年新增的重要观点，较早的二手资料没有。

### Gaps
- 未读 “Code execution with MCP”、“Building a C compiler” 等正文，其中可能有并行 agent 协作的具体教训。
- “A harness for every task”（dynamic workflows）博客未读。

## 四、Anthropic 对 coding agent 安全与责任的说法

### Takeaway
官方安全叙事分三层：**环境层确定性隔离（sandbox：文件系统 + 网络，两者缺一不可）优先**，**模型层概率性检查（auto mode 分类器、prompt 指引）其次**，**人负最终审阅责任**。官方承认审批疲劳让逐条确认失效（用户批准约 93% 的提示），并公布 auto mode 对真实越权动作的漏判率约 17%，明确说它不能替代高风险工作的人工审查。验证（测试、端到端、独立审查）被同时当作质量和安全手段。

### Cited Findings
- 用户责任：文档明确由用户负责在批准前审查代码和命令的安全性。— [Security](https://code.claude.com/docs/en/security)（已核实）
- 内置防护：权限模式（Auto / Manual / Accept Edits）、sandboxed bash、工作目录边界（只是权限提示，被批准的 Bash 仍可写任何地方）、`curl`/`wget` 等联网命令默认不自动批准、WebFetch 用单独模型摘要页面而不交原文、workspace trust 对话框（`-p` 模式不显示）、命令注入检测、fail-closed 匹配、凭据存 Keychain。— [Security](https://code.claude.com/docs/en/security)（已核实）
- 处理不可信内容的五条：批准前审查命令、不要把不可信内容直接管道给 Claude、核查关键文件改动、在 VM 中跑脚本和工具调用、用 `/feedback` 报告可疑行为；并承认没有系统能完全免疫。— [Security](https://code.claude.com/docs/en/security)（已核实）
- MCP 安全：自己写或只用可信提供者的 server；Anthropic 目录收录前按标准审核，但不对任何 MCP server 做安全审计；`.mcp.json` 只是部分来源。团队层面：managed settings、版本库共享权限配置、OpenTelemetry 监控、`ConfigChange` hook 审计；相关工具 `/security-review`、security guidance 插件、dev container。— [Security](https://code.claude.com/docs/en/security)（已核实）
- Sandboxing 文章（2025-10-20）：逐条审批导致 approval fatigue，反而更不安全；sandbox 在内部使用中把权限提示减少 84%；**文件系统隔离与网络隔离必须同时存在**（缺网络隔离可外泄 SSH key，缺文件系统隔离可逃逸）；基于 bubblewrap / seatbelt，限制同样作用于子进程；云端会话的 git 凭据不进沙箱、由代理校验。— [Beyond permission prompts](https://www.anthropic.com/engineering/claude-code-sandboxing)（已核实）
- Auto mode 文章（2026-03-25）：用户批准 93% 的权限提示；威胁模型四类：过度积极（越权，比如使用偶然发现的凭据）、诚实错误（误判影响范围）、prompt injection、模型失准（称目前实践中未见）；分类器“推理盲”（只看用户消息和工具调用）；被拒后返回原因让 agent 换安全路径，连续 3 次或累计 20 次拒绝即升级给人；真实越权动作漏判率 17%、真实流量误报率 0.4%；明确说它不是人工审查的替代品，sandbox 仍是更强的隔离。拦截示例：因模糊的“清理”请求删除远端分支、认证失败后去找其他凭据、用跳过校验的 flag 重试失败的部署。— [Auto mode](https://www.anthropic.com/engineering/claude-code-auto-mode)（已核实）
- How we contain Claude（2026-05-25）：风险来源三类（用户误用、模型异常、外部攻击者）；注入可经文件、工具、网页甚至用户本人进入；先在环境层做硬限制，再加模型层检查；凭据不放在 agent 可达环境；最小权限（如只读数据库）；远程工具视为不可信、先用假数据测试；警惕持久状态（memory 文件、配置）被投毒；项目配置可能在 trust 提示前执行代码；优先用成熟原语而不是自写安全代码。— [How we contain Claude](https://www.anthropic.com/engineering/how-we-contain-claude)（已核实）
- Agent Skills 安全：只装可信来源的 skill，审计脚本与依赖，恶意 skill 可引入漏洞或外泄数据。— [Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)（已核实）
- 验证即责任：best practices 的失败模式 “trust-then-verify gap”，修正办法是始终提供验证，无法验证就不发布；Stop hook 作确定性闸门；fresh-context 审查者；Building effective agents 强调 coding agent 仍需人工审查。— [Best practices](https://code.claude.com/docs/en/best-practices)；[Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)（已核实）
- 可逆性提示模板：鼓励本地可逆动作，不可逆、影响共享系统、对他人可见的动作先确认；不要用破坏性动作或 `--no-verify` 当捷径。— [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)（已核实）

### Inferences
- 官方给出的安全心智模型可以浓缩成一个可教的梯度：Manual 逐条审批（会疲劳）→ allowlist / deny 规则 → sandbox（确定性边界）→ auto mode（概率性分类器）→ 外层 VM / 容器 / 云会话；每一级都有公开的局限说明。
- prompt injection 在官方材料中是一级威胁，且来源包括仓库文件、MCP 工具输出、skills、memory 文件——这意味着“装第三方 skill / MCP / 打开陌生仓库”都属于安全话题，而不只是功能话题。
- 官方自己公布分类器漏判率，可作为课程“不能把安全交给工具”的有力论据。

### Gaps
- 未读 permissions、sandboxing、permission-modes 的独立文档页（规则语法、dontAsk 模式细节）。
- 官方关于**生成代码的许可证、版权、密钥泄露到提交历史**等“责任”话题，本次材料中未见系统论述。

## 五、是否存在官方有序学习路径

### Takeaway
没有面向开发者的“正式 learning path”。可以拼出的事实顺序有三处：Academy 课程层级（101 → 专题 → in Action）、features overview 的“触发驱动”扩展采用顺序、best practices 页本身的章节顺序。

### Cited Findings
- Skilljar 站点只列了一条 learning path（pK-12 教师 AI Fluency），开发者方向没有。— [Anthropic Academy](https://anthropic.skilljar.com/)（已核实）
- 文档 overview 的 Next steps 顺序：Quickstart → Memory（CLAUDE.md）→ Common workflows 与 best practices → Academy（101、in Action）→ dynamic workflows 博客 → Settings → Troubleshooting。— [Overview](https://code.claude.com/docs/en/overview)（已核实）
- features overview：新手先从 CLAUDE.md 开始，其余扩展“遇到具体触发信号再加”，并附触发信号表（见第一部分）。— [Features overview](https://code.claude.com/docs/en/features-overview)（已核实）
- Claude Code 101 的目标顺序本身就是一条入门路径：agent 概念 → agentic loop、上下文、工具、权限 → 安装 → 模式与 prompt → EPCC 工作流 → 上下文管理 → CLAUDE.md → subagents → (skills) → MCP → hooks。— [Claude Code 101](https://anthropic.skilljar.com/claude-code-101)（已核实）
- 文档提到 `/powerup` 提供带动画演示的交互式课程。— [Common workflows](https://code.claude.com/docs/en/common-workflows)（已核实提及；功能本身待实测）

### Inferences
- 用于对照本课程的“官方知识点全集”可按以下层级排列（由上述来源归纳，非官方原文）：
  1. 心智模型：agent vs 聊天、agentic loop（收集上下文 / 行动 / 验证）、harness = 模型外的工具与上下文管理层。
  2. 上下文是第一资源：context rot、`/clear` `/compact` `/context`、subagent 隔离、just-in-time 检索、按需加载。
  3. 验证回路：测试、构建、截图、端到端浏览器测试、出示证据、Stop hook、/goal、独立审查者、生成与评估分离、自评偏差。
  4. 工作流：Explore → Plan → Implement → Commit；访谈式写 spec → 新会话执行；及早纠偏、两次纠正后重来；checkpoint 不替代 git。
  5. 持久指令：CLAUDE.md / AGENTS.md（精简、像代码一样维护）、rules 按路径加载、auto memory。
  6. 扩展：skills（渐进式披露）、subagents、hooks（确定性护栏）、MCP（与 CLI 对比）、plugins 分发、output styles。
  7. 安全：权限模式、allow/deny、sandbox（文件 + 网络）、prompt injection、approval fatigue、auto mode 的局限、最小权限、不可信 skill/MCP、不可逆动作先确认。
  8. 规模化：headless `-p`、CI / GitHub Actions、并行会话与 worktree、fan-out、定时任务、多 agent 的成本（约 15 倍 token）与适用边界。
  9. 长时 harness：外部化状态（JSON 特性清单、进度文件、git）、init 脚本、一次一个特性、context reset vs compaction、随模型升级精简 harness。
  10. 评估：任务 / trial / grader / transcript / outcome、capability vs regression、pass@k vs pass^k、读 transcript。
  11. 模型行为陷阱：过度工程、为过测试而硬编码、未读代码就断言、过度派生 subagent、过早宣布完成。

### Gaps
- 无法确认 Academy 课程的推荐先后关系是否在课程内部有说明（页面未写先修）。
