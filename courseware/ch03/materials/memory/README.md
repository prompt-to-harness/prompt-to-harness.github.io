# 第 3 章 Memory 独立实验（预检 B）

> 状态：2026-10-06 讲师机器上运行 8 轮。第 1 轮由讲师按步骤手动推进（脚本初版在会话二处中断），据此改写了 [`run-memory.sh`](run-memory.sh)；第 6–9 轮的脚本结果见文末；第 9 轮起对照会话不再被污染，但整理仍有约三分之一失败。环境是课程基线 `tools/clean-codex.sh`（API key 登录，MiniMax-M3.1-Flash-Preview），Codex CLI 0.160.0–0.160.1。未经另一位讲师复现，未试讲。

## 问题与位置

3.6 的独立实验：让 Codex 自己记住一条规则，下次新会话里它知道吗？知道的还对吗？依赖后台整理、跨会话状态和隔离的 Codex home，学员项目未必具备，所以独立做；学员看懂即可，重跑选做。起点用第 2 章冻结候选（没有记忆翻牌代码），只借项目背景。

## 由代码决定的部分（子模块 `third_party/codex`，`rust-v0.163.0`）

> 2026-10-20 子模块由 `b741e480`（2026-10-03，main）改为 `rust-v0.163.0`。已比较下表和后文引用的源码位置：记忆提取与整理的逻辑、模板和常量（6 小时闲置、整理冷却、每次启动 2 个会话、10 天、2500 token、32 KiB、默认 v1）没有变化；`config/src/types.rs` 与 `core/src/config/mod.rs` 的改动与记忆无关，行号可能有偏移（如 `types.rs` 的默认值行）。比较的是源码，没有重跑实验；第 1–9 轮的实测仍是在 Codex 0.160.0–0.160.1 上做的。

| 行为 | 源码位置 |
| --- | --- |
| 记忆功能默认关闭：`features.memories`，另有 `memories.use_memories`、`memories.generate_memories` | `config/src/types.rs`；`codex features list` |
| 记忆说明只在 `memory_summary.md` 非空时注入请求 | `ext/memories/src/prompts.rs` 的 `build_memory_tool_developer_instructions` |
| 被明确要求时，把笔记写到 `memories/extensions/ad_hoc/notes/<时间>-<短名>.md` | `ext/memories/templates/memories/read_path.md` 第 119–123 行 |
| 默认使用 v1 说明；“Memory is not proof of current behavior”只在 v2 说明里 | `config/src/types.rs`（默认 `MemoryVersion::V1`）；`read_path_v2.md` 第 12 行 |
| 每次根会话启动时在后台跑两段：从闲置 6 小时以上的会话提取，再整理成 `MEMORY.md`、`memory_summary.md` | `memories/README.md`；`config/src/types.rs` 的 `DEFAULT_MEMORIES_MIN_ROLLOUT_IDLE_HOURS` |
| 整理成功后 6 小时内不再整理（不可配置）；失败后按退避重试 | `state/src/runtime/memories.rs` 的 `PHASE2_SUCCESS_COOLDOWN_SECONDS` |
| 两段的模型默认取 provider 的推荐值（OpenAI 模型名），可用 `memories.extract_model`、`memories.consolidation_model` 改 | `memories/write/src/phase1.rs`、`phase2.rs` |
| 用到记忆时，回答末尾带 `<oai-mem-citation>`，列出引用的记忆文件和行号 | `read_path.md`；实测原始回答 |

## 第 1 轮（手动推进）观察

