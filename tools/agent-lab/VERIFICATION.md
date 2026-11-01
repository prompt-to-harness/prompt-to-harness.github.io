# 本地验证记录

日期：2026-10-23。环境：macOS arm64、Codex CLI 0.163.0、uv 0.13.1、Python 3.12.15、claude-tap 0.1.146。这是开发核验，不是跨平台保证或教学效果验证。

## Git 分发准备核验

2026-10-23 讲师授权单独提交和推送工具，暂不发布 PyPI、不修改 PPT。分发分支为 `codex/agent-lab-git`，从远程 `main` 创建，只新增 `tools/agent-lab/`，不携带备课分支尚待 review 的提交或工作区修改。Git 分发无需合并 `main`，使用完整提交 SHA 和 `#subdirectory=tools/agent-lab` 安装。

在该独立工作区运行 `make setup`、`make check`，全部通过；工具的 17 项 unittest 与 wheel/sdist 构建也通过。模型目录测试改为核验包内固定模型的窗口、推理档位和图像输入能力，不依赖备课分支尚未发布的 `tools/codex-model-catalog.json`。分发包的运行与测试均可独立完成。

## Agent Lab 改名核验

2026-10-23 讲师确认使用 `agent-lab`，本地源码目录改为 `tools/agent-lab`、Python 模块改为 `agent_lab`，入口改为 `agent-lab codex --tap`。Claude 子命令预留但尚未实现；调用时退出码为 2，不读取密钥、不启动 Codex。

