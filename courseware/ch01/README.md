# 第一章：从环境启动到首页原型

第一章正式课件工作区。按小节集中维护演示、讲稿和练习，保留阅读/演示切换、目录、请求复制、展开解析、讲解全文、人像辅助框及专注演示。目录正式化不代表所有实操材料或录制核验已完成。

## 打开

从[课程首页](../index.html)进入，或直接打开 [index.html](index.html)。也可在课程仓库根目录运行：

```bash
python3 tools/serve-courseware.py
```

访问 <http://127.0.0.1:8841/courseware/>，再进入本章。服务以课程仓库为根，确保跨目录的 Starter 模板预览可以加载。字体、脚本和样式在 `courseware/shared/`，无需 npm 安装。外部文档和实际 CLI/模型操作需要相应环境。

| 小节 | 演示 |
| --- | --- |
| 1.1 环境搭建与第一次 AI 协作闭环 | [打开](lessons/01-environment/index.html) |
| 1.2 Agent 执行机制与 AI 协作基础 | [打开](lessons/02-agent/index.html) |
| 1.3 工具使用与权限 | [打开](lessons/03-tools/index.html) |
| 1.4 写清首页任务：从模糊需求到可执行 Prompt | [打开](lessons/04-prompt/index.html) |
| 1.5 完成首页任务：从已确认 Prompt 到可验收的首页 v0 | [打开](lessons/05-homepage/index.html) |
| 1.6 工程经验：为什么不能给 Agent 所有权限 | [打开](lessons/06-permissions/index.html) |

页面、步骤和时长预算以各节 `lesson.js` 为准（讲稿页显示每页预算），尚未计时试讲。URL 使用 `?mode=slides#p04` 进入演示并定位；省略参数为阅读模式。

## 文件组织

```text
ch01/
├── index.html                 # 第一章入口
├── preparation.html           # 课前准备与排障
├── lessons/
│   ├── 01-environment/         # 1.1 环境与首次闭环
│   ├── 02-agent/               # 1.2 Agent 与协作基础
│   ├── 03-tools/               # 1.3 工具与权限
│   ├── 04-prompt/              # 1.4 写清任务
│   ├── 05-homepage/            # 1.5 完成任务
│   └── 06-permissions/        # 1.6 最小权限
├── materials/                 # 备课材料与补充清单
├── tools/                     # 讲稿导出；样式、校验与字体在上级 shared/、tools/
└── verification.md            # 验证记录与边界
```

每个小节的 `index.html` 为演示页，`lesson.js` 是正文与讲稿的内容源，`speaker.html` 展示讲稿，`script.md` 是导出的 Markdown 讲稿。修改教学内容时先改该小节的 `lesson.js`，再导出讲稿。

旧版 `demos/ch01-presentation/` 已迁移到这里。原页码锚点及 `mode=scroll` / `mode=slides` 参数保留，例如 [1.4 P22](lessons/04-prompt/index.html?mode=scroll#p22)。旧网址需要更新，不再保留重复课件副本。

## 教学路线与材料

- CLI 是主要演示与完整验收入口。经核验的桌面端仅作临时入口，1.3 结束前补齐 CLI 基线。
- 1.1 修改独立的 `setup-check/index.html` 欢迎语，检查页面与 diff，按证据反馈修正。
- 1.4 读取 Brief、提出问题并确认四段式 Prompt；1.5 创建 React + TypeScript + Vite 骨架与首页，验证后建立 `ch01-prompt-baseline` 检查点。
- 1.6 使用“仅核对本地链接，不发布”任务判断最小权限。
- [课前准备与排障](preparation.html)与当前内容同步。
- [Starter 源文件说明](https://github.com/prompt-to-harness/course-starter)在独立的 `course-starter` 仓库维护；从该仓库创建自己的练习项目。`PROJECT_BRIEF.md`、`PLACEHOLDER_CONTENT.md`、`docs/setup/TOOLCHAIN.md` 均在项目中。课程中只修改自己的练习仓库，目录示例与获取步骤见[工作目录约定](../../WORKSPACE.md)。课程统一发布 commit 仍待录制冻结。

P04 默认嵌入随课件提供的原始 Starter 页面，明确标记为“仅供预览”。要演示实时修改，在同级 `projects/personal-homepage/` 目录运行 `python3 -m http.server 4174 --bind 127.0.0.1`，再点“连接练习副本”。核对服务目录，确保展示与 CLI 修改的是同一份文件；面板出现不代表任务通过。

## 讲稿与维护

`lessons/*/lesson.js` 保存正文、原页码、Prompt、口播、教学分支与讲师备注。同目录的 `speaker.html` 从这一内容源展示讲解全文。

在本章目录运行，导出六份讲稿到 `lessons/*/script.md`：

```bash
python3 tools/export-chapter-scripts.py
```

`export-script.py`保留为兼容入口，同样导出六节，不再写回外部旧版 `docs/`。早期 storyboard、录制说明、脚本和模板截图已清理，可从 Git 历史查看；录制依据以当前小节内容源和配套材料为准。

内容以本仓库的[深蓝平台交付版大纲](../../docs/course-outline.md)和[共同内部大纲](../../docs/outline/course-outline-internal.md)为依据。历史上从 OpenClass 导入的记录保留在验证文档中，当前操作路径以本目录为准。

新增文字后，按[字体说明](../../docs/production/fonts.md)重建全课字体子集（`courseware/shared/fonts/`）。

## 验证边界

目录或链接调整后，在 `courseware/` 运行 `python3 tools/check-courseware.py`，检查本地页面、资源与场景锚点。浏览器渲染和交互需另外验证。

页面检查见 [verification.md](verification.md)。本次迁移不代表 CLI、模型接入或学员项目实操已经通过；源课件中的待核验、样例与失败分支均保留。
