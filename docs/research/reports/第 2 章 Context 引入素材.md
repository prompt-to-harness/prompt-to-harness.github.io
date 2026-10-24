# 第 2 章 Context 引入素材

> 2026-10-22 调研。问题：第 2 章用哪些官方文章、研究和 X 上的言论来引入 Context，各放在哪一节。来源细节和核实状态见[笔记](../notes/第%202%20章%20Context%20引入素材/sources.md)。本文是选材建议，不是已确认的分镜。

## 结论

1. **章首引入用 Karpathy 引用 Tobi 的那条帖子**（2025-06-25）。一张截图同时有两个人的说法：“context engineering 比 prompt engineering 更准确”。不要用“prompt engineering is dead”这句口号，它没有权威出处；原话都更温和，Anthropic 也说 context engineering 是 prompt engineering 的延伸。这正好接课程主线：Prompt 没有死，它变成了 context 的一块。
2. **最该用的是 OpenAI 的《深入解析 Codex 智能体循环》**（2026-01-23，有官方中文版）。它是 Codex 团队自己写的“一次请求里有什么”：基础指令、工具、沙箱权限、`AGENTS.md`、环境信息、用户这句话，顺序和本章锚点图几乎一一对应；还讲了请求随对话二次增长、缓存靠精确前缀、自动压缩、每次请求都带全量内容发给哪个端点。一篇文章覆盖 2.1、2.2、2.4 三节的主线，而且讲的就是学员用的工具，比 Anthropic 那篇更贴。建议在 2.1 引用它，作为“讲师请求记录里看到的东西，官方也是这么说的”的佐证。
3. **研究图选一张就够**：Chroma 的 Context Rot（2025-07-14）首图，说明“越长越不可靠”，放 2.2 讲“注意力也是代价”。

## 各节建议

| 节 | 素材 | 怎么用 | 形式 |
| --- | --- | --- | --- |
| 章首 / 2.1 开头 | Karpathy 引用 Tobi（X，2025-06-25 / 06-19） | 引出“这节课要看的不是一句 Prompt，而是整个 context” | 帖子截图 + 一句中文意译 |
| 2.1 主线 | OpenAI《深入解析 Codex 智能体循环》 | 锚点图讲完后放一页“官方怎么说”：文中的请求组成列表和智能体循环图；工具调用结果追加进 prompt | 中文版截图（一段列表或一张图） |
| 2.1 主线（已有） | Anthropic《Effective context engineering》 | p16a 已用其定义；可加它的“Prompt engineering vs. context engineering”对照图 | 原图截图 |
| 2.1 深入 | Cognition《Don't Build Multi-Agents》 | 子代理只拿到一部分 context，结果风格不一致；用来解释“子代理有自己的 context，只露出一句” | 引用前需核对原文 |
| 2.2 主线 | OpenAI 同一篇 | 每次都重发前面全部内容、JSON 总量二次增长；压缩替换掉之前的内容 | 文中“prompt 随轮次变长”的图 |
| 2.2 主线 | Chroma Context Rot | 重发的代价不只是钱，还有注意力：长度上去，可靠性下来 | 报告首图 |
| 2.2 深入 | OpenAI 同一篇 + Manus（季逸超，2025-07-18） | 缓存为什么便宜：前缀不变才能命中；Manus 的输入输出比约 100:1、缓存价约十分之一 | 文字页，数字标出处 |
| 2.2 讨论点 | Manus“把错误留在 context 里” | 和“失败的返回也一直留着”对照：留着能避免重犯，但占预算 | 一句话，放讲师提示即可 |
| 2.3 深入 | Drew Breunig《How Long Contexts Fail》 | 投毒、分心、混淆、冲突四种失败，对应“它看全了吗、看对了吗” | 四格小图，自己画 |
| 2.4 深入 | OpenAI 同一篇 | Codex 每次请求无状态、带全量内容，ChatGPT 登录发往 `chatgpt.com/backend-api/codex/responses`，API key 发往 `api.openai.com`：正好回答“context 发给了谁” | 文字页 |
| 2.5 | Claude Code《Explore the context window》、HumanLayer 40%–60% 与“频繁有意压缩” | “换一个工具看同一句话的请求”可直接截 Claude Code 的交互时间线；“换会话时自己写交接”对应 HumanLayer 的进度文件做法 | 截图 + 口述 |
| 章末 / 后续章节 | LangChain 四类做法图（write / select / compress / isolate）；Karpathy 帖子后半段“厚的一层软件”；OpenAI《Harness engineering》 | 章末一页“你已经做过其中几种”；后两条留给第 7 章 | 原图截图 |

