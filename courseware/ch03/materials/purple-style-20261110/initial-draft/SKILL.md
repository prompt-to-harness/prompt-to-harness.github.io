---
name: purple-game-style
description: 紫色系网页小游戏的视觉风格规范。当需要为网页小游戏（记忆翻牌、消除、卡牌、益智、点击/反应类）或轻量互动页面新建、改造界面时使用：定义深蓝紫夜色底、靛紫渐变主色、青绿焦点色、半透明玻璃面板层级、实体卡片材质、按钮与状态反馈、结算浮层、动效节奏、响应式与无障碍规则。只约束可复用的视觉语言，不绑定具体玩法、牌阵或文案。
---

# 紫色网页小游戏视觉风格

本风格提炼自一份已完成的紫色记忆翻牌游戏。它规定的是**视觉语言**——色彩角色、材质、层级、反馈、节奏；玩法结构（关卡、计分口径、盘面、文案）由新游戏自行决定。

标注约定：`〔原作值〕` = 直接来自该作品源码的数值，可放心沿用；`〔建议〕` = 从原作推导出的做法，不是硬性规定，可按新玩法调整。

## 0. 适用边界

- 适用：单页网页小游戏、互动小工具；桌面优先，兼容移动；不依赖框架或构建步骤。
- 不适用：需要写实材质、强品牌识别或高对比无障碍认证的严肃业务界面。
- 这是一套**基调**而非模板。结构可以变，但采用后色彩角色与层级语义应保持自洽（同一屏里主色只该有一个主角）。

## 1. 色彩角色

〔原作值〕先定义语义 token，再在组件里引用，不要在组件里直接写死色值。

| 角色 | 值 | 承担什么 |
|---|---|---|
| 底色-深 | `#0c1022` | 页面最底层，线性渐变起点 |
| 底色-浅 | `#171e3d` | 线性渐变终点，制造整体上浮 |
| 光晕-蓝 | `#2a3170` | 左上径向光晕 |
| 光晕-紫 | `#3b2a63` | 右上径向光晕 |
| 主色 | `#7c8cff` | 靛蓝紫：主按钮、选中项、强调 |
| 主色-深 | `#9a6bff` | 主色渐变的第二停靠点 |
| 辅色 | `#56d6c6` | 青绿：键盘焦点环专用 |
| 成功 | `#4ade80` | 正确、达成状态 |
| 失败 | `#fb7185` | 错误、危险状态 |
| 文字-主 | `#eef1ff` | 冷白偏蓝的正文与数值 |
| 文字-次 | `#a3abcf` | 标签、副标题、说明 |

玻璃层（半透明白，靠亮度而非实色分层）：

| token | 值 | 用途 |
|---|---|---|
| `--panel` | `rgba(255,255,255,0.07)` | 常规面板（工具栏、统计块） |
| `--panel-strong` | `rgba(255,255,255,0.12)` | 次级按钮底色 |
| `--border` | `rgba(255,255,255,0.14)` | 面板 1px 描边 |
| 凹槽 | `rgba(0,0,0,0.28)` / `rgba(0,0,0,0.3)` | 分段控件外槽、键帽等「压进去」的底 |

角色规则〔建议，但与原作实现一致〕：

1. 页面底永远是深蓝紫；内容靠半透明白提亮，不靠实色块。
2. 主色只给「当前唯一的主行动」或「当前选中的选项」，避免同屏多个主色实心块互相抢戏。
3. 辅色青绿保留给焦点环。焦点环若用主色，会被按钮自身的填充吃掉。
4. 成功/失败色只在状态切换的那一瞬间出现（描边、面色、外发光），不做大面积着色。
5. 渐变方向几乎全部落在 92°–165°（左上→右下），形成统一光照方向；需要区分层级时用角度或色相差，不要改方向。

## 2. 背景配方〔原作值〕

```css
body {
  color: var(--text);
  background:
    radial-gradient(1100px 620px at 15% -10%, #2a3170 0%, transparent 55%),
    radial-gradient(900px 600px at 100% 0%, #3b2a63 0%, transparent 50%),
    linear-gradient(160deg, var(--bg-0), var(--bg-1));
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
}
```

