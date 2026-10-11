// 由 courseware/ch03/materials/runs/build-gallery.py 生成，不要手改
window.RUN_GALLERY = {
 "batch": {
  "id": "2026-10-07",
  "title": "3.1 一句话需求，5 次独立运行",
  "date": "2026-10-07",
  "fixed": [
   [
    "起点",
    "第 2 章冻结候选（首页 v1），每轮复制一份新的"
   ],
   [
    "需求句",
    "materials/mainline/fixtures/prompt-3.1.txt"
   ],
   [
    "人的确认",
    "“问题都按你推荐的做法处理”（代答）"
   ],
   [
    "工具与模型",
    "Codex CLI 0.160.1 · MiniMax-M3.1-Flash-Preview · tools/clean-codex.sh"
   ],
   [
    "运行方式",
    "串行，每轮全新 Codex home，可写权限"
   ]
  ],
  "machine": "讲师第二台机器，Node 25.9.0（10-06 那组为 Node 24.15.0）",
  "source": "courseware/ch03/materials/mainline/README.md#新机器重跑2026-10-07"
 },
 "properties": [
  {
   "key": "pairs",
   "label": "牌组"
  },
  {
   "key": "moves",
   "label": "怎么计步"
  },
  {
   "key": "timer",
   "label": "计时"
  },
  {
   "key": "restart",
   "label": "重开入口"
  },
  {
   "key": "lock_plan",
   "label": "计划里写了等待期锁吗"
  },
  {
   "key": "lock_code",
   "label": "代码里等待期的点击"
  },
  {
   "key": "asked",
   "label": "问了人什么"
  },
  {
   "key": "checkpoints",
   "label": "计划引用 CHECKPOINTS.md"
  }
 ],
 "patterns": [
  {
   "tag": "ai-rule",
   "title": "规则是 AI 定的，没有一次问过人",
   "body": "4 份有效实现都在等待期忽略点击，没有一轮把它当作问题；2 轮的计划里连写都没写。牌数、计步、计时、重开入口也各不相同，同样没人问。",
   "count": "4 / 4"
  },
  {
   "tag": "defect",
   "title": "能玩，但和页面上写的规则对不上",
   "body": "第 3 轮说明与牌组矛盾，第 5 轮通关判定按牌数算。都要完整打完一局、对照页面文字才看得到。",
   "count": "2 / 4"
  },
  {
   "tag": "leak",
   "title": "Codex 会读仓库里的提示文件",
   "body": "3 轮计划引用了 CHECKPOINTS.md 里“加入本章小游戏后的快照”一句，用来论证任务合理。参考起点里的每一句话都可能被当成需求。",
   "count": "3 / 4"
  }
 ],
 "runs": [
  {
   "id": "r1007-1",
   "label": "第 1 轮",
   "status": "ok",
   "props": {
    "pairs": {
     "v": "4 对 · emoji + 短词"
    },
    "moves": {
     "v": "翻两张算一步"
    },
    "timer": {
     "v": "有"
    },
    "restart": {
     "v": "常驻“重新开始”"
    },
    "lock_plan": {
     "v": "没写",
     "tag": "ai-rule"
    },
    "lock_code": {
     "v": "忽略",
     "tag": "ai-rule"
    },
    "asked": {
     "v": "入口、卡面、功能档位"
    },
    "checkpoints": {
     "v": "是",
     "tag": "leak"
    }
   },
   "findings": [
    {
     "tag": "ai-rule",
     "title": "等待翻回时点第三张：直接忽略",
     "detail": "计划一个字没提，代码里照样加了锁。",
     "where": "src/MemoryGame.tsx:103",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 103,
       "start": 99,
       "code": [
        "    return () => window.clearInterval(timer)",
        "  }, [startedAt, isComplete])",
        "",
        "  function handleFlip(key: string) {",
        "    if (isComplete || openKeys.length >= 2) {",
        "      return",
        "    }",
        "    if (openKeys.includes(key) || matchedKeys.includes(key)) {",
        "      return"
       ]
      }
     ]
    },
    {
     "tag": "ai-rule",
     "title": "配对成功也要等 420ms，期间点击无效",
     "detail": "配对不是立刻落定；这段时间的点击同样被忽略。",
     "where": "src/MemoryGame.tsx:87",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 87,
       "start": 83,
       "code": [
        "          setMatchedKeys((previous) => [...previous, first.key, second.key])",
        "        }",
        "        setOpenKeys([])",
        "      },",
        "      isMatch ? 420 : 760,",
        "    )",
        "    return () => window.clearTimeout(timer)",
        "  }, [openKeys, cardByKey])",
        ""
       ]
      }
     ]
    }
   ],
   "seconds": {
    "plan": 125,
    "exec": 633
   },
   "diffstat": "src/App.tsx        |   4 ++\n src/MemoryGame.tsx | 207 +++++++++++++++++++++++++++++++++++++++++++++++++++++\n src/index.css      | 192 ++++++++++++++++++++++++++++++++++++++++++++++++-\n 3 files changed, 401 insertions(+), 2 deletions(-)",
   "plan": "看完了，基线 `npm run build` 通过，工作树干净。下面是我的计划。\n\n## 现状\n\n- Vite 7 + React 19 + TS `strict`（含 `noUnusedLocals`），单文件应用：`src/App.tsx`（首屏 + 项目区），样式集中在 `src/index.css`，全是手写 CSS 和硬编码色值。\n- 现有视觉语言我会直接复用：暖白底 `#f7f4ee`、主色墨绿 `#17664e`、卡片 `#fffdf8` + 16px 圆角 + 1px 边框、容器 `min(100%, 860px)`、600px 断点，且已经有 `prefers-reduced-motion` 处理。\n- 顺带一提：`PROJECT_BRIEF.md` 里\"不做小游戏\"是第一章的范围限制，而 `CHECKPOINTS.md` 的 `ch03-complete` 正好就是\"加入本章小游戏后的快照\"，所以这次加游戏跟仓库记录是自洽的。\n\n## 实现计划\n\n1. **新增 `src/MemoryGame.tsx`** — 独立翻牌组件：洗牌、翻两张比对、配对消除、步数 / 用时 / 重新开始 / 通关提示。用 `useState` + `useEffect`（计时器），**不引入任何新依赖**（现有只有 react / react-dom）。翻牌动效用 CSS `transform: rotateY` + `backface-visibility`，不引动画库。\n2. **`src/App.tsx`** — 新增一个 `<section id=\"memory-game\">`，位置按下面 Q1 的决定；首屏和项目区现有文字、按钮、项目卡**保持不动**。\n3. **`src/index.css`** — 用现有色板和圆角新增游戏样式：宽屏 4 列 → 窄屏 2 列，窄屏缩小卡面；`prefers-reduced-motion: reduce` 时关闭翻转动画。\n4. **无障碍** — 每张牌是真正的 `<button>`，正反面都有 `aria-label`，键盘可玩，配对 / 通关结果用 `aria-live` 播报。\n5. **不越界** — 不改 `index.html`、不动 `setup-check/`、不装依赖、不提交 git（除非你要求）。\n\n完成标准：`npm run build` 通过，我再给你列出三种宽度下你要具体看哪几点；浏览器里的试玩和宽度检查由你来做。\n\n## 三个需要你定的问题\n\n**Q1｜游戏放在哪、首页怎么进？**\n- **A（推荐）**：项目区下方新增独立区块「记忆翻牌」，首屏「查看项目」按钮原样不动。\n- B：放在首屏和项目区之间。\n- C：项目区下方 + 首屏加一个次要入口「玩个翻牌」。\n\n**Q2｜卡面上画什么？**\n- **A（推荐）**：4 组同字配对，每组一个 emoji + 一个中性短词。不编造你的履历，视觉最干净，小屏也放得下。\n- B：复用主页已有的 3 个项目名，配成 3 对（6 张卡）。和页面内容呼应，但牌数少一点。\n- C：术语 ↔ 释义配对（如「端侧推理」↔ 它的说明）。更有信息量，卡片文字更多，窄屏更挤。\n\n**Q3���功能做到哪一档？**\n- **A（推荐）**：4 对牌 + 步数 + 计时 + 重新开始 + 通关提示，不写 `localStorage`（不碰你的本地数据，也最好验证）。\n- B：精简版，去掉计时，只要步数 + 重新开始。\n- C：A 的基础上用 `localStorage` 存最佳步数和最佳用时，刷新后保留。\n\n回复类似「1A 2A 3A」就行，确认后我开始改。",
   "answer": "改完了，`npm run build` 通过（`tsc -b` + `vite build`，无类型错误）。\n\n## 改了什么\n\n| 文件 | 改动 |\n|---|---|\n| `src/MemoryGame.tsx` | **新增**，整个游戏的独立组件（含区块标题、状态栏、牌盘、通关提示） |\n| `src/App.tsx` | +4 行：import + 在项目区之后挂 `<MemoryGame />`。首屏、项目区文字按钮一律没动 |\n| `src/index.css` | 新增游戏样式；只把两处选择器列表从 `.projects` 扩成 `.projects, .memory-game`，原有规则一行未改 |\n\n零新依赖，没碰 `index.html` 和 `setup-check/`，**没有 git 提交**。\n\n实现要点：Fisher-Yates 洗牌，4 对牌 =8 张（🧭方向 / 🚀启程 / 💡灵感 / 🌱生长），CSS `rotateY` + `backface-visibility` 做翻转，配对 420ms 停留 / 未配对 760ms 翻回。步数在翻开第二张时 +1，计时器从第一次翻牌开始跑、通关自动停。牌是真 `<button>`，可 Tab 可回车，右上焦点环；配对数和通关结果用 `aria-live` 播报；`prefers-reduced-motion` 下关闭翻转动画。没写 `localStorage`。\n\n## 你来检查的三种宽度\n\n**宽屏（约 1280px）** — 牌盘 4 列 × 2 行，卡片约 204×273px。注意游戏区跟项目区之间的分隔线和左边距是否跟上面两块齐平。\n\n**中屏（约 768px）** — 仍是 4 列，卡片约 171×228px。重点看 emoji +文字在卡面里会不会挤、会不会换行。\n\n**窄屏（约 375px）** — 自动变 2 列 × 4 行，卡片约 162×216px。重点看状态栏里「步数 / 用时 / 重新开始」会不会折行错位，以及卡面 28px emoji 是否还居中好看。\n\n## 玩法上顺手确认两件事\n\n1. 快速连点第三张牌时应该点不动（有两张翻开时输入被锁住），只算一步。\n2. 点「重新开始」后步数、计时归零、牌重新洗过，已配对的牌不再是高亮状态。\n\n要不要我把这个改动整理成 `docs/evidence/` 下的证据文档，或者建本地提交和标签？",
   "timeline": [
    {
     "k": "msg",
     "t": "计划确认。开始按 Q1/Q2/Q3 的推荐实现。"
    },
    {
     "k": "cmd",
     "t": "cat > src/MemoryGame.tsx <<'EOF'  … 另 209 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "组件写好了，现在接到首页并补样式。"
    },
    {
     "k": "cmd",
     "t": "cat > src/App.tsx <<'EOF'  … 另 48 行",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "apply_patch <<'PATCH'  … 另 22 行",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "cat >> src/index.css <<'EOF'  … 另 179 行",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "apply_patch <<'PATCH'  … 另 24 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "样式追加位置有顺序问题——游戏规则跑到了媒体查询后面，移动端两列会被后面的四列覆盖。我重排一下。"
    },
    {
     "k": "cmd",
     "t": "grep -n \\\"visually-hidden\\\\|\"'^@media'\"\\\\|\"'^.memory-game__board'\"\\\\|\"'^.project-card__description'\"\\\\|\"'^}\" src/index.css | tail -30 && echo \"=== total ===\" &&",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "cd src && awk 'NR>=1 && NR<=121' index.css > /tmp/css_head.txt && awk 'NR>=142 && NR<=311' index.css > /tmp/css_game.txt && awk 'NR>=123 && NR<=140' index.css >",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "sed -n '115,128p;286,314p' index.css",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "cd src && sed -i '' -e '310i\\\\  … 另 3 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "顺序修好了。现在跑 build验证。"
    },
    {
     "k": "cmd",
     "t": "npm run build 2>&1 | tail -20",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Build 通过。最后审一遍完整 diff。"
    },
    {
     "k": "cmd",
     "t": "git status --short && echo \"=== diff (existing files) ===\" && git diff",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "改完了，`npm run build` 通过（`tsc -b` + `vite build`，无类型错误）。  ## 改了什么  | 文件 | 改动 | |---|---| | `src/MemoryGame.tsx` | **新增**，整个游戏的独立组件（含区块标题、状态栏、牌盘、通关提示） | | `src/App…"
    }
   ],
   "diff": "diff --git a/src/App.tsx b/src/App.tsx\nindex bd92a25..a707f15 100644\n--- a/src/App.tsx\n+++ b/src/App.tsx\n@@ -1,3 +1,5 @@\n+import MemoryGame from './MemoryGame'\n+\n const projects = [\n   {\n     name: '红绿灯感知量产',\n@@ -37,6 +39,8 @@ export default function App() {\n           ))}\n         </ul>\n       </section>\n+\n+      <MemoryGame />\n     </>\n   )\n }\ndiff --git a/src/MemoryGame.tsx b/src/MemoryGame.tsx\nnew file mode 100644\nindex 0000000..3e2c0df\n--- /dev/null\n+++ b/src/MemoryGame.tsx\n@@ -0,0 +1,207 @@\n+import { useEffect, useMemo, useState } from 'react'\n+\n+type Pair = {\n+  id: string\n+  emoji: string\n+  label: string\n+}\n+\n+type Card = {\n+  key: string\n+  pairId: string\n+  emoji: string\n+  label: string\n+}\n+\n+const PAIRS: Pair[] = [\n+  { id: 'compass', emoji: '🧭', label: '方向' },\n+  { id: 'rocket', emoji: '🚀', label: '启程' },\n+  { id: 'bulb', emoji: '💡', label: '灵感' },\n+  { id: 'sprout', emoji: '🌱', label: '生长' },\n+]\n+\n+function shuffle<T>(items: T[]): T[] {\n+  const result = [...items]\n+  for (let i = result.length - 1; i > 0; i -= 1) {\n+    const j = Math.floor(Math.random() * (i + 1))\n+    const picked = result[i]\n+    result[i] = result[j]\n+    result[j] = picked\n+  }\n+  return result\n+}\n+\n+function createDeck(): Card[] {\n+  return shuffle(\n+    PAIRS.flatMap((pair) =>\n+      [0, 1].map((copy) => ({\n+        key: `${pair.id}-${copy}`,\n+        pairId: pair.id,\n+        emoji: pair.emoji,\n+        label: pair.label,\n+      })),\n+    ),\n+  )\n+}\n+\n+function formatElapsed(ms: number): string {\n+  const totalSeconds = Math.floor(ms / 1000)\n+  const minutes = Math.floor(totalSeconds / 60)\n+  const seconds = totalSeconds % 60\n+  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`\n+}\n+\n+export default function MemoryGame() {\n+  const [deck, setDeck] = useState<Card[]>(createDeck)\n+  const [openKeys, setOpenKeys] = useState<string[]>([])\n+  const [matchedKeys, setMatchedKeys] = useState<string[]>([])\n+  const [moves, setMoves] = useState(0)\n+  const [startedAt, setStartedAt] = useState<number | null>(null)\n+  const [elapsed, setElapsed] = useState(0)\n+\n+  const cardByKey = useMemo(\n+    () => new Map(deck.map((card) => [card.key, card])),\n+    [deck],\n+  )\n+\n+  const matchedPairs = matchedKeys.length / 2\n+  const isComplete = deck.length > 0 && matchedKeys.length === deck.length\n+\n+  useEffect(() => {\n+    if (openKeys.length < 2) {\n+      return\n+    }\n+    const first = cardByKey.get(openKeys[0])\n+    const second = cardByKey.get(openKeys[1])\n+    if (!first || !second) {\n+      return\n+    }\n+    const isMatch = first.pairId === second.pairId\n+    const timer = window.setTimeout(\n+      () => {\n+        if (isMatch) {\n+          setMatchedKeys((previous) => [...previous, first.key, second.key])\n+        }\n+        setOpenKeys([])\n+      },\n+      isMatch ? 420 : 760,\n+    )\n+    return () => window.clearTimeout(timer)\n+  }, [openKeys, cardByKey])\n+\n+  useEffect(() => {\n+    if (startedAt === null || isComplete) {\n+      return\n+    }\n+    const timer = window.setInterval(() => {\n+      setElapsed(Date.now() - startedAt)\n+    }, 200)\n+    return () => window.clearInterval(timer)\n+  }, [startedAt, isComplete])\n+\n+  function handleFlip(key: string) {\n+    if (isComplete || openKeys.length >= 2) {\n+      return\n+    }\n+    if (openKeys.includes(key) || matchedKeys.includes(key)) {\n+      return\n+    }\n+    if (startedAt === null) {\n+      setStartedAt(Date.now())\n+    }\n+    const nextOpenKeys = [...openKeys, key]\n+    setOpenKeys(nextOpenKeys)\n+    if (nextOpenKeys.length === 2) {\n+      setMoves((count) => count + 1)\n+    }\n+  }\n+\n+  function restart() {\n+    setDeck(createDeck())\n+    setOpenKeys([])\n+    setMatchedKeys([])\n+    setMoves(0)\n+    setStartedAt(null)\n+    setElapsed(0)\n+  }\n+\n+  const openKeySet = new Set(openKeys)\n+  const matchedKeySet = new Set(matchedKeys)\n+\n+  const liveMessage = isComplete\n+    ? `全部配对完成，共 ${moves} 步，用时 ${formatElapsed(elapsed)}。`\n+    : matchedPairs > 0\n+      ? `已配对 ${matchedPairs} / ${PAIRS.length} 组。`\n+      : ''\n+\n+  return (\n+    <section className=\"memory-game\" id=\"memory-game\" aria-labelledby=\"memory-game-title\">\n+      <h2 className=\"memory-game__title\" id=\"memory-game-title\">\n+        记忆翻牌\n+      </h2>\n+      <p className=\"memory-game__hint\">翻开两张一样的牌就能配对，用最少的步数通关。</p>\n+\n+      <div className=\"memory-game__status\">\n+        <p className=\"memory-game__metrics\">\n+          <span className=\"memory-game__metric\">\n+            步数 <strong>{moves}</strong>\n+          </span>\n+          <span className=\"memory-game__metric\">\n+            用时 <strong>{formatElapsed(elapsed)}</strong>\n+          </span>\n+        </p>\n+        <button type=\"button\" className=\"memory-game__restart\" onClick={restart}>\n+          重新开始\n+        </button>\n+      </div>\n+\n+      {isComplete && (\n+        <p className=\"memory-game__result\">\n+          全部配对完成！用了 {moves} 步，用时 {formatElapsed(elapsed)}，可以点「重新开始」再玩一次。\n+        </p>\n+      )}\n+\n+      <ul className=\"memory-game__board\">\n+        {deck.map((card) => {\n+          const isOpen = openKeySet.has(card.key)\n+          const isMatched = matchedKeySet.has(card.key)\n+          const cardClassName = [\n+            'memory-card',\n+            isOpen || isMatched ? 'memory-card--flipped' : '',\n+            isMatched ? 'memory-card--matched' : '',\n+          ]\n+            .filter(Boolean)\n+            .join(' ')\n+          const accessibleLabel = isMatched\n+            ? `${card.label}，已配对`\n+            : isOpen\n+              ? `${card.emoji} ${card.label}`\n+              : '未翻开的卡片'\n+\n+          return (\n+            <li className=\"memory-game__slot\" key={card.key}>\n+              <button\n+                type=\"button\"\n+                className={cardClassName}\n+                onClick={() => handleFlip(card.key)}\n+                aria-label={accessibleLabel}\n+              >\n+                <span className=\"memory-card__inner\" aria-hidden=\"true\">\n+                  <span className=\"memory-card__face memory-card__face--back\">?</span>\n+                  <span className=\"memory-card__face memory-card__face--front\">\n+                    <span className=\"memory-card__emoji\">{card.emoji}</span>\n+                    <span className=\"memory-card__label\">{card.label}</span>\n+                  </span>\n+                </span>\n+              </button>\n+            </li>\n+          )\n+        })}\n+      </ul>\n+\n+      <p className=\"visually-hidden\" aria-live=\"polite\">\n+        {liveMessage}\n+      </p>\n+    </section>\n+  )\n+}\ndiff --git a/src/index.css b/src/index.css\nindex 5e0d9e2..eef72f0 100644\n--- a/src/index.css\n+++ b/src/index.css\n@@ -34,7 +34,8 @@ body {\n }\n \n .hero,\n-.projects {\n+.projects,\n+.memory-game {\n   width: min(100%, 860px);\n   margin-inline: auto;\n }\n@@ -80,7 +81,8 @@ body {\n   outline-offset: 3px;\n }\n \n-.projects {\n+.projects,\n+.memory-game {\n   padding-top: 40px;\n   border-top: 1px solid #d5dcd3;\n   scroll-margin-top: 32px;\n@@ -118,6 +120,177 @@ body {\n   line-height: 1.8;\n }\n \n+.visually-hidden {\n+  position: absolute;\n+  width: 1px;\n+  height: 1px;\n+  margin: -1px;\n+  padding: 0;\n+  overflow: hidden;\n+  clip-path: inset(50%);\n+  white-space: nowrap;\n+  border: 0;\n+}\n+\n+.memory-game__title {\n+  margin: 0 0 12px;\n+  font-size: 18px;\n+}\n+\n+.memory-game__hint {\n+  margin: 0 0 24px;\n+  color: #626c65;\n+  font-size: 16px;\n+  line-height: 1.8;\n+}\n+\n+.memory-game__status {\n+  display: flex;\n+  flex-wrap: wrap;\n+  align-items: center;\n+  justify-content: space-between;\n+  gap: 16px;\n+  margin-bottom: 20px;\n+}\n+\n+.memory-game__metrics {\n+  display: flex;\n+  gap: 24px;\n+  margin: 0;\n+  color: #626c65;\n+  font-size: 16px;\n+}\n+\n+.memory-game__metric strong {\n+  color: #222d29;\n+  font-size: 18px;\n+  font-variant-numeric: tabular-nums;\n+}\n+\n+.memory-game__restart {\n+  padding: 10px 20px;\n+  border: 1px solid #17664e;\n+  border-radius: 999px;\n+  background: transparent;\n+  color: #17664e;\n+  font: inherit;\n+  font-size: 15px;\n+  cursor: pointer;\n+  transition: background-color 0.2s ease, color 0.2s ease;\n+}\n+\n+.memory-game__restart:hover,\n+.memory-game__restart:focus-visible {\n+  background: #17664e;\n+  color: #fffdf8;\n+}\n+\n+.memory-game__restart:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 3px;\n+}\n+\n+.memory-game__result {\n+  margin: 0 0 20px;\n+  padding: 16px 20px;\n+  border: 1px solid #17664e;\n+  border-radius: 12px;\n+  background: #fffdf8;\n+  color: #17664e;\n+  font-size: 16px;\n+  line-height: 1.8;\n+}\n+\n+.memory-game__board {\n+  display: grid;\n+  grid-template-columns: repeat(4, minmax(0, 1fr));\n+  gap: 14px;\n+  margin: 0;\n+  padding: 0;\n+  list-style: none;\n+}\n+\n+.memory-game__slot {\n+  margin: 0;\n+}\n+\n+.memory-card {\n+  display: block;\n+  width: 100%;\n+  aspect-ratio: 3 / 4;\n+  padding: 0;\n+  border: 0;\n+  border-radius: 16px;\n+  background: transparent;\n+  color: inherit;\n+  font: inherit;\n+  cursor: pointer;\n+  perspective: 900px;\n+}\n+\n+.memory-card:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 4px;\n+}\n+\n+.memory-card__inner {\n+  position: relative;\n+  display: block;\n+  width: 100%;\n+  height: 100%;\n+  transform-style: preserve-3d;\n+  transition: transform 0.42s ease;\n+}\n+\n+.memory-card--flipped .memory-card__inner {\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card__face {\n+  position: absolute;\n+  inset: 0;\n+  display: grid;\n+  place-content: center;\n+  gap: 6px;\n+  border: 1px solid #d5dcd3;\n+  border-radius: 16px;\n+  backface-visibility: hidden;\n+  -webkit-backface-visibility: hidden;\n+}\n+\n+.memory-card__face--back {\n+  border-color: #17664e;\n+  background: #17664e;\n+  color: #fffdf8;\n+  font-size: 30px;\n+  font-weight: 600;\n+}\n+\n+.memory-card__face--front {\n+  background: #fffdf8;\n+  text-align: center;\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card__emoji {\n+  font-size: 34px;\n+  line-height: 1.2;\n+}\n+\n+.memory-card__label {\n+  color: #626c65;\n+  font-size: 14px;\n+}\n+\n+.memory-card--matched {\n+  cursor: default;\n+}\n+\n+.memory-card--matched .memory-card__face--front {\n+  border-color: #17664e;\n+  background: #eef3ee;\n+}\n+\n @media (max-width: 600px) {\n   body {\n     padding: 40px 20px;\n@@ -126,4 +299,19 @@ body {\n   .project-card {\n     padding: 24px;\n   }\n+\n+  .memory-game__board {\n+    grid-template-columns: repeat(2, minmax(0, 1fr));\n+    gap: 10px;\n+  }\n+\n+  .memory-card__emoji {\n+    font-size: 28px;\n+  }\n+}\n+\n+@media (prefers-reduced-motion: reduce) {\n+  .memory-card__inner {\n+    transition-duration: 0.01ms;\n+  }\n }\n",
   "play": "builds/r1007-1/index.html#memory-game"
  },
  {
   "id": "r1007-2",
   "label": "第 2 轮",
   "status": "ok",
   "props": {
    "pairs": {
     "v": "3 对 · 项目名"
    },
    "moves": {
     "v": "“翻牌 N 次”，两张算一次"
    },
    "timer": {
     "v": "没有",
     "tag": "ai-rule"
    },
    "restart": {
     "v": "常驻“再来一局”"
    },
    "lock_plan": {
     "v": "没写（只写“延时判定”）",
     "tag": "ai-rule"
    },
    "lock_code": {
     "v": "忽略",
     "tag": "ai-rule"
    },
    "asked": {
     "v": "卡面、入口（只问了 2 个）"
    },
    "checkpoints": {
     "v": "否"
    }
   },
   "findings": [
    {
     "tag": "ai-rule",
     "title": "等待翻回时点第三张：直接忽略",
     "detail": "计划只写了“翻开两张后延时判定”。",
     "where": "src/MemoryGame.tsx:56",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 56,
       "start": 52,
       "code": [
        "    return () => window.clearTimeout(timer)",
        "  }, [flipped])",
        "",
        "  function flip(card: Card) {",
        "    if (matched.includes(card.id) || flipped.includes(card.key) || flipped.length >= 2) {",
        "      return",
        "    }",
        "",
        "    const next = [...flipped, card.key]"
       ]
      }
     ]
    },
    {
     "tag": "defect",
     "title": "牌背面的读屏标签写着牌面内容",
     "detail": "aria-label 是“项目名 + ，背面”：读屏软件或开发者工具能直接看到每张牌是什么。看画面发现不了。",
     "where": "src/MemoryGame.tsx:104",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 104,
       "start": 100,
       "code": [
        "                type=\"button\"",
        "                className={`memory-card${isFaceUp ? ' is-flipped' : ''}`}",
        "                onClick={() => flip(card)}",
        "                aria-disabled={isMatched}",
        "                aria-label={`${card.name}${state}`}",
        "              >",
        "                <span className=\"memory-card__inner\" aria-hidden=\"true\">",
        "                  <span className=\"memory-card__face memory-card__face--back\">?</span>",
        "                  <span className=\"memory-card__face memory-card__face--front\">"
       ]
      }
     ]
    },
    {
     "tag": "note",
     "title": "自己写了第 3 章记录文件",
     "detail": "docs/evidence/CH03_MEMORY_GAME.md：第 2 章的记录习惯延续下来了。",
     "where": "docs/evidence/CH03_MEMORY_GAME.md",
     "snippets": []
    }
   ],
   "seconds": {
    "plan": 144,
    "exec": 446
   },
   "diffstat": "docs/evidence/CH03_MEMORY_GAME.md |  46 +++++++++\n src/App.tsx                       |  21 ++++-\n src/MemoryGame.tsx                | 129 ++++++++++++++++++++++++++\n src/index.css                     | 190 ++++++++++++++++++++++++++++++++++++++\n 4 files changed, 383 insertions(+), 3 deletions(-)",
   "plan": "我已经看完仓库和课程文档，基线 `npm run build` 目前是成功的。下面是我的计划。\n\n## 现状\n\n- React 19 + TS + Vite，`src/App.tsx`（首屏 + 项目区）、`src/index.css`（全部样式，单一文件）、`src/main.tsx`\n- 页面文案是已确认的虚构占位内容（\"示例同学\" + 三个项目），首屏按钮\"查看项目\"→ `#projects`\n- 第 2 章证据文档里记了三种宽度基线：360×800 / 768×1024 / 1440×900\n- 无测试、无 lint，`build` = `tsc -b && vite build`；`setup-check/` 保持不碰\n\n## 改动计划\n\n| 文件 | 动作 |\n| --- | --- |\n| `src/MemoryGame.tsx` | 新增，游戏组件与全部状态逻辑 |\n| `src/App.tsx` | 引入组件，在项目区后渲染新 `<section>` |\n| `src/index.css` | 追加游戏样式，复用现有配色（`#17664e` / `#fffdf8` / `#f7f4ee` / `#d5dcd3` / `#626c65`） |\n| `docs/evidence/CH03_MEMORY_GAME.md` | 新增，按课程惯例记决策、改动和验证结果（你若不想要就说一声） |\n\n不动的：`index.html`、`setup-check/`、`package.json` 依赖、构建配置。\n\n## 我自己定、不占你问题的实现细节\n\n- 卡片是真正的 `<button>`，Tab 可达、回车/空格翻开，焦点顺序不因翻牌打乱（补上第 2 章记过的 a11y 短板）\n- CSS 3D 翻转；`prefers-reduced-motion` 下降级为直接切换（现有 `index.css` 已有这个降级块）\n- 翻开两张后延时判定：配对成功保持翻开，不匹配翻回；`Math.random` 洗牌\n- 布局用 grid + `aspect-ratio`，保证 360px 不横向溢出\n- 不加任何新依赖\n\n## 三个需要你定的问题\n\n**Q1｜卡片上画什么、配几对？**\n- **A（推荐）** 3 对 = 6 张：直接用项目区那三条项目（名字 + 一个关键词），3×2 网格。复用已确认内容、零新素材；360px 下每张卡约 100px 宽，中文能看清。缺点：一局只有 3 次配对，偏短。\n- B 6 对 = 12 张：中性符号（几何图形/emoji），4×3。更耐玩、像传统翻牌；但和主页内容无关，要新增符号清单，360px 下每张约 78px。\n- C 混合 6 对：3 对项目 + 3 对符号，4×3。既贴内容又耐玩，实现和文案成本最高。\n\n**Q2｜游戏放哪儿，要不要动首屏？**\n- **A（推荐）** 项目区之后新增 `id=\"memory\"` 的 section，首屏按钮旁加一个次级链接\"试试翻牌\"跳过去；\"查看项目\"按钮行为保持不变。\n- B 只加 section，首屏完全不动——页面本来就短，滚到底自然看到。改动最小。\n- C 把游戏放进首屏 hero 内部、紧跟按钮下方，首屏会变长。\n\n**Q3｜成绩反馈做到哪一步？**\n- **A（推荐）** 步数 + \"已配对 n/N\" + 全部配对后的完成提示 + \"再来一局\"重开。纯内存状态，关页面即清空。\n- B 额外用 `localStorage` 存最佳步数，重开时展示。\n- C 再加计时器，显示完成用时。\n\n你回复这三个选项（比如 `A / A / A`，或直接说你的想法）我就开始改，改完只跑 `npm run build` 验证，不开浏览器。",
   "answer": "改完了，`npm run build` 成功。\n\n## 改了什么\n\n| 文件 | 说明 |\n| --- | --- |\n| `src/MemoryGame.tsx` | 新增，129 行，游戏组件与全部状态 |\n| `src/App.tsx` | 引入组件，在项目区后加 `<section id=\"memory\">`；首屏按钮旁加次级链接\"试试翻牌\" |\n| `src/index.css` | 追加游戏样式，复用现有配色变量值 |\n| `docs/evidence/CH03_MEMORY_GAME.md` | 新增，决策与验证记录 |\n\n未动 `index.html`、依赖、构建配置、`setup-check/`。\n\n## 三个推荐项的落地\n\n- **Q1**：3 对 = 6 张，3×2 网格。卡面用项目区那三条的短词 + 全名（红绿灯 / 端侧推理 / 研发流程），零新素材。\n- **Q2**：`#memory` section 在项目区之后，首屏\"查看项目\"行为完全不变，旁边加了一个低调的描边次级链接。\n- **Q3**：步数 + \"已配对 n / 3\" + 完成提示 + \"再来一局\"，纯内存，无 localStorage、无计时器、无音效。\n\n## 实现上值得你验收的几点\n\n- 卡片是原生 `<button>`，Tab 可达、回车/空格可翻；已配对的卡用 `aria-disabled` 标记但**保留在焦点顺序里**，避免翻开后焦点掉回 body。\n- 卡面文字对读屏隐藏，可访问名走 `aria-label`（含\"翻开 / 背面 / 已配对\"状态）；状态行是 `role=\"status\"`。\n- `prefers-reduced-motion: reduce` 下降级为直接切换，和页面既有降级块一致。\n- 翻开两张后锁 900ms 判定，配对成功保持翻开、不匹配自动翻回。\n- 棋盘 `max-width: 460px`，窄屏取消上限并把间距收到 10px，配合 `minmax(0, 1fr)` + `aspect-ratio` 防横向溢出。\n\n## 待你确认\n\n- 浏览器试玩：配对 / 翻回 / 再来一局，以及配对后焦点落点是否顺\n- 360×800 / 768×1024 / 1440×900 三种宽度，尤其 360 下卡面文字（\"端侧多模态推理引擎\"会折成两行）\n- 证据文档里\"浏览器试玩\"和\"三种宽度\"两行我标的是\"由学员执行\"，等你验完我把结论补进去\n\n改动都还没提交，也没有建标签 —— 你确认后我再决定要不要存 `ch03` 检查点。",
   "timeline": [
    {
     "k": "msg",
     "t": "确认收到，按 A / A / A 执行。先写游戏组件。"
    },
    {
     "k": "cmd",
     "t": "cat tsconfig.app.json; echo \"=== vite.config ===\"; cat vite.config.ts; echo \"=== gitignore ===\"; cat .gitignore",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "`verbatimModuleSyntax` and `noUnusedLocals` are on — writing the component accordingly."
    },
    {
     "k": "cmd",
     "t": "cat > src/MemoryGame.tsx <<'EOF'  … 另 131 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Now wiring it into the page with the secondary hero link."
    },
    {
     "k": "file",
     "t": "update App.tsx"
    },
    {
     "k": "msg",
     "t": "Now the styles — appending the game CSS, reusing the existing palette."
    },
    {
     "k": "file",
     "t": "update index.css"
    },
    {
     "k": "msg",
     "t": "Now the build check."
    },
    {
     "k": "cmd",
     "t": "npm run build 2>&1 | tail -20",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Build passes. Verifying the artifact doesn't leak the environment check page."
    },
    {
     "k": "cmd",
     "t": "find dist -type f | sort; echo \\\"--- setup-check leaked? ---\\\"; grep -rl \\\"setup-check\\\\|Vibe Coding\\\" dist/ 2>/dev/null || echo \\\"none\\",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "git status --short; echo \"--- diff stat ---\"; git diff --stat",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Writing the evidence doc per the course convention."
    },
    {
     "k": "cmd",
     "t": "cat > docs/evidence/CH03_MEMORY_GAME.md <<'EOF'  … 另 48 行",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "cat src/App.tsx; echo \"=== final build ===\"; npm run build 2>&1 | tail -8",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "改完了，`npm run build` 成功。  ## 改了什么  | 文件 | 说明 | | --- | --- | | `src/MemoryGame.tsx` | 新增，129 行，游戏组件与全部状态 | | `src/App.tsx` | 引入组件，在项目区后加 `<section id=\"memory\">`；…"
    }
   ],
   "diff": "diff --git a/docs/evidence/CH03_MEMORY_GAME.md b/docs/evidence/CH03_MEMORY_GAME.md\nnew file mode 100644\nindex 0000000..63015e2\n--- /dev/null\n+++ b/docs/evidence/CH03_MEMORY_GAME.md\n@@ -0,0 +1,46 @@\n+# 第 3 章记忆翻牌记录\n+\n+## 人工决定（3.x 加入小游戏）\n+\n+在 1.4 已确认的首页内容和第 2 章的视觉基线之上，本轮只加入小游戏，不改已有文案、项目内容与“查看项目”按钮行为。\n+\n+| 问题 | 决定 | 来源 |\n+| --- | --- | --- |\n+| 卡片画什么、配几对 | 3 对 = 6 张，3×2 网格；卡面是项目短词 + 项目全名 | 沿用 PLACEHOLDER_CONTENT.md 与第 2 章已确认的三条项目，不新增素材 |\n+| 游戏放哪儿 | 项目区之后新增 `id=\"memory\"` 的 section；首屏加次级链接“试试翻牌” | Agent 提出三个选项，本人确认采用推荐项 |\n+| 成绩反馈范围 | 步数 + “已配对 n / 3” + 完成提示 + “再来一局”；纯内存状态 | 同上 |\n+| 最佳成绩持久化 | 不做；不加计时器、不做音效 | 同上，控制在课程范围 |\n+\n+## 第 1 轮\n+\n+- 本轮目标：在主页加入可玩的记忆翻牌小游戏\n+- 改动文件：src/MemoryGame.tsx（新增）、src/App.tsx、src/index.css\n+- 会话选择与理由：新建；本轮与第 2 章的反馈迭代无关\n+- 未改动：index.html、package.json 依赖、vite/ts 配置、setup-check/\n+\n+### 实现要点\n+\n+- 卡片是原生 `<button>`，Tab 可达、回车与空格可翻开；已配对的卡用 `aria-disabled` 标记并保留在焦点顺序中，避免焦点丢失。\n+- 卡面文字对读屏隐藏，按钮的可访问名由 `aria-label` 提供，包含卡名与“翻开 / 背面 / 已配对”状态。\n+- 翻转用 CSS 3D；`prefers-reduced-motion: reduce` 下降级为直接切换，与页面既有降级一致。\n+- 翻开两张后 900ms 判定：配对成功保持翻开并累计，不匹配自动翻回；锁定期间忽略点击。\n+- 洗牌用 `Math.random`，“再来一局”同时重置牌面、步数与配对状态。\n+- 布局用 `grid-template-columns: repeat(3, minmax(0, 1fr))` + `aspect-ratio`，棋盘 `max-width: 460px`，窄屏取消该上限并收窄间距。\n+\n+### 验证结果\n+\n+| 项 | 结果 |\n+| --- | --- |\n+| `npm run build`（`tsc -b && vite build`） | 成功；dist 3 个文件，CSS 4.11 kB / JS 189.83 kB |\n+| 构建产物不含 setup-check 与环境页文案 | 通过，`dist/` 全量检索无命中 |\n+| 浏览器试玩（配对 / 翻回 / 再来一局） | 由学员在浏览器执行 |\n+| 三种宽度 360×800 / 768×1024 / 1440×900 | 由学员执行 |\n+\n+### 剩余问题\n+\n+- 浏览器侧的三种宽度与实际试玩尚未由 Agent 验证，需学员确认后补充本表。\n+- 沿用第 2 章结论：项目卡不跳转是第 1 章既有决定，本轮未改。\n+\n+### 回退点\n+\n+基线提交 `1eec76d`（v1：起点）。本轮改动尚未提交，确认后再保存本地检查点。\ndiff --git a/src/App.tsx b/src/App.tsx\nindex bd92a25..6a2daa4 100644\n--- a/src/App.tsx\n+++ b/src/App.tsx\n@@ -1,3 +1,5 @@\n+import MemoryGame from './MemoryGame'\n+\n const projects = [\n   {\n     name: '红绿灯感知量产',\n@@ -19,9 +21,14 @@ export default function App() {\n       <header className=\"hero\">\n         <h1 className=\"hero__name\">示例同学</h1>\n         <p className=\"hero__intro\">正在学习 AI 协作开发。</p>\n-        <a className=\"hero__action\" href=\"#projects\">\n-          查看项目\n-        </a>\n+        <div className=\"hero__actions\">\n+          <a className=\"hero__action\" href=\"#projects\">\n+            查看项目\n+          </a>\n+          <a className=\"hero__action hero__action--quiet\" href=\"#memory\">\n+            试试翻牌\n+          </a>\n+        </div>\n       </header>\n \n       <section className=\"projects\" id=\"projects\" aria-labelledby=\"projects-title\">\n@@ -37,6 +44,14 @@ export default function App() {\n           ))}\n         </ul>\n       </section>\n+\n+      <section className=\"memory-section\" id=\"memory\" aria-labelledby=\"memory-title\">\n+        <h2 className=\"memory-section__title\" id=\"memory-title\">\n+          记忆翻牌\n+        </h2>\n+        <p className=\"memory-section__intro\">翻开卡片，把三个项目名对上号。</p>\n+        <MemoryGame />\n+      </section>\n     </>\n   )\n }\ndiff --git a/src/MemoryGame.tsx b/src/MemoryGame.tsx\nnew file mode 100644\nindex 0000000..4177227\n--- /dev/null\n+++ b/src/MemoryGame.tsx\n@@ -0,0 +1,129 @@\n+import { useEffect, useState } from 'react'\n+\n+type Pair = {\n+  id: string\n+  word: string\n+  name: string\n+}\n+\n+type Card = Pair & {\n+  key: string\n+}\n+\n+const pairs: Pair[] = [\n+  { id: 'traffic', word: '红绿灯', name: '红绿灯感知量产' },\n+  { id: 'edge', word: '端侧推理', name: '端侧多模态推理引擎' },\n+  { id: 'harness', word: '研发流程', name: 'RoboHarness' },\n+]\n+\n+function shuffle<T>(items: T[]): T[] {\n+  const result = [...items]\n+  for (let index = result.length - 1; index > 0; index -= 1) {\n+    const swap = Math.floor(Math.random() * (index + 1))\n+    ;[result[index], result[swap]] = [result[swap], result[index]]\n+  }\n+  return result\n+}\n+\n+function deal(): Card[] {\n+  return shuffle(\n+    pairs.flatMap((pair) => [\n+      { ...pair, key: `${pair.id}-a` },\n+      { ...pair, key: `${pair.id}-b` },\n+    ]),\n+  )\n+}\n+\n+const MATCH_FLIP_BACK_DELAY = 900\n+\n+export default function MemoryGame() {\n+  const [cards, setCards] = useState<Card[]>(deal)\n+  const [flipped, setFlipped] = useState<string[]>([])\n+  const [matched, setMatched] = useState<string[]>([])\n+  const [moves, setMoves] = useState(0)\n+\n+  const isWon = matched.length === pairs.length\n+\n+  useEffect(() => {\n+    if (flipped.length < 2) {\n+      return\n+    }\n+    const timer = window.setTimeout(() => setFlipped([]), MATCH_FLIP_BACK_DELAY)\n+    return () => window.clearTimeout(timer)\n+  }, [flipped])\n+\n+  function flip(card: Card) {\n+    if (matched.includes(card.id) || flipped.includes(card.key) || flipped.length >= 2) {\n+      return\n+    }\n+\n+    const next = [...flipped, card.key]\n+    setFlipped(next)\n+\n+    if (next.length < 2) {\n+      return\n+    }\n+\n+    setMoves((count) => count + 1)\n+\n+    const first = cards.find((item) => item.key === next[0])\n+    const second = cards.find((item) => item.key === next[1])\n+\n+    if (first && second && first.id === second.id) {\n+      setMatched((ids) => [...ids, card.id])\n+      setFlipped([])\n+    }\n+  }\n+\n+  function restart() {\n+    setCards(deal())\n+    setFlipped([])\n+    setMatched([])\n+    setMoves(0)\n+  }\n+\n+  return (\n+    <div className=\"memory\">\n+      <p className=\"memory__status\" role=\"status\">\n+        已配对 {matched.length} / {pairs.length} · 翻牌 {moves} 次\n+      </p>\n+\n+      <ul className=\"memory__board\">\n+        {cards.map((card) => {\n+          const isMatched = matched.includes(card.id)\n+          const isFaceUp = isMatched || flipped.includes(card.key)\n+          const state = isMatched ? '，已配对' : isFaceUp ? '，翻开' : '，背面'\n+\n+          return (\n+            <li className=\"memory__slot\" key={card.key}>\n+              <button\n+                type=\"button\"\n+                className={`memory-card${isFaceUp ? ' is-flipped' : ''}`}\n+                onClick={() => flip(card)}\n+                aria-disabled={isMatched}\n+                aria-label={`${card.name}${state}`}\n+              >\n+                <span className=\"memory-card__inner\" aria-hidden=\"true\">\n+                  <span className=\"memory-card__face memory-card__face--back\">?</span>\n+                  <span className=\"memory-card__face memory-card__face--front\">\n+                    <span className=\"memory-card__word\">{card.word}</span>\n+                    <span className=\"memory-card__name\">{card.name}</span>\n+                  </span>\n+                </span>\n+              </button>\n+            </li>\n+          )\n+        })}\n+      </ul>\n+\n+      <div className=\"memory__footer\">\n+        <p className=\"memory__hint\">\n+          {isWon ? `全部配对完成，用了 ${moves} 次翻牌。` : '翻开两张一样的卡片即可配对。'}\n+        </p>\n+        <button type=\"button\" className=\"memory__restart\" onClick={restart}>\n+          再来一局\n+        </button>\n+      </div>\n+    </div>\n+  )\n+}\ndiff --git a/src/index.css b/src/index.css\nindex 5e0d9e2..711e9e8 100644\n--- a/src/index.css\n+++ b/src/index.css\n@@ -57,6 +57,24 @@ body {\n   line-height: 1.8;\n }\n \n+.hero__actions {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 12px;\n+}\n+\n+.hero__action--quiet {\n+  background: transparent;\n+  color: #17664e;\n+}\n+\n+.hero__action--quiet:hover,\n+.hero__action--quiet:focus-visible {\n+  background: rgba(23, 102, 78, 0.08);\n+  border-color: #0f4a39;\n+  color: #0f4a39;\n+}\n+\n .hero__action {\n   display: inline-block;\n   padding: 12px 24px;\n@@ -118,6 +136,169 @@ body {\n   line-height: 1.8;\n }\n \n+/* 记忆翻牌 */\n+\n+.memory-section {\n+  width: min(100%, 860px);\n+  margin-inline: auto;\n+  padding-top: 40px;\n+  border-top: 1px solid #d5dcd3;\n+  scroll-margin-top: 32px;\n+}\n+\n+.memory-section__title {\n+  margin: 0 0 12px;\n+  font-size: 18px;\n+}\n+\n+.memory-section__intro {\n+  margin: 0 0 24px;\n+  color: #626c65;\n+  font-size: 16px;\n+  line-height: 1.8;\n+}\n+\n+.memory__status {\n+  margin: 0 0 16px;\n+  color: #626c65;\n+  font-size: 15px;\n+  font-variant-numeric: tabular-nums;\n+}\n+\n+.memory__board {\n+  display: grid;\n+  grid-template-columns: repeat(3, minmax(0, 1fr));\n+  gap: 12px;\n+  max-width: 460px;\n+  margin: 0;\n+  padding: 0;\n+  list-style: none;\n+}\n+\n+.memory__slot {\n+  display: block;\n+}\n+\n+.memory-card {\n+  display: block;\n+  width: 100%;\n+  aspect-ratio: 1 / 1;\n+  padding: 0;\n+  border: 0;\n+  background: none;\n+  font: inherit;\n+  color: inherit;\n+  cursor: pointer;\n+  perspective: 800px;\n+}\n+\n+.memory-card:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 3px;\n+  border-radius: 14px;\n+}\n+\n+.memory-card__inner {\n+  position: relative;\n+  display: block;\n+  width: 100%;\n+  height: 100%;\n+  transform-style: preserve-3d;\n+  transition: transform 0.4s ease;\n+}\n+\n+.memory-card.is-flipped .memory-card__inner {\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card__face {\n+  position: absolute;\n+  inset: 0;\n+  display: flex;\n+  flex-direction: column;\n+  align-items: center;\n+  justify-content: center;\n+  gap: 4px;\n+  padding: 10px;\n+  border-radius: 14px;\n+  backface-visibility: hidden;\n+  -webkit-backface-visibility: hidden;\n+  overflow-wrap: anywhere;\n+}\n+\n+.memory-card__face--back {\n+  border: 1px solid #17664e;\n+  background: #17664e;\n+  color: #fffdf8;\n+  font-size: 26px;\n+  line-height: 1;\n+}\n+\n+.memory-card__face--front {\n+  border: 1px solid #d5dcd3;\n+  background: #fffdf8;\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card__word {\n+  font-size: 17px;\n+  font-weight: 600;\n+  line-height: 1.35;\n+  text-align: center;\n+}\n+\n+.memory-card__name {\n+  color: #626c65;\n+  font-size: 12px;\n+  line-height: 1.5;\n+  text-align: center;\n+}\n+\n+.memory__footer {\n+  display: flex;\n+  flex-wrap: wrap;\n+  align-items: center;\n+  gap: 12px 16px;\n+  max-width: 460px;\n+  margin-top: 20px;\n+}\n+\n+.memory__hint {\n+  margin: 0;\n+  color: #626c65;\n+  font-size: 15px;\n+  line-height: 1.7;\n+}\n+\n+.memory__restart {\n+  padding: 10px 20px;\n+  border: 1px solid #d5dcd3;\n+  border-radius: 999px;\n+  background: #fffdf8;\n+  color: #222d29;\n+  font: inherit;\n+  font-size: 15px;\n+  cursor: pointer;\n+  transition: background-color 0.2s ease, border-color 0.2s ease;\n+}\n+\n+.memory__restart:hover,\n+.memory__restart:focus-visible {\n+  border-color: #17664e;\n+  background: rgba(23, 102, 78, 0.08);\n+}\n+\n+.memory__restart:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 3px;\n+}\n+\n+@media (prefers-reduced-motion: reduce) {\n+  .memory-card__inner {\n+    transition: none;\n+  }\n+}\n+\n @media (max-width: 600px) {\n   body {\n     padding: 40px 20px;\n@@ -126,4 +307,13 @@ body {\n   .project-card {\n     padding: 24px;\n   }\n+\n+  .memory__board,\n+  .memory__footer {\n+    max-width: none;\n+  }\n+\n+  .memory__board {\n+    gap: 10px;\n+  }\n }\n",
   "play": "builds/r1007-2/index.html#memory"
  },
  {
   "id": "r1007-3",
   "label": "第 3 轮",
   "status": "ok",
   "props": {
    "pairs": {
     "v": "6 对 · 项目名 ↔ 关键词",
     "tag": "defect"
    },
    "moves": {
     "v": "“翻牌 N 次”，两张算一次"
    },
    "timer": {
     "v": "有"
    },
    "restart": {
     "v": "常驻“再来一局”"
    },
    "lock_plan": {
     "v": "写了，没问"
    },
    "lock_code": {
     "v": "忽略",
     "tag": "ai-rule"
    },
    "asked": {
     "v": "卡面、牌数、入口"
    },
    "checkpoints": {
     "v": "是",
     "tag": "leak"
    }
   },
   "findings": [
    {
     "tag": "defect",
     "title": "页面说“内容相同的牌配对”，牌组却是“项目名 ↔ 关键词”",
     "detail": "12 张牌文字各不相同，按页面说明一对也找不到。改说明还是改牌组，要由人定。Codex 执行中自己写了渲染测试，也没发现。",
     "where": [
      "src/MemoryGame.tsx:120",
      "src/MemoryGame.tsx:5"
     ],
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 120,
       "start": 116,
       "code": [
        "    <section className=\"memory-game\" id=\"memory-game\" aria-labelledby=\"memory-game-title\">",
        "      <h2 className=\"memory-game__title\" id=\"memory-game-title\">",
        "        记忆翻牌",
        "      </h2>",
        "      <p className=\"memory-game__hint\">翻开两张内容相同的牌即可配对，卡面文字都取自上面的项目区。</p>",
        "",
        "      <div className=\"memory-game__status\">",
        "        <p className=\"memory-game__meta\">",
        "          已配对 {matchedPairs.size} / {PAIRS.length} 对 · 翻牌 {moves} 次 · 用时 {seconds} 秒"
       ]
      },
      {
       "file": "src/MemoryGame.tsx",
       "line": 5,
       "start": 1,
       "code": [
        "import { useEffect, useRef, useState } from 'react'",
        "",
        "const PAIRS: ReadonlyArray<readonly [string, string, string]> = [",
        "  ['traffic-light', '红绿灯感知量产', '城市 NOA'],",
        "  ['edge-inference', '端侧多模态推理引擎', 'Orin / Thor'],",
        "  ['roboharness', 'RoboHarness', '自然语言转流程'],",
        "  ['llm-engine', '大模型推理引擎', '从 0 到 1'],",
        "  ['production', '量产方案', '设计 · 部署 · 加速'],",
        "  ['workflow', '研发流程', '可执行 · 可验证'],"
       ]
      }
     ]
    },
    {
     "tag": "ai-rule",
     "title": "等待翻回时点第三张：直接忽略",
     "detail": "计划里写了“期间锁定输入”，但没当问题问人。",
     "where": "src/MemoryGame.tsx:81",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 81,
       "start": 77,
       "code": [
        "    setLocked(false)",
        "  }",
        "",
        "  function reveal(card: Card) {",
        "    if (locked || matchedPairs.has(card.pairKey) || revealed.has(card.id)) {",
        "      return",
        "    }",
        "",
        "    setStarted(true)"
       ]
      }
     ]
    }
   ],
   "seconds": {
    "plan": 117,
    "exec": 533
   },
   "diffstat": "src/App.tsx        |   4 ++\n src/MemoryGame.tsx | 172 +++++++++++++++++++++++++++++++++++++++++++++++++++++\n src/index.css      | 165 +++++++++++++++++++++++++++++++++++++++++++++++++-\n 3 files changed, 339 insertions(+), 2 deletions(-)",
   "plan": "基线已确认：`npm run build` 通过（396ms，rollup 已固定 4.63.6），工作树干净。下面是我的计划和三个待定问题。\n\n## 现状\n\n- 源码只有三个文件：`src/App.tsx`、`src/main.tsx`、`src/index.css`，全部样式集中在一个 CSS 文件里。\n- 主页现状：首屏（姓名/简介/查看项目按钮）+ 项目区 3 张卡。\n- 视觉语言：米白底 `#f7f4ee`、卡片 `#fffdf8`、描边 `#d5dcd3`、主绿 `#17664e`、圆角 16px、内容宽 `min(100%, 860px)`、系统中文字体。\n- `CHECKPOINTS.md` 里 `ch03-complete` 正是\"加入本章小游戏后的参考快照\"，README 也写了后续加入小游戏，所以这是预期内的下一步。\n\n## 计划\n\n1. **新建 `src/MemoryGame.tsx`** — 游戏逻辑与结构：\n   - Fisher–Yates 洗牌；每张卡带稳定 id，按 id 配对（不按文案比较，避免重复值误判）\n   - 点开一张 → 再点一张比对；不同则约 800ms 后翻回，期间锁定输入；相同则保留并计数\n   - 统计翻牌次数、已配对数、计时（秒）\n   - 全部配对后显示完成提示与「再来一局」\n   - 每张卡是 `<button>`，Tab 可聚焦、Enter/Space 可翻，`aria-label` 区分正反面\n2. **样式追加进 `src/index.css`** — 沿用现有配色和 `memory-game__*` 命名，不新建 CSS 文件：\n   - 纯 CSS 3D 翻转；`prefers-reduced-motion: reduce` 时降级为淡入切换（现有样式里已有这个媒体查询）\n   - 卡片用 `aspect-ratio: 1`，宽度变化时不变形\n   - 宽屏 4 列、≤600px 3 列，保证 360px 下每张卡约 96px、中文两字一行不挤\n3. **`src/App.tsx` 接入** 新 section（位置见问题 3）\n4. 跑 `npm run build`，确认 `tsc -b` 无报错、产物不含 `setup-check/`\n\n**不动的部分**：`setup-check/`、依赖与锁文件、`index.html`、tsconfig；不新增任何依赖；第 1 章\"项目卡不跳转\"的决定保持不变。\n\n**由你验证的**：三种宽度（360/768/1440）无横向滚动且卡片不变形、键盘 Tab 能聚焦、配对与翻回手感。\n\n## 三个问题\n\n**1. 卡面内容用什么？**\n- **A（推荐）** 复用主页已有内容，不编造新事实：3 个项目名 + 3 个关键词（NOA、Orin/Thor、流程），共 6 对。小游戏帮你记住主页做过什么，和项目区呼应。\n- B 纯图形符号（emoji 或几何图形），完全不依赖文案，长宽比较稳。\n- C 我新编 6 组虚构项目内容 —— 但这些你没确认过，我不建议。\n\n**2. 牌组大小？**\n- **A（推荐）** 6 对 / 12 张。宽屏 4 列 3 行、窄屏 3 列 4 行，两种宽度都整齐不产生孤行。\n- B 4 对 / 8 张。更短，窄屏更轻松，但内容只能砍掉一半。\n- C 8 对 / 16 张。更耐玩，但 16 张在 3 列下末行会多出一个空格，需要为它单独调列数。\n\n**3. 放在页面哪里？首屏按钮要不要改？**\n- **A（推荐）** 新增独立区块放在项目区之后（`id=\"memory-game\"`），首屏按钮保持只跳项目区 —— 不动已有交互，风险最低。\n- B 放在首屏和项目区之间，位置更靠前，但会把项目区往下推。\n- C 放最上面，并给首屏加一个「记忆翻牌」按钮滚过去 —— 曝光最好，但要改首屏。\n\n三个都同意的话回「都按推荐」即可，我直接按 A/A/A 实现并跑 build。",
   "answer": "完成。build 通过，改动限定在 3 个文件。\n\n## 做了什么\n\n**`src/MemoryGame.tsx`（新增）** — 游戏逻辑：Fisher–Yates 洗牌、按稳定 `pairKey` 配对（不按文案比较，避免重复值误判）、翻错 800ms 自动翻回并锁输入、翻牌次数与计时、`再来一局` 重开。每张卡是 `<button>`，Tab 可聚焦、Enter/Space 可翻；已配对的卡用 `aria-disabled` 而不是 `disabled`，这样键盘焦点不会在配对瞬间跳回页首。\n\n**`src/index.css`** — 追加 `memory-game__*` 规则，沿用现有配色与圆角。宽屏 4 列 / ≤600px 3 列（12 张牌两种宽度都整除，无孤行），卡片 `aspect-ratio: 1`，`prefers-reduced-motion` 时关闭翻转过渡。\n\n**`src/App.tsx`** — 仅 +2 行：导入并渲染 `<MemoryGame />`，位置在项目区之后。首屏按钮和项目卡\"不跳转\"的原有决定没动。\n\n卡面全部取自主页已有文案，没有编造新项目：红绿灯感知量产 ↔ 城市 NOA、端侧多模态推理引擎 ↔ Orin / Thor、RoboHarness ↔ 自然语言转流程、大模型推理引擎 ↔ 从 0 到 1、量产方案 ↔ 设计·部署·加速、研发流程 ↔ 可执行·可验证。\n\n## 我验证了什么\n\n- `npm run build` **退出码 0**，30 模块，391ms（rollup 仍固定在 4.63.6）；`dist/` 只有 3 个文件，不含 `setup-check/`。\n- 服务端渲染实际输出：12 张牌、13 个按钮、初始 0 张翻开、6 对齐全。\n- 3000 次洗牌断言：每局 12 张牌互不重复、6 对始终完整、顺序确实在变。\n- 构建产物 CSS 里 3 列规则确实包在 `@media(max-width:600px)` 内且排在 4 列基础规则之后。\n\n依赖、锁文件、`index.html`、tsconfig 全部未改。我**没有提交**，工作树留着这 3 处改动等你验收。\n\n## 需要你确认的\n\n我没法开浏览器，所以下面这些是算出来的、不是实测的，请以你试玩为准：\n\n1. `npm run dev` 后 360 / 768 / 1440 三个宽度无横向滚动，卡片不变形、文字不溢出（360px 下我按 3 列 × 约 100px 估的，`端侧多模态推理引擎` 这类9 字标签会折成两行，请确认不挤）。\n2. Tab 能依次聚焦 12 张牌和「再来一局」，翻牌/配对/翻回手感正常。\n3. 配对成功的浅绿色反馈和完成提示是否符合预期。\n\n如果窄屏文字偏挤，我调一档字号或改回 4 列即可。",
   "timeline": [
    {
     "k": "msg",
     "t": "Confirmed — implementing A/A/A now. First, let me check the TS config so the code matches its strictness."
    },
    {
     "k": "cmd",
     "t": "cat tsconfig.app.json; echo \"--- base ---\"; cat tsconfig.json",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Now creating the game component."
    },
    {
     "k": "cmd",
     "t": "cat > src/MemoryGame.tsx <<'TSXEOF'  … 另 174 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Wiring it into the homepage."
    },
    {
     "k": "cmd",
     "t": "cat > /tmp/app_patch.py <<'PYEOF'  … 另 25 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Now the styles — appending to `src/index.css` to match the existing single-file pattern."
    },
    {
     "k": "msg",
     "t": "Let me use `apply_patch` directly instead."
    },
    {
     "k": "file",
     "t": "update index.css"
    },
    {
     "k": "msg",
     "t": "Now the build."
    },
    {
     "k": "cmd",
     "t": "npm run build 2>&1 | tail -25; echo \"EXIT=${PIPESTATUS[0]}",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Build passes, but I spotted a CSS ordering bug — let me verify the file layout."
    },
    {
     "k": "cmd",
     "t": "grep -n \\\"memory-game__grid\\\\|max-width: 600px\\\\|prefers-reduced-motion\\\\|memory-card__face {\\\\|memory-game__title\\\" src/index.css",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Confirmed — media queries add no specificity, so the base4-column rule at line 201 would override the mobile 3-column rule at line 132. Fixing the order."
    },
    {
     "k": "cmd",
     "t": "apply_patch <<'PATCH'  … 另 45 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Base rule now precedes the mobile override. Rebuilding and confirming the exit status cleanly."
    },
    {
     "k": "cmd",
     "t": "npm run build > /tmp/build.log 2>&1; echo \"BUILD_EXIT=$?\"; tail -12 /tmp/build.log",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Build exits 0. Let me smoke-test the actual render output using the repo's existing `react-dom` (temp files in `/tmp`, nothing added to the repo)."
    },
    {
     "k": "cmd",
     "t": "mkdir -p /tmp/mg-check  … 另 26 行",
     "exit": -1
    },
    {
     "k": "cmd",
     "t": "mkdir -p /tmp/mg-check && echo ok",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "cat > /tmp/mg-check/entry.tsx <<'EOF'  … 另 22 行",
     "exit": 1
    },
    {
     "k": "cmd",
     "t": "NODE_PATH=<练习仓库>/node_modules \\\\  … 另 3 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Initial render is correct — all 6 pairs traceable to the homepage text. Let me stress the pairing invariant across many shuffles."
    },
    {
     "k": "cmd",
     "t": "cat > /tmp/mg-check/pairs.tsx <<'EOF'  … 另 43 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Pairing integrity holds across 3000 shuffles. Final checks on scope and output."
    },
    {
     "k": "cmd",
     "t": "echo \\\"=== git status ===\\\"; git status --short  … 另 3 行",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "grep -o \"@media[''^{]*{[''^}]*repeat(3[''^}]*}\" dist/assets/*.css; echo \"--- position check ---\"; python3 -c \"  … 另 9 行",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "git diff --stat; echo \"=== App.tsx diff ===\"; git diff src/App.tsx  … 另 1 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "完成。build 通过，改动限定在 3 个文件。  ## 做了什么  **`src/MemoryGame.tsx`（新增）** — 游戏逻辑：Fisher–Yates 洗牌、按稳定 `pairKey` 配对（不按文案比较，避免重复值误判）、翻错 800ms 自动翻回并锁输入、翻牌次数与计时、`再来一局` 重开。每张卡是…"
    }
   ],
   "diff": "diff --git a/src/App.tsx b/src/App.tsx\nindex bd92a25..a707f15 100644\n--- a/src/App.tsx\n+++ b/src/App.tsx\n@@ -1,3 +1,5 @@\n+import MemoryGame from './MemoryGame'\n+\n const projects = [\n   {\n     name: '红绿灯感知量产',\n@@ -37,6 +39,8 @@ export default function App() {\n           ))}\n         </ul>\n       </section>\n+\n+      <MemoryGame />\n     </>\n   )\n }\ndiff --git a/src/MemoryGame.tsx b/src/MemoryGame.tsx\nnew file mode 100644\nindex 0000000..9755e1d\n--- /dev/null\n+++ b/src/MemoryGame.tsx\n@@ -0,0 +1,172 @@\n+import { useEffect, useRef, useState } from 'react'\n+\n+const PAIRS: ReadonlyArray<readonly [string, string, string]> = [\n+  ['traffic-light', '红绿灯感知量产', '城市 NOA'],\n+  ['edge-inference', '端侧多模态推理引擎', 'Orin / Thor'],\n+  ['roboharness', 'RoboHarness', '自然语言转流程'],\n+  ['llm-engine', '大模型推理引擎', '从 0 到 1'],\n+  ['production', '量产方案', '设计 · 部署 · 加速'],\n+  ['workflow', '研发流程', '可执行 · 可验证'],\n+]\n+\n+const FLIP_DELAY_MS = 800\n+\n+type Card = {\n+  id: string\n+  pairKey: string\n+  text: string\n+}\n+\n+function buildDeck(): Card[] {\n+  const deck: Card[] = PAIRS.flatMap(([pairKey, first, second]) => [\n+    { id: `${pairKey}-first`, pairKey, text: first },\n+    { id: `${pairKey}-second`, pairKey, text: second },\n+  ])\n+\n+  for (let index = deck.length - 1; index > 0; index -= 1) {\n+    const swapWith = Math.floor(Math.random() * (index + 1))\n+    const current = deck[index]\n+    deck[index] = deck[swapWith]\n+    deck[swapWith] = current\n+  }\n+\n+  return deck\n+}\n+\n+export default function MemoryGame() {\n+  const [deck, setDeck] = useState<Card[]>(buildDeck)\n+  const [revealed, setRevealed] = useState<ReadonlySet<string>>(new Set())\n+  const [matchedPairs, setMatchedPairs] = useState<ReadonlySet<string>>(new Set())\n+  const [moves, setMoves] = useState(0)\n+  const [seconds, setSeconds] = useState(0)\n+  const [started, setStarted] = useState(false)\n+  const [locked, setLocked] = useState(false)\n+  const flipTimer = useRef<number | null>(null)\n+\n+  const isComplete = matchedPairs.size === PAIRS.length\n+\n+  useEffect(() => {\n+    if (!started || isComplete) {\n+      return\n+    }\n+\n+    const ticker = window.setInterval(() => setSeconds((value) => value + 1), 1000)\n+    return () => window.clearInterval(ticker)\n+  }, [started, isComplete])\n+\n+  useEffect(() => {\n+    return () => {\n+      if (flipTimer.current !== null) {\n+        window.clearTimeout(flipTimer.current)\n+      }\n+    }\n+  }, [])\n+\n+  function restart() {\n+    if (flipTimer.current !== null) {\n+      window.clearTimeout(flipTimer.current)\n+      flipTimer.current = null\n+    }\n+\n+    setDeck(buildDeck())\n+    setRevealed(new Set())\n+    setMatchedPairs(new Set())\n+    setMoves(0)\n+    setSeconds(0)\n+    setStarted(false)\n+    setLocked(false)\n+  }\n+\n+  function reveal(card: Card) {\n+    if (locked || matchedPairs.has(card.pairKey) || revealed.has(card.id)) {\n+      return\n+    }\n+\n+    setStarted(true)\n+\n+    const nextRevealed = new Set(revealed)\n+    nextRevealed.add(card.id)\n+    setRevealed(nextRevealed)\n+\n+    if (nextRevealed.size < 2) {\n+      return\n+    }\n+\n+    setMoves((value) => value + 1)\n+\n+    const [firstId, secondId] = Array.from(nextRevealed)\n+    const first = deck.find((item) => item.id === firstId)\n+    const second = deck.find((item) => item.id === secondId)\n+\n+    if (first && second && first.pairKey === second.pairKey) {\n+      setMatchedPairs((previous) => new Set(previous).add(card.pairKey))\n+      setRevealed(new Set())\n+      return\n+    }\n+\n+    setLocked(true)\n+    flipTimer.current = window.setTimeout(() => {\n+      setRevealed(new Set())\n+      setLocked(false)\n+      flipTimer.current = null\n+    }, FLIP_DELAY_MS)\n+  }\n+\n+  return (\n+    <section className=\"memory-game\" id=\"memory-game\" aria-labelledby=\"memory-game-title\">\n+      <h2 className=\"memory-game__title\" id=\"memory-game-title\">\n+        记忆翻牌\n+      </h2>\n+      <p className=\"memory-game__hint\">翻开两张内容相同的牌即可配对，卡面文字都取自上面的项目区。</p>\n+\n+      <div className=\"memory-game__status\">\n+        <p className=\"memory-game__meta\">\n+          已配对 {matchedPairs.size} / {PAIRS.length} 对 · 翻牌 {moves} 次 · 用时 {seconds} 秒\n+        </p>\n+        <button type=\"button\" className=\"memory-game__restart\" onClick={restart}>\n+          再来一局\n+        </button>\n+      </div>\n+\n+      <p className=\"memory-game__result\" role=\"status\">\n+        {isComplete\n+          ? `全部配对完成，用时 ${seconds} 秒，翻牌 ${moves} 次。`\n+          : `还剩 ${PAIRS.length - matchedPairs.size} 对没有找到。`}\n+      </p>\n+\n+      <ul className=\"memory-game__grid\">\n+        {deck.map((card) => {\n+          const isMatched = matchedPairs.has(card.pairKey)\n+          const isFaceUp = isMatched || revealed.has(card.id)\n+\n+          return (\n+            <li className=\"memory-game__cell\" key={card.id}>\n+              <button\n+                type=\"button\"\n+                className={`memory-card${isFaceUp ? ' memory-card--flipped' : ''}${\n+                  isMatched ? ' memory-card--matched' : ''\n+                }`}\n+                onClick={() => reveal(card)}\n+                aria-disabled={isMatched || undefined}\n+                aria-label={\n+                  isMatched\n+                    ? `已配对：${card.text}`\n+                    : isFaceUp\n+                      ? `已翻开：${card.text}`\n+                      : '未翻开的卡片'\n+                }\n+              >\n+                <span className=\"memory-card__inner\">\n+                  <span className=\"memory-card__face memory-card__face--back\" aria-hidden=\"true\" />\n+                  <span className=\"memory-card__face memory-card__face--front\" aria-hidden=\"true\">\n+                    {card.text}\n+                  </span>\n+                </span>\n+              </button>\n+            </li>\n+          )\n+        })}\n+      </ul>\n+    </section>\n+  )\n+}\ndiff --git a/src/index.css b/src/index.css\nindex 5e0d9e2..9224bfd 100644\n--- a/src/index.css\n+++ b/src/index.css\n@@ -34,7 +34,8 @@ body {\n }\n \n .hero,\n-.projects {\n+.projects,\n+.memory-game {\n   width: min(100%, 860px);\n   margin-inline: auto;\n }\n@@ -80,7 +81,8 @@ body {\n   outline-offset: 3px;\n }\n \n-.projects {\n+.projects,\n+.memory-game {\n   padding-top: 40px;\n   border-top: 1px solid #d5dcd3;\n   scroll-margin-top: 32px;\n@@ -127,3 +129,162 @@ body {\n     padding: 24px;\n   }\n }\n+\n+.memory-game__title {\n+  margin: 0 0 20px;\n+  font-size: 18px;\n+}\n+\n+.memory-game__hint {\n+  margin: 0 0 24px;\n+  color: #626c65;\n+  font-size: 16px;\n+  line-height: 1.8;\n+}\n+\n+.memory-game__status {\n+  display: flex;\n+  flex-wrap: wrap;\n+  align-items: center;\n+  justify-content: space-between;\n+  gap: 12px;\n+  margin-bottom: 12px;\n+}\n+\n+.memory-game__meta {\n+  margin: 0;\n+  color: #626c65;\n+  font-size: 15px;\n+  font-variant-numeric: tabular-nums;\n+}\n+\n+.memory-game__restart {\n+  padding: 8px 18px;\n+  border: 1px solid #17664e;\n+  border-radius: 999px;\n+  background: transparent;\n+  color: #17664e;\n+  font: inherit;\n+  font-size: 15px;\n+  cursor: pointer;\n+  transition: background-color 0.2s ease, color 0.2s ease;\n+}\n+\n+.memory-game__restart:hover,\n+.memory-game__restart:focus-visible {\n+  background: #17664e;\n+  color: #fffdf8;\n+}\n+\n+.memory-game__restart:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 3px;\n+}\n+\n+.memory-game__result {\n+  margin: 0 0 20px;\n+  color: #626c65;\n+  font-size: 15px;\n+  line-height: 1.7;\n+}\n+\n+.memory-game__grid {\n+  display: grid;\n+  grid-template-columns: repeat(4, minmax(0, 1fr));\n+  gap: 12px;\n+  margin: 0;\n+  padding: 0;\n+  list-style: none;\n+}\n+\n+.memory-game__cell {\n+  display: block;\n+}\n+\n+.memory-card {\n+  display: block;\n+  width: 100%;\n+  padding: 0;\n+  border: 0;\n+  background: none;\n+  color: inherit;\n+  font: inherit;\n+  cursor: pointer;\n+  -webkit-tap-highlight-color: transparent;\n+}\n+\n+.memory-card:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 3px;\n+}\n+\n+.memory-card__inner {\n+  position: relative;\n+  display: block;\n+  width: 100%;\n+  aspect-ratio: 1;\n+  transform-style: preserve-3d;\n+  transition: transform 0.45s ease;\n+}\n+\n+.memory-card--flipped .memory-card__inner {\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card__face {\n+  position: absolute;\n+  inset: 0;\n+  display: grid;\n+  place-items: center;\n+  padding: 10px;\n+  border-radius: 14px;\n+  backface-visibility: hidden;\n+  -webkit-backface-visibility: hidden;\n+  text-align: center;\n+  font-size: 15px;\n+  line-height: 1.35;\n+  overflow-wrap: anywhere;\n+}\n+\n+.memory-card__face--back {\n+  background: #17664e;\n+}\n+\n+.memory-card__face--back::after {\n+  content: \"\";\n+  width: 24%;\n+  aspect-ratio: 1;\n+  border: 2px solid rgba(255, 253, 248, 0.55);\n+  border-radius: 50%;\n+}\n+\n+.memory-card__face--front {\n+  border: 1px solid #17664e;\n+  background: #fffdf8;\n+  color: #222d29;\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card--matched .memory-card__face--front {\n+  border-color: #8fb8a6;\n+  background: #e8f1ec;\n+  color: #0f4a39;\n+}\n+\n+@media (max-width: 600px) {\n+  .memory-game__grid {\n+    grid-template-columns: repeat(3, minmax(0, 1fr));\n+    gap: 10px;\n+  }\n+\n+  .memory-card__face {\n+    padding: 8px;\n+    font-size: 14px;\n+  }\n+}\n+\n+@media (prefers-reduced-motion: reduce) {\n+  .memory-card__inner {\n+    transition: none;\n+  }\n+}\n",
   "play": "builds/r1007-3/index.html#memory-game"
  },
  {
   "id": "r1007-4",
   "label": "第 4 轮",
   "status": "void",
   "void_reason": "执行到 147 秒，上游返回 400，回合中断，没有任何改动。按约定作废，不计入统计。",
   "props": {},
   "findings": [],
   "seconds": {
    "plan": 120,
    "exec": 147
   },
   "diffstat": "",
   "plan": "交互式选择工具在当前模式不可用，我直接用文字问你。\n\n## 需要你决定的三件事\n\n**Q1 — 牌面上放什么内容？**\n- **A（推荐）用主页自己的内容**：3 个项目名 + 1 个身份/技能短语，配成 4 对 8 张牌。游戏让访客顺手记住刚读过的内容，和主页有真实关联，而不是纯装饰。\n- B 通用 emoji 配对：纯娱乐，与主页脱钩。好处是访客零阅读负担就能玩，坏处是以后换名字要改两处。\n- C 只用 3 个项目名：3 对 6 张牌，最精简，全部来自项目区，但一局偏短。\n\n**Q2 — 游戏功能做到什么程度？**\n- **A（推荐）计数 + 计时 + 翻错自动翻回 + 配对后禁用 + 胜利提示和「再来一局」**：完整且克制，是个人主页小游戏的合理体量。\n- B 在 A 基础上加开局 1.2 秒亮出全部牌：对第一次来的访客更友好，少一点「怎么翻都错」的挫败感。\n- C 极简版：只做翻牌配对，不计数不计时不重开。代码最少，但玩完没有再来一局的动力。\n\n**Q3 — 游戏区块放哪、要不要入口按钮？**\n- **A（推荐）项目区之后 + 首屏加按钮**：新增「记忆翻牌」区，首屏按钮旁加一个「试玩翻牌记忆」跳过去。访客容易发现，对第 1 章的首屏只是增量添加，没有推翻「查看项目」的原决定。\n- B 只在页面底部加区块：完全不动首屏，对已确认的首页 v0 改动最小，但访客可能滚到底才发现有游戏。\n- C 放在项目区之前：不推荐，游戏是互动内容，会抢走访客读项目的注意力。\n\n其余我已经按现有代码风格定了：新建 `src/MemoryGame.tsx` 组件（App.tsx 只负责渲染，不塞游戏状态），样式追加到现有的 `src/index.css` 保持单一样式表，牌面用文字不引图标包，全键盘可玩 + `prefers-reduced-motion` 关动效。\n\n你回复 A/B/C 就行，Q1、Q2、Q3 各一个。确认后我再动代码，最后只跑 `npm run build`。",
   "answer": "",
   "timeline": [],
   "diff": ""
  },
  {
   "id": "r1007-5",
   "label": "第 5 轮",
   "status": "ok",
   "props": {
    "pairs": {
     "v": "6 对 · 图案"
    },
    "moves": {
     "v": "翻两张算一步"
    },
    "timer": {
     "v": "有"
    },
    "restart": {
     "v": "只在通关后出现",
     "tag": "ai-rule"
    },
    "lock_plan": {
     "v": "写了（“同时最多 2 张”），没问"
    },
    "lock_code": {
     "v": "忽略",
     "tag": "ai-rule"
    },
    "asked": {
     "v": "入口、卡面与牌数、功能"
    },
    "checkpoints": {
     "v": "是",
     "tag": "leak"
    }
   },
   "findings": [
    {
     "tag": "defect",
     "title": "配上 3 对就显示“全部配对完成”",
     "detail": "已配对数数的是牌（每对 2 张），通关条件却和对数 6 比较；计数也从 0/6 直接跳到 2/6。",
     "where": "src/MemoryGame.tsx:47",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 47,
       "start": 43,
       "code": [
        "  const [isLocked, setIsLocked] = useState(false)",
        "  const revealTimer = useRef<number | null>(null)",
        "",
        "  const matchedCount = deck.reduce((total, card) => total + (card.matched ? 1 : 0), 0)",
        "  const isWon = matchedCount === PAIR_COUNT",
        "",
        "  useEffect(() => {",
        "    if (!isRunning || isWon) return",
        ""
       ]
      }
     ]
    },
    {
     "tag": "ai-rule",
     "title": "局中不能重开",
     "detail": "“再来一次”只在通关面板里出现。",
     "where": "src/MemoryGame.tsx:129",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 129,
       "start": 125,
       "code": [
        "      {isWon && (",
        "        <p className=\"memory__result\" role=\"status\">",
        "          <span>全部配对完成，用时 {formatTime(seconds)}，翻了 {moves} 步。</span>",
        "          <button className=\"memory__restart\" type=\"button\" onClick={restart}>",
        "            再来一次",
        "          </button>",
        "        </p>",
        "      )}",
        ""
       ]
      }
     ]
    },
    {
     "tag": "ai-rule",
     "title": "等待翻回时点第三张：直接忽略",
     "detail": "计划写了“同时最多 2 张”，没问人。",
     "where": "src/MemoryGame.tsx:77",
     "snippets": [
      {
       "file": "src/MemoryGame.tsx",
       "line": 77,
       "start": 73,
       "code": [
        "    setIsLocked(false)",
        "  }",
        "",
        "  function handleFlip(index: number) {",
        "    if (isLocked || isWon) return",
        "",
        "    const card = deck[index]",
        "    if (card.matched || flipped.includes(index)) return",
        ""
       ]
      }
     ]
    }
   ],
   "seconds": {
    "plan": 49,
    "exec": 294
   },
   "diffstat": "src/App.tsx        |  21 +++++-\n src/MemoryGame.tsx | 167 ++++++++++++++++++++++++++++++++++++++++++++++\n src/index.css      | 189 +++++++++++++++++++++++++++++++++++++++++++++++++++--\n 3 files changed, 370 insertions(+), 7 deletions(-)",
   "plan": "看完仓库了。现在是第 3 章的起点状态：单页 React + TS + Vite，`src/App.tsx` 里只有 hero + 项目区两个区块，`index.css` 用暖纸色 + 绿主色（`#17664e`），无路由、无额外依赖、卡片区已在 360/768/1440 三档验证过。`CHECKPOINTS.md` 里已有 `ch03-complete` = \"加入本章小游戏后的参考快照\"，正好对上这个任务。\n\n## 计划\n\n**范围**：只动 3 个文件，不加依赖、不碰 `setup-check/`、不发布、不改现有文字与交互。\n\n1. **`src/MemoryGame.tsx`（新建）**：翻牌组件。Fisher–Yates 洗牌 → 6 对共 12 张；点一张翻开，同时最多 2 张；两张比对，配对成功保持翻开并禁用，不匹配约 800ms 后翻回；记录步数与用时；全部配对显示胜利面板（用时 + 步数 + 再来一次）。卡面用 `<button>`，带 `aria-label` 和 `focus-visible` 样式；翻牌 3D 旋转走 CSS，在现有 `prefers-reduced-motion` 块里关掉过渡。计时用 `setInterval`，组件卸载时清理。\n2. **`src/App.tsx`（改）**：项目区之后追加 `<section id=\"memory\">`，并按上面 Q1 的决定决定首屏是否加锚点按钮。现有 `projects` 数据、hero、项目区逻辑一字不动。\n3. **`src/index.css`（改）**：追加 `.memory` 系列样式，沿用现有配色变量（边框 `#d5dcd3`、卡片底 `#fffdf8`、主色 `#17664e`）。响应式断点：≥720px 四列、480–719px 三列、<480px 两列，卡片用 `aspect-ratio` 保证不撑高也不溢出。\n\n**验证**：`npm run build`（含 `tsc -b`）退出码为 0、`dist/` 不含环境页。浏览器试玩和三档宽度按你说的由你来做，我只保证代码里三档断点都写了。\n\n## 需要你定的三件事\n\n**Q1 — 游戏放在哪？**\n推荐：主页底部新增 `#memory` 区块，首屏加一个次级锚点按钮「玩翻牌记忆」跳过去。理由：和现有 `#projects` 锚点模式完全一致，零新依赖、零路由，页面结构不膨胀。备选是独立路由/单独页面（要引路由库，超出「不加依赖」的默认）。\n\n**Q2 — 卡面内容和牌数？**\n推荐：emoji 图案 + 6 对 12 张（4×3），固定单一难度。理由：仓库约定不用远程图片和图标包，emoji 零素材成本就能视觉区分。备选是中文词卡（更好玩但需要你提供词表）或 8 对 16 张（4×4，难度更高但窄屏要降到两列才不挤）。\n\n**Q3 — 功能做到哪一层？**\n推荐：核心循环 + 步数/用时 + 胜利面板 + 重来一次，配键盘可达和 reduced-motion；**不**写 localStorage 最佳成绩。理由：这一章的重点是把功能接进主页，不引入持久化数据；最佳成绩要存就意味着要处理「无痕模式/禁用存储」的情况。备选是加上 localStorage 最佳成绩（约 15 行代码，我可以直接带上）。\n\n确认（或直接说「都按推荐」）之后我就开工。",
   "answer": "改完了，`npm run build` 通过（`tsc -b` + `vite build`，退出码 0，419ms）。\n\n**改动范围**（3 个文件，无新依赖，未碰 `setup-check/`）\n\n- `src/MemoryGame.tsx`（新建）— 6 对 12 张卡、Fisher–Yates 洗牌、最多同时翻开 2 张；配对 420ms 后锁定为已完成，不匹配 820ms 后翻回；统计步数 / 用时 / 配对数，全部配对后显示胜利面板和「再来一次」。计时器和判定定时器都在卸载时清理，StrictMode 下不会泄漏。\n- `src/App.tsx:22` — 首屏按钮改成两个锚点（原「查看项目」样式不变，新增幽灵样式的「玩翻牌记忆」），项目区之后追加 `#memory` 区块。原有文字、项目数据、交互一字未改。\n- `src/index.css` — 追加 `.memory` 系列样式，配色沿用现有的 `#17664e` / `#fffdf8` / `#d5dcd3`；卡背是 CSS 点阵纹理，卡面 `aspect-ratio: 4/5`，翻牌用 `rotateY(180deg)` 的 3D 过渡。\n\n**你检查时可以对照的预期**\n\n| 视口 | 牌阵 | 单卡尺寸 |\n| --- | --- | --- |\n| 1440×900 | 4 列 |约 205×256 |\n| 768×1024 | 3 列（≤719px 断点） | 约 231×288 |\n| 360×800 | 2 列（≤479px 断点） | 约 153×191 |\n\n断点用 `minmax(0, 1fr)` + `box-sizing: border-box`，三档都不该有横向溢出。\n\n**两点说明**\n\n- 按推荐做法，**没有**写 localStorage 最佳成绩，也没做难度切换；键盘可达（每张卡是 `<button>`，带 `aria-label` 状态描述）和 `prefers-reduced-motion` 下关闭翻牌过渡都保留了。计时数字没放进 live region，避免每秒播报一次，胜利文案用 `role=\"status\"` 播一次。\n- `dist/` 只有 3 个产物文件，grep 确认没有环境检查页内容；未跟踪的只有 `src/MemoryGame.tsx` 一个新文件。要不要我提交并打 `ch03-complete` 标签，等你试玩结果出来再说。",
   "timeline": [
    {
     "k": "msg",
     "t": "计划已确认，开始实现。先看一下 tsconfig 的严格选项，避免 build 阶段才发现类型问题。"
    },
    {
     "k": "cmd",
     "t": "cat tsconfig.app.json",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "ES2022 + strict，`flatMap` 可用。现在写组件。"
    },
    {
     "k": "cmd",
     "t": "cat > src/MemoryGame.tsx <<'EOF'  … 另 169 行",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Now wiring it into `App.tsx` and extending the styles."
    },
    {
     "k": "file",
     "t": "update App.tsx"
    },
    {
     "k": "file",
     "t": "update index.css"
    },
    {
     "k": "cmd",
     "t": "tail -30 src/index.css",
     "exit": 0
    },
    {
     "k": "file",
     "t": "update index.css"
    },
    {
     "k": "msg",
     "t": "Now the build."
    },
    {
     "k": "cmd",
     "t": "npm run build 2>&1; echo \"EXIT=$?",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "Build passes in 419ms with the rollup pin. Let me verify the artifact scope and diff."
    },
    {
     "k": "cmd",
     "t": "echo \\\"=== dist ===\\\"; find dist -type f | sort; echo; echo \\\"=== setup-check leaked? ===\\\"; grep -rl \\\"欢迎来到\\\\|setup-check\\\" dist/ || echo \\\"none\\\"; echo; echo ",
     "exit": 0
    },
    {
     "k": "cmd",
     "t": "cat src/App.tsx; echo \\\"=== css brace balance ===\\\"; awk '{o+=gsub(/{/,\\\"{\\\"); c+=gsub(/}/,\\\"}\\\")} END {print \\\"open=\\\"o\\\" close=\\\"c}' src/index.css",
     "exit": 0
    },
    {
     "k": "msg",
     "t": "改完了，`npm run build` 通过（`tsc -b` + `vite build`，退出码 0，419ms）。  **改动范围**（3 个文件，无新依赖，未碰 `setup-check/`）  - `src/MemoryGame.tsx`（新建）— 6 对 12 张卡、Fisher–Yates 洗牌、最多同时…"
    }
   ],
   "diff": "diff --git a/src/App.tsx b/src/App.tsx\nindex bd92a25..6cf0a0b 100644\n--- a/src/App.tsx\n+++ b/src/App.tsx\n@@ -1,3 +1,5 @@\n+import MemoryGame from './MemoryGame'\n+\n const projects = [\n   {\n     name: '红绿灯感知量产',\n@@ -19,9 +21,14 @@ export default function App() {\n       <header className=\"hero\">\n         <h1 className=\"hero__name\">示例同学</h1>\n         <p className=\"hero__intro\">正在学习 AI 协作开发。</p>\n-        <a className=\"hero__action\" href=\"#projects\">\n-          查看项目\n-        </a>\n+        <div className=\"hero__actions\">\n+          <a className=\"hero__action\" href=\"#projects\">\n+            查看项目\n+          </a>\n+          <a className=\"hero__action hero__action--ghost\" href=\"#memory\">\n+            玩翻牌记忆\n+          </a>\n+        </div>\n       </header>\n \n       <section className=\"projects\" id=\"projects\" aria-labelledby=\"projects-title\">\n@@ -37,6 +44,14 @@ export default function App() {\n           ))}\n         </ul>\n       </section>\n+\n+      <section className=\"memory\" id=\"memory\" aria-labelledby=\"memory-title\">\n+        <h2 className=\"memory__title\" id=\"memory-title\">\n+          记忆翻牌\n+        </h2>\n+        <p className=\"memory__intro\">翻开两张卡片，把六个图案一一配对。</p>\n+        <MemoryGame />\n+      </section>\n     </>\n   )\n }\ndiff --git a/src/MemoryGame.tsx b/src/MemoryGame.tsx\nnew file mode 100644\nindex 0000000..14cd03f\n--- /dev/null\n+++ b/src/MemoryGame.tsx\n@@ -0,0 +1,167 @@\n+import { useEffect, useRef, useState } from 'react'\n+\n+const SYMBOLS = ['🚀', '🧭', '🛠️', '🧩', '🔬', '🗺️'] as const\n+\n+const PAIR_COUNT = SYMBOLS.length\n+const MATCH_HOLD_MS = 420\n+const MISMATCH_HOLD_MS = 820\n+\n+type Card = {\n+  pairId: number\n+  symbol: string\n+  matched: boolean\n+}\n+\n+function buildDeck(): Card[] {\n+  const cards = SYMBOLS.flatMap((symbol, pairId) => [\n+    { pairId, symbol, matched: false },\n+    { pairId, symbol, matched: false },\n+  ])\n+\n+  for (let i = cards.length - 1; i > 0; i -= 1) {\n+    const j = Math.floor(Math.random() * (i + 1))\n+    const swap = cards[i]\n+    cards[i] = cards[j]\n+    cards[j] = swap\n+  }\n+\n+  return cards\n+}\n+\n+function formatTime(totalSeconds: number) {\n+  const minutes = Math.floor(totalSeconds / 60)\n+  const seconds = totalSeconds % 60\n+  return `${minutes}:${String(seconds).padStart(2, '0')}`\n+}\n+\n+export default function MemoryGame() {\n+  const [deck, setDeck] = useState<Card[]>(buildDeck)\n+  const [flipped, setFlipped] = useState<number[]>([])\n+  const [moves, setMoves] = useState(0)\n+  const [seconds, setSeconds] = useState(0)\n+  const [isRunning, setIsRunning] = useState(false)\n+  const [isLocked, setIsLocked] = useState(false)\n+  const revealTimer = useRef<number | null>(null)\n+\n+  const matchedCount = deck.reduce((total, card) => total + (card.matched ? 1 : 0), 0)\n+  const isWon = matchedCount === PAIR_COUNT\n+\n+  useEffect(() => {\n+    if (!isRunning || isWon) return\n+\n+    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000)\n+    return () => window.clearInterval(timer)\n+  }, [isRunning, isWon])\n+\n+  useEffect(\n+    () => () => {\n+      if (revealTimer.current !== null) window.clearTimeout(revealTimer.current)\n+    },\n+    [],\n+  )\n+\n+  function restart() {\n+    if (revealTimer.current !== null) {\n+      window.clearTimeout(revealTimer.current)\n+      revealTimer.current = null\n+    }\n+    setDeck(buildDeck())\n+    setFlipped([])\n+    setMoves(0)\n+    setSeconds(0)\n+    setIsRunning(false)\n+    setIsLocked(false)\n+  }\n+\n+  function handleFlip(index: number) {\n+    if (isLocked || isWon) return\n+\n+    const card = deck[index]\n+    if (card.matched || flipped.includes(index)) return\n+\n+    setIsRunning(true)\n+\n+    const nextFlipped = [...flipped, index]\n+    setFlipped(nextFlipped)\n+\n+    if (nextFlipped.length < 2) return\n+\n+    setMoves((value) => value + 1)\n+\n+    const [firstIndex, secondIndex] = nextFlipped\n+    const isMatch = deck[firstIndex].pairId === deck[secondIndex].pairId\n+    setIsLocked(true)\n+\n+    revealTimer.current = window.setTimeout(() => {\n+      revealTimer.current = null\n+\n+      if (isMatch) {\n+        setDeck((current) =>\n+          current.map((item, i) =>\n+            i === firstIndex || i === secondIndex ? { ...item, matched: true } : item,\n+          ),\n+        )\n+      }\n+\n+      setFlipped([])\n+      setIsLocked(false)\n+    }, isMatch ? MATCH_HOLD_MS : MISMATCH_HOLD_MS)\n+  }\n+\n+  return (\n+    <>\n+      <div className=\"memory__meta\">\n+        <p className=\"memory__stat\">\n+          步数 <strong>{moves}</strong>\n+        </p>\n+        <p className=\"memory__stat\">\n+          用时 <strong>{formatTime(seconds)}</strong>\n+        </p>\n+        <p className=\"memory__stat\">\n+          配对 <strong>{matchedCount}/{PAIR_COUNT}</strong>\n+        </p>\n+      </div>\n+\n+      {isWon && (\n+        <p className=\"memory__result\" role=\"status\">\n+          <span>全部配对完成，用时 {formatTime(seconds)}，翻了 {moves} 步。</span>\n+          <button className=\"memory__restart\" type=\"button\" onClick={restart}>\n+            再来一次\n+          </button>\n+        </p>\n+      )}\n+\n+      <ul className=\"memory__board\">\n+        {deck.map((card, index) => {\n+          const isOpen = card.matched || flipped.includes(index)\n+          const className = [\n+            'memory-card',\n+            isOpen ? 'is-open' : '',\n+            card.matched ? 'is-matched' : '',\n+          ]\n+            .filter(Boolean)\n+            .join(' ')\n+\n+          const state = card.matched ? '已配对' : isOpen ? `图案 ${card.symbol}` : '未翻开'\n+\n+          return (\n+            <li className=\"memory__slot\" key={index}>\n+              <button\n+                className={className}\n+                type=\"button\"\n+                onClick={() => handleFlip(index)}\n+                disabled={card.matched}\n+                aria-label={`第 ${index + 1} 张卡片，${state}`}\n+              >\n+                <span className=\"memory-card__inner\" aria-hidden=\"true\">\n+                  <span className=\"memory-card__back\" />\n+                  <span className=\"memory-card__front\">{card.symbol}</span>\n+                </span>\n+              </button>\n+            </li>\n+          )\n+        })}\n+      </ul>\n+    </>\n+  )\n+}\ndiff --git a/src/index.css b/src/index.css\nindex 5e0d9e2..b3df493 100644\n--- a/src/index.css\n+++ b/src/index.css\n@@ -20,6 +20,10 @@ html {\n   html {\n     scroll-behavior: auto;\n   }\n+\n+  .memory-card__inner {\n+    transition: none;\n+  }\n }\n \n body {\n@@ -34,7 +38,8 @@ body {\n }\n \n .hero,\n-.projects {\n+.projects,\n+.memory {\n   width: min(100%, 860px);\n   margin-inline: auto;\n }\n@@ -57,8 +62,15 @@ body {\n   line-height: 1.8;\n }\n \n+.hero__actions {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 12px;\n+}\n+\n .hero__action {\n-  display: inline-block;\n+  display: inline-flex;\n+  align-items: center;\n   padding: 12px 24px;\n   border: 1px solid #17664e;\n   border-radius: 999px;\n@@ -75,18 +87,32 @@ body {\n   border-color: #0f4a39;\n }\n \n+.hero__action--ghost {\n+  background: transparent;\n+  color: #17664e;\n+}\n+\n+.hero__action--ghost:hover,\n+.hero__action--ghost:focus-visible {\n+  background: #e6efe9;\n+  border-color: #0f4a39;\n+  color: #0f4a39;\n+}\n+\n .hero__action:focus-visible {\n   outline: 2px solid #222d29;\n   outline-offset: 3px;\n }\n \n-.projects {\n+.projects,\n+.memory {\n   padding-top: 40px;\n   border-top: 1px solid #d5dcd3;\n   scroll-margin-top: 32px;\n }\n \n-.projects__title {\n+.projects__title,\n+.memory__title {\n   margin: 0 0 20px;\n   font-size: 18px;\n }\n@@ -118,6 +144,149 @@ body {\n   line-height: 1.8;\n }\n \n+.memory__intro {\n+  margin: -8px 0 24px;\n+  color: #626c65;\n+  font-size: 16px;\n+  line-height: 1.8;\n+}\n+\n+.memory__meta {\n+  display: flex;\n+  flex-wrap: wrap;\n+  gap: 8px 24px;\n+  margin: 0 0 20px;\n+  color: #626c65;\n+  font-size: 15px;\n+}\n+\n+.memory__stat {\n+  margin: 0;\n+}\n+\n+.memory__stat strong {\n+  color: #222d29;\n+  font-variant-numeric: tabular-nums;\n+}\n+\n+.memory__result {\n+  display: flex;\n+  flex-wrap: wrap;\n+  align-items: center;\n+  gap: 12px 20px;\n+  margin: 0 0 20px;\n+  padding: 16px 20px;\n+  border: 1px solid #7ea893;\n+  border-radius: 16px;\n+  background: #e6efe9;\n+  font-size: 16px;\n+}\n+\n+.memory__restart {\n+  padding: 8px 18px;\n+  border: 1px solid #17664e;\n+  border-radius: 999px;\n+  background: #17664e;\n+  color: #fffdf8;\n+  font: inherit;\n+  font-size: 15px;\n+  cursor: pointer;\n+  transition: background-color 0.2s ease, border-color 0.2s ease;\n+}\n+\n+.memory__restart:hover,\n+.memory__restart:focus-visible {\n+  background: #0f4a39;\n+  border-color: #0f4a39;\n+}\n+\n+.memory__restart:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 3px;\n+}\n+\n+.memory__board {\n+  display: grid;\n+  grid-template-columns: repeat(4, minmax(0, 1fr));\n+  gap: 14px;\n+  margin: 0;\n+  padding: 0;\n+  list-style: none;\n+}\n+\n+.memory__slot {\n+  aspect-ratio: 4 / 5;\n+  margin: 0;\n+  padding: 0;\n+}\n+\n+.memory-card {\n+  display: block;\n+  width: 100%;\n+  height: 100%;\n+  padding: 0;\n+  border: 0;\n+  background: none;\n+  font: inherit;\n+  cursor: pointer;\n+  perspective: 800px;\n+  -webkit-tap-highlight-color: transparent;\n+}\n+\n+.memory-card:focus-visible {\n+  outline: 2px solid #222d29;\n+  outline-offset: 4px;\n+}\n+\n+.memory-card:disabled {\n+  cursor: default;\n+}\n+\n+.memory-card__inner {\n+  position: relative;\n+  display: block;\n+  width: 100%;\n+  height: 100%;\n+  transform-style: preserve-3d;\n+  transition: transform 0.4s ease;\n+}\n+\n+.memory-card.is-open .memory-card__inner {\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card__front,\n+.memory-card__back {\n+  position: absolute;\n+  inset: 0;\n+  display: grid;\n+  place-items: center;\n+  border-radius: 14px;\n+  backface-visibility: hidden;\n+  -webkit-backface-visibility: hidden;\n+}\n+\n+.memory-card__back {\n+  border: 1px solid #d5dcd3;\n+  background-color: #fffdf8;\n+  background-image: radial-gradient(#c8d2c6 1.5px, transparent 1.5px);\n+  background-position: 7px 7px;\n+  background-size: 14px 14px;\n+}\n+\n+.memory-card__front {\n+  border: 1px solid #17664e;\n+  background: #fffdf8;\n+  font-size: clamp(28px, 6vw, 40px);\n+  line-height: 1;\n+  transform: rotateY(180deg);\n+}\n+\n+.memory-card.is-matched .memory-card__front {\n+  border-color: #7ea893;\n+  background: #e6efe9;\n+}\n+\n @media (max-width: 600px) {\n   body {\n     padding: 40px 20px;\n@@ -127,3 +296,15 @@ body {\n     padding: 24px;\n   }\n }\n+\n+@media (max-width: 719px) {\n+  .memory__board {\n+    grid-template-columns: repeat(3, minmax(0, 1fr));\n+  }\n+}\n+\n+@media (max-width: 479px) {\n+  .memory__board {\n+    grid-template-columns: repeat(2, minmax(0, 1fr));\n+  }\n+}\n",
   "play": "builds/r1007-5/index.html#memory"
  }
 ],
 "prompt": "在主页加入一个记忆翻牌小游戏。\n先告诉我你的计划；有需要我决定的问题，最多问三个，每个问题附上你推荐的做法。我确认后再改。\n完成标准：你跑 build 成功；浏览器里的试玩和三种宽度的检查由我来做，你不用自己打开浏览器。",
 "confirm": "确认，按计划执行；你问的问题都按你推荐的做法处理。"
};
