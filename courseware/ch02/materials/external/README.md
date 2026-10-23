# 第 2 章外部佐证登记表

> 2026-10-22 起。规则见 [docs/production/external-sources.md](../../../../docs/production/external-sources.md)，调研与选材理由见[第 2 章 Context 引入素材](<../../../../docs/research/reports/第 2 章 Context 引入素材.md>)。本目录按主题分组，不进 Pages 站点；采用的截图放在对应小节的 `external/`，重画 SVG 在这里维护并由构建脚本内联。

## 主题索引

| 目录 | 内容 | 图元入口 |
| --- | --- | --- |
| `request-capture/` | p06-tap 的代理原理、原图、两版重画和页面样稿 | [tap_proxy_figures.py](request-capture/tap_proxy_figures.py) |
| `context-engineering/` | Context 引入帖子、请求组成、Prompt 与 Context 对照 | [figures.py](context-engineering/figures.py) |
| `context-rot/` | Context Rot 原图与两版曲线 | [figures.py](context-rot/figures.py) |

同一主题的原图、图元、SVG 和样稿放在一起；下面的登记表是本章总索引。已采用的帖子截图仍在小节 `external/`，表中记录实际路径。

状态：`候选`（截了图，等讲师选）、`采用`（已写进分镜）、`不用`（删图，保留这一行和理由）、`重画`（按原图自己画，原截图留作对照）。

| 文件 | 来源 | 作者 · 日期 | 截取 | 拟用在 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `context-engineering/x-karpathy-context-engineering.png` | [X 帖子](https://x.com/karpathy/status/1937902205765607626)（经官方嵌入页截取，含引用的 [Tobi 原帖](https://x.com/tobi/status/1935533422589399127)） | Andrej Karpathy · 2025-06-25 | 2026-10-22 | 章首 / 2.1 开头 | 不用：改用只截正文的版本 |
| `context-engineering/openai-codex-request-input.png` | [深入解析 Codex 智能体循环](https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/)“构建初始提示”一节 | Michael Bolin（OpenAI）· 2026-01-23 | 2026-10-22 | 2.1 锚点图之后“官方怎么说” | 候选；样稿：截图上屏看不清，建议重画（按文章顺序列出请求组成，对上锚点图） |
| `../../lessons/01-request/external/x-karpathy-context-engineering-text.png` | 同上，只截正文和引用的原帖，去掉点赞和回复区 | 同上 | 2026-10-22 | 2.1 p05a | 采用（C2-64） |
| `context-engineering/anthropic-prompt-vs-context.png` | [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) 第一张图 | Anthropic Applied AI · 2025-09-29 | 2026-10-22 | 2.1 p16a | 候选；样稿：原图的小标签在页面上读不清，只能看出大体结构；不如现在的文字版，或改成中文重画 |
| `context-rot/chroma-context-rot-repeated-words.png` | [Context Rot](https://www.trychroma.com/research/context-rot) 重复词任务曲线 | Kelly Hong 等（Chroma）· 2025-07-14 | 2026-10-22 | 2.2 p23 注意力一侧 | 候选；样稿：曲线一路往下，一眼能看懂，效果最好；截图要去掉图下的说明文字 |
| `context-engineering/redraw-openai-codex-request-{course,excalidraw}.svg` | 据 OpenAI 文章重画：请求按顺序拼成，对上锚点图 | 同上 | 2026-10-22 | 2.1 p16b | 采用 Excalidraw 版（C2-64）；截图版读不清 |
| `context-rot/redraw-chroma-context-rot-{course,excalidraw}.svg` | 据 Chroma 重复词任务重画，中文坐标；数据点为读图近似 | 同上 | 2026-10-22 | 2.2 p23a | 采用课程手绘版（C2-64） |
| `context-engineering/redraw-anthropic-prompt-vs-context-{course,excalidraw}.svg` | 据 Anthropic 第一张图重画，中文标签 | 同上 | 2026-10-22 | 2.1 p16c | 采用 Excalidraw 版（C2-64）；截图版小标签读不清 |

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
