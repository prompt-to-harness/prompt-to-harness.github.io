# Software Engineering 0.5 线内容与展示模板

> 状态：2026-09-08 工作版。目标是统一内容质量与可复用性，不要求所有短讲使用同一页数、同一时长或同一视觉形式。

## 核心教学顺序

默认采用：

> **Encounter → See → Name → Boundary → Connect**

不要从定义开始，也不要把每个主题都做成“定义 → 定义 → 定义 → Quiz”。

### Encounter：先遇见一句真实会看到的话

来源可以是：

- 真实 AI 输出摘录；
- 根据真实对话改写；
- 为教学编写的示例。

必须标注来源类型，避免把教学示例包装成统计事实。

示例：

> “These pages are tightly coupled to the external API representation.”

### See：让学员先看到软件现象

根据主题选择：

- code diff
- dependency / relation map
- state transition
- test result matrix
- caller map
- evolution timeline

### Name：再给名字

统一首次写法：

> **Coupling / 耦合**

英文 term 是 canonical identifier；中文承担解释和帮助记忆。

### Boundary：只讲最重要的一个边界

例如：

- 有 dependency 不等于设计错误；
- refactoring 不自动包含行为修改；
- idempotent 不代表“服务器只执行一次”；
- abstraction 不等于“多一层一定更好”。

边界的作用是防止口号化，不是强迫学员质疑 AI。

### Connect：连接到今天的工作

Connect 可以有三种模式：

- `understand`：现在我听懂 AI 在说什么；
- `verify`：我知道要看什么证据确认它说的修改性质；
- `tradeoff`：这里确实存在取舍，需要进一步判断。

**合理接受 AI 的建议可以是正确结果。**

## 学习深度 metadata

| Level | 含义 | 默认要求 |
| --- | --- | --- |
| L1 | 听懂术语大意 | 所有核心词 |
| L2 | 能在代码/图/行为里指出现象 | 重点词 |
| L3 | 能解释真实 trade-off | 只给需要判断的词 |

建议内容条目记录：

```yaml
levels: [L1, L2, L3]
interaction_mode: tradeoff
```

## 四类主要展示变体

### 1. Relation Map

适合：Coupling / Interface / Adapter / Boundary / Permission。

原则：箭头不只表示“有依赖”，还要写出**依赖的具体知识**。

示例：

```text
页面 A ──知道 status=1 表示完成──→ 第三方 API
页面 B ──知道 status=1 表示完成──→ 第三方 API
```

当 API 改成 `status="done"` 时，同时高亮两个受影响调用者。

### 2. Code Diff

适合：Refactoring / Breaking Change / Code Smell。

原则：同时展示“哪里变了”和“哪些行为应该没变”。

示例：

```diff
 function totalMinutes(items) {
-  let x = 0;
+  let total = 0;
 }
```

然后再展示一个会改变业务规则的 diff，帮助区分 refactor 与行为修改。

### 3. Behavior Process

适合：State / Side Effect / Retry / Idempotency。

示例：

```text
setFavorite(true):
未收藏 → 已收藏 → 已收藏 → 已收藏

toggleFavorite():
未收藏 → 已收藏 → 未收藏 → 已收藏
```

用状态变化解释重复请求的效果，比静态定义更直观。

### 4. Comparison

适合：Ousterhout × Martin、Unit vs Integration、DRY 的相似与不同。

原则：比较两个设计目标或观察维度，不把它做成“作者 A 对 / 作者 B 错”。

## Classic Lens 模板

Classic Lens 是可插拔内容层，不是每集固定环节。

建议只回答四件事：

1. 作者当时面对什么问题？
2. 原作者明确主张了什么？
3. 这个观点怎样帮助看懂当前问题？
4. 哪部分是我们今天的 AI Coding 映射？

不要做：

- 作者生平百科；
- 全书章节摘要；
- 把经典观点当作无需验证的答案；
- 为了栏目整齐硬塞作者。

## Vocabulary 条目模板

首版不必立即把所有字段工程化，但 canonical 条目建议最终支持：

```yaml
id: se.coupling
term_en: Coupling
term_zh: 耦合
aliases:
  - tight coupling
  - loosely coupled
scope:
  - software-design
levels:
  - L1
  - L2
  - L3
interaction_mode: tradeoff
display_variant: relation-map
problem_links:
  - why-change-spreads
classic_links:
  - parnas-1972-modules
example_status: illustrative
review_class: stable
```

正文至少回答：

1. **你可能看到**：AI/工程师可能怎么说；
2. **说人话**：一句白话；
3. **看一个例子**：具体软件现象；
4. **别误会**：一个关键边界；
5. **关联**：问题短讲、经典、主课。

“下一句怎么追问 AI”不是必备字段。

## 三个 Prototype 的推荐 storyboard

### Coupling：Relation Map

- 0:00–0:30：AI 说 `tightly coupled`
- 0:30–1:40：页面 A/B 都依赖 `status=1`
- 1:40–2:40：外部表示变化，两个页面同时受影响
- 2:40–4:20：展示一个集中转换边界 / adapter
- 4:20–5:30：贴上 Coupling / Information Hiding / Parnas
- 5:30–6:00：边界：dependency 本身不是罪

### Refactoring：Code Diff

- 0:00–0:30：AI 说 `I'll refactor this first`
- 0:30–1:20：建立当前可观察行为
- 1:20–2:30：展示保持行为的 diff
- 2:30–3:40：加入一个改变业务规则的 diff
- 3:40–5:20：Fowler 定义 + 《重构》阅读入口
- 5:20–6:00：收束：refactor 描述修改性质，不是“代码更漂亮”的同义词

### Idempotency：Behavior Process

- 0:00–0:40：请求发出但响应丢失
- 0:40–1:30：第一次到底成功了吗？
- 1:30–2:50：对比 `setFavorite(true)` 与 `toggleFavorite()` 重试
- 2:50–4:10：贴上 Retry / Idempotency / State
- 4:10–5:20：解释日志等额外 side effects 可能仍重复
- 5:20–6:20：回到 AI 建议，理解为何“先保证幂等，再自动 retry”合理

## 中英文与翻译规则

- 首次出现统一展示英文 + 中文：`Refactoring / 重构`；
- 英文作为稳定搜索词，中文允许更自然的白话解释；
- 对 Interface、State、Service、Contract、Context 等多义词必须标明 scope；
- 对 Idempotency、Invariant、Seam 等中文本身不够直观的词，第一屏立即补白话；
- 有正式中译本时可参考译名，但定义仍回到原始英文来源核验。

## 来源与内容状态

来源优先级：

1. 标准 / 原始论文 / 作者原文；
2. 作者官方书页 / 出版社；
3. SWEBOK / IEEE 等稳定知识体系；
4. 二手材料只用于发现线索。

建议标注：

```yaml
example_status: illustrative | executable | tested
review_class: stable | standard | evolving | course-bound
```

稳定概念与快速变化的 AI 产品层分开维护。

## 与正课的使用方式

### Inline

10–30 秒，一句白话，确保后续能听懂。

### Link

需要完整图解、diff、经典背景或反例时，引到独立短讲。

### Embed

只有当前章节和问题本身高度自然相关时，才完整嵌入。

## 制作边界

首版不做：

- 每词一个视频；
- 所有主题高成本定制动画；
- 复杂交互站点；
- 强制 Quiz 和 A/B Test；
- 每个结尾都要求用户额外 challenge AI。

优先保证：术语准确、例子具体、视觉能解释概念、Classic Lens 有来源、AI 映射不越界。
