# AI Coding 课程作业与过程评测参考

Research date: 2026-09-02
Scope: 调研统一 starter repo、fork/模板、PR、自动测试和 AI 辅助评分的相邻公开实践。重点回答“通常怎样做”，不直接决定本课程最终交付状态。

## Executive Summary

你设想的模式有成熟的相邻做法，但通常不是“把学员代码发回一个主仓库，再让一个 AI 直接打总分”。更可靠的结构是：

`模板/个人仓库 → 需求任务 → 可观察提交 → 自动功能测试 → 结构化过程证据 → AI 辅助 rubric 评审 → 人工抽查/复核`

最接近的公开先例是 GitHub Skills：学习者从 template repo 创建自己的仓库，Actions 根据 branch、push、文件路径或 PR 等事件检查进度，并通过 issue 回写下一步。[AE-01][AE-02] GitHub Skills 的测试课程还把单元测试、coverage、失败诊断和合并门禁放在同一仓库里。[AE-03]

功能正确性方面，CS50 check50 和 SWE-bench 代表了“独立、可复现 harness + 测试结果”的模式。[AE-06][AE-07] 工程过程方面，不能从最终代码可靠推断“学员是否真的使用了 SDD/Harness”。过程必须通过仓库中的结构化文件、提交阶段、PR 描述、自动检查和必要的时间/事件证据来观察；AI 可以整理证据和按 rubric 初评，但不应凭自然语言印象给最终分。

## 相邻实践

### 1. GitHub Skills：模板仓库就是教材和状态机

GitHub Skills 的练习通过 template repo 复制到学习者账号，随后仓库内的 Actions 监听可观察事件。例如，创建指定分支后，workflow 检查分支名，向练习 issue 写入下一步，并关闭当前 workflow、启用下一步。[AE-01][AE-02]

这个模式有三个值得借鉴的点：

- **每位学习者拥有独立仓库**，不会把所有人的提交混到一个课程主仓库。
- **课程进度由可观察事件驱动**，不是由学员手工勾选“我完成了”。
- **反馈回到仓库上下文**，issue、Actions、commit 和 PR 构成学习记录。

它适合训练“按步骤完成一个工程动作”，但不够覆盖开放式需求分析。你们可以把它的 step workflow 改成：检查 `SPEC.md`、`PLAN.md`、测试结果、PR 描述和 Harness 文件是否存在，并把检查结果写回 issue 或 PR。

### 2. check50/SWE-bench：结果评测必须独立、可复现

check50 允许教师编写检查，并在学生编码时自动运行和反馈。[AE-06] SWE-bench 更强调隔离和复现：给定 codebase 和 issue，评测 harness 运行 patch 并记录结果。[AE-07]

对课程的启发是：

- 隐藏测试应放在学员无法修改的评测环境中。
- 测试应区分功能、回归、边界条件和安全约束，而不是只跑一个 happy path。
- 评分结果需要保存测试版本、运行环境、commit SHA 和日志，便于复核。
- “代码跑通”与“过程符合要求”应是两个评分维度。

### 3. PR/Code Review：适合记录过程，不适合承担全部自动化

GitHub Skills 的 Copilot code review 练习展示了在 PR 上请求 AI review、通过仓库级规则定制 review consideration 的做法。[AE-09] 但这类 review 是辅助质量反馈，不是天然公平的课程评分器。

PR 可以作为学员提交入口，因为它天然包含 diff、commit 历史、描述、review comments 和 checks。需要注意的是，GitHub template 生成的仓库与模板历史无关，不能把“学员从 template 生成的仓库”理解成可以直接回原仓库建 PR。[AE-04]

## Fork、Template 与 PR 的几种提交方式

| 方式 | 提交流程 | 优点 | 主要问题 | 适合度 |
| --- | --- | --- | --- | --- |
| A. 每人 template repo + 自己仓库内 PR | 从 template 生成个人 repo；在 feature branch 开 PR 到自己的 main；提交 PR URL/commit SHA | 历史、Actions、PR 和作业都在个人仓库；不依赖回主仓库 PR | 教师需要读取多个仓库；公开仓库有抄袭和隐私问题 | **推荐首期** |
| B. Fork starter + PR 回课程仓库 | fork starter；从任务 branch 向课程仓库开 PR | 讲师集中看到所有 PR，GitHub 心智模型直观 | PR 数量、权限和跨学员可见性；外部 fork Actions/secrets 风险；模板历史/权限配置复杂 | 可做小规模试点 |
| C. 个人 repo + 提交 Issue/表单 | 学员在个人 repo 完成；向课程提交表单，附 repo、PR、commit SHA 和产物链接 | 课程仓库干净；可接外部评分服务；提交协议可版本化 | 需要额外提交服务；链接失效和权限检查要处理 | **适合自动评测扩展** |
| D. 深蓝/LMS 上传压缩包 | 下载 starter；完成后上传 zip 或网页表单 | 不依赖 GitHub 账号和权限 | 丢失 commit/PR/过程证据；难以复现和自动反馈 | 只适合作为兜底 |

