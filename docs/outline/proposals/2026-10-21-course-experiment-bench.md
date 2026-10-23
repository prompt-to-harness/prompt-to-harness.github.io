# 提案：课程实验台——可复现的多组实验与章节产物管理

> 状态：**搁置**（2026-10-22 讲师 MiaoDX 决定，见第九节）：不做全课统一的实验平台，只为第 3 章小游戏的多组运行对比保留最小做法。下文第一至八节、第十节保留为调研与试跑记录，不再推进。原状态：草稿（2026-10-21，10-22 补第 3 章试点与模拟学员），合并了两轮调研、Harbor、promptfoo、Inspect 三个平台的试跑，以及第 3 章记忆翻牌的批量、交互与模拟学员试点；没有改动大纲、章文件、课件或 course-starter。不是课程承诺，没有试讲，也没有向学员开放。
> 关联：[第 3 章运行对比提案](2026-10-09-ch03-run-gallery.md)（先跑多组讲共性）；[制作手册“实验与项目主线”](../../production/lesson-authoring-playbook.md#实验与项目主线)；[course-starter 契约](../../design/course-starter-contract.md)。
> 调研报告与原始运行记录在讲师本机 `lab-runs/`（不提交）。

## 一、要解决的问题

1. **模型的不确定性和 Harness 带来的差异，是课程要讲的内容**，不是噪音。现在每章靠讲师手工跑几次、挑一次写进课件，跑了多少组、各用什么配置，散在笔记和本机目录里。
2. **章节之间串行依赖**。第 1 章没定稿，第 2 章只能基于排练版起点准备；第 1 章一改，第 2 章的素材要逐页重核。
3. **讲师自动跑的实验和录课时人工演示的实验是两套东西**，Prompt 也可能各写一份。

目标：所有实验都从固定起点出发，用预设的 Prompt 和记下来的配置，能重跑、能并排看；自动运行和人工演示用同一份规格，只是执行者不同。

## 二、核心模型：规格、运行、产物

| 层 | 内容 | 类比 |
| --- | --- | --- |
| 实验规格 | 起点（tag 加完整 SHA）、步骤（每步一条 Prompt，可含 `/compact` 这类斜杠命令）、Harness 配置（Codex 版本、服务商与模型、推理档位、模型能力目录、沙箱）、每步的检查 | 训练任务的代码 tag 加配置 |
| 运行 | 同一份规格跑一次就是一条运行；执行者是自动驱动、Harbor 或人（录课那次），彼此对等 | 一次训练 |
| 产物 | 按第八节“记录分级”保存 | Artifacts |

- 课件里的 Prompt 页从步骤文件生成，PPT、自动运行和学员复制的是同一份文本。
- 讲师中途改了方向，就另存一份新规格，标明从哪份派生；旧规格和它的运行都保留。
- “可复现”指输入固定、可以重跑，不是输出相同。页面按“同一规格的 N 次运行”分组，不挑一次当标准答案。

## 三、章节交接：不可移动的起点加起点契约

- **交接点**用带版本号的 annotated tag：`chNN-start-vN`、`chNN-complete-vN`，发布后不移动，有新版本就递增 N。现有 `ch02-start-v1` 已符合。
- **起点契约**：写明下一章实际用到的上游状态（例如有 `package.json`、`npm run build` 通过、项目区存在），由脚本检查。思路借自 consumer-driven contract：只检查下游真正依赖的东西。
- **上游变了怎么办**：第 1 章定稿后发布 `ch02-start-v2`。契约通过，就把第 2 章的规格在新起点上重跑一遍，对比结论有没有变；契约不通过，再改规格。AI 生成的产物不 rebase，只重跑。
- 每份下游产物记下它基于哪个 tag 和 SHA，不依赖会移动的“当前推荐”指针。

这样各章可以并行准备：第 2 章先用排练版起点，换起点只是一次重跑。

## 四、调研结论

### 值得借鉴的

| 来源 | 借什么 | 不借什么 |
| --- | --- | --- |
| [Harbor](https://harborframework.com/docs/tasks/multi-step) 任务目录 | 多步任务格式：`task.toml` 里列 `[[steps]]`，每步一份 `instruction.md` 和检查脚本，步骤间保留文件，会话可续接 | 托管 Hub 与排行榜提交 |
| ATIF 轨迹格式 | Harbor 为 Codex 生成的标准化轨迹（消息、工具调用、返回、token），作为可公开的轨迹层 | — |
| SWE-bench、Aider 排行榜 | 每次运行一个结果文件（元数据加 patch），提交走 PR，仓库自动生成页面，没有后端 | — |
| WebDev Arena | 同一 Prompt 生成的两个网页并排试用、两两投票；第 3 章小游戏适合 | 公开投票的后端 |
| asciinema | 录终端界面，`/compact` 和人工演示都能回放，网页播放器可嵌进静态页 | — |
| DVC experiments | “每次实验是基于某个起点的一次提交，选中的再升级”这个模型 | DVC 本身（只是在自定义 git ref 外包了一层） |
| Svelte 教程 | “没有自己的起始目录就继承上一步”，相当于起点契约 | — |

### 不采用的

- **git notes、用 tag 或 course-starter 分支存运行**：GitHub 不显示 notes；tag 会随学员 clone 下发；分支会出现在学员看到的列表里。
- **公开仓库里的隐藏 ref（`refs/runs/*`）**：GitHub 接受，默认 clone 也不拉，但只被这些 ref 引用的提交仍能按 SHA 在网页打开和下载，等于永久公开。
- **jj、Graphite 这类叠加分支工具**：做的是把 diff 重放到新起点，对 AI 生成的产物语义不对。
- **MLflow、W&B、OpenTelemetry、Langfuse、Phoenix**：面向指标或需要常驻服务；Codex 的 `[otel]` 导出的是 `codex.*` 事件，不是标准 agent span。
- **RL 环境平台（Prime Intellect verifiers、OpenEnv、HUD）**：环境用代码定义，需要 Docker 或平台账号。
- **学员云环境**：Codespaces 和国内云 IDE 只作备选；WebContainers 跑不了 Codex CLI。
- **托管沙箱（E2B、Daytona、PPIO 等）**：支持“建一次快照、分叉多份”，按推算每次运行约 0.04 美元，成本大头在 token。只在讲师需要大量并发时作储备。

### 自己必须维护的

没有第三方执行器能给 Codex 发 `/compact` 这类斜杠命令，Harbor、Inspect、promptfoo 都通过 `codex exec` 或 SDK 驱动。所以 [`tools/lab-steps.sh`](../../../tools/lab-steps.sh) 的 tmux 驱动不可替代。

## 五、Harbor 试跑（2026-10-21）

### 配置

- 任务：第 2 章 2.1 的两步只读 Prompt（与 [第 2 章文件](../../../courseware/ch02/README.md) 2.1 一致）：先发“你好，用一句话介绍你能帮我做什么。”，再问“这个个人主页 v0 当初定了哪些要求和完成标准？”。第二步用 `--resume-trajectory` 接上第一步的会话。
- 起点：course-starter `ch02-start-v1`（`8e9a323`），在镜像里解开后作为干净的 Git 仓库。
- 环境：Harbor 0.24.0；Colima（vz 虚拟机，4 CPU、6 GiB）上的 Docker；镜像为 `node:22-bookworm-slim` 加预装的 `@openai/codex@0.163.0`，Harbor 发现同版本就跳过安装。
- 检查：每步结束后 `git status --porcelain --untracked-files=all`，没有改动记 `read_only = 1`。
- 三家都按官方 Codex 接入文档配置，各用自己的模型能力目录，推理档位 `max`，都走 `wire_api = "responses"`：

| 模型 | `base_url` | 模型能力目录来源 |
| --- | --- | --- |
| `MiniMax-M3.1-Flash` | `https://api.minimax.cn/v1` | 课程现有 `tools/codex-model-catalog.json` |
| `k3-256k`（Kimi） | `https://api.kimi.com/coding/v1` | [Kimi Code 的 Codex 接入文档](https://www.kimi.com/code/docs/third-party-tools/codex.html) |
| `deepseek-flash` | `https://api.deepseek.com/` | [DeepSeek 的 Codex 接入文档](https://api-docs.deepseek.com/zh-cn/quick_start/agent_integrations/codex) |

- 密钥用 Harbor 的 `${变量名}` 模板传给容器（`--ae 'MINIMAX_API_KEY=${MINIMAX_API_KEY}'`），任务记录里只留模板，不留明文。
- 三家各跑 3 次，每家一个 job，三个 job 并行。

### 数据（一次试跑，样本小）

| | 第一步耗时（秒） | 第二步耗时（秒） | 第二步命令数 | 第二步输入 token |
| --- | --- | --- | --- | --- |
| MiniMax | 6 / 8 / 18 | 54 / 73 / 62 | 5 / 16 / 6 | 8.6 万 / 10.8 万 / 14.1 万 |
| Kimi | 9 / 13 / 13 | 212 / 161 / 139 | 9 / 7 / 14 | 12.7 万 / 5.1 万 / 6.9 万 |
| DeepSeek | 7 / 6 / 4 | 33 / 39 / 34 | 8 / 9 / 10 | 6.3 万 / 8.6 万 / 6.3 万 |

- 9 次全部完成，两步之后工作区都没有改动；第二步的回答都指出依据来自 `PROMPT_V1.md` 或 `PROJECT_BRIEF.md`。
- 第一步同一句问候，三家的输入 token 约为 7.4 千、4.2 千、8.9 千：模型能力目录和系统指令不同，context 就不同。
- 第一步 DeepSeek 和 Kimi 每次只回一句话。MiniMax 在 3 次正式运行里有 1 次（加上冒烟测试那次共 2 次）自己去读文件、做网页搜索。“问候不会触发工具”在 MiniMax 上不稳定。
- 三个 job 的总耗时：DeepSeek 69 秒，MiniMax 106 秒，Kimi 247 秒。
- 费用：DeepSeek 6 步约 0.27 元（按官网高峰价手算）。Kimi 走会员套餐，MiniMax 的单价未核对，这两家只记了 token。Harbor 的费用估算依赖 LiteLLM 价格表，三家都不在表里，结果为空。
- 体积：第二步一份 ATIF 轨迹约 78 KB；9 次运行连同会话原文共 3.6 MB。这次用 API key，会话记录里没有账号字段。

### 三项验证

| 项 | 结论 |
| --- | --- |
| 自定义 provider | 可用。Harbor 的 Codex 适配读入原生 `config.toml`，`env_key` 可用任意变量名 |
| ATIF 轨迹 | 可用。每步生成 `trajectory.json`，从 Codex 会话记录转换而来 |
| 查看器 | 部分可用。`harbor view <job 目录> --jobs` 起本地服务，job 概览可用；单次运行的轨迹展开页没逐页检查；没有静态导出，公开汇总页仍要自己生成 |

### 与课程基线的两处差异

1. **沙箱权限不同。** Harbor 固定用 `--dangerously-bypass-approvals-and-sandbox` 启动 Codex，隔离交给容器。请求里的权限说明与课程的只读沙箱不同，所以这些记录可以用来比较模型，不能直接当课件里“请求组成”的素材。
2. **斜杠命令跑不了。** 这次只有两步普通 Prompt；`/compact` 这类实验仍要用 `lab-steps.sh` 的 tmux 驱动。

另有两处小差异：Harbor 把 `CODEX_HOME` 放在容器的 `/tmp` 下（Codex 会警告无法创建辅助命令）；未显式关闭网页搜索，与课程基线一致。

## 六、promptfoo 与 Inspect 试跑（2026-10-21）

任务、起点和 Prompt 与第五节相同，主要用 MiniMax；promptfoo 另跑了一次三家对比（各一次）。

### promptfoo

- 版本：promptfoo 0.124.1，自带 `@openai/codex-sdk` 0.156.1；用 `codex_path_override` 改用本机的 Codex 0.163.0，这个版本没有做版本校验。
- 配置：[`openai:codex-sdk` provider](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/) 的 `cli_config` 里写与 `clean-codex.sh` 相同的 `model_providers`；`sandbox_mode: read-only`；每家用独立的 `CODEX_HOME`；密钥用 `{{ env.MINIMAX_API_KEY }}` 引用；关闭遥测（`PROMPTFOO_DISABLE_TELEMETRY=1`）。
- 两步：`persist_threads` 复用同一线程，`-j 1` 串行，两步的 sessionId 相同。
- 结果：MiniMax 两步约 1 分 31 秒；三家各一次共 6 个用例，全部通过，用时 4 分 25 秒，各家耗时与 token 量级和 Harbor 试跑一致。工作区没有改动。
- 静态报告：`promptfoo export eval latest -o results.html` 导出一个约 100 KB 的独立 HTML，带汇总、搜索和逐条结果。
- 局限：只返回最终回答和 token，改了哪些文件、构建产物要自己从工作目录收集；评测记录默认写进 `~/.promptfoo/promptfoo.db`；它的“分享”会上传到 promptfoo 的云服务，课程不用。

### Inspect（`inspect_swe` 的 `codex_cli`）

- 版本：inspect_ai 0.3.282，inspect_swe 0.2.72。
- **只能在 Linux 容器里跑**：本机（`local`）沙箱在 macOS 上报 “Tool support injection is not implemented for OS: Darwin”。改用 Colima 上的 Docker 沙箱（镜像预装 Codex 0.163.0，`version="sandbox"`）才跑通。
- **请求被改写**：模型调用经 Inspect 的桥接转发（`openai-api/minimax/MiniMax-M3.1-Flash`），MiniMax 收到的是 Inspect 重新组装的请求。同一句问候，第一步输入约 8.5 千 token，Codex 直连约 7.4 千。
- 两步：同一个 `codex_cli` 调两次，第二次的请求里带着第一步的完整对话；第二步答出了依据文件。
- 静态查看器：`inspect view bundle` 导出约 11 MB 的查看器，普通静态服务器就能浏览。
- 默认 `sandbox_mode` 是 `danger-full-access`，受限模式需要镜像里有 `bwrap`，并且容器允许创建用户命名空间。

### 三个平台对照

| | Harbor | promptfoo | Inspect |
| --- | --- | --- | --- |
| 需要 Docker | 要 | 不要 | 要（只支持 Linux） |
| Codex 请求是否原样 | 是 | 是 | 否（经桥接改写） |
| 沙箱与课程一致 | 否（绕过沙箱） | 是（`read-only`） | 可选，默认绕过 |
| 多模型矩阵 | 一家一个 job | 一份 YAML | 命令行逐个模型 |
| 静态报告 | 没有 | 单个 HTML | 查看器包 |
| 构建产物 | 能收集 | 要自己收集 | 能收集 |
| 斜杠命令 | 不行 | 不行 | 不行 |
| 预设多轮 | 多步任务 `[[steps]]` 加 `--resume-trajectory` | `persist_threads` 复用线程 | 同一 `codex_cli` 多次调用 |
| 模拟用户 | `--user-agent`：另一个 agent 经 ACP 和被测方对话，可只读查看工作区 | `promptfoo:simulated-user`：纯聊天，用户侧在 promptfoo 远端生成 | 未试 |
| 真人中途参与 | 不行 | 不行 | 不行 |

三个平台都能做多轮，也都能“来回对话”，但对面是脚本或模型，不是真人；交互界面的斜杠命令和真人中途批准都做不到。

## 七、第 3 章试点：批量、交互与模拟学员（2026-10-21–22）

任务是 3.1 记忆翻牌，起点都是 `starters/personal-homepage/ch02-candidate`（装好依赖后提交成干净仓库），被测方都是 Codex 0.163.0 加 MiniMax-M3.1-Flash。12 次运行汇成一页可试玩的对比页，分 7 组（讲师本机，未提交）。样本小，每组 1–2 次，以下只是现象。

### 收集链路

- **批量（A/B/C 组）**：promptfoo 的 `copy_working_dir: copy` 给每次运行一份独立副本；断言脚本在副本删除前记 diff、跑类型检查、用相对路径构建，写出 `run.json`。三组 Prompt（一句话、写清规则、四要素）各 2 次，6 次全部构建成功，共 23 分钟。
- **交互（D 组）**：在 `clean-codex.sh` 交互界面里按 3.1 原流程逐条输入（这次由 tmux 代替人输入），做完运行收尾脚本 `collect.mjs`：用临时索引算 diff（不动学员暂存区），从 Codex 会话记录取实际输入、工具调用数、token、模型与版本，按白名单写 `run.json`（`driver: human`）。
- 课程不推荐学员用 ChatGPT 登录，但测过一次（2026-10-22）：这时会话记录里有 `creator_account_id`、`creator_user_id` 和订阅档位 `plan_type`，`collect.mjs` 按白名单输出的 `run.json` 里都没有。
- 会话记录里没有批准事件，批准次数只能看屏幕或 claude-tap；交互界面没显式设推理档位时，记作“默认”，与批量运行的 `max` 不同，对比时要注明。
- 对比页按组展示，每张卡嵌入那次构建的页面直接试玩。讲师自己的产物要给 iframe 加 `allow-same-origin` 才能加载；学员的页面在学员自己的 GitHub Pages 域名下，与课程站点不同源。

### 三种模拟学员

三种做法用同一份人设（学编程一年的大学生，只提要求、只看不改）和私下目标（12 张牌、动物 emoji、翻错停 1 秒、步数与用时、“再来一局”、首屏不加入口；偏好分次说出，先要计划，改完核对，最多 5 条消息）。

| | Harbor `--user-agent`（E 组） | promptfoo `simulated-user`（F 组） | 自建脚本（G 组） |
| --- | --- | --- | --- |
| 怎么做 | 学员是另一个 Codex，同一容器内经 ACP（`acpx` → `codex-acp`）对话 | promptfoo 远端生成学员的话，发给 `openai:codex-sdk` | 学员每轮跑一次只读的 `clean-codex.sh exec -s read-only`（独立 HOME），读人设与对话记录写下一句；被测方用 `codex_step` 的 `exec resume --last` |
| 学员能否自己看代码 | 能 | 不能，改让 Codex 代为只读检查 | 能 |
| 学员侧模型 | 自选（MiniMax） | promptfoo 远端，不可选；关掉远端生成会直接报错 | 自选（MiniMax） |
| Codex 收到的消息 | 原生会话 | 每条都是 JSON 文本 `[{"role":"user","content":"…"}]`，首条还包着 system | 原生会话 |
| 被测方沙箱 | 绕过沙箱（容器隔离） | `workspace-write` | `workspace-write`，即课程的 `clean-codex.sh` |
| 请求记录 | ATIF 轨迹 | 无 | claude-tap 记下每次请求 |
| 需要 Docker | 要 | 不要 | 不要 |
| 实测 | 2 次：学员 4 / 2 条消息，被测方 23 / 53 次工具调用，+375 / +679 行，两次并行约 19 分钟 | 1 次：4 条消息，74 次工具调用，+444 行，12 分钟 | 2 次：各 3 条消息，18 / 33 次工具调用，+476 / +459 行，8.5 / 12.7 分钟 |

- 全部运行都构建成功，学员都走完了“要计划 → 确认并补偏好 → 核对 → 结束”。
- **学员一侧也不稳定**：Harbor 第 2 次漏了“先要计划”，被测方直接做出三档难度、非动物图案和首屏入口，学员事后一次纠正 5 处，代码量近一倍；自建第 2 次有一句“随便吧，严格度你看着办”，比人设更随意。这能用来讲“用户怎么说”也会改变结果。
- 是否满足全部偏好，依据是学员侧的核对和 diff，没有逐个试玩。

### 密钥事件（Harbor 冒烟运行）

ACP 模式下，Harbor 只把它认得的密钥变量（`OPENAI_API_KEY`／`CODEX_API_KEY`）传给被测 Codex，配置里的 `MINIMAX_API_KEY` 没传过去。模拟学员没有停下，而是自己排障：翻环境变量、配置文件和 `/proc/*/environ`，从别的进程里读出密钥，还把前 30 个字符打印进了运行记录。

- 处理：被测方改用 `CODEX_API_KEY`（`--ae OPENAI_API_KEY=${MINIMAX_API_KEY}`），学员人设加“不要查看环境变量、进程或密钥；连不上就结束”。之后两次正式运行没有再出现。作废的冒烟记录留在讲师本机，建议轮换该密钥。
- 局限：两个角色在同一个容器里，技术上隔离不开，只能靠约束。自建脚本两侧 HOME 分开、学员是只读沙箱，2 次运行的学员命令里没有查看密钥的，但没做过专门的越权测试。
- 可作课程素材：agent 为完成目标会主动越界拿凭据，正好接上第 1 章的权限与第 8 章的失败控制。

## 八、推荐方案

### 各个需求用什么

| 需求 | 推荐 | 理由 |
| --- | --- | --- |
| 课程准备时批量跑固定 Prompt | promptfoo（加 `collect.js` 断言收产物） | 不需要 Docker，Codex 请求和沙箱与课程一致，一份 YAML 出“Prompt × 模型 × 次数”矩阵和静态报告；第 3 章已跑通 |
| 模拟学员的多轮交互 | 自建脚本（只读 Codex 当学员，`codex_step` 驱动被测方） | 学员能自己看代码，两侧模型自选，Harness 与课程一致，不需要 Docker，数据留在本机，还能顺带用 claude-tap 记请求 |
| 课程中单独演示 | 本机 `clean-codex.sh` 手动操作；`/compact` 这类用 `lab-steps.sh` 的 tmux 驱动 | 斜杠命令和真人批准只有交互界面能做 |
| 学员结果上传 | 学员照常用 `clean-codex.sh` 交互完成，再运行 `collect.mjs` 生成 `run.json` 与产物，网页成果推到自己的 Pages，用 Issue 表单提交链接 | 收集的是真实交互，不要求学员装额外工具；课程仓库只收元数据 |
| 结果分享对比 | 自建对比页：读所有 `run.json`，按组展示，嵌入可试玩的页面 | 三个平台都没有“打开就能玩”的展示 |
| 看到 context 细节 | 讲解素材用 claude-tap；批量分析用 Codex 会话记录，或 Harbor 的 ATIF 轨迹 | 工具定义、每次请求的完整内容只有真实请求里有 |

不采用：

- **Inspect**：要 Linux 容器，模型请求经桥接改写。
- **promptfoo 的模拟用户**：学员看不了代码，用户侧模型不可选且对话要发给 promptfoo 服务，Codex 收到的消息带 JSON 包装。
- **Harbor 作主力**：沙箱与课程不同，要 Docker，同一容器里两个角色隔离不开。保留为可选：要大规模并行、多模型容器隔离或用它的轨迹查看器时再用。

### 一份规格，多个执行器

- 规格按 Harbor 的目录结构写，另加一节课程自己的配置（起点 tag 与 SHA、Codex 版本、服务商、模型、推理档位、模型能力目录、网络开关、重复次数）。步骤正文是唯一来源，由脚本生成 promptfoo 的 YAML 和课件的 Prompt 页。
- 网络开关写进规格：批量运行的批准策略是 `never`，关网的任务中途没人能放行；要用 `gh`、装依赖或查资料的任务要开网。
- 普通步骤交给 promptfoo（或 Harbor）；需要模拟学员的交给自建脚本；带斜杠命令的步骤标 `kind = "slash"`，交给 `lab-steps.sh`；录课那次标为人工执行。
- 所有执行方式都产出同一种 `run.json`，用 `driver` 区分：`promptfoo`、`human`、`simulated-user-local`、`simulated-user`（Harbor）等。对比页只认 `run.json`。
- 要用作课件素材的请求记录，仍在本机用 `clean-codex.sh` 和课程的沙箱设置录。

### 记录分级

| 级 | 内容 | 去处 |
| --- | --- | --- |
| T0 | 每次运行：`run.json`（规格引用、执行者、配置、token、工具调用列表、检查结果、是否用于录课）、最终回答、相对起点的 diff | 私有 runs 仓库；选中的进课程仓库 |
| T1 | 选中的运行：脱敏后的 ATIF 轨迹，可选 asciinema 录屏 | 同上 |
| T2 | Codex 会话原文、claude-tap 数据库、`home/`、`node_modules` | 只留本机 |

导出一律按字段白名单，再做一遍 secret 扫描。

### 运行存放

- 另开一个**私有 runs 仓库**，用普通分支存每次运行的快照，分支按 `ch02/日期-讲师-配置` 命名，只增不改；元数据同时写进 commit trailer 和 `runs.jsonl`。
- 只有选中的那组运行，才在 course-starter 打成公开的 `chNN-complete-vN`。
- 汇总页由脚本读 `runs.jsonl` 与 ATIF 生成静态 HTML，推广第 3 章已有的对比页。

### 分阶段

| 阶段 | 内容 | 基础设施 |
| --- | --- | --- |
| 1 | 讲师内部：固定规格与 `run.json` 格式；起点契约脚本；全课一页汇总；把模拟学员脚本并入 `lab-lib.sh` | 现有脚本加 promptfoo |
| 2 | 多模型对比进课件（如 2.1 的“配置不同，context 就不同”），第 3 章可展示模拟学员带来的差异 | 同上 |
| 3 | 学员选做：照常交互完成实验，运行 `collect.mjs`，网页成果推到自己的 Pages，用 Issue 表单或 PR 提交 `run.json` 与链接 | GitHub Actions 与 Pages |
| 4 | 第 3 章小游戏的两两对比，讲师离线投票，构建时算胜率 | 同上 |

公开投票和托管执行（学员在网页上点一下就跑）不在计划内：成本和运维与录播课不匹配。

学员一侧不要求 Docker：安装门槛高，大陆访问 Docker Hub 不稳定，第 1 章讲的沙箱和批准机制也要在学员本机体验。

## 九、讨论结论（2026-10-22，讲师 MiaoDX）

投入和用处不成比例：批量实验、平台选型和统一格式，真正明确用得上的只有第 3 章。第 2 章改用讲透问题驱动之后，课件内容不再由几组事先跑的实验决定，让 Agent 自己从头重跑实验也就没那么重要了。

1. **不做全课统一的实验平台。** 不定 `run.json` 统一格式，不建私有 runs 仓库，不做学员提交收集；Harbor、promptfoo、Inspect 的选型停在第五至七节的试跑结论。
2. **第 3 章保留最小做法。** 用现有的 `tools/lab-gallery.py` 加讲师手工或脚本跑几组，展示三种差异：同一句 Prompt 跑多次（抽卡）；一句话 Prompt 和一组规整 Prompt；装和不装 Game Studio 插件。素材挂在第 3 章，具体安排由第 3 章文件定，不再泛化成全课格式。模拟学员不再推进，已有的一组试点记录可作第 3 章候选素材。
3. **章节解耦不靠自动重跑上一章。** 每章起点按“前提清单 + 手工冻结的起点快照”准备（见[起点快照方案比较](2026-10-22-starter-snapshot-options.md)的状态说明）；上一章改动后只要前提清单不变，本章不用重做。
4. **第 2 章本身要用的演示环境照常保留**：`tools/clean-codex.sh` 的凭据隔离、请求查看、模型能力目录、固定的 Codex 版本。它们是 2.1 讲请求组成的前提，不属于实验平台。课件里的数字（token 数、请求长度）换 Codex 版本时手工重跑一次，记进章文件的实测记录。
5. **多模型对比**只放配套页，不进正课。

## 十、待实测（搁置，不再推进）

- 能否让 Harbor 里的 Codex 使用与课程一致的只读沙箱（第五节差异 1）。
- 自建模拟学员加大样本（每种 3 次以上），并做一次越权测试：只读学员能否读到被测方的密钥或改动文件。
- 在 `task.toml` 里加课程自己的配置节后，Harbor 能否照常读取和校验任务。
- 起点契约脚本在第 1 章真实的 v1→v2 变动上能否抓住问题。
- `codex exec` 下有没有可编程的压缩入口；核实前课件里不说有。
- 私有 runs 仓库与公开 course-starter 之间能否用 GitHub 的 compare 视图对比。
- 大陆学员能否正常打开 github.io 和使用 Issue 表单。
