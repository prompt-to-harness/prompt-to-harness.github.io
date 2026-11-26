# 音效：事件表、选型与开关

音效资源：`assets/js/purple-sound.js`（零音频文件，纯 WebAudio 现场合成，源自初版紫色翻牌游戏的 `sound.js`，已改成**与玩法无关的事件表**）。

## 为什么是「事件表」而不是「翻牌音效」

初版游戏只有四个声音：`flip` / `match` / `mismatch` / `win`，它们绑定的是翻牌玩法本身。复用时不能照搬这套命名——换玩法就没有「配对」可言。

所以这里把同样的合成手法抽象成**通用事件**：`tap` `move` `select` `pickup` `success` `error` `tick` `complete` `fail`。每个玩法从这张表里挑自己用得上的，再按需覆盖。

| 事件 | 声音特征 | 典型用途（举例，非强制） |
|---|---|---|
| `tap` | 短促三角波单音（520Hz, 70ms） | 落子、点击、按键确认 |
| `move` | 很轻的正弦（380Hz, 50ms） | 光标移动、焦点切换（连续触发时必须轻） |
| `select` | 两音上行（660→880Hz） | 选中选项、展开面板、开始游戏 |
| `pickup` | 滑音上行（523→784Hz） | 收集到资源、拾取道具、得分 |
| `success` | 双音（660 + 990Hz） | 命中目标、达成一次任务、消除 |
| `error` | 低沉锯齿波（196Hz, 200ms） | 失误、违规、扣血 |
| `tick` | 极短滴声（1000Hz, 30ms） | 倒计时、节拍 |
| `complete` | 四音上行琶音 | 通关、结算浮层弹出 |
| `fail` | 三音下行 | 失败、结束 |

## 按玩法选事件的建议

- **回合制**（记忆、棋类、解谜）：`tap`（操作）、`success` / `error`（回合结果）、`complete`（通关）。回合之间有间隔，不需要 `move` / `tick`。
- **实时动作**（平台、节奏、物理）：`move` / `tap`（操作）、`pickup`（拾取）、`error`（受伤）、`tick`（节拍或倒计时）。`move` 要轻，否则连续触发会糊成一片。
- **消除 / 连锁**：`success`（消除）、`pickup`（掉落）、`complete`（清空），连锁层数越高可以叠加 `pickup` 的次数或提高音量。
- **策略 / 建造**：`select`（放置）、`pickup`（资源到账）、`error`（非法操作）、`complete`。这类玩法反馈慢，音效可以稍长一点。
- **竞速 / 反应**：`tick`（预备）、`complete`（冲线）、`fail`（失误）。事件少但辨识度要强。

**不要**把翻牌当默认事件表。`tap` 是最保险的通用反馈，任何玩法都至少要有一个。

## 接入步骤

```js
import { play, bindSoundToggle, unlockAudio } from './purple-sound.js';

// 1) 静音开关（持久化到 localStorage）—— UI 上用 .pg-btn--ghost
bindSoundToggle(document.getElementById('sound-toggle'));

// 2) 首次交互时解锁音频（部分浏览器要求先有用户手势）
unlockAudio();

// 3) 在事件发生处播放
play('tap');                 // 操作
play('success');             // 达成目标
play('complete', { delay: 0.3 });   // 结算浮层弹出前 0.3 秒
```

自定义或覆盖音效：

```js
import { defineCue } from './purple-sound.js';

defineCue('bomb', [
  { type: 'sawtooth', freq: 120, freq2: 60, duration: 0.35, gain: 0.12 },
  { type: 'square', freq: 90, duration: 0.2, gain: 0.08, delay: 0.1 },
]);
```

## 硬性要求

- **必须能关闭声音**：界面上提供一个开关（`bindSoundToggle` 已处理好文案、aria-pressed 与持久化）。静音状态下 `play()` 直接静默返回，游戏逻辑不受影响。
- **不要自动播放**：不要在没有用户交互前播放声音（浏览器会拦截，且体验很差）。`unlockAudio()` 会在第一次交互时恢复 AudioContext。
- **音频只做补充**：不能只靠声音传达信息——关掉声音后游戏必须完全可玩（结算浮层里要有文字数值）。
- **不要叠太多层**：同一时刻最多 12 个发声（模块内置上限），避免密集玩法糊成噪音。

## 实现要点（源自初版翻牌游戏）

- **惰性创建 AudioContext**：第一次真正发声时才 `new AudioContext()`，且捕获构造异常（浏览器不支持时静默降级）。
- **suspended 自动 resume**：页面切后台再回来时上下文会挂起，`getContext()` 里检测到 `state === 'suspended'` 就 `resume()`。
- **音量包络**：`gain` 从 0.0001 起、15ms 内冲到峰值、再指数衰减回 0.0001，避免爆音（click/pop）。
- **延迟调度**：琶音用 `audio.currentTime + delay` 排期，不是 `setTimeout`，所以不会因为主线程卡顿而错拍。
- **静音持久化要降级**：`localStorage` 在隐私模式下写入会抛异常，`bindSoundToggle` 捕获后降级为「不持久化但当前会话有效」。

## 验收自查

- [ ] 界面上找得到音效开关，文案/图标能看出当前状态，键盘可操作。
- [ ] 关闭声音后游戏功能完全不受影响（不依赖听觉判断）。
- [ ] 第一次交互前不会自动出声。
- [ ] 连续快速触发不会叠加成噪音。
- [ ] 结算/通关有明确的结束音，与普通操作音能区分开。
