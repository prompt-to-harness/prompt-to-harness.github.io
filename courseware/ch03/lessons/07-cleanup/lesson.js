window.lesson = {
  "title": "重开时，还有什么要清理",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.07",
  "summary": "界面重置不等于资源重置；谁创建计时器和实例，谁负责清理。",
  "scenes": [
    {
      "id": "p45",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "重开时什么被重置了",
      "title": "点“重新开始”，什么被重置了？",
      "kicker": "第 3 章 · 3.7 · 工程经验",
      "lead": "看得见的归零了，看不见的呢",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>3.1</b>加个游戏</li><li class=\"is-done\"><b>3.2</b>谁定的规则</li><li class=\"is-done\"><b>3.3</b>按证据修</li><li class=\"is-done\"><b>3.4</b>审插件</li><li class=\"is-done\"><b>3.5</b>插件的主张</li><li class=\"is-done\"><b>3.6</b>说明在哪</li><li class=\"is-now\"><b>3.7</b>重开清理</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">看得见的</span><p>牌面、步数、用时、提示</p></div><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"gate\">看不见的</span><p>还在倒数的计时器 · 事件监听 · 游戏实例</p></div></div>",
      "steps": [
        "地图",
        "看得见的",
        "看不见的"
      ],
      "script": [
        "本章最后一节是一段工程经验。问题很简单：点“重新开始”的时候，什么被重置了？",
        "看得见的：牌面全部翻回，步数和用时归零，提示换成“新一局开始”。",
        "看不见的呢？3.2 里，翻错以后有一个 900 毫秒的计时器在倒数。如果这时候点重开，那个计时器还在吗？它到点以后，会对新的一局做什么？"
      ],
      "teaching": [],
      "source": "index.html#p45",
      "seconds": 90
    },
    {
      "id": "p46",
      "segment": "我们的实现",
      "label": "我们的实现有这个问题吗",
      "title": "我们的实现，其实都清理了",
      "kicker": "第 3 章 · 3.7 · 我们的实现",
      "lead": "排练的 6 份实现，重开时都清理了计时器。为了看清没清理会怎样，我们用一份明确标注的预备版本：在修好的 v1 上删掉一行。这不是自然出现的事故。",
      "html": "<div class=\"p-code\" data-reveal=\"0\"><div class=\"p-code-head\"><span>v1 · 等待翻回的 effect</span></div><pre><span style=\"display:block\">const timer = window.setTimeout(() =&gt; { …翻回、清空“已翻开” }, 900)</span><span class=\"hl\">return () =&gt; window.clearTimeout(timer)   // 清理</span></pre></div><div class=\"p-code\" data-reveal=\"1\" style=\"margin-top:12px\"><div class=\"p-code-head\"><span>预备版本（教学用）</span><span>−1 行</span></div><pre><span style=\"display:block\">window.setTimeout(() =&gt; { …翻回、清空“已翻开” }, 900)</span><span class=\"del\">-return () =&gt; window.clearTimeout(timer)</span></pre></div><p class=\"source-note\">教学预备版本：在 3.3 修复后的 v1 上删掉一行清理代码（courseware/ch03/materials/prepared/stale-timer.diff），2026-10-06 用脚本核对一次。不是自然出现的缺陷。</p>",
      "steps": [
        "v1 的清理",
        "预备版本"
      ],
      "script": [
        "先看我们自己的实现。v1 等待翻回的那段代码：建一个 900 毫秒的计时器，到点后翻回两张牌、清空“已翻开”的记录；下面一行是清理：这段逻辑结束或重新执行时，取消计时器。讲师排练的 6 份实现，重开时都做了清理。",
        "为了看清楚没清理会怎样，讲师准备了一份预备版本：在修好的 v1 上删掉这一行。请记住，这是教学用的，不是 AI 自然写出来的事故。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "画面和口播都要说明“教学预备”；不把它说成现场发现。"
        }
      ],
      "source": "index.html#p46",
      "seconds": 60
    },
    {
      "id": "p47",
      "segment": "时间线",
      "label": "旧计时器做了什么",
      "title": "先预测，再看：旧计时器做了什么",
      "kicker": "第 3 章 · 3.7 · 时间线",
      "lead": "翻错 → 计时器开始倒数 → 立刻重开 → 新一局翻开一张 → 900ms 到，旧回调执行：它清空的是新一局的“已翻开”记录 → 再翻一张，游戏不再比较这两张，它们一直朝上。",
      "html": "<div class=\"p-flow\" style=\"--n:5;font-size:18px\"><div class=\"p-node\" data-reveal=\"0\"><b>0 ms</b><small>翻错，计时器开始</small></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><b>约 50 ms</b><small>点重开</small></div><div class=\"p-node\" data-reveal=\"1\"><b>约 100 ms</b><small>新一局翻开第 1 张</small></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"2\"><b>900 ms</b><small>旧回调：清空“已翻开”</small></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"3\"><b>之后</b><small>翻第 2 张：两张一直朝上</small></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\" data-reveal=\"3\"><div class=\"p-box is-soft\" data-role=\"ok\"><h3>v1</h3><p>“不是一对”，两张翻回</p></div><div class=\"p-box is-soft\" data-role=\"gate\"><h3>预备版本</h3><p>两张一直朝上，提示不变</p></div></div>",
      "steps": [
        "翻错后重开",
        "新一局翻一张",
        "旧回调",
        "结果"
      ],
      "script": [
        "先预测，再看结果。时间线从翻错开始：计时器开始倒数 900 毫秒。几十毫秒后，我们点了重开。",
        "新的一局，我们翻开第一张。画面一切正常。",
        "到了 900 毫秒，上一局的计时器到点了，它的回调照常执行：翻回上一局那两张、清空“已翻开”的记录。可现在的“已翻开”是新一局的：它把我们刚翻开的那一张从记录里抹掉了，画面上却看不出来。",
        "再翻第二张。v1 会说“不是一对”，两张翻回。预备版本里，两张一直朝上，提示不变，游戏已经不记得第一张了。请暂停视频，先写下你的预测，再打开配套材料看结果。"
      ],
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录，基于修好的 v1 做出预备版本并构建",
            "code": "cp -R <记忆翻牌 v1 目录> lab-runs/ch03-prepared && cd lab-runs/ch03-prepared\ngit apply ../../courseware/ch03/materials/prepared/stale-timer.diff && npm ci && npm run build && cd ../.."
          },
          {
            "text": "按“翻错 → 重开 → 翻一张 → 等 1.2 秒 → 再翻一张”核对每一刻的牌面",
            "code": "uv run courseware/ch03/materials/prepared/stale-timer-check.py lab-runs/ch03-prepared"
          }
        ],
        "note": "v1 目录指 3.3 修复后的记忆翻牌；对照时把同一条命令用在 v1 上。"
      },
      "teaching": [],
      "source": "index.html#p47",
      "seconds": 120
    },
    {
      "id": "p48",
      "segment": "清理责任",
      "label": "还有什么要清理",
      "title": "谁创建，谁清理",
      "kicker": "第 3 章 · 3.7 · 清理责任",
      "lead": "状态是数据，重开时归零就行；副作用是正在运行的东西：计时器、事件监听、动画帧、游戏实例。它们由谁创建，就由谁在结束或重来时清理。3.5 里离开页面时销毁 Phaser 实例，是同一类问题。",
      "html": "<div class=\"p-set\" style=\"display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px\"><div class=\"p-item\" data-reveal=\"0\"><b>计时器</b> · setTimeout / setInterval → clearTimeout</div><div class=\"p-item\" data-reveal=\"1\"><b>事件监听</b> · addEventListener('keydown') → removeEventListener</div><div class=\"p-item\" data-reveal=\"1\"><b>动画帧</b> · requestAnimationFrame → cancelAnimationFrame</div><div class=\"p-item is-picked\" data-reveal=\"2\"><b>游戏实例</b> · new Phaser.Game → game.destroy(true)（3.5）</div></div><div class=\"p-bar is-light\" data-reveal=\"3\">界面重置 ≠ <b>资源重置</b></div>",
      "steps": [
        "计时器",
        "监听与动画帧",
        "游戏实例",
        "一句话"
      ],
      "script": [
        "把问题推广一下。状态是数据：牌面、步数、用时，重开时归零就行。副作用是正在运行的东西，第一类就是计时器：谁 setTimeout，谁负责 clearTimeout。",
        "第二类，事件监听：躲避游戏要监听键盘，组件卸载时要移除监听，否则离开页面后按方向键，旧的处理函数还在跑。第三类，动画帧：每一帧调用一次，停下来时要取消。",
        "第四类，游戏实例。3.5 的第二个游戏用了一个游戏引擎的实例，离开页面时要 destroy 它。3.5 评审 diff 时我们查的那一项，就是这个问题。",
        "一句话：界面重置不等于资源重置。也不要走向另一个极端，把所有状态变化都当成 Bug：数据归零是对的，要查的是还在运行的东西。"
      ],
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 120
    },
    {
      "id": "p49",
      "segment": "本章收尾",
      "label": "本章小结",
      "title": "第 3 章：能玩，以及能玩背后的规则",
      "kicker": "第 3 章 · 3.7 · 本章收尾",
      "lead": "本章交付：两个可玩、已发布的游戏；状态图与问题清单；一次复现、调查、定规则、修复、复验的闭环；插件审查与生命周期证据；信息来源表与需求债务清单；本节的清理判断。下一章：换一个真实的开源项目，用规格把决定写下来。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3>本章交付</h3><ul class=\"p-exits\" style=\"gap:8px;font-size:18px\"><li class=\"is-pass\">两个游戏，已发布</li><li class=\"is-pass\">缺陷闭环与两条规则</li><li class=\"is-pass\">插件审查与停用证据</li><li class=\"is-pass\">需求债务清单</li></ul></div><div data-reveal=\"1\"><h3 style=\"text-align:center\">一个问题</h3><div class=\"p-star\" style=\"width:260px;font-size:22px\">这条规则<br>是谁定的？</div></div><div class=\"p-next\" data-reveal=\"2\"><h3>第 4 章</h3><div class=\"p-box\" data-role=\"us\"><h3>SDD</h3><p>为 JSON Diff 建立可执行规格</p></div></div></div>",
      "steps": [
        "交付",
        "贯穿的问题",
        "下一章"
      ],
      "script": [
        "回顾这一章的交付：两个可玩的游戏，build 通过后更新公开版本，在桌面和手机宽度都能进入、能操作；一次完整的缺陷闭环和两条规则；插件的审查、使用和停用证据；需求债务清单；还有这一节的清理判断，补进缺陷记录。",
        "贯穿全章的只有一个问题：这条规则是谁定的？AI 替我们定的，要发现它；该我们定的，要自己定；插件带来的，要判断听不听；定下的，要落进仓库。",
        "下一章换一个真实的开源项目，JSON Crack。我们不再一句话开工，而是先用规格把决定写下来。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "在 CH03_MEMORY_GAME.md 的缺陷记录中补充：重开前后需要清理的资源、预测与核对结果；运行 production build 并更新公开版本。"
        }
      ],
      "source": "index.html#p49",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "我们的实现",
      "seconds": 60
    },
    {
      "label": "时间线",
      "seconds": 120
    },
    {
      "label": "清理责任",
      "seconds": 120
    },
    {
      "label": "本章收尾",
      "seconds": 90
    }
  ]
};
