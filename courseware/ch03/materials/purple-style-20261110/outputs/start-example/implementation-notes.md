# 60 秒躲避与收集 · 开始界面原型 —— 实现说明

交付物：`output/index.html`（页面）、`output/styles.css`（本地样式）、`output/app.js`（原生交互脚本）、`output/implementation-notes.md`（本文件）。
无外部资源、无依赖、未安装任何包、未提交或发布、未启动常驻服务。

## 1. 实际读取的指导 / 配套文件

本次只读取了当前项目内提供的两个文件，均位于 `.agents/skills/purple-game-style/`，读取后未做任何修改（文件 mtime 仍为初始的 17:52）：

| 文件 | 读取方式 | 用途 |
|---|---|---|
| `.agents/skills/purple-game-style/SKILL.md` | 全文读取 | 色彩角色、材质与层级、控件反馈、语义配色、动效与排版、版式骨架、复用检查清单 |
| `.agents/skills/purple-game-style/references/source-visual.css` | 全文读取 | 原作视觉节选：`body` 背景三层叠加、`.toolbar`/`.stat`/`.btn--primary`/`.btn--ghost`/`.btn--ghost[aria-pressed="false"]`、`.title`/`.stat__value`、`.overlay*`、`@media (max-width: 520px)`、`prefers-reduced-motion` 降级块 |

未读取：任何其他项目目录、历史聊天记录、网络资源；项目内除上述两文件外只有一个空的 `.traces/` 目录。

## 2. 三处风格实现与对应依据

### 2.1 页面底：双光晕 + 160° 线性渐变，固定不随滚动

```css
body {
  background:
    radial-gradient(1100px 620px at 15% -10%, var(--glow-a) 0%, transparent 55%),
    radial-gradient(900px 600px at 100% 0%, var(--glow-b) 0%, transparent 50%),
    linear-gradient(160deg, var(--bg-0), var(--bg-1));
  background-attachment: fixed;
}
```

**依据**：SKILL.md §2「页面底为三层叠加：左上 1100×620 径向光晕 `#2a3170`、右上 900×600 径向光晕 `#3b2a63`、再叠 160° 线性渐变 `#0c1022`→`#171e3d`；底色固定，不随页面滚动」（标注为〔原作值〕）；`source-visual.css` 的 `body` 规则逐值一致。色值在 `:root` 中以 `--bg-0/--bg-1/--glow-a/--glow-b` 命名后引用，组件内不散写色值（SKILL.md §1「先定义语义 token 再在组件里引用」）。

### 2.2 材质层级：玻璃面板（统计块 / 主行动面板）与斜纹纹理（预览占位）

```css
.stat, .panel {
  background: var(--panel);            /* rgba(255,255,255,0.07) */
  border: 1px solid var(--border);      /* rgba(255,255,255,0.14) */
  backdrop-filter: blur(10px);
  border-radius: var(--r-stat);         /* 13px */
  box-shadow: 0 6px 16px rgba(0,0,0,0.24);
}
.preview__stage {
  background:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 6px, transparent 6px 12px),
    linear-gradient(140deg, var(--stripe-a), var(--stripe-b));
  border: 1px solid rgba(255,255,255,0.22);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.28), ...;
}
```

**依据**：SKILL.md §2 三种材质与四级层级——玻璃面板（`rgba(255,255,255,0.07)` 填充 + 1px `rgba(255,255,255,0.14)` 描边 + 10px 背景模糊 + 圆角 + 阴影，层级靠「亮度 + 模糊度 + 不透明度」表达）、斜纹纹理（45° 白色 8% 实线 6px 与透明 6px 交替，叠在 140° 渐变 `#4b5bd6`→`#8b5cf6` 上，描边 `rgba(255,255,255,0.22)`，顶边 `rgba(255,255,255,0.28)` 内高光），以及 §3 的圆角阶梯（5/9/11/13/16/22px）与阴影阶梯（`0 4px 12px`→`0 6px 16px`→`0 8px 20px`→`0 18px 40px rgba(0,0,0,0.35)`）。`source-visual.css` 中 `.stat`/`.toolbar`/`.overlay__panel` 为同一组数值的原作实现。斜纹纹理在此处的用途是「占位块」——SKILL.md §2 明确把「占位块」列为该材质的原始用途之一。

