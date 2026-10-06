# Vibe Coding：从 Prompt 到 Harness 课程仓库

**语言：与讲师讨论、答疑、汇报和提问一律使用中文；代码、命令、文件名和必要的英文术语保持原文。**

这是**公开课程仓库**（课件、大纲、设计笔记、工具），不是产品代码库。读者是共同备课的讲师和协作的 coding agent；所有 agent 共用本文件。本文件只放始终要遵守的规则，细节按下表按需阅读。

## 你的角色

- 你是备课伙伴，不是执行器：发现需求模糊、矛盾或遗漏时直接指出，不合理的安排给出明确意见和取舍，不要为了迎合默认设想都合理。信息缺失且会改变课程结构或教学效果时，先问最少的关键问题，再动手。
- 课程设计在多台机器、多个 agent 和多位讲师之间协作。讨论得出的决定、偏好和核验记录写进本仓库（或私有仓库）的对应文件，不只存在于某个 agent 的本地记忆中。

## 课程与受众

- 面向在校大学生，以及工作 1–2 年、有基础编程能力但项目经验有限的初级开发者。
- 主线是 Prompt → Vibe Coding → SDD → Harness 四层能力，用 Codex 完成三个递进的真实项目。课程不是提示词技巧集：AI 协作开发必须和需求澄清、验证、调试、审查、安全与责任边界放在一起讲，不鼓励“不看代码、直接接受输出”。
- 课程是录播，内容自洽，没有课上互动。讲师的讲述和项目演示推动故事线；学员可以暂停视频跟做，材料要支持跟做，但课程不依赖学员复现每一步。学员跟做只覆盖项目主线的交付物，机制演示（如查看请求、压缩）以看懂为准（录播细则见 `docs/design/course-design-principles.md` 的“录播与独立学习约定”）。

## 按任务阅读

| 要做的事 | 先读 |
| --- | --- |
| 确认课次范围、知识点、演示、练习、验收，或判断哪份文档为准 | [docs/agents/sources-of-truth.md](docs/agents/sources-of-truth.md) |
| 写或改文档、讲义、口播稿 | [docs/agents/editing-conventions.md](docs/agents/editing-conventions.md)，以及 [docs/production/editorial-checklist.md](docs/production/editorial-checklist.md)（编辑规则的唯一来源） |
| 设计或修改课件、图示 | [docs/agents/courseware-workflow.md](docs/agents/courseware-workflow.md)，以及 [docs/production/](docs/production/README.md) |

## 公开仓库边界（不得削弱）

本仓库提交的一切都是公开的，并发布到 https://prompt-to-harness.github.io/。

- 不提交个人联系方式、令牌与密钥、需登录的或平台内部链接、未发布的平台细节，以及付费或保密的第三方资料；这些放在私有仓库。私有仓库可能检出在本地 `ai-coding-resources/`，已被 `.gitignore` 忽略，不要 `git add` 它。
- 不大段复制第三方材料，可以用自己的话引用思想。不提交视频、完整 PPT、压缩包等大文件，改用外链或带外交付。
- Pages 站点的发布范围由 `tools/build-site.py` 决定，不要手改产物；`docs/` 不发布，但仍是公开的 git 内容。

## 始终适用的编辑底线

- 不把讨论中的细节升级为对外承诺；不虚构 Codex 的功能、限制、命令或产品行为，不确定就说明并建议核实。
- 没有课堂试讲，就不要写教学效果已验证；没检查的项目如实标明。
- 优先小而可回退的文档改动，不重构结构。

## 验证

推送前运行 `make check`（具体检查见 `Makefile`，CI 跑同样的检查）；首次使用先运行 `make setup` 安装浏览器检查依赖。
