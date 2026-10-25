# 第 2 章 Context 引入素材：来源笔记

> 2026-10-22 检索。每条写日期、作者、要点和核实状态。“已核实”指打开过原文（或原帖）并对过日期与要点；“二手”指只在转述里看到。引用原文的短语都不超过一句，正文用自己的话。

## 一、X 上的言论

### Karpathy 引用 Tobi Lütke：context engineering 比 prompt engineering 更准确（已核实）

- 原帖：[Karpathy, 2025-06-25](https://x.com/karpathy/status/1937902205765607626)，引用了 [Tobi Lütke, 2025-06-19](https://x.com/tobi/status/1935533422589399127)。未登录可以打开，截一张图就能同时看到两条。
- Tobi：这个词更能说明核心能力，即把任务需要的全部 context 提供给模型，让任务对 LLM 来说“有可能解得出来”。
- Karpathy：一说 prompt，大家想到的是日常随手打的一句短描述；工业级 LLM 应用里，真正的功夫是“为下一步往 context window 里填刚好合适的信息”。他列了任务说明、少样本、RAG、工具、状态与历史、压缩；太少模型做不好，太多或不相关则成本上升、表现下降。
- 后半段说 context engineering 只是协调 LLM 调用的一层“厚软件”的一部分，还要拆问题、选模型、做生成与验证的交互、护栏、安全、评测。这段可以给第 7 章 Harness 埋伏笔。
- 浏览量约 240 万（2026-10-22 页面显示）。
- 汇总转述：[Simon Willison, 2025-06-27](https://simonwillison.net/2025/Jun/27/context-engineering/)，嵌了这两条帖子，并链接他 2023 年那篇 [In defense of prompt engineering](https://simonwillison.net/2023/Feb/21/in-defense-of-prompt-engineering/)。

### “prompt engineering is dead”（只有二手）

- 这句口号在大量博客和营销文里出现，没有找到权威原始出处。常见的“Gartner 说 context engineering is in, prompt engineering is out”只见于转述，没找到 Gartner 原文。
- 原始说法都比口号温和：Tobi 和 Karpathy 说的是“这个词更好”；Anthropic 说 context engineering 是 prompt engineering 的自然延伸。

## 二、官方文章

### OpenAI：Unrolling the Codex agent loop（已核实，有官方中文版）

- [英文](https://openai.com/index/unrolling-the-codex-agent-loop/)、[中文《深入解析 Codex 智能体循环》](https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/)；Michael Bolin，2026-01-23。WebFetch 返回 403，用浏览器读了中文版全文。
- 智能体循环：用户输入拼成 prompt → 推理 → 要么回答，要么请求工具调用；工具结果追加到 prompt 再推理，直到模型给出助手消息。
- 一次请求的组成（Responses API 的三个参数）：
  - `instructions`：模型自带的基础指令（随 CLI 打包，例如 `gpt-5.2-codex_prompt.md`），或 `config.toml` 里的 `model_instructions_file`；
  - `tools`：内置 shell、`update_plan`、Responses API 提供的网页搜索、用户配置的 MCP 工具；
  - `input`，按顺序：① developer 消息，描述沙箱权限（只约束 Codex 自己的 shell 工具，MCP 工具不受沙箱约束）；② 可选的 `developer_instructions`；③ user 消息形式的“用户指令”，即 `~/.codex` 与项目根到当前目录的 `AGENTS.md`（合计默认上限 32 KiB），以及技能列表；④ `<environment_context>`（cwd、shell）；⑤ 用户这句话。
- 每发一条新消息，之前所有轮次的消息和工具调用都放进新请求；发送的 JSON 总量随对话呈二次增长。
- 旧 prompt 是新 prompt 的精确前缀，这是为了命中 prompt 缓存；命中后采样成本从二次降为线性。中途改工具列表、换模型、改沙箱或审批模式、改工作目录都会让缓存失效；配置变化尽量以追加新消息的方式处理。
- context window 同时算输入和输出；一轮里可能有几百次工具调用。超过 `auto_compact_limit` 后自动调用 `/responses/compact` 压缩，早期版本要手动 `/compact`。
- Codex 不用 `previous_response_id`，每次请求都是无状态的、带全量内容，原因之一是支持零数据保留（ZDR）。端点：ChatGPT 登录走 `chatgpt.com/backend-api/codex/responses`，API key 走 `api.openai.com/v1/responses`，`--oss` 走本地 `localhost:11434`。
- 文中有几张示意图：智能体循环、多轮后 prompt 变长、旧 prompt 作为前缀。

### OpenAI Codex 文档：AGENTS.md（已核实）

- [AGENTS.md 指南](https://developers.openai.com/codex/guides/agents-md)（现跳转到 learn.chatgpt.com）。
- 全局（`~/.codex`）只取一个文件；项目从 Git 根逐级走到当前目录，每层最多一个文件，越深越靠后、优先级越高；合计到 `project_doc_max_bytes`（默认 32 KiB）就停止。
- 指令链在启动时构建一次，**没有缓存**；改完要重启 Codex 或开新会话才生效。
- 与本章的关系：ch02.md 2.2 深入写了“`AGENTS.md` 在清空和压缩后重新进入”。这份文档只说启动时读，没有说压缩后怎样；按上面那篇文章，压缩替换的是 `input`，`AGENTS.md` 本身在 `input` 里，压缩后是否保留要实测。**待实测**。

### Anthropic：Effective context engineering for AI agents（已核实，课件已引用）

- [原文](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)，Applied AI 团队，2025-09-29。2.1 p16a 已经用它的定义。
- 两张图可用：“Prompt engineering vs. context engineering”对照图；系统提示词“合适高度”的光谱图（一端是写死的 if-else，一端是空泛的指引）。
- 要点：context 是边际收益递减的有限资源；context rot，注意力预算；尽量找最小的高信号 token 集合；just-in-time 检索（只留路径，需要时再读）；压缩；写笔记文件；子代理在干净的 context 里干活，只回一段 1000–2000 token 的摘要。

### Claude Code 文档（已核实，可用于 2.5 的“换一个工具看看”）

- [Best practices](https://code.claude.com/docs/en/best-practices)：开篇说大部分最佳实践都基于一个约束，context window 很快就会填满，越满表现越差。同一问题纠正两次以上，就 `/clear` 后带着学到的东西重写 prompt。
- [Explore the context window](https://code.claude.com/docs/en/context-window)：交互式时间线，演示一次会话从启动到压缩，context 里先装了什么、每读一个文件加多少、子代理怎样把大段读取挡在外面；附表列出压缩后哪些内容重新注入。能直接截图，是现成的“锚点图”另一个工具版本。

## 三、社区与研究

### Chroma：Context Rot（已核实）

- [技术报告](https://www.trychroma.com/research/context-rot)，Kelly Hong、Anton Troynikov、Jeff Huber，2025-07-14；测 18 个模型。
- 结论：即使任务很简单，输入变长后表现也不均匀、越来越不可靠；相关但不对的“干扰项”伤害更大；只给相关片段的版本稳定好于给全量对话的版本（LongMemEval）。
- 可用图：首页的 hero plot（几个主流模型在“重复词”任务上随长度下降）、LongMemEval 的“聚焦 vs 全量”对比。

### Manus：Context Engineering for AI Agents: Lessons from Building Manus（已核实）

- [原文](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)，季逸超（Yichao "Peak" Ji），2025-07-18。作者是中文社区熟悉的人，适合中国学员。
- 六条经验：围绕 KV 缓存设计（他们的输入输出 token 比约 100:1，缓存命中的输入价格约为未命中的十分之一，前缀要稳定、只追加）；不要中途增删工具；把文件系统当作 context；用 todo.md 复述目标；把错误留在 context 里；别被自己的历史“少样本”带偏。
- 与本章的关系：2.2 主线说“失败的返回也一直留着”，讲的是代价；Manus 认为留着错误能让模型避免重犯。两种说法不矛盾，可以作为一个讨论点：留着有用，但占预算，过多就该清。

### Drew Breunig：How Long Contexts Fail（已核实）

- [原文](https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html)，2025-06-22；续篇 [How to Fix Your Context](https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html)，2025-06-26。
- 四种失败：投毒（错误或幻觉进入 context 后被反复引用）、分心（context 太长，模型盯着历史而忽略训练所学）、混淆（多余内容，例如用不上的工具定义，把回答带偏）、冲突（新加入的信息与已有内容矛盾）。

### LangChain：Context Engineering for Agents（已核实）

- [原文](https://www.langchain.com/blog/context-engineering-for-agents)，LangChain 团队，2025-07-02（转述普遍归于 Lance Martin，页面署名是团队）。
- 一张总图把做法分成 write / select / compress / isolate 四类；用 Karpathy 的类比：LLM 是 CPU，context window 是 RAM。图里还有“工具调用的 context 随轮次累积”。

### HumanLayer：Advanced Context Engineering for Coding Agents（已核实，日期为推断）

- [文稿](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md)，页面无日期，文中提到 2025-08-20 在 YC 的演讲；作者 Dex Horthy（二手，页面未署名）。
- 建议 context 使用率保持在 40%–60%；占 context 的大头是搜文件、理解代码流、改文件、测试和构建日志、工具返回的大 JSON。“频繁有意压缩”：满之前让 agent 写进度文件（目标、做法、已完成步骤、当前失败），再开新会话。研究 → 计划 → 实现，人审研究和计划比审代码更划算。
- 文中的效率数字是团队自述，不要上屏。

### Cognition：Don't Build Multi-Agents（二手为主）

- [原文](https://cognition.ai/blog/dont-build-multi-agents)，Walden Yan，2025-06；第一条原则是共享 context，最好是完整的决策轨迹，例子是拆给子代理做的 Flappy Bird 风格不一致。2026-04 有续篇 [Multi-Agents: What's Actually Working](https://cognition.com/blog/multi-agents-working)。没打开原文核对，引用前要看一遍。

### OpenAI：Harness engineering（二手，留给后面章节）

- [原文](https://openai.com/index/harness-engineering/)，Ryan Lopopolo，2026-02-11。五个月、产品代码全部由 Codex 写；“人掌舵，agent 执行”。与第 2 章关系不大，记在这里给第 7 章。

## 2026-10-23 p05a 概览补充

- 已核对 Claude Academy 的训练知识与当前 Context 教程：https://academy.claude.com/tutorials/parametric-memory-and-context 。从回答来源切入，区分模型参数中学到的知识与这次任务的信息；作为课程自绘概览的依据。
- 已核对 Working Memory：https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory ，以当前工作记忆解释 Context Window。本次没有逐段观看视频。
- 已核对 Claude Code 101 第 2 课：https://academy.claude.com/courses/claude-code-101/how-claude-code-works ，先给 Agent 循环概览，再讲 Context。
- 讲师选定左图右帖，保留熟悉的 Karpathy；具体取舍见 C2-77 和 p05a 审查记录。图为课程自绘，不冒充官方原图。

## agent loop（2026-10-24，用于 2.1 p07-loop）

### OpenAI《Unrolling the Codex agent loop》的循环图与 Snapshot 2/3（已核实）

- 原文：[中文版](https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/)，Michael Bolin，2026-01-23。英文版 WebFetch 返回 403，中文版在内置浏览器打开核对；2026-10-24 再次打开时停在人工验证，未绕过。
- Agent loop 图：用户输入 → 模型推理 → 工具调用回到推理，或给出回答；多轮版在前面加了组装对话历史。
- Snapshot 2：上半为第 1 次请求的全部 input，下半为第 2 次调用新增的 reasoning、function_call、function_call_output；正文说旧提示是新提示的精确前缀，以便利用提示缓存。图例只有 System、Developer、User 三种角色。
- Snapshot 3：内循环结束后接 assistant 的最终回答，再接下一轮 user 消息。
- 和本课记录的出入（2026-10-24 更正）：原先写“本次 MiniMax 记录里每轮只新增调用和返回两条、没有 reasoning”，是看了删掉推理的 10-23 公开记录得出的，不成立。10-24 重跑的原始记录里每轮追加 reasoning、custom_tool_call、custom_tool_call_output 三条，与 Snapshot 2 一致。本次记录没有 system 角色，重画图图例仍不用 System。

### Anthropic《Building effective agents》自主 agent 图（已核实，备用）

- [原文](https://www.anthropic.com/engineering/building-effective-agents)，Erik Schluntz、Barry Zhang，2024-12-19。Human 与 LLM Call 往返，LLM 通过 Action 与 Feedback 和 Environment 交互，直到 Stop。只有概念，不涉及请求内容。

## system 与 developer 角色（2026-10-24，用于 2.1 p09）

- **OpenAI API 参考，Chat Completions**（[原文](https://developers.openai.com/api/reference/resources/chat)，2026-10-24 页面，已核实）：o1 及更新的模型中，developer 消息取代原来的 system 消息。
- **OpenAI API 参考，Responses**（[原文](https://developers.openai.com/api/reference/resources/responses)，已核实）：developer 或 system 角色给出的指令优先于 user 角色。
- **OpenAI 公告 o1 进入 API**（[原文](https://openai.com/index/o1-and-new-tools-for-developers/)，已核实）：o1 支持 developer messages。页面没写发布日期，2024-12-17 只是按模型快照名推断，未核实，不上屏。
- **OpenAI Model Spec**：首版（[2024-05-08](https://cdn.openai.com/spec/model-spec-2024-05-08.html)）的角色已有 platform、developer、user、assistant、tool；现行版（[2026-08-18](https://model-spec.openai.com/2026-08-18.html)）的权限顺序为 Root > System > Developer > User > Guideline。已核实。说明 developer 作为概念早于 o1，在 API 里取代 system 消息是 o1 起的变化。
- **《深入解析 Codex 智能体循环》**（2026-01-23，已核实）：角色按优先级为 system、developer、user、assistant；当时基础指令放在顶层 `instructions` 字段，权限说明用 developer，AGENTS.md 用 user。这描述的是 2026 年 1 月的实现。
- **Codex PR #51156**（[原文](https://github.com/openai/codex/pull/51156)，“Send base instructions as Responses input messages”，2026-10-05 合并，已核实）：基础指令从顶层 `instructions` 移到 input 最前面的 developer 消息，请求类型去掉该字段。首个包含它的正式版是 0.162.0（按 release notes，克隆为浅克隆，未用 git 复核 tag 包含关系）。rust-v0.163.0 源码 `core/src/client.rs` 的请求构造无条件插入 developer 基础指令，`codex-api/src/common.rs` 的 `ResponsesApiRequest` 只有 input 与 tools，已核实。
- **和课件的出入**：p16b 现用的重画图（据 1 月文章）第一行仍是 `instructions`，与当前记录不符；页面同步时改为 developer 基础指令或加注“文章写于 2026-01，当前版本已改”。MiniMax 服务端是否另加 system 层未核实。

## 2.2 补充（2026-10-24）

### OpenAI《深入解析 Codex 智能体循环》：多轮、缓存与压缩（已核实）

- 中文版在内置浏览器打开，未出现人工验证。
- 多轮：用户回应时，上一轮的助手消息和用户的新消息都追加到 input，开始新一轮；Snapshot 3（Starting a new turn）画的是这个，例句是用户补的一句修改意见。另有 Multi-turn agent loop 图（组装对话历史 → 最新用户输入 → 推理 → 回答或工具调用）。
- 缓存：引用自家提示缓存文档，命中要求精确前缀匹配，静态内容放前、可变内容放后；会导致未命中的操作：中途改 tools、换模型、改沙盒配置、审批模式或工作目录；配置变化尽量追加新消息。
- 压缩：Token 总数超过阈值时用一个新的、更小的项目列表替换 input。早期 `/compact` 用现有对话加摘要指令请求模型，把含摘要的助手消息作为新的 input；后来用 `/responses/compact`，返回含 `type=compaction`、不透明 `encrypted_content` 的列表；超过 `auto_compact_limit` 自动压缩。
- 和本课记录的出入：本课 MiniMax 下压缩后的记录 28 是明文 Handoff Summary，另保留初始 Prompt、Implement the plan.、重新装入的 AGENTS.md，更像文章说的早期做法；没有核实 Codex 对非 OpenAI provider 走哪条路径，不下结论。

### Manus 中文版（已核实，有官方中文版）

- [中文版](https://manus.im/zh-cn/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)，英文地址会跳到中文版；2025-07-18，季逸超。
- 围绕 KV 缓存：输入输出比约 100:1；保持前缀稳定、上下文只追加、序列化要确定；配图左右对照未命中与命中。
- 保留错误的内容：擦除失败会移除证据，没有证据模型就无法适应；把失败的尝试留在上下文里，模型会降低重复同样错误的可能。配图：失败的 2A 留着，再做 2B 成功。
- 使用文件系统作为上下文：长输入即使有前缀缓存也要为每个 token 付费；压缩策略始终设计为可恢复的，保留 URL 或路径即可省略内容。配图：大段观察换成指向文件的引用。
- 通过复述操控注意力（todo.md）一节的图与 2.2 无关，没有保存。

### Codex AGENTS.md 文档（2026-10-24 复核）

- 现地址 https://learn.chatgpt.com/docs/agent-configuration/agents-md （原 developers.openai.com 跳转）。原文：Codex 启动时构建指令链，once per run；TUI 里通常是每个会话一次；指令看起来过期就重启 Codex。没有提到 `/clear`。