两团径向光晕给深底一个光源方向（左上偏蓝、右上偏紫），线性渐变 160deg 负责整体明暗过渡。`background-attachment: fixed` 让长页面滚动时底色不跟着走。

## 3. 材质

**玻璃面板**（工具栏、统计块、浮层）〔原作值〕

- 填充 `--panel` + 1px `--border` 描边 + `backdrop-filter: blur(10px)`
- 圆角 16px；阴影 `0 18px 40px rgba(0,0,0,0.35)`
- 浮层面板是**有色玻璃**而不是白色玻璃：`linear-gradient(165deg, rgba(42,49,112,.96), rgba(30,24,60,.96))`——比页面底更亮更饱和，读作「浮出」

**实体表面**（卡片正面、可交互块）〔原作值〕

- 卡片正面用近白渐变 `linear-gradient(160deg, rgba(255,255,255,.96), rgba(226,230,255,.9))` + 1px `rgba(255,255,255,.55)` 描边。与玻璃面板相反，这里是「实体卡片被照亮」。

**斜纹纹理**（用于卡背、占位块、封面）〔原作值〕

```css
background:
  repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 6px, transparent 6px 12px),
  linear-gradient(140deg, #4b5bd6, #8b5cf6);
box-shadow: 0 6px 16px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.28);
```

45°、6px 实 / 6px 透的白纹叠在靛→紫渐变上；顶边再加一道 `inset 0 1px 0` 高光边，得到微妙的倒角错觉。

## 4. 层级

四级，从后到前〔建议的整理方式，取值均来自原作〕

0. **页面底** — 三层背景（见 §2）
1. **玻璃面板层** — 工具栏、统计块：半透明 + 模糊
2. **交互实层** — 主按钮、选中分段项、卡片正面
3. **浮层** — 结算/说明：`position: fixed; inset: 0; z-index: 50`，遮罩 `rgba(6,9,22,0.72)` + `backdrop-filter: blur(6px)`

核心规律：**层级靠「亮度 + 模糊度 + 不透明度」三重叠加表达，而不是靠堆叠多层阴影。** 越上层越亮、越不透明、描边越明显。

## 5. 形状与节奏

〔原作值〕

- 圆角梯度：键帽 5px / 分段按钮 9px / 按钮 11px / 卡片面 `clamp(8px,1.6vw,13px)` / 统计块 13px / 面板 16px / 浮层 22px
- 阴影梯度：选中态 `0 4px 12px` → 卡片 `0 6px 16px` → 主按钮 `0 8px 20px` → 浮层 `0 18px 40px`
- 外间距 `clamp(12px,2vw,20px)`；网格间距 `clamp(6px,1.4vw,12px)`
- 内容宽度上限 960px 居中，页面内边距 `clamp(16px,3vw,32px) clamp(12px,3vw,24px)`
- 网格列宽上限 `calc(var(--cols) * 108px)`——即「每列最多 108px，超出则整体缩窄」〔建议保留这条，它让不同列数的盘面在大屏上不被拉得过散〕

## 6. 交互反馈（通用）

〔原作值〕

| 状态 | 表现 | 时长 / 曲线 |
|---|---|---|
| hover（主按钮） | `filter: brightness(1.08)` | 0.18s ease |
| hover（幽灵按钮） | 底色 `rgba(255,255,255,.12)` → `.18` | 0.18s ease |
| active（按钮） | `translateY(1px) scale(0.99)` | 0.12s ease |
| 焦点 | `outline: 3px solid var(--accent-2); outline-offset: 2px` | — |
| 选中（分段控件） | 主色渐变底 + `0 4px 12px rgba(124,140,255,.35)` 外发光 | 0.18s ease |
| 关闭态开关 | `opacity: .5` + 删除线 | — |

