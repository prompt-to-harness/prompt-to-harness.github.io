# 3.2 第二部分：修改与编写 Skill 的真实调用材料

> 2026-11-07，备课运行完成。用于讲师审阅与取材，尚未试讲、录制；本轮未制作 PPT 或逐字稿。第三部分已确认不再单列，设计见[第三章讨论](../../../../docs/outline/ch03-discussion.md)。

准备了两组示范：在 Game Studio 中只增加一项规划输出要求，用相同请求对照；从零写一个只生成手动检查计划的 `game-check-plan`，用完整规则、缺失规则和另一类游戏分别调用。共保留 10 次有效调用、31 条 API 请求记录，以及 3 个排除的运行目录。有效调用不等于输出全部正确，下面分别记录观察与问题。

## 材料与打开顺序

| 材料 | 用途 | 体量与状态 |
| --- | --- | --- |
| [正文修改补丁](planning-requirement.patch) | 在规划输出条目下增加一项检查要求；与原文对照 | 1 行新增；固定版本、补丁应用及输入差异已核对 |
| [相同规划请求](prompts/planning.txt) | 原版、修改版各在新会话调用，不在请求里重复新增要求 | 1 条；两次输入字节一致 |
| [原版回复](responses/original-verified.md)、[修改版回复](responses/modified.md) | 对照“测试方案”与“检查计划”，看结束和重开怎样表达 | 完整最终回复，约 6 KB / 7 KB；未人工润色 |
| [从零编写的 SKILL.md](example/game-check-plan/SKILL.md) | 当前演示版本 v3：单文件、无额外资源 | 19 行；已通过格式检查，三类输入均已调用 |
| [完整翻牌请求](prompts/created-memory.txt)、[规则缺失请求](prompts/created-missing.txt)、[躲避游戏请求](prompts/created-transfer.txt) | 正常输入、信息不足、迁移到不同玩法 | 每类 1 条；同类请求在各版本间保持不变 |
| [翻牌返回](responses/created-memory-v3.md)、[缺失规则返回](responses/created-missing-v3.md)、[躲避返回](responses/created-transfer-v3.md) | 检查当前版本的实际行为 | 完整最终回复；核心行为已核对，具体瑕疵见下文 |
| [v1](versions/game-check-plan-v1.md)、[v2](versions/game-check-plan-v2.md)及下表中的历史返回 | 展示试跑发现问题后如何改正文 | 两份课程自有历史文件；保留问题，不覆盖成成功记录 |
| [证据清单](manifest.json) | 请求、版本、读取事件、时间与原始文件 SHA-256 | 10 次有效调用及排除说明；完整请求、原生日志、trace 数据库在仓库外 |

## 示范一：只修改一项要求，再用相同请求调用

