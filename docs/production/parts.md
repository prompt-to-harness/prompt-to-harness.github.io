# 课件零件库

> 2026-10-01 · v0.3：v0.1 在 1.2 节试用后接入第 0 章与首页；v0.2 吸收了页型原型中的 8 种设计；v0.3 在重刷第 1 章其余小节时补充了文件树、分叉、刻度条等零件。第 1 章六节、第 0 章、课程首页均已使用。这份文档写给制作课件的 Agent（Codex、Claude）和讲师：说明有哪些零件、什么时候用、怎么组合。它不是强制模板，也不代表教学效果已验证。

零件库的目的只有一个：**让 Agent 不用从坐标开始画图，也能稳定做出符合[视觉规范](visual-design-system.md)的页面**。零件管"长什么样"，页面怎么组合由 Agent 按内容自己判断。

- 样式：[`courseware/shared/parts/parts.css`](../../courseware/shared/parts/parts.css)
- 脚本：[`courseware/shared/parts/parts.js`](../../courseware/shared/parts/parts.js)（注入手绘抖动滤镜；不加载也能显示，只是边框不抖）
- 陈列页：[`demos/parts/`](../../demos/parts/index.html)，还没有小节在用的零件在这里逐个预览，可分步推进
- 制作流程：[课件制作手册](lesson-authoring-playbook.md)
- 样板：[1.2 节](../../courseware/ch01/lessons/02-agent/index.html)，逐页对应见[第 1 章视觉盘点](ch01-visual-inventory.md)
- 已接入：第 1 章全部六节；[第 0 章](../../courseware/ch00/index.html)（访谈页，大号流程与阶梯）、[课程首页](../../courseware/index.html)（阅读站，课程路线与手绘卡片，样式在 `courseware/shared/home.css`）

## 接入

在小节的 `index.html` 里，在原有样式和脚本之后加两行：

```html
<link rel="stylesheet" href="../../../shared/parts/parts.css">
<script src="../../../shared/parts/parts.js" defer></script>
```

页面内容仍写在 `lesson.js` 各页的 `html` 字段里，分步揭示仍用 `data-reveal="n"`（从 0 开始，最大值等于步骤数减一）。高亮带、括号这类"只在当前步出现"的元素用 `data-only="n"`，由 `parts.js` 处理，阅读模式下隐藏。播放器、章节条、讲师框都不用改。

## 三条原则

1. **颜色只用 `data-role`**：`us`（人）、`agent`、`tool`、`ctx`（上下文）、`gate`（风险/失败）、`ok`（通过）、`ink`（中性）。不要在页面里直接写色值。含义全课固定，不能挪作他用。
2. **手绘给概念，工整给证据**：框、节点、贴纸、结论条会轻微抖动；代码、终端、diff、页面截图保持工整。
3. **先选结构，再填内容**：一页只讲一个判断。先想这页是"流程""对照""分类"还是"自检"，再挑零件。

## 零件目录

