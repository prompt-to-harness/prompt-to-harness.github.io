# Prompt to Harness：AI Coding 课程

课程站点：<https://prompt-to-harness.github.io/>

这是 AI Coding 课程的公开仓库，包含课件、课程大纲、设计文档和制作工具。站点只发布阅读与演示页面；讲稿、分镜、设计文档等其他内容保存在本仓库，供查阅和协作。

课程仍在制作中。大纲和课件反映当前的设计与制作状态，不代表已经过课堂验证的学习效果，也不构成对课程时间、范围或服务的承诺。

## 目录

| 路径 | 内容 |
| --- | --- |
| [`courseware/`](courseware/README.md) | 课件：首页、第 0 章、第 1 章的阅读与演示页面，讲稿、分镜和练习页 |
| [`starters/`](starters/README.md) | 练习起点中环境页的离线预览；练习起点本身在 [course-starter](https://github.com/prompt-to-harness/course-starter) |
| [`AGENTS.md`](AGENTS.md) | 讲师与 coding agent 共用的协作指引：内容依据、公开边界、编辑与验证约定 |
| [`docs/`](docs/README.md) | 课程大纲、设计文档、制作规范、软件工程专题 |
| [`demos/`](demos/README.md) | 视觉系统与课件播放器的演示 |
| [`discuss/`](discuss/README.md) | 课程设计讨论的整理稿 |
| [`.planning/research/`](.planning/research/README.md) | 专题调研的 brief、证据和报告 |
| [`whoami/`](whoami/README.md) | 讲师介绍 |
| [`tools/`](tools/) | 课件本地服务、站点构建和工作目录初始化脚本 |

课程内容以 [课程平台交付版大纲](docs/course-outline.md) 和 [共同内部大纲](docs/outline/course-outline-internal.md) 为准。

## 本地预览

```bash
git clone https://github.com/prompt-to-harness/prompt-to-harness.github.io.git
cd prompt-to-harness.github.io
python3 tools/serve-courseware.py
```

然后打开 <http://127.0.0.1:8841/courseware/>。工作目录与练习项目的关系见 [WORKSPACE.md](WORKSPACE.md)。

## 站点如何发布

推送到 `main` 后，GitHub Actions 会先运行课件链接检查，再用 `tools/build-site.py` 构建站点并部署到 GitHub Pages。站点只包含课件中的阅读、演示、练习和课前准备页面，以及它们依赖的样式、脚本、字体和图表；`.md` 文件、`speaker.html` 讲解页、制作脚本和归档不会发布。`docs/` 不发布到站点，但仍是公开的 git 内容。本地可以运行 `python3 tools/build-site.py` 在 `_site/` 查看构建结果。

## 许可

自有代码、课件与文档采用 [MIT License](LICENSE)。字体、截图等第三方内容见 [第三方内容说明](THIRD_PARTY_NOTICES.md)。

## 贡献约定

完整约定见 [AGENTS.md](AGENTS.md)，要点如下：

- 不提交个人联系方式、令牌、合作平台的内部链接，以及付费或保密的第三方资料。这类材料保存在单独的私有仓库。
- 区分已确认的决定、工作假设和不得对外承诺的事项，不把讨论中的细节升级为公开承诺。
- 变更保持小而清晰；资料整理、共识同步和具体课件编排分别提交。
- 不提交大体积的视频、完整 PPT 或压缩包。
