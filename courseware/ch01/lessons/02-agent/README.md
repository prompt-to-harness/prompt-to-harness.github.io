# 1.2 Agent 执行机制与 AI 协作基础

[打开课件](index.html) · [画面预览](preview.png) · [逐步讲稿](speaker.html) · [Markdown 讲稿](script.md) · [分镜](STORYBOARD.md)

保留原 P09–P14 六段主线，沿用 1.1 欢迎语任务；末尾行业路标只作口播。原锚点 `p09` 到 `p14` 保留。页面、步骤与时长预算以 `lesson.js` 为准，实际课堂时长和教学效果未试讲验证。

## 播放

- 在原入口切换“演示”；→ / 空格推进一步，← 回退一步，跨页回退显示上一页末步。
- T 切换完整阅读；R 进入或退出专注演示；Home 回开篇，End 到小结末步。
- URL 的 `mode=slides&step=1#p11-judge` 可定位页内步骤，`step` 从 0 开始。
- 阅读模式显示所有答案；手机阅读中的宽图支持横向滚动。讲稿页的“查看这一步”跳到对应演示状态。
- 专注演示按 1280×720 等比适配。右上角固定 300×225 讲师区域，y=640–680 留字幕，底部按六段预算分配进度。
- 所有播放资源和字体均本地加载，不需要联网；行业延伸链接只在主动打开时访问外部网站。

## 内容与图表

| 原内容 | 新呈现 |
| --- | --- |
| P09 完整循环图 | 开篇、请求与返回对照、五节点分步循环、Model / Agent 对照 |
| P10 五术语列表 | 记录贴标签、可访问 / 已读取结构图、窗口容量示意、Diff / 页面证据对照 |
| P11 信息分类表 | 四类信息逐项归纳、两页共八条先判断后揭晓的陈述卡 |
| P12 失败纠正表 | 三类缺口的“现象—纠正—复验”，另两类失败作对照变式 |
| P13 课程路线表 | 四层能力阶梯，保留验证与人工判断的共同底座 |
| P14 行业表 | 补、查、做、看四个场景路标；随后核心能力自检与小结 |

2026-09-30 起，本节页面改用[课件零件库](../../../../docs/production/parts.md)组合：流程、对照、分类、题卡、阶梯均为可编辑 HTML，分步揭示与讲稿不变。三张图的节点与连线以 `data-node` / `data-edge` 标注，由 `tools/check-lesson.py` 与下列逻辑源逐项核对；原课件 SVG 保留在 `diagrams/` 作为历史版本。p10-window 标记为待定制页。

三张图均保留同源图资产：

- [执行循环逻辑源](diagrams/agent-loop.mmd)、[Archscribe 规格](diagrams/agent-loop.archscribe.json)、[课件 SVG](diagrams/agent-loop.svg)、[可编辑手绘稿](diagrams/hand-drawn/agent-loop.excalidraw)。
- [上下文逻辑源](diagrams/context.mmd)、[Archscribe 规格](diagrams/context.archscribe.json)、[课件 SVG](diagrams/context.svg)、[可编辑手绘稿](diagrams/hand-drawn/context.excalidraw)。
- [课程路线逻辑源](diagrams/course-route.mmd)、[Archscribe 规格](diagrams/course-route.archscribe.json)、[课件 SVG](diagrams/course-route.svg)、[可编辑手绘稿](diagrams/hand-drawn/course-route.excalidraw)。

`logic-previews/` 是 pretty-mermaid 的 zinc-light 逻辑校样；`hand-drawn/` 是 Archscribe paper 主题的 PNG / Excalidraw 校样。后者的通用画布、配色与布局仅用于校样；正式嵌入版本按课程规范重新布局，节点 ID 和连接关系逐项一致，不直接嵌入默认动画。SVG 在课件中使用本地课程字体；单独打开时使用可用的中文字体回退。

## 素材状态

- 原欢迎语取自 Starter，目标文字沿用 1.1。
- 请求、返回、Diff 与页面结果均为已明确标注的教学示意，不是 Codex 成功运行记录。授课需对照 1.1 本人记录或明确标注的课程回放，不重跑任务凑时长。
- 八条陈述沿用原 P11 备课草案，待与 M06 原题核对；不能称为已核验原题。
- 行业内容不练习、不考核。外部资料沿用原课件方向，本次未重新核验链接与产品操作。
- 学员交付仍为练习仓库中的 `docs/evidence/CH01_PROMPT_EXPERIMENT.md` 初稿、循环与概念地图，需有分类理由、证据和一条待补充信息。

## 维护与验证

`tools/build-lesson.py` 原是本节内容、分步口播、内联 SVG 和三张图源的生成源。**2026-10-03 发现它已落后于 `lesson.js`**：2026-09-30 按零件库重做页面时直接改了 `lesson.js`，没有同步回脚本；现在运行它会把页面退回旧版。同步之前以 `lesson.js` 为准，不要运行它。修改后运行：

```sh
python3 courseware/ch01/lessons/02-agent/tools/build-lesson.py
python3 courseware/tools/check-courseware.py
```

字体统一在 `courseware/shared/fonts/`，新增字符时按[字体说明](../../../../docs/production/fonts.md)重建。

在已安装 Playwright 与 Chromium 的 Python 环境运行：

```sh
python3 courseware/ch01/lessons/02-agent/tools/check-lesson.py
```

检查图拓扑、57 个显示状态、正文与讲师安全区、步骤回退、阅读切换、深链接、离线资源、手机阅读、讲稿链接及 1.1 / 1.3 原翻页行为。实际检查结果见 [验证记录](VALIDATION.md)。
