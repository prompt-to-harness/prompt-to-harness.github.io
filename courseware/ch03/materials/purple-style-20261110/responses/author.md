已完成。产物只含正文两份文件，全部数值已逐条回查源码验证（15 个 hex + 23 个 rgba 全部命中 `source-game/styles.css`）。

## 产物

```
purple-game-style/
├── SKILL.md            269 行 / 14 KB （name + description + 中文正文）
└── authoring-notes.md   86 行 / 10 KB   （取材、依据、事实/建议区分、未验证项）
```

**SKILL.md 正文结构**：适用边界 → 色彩角色（含语义 token 表） → 背景配方 → 材质（玻璃面板/实体表面/斜纹） → 四级层级 → 形状节奏 → 交互反馈四态 → 状态色一次性出现 → 动效档位与 reduced-motion → 字体与数字 → 版式骨架 → 结算浮层 → 3D 卡牌（含 transform 覆盖坑） → 无障碍与健壮性 → **应自行替换清单** → 复用检查清单。

数值标注为 `〔原作值〕`（直接摘自源码）与 `〔建议〕`（本次提炼的判断）两类。

## 读取的材料（全部来自 source-game，只读）

`index.html`、`styles.css`、`src/{main,game-core,difficulty,storage,sound,icons}.js`，以及 `docs/screenshot-initial.png`(1200×900)、`screenshot-win.png`(1200×900)、`screenshot-mobile.png`(780×1688)。

## 限制（原样列出）

**任务边界**：只读 source-game；不读其他项目、课程文档、历史会话、个人配置；不联网；不安装依赖；不生成新游戏；不运行原游戏；只生成正文版，不打包源码/图片/Reference/模板/脚本；不创建 UI metadata；不依赖本机绝对路径。

**本次自述的未验证项**（authoring-notes.md §4）：

1. 未运行原游戏——视觉结论来自阅读 CSS/DOM 与静态截图，数值可信但像素级呈现未复核。
2. 未验证跨浏览器表现（`backdrop-filter`、`backface-visibility`、`aspect-ratio`、`background-attachment: fixed`）。
3. 未验证 `prefers-reduced-motion` 下3D 翻转与 `is-open` 描边的配合是否仍正确。
4. 未做无障碍审计——Skill 中的无障碍条目是照抄原作做法，不是审计结论。
5. 截图状态来源未确认：`screenshot-initial.png` 的「最佳 9 步 · 0:01」说明它并非全新状态；三张图分别对应普通 4×4 / 普通 4×4 / 困难 4×6，不是同一局连续画面。
6. 颜色未做色彩管理核对——以 CSS 源值为准而非截图取色。
7. 声音与存储仅静态阅读，未实测。
8. Skill 本身未经「只给 Skill」的新会话复现测试，"可独立复用"目前只是设计意图。
9. 附带两处非风格性源码观察（`--rows` 变量未被 CSS 使用；`buildDeck` 奇偶注释措辞出入）。

**明确舍弃、未写成规格的原作内容**：牌阵行列数与 3:4 比例、三档难度命名与牌数、12 个 emoji、翻牌配对玩法、"步数/用时/配对/最佳"四项统计口径与计分规则、胜负文案与庆祝 emoji、底部键盘提示、localStorage 键名、音效频率。这些被 Skill §14 显式列为"应自行替换"，同时保留其**关系**（统计条等宽、工具栏右侧为主行动、浮层"图标→标题→说明→按钮"、数字用 tabular-nums、状态色只在切换帧出现）。

**未写入 Skill 的推断**：跨浏览器渲染差异、模糊滤镜性能、WCAG 对比度、原作不存在的组件（侧栏/Toast/暗色切换）、统计口径是否应沿用。

**未纳入本次产出的既有观察**：源码中 `.board` 的 `--rows` 变量未被使用；`buildDeck` 内关于奇偶的两处注释措辞略有出入——与视觉无关，仅在 notes 中记一笔。