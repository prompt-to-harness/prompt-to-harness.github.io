# 第 4 章 4.1 陌生工程接手技巧：来源笔记

核验日期：2026-11-03。两名 sub-agent 分别负责 GitHub／Claude 与 OpenAI／Aider，主 agent 汇总并复核以下标明的正文。仅引用与当前教学问题有关的内容；产品动态文档的其他能力不在本轮核验范围内。以下文档未见可可靠确认的发布日期或更新时间，核验日不代替发布日期。

## GitHub：探索代码库

- **作者／来源**：GitHub 官方文档。
- **链接**：[Using GitHub Copilot to explore a codebase · Example prompts](https://docs.github.com/en/copilot/tutorials/explore-a-codebase#example-prompts)。
- **状态**：已核实；sub-agent 与主 agent 均实际读取正文。
- **原文要点**：示例要求概览项目用途、结构、关键部分与运行方式；架构示例带有“Provide evidence”；具体问题包括“How do I build this project?”与“Describe the data flow in this application.”。
- **支持的候选**：A、D；data flow 示例支持 E。
- **教学转化**：将 4.1 的阅读限制在项目文档、目录与启动配置，以控制深度；4.2 才深入调用关系。原文没有这一课程分节，也未证明 Codex 的对应操作已实测成功。

## Anthropic：Common workflows

- **作者／来源**：Anthropic／Claude Code 官方文档。
- **链接**：[Get a quick codebase overview](https://code.claude.com/docs/en/common-workflows#get-a-quick-codebase-overview)、[Find relevant code](https://code.claude.com/docs/en/common-workflows#find-relevant-code)。
- **状态**：已核实；sub-agent 与主 agent 均实际读取正文。
- **原文要点**：“Start with broad questions, then narrow down to specific areas”；建议请求项目术语表。另将找到相关文件、了解组件协作、追踪执行流列为逐步深入的过程。
- **支持的候选**：A、C、E。
- **教学转化**：宽到窄的顺序分别落到 4.1 的新人导航与 4.2 的源码调查；根据受众需要选择少量术语。该建议来自 Claude Code，不作为 Codex 专属功能说明。

## Anthropic：Best practices

- **作者／来源**：Anthropic／Claude Code 官方文档。
- **链接**：[Give Claude a check to run](https://code.claude.com/docs/en/best-practices#give-claude-a-check-to-run)。
- **状态**：已核实；sub-agent 与主 agent 均实际读取正文。
- **原文要点**：要求出示所运行的命令及输出，或截图；单独一句“All tests pass”提供的信息不足。
- **支持的候选**：B、D。
- **教学转化**：首次运行同时核对建议、实际命令、输出与界面，并说明由谁观察结果。原文未规定 JSON Crack 的具体输入，也未证明浏览器操作在当前 Codex 环境可用。

## OpenAI：Prompting

- **作者／来源**：OpenAI 官方文档。
- **链接**：[Prompting Codex](https://learn.chatgpt.com/docs/prompting)，核验时由 `developers.openai.com/codex/prompting` 重定向到此页。
- **状态**：sub-agent 已实际读取正文；主 agent 根据其返回的原文定位汇总。
- **原文要点**：Add useful context 强调与任务有关的来源；Set boundaries that prevent real problems 中有“Flag missing information instead of guessing”；可要求先调查、提方案再编辑。Explain a codebase 示例要求解释 request flow、模块职责、验证位置，并列出相关文件供核对。
- **支持的候选**：A、D、E，以及先认识、再修改的约束。
- **教学转化**：精简导航、限制阅读材料、为结论列依据是本课的组合设计。自然语言中的“不要改代码”是任务边界，不等同于客户端权限控制。

## OpenAI：Best practices

- **作者／来源**：OpenAI 官方文档。
- **链接**：[Best practices · Improve reliability with testing and review](https://learn.chatgpt.com/guides/best-practices#improve-reliability-with-testing-and-review)。
- **状态**：sub-agent 已实际读取正文；主 agent 在保存 4.1 内容时再次读取该段原文，并核对标题锚点。
- **原文要点**：Improve reliability with testing and review 强调相关检查、最终行为与结果复核；Plan first for difficult tasks 建议复杂或含糊任务先澄清、规划。
- **支持的候选**：B、D，以及接手阶段先认识、后实施。
- **教学转化**：将验证原则应用为一次最小启动与功能观察，不在 4.1 展开完整测试流程或预写成功结果。

## Aider：Repository map

- **作者／来源**：Aider 官方文档。
- **链接**：[Repository map](https://aider.chat/docs/repomap.html)。
- **状态**：sub-agent 已实际读取正文；主 agent 根据其返回的原文要点汇总。
- **原文要点**：向模型提供重要类、函数、类型及签名的精简地图，据此判断还需查看的文件，并选择与当前上下文相关的部分。
- **支持的判断**：精简导航有助于按需深入；完整符号地图已经涉及源码，应放在 4.2。
- **边界**：4.1 的目录导航只借鉴这一思路，不称为 Aider 同款能力，不据此声称 Codex 有相同自动建图机制。

## JSON Crack：固定课程基线

- **作者／来源**：JSON Crack 上游仓库，commit `e99288b4eff060dcd53428f2a3a5c2f28eecffa6`。
- **链接**：[README · Visualize JSON into interactive graphs](https://github.com/AykutSarac/jsoncrack.com/blob/e99288b4eff060dcd53428f2a3a5c2f28eecffa6/README.md#visualize-json-into-interactive-graphs)、[README · Development](https://github.com/AykutSarac/jsoncrack.com/blob/e99288b4eff060dcd53428f2a3a5c2f28eecffa6/README.md#development)、[根 package.json](https://github.com/AykutSarac/jsoncrack.com/blob/e99288b4eff060dcd53428f2a3a5c2f28eecffa6/package.json)。
- **状态**：主 agent 已通过固定 SHA 的 raw 地址实际读取 README 与根配置；命令未运行。
- **原文要点**：项目介绍包含 JSON 的结构化交互图展示；README 指定 Node.js ≥24、pnpm ≥10，启动 Web 应用的文档命令为 `pnpm dev:www`；根配置的该脚本为 `turbo run dev --filter=www`，另有 VS Code 相关脚本。
- **教学用途**：这些文档与配置可以支持“产品做什么、哪些客户端本轮使用、Web 怎样启动”的新人导航。实际目录职责、安装结果、当前界面和功能行为仍需后续核实，不由脚本名称推断完整架构。

本轮没有实跑、截图、页面渲染或试讲结果。候选请求由调研要点转写，尚未成为经讲师选定的演示请求。