使用 [Game Studio 固定版本](https://github.com/openai/plugins/tree/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio)，保留全部 37 个 Skill、Reference、脚本等文件及目录关系。在 `skills/game-studio/SKILL.md` 的规划输出条目下增加：

```text
规划中的每个检查项都要写明前置状态、用户操作与预期可见结果，至少覆盖游戏结束和重新开始。这里只输出检查计划，不能将计划记为已执行结果。
```

这是课程自行添加的正文要求。名称、描述和其他文件未变；两版各有独立工作区与 Codex HOME，没有改日常插件缓存。

两次请求均为：

```text
请使用 game-studio，为最小网页翻牌游戏给一份简短开发方案。玩家每次翻开两张牌，配对成功的牌保留，全部配对后结束，并能重新开始。先给方案，不写代码、不创建项目，也不启动浏览器。
```

| 核对项 | 原版 `original-verified` | 修改版 `modified` |
| --- | --- | --- |
| 读到了哪份文件 | `events.jsonl` 第 4 行，`item_0`；工具返回包含原版完整正文 | 第 4 行，`item_0`；工具返回包含修改后完整正文与新增要求 |
| 结束与重开 | 原本就写了“全部配对触发一次 WIN”“结算 → 重开 → 可正常再玩” | 第 8 项写结束态，第 9、10 项写结束后及进行中重开 |
| 检查项写法 | 单测与浏览器 QA 的要点列表 | 12 行表格，每行拆为前置状态、用户操作、预期可见结果 |
| 是否声称已执行检查 | 给的是方案，没有执行试玩 | 标题明确写“待执行，非已通过结果” |
| 能讲的结论 | 原版已经考虑检查，不能说它遗漏了结束或重开 | 这次返回采用了新增的检查项结构；不能推成每次必然遵守或质量稳定性已提高 |

对照时只聚焦新增要求。两次返回还自行选择了不同牌数（12 张与 16 张）、素材路线等；这些差异不是本次单项修改的验收目标。修改版原始回复仍有不严谨处：例如正文写“第一张翻开时第三张不可点”，以及 16 张牌又建议窄屏改为 4×3。这里保留原话，不能把整份方案作为已经审定的实现规格。表格中“无残留计时器”等内部条件，也还需要改成可观察动作才能用于纯手动验收。

同次日志还能用于解释复用：修改版读取了 `game-playtest`、`web-game-foundations`、`phaser-2d-game`、`game-ui-frontend`，随后读取共享 Reference。它曾先找错 `skills/references`，得到退出码 1，再找到 `.agents/references`；这个绕路也在完整日志中。实际读取事件见 `manifest.json` 的 `tool_events`，不要按理想流程重写执行顺序。

## 示范二：从空目录写一个小 Skill，再根据试跑修订

任务边界是“根据游戏规则写手动检查计划”。第一版只需 `.agents/skills/game-check-plan/SKILL.md`，不需要 Reference 或脚本。讲解时依次填写名称与描述、缺少输入时怎么办、输出要包含什么、怎样核对；完整文件见上方链接。

当前 v3 把核心条件检查写成明确分支：缺少玩家操作、结束条件、重开规则中的任意一项，只提至多 5 个问题并结束；规则足够时给 6–10 项检查，覆盖正常循环、结束与重开。数值随本次需求变化，未规定的细节放入待确认，最后声明尚未执行。

| 版本与真实请求 | 观察 | 对正文的处理 |
| --- | --- | --- |
| v1：[翻牌返回](responses/created-memory.md)、[缺失输入返回](responses/created-missing-verified.md) | 能列检查表，但把“重新洗牌”写成顺序必须不同，又在待确认中询问；缺规则时仍展开很长的模板。还额外搜索项目文件 | v2 补随机结果约束、只根据输入、不查找实现、6–10 项优先，以及未知条件不当成确定预期 |
| v2：[翻牌](responses/created-memory-v2.md)、[缺失输入](responses/created-missing-v2.md)、[躲避](responses/created-transfer-v2.md) | 随机结果的表述已调整；仍出现“所有牌朝下，仅目视就核对 6 对”的不可操作项。缺玩法时仍生成检查表，甚至把“进行态”与“结束后输入屏蔽”混在一行 | v3 将缺少核心规则改成“只提问并结束”的分支；要求所列动作足以观察预期，隐藏内容先揭示或记录 |
| v3：[翻牌](responses/created-memory-v3.md) | 10 项检查覆盖翻牌、配对、结束、重开；计数时点列为待确认；声明尚未执行 | 保留为当前演示返回，具体瑕疵见下表 |
| v3：[缺失输入](responses/created-missing-v3.md) | 明确不生成计划，只给 5 个补充问题，没有假定某种玩法 | 本次满足缺少核心输入时停止编写的要求 |
| v3：[躲避](responses/created-transfer-v3.md) | 10 项检查使用方向键、金币、障碍、60 秒倒计时；覆盖两种结束与重开，没有沿用翻牌数值；声明尚未执行 | 本次迁移到另一类游戏成立，具体规则仍须人工审阅 |

这轮保留三版，每次修改都有前一次返回中的具体依据；没有对同一版本反复抽取一份好看的答案。v1 的躲避调用在模型启动前中止，未得到有效返回；v2、v3 才各有完整三类结果。

**当前返回仍需讲师指出的地方**：不要将“读到了 Skill”或“列出了三列”当成内容全部正确。

| 原始返回位置 | 问题 | 核对时怎样处理 |
| --- | --- | --- |
| v3 翻牌 C2、C5 | “任意两张”不能保证不匹配；C5 同时允许任意进行中状态，又写进度“变为 1” | 分别以已观察到不匹配的两张进入后续检查；任意进度下应检查“原进度 +1” |
| v3 翻牌 C9 与待确认 C | 一边断言等待期中的旧牌不再翻回，一边把旧动画是否取消列为待确认 | 用明确的可见结果检查重开后的新局不受旧回调影响；未约定的动画呈现不先判错 |
| v3 躲避第二、五、七项 | 自行加入“一次移动一格”和撞障碍后倒计时冻结，输入没有规定这些细节 | 只检查对应方向发生移动；是否按格移动、提前结束后计时显示怎样变化应先确认 |

这些是原始输出的审阅意见，没有改写进“真实回复”。本次验证了文件可发现、被读取及上述核心行为；没有证明所有规则始终被遵守，也没有执行这些游戏检查。后续录制可用缺失输入从 v2 到 v3 的变化讲清“把泛泛提醒改成明确条件与动作”，无须把全部试跑过程都讲一遍。

## 讲师本地准备

以下命令从课程仓库根目录执行。重建 Game Studio 复用第一部分的固定版本准备工具；它下载并核对 37 个文件的哈希，不向日常 Skill 目录安装任何内容。两版放在不同项目中，新写的 Skill 单独一个项目。

```bash
COURSE_REPO="$PWD"
AUTHORING_DEMO=$(mktemp -d)
python3 courseware/ch03/lessons/02-rules/tools/prepare-selection-demo.py "$AUTHORING_DEMO/original"
cp -R "$AUTHORING_DEMO/original/repo" "$AUTHORING_DEMO/modified"
patch -p1 -d "$AUTHORING_DEMO/modified/.agents" < courseware/ch03/materials/skill-authoring-20261107/planning-requirement.patch
mkdir -p "$AUTHORING_DEMO/created/.agents/skills"
cp -R courseware/ch03/materials/skill-authoring-20261107/example/game-check-plan "$AUTHORING_DEMO/created/.agents/skills/"
```

逐个进入项目后，启动独立会话并粘贴对应 Prompt。以原版为例；修改版改用 `modified` 工作区和另一个 HOME，小 Skill 改用 `created` 工作区，三个请求也分别开新会话：

```bash
cd "$AUTHORING_DEMO/original/repo"
CLEAN_CODEX_HOME="$AUTHORING_DEMO/original-home" CLEAN_CODEX_AUTH=minimax CLEAN_CODEX_MODEL=MiniMax-M3.1-Flash "$COURSE_REPO/tools/clean-codex.sh" --tap
```

沿用已配置的课程基线登录；本轮实际留证采用同一启动器的 `exec --json` 模式，审批 `never`、沙箱 `read-only`、关闭网页搜索，完整命令保存在各次私有 `logs/launch.json`。这是正文修改示范，不另承担第一部分的斜杠菜单演示。若现场返回不同，按实际内容核对；预备回放须标明运行日期和版本。

## 日志与核验范围

- 模型为 `MiniMax-M3.1-Flash`，Codex CLI `0.163.0`，claude-tap `0.1.146`。Game Studio 两版的用户请求完全一致，37 个工作区输入文件仅一个文件的一行不同；发现列表经目录路径归一后完全一致。每次是新会话。
- 每次都核对了发现列表、工具返回中的完整 Skill 正文、最终返回、结束事件及工作区输入文件哈希。10 次有效调用均正常结束，输入文件未改；日志中没有生成游戏代码或启动浏览器的动作。
- 原始材料保留在仓库外。当前机器从被忽略的 `lab-runs/ch03-skill-authoring-20261107/trial-location.json` 取得根目录；`manifest.json` 中的 `artifacts[].path` 都相对该目录。每次包含请求、输入哈希、stdout JSONL、stderr、完整最终回复、原生 rollout 和独立 SQLite trace 快照。快照已检查完整性，31 条 API 记录可沿清单回查。
- 公开的 `responses/` 只复制完整最终回复，不复制请求中的系统说明或第三方 Skill 全文；仅在有本机路径时作替换，是否替换和原始／公开文件哈希均记入清单。原始日志未按讲述顺序剪辑。
- 环境记录：首次隔离目录触发 Python 3.11 下载；排查时重复启动了原版与缺失输入的运行，stdout 文件受覆盖风险影响，这两个目录整体排除，换独立目录补跑，并加入运行锁。躲避 v1 停在下载阶段，0 条模型事件，亦排除。后续启动器改用本机 Python 3.12；模型、CLI、模型目录和任务输入不变。这是基础设施修复，不记为 Skill 成败。原版有效补跑晚于修改版，表中的“原版／修改版”表示文件版本，不表示先后运行顺序。
- 已完成：Skill 格式检查；补丁结果与实际修改版逐字一致；公开回复与原始回复一致性、全部证据哈希及目录链接检查。没有进行实际游戏试玩、教学效果验证或讲师试讲。

材料检查命令：`uv run courseware/tools/check-courseware.py --chapter courseware/ch03/materials/skill-authoring-20261107`，结果为 94 个本地引用、0 个错误；其附带的编辑检查为 0 个错误、7 个既有课件提示。当前 Skill 通过 `skill-creator` 的 `quick_validate.py`。本轮未运行全量 `make check`，未提交或推送。
