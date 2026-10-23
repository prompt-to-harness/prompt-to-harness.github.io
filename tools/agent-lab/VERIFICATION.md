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

问题：Codex CLI 0.156.0 起提供可选的全屏 transcript，0.157.0 起成为默认。全屏形态占用 alternate screen，终端的 scrollback 不再保存会话，长回复会把上文顶出可视区且无法上滚找回。课程环境改为保留终端 scrollback。

- 两条启动路径的 `config.toml` 生成模板都加入 `[tui] fullscreen_transcript = false`：`agent-lab` 与 `tools/clean-codex.sh`。两个启动器每次启动都重写该文件，手工改文件无效。
- 键名核验：在本机 Codex CLI 0.163.0 的二进制中查到 `tui` 配置结构含 `fullscreen_transcript` 字段，不是猜的键名。
- 配置接受核验：用生成的 `config.toml` 启动 `codex --help`，退出码 0，配置被正常解析。
- 自动化检查：`agent-lab` 的 17 项 unittest 通过，新增一项断言生成的配置含该设置；`clean-codex.sh` 用桩程序替换 `codex` 启动，核对生成的 `config.toml` 含同样两项。
- 未核验：Linux 与 Windows 未实测；与 tmux 等多路复用器的交互未测；录屏画面对比未做。配置在启动时读取，切换后需要重启 Codex 才可见。

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

