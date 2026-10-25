window.lesson = {
  "title": "参考一个主页改风格：它看到了什么",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.03",
  "summary": "从上一节提交的 homepage-v1 开始，参考一个主页改两轮风格。每一轮都回到请求看它拿到了什么：取回来不等于看到了，页面的样子不在 context 里，要靠我们把截图和看法带进去。审过再让 Codex 提交。",
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
        "【操作提示｜停留课件 p35 第 1 步，指章节地图上的 2.3】\n\n上一节我们把个人信息放进了主页，看过页面、build 也通过了，最后让 Codex 提交了 homepage-v1。",
        "【操作提示｜推进第 2 步，指“起点”和“重点”】\n\n这一节只动样子：找一个喜欢的主页，参考它改出自己的风格，改两轮。不管改成什么样，不满意都能回到 homepage-v1。",
        "【操作提示｜推进第 3 步，指锚点图亮起的三块和列外那一项；讲完进入 p40a0】\n\n有个问题贯穿这一节：我们在浏览器里看得到参考长什么样，Codex 看得到吗？它改风格的依据，只能来自请求里的这几块：工具返回、对话历史，和我们新写的 Prompt。浏览器里的页面，画在列外。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "上一节结尾已经让 Codex 提交了 homepage-v1，这一节不再审内容。没跟上的从快照分支 ch02/2.2-done-20261024 开始（C2-104）。"
        }
      ],
      "source": "index.html#p35",
      "seconds": 90
    },
    {
      "id": "p40a0",
      "segment": "提参考",
      "label": "挑一个参考",
      "title": "想要什么样的主页？先挑一个参考",
      "lead": "同一份 profile.md，可以做成完全不同的样子。这里有四个公开的主页或模板：整块紫色的 Hyperspace，深蓝两栏的 Brittany Chiang，青绿页头的 Freelancer，白底蓝链接的 Jon Barron。这次的示例用 Hyperspace，它和我们现在的主页差别最大。把两张首屏放在一起，说清想借鉴什么：左侧的侧栏导航，每一块不同底色的大块背景。你可以选别的参考；学的是风格，不照搬别人的代码和文字，用的时候按各自的许可注明出处。",
      "html": "<div class=\"review-panel\" data-panel-start=\"0\" data-panel-end=\"1\"><div class=\"p-grid\" style=\"--n:4;gap:14px\"><div class=\"p-page\" style=\"position:relative;outline:3px solid #D9481C;outline-offset:3px\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>html5up.net · CC BY 3.0</div><img src=\"external/ref-hyperspace.png\" alt=\"Hyperspace 模板首屏：整块紫色\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"><span class=\"p-tag\" data-role=\"us\" data-reveal=\"1\" style=\"position:absolute;right:8px;top:36px\">这次用</span></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>brittanychiang.com · 注明出处</div><img src=\"external/ref-brittanychiang.png\" alt=\"Brittany Chiang 的主页：深蓝两栏\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>Start Bootstrap · MIT</div><img src=\"external/ref-freelancer.png\" alt=\"Freelancer 模板首屏：青绿页头\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>jonbarron.info · 欢迎复用</div><img src=\"external/ref-jonbarron.png\" alt=\"Jon Barron 的主页：白底蓝链接\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div></div></div><div class=\"review-panel\" data-panel-start=\"2\" data-panel-end=\"2\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>现在：homepage-v1</figcaption><a href=\"assets/before.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/before.png\" alt=\"现在：homepage-v1\" style=\"height:240px\"></a></figure><figure class=\"review-shot\"><figcaption>想借鉴：Hyperspace · HTML5 UP</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"想借鉴：Hyperspace · HTML5 UP\" style=\"height:240px\"></a></figure></div><div class=\"p-bar is-light review-bar\">想借鉴：<b>侧栏导航</b>、<b>大块背景</b> · 不照搬别人的代码和文字</div></div>",
      "refs": [
        {
          "kind": "live",
          "group": "参考主页",
          "text": "Hyperspace · HTML5 UP",
          "url": "https://html5up.net/uploads/demos/hyperspace/"
        },
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
        "【操作提示｜停留课件 p40a0 第 1 步，四张截图从左到右指认】\n\n同一份 profile.md，可以做成完全不同的样子。先看四个公开的主页和模板：整块紫色的 Hyperspace，深蓝两栏的 Brittany Chiang，青绿页头的 Freelancer，白底蓝链接的 Jon Barron。",
        "【操作提示｜推进第 2 步，指“这次用”标记】\n\n这次的示例用 Hyperspace，它和我们现在的主页差别最大。你可以选别的，也可以找一个自己喜欢的主页。",
        "【操作提示｜推进第 3 步，左右指认两张首屏，再指底部横条；随后进入 p40a】\n\n把两张首屏放在一起，说清想借鉴什么：左边一栏固定的侧栏导航，每一块不同底色的大块背景。学的是风格，不照搬别人的代码和文字；Hyperspace 要求注明出处，页脚写一句就行。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "四个候选：brittanychiang.com、startbootstrap.github.io/startbootstrap-freelancer、jonbarron.info，各自许可见 materials/external/README.md。四张候选是首屏截图（courseware/tools/capture-source.py，2026-10-23）；两张对照是 10-24 排练时 Chromium 1440×800 的首屏。参考在 1280 宽会把侧栏变成顶部横条，录制时浏览器开宽一点再看侧栏。"
        }
      ],
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
        "【操作提示｜停留课件 p40a 第 1 步，指 Goal 和 Context】\n\n沿用第一章的四要素。Goal：参考 Hyperspace 改我的主页，我喜欢它的侧栏导航和大块背景。Context：给了参考页的网址，点明用 curl 看它的 HTML 和 CSS，要联网由我来批准，再结合当前代码给个计划，等我确认再改。",
        "【操作提示｜推进第 2 步，指 Constraints】\n\nConstraints：个人内容保留，不改写、不补写；不加依赖，不引远程字体和图片。守住的是“内容是我的”，样子可以变。",
        "【操作提示｜推进第 3 步，指 Done when；讲完切 Terminal：/clear 或开新会话，再 /plan，粘贴 Prompt；curl 申请联网时，指批准框里的网址再批准；它开始读参考、弹出交互题时先不答，回课件进入 p40b】\n\nDone when：build 通过，页脚注明出处，页面效果我在浏览器里看，它不用启动预览服务。请暂停视频，选一个你喜欢的参考，提交 Prompt。我们到终端里也发出去。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "点明用 curl：不点明时它可能用网页搜索，在这套配置下只拿到首屏摘要（2026-10-22 实测）。Prompt 是 10-25 排练的原文。"
        }
      ],
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
        "【操作提示｜停留课件 p40b 第 1 步，阅读视图指 curl 那一行】\n\n我们给的是网址，它拿到的是什么？先看排练这次的记录。它申请到沙箱外联网，用 curl 把参考的 HTML 和 CSS 存进 /tmp 下的两个文件。",
        "【操作提示｜推进第 2 步，指工具返回里的两个行数】\n\n进入请求的工具返回，只有这两个文件的行数：HTML 208 行，CSS 3908 行。页面本身，这时并不在 context 里。",
        "【操作提示｜推进第 3 步，指 cat 和 sed 那几行，不念行号】\n\n接着它把 HTML 整份打了出来；CSS 先看开头 240 行，再按行号一段一段挑着读。进入工具返回的，就是这些片段。",
        "【操作提示｜推进第 4 步，指它的回答，再指下面 CSS 片段里的 fixed 和 18em；讲完切 claude-tap 现场，指同一类调用和返回，讲相同和不同；再切 Terminal 答交互题、看计划，回课件进入 p40a1】\n\n然后它说：我看过 Hyperspace 的源码了，18em 宽的深紫侧栏，几种大色块。这些判断都能在它读到的 CSS 片段里找到，可那是代码，不是渲染出来的页面。取回来，不等于看到了。现场的记录里，读哪几段、读多少不会和这里一样，但同样是把参考存成文件，再挑着读。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "Anthropic，2025-09-29",
          "text": "Effective context engineering · Context retrieval and agentic search",
          "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
        }
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-25 排练：从 ch02/2.2-done-20261024 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash。公开数据见 materials/style/run-20261025，只导出课件用到的记录；存进文件、挑着读，在 10-24、10-25 的五次排练里都出现过。"
        }
      ],
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
        "【操作提示｜停留课件 p40a1 第 1 步，指两组回答，再指 hero_bg 那一项】\n\n读完参考，它问了两组偏好，排练时我都选了推荐项。其中一题问首屏背景：参考用的是一张线稿图，我们不让引远程图片，推荐项是用 CSS 渐变代替。我们选的答案，就是那个提问工具的返回，在请求的工具返回这一块。",
        "【操作提示｜推进第 2 步，指计划里“首屏：CSS 渐变”那一行】\n\n它的计划，是它自己的回答。计划里也写着这一句：首屏用 CSS 渐变，替代原版的 intro.svg。",
        "【操作提示｜推进第 3 步，指下一次请求里的计划和 Implement the plan.；讲完切 Terminal，按现场的计划讲相同和不同，选 Yes, implement this plan；实施几分钟可剪掉；改完切浏览器，进入 p40b1】\n\n到了下一次请求，计划就在对话历史里，后面每次请求都带着，它改的时候照着。计划只动页面文件，不加依赖，就选 Yes, implement this plan，界面会替我们发出一句 Implement the plan.。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-25 排练：从 ch02/2.2-done-20261024 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；交互题和计划每次排练都不一样，题目内容只作例子。"
        }
      ],
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
        "【操作提示｜停留课件 p40b1 第 1 步，左右指认两张首屏】\n\n第一轮改完，build 通过了。在浏览器里和参考并排，看同样宽度的首屏：侧栏、色块、导航下划线都做出来了。",
        "【操作提示｜推进第 2 步，指导航上的当前位置】\n\n滚到工作经历，导航也会提示现在在哪一块。这些都可以留着。",
        "【操作提示｜推进第 3 步，指两块放大的首屏背景】\n\n和想的不一样的地方，排练这次是首屏背景：我们这边是一整片平滑的渐变，参考上有很淡的交叉细线。这是我们自己在交互题里选的，看计划时这一句并不显眼，看到页面才知道少了什么。",
        "【操作提示｜推进第 4 步，指黑色横条；讲完切浏览器，把现场的第一轮和参考并排看，说出当天哪里和想的不一样，再回课件进入 p40d】\n\n这个差别我们一眼就看到了，它看不到：渲染出来的页面不在 context 里，build 通过也回答不了像不像。那怎么让它知道哪里不像？"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "当天第一轮不一样的地方很可能不同，按现场讲：它做到了什么、哪里和想的不一样。10-24 那次排练是背景铺满了密集小箭头（它把参考 CSS 里下拉框的图标当成了纹理），可以作为另一个例子一句带过。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-25 排练：从 ch02/2.2-done-20261024 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；截图是 Chromium 1440×800、reduced motion。这一次第一轮按 Done when 没有起预览服务。"
        }
      ],
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
        "【操作提示｜停留课件 p40d 第 1 步，指两张图和下面那句话】\n\n继续同一个会话，截两张首屏：先贴现在的效果，再贴参考，然后说一句。排练这次是这样说的：第一张是现在的效果，第二张是参考页，现在首屏背景是一整片平滑的渐变，我更喜欢参考里那种很淡的交叉细线，帮我往这个感觉调，其他部分先保持。图给出我们看到的页面，话说出这次的偏好。换成你自己的，照这个样子填空就行。",
        "【操作提示｜推进第 2 步，指请求里的两张图和那句话】\n\n回看请求，这一条就是新的 Prompt：两张图，加上我们那句话，顺序和贴进去的一样。",
        "【操作提示｜推进第 3 步，指 404 和找到的那两条返回，再指它读懂画法那一句】\n\n看了图，它去找参考的纹理原图。先按页面目录取，拿到一个 404；再试几个路径，找到了。读懂原版是十来条很淡的直线以后，它自己画了一份。",
        "【操作提示｜推进第 4 步，指无头 Chrome 那一行和我们的话】\n\n画完它想看看效果，要用无头 Chrome 截图，我们拒绝了：页面我自己在浏览器里看。它看见了我们贴的图，可它自己做出来的页面，它还是看不见。",
        "【操作提示｜推进第 5 步，指提交那次请求里的同一条】\n\n到最后提交那一次请求，这两张图还在。之后每次请求都带着它们。",
        "【操作提示｜推进第 6 步，指反馈前后两块；讲完切 Terminal，贴当天的两张首屏，按当天的差别说一句；它在改的时候切 claude-tap 指新的 Prompt 里的图；它要截图就拒绝；改完切浏览器看同一位置，再回课件进入 p40e】\n\n改完回到首屏同一位置看：多了淡淡的交叉细线，其他部分没动。要让它自己截图看页面，得专门把浏览器接进它的运行环境，这是后面章节的事。"
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
      "teaching": [
        {
          "title": "讲师提示",
          "text": "贴图：把图片文件拖进终端，或复制后在 Codex 里 Ctrl+V，输入框出现 [Image #1]、[Image #2]，再写那句话。它要截图时弹出批准框，选 No 并说“不用截图，页面我自己在浏览器里看”。先 404 再找到纹理原图，10-24 定稿那次排练也出现过。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-25 排练：从 ch02/2.2-done-20261024 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；贴图那次请求的两项 input_image 与 assets/round1.png、assets/reference.png 逐字节相同，构建时核对。新画的 SVG 是它自己写的 13 条线，没有复制原文件。不把一次结果说成图片单独起了多大作用。"
        }
      ],
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
        "【操作提示｜停留课件 p40e，先指左图再指右图；讲完进入 p40c】\n\n两轮下来，看看改成了什么样。左边是上一节提交的 homepage-v1，右边是这一节改完的：侧栏导航、大块色块、首屏淡淡的交叉细线。个人信息一字没改，样子完全换了。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-25 排练：从 ch02/2.2-done-20261024 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；整页截图 Chromium 1440 宽、reduced motion。"
        }
      ],
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
        "【操作提示｜停留课件 p40c 第 1 步，指页脚出处和手机首屏】\n\n要不要接受？diff 很大，不用逐行读。像不像，只能我们在浏览器里看：从上滚到下和参考并排看，再缩到手机宽度看一眼。页脚的参考出处也在。",
        "【操作提示｜推进第 2 步，逐条指清单】\n\n再看它新加了什么。排练这次，多了一段滚动高亮的脚本、首屏淡入的动画和一个本地 SVG 素材，计划和报告里都说了。范围也对：只动了页面文件，个人内容没变，没加依赖。",
        "【操作提示｜推进第 3 步，指提交 Prompt 和底部横条】\n\n满意，就让 Codex 提交。不满意，还没提交的改动让它 git restore 放弃，回到 homepage-v1。官方文档推荐的 UI 迭代也是这样：小步改，在浏览器里看，喜欢的提交，不喜欢的回退。",
        "【操作提示｜推进第 4 步，指它的说明和提交输出；讲完切浏览器把当天结果从上滚到下看一遍，再切 Terminal 粘贴提交 Prompt，批准框里看清文件和提交说明再确认，回课件进入 p41b】\n\n排练这次，它先列出 git status，然后说沙箱里 .git 只能读，要我批准才能写。git add、git commit 各弹了一次批准框，看清是这四个文件、提交说明第一行是 homepage-v2，再确认。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-25 排练：从 ch02/2.2-done-20261024 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；提交是 e53f35b（4 个文件），快照分支 ch02/2.3-done-20261025 就是这次提交，2.4 从它起跑。"
        },
        {
          "title": "跟做产出",
          "text": "至少一轮风格改动，审过后让 Codex 提交，或用 git restore 放弃。"
        }
      ],
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
        "【操作提示｜停留课件 p41b 第 1 步；读题后暂停】\n\n停一下，自己答三个问题。第一题：它说参考是深紫侧栏、18em 宽，这个判断的依据在请求的哪一块？它看到页面了吗？",
        "【操作提示｜推进第 2 步】\n\n第二题：第二轮贴的两张图，出现在请求的哪一块？后面的请求里还有吗？",
        "【操作提示｜推进第 3 步；参考答案在阅读模式，口播不念答案】\n\n第三题：它说改好了，像不像由谁判断？为什么不能由它自己判断？请暂停视频，写下你的答案。"
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
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">项目</h3><div class=\"p-star\" style=\"width:260px;font-size:24px\">homepage-v1<br>→ homepage-v2</div><p class=\"p-sub\" style=\"text-align:center;margin-top:10px\">回退靠 git，不靠对话</p></div><div data-reveal=\"1\"><h3>它看到了什么</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-point\">取回来不等于看到了：只有挑着读的片段</li><li class=\"is-point\">页面的样子不在 context 里</li><li class=\"is-point\">看到的样子要靠我们带进去：截图加一句话</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.4 发布上线</h3><p>context 发给了谁，又怎样送出去</p></div></div></div>",
      "steps": [
        "项目",
        "它看到了什么",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，指左侧星形】\n\n回顾一下。这一节从 homepage-v1 走到了 homepage-v2，怎么改都回得去：回退靠 git，不靠对话。",
        "【操作提示｜推进第 2 步，指中间三条】\n\n这一节最想留下的，是那个问题：它看到了什么？取回来不等于看到了，进 context 的只是它挑着读的代码片段；页面的样子不在 context 里，像不像要我们自己看；看到的样子要靠我们带进去，截图加一句话，放进新的 Prompt。",
        "【操作提示｜推进第 3 步，指“下一节 2.4”；结束本节】\n\n下一节，我们把个人主页发布上线，也看看 context 发给了谁，又是怎样把动作送出去的。"
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
