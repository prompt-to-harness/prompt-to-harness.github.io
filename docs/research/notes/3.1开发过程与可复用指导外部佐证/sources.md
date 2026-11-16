# 原文核实笔记

核实日期：2026-11-15。已打开原文，并使用公开网页截图复核。

## OpenAI：Evaluation best practices

- 来源：https://developers.openai.com/api/docs/guides/evaluation-best-practices#:~:text=Generative%20AI%20is%20variable.
- 作者／日期：OpenAI；未标发布日期
- 状态：已核实；未做课程效果实验。
- 要点与范围：相同输入也可能得到不同输出，为过程不确定性的讲解提供概念依据。不能由此断定六份不同条件案例的全部差异来自随机性。
- 段落定位：Generative AI is variable.
- 截图：`openai-variability.png`。

## Anthropic：Effective harnesses for long-running agents

- 来源：https://www.anthropic.com/research/effective-harnesses-for-long-running-agents#testing
- 作者／日期：Justin Young；2025-11-26
- 状态：已核实；未做课程效果实验。
- 要点与范围：作者观察到单元测试或接口检查仍可能漏掉端到端问题；明确要求按用户方式做浏览器验证后有所改善。这是特定 Claude 实验的观察，不是所有模型必然失败的规律，也不是本课程 Skill 提效的实测。
- 段落定位：One final major failure mode
- 截图：`anthropic-testing.png`。

## OpenAI：Build skills

- 来源：https://developers.openai.com/plugins/build/skills#:~:text=A%20skill%20complements
- 作者／日期：OpenAI；未标发布日期
- 状态：已核实；未做课程效果实验。
- 要点与范围：Skill 可承载操作顺序、判断点和输出要求等可复用指导，也可以不依赖 MCP。沿用已有 3.2／3.3 调研来源，本轮重新核实引言；不在 3.1 展开 Plugin、MCP 或目录结构。
- 段落定位：A skill complements
- 截图：`openai-skills.png`。