| 步骤 | 看到的 |
| --- | --- |
| 会话一（全新 home）说“记住：记忆翻牌里，两张牌不匹配、等待翻回期间的点击一律忽略。” | 请求里没有任何记忆说明（这时还没有 `memory_summary.md`）。Codex 新建了仓库里的 **`AGENTS.md`**，写下规则，说“后续会话会自动读取” |
| 启动时的后台整理 | 本轮全新 home 的第一次整理没有生成 `memory_summary.md`，1 小时后的会话里才生成（只有占位内容）。之后另开的全新 home 中，一次以 `failed_agent` 结束、按退避 1 小时后才重试，一次直接成功；失败原因未查明 |
| 再次说“记住…”（已有 summary，移走 `AGENTS.md`） | 请求里有记忆说明。Codex 申请在沙箱外写笔记，理由“是否允许我在记忆目录的 ad_hoc/notes 下创建并写入这条翻牌点击锁定规则？”，人同意。笔记除了人说的规则，还自己加了“落地要求：用显式的锁定标志位……不要依赖延时回调去推断状态” |
| 新会话（整理） | 6 小时冷却内不整理；**人工把上次整理时间改到 6 小时前**后，约 2 分钟整理完成。`memory_summary.md` 把 Codex 自己加的那句写成用户规则，还多了一条“把用户说的游戏规则当作长期契约，不重新讨论” |
| 新会话问“等待翻回期间的点击，我们是怎么定的？” | 请求里有记忆摘要（含规则原文）。回答复述规则，同时给出“落地要求”“定性：长期行为契约，不重新讨论”“踩过的坑”，都不是人说的；回答末尾引用了笔记和 `MEMORY.md` 的行号。它也去仓库搜了实现，说明“这条规则目前只存在于记忆中，还没有落到代码里” |
| 关闭记忆的新会话问同一个问题 | “这个决定目前不存在”，列出查过的文件和 git 历史，给出两种常见口径，并说要先由人确认口径再动代码 |
| `/memories` | 两个开关“Use memories / Generate memories”，保存到 `config.toml`，“从下一个会话起”生效；不是关闭本会话 |

## 对课程设计的含义

- **能在课程基线下演示，但要准备**：两个阶段的模型要指到 MiniMax；第一次整理可能失败并退避 1 小时（3 个全新 home 中 2 次第一次没成功），成功后冷却 6 小时。录制用提前准备好的 home（至少前一天做好初始化），或者在画面上明说“这里人工把整理时间改早了”。
- **第一个会话里的“记住”进了 `AGENTS.md`**——这恰好是第三节表里“仓库”那一行：同一句话，Codex 有时写进仓库、有时写进记忆，取决于它这时看到了什么说明。可以考虑作为 3.6 的开场证据（需要再跑几轮看是否稳定）。
- **记忆会长出人没说过的内容**，并在后续回答里被当作规则。这比“记忆可能过期”更直接地说明为什么可信度要排在代码和仓库文档之后，也能直接回到 3.2 的问题：这条规则是谁定的？
- 关闭记忆的对照回答“这个决定不存在”，正好引出需求债务：决定只在记忆里，没在仓库里。
- 不再引用“Memory is not proof of current behavior”（默认 v1 的请求里没有）。

## Memory 和 AGENTS.md、自定义文件有什么不同（2026-10-06 补测）

同一个仓库里放三样东西，用 `codex exec` 发一次请求，看它们各在哪里（[`../tools/reqscan.py`](../tools/reqscan.py) 写出第一次请求全文后逐条查看）：

| | Memory | `AGENTS.md` | 自定义文件（如 `docs/RULES.md`） |
| --- | --- | --- | --- |
| 在请求里的位置 | 第 1 条 `developer` 消息：约 1.2 万字的“怎样使用记忆目录”说明，加上 `memory_summary.md`（截断到 2500 token） | 第 2 条 `user` 消息，标题“# AGENTS.md instructions for <目录>”，全文（上限 32 KiB） | **不在请求里**，模型自己决定是否去读 |
| 详细内容 | `MEMORY.md`、`rollout_summaries/` 等要模型自己去搜去读，读了要在回答末尾引用 | 就是全文 | 同左 |
| 谁写的 | Codex 的后台整理（模型生成） | 人（或人让 Codex 写、人审过） | 人 |
| 存在哪 | 本机 Codex home 的 `memories/`（里面有一个只给 Codex 自己比对用的 git，不是你的仓库） | 仓库，进 git | 仓库，进 git |
| 换机器、换人 | 不一样 | 一样 | 一样 |
| 什么时候更新 | 会话启动时的后台任务，见下 | 人改、提交 | 人改、提交 |

依据：实测请求记录；子模块 `ext/memories/src/prompts.rs`、`ext/memories/src/lib.rs`（2500 token）、`core/src/config/mod.rs`（32 KiB）。

