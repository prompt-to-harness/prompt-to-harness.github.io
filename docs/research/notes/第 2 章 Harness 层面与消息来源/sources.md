# 来源与核验笔记

核验日期：2026-10-23；范围：2.1 p09 的术语预告与消息来源。两条均为候选。

## 1. Codex 的运行框架

- 原文：https://openai.com/index/unrolling-the-codex-agent-loop/
- 中文：https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/
- 作者 Michael Bolin，OpenAI；2026-01-23。已打开英、中文原文核实作者、日期及相关段落。
- 位置：开篇 terminology 段；Building the initial prompt 的 input 列表。
- 英文术语段将 harness 的职责指向核心 agent loop 与 execution logic；不是把模型本身叫 Harness。
- 初始化列表还列出 `role=user` 的环境消息，含当前目录与 shell；在初始化项目后才加入用户输入。与本次实测中环境消息、问候两条 user 相符。文章也列出 AGENTS/Skills 的初始化来源，但不把文章当作当前所有版本的完整协议说明。
- 复用已有 Context 引入素材中的同篇文章；新的截图只取术语段，不重做已有请求组成图。

## 2. 项目环境的 Harness engineering

- 原文：https://openai.com/index/harness-engineering/
- 中文：https://openai.com/zh-Hans-CN/index/harness-engineering/
- 作者 Ryan Lopopolo，OpenAI；2026-02-11。已打开原文核实。
- 位置：开头关于设计环境、意图与反馈循环；Repository knowledge；Enforcing architecture and taste。
- 文章记录一个团队如何使用现成 Codex，并建设仓库文档、工具可见性、架构规则、自定义 linter、结构测试、反馈与恢复机制。这是后续项目 Harness 的具体例子。
- 旧 Context 引入笔记把它列为二手、留后章；本次已重新核实一手原文，此状态仅更新本次候选，不表示已在第 2 章采用。
- 不采用其工时、代码数量、自主运行时长等团队自述数字；不推导出无须人工审查。

## 与当前课件说法的出入

- 现有『这层 Harness』无法单独说明层面关系；应明示现在拆 Codex 的运行框架，后面建设项目环境。
- 『两个意思』容易被听成排他定义；两个层面的范围有重叠，教学分层需标明是课程归纳。
- 『user 消息里，也有 Codex 提供的环境信息』事实有依据，但没有具体消息对照，角色与文字来源容易混淆。

## 截图和样稿

结果以章级素材登记为准。英文目标在默认中文环境以及 en-US 环境中均未找到，未产出图片；不能由工具的通用错误文案断言遇到了验证码。另尝试官方中文段落和 headed 模式；不绕过验证，不将网页核实与截图成功混为一谈。

最终：未产出原文截图。两张课程归纳 DOM 样稿已生成并逐张打开检查；修正页底来源链接与导航、前一张样稿来源残留问题后重截。两张内容区均为 370/370，无溢出，来源链接可见。不是官方段落截图，也不是正式页的修改。
