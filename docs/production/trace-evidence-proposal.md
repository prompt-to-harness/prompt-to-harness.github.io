# 提案：全课复用的请求记录证据组件（阅读视图 / 完整原文）

> 2026-10-24 · Claude（claude-opus-5-5）· 状态：提案，待讲师确认。只调研了现有实现，没有改任何课件或工具。基于 `dongxu/ch02-1023` 的 `8fe5d48`（A，含已整合的 2.2 阅读视图），以及 Codex 工作区的 `5a590cc`（B）。

## 要解决的问题

第 2 章已经有五套“在课件里看真实请求记录”的实现，各自能用，但互不通用：

| # | 位置 | 视图 | 怎样定位 | 阅读视图怎么生成 | 课件适配 |
| --- | --- | --- | --- | --- | --- |
| 1 | 2.1 p08a：`demos/ch02-request-walkthrough` → `01-request/request/` | 阅读 + 完整原文 | `viewer-bridge.js` 里写死 6 个点（按 section + 文本），只有一份请求 | `build-reader.py` 为这份请求手写的 Markdown（markdown-it，禁 HTML）+ 折叠 | 三层 iframe：课件 → `index.html`（导航外壳）→ `reader.html` / `viewer.html`；`lesson-adapter.js` 写死 6 步；两条消息通道 |
| 2 | 2.1 p07：`demos/ch02-static-trace` → `01-request/trace/` | 只有原文 | `selection.json`（依据链 A/C/D，构建时核对指纹和原文）→ 生成定位点 | 无 | `lesson-embed.js` 只服务 `#p07`，步骤、链名、按钮写死在 JS 里 |
| 3 | 2.2 A（已提交）：`02-iteration/trace/` | 只有原文 | `selection.json` 按点列出 `request/section/needle/callId`，构建时逐点核对 | 无 | `lesson-embed.js` 已泛化：一页一个 `.tl2-stage[data-trace-steps]`，懒加载，复用 #2 的 bridge 和 `lessonkit.keep_scroll_inside` |
| 4 | 2.2 A（`8fe5d48` 整合）：`tools/trace_reading.py` | 加阅读 | 同 #3 | Python 里按 `session-N` 和下标取原文，生成 `<pre>` 卡片并断言节选在原文里 | 接在 #3 上 |
| 5 | 2.2 B：`context-evidence.*` + `demos/ch02-context-nodes` | 阅读 + 原始记录 | `navigate.js`：换一个点就改 URL 重载查看器；另一条通道 `ch22-evidence` | `context_evidence.py` 手写每个面板，按 `item(组, 请求, 第 n 项)` 取原文 | 页内阅读面板；放大时把整个组件 DOM 挪进 dialog；播放器步骤映射写死在 JS（`{p22:[0,1,1],…}`）；公开 JSON 在 demos 和本节各存一份 |

重复的地方：

- **claude-tap 的适配脚本有三份**（#1、#2、#5 的 bridge / navigate），都依赖它页面里的全局变量 `filtered`、`selectEntry`、`t()`、`detailViewMode`。升级 claude-tap 时三处都要改。
- **消息通道有四条**（`ch02-request-walkthrough-v1`、`ch02-request-lesson-v1`、`ch02-static-trace-v1`、`ch22-evidence`）。
- **播放器步骤 → 定位点的映射写在三个 JS 里**，只有 #3 放在了页面数据里。
- **阅读视图有三种生成方式**（#1、#4、#5），断言写法各不相同。
- **放大窗口有四种实现**，样式都按页面 id 写（`#p07`、`#p08a`）。

已经修过的同类 bug 只修了一份，换一份实现又会出现：

- 外层页面跟着滚动（#3 修了，2.1 是后来才补上的）。
- 阅读模式首次打开不定位（A 的审查记录 R2，只在 #3 上修了）。
- 放大后按 Esc 回不来。

后面的章节（第 3 章 Memory、第 8 章失败分类，以及 Harness 部分）只要回到请求记录，现在只能再复制一份。

## 方案

**一次运行一份公开记录，一个定位文件，一个 Python 构建库，一个前端零件，一个查看器适配脚本。** 页面只写“这页看哪几个点、每一步停在哪”。

