# 第 2 章主线重跑：从 v0 到 v1

> 状态：2026-10-06 起用于讲师备课。脚本按课件真实运行 Codex，产物是“冻结候选”，不是录制版，也不代表试讲通过。尚未由另一位讲师复现。

> 2026-10-24：`run-v1.sh` 和 `run-2.2.sh` 都是旧流程（`run-2.2.sh` 清空后先问候、没有 `/plan`、压缩后问 build 末行），不再使用。2.2 按 C2-95 改用下面的 PTY 驱动。

## 现行做法：pty/（2026-10-24）

[`pty/`](pty/) 里三个脚本：`driver.py` 用 2.1 的 `demo.sh codex` 启动 Codex 并记录终端输出，`screen.py` 打印当前屏幕，`send.py` 追加要发送的文字、按键或括号粘贴。脚本不自动作答：每一步先看屏幕，再发送，Plan 的交互题和计划确认都由人（或代人的 agent）看过再选。

```bash
export CH02_DEMO_ROOT=~/course-demos/rerun-2.2-<日期> AGENT_LAB_HOME=~/.local/share/agent-lab-ch02-2.2-<日期> RUN_LOG=$CH02_DEMO_ROOT/logs
sh courseware/ch02/lessons/01-request/tools/demo.sh prepare
uv run --with pexpect courseware/ch02/materials/mainline/pty/driver.py "$PWD"   # 另一个终端里用 screen.py / send.py 操作
```

2.2 的步骤：信任目录 → `/rename ch02-demo` → 2.1 问候 → 2.1 项目问题（括号粘贴）→ 放入 `AGENTS.md` 与 `materials/profile/profile.md` → `/clear` → `/plan` → 粘贴 p29 Prompt → 交互题 → 审 Proposed Plan，不越界选 Yes → `/status` → `/compact` → 禁止工具追问 DeepMotion.ai 原文 → 允许只读 profile.md 再问 → `/status` → `/quit`。原始记录按 lab-runs 的约定归档，例子见 lab-runs `ch02/2.2-20261024/README.md`。

> 2026-10-22：`run-v1.sh` 仍是旧流程（反馈卡、三条讲师经历），新流程用 `run-2.2.sh`，见下一节。

## 旧流程：run-2.2.sh（2026-10-22，已过时）

按章文件 C2-55、C2-56、C2-58 跑 2.2 和 2.3 的风格参考，在 tmux 交互界面里驱动 Codex：问候 → 写 `AGENTS.md` → `/clear` → 问候 → 放入讲师的 [`profile.md`](../profile/profile.md) → p29 Prompt → 确认 → `/compact` → 追问 → 提交 homepage-v1 → p40a 风格 Prompt → 确认。两个文件都在对话进行到对应那一步时才放进工作目录，和录制时人在那一步写文件一样；Prompt 从课件 `lesson.js` 读，所以课件改了 Prompt，排练自动跟着变。

```bash
courseware/ch02/materials/mainline/run-2.2.sh
```

可选：`V0=<起点目录>` 换起点（默认第 1 章参考快照，第 2 章起点快照做好后换成它）；`REF_URL=<地址>` 换参考主页；`STYLE=0` 只跑 2.2。和录制的差别：Prompt 按一行输入，计划里申请到沙箱外运行的命令一律同意。产物在 `lab-runs/ch02-context/2.2-profile-<时间>/`（不提交）：`logs/` 里有每一步的画面、`2.2-homepage-v1.diff`、`2.3-style.diff`，claude-tap 会话 id 在 `logs/tap-session`。

## 做什么

从个人主页出发，按课件跑一遍 2.1 → 2.2 → 2.3，得到个人主页发布候选（`homepage-v1` 提交）和全部记录。每次运行用一个新目录，可以反复跑，用来：

- 冻结录制前的真实主线产物（个人主页、真实 diff、本轮记录）；
- 多跑几次，看 Codex 的回答和改动在哪些地方会变，为课上演示准备分支；
- v0 换了（例如第 1 章录制版）之后，重跑得到对应的 v1。

不发布，不推送；2.4 的发布另行决定。

## 怎么跑

```bash
courseware/ch02/materials/mainline/run-v1.sh                    # 运行目录默认 lab-runs/mainline/v1-<时间>
V0=<另一个个人主页目录> courseware/ch02/materials/mainline/run-v1.sh  # 换一个 v0
python3 courseware/ch02/materials/mainline/summarize.py lab-runs/mainline/v1-*   # 多轮对照表
```

需要 `MINIMAX_API_KEY`、Node/npm、uv。每轮约 15–30 分钟，取决于 MiniMax 的响应；多轮串行运行。

## 每一步由谁完成

