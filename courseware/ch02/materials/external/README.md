# 第 2 章外部佐证登记表

> 2026-10-22 起。规则见 [docs/production/external-sources.md](../../../../docs/production/external-sources.md)，调研与选材理由见[第 2 章 Context 引入素材](<../../../../docs/research/reports/第 2 章 Context 引入素材.md>)。本目录按主题分组，不进 Pages 站点；采用的截图放在对应小节的 `external/`，重画 SVG 在这里维护并由构建脚本内联。

## 主题索引

| 目录 | 内容 | 图元入口 |
| --- | --- | --- |
| `request-capture/` | p06-tap 的代理原理、原图、两版重画和页面样稿 | [tap_proxy_figures.py](request-capture/tap_proxy_figures.py) |
| `context-engineering/` | Context 引入帖子、请求组成、Prompt 与 Context 对照 | [figures.py](context-engineering/figures.py) |
| `context-rot/` | Context Rot 原图与两版曲线；p23a 替换候选（smart zone 词条、官方说法、示意重画） | [figures.py](context-rot/figures.py) |
| `agent-loop/` | p07-loop 的循环与逐次请求增长：原图视口截图、两版重画和页面样稿 | [figures.py](agent-loop/figures.py) |

同一主题的原图、图元、SVG 和样稿放在一起；下面的登记表是本章总索引。已采用的帖子截图仍在小节 `external/`，表中记录实际路径。