补充：GitHub Classroom 曾经把“独立作业仓库 + 自动评分”做成平台能力，但官方文档已提示该应用于 2026-08-28 退役。[AE-08] 因此新课程不应把 Classroom 作为基础依赖；可以直接使用 GitHub template、Actions 和一个只读评测服务。

## 对“AI 给实现和方法打分”的建议

### 把评分拆成两个 rubric

**A. 结果 rubric（尽量自动化）**

- 功能测试和隐藏测试是否通过
- 回归测试是否保留
- 边界条件和错误处理
- 静态检查、类型检查、构建是否通过
- 资源使用和安全限制是否满足

**B. 过程 rubric（证据驱动）**

- 是否有需求澄清、验收标准和非目标
- spec 是否与最终实现和需求变更对应
- plan 是否拆成可验证任务，是否有重新规划记录
- 是否有代码库探索和上下文依据，而不是凭空生成
- 是否有测试设计、review 发现和修正证据
- Harness 是否包含清晰规则、权限边界和人工把关点
- 最终工作流是否能抽象成模板并在迁移任务中复用

AI 评审器的输入应该是固定的结构化包：`commit SHA + diff + 测试日志 + SPEC/PLAN/REVIEW/HARNESS 文件 + PR 描述 + 任务 rubric`。输出应包含每个 rubric 项的 `分数、引用证据、置信度、待人工复核项`，不能只输出一个总分。

### 哪些东西不能只靠 AI 判断

- 学员是否“真的”使用了某个工具或某段对话；最终仓库只能证明留下了什么证据。
- SDD/Harness 的质量是否高于某个阈值；需要稳定 rubric 和人工校准。
- 设计取舍是否适合所有技术栈；统一 starter repo 可以减少这个问题，但不能消除它。
- 涉及隐私、密钥、外部服务和破坏性操作的行为；应由自动门禁和人工复核处理。

因此，推荐把过程分数表述为“**提交证据中体现出的工程过程质量**”，不要表述为“AI 判断你实际是怎么工作的”。

## 一个适合课程试点的最小闭环

1. 课程提供一个 template repo，内含 starter code、任务说明、公开测试、隐藏评测入口、提交模板和空白的 `SPEC.md`/`PLAN.md`/`REVIEW.md`/`HARNESS.md`。
2. 学员生成自己的 repo，在任务 branch 上工作；每个需求要求一次或少量有意义的 commit，不要求人为拆成几十次提交。
3. 学员在自己 repo 中开 PR 到 `main`，PR 描述使用固定模板，链接 spec、plan、测试和复盘。
4. GitHub Actions 运行公开检查、格式/类型/测试和基础结构检查；不把 secrets 暴露给不可信 PR 代码。[AE-05]
5. 学员提交 PR URL 和 commit SHA 到课程表单或轻量提交服务；评测服务以只读 token 拉取仓库内容，在隔离环境中运行隐藏测试。
6. 评测器先生成机器报告，再由 AI 按版本化 rubric 生成逐项初评；低置信度、结果与过程冲突或涉及安全的项目进入人工复核。
7. 学员收到“测试结果 + rubric 证据 + 改进建议”，必要时允许一次修订后重评。

这个闭环既保留 GitHub 的真实工程感，也避免把课程主仓库变成所有学员的 PR 垃圾场。

## 关键未决问题

这些问题会改变平台设计，值得下一轮单独讨论：

1. 学员仓库默认公开、私有，还是由课程组织提供私有仓库？这会影响抄袭、费用、Actions minutes 和隐私。
2. 评分是“反馈为主”还是“结课成绩/证书门槛”？高 stakes 评分需要更严格的人工复核和申诉机制。
3. 过程证据要求多强？只检查最终文件和提交，还是要求阶段性 checkpoint/时间窗口？
4. PR 是提交到个人仓库还是课程组织仓库？首期建议个人仓库 PR + 外部提交表单。
5. 需求是递进任务、并列任务，还是必做一项加选做一项？这会决定 rubric 是否需要按任务类型分层。

## Contradictions And Uncertainty

- GitHub Classroom 的历史资料仍能说明独立作业和自动评分的产品模式，但退役提示意味着不能把它作为 2026 年后的新基础设施。[AE-08]
- GitHub Actions 对 fork PR 的权限和 secrets 行为依赖仓库可见性与设置；在正式实施前必须用非敏感仓库做安全演练。[AE-05]
- 本次没有找到一个公开、成熟且能可靠评价“学员是否按 SDD/Harness 工作”的 AI Coding 课程平台。现有公开先例更常见的是功能自动测试、PR review 和结构化作业，而不是对隐性过程做自动判定。
- GitHub Skills、check50 和 SWE-bench 的目标不同，不能把它们的分数直接类比为课程成绩；这里借鉴的是仓库、事件、测试和证据的组织方式。

## Method

先查看 GitHub 官方模板仓库、Actions 安全和 fork 文档，再查看 GitHub Skills 的真实练习仓库与 workflow；随后用 CS50 check50 和 SWE-bench 作为可复现自动评测对照。最后按提交方式、功能测试、过程证据、AI 评审和人工复核统一比较。未把搜索结果或开源 AI grader 项目当作成熟教学先例，也没有声称穷尽所有社区课程。