| 步骤 | 课件 | 由谁 | 说明 |
| --- | --- | --- | --- |
| 起点 | — | 脚本 | 复制 v0，去掉讲师排练笔记 `CHECKPOINT.md`（学员仓库没有这份文件），`npm ci` |
| 写反馈核对记录 | 2.1 p06 | 人（代答） | [`fixtures/feedback-record.md`](fixtures/feedback-record.md)：三条课程示例反馈与对 v0 的核对；按分镜不提 1.4 的决定 |
| 只读核对 | 2.1 p07 | Codex | Prompt 取自课件；只读权限 |
| 补性质标签 | 2.1 p17 | 人（代答） | [`fixtures/labels.md`](fixtures/labels.md)，选定第 3 条 |
| 写本轮 Prompt | 2.2 p29 | 人（代答） | 课件 Prompt，尖括号一行换成 [`fixtures/experiences.txt`](fixtures/experiences.txt) 的三条讲师经历 |
| 出计划、执行 | 2.2 p29–p30 | Codex | 新会话，可写权限；先出计划，人回复“确认，按计划执行。”后再改。没等确认就改了会记录下来 |
| 检查 | 2.2 p31 | 脚本代人 | `npm run build`；[`verify.py`](verify.py) 用浏览器查三种视口、项目区原文、Tab 顺序 |
| 评审与提交 | 2.3 p36–p40 | 脚本代人 | 只改 `src/App.tsx` 且五项检查都通过才“接受”，提交代码与本轮记录；否则停在提交前 |

课上的检查由人完成（2.2 p31 讲师提示）；脚本代做检查只用于讲师批量重跑。代答的内容都按课件示例，记录里标明“代答”。

## 产物

每轮目录下：

- `repo/`：个人主页仓库，`main` 上依次是 `v0：起点`、`homepage-v1: 补充项目经历`（打 `homepage-v1` 标签）、`记录第 1 轮`；
- `logs/`：每次 Codex 运行的事件（`*.events.jsonl`）、最终回答（`*.answer.md`）、claude-tap 会话 id，以及 diff、构建日志、浏览器检查、评审结果和 `steps.log`；
- `home/`：本轮 Codex 用的隔离 HOME（会话记录）。

运行目录在 `lab-runs/` 下，不提交。挑定的冻结候选另行整理进仓库。

## 已知情况（2026-10-06）

- 第 1 轮把讲师笔记 `CHECKPOINT.md` 一起复制进了仓库，Codex 在 2.1 直接引用其中“第 1 条在这份 v0 上不复现”等结论。脚本已改为去掉这份文件；第 1 轮不作为 2.1 的参考。
- 本机 Node 为 24.15.0，`.nvmrc` 要求 22.19.0；Codex 在计划里也指出了这一点。

## 2026-10-06 三轮结果

起点都是 10-03 排练版 v0（第 1 轮未去掉 `CHECKPOINT.md`）。表由 `summarize.py` 生成后补充。

| 项目 | 第 1 轮 | 第 2 轮 | 第 3 轮 |
| --- | --- | --- | --- |
| 2.1 读了 `PROMPT_V1.md`，指出“项目卡不跳转”是既有决定 | 是 | 是 | 是 |
| 2.1 引用讲师笔记 `CHECKPOINT.md` | 是 | 否 | 否 |
| 2.2 先出计划、等确认再改 | 是 | 是 | 是 |
| 最终 `src/App.tsx` | +10 −2 | 与第 3 轮逐字相同 | +10 −2 |
| 五项检查 / 评审 | 全过 / 接受 | 全过 / 接受 | 全过 / 接受 |
| 执行步骤用时 | 16 分钟 | 14 分钟，最后 MiniMax 返回 400，回合失败 | 56 秒 |

- 由代码和输入决定、三轮一致的：改动范围和最终代码。由模型决定、每轮不同的：2.1 回答的组织方式、执行时怎样自证。
- 执行时间差别来自自证：Prompt 的完成标准写了“360/768/1440 宽可读”，第 1、2 轮 Codex 想自己验证，先试无头 Chrome（沙箱内失败），再在 `/tmp` 写 Swift 程序用系统排版引擎量文字宽度；第 3 轮只跑了 build 并用 grep 核对文字。课件 2.2 p31 的讲师提示是“检查由人完成，AI 自验证留到 Harness 章节”，Prompt 与这条之间怎样衔接待讲师决定。
- 冻结候选当时暂定第 3 轮；改 p29 后重跑，最终选第 5 轮，见下节。

## 2026-10-06 改 p29 后三轮（第 4–6 轮）

p29 的 Done when 改为“我在浏览器查 360/768/1440 宽可读、Tab 顺序不变；你跑 build 成功；diff 只含项目区”。讲师笔记已移出快照。

| 项目 | 第 4 轮 | 第 5 轮 | 第 6 轮 |
| --- | --- | --- | --- |
| 2.1 认出“项目卡不跳转”是既有决定 | 是 | 是 | 是 |
| 2.2 先出计划、等确认再改 | 是 | 是 | 是 |
| 最终 `src/App.tsx` | 与第 3 轮逐字相同 | 相同 | 相同 |
| 五项检查 / 评审 | 全过 / 接受 | 全过 / 接受 | 全过 / 接受 |
| 执行步骤用时 | 186 秒 | 114 秒 | 160 秒 |
| 执行中与浏览器相关的命令 | 6 条 | 0 | 0 |

执行时间从 14–16 分钟的长尾收拢到 2–3 分钟。冻结候选取第 5 轮：没有自行验证的尝试，回答里把三种宽度的检查交还给人，最贴近 p30–p31。整理在 [`starters/personal-homepage/ch02-candidate/`](../../../../starters/personal-homepage/ch02-candidate-notes.md)。

