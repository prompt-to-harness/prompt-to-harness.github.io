# 第 2 章追赶实验：让 Codex 对照参考起点补齐前提

> 状态：2026-10-06 讲师机器上运行两轮（三种学员起点各一次）并在交互界面测试一次联网申请。属于“学员落后时怎样进入某章”的方案验证，尚未写进课件，未经另一位讲师复现，未试讲。

## 要验证的方案

学员始终在自己仓库的 `main` 上工作，不需要 checkout、tag 或覆盖文件。落后时在自己的仓库里给 Codex 一段 Prompt（[`prompt-ch02.txt`](prompt-ch02.txt)）：

1. Codex 申请联网，把课程参考起点（course-starter 的某个标签）克隆到临时目录，不放进学员仓库；
2. 只读对照，按第 2 章的三条前提逐条判断：已满足 / 缺少 / 与参考不同但不影响；
3. 列出建议，等学员确认；学员只确认补齐前提所必需的项；
4. Codex 修改，学员检查页面、提交。

前提清单而不是“对齐讲师代码”：各人实现可以不同，只补缺的部分；个人内容和已有决定保留。

## 怎么跑

```bash
courseware/ch02/materials/catchup/setup-states.sh lab-runs/catchup/base     # 本地“课程起点仓库”+ 三种学员仓库
STRIP_HINT=1 courseware/ch02/materials/catchup/setup-states.sh lab-runs/catchup/base2   # 同上，并删掉 CHECKPOINTS.md 中提前透露 2.1 结论的一句
courseware/ch02/materials/catchup/run-catchup.sh lab-runs/catchup/base/student-a-personal
python3 courseware/ch02/materials/catchup/evaluate.py lab-runs/catchup/*-r*
```

三种学员起点都模拟“用 Template 建的仓库”：

| 起点 | 状态 |
| --- | --- |
| (a) `a-personal` | 做完第 1 章，姓名、简介、项目换成自己的（“林小雨 / 摄影日记”） |
| (b) `b-only-1.4` | 只做到 1.4：改了欢迎语、写了 `PROMPT_V1.md`，没有首页应用 |
| (c) `c-card-links` | 做完第 1 章，项目卡标题链接到作品页；`PROMPT_V1.md` 决定表改了，旧 Prompt 段仍写“项目卡不跳转” |

本地实验用 `file://` 的本地仓库代替 course-starter，克隆不需要联网；联网申请在交互界面单独测试。

## 2026-10-06 结果

| 项目 | 第 1 轮 (a) | (b) | (c) | 第 2 轮 (a) | (b) | (c) |
| --- | --- | --- | --- | --- | --- | --- |
| 先只读、等确认再改 | 是 | 是 | 是 | 是 | 是 | 是 |
| 参考起点只在临时目录 | 是 | 是 | 是 | 是 | 是 | 是 |
| 三条前提判断正确 | 是 | 是 | 是 | 是 | 是 | 是 |
| 修改后 build 成功、前提都满足 | 是 | 是 | 是 | 是 | 是 | 是 |
| 个人内容与决定保留 | 是 | — | **否** | 是 | — | 是 |
| 擅自做了可选项 | 是 | 是 | 否 | 否 | 否 | 否 |

两轮的区别：

- 确认语。第 1 轮代答“确认，按你的建议执行”，Codex 把可选项也做了：(a)(b) 多写了证据文件，(c) 按它推荐的方案删掉学员的作品链接、把决定改回“不跳转”。第 2 轮改为“只做补齐第 2 章前提所必需的改动，可选的建议先不做；我的个人内容和已有的决定保持不变”，三种起点都只做必需项；(c) 保留链接，并把 `PROMPT_V1.md` 里矛盾的旧描述改成与学员决定一致。
- 第 2 轮还删掉了 `CHECKPOINTS.md` 中“项目卡不跳转会在 2.1 用到”一句（第 1 轮三次回答都引用过它），并把 (c) 的作品链接从保留域名 `example.com` 换成看起来真实的地址（第 1 轮 Codex 正确指出 `example.com` 不是真实地址）。三处调整同时生效，各自的影响没有拆开测。

其他观察：

- (b) 两轮都识别出“1.5 没做”；第 1 轮主动问学员要用什么个人内容。没有提供时，它用 `PROMPT_V1.md` 中的课程示例并在代码里注明来源；`npm install` 在沙箱里因不能联网失败后，安装、构建、提交都交还给人。
- Codex 代写的证据文件有两个问题：(b) 的文件写“本文件由学员在 1.1 与 1.5 环节自行整理”，署名不实；(a) 的文件记下本机路径（含用户名），推到公开仓库会暴露。
- 检查一步 1.5–2 分钟，修改 0.5–3.5 分钟；第 1 轮 (b)(c) 各遇到一次上游挂起，分别用了 14 分钟、13 分钟。

## 交互界面里的联网申请

在 (a) 的副本中用 `clean-codex.sh` 启动交互界面，让 Codex 把真实的 `https://github.com/prompt-to-harness/course-starter.git` 克隆到临时目录。Codex 申请在沙箱外运行，理由写“需要联网克隆 GitHub 仓库到临时目录 /tmp（不写入你的项目），是否允许？”；申请的命令是 `rm -rf /tmp/course-starter-clone && git clone --depth 1 --branch main … /tmp/course-starter-clone`。选“Yes, proceed”后 29 秒完成，学员项目 `git status` 为空。

课上可借此讲权限判断：看清整条命令（这里前面带着 `rm -rf`），不选“以后同类命令不再询问”。

## 落地情况（2026-10-06）

- 已采纳：课件 2.1 p01 的“从这一章开始？”按钮使用本目录的 `prompt-ch02.txt`（构建时代入真实地址与标签），步骤中只确认必需项；补齐记录由 Codex 起草、学员逐句核对后提交，不写本机路径和用户名。
- course-starter：`main` 推送到 `4a8b82c`（“从第 2 章开始”改为本流程，删去提前透露 2.1 结论的一句，含此前未推送的 `966a3fb`）；`course-run` 推送到 `8e9a323` 并打 `ch02-start-v1`。从 GitHub 浅克隆该标签后构建通过。
- 契约与大纲：`docs/design/course-starter-contract.md` 第 2、7、8 节，`docs/outline/course-outline-internal.md` 已确认事项。

仍待补做：每种起点只跑了两次；用真实标签 `ch02-start-v1` 的完整追赶流程（含联网申请）尚未在交互界面里从头到尾跑一遍；第 3 章的前提清单与参考起点尚未设计。
