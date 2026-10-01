# 软件工程拾遗：四张试讲卡

这是一轮小实验，不是正式大纲。前两张卡选了 Ousterhout 和 Robert Martin，因为两人有一份公开、具体、彼此回应的讨论；后两张卡把视角扩展到 AI coding 中经常被忽略的“理解交接”和“协作边界”。四张卡一起检验“人物、史料、争论、代码实验、AI 映射”这种讲法是否成立。

四张卡分成两组：

- 代码内部：

  - [Ousterhout：函数变短，为什么可能更难读](ousterhout-deep-modules.md)
  - [Robert Martin：一个好名字能替读者做多少事](martin-judgment.md)

- AI coding 的工作边界：

  - [Peter Naur：交接时丢掉的不是代码，而是理解](naur-theory-building.md)
  - [Mel Conway：通信结构会进入系统结构](conway-agent-boundaries.md)

配套脚本：

- [报告代码对照](learning-report.mjs)
- [SDD 验收案例](sdd-handoff.mjs)
- [Agent Harness 边界检查](agent-harness.mjs)

建议先读两张卡，再运行：

```bash
node docs/software-engineering/pilots/learning-report.mjs
node docs/software-engineering/pilots/sdd-handoff.mjs
node docs/software-engineering/pilots/agent-harness.mjs
```

需要 Node.js，无需安装依赖。第一个脚本用全部资料、已完成资料、空列表和零分钟资料四组输入，分别核对 A、B 的预期输出；第二个脚本验证 SDD 中的边界条件；第三个脚本验证 Harness 对 Agent 文件修改范围的约束。

四张卡各按 12--15 分钟设计。建议先讲 Ousterhout 和 Martin，再讲 Naur 和 Conway；这样会从“代码如何让人理解”逐渐转到“人和 Agent 如何共享理解、如何被边界约束”。连讲时共用的报告例子只运行一次。

两份报告的公共接口相同，A/B 对照主要观察内部阅读路径。输出检查通过不等于可读性更好，也不能证明某种风格普遍占优。AI coding 的对应情形是我们的课程推演，历史引述以卡内的固定版本书面对谈和作者文章为准。

首轮看效果，建议收回四样东西：

- 一条具体 Review 评论：哪个名字隐藏了知识，哪个转发没有带来收益。
- 一次改判：什么上下文变化，会让自己保留原本想删的短函数。
- 一句迁移判断：下次让 Agent 重构时，准备提出什么可核对的要求。
- 一份对比记录：换 prompt 或协作边界后，model 的假设、diff 和返工位置发生了什么变化。

当前只完成样稿和代码验证，尚未开展真实学员试讲。我的初步判断是，四张卡形成了一个较完整的递进：Ousterhout/Martin 讨论代码阅读判断，Naur 讨论上下文和 SDD 如何传递理解，Conway 讨论 prompt、权限、Harness 和多 Agent 分工如何影响系统结构。若听众只留下“该拆”或“多 Agent 更快”的结论，就需要调整案例与收束方式。
