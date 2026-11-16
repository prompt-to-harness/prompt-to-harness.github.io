# 翻牌开发：第一小节证据摘录

2026-11-06。取自只读快照 `minimax-games-20261106-v1`，供讲师展示与检查材料，不是逐字稿或新的课程设计入口。整体说明见[快照索引](README.md)，讲解安排见[3.1 本节内容](../../lessons/01-memory-game/STORYBOARD.md)，操作与口播见[逐字稿初稿](../../lessons/01-memory-game/speaker.html)。

所有来源路径相对快照的 `experiment/`。英文消息为原文，解释另列；代码是最终源码摘录，历史修改单独注明。没有复制本机身份、完整命令或完整日志。以下 E 编号是取材定位，不是页码。

## E01 原始请求

来源：`memory-prompt.txt`，全文。

```text
请从零开发一个可以在浏览器玩的记忆翻牌小游戏，支持翻牌、配对、完成和重新开始。使用普通对话开发方式，不加载任何游戏 Skill。
这是一个全新的独立项目。只使用本项目文件和通用工具、官方技术资料；不要搜索或读取其他项目、旧游戏、课程仓库或历史会话，也不要复用其他项目的代码。不要发布或提交代码。具体未说明的产品细节请自行作合理决定并在交付时说明。请自主完成开发，留下源码、启动说明，并如实报告实际做过的验证和未验证项。
```

取材注意：这是明确授权自主完成的请求；包含验证与未验证项的报告要求。没有中途追加需求或讲师批准方案的环节。实验隔离条款可在课上简述，不能把只展示第一句的节选说成全部输入。

## E02 从空目录开始实现

来源：`memory-events.jsonl` 第 8 行，`item_3`。

> Empty directory — clean slate. Let me check what tooling is available for verification.

来源：`memory-events.jsonl` 第 11 行，`item_5`。

> Chrome is available for real browser verification. Let me scaffold the project.

来源：`memory-events.jsonl` 第 14 行，`item_7`。

