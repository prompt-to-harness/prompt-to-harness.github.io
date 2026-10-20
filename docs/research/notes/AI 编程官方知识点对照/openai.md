# OpenAI 官方如何教 AI 编程（Codex 与 coding agent），截至 2026-10

> 调研日期：2026-10-20。标记说明：**已核实** = 本次抓取并阅读了该页面（经抓取工具摘要，非逐字通读）；**待实测/二手** = 只看到搜索摘要、第三方转述，或页面无法打开。
> 站点说明：`developers.openai.com/codex/...` 的文档目前 308 永久重定向到 `learn.chatgpt.com`（已核实，抓取 best-practices.md 时观察到重定向），Codex 文档已并入 ChatGPT 文档站。多数页面没有标注发布日期或更新日期。
> 所有内容均为转述；产品名、命令、配置键保持原文。文中出现的模型名（Luna / Sol / Astra 等）以页面所写为准，各页面写法不一致，详见文末缺口。

## 问题一：Codex 文档与指南覆盖哪些主题？哪些被视为入门最重要？

### Takeaway
官方 Best practices 指南给出的是一条明确的“上手顺序”：先把 prompt 和上下文写对（目标/上下文/约束/完成条件）→ 难任务先 Plan → 把长期规则沉淀到 AGENTS.md → 配置（模型、推理强度、sandbox、approval）→ 让 agent 自己测试与审查 → MCP 接外部上下文 → 把重复工作做成 skills → 再自动化（定时任务）→ 管理长会话/子 agent。文档目录还覆盖 hooks、subagents、worktrees、`codex exec` 非交互模式、Cloud、Code review、SDK、GitHub Action、memories 等。

