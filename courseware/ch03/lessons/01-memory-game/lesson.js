window.lesson = {
  "title": "一句话加一个记忆翻牌",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.01",
  "summary": "一句话就能加出一个能玩的游戏；能玩是起点，不是验收。",
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "一句话，能加出一个小游戏吗",
      "title": "一句话，能加个游戏吗？",
      "kicker": "第 3 章 · 3.1 · 开篇",
      "lead": "本章把首页变成能玩两个小游戏的实验室",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>3.1</b>加个游戏</li><li><b>3.2</b>谁定的规则</li><li><b>3.3</b>按证据修</li><li><b>3.4</b>审插件</li><li><b>3.5</b>插件的主张</li><li><b>3.6</b>说明在哪</li><li><b>3.7</b>重开清理</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">3.1–3.3</span><h3>记忆翻牌</h3><p>一句话需求 · 普通 Vibe Coding</p></div><div class=\"p-join\" data-reveal=\"2\"><span>再加一个</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"tool\">3.4–3.5</span><h3>60 秒躲避与收集</h3><p>用 Game Studio 插件</p></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">贯穿全章的问题：<b>这条规则是谁定的？</b></div>",
      "repro": {
        "label": "从这一章开始？",
        "steps": [
          {
            "text": "先在自己的仓库里保存当前的工作（没有改动时会提示无可提交，不影响）",
            "code": "git add -A && git commit -m \"保存：开始第 3 章之前\""
          },
          {
            "text": "在仓库根目录启动 Codex，粘贴这段 Prompt",
            "code": "先只读检查，不修改我的项目文件。\n课程第 3 章的参考起点在 https://github.com/prompt-to-harness/course-starter.git 的 ch03-start-v1 标签。\n请把它克隆到临时目录（不要放进我的项目），只用来对照。\n请检查我的项目是否满足第 3 章开始前的前提：\n1. 有能 npm run build 的首页 v1：项目区已经按第 2 章补充，第 2 章的改动和记录都已提交；\n2. 有 GitHub Pages 的发布配置（Vite 的 base 与部署工作流），可以再次发布；\n3. 工作区是干净的。\n逐条说明：已满足 / 缺少 / 与参考不同但不影响，并给出依据。\n我的个人内容（姓名、简介、项目、仓库名、已有的决定）一律保留，\n不要换成参考里的示例文字，也不要照抄参考里的仓库名。\n列出建议补上的改动，等我确认后再改。"
          },
          {
            "text": "Codex 可能申请联网克隆参考起点、在临时目录里试构建。看清整条命令作用在哪个目录，只动临时目录的再同意；不要选“以后不再问”",
            "code": ""
          },
          {
            "text": "读它的逐条判断，只确认补齐前提所必需的改动",
            "code": "只做补齐第 3 章前提所必需的改动，可选的建议先不做；我的个人内容、仓库名和已有的决定保持不变。我的 GitHub 仓库名是 <你的仓库名>，Vite 的 base 按 2.4 的写法用它。改完告诉我需要我运行哪些命令。"
          },
          {
            "text": "构建并在浏览器里看一遍首页；需要发布时按 2.4 的步骤推送",
            "code": "npm install && npm run build && npm run preview"
          },
          {
            "text": "核对无误后提交",
            "code": "git add -A && git commit -m \"对照 ch03-start-v1 补齐第 3 章前提\""
          }
        ],
        "note": "没做完第 2 章、或想直接从第 3 章开始时用。参考起点 ch03-start-v1 要等第 2 章录制版发布后制作，目前还不存在；讲师 2026-10-06 用本地草案在两种起点上试过（courseware/ch03/materials/catchup/）。"
      },
      "steps": [
        "本章地图",
        "第一个游戏",
        "第二个游戏",
        "贯穿的问题"
      ],
      "script": [
        "第 2 章结束时，我们有了一个公开发布的个人首页 v1。这一章在它上面加两个小游戏，把它变成一个小游戏实验室。",
        "第一个是记忆翻牌：翻开两张牌，相同就配对。我们用最普通的 Vibe Coding 来做，一句话需求，不写规格。",
        "第二个是一个 60 秒躲避与收集的小游戏。做它的时候，我们会发现有人已经把“做游戏的经验”打包成了插件，就是 Game Studio。",
        "贯穿全章的是一个问题：游戏里那些规则，是谁定的？是我们，是 AI，还是插件？它们写在哪里，下次还在不在？带着这个问题开始。"
      ],
      "teaching": [],
      "source": "index.html#p01",
      "seconds": 120
    },
    {
      "id": "p02",
      "segment": "写请求",
      "label": "这一次的请求",
      "title": "这一次只写一句话",
      "kicker": "第 3 章 · 3.1 · 写请求",
      "lead": "刻意不写规格，先体验 Vibe Coding 的速度。但保留两个习惯：先给计划、问题最多三个；完成标准写清分工：build 由 Codex 跑，试玩由我们做（沿用 2.2 p29）。",
      "html": "<div class=\"p-prompt\"><div class=\"p-seg\" data-key=\"goal\" data-reveal=\"0\"><b>Goal</b>在主页加入一个记忆翻牌小游戏</div><div class=\"p-seg\" data-key=\"limit\" data-reveal=\"1\"><b>Constraints</b>先给计划；需要我决定的最多问三个，附上推荐做法；我确认后再改</div><div class=\"p-seg\" data-key=\"done\" data-reveal=\"2\"><b>Done when</b>你跑 build 成功；试玩和三种宽度由我检查，你不用自己打开浏览器</div></div><div class=\"p-bar is-light\" data-reveal=\"3\">没写的：<b>玩法细节、计分、出错时怎么办</b></div>",
      "repro": {
        "label": "请求原文",
        "steps": [
          {
            "text": "把这段请求发给 Codex（新会话）",
            "code": "在主页加入一个记忆翻牌小游戏。\n先告诉我你的计划；有需要我决定的问题，最多问三个，每个问题附上你推荐的做法。我确认后再改。\n完成标准：你跑 build 成功；浏览器里的试玩和三种宽度的检查由我来做，你不用自己打开浏览器。"
          }
        ],
        "note": ""
      },
      "steps": [
        "一句话",
        "先给计划",
        "完成标准",
        "没写的"
      ],
      "script": [
        "这一次的请求只有一句话：在主页加入一个记忆翻牌小游戏。我们刻意不写规格，先体验一下 Vibe Coding 有多快。",
        "但保留两个习惯。第一，先给计划，等我们确认再动手；需要我们决定的问题最多问三个，每个附上它推荐的做法。问题太多，一句话需求就变成了填问卷。",
        "第二，完成标准写清分工：build 由 Codex 跑，浏览器里的试玩和三种宽度的检查由我们做。这一句来自 2.2：排练时不写这句，Codex 会花十几分钟自己想办法打开浏览器。",
        "请注意我们没写的东西：怎么玩、怎么计分、两张不一样时怎么办。这些都要有人定。谁来定？下一页看 Codex 的计划。请暂停视频，在自己的项目里用同一句话开一个新会话。"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "排练第 1–4 轮的需求句没有 Done when，执行 8–22 分钟，每轮有 4–10 条自行验证浏览器的命令；加上后重跑的第 5–8 轮都被上游错误中断，改句效果尚无有效数据（materials/mainline/README.md）。"
        }
      ],
      "source": "index.html#p02",
      "seconds": 120
    },
    {
      "id": "p03",
      "segment": "写请求",
      "label": "它问了什么，又定了什么",
      "title": "它问了什么，又自己定了什么",
      "kicker": "第 3 章 · 3.1 · 写请求",
      "lead": "Codex 的三个问题都是外观和位置；游戏怎么运转的规则，它在计划里自己定了，没有问。先记下来，3.2 回来查。",
      "html": "<div class=\"p-claim\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr)\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">问了我们</span><ol class=\"p-notes\" style=\"margin-top:10px\"><li><span><b>卡面用什么</b><small>推荐：主页上的中文短词</small></span></li><li><span><b>难度</b><small>推荐：固定 6 对 12 张</small></span></li><li><span><b>放哪、怎么进</b><small>推荐：项目区下方，首屏加次级链接</small></span></li></ol></div><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">没问，自己定了</span><ol class=\"p-notes\" style=\"margin-top:10px\"><li><span><b>翻错 900ms 后自动翻回</b><small>期间锁住输入</small></span></li><li data-reveal=\"2\"><span><b>步数、计时、最佳成绩</b><small>步数怎么算？计划里没写</small></span></li></ol></div></div><p class=\"source-note\">画面中的计划与改动来自排练第 8 轮（courseware/ch03/materials/mainline/run-v2.sh）。来自讲师机器上的排练运行（2026-10-06，Codex 0.160.0–0.160.1 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "它问的",
        "它定的",
        "没写的"
      ],
      "script": [
        "这是讲师排练时 Codex 给的计划，问题只有三个：卡面用什么，推荐用主页上的中文短词；难度，推荐固定 6 对 12 张；放在哪里，推荐项目区下方。三个都附了推荐做法，很好回答。",
        "再看计划正文里它自己定了、但没有问的：两张翻错，900 毫秒后自动翻回，这段时间锁住输入。这是一条游戏规则，而且是合理的规则。但没有人问过我们。",
        "还有步数、计时、最佳成绩。步数怎么算？翻一张算一步，还是翻两张算一步？计划里没写。先把这两条记在纸上，3.2 我们回来查。你的计划会和讲师不一样，找一找你的版本里，它自己定了哪些规则。"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "排练 8 轮中，第 1–4 轮有 3 轮把“等待翻回期间锁输入”写在计划里但没当作问题问人（其中一轮列在“我自行定的默认”下），1 轮计划里没写、代码照样加锁。录制时以当天的真实计划为准。"
        }
      ],
      "source": "index.html#p03",
      "seconds": 90
    },
    {
      "id": "p04",
      "segment": "让它动手",
      "label": "确认后它做了什么",
      "title": "把选择交给它，本身就是一个决定",
      "kicker": "第 3 章 · 3.1 · 让它动手",
      "lead": "确认语是“问题都按你推荐的做法处理”。这样回答很常见，也很快；记住它的含义：三个问题的答案，也是 AI 定的。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>回复计划</h3><p class=\"p-mono\" style=\"font-size:20px\">确认，按计划执行；你问的问题都按你推荐的做法处理</p><span class=\"p-env\">同一会话</span><span class=\"p-env\">workspace-write</span></div><ol class=\"p-watch\"><li data-reveal=\"1\">改了哪些文件<small>预期：一个游戏组件、它的样式、App.tsx 挂载</small></li><li data-reveal=\"2\">有没有新依赖<small>看 package.json 有没有变</small></li><li data-reveal=\"3\">build 成功了吗<small>Codex 跑，回答里要有结果</small></li></ol></div>",
      "steps": [
        "确认",
        "改了哪些文件",
        "新依赖",
        "build"
      ],
      "script": [
        "我们回复：确认，按计划执行；你问的问题都按你推荐的做法处理。这是最常见、也最快的回答。但请记住它的含义：三个问题的答案，现在也是 AI 定的了。",
        "它动手的时候，我们边看边找三件事。第一，改了哪些文件。预期是一个游戏组件、它的样式，再在 App.tsx 里挂上去。",
        "第二，有没有新依赖。看 package.json 有没有变。记忆翻牌用不着任何新库。",
        "第三，build 成功了吗。这是我们交给它的检查，回答里要有结果。请暂停视频，确认你的计划，看着它做完。"
      ],
      "teaching": [],
      "source": "index.html#p04",
      "seconds": 120
    },
    {
      "id": "p05",
      "segment": "让它动手",
      "label": "交回来的是什么",
      "title": "交回来的是什么",
      "kicker": "第 3 章 · 3.1 · 让它动手",
      "lead": "两个新文件、一处修改，没有新依赖，build 成功。打开页面，翻牌、配对、重开都能用，首页原样。能玩了。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:16px;align-items:start\"><div><div class=\"p-term\" data-reveal=\"0\" data-copy=\"git status --short\"><div class=\"dim\">$ git status --short</div><div> M src/App.tsx</div><div>?? src/components/</div></div><div class=\"p-term\" data-reveal=\"1\" style=\"margin-top:8px\"><div class=\"dim\">$ npm run build</div><div class=\"ok\">✓ built</div></div><ul class=\"p-checks\" style=\"margin-top:12px\" data-reveal=\"2\"><li>没有新依赖<small>package.json 没变</small></li><li>首页原样<small>项目区三条经历都在</small></li></ul></div><div class=\"p-page\" data-reveal=\"1\"><img src=\"../02-rules/evidence/run8-start.png\" alt=\"记忆翻牌初始画面：12 张背面朝上的绿色卡片，上方显示步数 0、用时 0:00、剩余 6/6 对\" style=\"display:block;width:100%\"></div></div><p class=\"source-note\">画面中的计划与改动来自排练第 8 轮（courseware/ch03/materials/mainline/run-v2.sh）。来自讲师机器上的排练运行（2026-10-06，Codex 0.160.0–0.160.1 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。 src/components/ 下是 MemoryGame.tsx 与 memory-game.css。</p>",
      "steps": [
        "改了什么",
        "能构建、能打开",
        "没碰别的"
      ],
      "script": [
        "Codex 说做完了。先看范围：git status 显示 App.tsx 改了，新增了 src/components 目录，里面是游戏组件和它的样式。",
        "build 成功。打开页面，项目区下面多了一个记忆翻牌：12 张牌，上面有步数、用时、剩余几对和最佳成绩。点一张，翻开；再点一张，翻开；不一样的话，过一会儿翻回去。",
        "package.json 没变，没有新依赖；首页的项目区三条经历都还在。从一句话到能玩，前后不到半小时。请暂停视频，打开你自己的页面，玩几下。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "这里只玩几下，不要完整打完一局：讲师这一份实现一局打不完，3.2 的“完整打完一局”才揭示。录制时以当天实现为准，不预设有没有缺陷。"
        }
      ],
      "source": "index.html#p05",
      "seconds": 90
    },
    {
      "id": "p06",
      "segment": "小结",
      "label": "本节小结",
      "title": "能玩了，然后呢",
      "kicker": "第 3 章 · 3.1 · 小结",
      "lead": "本节留下记忆翻牌 v0：能翻、能配对、能重开，build 成功。照 2.3 的做法，代码和记录分两次提交；记录里写下请求、它问的三个问题和它自己定的规则。“能玩”是起点，不是验收。下一节：换几种玩法试试。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:260px;font-size:24px\">能玩<br>≠ 验收</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-pass\">记忆翻牌 v0 提交</li><li class=\"is-pass\">记录：它问的、它定的</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>3.2 谁定的规则</h3><p>第二张还没翻回去，我又点了第三张</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "这一节最想留下的一个判断：能玩，不等于验收。我们只走了最顺的那条路：翻两张、配对、重开。",
        "先把它存下来。照 2.3 的做法，代码一次提交，记录一次提交。记录写进 docs/evidence/CH03_MEMORY_GAME.md：请求原文、它问的三个问题和我们的回答，还有它自己定了、没问我们的规则。",
        "下一节，我们换几种玩法：第二张还没翻回去，我又点了第三张，会怎样？"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "记忆翻牌 v0 的代码提交与记录提交；记录里有请求、三个问题与回答、它自己定的规则。"
        }
      ],
      "source": "index.html#p06",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 120
    },
    {
      "label": "写请求",
      "seconds": 210
    },
    {
      "label": "让它动手",
      "seconds": 210
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