| 零件 | 类名 | 什么时候用 | 1.2 中的例子 |
|---|---|---|---|
| 手绘框 | `.p-box` | 一个概念、一张证据卡；变体 `is-dashed`、`is-soft`、`is-solid` | p09-request |
| 标签 | `.p-tag` | 框内的小标签（"请求""返回"） | p09-request |
| 框内标题行 | `.p-head` | 标题在左、标签在右，省一行高度 | p10-diff |
| 流程 | `.p-flow` + `.p-node` | 横向步骤；节点之间自动加箭头；`style="--n:5"` 设列数 | p09-loop |
| 回路 / 出口 | `.p-back` / `.p-exit` | 流程第二行：回到前面某节点、从某节点退出 | p09-loop |
| 挂点 | `.p-hang` | 把失败、说明挂在某个节点下面 | p12 |
| 左右对照 | `.p-pair` + `.p-join` | 两者对比；中间放 `≠`、`?` 或带箭头的动作 | p10-diff、p12-trace |
| 网格 / 2×2 | `.p-grid` / `.p-quad` | 并列若干项；四分类用 `p-quad` | p14、p11 |
| 集合 | `.p-set` + `.p-item` | 一组条目；`is-picked` 高亮被选中的一项，`.p-mark` 盖小章 | p10-context |
| 记录与贴纸 | `.p-log` + `.p-sticker` + `.p-frame` | 把术语贴到具体记录上；`is-brace` 用括号覆盖多行；`p-frame` 圈出范围 | p10 |
| 暂停与题卡 | `.p-pause` + `.p-quiz` + `.p-q` + `.p-stamp` | 先给题，暂停，再逐条盖章揭晓 | p11-judge |
| 问答列表 | `.p-qlist` + `.p-qrow` + `.p-back-to` | 自检题，答案标出"回到哪个概念" | p14-check |
| 阶梯 | `.p-stairs` + `.p-stair` + `.p-base` | 逐层叠加的路线；`.p-here` 标当前位置 | p13 |
| 结论条 | `.p-bar` | 每页最后一句断言；`<b>` 高亮关键词；`is-light` 为浅色版 | 多页 |
| 证据块 | `.p-code`、`.p-term`、`.p-page` | 代码/diff（行内 `.del` `.add` `.hl`）、终端（`.err`）、页面截图框 | p09-request、p10-diff |
| 开篇地图 | `.p-map` | 章节开篇，本章各节，当前节红圈；`.p-hand` 手写问题，`.p-chain` 三件事 | p09 |
| 涂鸦小结 | `.p-sketch` + `.p-star` + `.p-warns` + `.p-next` | 每节最后一页：四个词、一个习惯、三种失败、下一节 | p14-summary |

v0.2 新增（示例见[陈列页](../../demos/parts/index.html)）：

| 零件 | 类名 | 什么时候用 |
|---|---|---|
| 语义小标签 | `.p-chip` | 行内的角色标签（"Agent""Tool"），比 `.p-tag` 紧凑 |
| 漫画开场 | `.p-comic` + `.p-panel` + `.p-cap` + `.p-bubble(.is-ai)` + `.p-avatar(.is-ai)` | 冲突开场，每节最多一页；三格，最后一格留下问题 |
| Prompt ↔ 回复 | `.p-prompt` + `.p-seg` + `.p-reply(.is-missing)` + `.p-ask`；`data-key="goal/ctx/limit/done"` | Prompt 四段固定配色；回复逐句贴色；缺的一段虚线加追问 |
| 切到实操 | `.p-handoff` + `.p-handoff-card` + `.p-env` + `.p-watch` | 切去真实环境前列 3 条"边看边找"；切回来给 `li` 加 `is-done`/`is-miss` |
| 代码讲解 / diff | `.p-walk` + `.p-src` + `.p-ln(.add/.del)` + `.p-band` / `.p-brace` + `.p-notes` | 当前行带、左括号用 `data-only`；批注最后一条落在副作用（`is-risk`）；diff 先看范围（`is-ok`） |
| 证据清单 | `.p-claim` + `.p-checks`（`li.is-no`） | 左边 Agent 原话，右边有证据绿勾、没有红叉写"还没看" |
| 权衡矩阵 | `.p-matrix`（`--n` 列）+ `data-mk="fit/over/lack"` + `.is-key` + `.p-legend` | 行写具体情境，末列写判断依据 |
| 操作记录 | `.p-rec` + `.p-cell` + `.p-why`，失败行 `.is-fail` | 动作 / 结果 / 能说明什么，三栏 |
| 未读与错误推断 | `.p-item.is-unread` / `.p-item.is-wrong` | 集合里标"没读过"，以及一条依据不足的推断 |
| 练习任务卡 | `.p-task` + 4 个 `.p-box` | 输入、任务、产出、验收；验收用 `ok` |

v0.3 新增（重刷第 1 章其余小节时补充）：

| 零件 | 类名 | 什么时候用 | 例子 |
|---|---|---|---|
| 文件树 | `.p-tree`，项上加 `is-dim` / `is-open` / `is-target` / `is-allow` / `is-block` | 找准目标文件、列出允许与禁止修改的范围 | 1.1 p02、1.4 p23-scope |
| 流程分叉 | `.p-fork` 放在 `.p-flow` 第二行，跨 3 列；子元素 `.l` / `.m` / `.r` 各自可带 `data-reveal` | 一个节点分到两三个去向（通过 / 修正 / 停止） | 1.1 p06-loop、1.3 p18-check、1.5 p29 |
| 第三行节点 | `.p-node.is-row2` | 分叉下方的去向节点 | 1.1 p06-loop |
| 刻度条 | `.p-scale`（两端文字） | 递进的影响或权限大小 | 1.3 p16、1.6 p34 |
| 插字 / 缺字 | `.p-ins` / `.p-miss` | 实际与期望逐字对比 | 1.1 p06 |
| 横排清单 | `.p-watch.is-row` | 切回来后一行打勾 | 1.1 p05 |
| 出口列表 | `.p-exits`（`is-pass` / `is-fix` / `is-stop`） | 通过、修正、停止三个出口 | 1.1 p07-recap、1.6 p36-recap |