- 查询 PyPI [项目页](https://pypi.org/project/agent-lab/)、[JSON API](https://pypi.org/pypi/agent-lab/json) 和 [Simple API](https://pypi.org/simple/agent-lab/) 均返回 404：未查到现有发布项目。未预留名称，最终能否注册以 PyPI 校验为准。
- 17 项自动化测试通过，增加了子命令分发、Claude 占位入口、缺失/未知 agent、按 agent 分目录、旧目录和旧标记兼容、环境变量冲突的检查。
- 本地目录 `uvx` 总帮助、构建后 wheel 的 Codex 子命令帮助、Claude 占位命令均验证通过。wheel/sdist 构建成功，包含 `agent_lab` 模块和模型能力目录。
- 经 `agent-lab codex --tap -- exec …` 真实调用课程 MiniMax，返回 `AGENT_LAB_OK`，退出码 0。新环境使用 `AGENT_LAB_HOME/codex`，未出现课程 `auth.json`。原始记录位于忽略目录 `lab-runs/agent-lab-rename-20261023/`。
- 新安装默认使用 `~/.local/share/agent-lab/codex`；默认新目录尚不存在而旧课程目录已存在时复用旧目录，保留原有会话，不移动或删除历史。旧变量 `COURSE_CODEX_HOME` 仍兼容，不能与 `AGENT_LAB_HOME` 同时设置。
- 本轮未重新执行 gh 的真实 API 查询与交互批准，相关证据保留下方改名前记录；其配置与钥匙串复用逻辑保留，自动化检查通过。

## 终端形态核验（2026-10-23）

问题：Codex CLI 0.156.0 起提供可选的全屏 transcript，0.157.0 起成为默认。全屏形态占用 alternate screen，终端的 scrollback 不再保存会话，长回复需要使用 Codex 内部历史功能回看，不能按终端原生回滚的方式找回。课程环境改为保留终端 scrollback。

- 两条启动路径固定 `tui.fullscreen_transcript = false`。Agent Lab 重新生成配置并追加命令行覆盖；`clean-codex.sh` 默认生成配置，`CLEAN_CODEX_KEEP_CONFIG=1` 时保留已有配置并通过启动参数覆盖 TUI 设置，不会重写插件设置。
- 键名核验：在本机 Codex CLI 0.163.0 的二进制中查到 `tui` 配置结构含 `fullscreen_transcript` 字段，不是猜的键名。
- 配置接受核验（更正）：用生成的 `config.toml` 运行 `codex features list` 成功；故意将 `fullscreen_transcript` 改成字符串后，真实配置加载报错。`codex --help` 退出码 0 不能证明配置已解析。
- 自动化检查：`agent-lab` 的 17 项 unittest 通过，新增一项断言生成的配置含该设置；`clean-codex.sh` 用桩程序替换 `codex` 启动，核对生成的 `config.toml` 含同样两项。
- 未核验：Linux 与 Windows 未实测；与 tmux 等多路复用器的交互未测；录屏画面对比未做。配置在启动时读取，切换后需要重启 Codex 才可见。

## Scrollback 修复前复核（2026-10-23）

- 当前工作区与远程分发提交 `ebda794062bb992418d367dd4793951b94878927` 均已包含 `tui.fullscreen_transcript = false`。此前分发命令固定的 `54dffeedc755faf5aa7efd957c146851966379ca` 不含此改动，固定 SHA 不会随分支更新。
- 重新运行工具的 17 项 unittest，全部通过。以假 Key、临时 HOME 运行不调用模型的 `codex features list`，生成配置加载成功。
- 更正上文“配置接受核验”的证据边界：`codex --help` 不证明配置已解析。将 `fullscreen_transcript` 故意改为字符串后，`--help` 仍返回 0，而 `features list` 返回 1，明确报告该项应为 boolean。
- 已修正：README 原写的“删掉生成配置里的两行后重启即可恢复全屏”无法生效，因为 Agent Lab 每次启动都重写配置。现已明确课程模式固定，不能通过修改生成文件切换；需全屏时使用日常 Codex 环境。
- 已修正：`clean-codex.sh` 的 `CLEAN_CODEX_KEEP_CONFIG=1` 分支保留旧配置，不会补上新设置。以桩 Codex 和缺少 `[tui]` 的旧配置复核，启动成功，但该设置仍不存在。现已在启动参数中补上覆盖，保留旧配置时也生效；离线测试覆盖直连与 `--tap` 两种路径。
- 本轮没有执行长回复的交互滚动验证，也没有修改启动器、PPT 或推送提交；只补充技术核验记录。

## 修复与长回复实测（2026-10-23）

- 修复三处：保留旧配置时以命令行覆盖启用 Scrollback；README 不再指导编辑自动生成配置切换形态；配置接受核验改用 `features list`，而非 `--help`。
- 工具共 19 项 unittest 通过。新增的两项检查实际 Codex 配置加载及错误类型拒绝、旧配置原样保留且在直连/代理路径都收到 `exec` 前的 TUI 覆盖。
- 真实交互：Codex CLI 0.163.0、MiniMax-M3.1-Flash、claude-tap 0.1.146，PTY 接浏览器 xterm.js 5.5.0，110 列 × 28 行。没有使用预制回复或回放；模型连续输出 80 段带编号的文本和 `SCROLL_END_OK`。
- 终端处于 `normal` 缓冲，长回复结束时 `baseY=159`、`viewportY=159`；上翻后三屏为 `viewportY=78`，再次上翻到 `0`，画面能找回 `SCROLL_LINE_001`。回到底部后 `Shift+PageUp` 将视口移至 `127`，可见第 55 行。
- 回到底部继续输入 `Reply only SCROLL_FOLLOWUP_OK`，同一真实会话返回该标记，终端仍可输入；此时 `baseY=viewportY=167`。
- 范围：已验证真实交互输出与浏览器终端的滚动、返回及继续输入。原生 Terminal 自动控制被工具权限拒绝，未验证它的鼠标滚动；Linux、Windows 和 tmux 仍未测。
- 原始 PTY 输出、请求记录与截图只保存在忽略目录 `lab-runs/scrollback-20261023/` 以及本机课程测试 HOME，不提交。源码包安装用于避免 Git 安装额外克隆课程仓库的 Codex 子模块。

## 改名前已完成的开发核验

下表中的 `tools/course-codex` 是当时的源码路径，当前运行命令以 [README](README.md) 为准。

| 检查 | 方法 | 结果 |
| --- | --- | --- |
| 本地 uvx 包 | 从 `tools/course-codex` 运行命令入口 | 成功；工作目录保持调用位置 |
| 构建产物 | `uv build tools/course-codex`，从 sdist 构建 wheel | 成功，能力目录随包分发 |
| Git 来源 | 在忽略目录建立临时 Git 仓库，用完整提交 SHA 和 `#subdirectory=tools/course-codex` 运行 `uvx --from git+file://…` | 成功；未向远程推送 |
| 个人 Codex 登录隔离 | 保留本机个人登录，同时向启动进程注入假的 `CODEX_API_KEY`、`CODEX_ACCESS_TOKEN` 和 `OPENAI_API_KEY`；在课程环境执行 `codex login status` | 返回未登录；没有课程 `auth.json`，个人 `auth.json` 与 `config.toml` 的校验值前后相同 |
| MiniMax 直连 | 从 uvx 入口执行只读的简短问答 | 成功，退出码 0 |
| tap 请求路由 | 经 uvx 入口启用 `--tap`，读取捕获记录中的模型和上游字段 | 捕获请求均为 `MiniMax-M3.1-Flash`，上游均为 `https://api.minimax.cn/v1` |
| 子进程凭据 | 由模型执行 Python，仅输出变量是否存在，不输出值 | `MINIMAX_API_KEY`、`CODEX_ACCESS_TOKEN`、`OPENAI_API_KEY` 均为不存在 |
| gh 认证复用 | 课程环境直接执行，以及由 Codex shell 执行 `gh api user --jq 'has("login")'` | 均返回 `true`，未重新登录 |
| gh 默认权限流程 | 交互界面中设置 `read-only` 与 `on-request`，执行同一条只读 GitHub API 查询 | 沙箱内联网失败；出现批准选项，选择本次允许后，沙箱外重试返回 `true` |
| 保留会话 | 再次启动 `exec resume --last`，询问前一轮 gh 查询的布尔结果 | 同一个 thread ID，返回 `true`，未再次调用工具 |
| 独立查看器 | 按课程 HOME 分配端口，运行最终 tap 版本 | 查看器与数据库指向课程环境，不使用日常默认端口 |
| 防误用测试 | 11 个标准库 unittest，覆盖缺 Key、个人目录、auth/config 软链接、环境变量、gh 配置/钥匙串、会话保留、配置覆盖、无关查看器占用和能力目录一致性 | 全部通过 |

原始日志、请求数据库、临时 Git 仓库和核验脚本位于本机忽略目录 `lab-runs/course-codex-local-20261023/`，含本机路径与运行内容，不提交。默认课程环境也做过不调用模型的启动检查；真实模型实验使用 `COURSE_CODEX_HOME` 指定的独立课程目录。

## 已知边界

- Linux/WSL 未实测，原生 Windows 暂不支持。另一台机器、无 gh 登录的首次安装、并发多个会话尚未核验。
- GitHub 核验只调用只读 API，没有推送、设置 Pages 或修改仓库；对外写操作仍需录制前单独核验和人工确认。
- 未发布到 PyPI/npm，未修改 PPT；原讲师实验脚本保持原状。上方改名前及改名核验阶段均未向远程 Git 推送，Git 分发准备另见本记录首节。
- Codex 本身会尝试预热内置插件目录；本轮见到匿名插件目录请求的 401 和插件说明长度警告，未阻止 MiniMax 会话与 gh 查询。首次交互启动还可能等待内置插件目录下载。这些输出不代表个人 ChatGPT 登录已被带入。
- `uv.lock` 用于本地开发核验；`uvx`/Git 安装依据包元数据解析依赖，并不自动使用这个 lock。当前固定了 claude-tap 版本，未承诺所有传递依赖永久不变。
- HOME 与环境变量隔离用于减少配置混入，不能阻止获准的命令读取其他有权限访问的路径。macOS 的钥匙串目录因 gh 被有意共享；Codex 自身强制使用课程目录中的文件凭据。

## 本轮设计决定

按讲师授权实现：默认保留课程环境，当前仅实现 Codex + MiniMax 与可选的 `--tap`，预留 Claude 入口；先做本地验证，再讨论发布和 PPT。包名和命令名采用 `agent-lab`，Python 包可从本地目录、Git 或未来的 PyPI 分发，不需要 npm。首次正式发布版本、跨平台支持范围尚未确定，暂不发布。


## 2026-11-01：Claude 入口迁移（本地 0.1.4，未发布）

- 来源：`tools/clean-claude.sh`。新增 `agent-lab claude [--tap] [-- …]` 与只读的 `home --agent claude`；旧脚本保留。按项目持久化 Claude HOME，和 Codex 分开；独立 tap 数据、固定 MiniMax 服务与模型，Key 不写配置。原 Codex 启动器未修改。
- 相对旧实验的变化：旧脚本默认临时 HOME、全局 tap 数据；新入口持久化并只启用 user settings，避免 project/local settings 改写服务。没有迁移旧会话，没有把历史请求标为新入口产物。组织策略和项目规则文件仍需单独判断，具体边界见 README。
- `uv run --project tools/agent-lab python -m unittest discover -s tools/agent-lab/tests -q`：34 项通过。覆盖无 Key 零创建、凭据与配置隔离、已有非课程目录/软链接拒绝、会话保留、参数校验、Codex/Claude 分派、direct/tap 命令及退出码；启动调用使用 mock，不发 API 请求。
- `uv build --wheel tools/agent-lab` 成功生成 0.1.4 wheel。未安装覆盖日常工具、未推送、未发布 release；已发布 0.1.3 不含 Claude 支持。
- 当前真实 CLI 为 Claude Code 2.1.309，历史实验为 2.1.304。本轮以假 Key、临时 AGENT_LAB_HOME，通过新入口运行真实 CLI `--help`，确认帮助正常退出、课程配置生成；不发送模型请求。
- 未验证：真实 MiniMax 返回、tap 捕获及查看器、子进程实际清理凭据、交互式恢复、Linux/WSL。若录制改为新入口现场演示，先发一次最小问候，检查上游、模型、系统指令、工具与记录；若仍复用旧截图，无需重跑。

## 2026-11-01：0.1.4 发布准备

讲师明确要求发布 0.1.4 artifact 并更新默认下载。重新运行 34 项测试与 wheel 构建通过；本次只发布 tools/agent-lab 源码与安装包，独立分发分支及 tag 为 codex/agent-lab-v0.1.4、agent-lab-v0.1.4，不合并课程分支。Release 说明保留真实 MiniMax/tap 链路尚未核验的范围；发布不改变此前的实验验证结论。仓库课件的安装入口同步到 0.1.4。

## 2026-11-01：发布版 0.1.4 的 Claude + MiniMax + tap 最小问候

结论：在本机 macOS、Claude Code 2.1.309 下，按 2.5 p62 说明运行 `agent-lab claude --tap -- -p "你好"`，完整链路通过；不需修改 0.1.4 启动器。此结论限于这一次 Claude 非交互问候，不代表交互恢复、子进程凭据清理或 Linux/WSL 已验证，也不包含本轮重新运行 Codex 对照端。

- 从公开 release URL 用 `uv tool install --force` 安装到本次独立的 UV_TOOL_DIR / UV_TOOL_BIN_DIR，调用发布 wheel，未使用工作区源码、未覆盖日常安装。版本 Agent Lab 0.1.4、claude-tap 0.1.146+pr475、Claude Code 2.1.309。
- 按说明在仓库外新建空目录，检查各级目录无 AGENTS.md / CLAUDE.md，清除 AGENT_LAB_HOME / COURSE_CODEX_HOME 覆盖；只使用终端已有的 MINIMAX_API_KEY，不打印或写入公开文件。
- 命令退出码 0，约 11.6 秒。终端回复“你好！有什么可以帮你的吗？”。仅发出 1 次 API 请求。
- 原始 tap SQLite 记录核验：`POST /v1/messages?beta=true`，upstream `https://api.minimax.cn/anthropic`，HTTP 200，请求及响应模型均为 MiniMax-M3.1-Flash，用户消息含“你好”，响应正文与终端一致。请求含 12 个工具定义。
- 返回 usage 原字段为 input_tokens=10740、output_tokens=10、cache_read_input_tokens=186、cache_read_in_input=false；不把它们混作此前费用实验的字段口径，不更新旧课件数字。
- 会话 `09436702-c69d-408d-9d2e-7b6dc39be401`，请求 `req_afe00211f3ad`。Dashboard health 中数据库路径和 tap 版本与本次课程 HOME 一致。Chromium 实际打开列表、Details 和 Full viewer，确认问候、回复和模型显示，浏览器无脚本错误。Full viewer 位于 iframe 内。
- Claude 提示未识别 MiniMax 模型名称并按 200k 上下文窗口处理；本次请求仍成功。这不证明 MiniMax 服务实际窗口只有 200k，也不等于长上下文能力已测试。已补入 p62 折叠说明，同时补上 Details → Full viewer 的查看入口。

安装日志、原始 stdout/stderr、环境定位、截图和脱敏摘要仅留在被忽略的 `lab-runs/agent-lab-014-claude-live/`；原始 trace 保留在该项目对应的独立 Claude HOME。不提交原始请求或凭据，不替换历史材料。新讲师仍需在自己的终端确认 Key、CLI 版本和网络可用。

## 2026-11-01：发布版 0.1.4 的 Codex 对照端

按讲师要求补跑 p62 的另一端。复用上次从 release 安装的 0.1.4 和同一个仓库外空目录，使用独立的 codex HOME；命令为 `agent-lab codex --tap -- exec --skip-git-repo-check -s read-only "你好"`。Codex CLI 0.163.0，约 12.44 秒，退出码 0，1 次模型请求。原始 tap 记录确认 upstream 为 `https://api.minimax.cn/v1`、路径 `/v1/responses`、HTTP 200；请求与响应模型均为 MiniMax-M3.1-Flash，用户问候正确，记录中的最终回复与 stdout 一致。顶层工具 5 项，usage 为 input_tokens=7524、output_tokens=225、cached_tokens=128（在 input_tokens_details 内），reasoning_tokens=122。

会话 c8d9c09c-5583-447c-bbd2-49484fa8d321，请求 req_ff2645c6237c。Dashboard health 的数据库路径匹配本次 codex HOME；Chromium 打开 Full viewer，问候、回复与模型可见，无脚本错误。原始材料在上次忽略目录下的 codex/，没有导出到公开仓库。本轮没有改动或重新发布 0.1.4。

启动时有附加模型元数据提示及 featured plugins 请求 401；它们未阻止这一次 MiniMax HTTP 200 和回复。401 不是本次模型请求的状态，不作“所有附加功能均已通过”的结论。现在两端各一次最小问候及 tap 链路均已验证；不替换 10-21 的历史对比数字。

### Claude 自定义窗口配置核实

2026-11-01 核对 [Claude 官方 model-config](https://code.claude.com/docs/en/model-config#correct-the-window-for-a-gateway-or-custom-model-id)：对未识别且不以 claude- 开头、无 [1m] 后缀的自定义 ID，可用 `CLAUDE_CODE_MAX_CONTEXT_TOKENS` 声明窗口，客户端按声明值处理上下文与压缩；它不会扩展服务实际支持的窗口，也不是完整的 Codex model catalog 替代品。

Agent Lab 0.1.4 的 prepare_environment 会删除所有继承的 CLAUDE_*，生成 settings.json 也没有重新写入这个变量。因此不能指导讲师在外部 export 它再用 0.1.4，或手改每次会被覆盖的生成设置。若课程决定采用显式窗口，须先核实当前 MiniMax 模型/接口的支持值，再在新版本的课程 model_env 中接入并验证。当前 0.1.4 的最小问候不依赖这个改动；未做长上下文/压缩实验，也未声称这项配置已在发布版启用。
