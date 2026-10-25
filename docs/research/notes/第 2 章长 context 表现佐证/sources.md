# 第 2 章长 context 表现佐证：来源笔记

> 2026-10-25 调研，报告见[第 2 章长 context 表现佐证](../../reports/第%202%20章长%20context%20表现佐证.md)。每条写来源、要点、核实状态和与课件现有说法的出入。原文只摘短句，其余用自己的话转述。

## 1. Matt Pocock《AI Coding Dictionary》· Smart zone 词条

- 来源：[aihero.dev/ai-coding-dictionary/smart-zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone)，同内容在 GitHub [mattpocock/dictionary-of-ai-coding](https://github.com/mattpocock/dictionary-of-ai-coding#smart-zone)（README 第 4 节 Failure Modes；仓库 2026-05-01 创建，README 最近一次提交 2026-09-24；仓库没有声明许可证）。页面没有写发布日期。
- 要点：会话前段是 smart zone，越往后越进入 dumb zone，更粗心、更健忘、错更多；同一个模型、同一个 harness，只是 context 更多。前沿模型上 dumb zone 常在 125K–150K token 开始，作者自己注明“有争议”。分区和窗口上限无关，窗口还空着很多时质量就可能已经下降；一个会话做一件事，大任务在自然边界交接或压缩。
- 核实：2026-10-25 在内置浏览器打开原页、用 GitHub raw 核对全文，**已核实**。AI Hero 的付费课程材料不引用，只用这个公开词条。
- 与课件的关系：正好接 2.2 p23a（代价是注意力）和 p28（会话选择：一个任务一个会话、交接或压缩）。125K–150K 是作者对前沿模型的经验值，不适用于课程用的 MiniMax-M3.1-Flash，不上屏。

## 2. Dex Horthy（HumanLayer）“No Vibes Allowed: Solving Hard Problems in Complex Codebases”

- 来源：AI Engineer Code 2025 演讲，[YouTube](https://www.youtube.com/watch?v=rmvDxxNubIg)（AI Engineer 频道，2025-12-02 发布，20:31），官方逐字稿页 [ai.engineer/talks/context-engineering-for-complex-codebases](https://ai.engineer/talks/context-engineering-for-complex-codebases)。
- 要点：约 5:46 起把 context 填满后的收益递减叫作 dumb zone，何时出现因模型和任务而异；以 Claude Code 为例，约 40% 用量处开始看到收益递减（6:05 口述，幻灯片画了 smart / dumb zone 分界）；工具（MCP）装太多，会一直在 dumb zone 里工作。
- 核实：在内置浏览器读了 ai.engineer 官方逐字稿相应段落、YouTube 页的发布日期，**已核实**。视频画面没有逐帧看。网上多处说“分析了 10 万多个会话”只见于二手 README，**未核实，不用**。
- 与课件的关系：dumb zone 说法的较早公开出处之一；40% 是 Claude Code 的例子，不能套到 MiniMax 的 498K 窗口。

## 3. Claude Code 文档《最佳实践》（官方中文版）

- 来源：[code.claude.com/docs/zh-CN/best-practices](https://code.claude.com/docs/zh-CN/best-practices)（英文版 [best-practices](https://code.claude.com/docs/en/best-practices)）。无日期。
- 要点：大多数最佳实践都基于一个约束：context window 填得很快，填满时性能下降；可能“遗忘”早期指令或犯更多错误；无关任务之间用 /clear。
- 核实：WebFetch 读英文版、curl 读中文 Markdown、截取页面段落，**已核实**。
- 与课件的关系：官方工具文档直接这么说，比研究更贴近“用 agent 写代码”；但说的是 Claude Code，不是 Codex。

## 4. Anthropic《Effective context engineering for AI agents》

- 来源：[anthropic.com/engineering/effective-context-engineering-for-ai-agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)，Anthropic Applied AI 团队，2025-09-29。2.1 p16a 已经引用过同一篇的定义。
- 要点：context rot：token 越多，从中准确取回信息的能力越弱；所有模型都有这个特征，只是有的下降得平缓；LLM 有“注意力预算”，每个新 token 都在消耗它；context 是边际收益递减的有限资源。机制解释：n 个 token 有 n² 对关系。
- 核实：WebFetch 摘句，截图核对原文，**已核实**。
- 与课件的关系：解释“为什么会变差”，可作口播一句；本章已用过这篇，再上屏会重复。

## 5. OpenAI《Introducing GPT-4.1 in the API》长上下文评测（不推荐）

- 来源：[openai.com/index/gpt-4-1](https://openai.com/index/gpt-4-1/)，2025-04-14。
- 要点：开源 OpenAI-MRCR 与 Graphwalks；文中说 GPT-4.1 到 100 万 token 仍保持较强表现，同时承认这类任务“仍然很难”。
- 核实：内置浏览器读正文，**已核实**；图表懒加载，未截图。
- 不推荐理由：文章要说的是新模型长上下文能力好，拿来证明“越长越差”要靠读图，容易讲反。

## 6. 已有：Chroma《Context Rot》（2025-07-14）

- 现状：2.2 p23a 采用课程手绘重画（C2-64）。控制条件的实验、18 个模型、曲线一眼能看懂；讲师在 10-24 试录时认为这份参考不够好（C2-115）。我们的看法：重复词任务离“agent 在一个会话里写代码”比较远，学员不容易和自己的会话联系起来。
