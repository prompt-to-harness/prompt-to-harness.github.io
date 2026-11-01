# 来源核验

2026-11-01；只核实公开原文，不把文档建议当成课程配置实测。官方文档未标发布日期的记访问日，不推测更新日。

| 来源 | 作者、日期与核实 | 支持的候选 | 边界 |
| --- | --- | --- | --- |
| [Codex Best practices](https://learn.chatgpt.com/guides/best-practices#make-guidance-reusable-with-agentsmd) | OpenAI；未标日期；2026-11-01 打开原文核实，原 developers.openai.com/codex/learn/best-practices 跳转到此 | 任务相关材料；简短、准确的 AGENTS.md；一个连贯工作单元一个会话 | 不据此承诺课程基线下文件装载细节；没有推荐固定百分比清会话 |
| [Prompting · Iterate on UI with live updates](https://learn.chatgpt.com/docs/prompting#iterate-on-ui-with-live-updates) | OpenAI；未标日期；2026-11-01 打开原文核实 | 人修改或回退后告知 Codex，防止下一轮覆盖人的修改 | 原文是使用建议，不能反推“Codex 永远发现不了磁盘变化”；该页还支持附图、明确区域、给复现步骤与结果 |
| [Effective context engineering · Context retrieval and agentic search](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents#context-retrieval-and-agentic-search) | Anthropic Engineering，2025-09-29；2026-11-01 打开原文核实 | 给路径、链接等轻量入口，按需取得信息；保持相关而紧凑的 context | 面向 agent 系统设计，课程只借鉴信息选择原则；不是“信息越少越好”，不引入 RAG 开发 |
| [Claude Code Best practices](https://code.claude.com/docs/en/best-practices#keep-claudemd-short) | Anthropic；未标日期；2026-11-01 打开原文核实 | 规则文件只留代码本身不易推断、反复需要的约定；提供可运行检查 | CLAUDE.md、hooks 等具体行为不移植为 Codex 承诺；本节不新教 hooks、MCP 或技能 |

## 与现有内容的关系

- 章内已采用 Context 定义、长 context 与环境反馈佐证；本次不重新推荐已撤下的 Chroma 图、Manus 文件系统图或 attention budget 截图。
- Phistory 的已有截图继续保留，本轮未重新在线核实该站；没有以新来源证明旧版本数字。
- 更直接的会话建议是按连贯工作单元组织；现有“话题换了就清空”应避免机械化。交接是需要换会话时的一种简短做法，不应变成每次工作的固定流程。
- 新候选“手改后同步状态”根据官方建议归纳；读取文件/查询状态的例子来自课程机制与教学设计，不冒充原文案例。
- 工具、服务、版本差异仍有解释价值；本轮来源没有建立“经常比较三者是初学者最重要的三个使用习惯”。这项排序是课程取舍判断，不是文档结论。

## 截图核验

两张原文截图位于 courseware/ch02/materials/external/context-practices/，复现命令与样稿见章素材登记。只截推荐候选。原文无登录，无验证码绕过。具体版式不代表选题已采用。
