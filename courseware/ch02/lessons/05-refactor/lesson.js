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
      "lead": "课程设定的情境：个人主页上线后，Codex 交回五个改动，都说“只是重构”",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-done\"><b>2.3</b>审改动</li><li class=\"is-done\"><b>2.4</b>发布上线</li><li class=\"is-now\"><b>2.5</b>只是重构？</li></ol><div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:14px 28px;margin-top:22px\"><p data-reveal=\"1\" style=\"margin:0;display:flex;align-items:center;gap:10px\"><span class=\"p-tag\" data-role=\"ctx\">课程设定的情境</span><span>个人主页已上线，让 Codex 整理一下代码</span></p><p class=\"p-bubble is-ai\" data-reveal=\"2\" style=\"margin:0\">交回五个改动：只是重构，行为不变</p><p class=\"p-hand\" data-reveal=\"3\" style=\"margin:0\">推上去所有人都会看到。依据在哪？</p></div>",
      "steps": [
        "最后一节",
        "发布之后",
        "AI 的说明",
        "依据在哪"
      ],
      "script": [
        "【操作提示｜停留课件 p53 第 1 步，指向章节地图上的 2.5。本节只用讲师基于 homepage-v1 准备的五张卡（courseware/ch02/materials/refactor-cards/），不切到自己的练习项目，也不现场让 Codex 改代码】\n\n本章最后一节，是一节工程经验。这一节不改自己的项目，我们换一个发布之后才会遇到的情境。",
        "【操作提示｜推进课件第 2 步，指向“课程设定的情境”标签和右边一句；说清这是设定的情境，不切窗口】\n\n个人主页已经上线了。下面是课程设定的一个情境：假设你让 Codex 整理一下代码。",
        "【操作提示｜推进第 3 步，指向 AI 气泡“交回五个改动：只是重构，行为不变”；说明五个改动是讲师准备的教学材料】\n\n它交回五个改动，每个的说明都写着：只是重构，行为不变。重构，英文是 refactor，很多提交说明就以这个词开头。这五个改动是讲师在 homepage-v1 上准备的教学材料，不是一次真实运行。",
        "【操作提示｜推进第 4 步，指向手写的“推上去所有人都会看到。依据在哪？”；讲完进入 p54】\n\n上线之前改坏了，只有自己看得到；现在推上去，所有看你个人主页的人都会看到。改错了，就是一次公开的回归。所以推之前先问一句：只是重构，行为不变，这个结论的依据在哪？"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "开头是课程设定的情境，五张卡是标明的教学判断题，不说成一次真实运行，也不属于伪造的现场失败（决定 7）。教学材料：五张卡基于 homepage-v1 制作（courseware/ch02/materials/refactor-cards/），每张单独应用；页面截图与数值 2026-10-06 在 1440×900 下用浏览器实测（shoot.py）。截图来自 v1 冻结候选；录制版基于讲师冻结的 homepage-v1 重新制作、重新拍摄。"
        }
      ],
      "source": "index.html#p53",
      "seconds": 120
    },
    {
      "id": "p54",
      "segment": "分拣",
      "label": "依据在哪",
      "title": "“只是重构”，依据在哪？",
      "lead": "五张卡都基于 homepage-v1，每张单独应用，AI 交回时都说“只是重构，行为不变”。这句话是结论。先只看说明和改动大小，对每张写两件事：说明和 diff 能说明什么；还缺哪项运行检查，才能下结论。拿不准就写“证据不足”。",
      "html": "<div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr));gap:12px 14px\"><div class=\"p-q\" data-reveal=\"0\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 6px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">①</span><span style=\"font-size:15px;color:#4A5260\">refactor · 2 个文件 +16 −4</span></p><p style=\"margin:0;font-size:18px;font-weight:700;line-height:1.45\">抽出 ProjectCard 组件，App.tsx 更清爽。只是重构，行为不变。</p></div><div class=\"p-q\" data-reveal=\"0\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 6px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">②</span><span style=\"font-size:15px;color:#4A5260\">refactor · 2 个文件 +15 −14</span></p><p style=\"margin:0;font-size:18px;font-weight:700;line-height:1.45\">把项目数据移到 projects.ts，数据和页面分开。只是重构，行为不变。</p></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 6px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">③</span><span style=\"font-size:15px;color:#4A5260\">refactor · 1 个文件 +1 −1</span></p><p style=\"margin:0;font-size:18px;font-weight:700;line-height:1.45\">项目列表按名称排序，找起来更方便。只是重构，行为不变。</p></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 6px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">④</span><span style=\"font-size:15px;color:#4A5260\">refactor · 1 个文件 +1 −1</span></p><p style=\"margin:0;font-size:18px;font-weight:700;line-height:1.45\">统一类名风格，把 __description 缩短为 __desc。只是重构，行为不变。</p></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:0;padding:10px 14px\"><p style=\"margin:0 0 6px;display:flex;align-items:baseline;gap:8px\"><span style=\"font:400 28px/1 var(--p-title);color:#243042\">⑤</span><span style=\"font-size:15px;color:#4A5260\">refactor · 1 个文件 +1 −1</span></p><p style=\"margin:0;font-size:18px;font-weight:700;line-height:1.45\">给项目卡加上 tabIndex，键盘也能聚焦。只是重构，行为不变。</p></div><div data-reveal=\"2\" style=\"display:grid;align-content:center;gap:10px;padding:6px 4px\"><span class=\"p-pause\">暂停 · 每张写两件事</span><p style=\"margin:0;font-size:18px;line-height:1.55\">1. 说明和 diff 能说明什么<br>2. 还缺哪项运行检查：打开页面 · 并排比 · 按 Tab · 三种屏幕尺寸<br>拿不准：证据不足</p></div></div><p class=\"source-note\">教学材料：五张卡基于 homepage-v1 制作（courseware/ch02/materials/refactor-cards/），每张单独应用；页面截图与数值 2026-10-06 在 1440×900 下用浏览器实测（shoot.py）</p>",
      "steps": [
        "①②",
        "③④⑤",
        "暂停"
      ],
      "script": [
        "【操作提示｜课件 p54 第 1 步，只出现 ①② 两张卡；指向每张卡的改动大小（2 个文件 +16 −4、+15 −14）。五张卡是教学材料，提交说明是写好的，不是真实运行输出；不切窗口】\n\n先看五张卡的说明。第一张，AI 说把项目卡抽成了 ProjectCard 组件，改了两个文件，16 行新增、4 行删除。第二张，把项目数据移到 projects.ts，也是两个文件，加起来 29 行。",
        "【操作提示｜推进第 2 步，出现 ③④⑤，指向三张卡都是 1 个文件 +1 −1，以及五张卡相同的结尾“只是重构，行为不变”】\n\n后三张都只改了一行。第三张说项目列表按名称排序；第四张说把类名缩短了；第五张说给项目卡加了 tabIndex，键盘也能聚焦。五张的结尾都是同一句：只是重构，行为不变。这句话是结论，不是依据。",
        "【操作提示｜推进第 3 步，停在“暂停 · 每张写两件事”，不提前揭示任何一张的结论。留出暂停视频的时间；不切窗口演示填写笔记】\n\n请暂停视频。先别急着判断变没变，对每张卡写两件事。第一，手上的说明和 diff 能说明什么。第二，还缺哪项运行检查才能下结论：打开页面、和原页面并排比、按 Tab，还是换三种屏幕尺寸。拿不准就写“证据不足”。写在自己的笔记里，接下来一张一张看。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "学员看讲师提供的卡片与证据判断，不要求在自己项目上复现（分段分镜默认取舍 4）。评价看“依据在哪”写得清不清楚：说明和 diff 能说明到哪一步、缺的运行检查是哪一项，不看猜中几张。五张卡的完整 diff 在各自页面的“完整 diff”弹窗里，原文件见 courseware/ch02/materials/refactor-cards/。"
        }
      ],
      "source": "index.html#p54",
      "seconds": 90
    },
    {
      "id": "p55-12",
      "segment": "看行为",
      "label": "①② 提取组件、移动数据",
      "title": "①② 各改了二三十行，行为呢？",
      "lead": "两张卡都改了两个文件，各 20 到 30 行。说明和 diff 是 Codex 交回来的，读下来只能推断行为没变；页面上只放关键几行，完整改动点“完整 diff”查看。要下结论，得逐项做运行检查。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-aside\" style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:start\"><div style=\"display:grid;gap:8px;justify-items:start;min-width:0;grid-template-columns:minmax(0,1fr)\"><p class=\"p-bubble is-ai\" data-reveal=\"0\" style=\"margin:0 0 6px;font-size:16px;padding:6px 12px;justify-self:stretch\">① 抽出 ProjectCard 组件，App.tsx 更清爽。只是重构，行为不变。</p><div style=\"position:relative;justify-self:stretch\"><div class=\"p-code\" data-reveal=\"0\" style=\"font-size:13px;line-height:1.45;justify-self:stretch\"><div class=\"p-code-head\" style=\"font-size:14px;padding:2px 12px\"><span>src/App.tsx · 另新建 ProjectCard.tsx</span><span>refactor · 2 个文件 +16 −4</span></div><pre style=\"padding:5px 12px;white-space:pre\"><span class=\"add\">+ import ProjectCard from './ProjectCard'</span><span style=\"display:block\">  {projects.map((project) =&gt; (</span><span class=\"del\">-   &lt;li className=\"project-card\" key={project.name}&gt;</span><span class=\"del\">-     &lt;h3 className=\"project-card__name\"&gt;{project.name}&lt;/h3&gt;</span><span class=\"del\">-     &lt;p className=\"project-card__description\"&gt;{project.description}&lt;/p&gt;</span><span class=\"del\">-   &lt;/li&gt;</span><span class=\"add\">+   &lt;ProjectCard key={project.name} project={project} /&gt;</span></pre></div><span class=\"p-stamp\" data-reveal=\"3\" style=\"--c:#11652F;top:auto;bottom:-18px;right:8px\">行为没变</span></div><div data-reveal=\"0\"><details class=\"p-pop\"><summary>完整 diff</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>① 完整 diff（01-extract-component.diff）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-code\"><div class=\"p-code-head\"><span>src/App.tsx</span><span>+3 −4</span></div><pre><span class=\"at\">@@ -1,3 +1,5 @@</span><span class=\"add\">+import ProjectCard from &#x27;./ProjectCard&#x27;</span><span class=\"add\">+</span><span style=\"display:block\"> const projects = [</span><span style=\"display:block\">   {</span><span style=\"display:block\">     name: &#x27;红绿灯感知量产&#x27;,</span><span class=\"at\">@@ -30,10 +32,7 @@ export default function App() {</span><span style=\"display:block\">         &lt;/h2&gt;</span><span style=\"display:block\">         &lt;ul className=&quot;projects__list&quot;&gt;</span><span style=\"display:block\">           {projects.map((project) =&gt; (</span><span class=\"del\">-            &lt;li className=&quot;project-card&quot; key={project.name}&gt;</span><span class=\"del\">-              &lt;h3 className=&quot;project-card__name&quot;&gt;{project.name}&lt;/h3&gt;</span><span class=\"del\">-              &lt;p className=&quot;project-card__description&quot;&gt;{project.description}&lt;/p&gt;</span><span class=\"del\">-            &lt;/li&gt;</span><span class=\"add\">+            &lt;ProjectCard key={project.name} project={project} /&gt;</span><span style=\"display:block\">           ))}</span><span style=\"display:block\">         &lt;/ul&gt;</span><span style=\"display:block\">       &lt;/section&gt;</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>src/ProjectCard.tsx（新文件）</span><span>+13 −0</span></div><pre><span class=\"at\">@@ -0,0 +1,13 @@</span><span class=\"add\">+export type Project = {</span><span class=\"add\">+  name: string</span><span class=\"add\">+  description: string</span><span class=\"add\">+}</span><span class=\"add\">+</span><span class=\"add\">+export default function ProjectCard({ project }: { project: Project }) {</span><span class=\"add\">+  return (</span><span class=\"add\">+    &lt;li className=&quot;project-card&quot;&gt;</span><span class=\"add\">+      &lt;h3 className=&quot;project-card__name&quot;&gt;{project.name}&lt;/h3&gt;</span><span class=\"add\">+      &lt;p className=&quot;project-card__description&quot;&gt;{project.description}&lt;/p&gt;</span><span class=\"add\">+    &lt;/li&gt;</span><span class=\"add\">+  )</span><span class=\"add\">+}</span></pre></div></div></details></div></div><div style=\"display:grid;gap:8px;justify-items:start;min-width:0;grid-template-columns:minmax(0,1fr)\"><p class=\"p-bubble is-ai\" data-reveal=\"1\" style=\"margin:0 0 6px;font-size:16px;padding:6px 12px;justify-self:stretch\">② 把项目数据移到 projects.ts，数据和页面分开。只是重构，行为不变。</p><div style=\"position:relative;justify-self:stretch\"><div class=\"p-code\" data-reveal=\"1\" style=\"font-size:13px;line-height:1.45;justify-self:stretch\"><div class=\"p-code-head\" style=\"font-size:14px;padding:2px 12px\"><span>src/App.tsx · 另新建 projects.ts</span><span>refactor · 2 个文件 +15 −14</span></div><pre style=\"padding:5px 12px;white-space:pre\"><span class=\"del\">- const projects = [</span><span class=\"del\">-   {</span><span class=\"del\">-     name: '红绿灯感知量产',</span><span style=\"display:block;color:#5B6573;background:#F1EEE4;margin:0 -12px;padding:0 12px;font-family:var(--p-body)\">⋯ 另外 10 行删除：其余两个项目与结尾的 ]</span><span class=\"add\">+ import { projects } from './projects'</span><span style=\"display:block\"> </span><span style=\"display:block\">  export default function App() {</span></pre></div><span class=\"p-stamp\" data-reveal=\"3\" style=\"--c:#11652F;top:auto;bottom:-18px;right:8px\">行为没变</span></div><div data-reveal=\"1\"><details class=\"p-pop\"><summary>完整 diff</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>② 完整 diff（02-move-data.diff）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-code\"><div class=\"p-code-head\"><span>src/App.tsx</span><span>+1 −14</span></div><pre><span class=\"at\">@@ -1,17 +1,4 @@</span><span class=\"del\">-const projects = [</span><span class=\"del\">-  {</span><span class=\"del\">-    name: &#x27;红绿灯感知量产&#x27;,</span><span class=\"del\">-    description: &#x27;城市 NOA 红绿灯感知模块的量产方案设计、部署与加速&#x27;,</span><span class=\"del\">-  },</span><span class=\"del\">-  {</span><span class=\"del\">-    name: &#x27;端侧多模态推理引擎&#x27;,</span><span class=\"del\">-    description: &#x27;在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产&#x27;,</span><span class=\"del\">-  },</span><span class=\"del\">-  {</span><span class=\"del\">-    name: &#x27;RoboHarness&#x27;,</span><span class=\"del\">-    description: &#x27;把自然语言需求转成可执行、可验证、可持续迭代的研发流程&#x27;,</span><span class=\"del\">-  },</span><span class=\"del\">-]</span><span class=\"add\">+import { projects } from &#x27;./projects&#x27;</span><span style=\"display:block\"> </span><span style=\"display:block\"> export default function App() {</span><span style=\"display:block\">   return (</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>src/projects.ts（新文件）</span><span>+14 −0</span></div><pre><span class=\"at\">@@ -0,0 +1,14 @@</span><span class=\"add\">+export const projects = [</span><span class=\"add\">+  {</span><span class=\"add\">+    name: &#x27;红绿灯感知量产&#x27;,</span><span class=\"add\">+    description: &#x27;城市 NOA 红绿灯感知模块的量产方案设计、部署与加速&#x27;,</span><span class=\"add\">+  },</span><span class=\"add\">+  {</span><span class=\"add\">+    name: &#x27;端侧多模态推理引擎&#x27;,</span><span class=\"add\">+    description: &#x27;在 Nvidia Orin / Thor 上从 0 到 1 搭建大模型推理引擎并量产&#x27;,</span><span class=\"add\">+  },</span><span class=\"add\">+  {</span><span class=\"add\">+    name: &#x27;RoboHarness&#x27;,</span><span class=\"add\">+    description: &#x27;把自然语言需求转成可执行、可验证、可持续迭代的研发流程&#x27;,</span><span class=\"add\">+  },</span><span class=\"add\">+]</span></pre></div></div></details></div></div></div><div data-reveal=\"2\" style=\"display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px\"><span style=\"font-size:17px;font-weight:700;margin-right:4px\">运行检查：</span><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:16px\">✓ 文字与顺序</span><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:16px\">✓ 并排比样式</span><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:16px\">✓ 点击项目卡</span><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:16px\">✓ Tab</span><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:16px\">✓ 三种屏幕尺寸</span><span style=\"font-size:16px;color:#5B6573\">渲染出的页面结构与改前逐字相同</span></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:10px;font-size:17px;padding:8px 14px\">说明和 diff 只能推断；逐项运行检查之后，才能说“没变”</div>",
      "steps": [
        "① 提取组件",
        "② 移动数据",
        "运行检查",
        "结论"
      ],
      "script": [
        "【操作提示｜课件 p55-12 第 1 步，指向 ① 的说明和 App.tsx 关键几行；点开 ① 的“完整 diff”弹窗，滚到 ProjectCard.tsx 对一遍类名与标签，再关闭弹窗。弹窗内容读自 refactor-cards/01-extract-component.diff，不切 VS Code】\n\n先看第一张。AI 说：抽出 ProjectCard 组件，App.tsx 更清爽，只是重构。左边是 App.tsx 的关键几行：原来写在列表里的四行卡片，换成了一行 ProjectCard；这四行搬进了新文件 ProjectCard.tsx。新文件的内容在“完整 diff”里，点开可以逐行对：类名、标签、顺序都和原来一样。",
        "【操作提示｜推进第 2 步，指向 ② 删掉的数组（折叠行）和新增的 import；需要时点开 ② 的“完整 diff”核对 projects.ts，看完关闭】\n\n第二张。AI 说：把项目数据移到 projects.ts，数据和页面分开。App.tsx 顶部整段删掉了三个项目的数组，换成一行 import；新文件 projects.ts 里是同样的数组，多了一个 export。删掉的和新加的是不是逐字相同，同样在完整 diff 里核对。",
        "【操作提示｜推进第 3 步，逐个指向“运行检查”后的五个勾和“渲染出的页面结构与改前逐字相同”。画面为排练记录（shoot.py 2026-10-06，v1 冻结候选），不现场重跑；录制版若换成讲师冻结的 homepage-v1 重跑，以其输出为准】\n\n到这里，我们手上的是说明和 diff，这些也就是 Codex 交回来时它 context 里有的东西。读完它们，有理由相信行为没变，但这还只是推断。要拿到证据，得把页面跑起来查：2.2 查过的三种屏幕尺寸和 Tab，再加上文字和顺序、和原页面并排比样式、点击项目卡，全都一样。我们还对比了浏览器渲染出来的页面结构，和改前逐字相同。",
        "【操作提示｜推进第 4 步，出现两个“行为没变”章和底部结论条；讲完进入 p55-3】\n\n结论：两张都没改行为，是重构。第二张删了 14 行、加了 15 行，行为一点没变；改动多，不等于危险。但“没变”这个结论，是运行检查逐项做完才得到的，不是因为说明里写了“只是重构”。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "①② 合一页；页面只放关键几行，完整 diff 用页内弹窗（演示模式盖住正文区，阅读模式原地展开），弹窗内容由 refactor-cards/ 的原始 diff 生成。录制时可点开 ① 的完整 diff，滚到 ProjectCard.tsx 对一遍类名。"
        },
        {
          "title": "核对记录",
          "text": "shoot.py 2026-10-06：个人主页发布候选分别应用 ①②，构建后导出的 #root 与改前逐字相同，index.css 未改；卡高、顺序、Tab 落点均与改前一致。"
        }
      ],
      "source": "index.html#p55-12",
      "seconds": 120
    },
    {
      "id": "p55-3",
      "segment": "看行为",
      "label": "③ 按名称排序",
      "title": "③ “按名称排序，找起来更方便”",
      "lead": "这张卡的说明自己就写出了新行为：用户看到的顺序会变。只读说明和 diff 就能判断它不是重构；打开页面，是拿运行结果再确认一遍。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-aside\" style=\"display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,0.8fr);gap:16px;align-items:start\"><div style=\"display:grid;gap:8px;justify-items:start;min-width:0;grid-template-columns:minmax(0,1fr)\"><p class=\"p-bubble is-ai\" data-reveal=\"0\" style=\"margin:0 0 6px;font-size:16px;padding:6px 12px;justify-self:stretch\">③ 项目列表按名称排序，找起来更方便。只是重构，行为不变。</p><div class=\"p-code\" data-reveal=\"0\" style=\"font-size:13px;line-height:1.45;justify-self:stretch\"><div class=\"p-code-head\" style=\"font-size:14px;padding:2px 12px\"><span>src/App.tsx</span><span>refactor · 1 个文件 +1 −1</span></div><pre style=\"padding:5px 12px;white-space:pre-wrap\"><span style=\"display:block\">  &lt;ul className=\"projects__list\"&gt;</span><span class=\"del\">-   {projects.map((project) =&gt; (</span><span class=\"add\">+   {[...projects].sort((a, b) =&gt; a.name.localeCompare(b.name, 'zh-CN')).map((project) =&gt; (</span><span style=\"display:block\">      &lt;li className=\"project-card\" key={project.name}&gt;</span></pre></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\" style=\"justify-self:stretch;padding:10px 14px\"><p style=\"font-size:18px;line-height:1.5\">说明里写的是<b>新行为</b>：排序会改变用户看到的顺序。<br>“只是重构”和“按名称排序”自相矛盾</p></div><div class=\"p-bar\" data-reveal=\"3\" style=\"justify-self:stretch;font-size:17px;padding:8px 14px\">打开页面确认：只改一行，顺序就变了；构建照样通过</div></div><div data-reveal=\"2\" style=\"position:relative;display:grid;grid-template-columns:1fr 1fr;gap:10px\"><div style=\"display:grid;gap:6px;justify-items:start\"><span class=\"p-tag\" data-role=\"ok\">改前</span><div class=\"p-page\" style=\"justify-self:stretch\"><img src=\"evidence/card3-before.png\" alt=\"改前的项目顺序\" style=\"display:block;width:100%\"></div></div><div style=\"display:grid;gap:6px;justify-items:start\"><span class=\"p-tag\" data-role=\"gate\">改后</span><div class=\"p-page\" style=\"justify-self:stretch\"><img src=\"evidence/card3-after.png\" alt=\"改后的项目顺序\" style=\"display:block;width:100%\"></div></div><span class=\"p-stamp\" data-reveal=\"3\" style=\"--c:#A8350F;top:auto;bottom:-16px;right:-6px\">行为变了</span></div></div>",
      "steps": [
        "说明与 diff",
        "读说明就能发现",
        "打开页面",
        "结论"
      ],
      "script": [
        "【操作提示｜课件 p55-3 第 1 步，指向 ③ 的说明和那一行 diff（[...projects].sort(…)）；不切窗口】\n\n第三张。AI 说：项目列表按名称排序，找起来更方便，只是重构。diff 只有一行：原来直接遍历 projects，现在先复制一份、按名称排序，再遍历。",
        "【操作提示｜推进第 2 步，指向“说明里写的是新行为”方框，并回指说明里的“按名称排序”】\n\n这一张，只看说明和 diff 就能判断。说明自己写着“按名称排序”，排序就是要改变用户看到的顺序，这是一个新行为。“只是重构”和“按名称排序”放在一起，本身就自相矛盾。读说明的时候拿重构的定义对一下，就能发现。",
        "【操作提示｜推进第 3 步，指向左右两张截图的项目顺序。用排练截图（evidence/card3-before.png、card3-after.png），不切窗口，不现场重跑】\n\n再拿运行结果确认一下。左边是改前打开的页面，顺序是红绿灯、端侧、RoboHarness；右边是改后，按拼音排，端侧排到了第一。",
        "【操作提示｜推进第 4 步，出现“行为变了”章和底部结论条；讲完进入 p55-4】\n\n结论：行为变了。只改了一行，用户看到的顺序就不一样了，构建照样通过。这个顺序要不要改，可以讨论，但它是一次需求变化，不是重构。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "shoot.py 2026-10-06：个人主页发布候选应用 ③，顺序由“红绿灯感知量产、端侧多模态推理引擎、RoboHarness”变为“端侧多模态推理引擎、红绿灯感知量产、RoboHarness”；卡高与 Tab 落点不变。截图为 1440×900 下项目列表左侧。"
        }
      ],
      "source": "index.html#p55-3",
      "seconds": 120
    },
    {
      "id": "p55-4",
      "segment": "看行为",
      "label": "④ 缩短类名",
      "title": "④ “只是统一了类名”",
      "lead": "说明听起来完全无害，diff 也只换了一个名字。顺着类名读到样式文件，也只能猜到样式可能丢了；打开页面和原页面并排比，才确认描述的样式整段丢了。构建照样通过。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-aside\" style=\"display:grid;grid-template-columns:minmax(0,1.13fr) minmax(0,0.87fr);gap:16px;align-items:start\"><div style=\"display:grid;gap:8px;justify-items:start;min-width:0;grid-template-columns:minmax(0,1fr)\"><p class=\"p-bubble is-ai\" data-reveal=\"0\" style=\"margin:0 0 6px;font-size:16px;padding:6px 12px;justify-self:stretch\">④ 统一类名风格，把 __description 缩短为 __desc。只是重构，行为不变。</p><div class=\"p-code\" data-reveal=\"0\" style=\"font-size:13px;line-height:1.45;justify-self:stretch\"><div class=\"p-code-head\" style=\"font-size:14px;padding:2px 12px\"><span>src/App.tsx</span><span>refactor · 1 个文件 +1 −1</span></div><pre style=\"padding:5px 12px;white-space:pre\"><span style=\"display:block\">  &lt;h3 className=\"project-card__name\"&gt;{project.name}&lt;/h3&gt;</span><span class=\"del\">- &lt;p className=\"project-card__description\"&gt;{project.description}&lt;/p&gt;</span><span class=\"add\">+ &lt;p className=\"project-card__desc\"&gt;{project.description}&lt;/p&gt;</span></pre></div><div class=\"p-code\" data-reveal=\"1\" style=\"font-size:13px;line-height:1.4;justify-self:stretch\"><div class=\"p-code-head\" style=\"font-size:14px;padding:2px 12px\"><span>src/index.css · 没有改动</span><span>搜新类名：<b style=\"color:#A8350F\">0 处</b></span></div><pre style=\"padding:5px 12px;white-space:pre\"><span class=\"hl\">.project-card__description {</span><span style=\"display:block\">  margin: 0;</span><span style=\"display:block\">  color: #626c65;</span><span style=\"display:block\">  font-size: 16px;</span><span style=\"display:block\">  line-height: 1.8;</span><span style=\"display:block\">}</span></pre></div><div class=\"p-bar\" data-reveal=\"3\" style=\"justify-self:stretch;font-size:17px;padding:8px 14px\">读代码只能猜；并排比才确认描述的样式整段丢了，<b>构建照样通过</b></div></div><div data-reveal=\"2\" style=\"position:relative;display:grid;gap:10px\"><div class=\"p-page\" style=\"position:relative\"><img src=\"evidence/card4-before.png\" alt=\"改前的第一张项目卡\" style=\"display:block;width:100%\"><span class=\"p-tag\" data-role=\"ok\" style=\"position:absolute;right:10px;top:8px\">改前 · 卡高 127px</span></div><div class=\"p-page\" style=\"position:relative\"><img src=\"evidence/card4-after.png\" alt=\"改后的第一张项目卡\" style=\"display:block;width:100%\"><span class=\"p-tag\" data-role=\"gate\" style=\"position:absolute;right:10px;top:8px\">改后 · 卡高 144px</span></div><span class=\"p-stamp\" data-reveal=\"3\" style=\"--c:#A8350F;top:auto;bottom:-14px;right:-8px\">行为变了</span></div></div>",
      "steps": [
        "说明与 diff",
        "顺着类名找样式",
        "并排比",
        "结论"
      ],
      "script": [
        "【操作提示｜课件 p55-4 第 1 步，指向 ④ 的说明和 App.tsx 中类名替换的那一行；不切窗口】\n\n第四张。AI 说：统一类名风格，把冗长的 project-card__description 缩短成 project-card__desc，只是重构。diff 只有一个文件、一行，看起来确实只是换了个名字。",
        "【操作提示｜推进第 2 步，指向 src/index.css 片段里旧类名 .project-card__description 的规则，以及右上角“搜新类名：0 处”；用静态片段讲，不现场搜索】\n\n类名本身不显示任何东西，它的作用是挂样式。所以顺着类名去找样式：index.css 里有一条规则，写的是旧名字 project-card__description，颜色、行高都在这里。这次 CSS 没有改，搜新名字 project-card__desc，一处都没有。读到这里，能猜到样式可能丢了，但这还是读代码得来的推断。",
        "【操作提示｜推进第 3 步，指向上下两张截图的描述颜色、行距与卡高标签（127px / 144px）。用排练截图（evidence/card4-*.png，1440×900），不切窗口，不现场重跑】\n\n打开页面，和原页面并排比。上面是改前，下面是改后：描述文字从灰色变成了正文那样的深色，行距变小，上下还多出空白，整张卡从 127 像素高变成 144 像素。单看改后这一张，我们未必觉得有问题，并排放才看得出来。",
        "【操作提示｜推进第 4 步，出现“行为变了”章和结论条，指向“构建照样通过”；讲完进入 p55-5】\n\n结论：行为变了。新类名没有对应的样式规则，描述的样式整段丢了。构建照样通过，没有任何报错：构建只检查代码能不能打包，不检查样式有没有挂上。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "shoot.py 2026-10-06（1440×900）：描述颜色 #626c65 → #222d29，行高 28.8 → 24px，外边距 0 → 上下 16px；卡高 127 → 144px；构建成功。截图为第一张卡左侧。"
        }
      ],
      "source": "index.html#p55-4",
      "seconds": 120
    },
    {
      "id": "p55-5",
      "segment": "看行为",
      "label": "⑤ 可以聚焦",
      "title": "⑤ “键盘也能聚焦”",
      "lead": "说明同样写出了新行为，可改完会怎样，说明和 diff 都没写。截图、点击都和原来一样，只有按 Tab 才看得到：焦点多停了三次，按回车却没有任何反应。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-aside\" style=\"display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,0.95fr);gap:16px;align-items:start\"><div style=\"display:grid;gap:8px;justify-items:start;min-width:0;grid-template-columns:minmax(0,1fr)\"><p class=\"p-bubble is-ai\" data-reveal=\"0\" style=\"margin:0 0 6px;font-size:16px;padding:6px 12px;justify-self:stretch\">⑤ 给项目卡加上 tabIndex，键盘也能聚焦。只是重构，行为不变。</p><div class=\"p-code\" data-reveal=\"0\" style=\"font-size:13px;line-height:1.45;justify-self:stretch\"><div class=\"p-code-head\" style=\"font-size:14px;padding:2px 12px\"><span>src/App.tsx</span><span>refactor · 1 个文件 +1 −1</span></div><pre style=\"padding:5px 12px;white-space:pre\"><span style=\"display:block\">  {projects.map((project) =&gt; (</span><span class=\"del\">-   &lt;li className=\"project-card\" key={project.name}&gt;</span><span class=\"add\">+   &lt;li className=\"project-card\" key={project.name} tabIndex={0}&gt;</span><span style=\"display:block\">      &lt;h3 className=\"project-card__name\"&gt;{project.name}&lt;/h3&gt;</span></pre></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\" style=\"justify-self:stretch;padding:10px 14px\"><p style=\"font-size:17px;line-height:1.5\">改前：按完“查看项目”再按 Tab，焦点就离开了页面。<br>截图和点击，前后完全一样</p></div><div class=\"p-bar\" data-reveal=\"3\" style=\"justify-self:stretch;font-size:17px;padding:8px 14px\">焦点多停三次，按回车没反应；不按 Tab，拿不到这条证据</div></div><div data-reveal=\"2\" style=\"position:relative;display:grid;gap:10px\"><div class=\"p-page\" style=\"position:relative\"><img src=\"evidence/card5-tab2.png\" alt=\"按第 2 次 Tab：焦点停在第一张卡\" style=\"display:block;width:100%\"><span class=\"p-tag\" data-role=\"gate\" style=\"position:absolute;right:10px;top:8px\">按第 2 次 Tab</span></div><div class=\"p-page\" style=\"position:relative\"><img src=\"evidence/card5-tab3.png\" alt=\"按第 3 次 Tab：焦点停在第二张卡\" style=\"display:block;width:100%\"><span class=\"p-tag\" data-role=\"gate\" style=\"position:absolute;right:10px;top:8px\">按第 3 次 Tab</span></div><span class=\"p-stamp\" data-reveal=\"3\" style=\"--c:#A8350F;top:auto;bottom:-14px;right:-8px\">行为变了</span></div></div>",
      "steps": [
        "说明与 diff",
        "截图看不出",
        "按 Tab",
        "结论"
      ],
      "script": [
        "【操作提示｜课件 p55-5 第 1 步，指向 ⑤ 的说明和 tabIndex={0} 那一行 diff；不切窗口】\n\n第五张。AI 说：给项目卡加上 tabIndex，键盘也能聚焦，只是重构。diff 只有一行，在列表项上加了 tabIndex 等于 0。和第三张一样，说明里“键盘也能聚焦”就是一个新行为。可聚焦以后会怎样，说明和 diff 都没写。",
        "【操作提示｜推进第 2 步，指向“改前”方框；此步不演示按键】\n\n如果只看页面，什么都发现不了：截图和原来一模一样，点击项目卡也还是没反应。改前，按完“查看项目”再按 Tab，焦点就离开了页面。",
        "【操作提示｜推进第 3 步 → 切到实操按一次：Chrome 里提前打开改后的构建产物（准备方法见本页讲师提示），从页面顶部点一下，连续按三次 Tab，指认焦点停在第 1、2 张卡上；回课件指向“按第 2 次 Tab”“按第 3 次 Tab”两张截图对照。焦点框样式以实际浏览器为准】\n\n这一张，我们实际按一次。从页面顶部连续按 Tab：第一次停在“查看项目”，第二次停在第一张卡上，出现了焦点框；第三次停在第二张卡上。三张卡依次都会停一次。课件上这两张截图，是同样两次按键时拍下的。",
        "【操作提示｜推进第 4 步，出现“行为变了”章和结论条；不展开第 1 章的决定，讲完进入 p56】\n\n结论：行为变了。键盘用户要多按三次 Tab，停在卡上按回车，什么也不会发生。这条证据，不按 Tab 拿不到。这和第 1 章对项目卡定下的决定是什么关系，下一页再说。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "第 3 步切到 Chrome 按一次 Tab，其余证据图都用静态截图。提前运行 shoot.py，用 python3 -m http.server --directory lab-runs/refactor-cards/05-tabindex/dist 起静态服务，在 Chrome 打开；从页面顶部点一下，连续按三次 Tab。焦点框样式以实际浏览器为准，和截图不同就按实际讲。"
        },
        {
          "title": "核对记录",
          "text": "shoot.py 2026-10-06（1440×900）：改前 Tab 落点为“查看项目”→ 页面外 →“查看项目”；改后为“查看项目”→ 第 1、2、3 张卡；焦点框为 Chromium 默认样式。截图为第 2、3 次按 Tab 时的第 1、2 张卡。"
        }
      ],
      "source": "index.html#p55-5",
      "seconds": 120
    },
    {
      "id": "p56",
      "segment": "看行为",
      "label": "凭什么这样分",
      "title": "凭什么这样分",
      "lead": "Martin Fowler 在《重构》里给的定义：在不改变可观察行为的前提下，改善代码的内部结构。可观察行为就是用户能看到、能操作的东西。“只是重构”是结论，diff 大小也不算数；行为有没有变，证据要靠运行检查拿到。第 1 章定过项目卡不跳转；⑤ 让项目卡能被 Tab 聚焦，哪怕看起来是改进，也是行为变化，要拆出来由人确认。",
      "html": "<div class=\"p-bar\" data-reveal=\"0\" style=\"display:flex;flex-direction:column;align-items:flex-start;gap:0;padding-top:6px;padding-bottom:6px\"><span>重构 = <b>可观察行为不变</b>，内部结构变好</span><span style=\"font-size:18px;font-weight:400\">“只是重构”是结论；证据要靠运行检查</span></div><div class=\"p-pair\" data-reveal=\"1\" style=\"grid-template-columns:1fr auto 1fr;margin-top:8px\"><div class=\"p-box\" data-role=\"ok\"><span class=\"p-tag\" data-role=\"ok\">② 29 行</span><p>行为没变</p></div><div class=\"p-join\"><span>和大小无关</span></div><div class=\"p-box\" data-role=\"gate\"><span class=\"p-tag\" data-role=\"gate\">③ 1 行</span><p>顺序变了</p></div></div><div class=\"p-grid\" style=\"--n:2;gap:14px;margin-top:8px\"><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"2\"><h3>⑤ 与第 1 章的决定</h3><p>项目卡定为不跳转；能聚焦了，按回车仍没反应<br>拆开：行为变化由人确认，再作为需求去做</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"3\"><h3>回看补项目经历那一轮</h3><p>补充项目经历是需求变化，也不是重构</p></div></div>",
      "steps": [
        "定义",
        "和大小无关",
        "第 1 章的决定",
        "回看 2.2"
      ],
      "script": [
        "【操作提示｜课件 p56 第 1 步，指向定义条“可观察行为不变”和下面一行“‘只是重构’是结论；证据要靠运行检查”；不切窗口，不打开外部链接】\n\n现在给出定义。Martin Fowler 在《重构》里说：重构，是在不改变可观察行为的前提下，改善代码的内部结构。可观察行为，就是用户能看到、能操作的东西：文字、顺序、样式、点击、键盘。按这个定义，只有第一、二张是重构。所以“只是重构”是一个结论；行为到底变没变，证据要靠运行检查拿到。",
        "【操作提示｜推进第 2 步，指向“② 29 行 / ③ 1 行”的对照】\n\n分拣时，很容易按 diff 大小判断：改得多就危险，改得少就安全。这五张卡正好反过来：第二张 29 行，行为没变；第三张一行，顺序就变了。说明能帮上一部分忙：第三、五张的说明自己就写出了新行为，对照定义就知道不是重构；第四张的说明听起来无害；第一、二张的说明是真的，可也要运行检查做完才知道。",
        "【操作提示｜推进第 3 步，指向“⑤ 与第 1 章的决定”方框；就地复述决定，不切到第 1 章的课件或文件】\n\n第五张最容易让人想接受。第 1 章做首页时定过一个决定：项目卡不跳转，点了没有反应是有意的。第五张让卡片能被 Tab 聚焦，看上去像是改进，可聚焦以后按回车仍然没有反应，键盘用户只是多停了三次。这是行为变化，哪怕看起来是改进，也要拆开：单独提出来，由人决定要不要、怎么做，再作为一次需求变化去做。",
        "【操作提示｜推进第 4 步，指向“回看 2.2”方框；讲完进入 p57】\n\n顺便回看 2.2：我们补充项目经历，改的是页面内容，那是需求变化，也不是重构。重构只有一种：行为不变，结构变了。"
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
      "lead": "先独立作答，再看解析。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>AI 交回 ④ 时说“构建通过，没有报错”。这能说明行为没变吗？</h3><div data-reveal=\"1\"><p>不能。build 是这一章唯一回到 context 的运行结果，它只说明代码能打包；④ 实测构建成功，样式却丢了<span class=\"p-back-to\" data-role=\"gate\">回到 ④</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>要确认 ① 没有改变行为，你需要重查哪些项目？</h3><div data-reveal=\"2\"><p>文字与顺序、和原页面并排比样式、点击项目卡、Tab、三种屏幕尺寸；没查的项标“待验证”<span class=\"p-back-to\" data-role=\"ok\">回到 2.2 检查</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题"
      ],
      "script": [
        "【操作提示｜课件 p57 第 1 步，停在两道题面，不揭示解析；留出暂停视频的时间，不切窗口】\n\n暂停一下，回答两个问题。第一，AI 交回第四张卡时说：构建通过，没有报错。这能说明行为没变吗？第二，要确认第一张卡没改行为，我们需要重查哪些项目？",
        "【操作提示｜推进第 2 步，揭示第 1 题解析，指向“回到 ④”】\n\n第一题，不能。build 是这一章唯一回到 context 的运行结果，它只说明代码能打包。第四张实测构建成功，可描述的样式已经丢了：类名写错，构建工具不会报错。",
        "【操作提示｜推进第 3 步，揭示第 2 题解析，指向“待验证”和“回到 2.2 检查”；讲完进入 p58】\n\n第二题，要重查文字和顺序，和原页面并排比样式，点击项目卡，按 Tab，再看三种屏幕尺寸。哪项没查，就标成“待验证”，不能因为提交说明写着 refactor，就当它查过了。"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "暂停时在自己的笔记里写下哪几张只是重构，每张引用一条具体行为证据（顺序、样式、Tab 等）。"
        }
      ],
      "source": "index.html#p57",
      "seconds": 90
    },
    {
      "id": "p58",
      "segment": "收尾",
      "label": "依据在不在 context 里",
      "title": "AI 的结论，依据在不在 context 里？",
      "lead": "看 AI 的结论，问一句：依据在不在 context 里。本章有两次对照：2.2 压缩后追问 build 输出的最后一行，Codex 自己把回答分成“亲眼看到的原文”“只来自摘要的推断”“不知道的”，没有编造；2.4 写部署工作流时，它说 action 版本核对过，请求记录里确实有 14 次网页搜索，打开了各个 action 的 GitHub releases 页。“只是重构，行为不变”不一样：这一章回到 context 的运行结果只有 build，build 只说明能打包，context 里没有一次能证明行为没变的运行结果。于是文字与顺序、样式、点击、键盘和三种屏幕尺寸只能手工重查，每改一次就重复一次。后面讲规格和测试的章节（第 4–6 章），把行为写成能运行、结果能回到 context 的检查。回看本章：前四节都在同一套配置下的请求记录里找答案，这一节看的是 context 里缺了什么；项目上留下审过的提交、公开 URL 和 ch02-homepage-live tag。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:12px;align-items:stretch\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>2.2 压缩后追问</h3><p style=\"font-size:17px\">分成亲眼看到的原文、摘要推断、不知道的</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>2.4 “版本核对过”</h3><p style=\"font-size:17px\">请求记录里有 14 次网页搜索</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>2.5 “行为不变”</h3><p style=\"font-size:17px\">运行结果只有 build，只说明能打包</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px;font-size:19px;padding:6px 14px\">第 4–6 章讲规格和测试：把行为写成能运行、结果能回到 context 的检查</div><div class=\"p-flow\" style=\"--n:5;margin-top:10px\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"3\"><h3>2.1</h3><p>只说了一句话，模型收到了什么</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"3\"><h3>2.2</h3><p>补上项目经历，看对话怎么变长</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"3\"><h3>2.3</h3><p>AI 交回的改动，要不要接受</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"3\"><h3>2.4</h3><p>发布上线，看 Codex 怎么用 gh</p></div><div class=\"p-node\" data-role=\"gate\" data-reveal=\"3\"><h3>2.5</h3><p>AI 说“只是重构”</p></div></div><div class=\"p-bar is-light\" data-reveal=\"4\" style=\"margin-top:10px;font-size:19px;padding:6px 14px\">下一章 · 第 3 章：给个人主页加一个小游戏</div>",
      "steps": [
        "有依据的结论",
        "缺的运行结果",
        "第 4–6 章",
        "回看本章",
        "下一章"
      ],
      "script": [
        "【操作提示｜课件 p58 第 1 步，出现小标题和 2.2、2.4 两个方框；就地复述两处实录，不切到 2.2、2.4 的课件或请求记录】\n\n最后回到这一节开头的问题：AI 的结论，依据在不在 context 里？这一章有两次真实的对照。2.2 压缩以后，我们追问 build 输出的最后一行，Codex 自己把回答分成三类：亲眼看到的原文、只来自摘要的推断、不知道的，没有编造。2.4 写部署工作流，它说 action 的版本核对过；请求记录里确实有 14 次网页搜索，打开了各个 action 在 GitHub 上的 releases 页。这两个结论，依据都在 context 里。",
        "【操作提示｜推进第 2 步，指向“2.5 ‘行为不变’”方框】\n\n“只是重构，行为不变”不一样。这一章里，回到 context 的运行结果只有 build，build 只说明能打包。context 里没有一次能证明行为没变的运行结果。所以文字与顺序、并排比样式、点击、Tab 和三种屏幕尺寸，只能我们手工重查，每改一次就重查一次。验证很贵，改动越多越容易漏。",
        "【操作提示｜推进第 3 步，指向“第 4–6 章”结论条；只点到为止，不展开测试框架】\n\n后面讲规格和测试的章节，也就是第 4 到第 6 章，要解决的就是这件事：把行为写成能运行的检查，运行结果能回到 context 里。到那时，Codex 说“行为没变”，就可以有依据了。",
        "【操作提示｜推进第 4 步，五个节点一起出现，按 2.1 到 2.5 的顺序逐个指认】\n\n回看这一章，五节各回答了一个问题。前四节，我们都回到同一套配置下的请求记录里找答案。2.1，只说了一句话，模型收到了什么；2.2，补上项目经历，看对话怎么变长、怎么清；2.3，AI 交回的改动，要不要接受，先看它当时看到了什么；2.4，发布上线，看 Codex 怎么用 gh；2.5，AI 说“只是重构”，这一节没有打开记录，看的是 context 里缺了什么：一次能证明行为没变的运行结果。项目上，个人主页 v0 变成了一个有公开 URL 的 v1。",
        "【操作提示｜推进第 5 步，指向底部的第 3 章预告；第 2 章到此结束，不再切工具窗口】\n\n第 2 章到这里结束。下一章，我们给个人主页加一个小游戏，体验更快的迭代，也会遇到第一个需要真正调试的问题。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "2.2、2.4 两处只复述本章实录里的事实，不另加例子。伏笔只点到为止，不提前讲测试框架。第 3 章预告按第 3 章定稿调整。全章回顾 2026-10-05 起从 2.4 p52 移到本页（讲师确认）。"
        }
      ],
      "source": "index.html#p58",
      "seconds": 150
    }
  ],
  "segments": [
    {
      "label": "分拣",
      "seconds": 210
    },
    {
      "label": "看行为",
      "seconds": 600
    },
    {
      "label": "收尾",
      "seconds": 240
    }
  ]
};
