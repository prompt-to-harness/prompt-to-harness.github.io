# Software Engineering 0.5 线候选问题池

> 状态：2026-09-08。用途是给课程选题、合并和排序，不代表全部进入正式课。问题标题优先面向学员真实困惑；Vocabulary、Classic Lens 和展示方式只是帮助理解问题的材料。

## 选题原则

候选题优先满足四项中的三项以上：

1. AI Coding 初次/初步使用者很可能遇见；
2. 不理解会妨碍读懂 AI 或工程师的建议；
3. 能用一个短小、具体、可视化的例子讲清；
4. 能自然连接一段经典材料或稳定的一手定义。

不追求“软件工程最重要的 20 个知识点”，也不把候选数量当成完整性指标。

## 20 个候选问题

| # | 候选问题 | 主要 Vocabulary | Classic / Source Lens | 首版建议 |
| --- | --- | --- | --- | --- |
| 1 | **AI 说这里 coupling 太高，到底高在哪里？** | Coupling / Cohesion / Dependency | Parnas / SWEBOK | 核心；与 #11/#15 合并 |
| 2 | **AI 说“我只做 Refactor”，到底意味着什么？** | Refactoring / Observable Behavior | Fowler《重构》 | 核心；与 #18 合并 |
| 3 | **测试全绿，到底证明了什么？** | Test / Regression / Verification / Coverage | Dijkstra / Fowler | 核心；与 #16 合并 |
| 4 | **为什么“失败了再试一次”也可能把系统搞坏？** | Retry / Idempotency / State | RFC 9110 | 核心；与 #19 合并 |
| 5 | **AI 为什么老想给我的代码“加一层”？** | Abstraction / Indirection / Adapter | Ousterhout | 核心；与 #14 合并 |
| 6 | **为什么多几个程序员 / Agent，不一定更快？** | Coordination / Communication / Integration | Brooks / Conway | 核心 |
| 7 | **什么叫“最小权限”？为什么 Agent 时代更值得理解？** | Permission / Least Privilege / Sandbox / Blast Radius | Saltzer & Schroeder | 核心 |
| 8 | **函数越短，代码真的越好吗？** | Readability / Method / Deep Module | Ousterhout × Martin | 核心 |
| 9 | **Technical Debt 真的是“烂代码欠下的债”吗？** | Technical Debt / Interest / Trade-off | Cunningham | 核心 |
| 10 | **Breaking Change 到底 break 了谁？** | Public API / Compatibility / Versioning | SemVer / API evolution | 核心 |
| 11 | **为什么“隐藏细节”在软件设计里那么重要？** | Information Hiding / Encapsulation / Interface | Parnas | 与 #1 合并 |
| 12 | **AI 写得这么快以后，软件工程到底还剩什么？** | Essential / Accidental Complexity / Specification / Verification | Brooks / No Silver Bullet | 结尾候选 |
| 13 | **为什么软件越改越复杂？** | Complexity / Change / Maintenance | Brooks / Ousterhout | 开篇候选；可与 #12 首尾呼应 |
| 14 | **接口到底是什么？只是 `interface` 关键字吗？** | Interface / Contract / Implementation | Parnas / Meyer / SWEBOK | 与 #5 合并 |
| 15 | **什么叫一个“模块”？为什么不是一个文件夹？** | Module / Responsibility / Interface | Parnas / SWEBOK | 与 #1/#11 合并 |
| 16 | **Unit / Integration / E2E，AI 为什么老在区分这些测试？** | Unit / Integration / E2E / Test Double | SWEBOK / Fowler | 与 #3 合并 |
| 17 | **DRY 是不是看到两段一样的代码就要合并？** | DRY / Duplication / Knowledge | Hunt & Thomas《程序员修炼之道》 | Bonus / 设计集延伸 |
| 18 | **AI 说“这是 code smell”，它是在说 Bug 吗？** | Code Smell / Refactoring Signal | Fowler《重构》 | 与 #2 合并 |
| 19 | **什么叫 Side Effect？为什么 AI 经常提醒它？** | State / Side Effect / Pure Function | PL / HTTP 语义背景 | 与 #4 合并 |
| 20 | **出了 Bug，为什么“多打点日志”不等于 Observability？** | Logging / Metrics / Tracing / Observability | Software Operations / SRE | Bonus / 后段扩展 |

