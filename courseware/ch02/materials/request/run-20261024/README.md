# 2.1 重跑数据（2026-10-24）

2.1 的 p08、p08a、p09、p07-loop、p07、p14a 都用这一组数据（C2-90）。原始记录（claude-tap 数据库、解码后的完整请求、Codex 会话、终端输出、驱动脚本）在私有仓库 [prompt-to-harness/lab-runs](https://github.com/prompt-to-harness/lab-runs) 的 `ch02/2.1-20261024/`，换机器后从那里重建。

## 条件

- 起点：course-starter `ch02-start-v1`（`8e9a323`）新克隆，`npm ci` 与构建后工作区干净；三组运行后仍干净。
- Codex CLI 0.163.0；Agent Lab 从课程仓库 main 的 `tools/agent-lab` 运行；MiniMax-M3.1-Flash，能力目录开，推理 max；claude-tap 0.1.146。
- 每组一个全新的 `AGENT_LAB_HOME`。

## 三组

| 文件 | 怎么跑 | 结果 |
| --- | --- | --- |
| `interactive.json` | 交互会话：首句前 `/rename ch02-demo` → 问候 → 同一会话只读项目问题；权限 workspace-write | 9 条：问候 1 次请求、无工具调用、输入 8,709；项目问题 8 次请求、7 次工具调用 |
| `plain.json` | `codex exec -s read-only`，只读项目问题 | 7 次请求、14 次工具调用、累计输入 70,523（缓存 57,840） |
| `named.json` | 同上，末尾加“相关文件：src/App.tsx。” | 4 次请求、3 次工具调用、累计输入 32,879（缓存 17,211） |

`summary.json` 由 `export-public.py` 从同一批数据算出。累计输入是每次请求的输入之和，含缓存，不是单次 Context 长度。

## 公开时去掉了什么

只去掉请求头（含鉴权）、`include` 选项、`prompt_cache_key`、`client_metadata`、响应与会话标识，以及推理的加密部分（`encrypted_content`）；本机路径换成 `[project]`、`[course-home]` 等占位。消息正文、工具定义、可读的推理文字、工具调用与返回、最终回答全部保留，没有教学删节。

## 生成

```sh
python3 courseware/ch02/materials/request/run-20261024/export-public.py ~/ws/lab-runs/ch02/2.1-20261024
uv run courseware/ch02/materials/request/run-20261024/build-records.py
```

第一条从私有原始记录生成本目录的公开 JSON；第二条生成 p14a 的两份独立记录（`make viewers` 已包含）。p08a 的连续查看由 `demos/ch02-request-walkthrough/extract-private.py` 取 `interactive.json` 第 1 条，p07 的静态记录由 `demos/ch02-static-trace/` 取整份 `interactive.json`，依据链见那里的 `selection.json`。

## 观察要点

- 这次问候没有读文件，一次请求就回答了；10-23 那次同一句问候先读了 package.json。同一句话不保证每次都一样。
- 每轮工具循环在请求末尾追加三条：推理、工具调用、工具返回（C2-89）。
- 项目问题回答里引用的 App.tsx:1-6、:20-30、index.html:6、index.css:102-119、PLACEHOLDER_CONTENT.md:9-10、PROMPT_V1.md:10-11 已逐行核对；“dist 未落后于 src”等额外判断没有核实。
