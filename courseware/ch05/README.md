# 第 5 章：SDD - 按规格分片实现 JSON Diff

> 状态（2026-11-18）：全章按 `course-prep` 轻量化模式维护。5.1–5.5 共 48 页的非实操页视觉构图、排版与首版可照读口播已重构完成，并已与教学副本 `course/ch05-baseline`（含 `REQ-038` `null` 等同路径不存在、`fixtures/null-equiv` 及 `AC-020`、`AC-021`）对齐；8 张实操页（`p06`、`p07`、`p16`、`p17`、`p26`、`p27`、`p36`、`p37`）保留轻量占位，待正式录制时按真实运行结果补充；5.5 演示片段待按录制版本核验后嵌入。现有各节 `STORYBOARD.md` 作为历史底稿只读备查，不再双写同步。

## 本章教学核心与全章约定

- **一句话主线**：拿着第 4 章提交的五层规格基线，在 JSON Crack 中按 `TASK-01`～`TASK-04` 一层层实现 JSON Diff；每走一层多看清一个工程边界问题，最后交出可解释、通过本章验收的功能，并在 5.5 带走一组随手可用的 Vibe Coding 招数。
- **两个讲透问题**：
  1. **怎样让单个任务有可检查的完成边界？**（5.1 立住委托与核对方式：限定修改范围、用独立于实现的已核算期望跑齐关联素材、核查 `git diff` 不越界；5.2–5.4 沿用并在新问题中检验。）
  2. **局部通过为什么不等于整功能完成？结果与规格对不上时回到哪一层？**（5.4 区分模型、映射、双输入与整体验收各自的证据边界；规则清楚修实现或脚本，漏案例补 `ACCEPTANCE.md` 与 `TASKS.md`，改产品行为必须由人批准并同步 `SPEC.md`。）
- **全章共用架构锚点图（`diff_arch`）**：上方展示四步切片接线（`5.1 差异模型 diff/` → `5.2 合并图映射 NodeData/EdgeData` → `5.3 网页双输入与独立状态` → `5.4 摘要、只看变化与全量验收`），下方虚线框标明全章一行不改的隔离保护区（`parser.ts`、`useJson`、原 `NotSupported`、`apps/vscode`）。
- **规格基线口径**：对齐 `course/ch05-baseline`（`0247a45`）：`REQ-038`（`null` 与字段缺失同等处理）已为 Approved，`TASK-01` 离线核对覆盖 7 组固定素材（含 `fixtures/null-equiv`），`TASK-04` 整体验收走查覆盖 `AC-001`～`AC-021`；`REQ-032`～`REQ-037` 保持可调整不固化；`CR-01` 旧结果可见文案与测试框架留给第 6 章。

## 各节入口与当前状态

| 小节 | 展示与阅读 | 逐字稿 | 当前状态 |
| --- | --- | --- | --- |
| 5.1 规格写好了，怎么知道第一个任务做对了 | [PPT](lessons/01-diff-model/index.html?mode=slides#p01) | [讲解全文](lessons/01-diff-model/speaker.html) | `p01`–`p05`、`p08`–`p10` 视觉与口播已重构（含 7 组素材与 `REQ-038`）；`p06`、`p07` 实操占位 |
| 5.2 字段删掉了，结果图上怎样看见它 | [PPT](lessons/02-merge-graph/index.html?mode=slides#p11) | [讲解全文](lessons/02-merge-graph/speaker.html) | `p11`–`p15`、`p18`–`p20` 视觉与口播已重构；`p16`、`p17` 实操占位 |
| 5.3 一边输入错了，已经得到的结果怎么办 | [PPT](lessons/03-dual-input/index.html?mode=slides#p21) | [讲解全文](lessons/03-dual-input/speaker.html) | `p21`–`p25`、`p28`–`p30` 视觉与口播已重构；`p26`、`p27` 实操占位 |
| 5.4 各部分都做了，能说整个功能完成了吗 | [PPT](lessons/04-acceptance/index.html?mode=slides#p31) | [讲解全文](lessons/04-acceptance/speaker.html) | `p31`–`p35`、`p38`–`p40` 视觉与口播已重构（含规格回环分流图与 `AC-001`～`AC-021`）；`p36`、`p37` 实操占位 |
| 5.5 做着做着，还有哪些招数可以带走 | [PPT](lessons/05-takeaways/index.html?mode=slides#p41) | [讲解全文](lessons/05-takeaways/speaker.html) | `p41`–`p48` 机制示意图与口播已重构；演示片段待录制版本核验后嵌入 |

## 维护与生成说明

页面源在各节 `tools/build-lesson.py`，章内共用骨架与组件在 [tools/lessonkit.py](tools/lessonkit.py)，章级样式在 [chapter.css](chapter.css)，口播唯一来源在各节 `script.json`。修改源文件后运行 `python3 courseware/tools/rebuild-lesson.py courseware/ch05/lessons/<节目录>` 或直接执行对应 `build-lesson.py`，不要手改生成物 `lesson.js`。
