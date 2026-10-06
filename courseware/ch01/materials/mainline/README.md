# 第 1 章主线重跑：从 course-starter 到 v0

> 状态：2026-10-06 起用于讲师备课。脚本按课件真实运行 Codex，产物是“冻结候选”，不是录制版，也不代表试讲通过。尚未由另一位讲师复现。

## 做什么

从 course-starter 出发，按课件跑一遍 1.1 → 1.4 → 1.5，得到首页 v0 候选（`ch01-prompt-baseline` 标签）和全部记录。和 2026-10-03 那次手动排练（`starters/personal-homepage/ch01-complete-notes.md`）走的是同样的步骤，区别是可以反复跑、每次结果都留档。得到的 v0 可以交给 [第 2 章的重跑脚本](../../../ch02/materials/mainline/README.md)（`V0=<运行目录>/repo`）。

## 怎么跑

```bash
courseware/ch01/materials/mainline/run-v0.sh                         # 默认用本仓库下 course-starter/ 的 main
STARTER_REF=2106e575f9d0 courseware/ch01/materials/mainline/run-v0.sh  # 复现 10-03 排练的起点
FIX_ROUNDS=3 courseware/ch01/materials/mainline/run-v0.sh              # 检查不通过时最多交回修几轮（默认 2）
```

需要本地检出 course-starter（`course-starter/`，已被 git 忽略）、`MINIMAX_API_KEY`、Node/npm、uv。

## 每一步由谁完成

| 步骤 | 课件 | 由谁 | 说明 |
| --- | --- | --- | --- |
| 改欢迎语 | 1.1 p04 | Codex | 先出计划，人回复“确认”后修改；逐字核对不一致就把证据交回修正 |
| 澄清需求 | 1.4 p22 | Codex | 只读；它提问后，人按课件 p22-answers 的四问四答作答（代答） |
| 写 PROMPT_V1.md | 1.4 p23–p24 | 人（代答） | 取自 10-03 排练快照里人写的那份 |
| 生成首页 | 1.5（Prompt 为 1.4 p23） | Codex | 先出计划，人确认，并说明依赖由人安装 |
| 安装、构建、检查 | 1.5 p28–p30 | 脚本代人 | `npm install`、`npm run build`，再用 [`verify.py`](../../../ch02/materials/mainline/verify.py) 查文字、按钮跳转、三种视口、1440 下内容宽度、控制台、产物；不通过就把证据交回 Codex，最多 `FIX_ROUNDS` 轮 |
| 保存检查点 | 1.5 p30-save | 脚本 | 全部通过才提交并打 `ch01-prompt-baseline` |

“1440 下内容宽度不小于 600px”是为 10-03 排练里真实出现的问题（内容列只有 200px，Codex 两轮才修好）加的检查，课件的完成标准里没有这一条，属于讲师用的辅助判断。

## 产物

与第 2 章相同：`repo/`（各步一次提交）、`logs/`（事件、回答、构建与检查结果、`steps.log`）、`home/`。运行目录在 `lab-runs/` 下，不提交。

## 2026-10-06 第 1 轮结果

起点 course-starter `966a3fb`。1.1 一次改对；1.4 提问后按四问四答作答；1.5 先出计划、确认后写文件，人装依赖后构建与七项检查一次全过（1440 下内容宽 860px），没有出现 10-03 排练里内容列只有 200px 的问题。全程约 13 分钟。生成的 `src/App.tsx` 与排练版不同（各轮实现可以不同，按完成标准验收）。只跑了一轮，还不能说明这一步是否稳定。

