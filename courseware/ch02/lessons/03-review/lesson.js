window.lesson = {
  "title": "参考一个主页改风格：它看到了什么",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.03",
  "summary": "从上一节提交的 homepage-v1 开始，参考一个主页改两轮风格。每一轮都回到请求看它拿到了什么：取回来不等于看到了，页面的样子不在 context 里，要靠我们把截图和看法带进去。审过再让 Codex 提交。",
  "prep": [
    "接着 2.2 录制的项目：git log --oneline -1 是 homepage-v1，git status 干净。没接上时从快照分支 ch02/2.2-done-20261024 开始（C2-104）。",
    "Codex：当天 2.2 的会话还开着就接着用，p40a 第 3 步先 /clear；另一天录时，在个人主页项目根目录运行 agent-lab codex --tap 开新会话，用 /rename 起名。确认 claude-tap 查看器能打开。",
    "浏览器：开发服务在跑，留个人主页标签页；另开一个标签页打开 Hyperspace 参考页（p40a0 截图下的第一个链接）。窗口开宽一点：1280 宽时参考的侧栏会变成顶部横条；两个标签页用同样宽度，方便对照和截图。",
    "截图工具备好，截图存到项目目录外（如桌面），不要放进项目，免得之后被一起提交。贴图时拖进终端，或复制后在 Codex 里 Ctrl+V，输入框出现 [Image #1]。",
    "查看器、终端和截图里的本机路径、用户名，上屏前遮盖或缩写。"
  ],
  "scenes": [
    {
      "id": "p35",
      "segment": "提参考",
      "layout": "lesson-cover",
      "label": "这一节做什么",
      "title": "参考主页，改出自己的风格",
      "lead": "从上一节提交的 homepage-v1 开始，参考一个主页改两轮风格；每一轮都问一句：它看到了什么",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-now\"><b>2.3</b>改风格</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">起点</span><p class=\"p-big\" style=\"font-weight:500\">homepage-v1：不满意随时回到这里</p></div><div class=\"p-join\" data-reveal=\"1\"><span>再</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">重点</span><p class=\"p-big\" style=\"font-weight:500\">参考一个主页，改两轮风格</p></div></div><div style=\"margin-top:14px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">系统指令</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">环境</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">规则</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具返回</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">新的 Prompt</div></div><div class=\"p-foot\">不在请求里：<span class=\"p-item\" style=\"display:inline-block;margin:4px 6px 0 0;padding:2px 8px;font-size:17px;border-style:dashed;background:transparent\">浏览器里的页面</span></div><div class=\"p-foot\">我们看得到参考长什么样，它看得到吗？它改风格的依据，只能在请求里的这几块</div></div></div>",
      "steps": [
        "回到地图",
        "从 homepage-v1 开始",
        "它看得到吗"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步，指章节地图上的 2.3；不切窗口】\n\n这一节，我们接着做个人主页。上一节，我们把自己准备的资料放进了主页：基本信息、教育、工作经历，还有项目。我们审过计划，看过页面，build 也通过了，最后让 Codex 提交成了 homepage-v1。内容已经齐了，可页面的样子，还是课程起点的那一版。",
        "【操作提示｜推进 p35 第 2 步，先指“起点”框，再指“重点”框】\n\n这一节，内容不再动，只动样子。我们找一个自己喜欢的主页作参考，改出自己的风格，我会演示改两轮。我们已经通过 git 提交了 homepage-v1。不管改成什么样，不满意，都能回到当前的版本",
        "【操作提示｜推进 p35 第 3 步，指锚点图亮起的三块，再指列外的“浏览器里的页面”；随后进入 p40a0】\n\n这一节有一个问题，贯穿始终：我们在浏览器里，看得到参考长什么样，Codex 看得到吗？还是这张图。它改风格的依据，只能来自请求里的内容。这一节，我们主要看亮起来的三块：工具返回、对话历史，还有我们新写的 Prompt。右边列外还画了一项：浏览器里的页面。它为什么画在列外，我们这一节一点一点来看。先从挑参考开始：我们想要一个什么样的主页？"
      ],
      "teaching": [],
      "source": "index.html#p35",
      "seconds": 90
    },
    {
      "id": "p40a0",
      "segment": "提参考",
      "label": "挑一个参考",
      "title": "想要什么样的主页？先挑一个参考",
      "lead": "同一份 profile.md，可以做成完全不同的样子。这里有四个公开的主页或模板：整块紫色的 Hyperspace，深蓝两栏的 Brittany Chiang，青绿页头的 Freelancer，白底蓝链接的 Jon Barron。这次的示例用 Hyperspace，它和我们现在的主页差别最大。把两张首屏放在一起，说清想借鉴什么：左侧的侧栏导航，每一块不同底色的大块背景。你可以选别的参考；学的是风格，不照搬别人的代码和文字，用的时候按各自的许可注明出处。",
      "html": "<div class=\"review-panel\" data-panel-start=\"0\" data-panel-end=\"1\"><div class=\"p-grid\" style=\"--n:4;gap:14px\"><div class=\"p-page\" style=\"position:relative;outline:3px solid #D9481C;outline-offset:3px\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>html5up.net · CC BY 3.0</div><img src=\"external/ref-hyperspace.png\" alt=\"Hyperspace 模板首屏：整块紫色\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"><span class=\"p-tag\" data-role=\"us\" data-reveal=\"1\" style=\"position:absolute;right:8px;top:36px\">这次用</span></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>brittanychiang.com · 注明出处</div><img src=\"external/ref-brittanychiang.png\" alt=\"Brittany Chiang 的主页：深蓝两栏\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>Start Bootstrap · MIT</div><img src=\"external/ref-freelancer.png\" alt=\"Freelancer 模板首屏：青绿页头\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>jonbarron.info · 欢迎复用</div><img src=\"external/ref-jonbarron.png\" alt=\"Jon Barron 的主页：白底蓝链接\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div></div><p class=\"p-refs\"><b>参考主页</b><a href=\"https://html5up.net/uploads/demos/hyperspace/\" target=\"_blank\" rel=\"noopener\">Hyperspace · HTML5 UP</a><a href=\"https://brittanychiang.com/\" target=\"_blank\" rel=\"noopener\">Brittany Chiang</a><a href=\"https://startbootstrap.github.io/startbootstrap-freelancer/\" target=\"_blank\" rel=\"noopener\">Freelancer · Start Bootstrap</a><a href=\"https://jonbarron.info/\" target=\"_blank\" rel=\"noopener\">Jon Barron</a></p></div><div class=\"review-panel\" data-panel-start=\"2\" data-panel-end=\"2\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>现在：homepage-v1</figcaption><a href=\"assets/before.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/before.png\" alt=\"现在：homepage-v1\" style=\"height:240px\"></a></figure><figure class=\"review-shot\"><figcaption>想借鉴：Hyperspace · HTML5 UP</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"想借鉴：Hyperspace · HTML5 UP\" style=\"height:240px\"></a></figure></div><div class=\"p-bar is-light review-bar\">想借鉴：<b>侧栏导航</b>、<b>大块背景</b> · 不照搬别人的代码和文字</div></div>",
      "refs": [
        {
          "kind": "read",
          "group": "许可",
          "text": "HTML5 UP 许可（CC BY 3.0）",
          "url": "https://html5up.net/license"
        }
      ],
      "steps": [
        "四个参考",
        "这次用哪个",
        "想借鉴什么"
      ],
      "script": [
        "【操作提示｜停留课件 p40a0 第 1 步，四张截图从左到右指认；截图下面的四个链接不现场打开；不切窗口】\n\n同一份 profile.md，可以做成完全不同的样子。先看四个公开的主页和模板。第一个是 Hyperspace，整块的紫色；第二个是 Brittany Chiang 的个人主页，深蓝色，左右两栏；第三个是 Freelancer，青绿色的页头；第四个是 Jon Barron 的主页，白底，蓝色的链接，很朴素。配色和版式各不一样，装的却是同一类内容：这是谁，做过什么。",
        "【操作提示｜推进 p40a0 第 2 步，指 Hyperspace 上的“这次用”标记】\n\n这一次的示例，我用 Hyperspace。原因很简单：它和我们现在的主页差别最大，改完前后一比，变化最容易看清楚。大家不一定要和我选同一个，可以从这四个里挑，也可以找一个自己平时就喜欢的主页。",
        "【操作提示｜推进 p40a0 第 3 步，左右指认两张首屏，再指底部横条 → 切到浏览器里录前打开的 Hyperspace 参考页标签页，从首屏往下滚一屏，指左侧固定的侧栏；窗口保持够宽，侧栏不要变成顶部横条；许可链接不打开；切回课件，进入 p40a】\n\n选好以后，把现在的首屏和参考的首屏放在一起，说清楚想借鉴什么。我想借鉴两样：第一，左边一栏固定的侧栏导航；第二，每一块用不同底色的大块背景。这一步要先想清楚，因为待会儿写 Prompt，要把它写进去。\n\n【切换｜浏览器 · Hyperspace 参考页】\n\n这就是参考页本身。往下滚，左边的侧栏一直固定在那里，每一块的底色也在变。\n\n【切换｜回课件 p40a0】\n\n还要提醒一点：我们学的是风格，不照搬别人的代码和文字。Hyperspace 用的是 CC BY 3.0 许可，要求注明出处，我们在页脚写一句就可以。大家选别的参考，也按它自己的许可来。想借鉴什么已经清楚了，那怎样把这个参考交给 Codex？"
      ],
      "teaching": [],
      "source": "index.html#p40a0",
      "seconds": 90
    },
    {
      "id": "p40a",
      "segment": "提参考",
      "layout": "prompt-scene",
      "prompt": "Goal：参考 Hyperspace 的风格改我的个人主页，我喜欢它的侧栏导航和大块背景。\nContext：参考页 https://html5up.net/uploads/demos/hyperspace/ 。请用 curl 看它的 HTML 和 CSS（要联网，我来批准），再结合当前代码给个修改计划，等我确认再改。\nConstraints：保留我的个人内容，不改写、不补写；不新增依赖，不引入远程字体和图片。\nDone when：npm run build 通过；页脚注明风格参考的出处；页面效果我在浏览器里看，你不用启动预览服务。",
      "label": "把参考交给它",
      "title": "沿用四要素，把参考交给它",
      "lead": "沿用第一章的 Goal、Context、Constraints、Done when：目标是参考 Hyperspace 改风格、说清喜欢它的侧栏和大块背景；背景给出参考页的网址，点明用 curl 看 HTML 和 CSS，结合当前代码先给计划；约束是保留个人内容，不加依赖，不引远程字体和图片；完成标准写清 build 通过、页脚注明出处，页面效果由我们在浏览器里看，它不用启动预览服务。新任务用 /clear 或新会话，再 /plan。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>Goal · Context</b><small>参考 Hyperspace 改风格；用 curl 看 HTML 和 CSS，先给计划</small></span></li><li class=\"is-ok\" data-reveal=\"1\"><span><b>Constraints</b><small>保留个人内容；不加依赖，不引远程资源</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>Done when</b><small>build 通过、页脚出处；页面我们自己在浏览器里看</small></span></li></ol></div>",
      "steps": [
        "目标与背景",
        "约束",
        "完成标准"
      ],
      "script": [
        "【操作提示｜停留课件 p40a 第 1 步，指 Goal · Context 一条；不切窗口】\n\n接下来写 Prompt。我们还是沿用第一章的四要素：目标、背景、约束、完成标准。Goal，目标：参考 Hyperspace 的风格改我的个人主页，我喜欢它的侧栏导航和大块背景。光说“参考它”还不够，要说出喜欢它的哪里，这就是上一步想清楚的东西。\n\nContext，背景：给出参考页的网址，并且点明，请它用 curl 看这个页面的 HTML 和 CSS。curl 是一个命令行工具，可以把一个网址的内容取回来。为什么要点名？我们之前测试时发现，不点名的话，它可能改用网页搜索，在我们这套配置下，只拿到了一段首屏的摘要。取网页要联网，Codex 的沙箱默认不联网，所以我们写上：要联网，我来批准。最后一句和上一节一样：先结合当前代码给个计划，等我确认再改。",
        "【操作提示｜推进 p40a 第 2 步，指 Constraints 一条】\n\nConstraints，约束，一共三条。第一，保留我的个人内容，不改写，也不补写，上一节放进去的事实，一个字都不要动。第二，不新增依赖。第三，不引入远程的字体和图片：参考页用到的字体和图片，不能直接链接到别人的服务器上。这几条守住的，是“内容是我的”；至于样子，可以放开去变。",
        "【操作提示｜推进 p40a 第 3 步，指 Done when 一条，点主画面的复制按钮 → 切到 Codex：输入 /clear，再输入 /plan，确认界面显示 Plan 模式，粘贴 Prompt 并提交。curl 申请沙箱外联网时，看清批准框里的网址是 html5up.net 的参考页再批准；它要把参考文件下载进项目目录就拒绝，并说“参考文件不要放进项目目录，放到 /tmp 下就行”。开始读参考后切回课件，进入 p40b；交互题出现了也先不答】\n\nDone when，完成标准：npm run build 通过；页脚注明风格参考的出处；页面效果，我在浏览器里自己看，它不用启动预览服务。最后这一句，和上一节一样，是把验证分清楚：构建由它来跑，像不像、好不好看，由我们来看。\n\n请大家暂停一下视频，选一个自己喜欢的参考，把 Prompt 改成自己的，然后发出去。我也到 Codex 里发出去。\n\n【切换｜Codex 标签页】\n\n这是一个新任务，我们先输入 /clear。上一节的成果已经提交了，资料在文件里，任务也会在 Prompt 里重新说明，前面的对话不用再跟着发。然后输入 /plan，进入 Plan 模式，粘贴 Prompt，发出。\n\n它用 curl 联网之前，会弹出一个批准框。批准之前，看一眼它要访问的网址，是不是我们给的那个参考页，是的话，再批准。\n\n【切换｜回课件 p40b】\n\n它要取参考、读代码，还要问我们问题，这需要一点时间。我们先看课件里排练那一次的记录。"
      ],
      "teaching": [],
      "source": "index.html#p40a",
      "seconds": 90
    },
    {
      "id": "p40b",
      "segment": "它拿到了什么",
      "label": "它拿到了什么",
      "title": "取回来，不等于看到了",
      "lead": "我们给的是网址，它拿到的是什么？回看排练的记录：它申请到沙箱外联网，用 curl 把 HTML 和 CSS 存进 /tmp 下的文件；进入请求的工具返回只有两个文件的行数，HTML 208 行，CSS 3908 行。接着它把 HTML 整份打出来，CSS 先看开头 240 行，再按行号一段一段挑着读。它说“看过了”：18em 宽的深紫侧栏、几种色块，这些判断能在它读到的 CSS 片段里找到，但那是代码片段，不是渲染出来的页面。左侧按钮切换观察点，阅读视图展示原文节选。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;fetch-call&quot;, &quot;fetch-result&quot;, &quot;read-call&quot;, &quot;style-answer&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"fetch-call\" aria-pressed=\"true\"><b>取回来</b><span>curl 存进 /tmp 的文件</span></button><button type=\"button\" data-ev-key=\"fetch-result\" aria-pressed=\"false\"><b>工具返回</b><span>只有两个行数</span></button><button type=\"button\" data-ev-key=\"read-call\" aria-pressed=\"false\"><b>挑着读</b><span>HTML 整份，CSS 一段一段</span></button><button type=\"button\" data-ev-key=\"style-answer\" aria-pressed=\"false\"><b>它说看过了</b><span>判断来自代码片段</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=fetch-call\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"fetch-call\" ><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 取回来</p><article><h3>它发出的调用 · 沙箱外联网，要我们批准</h3><pre>const r = await tools.exec_command({&quot;cmd&quot;:&quot;mkdir -p /tmp/hyperspace &amp;&amp; curl -sL https://html5up.net/uploads/demos/hyperspace/index.html -o /tmp/hyperspace/index.html &amp;&amp; curl -sL https://html5up.net/uploads/demos/hyperspace/assets/css/main.css -o /tmp/hyperspace/main.css &amp;&amp; wc -l /tmp/hyperspace/*&quot;,&quot;workdir&quot;:&quot;[project]&quot;,&quot;sandbox_permissions&quot;:&quot;require_escalated&quot;,&quot;justification&quot;:&quot;允许我联网下载 Hyperspace 参考页的 HTML 和 CSS 用于分析样式吗？&quot;,&quot;prefix_rule&quot;:[&quot;curl&quot;,&quot;-sL&quot;,&quot;https://html5up.net&quot;]});</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({&quot;cmd&quot;:&quot;mkdir -p /tmp/hyperspace &amp;&amp; curl -sL https://html5up.net/uploads/demos/hyperspace/index.html -o /tmp/hyperspace/index.html &amp;&amp; curl -sL https://html5up.net/uploads/demos/hyperspace/assets/css/main.css -o /tmp/hyperspace/main.css &amp;&amp; wc -l /tmp/hyperspace/*&quot;,&quot;workdir&quot;:&quot;[project]&quot;,&quot;sandbox_permissions&quot;:&quot;require_escalated&quot;,&quot;justification&quot;:&quot;允许我联网下载 Hyperspace 参考页的 HTML 和 CSS 用于分析样式吗？&quot;,&quot;prefix_rule&quot;:[&quot;curl&quot;,&quot;-sL&quot;,&quot;https://html5up.net&quot;]});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"fetch-result\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 工具返回</p><article><h3>进入请求的工具返回</h3><pre>Script completed\nWall time 0.0 seconds\nOutput:\n\n     208 /tmp/hyperspace/index.html\n    3908 /tmp/hyperspace/main.css\n    4116 total\n</pre></article></section><section data-ev-reading=\"read-call\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 挑着读</p><article><h3>HTML 整份打出来</h3><pre>const r = await tools.exec_command({&quot;cmd&quot;:&quot;cat /tmp/hyperspace/index.html&quot;,&quot;workdir&quot;:&quot;[project]&quot;});</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({&quot;cmd&quot;:&quot;cat /tmp/hyperspace/index.html&quot;,&quot;workdir&quot;:&quot;[project]&quot;});\ntext(r.output);\n</pre></details></article><article><h3>CSS 先看开头 240 行</h3><pre>{&quot;cmd&quot;:&quot;sed -n &#x27;1,240p&#x27; /tmp/hyperspace/main.css&quot;,&quot;workdir&quot;:&quot;[project]&quot;});</pre><details><summary>展开该项完整原文</summary><pre>{&quot;cmd&quot;:&quot;sed -n &#x27;1,240p&#x27; /tmp/hyperspace/main.css&quot;,&quot;workdir&quot;:&quot;[project]&quot;});\ntext(r.output);\n</pre></details></article><article><h3>再按行号挑几段</h3><pre>const r = await tools.exec_command({&quot;cmd&quot;:&quot;sed -n &#x27;1820,1985p;2660,2720p;2830,2870p&#x27; /tmp/hyperspace/main.css&quot;,&quot;workdir&quot;:&quot;[project]&quot;});</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({&quot;cmd&quot;:&quot;sed -n &#x27;1820,1985p;2660,2720p;2830,2870p&#x27; /tmp/hyperspace/main.css&quot;,&quot;workdir&quot;:&quot;[project]&quot;});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"style-answer\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 它说看过了</p><article><h3>它的回答</h3><pre>I&#x27;ve reviewed the Hyperspace source (fixed 18em dark sidebar `#312450`, big color-block sections `#5e42a6`/`#5052b5`/`#b74e91`, pill uppercase buttons, gradient underline on nav links). A few design decisions are yours to make:</pre></article><article><h3>依据：工具返回里的 CSS 片段</h3><pre>3467:\t#sidebar + #wrapper {\n3473:\t\t\t#sidebar + #wrapper {\n3482:\t\t\t#sidebar + #wrapper {\n\t#sidebar + #wrapper {\n\t\tmargin-left: 18em;\n\t\tmargin-left: 18em;\n\t\tposition: fixed;\n\t\twidth: 18em;</pre><details><summary>展开该项完整原文</summary><pre>Script completed\nWall time 0.1 seconds\nOutput:\n\n3467:\t#sidebar + #wrapper {\n3473:\t\t\t#sidebar + #wrapper {\n3482:\t\t\t#sidebar + #wrapper {\n3494:\t#sidebar + #wrapper + #footer {\n3500:\t\t\t#sidebar + #wrapper + #footer {\n3525:\t#sidebar {\n3540:\t\t#sidebar &gt; .inner {\n3566:\t\t\tbody.is-ie #sidebar &gt; .inner {\n3570:\t\t#sidebar nav &gt; ul {\n3575:\t\t\t#sidebar nav &gt; ul &gt; li {\n---\n\t#sidebar + #wrapper {\n\t\tmargin-left: 18em;\n\t}\n\t#sidebar + #wrapper + #footer {\n\t\tmargin-left: 18em;\n\t}\n\t#sidebar {\n\t\tpadding: 2.5em 2.5em 0.5em 2.5em ;\n\t\tbackground: #312450;\n\t\tcursor: default;\n\t\theight: 100vh;\n\t\tleft: 0;\n\t\toverflow-x: hidden;\n\t\toverflow-y: auto;\n\t\tposition: fixed;\n\t\ttext-align: right;\n\t\ttop: 0;\n\t\twidth: 18em;\n\t\tz-index: 10000;\n\t}\n</pre></details></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "取回来",
        "工具返回",
        "挑着读",
        "它说看过了"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p40b 第 1 步，阅读视图看 curl 那一条调用，再切原始记录核对；不切到现场】\n\n我们给的是网址，它拿到的是什么？先看排练那一次。它发出的第一个动作，是一条 curl 命令：在 /tmp 下面建一个目录，把参考页的 HTML 和 CSS，分别存成两个文件。/tmp 是系统的临时目录，不在我们的项目里。这条命令要访问外网，所以它申请到沙箱外面运行，我们批准了。",
        "【操作提示｜回放｜推进 p40b 第 2 步，阅读视图看工具返回，再切原始记录核对两个行数】\n\n这一次的工具返回里，有什么？只有两个数：HTML 两百零八行，CSS 三千九百零八行，也就是两个文件各有多少行。参考页已经存到了它的电脑上，可是进到请求里的，只有这两个行数。这时候，参考页的内容，还不在 context 里。",
        "【操作提示｜回放｜推进 p40b 第 3 步，阅读视图依次看三条读取调用：cat 整份 HTML、sed 读 CSS 前 240 行、按行号挑几段；不念行号；页底原文链接不现场打开】\n\n接下来，它开始读。cat 和 sed，都是在命令行里读文件的工具。HTML 不长，它整份打了出来。CSS 有三千九百多行，它没有一次读完，先看开头的二百四十行，再按行号，一段一段挑着读。每读一次，读到的那段代码，就作为工具返回，追加进请求。Anthropic 讲 context 工程的文章里，也提到过这种做法：遇到很大的数据，用命令去看其中一部分，而不是整个装进来。所以，进到 context 里的，是它挑出来的这些代码片段。",
        "【操作提示｜现场回看｜推进 p40b 第 4 步，阅读视图先看它的回答，再看下面 CSS 片段里的 position: fixed 和 width: 18em。讲完切 claude-tap 查看器，找现场这一次的 curl 调用和读 CSS 的工具返回，和课件比相同和不同；再切 Codex：交互题出现了就按当天的题选推荐项，还没出现就等，等待可剪掉；答完切回课件，进入 p40a1】\n\n读完以后，它说：我看过 Hyperspace 的源码了。接着描述了参考的样子：一个十八 em 宽的深紫色侧栏，还有几种大色块。em 是 CSS 里的一种长度单位。这些判断，都能在它读到的 CSS 片段里找到出处：position: fixed，是固定在左边；width: 18em，是十八 em 宽。所以它说得没错，可它的依据是代码，不是渲染出来的页面。它是从代码推出了页面大概的样子，就像我们读一份 CSS，心里也能猜个大概。这就是这一节的第一点：取回来，不等于看到了。\n\n【切换｜claude-tap 查看器】\n\n现场这一次，我们也在 claude-tap 里，找一找它取参考的那条调用，还有读文件的工具返回。读哪几段、读了多少，不会和排练那次一样，我们比一比，相同在哪里，不同在哪里。\n\n【切换｜Codex 标签页】\n\n读完参考，它会先问我们几个偏好。每次问的题不一样，我们按自己的想法来选，我这里选推荐项。\n\n【切换｜回课件 p40a1】\n\n我们选的这些答案，去了哪里？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "Anthropic，2025-09-29",
          "text": "Effective context engineering · Context retrieval and agentic search",
          "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
        }
      ],
      "teaching": [],
      "source": "index.html#p40b",
      "seconds": 120
    },
    {
      "id": "p40a1",
      "segment": "它拿到了什么",
      "label": "答案和计划去了哪",
      "title": "我们的答案和它的计划，去了哪？",
      "lead": "读完参考，它问了两组偏好，排练时都选了推荐项，其中一题是首屏背景：参考用一张线稿图，我们不让引远程图片，就选了“CSS 渐变代替”。我们选的答案，是那个提问工具的返回，在请求的“工具返回”这一块；它写的计划是它自己的回答，下一次请求里就到了“对话历史”，计划里那一句“首屏：CSS 渐变（替代原版 intro.svg）”也在里面。之后每次请求都带着这些，它改的时候照着。计划只动页面文件、不加依赖，就选 Yes, implement this plan。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;answers-result&quot;, &quot;plan-answer&quot;, &quot;plan-history&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"answers-result\" aria-pressed=\"true\"><b>我们的答案</b><span>提问工具的返回</span></button><button type=\"button\" data-ev-key=\"plan-answer\" aria-pressed=\"false\"><b>它的计划</b><span>它自己的回答</span></button><button type=\"button\" data-ev-key=\"plan-history\" aria-pressed=\"false\"><b>之后还在</b><span>计划进了对话历史</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=answers-result\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"answers-result\" ><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 我们的答案</p><article><h3>第一组回答 · 工具返回</h3><pre>{&quot;answers&quot;:{&quot;palette&quot;:{&quot;answers&quot;:[&quot;照搬 Hyperspace 紫系（推荐）&quot;]},&quot;mobile&quot;:{&quot;answers&quot;:[&quot;顶部横条导航（推荐）&quot;]},&quot;layout&quot;:{&quot;answers&quot;:[&quot;整块纯色分区 + 现有列表（推荐）&quot;]}}}</pre></article><article><h3>第二组回答 · 工具返回</h3><pre>{&quot;answers&quot;:{&quot;hero_bg&quot;:{&quot;answers&quot;:[&quot;CSS 渐变背景（推荐）&quot;]},&quot;footer&quot;:{&quot;answers&quot;:[&quot;单行注明出处（推荐）&quot;]},&quot;motion&quot;:{&quot;answers&quot;:[&quot;首屏淡入即可（推荐）&quot;]}}}</pre></article></section><section data-ev-reading=\"plan-answer\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 它的计划</p><article><h3>计划节选</h3><pre># 用 Hyperspace 风格重做个人主页（结构 + 视觉）\n  - 首屏：CSS 渐变 `linear-gradient(135deg, #5e42a6, #7b4a9e)`（替代原版 intro.svg，零新增文件）\n- 不引入任何 npm 依赖，不使用远程字体/图片/图标库（Hyperspace 的 Font Awesome 图标一律不用）。</pre><details><summary>展开该项完整原文</summary><pre>I have everything I need. Here&#x27;s the plan.\n\n&lt;proposed_plan&gt;\n# 用 Hyperspace 风格重做个人主页（结构 + 视觉）\n\n## 摘要\n把当前「居中单列」的个人主页改成 Hyperspace 的骨架：左侧固定深紫侧栏导航 + 主区整屏纯色大色块逐段铺开，深色底 + 白色文字 + 药丸按钮 + 渐变下划线导航。所有个人信息（`profile.md` / `App.tsx` 里的数据数组）一字不改，只重排结构与样式；不新增依赖、不用远程字体或图片；页脚注明风格参考出处。\n\n## 实施改动\n\n### 1. `src/App.tsx` — 只改结构，不改文案\n- 在最外层加三块结构：`&lt;aside class=&quot;sidebar&quot;&gt;`（固定侧栏）+ `&lt;main class=&quot;main&quot;&gt;`（放 4 个 section）+ `&lt;footer class=&quot;footer&quot;&gt;`。\n- 侧栏内只放 `&lt;nav&gt;&lt;ul&gt;`，4 项锚点导航，顺序与出现顺序一致：\n  `简介 → #intro`、`教育 → #education`、`工作经历 → #experience`、`项目与开源 → #projects`。\n  （&quot;简介&quot; 是导航标签，正文文案仍完全来自现有 `profile`。）\n- 主区 4 个 `&lt;section&gt;`，每节包一层 `&lt;div class=&quot;panel__inner&quot;&gt;` 控制内容宽度：\n  - `#intro`（原 hero）：姓名 + 别名、简介、&quot;现在关注&quot; 4 个 chip、`查看经历` → `#experience` 按钮。\n  - `#education` / `#experience` / `#projects`：沿用现有 `.entry` 列表与 `.project-card` 卡片结构与文字，只是换成深色配色。\n- 页脚一行：`© 缪东旭 · 风格参考 Hyperspace by HTML5 UP（CCA 3.0）`，其中 &quot;HTML5 UP&quot; 链到 `https://html5up.net/hyperspace`。\n- 用 `IntersectionObserver`（原生 API，无依赖）在 `useState` 里记录当前可见 section id，给对应侧栏链接加 `aria-current=&quot;true&quot;`；不引入滚动入场动画。\n\n### 2. `src/index.css` — 重写样式\n- **字体**：不引远程字体。`font-family: &quot;Helvetica Neue&quot;, Arial, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, sans-serif`；正文 17px / line-height 1.75（Hyperspace 的 16.5pt 观感，兼顾中文可读性）。\n- **配色（取自 Hyperspace 实测值）**：\n  - 页面底色 / 侧栏：`#312450`\n  - 首屏：CSS 渐变 `linear-gradient(135deg, #5e42a6, #7b4a9e)`（替代原版 intro.svg，零新增文件）\n  - 教育区：`#5052b5`；工作经历区：`#953d75`（原版 style3-alt，比 `#b74e91` 更暗以保证正文对比度）；项目区：`#3e4094`（style2-alt）\n  - 页脚：`#261c3e`\n  - 渐变强调色（首屏按钮底、导航下划线）：`#5e42a6 → #b74e91`\n  - 正文文字 `rgba(255,255,255,.82)`、标题 `#fff`（相比原版 `.55` 提高了对比度，可读性优先）\n- **侧栏**：`position: fixed; width: 18em; height: 100vh; background:#312450; text-align:right`，链接为大写/小字重/`letter-spacing:.25em` 的 0.85em 文字，下方带一条 `#3c2c62` 细条，hover/激活时渐变条 `max-width` 从 0 长到 100%（Hyperspace 原生做法）；激活项文字变 `#fff`。\n- **大色块**：`.panel` 满宽铺满主区；`.panel__inner` 最大宽 75em、内边距 `5em 5em 3em`（≤1680px 降为 4em，≤736px 降为 `3em 2em 1em`）；section 标题下加一条渐变短横线（对应原版 `h1.major:after`）。\n- **首屏**：`min-height: 100vh`、内容垂直居中；姓名 2.75em 粗体白色，别名用较小号 + 宽字距的半透明白；简介 1.2em、限宽 40em。\n- **chip**：透明底 + `1px solid rgba(255,255,255,.2)` + 3em 圆角，hover 边框变亮。\n- **按钮（&quot;查看经历&quot;）**：透明底 + `1px solid rgba(255,255,255,.35)` + 3em 圆角 + 字距 .1em；hover 边框变 .7 并有白色微光；焦点态有 2px 可见 outline。\n- **经历/教育条目**：保留 160px + 1fr 两列；周期文字 `rgba(255,255,255,.82)`，标题白色，角色/描述半透明白；条目之间用 `1px solid rgba(255,255,255,.15)` 分隔线（对应原版表格行分隔）。\n- **项目卡**：`rgba(255,255,255,.05)` 底 + `1px solid rgba(255,255,255,.15)` 边 + 1.5em 圆角；hover 时边框变 .35、上浮 2px、底色提到 .08。\n- **页脚**：`#261c3e`，小字 `rgba(255,255,255,.6)`，链接带虚线下划线，hover 去掉下划线并变白。\n- **响应式**：\n  - &gt;1280px：侧栏固定在左，主区与页脚 `margin-left: 18em`。\n  - ≤ 1280px：侧栏变成顶部深色横条（高 3.5em），导航项横向排列，主区/页脚取消左边距并加 `padding-top: 3.5em`（Hyperspace 原生做法）。\n  - ≤ 736px：顶部横条保留，导航项可横向滚动（`overflow-x:auto`），不整条隐藏，保证导航可达。\n  - 锚点区块加 `scroll-margin-top: 4em`，避免移动端被顶栏遮住。\n\n### 3. `index.html`（可选小改）\n加 `&lt;meta name=&quot;theme-color&quot; content=&quot;#312450&quot;&gt;`，让移动端浏览器地址栏配色与侧栏一致；`&lt;title&gt;` 保持&quot;缪东旭 · 个人主页&quot;不变。\n\n### 4. 不动的东西\n`profile.md`、`package.json`、依赖、构建配置、`setup-check/`、`dist/`（构建产物由 build 重新生成）全部不改。\n\n## 测试与验收\n- `npm run build`（`tsc -b &amp;&amp; vite build`）必须通过，无 TS 报错；完成后报告输出。\n- 检查产物 `dist/` 不含远程字体/图片引用，全部样式来自本地 CSS。\n- 浏览器自查（你来做）：\n  - 桌面宽度 &gt; 1280px：左侧深紫侧栏固定不随滚动移动，导航 4 项点击可跳到对应色块；当前 section 的导航项高亮（白色 + 渐变下划线）。\n  - 四个色块依次为渐变紫 /蓝紫 / 品红 / 深蓝紫，首屏占满一屏，姓名与&quot;查看经历&quot;按钮在首屏内可见。\n  - 所有个人文案与改前逐字一致（姓名、简介、4 条关注、教育 2 条、经历 3 条、项目 3 条及其描述）。\n  - 页脚显示 `© 缪东旭 · 风格参考 Hyperspace by HTML5 UP（CCA 3.0）`，链接可点。\n  - 窄屏（约 900px / 480px）：侧栏变顶部横条，导航横排或可横向滚动，色块内容不被顶栏遮挡。\n\n## 假设与默认值\n- 首屏导航项标签用&quot;简介&quot;（仅为导航标签，不属于个人内容）。\n- 正文用 `rgba(255,255,255,.82)` 而非原版 `.55`，理由：原版对比度约 1.9:1，中文正文不可读；这是唯一一处对原版配色的可访问性调整。\n- 经历/项目区采用&quot;整块纯色 + 现有列表&quot;的版式，不做原版 spotlight 交错大图（无远程图片可用，也不改内容结构）。\n- 只做首屏淡入：`.panel__inner` 用纯 CSS `fade-up` 动画（1s，位移 1em），不写 `IntersectionObserver` 动画。\n- 不引入任何 npm 依赖，不使用远程字体/图片/图标库（Hyperspace 的 Font Awesome 图标一律不用）。\n&lt;/proposed_plan&gt;\n\n计划已就绪。有一处需要你确认：**首屏导航项的标签**我暂定用「简介」（导航标签，不算个人内容），另外滚动高亮用了原生 `IntersectionObserver`（不新增依赖）。如果这两点你认可，回「执行」即可；若有偏好现在告诉我。</pre></details></article></section><section data-ev-reading=\"plan-history\" hidden><p class=\"p-ev-source\">10-25 排练 · 真实记录节选 · 之后还在</p><article><h3>下一次请求：计划在对话历史里</h3><pre># 用 Hyperspace 风格重做个人主页（结构 + 视觉）</pre><details><summary>展开该项完整原文</summary><pre>I have everything I need. Here&#x27;s the plan.\n\n&lt;proposed_plan&gt;\n# 用 Hyperspace 风格重做个人主页（结构 + 视觉）\n\n## 摘要\n把当前「居中单列」的个人主页改成 Hyperspace 的骨架：左侧固定深紫侧栏导航 + 主区整屏纯色大色块逐段铺开，深色底 + 白色文字 + 药丸按钮 + 渐变下划线导航。所有个人信息（`profile.md` / `App.tsx` 里的数据数组）一字不改，只重排结构与样式；不新增依赖、不用远程字体或图片；页脚注明风格参考出处。\n\n## 实施改动\n\n### 1. `src/App.tsx` — 只改结构，不改文案\n- 在最外层加三块结构：`&lt;aside class=&quot;sidebar&quot;&gt;`（固定侧栏）+ `&lt;main class=&quot;main&quot;&gt;`（放 4 个 section）+ `&lt;footer class=&quot;footer&quot;&gt;`。\n- 侧栏内只放 `&lt;nav&gt;&lt;ul&gt;`，4 项锚点导航，顺序与出现顺序一致：\n  `简介 → #intro`、`教育 → #education`、`工作经历 → #experience`、`项目与开源 → #projects`。\n  （&quot;简介&quot; 是导航标签，正文文案仍完全来自现有 `profile`。）\n- 主区 4 个 `&lt;section&gt;`，每节包一层 `&lt;div class=&quot;panel__inner&quot;&gt;` 控制内容宽度：\n  - `#intro`（原 hero）：姓名 + 别名、简介、&quot;现在关注&quot; 4 个 chip、`查看经历` → `#experience` 按钮。\n  - `#education` / `#experience` / `#projects`：沿用现有 `.entry` 列表与 `.project-card` 卡片结构与文字，只是换成深色配色。\n- 页脚一行：`© 缪东旭 · 风格参考 Hyperspace by HTML5 UP（CCA 3.0）`，其中 &quot;HTML5 UP&quot; 链到 `https://html5up.net/hyperspace`。\n- 用 `IntersectionObserver`（原生 API，无依赖）在 `useState` 里记录当前可见 section id，给对应侧栏链接加 `aria-current=&quot;true&quot;`；不引入滚动入场动画。\n\n### 2. `src/index.css` — 重写样式\n- **字体**：不引远程字体。`font-family: &quot;Helvetica Neue&quot;, Arial, &quot;PingFang SC&quot;, &quot;Microsoft YaHei&quot;, sans-serif`；正文 17px / line-height 1.75（Hyperspace 的 16.5pt 观感，兼顾中文可读性）。\n- **配色（取自 Hyperspace 实测值）**：\n  - 页面底色 / 侧栏：`#312450`\n  - 首屏：CSS 渐变 `linear-gradient(135deg, #5e42a6, #7b4a9e)`（替代原版 intro.svg，零新增文件）\n  - 教育区：`#5052b5`；工作经历区：`#953d75`（原版 style3-alt，比 `#b74e91` 更暗以保证正文对比度）；项目区：`#3e4094`（style2-alt）\n  - 页脚：`#261c3e`\n  - 渐变强调色（首屏按钮底、导航下划线）：`#5e42a6 → #b74e91`\n  - 正文文字 `rgba(255,255,255,.82)`、标题 `#fff`（相比原版 `.55` 提高了对比度，可读性优先）\n- **侧栏**：`position: fixed; width: 18em; height: 100vh; background:#312450; text-align:right`，链接为大写/小字重/`letter-spacing:.25em` 的 0.85em 文字，下方带一条 `#3c2c62` 细条，hover/激活时渐变条 `max-width` 从 0 长到 100%（Hyperspace 原生做法）；激活项文字变 `#fff`。\n- **大色块**：`.panel` 满宽铺满主区；`.panel__inner` 最大宽 75em、内边距 `5em 5em 3em`（≤1680px 降为 4em，≤736px 降为 `3em 2em 1em`）；section 标题下加一条渐变短横线（对应原版 `h1.major:after`）。\n- **首屏**：`min-height: 100vh`、内容垂直居中；姓名 2.75em 粗体白色，别名用较小号 + 宽字距的半透明白；简介 1.2em、限宽 40em。\n- **chip**：透明底 + `1px solid rgba(255,255,255,.2)` + 3em 圆角，hover 边框变亮。\n- **按钮（&quot;查看经历&quot;）**：透明底 + `1px solid rgba(255,255,255,.35)` + 3em 圆角 + 字距 .1em；hover 边框变 .7 并有白色微光；焦点态有 2px 可见 outline。\n- **经历/教育条目**：保留 160px + 1fr 两列；周期文字 `rgba(255,255,255,.82)`，标题白色，角色/描述半透明白；条目之间用 `1px solid rgba(255,255,255,.15)` 分隔线（对应原版表格行分隔）。\n- **项目卡**：`rgba(255,255,255,.05)` 底 + `1px solid rgba(255,255,255,.15)` 边 + 1.5em 圆角；hover 时边框变 .35、上浮 2px、底色提到 .08。\n- **页脚**：`#261c3e`，小字 `rgba(255,255,255,.6)`，链接带虚线下划线，hover 去掉下划线并变白。\n- **响应式**：\n  - &gt;1280px：侧栏固定在左，主区与页脚 `margin-left: 18em`。\n  - ≤ 1280px：侧栏变成顶部深色横条（高 3.5em），导航项横向排列，主区/页脚取消左边距并加 `padding-top: 3.5em`（Hyperspace 原生做法）。\n  - ≤ 736px：顶部横条保留，导航项可横向滚动（`overflow-x:auto`），不整条隐藏，保证导航可达。\n  - 锚点区块加 `scroll-margin-top: 4em`，避免移动端被顶栏遮住。\n\n### 3. `index.html`（可选小改）\n加 `&lt;meta name=&quot;theme-color&quot; content=&quot;#312450&quot;&gt;`，让移动端浏览器地址栏配色与侧栏一致；`&lt;title&gt;` 保持&quot;缪东旭 · 个人主页&quot;不变。\n\n### 4. 不动的东西\n`profile.md`、`package.json`、依赖、构建配置、`setup-check/`、`dist/`（构建产物由 build 重新生成）全部不改。\n\n## 测试与验收\n- `npm run build`（`tsc -b &amp;&amp; vite build`）必须通过，无 TS 报错；完成后报告输出。\n- 检查产物 `dist/` 不含远程字体/图片引用，全部样式来自本地 CSS。\n- 浏览器自查（你来做）：\n  - 桌面宽度 &gt; 1280px：左侧深紫侧栏固定不随滚动移动，导航 4 项点击可跳到对应色块；当前 section 的导航项高亮（白色 + 渐变下划线）。\n  - 四个色块依次为渐变紫 /蓝紫 / 品红 / 深蓝紫，首屏占满一屏，姓名与&quot;查看经历&quot;按钮在首屏内可见。\n  - 所有个人文案与改前逐字一致（姓名、简介、4 条关注、教育 2 条、经历 3 条、项目 3 条及其描述）。\n  - 页脚显示 `© 缪东旭 · 风格参考 Hyperspace by HTML5 UP（CCA 3.0）`，链接可点。\n  - 窄屏（约 900px / 480px）：侧栏变顶部横条，导航横排或可横向滚动，色块内容不被顶栏遮挡。\n\n## 假设与默认值\n- 首屏导航项标签用&quot;简介&quot;（仅为导航标签，不属于个人内容）。\n- 正文用 `rgba(255,255,255,.82)` 而非原版 `.55`，理由：原版对比度约 1.9:1，中文正文不可读；这是唯一一处对原版配色的可访问性调整。\n- 经历/项目区采用&quot;整块纯色 + 现有列表&quot;的版式，不做原版 spotlight 交错大图（无远程图片可用，也不改内容结构）。\n- 只做首屏淡入：`.panel__inner` 用纯 CSS `fade-up` 动画（1s，位移 1em），不写 `IntersectionObserver` 动画。\n- 不引入任何 npm 依赖，不使用远程字体/图片/图标库（Hyperspace 的 Font Awesome 图标一律不用）。\n&lt;/proposed_plan&gt;\n\n计划已就绪。有一处需要你确认：**首屏导航项的标签**我暂定用「简介」（导航标签，不算个人内容），另外滚动高亮用了原生 `IntersectionObserver`（不新增依赖）。如果这两点你认可，回「执行」即可；若有偏好现在告诉我。</pre></details></article><article><h3>接着是确认实施</h3><pre>Implement the plan.</pre></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "我们的答案",
        "它的计划",
        "之后还在"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p40a1 第 1 步，阅读视图看两组回答，指 hero_bg 那一项，再切原始记录核对它是工具返回】\n\n先看排练那一次。读完参考，它问了两组偏好，一共六个问题，我都选了推荐项。其中有一题，问的是首屏背景：参考的首屏，背景用的是一张线稿图，可我们在约束里写了，不引入远程图片，所以它的推荐项是：用 CSS 渐变来代替。渐变，就是颜色从一种慢慢过渡到另一种。\n\n我们选的答案去了哪里？上一节看过，交互题在请求里是一次工具调用，我们选的答案，就是这次调用的工具返回。在锚点图上，它在“工具返回”这一块。",
        "【操作提示｜回放｜推进 p40a1 第 2 步，阅读视图看计划节选，指“首屏：CSS 渐变”那一行】\n\n答完问题，它给出了计划。计划是它自己的回答，里面也写着这一句：首屏，用 CSS 渐变，替代原版的 intro.svg。intro.svg，就是参考里那张线稿图。这一句夹在一长串计划里，并不显眼。我们先记住它，后面还会回来。",
        "【操作提示｜回放｜推进 p40a1 第 3 步，阅读视图看下一次请求里的计划和 Implement the plan.。讲完切 Codex，在现场的 Proposed Plan 里找改动文件和首屏背景的做法，范围对得上就选 Yes, implement this plan；它在沙箱里起预览服务或要截图时拒绝，并说“不用截图，页面我自己在浏览器里看”；实施开始后切回课件，进入 p40b1】\n\n到了下一次请求，这份计划就在对话历史里，后面紧跟着一句 Implement the plan，是我们放行的时候，界面替我们发的。从这以后，每一次请求都带着这份计划，它改代码的时候，就是照着它来做的。所以审计划这一步很要紧：我们放行的，是之后每一步的依据。\n\n【切换｜Codex 标签页】\n\n现场这一次，计划应该也出来了。我们拿约束这把尺子对一下：是不是只动页面的文件，有没有加依赖，有没有引远程资源，个人内容动没动。再找一找，首屏背景，它打算怎么做。范围对得上，就选 Yes, implement this plan。\n\n实施要跑几分钟。我们回到课件，先看排练那一次，第一轮改出来是什么样子。\n\n【切换｜回课件 p40b1】"
      ],
      "teaching": [],
      "source": "index.html#p40a1",
      "seconds": 90
    },
    {
      "id": "p40b1",
      "segment": "看效果再反馈",
      "label": "第一轮改完",
      "title": "第一轮改完，哪里和想的不一样？",
      "lead": "第一轮改完，build 通过。在浏览器里和参考并排看同样宽度的首屏：侧栏、色块、导航下划线都做出来了，滚到工作经历，导航也会提示当前位置。不一样的地方，排练这次是首屏背景：我们这边是一整片平滑的渐变，参考上有很淡的交叉细线。这是我们自己在交互题里选的，看计划时这一句并不显眼，看到页面才知道少了什么。这个差别我们一眼就看到了，它看不到：渲染出来的页面不在 context 里，build 通过也回答不了像不像。",
      "html": "<div class=\"review-panel\" data-panel-start=\"0\" data-panel-end=\"0\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>第一轮：当前效果</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"第一轮：当前效果\" style=\"height:290px\"></a></figure><figure class=\"review-shot\"><figcaption>参考</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"参考\" style=\"height:290px\"></a></figure></div></div><div class=\"review-panel\" data-panel-start=\"1\" data-panel-end=\"1\"><figure class=\"review-shot\"><figcaption>滚到工作经历：导航已经提示当前位置</figcaption><a href=\"assets/round1-experience.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1-experience.png\" alt=\"滚到工作经历：导航已经提示当前位置\" style=\"height:330px\"></a></figure></div><div class=\"review-panel\" data-panel-start=\"2\" data-panel-end=\"2\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>当前：平滑渐变 · 原图局部</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"当前：平滑渐变\" viewBox=\"1060 530 380 230\" preserveAspectRatio=\"xMidYMid slice\" style=\"width:100%;height:260px;background:#eee\"><image href=\"assets/round1.png\" width=\"1440\" height=\"800\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>参考：很淡的交叉细线 · 原图局部</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"参考：很淡的交叉细线\" viewBox=\"1060 530 380 230\" preserveAspectRatio=\"xMidYMid slice\" style=\"width:100%;height:260px;background:#eee\"><image href=\"assets/reference.png\" width=\"1440\" height=\"800\"/></svg></a></figure></div></div><div class=\"review-panel\" data-panel-start=\"3\" data-panel-end=\"3\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>当前：平滑渐变 · 原图局部</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"当前：平滑渐变\" viewBox=\"1060 530 380 230\" preserveAspectRatio=\"xMidYMid slice\" style=\"width:100%;height:200px;background:#eee\"><image href=\"assets/round1.png\" width=\"1440\" height=\"800\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>参考：很淡的交叉细线 · 原图局部</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"参考：很淡的交叉细线\" viewBox=\"1060 530 380 230\" preserveAspectRatio=\"xMidYMid slice\" style=\"width:100%;height:200px;background:#eee\"><image href=\"assets/reference.png\" width=\"1440\" height=\"800\"/></svg></a></figure></div><div class=\"p-bar review-bar\">我们一眼看到的差别，它看不到：<b>页面的样子不在 context 里</b></div></div>",
      "refs": [
        {
          "kind": "live",
          "group": "参考主页",
          "text": "Hyperspace · HTML5 UP",
          "url": "https://html5up.net/uploads/demos/hyperspace/"
        }
      ],
      "steps": [
        "并排看",
        "做到了的",
        "哪里不一样",
        "它看不到"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p40b1 第 1 步，左右指认两张首屏；不切窗口】\n\n排练那一次，第一轮改完，build 通过了。我们在浏览器里，把它和参考放在一起，用同样的宽度看首屏：左边是我们的，右边是参考。侧栏、大块的色块、导航文字下面的下划线，都做出来了，整体的感觉已经很接近。",
        "【操作提示｜回放｜推进 p40b1 第 2 步，指截图里导航上的当前位置】\n\n往下滚到工作经历，左边的导航，会把“工作经历”这一项标出来，提示我们现在看到了哪一块。这些做到了的地方，都可以留着。",
        "【操作提示｜回放｜推进 p40b1 第 3 步，左右指认两块放大的首屏背景】\n\n那哪里和想的不一样？我们把首屏右下角的同一块放大来看。排练这一次，差别在首屏的背景：我们这边，是一整片平滑的渐变；参考上，有一层很淡的交叉细线。这个差别，是我们自己选出来的。还记得交互题里那一项吗：用 CSS 渐变代替线稿图，计划里也写了这一句。可是读计划的时候，它并不显眼，看到页面，才知道少了什么。",
        "【操作提示｜现场回看｜推进 p40b1 第 4 步，指黑色横条。讲完切 Codex 看实施是否结束、build 是否报告通过，没结束就等，等待可剪掉；再切浏览器，个人主页刷新后和 Hyperspace 参考页用同样宽度对照，先首屏再往下滚，指出当天做到了什么、哪里和想的不一样。当天差别不明显时，可以一句带过 10-24 那次排练：背景铺满了密集的小箭头（它把参考 CSS 里下拉框的图标当成了纹理）。切回课件，进入 p40d】\n\n这个差别，我们一眼就看到了，可是它看不到。渲染出来的页面，不在 context 里；build 通过，只能说明代码能编译、能打包，回答不了像不像。这是这一节的第二点：页面的样子，不在 context 里。\n\n【切换｜Codex 标签页】\n\n现在回到现场，看看实施跑完了没有，build 有没有通过。\n\n【切换｜浏览器 · 个人主页与参考页】\n\n我们把现场这一次的结果，和参考放在一起看。先看首屏，再往下滚。哪些做到了，哪些和想的不一样，先记下来。每一次运行，差别都可能不一样。大家跟做的时候，也暂停一下，看看自己的页面。\n\n【切换｜回课件 p40d】\n\n差别我们看到了，怎样让它也知道，哪里不像？"
      ],
      "teaching": [],
      "source": "index.html#p40b1",
      "seconds": 120
    },
    {
      "id": "p40d",
      "segment": "看效果再反馈",
      "label": "把看到的带进去",
      "title": "把看到的样子，带进请求",
      "lead": "继续同一个会话，截两张首屏：先贴现在的效果，再贴参考，然后说一句哪里不满意、想要什么样。图给出我们看到的页面，话说出这次的偏好；换成自己的，可以照这个样子填空：“第一张是现在，第二张是参考；现在＿＿，我更喜欢参考里＿＿，其他先保持。”回看请求：这一条是新的 Prompt，里面是两项图片和这句话。看了图，它去找参考的纹理原图，先按页面目录取到 404，再试出正确路径，读懂原版的画法后自己画了一份。它也想看看自己画得怎样，要用无头 Chrome 截图，被我们拒绝：它看见了我们贴的图，自己做出来的页面它仍然看不见。到提交那次请求，两张图还在，之后每次请求都带着。改完回浏览器看同一位置：首屏多了淡淡的交叉细线，其他部分没动。要让它自己截图看页面，得专门把浏览器接进它的运行环境，后面的章节再做。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;feedback&quot;, &quot;images&quot;, &quot;texture&quot;, &quot;peek&quot;, &quot;still&quot;, &quot;round2&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"feedback\" aria-pressed=\"true\"><b>贴图和反馈</b><span>当前 → 参考，再说偏好</span></button><button type=\"button\" data-ev-key=\"images\" aria-pressed=\"false\"><b>请求里的图</b><span>两项 input_image</span></button><button type=\"button\" data-ev-key=\"texture\" aria-pressed=\"false\"><b>去找原图</b><span>先 404，再找到</span></button><button type=\"button\" data-ev-key=\"peek\" aria-pressed=\"false\"><b>它想自己看</b><span>无头 Chrome 截图，被拒</span></button><button type=\"button\" data-ev-key=\"still\" aria-pressed=\"false\"><b>后面还带着</b><span>每次请求都重发</span></button><button type=\"button\" data-ev-key=\"round2\" aria-pressed=\"false\"><b>第二轮结果</b><span>只动首屏背景</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-25 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=feedback\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"feedback\" ><p class=\"p-ev-source\">10-25 排练 · 同一会话贴两张图，再说一句</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>图 1 · 当前效果</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"图 1 · 当前效果\" style=\"height:100px\"></a></figure><figure class=\"review-shot\"><figcaption>图 2 · 参考</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"图 2 · 参考\" style=\"height:100px\"></a></figure></div><blockquote class=\"review-prompt compact\">第一张是现在的效果，第二张是参考页。现在首屏背景是一整片平滑的渐变，我更喜欢参考里那种很淡的交叉细线。帮我把首屏背景往这个感觉调整一下，其他部分先保持。</blockquote></section><section data-ev-reading=\"images\" hidden><p class=\"p-ev-source\">10-25 排练 · 贴图那次请求 · 我们这一条（新的 Prompt）</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>input_image · 第 1 张</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"input_image · 第 1 张\" style=\"height:120px\"></a></figure><figure class=\"review-shot\"><figcaption>input_image · 第 2 张</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"input_image · 第 2 张\" style=\"height:120px\"></a></figure></div><p class=\"review-evidence-note\">后面跟着那句话：第一张是现在的效果，第二张是参考页。现在首屏背景……</p></section><section data-ev-reading=\"texture\" hidden><p class=\"p-ev-source\">10-25 排练 · 看了图以后，它去找参考的纹理原图</p><pre class=\"p-term review-term\">$ curl …/hyperspace/assets/images/intro.svg\n&lt;title&gt;File not found&lt;/title&gt;   ← 404\n\n$ 再试几个路径\nassets/css/images/intro.svg -&gt; 200      862</pre><p class=\"review-evidence-note\">它的回答：原版 `intro.svg` 的做法很简单：**11 条 1px、`rgba(255,255,255,.05)` 的直线**，分别汇聚到画布上的两个消失点，交叉成细线网格，靠 `background-size:100% 100%` 拉伸铺满。我按同样的几何语言自己写一份本地 SVG（不拷贝原文件、不引远程图）。</p></section><section data-ev-reading=\"peek\" hidden><p class=\"p-ev-source\">10-25 排练 · 画完以后，它想自己看看效果</p><pre class=\"p-term review-term\">Google Chrome --headless=new --screenshot=… \n批准框：允许我用无头 Chrome 截图核对首屏淡色交叉线条的效果吗？</pre><blockquote class=\"review-prompt compact\">我们：不用截图，页面我自己在浏览器里看。接着把首屏背景改完，跑一下 build。</blockquote></section><section data-ev-reading=\"still\" hidden><p class=\"p-ev-source\">10-25 排练 · 提交那一次请求 · 同一条还在</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>input_image · 第 1 张</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"input_image · 第 1 张\" style=\"height:120px\"></a></figure><figure class=\"review-shot\"><figcaption>input_image · 第 2 张</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"input_image · 第 2 张\" style=\"height:120px\"></a></figure></div><p class=\"review-evidence-note\">之后每次请求都带着这两张图和那句话</p></section><section data-ev-reading=\"round2\" hidden><p class=\"p-ev-source\">10-25 排练 · 第二轮改完，首屏同一位置</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>反馈前 · 原图局部</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"反馈前\" viewBox=\"1060 530 380 230\" preserveAspectRatio=\"xMidYMid slice\" style=\"width:100%;height:200px;background:#eee\"><image href=\"assets/round1.png\" width=\"1440\" height=\"800\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>反馈后 · 原图局部</figcaption><a href=\"assets/round2.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"反馈后\" viewBox=\"1060 530 380 230\" preserveAspectRatio=\"xMidYMid slice\" style=\"width:100%;height:200px;background:#eee\"><image href=\"assets/round2.png\" width=\"1440\" height=\"800\"/></svg></a></figure></div><p class=\"review-evidence-note\">它的报告：首屏背景已改完，构建通过。</p></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "贴图和反馈",
        "请求里的图",
        "去找原图",
        "它想自己看",
        "后面还带着",
        "第二轮结果"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p40d 第 1 步，指两张图和下面那句反馈 → 切浏览器，个人主页和 Hyperspace 参考页用同样宽度，各截一张首屏，存到项目目录外 → 切 Codex，在原会话里先贴当前效果、再贴参考（拖进终端，或复制后 Ctrl+V），输入框出现 [Image #1]、[Image #2] 后，按当天的差别写一句反馈，发出 → 切回课件，进入第 2 步】\n\n还在同一个会话里，我们截两张首屏：先贴现在的效果，再贴参考，然后说一句话。排练那一次是这样说的：第一张是现在的效果，第二张是参考页。现在首屏背景是一整片平滑的渐变，我更喜欢参考里那种很淡的交叉细线，帮我往这个感觉调整一下，其他部分先保持。\n\n这句话有三个部分：第一，两张图分别是什么；第二，哪里不满意，想要什么样；第三，其他部分先别动。图给出的，是我们看到的页面；话说出的，是这一次的偏好。为什么两张都贴，不只贴参考？因为它看不见自己做出来的页面，差别出在我们这边，只贴参考，它就没有对照。大家换成自己的内容，照这个样子填空就行。\n\n【切换｜浏览器 · 个人主页与参考页】\n\n我先把两张首屏截下来，宽度一样。截图存在项目目录外面，免得之后被一起提交。\n\n【切换｜Codex 标签页】\n\n回到 Codex，还是同一个会话。先贴现在的效果，再贴参考，输入框里会出现两张图的标记。然后写上我这一次想说的话，发出。\n\n【切换｜回课件 p40d】\n\n它要看图、改代码，又得等一会儿。我们先看排练那一次，这两张图进了请求的哪里。",
        "【操作提示｜回放｜推进 p40d 第 2 步，阅读视图看请求里的两项图片和那句话，再切原始记录核对顺序】\n\n回到排练那一次的请求。我们这一条，就是新的 Prompt：两张图片，类型叫 input_image，后面跟着我们那句话，顺序和我们贴进去的一样。图片和文字一样，是请求的一部分，随着这次请求发给了模型。",
        "【操作提示｜回放｜推进 p40d 第 3 步，阅读视图依次看 404 返回、找到的那条返回和它读懂画法那一句】\n\n看了图，它做的第一件事，是回到参考，去找那层细线的原图。它先按页面的目录去取，拿到的是一个四零四，也就是“找不到这个文件”的页面。它又试了几个路径，找到了。读完原图，它明白了，原版就是十来条很淡的直线。然后，它没有照搬这个文件，而是自己画了一份。几次排练里，它看了截图都会去找原图，先碰到四零四再找到，也不止出现过一次。",
        "【操作提示｜回放｜推进 p40d 第 4 步，阅读视图看无头 Chrome 那条调用和批准理由，再看我们的回复】\n\n画完以后，它想看看效果，申请用无头 Chrome 截一张图。无头 Chrome，就是没有窗口、在后台运行的浏览器，可以把页面渲染出来，存成图片。这个申请我们拒绝了，回了一句：不用截图，页面我自己在浏览器里看。它想去看，恰恰说明，它手里没有这个页面。它看见了我们贴的图，可它自己做出来的页面，它还是看不见。几次排练里，它都想过起服务或者截图来看页面。",
        "【操作提示｜回放｜推进 p40d 第 5 步，阅读视图看提交那次请求里的两张图，再切原始记录核对】\n\n一直到最后提交的那一次请求，这两张图还在。上一节我们看过：同一个对话里，前面的内容每次都会跟着发。图片也一样，之后的每一次请求，都带着它们。",
        "【操作提示｜现场回看｜推进 p40d 第 6 步，左右指认反馈前后两块；页底两条链接不现场打开。讲完切 Codex：它要截图或起服务就选 No，并说“不用截图，页面我自己在浏览器里看”；等它改完、报告 build 结果，等待可剪掉；切 claude-tap 查看器，找到贴图那次请求，指新的 Prompt 里的两张图；切浏览器刷新个人主页，看首屏同一位置；切回课件，进入 p40e】\n\n排练这一次，改完回到首屏的同一位置看：多了一层淡淡的交叉细线，其他部分都没动。这是这一节的第三点：看到的样子，要靠我们带进去。它能看见我们贴的图，可还是看不见自己做出来的页面。要让它自己看页面，得专门把浏览器接进它的运行环境，OpenAI 讲 Harness engineering 的文章里，就是这样做的。那是后面章节的事，这一章，页面由我们来看。\n\n【切换｜Codex 标签页】\n\n回到现场。它要截图或者起服务，我们一样拒绝，告诉它页面我们自己看。等它改完，看一眼 build 的结果。\n\n【切换｜claude-tap 查看器】\n\n在 claude-tap 里，找到我们贴图的那一次请求，看看两张图在哪一块，和课件里那次比一比。\n\n【切换｜浏览器 · 个人主页】\n\n再刷新页面，回到首屏的同一个位置，看看这一次改出了什么。\n\n【切换｜回课件 p40e】"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "OpenAI，访问于 2026-10-24",
          "text": "Codex 文档 · Image inputs",
          "url": "https://learn.chatgpt.com/docs/image-inputs?surface=cli#write-the-prompt-around-the-image"
        },
        {
          "kind": "live",
          "group": "OpenAI，2026-02-11",
          "text": "Harness engineering",
          "url": "https://openai.com/index/harness-engineering/"
        }
      ],
      "teaching": [],
      "source": "index.html#p40d",
      "seconds": 180
    },
    {
      "id": "p40e",
      "segment": "接受并保存",
      "label": "两轮下来",
      "title": "同一份内容，两个样子",
      "lead": "两轮下来的结果：左边是上一节提交的 homepage-v1，右边是参考 Hyperspace 改了两轮的样子。个人信息一字没改，样子完全换了：侧栏导航、大块色块、首屏淡淡的交叉细线。像不像、好不好看，由我们自己判断。",
      "html": "<div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>homepage-v1 · 上一节</figcaption><a href=\"assets/before-full.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/before-full.png\" alt=\"homepage-v1 · 上一节\" style=\"height:380px\"></a></figure><figure class=\"review-shot\"><figcaption>两轮之后 · 这一节</figcaption><a href=\"assets/round2-full.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round2-full.png\" alt=\"两轮之后 · 这一节\" style=\"height:380px\"></a></figure></div>",
      "steps": [
        "两个样子"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p40e，先指左图再指右图；不切窗口，讲完进入 p40c】\n\n两轮下来，看看改成了什么样。左边是上一节提交的 homepage-v1，右边是排练这一次，改了两轮以后的整页：侧栏导航，大块的色块，首屏淡淡的交叉细线。个人信息一个字都没有改，样子却完全换了。同一份内容，两个样子。那这一版，我们要不要接受？"
      ],
      "teaching": [],
      "source": "index.html#p40e",
      "seconds": 30
    },
    {
      "id": "p40c",
      "segment": "接受并保存",
      "label": "要不要接受",
      "title": "风格改得对吗，要不要接受",
      "lead": "diff 很大，不逐行读。像不像，只有我们在浏览器里看得出来：从上滚到下和参考并排看，再缩到手机宽度看一眼。再看它新加了什么：排练这次是一段滚动高亮的脚本、首屏淡入的动画、一个本地 SVG 素材，页脚写了参考出处；范围也对，只动页面文件，个人内容没变，没加依赖。满意就让 Codex 提交：它先列 git status，.git 在沙箱里只读，git add、git commit 都弹出批准框，看清是哪几个文件、提交说明写了什么再确认。不满意，还没提交的改动让它 git restore 放弃，回到 homepage-v1。官方文档推荐的 UI 迭代也是这样：小步改，在浏览器里看，喜欢的提交，不喜欢的回退。",
      "html": "<div class=\"review-panel\" data-panel-start=\"0\" data-panel-end=\"0\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>页脚：参考出处 · 原图局部</figcaption><a href=\"assets/round2-full.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"页脚：参考出处\" viewBox=\"340 2500 620 90\" preserveAspectRatio=\"xMidYMid slice\" style=\"width:100%;height:130px;background:#eee\"><image href=\"assets/round2-full.png\" width=\"1440\" height=\"2607\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>手机宽度的首屏</figcaption><a href=\"assets/round2-mobile.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round2-mobile.png\" alt=\"手机宽度的首屏\" style=\"height:300px\"></a></figure></div></div><div class=\"review-panel\" data-panel-start=\"1\" data-panel-end=\"1\"><div class=\"p-claim\"><div class=\"p-box\" data-role=\"agent\"><span class=\"p-tag\" data-role=\"agent\">Codex 说</span><p class=\"p-big\" style=\"font-weight:500\">“首屏背景已改完，构建通过”</p></div><ul class=\"p-checks\"><li class=\"is-no\">像不像参考<small>diff 里看不出来，由我们在浏览器里看</small></li><li>新加了什么<small>排练这次：滚动高亮脚本、首屏淡入、本地 SVG、页脚出处</small></li><li>范围对不对<small>只动页面文件，个人内容没变，没加依赖</small></li></ul></div></div><div class=\"review-panel\" data-panel-start=\"2\" data-panel-end=\"2\"><pre class=\"p-term review-term\">我在浏览器里看过了，接受这一轮。先列出 git status 给我看，再提交本轮改动的文件；\n提交说明第一行写 homepage-v2: 参考 Hyperspace 调整主页风格，正文写改了哪些文件。</pre><div class=\"p-bar is-light review-bar\">接受：让 Codex 提交，<b>批准框里看清文件和提交说明</b> · 不满意：git restore 回到 homepage-v1</div></div><div class=\"review-panel\" data-panel-start=\"3\" data-panel-end=\"3\"><pre class=\"p-term review-term\">Git 索引目录需要写权限（沙箱只给了 `.git` 读权限），申请提权执行：\n\n[ch02/2.3-done-20261025 e53f35b] homepage-v2: 参考 Hyperspace 调整主页风格\n 4 files changed, 650 insertions(+), 167 deletions(-)\n create mode 100644 src/assets/hero-lines.svg</pre><div class=\"p-bar is-light review-bar\">排练这次：两次批准后提交，作者是本机的 git 身份</div></div>",
      "refs": [
        {
          "kind": "live",
          "group": "OpenAI，访问于 2026-10-24",
          "text": "Codex 文档 · Iterate on UI with live updates",
          "url": "https://learn.chatgpt.com/docs/prompting#iterate-on-ui-with-live-updates"
        }
      ],
      "steps": [
        "像不像",
        "新加了什么",
        "提交或放弃",
        "提交结果"
      ],
      "script": [
        "【操作提示｜回放｜停留课件 p40c 第 1 步，指页脚出处和手机首屏】\n\n要不要接受，先想清楚怎么审。这一次的 diff 很大，大半是样式，逐行读意义不大。像不像参考，好不好看，diff 里也看不出来，只能我们在浏览器里看：从上滚到下，和参考并排看一遍；再缩到手机的宽度看一眼，看侧栏在窄屏上是怎么处理的。最后看页脚，参考的出处写上了没有。",
        "【操作提示｜推进 p40c 第 2 步，逐条指清单】\n\n看完页面，再看两件事。第一件，它新加了什么。排练这一次，多了一段滚动时高亮导航的脚本，一段首屏淡入的动画，还有一个本地的 SVG 素材，就是它自己画的那层细线。这些在计划和最后的报告里都写了，我们要知道它们在那里。第二件，范围对不对：只动了页面的文件，个人内容没变，也没有加依赖。",
        "【操作提示｜推进 p40c 第 3 步，指提交 Prompt 和底部横条；页底链接不现场打开】\n\n都满意，就让 Codex 提交，Prompt 就是画面上这一段：先列出 git status 给我们看，再提交，提交说明的第一行写 homepage-v2。不满意呢？还没提交的改动，可以让它用 git restore 放弃，回到 homepage-v1。OpenAI 的官方文档讲到用 Codex 迭代界面，推荐的也是这个节奏：小步改，在浏览器里看，喜欢的就提交，不喜欢就回退。",
        "【操作提示｜推进 p40c 第 4 步，指它的说明和提交输出。讲完切浏览器，把当天结果从上滚到下和参考比一遍，用设备工具栏看 360×800 首屏，看页脚出处；切 Codex 粘贴主画面的提交 Prompt，git add、git commit 各弹一次批准框，看清文件和提交说明第一行再批准；提交完切回课件，进入 p41b】\n\n排练这一次，它先列出了 git status，接着说明：沙箱里的 .git 目录只能读，要我们批准，才能到沙箱外面去写。上一节提交的时候也是这样。git add 和 git commit，各弹了一次批准框。批准之前，看清两件事：提交的是这四个文件，提交说明的第一行是 homepage-v2。\n\n【切换｜浏览器 · 个人主页】\n\n现场这一次，我们也按这张清单审一遍。从上滚到下，和参考比一比，再缩到手机宽度，最后看页脚的出处。\n\n【切换｜Codex 标签页】\n\n看过了，满意，就把提交的 Prompt 发过去。批准框弹出来的时候，看清文件和提交说明，再确认。\n\n【切换｜回课件 p41b】"
      ],
      "teaching": [],
      "source": "index.html#p40c",
      "seconds": 120
    },
    {
      "id": "p41b",
      "segment": "小结",
      "label": "暂停自检",
      "title": "暂停自检：它看到了什么？",
      "lead": "每题先暂停，写出你的判断，再补一条依据。三题的答案都在这一节的记录里，换一次运行也成立。参考答案在阅读模式中查看。",
      "html": "<style>body[data-mode=\"slides\"] #p41b .x-answer{display:none}body[data-mode=\"slides\"] #p41b .p-qrow h3{font-size:24px}body[data-mode=\"slides\"] #p41b .p-back-to{font-size:16px}</style><div class=\"p-qlist\"><div class=\"p-qrow\" data-reveal=\"0\"><span class=\"p-n\">1</span><div><h3>它说参考是“深紫侧栏、18em 宽”，这个判断的依据在请求的哪一块？它看到页面了吗？</h3><p class=\"x-answer\">在“工具返回”里它挑着读的 CSS 片段；它看到的是代码，不是渲染出来的页面</p><span class=\"p-back-to\">回看：取回来，不等于看到了</span></div></div><div class=\"p-qrow\" data-reveal=\"1\"><span class=\"p-n\">2</span><div><h3>第二轮贴的两张图，出现在请求的哪一块？后面的请求里还有吗？</h3><p class=\"x-answer\">在“新的 Prompt”，和我们那句话在同一条消息里；之后每次请求都带着</p><span class=\"p-back-to\">回看：把看到的样子带进请求</span></div></div><div class=\"p-qrow\" data-reveal=\"2\"><span class=\"p-n\">3</span><div><h3>它说“改好了”，像不像由谁判断？为什么不能由它自己判断？</h3><p class=\"x-answer\">由我们在浏览器里看；渲染出来的页面不在 context 里，它看不见自己做出来的页面</p><span class=\"p-back-to\">回看：第一轮改完</span></div></div></div>",
      "steps": [
        "依据在哪",
        "图在哪",
        "谁来判断"
      ],
      "script": [
        "【操作提示｜停留课件 p41b 第 1 步，读完题停两秒留出暂停，再讲参考判断；答案在阅读模式；不切窗口】\n\n最后做一个自检，一共三个问题。第一题：它说参考是深紫色的侧栏、十八 em 宽，这个判断的依据，在请求的哪一块？它看到页面了吗？请暂停想一想。\n\n依据在工具返回里，是它挑着读的那些 CSS 片段。它看到的是代码，不是渲染出来的页面。取回来，不等于看到了。",
        "【操作提示｜推进 p41b 第 2 步，读完题停两秒留出暂停，再讲参考判断】\n\n第二题：第二轮我们贴的两张图，出现在请求的哪一块？后面的请求里还有吗？请暂停想一想。\n\n在新的 Prompt 里，和我们那句话在同一条消息里。之后的每一次请求，都带着它们，到最后提交的那一次，也还在。",
        "【操作提示｜推进 p41b 第 3 步，读完题停两秒留出暂停，再讲参考判断】\n\n第三题：它说改好了，像不像，由谁来判断？为什么不能由它自己判断？请暂停，写下你的答案。\n\n由我们在浏览器里看。渲染出来的页面不在 context 里，它看不见自己做出来的页面；build 通过，也回答不了像不像。"
      ],
      "teaching": [],
      "source": "index.html#p41b",
      "seconds": 90
    },
    {
      "id": "p42",
      "segment": "小结",
      "label": "本节小结",
      "title": "改风格之前，先问它看到了什么",
      "lead": "本节从 homepage-v1 开始，参考一个主页改了两轮风格。取回来不等于看到了：进入 context 的只是它挑着读的代码片段；页面的样子不在 context 里，像不像要我们自己看；看到的样子要靠我们带进去：截图加一句话，放进新的 Prompt。审过再让 Codex 提交。下一节：发布上线。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">项目</h3><div class=\"p-star\" style=\"width:260px;font-size:24px\">homepage-v1<br>→ homepage-v2</div><p class=\"p-sub\" style=\"text-align:center;margin-top:10px\">回退靠 git，不靠对话</p></div><div data-reveal=\"1\"><h3>它看到了什么</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-point\">取回来不等于看到了：只有挑着读的片段</li><li class=\"is-point\">页面的样子不在 context 里</li><li class=\"is-point\">看到的样子要靠我们带进去：截图加一句话</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.4 发布上线</h3><p>工具列表里没有 gh，它怎样用上</p></div></div></div>",
      "steps": [
        "项目",
        "它看到了什么",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，指左侧星形；不切窗口】\n\n回顾一下这一节。项目上，我们从 homepage-v1 走到了 homepage-v2：内容没变，样子换了。每一步都回得去，因为回退靠的是 git 提交，不是对话。",
        "【操作提示｜推进 p42 第 2 步，依次指中间三条】\n\n请求里，我们一直在问同一个问题：它看到了什么？第一，取回来不等于看到了：给它一个网址，进到 context 的，只是它挑着读的代码片段。第二，页面的样子不在 context 里：像不像，要我们自己在浏览器里看。第三，看到的样子，要靠我们带进去：截一张图，加一句话，放进新的 Prompt。以后让它改别的东西，也可以先问一句：它改的依据，在请求的哪一块？",
        "【操作提示｜推进 p42 第 3 步，指“下一节”框，随后点击播放器的“下一节”进入 2.4】\n\n下一节，我们把这个主页发布上线，拿到一个别人也能打开的网址。发布要和 GitHub 打交道，Codex 会用到 gh 这个命令。可是它的工具列表里，并没有 gh，它是怎样用上的？GitHub 上的状态，又是怎样进到请求里的？我们下节再见～"
      ],
      "teaching": [],
      "source": "index.html#p42",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "提参考",
      "seconds": 270
    },
    {
      "label": "它拿到了什么",
      "seconds": 210
    },
    {
      "label": "看效果再反馈",
      "seconds": 300
    },
    {
      "label": "接受并保存",
      "seconds": 150
    },
    {
      "label": "小结",
      "seconds": 180
    }
  ]
};
