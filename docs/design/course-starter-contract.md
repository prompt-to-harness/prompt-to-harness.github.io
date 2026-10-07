# `course-starter` 设计契约

> 状态：初始 Starter 已实现并推送，2026-09-27。2026-10-07 补第 2 节讲师参考成品的线上版本。2026-10-06 修订第 2、7、8 节：章节参考起点改为带版本号的标签，学员落后时由 Codex 对照参考起点补齐前提（讨论与实验见 `courseware/ch02/materials/catchup/README.md`）。第 4、5 节描述的初始应用已不再是现状，见各节说明。本文不是章节已完成或发布效果的声明。
>
> 本文面向课程作者、录制和维护人员。它定义 Starter Repo 的职责、边界和恢复语义；学员看到的操作说明放在 `course-starter` 的 `README.md`、`BRIEF.md` 和 `CHECKPOINTS.md` 中。

## 1. 角色与范围

`prompt-to-harness/course-starter` 服务第 1–3 章的“个人主页与小游戏实验室”项目。它承担三条连续但逐步增加复杂度的实践线：

1. 第 1 章：从模糊想法到可运行、可审阅的首页 v0
2. 第 2 章：根据真实页面反馈进行小步修改，并完成 GitHub Pages 发布
3. 第 3 章：加入交互游戏，探索状态、调试、Plugin 和需求债务

第 4 章开始切换到 JSON Crack 等独立的真实开源仓库。`course-starter` 不承担 SDD、GSD、完整 Harness 或陌生大型仓库改造。

## 2. 仓库与历史

仓库只维护一个公开项目：

```text
main        干净 Starter，作为学员默认入口
course-run  讲师按课程顺序完成的代码演进
```

`course-run` 上的 commit 是各章参考起点。每章参考起点打带版本号的标签，发布后不移动；内容更新时发布新的版本号（2026-10-06 修订）：

```text
ch02-start-v1    第 2 章参考起点：第 1 章结束时的讲师首页（2026-10-06 发布，排练版）
ch03-start-v1    第 3 章参考起点（待制作）
```

### 讲师参考成品的线上版本（2026-10-07 确认）

`course-run` 部署到 course-starter 自己的 GitHub Pages（`https://prompt-to-harness.github.io/course-starter/`），作为讲师参考成品的线上版本；学员仍在自己由 Template 生成的仓库 `main` 上部署，互不影响。这一做法 2026-10-07 在结构相同的临时仓库实测可行（过程见[第 3 章提案](../outline/proposals/2026-10-05-ch03-storyline.md) §七第 6 条），需要：

1. course-starter 开启 Pages，来源选 GitHub Actions。开启时自动建的 `github-pages` 环境只允许默认分支 `main` 部署，要在环境的部署分支规则里加上 `course-run`，否则部署一步报 `Branch "course-run" is not allowed to deploy to github-pages due to environment protection rules`。
2. `course-run` 上的 Pages workflow 写 `push: branches: [main, course-run]`。`main` 不放 workflow（2.4 才教），而 `workflow_dispatch` 要求文件在默认分支，所以 `course-run` 只能靠 push 触发；照抄学员版的 `branches: [main]` 不会触发任何运行。
3. `vite.config` 的 `base` 写 `/course-starter/`。

第 2、3 条会进入参考起点标签，学员“从这一章开始”时 Codex 会看到。各章追赶预检要核对：Codex 不把 `course-run` 抄进学员的 workflow，`base` 用学员自己的仓库名。线上只显示 `course-run` 的最新提交；各章标签的状态以标签本身为准。设置在制作 `ch03-start-v1` 时一并完成（尚未操作）。从 Template 生成仓库时不带 `course-run`，依据是 GitHub 默认只复制默认分支，未实测。

参考起点由课程仓库的主线重跑脚本（`courseware/ch01/materials/mainline/`、`courseware/ch02/materials/mainline/`）真实运行得到，讲师审查后冻结，再提交到 `course-run`；讲师笔记和运行日志留在课程仓库，不进入 Starter。原先规划的 `ch01-complete` 等完成态标签不再使用。