### 2.3 控件三态反馈 + 音效开关的关闭态表达 + 焦点环

```css
.btn { transition: transform 0.12s ease, filter 0.18s ease, background 0.18s ease; }
.btn:active { transform: translateY(1px) scale(0.99); }
.btn--primary {
  background: linear-gradient(140deg, var(--accent), var(--accent-stop));
  color: #fff;
  box-shadow: 0 8px 20px rgba(124,140,255,0.32);
}
.btn--primary:hover { filter: brightness(1.08); }   /* 只提亮度，不换色 */
.btn--ghost { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.14); }
.btn--ghost:hover { background: rgba(255,255,255,0.18); }
.btn--toggle[aria-pressed="false"] { opacity: 0.62; }
.btn--toggle[aria-pressed="false"] .btn__label { text-decoration: line-through; }
.btn:focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }
```

**依据**：SKILL.md §4 控件与反馈表（主按钮 140° 渐变 + `0 8px 20px rgba(124,140,255,0.32)`；hover 亮度 1.08 不换色；active 下沉 1px 缩放 0.99 / 0.12s；次级按钮 `rgba(255,255,255,0.12)` 底 + 1px 描边、hover 提到 0.18；状态开关关闭态＝透明度 + 删除线且不换另一种主色；常规过渡 0.18s ease、按下 0.12s ease；焦点环 3px 实线 `#56d6c6` + 2px 偏移，仅键盘可见焦点时出现）与 §6 的动效时长档。`source-visual.css` 中 `.btn--primary`/`.btn--ghost`/`.btn--ghost[aria-pressed="false"]`/`.segmented__btn:focus-visible` 为同一组原作实现。

### 2.4 补充：标题渐变文字、等宽数字、动效降级

标题使用 92° 渐变文字 `#fff` 10% → `#b9c2ff` 60% → `#7ce7d8` 100%、字号 `clamp(1.7rem, 4.5vw, 2.4rem)`、字距 0.5px（SKILL.md §6；`source-visual.css` 的 `.title`）；统计数值 1–1.25rem / 字重 650 / `font-variant-numeric: tabular-nums`（§6〔迁移建议〕：会跳动的数字必须用等宽数字）；文件末尾保留原作的 `prefers-reduced-motion` 降级块（§6「必须提供 `prefers-reduced-motion` 降级」；`source-visual.css` 末尾）。

## 3. 自行决定的部分（Skill 允许范围内的取舍）

1. **整体布局**：标题区 → 规则摘要数据条（3 个等宽统计块）→ 主行动玻璃面板（提示 + 主按钮 + 音效开关 + 预览占位）→ 页脚提示。SKILL.md §7 是〔迁移建议〕「只继承居中 + 固定最大宽度 + 窄屏自适应」，本次未沿用原作的「工具栏 / 数据条 / 主舞台」三段式与四列统计，而是按开始界面的实际内容重排为单列四段。
2. **语义色分配**：生命图标 `#fb7185`（危险）、得分图标 `#4ade80`（奖励）、时限图标 `#a3abcf`（中性）。三者的冗余信息由「形状（心形 / 宝石 / 时钟）+ 文字标签」提供，不只靠颜色（SKILL.md §5）。统计数值本身一律用文字-主 `#eef1ff`，**没有**把主色 `#7c8cff` 复用到数值上，以免与主按钮抢主角（SKILL.md §1「主色只给当前唯一的主行动」）。
3. **音效关闭态透明度 0.62**（原作 0.5）：为了 0.9rem 文字在深色底上的可读性；状态冗余仍由 `aria-pressed` + 喇叭/静音图标 + 「音效 开/关」文案三重承担（SKILL.md §4〔迁移建议〕「颜色不能是唯一的状态通道」）。
4. **图标用内联 SVG 线性图标**而非 emoji：无外部资源依赖，且避免系统 emoji 外观差异；图标本身 `aria-hidden`，状态由 `aria-pressed` + 随开/关更新的 `aria-label` 承担。 另外补了一条 `.btn--toggle .icon[hidden] { display: none; }` 兜底规则：`hidden` 属性是 HTML 全局属性，UA 样式表通常按 HTML 命名空间限定，放在内联 SVG 上不一定生效，故显式声明以保证「开/关」图标互斥显示。
5. **预览占位区的处理**：采用斜纹纹理材质代表「未来的玩法区域」，再叠一层 `rgba(12,16,34,0.55)` 蒙版压暗，使它读作「尚未接入的空舞台」，同时保持主按钮是同屏唯一主角。SKILL.md 中 0.72 + 6px 模糊那组数值是浮层遮罩〔原作值〕，此处 0.55 是自行取的更轻的占位压暗值。
6. **预览区不是模态浮层**，因此未实现浮层的焦点陷阱 / Esc 关闭 / 焦点归还（SKILL.md §8 仅约束浮层）。改为：点击「开始游戏」后按钮文案变为「预览中」并置为 `disabled`（原型没有真实关卡，重复点击无意义），预览区显示，焦点移到预览区（`tabindex="-1"`），并用 `role="status"` 的 `.sr-only` 区域播报状态。
7. **文案与统计口径**：「收集累计」只是为了与另两块保持「上标签下数值」的排版一致；每次收集加多少分、障碍物长什么样、失败如何反馈等玩法专属内容本次未定义。
8. **音效只切换 UI 状态**，不产生任何真实音频（原型范围所限）。