> Now the DOM-free game core (this is what I'll unit test):

来源补充：同日志第 13 行 `item_6` 记录新增 package.json、静态服务器、难度及图案配置；第 20 行 `item_11` 开始 HTML/CSS，第 27 行 `item_15` 开始页面控制器。原始记录没有先写技术选型比较报告；原生 HTML/CSS/ES Modules 是实际实现，可由源码与最终回复核对。

## E03 一次翻错怎样连接规则与画面

来源：`memory/src/game-core.js` 第 126–158 行（冻结后的源码）。

```js
    // 翻开第二张 —— 记一步
    this.moves += 1;
    const [a, b] = this.openIndices;
    const cardA = this.cards[a];
    const cardB = this.cards[b];

    if (cardA.pairId === cardB.pairId) {
      this.matchedPairIds.add(cardA.pairId);
      this.openIndices = [];
      const isWin = this.matchedPairIds.size === this.totalPairs;
      if (isWin) {
        this.status = STATUS.WON;
        this.endedAt = this.now();
      }
      return { type: FLIP.MATCH, indices: [a, b], card: cardA, isWin };
    }

    // 不匹配：锁定，等 UI 播完动画后再调用 dismissMismatch()
    this.locked = true;
    return { type: FLIP.MISMATCH, indices: [a, b], card: cardA };
  }

  /**
   * 不匹配的牌翻回背面，由 UI 在动画结束后调用。
   * @returns {number[]} 被翻回的牌下标
   */
  dismissMismatch() {
    const dismissed = this.openIndices.slice();
    this.openIndices = [];
    this.locked = false;
    return dismissed;
  }
}
```

来源：`memory/src/main.js` 第 213–230 行（冻结后的源码）。

```js
    case FLIP.MISMATCH: {
      result.indices.forEach((i) => {
        openCard(i);
        cardEls[i].classList.add('is-wrong');
        setCardState(i, 'open');
      });
      sfx.mismatch();
      updateStats();
      mismatchTimer = window.setTimeout(() => {
        mismatchTimer = null;
        const dismissed = game.dismissMismatch();
        dismissed.forEach((i) => {
          cardEls[i].classList.remove('is-open', 'is-wrong');
          setCardState(i, 'closed');
        });
      }, MISMATCH_DELAY_MS);
      break;
    }
```

解释：规则层返回 MISMATCH 并锁定；页面层展示牌面、刷新计数，等待后调用 dismissMismatch 解锁。这里展示的是修复后的源码；第 220 行 updateStats 是 E05 中补入的调用。

## E04 规则检查先完成

来源：`memory/test/game-core.test.js` 第 101–123 行（冻结后的源码）。

```js
test('翻开不配对的两张牌 -> MISMATCH 并锁定输入', () => {
  const game = new MemoryGame({ icons: ['a', 'b'] });
  const [i] = indicesOfPair(game, 0);
  const [j] = indicesOfPair(game, 1);
  game.flip(i);
  const r = game.flip(j);
  assert.equal(r.type, FLIP.MISMATCH);
  assert.equal(game.locked, true);
  assert.equal(game.moves, 1);
  assert.equal(game.openIndices.length, 2);
});

test('锁定期间再次翻牌被忽略（LOCKED）', () => {
  const game = new MemoryGame({ icons: ['a', 'b', 'c'] });
  const [i] = indicesOfPair(game, 0);
  const [j] = indicesOfPair(game, 1);
  const [k] = indicesOfPair(game, 2);
  game.flip(i);
  game.flip(j);
  const r = game.flip(k);
  assert.equal(r.type, FLIP.LOCKED);
  assert.equal(game.moves, 1, '被忽略的翻牌不应计数');
});
```

来源：`memory-events.jsonl` 第 50 行，`item_29`，工具输出节选，省略其余行。

```text
✔ 翻开不配对的两张牌 -> MISMATCH 并锁定输入 (0.089167ms)
✔ 锁定期间再次翻牌被忽略（LOCKED） (0.05925ms)
ℹ tests 23
ℹ pass 23
ℹ fail 0
```

来源：`memory-events.jsonl` 第 51 行，`item_30`。

> All 23 unit tests pass. Now let me verify in a real browser — starting the server and driving Chrome via the DevTools Protocol:

取材注意：耗时只是原始输出，不用于模型效率比较。第一次运行规则测试并未全部通过；此前还修过测试预期与图案数量限制。完整过程见日志第 32–50 行；主课可压缩，但不能讲成一次全绿。

## E05 浏览器检查发现步数显示遗漏

来源：`memory-events.jsonl` 第 79 行，`item_46`，工具输出节选，省略其余行。

```text
  ✔ 配对成功后步数为 1
  ✘ 不匹配同样计 1 步 -> 1
通过 52 项，失败 8 项
```

来源：`memory-events.jsonl` 第 80 行，`item_47`。

> Excellent — the browser test found a **real bug**: the moves counter doesn't refresh when a mismatch occurs. Let me fix that and the aria-label wording:

来源：同日志第 82 行 `item_48` 的修改命令。下列为根据 old/new 字符串整理的等价差异，省略命令包装，不是原始 git diff：

```diff
       sfx.mismatch();
+      updateStats();
       mismatchTimer = window.setTimeout(() => {
```

解释：前面成功配对已经记 1 步，随后翻错应显示 2，页面仍为 1。补充刷新后，继续修测试自身的统计口径和时间预期，才得到 61 项通过。八个失败断言不能称为八个产品 Bug。

同项复测结果：`memory-events.jsonl` 第 85 行，`item_50`，工具输出节选。

```text
  ✔ 不匹配同样计 1 步
```

该断言核对的是累计显示值为 `2`（一轮正确配对后，再翻错一次）。课堂只展示这项修正前后的结果；不把后续总通过数的变化都归因于这一行修改。

## E06 61 项通过后继续看截图

来源：`memory-events.jsonl` 第 85 行，`item_50`，工具输出节选，省略其余行。

```text
  ✔ 所有牌初始都是背面
通过 61 项，失败 0 项
```

来源：`memory-events.jsonl` 第 86 行，`item_51`。

> All 61 browser checks pass. Let me look at the actual rendering:

来源：`memory-events.jsonl` 第 89 行，`item_53`。

> Found a real visual bug — the cards show their **fronts** at rest instead of their backs. The 3D transforms are inverted. Also the 🃏 title glyph renders as a blank box. Fixing both:

来源：`memory/test/browser-smoke.mjs` 第 178–178 行（冻结后的源码）。

```js
      allBackVisible: [...document.querySelectorAll('.card')].every(c => !c.classList.contains('is-open')),
```

来源：`memory/test/browser-smoke.mjs` 第 189–189 行（冻结后的源码）。

```js
    check('所有牌初始都是背面', initial.allBackVisible === true);
```

解释：检查判断没有 is-open 类，未确认 CSS 实际朝向。第 91 行 `item_54` 将 rotateY(180deg) 从牌背移到牌面；第 96 行 `item_57` 又让 shake/pop 动画保留翻转角度。错误画面未独立保存，不能拿最终截图作修复前画面。

## E07 交付前验证启动方式

来源：`memory-events.jsonl` 第 113 行，`item_68`。

> Confirmed: `file://` is blocked by CORS (ES modules need an HTTP origin) — the README must say so. Let me review the final source:

来源补充：第 112 行 `item_67` 的浏览器错误确实包含 `has been blocked by CORS policy` 和 `Failed to load resource: net::ERR_FAILED`。此处不复制含本机绝对路径的完整错误。最终 `memory/package.json` 的 start 指向 `node server.js`，README 要求通过 HTTP 访问。

## E08 最终结果与交付边界

来源：`memory-events.jsonl` 第 129 行，`item_77`，工具输出节选，省略其余行。

```text
ℹ tests 23
ℹ pass 23
ℹ fail 0
  GET / -> 200
通过 69 项，失败 0 项
```

来源补充：`memory-final.txt` 与 `memory/README.md`。最终回复列出功能、自行决定的细节、启动方式和未验证项：只测 headless Chrome；未实际听辨音效；真实触摸、真人体验和屏幕阅读器朗读未验证；未提交或发布。

取材注意：最终回复使用“真实点击”一词，需对照源码限定含义。浏览器脚本通过 DOM click 和合成事件操作，并读取 pairIds 找到配对，不是仅凭画面信息自然试玩。最终校验日志实际直接运行 `node test/browser-smoke.mjs`；随后第 131 行 `item_78` 将相同入口登记为 npm run test:e2e 并重跑规则测试，不把输出标题当成命令调用证据。

现存配套截图：`memory/docs/screenshot-initial.png`、`screenshot-win.png`、`screenshot-mobile.png`。已查看前两张：初始状态图含历史最佳成绩，通关图是自动化检查产生的结算画面，不能标为首次启动或真人通关成绩。它们均用于展示最终版本，不用于还原中间版本。

本节使用的两张原图已复制到公开材料目录，未改图：[最终初始状态](../../lessons/01-memory-game/evidence/minimax-20261106/screenshot-initial.png)、[自动化检查结算](../../lessons/01-memory-game/evidence/minimax-20261106/screenshot-win.png)。图片不含个人资料；与冻结快照原文件逐字节相同。

浏览器操作条件的源码依据：`memory/test/browser-smoke.mjs` 第 195–206 行，连续节选。

```js
    const pair = await cdp.eval(`(() => {
      const ids = window.memoryGame.state.pairIds;
      for (let i = 0; i < ids.length; i++) {
        for (let j = i + 1; j < ids.length; j++) {
          if (ids[i] === ids[j]) return [i, j];
        }
      }
      return null;
    })()`);
    check('能从前端状态里找到一对同图案的牌', Array.isArray(pair), String(pair));

    await cdp.eval(`document.querySelectorAll('.card')[${pair[0]}].click()`);
```

## E09 模型自行决定的产品细节

来源：`memory-final.txt` 的“自行决定的产品细节”段；同文见 `memory-events.jsonl` 第 134 行 `item_80`。以下原文完整摘录该段。

> **自行决定的产品细节**：难度命名与牌阵（3×4 / 4×4 / 4×6）、"步数"= 翻开两张记一步、计时从第一次翻牌开始、最佳成绩按"步数优先、时间次之"比较、卡片图案用系统 emoji。

使用时与 E01 原始请求对照：这些具体选择没有被逐项规定，但本轮明确授权模型决定未说明的细节。原文证明模型在交付时作出这项说明；行为核对须结合成品与实现。它不是讲师开工前批准的规格，也不因未写在第一句请求中就直接构成越界。

## E10 交付说明原文节选

来源：`memory-final.txt` 的启动、实现与未验证项。以下仅选课堂使用的原文，省略本机目录、其余文件、功能清单和检查总结；实际运行结果以 E08 工具输出为准。

启动命令原文：

```bash
npm start          # → http://127.0.0.1:8000/
```

> 零依赖、零构建：原生 HTML/CSS/ES Modules，`server.js` 是用 Node 标准库写的静态服务器。**不能直接双击 `index.html`** —— 实测 ES Modules 在 `file://` 下被 CORS 拦截，必须走 http。

文件表中的两行：

| 文件 | 作用 |
| --- | --- |
| `src/game-core.js` | 纯状态机，不碰 DOM：`flip()` 返回 `first/match/mismatch/locked/…` |
| `src/main.js` | UI 控制器：渲染、CSS class、动画编排 |

未验证项节选：

> - 仅在 **headless Chrome** 上验证；Safari / Firefox 未测（用到的 `backface-visibility`、`:has` 之外的特性兼容性尚可，但 emoji 外观依赖系统字体，跨平台观感未确认）
> - 音效**未实际听辨**——headless 无音频输出，只验证了调用不抛异常
> - 真实触摸手势、真人试玩体验、屏幕阅读器朗读效果未验证
> - 未做任何提交或发布（该目录不是 git 仓库）

讲述边界：以上是模型交付说明原文。“零依赖”指本项目运行代码未引入第三方包，仍需 Node 和浏览器；兼容性评价是模型表述，未做跨浏览器验证，课上只讲实际未测范围。

## E11 通关与重开的正向对照（2026-11-08 补核）

E03 中的 matchedPairIds 每次加入配对编号，size 与 totalPairs 比较；两边均为对数。这段实现已出现在原日志第 16 行（汇总事件 14），不是后期为比较早期 05 补写的代码。

原日志第 31 行（汇总事件 29）写入通关测试：以四种图案配完四对，再检查 matchedPairs 为 4、moves 为 4、状态为 WON，以及通关后忽略点击。原日志第 50 行（汇总事件 48）显示通关和 reset 检查通过；第 85 行（汇总事件 83）浏览器输出还包含十六张牌全部匹配、进度 8/8、通关浮层出现，以及重开后配对、步数、计时归零。

结论分两层：源码说明为什么不会把张数当成对数；实际检查结果说明这次覆盖了通关与重开。不能把该对照讲成所有其他版本都做了同样测试，也不能倒推早期 05 的完整检查历史。

2026-11-09 补核测试内容：汇总事件 29 中“翻开配对的两张牌”检查配成一对后 `r.isWin` 为 false、matchedPairs 为 1；“全部配对完成”测试配完四对，检查完成状态、matchedPairs 为 4 与停止接受翻牌；reset 测试检查进度归零。主讲入口现从该事件接事件 83 的浏览器结果，区分测试代码与实际执行结果。

## E12 实现前的产品规划（2026-11-08 原始会话补核）

原有 `memory-events.jsonl` 是 CLI 事件导出，没有包含这部分设计记录。本轮依据同一 thread 的原始会话补档：`rollout-2026-11-06T17-03-18-01a1b019-1faa-7de1-972b-dbc888fb184b.jsonl` 第 23、34 行。以下是课程整理的高层设计决策摘要，不是原文或完整思考过程；只整理明确作出的产品选择。

| 规划环节 | 实现前已经明确的选择 |
| --- | --- |
| 开局选择 | 简单 3×4、普通 4×4、困难 4×6；提供难度切换 |
| 局内与成绩 | 显示步数、用时、配对进度；按难度分别保存最佳成绩 |
| 通关之后 | 结算展示成绩，提供再玩一局和更换难度的入口 |

第 23 行已提出多档难度、分档成绩和通关后继续玩的流程；第 34 行、创建实现文件之前，牌阵明确为上表的 12、16、24 张。E09 的交付说明与冻结源码 `memory/src/difficulty.js` 第 2–6 行可核对最终落地。第 23 行的困难牌阵曾拟为 20 张，不把草案写成从头至尾未变的规格。

对照早期 05 的汇总事件 2–3：计划推荐固定六对、单一难度，沿用主页配色，先完成核心循环、计时计步和重开；明确暂不保存最佳成绩，理由是当前重点为接入主页，持久化还要处理存储不可用的情况。随后用户确认采用推荐方案。这是范围选择；不能把较小范围本身说成设计错误。紫色版是空目录里的独立游戏，两例的任务条件不同。

课程据此解释：三档难度与成绩、重玩组成一套提前规划的使用流程。可以比较两份记录实际选择的范围，不能据此比较模型“思考更深”，或证明随机性是全部差异的原因。原请求中的自主决定授权仍见 E01。

补档 SHA-256：`4989a29d2b6c37f2178915356ee01a8b2337f8436a8311362d2f392c454b797a`。原始会话、只读副本与本机定位留在被忽略的材料目录，不公开完整日志；原冻结快照保持不变。

## E13 实现前的视觉方向（2026-11-08 原始会话补核）

来源同 E12 原始会话，第 34、65 行。以下为课程整理的高层设计决策摘要，不是原文或完整思考过程。

| 设计对象 | 写界面前已经明确的选择 |
| --- | --- |
| 整体观感 | 深色渐变背景、玻璃质感的半透明面板、渐变牌背 |
| 信息组织 | 标题与成绩、难度选择、牌阵、重开和通关浮层各有位置 |
| 操作反馈 | 翻牌动画；配对成功与不匹配时分别提供反馈 |

第 34 行在实现前列出整体视觉方向、界面组成与反馈；第 65 行在写 HTML/CSS 前再次明确深色渐变、玻璃面板和彩色牌背。课程解释为“先形成整体方案，再实现各个部分”。这是对记录中设计选择的归纳，不声称原记录逐字写出了课程的美学评价，也不把最终紫色、斜纹和星形细节都归为事先指定。

实现备查：CLI 原日志第 21 行（汇总事件 19）的首次 HTML 分开操作与成绩；第 23 行（汇总事件 21）的 CSS 已有整体配色与牌背样式。主讲改看设计摘要；实现记录继续保留入口。看图后的修正链路见 E06：自动检查通过后仍检查实际渲染，发现正反面问题并修正。最终图只展示修复后状态，不能冒充历史错误画面。

## E14 两种验证缺口的区分（2026-11-09）

讲师提出应区分“没有加入必要测试”和“已有测试沿用了错误理解”。早期 05 的现存依据为公开归档 `courseware/ch03/runs/data.js` 中 r1007-5（对应汇总事件 1–19）：

- 请求和计划把浏览器试玩交给人；计划中的验证为 `npm run build`（含 `tsc -b`）通过、产物不含环境检查页。
- 执行摘要记录构建、产物范围、主页与 CSS 查看；交付报告相同范围。归档 diff 仅有 App.tsx、MemoryGame.tsx、index.css 三个实现文件，没有新增或修改测试文件。
- 以上没有提供通关规则测试的代码或运行结果，因此主讲落在“按分工补齐玩法验收”。它不能证明从未运行临时测试，也不能支持“测试把三对误当成通关预期”。完整事件文件原在另一台机器的被忽略运行目录，本机无该目录，也未找到该日的原始会话；不把摘要当完整日志。

紫色版 E06 则确实有“检查通过仍漏错”的证据：61 项通过后，截图发现初始牌面反了；对应检查只看没有 is-open 标记，没有检查 CSS 的实际朝向。这说明检查依据未覆盖真实显示，不证明模型把玩法理解成开局可以露出图案。

两条讲法分别为：缺少通关验证依据 → 把玩法验收加入交付流程，明确执行者；已有检查仍漏错 → 回到玩法要求与玩家可见结果，核对检查覆盖什么。课程举出的“三对不能通关、六对才通关”是依据早期 05 的六对玩法提出的验收预期，不冒充历史运行过的测试。相对独立的检查应从要求推出预期，不能仅重复实现里的计算或把换一个角色视为保证。

## E15 课堂聚焦节选：通关、重开与朝向修正（2026-11-09）

本节供 3.1 的 HTML 直接定位。只摘与当前判断有关的代码和输出，不是完整日志或可独立运行的测试。原始记录入口保留在讲师页备查。

早期 05：来源为公开归档 `courseware/ch03/runs/data.js` 的 r1007-5 diff（汇总事件 19 下方归档 diff）。`PAIR_COUNT` 为 6；以下两行连续原代码，省略 diff 的新增行前缀：

```js
const matchedCount = deck.reduce((total, card) => total + (card.matched ? 1 : 0), 0)
const isWon = matchedCount === PAIR_COUNT
```

紫色版规则测试：`memory-events.jsonl` 第 31 行（汇总事件 29），三项测试的断言节选。先配成一对时：

```js
assert.equal(r.isWin, false);
assert.equal(game.matchedPairs, 1);
```

将测试构造的四对牌全部配好时（不是浏览器普通难度的八对）：

```js
assert.equal(lastResult.isWin, true);
assert.equal(game.status, STATUS.WON);
assert.equal(game.matchedPairs, 4);
```

调用 `game.reset()` 后：

```js
assert.equal(game.moves, 0);
assert.equal(game.matchedPairs, 0);
assert.equal(game.startedAt, null);
```

浏览器输出：同日志第 85 行（汇总事件 83），原顺序节选；省略其他项。

```text
  ✔ 普通难度渲染 16 张牌
  ✔ 全部配对后浮层弹出
  ✔ 浮层标题是通关文案
  ✔ 16 张牌全部标记为已配对
  ✔ 配对计数显示 8/8
  ✔ 再玩一局后没有已配对的牌
  ✔ 再玩一局后步数归零
  ✔ 再玩一局后配对归零
  ✔ 再玩一局后计时归零
```

朝向修正：同日志第 91 行（汇总事件 88），将旋转从牌背移到牌面。下面是据修改命令 old/new 内容整理的局部差异；省略背景样式，不是原始 git diff。

```diff
 .card__back {
-  transform: rotateY(180deg);
 .card__front {
+  transform: rotateY(180deg);
```

动画修正：同日志第 96 行（汇总事件 93），shake 和 pop 的每个关键帧均补回旋转；下面各选一个关键帧，省略其余。

```diff
-  20% { transform: translateX(-7px); }
+  20% { transform: rotateY(180deg) translateX(-7px); }
-  45% { transform: scale(1.13); }
+  45% { transform: rotateY(180deg) scale(1.13); }
```

同日志第 97 行（汇总事件 94）实际输出节选：

```text
styles.css keyframes patched
smoke test: mid-game screenshot added
通过 61 项，失败 0 项
```

后续中途与通关画面检查见汇总事件 95–101。该轮中间截图没有作为公开图片保存；HTML 展示的是修正记录和检查输出，不冒充完整视觉复验或当前重跑。旧牌面错误的发现及检查依据沿用 E06；最终成品仅用于展示修复后效果。
