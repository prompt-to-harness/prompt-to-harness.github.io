# 其他厂商与教育平台的 AI 编程课程结构对照（GitHub / Google / Cursor / DeepLearning.AI）

> 调研日期：2026-10-20。范围：GitHub（Copilot 文档、GitHub Skills、Microsoft Learn）、Google（Gemini CLI、Jules、Antigravity CLI、DeepLearning.AI 合作课）、Cursor（docs 与 cursor.com/learn）、DeepLearning.AI 编程类短课。
> 标记说明：**已核实** = 本次直接打开官方页面读到；**待实测/二手** = 只来自搜索摘要、第三方页面，或只看到导航标题没读正文。所有内容为转述，未大段引用。
> 方法局限：网页内容经抓取工具转为摘要，导航层级是按 URL 路径推断的；功能名称以页面标题为准，没有实际操作验证。

## 1. 各家反复出现的主题有哪些？

### Takeaway
跨 3 家及以上来源反复出现的主题：项目级说明文件（AGENTS.md / GEMINI.md / rules / custom instructions）、上下文管理、计划模式（plan mode）、MCP 扩展、Skills / 扩展 / 插件、云端或后台 agent（issue → PR）、AI 代码审查、测试与验证、调试、读懂陌生代码库、模型选择与成本、hooks / subagents、安全与沙箱。其中“说明文件 + 上下文 + MCP + 测试验证 + 云端 agent 出 PR”几乎每家都有。

### Cited Findings

