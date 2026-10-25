# 2.4 发布排练数据（2026-10-25）

2.4 的 p48a、p49a 用这一次运行（C2-110）；p45、p48、p49、p50、p51 的文字和数字也来自它。原始记录（claude-tap 数据库、完整请求、Codex 会话、终端输出、驱动脚本、各步命令输出、线上截图，以及 gh 未登录实验）在私有仓库 prompt-to-harness/lab-runs 的 `ch02/2.4-20261025-claude/`，那里的 README 有逐条记录的对照。

## 条件

- 起点：快照分支 `ch02/2.3-done-20261025`（e53f35b，homepage-v2），本地切成 `main`，origin 先指向 course-starter，再改到临时仓库。
- 临时仓库 `prompt-to-harness/ch02-pages-lab-20261025-claude`：先建成私有空仓库，推送前检查后改公开。
- Codex CLI 0.163.0；Agent Lab 用课程仓库的 `tools/agent-lab`，全新 `AGENT_LAB_HOME`，没加开关，本机 gh 登录直接可用；MiniMax-M3.1-Flash，推理档位 max；claude-tap 0.1.146+pr475。
- 一个 Codex 会话：`/rename` → 部署 Prompt（记录 1）→ 拒绝它起本地 http 服务（记录 10 是我们的话）→ 报告里说 configure-pages 默认 enablement: true（记录 13）→ 追问依据（记录 14）→ 一次回答打开 27 个网页、改口（记录 17）→ 自动压缩（记录 18）→ 选“全部升到最新大版本”（记录 19）→ 提交（记录 25–31）→ 设置 Pages 来源（记录 32–36）。推送、改公开、tag 由人执行。

## 公开时去掉了什么

与 2.3 的 [run-20261025](../../style/run-20261025/README.md) 相同：只去掉请求头（含鉴权）、`include`、`prompt_cache_key`、`client_metadata`、响应与会话标识、推理的加密部分；本机路径换成 `[project]`、`[course-home]`、`[local-path]` 等占位，邮箱换成 `[email-redacted]`，gh 已遮盖的令牌前缀也换成占位。

另外一处：网页搜索带回的网页正文（回答里 `url_citation` 注释的 `content`）是 GitHub 文档和各 action 仓库的第三方内容，只留网址、标题和 `[网页正文 N 字，公开数据中略去]`。原始记录里它们完整存在，下一次请求重发约 1 MB。

**只导出用到的记录**：13、17、18、19、33、35、36，共 7 次，约 0.96 MB；除上面的网页正文外，保留的记录内部没有删节。

## 生成

```sh
python3 -I courseware/ch02/materials/publish/run-20261025/export-public.py ~/ws/lab-runs/ch02/2.4-20261025-claude
uv run courseware/tools/tracekit.py courseware/ch02/lessons/04-publish/trace/evidence.json
```

## 观察要点

- 记录 13：第一轮报告的“按约束，这一轮我没做的事”里说 `actions/configure-pages@v5` 默认 `enablement: true`。此前没有任何 `web_search_call`；工作流用的是 checkout@v4 等旧大版本。
- 记录 17：27 个 `web_search_call`（open_page），usage 的 input_tokens 503,843；最后的回答开头是“我上一轮那句……是错的”。
- 记录 18：最后一条是 Codex 发的 CONTEXT CHECKPOINT COMPACTION；输入里每条回答都带着累积的网页引用。
- 记录 19：只剩 10 项，交接摘要以 “Another language model started to solve this problem” 开头，后面是“按 C 改……”。
- 记录 33：GET 调用带 `sandbox_permissions: "require_escalated"`、中文 `justification` 和 `prefix_rule`。
- 记录 35：输入末尾是 GET 的返回（已登录、Pages 404）；回答列出 POST 与复查两条命令，随即发出 POST 调用并再次申请。
- 记录 36：POST 与复查的返回，`build_type` 为 `workflow`，仓库默认分支 main。