这些参考起点用于学员补齐前提、录制复现和结果对照，不是要求学员覆盖自己工作的 reset 点。学员完成一章后，应在自己的仓库或分支中继续积累个人内容。第一版不开发 `reset`、`cherry-pick` 或自动备份工具。标签在对应章节真正完成并核验后再创建；初始 Starter 不伪造这些标签。

## 3. 技术与环境基线

- React + TypeScript + Vite
- Node.js 22（至少 22.12，使用当前 22.x 版本）
- npm 与 `package-lock.json`
- 默认只提供 `npm run dev`、`npm run build`、`npm run preview`
- 静态本地运行，不依赖后端、数据库、登录、外部 API、远程字体或远程图片
- 初始版本不引入 Tailwind、UI 组件库、动画库、MCP、Skill、`AGENTS.md` 或其他 Harness 配置

Node 版本、依赖安装和构建命令在 Starter 首次发布前必须真实试跑并记录。若环境验证需要调整版本，以实际可复现结果更新本契约和仓库文档。

## 4. 初始产品状态

> 现状说明（2026-10-06 补记）：起点已调整为不含 React 应用，首页在 1.5 按确认的 Prompt 创建（见 `WORKSPACE.md` 的维护边界）。本节保留为最初设想。

初始页面应“能运行，但明显尚未完成”：

- 一个 Hero 区域
- 一段个人或项目介绍占位内容
- 两到三个项目卡片
- 简单导航和页脚
- 基本移动端适配
- 自制 SVG 或 CSS 图形

页面不预先实现游戏，也不预先接入多页路由。初始代码保持容易阅读的规模，优先使用 `App.tsx`、`main.tsx` 和 `styles.css`；只有真实需求出现后才提取更多组件或模块。

## 5. 个人内容边界

> 现状说明（2026-10-06 补记）：当前起点没有 `src/content/site.ts`，个人内容随 1.4 的 `PROMPT_V1.md` 与 1.5 生成的代码确定。下文“讲师和仓库默认内容使用虚构人物”等原则仍适用。

学员可替换的内容集中在 `src/content/site.ts`，页面结构和样式从该文件读取。它至少承载：

- 显示名称或项目名称
- 简介
- 项目标题、描述和链接
- 导航标签或联系方式占位

讲师和仓库默认内容使用虚构人物、虚构项目和占位联系方式。课程不要求学员提交真实电话、地址、公司代码或其他敏感资料。后续章节的参考实现应尽量修改结构、样式和交互代码，不覆盖学员的 `src/content/site.ts`。

## 6. 章节演进

### 第 1 章

从 README 的一段项目介绍开始，完成一次小范围协作闭环；再根据 `BRIEF.md` 形成四段式请求，生成首页 v0。最低证据包括请求、实际页面、`npm run build` 输出和人工检查过的 diff。

### 第 2 章

在已有个人内容上建立页面反馈基线，完成小反馈、小改动、小验证，并完成 GitHub Pages 公开发布。页面内容可以不同，验收关注观察、修改、运行、评审和发布证据。

### 第 3 章

在同一仓库中加入记忆翻牌和第二个小游戏。只有在游戏入口确实需要时再引入路由或其他结构；游戏代码不应删除或重写学员的个人内容。游戏任务必须保留明确状态、重开和失败路径，便于后续调试和需求变化。

## 7. 学员获取与恢复

首选 GitHub Template Repository 生成学员自己的仓库；网络或权限受限时提供 ZIP 下载作为兜底。学员不需要向课程 Starter 仓库开 PR，也不应直接在课程仓库的 `main` 上工作。

学员始终在自己仓库的 `main` 上连续工作，不需要 checkout、tag 或覆盖文件（2026-10-06 确认）。落后或想直接从某章开始时，按课件该章开头“从这一章开始”的步骤：先提交当前工作；让 Codex 申请联网，把对应参考起点标签克隆到临时目录，按该章的前提清单只读对照；学员只确认补齐前提所必需的改动，个人内容和已有决定保留；改完由学员检查、提交。补齐记录由 Codex 起草，学员逐句核对后再提交，不写本机路径和用户名。不想用 Codex 时，从 GitHub 下载该标签的 ZIP 到另一个目录对照。