所以讲师的判断是对的：Memory 是“本机上 Codex 自己记的笔记”，不进 git，同一个项目在两台机器上会不一样。团队规则、需要复现的东西应该写在仓库里。课程里的说法：Memory 适合“我个人在这台机器上的偏好和经验”，不适合“项目的规则”。

## 6 小时的限制下，Memory 平时到底用不用得上

由代码决定（子模块 `rust-v0.163.0`）：

| 来源 | 什么时候进记忆 |
| --- | --- |
| 普通对话（交互界面、VS Code；`codex exec` 不算） | 某个会话**最后一次活动之后闲置满 6 小时**（`memories.min_rollout_idle_hours`，只能设 1–48），下一次启动新会话时，后台从它提取；每次启动最多处理 2 个、只看 10 天内的会话 |
| 明确说“记住……” | 笔记马上写进 `memories/extensions/ad_hoc/notes/`，但要等下一次整理才进摘要 |
| 整理（把以上合进 `MEMORY.md`、`memory_summary.md`） | 每次启动新会话时尝试；**上次成功后 6 小时内不再整理**（写死，不能配置） |

换成日常节奏：今天的对话，大约明天第一次打开 Codex 时才变成记忆；同一天之内基本用不上。它是“跨天的个人经验”，不是“这次会话里的上下文”。

补测（人工构造：把一次普通对话的最后活动时间改到 2 小时前、`min_rollout_idle_hours=1`、绕过整理冷却）：新会话启动后，后台从那次对话里提取出“用户为第 3 章记忆翻牌确定步数口径：每翻开两张牌算一步，成功和失败都算”，原话也记下了。也就是说，不说“记住”，普通对话里定下的规则也会进记忆——只是要等。

## 关闭记忆的对照会话怎样才不被污染

第 7、8 轮的对照会话都去上级目录翻到了笔记。补测：给对照会话配一个权限配置，禁止读取运行目录、本课程仓库和记忆目录，只允许读写实验仓库：

```toml
default_permissions = "memlab"          # 必须放在文件开头（顶层键）

[permissions.memlab]
extends = ":workspace"

[permissions.memlab.filesystem]
"<运行目录>" = "deny"
"<记忆目录>" = "deny"
"<实验仓库>" = "write"
```

Codex 的回答：“这次运行的记忆目录在允许读取的范围之外……我不会猜一个答案给你——那只会变成编造的规则”，并列出仓库里查过的地方。脚本的会话四已改用这个配置。这也是一个可以讲的区别：**关掉记忆**只是不往请求里放，**禁止读取**才是看不到。

## 怎么跑

```bash
courseware/ch03/materials/memory/run-memory.sh                 # 默认 lab-runs/ch03-memory/<时间>，约 15–25 分钟
SKIP_COOLDOWN=0 courseware/ch03/materials/memory/run-memory.sh <目录>   # 不改数据库：会话一之后停下
RESUME=1 courseware/ch03/materials/memory/run-memory.sh <同一目录>      # 6 小时后继续
```

脚本在 tmux 里开交互会话，遇到写记忆目录的申请自动同意一次并留下屏幕记录。人工构造的条件（改整理完成时间、改重试时间）都写进 `logs/steps.log`。请求记录用 [`../tools/reqscan.py`](../tools/reqscan.py) 查，例如 `python3 courseware/ch03/materials/tools/reqscan.py <会话 id> 记忆翻牌 ad_hoc/notes`。

## 脚本运行结果（第 3–8 轮，2026-10-06）

脚本边跑边改，改动原因都写在脚本注释里；第 2–5 轮是脚本自身的问题（识别回答结束、会话一不发申请），不计入下表。

