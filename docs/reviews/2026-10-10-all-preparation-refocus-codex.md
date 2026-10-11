# 0.2 课前准备：收敛为三个操作目标

- 日期：2026-10-10
- 审查者：Codex（lesson-polish；OpenAI Docs 核验尝试）
- 基于提交：857f0b9；分支 draft/ch00-preparation，保留前两轮未提交改动
- 范围：0.2 课件、讲稿、操作步骤、两份大纲、导航和 1.1 衔接；移除本分支新增的 ch00/preparation.html
- 已参考：同日 preparation-placement、preparation-draft 审查，编辑清单及当前大纲
- 用户确认：保留 0.1 访谈、0.2 准备；macOS 主演示、Windows 差异；CLI 沿用仓库 MiniMax 配置，App 接入单独核验

## 内容变化

三个主线：App/CLI 安装与 M3 配置；Git 安装、克隆、status/diff；本地欢迎页。8 页、17 步，初版预算 15 分钟，未试录。新增命令使用共享 repro 折叠区，讲稿导出同步包含步骤与链接。删除独立准备手册并迁移导航引用。

取消 0.2 环境单作业、SHA 抄录与分级验收；1.1 仍保留自己的首次任务记录。Git 用 README 加一行并恢复的真实例子解释 status 与 diff，不提前改欢迎语。直接克隆课程 Starter，后续推送前需要建立个人远端，此边界已登记内部大纲。

## 问题

| ID | 优先级 | 页面 | 规则 | 问题与处理 | 状态 |
| --- | --- | --- | --- | --- | --- |
| R1 | P2 | p14 | ED-002、ED-009 | 原稿只有安装入口，没有 CLI 配置。补 macOS/npm 安装、用户配置、隐藏输入密钥、Windows 差异与只读检查。CLI 模型 ID 经用户确认沿用 MiniMax-M3.1-Flash-Preview | 已修复（2026-10-10） |
| R2 | P1 | p14、p17 | 事实 | App M3 配置入口与环境变量机制无实测依据。官方网页 403/超时，浏览器连接不可用；按用户要求单独标为待核验，未虚构点击步骤或成功结果 | 待处理 |
| R3 | P2 | p13、p15 | ED-004、ED-008 | 原稿要求记录 Git 元数据，却没有读懂 status/diff 的例子。改为 clone 后编辑 README 一行、查看差异、仅恢复练习行 | 已修复（2026-10-10） |
| R4 | P2 | p15、p18、p19 | ED-005、ED-006 | 准备阶段环境单与验收负担过重。删去课前记录作业，按三个实际结果收尾 | 已修复（2026-10-10） |
| R5 | P2 | 准备手册、导航 | ED-011 | 命令分散在第二入口。迁入对应课件折叠操作区，删除独立手册，更新大纲和导航 | 已修复（2026-10-10） |

## 依据与验证

- 在线官方 App/config 页面返回 403；learn.chatgpt.com 超时；platform 页面出现访问拦截；未取得官方页面正文，未绕过访问限制。
- CLI 安装命令参考本机 @openai/codex 0.162.1 包 README；运行 codex --version 得到 0.162.1。本轮未重新安装。CLI provider 配置来自 tools/clean-codex.sh，已有第二、三章排练记录，本轮未调用模型。
- 独立临时克隆 ../course-starter 的已提交起点，验证 README 加一行前后 status/diff 与恢复；没有改动邻接 Starter 工作树。HTTP 服务使用临时端口，在 Chromium 打开 /setup-check/ 并刷新，welcome-message 与原始欢迎语一致。
- 浏览器专项：8 scenes、17 states，讲稿分步链接匹配；390px 阅读模式展开全部操作区后无横向溢出；0 浏览器脚本错误。已目视复核全部 8 页末步及配置展开区，截图在 /tmp/preparation-refocus-qa/。
- 首轮 make check 的内容、构建、第一章分步与 20 节展示检查通过；外链检查发现 Python 引用 kind 写成 source，已改为 read 后重跑。
- 修正后 make check 全部通过：55 HTML、198 scenes、1842 本地引用；第一章 49 scenes / 152 states；20 节展示、28 条外链结构检查均无错误。git diff --check 通过。
- 未进行新机安装、Windows 实操、App 接入、模型调用、出声试读或试讲；未提交或推送。
