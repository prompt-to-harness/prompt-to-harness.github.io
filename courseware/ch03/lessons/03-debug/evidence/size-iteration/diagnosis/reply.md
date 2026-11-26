## 一、结论先行

**主要问题不在玩法脚本，而在「场地容器类名冲突 + 宽度约束被窄化」**：游戏把 `class="board board--arena"` 叠在同一个元素上，而 `.board` 是 Skill 模板里**为网格类玩法准备的类**（`display:grid` + `grid-template-columns: repeat(var(--cols),1fr)` + `max-width: min(100%, var(--cols)*108px)`）。因为两条规则特异度相同（都是单类选择器）而 `.board` 在样式表里出现得更靠后，`.board` 胜出：场地容器变成一个 **4 列、432px 宽的网格**，`<canvas class="arena">` 只是这个网格里的**第 1 列**，宽度被压到 ≈99px、height 由 `aspect-ratio:4/3` 定为 ≈74px——正是截图里那个 100×70 的小方块。

由此派生的第二层症状：`.board__tip` 也变成网格里的第 2 个格子项，提示文字会被排到画布右侧而不是下方。

---

## 二、事实依据（可验证）

**1. CSS 层（直接触发原因）** — `workspace/styles.css`
- L192 `.board-wrap { display:flex; justify-content:center; }`
- L195–198 `.board--arena { display:block; max-width: min(100%, 640px); }` ← AI 自己新增
- L200–209 `.arena { width:100%; height:auto; aspect-ratio:4/3; … }` ← AI 自己新增（与模板 L363 `.stage-canvas` 几乎逐条重复）
- L220–228 `.board { --cols:4; display:grid; grid-template-columns:repeat(var(--cols),minmax(0,1fr)); width:100%; max-width:min(100%, calc(var(--cols)*108px)); }` ← **模板原样，后出现**
- `diff` 证明：`.board--arena`/`.arena` 是 AI **插在 `.board` 规则之前**加的（diff 中 `@@ -185,9 +186,37 @@` 区块全部在 ` .board {` 之前）。

**2. 数值完全吻合截图**（推算）
`.app` 内容宽 912 → `.board` `width:100%` 且 `max-width:min(100%,4*108px)=432px`；gap = clamp(6,1.4vw,12)=12 → 每列 (432−36)/4 = **99px**；canvas `width:100%`+`aspect-ratio:4/3` → **99×74**；容器左边缘 = (912−432)/2 + 184 = **424px**。截图 `playing.png` 中场地盒恰为 x≈424–521、y≈212–285（约 99×73），与推算逐像素吻合。

**3. 模板与 Skill 侧（上游原因）**
- `templates/styles.css` L189–199 的 `.board` 与 L334 的 `.stage-canvas` 并存：**`.stage-canvas` 才是画布类场地的官方件**（`width:100%; max-width:min(100%, calc(var(--cols,8)*64px)); aspect-ratio:4/3` + 同款圆角/描边/背景/阴影），默认 512×384。
- 但 `SKILL.md` L96–97、L119 把 `.board` 写成**所有玩法的通用容器契约**：「场地内容整体替换，但容器保留 `.board-wrap` + `.board`（居中 + 宽度约束）」；`references/patterns.md` §三只列举 `.stage-canvas`「弹球、贪吃蛇等需要 `<canvas>` 的玩法」，**没有任何一句话说"画布类场地要用 `.stage-canvas`、并且不要再挂 `.board`"**。
- 于是 AI 按契约保留了 `.board`（`index.html` L28），又自己造了一个 `.board--arena` 修饰类，二者语义互斥。

**4. 生成过程（`logs/events.jsonl`）**
- AI 的 CSS 改动顺序是"先插修饰类、后保留原 `.board` 规则"，属于**未做冲突检查的编辑顺序**；
- 唯一自检是 `node --input-type=module --check`（语法检查）与 `curl` 200 状态检查，**从未渲染/测量过布局**；虽然 `SKILL.md` 的「验证」一节要求"至少做一次真实浏览器检查（截图 + 点击）"，且日志里探测过 Chrome/Playwright，但最终未执行，原始请求又把"浏览器试玩留给我"。→ 视觉塌缩无人拦截。
- 日志显示 AI 读取了 `SKILL.md` 与 `templates/*`，**未见读取 `references/patterns.md` / `design-tokens.md`**；而它在最终回复中声称"参考文档：references/design-tokens.md、references/patterns.md"。**注意**：`events.jsonl` 显然不完整（例如把 `index.html`/`styles.css` 的实际写入也没记进去），所以"没读"只能作为**弱证据**，不能据此断定它虚构。

**已证实 vs 推断**
- 已证实：类名冲突、CSS 规则顺序、`diff` 内容、模板缺 `.stage-canvas` 的场景说明、SKILL.md 的 `.board` 契约表述、几何吻合。
- 推断（合理但未直接证实）：AI 之所以"保留 `.board`"，主要受 SKILL.md 契约措辞驱动；它未读 patterns.md（证据弱，取决于日志完整性）。
- 明确无法确认：Skill 的上游 `source-game/` 对话与"生成过程是否把 `.board` 当成唯一容器"没有更多材料；无法排除其它外部因素（这是单次样本）。

---

## 三、修改建议

### A. 应在 Skill 上改（主战场，符合"迭代 Skill 供后续复用"的目标）