## 需要讲师决定或核实

1. **截图怎么放（2026-10-22 已定）**：标出处即可，部分图重画；规则见 [external-sources.md](../../production/external-sources.md)。推荐的四张已截好，登记在 [`courseware/ch02/materials/external/`](../../../courseware/ch02/materials/external/README.md)，状态都是候选。
2. **`AGENTS.md` 压缩后还在不在，要实测**。2.2 深入写“`AGENTS.md` 在清空和压缩后重新进入”。Codex 的 `AGENTS.md` 文档只说启动时构建、改了要重启或开新会话；OpenAI 那篇文章说压缩会替换整段 `input`，而 `AGENTS.md` 就在 `input` 里。Claude Code 的文档明确写了压缩后会从磁盘重新注入，但那是另一个工具。重录 2.2 时用请求记录确认，再定这句的写法。
3. **2.1 的锚点图是否按 OpenAI 文章的顺序画**。文章里的顺序是：系统消息（服务器端）→ 工具 → 基础指令 → 沙箱权限 → `AGENTS.md` 与技能 → 环境信息 → 用户这句话。现在的锚点图是“系统指令、工具、环境、规则、对话历史、工具返回、这一句”，大体一致，但“规则”和“环境”的先后与文章相反。建议以讲师请求记录为准，和文章不一致时在讲师提示里说明原因。
4. **Cognition 和 HumanLayer 两条没有逐字核对原文**，用到时再看一遍；HumanLayer 的效率数字是自述，不上屏。

## 2026-10-23 补充：p05a 采用概览与 Karpathy 并列

讲师确认左侧使用课程手绘竖图，表达“当前任务信息（Context）→ 既定模型版本 → 回答或动作”，右侧继续使用已登记的 Karpathy 引用 Tobi 截图。先用概览建立观察问题，随后拆真实请求；本页不提前列出完整组成。

本次核对的官方教学顺序：

- [Claude Academy：How context affects Claude's performance and cost](https://academy.claude.com/tutorials/parametric-memory-and-context)：从回答的信息来源入手，区分训练知识、当前提供的信息和工具查找，再讲窗口与附加内容。
- [Claude Code 101：How Claude Code works](https://academy.claude.com/courses/claude-code-101/how-claude-code-works)：先给收集信息、行动、验证的循环概览，再解释 Context、工具与权限。
- [Working Memory](https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory)：以工作记忆解释窗口，并用有无相关材料的对照练习建立直觉。
- [OpenAI Academy：Codex 101](https://academy.openai.com/en/public/clubs/builders-etkn1/resources/codex-101-introduction-and-onboarding-2026-03-18)：课程入口与所附材料已核对；先讲 Agent 循环与形成历史，再引入 Context 工作记忆。

这些是公开页面与材料的文字核对，没有完整观看视频或验证交互练习。概览为课程自绘的教学归纳，不标为官方原图；“普通对话不实时改写既定模型参数”也不归为 Karpathy 帖子的结论。截图、图元与两版 SVG 的现行路径见章素材索引。

## 2026-10-24 补充：p07-loop 的 agent loop 示意

对应讲透问题 1：只说了一句，为什么有好几次请求，每次请求比上一次多了什么。候选与核对见[来源笔记](<../notes/第 2 章 Context 引入素材/sources.md>)的“agent loop”一节。

- **采用**：OpenAI《深入解析 Codex 智能体循环》的 Agent loop 图与 Snapshot 2，按课程风格重画成中文图（C2-83）。Snapshot 2 直接画出“第 2 次调用 = 第 1 次全部 input + 新增条目”，正文也说旧提示是新提示的精确前缀，和本节逐轮对比的观察一致。
- **备用**：同文 Snapshot 3（开启下一轮对话，更适合 2.2 开头）；Anthropic《Building effective agents》的自主 agent 图（只有概念，不涉及请求内容）。
- **不用**：Anthropic《Effective context engineering》与 tool use 文档，没有循环示意图。

## 2026-10-24 补充：为什么请求里没有 system

对应讲透问题 1、2，用在 p09（C2-84）。OpenAI API 参考写明 o1 及更新的模型用 developer 消息取代 system 消息；Codex 0.162.0 起把基础指令作为第一条 developer 消息发送（PR #51156），所以本次记录只有 developer 与 user。课件说法限定在 OpenAI API 与当前 Codex 版本，不说 o1 的日期。另发现 p16b 重画图仍按 1 月文章画 `instructions` 字段，需在页面同步时处理，详见来源笔记。
