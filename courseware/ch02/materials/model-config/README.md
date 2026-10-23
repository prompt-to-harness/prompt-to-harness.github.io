# 模型能力目录 A/B 实验

> 状态：2026-10-20 讲师机器上各跑一轮（on / off 各 5 次，med 5 次）。没有课堂试讲，这里只记录观察，不是教学效果的结论。

## 问题

`tools/clean-codex.sh` 默认写入 MiniMax 官方的模型能力目录（`tools/codex-model-catalog.json`，来源见
[MiniMax Codex 指南](https://platform.minimax.cn/docs/m-plan/codex)）。用不用这份目录，请求和产出有什么不同？

## 请求层面的差异（在本地抓包确认）

| | 无目录（兜底） | 有目录 |
| --- | --- | --- |
| 启动警告 | `Model metadata … not found` | 无 |
| 系统指令 | Codex 内置完整默认指令 | 目录里的 `base_instructions`（一句话） |
| 工具集 | 9 个（`exec_command`、`write_stdin`、`view_image`…） | 5 个（`exec`、`wait`、`collaboration`…，`code_mode_only`） |
| `reasoning` | `{"summary": "auto"}`，不发 effort | `{"effort": "max"}`（目录默认） |
| 上下文窗口 | 兜底值 | 512K（官方推荐） |

`codex exec` 头部的 `reasoning effort: none` 与实际发出的不一致，不要拿它当依据。

## 任务和评分

任务：第 2 章 2.2 p29 的 Prompt（把三条项目经历加进首页项目区），同一个 v0，每次一个新 HOME。
“合格”只看 Prompt 里写明的约束：build 成功、先说计划等确认再改、项目文字原文照用、不补写（diff 里不在原文中的新增中文要人看）、不加链接和依赖、只改 `src/`。
耗时和 token 不进“合格”，单独比较。没有浏览器检查（本机没有 `uv`）。

## 结果

| 配置 | 合格 | 用时中位数 | 命令数中位数 | token 中位数（范围） |
| --- | --- | --- | --- | --- |
| off：无目录 | 5/5 | 497s | 47 | 178 万（111–356 万） |
| on：有目录（effort=max） | 3/5 | 501s | 51 | 112 万（73–315 万；另有 1 次超时无数据） |
| med：有目录 + effort=medium | 5/5 | 379s | 25 | 57 万（52–127 万） |

`on` 的两次不合格：on-2 没等确认就先改了文件（它新增的中文是 CSS 注释，不是编造）；on-3 在计划这一步跑了 54 条命令，到 600 秒上限仍未给出计划。

## 能说什么，不能说什么

- 每组 5 次，运行间波动（用时 169–607s、token 52–356 万）比组间差异大，不能说“显著”。
- `on` 3/5 对 `off` 5/5：这个样本量下无法排除随机波动，也不能说“目录会让质量变差”。
- `med` 与 `off` 质量相同（都是 5/5），代价看起来更低（命令数、token 的范围与 `off` 基本不重叠；用时范围重叠）。
- `med` 是在 `on`/`off` 之后单独跑的，没有和它们交替，上游忙闲可能影响用时。
- 观察到的一致模式：目录默认的 `max` 更爱自己动手（多做命令和预览），降到 `medium` 后更收敛。这是推测，没有单独验证。
- 没有证据说“用目录比不用更好”；能说的是：用目录且推理档位为 medium 时，在这个任务上没有发现质量损失，且更省。

## 复现

```bash
courseware/ch02/materials/model-config/run-ab.sh 5 lab-runs/model-config/ab "on off"   # 或 "med"
python3 -I courseware/ch02/materials/model-config/summarize.py lab-runs/model-config/ab
```

`CLEAN_CODEX_CATALOG=0` 关闭目录；`med` 在脚本里用 `-c model_reasoning_effort="medium"` 实现。