| 项目 | 第 6 轮 | 第 7 轮 | 第 8 轮 |
| --- | --- | --- | --- |
| 会话零：第一次整理 | 成功 | `failed_agent`，人工改重试时间后第二次成功 | 成功 |
| 会话一：写笔记 | 申请 `mkdir`，同意后写入 | 先只说“需要提升权限”就结束，人回“同意，写进记忆笔记吧”（代答）后申请并写入 | 申请，同意后写入 |
| 笔记里 Codex 加的内容 | 范围、副作用、“意图：防止玩家（或自动化脚本）误触” | 加了“落地建议”，但**标明“非用户原话，实现时确认”** | 加了显式锁定位、覆盖重开入口、不补放点击等“落地要求”，没有标明 |
| 会话二：整理 | 没整理：会话一启动时已跑过一次“无变化”的整理，重新开始冷却（脚本据此把绕过冷却移到会话二之前） | 成功；summary 把“区分用户决定与建议”也写成一条 | `failed_agent`（3.5 分钟） |
| 会话三：开记忆提问 | summary 里没有，Codex 自己翻记忆目录读到笔记并复述 | 按原话复述规则，指出落地机制“只是建议，不是已批准的要求”；“以上均来自记忆，未重新核对仓库代码” | （整理失败，未分析） |
| 会话四：关记忆对照 | — | **被污染**：Codex 去上级目录翻到脚本复制到日志里的笔记 | **被污染**：用了 11 分钟逐级翻上级目录，找到 Codex home 下的笔记和本仓库 `lab-runs/` 里的运行日志 |

第 9 轮（会话四加了禁止读取的权限配置）：会话零、会话一正常；会话二整理又以 `failed_agent` 结束；会话三没走摘要，自己翻笔记目录找到规则，并指出“这条规则只存在于 ad-hoc note，还没有被合并进 MEMORY.md……下次开新会话时不会被自动召回”；**会话四对照干净**：查遍仓库没找到，说明记忆目录不可读，给出通用做法并标明“不是我们之前的决定”。

### 补充结论

- **整理不稳定**：本日共约 11 次整理，4 次 `failed_agent`（MiniMax 作整理模型，原因未查明）。录制必须准备参考记录，失败时明说。
- **Codex 加的内容是否标明“非用户原话”，每轮不同**（4 份笔记里 1 份标明）。课上不能预设哪一种，按当次结果讲；两种都能接上“这条规则是谁定的”。
- **关闭记忆不等于看不到记忆文件**。请求里没有记忆说明，但笔记就在磁盘上，Codex 的读权限能翻到上级目录和其他目录（第 8 轮对照会话自己说：“这不是记忆告诉我的……我是靠翻文件查到的”）。这可以接回 1.3 的沙箱：限制的是写，不是读。对照组要有意义，仓库、Codex home 和运行记录都不能放在能从仓库逐级向上翻到的位置；已用权限配置解决，见上文“关闭记忆的对照会话怎样才不被污染”。
- 第 1 轮手动推进时的对照会话没有翻上级目录，回答“这个决定目前不存在”。同样的设置，Codex 是否去翻也因轮而异。

## 三家记忆机制对比（2026-10-07 核查）