需要重新开始某一章时，先保存整个当前项目，包括未提交的内容，再从已发布的参考起点下载到另一个目录创建练习副本。熟悉 Git 的学员也可使用分支或 worktree，但切换分支不等于备份未提交工作。Template 生成的仓库有独立历史，不要求学员合并课程 upstream。课程文档不得要求学员执行会静默删除未提交工作的命令。

## 8. Starter 仓库中的文档

公开 Starter 只保留学员完成项目所需的三份核心说明：

- `README.md`：项目介绍、安装、启动、构建、预览和开始方式
- `BRIEF.md`：目标、约束、非目标和初始完成标准
- `CHECKPOINTS.md`：章节 checkpoint、适用场景和保留个人工作的恢复说明

逐字稿、录制说明、真实模型输出、失败 take、内部评分和制作门禁继续放在 课程仓库或内部材料中，不复制进 Starter。

学员可见的文件（含各章参考起点里的所有文件）只写任务输入和操作说明，不写课程稍后才揭示的结论：Codex 会读取这些文件并直接引用。2026-10-06 实测中，参考快照里的讲师笔记与 `CHECKPOINTS.md` 的一句提示都被 Codex 在 2.1 引用。

## 9. 许可证与素材

代码采用 MIT License。页面内容、SVG、CSS 图形和字体必须是自制、开源且允许再发布的材料。不得把来源不明的图片、字体或第三方课程代码复制进 Starter。

## 10. 发布前验收

第一版 Starter 发布前必须从干净目录真实核验：

1. `npm install` 可完成
2. `npm run dev` 能打开初始页面
3. `npm run build` 通过
4. 页面在桌面和窄屏下有基本可用性
5. 只修改 `src/content/site.ts` 即可替换示例个人内容
6. 从 `main` 创建学员副本后，能按第 1 章完成 README 小改动

后续各章发布时，再分别核验 `ch01-complete`、`ch02-complete`、`ch03-complete` 的参考状态可启动并构建。它们不是初始 Starter 的发布前置条件。

测试框架、E2E、CI 和更完整的游戏测试只在后续章节确实需要时加入，不作为 Starter 初始发布门槛。

## 11. 初始版本验收记录

- 公开仓库：[prompt-to-harness/course-starter](https://github.com/prompt-to-harness/course-starter)。GitHub Template 已启用，默认分支为 `main`。
- 基线：[448e6ac](https://github.com/prompt-to-harness/course-starter/commit/448e6ac43aa6e6e8a73601681c14b7cd65973af0)。`main` 和 `course-run` 均指向该提交，尚无章节 tag。
- 环境：Linux，Node 22.23.3，npm 10.9.9。干净副本中 `npm install`、`npm run build` 通过；主工作目录 `npm ci` 和构建通过，安装审计未报告已知漏洞。
- 运行：Node 22 下实际启动开发服务和构建预览，并用 Chrome 检查渲染。桌面与窄屏视口（320、360、375、414、768、1440px）无横向溢出；导航、键盘焦点、减少动画设置正常，控制台无错误，页面无外部资源请求。
- 内容边界：在独立副本中只修改 `src/content/site.ts`，验证中文姓名、简介、项目标题、描述、邮箱和项目入口可以替换；该副本重新构建及浏览器检查通过。
- 第一章起步：从 `main` 创建干净本地副本，修改 README「项目介绍」，diff 仅涉及 README。
- 文档已对照实现检查：公开 README、BRIEF、CHECKPOINTS 使用中文说明，明确虚构示例、可选项目链接和保留个人工作的恢复方式。页面示例使用英文，README 说明了改为中文时的语言元数据位置。

- 2026-10-06：`main` 推送至 `4a8b82c`（含“从第 2 章开始”改为由 Codex 对照参考起点补齐，删去提前透露 2.1 结论的提示）；`course-run` 推送至 `8e9a323` 并打 `ch02-start-v1`。从 GitHub 浅克隆该标签后 `npm ci`、`npm run build` 通过。

范围未扩展。后续待做的是按课程推进讲师实现、GitHub Pages 发布、游戏和章节标签；这次只交付初始 Starter。当前证据覆盖 Linux/Chrome 本地运行，不代表课程录制或其他操作系统的试跑已完成。

## 12. 相关依据

- [课程总纲](../course-outline.md)
- [Project 目标与约束](course-project-plan.md)
- [课程设计原则](course-design-principles.md)
