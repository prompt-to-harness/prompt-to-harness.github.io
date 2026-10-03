# Course Starter

Prompt to Harness 课程第 1–3 章的个人主页练习起点。1.1 先修改独立环境检查页，1.4 澄清需求，1.5 才在本仓库根目录创建 React + TypeScript + Vite 应用；随后继续在同一个仓库迭代主页、发布并加入小游戏。

初始状态没有根目录 `index.html`、`package.json`、锁文件、构建配置或 `src/`，这是预期状态。此时不要执行 `npm install` 或 `npm run dev`。

## 创建自己的项目

1. 从 [course-starter](https://github.com/prompt-to-harness/course-starter) 点击 **Use this template → Create a new repository**，创建自己的仓库，只复制 `main`。
2. 在新仓库点击 **Code**，复制自己的仓库地址，执行 `git clone 你自己的仓库地址`，再 `cd 你的仓库目录`。
3. 在该目录打开编码工具。之后所有任务路径均相对于这个项目根目录，目录名不必叫 `course-starter`。

也可下载课程指定版本的 ZIP，解压到新目录。在该目录执行 `git init`、`git add .`、`git commit -m "Initialize course starter"`，先建立初始提交再做练习；记录下载来源与版本。没有初始提交时，不能用普通 `git diff` 代替完整改动检查。

记录 `git rev-parse --show-toplevel`、`git branch --show-current`、`git rev-parse HEAD` 和 `git status --short`。模板生成仓库的初始提交与课程仓库不同，应分别记录课程来源版本和自己的初始提交。录制冻结的课程版本尚待发布。

课程练习在自己的仓库中完成，无需向课程仓库提交 PR。

## 按第 1 章跟做

| 小节 | 输入与操作位置 | 本节产出 |
| --- | --- | --- |
| 1.1 环境与首次闭环 | 填写 [环境检查单](docs/setup/ENVIRONMENT.md)，按 [任务卡](TASK_01_01.md)只修改 `setup-check/index.html` 的欢迎语 | 页面检查、diff 与 `docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md` |
| 1.2 Agent 与协作基础 | 复用 1.1 的请求、工具返回和结果 | 分类记录与 `docs/evidence/CH01_PROMPT_EXPERIMENT.md` 初稿 |
| 1.3 工具与权限 | 同一仓库、环境记录和欢迎语任务 | CLI 基线、权限选择记录 |
| 1.4 写清首页任务 | 读取 [PROJECT_BRIEF.md](PROJECT_BRIEF.md)、[占位内容](PLACEHOLDER_CONTENT.md)与必要仓库状态；只规划 | 人工确认的需求、小计划、文件清单和 `PROMPT_V1.md` |
| 1.5 完成首页任务 | 根据确认的 Prompt，在根目录创建正式应用；使用 [工具链说明](docs/setup/TOOLCHAIN.md) | 首页 v0、运行与构建证据、Review、本地提交和 `ch01-prompt-baseline` tag |
| 1.6 最小权限 | 结合课件“仅核对本地链接，不发布”任务作判断 | 在已有权限记录中补充判断与理由 |

证据文档与 `PROMPT_V1.md` 由学员在对应环节创建。它们不属于欢迎语单文件修改的授权范围，不预填执行记录或验收通过结论。

## 打开 1.1 环境检查页

直接用浏览器打开 `setup-check/index.html`，无需 Node.js 或 npm。需要在课件中连接练习副本时，在本项目根目录另开终端运行：

```bash
python3 -m http.server 4174 --bind 127.0.0.1
```

打开 <http://localhost:4174/setup-check/>，再在课件中点击“连接练习副本”。确认服务与编码工具指向同一个项目；课件默认展示的原始页面仅供预览。

首次任务的原文是“你好，欢迎来到我的练习页面。”，目标是“你好，欢迎来到 Vibe Coding 课堂！”。先复述、计划、人工确认，再修改、检查和反馈。

## 1.5 创建应用后再运行

先按工具链说明核对环境，在人工确认的小计划范围内创建应用文件与 npm scripts，然后在项目根目录执行：

```bash
npm install
npm run dev
```

打开 Vite 输出的本地地址。另开终端执行 `npm run build`；需要查看构建产物时再执行 `npm run preview`。以后按已生成的锁文件重装可使用 `npm ci`。Python 的 4174 服务只用于环境检查页，不能运行 React 源码。

按确认的 Prompt 核对文字、按钮行为、控制台、完整 diff 与构建产物。`setup-check/` 留在根目录，不能放入 `public/`、导入正式应用或加入构建入口；确认它未进入 `dist/`。检查通过后才保存提交和标签。

下一章继续使用自己的项目。重新练习或对照讲师进度前，阅读 [CHECKPOINTS.md](CHECKPOINTS.md)，保留当前项目再另建副本。

## 许可

本仓库原创环境检查页、练习材料和虚构占位内容采用 [MIT License](LICENSE)。初始页面使用系统字体，不依赖网络图片、字体或服务；不要提交密钥和不愿公开的个人资料。
