# Agent Lab

状态：2026-10-23，Git 分发试用版，未发布到 PyPI。当前支持 Codex + MiniMax 与可选的请求记录；预留 Claude 子命令，尚未实现；尚未用于课堂试讲。PPT 和原有 `tools/clean-codex.sh` 暂不改动。

前置条件：已安装 `uv`、Codex CLI，并在当前终端提供 `MINIMAX_API_KEY`。本轮在 macOS 核验 Codex CLI 0.163.0；其他版本会提示需要核验。Linux/WSL 尚未实测，原生 Windows 暂不支持。

## 从本地运行

在课程仓库根目录：

```sh
uvx --from ./tools/agent-lab agent-lab --help
uvx --from ./tools/agent-lab agent-lab codex
uvx --from ./tools/agent-lab agent-lab codex --tap
```

`agent-lab codex --help` 查看 Codex 入口选项。`agent-lab claude`（含 `--tap`）目前只提示“尚未实现”并以退出码 2 结束，不启动任何 agent。

启动时工作目录不变。在自己的项目目录运行，应把 `--from` 后面换成这个包的绝对路径。

也可以安装到本机，此后在任意项目目录直接使用：

```sh
uv tool install ./tools/agent-lab
agent-lab codex
agent-lab codex --tap
agent-lab codex -- resume --last
```

卸载命令为 `uv tool uninstall agent-lab`，不会删除课程会话。开发时修改源码后可加 `--reinstall` 重装，或使用 `uv tool install --editable ./tools/agent-lab`。

Key 可以由终端启动配置事先导出，也可以只给本次命令设置 `MINIMAX_API_KEY`。不要把真实 Key 写入仓库、录屏或分享的命令历史。工具不自动编辑 shell 配置文件。

## 保留与隔离

- 新环境默认 HOME 是 `~/.local/share/agent-lab/codex`，其中 `.codex/` 保存配置和会话。再次启动复用该目录，每次重新写入固定的课程配置；不会清空历史。`-- resume --last` 接续当前项目最近的会话。
- 课程配置和启动参数固定 `tui.fullscreen_transcript = false`，保留终端自己的 scrollback，长回复可向上回看。全屏 transcript 使用 Codex 自己的历史视图，与终端原生回滚不同。直接修改生成配置或用 `/tui` 保存选择，会在下次课程启动时被覆盖；本工具暂不提供全屏切换，需全屏时使用日常 Codex 环境。
- 模型固定 `MiniMax-M3.1-Flash`、能力目录开启、推理档位 `max`，上游固定 `https://api.minimax.cn/v1`。缺 Key 立即退出。
- 独立 `HOME`、`CODEX_HOME` 与 XDG 目录，清理继承的 `CODEX_*`、`OPENAI_*`、Claude 相关变量；不连接个人共享 app-server。Codex 凭据存储固定为 `file`，不使用系统钥匙串中的 Codex 登录。课程目录如出现 `auth.json` 则停止，不读取或删除它。
- `--` 后可传 Codex 的 `exec`、`resume`、沙箱等参数；不接受模型、profile、`-c` 配置覆盖、登录与远程服务命令。课程会话的文件访问仍由 Codex 权限控制；这不是文件系统安全隔离，当前项目的 `AGENTS.md` 等内容仍可进入请求。
- 不传递 MiniMax Key 给模型执行的 shell，且关闭登录 shell，避免 shell 启动配置重新注入个人变量。模型仍可能读取其有权限访问的文件，不能据此承诺密钥绝对不可访问。
- `gh` 默认复用原 `GH_CONFIG_DIR`（或原 XDG 配置目录下的 `gh/`）；macOS 额外链接真实 HOME 的 `Library/Keychains`。这是有意保留本机 GitHub 登录，Codex 自身仍固定用文件凭据。GitHub 外部写操作仍需按课程要求逐条确认。
- git 用 `GIT_CONFIG_GLOBAL` 指向真实 HOME 的 `.gitconfig`（没有就用原 XDG 配置目录下的 `git/config`），提交用的是本机自己的身份，不复制文件；已设置 `GIT_CONFIG_GLOBAL` 时保留原值。两个文件都有时只用 `.gitconfig`。
- `--tap` 使用包依赖 claude-tap `0.1.146+pr475`：0.1.146 加上 [liaohch3/claude-tap#475](https://github.com/liaohch3/claude-tap/pull/475) 的查看器改动（文字按文字显示、显示推理、显示 namespace 子工具），由课程 fork 打成一个 wheel 发布，上游发布后换回 PyPI 版本。它会经手 Key，请求记录位于课程 HOME 的 `.local/share/claude-tap/`，可能包含项目代码和个人信息，不提交仓库。查看器按课程 HOME 分配固定端口，地址以启动输出为准；端口被无关服务占用时停止，不关闭已有服务。关闭查看器或退出会话不会自动删除记录。

本地测试可设 `AGENT_LAB_HOME` 为独立的根目录，Codex 环境放在其 `codex/` 下。为保留改名前的会话，默认新目录尚不存在时，会继续使用已有的 `~/.local/share/prompt-to-harness/course-codex`；旧变量 `COURSE_CODEX_HOME` 仍兼容，直接指向 Codex HOME，但不能与 `AGENT_LAB_HOME` 同时设置。工具只接管空目录或自己创建并带标记的目录，不接受个人 HOME 或已有 `.codex` 目录。请勿在课程目录内手动登录 Codex。

## 本地验证

```sh
uv run --project tools/agent-lab python -m unittest discover -s tools/agent-lab/tests -v
uv build tools/agent-lab
```

自动化测试使用假凭据和临时目录，不调用模型。真实 MiniMax、tap 与 `gh` 核验另记在 [验证记录](VERIFICATION.md)，原始输出留在忽略的 `lab-runs/` 中。

## 分发方式

这个包属于 Python 生态，不需要发布到 npm。

- 本地目录：上面的 `uvx --from` 与 `uv tool install` 已可使用。
- Git：使用 `uvx --from 'https://github.com/prompt-to-harness/prompt-to-harness.github.io/archive/<完整提交 SHA>.tar.gz#subdirectory=tools/agent-lab' agent-lab codex --tap`；`<完整提交 SHA>` 必须替换为已推送且经过核验的提交。使用 GitHub 对应提交的源码包，避免 Git 安装自动拉取不需要的 Codex 源码子模块。提交可以位于独立的远程分支，无需合并 `main`；保留该分支以便持续获取这个提交。工具通过单独的分发分支提供，不包含尚待审查的课件改动。
- PyPI：以后注册账号、构建 wheel/sdist 并成功上传后，才可用 `uvx agent-lab@0.1.0 codex`。2026-10-23 查询 PyPI 的[项目页](https://pypi.org/project/agent-lab/)、[JSON API](https://pypi.org/pypi/agent-lab/json) 和 [Simple API](https://pypi.org/simple/agent-lab/) 均返回 404，未查到已发布的 `agent-lab` 项目；名称未预留，最终是否允许注册以 PyPI 校验为准。本轮不发布。

Git 与本地安装同样需要下载依赖；`uvx` 隔离的是 Python 包依赖，不是 Codex 的操作权限。[uv 官方文档](https://docs.astral.sh/uv/guides/tools/)
