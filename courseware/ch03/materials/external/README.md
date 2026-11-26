# 第 3 章外部佐证登记表

> 2026-11-18 起。规则见 [docs/production/external-sources.md](../../../../docs/production/external-sources.md)，3.5 选材与设计依据见 [第三章讨论版](../../../../docs/outline/ch03-discussion.md#35-经验分享占位)。本目录不进 Pages 站点；已采用的帖子截图放在对应小节的 `external/`。

状态：`候选`（截了图，等讲师选）、`采用`（已写进分镜与课件）、`不用`（不进课件 `external/`，保留记录和理由）。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| [`../../lessons/05-vibe-showcase/external/karpathy-vibe-coding-cropped.png`](../../lessons/05-vibe-showcase/external/karpathy-vibe-coding-cropped.png) | [X 原帖](https://x.com/karpathy/status/1886192184808149383)（经官方嵌入页截取，裁去底部互动栏与回复区） | Andrej Karpathy · 2025-02-03 | 2026-11-18 | 3.5 `p02` | 采用：1096×496，上屏字号清晰 |
| —（仅列延伸链接，不上屏贴图） | [Pieter Levels 飞行游戏原帖](https://x.com/levelsio/status/1896690611257844116) 与 [fly.pieter.com](https://fly.pieter.com/) | Pieter Levels · 2025-03-04 | 2026-11-18 | 3.5 `p02` 实机入口与延伸阅读 | 不用截图上屏：`fly.pieter.com` 在 `p02` 作为 `live` 入口并切浏览器实机演示；原帖留作延伸阅读 |
| [`../../lessons/05-vibe-showcase/external/jasonlk-code-freeze-deleted-cropped.png`](../../lessons/05-vibe-showcase/external/jasonlk-code-freeze-deleted-cropped.png) | [Jason Lemkin 问答原帖附图 1](https://x.com/jasonlk/status/1946069562723897802)（问答气泡原图裁剪） | Jason Lemkin · 2025-07-18 | 2026-11-18 | 3.5 `p08` | 采用：875×825，展示代码冻结期间删光整个数据库的直接问答 |
| [`../../lessons/05-vibe-showcase/external/jasonlk-replit-confession-cropped.png`](../../lessons/05-vibe-showcase/external/jasonlk-replit-confession-cropped.png) | [Jason Lemkin 晒出 AI 忏悔原帖附图](https://x.com/jasonlk/status/1946066422477529487)（原图裁去底部滚动浮标） | Jason Lemkin · 2025-07-18 | 2026-11-18 | 3.5 `p09` | 采用：1060×1082，展示“panicked”认错与无视 `replit.md` 中大写禁令的原文 |

## 重新截取

```bash
uv run courseware/tools/capture-source.py https://x.com/karpathy/status/1886192184808149383 /tmp/karpathy-raw.png --wait 5
uv run courseware/tools/capture-source.py https://x.com/jasonlk/status/1946069562723897802 /tmp/jasonlk-qa-raw.png --wait 6
uv run courseware/tools/capture-source.py https://x.com/jasonlk/status/1946066422477529487 /tmp/jasonlk-confession-raw.png --wait 6
```

## 3.1 与 3.3 外部资料记录

本轮截取日期：2026-11-15。2026-11-15 讲师选定前两条制作 PPT 版式样稿，第三条保留为备用出处。样稿未接入正式 PPT。

| 文件 | 来源与作者日期 | 拟用位置 | 状态与画面检查 |
| --- | --- | --- | --- |
| [截图](development-guidance/openai-variability.png) | [OpenAI：Evaluation best practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices#:~:text=Generative%20AI%20is%20variable.)；OpenAI；未标发布日期 | p05（第 3 页）之后 | 样稿；原截图清晰，无浮层，无文字裁切 |
| [截图](development-guidance/anthropic-testing.png) | [Anthropic：Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents#testing)；Justin Young；2025-11-26 | 早期 05／紫色版案例之后，或 p06（第 4 页）的验证部分 | 样稿；原截图清晰，无浮层，无文字裁切 |
| [截图](development-guidance/openai-skills.png) | [OpenAI：Build skills](https://developers.openai.com/plugins/build/skills#:~:text=A%20skill%20complements)；OpenAI；未标发布日期 | p06c–p06d（第 5–6 页） | 备用出处；暂不制作样稿 |

## 重新截取

```sh
uv run courseware/tools/capture-source.py 'https://developers.openai.com/api/docs/guides/evaluation-best-practices' courseware/ch03/materials/external/development-guidance/openai-variability.png --text 'Generative AI is variable.'
uv run courseware/tools/capture-source.py 'https://www.anthropic.com/research/effective-harnesses-for-long-running-agents' courseware/ch03/materials/external/development-guidance/anthropic-testing.png --text 'One final major failure mode' --until 'once explicitly prompted'
uv run courseware/tools/capture-source.py 'https://developers.openai.com/plugins/build/skills' courseware/ch03/materials/external/development-guidance/openai-skills.png --text 'A skill complements' --until 'A plugin can contain'
```

## 两页 PPT 版式样稿

- [可交互预览](development-guidance/preview.html?mode=slides)，沿用现有课件播放器；左右键切页，R 进入专注演示。
- [第一张](development-guidance/preview-variability.png) · [第二张](development-guidance/preview-testing.png)。
- 可编辑源：`development-guidance/preview-data.js` 与 `preview.css`。独立预览壳不修改正式课件。
- 作者自查：1280×720 画布，原文段落完整；来源链接可见；人像只覆盖第二张来源栏右侧空白，不覆盖文字；正文及链接底边均不超过 y 632。图内英文约 22–24px。已检查两页实际截图。尚未讲师审阅或试讲。
- 第一张建议接在 p05 之后；第二张建议接在案例之后或 p06 验证部分。实际插入位置尚待确定。

## 讲述逻辑修订后的样稿（2026-11-15）

以下安排取代上版的宽泛插入建议。对应源：3.1 `screen-plan.json` → `design.external_evidence_preview`。

| 页 | 原讲述的精确位置 | 作用与录制状态 |
| --- | --- | --- |
| Anthropic · 检查覆盖范围 | `script.json` 的 `part-3[8]` 第 12 段之后、第 16 段之前（段号从 0 开始）；即牌面修正与复查结束、原 p05 过程归纳开始之间 | **建议录制展示**。把本课“61 项检查通过仍漏过实际牌面”的事实，与外部实验“已有测试仍可能漏掉用户完整使用流程”并置，落到检查覆盖范围的判断。并非介绍文章或重新讲测试教程。新增短过渡口播待样稿采用后接入。 |
| OpenAI · 不确定性 | 支撑 `part-3[8]` 第 16 段开头“前面我们讲过，大模型的输出有随机性”；在完整 PPT 中紧邻 p05 之后、p06 之前 | **补充逻辑，录制可跳过**。页面保留概念出处及其与开发方案、步骤、检查范围的对应；录制仍从 p05 直接进入 p06，不新增口播。 |

本轮仍只交付两页样稿。若采用，完整 PPT 为 10 页，建议录制展示 9 页、补充逻辑 1 页；当前正式 PPT 仍为 8 页。预览顶栏标记用途与前后位置，不将备课状态写进授课画布。第三条 Skill 来源继续备用。

新版视觉检查：原截图与本课论述同屏；两页标题、正文、链接均在画布内，字幕区保留；人像未遮住必要信息；原文保留来源。作者检查不代替讲师审阅。

### 3.3 开场：方法模块里的官方截图（2026-11-18）

讲师明确要求用截图呈现参考内容，PPT 不直接展示来源链接。三张方法页均标明来源名称，原文链接留在本文、讲述页和阅读资料；这是本轮局部展示选择，不修改全课规则。

| 采用截图 | 原文 | PPT 位置 | 截图范围 |
| --- | --- | --- | --- |
| `../../lessons/03-debug/external/agentskills-extract-task.png` | [Agent Skills · Extract from a hands-on task](https://agentskills.io/skill-creation/best-practices#extract-from-a-hands-on-task) | `create-direct` | 完成任务、提供上下文与纠正、提炼可复用模式的一段 |
| `../../lessons/03-debug/external/openai-create-skill.png` | [OpenAI · Create a skill](https://learn.chatgpt.com/docs/build-skills#create-a-skill) | `create-creator` | 内置 creator 说明及 Codex 的 `$skill-creator` 调用 |
| `../../lessons/03-debug/external/agentskills-synthesize.png` | [Agent Skills · Synthesize from existing project artifacts](https://agentskills.io/skill-creation/best-practices#synthesize-from-existing-project-artifacts) | `create-reference` | 综合已有资料，强调项目相关材料的一段 |

均为公开原页局部截图，2026-11-19 以 800px 浏览器宽度重新截取并核实，不是重画。三种请求为课程演示安排，不宣称官方规定三种互斥方法。开场 `creation-evidence` 改为旧对话、源码、截图与 Prompt 的关系；官方截图随后在对应方法模块带读。原先的排版短摘录不再采用。尚未讲师试讲。

重新截取（从仓库根目录执行）：

```sh
uv run courseware/tools/capture-source.py 'https://agentskills.io/skill-creation/best-practices' courseware/ch03/lessons/03-debug/external/agentskills-extract-task.png --selector '#extract-from-a-hands-on-task + span' --width 800
uv run courseware/tools/capture-source.py 'https://learn.chatgpt.com/docs/build-skills' courseware/ch03/lessons/03-debug/external/openai-create-skill.png --text 'If you want to describe the skill instead' --until '$skill-creator' --width 800
uv run courseware/tools/capture-source.py 'https://agentskills.io/skill-creation/best-practices' courseware/ch03/lessons/03-debug/external/agentskills-synthesize.png --selector '#synthesize-from-existing-project-artifacts + span' --width 800
```

2026-11-19 录屏可读性调整：三个方法页的官方截图改为正文主体，占满 1168px 正文宽度，来源移到图上方；原文约 24px 显示。下方保留一行手绘流程和完整 Prompt 查看、复制入口。按 1280×784 放映窗口核对三页与弹窗。


2026-11-19 讲师复看后改用第二章的原页截图呈现：资料在左、流程在右，撤下排版摘句与大段中文解释。截图以 600px 浏览器宽度重新取景，保留原文上下文；圈注由 PPT 的 SVG 覆盖层提供，不改截图像素。沿用本节先前“不在 PPT 直接显示原文链接”的决定；图可点击放大。

| 当前采用截图 | 截取范围与圈注 | 核对 |
| --- | --- | --- |
| `../../lessons/03-debug/external/creation-direct-context.png` | 原小标题、说明段、前两项提炼要点；圈出成功步骤与纠正意见 | 已核实原页并查看截图 |
| `../../lessons/03-debug/external/creation-creator-context.png` | 创建工具说明、Codex 调用代码及后续提问说明；圈出 `$skill-creator` | 已核实原页并查看截图 |
| `../../lessons/03-debug/external/creation-reference-context.png` | 原小标题与完整项目资料段落；圈出最后的项目相关性判断 | 已核实原页并查看截图 |

来源沿用上表；前一组三张窄截图仅保留为历史取材，不再用于方法页正文。复现：`uv run courseware/ch03/materials/external/development-guidance/capture-creation-context.py`。截图内容或换行变化后，须在 `tools/build-lesson.py` 的 `source_shot` 内复核圈注坐标。三页按 1280×784 实拍检查，Prompt 展开已点验；尚待讲师审阅。
