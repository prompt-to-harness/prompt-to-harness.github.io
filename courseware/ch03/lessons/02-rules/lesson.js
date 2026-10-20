window.lesson = {
  "title": "这条规则是谁定的",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.02",
  "summary": "换几种玩法、完整打完一局；把缺陷和 AI 替你定的规则分开记。",
  "scenes": [
    {
      "id": "p07",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "我又点了第三张",
      "title": "我又点了第三张",
      "lead": "第二张还没翻回去的时候",
      "html": "<div class=\"p-comic\"><div class=\"p-panel\" data-reveal=\"0\"><span class=\"p-cap\">第一步</span><p class=\"p-bubble\">翻开两张：迭代、验收</p><span class=\"p-avatar\">我们</span></div><div class=\"p-panel\" data-reveal=\"1\"><span class=\"p-cap\">它们还没翻回去</span><p class=\"p-bubble\">我又点了第三张……</p><span class=\"p-avatar\">我们</span></div><div class=\"p-panel\" data-reveal=\"2\"><span class=\"p-cap\">没反应</span><p class=\"p-bubble\">这是谁定的？</p><span class=\"p-avatar\">我们</span></div></div>",
      "steps": [
        "翻开两张",
        "点第三张",
        "没反应"
      ],
      "script": [
        "【操作提示｜停留课件 p07 第 1 步，指向漫画第一格；本页是漫画开场，不切游戏页面现场操作】\n\n继续玩 3.1 的记忆翻牌。翻开两张：迭代、验收，不一样。",
        "【操作提示｜推进课件 p07 第 2 步，指向第二格“我又点了第三张”；仍不切窗口】\n\n它们会停留一会儿再翻回去。就在这段时间，我又点了第三张。这不需要手特别快，是很正常的玩法。",
        "【操作提示｜推进课件 p07 第 3 步，指向第三格“这是谁定的”；不在本页解释加锁原因，留到 p12】\n\n结果：没反应。这对吗？也许对，也许不对。但更值得问的是：这条规则是谁定的？我们没有定过。这一节就从这个问题开始，换几种玩法，看看游戏里还有哪些没人问过我们的规则。"
      ],
      "teaching": [],
      "source": "index.html#p07",
      "seconds": 90
    },
    {
      "id": "p08",
      "segment": "画状态",
      "label": "游戏有哪些状态",
      "title": "先画最小状态图",
      "lead": "状态图不求完整，只求让我们知道该去哪些角落看。分叉、等待和结束是最容易出事的地方。",
      "html": "<div class=\"p-flow\" style=\"--n:5\"><div class=\"p-node\" data-reveal=\"0\"><b>初始</b><small>全部背面</small></div><div class=\"p-node\" data-reveal=\"0\"><b>翻开一张</b></div><div class=\"p-node\" data-reveal=\"0\"><b>翻开两张</b></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"1\"><b>等待翻回</b><small>两张不同</small></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\"><b>全部配对</b><small>完成</small></div></div><div class=\"p-flow\" style=\"--n:5;margin-top:10px\"><div class=\"p-node is-row2\" style=\"grid-column:3\" data-role=\"ok\" data-reveal=\"1\"><b>配对</b><small>两张相同</small></div><div class=\"p-node is-row2\" style=\"grid-column:5\" data-role=\"us\" data-reveal=\"3\"><b>重开</b><small>任何时候都能点</small></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">容易出事的地方：<b>分叉、等待、结束、重开</b></div>",
      "steps": [
        "主路径",
        "分叉与等待",
        "终点",
        "重开"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步，依次指向第一行的初始、翻开一张、翻开两张三个节点；不切工具窗口】\n\n先画一张最小的状态图。主路径：初始全部背面，翻开一张，再翻开一张。",
        "【操作提示｜推进课件 p08 第 2 步，指向第二行“配对”和第一行“等待翻回”两个分叉】\n\n翻开两张以后分叉：相同就配对，留在桌上；不同就进入“等待翻回”，过一会儿两张翻回去。等待是一个很短、但真实存在的状态。",
        "【操作提示｜推进课件 p08 第 3 步，指向“全部配对 / 完成”节点】\n\n所有牌都配上了，就是完成。",
        "【操作提示｜推进课件 p08 第 4 步，指向“重开”节点和底部“分叉、等待、结束、重开”条；念完暂停提示后留白几秒，不切窗口】\n\n还有一个随时可以进入的动作：重开。它可以发生在任何状态，包括等待翻回的时候。这张图不求完整，它的作用是告诉我们该去哪些角落看：分叉、等待、结束、重开。请暂停视频，画出你的游戏的状态图。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "状态图（纸上或文本均可），至少包含初始、翻开两张、配对、等待翻回、完成和重开。"
        }
      ],
      "source": "index.html#p08",
      "seconds": 120
    },
    {
      "id": "p09",
      "segment": "去哪看",
      "label": "检查路线",
      "title": "六条检查路线",
      "lead": "按状态图挑路线，每条只回答一个问题。“完整打完一局”最容易漏：只玩几下，看不到结束时发生的事。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1.2fr) minmax(0,1.6fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>路线</span><span>看什么</span></div><div data-reveal=\"0\"><span>等待期点第三张</span><span>点得开吗？之后几张朝上？</span></div><div data-reveal=\"0\"><span>等待期点重开</span><span>新的一局干净吗？</span></div><div data-reveal=\"1\" class=\"is-key\"><span>完整打完一局</span><span>能结束吗？步数、提示对得上页面说的规则吗？</span></div><div data-reveal=\"2\"><span>通关后重开</span><span>最佳成绩、计时归零了吗？</span></div><div data-reveal=\"2\"><span>第一次点击</span><span>计时从哪一刻开始，数字对吗？</span></div><div data-reveal=\"2\"><span>手机与键盘</span><span>双击、Tab 加回车能玩吗？</span></div></div>",
      "steps": [
        "等待期",
        "完整一局",
        "其余路线"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，指向表格前两行（等待期点第三张、等待期点重开）；本页只讲路线，现场检查放到 p11】\n\n照着状态图挑检查路线。前两条都在等待期：点第三张，点得开吗？之后桌上几张朝上？点重开，新的一局干净吗？",
        "【操作提示｜推进课件 p09 第 2 步，指向高亮行“完整打完一局”；不切游戏页面】\n\n第三条最容易漏：完整打完一局。只玩几下，你永远看不到结束时发生的事。打完以后，对照页面上写的规则：说“找出全部 6 对”，那能不能找全？说“看看你用多少步”，步数对得上吗？",
        "【操作提示｜推进课件 p09 第 3 步，指向其余三行。页面里的 probe2.py 是讲师批量探查用，录制时不运行；念完暂停提示后留白】\n\n还有三条：通关后重开，最佳成绩和计时有没有归零；第一次点击时盯住计时，数字对不对；手机上双击、键盘上 Tab 加回车，能不能玩。请暂停视频，挑出适合你游戏的路线。"
      ],
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录，对一份构建好的记忆翻牌跑扩展探查（输出每个场景前后的游戏区文字，由人判断）",
            "code": "uv run courseware/ch03/materials/mainline/probe2.py <首页目录>"
          }
        ],
        "note": "讲师批量检查用；课上的检查由人完成。"
      },
      "teaching": [],
      "source": "index.html#p09",
      "seconds": 90
    },
    {
      "id": "p10",
      "segment": "去哪看",
      "label": "怎么记",
      "title": "一条记录：步骤、期望、实际、证据",
      "lead": "期望必须写出来，而且要有来源：页面上的文字、我们给的需求、还是我们心里想的。没有期望，就判断不了对错。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) minmax(0,1fr) minmax(0,.8fr);row-gap:12px;--rf:20px\"><div class=\"is-head\" data-reveal=\"0\"><span>最小步骤</span><span>期望</span><span>实际</span><span>证据</span></div><div data-reveal=\"0\"><span class=\"p-cell\">开新一局 → 翻开两张不同的牌 → 等它们翻回</span><span class=\"p-cell\" data-reveal=\"1\">步数变成 1<small>来源：页面写着“看看你要用多少步”</small></span><span class=\"p-cell\" data-reveal=\"2\">步数还是 0</span><span class=\"p-why\" data-reveal=\"2\">截图</span></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">期望写出<b>来源</b>：页面、需求，还是心里想的</div>",
      "steps": [
        "最小步骤",
        "期望",
        "实际与证据",
        "期望的来源"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向“最小步骤”一栏；不切窗口】\n\n每发现一件事，记一行。第一栏是最小步骤：最少几步能让它再出现一次。比如：开新一局，翻开两张不同的牌，等它们翻回去。",
        "【操作提示｜推进课件 p10 第 2 步，指向“期望：步数变成 1”；下方来源小字留到第 4 步再讲】\n\n第二栏是期望。这里期望步数变成 1。",
        "【操作提示｜推进课件 p10 第 3 步，指向“实际：步数还是 0”和“证据：截图”两格】\n\n第三栏是实际：步数还是 0。第四栏放证据，截图就行。",
        "【操作提示｜推进课件 p10 第 4 步，指向底部“期望写出来源”条，再回指期望栏的来源小字】\n\n注意期望这一栏，写上它的来源：是页面上写的，是我们给的需求，还是我们心里想当然的？这里的来源是页面上那句“看看你要用多少步”。来源会决定下一页的判断：它到底是缺陷，还是一条没人定过的规则。"
      ],
      "teaching": [],
      "source": "index.html#p10",
      "seconds": 120
    },
    {
      "id": "p11",
      "segment": "讲师的游戏",
      "label": "讲师的游戏查出了什么",
      "title": "讲师的游戏查出了什么",
      "lead": "前两条看起来都“没问题”：第三张点不开，步数不动。完整打完一局才发现：12 张牌全翻过一遍，没有两张相同的词，这一局永远打不完。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:16px;align-items:start\"><div class=\"p-page\" data-reveal=\"1\"><img src=\"evidence/run8-mismatch.png\" alt=\"翻开迭代和验收两张不同的牌，提示“不是一对，稍后自动翻回”，步数仍为 0\" style=\"display:block;width:100%\"></div><ul class=\"p-checks\"><li data-reveal=\"0\">等待期点第三张<small>没反应</small></li><li data-reveal=\"1\">翻错一次<small>步数还是 0</small></li><li class=\"is-no\" data-reveal=\"2\">完整打完一局<small>12 张全翻过：迭代、验收、感知、部署、智能体、端侧、量产、加速、需求、协作、推理、提示，没有两张相同</small></li></ul></div><p class=\"source-note\">讲师排练第 8 轮的实现（lab-runs/ch03-mainline/v2-run8，未提交）。来自讲师机器上的排练运行（2026-10-06，Codex 0.160.0–0.160.1 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "等待期",
        "翻错一次",
        "完整一局"
      ],
      "script": [
        "【操作提示｜课件 p11 第 1 步。按本页讲师提示，录制以当天的真实实现为准：现场演示时切 Chrome 复用 3.1 的游戏标签页（讲师练习项目 npm run dev 实际打印的 Local 地址）；没有现场实现时打开课件 p14 链接的 practice/memory-v0/index.html，并明说是排练第 8 轮的实现；开新一局，翻开两张不同的牌后立刻点第三张，展示实际反应再回课件。不现场演示时留在课件，明说画面来自排练】\n\n看讲师的游戏。第一条路线：等待期点第三张，没反应。",
        "【操作提示｜推进课件 p11 第 2 步，右侧截图 run8-mismatch.png 为排练第 8 轮记录，不现场重跑也可。现场演示时在同一游戏标签页翻错一次，指认提示文字和步数实际值；与口播不同时如实说明，不按口播硬念】\n\n翻错一次：提示“不是一对，稍后自动翻回”，步数还是 0。这两条看起来都像“没问题”，或者至少说不清是不是问题。",
        "【操作提示｜推进课件 p11 第 3 步，指向“完整打完一局”和 12 个词。现场演示时把 12 张逐一翻开记词，过程可剪辑；牌面每局随机，以实际翻到的词为准。若当天实现能配上对，如实说本实现没有这一缺陷，改用 practice/memory-v0 讲，回课件】\n\n第三条：完整打完一局。我把 12 张一对一对翻开，记下每张的词：迭代、验收、感知、部署……一共 12 个词，没有两张相同。也就是说，这一局永远打不完。页面上写着“找出全部 6 对词语”，一对都找不到。只玩几下，看不出来；完整打完一局，马上就看到了。"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "牌面顺序每局随机；12 个词见 courseware/ch03/materials/mainline/shoot.py 的输出。这份实现的执行回合末尾遇到上游错误中断，代码已完整、能构建，用作讲解样本，不计入多轮统计（materials/mainline/README.md）。"
        },
        {
          "title": "讲师提示",
          "text": "录制时以当天的真实实现为准。没有缺陷时，本页讲“查过、没发现”，3.3 改用这份实现作复现材料，并明说来源。"
        }
      ],
      "source": "index.html#p11",
      "seconds": 90
    },
    {
      "id": "p12",
      "segment": "判断",
      "label": "缺陷还是规则",
      "title": "缺陷，还是 AI 替你定的规则？",
      "lead": "缺陷违背了明确的期望；规则是没人问过你的选择，可能很合理。分不清的那一类，往往是“规则还没人定”。",
      "html": "<div class=\"p-quad\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">AI 定的规则</span><h3>等待期锁住点击</h3><p>900ms 后翻回；合理，但没人问过你</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">缺陷</span><h3>一局打不完</h3><p>和“找出全部 6 对”矛盾</p></div><div class=\"p-box is-dashed\" data-role=\"ink\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ink\">规则还没人定</span><h3>步数怎么算</h3><p>一张一步？两张一步？</p></div><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"3\"><span class=\"p-tag\" data-role=\"us\">问题清单</span><p>缺陷一栏，规则一栏</p></div></div>",
      "steps": [
        "AI 定的规则",
        "缺陷",
        "还没人定",
        "分两栏记"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向左上“AI 定的规则：等待期锁住点击”；900 毫秒出自讲师 3.1 排练计划，录制用的实现若写的是别的时长，录前对照 docs/evidence/CH03_MEMORY_GAME.md 里记下的计划原文核对】\n\n把查到的东西分类。等待期点不开，是 AI 定的规则。3.1 的计划里写过：翻错 900 毫秒后翻回，期间锁住输入。它很合理，但没有人问过我们。",
        "【操作提示｜推进课件 p12 第 2 步，指向右上“缺陷：一局打不完”卡；不切窗口】\n\n一局打不完，是缺陷：它违背了页面上明确写着的期望，“找出全部 6 对”。",
        "【操作提示｜推进课件 p12 第 3 步，指向虚线卡“规则还没人定：步数怎么算”】\n\n翻错时步数不变呢？看起来像缺陷，但再想一下：步数到底怎么算？翻一张算一步，还是翻两张算一步？翻错算不算？这件事从来没人定过。没有期望，就谈不上违背期望。这一类是“规则还没人定”。",
        "【操作提示｜推进课件 p12 第 4 步，指向右下“问题清单”卡；本页不打开 Codex、不改代码】\n\n所以问题清单分两栏：缺陷一栏，规则一栏，规则里再标出哪些还没人定。这一节不修，只记。"
      ],
      "teaching": [],
      "source": "index.html#p12",
      "seconds": 120
    },
    {
      "id": "p13",
      "segment": "判断",
      "label": "你的实现也会这样吗",
      "title": "同一句话，六份实现",
      "lead": "讲师用同一句需求排练了多次，6 份实现里 3 份有真实缺陷，规则也各不相同。你的版本会不同；自己没发现缺陷时，用讲师这一份做 3.3 的练习。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,.6fr) minmax(0,1.6fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>实现</span><span>发现</span><span>性质</span></div><div data-reveal=\"0\"><span>A</span><span>配上第一对就显示“全部配对完成”</span><span>缺陷</span></div><div data-reveal=\"0\"><span>B</span><span>第一次翻牌时用时显示“−1:−2”</span><span>缺陷</span></div><div data-reveal=\"0\" class=\"is-key\"><span>C（讲师）</span><span>12 张牌互不相同，一局打不完</span><span>缺陷</span></div><div data-reveal=\"1\"><span>各份</span><span>6 对、8 对，还有只做 3 对的</span><span>AI 定的规则</span></div><div data-reveal=\"1\"><span>各份</span><span>步数：有的一张算一步，有的两张算一步</span><span>AI 定的规则</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">都要<b>完整打完一局、盯住第一次点击、对照页面文字</b>才看得到</div>",
      "steps": [
        "三个缺陷",
        "各不相同的规则",
        "怎样才看得到"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，指向 A、B、C 三行；画面为排练第 1、4、8 轮的检查结果，不现场重跑。需要佐证 B 时可另开 evidence/run4-negative-timer.png，看完回课件】\n\n讲师用同一句需求，排练了多次。检查了 6 份实现，3 份有真实缺陷：一份配上第一对就显示“全部配对完成”；一份第一次翻牌时，用时显示成负数；还有讲师这一份，一局打不完。",
        "【操作提示｜推进课件 p13 第 2 步，指向两行“各份”的规则差异；不切窗口】\n\n规则更是各不相同：有的 6 对，有的 8 对，有一份只做了 3 对；步数有的一张算一步，有的两张算一步。每一份都是 AI 替我们定的。",
        "【操作提示｜推进课件 p13 第 3 步，指向底部“完整打完一局、盯住第一次点击、对照页面文字”条；不切窗口】\n\n这三个缺陷，只玩几下全都看不到：要完整打完一局，要盯住第一次点击，要对照页面上写的文字。所以你的版本会不同，可能有缺陷，也可能没有。没有发现缺陷，也是一个有效的结果；3.3 你可以用讲师这一份来练习。"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "六份实现与检查方法见 courseware/ch03/materials/mainline/README.md“扩展探查”；画面中 A、B、C 对应排练第 1、4、8 轮。B 的负数在第一次点击后不到 1 秒内显示，截图见 evidence/run4-negative-timer.png。"
        }
      ],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "小结",
      "label": "本节小结",
      "title": "只走成功路径，不等于验证",
      "lead": "本节留下状态图和分两栏的问题清单。“没出错”也可能只是 AI 替你做了决定。下一节：挑一个缺陷，按证据修。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停自检</span><div class=\"p-qlist\" data-reveal=\"0\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>“等待期点不开第三张”是缺陷吗？</h3><p data-reveal=\"1\">不是：AI 定的规则，合理，但要记下来</p></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>没写期望来源的记录，能判断对错吗？</h3><p data-reveal=\"1\">不能：先补上期望和来源</p></div></div></div><div class=\"p-grid\" data-reveal=\"2\" style=\"--n:2;align-items:center\"><div class=\"p-next\" style=\"margin-top:0\"><div class=\"p-box\" data-role=\"us\"><h3>3.3 按证据修</h3><p>先复现，再让 Codex 只调查</p></div></div><p class=\"p-links\"><a href=\"../../practice/memory-v0/index.html\" target=\"_blank\" rel=\"noopener\">试玩修复前的版本</a></p></div>",
      "steps": [
        "两道题",
        "答案",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p14 第 1 步，只显示两道题，不揭示答案；念完暂停提示后留白几秒】\n\n暂停一下，自己回答两道题。第一，“等待期点不开第三张”是缺陷吗？第二，一条没写期望来源的记录，能判断对错吗？",
        "【操作提示｜推进课件 p14 第 2 步，揭示两条答案；不切窗口】\n\n第一题：不是缺陷，是 AI 定的规则。它很合理，但要记下来，因为没人问过我们。第二题：不能。先补上期望和它的来源，再判断。",
        "【操作提示｜推进课件 p14 第 3 步，指向“3.3 按证据修”卡；“试玩修复前的版本”链接不在本节点开。本节到此结束】\n\n这一节的问题清单里，讲师最先看到的现象是“翻错时步数不动”。下一节就从它开始：先复现，再让 Codex 只调查、不改代码，看看能查到什么。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "状态图；问题清单（缺陷与规则分两栏，每条有最小步骤、期望及其来源、实际和证据）。"
        }
      ],
      "source": "index.html#p14",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "画状态",
      "seconds": 120
    },
    {
      "label": "去哪看",
      "seconds": 210
    },
    {
      "label": "讲师的游戏",
      "seconds": 90
    },
    {
      "label": "判断",
      "seconds": 210
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