## 暂不进入首版候选池的两个题

### 什么时候应该 Rewrite，而不是继续修？

范围会很快扩张到 legacy migration、strangler、数据迁移、组织风险与发布策略，难以保持 microlearning 尺度。先作为后续专题。

### Mock 到底是什么？为什么有人喜欢、有人讨厌？

它值得讲，但需要先建立 Unit / Integration / Test Double 背景，更适合作为测试专题的二级词条或 Bonus。

## 推荐合并后的 12 个正式短讲候选

| 候选短讲 | 来自问题 | 主 Vocabulary | Classic Lens | 推荐视觉 |
| --- | --- | --- | --- | --- |
| **为什么改一个地方，会牵动另外三个地方？** | #1 + #11 + #15 | Coupling / Module / Information Hiding | Parnas | Relation Map |
| **AI 为什么老想给代码加一层？** | #5 + #14 | Abstraction / Interface / Adapter | Ousterhout | Relation Map / Comparison |
| **函数越短真的越好吗？** | #8 | Readability / Deep Module | Ousterhout × Martin | Code Comparison |
| **AI 说“只做 Refactor”是什么意思？** | #2 + #18 | Refactoring / Code Smell / Behavior | Fowler《重构》 | Code Diff |
| **Technical Debt 真的是烂代码吗？** | #9 | Technical Debt / Interest / Trade-off | Cunningham | Story + Diff |
| **测试全绿，到底证明了什么？** | #3 + #16 | Unit / Integration / Regression / Verification | Dijkstra + Fowler | Test Matrix / Diff |
| **失败以后再试一次，为什么会出问题？** | #4 + #19 | State / Side Effect / Retry / Idempotency | RFC 9110 | Behavior Process |
| **Breaking Change 到底 break 了谁？** | #10 | Public API / Compatibility | SemVer / API evolution | Caller Map / Before-After |
| **为什么 Agent 不能什么权限都给？** | #7 | Permission / Sandbox / Least Privilege / Blast Radius | Saltzer & Schroeder | Permission Map |
| **为什么多几个 Agent 不一定更快？** | #6 | Coordination / Interface / Integration | Brooks + Conway | Workflow / Boundary Map |
| **为什么软件越改越复杂？** | #13 | Complexity / Change / Maintenance | Brooks / Ousterhout | Evolution Timeline |
| **AI 写得这么快，软件工程还剩什么？** | #12 | Essential / Accidental / Specification / Verification | Brooks + 全系列回看 | Recap / Concept Map |

如果最终需要压到 11 个，优先合并最后两个；如果压到 10 个，再把 Technical Debt 放进 Refactoring 的延伸部分。

## 三级内容池

不是所有候选都要录视频。

### A. 正式短讲

约 10–12 个。每集 2–4 个主要 vocabulary，0–1 个 Classic Lens。

### B. Glossary 深度条目

例如 DRY、Observability、Mock/Test Double、Rewrite。可以有独立例子和来源，但不占主课短讲名额。

### C. 快速查阅词条

例如 Repository、Implementation、Timeout、Rollback 等，只需要一句白话、语境、关联问题和来源。

## Scope 平衡检查

最终正式选题至少覆盖：

- 代码/设计：3–4 题
- 测试/验证：1–2 题
- 运行时/生产：1–2 题
- 团队/多 Agent：1 题
- 权限/安全边界：1 题
- 软件工程世界观/复杂度：1–2 题

若最终 10–12 题中超过一半都在函数、类、重构和 Clean Code，应视为 scope 失衡。

## 与主课的映射原则

- 可以自然靠近相关课，但不要求一课一题；
- 正课出现关键词时可先 inline 一句白话；
- 完整短讲保持独立，不依赖某个 Project 的前置剧情；
- 不为了讲某个 SE 主题人为制造 Project 失败；
- 同一个 term 可以被多个正课和多个问题重复引用。
