---
name: purple-game-ui
description: 用「记忆翻牌」小游戏的紫色霓虹视觉风格，为浏览器小游戏搭建可直接套用的页面骨架——标题区、横排 HUD（工具条 + 四个数据卡）、居中场地（网格 / 画布 / 自由布局三种场地容器按玩法选）、结算浮层。当用户要「做一个和之前那个紫色调游戏站一样的小游戏」「复用紫色界面风格」「套用同一个页面布局」时使用。
---

# 紫色游戏站界面风格（Purple Game UI）

本 Skill 提供**一个可直接运行的页面模板** + **一个与玩法无关的 HUD 控制器**，
目标：新做一个小游戏时，默认**只替换中间的场地（stage）**，标题、HUD、浮层保持不变，
让所有小游戏看起来像出自同一个游戏站。

## 何时使用

- 「再做一个游戏，风格和上次那个紫色的保持一致」
- 「把这套布局复用到另一个玩法上」
- 「我只要换玩法，页面别动」

## 核心原则

1. **布局是契约，玩法是变量。** 页面自上而下永远是这个顺序：
   `标题 → 横向 HUD 工具条 → 四格数据条 → 居中场地 → 底部提示 → 结算浮层`。
   换玩法时只允许动「居中场地」内部——**但场地容器本身要按玩法换**（见「场地容器怎么选」）。
2. **零依赖、零构建。** 原生 HTML + CSS + ES Modules，不需要 npm、不需要打包器。
   但 **不能用 `file://` 直接打开**（ES Modules 会被 CORS 拦截），必须起一个 http 静态服务器。
3. **动效与音效是风格的一部分。** 紫色渐变、毛玻璃面板、发光描边、WebAudio 合成音，
   都直接从模板继承，不要另起炉灶。

## 目录结构

```
purple-game-ui/
├── SKILL.md                 # 本文件
├── templates/
│   ├── index.html           # 页面模板（骨架已就位）
│   ├── styles.css           # 全部样式：设计令牌 + 布局 + 组件 + 可选装饰件
│   └── src/
│       ├── shell.js         # HUD 控制器：难度切换 / 音效开关 / 重开 / 数据条 / 计时 / 浮层
│       ├── storage.js       # localStorage 封装（隐私模式降级）
│       └── sound.js         # WebAudio 合成音效
└── references/
    ├── design-tokens.md     # 令牌表 + 配色 + 尺寸规则
    └── patterns.md          # 换玩法时的落地清单、可复用装饰件、常见坑
```

## 快速上手

1. 复制整个 `templates/` 目录到新游戏目录，改名为 `index.html` + `styles.css` + `src/` 即可。
2. 打开 `index.html`，把 `<!-- ===== 场地：唯一需要替换的区域 ===== -->` 标记之间换成你的玩法 DOM。
3. 在你的玩法脚本里 `import { shell } from './shell.js'`，用 `shell` 更新 HUD：

```js
import { shell } from './shell.js';

shell.setStat('moves', '3');              // 更新「步数」
shell.setStat('pairs', '2/8');            // 更新「配对」
shell.setStat('time', '0:12');            // 更新「用时」
shell.setStat('best', '9 步 · 0:01');     // 更新「最佳」
shell.startTimer();                       // 从此刻开始计时
shell.stopTimer();
shell.showResult({                        // 弹结算浮层
  emoji: '🎉',
  title: '全部配对完成！',
  lines: ['本局用时 <strong>0:03</strong>，共 <strong>9</strong> 步。'],
  primary: { label: '再玩一局', onClick: () => shell.newGame() },
  secondary: { label: '查看牌面', onClick: () => shell.hideResult() },
});
shell.sfx.match();
```

4. 起服务器（任意静态服务器均可）：

```bash
cd <新游戏目录>
python3 -m http.server 8000     # → http://127.0.0.1:8000/
```

## 页面骨架契约

```html
<main class="app">
  <header class="app__header">
    <h1 class="title">🧠 记忆翻牌</h1>     <!-- 标题：渐变文字 + emoji 图标 -->
    <p class="subtitle">一句话玩法说明</p>
  </header>

  <section class="toolbar">              <!-- HUD 左：分段难度选择 -->
    <div class="field">…</div>
    <div class="field field--actions">…  <!-- HUD 右：音效开关 + 重新开始 -->
  </section>

  <section class="stats">                <!-- HUD 下：四格数据条 -->
    <div class="stat"><span class="stat__label">步数</span><span class="stat__value">0</span></div>
    <!-- 用时 / 配对 / 最佳 -->
  </section>

  <section class="board-wrap">           <!-- 居中场地：唯一允许更换玩法的区域 -->
    <div class="board" id="board"></div>   <!-- 或 <div class="stage">…</div>，二选一 -->
  </section>

  <footer class="app__footer"><p class="hint">键盘操作提示</p></footer>
</main>

<div class="overlay" id="overlay" hidden>  <!-- 结算浮层 -->
  <div class="overlay__panel" role="dialog" aria-modal="true">…</div>
</div>
```

## 场地容器怎么选（网格 / 画布 / 自由布局）

`.board-wrap` 只负责**居中**，所有玩法都用它。真正要按玩法选的是它里面的**场地容器**，
两种容器语义互斥，**一个场地只用一个，不要把两个类挂到同一个元素上**：

