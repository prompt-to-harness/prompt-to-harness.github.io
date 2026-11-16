# 3.2.2 简单 Skill 候选实跑

日期：2026-11-10。
用途：判断简单正文案例能否讲清“要求怎样对应到动作与产物”，不是 Skill 提效的受控实验。
设计建议见[调研报告](../../../../docs/research/reports/3.2.2官方示例比较与候选实跑.md)，未改 discussion.md。

| 材料 | 用途 | 状态 |
| --- | --- | --- |
| [setup 请求](setup-prompt.txt)、[完整最终回复](setup-response.md) | OpenAI 官方 setup-demo-app 的一次课程基线调用。 | 原正文未改，未在请求中重复技术和组件要求。 |
| [浏览器截图](setup-result.png) | 实际产物的标题与两个卡片。 | 已用 Chromium 打开并检查，截图已目视核对。 |
| [核验结果](checks.json) | 文件、组件、依赖、样式配置、build 记录与浏览器结果。 | 指定项目项通过；HTTP 200，无浏览器脚本错误。 |
| [brand 请求](brand-prompt.txt)、[完整最终回复](brand-response.md) | 复核之前提出的文案示范是否有足够清楚的教学对应。 | 正文已进入上下文，但本次结果不足以鲜明说明两种场景的语气差别。 |
| [证据清单](manifest.json) | 原始请求、事件、返回的哈希，来源及排除条件。 | 无 Skill 文案对照已污染，明确排除。 |

## 原文与运行条件

- 官方教学示例：[OpenAI Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills)，2026-01-22，作者 Dominik Kundel、Gabriel Chua。
- 企业对照候选：[Sentry brand-guidelines 固定版本](https://github.com/getsentry/skills/blob/e94f22214528d69899d09c627b3315ddc3544816/skills/brand-guidelines/SKILL.md)。
- Codex CLI 0.163.0、MiniMax-M3.1-Flash，独立工作区、独立 HOME、新会话，网页搜索关闭。
- setup 使用 workspace-write，允许 npm 下载依赖；文案调用使用 read-only。
- 两个候选全文均在原生 rollout 第 12 行的 user 消息中展开进入上下文；setup 又在 stdout JSONL 第 5 行完整读取正文。
- brand 没有额外的工具读文件事件，不能把“全文进入上下文”误写成模型调用工具读取；核验结果分别记录两种证据。
- 原始源文件、应用源码、包锁、完整原生记录和 stdout JSONL 留在仓库外；本机位置由被忽略的 `lab-runs/ch0322-simple-skill-20261110/trial-location.json` 定位。
- 未修改任何日常 Skill 或插件，未发布应用，未改变课程主线项目。

## 实际问题与结论边界

无 Skill 文案条件主动搜索了相邻目录并读取源文件，不是有效基线，不计收益对照。
setup 调用开始时 npm 无权写隔离 HOME 中的缓存，模型改用临时缓存后完成；“root-owned”是模型最终回复中的解释，备课侧仅确认权限受限，未确认该目录归属问题。
模型最终回复中的检查声明保留原文，不能代替 checks.json 的实际核验。

实际核验包括：指定文件存在、两个 Card 实例、函数组件、Tailwind 依赖和 Vite 插件、CSS 导入、无 CSS Modules 和额外 UI 库、build 及 lint 成功记录、独立启动 dev 后的 HTTP 200 和浏览器渲染。
没有进行多模型、多次重复或效率实验，不证明这些要求每次都会采用。
卡片标题、颜色与排版是本轮选择，不能当作 Skill 固定规定。

未把第三方 Skill 全文复制进公开仓库；原文由上方官方链接查看，抓取版本以清单哈希为准。
