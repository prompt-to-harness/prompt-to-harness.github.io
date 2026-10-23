# 模拟学员：3.1 记忆翻牌

> 状态：2026-10-22 讲师试点，未试讲。讲师用的实验材料，学员不跟做；第 3 章计划用它做一页“看懂”素材（见[课程实验台提案](../../../../docs/outline/proposals/2026-10-21-course-experiment-bench.md)第九节）。

[`student-3.1.md`](student-3.1.md) 是模拟学员的人设与私下目标：学编程一年的大学生，只提要求、只看不改；偏好（12 张牌、动物 emoji、翻错停 1 秒、步数与用时、“再来一局”、首屏不加入口）分几次说出，先要计划，改完自己读代码核对，最多 5 条消息。

## 怎么跑

```bash
tools/lab-sim-student.sh courseware/ch03/materials/sim-student/student-3.1.md starters/personal-homepage/ch02-candidate
```

需要 `MINIMAX_API_KEY` 和 Node/npm，不需要 tmux。学员侧每轮是一次只读的 `clean-codex.sh exec`（独立 HOME），被测侧是 `clean-codex.sh --tap exec`，第一轮新开会话、之后 `resume --last`；两侧都是 MiniMax-M3.1-Flash、推理档位 max。一次约 8–13 分钟。结果在运行目录的 `lab-out/`（`run.json`、`diff.patch`、`dist/`），汇总页用 `tools/lab-gallery.py` 生成。

## 2026-10-22 的观察

两次运行都走完“要计划 → 确认并补偏好 → 学员自己读 `src/` 核对 → 结束”，各 3 条学员消息，构建成功。学员一侧也不稳定：同一份人设，有一次第 3 条消息变成“随便吧，严格度你看着办”。同期用 Harbor 的模拟用户做的对照里，学员漏了“先要计划”，被测方先做出不合偏好的版本，代码量近一倍。只有两三次样本，以上是现象，不是结论。
