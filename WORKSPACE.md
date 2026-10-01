# 课程工作目录约定

个人主页起点统一在 [prompt-to-harness/course-starter](https://github.com/prompt-to-harness/course-starter) 维护。课件中的文件路径均相对于学员自己的练习项目根目录。

```text
工作目录/
├── prompt-to-harness.github.io/           # 课件与课程设计
│   └── starters/personal-homepage/ # 原始环境页离线预览
├── course-starter/               # 本机课程起点仓库
├── projects/
│   └── personal-homepage/        # 学员独立项目的示例位置
└── experiments/                  # 临时试讲副本
```

## 取得练习项目

按 course-starter 的 README 从 GitHub Template 创建自己的仓库，克隆到课程仓库之外。例：在课程仓库根目录执行以下命令，将地址替换为自己的仓库地址：

```bash
git clone 你自己的仓库地址 ../projects/personal-homepage
cd ../projects/personal-homepage
git rev-parse --show-toplevel
git rev-parse HEAD
git status --short
```

目录名可自定，已有目录不要覆盖。所有课堂任务、编码工具与环境页服务均在同一个练习项目根目录执行。本机维护的同级 `course-starter/` 用于核对起始材料；需要试讲时另建副本，避免把演示答案写回起点。

记录课程来源版本与自己仓库的初始提交。课程统一发布 commit 尚待冻结，本地 SHA 不等于已发布课程基线。

维护者需要本地初始化时，可使用 `python3 tools/init-workspace.py`。它读取同级 `course-starter/` 的已提交起点，复制跟踪文件到 `projects/personal-homepage/`，建立独立 Git 历史并记录来源 SHA 和哈希。源仓库有未提交改动、已包含正式 React 应用或目标目录已存在时停止，不覆盖。`--starter` 可指定本地来源，`--workspace-root` 可指定目标工作目录。普通学员按上面的 Template 流程即可。

## 课件与项目分别运行

| 操作 | 工作目录 | 命令或入口 |
| --- | --- | --- |
| 展示课件 | `prompt-to-harness.github.io/` | `python3 tools/serve-courseware.py` |
| 打开课件 | 浏览器 | <http://127.0.0.1:8841/courseware/> |
| 执行课堂任务 | 自己的练习项目根目录 | 在此打开编码工具 |
| 显示实际环境页 | 同一练习项目根目录 | `python3 -m http.server 4174 --bind 127.0.0.1` |
| 查看实际环境页 | 浏览器 | <http://localhost:4174/setup-check/> |
| 1.5 创建应用后 | 同一练习项目根目录 | `npm run dev`、`npm run build` |
| 检查课件路径 | `prompt-to-harness.github.io/` | `python3 courseware/tools/check-courseware.py` |

课件默认内嵌 `starters/personal-homepage/setup-check/index.html` 的原始离线预览。点击“连接练习副本”才切换到 4174 服务；核对服务与编码工具操作的是同一份文件。修改练习项目不会改变原始预览。

8841 服务以课程仓库为根，无需对外暴露同级项目目录。1.1 的环境页用 Python 服务或直接打开 HTML；1.5 的 React 应用用 Vite 服务。

## 维护边界

- 起始材料只在 course-starter 维护；课程仓库保留环境页预览副本，更新时原样同步。
- 第 1–3 章连续使用学员自己的仓库。起点不提供 React 应用，1.5 才按确认的 Prompt 创建。
- `PROJECT_BRIEF.md`、`PLACEHOLDER_CONTENT.md` 和 `docs/setup/TOOLCHAIN.md` 在 course-starter；证据文件由学员按课件创建。
- 后续 JSON Crack 和 dependency-cruiser 仍按内部大纲指定版本放入独立项目目录；不受本次起点调整影响。
- 旧 `projects/personal-homepage/` 的初始化记录属于历史本地副本，不会自动迁移或覆盖。新练习请使用新的目录与已确认的课程起点。
