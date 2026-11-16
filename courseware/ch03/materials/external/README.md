# 第三章外部佐证候选

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