## 4. 未验证 / 未能验证的部分（如实说明）

- **未做浏览器渲染验证**：本机 Chrome 在当前沙箱中启动即崩溃（`--headless` / `--dump-dom` / 远程调试端口三种方式均为 exit 134 且无任何输出），`qlmanage`（WebKit）报「sandbox initialization failed」，且无 wkhtmltoimage / weasyprint / playwright / selenium，也不允许安装依赖。因此 **渐变、玻璃模糊、阴影、焦点环、字体回退、`backdrop-filter` 的真实观感未经渲染确认**，也未产出桌面 / 390px 的截图对比。
- **已做的替代验证**（脚本在 `/tmp/purple-verify/verify.js`，可复现）：
  - 静态：Python `html.parser` 解析 `index.html` —— 标签无未闭合 / 错配；全文无 `http(s)` 外链、无 `@import`、无 `@font-face`、无远程 `url()`；HTML 里用到的 class 全部有对应样式；CSS 花括号配对、`var()` 引用全部有定义；SKILL 的 14 个关键色值逐个比对通过。
  - 行为：用最小 DOM stub 在 Node 中**真实执行** `output/app.js`，断言：点击开始 → 按钮文案「预览中」、`disabled=true`、预览区显示、焦点移到预览区；点击音效 → `aria-pressed` 在 true/false 间翻转、图标切换、标签在「音效 开/关」间切换、`aria-live` 播报对应状态。全部通过（38 项检查无失败）。
  - 布局：按 `clamp()` 与 `@media (max-width: 520px)` 公式推算盒宽 —— 390px 下内容宽 366px、面板内宽 334px、统计块 115.3px（文本盒 107.3px），最长的「收集累计」4 字约 64px，不会溢出或换行；1280px 下统计块 297.3px。此为算式推演，非真实渲染测量。
- **仍未验证**：真实鼠标 / 键盘下的焦点环表现、`prefers-reduced-motion` 的实际降级动画、`backdrop-filter` 在各浏览器的支持差异、iOS Safari 与移动端实际显示效果。

## 5. 复用检查清单自评（对应 SKILL.md §9）

底色双光晕固定 ✅｜面板半透明玻璃 ✅｜主色只出现在主按钮 ✅（统计数值用文字-主，预览区为斜纹纹理并压暗）｜焦点环 3px `#56d6c6` + 2px 偏移且仅 `:focus-visible` ✅｜hover 靠亮度不换色 ✅｜三态反馈齐全 ✅｜危险 / 奖励 / 玩家语义可区分且不只靠颜色（图标形状 + 文字标签）✅｜瞬时反馈与持续语义（本原型无玩法语义元素）N/A｜数字用等宽数字 ✅｜浮层焦点陷阱 / Esc / 焦点归还 N/A（本次无浮层，替代处理见 §3.6）｜动效降级 ✅｜玩法专属内容已替换为「躲避与收集」文案与图标，未残留原作的牌阵 / 翻牌元素 ✅
