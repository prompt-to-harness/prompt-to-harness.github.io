# Software Engineering 0.5 线：经典作者与作品映射

> 状态：2026-09-08 工作版。这里不是必读书单，也不是人物百科。经典材料只在能帮助解释一个真实工程问题时作为 Classic Lens 使用。

## 使用原则

Classic Lens 只回答：

1. 作者当时面对什么问题；
2. 原作者明确主张了什么；
3. 这个观点怎样帮助理解当前软件现象；
4. 哪部分是今天的 AI Coding 映射。

经典提供视角，不提供免检答案。对 Brooks → AI、Conway → Multi-Agent、Parnas → Agent/模块边界等映射要明确标注为当代类比。

## 核心映射

### Frederick P. Brooks Jr.

**主要材料**

- *The Mythical Man-Month* / 《人月神话》
- *No Silver Bullet: Essence and Accidents of Software Engineering*

**最适合连接的问题**

- 为什么多几个程序员 / Agent，不一定更快？
- 为什么软件越改越复杂？
- AI 写得这么快以后，软件工程还剩什么？

**可以带出的 Vocabulary**

Coordination / Communication / Integration / Essential Complexity / Accidental Complexity / Conceptual Integrity

**使用边界**

- Brooks 讨论的是人类软件项目与当时的软件技术条件；
- 不把 1980s 的未来技术判断直接当成 AI 能力上限；
- 更适合借“哪些困难被加速、哪些困难仍存在”的问题视角。

### David L. Parnas

**主要材料**

- *On the Criteria To Be Used in Decomposing Systems into Modules* (1972)

**最适合连接的问题**

- 为什么改一个地方会牵动另外三个地方？
- 为什么隐藏细节很重要？
- 什么叫一个模块？

**可以带出的 Vocabulary**

Module / Information Hiding / Interface / Dependency / Change Locality

**使用边界**

- 不把 information hiding 简化成“全部 private”；
- 重点是模块边界隐藏什么设计决策，以及变化是否能被局部吸收。

### Martin Fowler

**主要材料**

- *Refactoring: Improving the Design of Existing Code* / 《重构》
- 作者关于 refactoring 定义、testing、code smell 的官方材料

**最适合连接的问题**

- AI 说“只做 Refactor”是什么意思？
- AI 说“这是 code smell”，是在说 Bug 吗？
- 测试全绿到底证明了什么？

**可以带出的 Vocabulary**

Refactoring / Observable Behavior / Code Smell / Regression / Test

**使用边界**

- Refactoring 要保留行为约束，不等于“整理代码”；
- 经典书籍可以作为阅读入口，不要求学员系统背重构目录。

### John Ousterhout

**主要材料**

- *A Philosophy of Software Design* / 《软件设计的哲学》
- 与 Robert C. Martin 关于软件设计、方法长度和注释的公开讨论

**最适合连接的问题**

- AI 为什么老想给代码加一层？
- 函数越短真的越好吗？
- 为什么软件越改越复杂？

**可以带出的 Vocabulary**

Abstraction / Interface / Deep Module / Shallow Module / Complexity / Information Leakage

**使用边界**

- 不把 deep module 变成“函数必须长”；
- 与 Clean Code 的分歧适合做 comparison，而不是胜负题；
- 使用争论材料时标明版本背景，尤其 Clean Code 新版与旧版差异。

### Robert C. Martin

**主要材料**

- *Clean Code*
- 与 Ousterhout 的公开讨论

**最适合连接的问题**

- 函数越短真的越好吗？
- 什么叫可读性？
- 命名与小函数什么时候帮助理解？

**可以带出的 Vocabulary**

Readability / Naming / Method / Responsibility / Clean Code

**使用边界**

- 不把 Clean Code 规则当成不可争论的标准；
- 重点是它关注什么阅读成本，以及与 Ousterhout 的目标差异。

### Ward Cunningham

**主要材料**

- OOPSLA 1992 相关原文与后续对 debt metaphor 的解释

**最适合连接的问题**

- Technical Debt 真的是“烂代码欠下的债”吗？

**可以带出的 Vocabulary**

Technical Debt / Interest / Consolidation / Trade-off / Learning