1. **把"场地"从"保留 `.board`"改为"按玩法选场地件"，并给出选择表**（`SKILL.md` L119 清单 + `patterns.md` §三）：
   - 网格/格子类（翻牌、消除、扫雷）→ 容器 `.board` + `--cols/--rows`，子项 `.card`/`.tile`
   - 画布类（躲避收集、弹球、贪吃蛇）→ 容器 `.board--canvas`（新）或直接 `.stage-canvas`，**不得再挂 `.board`**
   - 明确写出：「`.board` 是**网格布局类**，它同时承担列宽约束（`max-width = cols×108px`）；非网格场地挂上 `.board` 会把内容压进第 1 列」
2. **在 `templates/styles.css` 里补齐场地变体**（避免每次让 AI 现编）：给 `.board` 加注释说明其语义为 grid-only；提供 `.board--canvas { display:block; width:100%; max-width:min(100%,640px); }` 与 `.board--grid` 之类的显式变体；让 `.stage-canvas` 成为画布场地唯一推荐件（去掉重复的 `.arena` 造轮子空间）。
3. **给 Skill 增加"类名语义互斥"的坑位**（`patterns.md` §四）：「同一元素不要叠加语义冲突的类；后写的规则会因同特异度覆盖先写的」。这是本次事故的通用教训。
4. **强化"验证"为可执行步骤**：在「验证」节写死最小检查清单——(a) 用浏览器（或 headless 截图）截一帧；(b) 量 `.board`/canvas 的 `getBoundingClientRect()`，确认场地宽度 ≥ 400px 且宽高比 ≈ 4:3；(c) 首屏与结算屏各一张。本次 bug 只要量一次宽度就能发现。
5. 顺带：Skill 允许"去掉难度控件"的做法本身没问题，但建议写明"允许删除工具条区块时，数据条列数要同步 `repeat(N,...)`"（AI 这次改对了，但契约没写，属运气）。

### B. 应在本游戏实现中改（当前仓库的直接修复）

1. `index.html` L28：把场地元素改成**不挂 `.board`** 的独立容器，例如 `<div class="board-wrap"><div class="board--arena" id="board">…</div></div>`，或直接用模板既有的 `.stage-canvas`：
   ```html
   <section class="board-wrap">
     <div class="board--canvas">
       <canvas class="stage-canvas" id="arena" width="640" height="480" tabindex="0"></canvas>
       <p class="board__tip" id="board-tip">…</p>
     </div>
   </section>
   ```
2. `styles.css`：删掉 AI 现编的 `.arena`（与 `.stage-canvas` 重复），或保留但把 `.board--arena` 规则**移到 `.board` 规则之后**并提升特异度（如 `.board-wrap > .board--arena`）。**注意**：仅调整顺序属于打补丁式修法，不解决复用问题，所以真正的修法是"别让 `.board` 与画布场地同框"。
3. `.board__tip` 需在非网格容器里才会在画布下方居中（当前它落在网格第 2 列）。
4. 附带建议：`.arena` 的 `max-width:640px` 与逻辑分辨率 640×480 一致，尺寸策略本身没问题——**不要**去改画布逻辑坐标或 DPR 逻辑，那会掩盖问题。

### C. 优先级

1. **先改 Skill**：场地变体选择表 + 网格类语义澄清 + 互斥类坑位 + 可执行验证步骤（决定后续所有新游戏是否再犯）。
2. **再改本游戏**：去掉 `.board` 与画布场地的叠加（顺带验证 Skill 改完的效果）。
3. 暂不动 `shell.js`/`main.js` 玩法逻辑（与本次异常无关；`main.js` 的 DPR 处理是自洽的）。

---

## 四、验证方法

**对新生成的游戏（换一个玩法，如打地鼠/贪吃蛇）**
1. 起 `python3 -m http.server`，浏览器打开，**截图**首屏与结算屏。
2. 用 DevTools 量场地元素：`getBoundingClientRect()` 宽度应 ≥ 400px（网格类按 `--cols×108px` 算），高宽比与设计一致；canvas 场景应为 4:3 且约 512×384。
3. 断言 DOM：画布类场地的祖先/自身**不含** `.board`；网格类场地**必须**含 `.board` 与 `--cols/--rows`。
4. 窄屏（≤520px）复测：工具条竖排、数据条不溢出、无横向滚动。
5. Tab 焦点环、浮层打开/关闭焦点回归、刷新后最佳成绩保留（沿用 Skill 原有验收项）。

**回归 Skill 原有能力（防止改坏）**
- 翻牌演示：直接打开 `templates/index.html`（其 `main.js` 仍用 `.board` + `.card`），确认 4×4 牌阵仍是居中网格、翻转/配对/计时/浮层正常——这是 `.board` 语义保持"grid-only"后的守门测试。
- 快速跑一遍 `.tile`（消除类）与 `.stage-canvas`（画布类）两个件，确认各自宽度约束符合预期（tile 网格、canvas 512px）。
- 确认 `patterns.md` §三列出的三套场地件与 `templates/styles.css` 中实际存在的选择器**一一对应**（本次已发现二者若有出入会直接误导 AI；本次核对结果：`.card`/`.tile`/`.stage-canvas` 均存在）。

**本轮未做任何修改**（按要求仅分析）；工作区文件、Skill 文件均保持原样。