- 只用 `:focus-visible`，不要用 `:focus`——否则鼠标点击也会亮圈。
- 焦点环用青绿而非主色（见 §1.3）。
- 「音效开关」这类状态型按钮用 `aria-pressed` 表达开关，关闭时降透明度 + 删除线，而不是换成另一种主色。

## 7. 状态色的一次性出现

状态色通常只做三件事：改边框色、改面色、加一圈外发光。〔原作值〕

- 成功：`border-color: var(--good)` + `box-shadow: 0 0 0 2px rgba(74,222,128,.55)` + 面色转浅绿（`rgba(219,255,231,.95)` → `rgba(180,245,205,.9)`），前景元素降到 `opacity: .62`
- 失败：`border-color: var(--bad)` + 面色转浅粉（`rgba(255,226,232,.95)` → `rgba(255,205,214,.9)`）+ 一次 0.42s 抖动
- 展开/选中的中间态：只加一圈主色描边 `0 0 0 2px rgba(124,140,255,.75)`，不改面色

## 8. 动效

〔原作值〕

- 时长档：微反馈 0.12s / 常规 0.18s / 结构性 0.45s；浮层淡入 0.22s，浮层入场 0.3s
- 缓动：位移与颜色用 `ease`；入场用带轻微回弹的 `cubic-bezier(0.2,0.9,0.3,1.2)`；3D 翻转用 `cubic-bezier(0.4,0.15,0.2,1)`
- 必须提供降级：

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
```

## 9. 字体与数字

〔原作值〕

- 字体栈：`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif`
- 标题用渐变文字：`background: linear-gradient(92deg, #fff 10%, #b9c2ff 60%, #7ce7d8 100%); -webkit-background-clip: text; background-clip: text; color: transparent`，字号 `clamp(1.7rem,4.5vw,2.4rem)`，字距 `0.5px`
- 数值用 `font-variant-numeric: tabular-nums`，避免计时数字跳动时左右抖动
- 标签 0.74–0.85rem、`letter-spacing: .5px`、次级色

## 10. 版式骨架（结构可替换）

〔建议：这套骨架来自原作，但换玩法时应替换其中的具体内容〕

标题区（居中 + 副标题）→ 工具栏（左：分组设置；右：主行动）→ 数据条（2–4 个等宽统计块）→ 主舞台（居中）→ 页脚提示。

- 工具栏：`display:flex; flex-wrap:wrap; justify-content:space-between; gap:12px; padding:12px 14px`，右侧操作组 `margin-left:auto`
- 数据条：`grid-template-columns: repeat(4, minmax(0,1fr)); gap:10px`，每格「上小标签 + 下大数值」纵向居中
- 主舞台：`display:flex; justify-content:center` 包住网格
- ≤520px：工具栏改纵向拉伸，操作按钮 `flex:1` 均分

## 11. 结算浮层

〔原作值〕

```css
.overlay {
  position: fixed; inset: 0; display: grid; place-items: center; padding: 20px;
  background: rgba(6,9,22,.72); backdrop-filter: blur(6px); z-index: 50;
  animation: fade-in .22s ease;
}
.overlay__panel {
  width: min(420px, 100%); text-align: center; padding: 30px 26px;
  background: linear-gradient(165deg, rgba(42,49,112,.96), rgba(30,24,60,.96));
  border: 1px solid var(--border); border-radius: 22px;
  box-shadow: 0 18px 40px rgba(0,0,0,.35);
  animation: rise .3s cubic-bezier(.2,.9,.3,1.2);
}
```

内容节奏：一个大图标（3.2rem）→ 标题（1.45rem）→ 说明文字（次级色，`line-height: 1.7`，关键数字用 `strong` 提为主色）→ 一行按钮（主行动 + 次行动）。

浮层行为〔原作值，且是通用要求〕：

- 打开时把焦点移到主行动按钮
- 关闭时把焦点还给触发它的按钮（不能把焦点留在已隐藏的元素里）
- `Esc` 可关；`Tab` / `Shift+Tab` 在浮层内循环（焦点陷阱）

## 12. 3D 卡牌（仅当玩法需要翻面/翻面类表现）

〔原作值〕

- 容器 `perspective: 1400px`，单卡 `perspective: 900px`（容器给整体透视，卡片给局部）
- 内层 `transform-style: preserve-3d`，两面 `backface-visibility: hidden`，正面预转 `rotateY(180deg)`
- 翻面：`transition: transform .45s cubic-bezier(0.4,0.15,0.2,1)`

**必须知道的坑**〔原作源码注释中明确记录〕：任何作用在正面上的 `animation` 若写了 `transform`，会整体覆盖 `rotateY(180deg)`，动画期间卡片会翻回背面。解决办法是把旋转写进**每一个关键帧**：

```css
@keyframes pop {
  0%   { transform: rotateY(180deg) scale(1); }
  45%  { transform: rotateY(180deg) scale(1.13); }
  100% { transform: rotateY(180deg) scale(1); }
}
```

这个坑对任何「元素自身带 3D 旋转 + 又要加位移/缩放动画」的组合都成立，值得沿用同样的处理方式。

## 13. 无障碍与健壮性（通用工程约束）

〔原作实现，可直接沿用的做法〕

- 互斥选项组：`role="radiogroup"` + 子项 `role="radio"` + `aria-checked`
- 开关按钮：`aria-pressed`
- 浮层：`role="dialog" aria-modal="true"` + `aria-labelledby` / `aria-describedby`
- 焦点环见 §6；焦点陷阱见 §11
- 动态更新的按钮要在状态变化时同步改写 `aria-label`（原作用「第 N 张牌，未翻开 / 图案 X / 已配对」这类描述）
- `localStorage` 在隐私模式会抛异常 → 读写都包 try/catch，失败降级为「不持久化」而不是崩溃
- `AudioContext` 需用户交互后才允许出声 → 首次播放时惰性创建，并在 `suspended` 时 `resume()`
- 键盘可玩：方向键移动焦点，Enter / 空格触发（原生 button 行为）

## 14. 明确属于原作、应当自行替换的部分

下列内容是**这个游戏**的，不是这套**风格**的，换玩法时不要照搬：

- 牌阵尺寸、`aspect-ratio: 3/4` 的具体取值、「简单 / 普通 / 困难」三档命名与各自牌数
- 12 个 emoji 图案；翻牌配对这一玩法本身
- 「步数 / 用时 / 配对 / 最佳」四项统计口径，以及「一次翻两张记一步」「步数优先、步数相同比用时」的计分规则
- 「全部配对完成！」「完美通关！」等文案与 🧠🎉🏆🥇 等 emoji
- 底部方向键操作提示、localStorage 键名、具体音效频率

真正值得继承的是**关系**而不是**内容**：

- 统计条是若干等宽格、上标签下数值
- 工具栏右侧是主行动，分组控件在左
- 浮层是「图标 → 标题 → 说明 → 按钮」的顺序
- 数字用 `tabular-nums`
- 状态色只在状态切换那一帧出现

这些换玩法后依然成立，也正是本 Skill 想留下的东西。

## 15. 复用检查清单

- [ ] 背景是深蓝紫 + 双径向光晕，且 `background-attachment: fixed`
- [ ] 面板用半透明白 + 1px 淡描边 + `backdrop-filter`，而不是实色块
- [ ] 主色只出现在当前主行动 / 当前选中项上
- [ ] 焦点环是 3px 青绿 + 2px 偏移，且用 `:focus-visible`
- [ ] hover / active / 选中三态都有反馈，且主按钮 hover 用亮度而非换色
- [ ] 成功绿与失败玫红只用于状态切换
- [ ] 数字用 `tabular-nums`
- [ ] 浮层有焦点陷阱、Esc 关闭、关闭后焦点归还
- [ ] 提供了 `prefers-reduced-motion` 降级
- [ ] `localStorage` 与 `AudioContext` 都有失败降级路径
- [ ] 320–520px 宽度下工具栏与统计条不溢出
- [ ] 已替换掉原作的玩法专属内容（牌阵、图标、统计口径、文案、键名）
