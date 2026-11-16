# Skill 企业生产实践调研

调研日期：2026-11-10。
范围：企业自己发布的经验文章、公开工程仓库与评估分享，不以聚合站、营销转述或安装量排行为依据。
本报告区分能直接读到的文件事实、企业自述的使用经验和本次课程推论。
没有独立复现企业的效果评估，也没有运行候选 Skill。
本轮不修改 `docs/outline/ch03-discussion.md`；课程建议另见[教学内容报告](Skill教学内容与3.2选题建议.md)，核验详情见[同名笔记](../notes/Skill企业生产实践调研/来源核验.md)。

## 推荐先读哪几份

| 优先级 | 来源 | 最值得看的问题 |
| --- | --- | --- |
| 1 | [PostHog：What nobody tells you about writing agent skills](https://newsletter.posthog.com/p/what-nobody-tells-you-about-writing) | 正文里应该写哪些公司知识，哪些步骤不该规定过死，Skill 以后怎样维护。 |
| 2 | [Sentry 的实际 Skills 仓库](https://github.com/getsentry/skills/tree/e94f22214528d69899d09c627b3315ddc3544816) | 直接读公司提交规范和文案规范，看到一份简单 Skill 究竟写了什么。 |
| 3 | [Vercel：AGENTS.md outperforms skills in our agent evals](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals) | Skill 存在但没有被调用时会发生什么，为什么选用与最终完成不能混为一谈。 |
| 4 | [Vercel：Introducing React Best Practices](https://vercel.com/blog/introducing-react-best-practices) | 怎样把大量工程经验组织成有优先级、带对照例子的专业知识。 |
| 5 | [Glean：企业经验的打包与复用](https://www.glean.com/blog/glean-skills-launch-2026) | 一份合格企业产物需要哪些问题、数据与模板，怎样指导多工具工作。 |
| 6 | [HubSpot：You Don’t Need Better Agents, You Need Better Skills](https://developers.hubspot.com/blog/you-dont-need-better-agents-you-need-better-skills) | 多份 Skill 怎样共用知识，为什么只贴一个文档链接不够。 |

## 逐家看实际做法

### PostHog：写组织知识，同时控制过度规定与维护成本

来源：Ian Vanagas，2026-08-03，[原文](https://newsletter.posthog.com/p/what-nobody-tells-you-about-writing)。
性质：团队经验分享，带实际工程链接；不是受控效果实验。

文章用 SQL 指导说明入口应按需分流到 schema 和查询模式；用 endpoint-run 说明成功标准可以包含实际验证。
正文应明确目标、约束和模型不能自行推导的项目知识，同时给容易变化的步骤留出判断空间。
维护上主张区分稳定结构与易变内容，指向单一来源，并通过生成发布过程减少补丁积累。
它还提出先判断任务是否重复、模型是否确有缺口，避免什么都做成 Skill。

**对课程的推论**：第二部分应教“补上本项目独有的做法”，第三部分教“何时读取哪份资料”，第五部分按结果修订。
不能把这篇文章理解成所有任务都不需要步骤；需要严格执行的流程仍应明确约束。

### Sentry：真实规则比抽象能力介绍更适合精读

来源：[固定版本仓库](https://github.com/getsentry/skills/tree/e94f22214528d69899d09c627b3315ddc3544816)，版本提交日期 2026-11-05。
性质：可直接核对的员工 Skills 仓库；并非效果报告。

仓库按全公司、领域团队与单仓库安排适用范围，并使用 Plugin 分发相关能力。
[commit](https://github.com/getsentry/skills/blob/e94f22214528d69899d09c627b3315ddc3544816/skills/commit/SKILL.md) 的目录只有 SKILL.md，无外部 Reference 或脚本依赖。
[brand-guidelines](https://github.com/getsentry/skills/blob/e94f22214528d69899d09c627b3315ddc3544816/skills/brand-guidelines/SKILL.md) 则以正文规则为主，尾部带官方资料外链。

**对课程的推论**：可以先读一份小文件理解规则，再返回仓库看整组组织，不必先精读复杂游戏规划。
具体文件内容与候选排序已集中在[教学内容报告](Skill教学内容与3.2选题建议.md#简单正文案例怎么选)，这里不再复制。
Sentry 的规范是其团队选择，不是所有项目都必须照搬的通用标准。

### Vercel：知识不仅要正确，还要在需要时进入任务

来源：Jude Gao，2026-01-27，[评估原文](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)。
性质：厂商公开的特定任务评估；本轮未复现。

评估针对 Next.js 新 API 知识，默认 Skill 方案经常没有触发；加入明确使用要求后改善，但常驻的压缩文档索引在该设置中表现更好。
文章把问题落在何时检索、是否调用与指令措辞，而非只检查 Skill 是否安装。

**对课程的推论**：第一部分调用记录是必要教学内容，第二部分要继续看正文有没有真正进入工作。
不能把该结果泛化成 AGENTS.md 永远优于 Skill，也不能将常驻项目知识与按需任务方法当成只能二选一。

另一篇来源：Shu Ding、Andrew Qu，2026-01-14，[Introducing: React Best Practices](https://vercel.com/blog/introducing-react-best-practices)。
性质：工程经验知识库的发布说明，不是独立收益实验。

它将 React/Next.js 优化经验按影响程度组织，优先处理请求瀑布和包体积，再展开其他性能项；规则提供错误和正确代码对照。

**对课程的推论**：第三部分的 Reference 可以讲成“有优先级、能按问题查阅的专业知识”，而不是外部文件列表。
不过 React 性能知识会抢走初学者注意力，建议只用结构和一条易理解规则说明组织方法，不作为第二部分主案例。

### Glean：把合格交付的标准和工具使用经验写进去

来源：Abhilash Samantapudi、Matt Ding、Julie Mills，页面更新日期 2026-02-09，[原文](https://www.glean.com/blog/glean-skills-launch-2026)。
性质：产品发布与生产经验混合，效果指标属于厂商自述。

账户规划示例不仅规定输出栏目，还交代需要回答的问题和数据来源；实践强调描述中的不适用场景、正文里的高质量例子，以及多工具操作顺序。
[OpenAI 的生产模式文章](https://developers.openai.com/blog/skills-shell-tips)也介绍了 Glean 的路由、负例、模板与例子使用经验。
两篇涉及同一企业，不能算成两次独立验证。

**对课程的推论**：“输出一份报告”还不够，要让学生看到合格报告需要覆盖哪些问题、怎样使用事实。
紫色风格同理，要交代各视觉要素之间的关系和检查标准，而不只要求颜色看起来像。
本报告不采用其准确率或延迟数字作课程效果承诺。

### HubSpot：共享资料需要告诉 AI 何时用、怎样用

来源：Brooke Bond、Jon McLaren，2026-08-13，[原文](https://developers.hubspot.com/blog/you-dont-need-better-agents-you-need-better-skills)。
性质：开发者实践建议，未提供可复现的效果评估。

文章讨论团队惯例、项目结构与重复任务，并以网站模块和模板共用 accessibility 指导说明知识复用。
引用资料时需交代用途和应查内容，而不只是放 URL。

**对课程的推论**：第四部分可以用“一份共享规范，多处带条件引用”讲单一维护与复用。
标题关于模型与技能孰优的说法不宜直接当结论，内容复用也不自动证明 Plugin 的安装与管理行为。

## 企业经验给出的几个取舍

以下是本轮综合判断，不是任何一家公司的统一标准。

| 问题 | 对课程有用的取舍 |
| --- | --- |
| 要不要把所有步骤写死？ | 对目标、硬约束、易错点与完成条件写具体。<br>实现路径的具体程度按任务风险和变化程度决定。 |
| Reference 越多越好吗？ | 资料需要有任务用途和读取入口。<br>重复、过时、无法访问的资料会增加负担。 |
| 脚本是否比文字更高级？ | 稳定、确定的处理可交给脚本，需要判断的工作仍须指导与审阅。<br>用什么取决于任务，不按目录复杂程度划等级。 |
| Plugin 是否只是很多 Skill 放一起？ | 除文件分组，还要考虑职责、适用范围、依赖和分发。<br>跨 Skill 引用能否在目标环境成立须实测。 |
| 只要调用了就算有效吗？ | 路由正确、读到正文、按指导行动、结果符合标准应分开看。<br>任一环节成功都不能替代其他环节。 |
| 紫色风格怎样才算稳定？ | 先定义视觉要求，再看多个结果中哪些一致、哪些波动。<br>新增规范和案例是否有帮助需由实际记录回答。 |

## 阅读顺序与暂不采用的材料

若只读三处，建议依次读 PostHog 的正文写法、Sentry 的一份实际文件、Vercel 的触发评估。
三者分别回答“写什么”“实际长什么样”“为什么写了仍可能没起作用”。

Anthropic 的《Lessons from building Claude Code: How we use skills》在搜索中有相关结果，但本轮取得的入口发生重定向，不能确认取到未改写的原站全文。
暂不把它列入已核实依据，也不根据摘要断言当前前端 Skill 禁止紫色渐变。

本轮交付为研究报告与来源笔记，未制作课堂截图、未测试安装、未运行企业 Skill，也未改动讨论稿。
