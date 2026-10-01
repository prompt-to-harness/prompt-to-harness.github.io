# Software Engineering 0.5 线：问题驱动的工程语言与经典视角

> 状态：2026-09-08 讨论后工作版。本文取代此前以“人物/概念卡”为主要组织方式的草案，但保留原有史料、争论、反例与试讲资产。完整考古研究仍见 [软件工程拾遗研究报告](../../.planning/research/software-engineering-archaeology/report.md)。候选问题见 [problem pool](software-engineering-problem-pool.md)，内容模板见 [content template](software-engineering-content-template.md)，经典映射见 [classics map](software-engineering-classics.md)。

## 这条线解决什么问题

AI Coding 工具已经大量使用软件工程语言：coupling、refactor、regression、idempotent、interface、technical debt、breaking change、least privilege 等。对有编程基础、但软件工程 vocabulary 不稳定的学员而言，真正的断点往往不是“AI 不会写代码”，而是：

- AI 给出的建议本身可能合理，但学员不清楚它在说什么；
- 学员能读懂单个文件，却不容易用模块、依赖、接口、状态和行为来描述系统；
- 遇到测试、重构、兼容性、权限或多 Agent 协作时，缺少一套可迁移的语言与 mental model；
- 经典软件工程观点被简化成口号，学员不知道它们原来在解决什么问题，也不知道哪些部分仍适用于今天。

因此，这条 0.5 线的第一目标不是“补完软件工程”，也不是默认训练学员质疑 AI，而是：

> **让学员逐步获得听懂软件、看懂软件、必要时判断软件的语言。**

## 学习目标：听懂 → 看懂 → 必要时判断

不是每个词都要求走到同一深度。

| Level | 学员能够 | 示例 | 是否所有词都要求 |
| --- | --- | --- | --- |
| L1 · 听懂 | 用自己的话解释术语在当前语境的大意 | AI 说 `tight coupling` 时不再完全不知所云 | 是 |
| L2 · 看懂 | 在代码、关系图、diff 或状态变化里指出该现象 | 能指出两个页面为何依赖同一外部表示细节 | 重要词要求 |
| L3 · 判断 | 在确有 trade-off 时说明建议为何适用或不适用 | 能解释为什么这里加 adapter 有价值，而简单调用未必需要 | 只给需要取舍的主题 |

课程不把 L3 理解为“会反驳 AI”。如果 AI 的建议合理，理解并接受它完全可以是正确结果。

## 最小教学单元：一个真实问题，而不是一个词或一位作者

默认结构是：

> **一个真实工程问题 → 2–4 个 Vocabulary → 一个可视化软件现象 → 0–1 个 Classic Lens → 回到今天的 AI Coding 语境**

例如：

- **为什么改一个地方，会牵动另外三个地方？** → Coupling / Module / Information Hiding → Parnas
- **AI 说“我只是在 Refactor”，意味着什么？** → Refactoring / Observable Behavior / Code Smell → Fowler《重构》
- **为什么失败以后再试一次，也可能出问题？** → State / Side Effect / Retry / Idempotency → RFC 9110
- **为什么多几个 Agent 不一定更快？** → Coordination / Interface / Integration → Brooks + Conway

术语不是独立背诵清单；经典也不是固定配额。Classic Lens 只在它确实能帮助学员看懂当前问题时出现。

## 经典材料的角色

经典材料是“看问题的镜头”，不是免检的权威答案。

每次使用经典材料时明确区分：

1. **原作者当时明确讨论了什么；**
2. **我们如何解释这一观点；**
3. **今天怎样把它映射到 AI Coding。**

尤其是 Brooks → AI、Conway → Multi-Agent、Parnas → 今天的模块/Agent 边界，这些都必须标成当代映射，而不是历史作者预言了 AI。

## 与主课程保持弱耦合

这条线的内容应当可以独立观看和查阅，但在主课程中按需要出现。

### 什么时候 inline 一句话

满足下面任意条件时，在正课现场用 10–30 秒解释：

- 不解释这个词，学员接下来就听不懂；
- 这个词是当前演示动作的直接前提；
- AI 的原始输出已经出现了这个词。

例如：

> “这里说 idempotent，先把它理解成：同一个操作重复执行，预期效果仍跟执行一次一样。后面有独立小节专门演示。”

### 什么时候链接到独立短讲

当完整解释需要代码前后对照、关系图、行为过程、历史背景或反例时，正课只做链接。

