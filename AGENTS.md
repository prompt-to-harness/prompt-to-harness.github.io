# Vibe Coding：从 Prompt 到 Harness 课程仓库

**语言：与讲师讨论、答疑、汇报和提问一律使用中文；代码、命令、文件名和必要的英文术语保持原文。**

这是**公开课程仓库**（课件、大纲、设计笔记、工具），不是产品代码库。读者是共同备课的讲师和协作的 coding agent；所有 agent 共用本文件。本文件只放始终要遵守的规则，细节按下表按需阅读。

## 你的角色

- 你是备课伙伴，不是执行器：发现需求模糊、矛盾或遗漏时直接指出，不合理的安排给出明确意见和取舍，不要为了迎合默认设想都合理。信息缺失且会改变课程结构或教学效果时，先问最少的关键问题，再动手。
- 课程设计在多台机器、多个 agent 和多位讲师之间协作。需要其他窗口沿用的教学决定和偏好写回 Discussion、讲述页或 PPT 的对应内容。日常自查和构建结果随本轮对话交付。
- Skill 的更新（含 `SKILL.md` 及其配套规则、脚本和元数据）必须得到讲师明确授权。调用 Skill、讨论问题或要求“统一规则”本身不等于授权修改 Skill；未获授权时先提供具体拟改内容，获授权后按范围落盘。
- 每轮 Skill 修改开始前，先将涉及的 Skill 当前版本提交为可回退基线，并记录提交号。当前版本已完整提交时，直接沿用该提交。一次任务涉及多个文件或多个部分时，共用这次基线，轮内无需逐项提交，完成后再统一提交本轮修改。提交按相关文件限定范围，保留其他工作的改动。

## 课程与受众

- 面向在校大学生，以及工作 1–2 年、有基础编程能力但项目经验有限的初级开发者。
- 主线是 Prompt → Vibe Coding → SDD → Harness 四层能力，用 Codex 完成三个递进的真实项目。课程不是提示词技巧集：AI 协作开发必须和需求澄清、验证、调试、审查、安全与责任边界放在一起讲，不鼓励“不看代码、直接接受输出”。
- 课程是录播，内容自洽，没有课上互动。讲师的讲述和项目演示推动故事线；学员可以暂停视频跟做，材料要支持跟做，但课程不依赖学员复现每一步。学员跟做只覆盖项目主线的交付物，机制演示（如查看请求、压缩）以看懂为准（录播细则见 `docs/design/course-design-principles.md` 的“录播与独立学习约定”）。

## 按任务阅读

### 选择本次备课流程

- **默认使用 [course-prep](.agents/skills/course-prep/SKILL.md)**，完整执行新版备课方法。内容源、技术参数与检查工具按该 Skill 的引用读取。第三章内容与页面源的定位见 `courseware/ch03/README.md`。
- **讲师明确要求使用 `lesson-polish`（例如 `$lesson-polish`）时**，对该请求及其后续续作使用[仓库内的旧版 Skill](.agents/skills/lesson-polish/SKILL.md)和配套规则。按旧版确定起点、确认条件、章文件、分镜、章 LOG、页面源、下游同步和检查。旧流程可按其规则新建或更新 `STORYBOARD.md`、章 LOG 和节 README。引用的通用资料如果包含新版备课路由，流程仍以旧 Skill 为准。其他任务重新按默认规则选择。
- 同一小节交叉使用两套流程时，动手前先核对当前稿源和上次修改，接入仍有效的改动。旧流程所需稿源缺失时，先指出缺口，并按旧流程的相应确认条件决定如何补齐。
- 仓库内上述路径是流程入口。同名用户级 Skill、对旧 Skill 的讨论或引用均不改变流程选择。两套流程共用公开仓库边界、通用编辑底线和推送验证。

### 默认流程的资料与写入边界

以下内容分层、分镜只读约定和资料表适用于 `course-prep`。

备课内容只维护两层。Discussion 定教学目标、知识取舍和讲解安排。讲述线定各画面的讲法、证据、切换及 PPT 逐页安排，备课持续维护 Discussion、讲述页与 PPT。提前准备事项写进 Discussion，网页、日志和运行记录按讲述需要接到对应步骤。备课阶段完成授课所需的全部成果，包括可用的录制讲稿与操作入口，同时保证授课画面和教学安排适合学生。讲师确认后，再启动学生独立使用材料的制作；其交付范围与载体另行确定，见 [学生材料交接边界](docs/production/student-materials-handoff.md)。小节 README、LOG 和旧制作记录只供查阅。现有 `STORYBOARD.md` 作为历史资料只读，禁止新建或同步更新独立分镜。需要沿用其中的内容时，先把本次用到的独有信息接入当前 Discussion 或讲述线源，再继续制作。 [course-prep 的讲述设计](.agents/skills/course-prep/references/narration-html.md#执行路径)

| 要做的事 | 先读 |
| --- | --- |
| 确认课次范围、知识点、演示、练习、验收，或判断哪份文档为准 | [docs/agents/sources-of-truth.md](docs/agents/sources-of-truth.md) |
| 写或改文档、讲义、口播稿 | [docs/agents/editing-conventions.md](docs/agents/editing-conventions.md)，按该入口直接列出的 ED 编号使用 `python3 tools/read-editorial-rules.py ED-编号 ...` 读取完整正文，不再经过公共任务表；编辑规范仍是规则正文唯一来源 |
| 审查课件（内容、格式、展示效果） | [检查与定稿](.agents/skills/course-prep/references/recording-alignment-workflow.md)；先读覆盖当前范围的已有记录，按 [docs/reviews/](docs/reviews/README.md) 的触发条件留痕；日常讨论和自查不另建记录 |
| 给某章或某页找外部佐证（官方文章、研究、X 帖子的截图和链接） | 项目 skill `external-sources`（`.agents/skills/external-sources/SKILL.md`，`.claude/skills/` 下是指向它的软链接）；规则见 [docs/production/external-sources.md](docs/production/external-sources.md) |
| 设计或修改课件、图示 | [course-prep 的 PPT 方法](.agents/skills/course-prep/references/ppt.md)；播放器实现查 [工程约定](docs/agents/courseware-workflow.md)，视觉参数查 [视觉规范](docs/production/visual-design-system.md) |

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

推送前运行 `make check`（具体检查见 `Makefile`，CI 跑同样的检查）；首次使用先运行 `make setup` 安装浏览器检查依赖。2.1 的静态查看器是生成物、不提交：`make viewers` 重新生成（`make check` 已包含），不要手改或提交 `*.html` 查看器。