### 1. 定位文件 `evidence.json`（每节一份，取代各种 selection.json）

在 #3 的 `selection.json` 基础上扩展：

```json
{
  "source": "courseware/ch02/materials/iteration/run-20261024/trace.json",
  "trace_sha256": "…",
  "stages": {
    "p22": ["p22-rules", "p22-profile", "p22-answers", "p22-implement"]
  },
  "points": [
    {
      "key": "p22-profile",
      "label": "读 profile.md 的返回",
      "request": "session-8",
      "section": "section_messages",
      "callId": "call_…",
      "needle": "2019.03–2021.07　DeepMotion.ai",
      "reading": [
        {"title": "读取调用", "from": {"call": "call_…"}},
        {"title": "工具返回 · 资料节选", "from": {"result": "call_…"}, "lines": ["DeepMotion.ai"]}
      ]
    }
  ]
}
```

- **`stages`** 写每页的步骤顺序：第 n 步就对应第 n 个点。#1、#2、#5 写在 JS 里的映射，都搬到这里。
- **`reading`** 可以不写，不写就只有原文视图（#2、#3 现在的样子）。`from` 只按语义取原文（`call` / `result` / `message` 按 needle、`answer`、`summary`），不用 #4、#5 的数组下标。下标在记录重导出后会悄悄错位，而 needle 或 callId 找不到时构建会直接停下。
- **`lines` / `range`** 指定节选，构建时断言节选在原文里，并自动附上“展开该项完整原文”。
- 指纹不符、点不存在、needle 不唯一，一律停下，并列出候选（沿用 #2 的 `--list-candidates`），不默认选第一个。

### 2. 构建库 `courseware/tools/tracekit.py`（跨章）

把现在散在 #1–#5 构建脚本里的公共步骤收到一处：

- `load(evidence_path)`：读记录，核对指纹和每个点。
- `build_viewer(records, out, points)`，固定用 claude-tap 0.1.146 生成静态查看器，然后做五件事：
  - 默认显示中文；
  - 插入 `keep_scroll_inside`（从第 2 章的 `lessonkit.py` 移过来）；
  - 注入统一的 bridge；
  - 把中文字符转义，避免字体缺字检查误报；
  - 附上 LICENSE。
- `reading_html(point)`：生成阅读面板。纯文本用 `<pre>`；需要排版时可选 markdown-it 且禁用 HTML，这是 #1 的做法，保留下来。
- `stage_html(lesson_evidence, scene_id)`：生成页面里的零件 HTML。步骤列表放进 `data-` 属性，`build-lesson.py` 调用它就行。
- `standalone_html(...)`：需要独立打开的样稿页从同一份定义生成，demos 目录里不再另存数据和导航。

`make viewers` 改成每节一行 `uv run courseware/tools/tracekit.py <节>/evidence.json`。

### 3. 前端零件 `.p-evidence`（`courseware/shared/parts/evidence-trace.{js,css}`）

登记进零件库（`docs/production/parts.md`），任何一节在 `index.html` 里加载就能用：

- **布局**：
  - 左边一列是定位按钮，文字取自 `label`，可以分组（2.1 p07 的 A/C/D 用 `group` 字段表示）。
  - 右边上方是“阅读视图 / 完整原文”切换、“放大”“单独打开”。
  - 阅读视图直接写在页面里，不放 iframe。这样阅读模式能正常滚动、能被搜索，字体子集也能覆盖到；#1 正是因为这一点才多套了一层 iframe。
  - 完整原文用懒加载的 iframe，翻到这一页或滚到附近才加载（沿用 #3）。
- **与播放器同步**：监听 `lesson-position`，从 `data-steps` 取当前点。演示模式下点按钮会改写 `step` 并触发 `hashchange`（#2、#3 现在就是这样）；阅读模式下只切换，不改地址。首次加载时也要定位，同时修掉 R2。
- **放大**：只有一个共用的 dialog。把整个零件挪进去再挪回来（B 的做法），这样切换状态、所选视图都保留，不必在 dialog 里再画一套按钮（#2、#3 现在是重画一套）。从 iframe 里按 Esc 也能收起。
- **样式**：按零件类名写，不按页面 id；颜色用 `data-role` 和视觉规范里的 token。

