# 2.2 重跑数据（2026-10-24）

2.2 的 p22、p23、p24、p27、p27b、p29c、p30、p31 都用这一次运行（C2-95）。原始记录（claude-tap 数据库、解码后的完整请求、Codex 会话、终端输出、驱动脚本、整页截图、结束时的项目文件）在私有仓库 prompt-to-harness/lab-runs 的 `ch02/2.2-20261024/`，那里的 README 有逐条记录的对照。

## 条件

- 起点：course-starter `ch02-start-v1`（`8e9a323`）新克隆；Codex CLI 0.163.0；Agent Lab 从 main 的 `tools/agent-lab` 运行；MiniMax-M3.1-Flash，能力目录开；claude-tap 0.1.146；全新 `AGENT_LAB_HOME`。
- 同一会话：`/rename ch02-demo` → 2.1 的问候和项目问题（记录 1–5）→ 放入 AGENTS.md 与冻结的 profile.md → `/clear` → `/plan` → p29 Prompt（记录 6 起）→ 三道交互题选推荐项 → 计划不越界，直接接受 → 实施与 build → `/compact` → 两次追问。
- 7、15、27、29 是标题生成的辅助请求，不算主任务。

## 公开时去掉了什么

与 2.1 的 [run-20261024](../../request/run-20261024/README.md) 相同：只去掉请求头（含鉴权）、`include`、`prompt_cache_key`、`client_metadata`、响应与会话标识、推理的加密部分；本机路径换成 `[project]`、`[course-home]` 等占位。其余全部保留，没有教学删节。

## 生成

```sh
python3 courseware/ch02/materials/iteration/run-20261024/export-public.py ~/ws/lab-runs/ch02/2.2-20261024
uv run courseware/tools/tracekit.py courseware/ch02/lessons/02-iteration/trace/evidence.json
```

第一条从私有原始记录生成本目录的 `trace.json`；第二条按 `lessons/02-iteration/trace/evidence.json` 的观察点生成静态查看器（`make viewers` 已包含）。记录变化时第二条会停下，要先逐个核对定位点。

## 观察要点

- 清空后的第一个任务请求（记录 6）只有 6 项，有 AGENTS.md，没有 2.1 的问答。
- 记录 10 的 SyntaxError 是它自己写的读取脚本引号转义出错，自然出现；从记录 10 一直留到压缩前，压缩后的记录 28 里没有。
- 切回 Default 的记录 16 缓存只命中 229：前缀没变，但推理档位也从 medium 换成了 max，原因没有单独验证。
