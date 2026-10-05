window.lesson = {
  "title": "AI 说“只是重构”",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.05",
  "summary": "判断一次改动是不是重构，看可观察行为有没有变，不看代码是否更短、截图是否更好看。",
  "scenes": [
    {
      "id": "p53",
      "segment": "两份 diff",
      "layout": "lesson-cover",
      "label": "只是重构，能信吗",
      "title": "AI 说“只是重构了一下”，能信吗？",
      "kicker": "第 2 章 · 2.5 · 工程经验",
      "lead": "这一节不改自己的项目，看两份标明为教学材料的 diff。它们的提交说明一模一样：把项目卡提取为 ProjectCard 组件。哪一份真的只是重构？",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>听反馈</li><li class=\"is-done\"><b>2.2</b>改一处</li><li class=\"is-done\"><b>2.3</b>审改动</li><li class=\"is-done\"><b>2.4</b>公开发布</li><li class=\"is-now\"><b>2.5</b>只是重构？</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:20px\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">教学材料 A</span><p class=\"p-mono\" style=\"margin-top:6px\">refactor: 把项目卡提取为 ProjectCard 组件</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">教学材料 B</span><p class=\"p-mono\" style=\"margin-top:6px\">refactor: 把项目卡提取为 ProjectCard 组件</p></div></div><p class=\"p-hand\" data-reveal=\"2\">说明一样，行为一样吗？</p>",
      "steps": [
        "最后一节",
        "两份说明",
        "问题"
      ],
      "script": [
        "本章最后一节，是一节工程经验。我们不改自己的项目，而是看两份课程准备的教学材料。",
        "两份 diff 都基于讲师的 homepage-v1，提交说明一字不差：refactor，把项目卡提取为 ProjectCard 组件。refactor 就是重构的意思。",
        "AI 交来改动时常说“只是重构了一下，没改功能”。说明一样，它们的行为也一样吗？我们怎么判断？"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "两份 diff 是标明的教学判断题，不属于伪造的现场失败（决定 7）。教学材料：两份 diff 基于排练版 homepage-v1 制作（courseware/ch02/materials/），行为于 2026-10-03 在浏览器中核对；录制版基于讲师冻结的 homepage-v1 重新制作。"
        }
      ],
      "source": "index.html#p53",
      "seconds": 90
    },
    {
      "id": "p54",
      "segment": "两份 diff",
      "label": "两份 diff 有什么不同",
      "title": "先看 diff：两份有什么不同",
      "kicker": "第 2 章 · 2.5 · 两份 diff",
      "lead": "A 新建了 ProjectCard 组件，App.tsx 改为调用它。B 做了同样的提取，另外把卡片内容包进一个链接，还在 index.css 里加了悬停和焦点样式。先凭印象选：哪份是重构？",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:18px;align-items:start\"><div style=\"display:grid;gap:12px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">A · 2 个文件 +16 −4</span><p class=\"p-mono\" style=\"line-height:1.6\">src/App.tsx<br>src/ProjectCard.tsx（新建）</p></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">B · 3 个文件 +35 −4</span><p class=\"p-mono\" style=\"line-height:1.6\">src/App.tsx<br>src/ProjectCard.tsx（新建）<br><b>src/index.css</b></p></div></div><div class=\"p-code\" data-reveal=\"2\"><div class=\"p-code-head\"><span>B 的 ProjectCard.tsx（节选）</span><span>比 A 多两行</span></div><pre style=\"color:inherit\">&lt;li className=\"project-card\"&gt;\n<span class=\"add\">  &lt;a className=\"project-card__link\"\n     href=\"#\"&gt;</span>    &lt;h3 …&gt;{project.name}&lt;/h3&gt;\n    &lt;p …&gt;{project.description}&lt;/p&gt;\n<span class=\"add\">  &lt;/a&gt;</span>&lt;/li&gt;</pre></div></div><p class=\"source-note\">教学材料：两份 diff 基于排练版 homepage-v1 制作（courseware/ch02/materials/），行为于 2026-10-03 在浏览器中核对；录制版基于讲师冻结的 homepage-v1 重新制作</p>",
      "steps": [
        "A",
        "B",
        "多出来的两行"
      ],
      "script": [
        "先看文件范围。A 改了两个文件：新建 ProjectCard.tsx，把原来写在 App.tsx 里的卡片结构搬进去；App.tsx 改成调用这个组件。一共 16 行新增，4 行删除。",
        "B 改了三个文件。前两个和 A 一样，多了一个 index.css，一共 35 行新增。",
        "打开 B 的组件文件，和 A 只差两行：卡片的内容被包进了一个链接，href 是一个井号。加上 index.css 里新增的样式。读到这里，先凭印象选一下：哪份是重构？两份都是吗？"
      ],
      "teaching": [],
      "source": "index.html#p54",
      "seconds": 90
    },
    {
      "id": "p55",
      "segment": "看行为",
      "label": "页面上实际变了什么",
      "title": "不看代码，看页面上实际变了什么",
      "kicker": "第 2 章 · 2.5 · 看行为",
      "lead": "重构的定义来自 Martin Fowler 的《重构》：在不改变可观察行为的前提下，改善代码的内部结构。所以判断标准不是 diff 长什么样，而是页面上能看到、能操作的东西有没有变。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.3fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>检查</span><span>homepage-v1</span><span>A</span><span>B</span></div><div data-reveal=\"0\"><span>截图</span><span>基准</span><span>相同</span><span>几乎相同</span></div><div data-reveal=\"1\"><span>点击项目卡</span><span>无反应</span><span>无反应</span><span><b>地址多出 #</b></span></div><div data-reveal=\"2\"><span>Tab 停留</span><span>只有“查看项目”</span><span>同左</span><span><b>再加三张卡</b></span></div><div data-reveal=\"2\"><span>焦点样式</span><span>无</span><span>无</span><span><b>描边框、边框变绿</b></span></div></div><div class=\"p-bar\" data-reveal=\"3\">重构 = <b>不改变可观察行为</b>，只改内部结构</div><p class=\"source-note\">教学材料：两份 diff 基于排练版 homepage-v1 制作（courseware/ch02/materials/），行为于 2026-10-03 在浏览器中核对；录制版基于讲师冻结的 homepage-v1 重新制作。 A 渲染出的页面结构与 homepage-v1 逐字相同。</p>",
      "steps": [
        "截图",
        "点击",
        "键盘",
        "定义"
      ],
      "script": [
        "不看代码，看页面。三个版本并排截图：homepage-v1、A、B，几乎看不出区别。只看截图，两份都像重构。",
        "点一下项目卡。v1 和 A 都没反应。项目卡不跳转，是第 1 章做首页时定下的行为。B 点了以后，地址栏末尾多了一个井号。",
        "再按 Tab。v1 和 A，焦点只停在“查看项目”按钮上。B 的焦点会依次停在三张卡片上，还出现了描边框，卡片边框变成绿色。",
        "这就是 Martin Fowler 在《重构》里给的定义：在不改变可观察行为的前提下，改善代码的内部结构。可观察行为，就是用户能看到、能操作的东西。A 保持了行为，是重构。B 改变了点击和键盘行为，不管提交说明怎么写，它都不只是重构。请暂停视频，对照这张表，写下你的判断和依据。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "录屏三个版本：1440×900 下点击第三张卡、连续按 Tab，焦点要放大到看得清。核对方法与结果见 courseware/ch02/materials/README.md。"
        },
        {
          "title": "讲师提示",
          "text": "学员看讲师提供的 diff 与录屏判断，不要求在自己项目上复现（分段分镜默认取舍 4）。"
        }
      ],
      "source": "index.html#p55",
      "seconds": 120
    },
    {
      "id": "p56",
      "segment": "看行为",
      "label": "正好解决了第 2 条",
      "title": "B 正好“解决”了第 2 条反馈，收不收？",
      "kicker": "第 2 章 · 2.5 · 看行为",
      "lead": "B 让卡片能点、能聚焦，看上去回应了 2.1 的第 2 条“点了没反应”。但项目卡不跳转是第 1 章做首页时定下的，第 2 条要不要改由人决定。B 是一次未经确认的行为变化，即使受欢迎，也要另行确认。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">2.1 第 2 条</span><p>“项目卡看着能点，点了没反应”</p><p class=\"p-sub\">性质：既有决定 · 改不改由人决定</p></div><div class=\"p-join\" data-reveal=\"1\"><span>B 顺手</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">行为变了</span><p>能点，但跳到 #<br>能聚焦，但没有目的地</p></div></div><div class=\"p-grid\" style=\"--n:2;gap:14px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"2\"><h3>该怎么处理</h3><p>拆开：重构部分可收；行为变化单独提出，由人确认</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"3\"><h3>回看 2.2</h3><p>补充项目经历是需求变化，也不是重构</p></div></div>",
      "steps": [
        "第 2 条",
        "B 做了什么",
        "怎么处理",
        "回看 2.2"
      ],
      "script": [
        "B 很有诱惑力。回想 2.1 的第 2 条反馈：项目卡看着能点，点了没反应。我们当时给它贴的标签是“既有决定”：项目卡不跳转，是第 1 章做首页时我们自己定的，改不改要由人决定。",
        "B 顺手让卡片能点、能聚焦了，看上去正好解决了这条反馈。可仔细看：点了跳到井号，也就是回到页面顶部；能聚焦，却没有任何目的地。这不是我们讨论过、确认过的方案。",
        "所以处理方式是拆开。提取组件的部分是重构，可以收；让卡片可点击是行为变化，要单独提出来，由人确认要不要、要的话链到哪里，再作为一次需求变化去做。受欢迎的行为变化，也需要确认。",
        "顺便回看 2.2：我们补充项目经历，改的是页面上的内容，那是需求变化，也不是重构。重构只有一种：行为不变，结构变了。"
      ],
      "teaching": [],
      "source": "index.html#p56",
      "seconds": 120
    },
    {
      "id": "p57",
      "segment": "收尾",
      "label": "暂停自检",
      "title": "暂停自检",
      "kicker": "第 2 章 · 2.5 · 收尾",
      "lead": "先独立作答，再看解析。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>A 让 App.tsx 少了 3 行，结构也更清楚。这能证明它是正确的重构吗？</h3><div data-reveal=\"1\"><p>不能。代码行数和整洁程度说明不了行为；何况 A 加上新文件，总行数反而变多了<span class=\"p-back-to\" data-role=\"agent\">回到 看行为</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>要确认 A 没有改变行为，你需要重查哪些项目？</h3><div data-reveal=\"2\"><p>文字内容、点击项目卡、Tab 焦点顺序、三种视口下的排版；构建另行检查。没查的项标“待验证”<span class=\"p-back-to\" data-role=\"ok\">回到 2.2 检查</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题"
      ],
      "script": [
        "暂停一下，回答两个问题。第一，A 让 App.tsx 少了 3 行，结构也更清楚，这能证明它是正确的重构吗？第二，要确认 A 没有改变行为，你需要重查哪些项目？",
        "第一题，不能。行数和整洁程度说明不了行为有没有变。何况 A 新建了一个 13 行的组件文件，总行数反而变多了。判断重构，只能看可观察行为。",
        "第二题，要重查文字内容是否一致、点击项目卡的反应、Tab 焦点顺序，以及三种视口下的排版；能不能构建另行检查。没有证据的项，标成“待验证”，不能因为它叫“教学材料 A”就当它没问题。把判断写进 CH02_VIBE_ITERATIONS.md。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "在 CH02_VIBE_ITERATIONS.md 补充重构与行为变化判断，引用具体行为证据（点击、Tab、焦点样式）。"
        }
      ],
      "source": "index.html#p57",
      "seconds": 90
    },
    {
      "id": "p58",
      "segment": "收尾",
      "label": "每次都手工查吗",
      "title": "每次都这样手工重查吗？",
      "kicker": "第 2 章 · 2.5 · 收尾",
      "lead": "现在的项目没有覆盖这些行为的自动测试。确认“行为不变”只能把内容、点击、三种视口和键盘全部手工查一遍，每改一次就重复一次。验证很贵，这是后面规格与 Harness 章节要解决的问题。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h4>每次都要重查</h4><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-stop\">文字内容</li><li class=\"is-stop\">点击项目卡</li><li class=\"is-stop\">Tab 焦点</li><li class=\"is-stop\">三种视口</li></ul></div><div data-reveal=\"1\"><h4 style=\"text-align:center\">一个认识</h4><div class=\"p-star\" style=\"width:260px;font-size:24px\">没有测试<br>验证很贵</div></div><div class=\"p-next\" data-reveal=\"2\"><h4>下一章</h4><div class=\"p-box\" data-role=\"us\"><h3>第 3 章</h3><p>给首页加一个小游戏</p></div></div></div>",
      "steps": [
        "手工清单",
        "验证很贵",
        "下一章"
      ],
      "script": [
        "最后想一个问题：判断 A 是不是重构，我们要重查文字、点击、Tab 焦点、三种视口。这个项目没有覆盖这些行为的自动测试，所以每改一次，就得手工全部重查一次。",
        "这一章我们一直在手工验证，每一轮都是。验证很贵，而且越往后改动越多，越容易漏。怎样把“行为”写下来、让检查自动跑起来，是后面规格和 Harness 章节要解决的问题。",
        "第 2 章到这里结束，我们有了一个公开的首页 v1。下一章，我们给它加一个小游戏，体验更快的迭代，也会遇到第一个需要真正调试的问题。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "伏笔只点到为止，不提前讲测试框架。第 3 章预告按第 3 章定稿调整。"
        }
      ],
      "source": "index.html#p58",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "两份 diff",
      "seconds": 180
    },
    {
      "label": "看行为",
      "seconds": 240
    },
    {
      "label": "收尾",
      "seconds": 180
    }
  ]
};