状态：`候选`（截了图，等讲师选）、`采用`（已写进分镜）、`不用`（删图，保留这一行和理由）、`重画`（按原图自己画，原截图留作对照）。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `context-engineering/x-karpathy-context-engineering.png` | [X 帖子](https://x.com/karpathy/status/1937902205765607626)（经官方嵌入页截取，含引用的 [Tobi 原帖](https://x.com/tobi/status/1935533422589399127)） | Andrej Karpathy · 2025-06-25 | 2026-10-22 | 章首 / 2.1 开头 | 不用：改用只截正文的版本 |
| `context-engineering/openai-codex-request-input.png` | [深入解析 Codex 智能体循环](https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/)“构建初始提示”一节 | Michael Bolin（OpenAI）· 2026-01-23 | 2026-10-22 | 2.1 锚点图之后“官方怎么说” | 候选；样稿：截图上屏看不清，建议重画（按文章顺序列出请求组成，对上锚点图） |
| `../../lessons/01-request/external/x-karpathy-context-engineering-text.png` | 同上，只截正文和引用的原帖，去掉点赞和回复区 | 同上 | 2026-10-22 | 2.1 p05a | 采用（C2-64）；2026-10-23 继续保留，置于 p05a 右侧，与竖向概览并列（C2-77） |
| `context-engineering/anthropic-prompt-vs-context.png` | [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) 第一张图 | Anthropic Applied AI · 2025-09-29 | 2026-10-22 | 2.1 p16a | 候选；样稿：原图的小标签在页面上读不清，只能看出大体结构；不如现在的文字版，或改成中文重画 |
| `context-rot/chroma-context-rot-repeated-words.png` | [Context Rot](https://www.trychroma.com/research/context-rot) 重复词任务曲线 | Kelly Hong 等（Chroma）· 2025-07-14 | 2026-10-22 | 2.2 p23 注意力一侧 | 候选；样稿：曲线一路往下，一眼能看懂，效果最好；截图要去掉图下的说明文字 |
| `context-engineering/redraw-openai-codex-request-{course,excalidraw}.svg` | 据 OpenAI 文章重画：请求按顺序拼成；2026-10-24 去掉右侧对应锚点图的一列（C2-88） | 同上 | 2026-10-22 | 2.1 p16b | 采用 Excalidraw 版（C2-64）；截图版读不清 |
| `context-rot/redraw-chroma-context-rot-{course,excalidraw}.svg` | 据 Chroma 重复词任务重画，中文坐标；数据点为读图近似 | 同上 | 2026-10-22 | 2.2 p23a | 采用课程手绘版（C2-64）；2026-10-25 撤下（C2-116），只作讲师提示，SVG 与图元保留 |
| `context-engineering/redraw-anthropic-prompt-vs-context-{course,excalidraw}.svg` | 据 Anthropic 第一张图重画，中文标签 | 同上 | 2026-10-22 | 2.1 p16c | 采用 Excalidraw 版（C2-64）；截图版小标签读不清；2026-10-24 不用：p16c 并入 p16b、对照图撤下（C2-82），两版 SVG 与图元已删除，需要时从 Git 历史恢复 |
| `context-engineering/redraw-context-vertical-{course,excalidraw}.svg` | 课程自绘，参考 [Claude Academy](https://academy.claude.com/tutorials/parametric-memory-and-context) 对训练知识与当前 Context 的区分；不是官方原图的复刻 | 课程图元 · 2026-10-23 | 2026-10-23 原文核对 | 2.1 p05a 左侧竖向概览 | 采用课程手绘版（C2-77），右侧保留 Karpathy 截图；图元 `context-engineering/context_overview_figures.py`，样稿检查见对应审查记录 |
| `agent-loop/openai-snapshot2.svg`（原图）、`agent-loop/openai-agent-loop-viewport.jpg` | [深入解析 Codex 智能体循环](https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/) 的 Agent loop 图与 Snapshot 2（第 2 次调用 = 第 1 次全部 input + reasoning、function_call、function_call_output；正文称旧提示是新提示的“精确前缀”） | Michael Bolin（OpenAI）· 2026-01-23 | 2026-10-23 内置浏览器视口截图（原文已核对） | 2.1 p07-loop 对照 | 重画；只作对照，不上屏。Snapshot 2 为 2026-10-24 从文章图片地址下载的原始 SVG（images.ctfassets.net，`…Snapshot_2_desktop-light.svg`，802×311，无脚本），本次页面未触发人工验证；Agent loop 图仍是 2026-10-23 视口截图 |
| `agent-loop/redraw-codex-agent-loop-{course,excalidraw}.svg` | 据上面两张图重画：左为循环（模型 → Codex 执行工具 → 返回追加 → 再请求，或给出最终回答），右为第 1–3 次请求逐次变长，前缀原样重发；中文标签，不抄字段名，图例不用 System | 同上 | 2026-10-24 | 2.1 p07-loop | 采用 Excalidraw 版（C2-83）；版式样稿 `agent-loop/preview-codex-agent-loop-{course,excalidraw}.png`，借 p16b 证据页版式、连链接行在内 510/510 不溢出，max-height 400。课程手绘版箭头不显示的原因已查明并修复（各课程版 SVG 原共用 marker id `rd-arrow`，同页有两张时指到隐藏页里的第一张；redraw.py 改为按图名生成 id，2026-10-24）；Excalidraw 版的曲线原先不画箭头，现在两版都在曲线末端按切线画箭头，Anthropic 对照图的 Excalidraw 版因此多了一个箭头 |

采用的重画图不复制：页面构建时由 `courseware/ch02/tools/lessonkit.py` 的 `redrawn()` 从本目录读出 SVG 内联进页面。图元按主题存放在 `context-engineering/figures.py` 和 `context-rot/figures.py`，分别运行下列命令，生成该主题的两版 SVG：

```bash
uv run courseware/tools/redraw.py courseware/ch02/materials/external/context-engineering/figures.py
uv run courseware/tools/redraw.py courseware/ch02/materials/external/context-rot/figures.py
```

课程手绘版的抖动滤镜 `#p-rough` 由课件页的 `parts.js` 提供，单独打开文件时框线是直的。手写标题字体是子集，图里用到新字时要按 [docs/production/fonts.md](../../../../docs/production/fonts.md) 重建子集，否则会退回到无衬线字体。

样稿对照（2026-10-22，现有页面与加图后的页面并排，在浏览器里改页面结构渲染，没有改动课件文件）只存在本机临时目录，没有进仓库；结论写在上表“状态”一列。

## 重新截取

```bash
uv run courseware/tools/capture-source.py https://x.com/karpathy/status/1937902205765607626 courseware/ch02/materials/external/context-engineering/x-karpathy-context-engineering.png
uv run courseware/tools/capture-source.py https://x.com/karpathy/status/1937902205765607626 courseware/ch02/lessons/01-request/external/x-karpathy-context-engineering-text.png --text 'Andrej Karpathy' --until 'plausibly solvable' --pad 10
uv run courseware/tools/capture-source.py https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/ courseware/ch02/materials/external/context-engineering/openai-codex-request-input.png --text '在添加用户消息之前' --until '当 Codex 根据前述计算' --headed
uv run courseware/tools/capture-source.py https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents courseware/ch02/materials/external/context-engineering/anthropic-prompt-vs-context.png --selector figure
uv run courseware/tools/capture-source.py https://www.trychroma.com/research/context-rot courseware/ch02/materials/external/context-rot/chroma-context-rot-repeated-words.png --text 'Repeated Words'
```

openai.com 会弹 Cloudflare 人工验证，所以要加 `--headed` 开可见窗口；2026-10-22 实测时没有出现验证框，直接通过。


## p06-tap 请求查看原理（2026-10-23）

对应讲透问题 1，选材与核验见[调研报告](<../../../../docs/research/reports/第 2 章请求查看方案.md>)。讲师已选 Excalidraw 版，写入章文件、分镜和正式页面（C2-68），按请求、返回、查看记录三步揭示；本机标签改为“我们的电脑”。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `request-capture/claude-tap-architecture.png` | [固定版本架构图](https://raw.githubusercontent.com/liaohch3/claude-tap/v0.1.146/docs/architecture.png) | liaohch3/claude-tap 维护者 · v0.1.146，未核发布日期 | 2026-10-23 | 2.1 p06-tap | 候选；2200×976。已打开检查，无浮层；原图用 Claude Code / Anthropic，建议按本章路径整理为中文图 |
| `request-capture/redraw-tap-proxy-{course,excalidraw}.svg` | 据同版本 README 的 How it works 整理 | 同上 | 2026-10-23 生成 | 2.1 p06-tap | 采用 Excalidraw 版（C2-68）；课程手绘版保留作对照；图元 `request-capture/tap_proxy_figures.py`，`reveal` 控制分步 |
| `request-capture/tap-proxy-preview-{course,excalidraw}.png` | 本地课件页浏览器 DOM 样稿 | 本课程 · 2026-10-23 | 2026-10-23 | 2.1 p06-tap | 对照样稿；两版已打开检查，内容区无溢出，标题不侵入人像区，文字可读；正式页已采用 Excalidraw 并另行检查三步揭示 |

截图与图元可复现命令：

```bash
uv run courseware/tools/capture-source.py https://raw.githubusercontent.com/liaohch3/claude-tap/v0.1.146/docs/architecture.png courseware/ch02/materials/external/request-capture/claude-tap-architecture.png --selector img --wait 1
uv run courseware/tools/redraw.py courseware/ch02/materials/external/request-capture/tap_proxy_figures.py
uv run courseware/ch02/materials/external/request-capture/preview.py
```

曾尝试截 GitHub README 的 How it works 段落，页面目标未加载成功，没有产出截图；改截同版本公开原图。pretty-mermaid / archscribe 技能本机未找到，此次用仓库 redraw.py 生成两版，已按 README 人工核对关系；不是上述技能的执行结果。

## 2.3 风格参考（2026-10-23）

对应 2.3 的项目动作（改风格），不对应讲透问题；页面先让学员看到“风格能差多大”，再选一个做示例。候选由子代理从 GitHub 的 awesome 列表和常见模板里筛出，用 curl 核对过能取到正文和 CSS；许可逐条打开原文核对。四张都是首屏截图，按 1280 宽缩放后放进 `../../lessons/03-review/external/`，页面 p40a0 引用。

| 文件 | 来源 | 作者 · 许可 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `../../lessons/03-review/external/ref-hyperspace.png` | [Hyperspace 演示页](https://html5up.net/uploads/demos/hyperspace/) | HTML5 UP · CC BY 3.0（[许可页](https://html5up.net/license)，页面源码注释同），使用要署名；已核实 | 2026-10-23 | 2.3 p40a0 | 采用（示例） |
| `../../lessons/03-review/external/ref-brittanychiang.png` | [brittanychiang.com](https://brittanychiang.com/) | Brittany Chiang · 源码仓库 [bchiang7/v4](https://github.com/bchiang7/v4) README 写明可以 fork，要注明出处、不能当成自己的作品，仓库标 MIT；已核实 README | 2026-10-23 | 2.3 p40a0 | 采用（备选） |
| `../../lessons/03-review/external/ref-freelancer.png` | [Freelancer 演示页](https://startbootstrap.github.io/startbootstrap-freelancer/) | Start Bootstrap · MIT（[仓库](https://github.com/StartBootstrap/startbootstrap-freelancer) LICENSE 文件）；子代理已核实 | 2026-10-23 | 2.3 p40a0 | 采用（备选） |
| `../../lessons/03-review/external/ref-jonbarron.png` | [jonbarron.info](https://jonbarron.info/) | Jon Barron · 页面上欢迎复用源码（建议用 GitHub 上的代码，不要直接抓页面）；已核实页面原话 | 2026-10-23 | 2.3 p40a0 | 采用（备选）；只截到第一篇论文，下面有他人合影，不截 |

截取注意：

- brittanychiang.com 左栏是固定定位，要加 `--keep-fixed`，否则会被当成浮层隐藏，只剩右栏。
- jonbarron.info 用默认截法时几次落在页面中段（页面加载后有滚动），改用 Playwright 按页面坐标从顶部截 640 像素高。
- 四张截图里的人物：Freelancer 是插画头像；Jon Barron 的头像是他本人主页上公开的插画；没有截第三方的照片。

```bash
uv run courseware/tools/capture-source.py https://html5up.net/uploads/demos/hyperspace/ ref-hyperspace.png --width 1280
uv run courseware/tools/capture-source.py https://brittanychiang.com/ ref-brittanychiang.png --width 1280 --keep-fixed
uv run courseware/tools/capture-source.py https://startbootstrap.github.io/startbootstrap-freelancer/ ref-freelancer.png --width 1280
# 以上三张截完用 sips -Z 1280 缩到 1280 宽；jonbarron.info 用 Playwright 直接按坐标截：
# page.goto("https://jonbarron.info/"); page.screenshot(full_page=True, clip={"x":0,"y":0,"width":1280,"height":640})，视口 1280×900、device_scale_factor=1
```


## 2.5 p62b 系统指令版本对比（2026-10-23）

对应章文件 C2-76。数据取自 [WEIFENG2333/phistory](https://github.com/WEIFENG2333/phistory) 的 `captures/index.json`（2026-10-22 更新）。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `../../lessons/05-experience/external/phistory-codex-0.156.0-0.157.0.png` | [phistory.cc 对比页](https://phistory.cc/?agent=codex&from=0.156.0&to=0.157.0)，Codex CLI 0.156.0 → 0.157.0 默认变体，滚到第 13 行 | Phistory（WEIFENG2333）· 快照 2026-09-22 与 2026-09-25 发布 | 2026-10-23，宽 1000 视口，2 倍像素 | 2.5 p62b | 采用（C2-76） |

重新截取：用 Playwright 打开上面的链接，等 `.monaco-diff-editor` 出现，再用 `monaco.editor.getDiffEditors()[0]` 的两侧编辑器 `revealLineNearTop(13)`，截整个视口。站点 README 未写许可证，只截图引用并标出处。

## p05a 概览的依据与复现

- 已核对 [Claude Academy 的训练知识与 Context 教程](https://academy.claude.com/tutorials/parametric-memory-and-context)：先区分模型参数中学到的知识和当前提供的信息，再讨论窗口与附加内容。另核对 [Working Memory](https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory)。概览为课程自己的教学归纳；Karpathy 的帖子只佐证 Context Engineering 关注信息组织，不作为模型参数是否变化的依据。
- 采用的竖图与原截图均在实际 p05a 页面检查；1280×720 画布左图右帖，避开右上讲师框；正文阅读模式窄屏按上下排列。未试讲。

```sh
uv run courseware/tools/redraw.py courseware/ch02/materials/external/context-engineering/context_overview_figures.py
python3 courseware/ch02/lessons/01-request/tools/build-lesson.py
```

## p09 Harness 层面与消息来源候选（2026-10-23）

对应讲透问题 2，补充问题 1。见[调研报告](<../../../../docs/research/reports/第 2 章 Harness 层面与消息来源.md>)。两篇一手原文均已核实；2026-10-23 讲师确认采用课程归纳，已同步 p09 分镜、页面与口播，live 链接可现场打开原文。

| 文件 / 材料 | 来源 | 作者 · 日期 | 截取 / 检查 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| Codex harness 术语段（未产出原文截图） | [Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/) | Michael Bolin · 2026-01-23 | 2026-10-23 已核原文 | 2.1 p09，工具运行框架 | 采用：p09 课程归纳与 live 原文链接。capture-source 英文、中文目标和 headed 尝试均未找到段落；没有绕过验证 |
| 项目约束与反馈（未产出原文截图） | [Harness engineering](https://openai.com/index/harness-engineering/) | Ryan Lopopolo · 2026-02-11 | 2026-10-23 已核原文 | 2.1 预告后续项目 Harness | 采用：p09 项目环境预告与 live 原文链接。本次 capture-source 未找到段落，没有可用原文截图 |
| `context-engineering/preview-harness-layers.png` | 上述两篇，课程归纳 | 本课程 · 2026-10-23 | 2026-10-23 | p09 附近的解释方式候选 | 样稿，非正式课件；正文 370/370 无溢出；两条原文链接可见，标题让出右上人像区；未试讲 |
| `context-engineering/preview-user-provenance.png` | 本次请求核验 + [初始提示说明](https://openai.com/index/unrolling-the-codex-agent-loop/) | 本课程 · 2026-10-23 | 2026-10-23 | p09 的 user 来源对照 | 样稿，非正式课件；用摘要避免原始请求里的本机路径；正文 370/370，无横向挤压；原文链接可见；未试讲 |

样稿在实际本地课件页中临时替换 DOM 后截图，没有修改页面源；两张都已打开检查。首次检查发现页底链接与导航重叠，已上移重截复查。它们展示课程归纳与本次消息摘要，不冒充官方截图。复现：

```bash
uv run courseware/ch02/materials/external/context-engineering/preview_harness.py
```

失败的原文截图命令（无产物，不作为已截图材料）：

```bash
uv run courseware/tools/capture-source.py https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/ courseware/ch02/materials/external/context-engineering/openai-codex-harness-definition.png --text '本文重点探讨 Codex 的运行框架' --width 1100 --headed
uv run courseware/tools/capture-source.py https://openai.com/zh-Hans-CN/index/harness-engineering/ courseware/ch02/materials/external/context-engineering/openai-project-harness-enforcement.png --text '每个业务域都划分为一组固定的层' --width 1100
```

## 2.2 缓存、失败返回与压缩（2026-10-24）

对应讲透问题 4、5。调研见[调研报告](<../../../../docs/research/reports/第 2 章 Context 引入素材.md>)“2026-10-24 补充：2.2 缓存、失败返回与压缩”，审查见 [2.2 主线与外部佐证审查](../../../../docs/reviews/ch02/2026-10-24-2.2-mainline-sources-claude.md)。讲师确认一节保持 3～4 处外部佐证（C2-97）：本组只采用 Manus“保留错误的内容”一张图（重画右半），其余不用，截图已删，需要时按下面的命令重截。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `cache-compaction/manus-keep-wrong-stuff.png`（原图） | [Manus 中文版](https://manus.im/zh-cn/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)“保留错误的内容”的图：左半清掉失败再试，右半失败的观察 2A 留在 context，再做 2B 成功 | 季逸超（Yichao "Peak" Ji）· 2025-07-18 | 2026-10-24，1360×766，已打开检查 | 2.2 p24 对照 | 重画；只作对照，不上屏：p24 左栏约 480 宽，原图英文小字读不清 |
| `cache-compaction/redraw-keep-errors-{course,excalidraw}.svg` | 据上图右半重画，中文标签 | 同上 | 2026-10-24 | 2.2 p24 | 采用 Excalidraw 版（C2-97）；图元 `cache-compaction/keep_errors_figures.py`；左半只在讲师提示里口头带一句 |
| `cache-compaction/manus-kv-cache.png` | 同上，“围绕 KV 缓存进行设计”的对照图 | 同上 | 2026-10-24 | 2.2 p23 | 不用（C2-97，控制佐证数量；p23 已有 OpenAI 提示缓存链接），图已删 |
| `cache-compaction/manus-file-system-context.png` | 同上，“使用文件系统作为上下文”的图 | 同上 | 2026-10-24 | 2.2 p27 | 不用（C2-97），图已删 |
| `agent-loop/openai-snapshot3.svg`（原图） | [深入解析 Codex 智能体循环](https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/) Snapshot 3 “Starting a new turn” | Michael Bolin（OpenAI）· 2026-01-23 | 2026-10-24 | 2.2 p22 / p23 | 不用（C2-97；2.1 p07-loop 已有逐次变长的重画图），图已删 |
| `cache-compaction/redraw-session-states-{course,excalidraw}.svg` | 课程自绘：继续、/clear、压缩后、新建交接之后请求里还剩什么，文件在请求外；据本节 2026-10-24 记录 14、6、28 | 本课程 · 2026-10-24 | — | 2.2 p28 | 采用 Excalidraw 版（C2-97，与 2.1 p07-loop 同风格）；图元 `cache-compaction/session_states_figures.py`；不是外部材料，不调 anchor() |

```bash
U=https://manus.im/zh-cn/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
D=courseware/ch02/materials/external/cache-compaction
uv run courseware/tools/capture-source.py $U $D/manus-keep-wrong-stuff.png --selector 'img[src*="dBjZlVbKJVhjgQuF"]' --wait 4
uv run courseware/tools/capture-source.py $U $D/manus-kv-cache.png --selector 'img[src*="OhdKxGRSXCcuqOvz"]' --wait 4
uv run courseware/tools/capture-source.py $U $D/manus-file-system-context.png --selector 'img[src*="sBITCOxGnHNUPHTD"]' --wait 4
curl -sL -o courseware/ch02/materials/external/agent-loop/openai-snapshot3.svg 'https://images.ctfassets.net/kftzwdyauwt9/29dQVXimfduA5GoUR6uWhe/eb25359d27a683352878fe78c6d3e27b/oai_EngBlog_Unrolling_the_Codex_agent_loop_Snapshot_3_desktop-light.svg'
uv run courseware/tools/redraw.py courseware/ch02/materials/external/cache-compaction/session_states_figures.py
uv run courseware/tools/redraw.py courseware/ch02/materials/external/cache-compaction/keep_errors_figures.py
```

Manus 页面的图片地址是站点上传路径，换版后选择器可能失效；失效时按图题重新定位。

## p23a 长 context 表现（2026-10-25）

对应讲透问题 4 的“注意力也是代价”，替换 Chroma 的候选；讲师选了重画示意（C2-116），没选的四张截图删掉了，没有提交。选材与核实见[调研报告](<../../../../docs/research/reports/第 2 章长 context 表现佐证.md>)。版式样稿在本地课件 p23a 注入渲染（1280 宽视口，未改课件文件，截图只在本机）。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `context-rot/aihero-smart-zone.png` | [AI Coding Dictionary · Smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone) 第一段（定义，含 125K–150K “有争议”） | Matt Pocock（AI Hero）· 无日期（GitHub 仓库 README 最近提交 2026-09-24） | 2026-10-25，1792×294 | 2.2 p23a | 不用（C2-116）：英文正文上屏偏小，改为画面底部链接；截图已删 |
| `context-rot/aihero-smart-zone-window.png` | 同一词条第三段（分区和窗口上限无关） | 同上 | 2026-10-25，1792×238 | 2.2 p23a | 不用（C2-116）：同上，截图已删 |
| `context-rot/claude-code-best-practices-context.png` | [Claude Code 最佳实践（中文）](https://code.claude.com/docs/zh-CN/best-practices)开头“这很重要，因为当 context 填充时，LLM 性能会下降”一段 | Anthropic · 无日期 | 2026-10-25，1720×226 | 2.2 p23a 口播 | 不用截图（C2-116）：字小，这句只进口播；截图已删 |
| `context-rot/anthropic-attention-budget.png` | [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) attention budget 一段 | Anthropic Applied AI · 2025-09-29 | 2026-10-25，1392×366 | 2.2 p23a 备选 | 不用（C2-116）：2.1 p16a 已用同一篇；截图已删 |
| `context-rot/redraw-smart-zone-{course,excalidraw}.svg` | 课程示意，据 Matt Pocock 词条与 [Dex Horthy “No Vibes Allowed”](https://ai.engineer/talks/context-engineering-for-complex-codebases)（AI Engineer Code 2025，YouTube 2025-12-02）：smart zone → dumb zone，分界因模型和任务而异，窗口上限更靠后；不画数字 | 课程图元 · 2026-10-25 | — | 2.2 p23a | 采用课程手绘版（C2-116）；图内标题已去掉，避免和页面标题重复 |

```bash
uv run courseware/tools/redraw.py courseware/ch02/materials/external/context-rot/figures.py --only smart-zone
```
