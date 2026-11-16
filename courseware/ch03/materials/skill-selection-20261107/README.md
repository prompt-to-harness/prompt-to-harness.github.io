# 3.2 第一部分：Skill 调用与选用材料

本材料服务于主动调用、语言触发、描述调整的画面解释。公开回放在[调用与选用记录](../../lessons/02-rules/selection-evidence.html#explicit)，画面与文字对应见[讲师阅读页](../../lessons/02-rules/speaker.html)。本轮没有开发新游戏，没有执行清单中的试玩，也没有验证 Plugin 安装。

## 来源与条件

- 日期：2026-11-07；Codex CLI 0.163.0，MiniMax-M3.1-Flash，课程 clean-codex 基线与只读执行。
- 原文：openai/plugins 提交 `0722921d5542fc593105c27bd52630babd8b8c2a` 的 Game Studio。复制同版 skills、references、scripts，保持相对引用；game-playtest 与固定版本远端文件逐字节一致。
- 自动选用的实际输入列表含系统 Skill 与九份游戏 Skill；公开 JSON 保存可用名称。修改前后每轮都新开会话，核对会话实际提供的 description；只修改 game-playtest 的 description，其余文件与请求保持不变。
- 原始记录留在忽略目录 `lab-runs/ch03-skill-selection-20261107/`：`repo/` 是演示副本，各运行目录下的 `home/` 和 `logs/` 是独立会话与事件。原文件备份为 `source/`，课程改写文本为 `revised-description.txt`。这些不是公开分发文件。
- `terminal/`：真实 TUI 的菜单、列表、选中、提交和返回记录；主动请求在 rollout 第 10 行，完整 Skill 消息在第 12 行。正文由显式引用随请求带入；不把它说成模型另行执行了 cat。
- `original-positive/`：自然语言请求，未指定 Skill 名称。rollout 第 3 行的 developer 消息含可用说明；工具事件 `item_0` 读取 game-playtest/SKILL.md，退出 0，返回与原文件一致。

## 材料清单

| 材料 | 用途 | 状态与定位 |
| --- | --- | --- |
| 真实文件头 | name 与 description 的原文顺序 | [固定版本第 1–4 行](https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/skills/game-playtest/SKILL.md#L1-L4)，由 PPT p07a 另开 |
| 主动调用记录 | /skills → List skills → Game Playtest，输入框插入引用 | [回放入口](../../lessons/02-rules/selection-evidence.html#explicit)；公开为终端文字摘录，省去本机路径，不是界面截图 |
| 自然语言请求 | 看不点名的任务怎样进入选用 | [请求](../../lessons/02-rules/selection-evidence.html#implicit-request)；保留本次完整请求 |
| 可用说明、读取与返回 | 对照输入和实际动作 | [说明](../../lessons/02-rules/selection-evidence.html#metadata)、[读取](../../lessons/02-rules/selection-evidence.html#read)、[返回](../../lessons/02-rules/selection-evidence.html#result)；原始顺序不改 |
| 描述原版、改写与复核 | 任务、情境、边界及修改后验证 | [复核记录](../../lessons/02-rules/selection-evidence.html#description)；课程改写与原文分开 |
| 可再建的演示副本 | 录前取得同版本文件，保留相对引用 | `tools/prepare-selection-demo.py` 从固定原始地址下载已列明文件；不会覆盖已有目录 |

## 实际结果与使用边界

| 运行 | 描述 | 请求 | game-playtest 读取 | 返回 |
| --- | --- | --- | --- | --- |
| original-positive | 原描述 | 试玩清单 | 已读取 | 返回清单 |
| original-negative | 原描述 | 润色按钮提示语 | 未见读取 | 重新开始 |
| revised-positive-verified | 课程改写 | 同一试玩清单请求 | 已读取 | 返回清单 |
| revised-negative | 课程改写 | 同一按钮提示语请求 | 未见读取 | 点击重新开始 |

两版在这两类请求中均符合选用预期，所以课件展示修改与复核方法，不讲“原版漏选、改后改善”，也不计算准确率。每轮事件 SHA-256 留在公开节选 JSON，可与私有原始文件核对。最初修改演示副本时被只读文件权限拒绝，随后运行仍用原描述；该轮保存在 `revised-positive/INVALID.txt` 标为无效，不计入上表。只放开副本文件的写权限后重新修改、确认输入，再运行有效对照，原始冻结文件未改。

主动调用那轮还自行查找了课程其他目录的游戏实现。其返回包含请求未给出的动画时间、计时等细节，未将整份输出作为本次规则，只保留与请求相符的计步和重开项。自然语言任务的完整清单也有需要进一步确认的条目；本部分只证明选用、读取与返回，不能称为游戏已通过检查。

## 录前准备与重建

在仓库根目录运行：

```sh
uv run python courseware/ch03/lessons/02-rules/tools/prepare-selection-demo.py lab-runs/ch03-selection-recording
```

脚本创建独立目录，下载固定版本的指导及配套引用，不安装全局 Skill 或 Plugin。随后在新建目录 `repo/` 中启动课程已有的 clean-codex；需要已配置课程模型凭据，凭据不写进材料。录制前确认 /skills 的列表中有 Game Playtest。请求从 PPT p07b 复制。

在 PPT p07b 先复制请求、另开已有主动调用回放，滚到“随后提交的请求”并保留标签，再切终端选择、粘贴、讲清任务后提交。等待时直接切已有回放，讲完回现场核对引用和清单；仍在等待的部分可在录制后剪去。语言触发与描述复核继续使用同一回放标签，不重复提交。文件内部用鼠标滚动、指认即可，不另做定位画面。描述实验只改演示副本；录前需要恢复原描述时，从本次下载的 `original-game-playtest.md` 复制回相应 SKILL.md，不改原始冻结资料或全局安装。

重建课件与回放：

```sh
uv run python courseware/ch03/lessons/02-rules/tools/build-lesson.py
uv run python courseware/ch03/lessons/02-rules/tools/check-selection.py
```

机制依据：[Build skills](https://learn.chatgpt.com/docs/build-skills)、[Skills · How skills activate](https://developers.openai.com/plugins/concepts/skills#how-skills-activate)。2026-11-07 已读取官方正文并与本机实际操作核对；终端界面仍以录制版本为准。