讲师追问“为什么要等 6 小时才起作用”后的核查。Codex 一列依据子模块 `rust-v0.163.0` 源码；Claude Code 一列依据[官方文档](https://code.claude.com/docs/en/memory.md)原文；Claude 应用一列依据[官方 release notes](https://support.claude.com/en/articles/12138966-release-notes) 与[帮助中心](https://support.claude.com/en/articles/11817273)。均为文档与源码阅读，Claude 两列未实测。

| | Codex 本地 Memories | Claude 应用 Memory | Claude Code auto memory |
| --- | --- | --- | --- |
| 怎么生成 | 后台两段：从闲置会话提取，再全局整理成 `memory_summary.md` | 对话中逐条写入主题记录 | Claude 在会话中直接写记忆文件，`MEMORY.md` 作索引 |
| 何时生效 | 闲置 6 小时后，下一次启动时提取；整理成功后冷却 6 小时 | 下一次对话 | 下一个会话启动时加载 `MEMORY.md` 前 200 行或 25KB，主题文件按需读 |
| 说“记住” | 只写一条 ad_hoc 笔记，下一次整理后才进摘要 | 下一次对话 | 立即写文件，下个会话可见 |
| 默认 | 关 | Free/Pro/Max 开，Team/Enterprise 关 | 本地会话开 |
| 存在哪 | 本机 `~/.codex/memories/` | 云端账号，按 Project 隔离 | 本机 `~/.claude/projects/<项目>/memory/`，不跨机器，不进 git |
| 人能否编辑 | 官方称生成状态，不建议手改 | 设置里逐条编辑、删除 | 普通 Markdown 文件 |

更新时间线（与课程相关的部分）：

- Claude 应用 2026-07-10 从“每 24 小时汇总一次”改为“对话中逐条读写”（release notes 只有标题，机制取自帮助中心底部保留的旧版说明和第三方转述）；2026-08-25 加 Topics 逐条编辑界面、敏感话题开关（release notes 原文）。
- Codex 2026-02 的 PR #12231 把 `min_rollout_idle_hours` 默认从 12 降到 6；2026-09 合并的 memory v2（`memories.version`，需手动开启）只出现在 GitHub PR 与 release 明细，没有正式公告。官方文档只说“idle long enough”，不写数字；整理冷却没有官方说明，只在源码里。

源码补充：

- **ad_hoc 笔记不会被 7 天清理删掉。** `memories/write/src/extensions/prune.rs` 只删 `extensions/<扩展>/resources/` 下带时间戳的 `.md`（`RETENTION_DAYS = 7`，`memories/write/src/lib.rs`）；笔记在 `extensions/ad_hoc/notes/`，整理说明还要求 “Never delete a note file”（`memories/write/templates/extensions/ad_hoc/instructions.md`）。
- **默认值随版本变**：PR #12231 时每次启动处理 16 个会话，`b741e480` 与 `rust-v0.163.0` 都是 2 个、只看 10 天内（`config/src/types.rs`）。课件只引用固定提交的值并注明版本。

对 3.6 的含义：同一句“记住这条规则”，三个产品生效的时间和位置都不同。Claude 应用曾经也是批量汇总，后来改成随写随用并加了逐条编辑——延迟换来的是总结更完整、不占对话额度，代价是“刚定的规则下次不一定在”。无论哪一家，人定下的项目规则都应该写进仓库（`AGENTS.md` 或规格文件）；Codex 官方文档也这样建议。

## Claude Code auto memory 对照实测（2026-10-09，1 轮）

用 [`tools/clean-claude.sh`](../../../../tools/clean-claude.sh)（全新 HOME，Claude Code 2.1.292，同一个 MiniMax-M3.1-Flash-Preview，走 `https://api.minimax.cn/anthropic`），起点同上（第 2 章冻结候选），三个 `claude -p` 会话共用一个 HOME。运行目录在本机 `~/.cache/clean-claude-memlab-*`，不提交。只跑了 1 轮，结论不外推。

| 步骤 | 看到的 |
| --- | --- |
| 第一个会话的请求 | **已经有 auto memory 说明**（`MEMORY.md`、记忆目录都在请求里；claude-tap 记录）。Codex 要等 `memory_summary.md` 非空才注入，所以 Codex 第一个会话里的“记住”会写进 `AGENTS.md` |
| 会话一：“记住：记忆翻牌里，两张牌不匹配、等待翻回期间的点击一律忽略。”（38 秒） | 立即写入 `~/.claude/projects/<项目>/memory/` 下一条记忆和 `MEMORY.md` 索引；仓库没有改动。记忆文件的 `How to apply` 里写了 Claude 自己的实现建议（锁定布尔量、“已匹配的牌也应保持不可点击”），正文还加了“不允许打断翻回动画”，**都没有标明不是人说的**；`Why` 写“用户明确要求” |
| 会话二：新进程问“等待翻回期间的点击，我们是怎么定的？”（32 秒） | 立即可用，没有等待期。复述规则并说明“不在仓库里……是记在记忆里的一条用户口头约定”，同时把会话一的实现建议说成“**约定的实现方式**” |
| 会话三：`CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` 再问（60 秒） | “这个仓库里没有找到相关记录”，列出查过的位置；它试过往上级目录找，被沙箱挡住；提出先由人定再落地 |

和 Codex 的同类实验相比：生效时间差别很大（Claude Code 下个会话就能用，Codex 要闲置加整理），但**“记忆长出人没说过的内容，下次被当成约定”这一点一样**，第 8 轮 Codex 笔记里的“落地要求”和这里的 `How to apply` 是同一类。对 3.6 来说，这条比“要等 6 小时”更值得讲：即使记忆立刻生效，它记下的也不全是你说的话。