### Cited Findings
- **文档全景（已核实）**：文档索引列出的 Codex 相关分组包括 Agent approvals & security、AGENTS.md、Rules、Speed、Subagents、App Server、Automations（Scheduled tasks）、Build plugins / Build skills、CLI 与 slash commands、Cloud、Code review、Codex SDK、Config 文件（basic/advanced/reference/sample）、Custom Prompts、Memories、Cyber Safety、Environments（cloud/local/worktrees）、MCP、Feature Maturity、GitHub Action、Glossary、Hooks、IDE extension、Import from another agent、Long-running work、Model selection、Non-interactive mode、Permission modes、Plugins、Prompting、Quickstart、Sandboxing（含 Auto-review）、Codex Security（独立安全扫描产品）、Third Party（GitHub/GitLab PR 审查、Slack、Linear）、Windows sandbox/WSL — [learn.chatgpt.com/llms.txt](https://learn.chatgpt.com/llms.txt)
- **Best practices 的总框架（已核实）**：把 Codex 当作需要“配置并持续改进的队友”，而不是一次性助手；核心工作流顺序是 上下文 → AGENTS.md → 配置 → MCP → skills → 自动化。覆盖 CLI、IDE 扩展、桌面 app — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **第 1 步：Prompt 四要素（已核实）**：goal、context（相关文件/文档/报错，可 @ 引用文件）、constraints（规范与约定）、“done when”完成条件（如测试通过）。同时要求选择推理强度：简单、范围明确的任务用 Low，复杂改动或调试用 Medium/High，长时间重推理任务用 Extra High — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **第 2 步：难任务先计划（已核实）**：用 Plan mode（`/plan` 或 Shift+Tab）；想法模糊时让 Codex 反过来“采访”你，把它变成具体 spec；多步长任务用 `PLANS.md` / execution-plan 模板 — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **第 3 步：AGENTS.md（已核实）**：开放格式、自动加载的“给 agent 看的 README”；写仓库结构、build/test/lint 命令、约定、禁止事项、“完成”的定义；`/init` 生成初稿后要自己改；分层（全局 `~/.codex`、仓库、子目录，越近越优先）；保持简短，只在 agent 反复犯同一个错时才加规则，同一错误出现两次就让 Codex 做复盘 — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **AGENTS.md 加载机制（已核实）**：每次会话开始时构建一次指令链；全局层只取一个文件（`AGENTS.override.md` 优先于 `AGENTS.md`）；项目层从 Git 根逐级走到当前目录，每层最多一个文件；合并后超过 `project_doc_max_bytes`（默认 32 KiB）会被截断；可用 `project_doc_fallback_filenames` 指定其他文件名；验证方法是让 Codex 复述它读到的指令，指令“过期”时重启即可（无缓存） — [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md.md)
- **第 4 步：配置一致性（已核实）**：在 `~/.codex/config.toml`（个人）和 `.codex/config.toml`（仓库）设默认模型、推理强度、sandbox、approval、profiles、MCP；先收紧 approval 与 sandbox，只对可信仓库放宽；尽早检查工作目录、写权限、模型默认值和工具连接，文中认为很多“质量问题其实是配置问题” — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **第 5 步：测试与审查（已核实）**：让 Codex 写/更新测试、跑相关检查（测试、lint、格式化、类型检查）、确认行为、审查自己的 diff；用 `/review`（对比基线分支、未提交改动、单个 commit）；可在 AGENTS.md 中引用 `code_review.md` 统一审查标准；页面称 OpenAI 内部 100% 的 PR 由 Codex 审查（这是 OpenAI 自述，未独立验证） — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **第 6 步：MCP（已核实）**：当上下文在仓库之外、经常变化、或应该来自工具而不是手工粘贴时用 MCP；支持 STDIO 与 Streamable HTTP（含 OAuth）；`codex mcp add`；建议先只接一两个能消除重复手工环节的工具 — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **第 7 步：Skills（已核实）**：用 `SKILL.md` 打包可重复的指令与脚本；一个 skill 只做一件事，写清输入输出与“何时使用”的 description；先拿一个代表性任务做，脚本只在能提高可靠性时才加；`$skill-creator` 脚手架；个人放 `$HOME/.agents/skills`，团队放仓库内 `.agents/skills`；需要广泛分享时打包成 plugin — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **Skills / Plugins / MCP / Hooks 的区分（已核实）**：skill = 针对某个任务的指令和资源包，可自动匹配触发或用 `$` 显式调用；plugin = 可安装的捆绑包，可含 skills、MCP server、hooks；MCP server 暴露工具与上下文。该页未讨论第三方 skill/plugin 的安全风险 — [Skills & Plugins](https://learn.chatgpt.com/docs/skills-and-plugins.md)
- **第 8 步：定时任务（已核实）**：skills 定义“方法”，schedule 定义“时机”；先手动把流程跑稳定再排期；可在独立 Git worktree 中运行 — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **第 9 步：会话组织（已核实）**：一个连贯工作单元一个会话；真正分叉时才 `/fork`；相关命令有 `/resume`、`/fork`、`/compact`、`/subagents`、`/status`；把探索、测试、分诊等有边界的工作交给 subagent，保持主线程干净 — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **官方列出的常见错误（已核实）**：长期规则写在 prompt 里而不是 AGENTS.md/skill；不告诉 agent 怎么 build 和 test；复杂任务跳过计划；没弄懂流程就给完整电脑权限；多个任务同时改同一批文件却不用 worktree；流程还不可靠就排定时任务；盯着 agent 一步步看而不是并行做别的；整个项目只用一个会话导致上下文膨胀 — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **Prompting 页（已核实）**：对 Codex 的建议是说清目标行为、指向相关代码或复现步骤、保留约束、说明如何验证改动；改代码前先 `/plan`，持久任务用 `/goal`；可以在运行中追加消息“steer”或排队下一条，而不是重开 — [Prompting](https://learn.chatgpt.com/docs/prompting.md)
- **长任务 / Goal mode（已核实）**：`/goal` 的文字同时是首个 prompt 和完成判据；好 goal 三要素 = outcome、constraints、verification（测试、度量或审查标准）；结果不清楚时先 `/plan` 再 `/goal`；开启 goal 不会扩大权限，仍受同一 sandbox/approval 约束；并行会话不要改同一批文件，用 git worktree 隔离 — [Long-running work](https://learn.chatgpt.com/docs/long-running-work.md)
- **Subagents（已核实）**：适合读多写少、可独立的工作（探索、跑测试、分诊、总结）；主要价值是把日志、堆栈等噪声挡在主线程之外，页面称这种问题为“context rot”；代价是更多 token；内置 `default`/`worker`/`explorer`，可在 `~/.codex/agents/` 或 `.codex/agents/` 用 TOML 自定义；子 agent 不能覆盖父会话的 sandbox 与 approval；“叫 agent 别改文件”不等于真正的只读 sandbox；并行写入易冲突，建议从只读并行开始 — [Subagents](https://learn.chatgpt.com/docs/agent-configuration/subagents.md)
- **Hooks（已核实）**：在 agent 循环的固定节点运行脚本或 MCP 工具，事件包括 `SessionStart`、`UserPromptSubmit`、`PreToolUse`、`PermissionRequest`、`PostToolUse`、`PreCompact`/`PostCompact`、`Stop` 等；用途如记日志、扫描 prompt 中的密钥、在回合结束时跑校验；可阻止或改写动作；官方提醒 tool hook 只是护栏，不是完整的强制边界；非托管 hook 需审查并信任（按定义哈希），改动后需重新信任 — [Hooks](https://learn.chatgpt.com/docs/hooks.md)
- **Code review（已核实）**：`/review` 启动独立审查者，只报告不改工作区；GitHub 上 `@codex review` 在云端跑；可开启自动审查；示例审查指令强调行为变化、数据丢失、缺失的边界测试；页面明确：Codex 的发现仍需人对照 diff、预期行为和测试核对，合并前检查最新版本与 CI — [Code review](https://learn.chatgpt.com/docs/code-review.md)
- **模型与推理强度（已核实）**：官方给出“模型 × 推理强度”的搭配表，原则是：先用推荐起点，同一输入跨模型和设置做对比测试，保留满足质量线的最轻配置；更高推理强度通常改进难题，但更慢、更耗资源 — [Model selection](https://learn.chatgpt.com/docs/model-selection.md)

### Inferences
- 官方把“入门最重要”的东西排在最前：prompt 四要素（尤其“done when”）、先计划、AGENTS.md、给 agent build/test 命令、先紧后松的权限。这和课程的 Prompt → Vibe Coding → SDD → Harness 主线高度吻合：Plan/interview → spec 对应 SDD，AGENTS.md/skills/hooks/MCP/subagents 对应 Harness。
- 官方反复出现、课程可能容易漏掉的“房间里的大象”候选：**git worktree 与并行会话隔离**、**推理强度/模型选择的成本权衡**、**会话粒度与上下文膨胀（context rot、`/compact`、`/fork`）**、**“先手动跑稳再自动化”**、**审查结果仍需人复核**、**用 `/review` 和 PR 审查做第二道关**。
- 官方常见错误清单可以直接用作课程的“反例清单”。

### Gaps
- Best practices、Prompting、Long-running work 等页面都没有发布或更新日期，无法确认是哪一版。
- 抓取 `learn.chatgpt.com/guides/best-practices.md`（重定向目标）返回 404，实际读到的是 `learn.chatgpt.com/docs/learn/best-practices`；两者是否同一版本未确认。
- `codex exec`/Non-interactive mode、Cloud environments、Worktrees、Memories、Rules 页面本次未逐页阅读，只从目录确认存在（待实测/二手）。

## 问题二：OpenAI Academy、Cookbook、工程博客要求开发者理解什么？

### Takeaway
OpenAI 自己的工程叙事是 “harness engineering”：人负责设计环境、表达意图、给结构化反馈，agent 负责执行；仓库内文档是唯一可信源，用 linter/结构测试机械地约束架构，用后台 agent 持续清理熵。Academy 的 Codex Bootcamp 给出 101/201/301 三级顺序：个人 agentic coding → 团队工作流 → 高级自动化。Cookbook 侧重计划（PLANS.md/ExecPlan、Goals）、迭代修复循环、harness 感知的评测。

### Cited Findings
- **Academy Codex Bootcamp（已核实，2026-09/10 直播系列）**：101 Agentic coding（9/23）= 任务划定范围、提供有效上下文、引导工作、审查代码改动；201 Team workflows（9/30）= 共享上下文、approvals、可复用 skills、工具连接、可重复的团队流程；301 Advanced automation（10/7）= subagents、权限、Codex SDK、面向生产的自动化模式 — [Codex Bootcamp](https://academy.openai.com/public/clubs/builders-etkn1/resources/codex-bootcamp-2026-09-23)
- **Academy 早期入门内容（待实测/二手，2026-03-18）**：有 “Codex 101: Introduction and Onboarding”，并列 Codex 102/103 资源；未打开阅读 — [Codex 101](https://academy.openai.com/public/clubs/builders-etkn1/resources/codex-101-introduction-and-onboarding-2026-03-18)；Academy 有 Codex 分类页 — [openai.com/academy/codex](https://openai.com/academy/codex/)
- **Cookbook Codex 主题条目（已核实列表，条目无日期）**：Harness-aware evaluation of plugins（直接工具测试、受控模型循环、Codex harness 三层评测 MCP 插件）；Iterating Development Workflows with Codex（仓库 harness、分阶段计划、审批关口、可复用 skills）；Build an Agent Improvement Loop with Traces, Evals, and Codex（反馈 → evals → harness 改动）；Build iterative repair loops with Codex（审查-修复-验证循环）；Using Goals in Codex（以证据核对的结果推动长任务）；Codex Prompting Guide；Modernizing your Codebase with Codex；Automating Code Quality and Security Fixes with Codex CLI on GitLab — [Cookbook: Codex topic](https://developers.openai.com/cookbook/topic/codex)
- **PLANS.md / ExecPlan（待实测/二手，2025-10-21）**：Cookbook 有 “Using PLANS.md for multi-hour problem solving”，Best practices 也链接执行计划指南；第三方称作者为 Aaron Friel，做法是在 AGENTS.md 中写明复杂功能要按 PLANS.md 写 ExecPlan — [搜索摘要指向的 Cookbook 主题页](https://developers.openai.com/cookbook/topic/codex)；第三方 [ExecPlan 解读](https://codex.danielvaughan.com/2026/04/19/the-execplan-pattern-structuring-long-codex-sessions-with-plans-md/)
- **Harness engineering 博文（待实测/二手，2026-02-11，Ryan Lopopolo）**：openai.com 原文本次返回 403 未能读取 — [Harness engineering](https://openai.com/index/harness-engineering/)。二手转述要点：
  - 团队约 5 个月做出内部 beta，人工手写代码为 0，应用逻辑、测试、CI、文档、可观测性都由 Codex 写；口号是人掌舵、agent 执行 — [InfoQ](https://www.infoq.com/news/2026/02/openai-harness-engineering-codex)
  - 结构化 `docs/` 目录（地图、执行计划、设计规格）作为 agent 的权威来源，交叉链接由 linter 和 CI 校验；固定分层依赖方向（Types → Config → Repo → Service → Runtime → UI），结构测试拦截越界；agent 开 PR、自审、复现 bug、迭代到满足标准；agent 通过日志、指标、span 观察并复现问题 — [InfoQ](https://www.infoq.com/news/2026/02/openai-harness-engineering-codex)
  - AGENTS.md 应当是“目录而不是百科全书”，约 100 行，指向 docs/；定期用后台 agent 做“垃圾回收”，清理过期文档和架构违规并把反复出现的错误固化成 lint 或测试；早期进展慢是因为环境定义不足（以上为第三方转述，InfoQ 版本称未提到 AGENTS.md，存在出入） — [codenote.net](https://codenote.net/en/posts/harness-engineering-ai-agent-era/)、[Orbital Witness](https://tech.orbitalwitness.com/posts/2026-07-22-grading-ourselves-against-the-harness-engineering-playbook/)
- **“How OpenAI uses Codex” 指南（待实测/二手）**：页面 403；搜索摘要称其建议大改动先用 Ask 模式出计划、任务以约一小时可完成的粒度为宜 — [How OpenAI uses Codex](https://openai.com/business/guides-and-resources/how-openai-uses-codex/)、[PDF](https://cdn.openai.com/pdf/6a2631dc-783e-479b-b1a4-af0cfbd38630/how-openai-uses-codex.pdf)
- **“Building an AI-Native Engineering Team” 指南（待实测/二手）**：文档索引中存在，抓取 404 — [索引](https://learn.chatgpt.com/llms.txt)

### Inferences
- OpenAI 自己把“评测（evals）+ trace”放进 coding-agent 工作流（Cookbook 有 3 条相关），这是面向初级开发者课程中常被忽略的一点：怎么判断 agent 配置/skill 改了之后是变好还是变坏。
- “把反复出现的错误固化成 lint/测试/结构测试”是 harness 的核心动作，比“写更多 AGENTS.md 规则”更受官方推崇（Best practices 也说 AGENTS.md 要短）。
- Academy 的 101→201→301 顺序（个人 → 团队 → 自动化）可作为课程第 7–9 章顺序的外部参照。

### Gaps
- Harness engineering 原文未能读到，具体措辞、是否提到 AGENTS.md 只能依赖二手，且二手来源之间不一致（InfoQ 说未提 AGENTS.md，其他博客说有）。建议讲师用浏览器亲自读原文核对。
- Bootcamp 是否有录播、具体讲了哪些演示，未能确认。
- 未找到 OpenAI 关于“coding agent evals”的独立工程博文（除 Cookbook 条目外）；GPT 最新模型的官方 prompting guide 本次未定位到。

## 问题三：安全与责任方面强调什么？

### Takeaway
官方安全叙事以“两层控制”展开：sandbox（技术上能做什么）+ approval policy（什么时候必须问人）。默认关网络、限写工作区，`.git`/`.codex`/`.agents` 等路径即使可写模式下也只读；prompt injection 被明确点名（网页结果视为不可信）；推荐用 git 分支、频繁提交、像审 PR 一样审 agent 的改动；危险全权限模式明确标注“不推荐”。

### Cited Findings
- **两层模型（已核实）**：sandbox mode 决定命令技术上能写哪里、能否联网；approval policy 决定何时停下来问；默认 `Auto` 预设 = `workspace-write` + `on-request`，在工作区内可读写和跑命令，越界写或联网要批准 — [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security.md)
- **默认值（已核实）**：默认关闭网络；受版本控制的目录推荐 Auto，未受版本控制的目录推荐 read-only；可能在你信任目录前以 read-only 启动；`/permissions` 切到只读用于聊天或规划；`/status` 查看工作区范围 — 同上
- **受保护路径（已核实）**：即使 `workspace-write`，`.git`、`.agents`、`.codex`、`.aws` 也递归只读 — 同上
- **Prompt injection（已核实）**：官方明确说 prompt injection 会让 agent 抓取并执行不可信指令，网页结果要当作不可信；web search 默认用 OpenAI 维护的缓存索引以降低暴露，开 `--yolo`/全权限时默认改为实时结果 — 同上
- **网络细则（已核实）**：`network_proxy` 只能收窄已开启的网络访问、本身不授予网络；本地/私有地址默认拦截；DNS 检查只降低不消除 rebinding 风险；代理不覆盖 web search、MCP、浏览器/Computer Use 等流量 — 同上
- **危险模式（已核实）**：`--sandbox danger-full-access` 或 `--dangerously-bypass-approvals-and-sandbox` 同时去掉 sandbox 与审批，官方标注不推荐；在容器里给全权限时，恶意项目可窃取容器内一切，包括 Codex 凭据 — 同上
- **旧配置迁移（已核实）**：`approval_policy = "untrusted"` 已退役，留在配置里可能导致无法启动；替代写法是在项目级设 `trust_level = "untrusted"` — 同上（注意：旧教程/旧截图可能仍使用 untrusted，属于过时信息）
- **自动审批审查（已核实）**：`approvals_reviewer = "auto_review"` 把需要审批的请求先交给审查 agent，检查数据外泄、凭据探测、持久削弱安全、破坏性操作，出错时默认拒绝 — 同上；另有独立页面 [Auto-review](https://learn.chatgpt.com/docs/sandboxing/auto-review.md)（未读）
- **异步安全监控（已核实）**：新模型在 Codex 中带异步安全监控，可能暂停任务；官方强调它不能替代 sandbox、权限和人工审阅结果 — [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security.md)
- **版本控制与审阅（已核实）**：用功能分支、委派前保持 `git status` 干净、频繁提交便于回滚、像审 PR 一样审 Codex 的改动 — 同上
- **Secrets（已核实）**：遥测默认关闭；prompt 和工具输出可能含源码与敏感数据，保持 `log_user_prompt = false`；hooks 不应返回密钥，hooks 可用于扫描 prompt 中的密钥 — [Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security.md)、[Hooks](https://learn.chatgpt.com/docs/hooks.md)
- **验证与测试（已核实）**：Best practices 第 5 步要求 agent 写测试、跑检查、自审 diff；Code review 页要求人复核发现；Goal 必须带 verification — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)、[Code review](https://learn.chatgpt.com/docs/code-review.md)、[Long-running work](https://learn.chatgpt.com/docs/long-running-work.md)
- **Codex Security（已核实存在，内容未读）**：独立的安全扫描产品，含 threat model、漏洞报告、修复与验证 findings 等页面 — [learn.chatgpt.com/llms.txt](https://learn.chatgpt.com/llms.txt)

### Inferences
- 对初级开发者，最值得讲的安全点是：sandbox 与 approval 是两件事；“告诉 agent 别做”不是安全边界（subagent 与 hooks 页面都这么提醒）；prompt injection 来自 agent 读到的外部内容；全权限模式只在可丢弃环境中用。
- 官方没有在 Best practices 中把“版权/许可证/责任归属”作为主题（本次未看到），课程若讲责任边界需另找依据。

### Gaps
- 未读到 Codex Cloud 当前版本如何处理 secrets 与网络（页面只说与 Legacy 不同），待实测。
- 未找到官方针对第三方 skills/plugins 供应链风险的专门说明（Skills & Plugins 页未涉及）。

## 问题四：有没有官方学习路径或课程（有序主题列表）？

### Takeaway
有三条可引用的“官方顺序”：(1) Best practices 的 9 步 + 常见错误；(2) Academy Codex Bootcamp 101/201/301；(3) Prompting / Long-running work 中的 plan → goal → verify 节奏。没有发现一份正式的、带考核的 Codex 学位式课程。

### Cited Findings
- **Best practices 顺序（已核实）**：1 上下文与 prompt → 2 难任务先计划 → 3 AGENTS.md → 4 配置一致性 → 5 测试与审查 → 6 MCP → 7 Skills → 8 定时任务 → 9 长会话组织（含 subagents）→ 常见错误 — [Best practices](https://learn.chatgpt.com/docs/learn/best-practices)
- **Academy Bootcamp 顺序（已核实）**：101 Agentic coding（范围、上下文、引导、审查）→ 201 Team workflows（共享上下文、approvals、skills、工具连接）→ 301 Advanced automation（subagents、权限、SDK、生产自动化） — [Codex Bootcamp](https://academy.openai.com/public/clubs/builders-etkn1/resources/codex-bootcamp-2026-09-23)
- **长任务节奏（已核实）**：`/plan`（采访、找约束、产出可度量的成功标准）→ `/goal`（outcome + constraints + verification）→ 运行中 steer / 状态回顾 → 并行用 worktree — [Long-running work](https://learn.chatgpt.com/docs/long-running-work.md)
- **Academy 旧版 Codex 101/102/103（待实测/二手，2026-03）** — [Codex 101](https://academy.openai.com/public/clubs/builders-etkn1/resources/codex-101-introduction-and-onboarding-2026-03-18)

### Inferences
- 三条顺序的共同骨架：先个人会用（prompt + 计划 + 验证）→ 再沉淀（AGENTS.md、skills）→ 再连接（MCP、团队共享）→ 最后自动化与规模化（subagents、定时任务、SDK、CI）。课程 9 章若与此对照，应检查是否覆盖“团队协作/共享配置”和“自动化前先手动稳定”两个环节。

### Gaps
- 文档中模型命名不一致：Best practices 写 “GPT-6 Luna / GPT-6 Astra”，Model selection 写 “Luna / GPT-6.1 Sol / Astra”，Subagents 写 `gpt-6.1-sol` / `gpt-6-luna`。课程中不要硬编码模型名，录制前再核对。
- 未确认 Academy 是否提供可自学的 Codex 录播或证书路径。
