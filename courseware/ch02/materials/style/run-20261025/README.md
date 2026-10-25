# 2.3 四要素重跑数据（2026-10-25）

2.3 的 p40b、p40a1、p40d、p40c 用这一次运行（C2-102）。原始记录（claude-tap 数据库、完整请求、Codex 会话、终端输出、驱动脚本、贴进对话的两张首屏、各宽度截图、带两个快照分支的项目 bundle）在私有仓库 prompt-to-harness/lab-runs 的 `ch02/2.3-20261025/`，那里的 README 有逐条记录的对照。

## 条件

- 起点：快照分支 `ch02/2.2-done-20261024`（9381567，homepage-v1），结束于 `ch02/2.3-done-20261025`（e53f35b，homepage-v2，Codex 提交）。
- Codex CLI 0.163.0；Agent Lab 用课程仓库的 `tools/agent-lab`（含 `GIT_CONFIG_GLOBAL`）；MiniMax-M3.1-Flash（Plan 下 medium，实施与第二轮 max）；claude-tap 0.1.146；全新 `AGENT_LAB_HOME`。
- 一个 Codex 会话：`/rename`、`/plan` → 四要素 Prompt（记录 1）→ 申请到沙箱外，把参考存进 /tmp → 挑着读 → 两组六道交互题选推荐项 → 计划 → Yes, implement this plan → 第一轮 → 贴当前与参考两张首屏加一句（记录 27）→ 找纹理原图、自己画 SVG → 想用无头 Chrome 截图被拒（记录 37 是我们的话）→ 第二轮报告 → 提交 Prompt → `.git` 只读、申请提权 → e53f35b（记录 54）。

## 公开时去掉了什么

与 2.2 的 [run-20261024](../../iteration/run-20261024/README.md) 相同：只去掉请求头（含鉴权）、`include`、`prompt_cache_key`、`client_metadata`、响应与会话标识、推理的加密部分；本机路径换成 `[project]`、`[course-home]`、`[local-path]` 等占位，`ls` 的属主换成 `[user]`，提交输出里的邮箱换成 `[email-redacted]`。`/tmp` 下的参考文件名保留。工具返回里的 Hyperspace HTML/CSS 片段与 intro.svg 出自 html5up.net（CC BY 3.0）。贴进对话的两张首屏以 data URL 原样保留。

**只导出用到的记录**：1、3、5、8、10、12、14、15、16、27、37、54，共 12 次，约 3.4 MB；保留的记录内部没有删节。后面的请求带着前面的全部内容，所以第一轮报告、404 与找到原图、第二轮报告都从 27、37、54 的输入里取。

## 生成

```sh
python3 -I courseware/ch02/materials/style/run-20261025/export-public.py ~/ws/lab-runs/ch02/2.3-20261025
uv run courseware/tools/tracekit.py courseware/ch02/lessons/03-review/trace/evidence.json
```

## 观察要点

- 记录 3、5：申请到沙箱外的 curl 把 HTML、CSS 存进 /tmp/hyperspace；工具返回只有 `wc -l` 的两个行数（208、3908）。
- 记录 5–12：HTML 整份 `cat`，CSS 先看开头 240 行，再按行号挑着读；记录 12 说“看过源码了”并发第一组提问。
- 记录 14：两组回答是提问工具的返回，其中首屏背景选了“CSS 渐变代替 intro.svg”；记录 15 是计划，记录 16 计划进了对话历史，末尾是 Implement the plan.。
- 记录 27：新的 Prompt 里两项 input_image 和反馈。记录 37 的输入里：先取 `assets/images/intro.svg` 得 404，再试出 `assets/css/images/intro.svg`；它说明原版的画法后自己写了 SVG；要用无头 Chrome 截图（被拒）和我们的话。
- 记录 54：两张图还在；它说明“沙箱只给了 .git 读权限”申请提权；`git commit` 输出 e53f35b，4 个文件。