| 场地容器 | 适用玩法 | 它自带什么 | 场地内部用 | 宽度怎么调 |
|---|---|---|---|---|
| `.board` | **仅网格 / 棋盘类**：翻牌配对、消除、扫雷、2048 | `display:grid` + 按 `--cols` 算出的宽度上限 | `.card` / `.tile` / `.board__cell` | `--cols`、`--rows`、`--cell`（列宽基准，默认 108px） |
| `.stage` | **非网格类**：画布、自由布局、列表 | 纵向 flex + 水平居中，不施加列宽约束 | 画布用 `.stage-canvas`，提示用 `.stage__tip` | `--stage-max`（宽度上限，默认占满内容区） |

画布元素本身（`.stage-canvas`）的长宽比用 `--stage-ratio` 控制（默认 4/3），宽度上限用 `--stage-max`
控制。**不要把某一款游戏的像素尺寸或比例写进模板**——那是该游戏自己的取值，写在自己的
`styles.css` 或行内 style 里。

⚠️ 常见事故：把 `.board`（网格容器）当成「通用场地容器」保留在画布玩法上。
`.board` 的宽度上限是按**列**算的，`<canvas>` 作为它的第一个网格项只会被分到**第一列的宽度**，
场地因此塌缩成一小块。画布 / 自由布局玩法请用 `.stage`。

## 四个必须守住的视觉规则

1. **背景**：三层叠加——两个 `radial-gradient` 光晕（左上蓝紫、右上紫红）压在深蓝紫 `linear-gradient` 之上，`background-attachment: fixed`。
2. **面板**：`rgba(255,255,255,.07)` 半透明 + `1px solid rgba(255,255,255,.14)` 边框 + `backdrop-filter: blur(10px)`。
3. **主按钮**：紫色渐变 `linear-gradient(140deg, var(--accent), #9a6bff)` + 外发光阴影；次按钮是毛玻璃 ghost。
4. **焦点可见**：所有可交互元素 `:focus-visible` 用 `3px solid var(--accent-2)`（青绿）描边，键盘操作必须看得见。

## 换玩法时的检查清单

- [ ] `<h1>` 换标题与 emoji，`<p class="subtitle">` 换一句话玩法说明
- [ ] 数据条四个标签按新玩法改（例：步数 / 用时 / 得分 / 最佳）
- [ ] 场地内容整体替换，外层保留 `.board-wrap`（只管居中）
- [ ] 场地容器按玩法二选一：网格 / 棋盘类用 `.board`（带 `--cols` / `--rows`），
      画布 / 自由布局类用 `.stage`；**不要把 `.board` 和 `.stage` 叠在同一个元素上**
- [ ] 场地宽度用 `--stage-max` / `--cols` / `--cell` 之类**变量**表达，不要写死某款游戏的像素值
- [ ] 难度分段按钮数量按新玩法调整，或整块换成别的控件
- [ ] 结算浮层的文案与按钮语义对齐新玩法（「再玩一局」通常保留）
- [ ] 音效：`sfx.flip/match/mismatch/win` 按需调用；`sound.js` 里的音高可改
- [ ] `shell.js` 中 `difficulty` 默认值与 `storage.js` 的 `STORAGE_KEY` 换成新游戏自己的（避免多款游戏共用一份存档）

## 反模式（踩过的坑）

- ❌ 改玩法时顺手改了 `.app` 的子元素顺序 → 版式跑偏。顺序是契约。
- ❌ 把 `.board` 当成通用场地容器保留下来 → 它是**网格**容器（自带列宽上限），
  挂到画布 / 自由布局场地上会把内容挤进第一列。非网格玩法改用 `.stage`。
- ❌ 同一个元素上叠加语义冲突的类 → 同特异度下**后写的规则赢**，
  很容易让先写的规则被悄悄覆盖，布局塌缩且无从察觉。改完 CSS 至少量一次元素宽度。
- ❌ 在 CSS 动画的 `transform` 里写不完整的 transform，会覆盖掉原本的 `rotateY/translateX` 组合 → 动画中元素跳回原位。**每个关键帧都要带上完整 transform。**
- ❌ 用 `file://` 打开测试 → ES Modules 被 CORS 拦截，必须走 http。
- ❌ 浮层用 `display:none` 切换导致焦点丢失 → 用 `hidden` 属性 + `[hidden]{display:none}`，关闭时把焦点还给触发按钮。

## 验证

改完至少做一次真实浏览器检查（截图 + 点击），确认：

1. **量一次场地尺寸**：在 DevTools 里看场地元素的 `getBoundingClientRect()`，
   确认宽度和比例符合你的设计意图（网格类按 `--cols × --cell` 估算，
   画布类按 `--stage-max` / `--stage-ratio` 估算）。
   场地只有几十像素宽、或只占了容器第一列的宽度，说明容器类用错了。
2. 窄屏（≤520px）下工具条竖排、数据条仍是四列或合理换行、无横向滚动。
3. 键盘 Tab 可见焦点环，浮层打开时焦点在面板内、Esc 可关闭。
4. 结算浮层弹出后背景变暗 + 模糊，关闭后焦点回到「重新开始」。
5. 刷新页面后最佳成绩与难度仍在（localStorage 生效）。

详细的令牌表、装饰件清单与更多模式见 `references/`。

## 附带的演示玩法

`templates/src/main.js` 是一个**可直接运行的翻牌配对演示**，用来验证模板可用（它复用 `.card` 样式件）。
换成新玩法时删掉它重写即可——`shell.js` 不依赖它。

## 来源

本 Skill 的视觉与交互规范提取自工作区里的参考作品 `source-game/`（记忆翻牌）及其开发对话
`source-dialogue.md`：紫色双光晕背景、毛玻璃 HUD、渐变标题、四个数据格、结算浮层、
以及那次开发中踩到并修掉的 4 个真实缺陷（见 `references/patterns.md` 第四节）。
