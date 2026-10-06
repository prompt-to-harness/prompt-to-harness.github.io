window.lesson = {
  "title": "挑一个缺陷，按证据修",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.03",
  "summary": "先复现，再让 Codex 只调查，由人定规则，最后最小修改；调查常常比报告看得更深。",
  "scenes": [
    {
      "id": "p15",
      "segment": "挑一个",
      "layout": "lesson-cover",
      "label": "挑哪一个",
      "title": "挑一个缺陷，按证据修",
      "kicker": "第 3 章 · 3.3 · 开篇",
      "lead": "从 3.2 的问题清单里挑最先看到、最能稳定复现的那一条：翻错时步数不动",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:10px\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">缺陷</span><h3>一局打不完</h3><p>12 张牌找不到一对</p></div><div class=\"p-join\" data-reveal=\"1\"><span>先挑</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">最先看到的现象</span><h3>翻错时步数不动</h3><p>每次都能复现</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">流程：<b>复现 → 只读调查 → 人定规则 → 最小修改 → 复验</b></div>",
      "steps": [
        "清单",
        "挑一条",
        "这一节的流程"
      ],
      "script": [
        "回到 3.2 的问题清单。缺陷一栏里有“一局打不完”；还有一条最先看到、说不清性质的现象：翻错时步数不动。",
        "我们先挑它：它每次都能复现，影响也明确，页面上的步数永远是 0。真实的调试常常就是这样，从最先看到的现象开始，而不是从最严重的那个开始。",
        "这一节的流程是五步：复现、让 Codex 只读调查、由人定规则、最小修改、复验。重点在中间两步。"
      ],
      "teaching": [],
      "source": "index.html#p15",
      "seconds": 90
    },
    {
      "id": "p16",
      "segment": "复现",
      "label": "能稳定复现吗",
      "title": "先复现三次，再写报告",
      "kicker": "第 3 章 · 3.3 · 复现",
      "lead": "同样的步骤做三次，结果都一样，才算稳定复现；然后写成报告：步骤、期望、实际。不能稳定复现，就先别修。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,.5fr) minmax(0,1.6fr) minmax(0,.8fr);row-gap:10px;--rf:21px\"><div class=\"is-head\" data-reveal=\"0\"><span>次</span><span>步骤</span><span>步数</span></div><div data-reveal=\"0\"><span class=\"p-cell\">1</span><span class=\"p-cell\">开新一局 → 翻开两张不同的牌 → 等它们翻回</span><span class=\"p-cell\">0</span></div><div data-reveal=\"1\"><span class=\"p-cell\">2、3</span><span class=\"p-cell\">同上</span><span class=\"p-cell\">0、0</span></div></div><div class=\"p-code\" data-reveal=\"2\" style=\"margin-top:12px\"><div class=\"p-code-head\"><span>缺陷报告（讲师写的）</span></div><pre><span style=\"display:block\">期望：步数变成 1（页面写着“看看你要用多少步”）</span><span style=\"display:block\">实际：步数还是 0；<span class=\"hl\">只有配对成功时步数才加 1</span></span></pre></div>",
      "steps": [
        "第一次",
        "再做两次",
        "写成报告"
      ],
      "script": [
        "先复现。开新一局，翻开两张不同的牌，等它们翻回去：步数 0。",
        "再做两次，都是 0。三次结果一样，这才算稳定复现。",
        "然后写成报告：步骤、期望、实际。讲师写的报告里，实际这一栏多写了一句：“只有配对成功时步数才加 1”。请记住这一句，它待会儿会被 Codex 问住。请暂停视频，复现你挑的那一条，写成报告。"
      ],
      "teaching": [],
      "source": "index.html#p16",
      "seconds": 90
    },
    {
      "id": "p17",
      "segment": "只读调查",
      "label": "先让 Codex 只调查",
      "title": "先让 Codex 只调查，不改代码",
      "kicker": "第 3 章 · 3.3 · 只读调查",
      "lead": "用只读权限，要求它列出可验证的假设、代码位置和几种改法的代价，等我们确认。两次排练，它都查出了报告里没有的东西。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);align-items:start\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">请求 · read-only</span><ol class=\"p-notes\" style=\"margin-top:8px\"><li><span><b>复现步骤、期望、实际</b><small>就是刚才的报告</small></span></li><li><span><b>可以验证的假设</b><small>每条写出怎样验证</small></span></li><li><span><b>代码位置</b></span></li><li><span><b>几种改法和代价</b><small>我确认后再改</small></span></li></ol></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">Codex 的结论</span><p class=\"p-big\" style=\"font-weight:600;margin-top:8px\">有两个独立缺陷，第二个让第一个无法单独验证</p><ol class=\"p-notes\"><li data-reveal=\"1\"><span><b>步数只在配对成功的分支里加</b></span></li><li data-reveal=\"2\"><span><b>12 个词各不相同，一对都配不上</b><small>配对分支永远走不到</small></span></li></ol></div></div><p class=\"source-note\">调查与修复来自 2026-10-06 的两次排练（courseware/ch03/materials/mainline/debug-3.3.sh），两次调查结论一致。来自讲师机器上的排练运行（2026-10-06，Codex 0.160.0–0.160.1 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "repro": {
        "label": "请求原文",
        "steps": [
          {
            "text": "把这段请求发给 Codex（只读权限）",
            "code": "记忆翻牌里有一个能复现的问题：\n步骤：开新一局 → 翻开两张不一样的牌 → 等它们翻回去。\n期望：步数变成 1（页面写着“看看你要用多少步”）。\n实际：步数还是 0；只有配对成功时步数才加 1。\n先只调查，不要改代码：\n1. 列出可能的原因，每条写成可以验证的假设，并说明怎样验证；\n2. 指出相关的代码位置；\n3. 给出几种改法和各自的代价。我确认后再改。"
          }
        ],
        "note": ""
      },
      "steps": [
        "只读请求",
        "第一层",
        "第二层"
      ],
      "script": [
        "把报告交给 Codex，但只给它只读权限，并且提三个要求：列出可能的原因，每条写成可以验证的假设；指出代码位置；给出几种改法和代价，我们确认后再改。",
        "它的结论是：有两个独立缺陷。第一个和我们看到的一致：步数只在配对成功的分支里加 1，翻错的分支里没有。",
        "第二个是报告里没有的：12 张牌是 12 个互不相同的词，一对都配不上，所以配对成功的分支永远走不到。它说，第二个让第一个无法单独验证。这和 3.2 里“一局打不完”对上了。讲师排练了两次，两次调查都查出了这一层。请暂停视频，用只读权限把你的报告交给 Codex。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "调查回答以录制实际为准；保存原文进记录。排练两次的完整回答见 materials/mainline/reference/。"
        }
      ],
      "source": "index.html#p17",
      "seconds": 90
    },
    {
      "id": "p18",
      "segment": "只读调查",
      "label": "根因在哪",
      "title": "用代码位置验证，不靠“听起来合理”",
      "kicker": "第 3 章 · 3.3 · 只读调查",
      "lead": "打开它指出的位置自己看：词表 12 个词；生成牌组时每个词只生成一张；配对判断要求两张的词相同，永远不成立；步数只在这个分支里加。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:34px\"><div class=\"p-fn\">src/components/MemoryGame.tsx</div><div class=\"p-ln\"><i>4</i><code>const CARD_FACES = [<span class=\"s\">'需求'</span>, <span class=\"s\">'迭代'</span>, …共 12 个]</code></div><div class=\"p-ln\"><i>43</i><code>CARD_FACES.map((face, id) =&gt; ({ id, face, … }))</code></div><div class=\"p-ln\"><i>107</i><code>if (first.face === second.face) {</code></div><div class=\"p-ln\"><i>116</i><code>    setMoves((prev) =&gt; prev + 1)</code></div><div class=\"p-ln\"><i>121</i><code>}  // 翻错：翻回，没有计步</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>12 个词</b><small>各不相同</small></span></li><li data-reveal=\"1\"><span><b>每词一张</b><small>map 只做一对一</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>永远不相等</b><small>配对分支走不到</small></span></li><li data-reveal=\"3\"><span><b>步数只在这里加</b><small>所以永远是 0</small></span></li></ol></div>",
      "steps": [
        "词表",
        "生成牌组",
        "配对判断",
        "计步"
      ],
      "script": [
        "不要因为它说得头头是道就相信，打开它指出的位置自己看。第 4 行起是词表，12 个词，各不相同。",
        "第 43 行生成牌组：每个词生成一张牌，一共 12 张。没有复制，所以不成对。",
        "第 107 行判断两张牌的词是否相同。在这副牌里，这个条件永远不成立。",
        "第 116 行，步数只在这个分支里加 1。翻错的分支没有计步。两层原因连起来，就解释了我们看到的一切：步数永远是 0，剩余永远是 6 对，这局永远打不完。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "行号来自排练实现；学员的实现不同，按 Codex 指出的位置读。"
        }
      ],
      "source": "index.html#p18",
      "seconds": 120
    },
    {
      "id": "p19",
      "segment": "观察与推断",
      "label": "我的报告哪里不对",
      "title": "观察到的，还是从代码推的？",
      "kicker": "第 3 章 · 3.3 · 观察与推断",
      "lead": "Codex 反问报告里的那一句。它说得对：在这副牌里，配对成功根本不可能发生，那一句是讲师读代码推出来的，不是在页面上看到的。报告里要把观察和推断分开写。",
      "html": "<div class=\"p-claim\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.1fr)\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">报告里的一句</span><p class=\"p-big\" style=\"font-weight:500;margin-top:8px\">“只有配对成功时步数才加 1”</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">Codex 反问</span><p style=\"margin-top:8px;line-height:1.6\">这是在页面上看到的，还是从代码推的？按当前牌堆，<b>不可能观察到配对成功</b></p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\" data-reveal=\"2\"><div class=\"p-box is-soft\" data-role=\"ok\"><h3>观察</h3><p>翻错，步数是 0（三次）</p></div><div class=\"p-box is-soft\" data-role=\"ink\"><h3>推断（要标出来）</h3><p>配对成功时会加 1</p></div></div>",
      "steps": [
        "报告",
        "反问",
        "分开写"
      ],
      "script": [
        "Codex 的回答里还有一段，专门问我们报告里的那一句：“只有配对成功时步数才加 1”。",
        "它问：这是在页面上看到的，还是从代码推的？按当前这副牌，不可能观察到配对成功。它说得对。这一句是讲师读代码时推出来的，从来没在页面上看到过。",
        "报告里观察和推断要分开写。观察是：翻错，步数是 0，三次都是。推断是：配对成功时会加 1，要标出来。混在一起，就会把调查带偏；这一次是 Codex 把我们拉了回来。"
      ],
      "teaching": [],
      "source": "index.html#p19",
      "seconds": 90
    },
    {
      "id": "p20",
      "segment": "人定规则",
      "label": "改之前先定什么",
      "title": "改之前，先由人定两条规则",
      "kicker": "第 3 章 · 3.3 · 人定规则",
      "lead": "它给了几种改法，但有两件事它明确说不替我们定：用哪几个词配对（文案取舍）；步数怎么算。这是规则，不是代码问题。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">问题一</span><h3>用哪几个词配对？</h3><p class=\"p-sub\">Codex：“文案取舍是你的决定，我不自行定”</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">问题二</span><h3>步数怎么算？</h3><p class=\"p-sub\">一张算一步？两张算一步？翻错算吗？</p></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\" style=\"margin-top:14px\"><span class=\"p-tag\" data-role=\"us\">我们定</span><p style=\"margin-top:6px;line-height:1.7\">6 对：需求、迭代、推理、部署、验收、协作<br>步数：每翻开两张算一步，成功和失败都算</p></div>",
      "repro": {
        "label": "回复原文",
        "steps": [
          {
            "text": "在同一会话里回复 Codex（可写权限）",
            "code": "第 2 点属实：我把 12 张全翻开过，没有两张相同的词，一局打不完。我报告里写的“只有配对成功时步数才加 1”是从代码推的，没在页面上看到过。\n规则由我定：\n1. 6 对牌，用这 6 个词：需求、迭代、推理、部署、验收、协作；\n2. 步数按“每翻开两张牌算一步”，配对成功和失败都算。\n牌组用你推荐的改法 A（6 个词各生成两张），步数用改法 A（翻开第二张时计数）。只改这两处，不顺手改别的；改完跑 build，并告诉我需要我在浏览器里复验哪些场景。"
          }
        ],
        "note": ""
      },
      "steps": [
        "哪几个词",
        "步数怎么算",
        "我们定"
      ],
      "script": [
        "它列了几种改法，各有代价。但有两件事，它明确说不替我们定。第一，用哪几个词配对。原话是：文案取舍是你的决定，我不自行定。",
        "第二，步数怎么算。一张算一步，还是两张算一步？翻错算不算？3.2 里我们把它归为“规则还没人定”，现在必须定了，否则修完也不知道对不对。",
        "我们定：6 对牌，用需求、迭代、推理、部署、验收、协作这 6 个词；步数按每翻开两张算一步，成功和失败都算。把这两条连同“只改这两处，不顺手改别的”一起发给它。这是本章的第二条规则，而且是我们自己定的。请暂停视频，定下你的规则。"
      ],
      "teaching": [],
      "source": "index.html#p20",
      "seconds": 90
    },
    {
      "id": "p21",
      "segment": "修改与复验",
      "label": "改对了吗",
      "title": "最小修改，再看相邻场景",
      "kicker": "第 3 章 · 3.3 · 修改与复验",
      "lead": "先看范围：只动了游戏组件。再复验：原来的场景（翻错一次，步数变成 1），以及相邻场景：配对成功、完整打完一局、重开、最佳成绩，最后 build。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:start\"><div><div class=\"p-term\" data-reveal=\"0\"><div class=\"dim\">$ git diff --stat</div><div>src/components/MemoryGame.tsx  | 21</div><div>1 file changed, 12 insertions(+), 9 deletions(-)</div></div><div data-reveal=\"0\" style=\"margin-top:8px\"><details class=\"p-pop\"><summary>看完整 diff</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>修复的完整 diff</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-code\"><div class=\"p-code-head\"><span>src/components/MemoryGame.tsx</span><span>+12 −9</span></div><pre><span class=\"at\">@@ -4,19 +4,13 @@ import &#x27;./memory-game.css&#x27;</span><span style=\"display:block\"> const CARD_FACES = [</span><span style=\"display:block\">   &#x27;需求&#x27;,</span><span style=\"display:block\">   &#x27;迭代&#x27;,</span><span class=\"del\">-  &#x27;感知&#x27;,</span><span style=\"display:block\">   &#x27;推理&#x27;,</span><span class=\"del\">-  &#x27;量产&#x27;,</span><span style=\"display:block\">   &#x27;部署&#x27;,</span><span class=\"del\">-  &#x27;加速&#x27;,</span><span style=\"display:block\">   &#x27;验收&#x27;,</span><span class=\"del\">-  &#x27;端侧&#x27;,</span><span class=\"del\">-  &#x27;提示&#x27;,</span><span style=\"display:block\">   &#x27;协作&#x27;,</span><span class=\"del\">-  &#x27;智能体&#x27;,</span><span style=\"display:block\"> ] as const</span><span style=\"display:block\"> </span><span class=\"del\">-const PAIR_COUNT = CARD_FACES.length / 2</span><span class=\"add\">+const PAIR_COUNT = CARD_FACES.length</span><span style=\"display:block\"> const MISMATCH_DELAY_MS = 900</span><span style=\"display:block\"> const BEST_MOVES_KEY = &#x27;memory-game-best-moves&#x27;</span><span style=\"display:block\"> </span><span class=\"at\">@@ -40,7 +34,14 @@ function shuffle&lt;T&gt;(items: T[]): T[] {</span><span style=\"display:block\"> </span><span style=\"display:block\"> function createDeck(): Card[] {</span><span style=\"display:block\">   return shuffle(</span><span class=\"del\">-    CARD_FACES.map((face, id) =&gt; ({ id, face, flipped: false, matched: false })),</span><span class=\"add\">+    CARD_FACES.flatMap((face, index) =&gt;</span><span class=\"add\">+      [0, 1].map((copy) =&gt; ({</span><span class=\"add\">+        id: index * 2 + copy,</span><span class=\"add\">+        face,</span><span class=\"add\">+        flipped: false,</span><span class=\"add\">+        matched: false,</span><span class=\"add\">+      })),</span><span class=\"add\">+    ),</span><span style=\"display:block\">   )</span><span style=\"display:block\"> }</span><span style=\"display:block\"> </span><span class=\"at\">@@ -113,7 +114,6 @@ export default function MemoryGame() {</span><span style=\"display:block\">         ),</span><span style=\"display:block\">       )</span><span style=\"display:block\">       setOpenIds([])</span><span class=\"del\">-      setMoves((prev) =&gt; prev + 1)</span><span style=\"display:block\">       setStatus(`配对成功：${first.face}。`)</span><span style=\"display:block\">       return</span><span style=\"display:block\">     }</span><span class=\"at\">@@ -168,6 +168,9 @@ export default function MemoryGame() {</span><span style=\"display:block\">       prev.map((item) =&gt; (item.id === id ? { ...item, flipped: true } : item)),</span><span style=\"display:block\">     )</span><span style=\"display:block\">     setOpenIds((prev) =&gt; (prev.length &lt; 2 ? [...prev, id] : prev))</span><span class=\"add\">+    if (openIds.length === 1) {</span><span class=\"add\">+      setMoves((prev) =&gt; prev + 1)</span><span class=\"add\">+    }</span><span style=\"display:block\">   }</span><span style=\"display:block\"> </span><span style=\"display:block\">   function startNewGame() {</span></pre></div></div></details></div></div><ul class=\"p-checks\"><li data-reveal=\"1\">翻错一次<small>步数 1</small></li><li data-reveal=\"2\">配对成功<small>步数也加 1，剩余减 1</small></li><li data-reveal=\"2\">完整打完一局<small>6 对配完，显示完成</small></li><li data-reveal=\"2\">重开、最佳成绩<small>归零；最佳不被更差的一局覆盖</small></li><li data-reveal=\"3\">npm run build<small>成功</small></li></ul></div><p class=\"source-note\">调查与修复来自 2026-10-06 的两次排练（courseware/ch03/materials/mainline/debug-3.3.sh），两次调查结论一致。来自讲师机器上的排练运行（2026-10-06，Codex 0.160.0–0.160.1 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "范围",
        "原场景",
        "相邻场景",
        "build"
      ],
      "script": [
        "Codex 改完。先看范围：git diff --stat 只有游戏组件这一个文件。点开完整的 diff：词表换成我们给的 6 个词，牌组每个词生成两张；翻开第二张时计一步。",
        "复验原来的场景：翻错一次，步数变成 1。",
        "再看相邻的场景，修一处最容易弄坏旁边：配对成功，步数也加 1，剩余减 1；完整打完一局，6 对配完，显示完成；重开以后归零；最佳成绩不会被更差的一局覆盖。",
        "最后 build 成功。全部有证据，才算修好。请暂停视频，复验你的修改。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "复验由人在浏览器里做；讲师批量重跑时用 probe2.py 代检，结果在 materials/mainline/reference/。"
        }
      ],
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录，用排练第 8 轮的实现重跑一遍“只读调查 → 人定规则 → 修复”",
            "code": "courseware/ch03/materials/mainline/debug-3.3.sh"
          }
        ],
        "note": "需要 MINIMAX_API_KEY 与第 8 轮的运行目录；回答每次会不同。"
      },
      "source": "index.html#p21",
      "seconds": 120
    },
    {
      "id": "p22",
      "segment": "小结",
      "label": "本节小结",
      "title": "调查常常比报告看得更深",
      "kicker": "第 3 章 · 3.3 · 小结",
      "lead": "本节留下记忆翻牌 v1、一份缺陷记录和一条我们自己定的规则（步数怎么算）。代码和记录分两次提交。下一节：做第二个游戏前，先看看做游戏的经验有没有人打包好了。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">五步</h3><div class=\"p-flow\" style=\"--n:5;font-size:18px\"><div class=\"p-node\"><b>复现</b></div><div class=\"p-node\"><b>只读调查</b></div><div class=\"p-node\" data-role=\"us\"><b>人定规则</b></div><div class=\"p-node\"><b>最小修改</b></div><div class=\"p-node\" data-role=\"ok\"><b>复验</b></div></div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">记忆翻牌 v1</li><li class=\"is-pass\">缺陷记录：观察与推断分开</li><li class=\"is-pass\">规则：步数怎么算</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"tool\"><h3>3.4 审插件</h3><p>做游戏的经验，有人打包好了吗？</p></div></div></div>",
      "steps": [
        "五步",
        "留下的",
        "下一节"
      ],
      "script": [
        "这一节的五步：复现、只读调查、人定规则、最小修改、复验。中间那一步“人定规则”最容易被跳过，可是不定规则，修完也不知道对不对。",
        "留下三样东西：记忆翻牌 v1；一份缺陷记录，观察和推断分开写；一条我们自己定的规则，步数怎么算，写进 CH03_MEMORY_GAME.md。代码一次提交，记录一次提交。",
        "我们在这一节摸到了一些做游戏的经验：状态要清楚，等待和重开要处理好，成对的东西要真的成对。下一节做第二个游戏，先问一句：这些经验，有没有人打包好了？"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "缺陷记录（复现步骤、观察与推断、假设、根因、修复、复验）；定下的规则；记忆翻牌 v1 的代码提交与记录提交。"
        }
      ],
      "source": "index.html#p22",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "挑一个",
      "seconds": 90
    },
    {
      "label": "复现",
      "seconds": 90
    },
    {
      "label": "只读调查",
      "seconds": 210
    },
    {
      "label": "观察与推断",
      "seconds": 90
    },
    {
      "label": "人定规则",
      "seconds": 90
    },
    {
      "label": "修改与复验",
      "seconds": 120
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