**使用边界**

- 不把所有坏代码、遗留系统或缺测试统称技术债；
- 强调“先交付、后理解与整理”这一比喻背景，以及后续利息。

### Edsger W. Dijkstra

**主要材料**

- EWD 演讲与文章，尤其关于测试边界、可理解程序、结构化推理的材料

**最适合连接的问题**

- 测试全绿，到底证明了什么？
- 为什么“能跑”不等于“已经理解和验证”？

**可以带出的 Vocabulary**

Testing / Verification / Correctness / Separation of Concerns

**使用边界**

- 不用一句名言替代现代测试实践；
- 重点是建立“测试是证据的一部分，不是不存在缺陷的证明”这一边界。

### Melvin Conway

**主要材料**

- *How Do Committees Invent?* (1968)

**最适合连接的问题**

- 为什么多几个程序员 / Agent，不一定更快？
- 为什么分工方式会影响系统边界？

**可以带出的 Vocabulary**

Coordination / Communication / Interface / Integration / Organization Structure

**使用边界**

- 原文讨论人的组织与设计活动，不是 LLM Agent；
- Multi-Agent 映射必须明确写成类比/设计启发。

### Andrew Hunt & David Thomas

**主要材料**

- *The Pragmatic Programmer* / 《程序员修炼之道》

**最适合连接的问题**

- DRY 是不是看到两段一样的代码就要合并？
- 怎样理解“重复知识”而不仅是重复文本？

**可以带出的 Vocabulary**

DRY / Knowledge Duplication / Orthogonality / Reversibility

**使用边界**

- 首版不需要把全书做成导读；
- 适合提供短小、实用的阅读入口。

### Saltzer & Schroeder

**主要材料**

- 1975 年经典计算机系统保护原则论文

**最适合连接的问题**

- 为什么 Agent 不能什么权限都给？

**可以带出的 Vocabulary**

Least Privilege / Permission / Protection / Blast Radius

**使用边界**

- 经典安全原则可以解释最小权限，但现代 sandbox、agent approval、tool permission 仍属于今天的产品与工程实现；
- 不把软件安全课程整体搬入这条 0.5 线。

## 二级候选

这些作者/材料值得保留，但首版不要求进入正式短讲。

### Bertrand Meyer

适合 Contract / Precondition / Postcondition / Invariant；可用于 Interface / Contract 的延伸。

### Peter Naur

*Programming as Theory Building* 适合“为什么换一个人/Agent 接手代码时，文档不等于理解”的专题；当前可以保留试讲资产，不必首版强行纳入 10–12 题。

### Donald Knuth

*Literate Programming* 适合代码阅读、解释顺序与“程序也是给人看的”主题；更适合作为 bonus classic lens。

## 经典材料的展示形式

### Book / Paper Card

只保留：

- 作者 / 作品
- 当时的问题
- 本次使用的一个观点
- 今天的映射
- 阅读入口

不做章节摘要。

### Debate Card

适合 Ousterhout × Martin。先给同一段代码和两个观察维度，再介绍分歧来源。

### Timeline / Story

适合 Brooks、Cunningham、Conway。历史故事只服务于理解概念，不扩展成人物传记。

## 版本与引用

- 关键定义优先引用原作者、原论文或标准；
- 书籍版本与中文译名用出版社/作者官方页核验；
- 使用经典争论时标清针对的版本和材料；
- 课程正文用自己的转述和示意，不使用大段扫描或长摘录代替讲解。

## 推荐首版 Classic Lens 分布

不设固定 7:3 或书籍期数。建议 10–12 个短讲中约 6–8 个自然出现 Classic Lens，其余只用稳定定义/标准即可。

推荐优先出现：

1. Parnas — Coupling / Module / Information Hiding
2. Fowler — Refactoring
3. Ousterhout × Martin — Readability / Deep Module
4. Cunningham — Technical Debt
5. Dijkstra — Testing / Verification
6. Brooks + Conway — Multi-Agent coordination
7. Saltzer & Schroeder — Least Privilege
8. Brooks — Complexity / concluding lens

RFC 9110、SemVer 等属于标准/规范 Lens，不需要为了形式把它们包装成“经典书导读”。
