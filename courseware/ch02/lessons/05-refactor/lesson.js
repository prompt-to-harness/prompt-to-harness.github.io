window.lesson = {
  "title": "AI 说“只是重构”",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.05",
  "summary": "判断一次改动是不是重构，看可观察行为有没有变，不看提交说明、diff 大小，也不看截图是否好看。",
  "scenes": [
    {
      "id": "p53",
      "segment": "分拣",
      "layout": "lesson-cover",
      "label": "只是重构，能信吗",
      "title": "AI 说“只是重构”，能信吗？",
      "kicker": "第 2 章 · 2.5 · 工程经验",
      "lead": "AI 交回改动时常说“只是重构”，五张卡里哪几张是真的？",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>听反馈</li><li class=\"is-done\"><b>2.2</b>改一处</li><li class=\"is-done\"><b>2.3</b>审改动</li><li class=\"is-done\"><b>2.4</b>公开发布</li><li class=\"is-now\"><b>2.5</b>只是重构？</li></ol><div style=\"display:flex;align-items:center;gap:36px;margin-top:22px\"><p class=\"p-bubble is-ai\" data-reveal=\"1\" style=\"margin:0\">只是重构了一下，没改功能</p><p class=\"p-hand\" data-reveal=\"2\" style=\"margin:0\">怎么判断？</p></div>",
      "steps": [
        "最后一节",
        "AI 的说明",
        "问题"
      ],
      "script": [
        "本章最后一节，是一节工程经验。这一节不改自己的项目，看讲师在 homepage-v1 上准备的五张小卡。",
        "AI 交回改动时，常会附一句：只是重构了一下，没改功能。重构，英文是 refactor，很多提交说明就以这个词开头。",
        "这句话能不能信，我们怎么判断？先不下定义，直接看卡。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "五张卡是标明的教学判断题，不属于伪造的现场失败（决定 7）。教学材料：五张卡基于排练版 homepage-v1 制作（courseware/ch02/materials/refactor-cards/），每张单独应用，行为于 2026-10-05 在浏览器中实测；录制版基于讲师冻结的 homepage-v1 重新制作。"
        }
      ],
      "source": "index.html#p53",
      "seconds": 90
    },
    {
      "id": "p54",
      "segment": "分拣",
      "label": "五张卡分拣",
      "title": "五张卡，哪几张真的只是重构？",
      "kicker": "第 2 章 · 2.5 · 分拣",
      "lead": "五张卡都基于 homepage-v1，每张单独应用，提交说明都以 refactor 开头。先只看说明和 diff，把它们分成“行为没变”和“行为变了”两堆，每张写一句理由。",
      "html": "<div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr));gap:12px 14px\"><div class=\"p-q\" data-reveal=\"0\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 8px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">①</span><span class=\"p-say\" style=\"padding-right:0;font-size:20px\">把项目卡提取为组件</span></p><div class=\"p-code\" style=\"font-size:15px;line-height:1.45\"><div class=\"p-code-head\" style=\"font-size:15px;padding:3px 12px\"><span>2 个文件 +16 −4 · 新建 ProjectCard.tsx</span></div><pre style=\"padding:6px 12px\"><span class=\"add\">+ &lt;ProjectCard key=… project={project} /&gt;</span></pre></div></div><div class=\"p-q\" data-reveal=\"0\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 8px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">②</span><span class=\"p-say\" style=\"padding-right:0;font-size:20px\">把项目数据移到 projects.ts</span></p><div class=\"p-code\" style=\"font-size:15px;line-height:1.45\"><div class=\"p-code-head\" style=\"font-size:15px;padding:3px 12px\"><span>2 个文件 +15 −14 · 数组整段搬走</span></div><pre style=\"padding:6px 12px\"><span class=\"add\">+ import { projects } from './projects'</span></pre></div></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 8px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">③</span><span class=\"p-say\" style=\"padding-right:0;font-size:20px\">项目按名称排序</span></p><div class=\"p-code\" style=\"font-size:15px;line-height:1.45\"><div class=\"p-code-head\" style=\"font-size:15px;padding:3px 12px\"><span>1 个文件 +1 −1</span></div><pre style=\"padding:6px 12px\"><span class=\"add\">+ [...projects].sort((a, b) =&gt;\n    a.name.localeCompare(…))</span></pre></div></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 8px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">④</span><span class=\"p-say\" style=\"padding-right:0;font-size:20px\">缩短类名</span></p><div class=\"p-code\" style=\"font-size:15px;line-height:1.45\"><div class=\"p-code-head\" style=\"font-size:15px;padding:3px 12px\"><span>1 个文件 +1 −1</span></div><pre style=\"padding:6px 12px\"><span class=\"del\">- className=\"project-card__description\"</span><span class=\"add\">+ className=\"project-card__desc\"</span></pre></div></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 8px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">⑤</span><span class=\"p-say\" style=\"padding-right:0;font-size:20px\">项目卡可以用键盘聚焦</span></p><div class=\"p-code\" style=\"font-size:15px;line-height:1.45\"><div class=\"p-code-head\" style=\"font-size:15px;padding:3px 12px\"><span>1 个文件 +1 −1</span></div><pre style=\"padding:6px 12px\"><span class=\"add\">+ &lt;li className=\"project-card\" …\n    tabIndex={0}&gt;</span></pre></div></div><div data-reveal=\"2\" style=\"display:grid;align-content:center;gap:12px;padding:6px 4px\"><span class=\"p-pause\">暂停 · 分成两堆</span><p style=\"margin:0;font-size:21px;line-height:1.5\">行为没变：____<br>行为变了：____</p></div></div><p class=\"source-note\">教学材料：五张卡基于排练版 homepage-v1 制作（courseware/ch02/materials/refactor-cards/），每张单独应用，行为于 2026-10-05 在浏览器中实测；录制版基于讲师冻结的 homepage-v1 重新制作</p>",
      "steps": [
        "①②",
        "③④⑤",
        "暂停分拣"
      ],
      "script": [
        "第一张，把项目卡提取成 ProjectCard 组件，改了两个文件，16 行新增，4 行删除。第二张，把项目数据从 App.tsx 整段搬到新文件 projects.ts，也是两个文件，加起来 29 行。",
        "后三张都只改了一行。第三张，项目按名称排序。第四张，把描述的类名缩短成 project-card__desc。第五张，给项目卡加上 tabIndex 等于 0，让它能用键盘聚焦。",
        "请暂停视频。只凭说明和 diff，把五张卡分成两堆：行为没变，行为变了。每张写一句理由，写进 CH02_VIBE_ITERATIONS.md。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "学员看讲师提供的卡片与录屏判断，不要求在自己项目上复现（分段分镜默认取舍 4）。五张卡的完整 diff 见 courseware/ch02/materials/refactor-cards/。"
        }
      ],
      "source": "index.html#p54",
      "seconds": 90
    },
    {
      "id": "p55",
      "segment": "看行为",
      "label": "逐张对照",
      "title": "打开页面，逐张对照",
      "kicker": "第 2 章 · 2.5 · 看行为",
      "lead": "按查出差别的方法排序揭晓。①② 逐项对照都和原页面一样；③ 打开页面就能看到顺序变了；④ 要和原页面并排比；⑤ 要按 Tab 才发现。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr) minmax(0,1.7fr) minmax(0,.5fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>卡</span><span>怎么查</span><span>看到什么</span><span class=\"p-c\">结论</span></div><div data-reveal=\"0\"><span>① 提取组件<br>② 移动数据</span><span>逐项对照清单</span><span>文字、点击、Tab、三种视口都和原页面一样</span><span class=\"p-c\" style=\"color:#11652F;font-weight:700\">没变</span></div><div data-reveal=\"1\"><span>③ 按名称排序</span><span>打开页面看</span><span>顺序变成 端侧、红绿灯、RoboHarness</span><span class=\"p-c\" style=\"color:#A8350F;font-weight:700\">变了</span></div><div data-reveal=\"2\"><span>④ 缩短类名</span><span>和原页面并排比</span><span>描述变深、行距变小，每张卡高 17px</span><span class=\"p-c\" style=\"color:#A8350F;font-weight:700\">变了</span></div><div data-reveal=\"3\"><span>⑤ 可聚焦</span><span>按 Tab</span><span>焦点依次停在三张卡上，出现焦点框</span><span class=\"p-c\" style=\"color:#A8350F;font-weight:700\">变了</span></div></div><div class=\"p-bar\" data-reveal=\"4\" style=\"margin-top:6px\">打开页面 → 并排比 → 按键盘：差别<b>一张比一张难发现</b></div><p class=\"source-note\">教学材料：五张卡基于排练版 homepage-v1 制作（courseware/ch02/materials/refactor-cards/），每张单独应用，行为于 2026-10-05 在浏览器中实测；录制版基于讲师冻结的 homepage-v1 重新制作。①② 渲染出的页面结构与 homepage-v1 逐字相同；④ 的尺寸为 1440×900 下测得。</p>",
      "steps": [
        "①②",
        "③",
        "④",
        "⑤",
        "越来越难"
      ],
      "script": [
        "先看前两张。按 2.2 的清单逐项对照：文字、点击项目卡、Tab、三种视口，都和原页面一样。我们还对比了浏览器渲染出的页面结构，逐字相同。第二张的 diff 有 29 行，行为一点没变。",
        "第三张只改了一行。打开页面就能看到：项目顺序从红绿灯、端侧、RoboHarness，变成了端侧、红绿灯、RoboHarness。用户看到的顺序变了，行为就变了。",
        "第四张也只改一行，单看这一页不容易察觉。和原页面并排放：描述文字从灰色变成深色，行距变小，每张卡高了 17 像素。原因是 CSS 里只给 project-card__description 写了样式，新类名没有对应的规则。构建照样通过，没有任何报错。",
        "第五张，截图和点击都和原来一样。按 Tab 才会发现：焦点在“查看项目”之后，依次停在三张卡上，还出现了焦点框。",
        "回头看：前两张要逐项查完，才能说行为没变；后三张一张比一张难发现，从打开页面，到并排比，再到用键盘操作。对照你暂停时的分拣，哪几张分对了？"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "录屏：五张卡各自构建后用静态服务器打开。③ 与 v1 同屏对照顺序，④ 与 v1 左右并排，⑤ 在 1440×900 下从页面顶部连续按 Tab，焦点框放大到看得清。核对方法与结果见 courseware/ch02/materials/README.md。"
        }
      ],
      "source": "index.html#p55",
      "seconds": 150
    },
    {
      "id": "p56",
      "segment": "看行为",
      "label": "凭什么这样分",
      "title": "凭什么这样分",
      "kicker": "第 2 章 · 2.5 · 看行为",
      "lead": "Martin Fowler 在《重构》里给的定义：在不改变可观察行为的前提下，改善代码的内部结构。可观察行为就是用户能看到、能操作的东西；提交说明和 diff 大小都不算数。⑤ 看起来回应了 2.1 的第 2 条反馈，它也是行为变化，要拆出来由人确认。",
      "html": "<div class=\"p-bar\" data-reveal=\"0\">重构 = <b>可观察行为不变</b>，内部结构变好</div><div class=\"p-pair\" data-reveal=\"1\" style=\"grid-template-columns:1fr auto 1fr;margin-top:12px\"><div class=\"p-box\" data-role=\"ok\"><span class=\"p-tag\" data-role=\"ok\">② 29 行</span><p>行为没变</p></div><div class=\"p-join\"><span>和大小无关</span></div><div class=\"p-box\" data-role=\"gate\"><span class=\"p-tag\" data-role=\"gate\">③ 1 行</span><p>顺序变了</p></div></div><div class=\"p-grid\" style=\"--n:2;gap:14px;margin-top:12px\"><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"2\"><h3>⑤ 与 2.1 第 2 条</h3><p>能聚焦了，按回车仍没反应<br>拆开：行为变化由人确认，再作为需求去做</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"3\"><h3>回看 2.2</h3><p>补充项目经历是需求变化，也不是重构</p></div></div>",
      "steps": [
        "定义",
        "和大小无关",
        "第 2 条",
        "回看 2.2"
      ],
      "script": [
        "现在给出定义。Martin Fowler 在《重构》里说：重构，是在不改变可观察行为的前提下，改善代码的内部结构。可观察行为，就是用户能看到、能操作的东西：文字、顺序、样式、点击、键盘。按这个定义，只有第一、二张是重构。",
        "分拣时，很容易按 diff 大小判断：改得多就危险，改得少就安全。这五张卡正好反过来：第二张 29 行，行为没变；第三张一行，顺序就变了。提交说明也帮不上忙，五张都写着 refactor。",
        "第五张最容易让人想收。回想 2.1 的第 2 条反馈：项目卡看着能点，点了没反应。它是既有决定，改不改由人决定。第五张让卡片能聚焦，看上去在回应这条反馈，可聚焦以后按回车仍然没有反应，键盘用户只是多停了三次。处理方式是拆开：行为变化单独提出来，由人决定要不要、怎么做，再作为一次需求变化去做。",
        "顺便回看 2.2：我们补充项目经历，改的是页面内容，那是需求变化，也不是重构。重构只有一种：行为不变，结构变了。"
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
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>AI 交回 ④ 时说“构建通过，没有报错”。这能说明行为没变吗？</h3><div data-reveal=\"1\"><p>不能。④ 实测构建成功，样式却丢了；类名写错不会报错，构建只说明代码能打包<span class=\"p-back-to\" data-role=\"gate\">回到 ④</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>要确认 ① 没有改变行为，你需要重查哪些项目？</h3><div data-reveal=\"2\"><p>文字与顺序、和原页面并排比样式、点击项目卡、Tab、三种视口；没查的项标“待验证”<span class=\"p-back-to\" data-role=\"ok\">回到 2.2 检查</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题"
      ],
      "script": [
        "暂停一下，回答两个问题。第一，AI 交回第四张卡时说：构建通过，没有报错。这能说明行为没变吗？第二，要确认第一张卡没改行为，你需要重查哪些项目？",
        "第一题，不能。第四张实测构建成功，可描述的样式已经丢了。类名写错，构建工具不会报错，它只负责把代码打包出来。2.3 说过，本章的自动检查只有构建，其余要靠人看。",
        "第二题，要重查文字和顺序，和原页面并排比样式，点击项目卡，按 Tab，再看三种视口。哪项没查，就标成“待验证”，不能因为提交说明写着 refactor，就当它查过了。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "在 CH02_VIBE_ITERATIONS.md 写下哪几张只是重构，每张引用一条具体行为证据（顺序、样式、Tab 等）。"
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
      "lead": "现在的项目没有覆盖这些行为的自动测试。确认“行为不变”只能把文字与顺序、样式、点击、键盘和三种视口全部手工查一遍，每改一次就重复一次。验证很贵，这是后面规格与 Harness 章节要解决的问题。本章交付物：迭代记录、审过的提交、推送前检查记录、公开 URL 和 ch02-homepage-live tag。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px;align-items:stretch\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"0\"><h3>每次都要重查</h3><p>文字与顺序 · 并排比样式 · 点击 · Tab · 三种视口</p></div><div class=\"p-bar\" data-reveal=\"1\" style=\"display:flex;align-items:center\">没有测试，<b>验证很贵</b></div></div><div class=\"p-flow\" style=\"--n:5;margin-top:16px\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"2\"><h3>2.1 反馈</h3><p>带证据的清单</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"2\"><h3>2.2 小改</h3><p>一轮一个结果</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"2\"><h3>2.3 审查</h3><p>可回退的提交</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\"><h3>2.4 发布</h3><p>公开 URL 与 tag</p></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"2\"><h3>2.5 重构</h3><p>看可观察行为</p></div></div><div class=\"p-bar is-light\" data-reveal=\"3\" style=\"margin-top:14px\">下一章 · 第 3 章：给首页加一个小游戏</div>",
      "steps": [
        "手工清单",
        "验证很贵",
        "回看本章",
        "下一章"
      ],
      "script": [
        "最后想一个问题：分拣这五张卡，我们用到了文字与顺序、并排比样式、点击、Tab 和三种视口。这个项目没有覆盖这些行为的自动测试，所以每改一次，就得手工全部重查一次。",
        "这一章我们一直在手工验证，每一轮都是。验证很贵，而且越往后改动越多，越容易漏。怎样把“行为”写下来、让检查自动跑起来，是后面规格和 Harness 章节要解决的问题。",
        "回看这一章：2.1 先听反馈，留下带证据的清单；2.2 只改一处，并证明没弄坏别的；2.3 读懂 diff 再收，留下可回退的提交；2.4 看清历史再推送，发布后用三项检查证明页面可用；2.5 判断重构，看的是可观察行为，不是提交说明和 diff 大小。首页 v0 变成了一个有公开 URL 的 v1。",
        "第 2 章到这里结束。下一章，我们给首页加一个小游戏，体验更快的迭代，也会遇到第一个需要真正调试的问题。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "伏笔只点到为止，不提前讲测试框架。第 3 章预告按第 3 章定稿调整。全章回顾 2026-10-05 起从 2.4 p52 移到本页（讲师确认）。"
        }
      ],
      "source": "index.html#p58",
      "seconds": 120
    }
  ],
  "segments": [
    {
      "label": "分拣",
      "seconds": 180
    },
    {
      "label": "看行为",
      "seconds": 270
    },
    {
      "label": "收尾",
      "seconds": 210
    }
  ]
};
