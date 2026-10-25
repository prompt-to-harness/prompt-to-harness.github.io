# 2.3 两轮排练数据（2026-10-24）

2.3 的 p40b、p40a1、p40d 用这一次运行（C2-100）。原始记录（claude-tap 数据库、完整请求、Codex 会话、终端输出、驱动脚本、两轮 diff、贴进对话的两张首屏、各宽度截图、项目 bundle）在私有仓库 prompt-to-harness/lab-runs 的 `ch02/2.3-20261024-round1/`、`ch02/2.3-20261024-round2/`，那里的 README 有逐条记录的对照。

## 条件

- 起点：homepage-v1（7b04e19，人工提交），文件树与快照分支 `ch02/2.2-done-20261024`（9381567）相同。
- Codex CLI 0.163.0；Agent Lab main；MiniMax-M3.1-Flash（Plan 下 medium，实施与第二轮 max）；claude-tap 0.1.146；全新 `AGENT_LAB_HOME`。
- 同一个 Codex 会话：`/plan` → 一段话的风格 Prompt → 沙箱里联网失败，申请到沙箱外，把参考存进 /tmp → 挑着读 → 两组交互题选推荐项 → 计划 → 确认实施并补一句 → 实施、build、起预览服务 → 第二轮贴当前与参考两张首屏加一句 → 只改背景 CSS。代理每次启动换一个 session（第一轮 `r1-`、第二轮 `r2-`），不是新对话。

## 公开时去掉了什么

与 2.2 的 [run-20261024](../../iteration/run-20261024/README.md) 相同：只去掉请求头（含鉴权）、`include`、`prompt_cache_key`、`client_metadata`、响应与会话标识、推理的加密部分；本机路径换成 `[project]`、`[course-home]`、`[local-path]` 等占位，`ls` 的属主换成 `[user]`。`/tmp` 下的参考文件名保留。工具返回里的 Hyperspace HTML/CSS 片段出自 html5up.net（CC BY 3.0）。贴进对话的两张首屏以 data URL 原样保留。

**只导出用到的记录**：第一轮 2、5–11、13、20，第二轮 2、9，共 12 次，约 2.5 MB；保留的记录内部没有删节。`request_id` 写成 `r<轮>-<原记录编号>`，`source.record_index` 是原编号。

## 生成

```sh
python3 -I courseware/ch02/materials/style/run-20261024-round2/export-public.py ~/ws/lab-runs/ch02/2.3-20261024-round2
uv run courseware/tools/tracekit.py courseware/ch02/lessons/03-review/trace/evidence.json
```

## 观察要点

- r1-5、r1-6：沙箱里联网失败后申请到沙箱外，curl 把 HTML、CSS 存进 /tmp，工具返回只有 `wc -c` 的两个大小。
- r1-6 到 r1-9：sed 看 HTML 前 140 行，grep、sed 挑着读 CSS；r1-9 说“看过了”并发出第一组提问。
- r1-10、r1-11：两组回答是提问工具的返回；r1-11 是计划，计划里已经写着把 40×40 的 chevron 图案内联成背景纹理。
- r1-13：计划在对话历史里，末尾是确认实施的话。r1-20：build 通过后起预览服务，推理里写着 curl 只拿得到空的 root。
- r2-2：新的 Prompt 里两项 input_image 和反馈；r2-9：两张图还在，报告只改了背景。
