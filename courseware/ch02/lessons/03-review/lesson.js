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
          "text": "上一节结尾已经让 Codex 提交了 homepage-v1，这一节不再审内容。没跟上的从快照分支 ch02/2.2-done-20261024 开始（C2-99）。"
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
      "prompt": "我想参考 https://html5up.net/uploads/demos/hyperspace/ 的风格改一下这个个人主页，喜欢它的侧栏导航和大块背景。请用 curl 看看参考页的 HTML 和 CSS，再结合当前代码给个修改计划，先别改。保留我的个人内容，不新增依赖，页面效果我会在浏览器里看。",
      "label": "把参考交给它",
      "title": "一段话写清四件事",
      "lead": "这次的任务不大，Prompt 写成一段话，四要素都在里面：目标是参考 Hyperspace 改风格、喜欢它的侧栏和大块背景；背景是参考页的网址，点明用 curl 看 HTML 和 CSS，结合当前代码；约束是先给计划别改、保留个人内容、不新增依赖；完成标准里写明页面效果由我们在浏览器里看。新任务用 /clear 或新会话，再 /plan。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>Goal · Context</b><small>参考 Hyperspace 改风格；用 curl 看 HTML 和 CSS，结合当前代码</small></span></li><li class=\"is-ok\" data-reveal=\"1\"><span><b>Constraints</b><small>先给计划别改；保留个人内容，不新增依赖</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>Done when</b><small>页面效果我们自己在浏览器里看</small></span></li></ol></div>",
      "steps": [
        "目标与背景",
        "约束",
        "完成标准"
      ],
      "script": [
        "【操作提示｜停留课件 p40a 第 1 步，指 Prompt 里的网址和 curl 那一句】\n\n这次任务不大，Prompt 写成一段话，四要素都在里面。目标：参考 Hyperspace 改风格，喜欢它的侧栏和大块背景。背景：给了参考的网址，点明用 curl 看它的 HTML 和 CSS，再结合当前代码。",
        "【操作提示｜推进第 2 步，指“先给计划”和“保留个人内容”】\n\n约束：先给计划，别急着改；个人内容保留，不新增依赖。守住的是“内容是我的”，样子可以变。",
        "【操作提示｜推进第 3 步，指完成标准；讲完切 Terminal：/clear 或开新会话，再 /plan，粘贴 Prompt；curl 申请联网时，指批准框里的网址再批准；它开始读参考、弹出交互题时先不答，回课件进入 p40b】\n\n完成标准里写明：页面效果我在浏览器里看。请暂停视频，选一个你喜欢的参考，提交 Prompt。我们到终端里也发出去。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "点明用 curl：不点明时它可能用网页搜索，在这套配置下只拿到首屏摘要（2026-10-22 实测）。Prompt 是 10-24 排练的原文，没有为课件改写。"
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
      "lead": "我们给的是网址，它拿到的是什么？回看排练的记录：curl 在沙箱里联网失败，它申请到沙箱外，把 HTML 和 CSS 存进 /tmp 下的文件；进入请求的工具返回只有两个文件的大小。接着它用 sed 看 HTML 的前 140 行，CSS 有六万多字节，它用 grep、sed 一段一段挑着读。它说“看过了”，深紫侧栏、18em 宽，这些判断能在它读到的 CSS 片段里找到，但那是代码片段，不是渲染出来的页面。左侧按钮切换观察点，阅读视图展示原文节选。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;fetch-call&quot;, &quot;fetch-result&quot;, &quot;read-call&quot;, &quot;style-answer&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"fetch-call\" aria-pressed=\"true\"><b>取回来</b><span>curl 存进 /tmp 的文件</span></button><button type=\"button\" data-ev-key=\"fetch-result\" aria-pressed=\"false\"><b>工具返回</b><span>只有文件大小</span></button><button type=\"button\" data-ev-key=\"read-call\" aria-pressed=\"false\"><b>挑着读</b><span>sed、grep 一段一段看</span></button><button type=\"button\" data-ev-key=\"style-answer\" aria-pressed=\"false\"><b>它说看过了</b><span>判断来自代码片段</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-24 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=fetch-call\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"fetch-call\" ><p class=\"p-ev-source\">10-24 排练 · 真实记录节选 · 取回来</p><article><h3>它发出的调用 · 沙箱外联网，要我们批准</h3><pre>const r = await tools.exec_command({cmd:&quot;curl -sL https://html5up.net/uploads/demos/hyperspace/ -o /tmp/hyper.html &amp;&amp; curl -sL https://html5up.net/uploads/demos/hyperspace/assets/css/main.css -o /tmp/hyper.css &amp;&amp; wc -c /tmp/hyper.html /tmp/hyper.css&quot;,&quot;sandbox_permissions&quot;:&quot;require_escalated&quot;,&quot;justification&quot;:&quot;允许我访问 html5up.net 下载参考模板的 HTML 和 CSS 吗？&quot;,&quot;prefix_rule&quot;:[&quot;curl&quot;,&quot;-sL&quot;],&quot;yield_time_ms&quot;:20000,&quot;max_output_tokens&quot;:2000});\nconst r = await tools.exec_command({cmd:&quot;curl -sL https://html5up.net/uploads/demos/hyperspace/ -o /tmp/hyper.html &amp;&amp; curl -sL https://html5up.net/uploads/demos/hyperspace/assets/css/main.css -o /tmp/hyper.css &amp;&amp; wc -c /tmp/hyper.html /tmp/hyper.css&quot;,&quot;sandbox_permissions&quot;:&quot;require_escalated&quot;,&quot;justification&quot;:&quot;允许我访问 html5up.net 下载参考模板的 HTML 和 CSS 吗？&quot;,&quot;prefix_rule&quot;:[&quot;curl&quot;,&quot;-sL&quot;],&quot;yield_time_ms&quot;:20000,&quot;max_output_tokens&quot;:2000});</pre><details><summary>展开该项完整原文</summary><pre>const r = await tools.exec_command({cmd:&quot;curl -sL https://html5up.net/uploads/demos/hyperspace/ -o /tmp/hyper.html &amp;&amp; curl -sL https://html5up.net/uploads/demos/hyperspace/assets/css/main.css -o /tmp/hyper.css &amp;&amp; wc -c /tmp/hyper.html /tmp/hyper.css&quot;,&quot;sandbox_permissions&quot;:&quot;require_escalated&quot;,&quot;justification&quot;:&quot;允许我访问 html5up.net 下载参考模板的 HTML 和 CSS 吗？&quot;,&quot;prefix_rule&quot;:[&quot;curl&quot;,&quot;-sL&quot;],&quot;yield_time_ms&quot;:20000,&quot;max_output_tokens&quot;:2000});\ntext(r.output);\n</pre></details></article></section><section data-ev-reading=\"fetch-result\" hidden><p class=\"p-ev-source\">10-24 排练 · 真实记录节选 · 工具返回</p><article><h3>进入请求的工具返回</h3><pre>Script completed\nWall time 20.7 seconds\nOutput:\n\n    8542 /tmp/hyper.html\n   69466 /tmp/hyper.css\n   78008 total\n</pre></article></section><section data-ev-reading=\"read-call\" hidden><p class=\"p-ev-source\">10-24 排练 · 真实记录节选 · 挑着读</p><article><h3>先看 HTML 前 140 行，再在 CSS 里找关键词</h3><pre>  tools.exec_command({cmd:&quot;sed -n &#x27;1,140p&#x27; /tmp/hyper.html&quot;,yield_time_ms:5000,max_output_tokens:8000}),\n  tools.exec_command({cmd:&quot;grep -n &#x27;sidebar\\\\|\\\\.menu\\\\|#menu\\\\|nav&#x27; /tmp/hyper.css | head -80&quot;,yield_time_ms:5000,max_output_tokens:5000}),</pre><details><summary>展开该项完整原文</summary><pre>const r = await Promise.all([\n  tools.exec_command({cmd:&quot;sed -n &#x27;1,140p&#x27; /tmp/hyper.html&quot;,yield_time_ms:5000,max_output_tokens:8000}),\n  tools.exec_command({cmd:&quot;grep -n &#x27;sidebar\\\\|\\\\.menu\\\\|#menu\\\\|nav&#x27; /tmp/hyper.css | head -80&quot;,yield_time_ms:5000,max_output_tokens:5000}),\n  tools.exec_command({cmd:&quot;grep -n &#x27;body\\\\|body:before\\\\|body:after\\\\|background-image\\\\|\\\\.wrapper\\\\|\\\\.main\\\\|\\\\.panel\\\\|\\\\.icon\\\\|@media&#x27; /tmp/hyper.css | head -100&quot;,yield_time_ms:5000,max_output_tokens:6000})\n]);\nfor (const x of r) text(x.output);\n</pre></details></article><article><h3>再按行号挑几段 CSS</h3><pre>  tools.exec_command({cmd:&quot;sed -n &#x27;3460,3560p;3730,3800p&#x27; /tmp/hyper.css&quot;,yield_time_ms:5000,max_output_tokens:7000}),</pre><details><summary>展开该项完整原文</summary><pre>const r = await Promise.all([\n  tools.exec_command({cmd:&quot;sed -n &#x27;3460,3560p;3730,3800p&#x27; /tmp/hyper.css&quot;,yield_time_ms:5000,max_output_tokens:7000}),\n  tools.exec_command({cmd:&quot;grep -n &#x27;background-color\\\\|color: #\\\\|--&#x27; /tmp/hyper.css | sed -n &#x27;1,60p&#x27;; echo ===; sed -n &#x27;3170,3300p&#x27; /tmp/hyper.css&quot;,yield_time_ms:5000,max_output_tokens:9000}),\n  tools.exec_command({cmd:&quot;grep -n &#x27;\\\\.wrapper&#x27; /tmp/hyper.css | head -40; echo ===; sed -n &#x27;3300,3380p&#x27; /tmp/hyper.css&quot;,yield_time_ms:5000,max_output_tokens:5000})\n]);\nfor (const x of r) text(x.output);\n</pre></details></article></section><section data-ev-reading=\"style-answer\" hidden><p class=\"p-ev-source\">10-24 排练 · 真实记录节选 · 它说看过了</p><article><h3>它的回答</h3><pre>我已经把参考模板的 HTML/CSS 抓下来看过了（原版 Hyperspace 的关键结构：左侧18em 固定深紫 `#312450` 侧栏、右对齐大写字母间距导航、hover/激活时底部渐变条 `#5e42a6 → #b74e91`；主体每屏一块整幅纯色背景 `#261c3e / #5e42a6 / #5052b5 / #b74e91` 等 + 斜纹 SVG 纹理，内容区宽 75em，≤1280px 时侧栏变成顶部横条）。当前仓库是 React+Vite 单页 `src/App.tsx` + `src/index.css`，内容已在 `profile.md` 里定稿。</pre><details><summary>展开该项完整原文</summary><pre>我已经把参考模板的 HTML/CSS 抓下来看过了（原版 Hyperspace 的关键结构：左侧18em 固定深紫 `#312450` 侧栏、右对齐大写字母间距导航、hover/激活时底部渐变条 `#5e42a6 → #b74e91`；主体每屏一块整幅纯色背景 `#261c3e / #5e42a6 / #5052b5 / #b74e91` 等 + 斜纹 SVG 纹理，内容区宽 75em，≤1280px 时侧栏变成顶部横条）。当前仓库是 React+Vite 单页 `src/App.tsx` + `src/index.css`，内容已在 `profile.md` 里定稿。\n\n有几个偏好会明显改变结果，先确认一下：</pre></details></article><article><h3>依据：工具返回里的 CSS 片段</h3><pre>\t#sidebar {\n\t\tposition: fixed;\n\t\twidth: 18em;</pre><details><summary>展开该项完整原文</summary><pre>Script completed\nWall time 0.1 seconds\nOutput:\n\n\t\t\t\t\t\t\tline-height: 6em;\n\t\t\t\t\t\t}\n\n\t\t}\n\n/* Wrapper (main) */\n\n\t#sidebar + #wrapper {\n\t\tmargin-left: 18em;\n\t}\n\n\t\t@media screen and (max-width: 1280px) {\n\n\t\t\t#sidebar + #wrapper {\n\t\t\t\tmargin-left: 0;\n\t\t\t\tpadding-top: 3.5em;\n\t\t\t}\n\n\t\t}\n\n\t\t@media screen and (max-width: 736px) {\n\n\t\t\t#sidebar + #wrapper {\n\t\t\t\tpadding-top: 0;\n\t\t\t}\n\n\t\t}\n\n\t#header + #wrapper &gt; .wrapper &gt; .inner {\n\t\tmargin: 0 auto;\n\t}\n\n/* Footer */\n\n\t#sidebar + #wrapper + #footer {\n\t\tmargin-left: 18em;\n\t}\n\n\t\t@media screen and (max-width: 1280px) {\n\n\t\t\t#sidebar + #wrapper + #footer {\n\t\t\t\tmargin-left: 0;\n\t\t\t}\n\n\t\t}\n\n\t#footer &gt; .inner a {\n\t\tborder-bottom-color: rgba(255, 255, 255, 0.15);\n\t}\n\n\t\t#footer &gt; .inner a:hover {\n\t\t\tborder-bottom-color: transparent;\n\t\t}\n\n\t#footer &gt; .inner .menu {\n\t\tfont-size: 0.8em;\n\t\tcolor: rgba(255, 255, 255, 0.15);\n\t}\n\n\t#header + #wrapper + #footer &gt; .inner {\n\t\tmargin: 0 auto;\n\t}\n\n/* Sidebar */\n\n\t#sidebar {\n\t\tpadding: 2.5em 2.5em 0.5em 2.5em ;\n\t\tbackground: #312450;\n\t\tcursor: default;\n\t\theight: 100vh;\n\t\tleft: 0;\n\t\toverflow-x: hidden;\n\t\toverflow-y: auto;\n\t\tposition: fixed;\n\t\ttext-align: right;\n\t\ttop: 0;\n\t\twidth: 18em;\n\t\tz-index: 10000;\n\t}\n\n\t\t#sidebar &gt; .inner {\n\t\t\tdisplay: -moz-flex;\n\t\t\tdisplay: -webkit-flex;\n\t\t\tdisplay: -ms-flex;\n\t\t\tdisplay: flex;\n\t\t\t-moz-flex-direction: column;\n\t\t\t-webkit-flex-direction: column;\n\t\t\t-ms-flex-direction: column;\n\t\t\tflex-direction: column;\n\t\t\t-moz-justify-content: center;\n\t\t\t-webkit-justify-content: center;\n\t\t\t-ms-justify-content: center;\n\t\t\tjustify-content: center;\n\t\t\t-moz-transform: translateY(0);\n\t\t\t-webkit-transform: translateY(0);\n\t\t\t-ms-transform: translateY(0);\n\t\t\ttransform: translateY(0);\n\t\t\t-moz-transition: opacity 1s ease;\n\t\t\t-webkit-transition: opacity 1s ease;\n\t\t\t-ms-transition: opacity 1s ease;\n\t\t\ttransition: opacity 1s ease;\n\t\t\t\t\t-ms-transition-delay: 4.25s;\n\t\t\t\t\ttransition-delay: 4.25s;\n\t\t\t\t}\n\n\t\t#sidebar nav a {\n\t\t\t-moz-transition: color 0.2s ease;\n\t\t\t-webkit-transition: color 0.2s ease;\n\t\t\t-ms-transition: color 0.2s ease;\n\t\t\ttransition: color 0.2s ease;\n\t\t\tborder: 0;\n\t\t\tcolor: rgba(255, 255, 255, 0.35);\n\t\t\tdisplay: block;\n\t\t\tfont-size: 0.6em;\n\t\t\tfont-weight: bold;\n\t\t\tletter-spacing: 0.25em;\n\t\t\tline-height: 1.75;\n\t\t\toutline: 0;\n\t\t\tpadding: 1.35em 0;\n\t\t\tposition: relative;\n\t\t\ttext-decoration: none;\n\t\t\ttext-transform: uppercase;\n\t\t}\n\n\t\t\t#sidebar nav a:before, #sidebar nav a:after {\n\t\t\t\tborder-radius: 0.2em;\n\t\t\t\tbottom: 0;\n\t\t\t\tcontent: &#x27;&#x27;;\n\t\t\t\theight: 0.2em;\n\t\t\t\tposition: absolute;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\n\t\t\t#sidebar nav a:before {\n\t\t\t\tbackground: #3c2c62;\n\t\t\t}\n\n\t\t\t#sidebar nav a:after {\n\t\t\t\tbackground-image: -moz-linear-gradient(to right, #5e42a6, #b74e91);\n\t\t\t\tbackground-image: -webkit-linear-gradient(to right, #5e42a6, #b74e91);\n\t\t\t\tbackground-image: -ms-linear-gradient(to right, #5e42a6, #b74e91);\n\t\t\t\tbackground-image: linear-gradient(to right, #5e42a6, #b74e91);\n\t\t\t\t-moz-transition: max-width 0.2s ease;\n\t\t\t\t-webkit-transition: max-width 0.2s ease;\n\t\t\t\t-ms-transition: max-width 0.2s ease;\n\t\t\t\ttransition: max-width 0.2s ease;\n\t\t\t\tmax-width: 0;\n\t\t\t}\n\n\t\t\t#sidebar nav a:hover {\n\t\t\t\tcolor: rgba(255, 255, 255, 0.55);\n\t\t\t}\n\n\t\t\t#sidebar nav a.active {\n\t\t\t\tcolor: #ffffff;\n\t\t\t}\n\n\t\t\t\t#sidebar nav a.active:after {\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t}\n\n\t\tbody.is-preload #sidebar &gt; .inner {\n\t\t\topacity: 0;\n\t\t}\n\n\t\tbody.is-preload #sidebar nav ul li {\n\t\t\t-moz-transform: translateY(2em);\n\t\t\t-webkit-transform: translateY(2em);\n\t\t\t-ms-transform: translateY(2em);\n\t\t\ttransform: translateY(2em);\n\t\t\topacity: 0;\n\n58:\tbackground-color: transparent;\n161:\t\t\tcolor: #ffffff;\n165:\t\tcolor: #ffffff;\n178:\t\tcolor: #ffffff;\n1834:\t\tbackground-color: transparent;\n1838:\t\tcolor: #ffffff !important;\n1917:\t\t\tbackground-color: #ffffff;\n1918:\t\t\tcolor: #312450 !important;\n1968:\t\t\t\tborder-color: #ffffff !important;\n2298:\t\tcolor: #ffffff;\n2343:\t\t\tborder-color: #ffffff;\n2358:\t\t\tcolor: #ffffff;\n2363:\t\t\tbackground-color: transparent;\n2446:\t\t\tborder-color: #ffffff;\n2447:\t\t\tcolor: #b74e91;\n2453:\t\t\tborder-color: #ffffff;\n2528:\t\t\tcolor: #312450;\n2539:\t\t\t\t\tcolor: #5e42a6;\n2543:\t\t\t\t\tcolor: #493382;\n2547:\t\t\t\t\tcolor: #5052b5;\n2551:\t\t\t\t\tcolor: #3e4094;\n2555:\t\t\t\t\tcolor: #b74e91;\n2559:\t\t\t\t\tcolor: #953d75;\n3067:\t\t\tbackground-color: rgba(0, 0, 0, 0.05);\n3071:\t\t\tbackground-color: rgba(0, 0, 0, 0.1);\n3153:\t\t\t\tbackground-color: rgba(255, 255, 255, 0.05);\n3161:\t\t\tcolor: #ffffff;\n3239:\t\t\tbackground-color: #261c3e;\n3243:\t\t\tbackground-color: #5e42a6;\n3247:\t\t\tbackground-color: #493382;\n3251:\t\t\tbackground-color: #5052b5;\n3255:\t\t\tbackground-color: #3e4094;\n3259:\t\t\tbackground-color: #b74e91;\n3263:\t\t\tbackground-color: #953d75;\n3373:\t\tbackground-color: #5e42a6;\n3380:\t\t\tcolor: #ffffff;\n3425:\t\t\t\t\t\t\tcolor: #ffffff;\n3784:\t\t\t\tcolor: #ffffff;\n3860:\t\t\t\t\t\t\tbackground-color: #b74e91;\nzsh:1: == not found\n\n2538:\t\t\t\t.wrapper.style1 .icon.major:before {\n2542:\t\t\t\t.wrapper.style1-alt .icon.major:before {\n2546:\t\t\t\t.wrapper.style2 .icon.major:before {\n2550:\t\t\t\t.wrapper.style2-alt .icon.major:before {\n2554:\t\t\t\t.wrapper.style3 .icon.major:before {\n2558:\t\t\t\t.wrapper.style3-alt .icon.major:before {\n3204:\t.wrapper {\n3208:\t\t.wrapper &gt; .inner {\n3216:\t\t\t\t.wrapper &gt; .inner {\n3224:\t\t\t\t.wrapper &gt; .inner {\n3232:\t\t\t\t.wrapper &gt; .inner {\n3238:\t\t.wrapper.alt {\n3242:\t\t.wrapper.style1 {\n3246:\t\t.wrapper.style1-alt {\n3250:\t\t.wrapper.style2 {\n3254:\t\t.wrapper.style2-alt {\n3258:\t\t.wrapper.style3 {\n3262:\t\t.wrapper.style3-alt {\n3266:\t\t.wrapper.fullscreen {\n3282:\t\t\tbody.is-ie .wrapper.fullscreen {\n3288:\t\t\t\t.wrapper.fullscreen {\n3292:\t\t\t\t\tbody.is-ie .wrapper.fullscreen {\n3300:\t\t\t\t.wrapper.fullscreen {\n3305:\t\t\t\t\tbody.is-ie .wrapper.fullscreen {\n3311:\t\t.wrapper.fade-up &gt; .inner {\n3323:\t\t.wrapper.fade-up.inactive &gt; .inner,\n3324:\t\tbody.is-preload .wrapper.fade-up &gt; .inner {\n3332:\t\t.wrapper.fade-down &gt; .inner {\n3344:\t\t.wrapper.fade-down.inactive &gt; .inner,\n3345:\t\tbody.is-preload .wrapper.fade-down &gt; .inner {\n3353:\t\t.wrapper.fade &gt; .inner {\n3361:\t\t.wrapper.fade.inactive &gt; .inner,\n3362:\t\tbody.is-preload .wrapper.fade &gt; .inner {\n3488:\t#header + #wrapper &gt; .wrapper &gt; .inner {\nzsh:1: == not found\n</pre></details></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "取回来",
        "工具返回",
        "挑着读",
        "它说看过了"
      ],
      "script": [
        "【操作提示｜停留课件 p40b 第 1 步，阅读视图指 curl 那一行和 justification】\n\n我们给的是网址，它拿到的是什么？先看排练这次的记录。curl 在沙箱里联网失败，它申请到沙箱外运行，把参考的 HTML 和 CSS 存进 /tmp 下的两个文件。",
        "【操作提示｜推进第 2 步，指工具返回里的两个文件大小】\n\n进入请求的工具返回，只有这两个文件的大小。页面本身，这时并不在 context 里。",
        "【操作提示｜推进第 3 步，指 sed 和 grep 那几行，不念行号】\n\n接着它用 sed 看 HTML 的前一段，CSS 有六万多字节，它用 grep、sed 一段一段挑着读。进入工具返回的，就是这些片段。",
        "【操作提示｜推进第 4 步，指它的回答，再指下面 CSS 片段里的 fixed 和 18em；讲完切 claude-tap 现场，指同一类调用和返回，讲相同和不同；再切 Terminal 答交互题、看计划，回课件进入 p40a1】\n\n然后它说：我已经把参考的 HTML 和 CSS 抓下来看过了，深紫的侧栏，18em 宽。这些判断都能在它读到的 CSS 片段里找到，可那是代码，不是渲染出来的页面。取回来，不等于看到了。现场的记录里，读哪几段、读多少不会和这里一样，但同样是把参考存成文件，再挑着读。"
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
          "text": "2026-10-24 两轮排练：从 homepage-v1 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash。公开数据见 materials/style/run-20261024-round2，只导出课件用到的记录；存进文件、挑着读，在 10-24 的四次排练里都出现过。"
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
      "lead": "读完参考，它问了两组偏好：配色、侧栏形态、背景纹理，再问字体和区块排版，排练时都选了推荐项。我们选的答案，是那个提问工具的返回，在请求的“工具返回”这一块；它写的计划是它自己的回答，下一次请求里就到了“对话历史”。之后每次请求都带着这两样，它改的时候照着。计划只动页面文件、不加依赖，就确认实施，再补一句：页脚注明出处，改完运行 build，浏览器我来检查，不要提交。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;answers-result&quot;, &quot;plan-answer&quot;, &quot;plan-history&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"answers-result\" aria-pressed=\"true\"><b>我们的答案</b><span>提问工具的返回</span></button><button type=\"button\" data-ev-key=\"plan-answer\" aria-pressed=\"false\"><b>它的计划</b><span>它自己的回答</span></button><button type=\"button\" data-ev-key=\"plan-history\" aria-pressed=\"false\"><b>之后还在</b><span>计划进了对话历史</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-24 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=answers-result\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"answers-result\" ><p class=\"p-ev-source\">10-24 排练 · 真实记录节选 · 我们的答案</p><article><h3>第一组回答 · 工具返回</h3><pre>{&quot;answers&quot;:{&quot;sidebar&quot;:{&quot;answers&quot;:[&quot;桌面固定竖排 + 移动端顶部横条（推荐）&quot;]},&quot;palette&quot;:{&quot;answers&quot;:[&quot;沿用 Hyperspace 原味紫粉（推荐）&quot;]},&quot;texture&quot;:{&quot;answers&quot;:[&quot;CSS 渐变 + 内联 SVG 纹理（推荐）&quot;]}}}</pre></article><article><h3>第二组回答 · 工具返回</h3><pre>{&quot;answers&quot;:{&quot;layout&quot;:{&quot;answers&quot;:[&quot;大标题 + 列表/卡片（推荐）&quot;]},&quot;fonts&quot;:{&quot;answers&quot;:[&quot;系统字体栈（推荐）&quot;]}}}</pre></article></section><section data-ev-reading=\"plan-answer\" hidden><p class=\"p-ev-source\">10-24 排练 · 真实记录节选 · 它的计划</p><article><h3>计划节选</h3><pre># 个人主页改版：Hyperspace 风格（侧栏导航 + 大块背景）\n- 左侧固定深紫侧栏导航（桌面竖排，窄屏变顶部横条），导航项随滚动高亮，激活项底部渐变条。\n- 保留 `profile.md` 中已确认的全部文字内容，逐字不改；项目卡仍无跳转；不引入任何新依赖、不加远程字体与外部图片。</pre><details><summary>展开该项完整原文</summary><pre>&lt;proposed_plan&gt;\n# 个人主页改版：Hyperspace 风格（侧栏导航 + 大块背景）\n\n## 总结\n\n把现有单页个人主页（`src/App.tsx` + `src/index.css`）改造成 HTML5 UP &quot;Hyperspace&quot; 视觉风格：\n- 左侧固定深紫侧栏导航（桌面竖排，窄屏变顶部横条），导航项随滚动高亮，激活项底部渐变条。\n- 主体每屏一块整幅纯色背景（紫 → 靛 → 品红），叠加内联 SVG 斜纹纹理与径向渐变。\n- 保留 `profile.md` 中已确认的全部文字内容，逐字不改；项目卡仍无跳转；不引入任何新依赖、不加远程字体与外部图片。\n\n## 实现要点\n\n### 1. `src/App.tsx`\n- 现有 `profile` / `education` / `experience` / `projects` 四个数据对象**原样保留**，仅调整渲染结构。\n- 新增一个 `sections` 描述数组（id /导航文案 / 配色类），驱动侧栏导航和区块渲染，避免两处手写不一致。\n- 结构调整为：\n  - `&lt;nav class=&quot;sidebar&quot;&gt;`（`&lt;aside&gt;`）内含 `&lt;ul&gt;` 导航项，链接指向 `#intro / #education / #experience / #projects`，`aria-label=&quot;页面导航&quot;`。\n  - `&lt;main class=&quot;main&quot;&gt;` 内依次为四个 `&lt;section&gt;`，每个带 `class=&quot;panel panel--{color}&quot;` 与独立 id。\n  - 首屏 `#intro` 保留姓名、别名、一句话简介、&quot;现在关注&quot;标签列表、&quot;查看经历&quot;按钮；按钮改为跳转到 `#experience`（原为 `#experience`，保持）。\n  - 教育/工作经历：沿用 `entry` 列表结构（period + 标题 + 角色 + 描述），改为大标题 + 细分割线版式。\n  - 项目与开源：三列大卡片（窄屏降为单列），沿用现有 `project-card` 结构，仅调样式，不加链接。\n- 新增 `useEffect` + `IntersectionObserver` 实现滚动高亮：取当前可见区块写入 `activeId` state，给对应导航项加 `is-active`；无 JS/不支持时默认高亮首屏。所有滚动锚点加 `scroll-margin-top` 偏移，适配顶部横条形态。\n\n### 2. `src/index.css`（重写视觉层，不动内容）\n- 变量化配色：侧栏 `#312450`；面板 `#5e42a6`（首屏）/ `#493382`（教育）/ `#3e4094`（经历）/ `#b74e91`（项目）；渐变条 `linear-gradient(90deg, #5e42a6, #b74e91)`；正文 `#fff`、次级文字 `rgba(255,255,255,.7)`。\n- 侧栏：`position: fixed; inset: 0 auto 0 0; width: 18em; background:#312450;`，导航右对齐、大写风格字距（中文用 `letter-spacing: .28em`）、`padding: 1.35em 0`；每项底部有 `::before`（底轨 `#3c2c62`）与 `::after`（渐变条，`max-width: 0 → 100%` 过渡）实现原版下划线动画；hover 字色提亮，激活项纯白 + 渐变条满宽。\n- 主体：`margin-left: 18em`；每个面板 `min-height: 100vh`、内层宽度 `min(75em, 100%)`、居中、上下留白 `5em 5em 3em`。\n- 背景纹理：把原版的 40×40 chevron SVG 路径内联成 `data:image/svg+xml`（`fill rgba(255,255,255,.15)`）作 `background-image` 重复，叠一层 `radial-gradient` 高光；全部内联，不产生网络请求。\n- 按钮：透明底 + 白色描边，hover 变 `#b74e91` 填充；首屏按钮保留。\n- 焦点可见：`:focus-visible` 白色描边；`prefers-reduced-motion: reduce` 时关闭过渡与平滑滚动。\n- 响应式断点 `max-width: 1024px`：侧栏改为顶部固定横条（`position: sticky/fixed; height:auto; width:100%`），导航横向排列、字号缩小、允许横向滚动；主体 `margin-left: 0`、`padding-top` 让开横条；面板 `min-height: auto` 改为内容高度。`max-width: 600px` 保持现有单列降级规则。\n\n### 3. 保持不变\n- `index.html`（仅必要时补 `theme-color` meta）、`profile.md`、依赖清单、`package.json` 全部不动；不新增任何依赖或远程资源。\n\n## 验收与验证\n- `npm run build`（`tsc -b &amp;&amp; vite build`）必须成功，并如实报告输出；`tsc` 不得报未使用变量/类型错误。\n- `npm run dev` 后人工在浏览器确认：侧栏 4 项导航可跳转、滚动时高亮跟随；首屏满屏、教育/经历/项目为三种不同大色块且斜纹可见；窄屏（&lt;1024px）侧栏变顶部横条且不遮挡内容；现有全部文字与 `profile.md` 逐字一致。\n- 检查浏览器控制台无报错；确认页面未发起任何外部字体/图片请求。\n\n## 假设与默认\n- 未添加联系方式/社交链接等 `profile.md` 中不存在的内容，也不为项目卡编造 URL。\n- 中文导航文案定为：首页 / 教育 / 工作经历 / 项目与开源。\n- &quot;大块背景&quot;指整屏纯色面板 + 纹理，而非照片；不使用任何外部图片（用户无照片素材且不允许新增资源依赖）。\n- 断点取 1024px（参考页为 1280px），兼顾常见笔记本宽度。\n&lt;/proposed_plan&gt;</pre></details></article></section><section data-ev-reading=\"plan-history\" hidden><p class=\"p-ev-source\">10-24 排练 · 真实记录节选 · 之后还在</p><article><h3>下一次请求：计划在对话历史里</h3><pre># 个人主页改版：Hyperspace 风格（侧栏导航 + 大块背景）</pre><details><summary>展开该项完整原文</summary><pre>&lt;proposed_plan&gt;\n# 个人主页改版：Hyperspace 风格（侧栏导航 + 大块背景）\n\n## 总结\n\n把现有单页个人主页（`src/App.tsx` + `src/index.css`）改造成 HTML5 UP &quot;Hyperspace&quot; 视觉风格：\n- 左侧固定深紫侧栏导航（桌面竖排，窄屏变顶部横条），导航项随滚动高亮，激活项底部渐变条。\n- 主体每屏一块整幅纯色背景（紫 → 靛 → 品红），叠加内联 SVG 斜纹纹理与径向渐变。\n- 保留 `profile.md` 中已确认的全部文字内容，逐字不改；项目卡仍无跳转；不引入任何新依赖、不加远程字体与外部图片。\n\n## 实现要点\n\n### 1. `src/App.tsx`\n- 现有 `profile` / `education` / `experience` / `projects` 四个数据对象**原样保留**，仅调整渲染结构。\n- 新增一个 `sections` 描述数组（id /导航文案 / 配色类），驱动侧栏导航和区块渲染，避免两处手写不一致。\n- 结构调整为：\n  - `&lt;nav class=&quot;sidebar&quot;&gt;`（`&lt;aside&gt;`）内含 `&lt;ul&gt;` 导航项，链接指向 `#intro / #education / #experience / #projects`，`aria-label=&quot;页面导航&quot;`。\n  - `&lt;main class=&quot;main&quot;&gt;` 内依次为四个 `&lt;section&gt;`，每个带 `class=&quot;panel panel--{color}&quot;` 与独立 id。\n  - 首屏 `#intro` 保留姓名、别名、一句话简介、&quot;现在关注&quot;标签列表、&quot;查看经历&quot;按钮；按钮改为跳转到 `#experience`（原为 `#experience`，保持）。\n  - 教育/工作经历：沿用 `entry` 列表结构（period + 标题 + 角色 + 描述），改为大标题 + 细分割线版式。\n  - 项目与开源：三列大卡片（窄屏降为单列），沿用现有 `project-card` 结构，仅调样式，不加链接。\n- 新增 `useEffect` + `IntersectionObserver` 实现滚动高亮：取当前可见区块写入 `activeId` state，给对应导航项加 `is-active`；无 JS/不支持时默认高亮首屏。所有滚动锚点加 `scroll-margin-top` 偏移，适配顶部横条形态。\n\n### 2. `src/index.css`（重写视觉层，不动内容）\n- 变量化配色：侧栏 `#312450`；面板 `#5e42a6`（首屏）/ `#493382`（教育）/ `#3e4094`（经历）/ `#b74e91`（项目）；渐变条 `linear-gradient(90deg, #5e42a6, #b74e91)`；正文 `#fff`、次级文字 `rgba(255,255,255,.7)`。\n- 侧栏：`position: fixed; inset: 0 auto 0 0; width: 18em; background:#312450;`，导航右对齐、大写风格字距（中文用 `letter-spacing: .28em`）、`padding: 1.35em 0`；每项底部有 `::before`（底轨 `#3c2c62`）与 `::after`（渐变条，`max-width: 0 → 100%` 过渡）实现原版下划线动画；hover 字色提亮，激活项纯白 + 渐变条满宽。\n- 主体：`margin-left: 18em`；每个面板 `min-height: 100vh`、内层宽度 `min(75em, 100%)`、居中、上下留白 `5em 5em 3em`。\n- 背景纹理：把原版的 40×40 chevron SVG 路径内联成 `data:image/svg+xml`（`fill rgba(255,255,255,.15)`）作 `background-image` 重复，叠一层 `radial-gradient` 高光；全部内联，不产生网络请求。\n- 按钮：透明底 + 白色描边，hover 变 `#b74e91` 填充；首屏按钮保留。\n- 焦点可见：`:focus-visible` 白色描边；`prefers-reduced-motion: reduce` 时关闭过渡与平滑滚动。\n- 响应式断点 `max-width: 1024px`：侧栏改为顶部固定横条（`position: sticky/fixed; height:auto; width:100%`），导航横向排列、字号缩小、允许横向滚动；主体 `margin-left: 0`、`padding-top` 让开横条；面板 `min-height: auto` 改为内容高度。`max-width: 600px` 保持现有单列降级规则。\n\n### 3. 保持不变\n- `index.html`（仅必要时补 `theme-color` meta）、`profile.md`、依赖清单、`package.json` 全部不动；不新增任何依赖或远程资源。\n\n## 验收与验证\n- `npm run build`（`tsc -b &amp;&amp; vite build`）必须成功，并如实报告输出；`tsc` 不得报未使用变量/类型错误。\n- `npm run dev` 后人工在浏览器确认：侧栏 4 项导航可跳转、滚动时高亮跟随；首屏满屏、教育/经历/项目为三种不同大色块且斜纹可见；窄屏（&lt;1024px）侧栏变顶部横条且不遮挡内容；现有全部文字与 `profile.md` 逐字一致。\n- 检查浏览器控制台无报错；确认页面未发起任何外部字体/图片请求。\n\n## 假设与默认\n- 未添加联系方式/社交链接等 `profile.md` 中不存在的内容，也不为项目卡编造 URL。\n- 中文导航文案定为：首页 / 教育 / 工作经历 / 项目与开源。\n- &quot;大块背景&quot;指整屏纯色面板 + 纹理，而非照片；不使用任何外部图片（用户无照片素材且不允许新增资源依赖）。\n- 断点取 1024px（参考页为 1280px），兼顾常见笔记本宽度。\n&lt;/proposed_plan&gt;</pre></details></article><article><h3>接着是我们确认实施的话</h3><pre>按这个计划改吧，页脚注明风格参考 Hyperspace 和 HTML5 UP 的链接。改完运行 build，浏览器我来检查，不要提交。</pre></article></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "我们的答案",
        "它的计划",
        "之后还在"
      ],
      "script": [
        "【操作提示｜停留课件 p40a1 第 1 步，指两组回答】\n\n读完参考，它问了两组偏好：配色、侧栏形态、背景纹理，再问字体和区块排版。排练时我都选了推荐项。我们选的答案，是那个提问工具的返回，在请求的工具返回这一块。",
        "【操作提示｜推进第 2 步，指计划里侧栏和“不引入任何新依赖”】\n\n它的计划，是它自己的回答：左侧固定的深紫侧栏，不引入任何新依赖。",
        "【操作提示｜推进第 3 步，指下一次请求里的计划和确认的话；讲完切 Terminal，按现场的计划讲相同和不同，确认实施并补那句话；实施几分钟可剪掉，中途弹出起服务、截图的批准框就拒绝；改完切浏览器，进入 p40b1】\n\n到了下一次请求，计划就在对话历史里，后面每次请求都带着，它改的时候照着。计划只动页面文件，就确认实施，再补一句：页脚注明出处，改完运行 build，浏览器我来检查，不要提交。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-24 两轮排练：从 homepage-v1 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；交互题和计划每次排练都不一样，题目内容只作例子。"
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
      "lead": "第一轮改完，build 通过。在浏览器里和参考并排看同样宽度的首屏：侧栏、大块配色都做出来了，滚到工作经历，导航也会提示当前位置。不一样的地方，排练这次是背景：一片密集的小箭头铺在文字后面，参考是淡淡的、疏一些的细线。这个差别我们一眼就看到了，它看不到：渲染出来的页面不在 context 里。它自己也想看，实施完起了预览服务，推理里写着 React 在浏览器里渲染、curl 只拿得到一个空的 root。",
      "html": "<div class=\"review-panel\" data-panel-start=\"0\" data-panel-end=\"0\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>第一轮：当前效果</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"第一轮：当前效果\" style=\"height:290px\"></a></figure><figure class=\"review-shot\"><figcaption>参考</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"参考\" style=\"height:290px\"></a></figure></div></div><div class=\"review-panel\" data-panel-start=\"1\" data-panel-end=\"1\"><figure class=\"review-shot\"><figcaption>滚到工作经历：导航已经提示当前位置</figcaption><a href=\"assets/round1-experience.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1-experience.png\" alt=\"滚到工作经历：导航已经提示当前位置\" style=\"height:330px\"></a></figure></div><div class=\"review-panel\" data-panel-start=\"2\" data-panel-end=\"2\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>当前：密集小箭头 · 原图局部</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"当前：密集小箭头\" viewBox=\"350 180 1000 420\" style=\"width:100%;height:250px;background:#eee\"><image href=\"assets/round1.png\" width=\"1440\" height=\"800\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>参考：淡淡的细线 · 原图局部</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"参考：淡淡的细线\" viewBox=\"350 180 1000 420\" style=\"width:100%;height:250px;background:#eee\"><image href=\"assets/reference.png\" width=\"1440\" height=\"800\"/></svg></a></figure></div></div><div class=\"review-panel\" data-panel-start=\"3\" data-panel-end=\"3\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>当前：密集小箭头 · 原图局部</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"当前：密集小箭头\" viewBox=\"350 180 1000 420\" style=\"width:100%;height:170px;background:#eee\"><image href=\"assets/round1.png\" width=\"1440\" height=\"800\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>参考：淡淡的细线 · 原图局部</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"参考：淡淡的细线\" viewBox=\"350 180 1000 420\" style=\"width:100%;height:170px;background:#eee\"><image href=\"assets/reference.png\" width=\"1440\" height=\"800\"/></svg></a></figure></div><div class=\"p-bar review-bar\">我们一眼看到的差别，它看不到：<b>页面的样子不在 context 里</b></div><pre class=\"p-term review-term\">它的推理（排练这次）：… React renders client-side, so curl only shows root div …</pre></div>",
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
        "【操作提示｜停留课件 p40b1 第 1 步，左右指认两张首屏】\n\n第一轮改完，build 通过了。在浏览器里和参考并排，看同样宽度的首屏：侧栏、大块配色都做出来了。",
        "【操作提示｜推进第 2 步，指导航上的当前位置】\n\n滚到工作经历，导航也会提示现在在哪一块。这些都可以留着。",
        "【操作提示｜推进第 3 步，指两块放大的背景】\n\n和想的不一样的地方，排练这次是背景：一片密集的小箭头铺在文字后面，参考是淡淡的、疏一些的细线。",
        "【操作提示｜推进第 4 步，指黑色横条和推理那一行；讲完切浏览器，把现场的第一轮和参考并排看，说出当天哪里和想的不一样，再回课件进入 p40d】\n\n这个差别我们一眼就看到了，它看不到：渲染出来的页面不在 context 里。它自己也想看，实施完起了预览服务，推理里写着：页面要在浏览器里渲染，curl 只拿得到一个空壳。那怎么让它知道哪里不像？"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "当天第一轮不一样的地方很可能不是背景，按现场讲：它做到了什么、哪里和想的不一样。排练这次的箭头来自参考 CSS 里下拉框的图标，它读到了代码，却把它当成整页纹理，计划里就写了；可以一句带过，不展开 CSS。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-24 两轮排练：从 homepage-v1 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；截图是 Chromium 1440×800。起服务、想截图在四次排练里都出现过：它在沙箱里后台起服务不弹框，要用无头 Chrome 截图时弹出批准框就拒绝。"
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
      "lead": "继续同一个会话，截两张首屏：先贴现在的效果，再贴参考，然后说一句哪里不满意、想要什么样。图给出我们看到的页面，话说出这次的偏好；换成自己的，可以照这个样子填空：“第一张是现在，第二张是参考；现在＿＿，我更喜欢参考里＿＿，其他先保持。”回看请求：这一条是新的 Prompt，里面是两项图片和这句话；第二轮最后一次请求里，两张图还在，之后每次请求都带着。改完回浏览器看同一位置：细线淡了、疏了，其他部分没动。它看见了我们贴的图，自己做出来的页面它仍然看不见；要让它自己截图看页面，得专门把浏览器接进它的运行环境，后面的章节再做。",
      "html": "<div class=\"p-evidence\" data-ev-steps=\"[&quot;feedback&quot;, &quot;images&quot;, &quot;still&quot;, &quot;result-answer&quot;]\" data-ev-viewer=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light\" data-ev-view=\"reader\"><nav class=\"p-ev-guide\" aria-label=\"本次记录的观察顺序\"><button type=\"button\" data-ev-key=\"feedback\" aria-pressed=\"true\"><b>贴图和反馈</b><span>当前 → 参考，再说偏好</span></button><button type=\"button\" data-ev-key=\"images\" aria-pressed=\"false\"><b>请求里的图</b><span>两项 input_image</span></button><button type=\"button\" data-ev-key=\"still\" aria-pressed=\"false\"><b>后面还带着</b><span>每次请求都重发</span></button><button type=\"button\" data-ev-key=\"result-answer\" aria-pressed=\"false\"><b>第二轮结果</b><span>只改背景</span></button></nav><div class=\"p-ev-panel\"><div class=\"p-ev-bar\"><span data-ev-status>10-24 排练记录</span><div class=\"p-ev-actions\"><div class=\"p-ev-views\" role=\"group\" aria-label=\"记录展示方式\"><button type=\"button\" data-ev-view=\"reader\" aria-pressed=\"true\">阅读视图</button><button type=\"button\" data-ev-view=\"raw\" aria-pressed=\"false\">原始记录</button></div><a data-ev-open href=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;point=feedback\" target=\"_blank\" rel=\"noopener\">单独打开 ↗</a><button type=\"button\" data-ev-expand aria-haspopup=\"dialog\">放大记录</button></div></div><div class=\"p-ev-reading\"><section data-ev-reading=\"feedback\" ><p class=\"p-ev-source\">10-24 排练 · 同一会话贴两张图，再说一句</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>图 1 · 当前效果</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"图 1 · 当前效果\" style=\"height:100px\"></a></figure><figure class=\"review-shot\"><figcaption>图 2 · 参考</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"图 2 · 参考\" style=\"height:100px\"></a></figure></div><blockquote class=\"review-prompt compact\">第一张是现在的效果，第二张是参考页。现在背景的小箭头太密、太抢眼了，我更喜欢参考里那种淡淡的、疏一些的细线。帮我把背景往这个感觉调整一下，其他部分先保持。</blockquote></section><section data-ev-reading=\"images\" hidden><p class=\"p-ev-source\">10-24 排练 · 贴图那次请求 · 我们这一条（新的 Prompt）</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>input_image · 第 1 张</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"input_image · 第 1 张\" style=\"height:120px\"></a></figure><figure class=\"review-shot\"><figcaption>input_image · 第 2 张</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"input_image · 第 2 张\" style=\"height:120px\"></a></figure></div><p class=\"review-evidence-note\">后面跟着那句话：第一张是现在的效果，第二张是参考页。现在背景的小……</p></section><section data-ev-reading=\"still\" hidden><p class=\"p-ev-source\">10-24 排练 · 第二轮最后一次请求 · 同一条还在</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>input_image · 第 1 张</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round1.png\" alt=\"input_image · 第 1 张\" style=\"height:120px\"></a></figure><figure class=\"review-shot\"><figcaption>input_image · 第 2 张</figcaption><a href=\"assets/reference.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/reference.png\" alt=\"input_image · 第 2 张\" style=\"height:120px\"></a></figure></div><p class=\"review-evidence-note\">之后每次请求都带着这两张图和那句话</p></section><section data-ev-reading=\"result-answer\" hidden><p class=\"p-ev-source\">10-24 排练 · 第二轮改完，同一位置</p><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>反馈前 · 原图局部</figcaption><a href=\"assets/round1.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"反馈前\" viewBox=\"350 180 1000 420\" style=\"width:100%;height:170px;background:#eee\"><image href=\"assets/round1.png\" width=\"1440\" height=\"800\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>反馈后 · 原图局部</figcaption><a href=\"assets/round2.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"反馈后\" viewBox=\"350 180 1000 420\" style=\"width:100%;height:170px;background:#eee\"><image href=\"assets/round2.png\" width=\"1440\" height=\"800\"/></svg></a></figure></div><p class=\"review-evidence-note\">它的报告：背景纹理换掉了，其他部分没动。</p></section></div><iframe hidden title=\"claude-tap 静态记录\" data-src=\"trace/viewer.html?embed=1&amp;hidePath=1&amp;hideHistory=1&amp;theme=light&amp;hideHeader=1\"></iframe></div></div>",
      "steps": [
        "贴图和反馈",
        "请求里的图",
        "后面还带着",
        "第二轮结果"
      ],
      "script": [
        "【操作提示｜停留课件 p40d 第 1 步，指两张图和下面那句话】\n\n继续同一个会话，截两张首屏：先贴现在的效果，再贴参考，然后说一句。排练这次是这样说的：第一张是现在的效果，第二张是参考页，现在背景的小箭头太密、太抢眼，我更喜欢参考里那种淡淡的、疏一些的细线，帮我往这个感觉调，其他部分先保持。图给出我们看到的页面，话说出这次的偏好。换成你自己的，照下面这句的样子填空就行。",
        "【操作提示｜推进第 2 步，指请求里的两张图和那句话】\n\n回看请求，这一条就是新的 Prompt：两张图，加上我们那句话，顺序和贴进去的一样。",
        "【操作提示｜推进第 3 步，指第二轮最后一次请求里的同一条】\n\n到第二轮最后一次请求，这两张图还在。之后每次请求都带着它们。",
        "【操作提示｜推进第 4 步，指反馈前后两块；讲完切 Terminal，贴当天的两张首屏，按当天的差别说一句；它在改的时候切 claude-tap 指新的 Prompt 里的图；改完切浏览器看同一位置，再回课件进入 p40e】\n\n改完回到同一位置看：细线淡了、疏了，其他部分没动。它看见了我们贴的图，可它自己做出来的页面，它还是看不见。要让它自己截图看页面，得专门把浏览器接进它的运行环境，后面的章节再做。"
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
          "text": "贴图：把图片文件拖进终端，或复制后在 Codex 里 Ctrl+V，输入框出现 [Image #1]、[Image #2]，再写那句话。贴自己的页面，是因为它看不见自己做出来的页面；参考那张让它知道想要什么样。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-24 两轮排练：从 homepage-v1 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；贴图那次请求的两项 input_image 与 assets/round1.png、assets/reference.png 逐字节相同，构建时核对。不把一次结果说成图片单独起了多大作用。"
        }
      ],
      "source": "index.html#p40d",
      "seconds": 120
    },
    {
      "id": "p40e",
      "segment": "接受并保存",
      "label": "两轮下来",
      "title": "同一份内容，两个样子",
      "lead": "两轮下来的结果：左边是上一节提交的 homepage-v1，右边是参考 Hyperspace 改了两轮的样子。个人信息一字没改，样子完全换了：侧栏导航、大块背景、淡淡的细线。像不像、好不好看，由我们自己判断。",
      "html": "<div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>homepage-v1 · 上一节</figcaption><a href=\"assets/before-full.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/before-full.png\" alt=\"homepage-v1 · 上一节\" style=\"height:380px\"></a></figure><figure class=\"review-shot\"><figcaption>两轮之后 · 这一节</figcaption><a href=\"assets/round2-full.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round2-full.png\" alt=\"两轮之后 · 这一节\" style=\"height:380px\"></a></figure></div>",
      "steps": [
        "两个样子"
      ],
      "script": [
        "【操作提示｜停留课件 p40e，先指左图再指右图；讲完进入 p40c】\n\n两轮下来，看看改成了什么样。左边是上一节提交的 homepage-v1，右边是这一节改完的：侧栏导航、大块背景、淡淡的细线。个人信息一字没改，样子完全换了。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-24 两轮排练：从 homepage-v1 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash；整页截图 Chromium 1440 宽。"
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
      "lead": "diff 很大，不逐行读。像不像，只有我们在浏览器里看得出来：从上滚到下和参考并排看，再缩到手机宽度看一眼。再看它新加了什么：排练这次是一段滚动高亮的脚本，计划里写了；背景纹理是内联的 SVG，没有引远程资源；页脚写了参考出处。满意就让 Codex 提交，批准框里看清是哪几个文件、提交说明写了什么；不满意，还没提交的改动让它 git restore 放弃，回到 homepage-v1。官方文档推荐的 UI 迭代也是这样：小步改，在浏览器里看，喜欢的提交，不喜欢的回退。",
      "html": "<div class=\"review-panel\" data-panel-start=\"0\" data-panel-end=\"0\"><div class=\"review-pair\"><figure class=\"review-shot\"><figcaption>页脚：参考出处 · 原图局部</figcaption><a href=\"assets/round2-full.png\" target=\"_blank\" rel=\"noopener\"><svg role=\"img\" aria-label=\"页脚：参考出处\" viewBox=\"400 3210 520 80\" style=\"width:100%;height:130px;background:#eee\"><image href=\"assets/round2-full.png\" width=\"1440\" height=\"3291\"/></svg></a></figure><figure class=\"review-shot\"><figcaption>手机宽度的首屏</figcaption><a href=\"assets/round2-mobile.png\" target=\"_blank\" rel=\"noopener\"><img src=\"assets/round2-mobile.png\" alt=\"手机宽度的首屏\" style=\"height:300px\"></a></figure></div></div><div class=\"review-panel\" data-panel-start=\"1\" data-panel-end=\"1\"><div class=\"p-claim\"><div class=\"p-box\" data-role=\"agent\"><span class=\"p-tag\" data-role=\"agent\">Codex 说</span><p class=\"p-big\" style=\"font-weight:500\">“背景纹理换掉了，其他部分没动”</p></div><ul class=\"p-checks\"><li class=\"is-no\">像不像参考<small>diff 里看不出来，由我们在浏览器里看</small></li><li>新加了什么<small>排练这次：滚动高亮的脚本、内联 SVG 背景、页脚出处</small></li><li>范围对不对<small>只动页面文件，个人内容没变，没加依赖</small></li></ul></div></div><div class=\"review-panel\" data-panel-start=\"2\" data-panel-end=\"2\"><pre class=\"p-term review-term\">我在浏览器里看过了，接受这一轮。先列出 git status 给我看，再提交本轮改动的文件；\n提交说明第一行写 homepage-v2: 参考 Hyperspace 调整主页风格，正文写改了哪些文件。</pre><div class=\"p-bar is-light review-bar\">接受：让 Codex 提交，<b>批准框里看清文件和提交说明</b> · 不满意：git restore 回到 homepage-v1</div></div>",
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
        "提交或放弃"
      ],
      "script": [
        "【操作提示｜停留课件 p40c 第 1 步，指页脚出处和手机首屏】\n\n要不要接受？diff 很大，不用逐行读。像不像，只能我们在浏览器里看：从上滚到下和参考并排看，再缩到手机宽度看一眼。页脚的参考出处也在。",
        "【操作提示｜推进第 2 步，逐条指清单】\n\n再看它新加了什么。排练这次，多了一段滚动高亮的脚本，计划里写了；背景是内联的 SVG，没有引远程资源。范围也对：只动了页面文件，个人内容没变，没加依赖。",
        "【操作提示｜推进第 3 步，指提交 Prompt 和底部横条；讲完切浏览器把当天结果从上滚到下看一遍，再切 Terminal 粘贴提交 Prompt，批准框里看清文件和提交说明再确认，回课件进入 p41b】\n\n满意，就让 Codex 提交，批准框里看清是哪几个文件、提交说明写了什么。不满意，还没提交的改动让它 git restore 放弃，回到 homepage-v1。官方文档推荐的 UI 迭代也是这样：小步改，在浏览器里看，喜欢的提交，不喜欢的回退。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "提交在现场做：粘贴提交 Prompt，批准框里核对后确认，和 2.2 结尾提交 homepage-v1 一样。排练这次的接受提交由备课方完成（188f1ad，只含 App.tsx 与 index.css），不是 Codex 执行的，画面不放它的输出。"
        },
        {
          "title": "跟做产出",
          "text": "至少一轮风格改动，审过后让 Codex 提交，或用 git restore 放弃。"
        }
      ],
      "source": "index.html#p40c",
      "seconds": 90
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
      "seconds": 240
    },
    {
      "label": "接受并保存",
      "seconds": 120
    },
    {
      "label": "小结",
      "seconds": 180
    }
  ]
};