### 4. 统一的查看器适配脚本 `courseware/shared/parts/trace-bridge.js`

以 #2 的 `viewer-bridge.js` 为底：按 `request_id` 选记录、展开对应 section；`callId` 返回改成纯文本；用 CSS Highlight 高亮 needle；放大时用大字号。再并入：

- #1 的工具定义定位（`section_tools` 里按工具名展开）和“所属消息：role”标签；
- B 的“需要时等记录列表渲染完再定位”（最多等 120 帧）。

**只留一条通道 `course-trace-v1`**，消息只有三种：

- `{key, expanded}`：课件让查看器定位到某个点；
- `{ready, key?}`：查看器已加载或已定位，回报给课件；
- `{escape}`：在查看器里按了 Esc。

保留 #2 对 file:// 的处理：校验 `event.source`，不靠 origin 判断来源。

claude-tap 全局变量的依赖集中在这一个文件里。升级 claude-tap 时只核对这一处，构建库里的版本断言会提醒。

### 5. 数据只存一份

公开记录只放在 `materials/<run>/`，查看器生成到本节 `trace/`，不提交（沿用现在的 `.gitignore` 规则）。B 在 `demos/ch02-context-nodes/` 和本节 `trace/` 里重复存的三份 JSON（共约 8.4K 行），迁移时删掉其中一份。

### 6. 检查

`check-presentation.py` 增加一项：遍历每个 `.p-evidence`，依次做：

- 阅读模式直接打开 `#页`，确认已定位到第一个点；
- 切到完整原文，确认高亮的 needle 可见；
- 放大，在 iframe 里按 Esc 能收起，收起后状态保留；
- 演示模式翻步时定位跟着走。

这些就是各节 LOG 里一再手工复测的项目，并进 `make check` 后不再靠人记。

## 不在本次范围

- 2.1 的 `config-*-compare.html` 是两列对照的静态页，不是“沿记录定位”，暂不并入。以后如果第 2.5 节或其他章要做跨工具对照，再考虑给零件加 `pair` 模式。
- 不改公开导出的脱敏规则（各 run 的 `export-public.py` 继续各管各的），也不改 claude-tap 版本。

## 迁移顺序（每步单独提交，每步都跑 `make check`）

1. 以 `8fe5d48` 已整合的 2.2 阅读视图为起点，抽出 `tracekit.py`、`trace-bridge.js` 和 `.p-evidence`，把 2.2 的 p22、p24、p27 改用它们，行为应与提交前一致，用新增的展示检查确认。
2. 2.1 p07 迁过去：A/C/D 写成 `group`，步骤写进 `stages`；要不要加阅读视图由讲师决定，迁移本身不加。删除 `01-request/trace/lesson-embed.*`。
3. 2.1 p08a 迁过去：六个点按 `message` / `tools` / `answer` 定义，阅读面板保留 Markdown 渲染和折叠。去掉 `request/index.html` 这层导航外壳和 `lesson-adapter.js`；`demos/ch02-request-walkthrough` 改成由 `standalone_html` 生成，或者删掉（见待定第 3 条）。
4. 删除旧的 bridge、navigate.js、多余的通道；B 的 `demos/ch02-context-nodes` 不合入。
5. `parts.md` 登记零件；制作手册里关于“嵌入请求记录”的段落改成指向本零件。

第 1、2 步不改任何页面文案和口播，只换实现。第 3 步会改 p08a 的画面结构（少一层外壳），要讲师看一眼。

## 待讲师确认

1. 零件放在 `courseware/shared/parts/`（全课共用，登记进零件库），还是先放在 `courseware/ch02/tools/`，等第二章用起来再上移？建议直接放 shared：第 3 章已经有回看请求记录的需要。
2. 阅读视图做成可选还是必选？建议可选：只看一行调用或返回的页（例如 2.1 p07 的 C、D）不需要节选。
3. demos 下的独立样稿还保留吗？建议只保留由同一份定义生成的独立页，或者干脆不留。录制备用改用课件的“单独打开”。
4. 迁移排在 2.2 定稿之后，还是现在就做？建议 2.2 内容先定稿，再做第 1 步，避免和 2.2 的内容修改同时动 `02-iteration/trace/`。
