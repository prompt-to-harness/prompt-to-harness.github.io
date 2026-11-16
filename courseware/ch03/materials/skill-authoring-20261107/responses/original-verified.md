已按 `game-studio` 的流程做了分类与路由，并读取了相关的 `web-game-foundations` / `phaser-2d-game` / `game-ui-frontend` / `playtest-checklist` 约定。下面是开发方案（不含代码）。

---

# 最小翻牌记忆游戏 — 开发方案

## 1. 路由与栈选型

| 项 | 决策 |
|---|---|
| 类型 | 2D 网格卡片 → 走插件 **2D 默认路径** |
| 运行时 | **Phaser 3 + TypeScript + Vite** |
| UI | DOM 覆盖层（HUD / 结算 / 重开），画布只负责牌桌 |
| 后续 specialist | `phaser-2d-game`（实现）、`game-ui-frontend`（HUD 方向）、`sprite-pipeline`（牌面资产）、`game-playtest`（QA） |
| 备选（需你点头才切换） | 纯 DOM + CSS 3D flip：代码量更小、无引擎依赖，但失去补间/粒子/资源管理，扩展多关卡或花哨动效时成本反超 |

## 2. 玩法设计

- **幻想**：安静、耐玩的桌面纸牌记忆挑战；无战斗、无失败惩罚。
- **玩家动词**：翻开一张 → 翻开第二张 → 观察 → 继续 / 重开。
- **核心循环**：翻牌 → 比对 → (配对保留 | 不配对翻回) → 直到全部配对。
- **失败态**：**没有失败态**。只有"步数多少"的软指标。这点要在 UI 上体现为轻松语气而非评分。
- **一局时长**：目标 1–3 分钟；默认 **4×3 = 6 对**，难度后续再加。

**状态机（规则核心，纯逻辑，不依赖渲染）**

- 单卡：`FACE_DOWN → FLIPPING_UP → FACE_UP → MATCHED` / `FLIPPING_DOWN → FACE_DOWN`
- 牌桌阶段：`IDLE → AWAITING_FIRST → AWAITING_SECOND → RESOLVING → (AWAITING_FIRST | WIN)`
- 关键约束：`RESOLVING` 阶段**锁定输入**（约 800ms 等待不匹配翻回），期间点击无效，避免误翻第三张。

**规则细则**

1. 点未翻开的牌 → 记录为第一张；再点一张 → 第二张。
2. 两张 `faceId` 相同 → 进入 `MATCHED`，永久保留、不可再点。
3. 不同 → 短暂停顿后两张一起翻回，`moves` 计数 +1。
4. 全部牌进入 `MATCHED` → 触发 `WIN`：DOM 结算面板（用时/步数 + "再来一局"）。
5. **重开**：重新 Fisher–Yates 洗牌（可选 seeded RNG 便于复现 bug）、步数清零、配对数清零、状态回 `IDLE`；**不重置玩家已选难度/牌对数量**。重开按钮与结算面板都可触发。

## 3. 架构（遵循 plugin 边界规则）

```
src/
  game/simulation/   board.ts  rules.ts  rng.ts        ← 规则唯一真相源，可单元测试
  game/content/      deck.ts (牌面配置/难度)
  game/input/        actions.ts (reveal / restart / next)
  game/assets/       manifest.ts (稳定键，不写死路径)
  phaser/scenes/     BootScene / MenuScene / GameScene   ← 只做编排与表现
  phaser/view/       cardView.ts  flipFx.ts
  phaser/adapters/   sceneBridge.ts
  ui/hud/  ui/overlays/                                 ← DOM：步数、配对进度、重开、结算
```

- 规则写在 `simulation/`，Phaser 场景只读状态并播放补间；**禁止**在 `update()` 里做规则判定。
- 动画时长（翻转 180–220ms）属于视图层，不写进规则；规则只描述"此刻能否翻牌"。
- 无存档需求；若后续加，只序列化 `simulation` 的可序列化状态（牌序、配对集合、步数），不存 sprite/tween。

## 4. UI 与输入

- **HUD**：顶部一条细栏 = 配对进度 `x/6` + 步数 + 重开按钮。不做常驻大面板，牌桌是主角。
- **结算**：居中 modal（DOM，带背板与轻模糊），胜利文案 + 步数 + 再来一局。
- **主题**：CSS 变量定义配色/字体/材质语言（纸感、暖色木质桌面），不使用默认字体堆栈。
- **输入映射**：`reveal`（点击 / 键盘方向键+空格）、`restart`（按钮 / `R`）。指针与键盘都要有可见焦点态。
- **响应式**：桌面 4×3，移动端自动 3×4；画布尺寸变化时网格重排，牌面不裁切。
- **动效克制**：仅翻转与配对时的短暂高亮；尊重 `prefers-reduced-motion`，此时翻牌改为瞬时切换。

## 5. 资产工作流

- 必需：`card_back`、N 张 `card_face_<id>`、可选牌框/高光。
- 走 `sprite-pipeline`：先定 1 张基准帧，统一锚点与缩放后再批量出图，避免牌面尺寸不一。
- 尺寸统一（如 128×176 比例），Phaser 侧按同一 scale 缩放；牌面以色块+图形区分，不做写实美术，保证可读性。
- 音频非必需；如加，只保留"翻牌/配对成功"两个音效，默认音量低。
- 特效（配对成功的粒子）用 Phaser 内置粒子，不引入额外资源。

## 6. 测试方案

**规则层单测（Vitest）**
- 洗牌后牌面成对且数量守恒；同牌判定正确
- 不匹配时两张回到 `FACE_DOWN` 且 `moves` 递增
- 配对牌不可再翻、计入进度
- 全部配对触发一次 `WIN`；重开后状态完全复位（含 `moves`、进度、阶段）

**浏览器 QA（`game-playtest`）**
- 截图核对：初始态、翻一张、翻两张不匹配、翻两张匹配、结算面板
- 桌面 + 移动两种视口，牌桌不溢出
- `RESOLVING` 期间快速连点不应翻出第三张
- 结算 → 重开 → 可正常再玩
- reduced-motion 下翻牌仍完成、状态不卡

## 7. 实施顺序

1. 脚手架 + 规则模块 + 单测（先把游戏跑通在纯逻辑层）
2. Phaser 场景接入仿真层，完成点击/翻牌/配对流程
3. DOM HUD + 结算 + 重开
4. 牌面资产接入（先用色块占位）+ 动效打磨
5. 浏览器 QA 与响应式修整

## 8. 明确不做（本期）

多难度、计时赛模式、连击计分、排行榜、音效包、存档、触摸手势（三指等）。这些都留着，但会破坏"最小可交付"的边界。

---

要我进入实现阶段的话，下一步我会切到 `phaser-2d-game` skill 落地第 1、2 步（脚手架 + 规则模块 + 单测），仍然不启动浏览器，只跑单测。