### 什么时候完整嵌入

只有当问题与当前课程主题有自然的“问题级”关联。例如测试课后放“测试全绿到底证明了什么？”很自然；为了形式整齐，在 Harness 课后硬塞 Technical Debt 没有必要。

因此：

> **10 节主课 ≠ 必须正好 10 个 SE 小节。**

## 课程内容范围

首版问题池应覆盖不同 scope，避免整条线退化成“代码风格课”：

1. **软件与复杂度**：change、maintenance、essential/accidental complexity
2. **模块与设计**：module、coupling、cohesion、information hiding、interface、abstraction、adapter
3. **修改与维护**：refactoring、code smell、technical debt、DRY、breaking change
4. **测试与验证**：unit/integration/E2E、regression、verification、coverage
5. **运行时行为**：state、side effect、retry、idempotency、observability
6. **协作与交付**：coordination、integration、compatibility、rollback
7. **Agent 与权限**：sandbox、permission、least privilege、blast radius

AI Coding 自身的核心 vocabulary（如 Agent、Context、MCP、Harness）仍由主线负责；SE glossary 可以 cross-link，但不重复制造第二套定义。

## 展示语言

不同概念使用不同视觉，而不是全部做成术语卡：

- **Relation Map**：Coupling / Interface / Adapter / Boundary
- **Code Diff**：Refactoring / Breaking Change / Code Smell
- **Behavior Process**：State / Side Effect / Retry / Idempotency
- **Comparison**：Ousterhout × Martin、Unit vs Integration、DRY 的相似与不同
- **Story / Timeline**：Brooks、Cunningham、Conway 等经典背景

统一的是栏目包装和教学节奏，不是每集必须同样的 PPT 结构。

默认微学习顺序：

> **Encounter → See → Name → Boundary → Connect**

先让学员遇见一句 AI/工程师会说的话，再看到具体软件现象，最后把名字贴回已经理解的现象上。

## Vocabulary 与独立词典

课程负责“把词讲活”，Glossary 负责“以后找得到”。

首版不要求先写完完整词典。当前产品假设：

- 约 10–12 个问题短讲；
- 约 24–30 个重点 vocabulary 真正在短讲里解释；
- 后续 glossary 可扩展到约 40 个 canonical entries；
- 同一个词允许在多个问题中反复出现，例如 Interface 可同时出现在 Coupling、Abstraction、Multi-Agent、Breaking Change。

英文 term 是 canonical identifier，中文是解释层。第一次出现统一写作：`Coupling / 耦合`。对于 Idempotency / 幂等性、Invariant / 不变量、Seam / 接缝等“中文翻译本身并不解释概念”的词，必须紧跟白话说明。

## 证据与来源

来源优先级：

1. 标准、原始论文、作者原文；
2. 作者官方书页、出版社版本页；
3. SWEBOK / IEEE 等稳定知识体系；
4. 高质量二手解释只用于发现线索，不承担关键定义。

AI 话语样例要区分真实摘录、改写、教学示例。代码与结果要标注 illustrative / executable / tested，不把示意图或单次模型输出包装成已验证结论。

## 明确不进入核心

- 完整软件工程基础课或设计模式大全；
- 逐条背诵 SOLID / Clean Code；
- 每个词都配一位“大师”或一本书；
- 每个 AI 建议都强制学员多追问一句；
- 把测试覆盖率、抽象层数量、架构图数量当作质量替代指标；
- 为了教一个概念，人为给 Project 造失败或不必要的复杂度；
- 首版就建设完整 Web Glossary、40 个视频或复杂 A/B Test。

## 当前首版决策

- 维护约 20 个候选问题池，再通过合并形成约 10–12 个正式短讲；
- 优先做 Coupling、Refactoring、Idempotency 三种不同视觉语言的 prototype；
- 经典与术语混在同一个问题里讲，不再设计“7 期术语 + 3 期读书”两条平行栏目；
- 现有 Ousterhout/Martin、Naur、Conway 试讲卡作为资产保留，但不默认沿用原结构；
- 主课程与 SE 内容保持 weak coupling：自然相关就靠近，不为对齐课数强行匹配。

相关文档：

- [候选问题池](software-engineering-problem-pool.md)
- [内容与展示模板](software-engineering-content-template.md)
- [经典作者与作品映射](software-engineering-classics.md)
- [现有试讲卡](pilots/README.md)
