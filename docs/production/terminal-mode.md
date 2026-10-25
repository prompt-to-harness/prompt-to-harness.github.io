# 课程终端形态：全屏 transcript 与终端 scrollback

> 状态：2026-10-23 讲师确认，课程环境统一保留终端 scrollback（`tui.fullscreen_transcript = false`）。本文记录 Codex CLI 的行为差异、课程的决定和核验方式；它不是对学员终端的强制要求，也不是教学效果验证。

## 两种形态的差异

Codex CLI 的会话可以有两种显示方式：

| 形态 | 终端表现 | 会话历史存在哪 |
| --- | --- | --- |
| 全屏 transcript（Fullscreen） | 占用 alternate screen，鼠标被捕获 | 只在 Codex 自己的 transcript 视图里；终端的 scrollback 不再保存 |
| 终端 scrollback（Scrollback） | 像普通命令行输出一样打印 | 终端自己的回滚缓冲，可以往上翻 |

全屏形态下，终端原生回滚与 Codex 内部历史视图是两套机制；前者不能直接找回当前全屏视图之外的内容，需要使用 Codex 内部的滚动与历史功能。2026-10-23 讲师在本机遇到长回复无法按惯用方式上翻的问题，因此课程选择终端原生回滚。

## Codex 为什么改

- 2026-08-23 社区提出 openai/codex#40252：在普通 scrollback 窗口里跟不住长时间自主 agent 任务（以 Claude Code 为参照）。
- 0.156.0（2026-09-22）加入可选的全屏 transcript，`/tui` 里可选，默认仍是旧形态。
- 0.157.0（2026-09-25）全屏转为默认（PR #47178），并加入 Shift-click 扩展选区。

它要解决的问题，是把终端 agent 从「REPL 式聊天」改成「应用式工作台」：transcript 区独立滚动、输入框固定在底部、历史可搜索可折叠、选择与复制更可靠、多个 agent 并行时一屏当控制台。

代价是 alternate screen 让终端丢掉自己的 scrollback，鼠标捕获也会影响 tmux 等多路复用器的选择与粘贴。

## 课程的决定

课程环境固定写 `tui.fullscreen_transcript = false`，保留终端 scrollback。理由：录屏时讲师要回看前面的步骤，学员跟做时也要往上翻，长回答不该被顶出画面。

涉及两个启动器，生成配置时都写这一项：

| 启动器 | 用在哪 | 配置位置 |
| --- | --- | --- |
| `tools/agent-lab` | 讲师与学员的课程 Codex 环境，可选 `--tap` 记录请求 | 按项目目录自动选的课程环境 `~/.local/share/agent-lab/projects/<目录名>-<摘要>/codex/.codex/config.toml`（`agent-lab home` 查看；设了 `AGENT_LAB_HOME` 时是 `AGENT_LAB_HOME/codex/.codex/config.toml`） |
| `tools/clean-codex.sh` | 讲师录屏与实验的隔离环境 | `$CLEAN_CODEX_HOME/.codex/config.toml` |

Agent Lab 每次启动重写课程配置，并通过命令行固定 Scrollback；直接编辑生成文件或在 `/tui` 保存选择，会在下次启动被覆盖。本工具暂不提供全屏切换，需全屏时使用日常 Codex 环境。

`clean-codex.sh` 默认生成配置；`CLEAN_CODEX_KEEP_CONFIG=1` 则保留已有配置和插件设置，同时在 `exec` 前追加 `-c tui.fullscreen_transcript=false`。这样旧环境无需改写配置，也能获得课程默认的回滚形态。

## 核验方式

- 键名 `tui.fullscreen_transcript` 已在 Codex CLI 0.163.0 的本地二进制中确认存在（`tui` 配置结构里有该字段），不是猜的键名。
- 生成配置与启动参数均已核对。配置接受核验使用实际加载配置的 `codex features list`：boolean 值成功，故意改成字符串则报告类型错误。`codex --help` 不加载此配置，不能作为接受依据。
- 真实交互核验使用 Codex 0.163.0 + MiniMax + claude-tap，通过 PTY 连接浏览器中的 xterm.js 终端，输出 80 段长回复，验证上翻找回开头、回到底部和继续对话。细节见 `tools/agent-lab/VERIFICATION.md`。原生 Terminal 的自动控制被工具权限拒绝，未核验它的鼠标滚动。
- 效果需要重启 Codex 才可见：配置在启动时读取，当前会话不会中途切换。`/tui` 选择 Scrollback 也是只写配置、不切当前会话。

## 事实边界

- 版本号与时间线来自官方 changelog 与社区 issue；`tui.alternate_screen = "never"` 这一说法来自第三方 changelog 汇总，本机未核验，课程也不用它。
- 本课程只在 macOS + Codex CLI 0.163.0 上核验过，其他版本行为另说。
- 这是课程录制与跟做环境的约定，不是对学员的要求。学员用自己的终端和默认配置也能跟做。

## 相关文件

- `tools/agent-lab/README.md`：课程环境说明与分发方式
- `tools/clean-codex.sh`：另一条隔离启动路径
- `docs/outline/course-outline-internal.md` 3.1：标准环境
