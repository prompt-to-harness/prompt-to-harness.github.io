# 2.4 发布排练数据（2026-10-25）

2.4 的 p49a 用这一次运行（C2-110），p49b 用推送后让 Codex 用 gh 读部署的补跑（`ghrun.json`，C2-112）；p45、p48、p49、p50、p51 的文字和数字也来自它。原 p48a 随 C2-112 撤下，它用的记录 13、17、18、19 不再导出。原始记录（claude-tap 数据库、完整请求、Codex 会话、终端输出、驱动脚本、各步命令输出、线上截图，以及 gh 未登录实验）在私有仓库 prompt-to-harness/lab-runs 的 `ch02/2.4-20261025-claude/`（补跑在同目录 `ghrun/`），那里的 README 有逐条记录的对照。

## 条件

- 起点：快照分支 `ch02/2.3-done-20261025`（e53f35b，homepage-v2），本地切成 `main`，origin 先指向 course-starter，再改到临时仓库。
- 临时仓库 `prompt-to-harness/ch02-pages-lab-20261025-claude`：先建成私有空仓库，推送前检查后改公开。
- Codex CLI 0.163.0；Agent Lab 用课程仓库的 `tools/agent-lab`，全新 `AGENT_LAB_HOME`，没加开关，本机 gh 登录直接可用；MiniMax-M3.1-Flash，推理档位 max；claude-tap 0.1.146+pr475。
- 一个 Codex 会话：`/rename` → 部署 Prompt（记录 1）→ 拒绝它起本地 http 服务（记录 10 是我们的话）→ 报告里说 configure-pages 默认 enablement: true（记录 13）→ 追问依据（记录 14）→ 一次回答打开 27 个网页、改口（记录 17）→ 自动压缩（记录 18）→ 选“全部升到最新大版本”（记录 19）→ 提交（记录 25–31）→ 设置 Pages 来源（记录 32–36）。推送、改公开、tag 由人执行。
- 补跑（`ghrun/`，2026-10-25 20:45）：同一个项目、同一个 AGENT_LAB_HOME，新会话；推送后的那次运行 18:09 已经结束。读部署的 Prompt（记录 2）→ 运行列表、job、日志（记录 4–13，批准 5 次）→ 申请 `npm audit`，拒绝（记录 14）→ 回答（记录 18）。

## 公开时去掉了什么

与 2.3 的 [run-20261025](../../style/run-20261025/README.md) 相同：只去掉请求头（含鉴权）、`include`、`prompt_cache_key`、`client_metadata`、响应与会话标识、推理的加密部分；本机路径换成 `[project]`、`[course-home]`、`[local-path]` 等占位，邮箱换成 `[email-redacted]`，gh 已遮盖的令牌前缀也换成占位。

导出脚本仍会把网页搜索带回的网页正文（回答里 `url_citation` 注释的 `content`）换成 `[网页正文 N 字，公开数据中略去]`；现在导出的记录里没有这类内容。

**只导出用到的记录**：`trace.json` 是记录 33、35、36，约 0.38 MB；`ghrun.json` 是补跑的记录 18（它的请求里带着这次的全部调用和返回），约 0.13 MB。保留的记录内部没有删节。

## 生成

```sh
python3 -I courseware/ch02/materials/publish/run-20261025/export-public.py ~/ws/lab-runs/ch02/2.4-20261025-claude
uv run courseware/tools/tracekit.py courseware/ch02/lessons/04-publish/trace/evidence.json
```

## 观察要点

- 记录 33：请求的 tools 是 exec、wait、request_user_input、collaboration、web_search，没有 gh；系统指令里 gh 只出现在 prefix_rule 的例子 `["gh", "pr", "check"]`。GET 调用带 `sandbox_permissions: "require_escalated"`、中文 `justification` 和 `prefix_rule`。
- 记录 35：输入末尾是 GET 的返回（已登录、Pages 404）；回答列出 POST 与复查两条命令，随即发出 POST 调用并再次申请。
- 记录 36：POST 与复查的返回，`build_type` 为 `workflow`，仓库默认分支 main。
- `ghrun.json`（补跑记录 18）：输入里依次是 `gh run list`、`gh run view --json jobs`、`gh run view --log | tee … | wc -l`（346 行）与 grep、分段 sed 的调用和返回，`npm audit` 那条是 `aborted by user`，接着是我们那句“不用查漏洞，这一步只看部署”；回答列出两个 job success 和日志里的警告原文。
