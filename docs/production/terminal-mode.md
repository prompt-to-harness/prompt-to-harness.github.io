# 课程终端形态：全屏 transcript 与终端 scrollback

> 状态：2026-10-23 讲师确认，课程环境统一保留终端 scrollback（`tui.fullscreen_transcript = false`）。本文记录 Codex CLI 的行为差异、课程的决定和核验方式；它不是对学员终端的强制要求，也不是教学效果验证。

## 两种形态的差异

Codex CLI 的会话可以有两种显示方式：

| 形态 | 终端表现 | 会话历史存在哪 |
| --- | --- | --- |
| 全屏 transcript（Fullscreen） | 占用 alternate screen，鼠标被捕获 | 只在 Codex 自己的 transcript 视图里；终端的 scrollback 不再保存 |
| 终端 scrollback（Scrollback） | 像普通命令行输出一样打印 | 终端自己的回滚缓冲，可以往上翻 |

全屏形态下，长回答会把上面的内容顶出可视区，而终端没法往上滚找回。2026-10-23 讲师在本机遇到的就是这个问题：Codex 的长回复读不到上文。

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
| `tools/agent-lab` | 讲师与学员的课程 Codex 环境，可选 `--tap` 记录请求 | `AGENT_LAB_HOME/codex/.codex/config.toml` |
| `tools/clean-codex.sh` | 讲师录屏与实验的隔离环境 | `$CLEAN_CODEX_HOME/.codex/config.toml` |

两个启动器每次启动都会重写 `config.toml`，所以手工改文件无效，要改生成模板。改回全屏只需删掉模板里的这两行。

## 核验方式

- 键名 `tui.fullscreen_transcript` 已在 Codex CLI 0.163.0 的本地二进制中确认存在（`tui` 配置结构里有该字段），不是猜的键名。
- 两个启动器生成的 `config.toml` 都已核对；用该配置启动 `codex --help` 退出码 0，配置被正常接受。
- 效果需要重启 Codex 才可见：配置在启动时读取，当前会话不会中途切换。`/tui` 选择 Scrollback 也是只写配置、不切当前会话。

## 事实边界

- 版本号与时间线来自官方 changelog 与社区 issue；`tui.alternate_screen = "never"` 这一说法来自第三方 changelog 汇总，本机未核验，课程也不用它。
- 本课程只在 macOS + Codex CLI 0.163.0 上核验过，其他版本行为另说。
- 这是课程录制与跟做环境的约定，不是对学员的要求。学员用自己的终端和默认配置也能跟做。

## 相关文件

- `tools/agent-lab/README.md`：课程环境说明与分发方式
- `tools/clean-codex.sh`：另一条隔离启动路径
- `docs/outline/course-outline-internal.md` 3.1：标准环境