最小例子（两步揭示的对照页）：

```html
<div class="p-pair">
  <div class="p-box" data-role="agent" data-reveal="0">
    <div class="p-head"><h3>Agent · 提出动作</h3><span class="p-tag" data-role="agent">请求</span></div>
    <p class="p-big">准备读取</p>
  </div>
  <div class="p-join" data-reveal="1"><span>工具执行</span><i class="p-arrow"></i></div>
  <div class="p-box" data-role="ctx" data-reveal="1">…</div>
</div>
<div class="p-bar" data-reveal="1">提出动作 ≠ 执行成功；下一步要看<b>返回</b>。</div>
```

## 图的节点与连线

流程图、结构图如果有 `diagrams/*.mmd` 逻辑源，在对应零件上标 `data-node="id"` 和 `data-edge="from:to"`，与逻辑源一一对应。1.2 的 `tools/check-lesson.py` 用这两个属性核对"美化没有改变流程含义"。

## 需要额外表达的页

零件拼不出想要的效果时（例如漫画开场、需要强视觉隐喻的页），不要硬拼，也不要手写一大段 SVG：

1. 先用零件做一个能讲的保底版本；
2. 在该页数据里加 `"expressive": "一句话写清想要的效果"`；
3. 阅读模式会显示"待定制"提示，之后由 Claude 集中重刷。重刷中做出好用的新形态，再沉淀回零件库。

定制页把专用样式写在该页 `html` 开头的 `<style>` 里，类名用 `x-` 前缀，不进 `parts.css`。第 1 章已完成的 6 页可作参考：

| 页 | 隐喻 |
|---|---|
| 1.2 p10-window | 一排信息卡片上罩一个取景框，框外变淡 |
| 1.3 p17 | 告示牌 · 围栏 · 盖章，对应意图、限制、批准 |
| 1.4 p20 | AI 猜出来的页面，三个编号图钉指向三个缺口 |
| 1.5 p29-code | 每人代码不同，改为"切到你的源码"实操页，不放固定代码 |
| 1.5 p31 | 三环相扣的链条 |
| 1.6 p34 | 一根滑杆，只有中间一段刚好 |

## 做完自查

画面目标 60–90 字，超过 120 字要拆（代码、diff、终端里的证据行不计），但看懂图必需的标签要留；解释、追问、"教学示意"之类说明进讲稿或阅读模式的 `lead`。放映模式下 `parts.css` 会隐藏 `.lede`（封面页除外）、`.caption`、`.source-note`、题卡解析 `.p-why`，录制时还会隐藏步骤状态；这些只在阅读模式出现。截图看一遍，问自己四个问题：

- 这页有没有一个视觉焦点，还是所有东西一样重？
- 结构有没有表达关系（先后、对比、归属），还是只是把文字装进框里？
- 分步揭示是不是在讲一个故事，最后一步是不是总览？
- 有没有东西压到讲师框（右上 300×225）或字幕区（y 640–680）？

最后一项可以量：1.2 的 `tools/check-lesson.py` 会逐页逐步检查内容是否超出正文区。

## 已知限制

- 陈列页只展示 v0.2 零件；v0.3 零件的实例直接看上表对应页面。
- 陈列页借用 1.2 的字体子集；示例里若出现子集外的字会回退系统字体，只影响预览。
- 手绘抖动依赖 SVG 滤镜，打印和"减少动态效果"设置下会关闭。
- 仓库规范要求流程图用 pretty-mermaid / archscribe 制作；本次环境里没有这两个 skill，1.2 的三张图只重新呈现、未改动逻辑源，拓扑由检查脚本核对。