**GitHub Copilot 文档（docs.github.com/en/copilot）— 已核实（导航层面）**
- 文档按 Get started → Concepts → How-tos → Tutorials → Reference → Responsible use 组织；没有页面日期 — [GitHub Copilot docs](https://docs.github.com/en/copilot)
- Concepts 下的主题：Copilot 的各个使用入口；custom agents、skills、hooks、plugins、MCP；agent 能力（cloud agent、第三方 agent、委派、code review、automations、computer use、autopilot）；prompting 与上下文（prompt engineering、custom instructions、prompt files、Spaces、Copilot Memory）；模型（自动选模型、自带 key、LTS 模型）；计费与用量；安全、治理与企业策略 — [GitHub Copilot docs](https://docs.github.com/en/copilot)
- 原 “Copilot coding agent” 在当前文档中改称 “Copilot cloud agent”；“premium requests” 只出现在旧版按请求计费的文章里（命名变化，已核实导航，未核实变更日期） — [GitHub Copilot docs](https://docs.github.com/en/copilot)
- How-tos 包含 agent mode、plan mode、subagents、Copilot CLI、Copilot app、SDK、sandboxing、content exclusion、预算（budgets）、故障排查 — [GitHub Copilot docs](https://docs.github.com/en/copilot)
- Tutorials 包含 “Copilot cookbook”（重构、测试、安全、调试）、自定义资源库（custom instructions、prompt files、custom agents）、cloud agent 与 code review 工作流、企业推广与度量、vibe coding — [GitHub Copilot docs](https://docs.github.com/en/copilot)
- 官方 Best practices 页面的顺序：先了解 Copilot 的强项和弱项（并强调责任仍在开发者）→ 为任务选对工具（补全 vs Chat）→ 写好 prompt（拆小、具体、给示例）→ 检查输出（理解代码，审查正确性、安全、可读性；用 linter、code scanning）→ 引导输出（管理打开的文件、清理对话历史、新开对话）→ 跟进 changelog — [Copilot best practices](https://docs.github.com/en/copilot/get-started/best-practices)（已核实）

**GitHub Skills（github.com/skills）— 已核实**
- 置顶的 Copilot 课程顺序：Getting started with GitHub Copilot → Integrate MCP with Copilot → Expand your team with Copilot（cloud agent 处理 issue）→ Customize your GitHub Copilot experience（custom instructions、prompts、chat modes） — [GitHub Skills](https://github.com/skills)
- 其他 Copilot 相关课程：idea-to-merge-with-the-copilot-app、build-applications-w-copilot-agent-mode、test-and-debug-with-github-copilot — [GitHub Skills](https://github.com/skills)
- “Expand your team with Copilot” 的五步：在仓库启用 cloud agent → 把 issue 指派给 Copilot 并跟踪进度 → 审查 agent 的工作并给反馈 → 定制 agent 的工作环境 → 并行委派多个任务；前置要求是 Copilot Pro 及以上订阅，并先完成两门前置练习 — [expand-your-team-with-copilot](https://github.com/skills/expand-your-team-with-copilot)

**Microsoft Learn — 部分核实**
- 单个模块 “Building applications with GitHub Copilot agent mode”：中级，在 Codespace 中用 VS Code，用 agent mode 构建应用，并用文档文件引导 agent（来自搜索摘要，待实测/二手） — [MS Learn module](https://learn.microsoft.com/en-us/training/modules/github-copilot-agent-mode)
- Microsoft 的 “Mastering GitHub Copilot” 是放在 GitHub 上的多模块课程，约 10 小时，已加入 Agent Mode（二手） — [Microsoft Source event page](https://www.microsoft.com/en-us/thesource-developer/Event/574/microsoftmastering-github-copilot-for-paired-programming-a-multi-module-course-teaching-everything)
- MS Learn 上的 “Copilot Foundations” 路径讲的是 Copilot Studio agent，和 GitHub Copilot 无关，不要混淆（二手） — [Copilot Foundations](https://learn.microsoft.com/training/paths/copilot-foundations)

**Google：Gemini CLI 文档 — 已核实（导航层面）**
- 文档顺序：安装 → Get started（quickstart、认证、cheatsheet）→ Use Gemini CLI（按任务的教程：文件管理、agent skills、memory 与上下文、shell 命令、sessions、用 todos 做任务规划、web 工具、MCP 设置、自动化）→ Features（extensions、skills、checkpointing、headless、hooks、IDE 集成、MCP、模型路由与选择、plan mode、subagents、rewind、sandboxing、telemetry、token caching）→ Configuration（自定义命令、企业控制、`.geminiignore`、GEMINI.md、system prompt 覆盖、trusted folders）→ Reference（含 policy engine）→ Resources（配额与价格、troubleshooting） — [Gemini CLI docs index](https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md)
- **重要时效变化**：2026-05-19 Google 宣布 Gemini CLI 并入 Antigravity CLI（Go 实现，与 Antigravity 2.0 桌面端共用 agent harness）。2026-06-18 起，对 AI Pro/Ultra 订阅用户和免费个人用户停止服务；企业 Code Assist 许可和付费 API key 用户仍可用。Agent Skills、Hooks、Subagents、Extensions 会延续（Extensions 改称 Antigravity plugins），但发布时不保证功能一一对应。公告没有提到 GEMINI.md / AGENTS.md 是否延续 — [Google Developers Blog](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)（已核实）
- 二手报道称 Antigravity CLI 不开源，并引发开发者不满（待核实） — [The New Stack](https://thenewstack.io/gemini-cli-antigravity-replacement/)；[Virtualization Review](https://virtualizationreview.com/articles/2026/05/19/google-moves-gemini-cli-into-antigravity-cli-as-agent-platform-expands.aspx)

**Google：Jules 文档 — 已核实（导航层面，页面无日期）**
- 文档顺序：Getting started（登录、连接 GitHub、第一个任务、AGENTS.md、通知）→ Environment setup → Running tasks → Scheduled tasks → Suggested tasks → Planning（在改代码前审查计划并反馈）→ Reviewing code → 管理任务与仓库 → Repo view → Errors and failures → Usage and limits → FAQ；另有 REST API、Jules Tools（CLI）、Integrations、“continuous AI” 指南 — [Jules docs](https://jules.google/docs)
- Jules 会读取仓库根目录的 AGENTS.md，并建议保持更新 — [Jules docs](https://jules.google/docs)

**Cursor：cursor.com/learn — 已核实（课次列表和两节正文）**
- 课程定位：先讲 AI 模型的工作原理、类型和局限，再讲用 AI 工具做软件的实践模式；示例用 Cursor，但声明模式通用；不讲机器学习训练 — [Cursor Learn](https://cursor.com/learn)
- 课次顺序（从页面 HTML 按出现顺序提取）：how-ai-models-work → hallucination-limitations → tokens-pricing → context → tool-calling → agents → working-with-agents → understanding-your-codebase → creating-features → finding-fixing-bugs → reviewing-testing → customizing-agents → putting-it-together — [Cursor Learn](https://cursor.com/learn)
- customizing-agents 一课：Rules（`.cursor/rules/`，每次对话都加载，适合构建/测试命令、约定、规范示例、护栏）；Skills（`SKILL.md`，按需加载，适合部署、开 PR 等专门流程，可用 `/` 调用）；MCP（Slack、Sentry、数据库、Figma 等）；`gh`、`docker` 等 CLI 工具不需要额外配置。建议：规则从少写起，agent 重复犯同一个错时再加；风格交给 linter，不要把整份风格指南写进规则；规则和 skills 提交到 git 让团队共用 — [Cursor Learn: customizing agents](https://cursor.com/learn/customizing-agents)
- reviewing-testing 一课：agent 写的代码和手写代码用同一合并标准；边做边看 diff，用 agent 审整个分支的 diff；把提交历史整理成小而有语义的提交；Agent Review 和 Bugbot（在 PR 上审查逻辑错误、竞态、安全问题）；用测试、类型检查、lint 作为 agent 能自查的“可验证目标”；让 agent 补集成、e2e 和回归测试；cloud agent 在远程沙箱运行并开 PR；加快测试、类型检查和 CI 的速度，因为每次 agent 会话都要跑；提醒“测试通过 ≠ 正确”，agent 可能只覆盖 happy path — [Cursor Learn: reviewing & testing](https://cursor.com/learn/reviewing-testing)

**Cursor：docs — 待实测/二手（导航摘要中有可疑条目）**
- 抓取摘要显示的 docs 分区：Get Started（models & pricing）、Agent（plan mode、debug mode、design mode、worktrees、security 与运行模式等）、Customizing（rules、skills、subagents、hooks、MCP、plugins）、Cloud agents（setup、best practices、automations、API）、Bugbot / security agents、CLI（headless、GitHub Actions、ACP）、Integrations（Slack、Linear、Jira、GitHub 等）、SDK、企业账户。摘要里还有 “grok-bot”“Origin”“ClonePak CI” 等名称，无法判断是真实产品还是抓取或摘要出错，**不要引用，需人工打开核实** — [cursor.com/llms.txt](https://cursor.com/llms.txt)
- 官方 workshop “Cursor 101”：讲索引代码库的上下文引擎、上下文管理与多仓库、Agents 与 Plan Mode、Cursor CLI（二手，来自搜索摘要） — [Cursor 101 workshop](https://cursor.com/workshops/recording/cursor-101)

**DeepLearning.AI 短课 — 已核实**
- 目录中编程相关课程：Claude Code: A Highly Agentic Coding Assistant（Anthropic，中级，2h）；AI Coding Workflows: From Cloud to Local（JetBrains，中级）；Spec-Driven Development with Coding Agents（JetBrains，初级）；另有 Build with Andrew、AI Python for Beginners、Generative AI for Software Development 证书。目录中**没有**以 Codex、Copilot 或 Cursor 为主题的课程 — [DeepLearning.AI courses](https://www.deeplearning.ai/courses/?courses_date_desc%5Bquery%5D=coding)
- Claude Code 课（Elie Schoppik，Anthropic；页面显示 2026-08-17 更新）课次：是什么 → 环境设置与理解代码库 → 加功能 → 测试、调试与重构 → 并行开发多个功能 → GitHub 集成与 Hooks → 重构 Jupyter notebook 并做 dashboard → 根据 Figma 稿做 Web 应用；用 MCP 接 Playwright 和 Figma；三个项目（RAG chatbot 代码库、电商 notebook → dashboard、Figma → web app） — [DLAI Claude Code](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/)
- Spec-Driven Development with Coding Agents（Paul Everitt，JetBrains；2026-04-18 更新）课次：为什么要 SDD → 工作流总览 → 写 constitution → feature spec → 实现 → 验证 → 项目重新规划 → 第二阶段功能 → MVP → 遗留代码（legacy）→ 构建自己的工作流（打包成可复用的 agent skill）→ agent 可替换性。明确把 SDD 定位为超越 vibe coding 的做法 — [DLAI SDD](https://www.deeplearning.ai/short-courses/spec-driven-development-with-coding-agents/)
- AI Coding Workflows: From Cloud to Local（Paul Everitt，JetBrains；2026-09-18 更新）：Claude Code 基线 → subagents → 用更便宜模型的 subagents → 在 OpenCode 中重复一遍 → LM Studio 本地模型 → 专用 subagent → 完全本地；比较不同组合的成本、速度和用量；附录有评估指标 — [DLAI AI Coding Workflows](https://www.deeplearning.ai/short-courses/ai-coding-workflows-from-cloud-to-local/)
- Gemini CLI: Code & Create with an Open-Source Agent（Jack Wotherspoon，Google；2026-01 上线，2026-07-17 更新，并补了一篇关于对免费/Pro/Ultra 用户弃用的阅读材料）课次：是什么 → 产品导览 → GEMINI.md 上下文 → MCP 工作流 → Extensions → 用于软件开发 → 数据分析 → 内容创作 → 学习；项目里包含 GitHub Actions 代码审查工作流 — [DLAI Gemini CLI](https://www.deeplearning.ai/short-courses/gemini-cli-code-and-create-with-an-open-source-agent/)

### Inferences
- 出现在 3 家及以上来源（强信号）的主题：
  - 项目说明文件：Copilot custom instructions、Gemini CLI 的 GEMINI.md、Jules 的 AGENTS.md、Cursor rules、DLAI 的 Claude Code / Gemini CLI 课。
  - MCP：Copilot、GitHub Skills、Gemini CLI、Cursor、DLAI 两门课。
  - Skills / 扩展 / 插件：Copilot、Gemini CLI / Antigravity、Cursor、DLAI SDD 课把工作流打包成 skill。
  - Plan mode / 先计划后执行：Copilot、Gemini CLI、Jules、Cursor、DLAI SDD。
  - 云端 / 后台 agent 处理 issue 并出 PR：Copilot cloud agent、GitHub Skills、Jules、Cursor cloud agents。
  - AI 代码审查：Copilot code review、Cursor Bugbot / Agent Review、DLAI Gemini CLI 课的 GitHub Actions 审查、Jules “Reviewing code”。
  - 测试与验证：Copilot best practices、GitHub Skills test-and-debug、Cursor reviewing-testing、DLAI Claude Code 与 SDD 课。
  - 调试：Copilot cookbook、GitHub Skills、Cursor finding-fixing-bugs、DLAI Claude Code。
  - 读懂陌生代码库：Cursor understanding-your-codebase、DLAI Claude Code、DLAI SDD 的 legacy 课。
  - 模型选择与成本 / token：Copilot 模型与计费、Gemini CLI 模型路由与 token caching、Cursor tokens-pricing、DLAI cloud-to-local。
  - Hooks / subagents：Copilot、Gemini CLI、Cursor、DLAI 的 Claude Code 与 cloud-to-local 两门课。
  - 安全 / 沙箱 / 权限：Copilot、Gemini CLI（sandboxing、trusted folders、policy engine）、Cursor（security 与运行模式）。
- “AGENTS.md” 已成为跨厂商约定（Jules、Codex 都使用），“项目说明文件”这一主题可以和工具名解耦来讲。

### Gaps
- Microsoft Learn 当前完整的 GitHub Copilot 学习路径列表没有拿到（浏览页只返回壳页面）。
- Cursor docs 的完整导航存在可疑条目，需要人工打开 cursor.com/docs 核对。
- Antigravity CLI 自己的文档和课程结构没有调研；Google developers 课程站（developers.google.com）上的相关课程未找到。
- DeepLearning.AI 没有找到与 OpenAI 合作的 Codex 编程课；搜到的 Codex 课程都是第三方（Udemy、O'Reilly、Inflearn），没有纳入。

## 2. 面向初学者的学习顺序是怎样的？

### Takeaway
各家的初学者路线可以归纳为：先建立对模型的认知（原理、幻觉、token/成本）→ 上下文与工具调用 → agent 基本用法 → 读代码库 → 做功能 → 调试 → 审查与测试 → 定制（rules/skills/MCP）→ 综合项目。工具型课程（DLAI、GitHub Skills）则是：上手 → 说明文件/上下文 → MCP/扩展 → 场景应用 → 自动化/云端协作。“定制”（rules、skills）普遍放在后半程，不是第一课。

### Cited Findings
- Cursor Learn：概念先行（模型原理 → 幻觉与局限 → token 与价格 → 上下文 → 工具调用 → agents），再进入工作流（与 agent 协作 → 理解代码库 → 做功能 → 找 bug 修 bug → 审查与测试 → 定制 agent → 综合案例） — [Cursor Learn](https://cursor.com/learn)（已核实）
- GitHub Skills 置顶路线：入门 → MCP → cloud agent 接 issue → 定制（instructions、prompts、chat modes）；“Expand your team” 要求先完成两门前置练习 — [GitHub Skills](https://github.com/skills)；[expand-your-team](https://github.com/skills/expand-your-team-with-copilot)（已核实）
- Copilot best practices：先讲强项、弱项和责任，再讲选工具、写 prompt、检查输出、管理上下文 — [Copilot best practices](https://docs.github.com/en/copilot/get-started/best-practices)（已核实）
- DLAI Gemini CLI（初级）：导览 → GEMINI.md → MCP → Extensions → 按场景应用 — [DLAI Gemini CLI](https://www.deeplearning.ai/short-courses/gemini-cli-code-and-create-with-an-open-source-agent/)（已核实）
- DLAI Claude Code（中级）：先理解代码库，再加功能，然后测试、调试、重构，再并行开发、GitHub 集成与 hooks，最后两个综合项目 — [DLAI Claude Code](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/)（已核实）
- DLAI SDD（初级）：先讲动机（为什么不止于 vibe coding），再按 constitution → spec → 实现 → 验证 → 重新规划 → 遗留代码 → 打包成 skill 的顺序展开 — [DLAI SDD](https://www.deeplearning.ai/short-courses/spec-driven-development-with-coding-agents/)（已核实）
- Gemini CLI 文档：按任务组织的教程（文件、memory/上下文、shell、sessions、todos 规划、MCP、自动化）放在功能参考之前 — [Gemini CLI docs](https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md)（已核实）

### Inferences
- 对本课程（Prompt → Vibe Coding → SDD → Harness）而言，Cursor Learn 的“模型局限 / token 成本”前置，以及 DLAI Claude Code 的“先读懂代码库再改”，是最值得对照的两个顺序安排。
- DLAI SDD 课的结构（constitution → spec → 验证 → 重新规划 → legacy → 打包成 skill → agent 可替换性）和本课程从 SDD 到 Harness 的过渡高度相似，可以作为外部佐证。不过它的项目是从零开始的 MVP 加 legacy 改造，本课程的项目二是在开源仓库里加功能，切入角度不同。

### Gaps
- 没有任何来源公开说明其顺序经过教学效果验证。
- Cursor Learn 每节正文只读了两节，其余课次的内容只知道标题。

## 3. 哪些内容是“Prompt → SDD → Harness”课程可能遗漏的？

### Takeaway
相对本课程主线，外部课程中有一批重复出现、且可能需要补点的主题：issue → PR 的云端/后台 agent 与并行委派；AI 代码审查（Bugbot、Copilot code review、GitHub Actions 审查）与 CI 集成；模型选择与 token 成本、本地/更便宜模型；读懂陌生代码库；调试流程；重构；提交历史整理；团队共享配置；安全（沙箱、权限、content exclusion、trusted folders）；以及评估指标与度量。这些是否算“遗漏”，需对照内部大纲逐条确认。

### Cited Findings
- **issue → PR 云端 agent 与并行委派**：GitHub Skills 有专门课程（指派 issue、审查、定制环境、并行委派）；Jules 有定时任务、建议任务、计划审查和代码审查；Cursor cloud agents 在远程沙箱中跑完后开 PR — [expand-your-team](https://github.com/skills/expand-your-team-with-copilot)；[Jules docs](https://jules.google/docs)；[Cursor reviewing-testing](https://cursor.com/learn/reviewing-testing)（已核实）
- **AI 代码审查 / CI**：Copilot 有 code review 概念页和工作流教程；Cursor Bugbot 在 push 时审查 PR；DLAI Gemini CLI 课做了 GitHub Actions 代码审查；Cursor CLI 有 headless / GitHub Actions 页面（后者为二手） — [Copilot docs](https://docs.github.com/en/copilot)；[Cursor reviewing-testing](https://cursor.com/learn/reviewing-testing)；[DLAI Gemini CLI](https://www.deeplearning.ai/short-courses/gemini-cli-code-and-create-with-an-open-source-agent/)；[cursor.com/llms.txt](https://cursor.com/llms.txt)
- **成本、token、模型选择**：Cursor Learn 第 3 课就是 tokens & pricing；DLAI 有整门课比较云端、混合、本地和更便宜 subagent 的成本与速度；Copilot 有 auto model selection、BYOK 和预算；Gemini CLI 有模型路由和 token caching — [Cursor Learn](https://cursor.com/learn)；[DLAI cloud-to-local](https://www.deeplearning.ai/short-courses/ai-coding-workflows-from-cloud-to-local/)；[Copilot docs](https://docs.github.com/en/copilot)；[Gemini CLI docs](https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md)（已核实）
- **读懂陌生代码库 / legacy**：Cursor understanding-your-codebase；DLAI Claude Code 的“Setup & Codebase Understanding”；DLAI SDD 的 “Legacy support” — [Cursor Learn](https://cursor.com/learn)；[DLAI Claude Code](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/)；[DLAI SDD](https://www.deeplearning.ai/short-courses/spec-driven-development-with-coding-agents/)（已核实）
- **调试与重构**：Copilot cookbook（重构、测试、安全、调试）；GitHub Skills test-and-debug；Cursor finding-fixing-bugs；DLAI Claude Code 的测试、调试与重构课 — [Copilot docs](https://docs.github.com/en/copilot)；[GitHub Skills](https://github.com/skills)；[Cursor Learn](https://cursor.com/learn)；[DLAI Claude Code](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/)（已核实）
- **提交整理与人工评审友好度**：Cursor 建议让 agent 把历史整理成小而有语义的提交，并把这个流程做成 skill — [Cursor reviewing-testing](https://cursor.com/learn/reviewing-testing)（已核实）
- **反馈循环速度**：Cursor 强调测试、类型检查和 CI 慢会在每次 agent 会话里被放大，值得投入去加速 — [Cursor reviewing-testing](https://cursor.com/learn/reviewing-testing)（已核实）
- **团队共享与采用**：Cursor 建议把 rules/skills 提交进 git；Copilot 有企业推广与度量教程、使用指标参考 — [Cursor customizing-agents](https://cursor.com/learn/customizing-agents)；[Copilot docs](https://docs.github.com/en/copilot)（已核实，导航层面）
- **安全与边界**：Copilot 有 content exclusion、sandboxing、firewall、responsible use；Gemini CLI 有 sandboxing、trusted folders、policy engine、`.geminiignore` — [Copilot docs](https://docs.github.com/en/copilot)；[Gemini CLI docs](https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md)（已核实，导航层面）
- **会话管理 / 回退**：Gemini CLI 有 checkpointing、rewind、sessions；Copilot best practices 建议清理历史或新开对话 — [Gemini CLI docs](https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md)；[Copilot best practices](https://docs.github.com/en/copilot/get-started/best-practices)（已核实）
- **多模态 / 设计稿转代码**：DLAI Claude Code 课用 Figma MCP 从设计稿做 Web 应用，用 Playwright MCP 做浏览器验证 — [DLAI Claude Code](https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/)（已核实）
- **agent 可替换性 / 跨工具迁移**：DLAI SDD 课专门有 “Agent replaceability”；cloud-to-local 课在 Claude Code 和 OpenCode 之间迁移同一套流程 — [DLAI SDD](https://www.deeplearning.ai/short-courses/spec-driven-development-with-coding-agents/)；[DLAI cloud-to-local](https://www.deeplearning.ai/short-courses/ai-coding-workflows-from-cloud-to-local/)（已核实）
- **评估**：DLAI cloud-to-local 附有 “Evaluation Metrics” 阅读材料；Copilot 有使用度量参考（具体内容未读） — [DLAI cloud-to-local](https://www.deeplearning.ai/short-courses/ai-coding-workflows-from-cloud-to-local/)；[Copilot docs](https://docs.github.com/en/copilot)（待实测/二手：正文未读）

### Inferences
- 对本课程最可能的缺口（按跨来源强度排序，需对照内部大纲确认）：
  1. 云端 / 后台 agent 的 issue → PR 流程与并行委派（4 家都有）。
  2. AI 代码审查与 CI 集成（4 家）。
  3. 模型选择与 token 成本意识（4 家；Cursor 放在第 3 课这么靠前）。
  4. 读懂陌生代码库与调试流程（项目二要在开源仓库里改代码，天然契合）。
  5. 安全边界：沙箱、权限、敏感文件排除（3 家）。
  6. 跨工具 / agent 可替换性：本课程以 Codex 为主，可以把 AGENTS.md 讲成跨工具约定。
- 本课程的 Harness 层（项目三：给 dependency-cruiser 做 harness）在外部材料中最接近的是 hooks、skills、反馈循环速度和“可验证目标”，但没有哪家把它作为独立的一层来教。这一层是本课程的差异点。

### Gaps
- 未逐条对照本仓库的内部大纲（`docs/outline/course-outline-internal.md`），“遗漏”的判断需由讲师或综合报告完成。
- 团队采用与度量、评估方法只看到导航标题，没有读正文。

## 4. 哪些主题出现在 3 个及以上来源？（强信号汇总）

### Takeaway
强信号（≥3 家）：项目说明文件、上下文管理、MCP、Skills/扩展、plan mode、云端 agent 出 PR、AI 代码审查、测试验证、调试、读代码库、模型与成本、hooks/subagents、安全沙箱。弱信号（1–2 家）：提交整理、多模态设计稿转代码、完全本地模型、agent 可替换性、定时/建议任务、checkpoint/rewind。

### Cited Findings
- 汇总表（✓ = 在该来源的导航或课次中看到；来源见上文各节）：

| 主题 | Copilot docs/Skills | Gemini CLI/Jules | Cursor docs/learn | DLAI 短课 |
| --- | --- | --- | --- | --- |
| 项目说明文件（instructions / GEMINI.md / AGENTS.md / rules） | ✓ | ✓ | ✓ | ✓ |
| 上下文管理 | ✓ | ✓ | ✓ | ✓ |
| MCP | ✓ | ✓ | ✓ | ✓ |
| Skills / 扩展 / 插件 | ✓ | ✓ | ✓ | ✓ |
| Plan mode / 先审计划 | ✓ | ✓ | ✓ | ✓（SDD） |
| 云端 agent：issue → PR | ✓ | ✓（Jules） | ✓ | — |
| AI 代码审查 | ✓ | ✓（Jules 审查；DLAI 课的 Actions 审查） | ✓ | ✓ |
| 测试与验证 | ✓ | — | ✓ | ✓ |
| 调试 | ✓ | — | ✓ | ✓ |
| 读懂代码库 / legacy | — | — | ✓ | ✓ |
| 模型选择 / token 成本 | ✓ | ✓ | ✓ | ✓ |
| Hooks / subagents | ✓ | ✓ | ✓ | ✓ |
| 安全 / 沙箱 / 权限 | ✓ | ✓ | ✓ | — |
| Headless / CI 自动化 | ✓（CLI automation） | ✓ | ✓（二手） | ✓ |

— 来源：[Copilot docs](https://docs.github.com/en/copilot)；[GitHub Skills](https://github.com/skills)；[Gemini CLI docs](https://github.com/google-gemini/gemini-cli/blob/main/docs/index.md)；[Jules docs](https://jules.google/docs)；[Cursor Learn](https://cursor.com/learn)；[cursor.com/llms.txt](https://cursor.com/llms.txt)；[DLAI courses](https://www.deeplearning.ai/courses/?courses_date_desc%5Bquery%5D=coding)

### Inferences
- 表中“—”只表示本次没有找到，不代表该厂商没有。
- 产品名称和形态变动很快（Copilot coding agent 改称 cloud agent；Gemini CLI 并入 Antigravity CLI）。课程讲概念时宜用通用名（项目说明文件、云端 agent、MCP），产品名只作为例子，并标注核实日期。

### Gaps
- “读懂代码库”“调试”在 Copilot / Gemini 文档中可能存在于更深层的教程里，本次没有深入。
- 没有取得任何来源的学员完成率或效果数据。
