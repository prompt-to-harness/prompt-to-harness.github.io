window.lesson = {
  "title": "先听听别人怎么说",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.01",
  "summary": "用课程示例反馈卡建立反馈基线；看懂一次请求的组成，以及它为什么随环境变化。",
  "scenes": [
    {
      "id": "p01",
      "segment": "收到反馈",
      "layout": "lesson-cover",
      "label": "能拿给熟人看了吗？",
      "title": "能拿给熟人看了吗？",
      "kicker": "第 2 章 · 2.1 · 开篇",
      "lead": "第 1 章的首页 v0 只在自己电脑上运行。这一章要把它变成可以拿给认识的人看的 v1，并发布出去。",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>2.1</b>听反馈</li><li><b>2.2</b>改一处</li><li><b>2.3</b>审改动</li><li><b>2.4</b>公开发布</li><li><b>2.5</b>只是重构？</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">现在</span><p class=\"p-big\" style=\"font-weight:500\">首页 v0 · 只在本机</p></div><div class=\"p-join\" data-reveal=\"1\"><span>本章</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">目标</span><p class=\"p-big\" style=\"font-weight:500\">v1 · 公开 URL</p></div></div><p class=\"p-hand\" data-reveal=\"2\">先别急着改：别人的建议，哪些是真问题？</p>",
      "steps": [
        "回到 v0",
        "本章目标",
        "本节问题"
      ],
      "script": [
        "第 1 章结束时，我们交付了首页 v0：能启动、能构建、Diff 能解释，还打了一个本地检查点。但它只在自己电脑上跑，别人看不到。",
        "这一章要把它变成可以拿给认识的人看的 v1，并且发布出去，最后得到一个公开 URL。中间会经过五节：听反馈、改一处、审改动、公开发布，最后回头看一次“只是重构”。",
        "这一节先做第一件事。我们用一组课程示例，模拟把首页给熟人看后收到的建议。先别急着动手改，我们要先分清：哪些是能复现的问题，哪些是个人偏好，哪些其实是我们之前已经做过的决定。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "本章只有这一处开篇地图；后续各节开篇沿用同一张地图，只移动当前位置。"
        }
      ],
      "source": "index.html#p01",
      "seconds": 90
    },
    {
      "id": "p02",
      "segment": "收到反馈",
      "label": "昨天的页面去哪了",
      "title": "昨天的页面，怎么打不开了？",
      "kicker": "第 2 章 · 2.1 · 回到项目",
      "lead": "隔了一天回到项目，本地地址打不开。开发服务器是一个运行中的程序，昨天关掉终端，它就停了；代码文件还在，但程序要重新启动。命令在第 1 章做出首页 v0 的那个项目目录里运行。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">浏览器</span><div class=\"p-term\" style=\"margin-top:10px\"><div class=\"err\">localhost 拒绝连接</div></div></div><div class=\"p-join\" data-reveal=\"1\"><span>终端</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">重新启动</span><div class=\"p-term\" data-copy=\"npm run dev\" style=\"margin-top:10px\"><div class=\"dim\">$ npm run dev</div><div class=\"ok\">Local: http://localhost:5173/</div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">文件还在，但<b>运行中的程序</b>关掉终端就停了</div>",
      "steps": [
        "打不开",
        "重新启动"
      ],
      "script": [
        "隔了一天回到项目，我们先打开昨天的本地地址。浏览器说拒绝连接，页面打不开。代码明明都还在，这是怎么回事？",
        "回到第 1 章做出首页 v0 的那个项目目录，重新运行 npm run dev，页面就回来了。注意是我们自己的项目，不是课程刚发下来的原始起点，那里还没有应用，npm run dev 会报找不到 package.json。原因不复杂：开发服务器是一个正在运行的程序，昨天我们关掉终端，它就停了。代码文件都还在硬盘上，可程序得重新启动。没做完第 1 章也没关系，可以从课程提供的第 1 章参考快照开始，做法写在仓库的 CHECKPOINTS.md 里。大家跟做时也先做这一步，把首页打开。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "开发服务器的端口以学员自己的 Vite 输出为准，画面上的 5173 是常见默认值。这里只点出“程序停了要重启”，不展开进程与会话的关系。"
        }
      ],
      "source": "index.html#p02",
      "seconds": 60
    },
    {
      "id": "p03",
      "segment": "收到反馈",
      "label": "给熟人看了一眼",
      "title": "给熟人看了一眼",
      "kicker": "第 2 章 · 2.1 · 收到反馈",
      "lead": "把首页给熟人看，收到三条建议。最自然的反应是全部交给 AI 去改，但这三条的性质并不一样。",
      "html": "<div class=\"p-comic\"><div class=\"p-panel\" data-reveal=\"0\"><span class=\"p-cap\">在我电脑上</span><p class=\"p-bubble\">帮我看看我的个人主页？</p><span class=\"p-avatar\">我们</span></div><div class=\"p-panel\" data-reveal=\"1\"><span class=\"p-cap\">示例反馈</span><p class=\"p-bubble is-ai\">有点挤 · 卡片点了没反应 · 看不出你做过什么</p><span class=\"p-avatar is-ai\">熟人</span></div><div class=\"p-panel\" data-reveal=\"2\"><span class=\"p-cap\">我的第一反应</span><p class=\"p-bubble\">都交给 AI 改掉吧？</p><span class=\"p-avatar\">我们</span></div></div>",
      "steps": [
        "请熟人看",
        "三条建议",
        "第一反应"
      ],
      "script": [
        "先看一个课程示例：我们在自己电脑上，把首页或截图给熟人看。这时候还没有发布，对方不用访问公开网址。",
        "示例里的熟人给了三条建议：手机上看着有点挤；项目卡看着能点，点了没反应；看不出你做过什么。",
        "这时候最自然的反应，是把三条一股脑交给 AI：都改掉。先停一下。这三条建议，真的都是问题吗？下一页我们把它们写下来，一条一条看。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "第二格的说话人是熟人，用 AI 的配色只是为了区分角色；口播里说清是熟人。"
        }
      ],
      "source": "index.html#p03",
      "seconds": 90
    },
    {
      "id": "p04",
      "segment": "收到反馈",
      "label": "三条建议，先写下来",
      "title": "三条建议，先写下来再判断",
      "kicker": "第 2 章 · 2.1 · 收到反馈",
      "lead": "课程提供一张固定的示例反馈卡，也可以换成自己收集的建议。每条都要补齐复现条件、期望、实际和证据，写不出证据的先不算问题。",
      "html": "<div class=\"p-claim\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">课程示例反馈</span><ol style=\"margin:10px 0 0;padding-left:1.3em;display:grid;gap:8px\"><li>“手机上看着有点挤”</li><li>“项目卡看着能点，点了没反应”</li><li>“看不出你做过什么”</li></ol></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">每条都要补齐</span><div class=\"p-grid\" style=\"--n:2;gap:8px 18px;margin-top:10px\"><p><b>复现条件</b><br>哪个视口、怎么操作</p><p><b>期望</b><br>应该怎样</p><p><b>实际</b><br>现在怎样</p><p><b>证据</b><br>截图或记录</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\">写不出证据的，<b>先不算问题</b></div>",
      "steps": [
        "示例反馈卡",
        "四要素",
        "先不算问题"
      ],
      "script": [
        "左边是这一章用的课程示例反馈卡，三条对应刚才的示例情境。可以直接用它，也可以换成自己收集到的真实建议。",
        "一条建议要变成能处理的反馈，得补齐四样东西：复现条件，也就是在哪个视口、做了什么操作；期望，应该是什么样；实际，现在是什么样；还有证据，截图或者记录。",
        "补不齐证据的，先不算问题，只是一个待核对的说法。那就去核对。下一页我们切到浏览器，三条一条一条看。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "核对分支直接见 p06、p17、p18。录制前须冻结讲师首页 v0，并核对反馈是否成立；目前不能把待准备素材写成已验证结果。"
        }
      ],
      "source": "index.html#p04",
      "seconds": 90
    },
    {
      "id": "p05",
      "segment": "逐条核对",
      "label": "三种视口",
      "title": "三种视口：在电脑上模拟手机和平板",
      "kicker": "第 2 章 · 2.1 · 逐条核对",
      "lead": "视口是浏览器里网页实际能显示的区域。不用真的找一部手机，Chrome 开发者工具的设备工具栏可以把视口改成指定宽高，模拟手机、平板和电脑上的效果。尺寸用的是 CSS 像素，不是屏幕的物理像素。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,.8fr) minmax(0,.8fr) minmax(0,1.4fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>尺寸</span><span>模拟</span><span>为什么选它</span></div><div data-reveal=\"0\"><span class=\"p-mono\">360×800</span><span>手机竖屏</span><span>常见安卓手机的宽度，最容易挤</span></div><div data-reveal=\"0\"><span class=\"p-mono\">768×1024</span><span>平板竖屏</span><span>iPad 竖着拿的大小</span></div><div data-reveal=\"0\"><span class=\"p-mono\">1440×900</span><span>笔记本</span><span>常见笔记本屏幕</span></div></div><div class=\"p-term\" data-reveal=\"1\" style=\"margin-top:14px\"><div>⌥⌘I 打开开发者工具 → ⇧⌘M 设备工具栏 → 顶部选 Responsive → 填宽 360、高 800</div><div class=\"dim\">自带机型的尺寸和这三种不完全一样，直接手填最省事</div></div>",
      "steps": [
        "三种尺寸",
        "怎么切换"
      ],
      "script": [
        "核对之前，先说清楚“三种视口”。视口，就是浏览器里网页实际能显示的那块区域。手机、平板和电脑的视口宽度差别很大，同一个页面在三种宽度下的样子也不一样。我们用三种尺寸：360 乘 800，模拟常见的安卓手机竖屏，也是最容易挤的；768 乘 1024，是 iPad 竖着拿的大小；1440 乘 900，是常见的笔记本屏幕。",
        "怎么切换呢？以 Chrome 为例，在 Mac 上按 Option、Command、I 打开开发者工具，再按 Shift、Command、M 打开设备工具栏。顶部的下拉菜单里有不少自带机型，可它们的尺寸和我们这三种不完全一样，比如 iPhone SE 是 375 宽。所以直接选 Responsive，在旁边填上宽 360、高 800 就行。这里的尺寸是 CSS 像素，不是屏幕的物理像素，手机屏幕的物理像素更多，但网页按 360 这样的宽度来排版。所以我们不需要真的找一部手机、一台平板，在同一台电脑上就能看三种屏幕下的效果。尺寸知道了，下面切到浏览器，三条反馈各看各的。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "设置入口与快捷键按录制时 Chrome 版本核对。自带机型列表会随版本变化，尺寸也与三种视口不一致，所以主路径是 Responsive 手填宽高；经常用的话，可以在开发者工具设置 → Devices → Add custom device 里加成自定义设备，这是选做。三种尺寸以平台交付版第 2 章第 1 节为准。"
        }
      ],
      "source": "index.html#p05",
      "seconds": 60
    },
    {
      "id": "p05-live",
      "segment": "逐条核对",
      "label": "切到浏览器核对",
      "title": "切到浏览器：先在自己的页面里打开设备工具栏",
      "kicker": "第 2 章 · 2.1 · 逐条核对",
      "lead": "设备模拟只作用于当前标签页，所以要先在自己首页的标签页里打开，再逐条核对。每条只看相关的视口和操作，不做全量巡检。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>先打开自己的页面</h3><p style=\"margin-bottom:10px\">① 浏览器新标签页，打开 npm run dev 给出的本地地址<br>② 就在这个标签页按 ⌥⌘I，再按 ⇧⌘M<br>③ 顶部选 Responsive，填宽高，如 360×800<br>④ 页面没变化就 ⌘R 刷新一次</p><span class=\"p-env\">360×800</span><span class=\"p-env\">768×1024</span><span class=\"p-env\">1440×900</span></div><ol class=\"p-watch\"><li data-reveal=\"1\">第 1 条<small>切到 360×800 看布局</small></li><li data-reveal=\"2\">第 2 条<small>桌面点项目卡，再按 Tab</small></li><li data-reveal=\"3\">第 3 条<small>任一视口看项目区</small></li></ol></div>",
      "steps": [
        "打开自己的页面",
        "第 1 条",
        "第 2 条",
        "第 3 条"
      ],
      "script": [
        "切到浏览器之前，先把设备工具栏开在对的地方。设备模拟只作用于当前标签页，所以要先在浏览器里新开一个标签页，打开刚才 npm run dev 给出的本地地址，确认是自己的首页。然后就在这个标签页里按 Option、Command、I 打开开发者工具，再按 Shift、Command、M 打开设备工具栏。顶部选 Responsive，填上宽高。如果页面没有跟着变，按 Command、R 刷新一次。注意不要在课件页或别的标签页里开，那样模拟的是那一页，不是你的首页。",
        "第 1 条说手机上挤，那就把尺寸填成 360 乘 800，也就是手机视口，只看布局。",
        "第 2 条说项目卡点了没反应。切到 1440 乘 900 的桌面视口，点一下项目卡，再按几次 Tab 键，看键盘焦点会不会落到卡片上。这顺便也是我们的键盘检查。",
        "第 3 条说看不出做过什么，任何一个视口都行，看项目区写了什么。三条各看各的，不用把整个页面在三个视口里全巡一遍。可以暂停视频，跟着核对自己的首页。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在讲师冻结的首页 v0 上操作，完整演示一遍：新开标签页打开本地地址 → ⌥⌘I → ⇧⌘M → 选 Responsive 填 360×800 → 观察 → 改填 1440×900。镜头要让标签页地址栏和设备工具栏同时入画，说明模拟的是这个标签页。设备模拟入口按录制时浏览器版本核对；Tab 焦点要让画面看得清楚，必要时放大。"
        },
        {
          "title": "讲师提示",
          "text": "常见卡点：在别的标签页里开了设备工具栏；缩放比例不是 100% 误以为页面变小；页面缺少 viewport meta 时手机视口会按约 980px 排版再缩小，看起来“挤”，核对前先确认首页 v0 带有该标签。"
        }
      ],
      "source": "index.html#p05-live",
      "seconds": 120
    },
    {
      "id": "p06",
      "segment": "逐条核对",
      "label": "三条核对出了什么",
      "title": "三条核对出了什么",
      "kicker": "第 2 章 · 2.1 · 逐条核对",
      "lead": "把每条的动作、结果和它能说明什么，记进 docs/evidence/CH02_VIBE_ITERATIONS.md。第 1 条可能复现也可能不复现，两种都如实记录；第 2 条“点了没反应”是事实，而且 1.4 我们定过“项目卡不跳转”，但它是不是问题，还没判断。",
      "html": "<div class=\"p-rec\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.3fr);row-gap:14px;--rf:21px\"><div class=\"is-head\" data-reveal=\"0\"><span>动作</span><span>结果</span><span>能说明什么</span></div><div data-reveal=\"0\"><span class=\"p-cell\"><span class=\"p-chip\" data-role=\"us\">1</span>切到 360×800</span><span class=\"p-cell\">挤 / 没发现挤</span><span class=\"p-why\">复现就记现象；不复现也写下条件</span></div><div data-reveal=\"1\"><span class=\"p-cell\"><span class=\"p-chip\" data-role=\"us\">2</span>点项目卡 · 按 Tab</span><span class=\"p-cell\">没反应 · 焦点跳过卡片</span><span class=\"p-why\">行为属实；1.4 定过“项目卡不跳转”</span></div><div data-reveal=\"2\"><span class=\"p-cell\"><span class=\"p-chip\" data-role=\"us\">3</span>看项目区</span><span class=\"p-cell\">只有一句“记录课程练习”</span><span class=\"p-why\">内容确实缺失</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">记进 <b>docs/evidence/CH02_VIBE_ITERATIONS.md</b> · 先不贴性质标签</div>",
      "steps": [
        "第 1 条",
        "第 2 条",
        "第 3 条"
      ],
      "script": [
        "核对完回来，用一张三栏的记录表把结果写下来：做了什么动作，看到什么结果，这个结果能说明什么。第 1 条，在我们各自的页面上，可能挤，也可能不挤。复现了，就把现象和截图记下来；没复现，也要写下是在哪个视口、哪个浏览器看的，这同样是有用的证据。",
        "第 2 条，点项目卡确实没反应，按 Tab 焦点也会跳过卡片。这是一个行为事实。还记得吗？1.4 回答 Agent 提问时，我们定过：“查看项目”跳到本页项目区，项目卡本身不跳转。我们自己知道这个决定，但注意，“属实”和“是问题”是两回事，它到底该不该改，我们还没判断。",
        "第 3 条，项目区只有一句“学习笔记：记录课程练习”。这份示例还没说清做了什么。自己的页面若已写清，就如实记录，不为了跟课把它判成缺陷。三条都核对完了。请暂停视频，在项目里新建 docs/evidence/CH02_VIBE_ITERATIONS.md，把这张表写进去：三条原话，每条的动作、结果和说明。性质标签先不写，也不要写“这是 1.4 的决定”，等会儿我们要看 Codex 自己能不能发现。接下来请 Codex 帮忙看看，这三条分别对应哪些代码。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "第 2 条的“焦点跳过卡片”以讲师冻结的 v0 为准；学员实现不同，按自己页面的实际结果记录。回想 1.4 只是让学员想起决定，不剧透 Codex 会怎样判断：p07 问的是 Prompt 没提时它能否发现。"
        },
        {
          "title": "跟做产出",
          "text": "本页新建 docs/evidence/CH02_VIBE_ITERATIONS.md，写入三条原话与核对记录；p07 让 Codex 读取它，p17 补上性质标签。"
        }
      ],
      "source": "index.html#p06",
      "seconds": 90
    },
    {
      "id": "p06-tap",
      "segment": "逐条核对",
      "label": "用 claude-tap 启动 Codex",
      "title": "切到终端：这次用 claude-tap 启动 Codex",
      "kicker": "第 2 章 · 2.1 · 逐条核对",
      "lead": "接下来请 Codex 只读核对。为了事后能看到它实际发给模型的内容，讲师这次通过 claude-tap 启动 Codex：它是一个开源的本地代理，夹在 Codex 和模型服务之间，把每次请求记录下来。其他操作和平时一样。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到终端</h3><p>项目目录 · 通过 claude-tap 启动 Codex</p><span class=\"p-env\">claude-tap</span><span class=\"p-env\">Codex CLI</span></div><ol class=\"p-watch\"><li data-reveal=\"0\">启动<small>claude-tap 帮我们启动 Codex</small></li><li data-reveal=\"1\">照常提交<small>下一页的只读 Prompt</small></li><li data-reveal=\"2\">打开查看器<small>每次请求都被记下来</small></li></ol></div><div class=\"p-term\" data-copy=\"uvx claude-tap --tap-client codex --tap-target https://api.minimax.cn/v1\" data-reveal=\"0\" style=\"margin-top:14px\"><div class=\"dim\">$ uvx claude-tap --tap-client codex \\</div><div class=\"dim\">    --tap-target https://api.minimax.cn/v1</div></div>",
      "steps": [
        "启动",
        "照常提交",
        "打开查看器"
      ],
      "script": [
        "接下来要请 Codex 帮忙核对。不过这一次，我们换一种方式启动它。我们想事后看到 Codex 实际发给模型的是什么，就得在 Codex 和模型服务之间放一个记录员。claude-tap 就是这样一个开源的本地代理：在终端里运行这条命令，它会替我们启动 Codex，并把 Codex 发往模型服务的每一次请求记下来。",
        "启动之后，Codex 用起来和平时完全一样。我们照常在里面提交下一页的只读 Prompt。",
        "等 Codex 回答完，再打开 claude-tap 的本地查看器，就能一条一条看到刚才的请求。这一节先看讲师记录；跟做反馈核对时，直接使用已经配置好的 Codex 即可。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "命令已于 2026-10-02 在 Codex 0.160.0 + MiniMax 自定义 provider 下实测，trace 写入 ~/.local/share/claude-tap/traces.sqlite3。需要先装好 uv。录制时用隔离环境启动（见 p15），查看器地址以工具输出为准。"
        },
        {
          "title": "讲师提示",
          "text": "API 密钥会经过本地代理；claude-tap 导出与存储时只保留鉴权头前缀。画面上不要出现 config.toml 或完整密钥。"
        }
      ],
      "source": "index.html#p06-tap",
      "seconds": 90
    },
    {
      "id": "p07",
      "segment": "逐条核对",
      "layout": "prompt-scene",
      "prompt": "只读任务，不修改任何文件。\n先读取 docs/evidence/CH02_VIBE_ITERATIONS.md，\n里面是别人对我首页的三条建议，以及我的核对记录。\n\n请逐条说明：\n1. 它对应哪些文件和代码；\n2. 它是否和项目里已有的决定或文档冲突；\n3. 你的依据是哪个文件的哪一段。\n不确定就写“不确定”，不要猜。",
      "label": "让 Codex 只读核对",
      "title": "让 Codex 只读核对：三条对应哪些代码？",
      "kicker": "第 2 章 · 2.1 · 逐条核对",
      "lead": "这一步只读，不让 Codex 修改文件。Prompt 让它读取我们的反馈记录，再回答三件事；不提示项目里哪份文件记着之前的决定，这样后面的观察才有意义。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>只读</b><small>这一步不修改任何文件</small></span></li><li data-reveal=\"1\"><span><b>要依据</b><small>每条说出文件和段落</small></span></li><li class=\"is-risk\" data-reveal=\"2\"><span><b>盯住第 2 条</b><small>它会怎样判断？</small></span></li></ol></div>",
      "steps": [
        "只读",
        "要依据",
        "盯住第 2 条"
      ],
      "script": [
        "现在，在刚才通过 claude-tap 启动的 Codex 里提交这段 Prompt。左边是完整内容。第一句就说明：只读任务，不修改任何文件。然后让它自己去读刚才写的 CH02_VIBE_ITERATIONS.md，不用把内容粘进来。这样等会儿在记录里，我们能看到它读文件的动作。我们只是想知道这三条建议落在代码的什么地方。",
        "然后让它逐条回答三件事：对应哪些文件和代码，和项目里已有的决定有没有冲突，依据是哪个文件的哪一段。不确定就说不确定，不要猜。",
        "看它的回复，重点盯住第 2 条。项目卡不跳转，是我们在 1.4 回答 Agent 提问时定下的。注意，Prompt 里我们一个字都没提 1.4。那 Codex 会怎样判断这一条？"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在 p06-tap 启动的 Codex 中提交此 Prompt，保留完整记录供 p08–p14 使用。学员跟做直接用 Codex，不要求运行 claude-tap。"
        },
        {
          "title": "讲师提示",
          "text": "Prompt 只点名 CH02_VIBE_ITERATIONS.md，不出现 PROMPT_V1.md 等记录决定的文件名。Codex 的回复以录制实际为准，p14 按实际结果选分支。"
        }
      ],
      "source": "index.html#p07",
      "seconds": 90
    },
    {
      "id": "p08",
      "segment": "请求解剖",
      "label": "一句话变成一大份请求",
      "title": "我们只写了一句，请求里却有这么多",
      "kicker": "第 2 章 · 2.1 · 请求解剖",
      "lead": "借助请求查看工具，可以看到 Codex 实际发给模型的内容。我们写的那一句只占很小一部分。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:.8fr auto 1.3fr\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">我们写的</span><p class=\"p-big\">一句话</p><p class=\"p-sub\">读标题任务：34 个字</p></div><div class=\"p-join\" data-reveal=\"1\"><span>Codex 发出</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">第一次请求</span><p class=\"p-big\">约 1.15 万 token</p><p class=\"p-sub\">还没开始干活</p></div></div><div class=\"p-bar\" data-reveal=\"2\">多出来的是什么？它又是怎么<b>知道 1.4 的决定</b>的？</div><p class=\"source-note\">数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "我们写的",
        "实际发出",
        "两个问题"
      ],
      "script": [
        "在看 Codex 的答案之前，我们先打开 claude-tap 的查看器，看看它实际发给模型的是什么。为了把结构看清楚，先借一份读标题任务的记录认识请求结构：用户输入一共 34 个字。它与刚才的反馈核对是两次任务，数字不能混用。看清结构后，我们再回到反馈核对记录，追踪那条决定从哪里进入请求。",
        "Codex 发出的第一次请求，大约 1.15 万个 token。这时它还没开始读文件，还没干活。我们写的那一句，只占其中很小一部分。",
        "于是有两个问题。第一，多出来的这么多内容是什么？第二，回到刚才的第 2 条，Codex 是怎么知道 1.4 那个决定的？我们先回答第一个，把这份请求拆开看。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "请求查看工具当前选用 claude-tap（MIT），本节由讲师演示，学员按配套页自主尝试。画面截图需检查本机路径、用户名和个人 Skills 名称。"
        },
        {
          "title": "数字来源",
          "text": "数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。"
        }
      ],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "请求解剖",
      "label": "请求解剖地图",
      "title": "拆开这份请求：六块内容",
      "kicker": "第 2 章 · 2.1 · 请求解剖",
      "lead": "一次请求由 Harness 组装：系统指令、工具定义、Skills 列表、环境信息、权限说明，最后才是我们写的话。下面几页逐块回答“如果没有它会怎样”。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<style>.x-stack{display:flex;gap:6px;height:64px}.x-stack>div{position:relative;border:2.5px solid var(--c);background:var(--cl);border-radius:10px 8px 11px 9px;display:flex;align-items:center;justify-content:center;font-size:19px;color:var(--ct);min-width:14px;overflow:hidden;white-space:nowrap}</style><div class=\"x-stack\" data-reveal=\"0\"><div data-role=\"agent\" style=\"flex:17\">系统指令 ≈1.7 万字符</div><div data-role=\"tool\" style=\"flex:18\">工具定义 9 个 ≈1.8 万</div><div data-role=\"ctx\" style=\"flex:12\">Skills 列表 ≈1.2 万</div><div data-role=\"ink\" style=\"flex:1.2\" title=\"环境信息\"></div><div data-role=\"gate\" style=\"flex:1\" title=\"权限说明\"></div><div data-role=\"us\" style=\"flex:.6\" title=\"我们的话\"></div></div><p class=\"p-sub\" data-reveal=\"0\" style=\"text-align:right;margin-top:6px\">末尾三小格：环境信息 · 权限说明 · 我们的话</p><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:16px\"><div class=\"p-box is-soft\" data-role=\"agent\" data-reveal=\"1\"><h3>Harness 写的</h3><p>系统指令 · 工具定义</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>从环境收集的</h3><p>Skills · 环境信息 · 权限</p></div><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"2\"><h3>我们写的</h3><p>最后那一小格</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">模型看到的是 <b>Harness 组装好的请求</b></div><p class=\"source-note\">右侧三小格依次是环境信息（约 600 字符）、权限说明（约 340 字符）和我们的话（34 字）。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "按大小排开",
        "两种来源",
        "我们那一格"
      ],
      "script": [
        "把这份请求按内容排开，宽度大致对应大小。最大的三块是系统指令，大约 1.7 万字符；工具定义，9 个工具，大约 1.8 万字符；还有 Skills 列表，大约 1.2 万字符。右边还有三小格。",
        "按来源分，系统指令和工具定义是 Harness 自己写好的；Skills 列表、环境信息和权限说明，是 Harness 从我们的电脑和配置里收集来的。1.2 我们说过，Agent 是模型加上下文加工具的循环。Harness，就是负责把这些组装起来、再执行工具的那一层程序，Codex 就是一个 Harness。",
        "我们写的那句话，是最右边最小的那一格。模型看到的，从来不只是我们写的话，而是 Harness 组装好的整份请求。那每一块为什么非有不可？我们一块一块问：如果没有它，会怎样。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "字符数来自讲师日常环境的一次 claude-tap 记录：instructions 16979 字符，tools 的 JSON 约 17767 字符，Skills 说明 12431 字符，环境信息约 622 字符，权限说明 341 字符，用户输入 34 字。Skills 列表大是因为讲师装了较多个人 Skills，p15 会对比隔离环境。"
        },
        {
          "title": "讲师提示",
          "text": "第一次正式出现“Harness”这个词，先指着图说它做了什么，再给名字。"
        }
      ],
      "expressive": "按大小比例排开的一条请求带，后续页逐块放大",
      "source": "index.html#p09",
      "seconds": 90
    },
    {
      "id": "p10",
      "segment": "请求解剖",
      "label": "如果没有系统指令",
      "title": "如果没有系统指令，模型不知道自己是谁",
      "kicker": "第 2 章 · 2.1 · 请求解剖",
      "lead": "模型本身只会接着往下写。系统指令告诉它：你是一个在终端里写代码的 Agent，该怎样工作、怎样验证、怎样汇报。Codex 是开源的，它的基础指令就放在公开仓库里。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:.9fr auto 1.3fr\"><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">没有它</span><p class=\"p-big\" style=\"font-weight:500\">只会接着往下写</p><p class=\"p-sub\">不知道要读仓库、改文件、停下来请示</p></div><div class=\"p-join\" data-reveal=\"1\"><span>Codex 基础指令</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">章节目录（摘出几节）</span><p style=\"margin-top:10px;line-height:1.8\">工作方式 · 性格<br><b>AGENTS.md 规范</b><br>计划 · 执行任务<br>验证工作 · 汇报进度与结果</p></div></div><div class=\"p-bar\" data-reveal=\"2\">同一个模型，换一个 Harness，<b>行为就不同</b></div><p class=\"source-note\">来源：openai/codex 仓库 codex-rs/protocol/src/prompts/base_instructions/default.md（Apache-2.0），2026-10-02 核对；章节名为中文意译</p>",
      "steps": [
        "没有它",
        "Codex 的基础指令",
        "行为来自这里"
      ],
      "script": [
        "先问最大的一块：如果没有系统指令会怎样？模型本身只会根据前文接着往下写。它不知道自己是一个写代码的 Agent，不知道要先读仓库、要改文件、遇到风险要停下来请示。",
        "Codex 是开源的，它的基础指令就放在公开仓库里，谁都能看。原文很长，我们只看它的章节目录，摘出其中几节：工作方式、性格、计划、执行任务、验证工作、汇报进度和结果。注意中间有一节，专门讲 AGENTS.md 规范，告诉模型项目里可能有这种文件、该怎么对待它。这一点后面还会用到。",
        "所以我们感受到的“Codex 很谨慎”“它会先列计划”，很大一部分来自这份指令。同一个模型，换一个 Harness、换一份指令，表现就会不一样。系统指令说清了“怎么做事”，可模型真要做事，还得有手。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "讲师环境实际发出的指令与 default.md 一致，只少了 Planning 及其示例和 update_plan 两节：0.160.0 默认关闭计划工具，Harness 发送前删掉讲计划工具的章节（core/src/session/mod.rs，prompts/src/update_plan_instructions.rs）。若学员问起，可作为“指令和工具保持一致”的例子。"
        },
        {
          "title": "讲师提示",
          "text": "只展示章节目录，不大段引用原文；不推断 OpenAI 写这些指令的内部动机。"
        }
      ],
      "source": "index.html#p10",
      "seconds": 90
    },
    {
      "id": "p11",
      "segment": "请求解剖",
      "label": "如果没有工具定义",
      "title": "如果没有工具定义，模型只能说，不能做",
      "kicker": "第 2 章 · 2.1 · 请求解剖",
      "lead": "工具定义用 JSON 结构写清名字、用途和参数。模型只能可靠地调用被描述过的工具；调用一个不存在的工具，Harness 会返回错误。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.15fr 1fr\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">一个工具的定义（只摘几行）</span><pre class=\"p-code\" style=\"margin-top:8px;font-size:17px;line-height:1.55\">{ \"name\": \"exec_command\",\n  \"description\": \"Runs a command …\",\n  \"parameters\": { \"cmd\": \"string\", … } }</pre></div><div class=\"p-term\" data-reveal=\"1\" style=\"align-self:start\"><div class=\"dim\">模型 → 调用 read_file</div><div class=\"err\">错误：没有这个工具</div><div class=\"dim\">模型 → 改用 exec_command: cat index.html</div><div class=\"ok\">返回文件内容</div></div></div><div class=\"p-bar\" data-reveal=\"2\">模型提出调用，<b>Harness 执行</b>，再把结果放回下一次请求</div><p class=\"source-note\">右侧来自另一次实测运行，记录有简化。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "工具长什么样",
        "调用不存在的工具",
        "谁在执行"
      ],
      "script": [
        "第二块，工具定义。这次请求里有 9 个工具，每个都用一段 JSON 写清楚：叫什么名字、做什么用、要哪些参数。左边是其中执行命令的那个，名字叫 exec_command。原文很长，这里只摘了几行：名字、一句用途说明，和最重要的参数，也就是要执行的命令。",
        "如果没有工具定义，模型就只能“说”，不能“做”。而且它只能可靠地调用被描述过的工具。右边是我们在一次实测里看到的：模型先调用了一个叫 read_file 的工具，可这次请求里根本没有这个工具，Harness 返回了错误。模型看到错误，改用执行命令的工具，跑了 cat，才读到文件。",
        "这就回到了 1.2 的循环：模型只是提出调用，真正执行的是 Harness，执行结果再放进下一次请求交给模型。工具是手，那装了那么多 Skills，是不是也都整份塞进请求里了？"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "read_file 一例来自 2026-10-02 第一次实测（提案实测记录）；同一提问再跑一次只用了 2 次请求，没有出现这个错误，可作非确定性例子，留到 2.2。"
        }
      ],
      "source": "index.html#p11",
      "seconds": 90
    },
    {
      "id": "p12",
      "segment": "请求解剖",
      "label": "Skills 只是一份目录",
      "title": "Skills 不是整份塞进去，只是一份目录",
      "kicker": "第 2 章 · 2.1 · 请求解剖",
      "lead": "请求里的 Skills 列表只有名字、一句描述和文件位置。模型判断用得上时，再去读那个 SKILL.md 全文。这叫渐进披露；装得越多，目录越长，每次请求都更重。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.2fr auto 1fr\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">请求里的一条</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.55;overflow-wrap:anywhere\">- skill-creator: Create or update a Codex skill … (file: r0/skill-creator/SKILL.md)</p></div><div class=\"p-join\" data-reveal=\"1\"><span>用得上才读</span><i class=\"p-arrow\"></i></div><div class=\"p-box is-dashed\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">SKILL.md 全文</span><p>步骤 · 规则 · 参考资料</p><p class=\"p-sub\">不在这次请求里</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">目录是指针 · 装得越多，<b>每次请求越重</b></div><p class=\"source-note\">示例条目是 Codex 自带的 Skill，取自 2026-10-02 隔离环境的一次运行</p>",
      "steps": [
        "目录里的一条",
        "用到才读全文",
        "代价"
      ],
      "script": [
        "第三块，Skills 列表。左边是请求里的一条，来自 Codex 自带的一个 Skill：只有名字、一句英文描述，和这个 Skill 文件放在哪里。",
        "Skill 的完整内容，也就是 SKILL.md 里的步骤和规则，并不在这次请求里。模型判断这个 Skill 用得上时，才会调用工具去读全文。这种先给目录、用到再展开的做法，叫渐进披露。",
        "所以列表只是一份目录、一组指针。但目录本身也有代价：装的 Skills 越多，目录越长，每一次请求都要带着它。刚才那 1.2 万字符，就是讲师电脑上装了不少个人 Skills 的结果。剩下两块很小，可少了它们，模型连自己在哪台电脑上都不知道。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "画面只用 Codex 自带 Skill 的条目，不展示讲师个人 Skills 的名字。Skill 的编写与开关留到讲 Skill 的章节。"
        }
      ],
      "source": "index.html#p12",
      "seconds": 90
    },
    {
      "id": "p13",
      "segment": "请求解剖",
      "label": "环境信息与权限说明",
      "title": "模型不知道它在哪台电脑、今天几号",
      "kicker": "第 2 章 · 2.1 · 请求解剖",
      "lead": "模型的知识停在训练截止的时候，也看不到我们的电脑。Harness 要把当前目录、Shell、日期、时区，以及这次的沙箱和审批设置写成文字放进请求。权限说明只是文字，真正的限制由本地沙箱执行。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">环境信息</span><pre class=\"p-code\" style=\"margin-top:8px;font-size:17px;line-height:1.55\">&lt;cwd&gt;…/work&lt;/cwd&gt;\n&lt;shell&gt;zsh&lt;/shell&gt;\n&lt;current_date&gt;2026-10-02&lt;/current_date&gt;\n&lt;timezone&gt;Asia/Shanghai&lt;/timezone&gt;</pre></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">权限说明（摘一句）</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.55\">`sandbox_mode` is `read-only`: The sandbox only permits reading files.</p></div></div><div class=\"p-bar\" data-reveal=\"2\">权限说明是<b>写给模型看的文字</b> · 真正拦住越界的是本地沙箱</div><p class=\"source-note\">取自 2026-10-02 隔离环境的一次运行，路径已缩写</p>",
      "steps": [
        "环境信息",
        "权限说明",
        "回扣 1.6"
      ],
      "script": [
        "第四块，环境信息。模型的知识停在它训练截止的那一天，也看不到我们的电脑。所以 Harness 会写一小段文字告诉它：当前目录在哪，用的什么 Shell，今天几号，什么时区。没有这一段，它连“今天”是哪天都不知道。",
        "第五块，权限说明。右边这一句告诉模型：这次的沙箱模式是只读，只允许读文件。",
        "回想 1.6：权限说明只是写给模型看的文字，让它知道边界在哪；真正拦住越界操作的，是本地沙箱。模型就算没理会这段话，沙箱照样会拒绝写入。到这里，六块都看过了。回到刚才第二个问题：Codex 到底是怎么知道 1.4 的决定的？"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "环境信息以 user 角色注入，权限说明和 Skills 列表是 developer 角色；所以不能只按消息角色区分“我写的”和“Harness 加的”。若学员在工具里看到 user 角色的环境信息，用这一点解释。"
        }
      ],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "请求解剖",
      "label": "它是怎么知道的",
      "title": "这条决定从哪里来",
      "kicker": "第 2 章 · 2.1 · 请求解剖",
      "lead": "回到反馈核对记录，查找记录决定的文件是否被读取，以及内容是否进入后续请求。再对照回答，判断它有没有正确使用这条依据；没有找到依据时，保留不确定。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>提出调用</h3><p class=\"p-mono\">读 PROMPT_V1.md</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\"><h3>Harness 执行</h3><p>返回文件内容</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"1\"><h3>下一次请求</h3><p>带上“项目卡不跳转”</p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"2\"><h3>读到了</h3><p>再核对是否正确理解</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"2\"><h3>没找到依据</h3><p>保留不确定，补充核对</p></div></div>",
      "steps": [
        "工具调用",
        "进入下一次请求",
        "两种结果"
      ],
      "script": [
        "现在切回三条反馈的只读核对记录。先找有没有读取 PROMPT_V1.md 或其他决定记录的工具调用，再看实际返回了什么。画面以这次运行的记录为准。",
        "如果找到了读取记录，就继续在后续请求里找“项目卡不跳转”这句话。这样才能把“它知道这个决定”对应到可见的来源，而不是凭一句回答认定它记得上一章。",
        "读到了，还要核对回答有没有正确理解；没找到依据，也可能回答不确定、继续查找，或提出没有依据的修改建议。我们按实际记录判断，不预设它一定答对或答错。下一步要保留决定的出处，交接任务时让它能被找到。第 7 章再展开项目规则怎样组织。"
      ],
      "teaching": [
        {
          "title": "演示分支",
          "text": "按录制实际选用：\n\n读到了：在记录中指认读取文件的那次工具调用，以及下一次请求中出现的文件内容。\n\n没找到依据：检查完整请求与工具返回，记录回答是不确定、继续查找还是建议修改；仅凭没有读取某一个文件，不能断言所有来源中都没有这条决定。\n\n两支都保留原始记录，不重跑凑结果。"
        },
        {
          "title": "讲师提示",
          "text": "画面上的文件名按实际读取的文件替换；学员的决定可能记在 PROMPT_V1.md 或其他证据文件里。记录里会先出现一次读取 CH02_VIBE_ITERATIONS.md：那是我们点名要它读的；读到了的分支里，再指出它自己决定去读的那一次，两者对比。"
        }
      ],
      "source": "index.html#p14",
      "seconds": 90
    },
    {
      "id": "p15",
      "segment": "请求会变",
      "label": "换一台干净的电脑",
      "title": "同一句话，换个环境，请求就变了",
      "kicker": "第 2 章 · 2.1 · 请求会变",
      "lead": "请求由三层来源拼成：个人（~/.codex 的配置、登录、全局 AGENTS.md，~/.agents/skills 的个人 Skills）、项目（仓库里的 AGENTS.md 与 .agents/skills）、本次（目录、日期、权限）。换一个隔离的 HOME 运行，个人那一层就没了。这是讲师的环境对比示例，不要求跟做。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">日常环境</span><p>Skills ≈1.24 万字符 · 首次请求 ≈1.15 万 token</p></div><div class=\"p-join\" data-reveal=\"0\"><span>隔离 HOME</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ok\">隔离环境</span><p>Skills ≈2 千字符 · 首次请求 ≈9 千 token</p></div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"1\"><h3>个人</h3><p>~/.codex · ~/.agents/skills</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>项目</h3><p>AGENTS.md · .agents/skills</p></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>本次</h3><p>目录 · 日期 · 权限</p></div></div><div style=\"display:grid;grid-template-columns:minmax(0,.7fr) minmax(0,2.6fr);gap:14px;margin-top:10px;align-items:stretch\"><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin:0\">个人 Skills<br><b>跟着 HOME 走</b></div><div class=\"p-term\" data-reveal=\"2\" style=\"font-size:16px\" data-copy=\"CLEAN_HOME=&quot;$(mktemp -d)&quot;\nmkdir -p &quot;$CLEAN_HOME/.codex&quot;\ncp ~/.codex/config.toml &quot;$CLEAN_HOME/.codex/&quot;\nHOME=&quot;$CLEAN_HOME&quot; codex\"><div class=\"dim\">$ CLEAN_HOME=\"$(mktemp -d)\"; mkdir -p \"$CLEAN_HOME/.codex\"</div><div class=\"dim\">$ cp ~/.codex/config.toml \"$CLEAN_HOME/.codex/\"; HOME=\"$CLEAN_HOME\" codex</div></div></div>",
      "steps": [
        "对比两次",
        "三层来源",
        "隔离要隔离什么"
      ],
      "script": [
        "既然请求是每次任务时才组装的，那换一个环境，同一句话发出去的请求也会不一样。讲师做了一个对比：同一句话，一次在日常环境里跑，一次换了一个干净的、隔离的 HOME 目录。Skills 列表从大约 1.24 万字符降到大约 2 千，剩下的只有 Codex 自带的 4 个；第一次请求也从大约 1.15 万 token 降到大约 9 千。",
        "为什么会这样？因为请求的内容有三层来源。个人这一层，来自我们自己的用户目录：~/.codex 里的配置、登录信息和全局 AGENTS.md，还有 ~/.agents/skills 里的个人 Skills。项目这一层，来自仓库里的 AGENTS.md 和 .agents/skills。本次这一层，是当前目录、日期和这次的权限设置。",
        "有一个细节：Codex 提供了 CODEX_HOME 这个环境变量，可以把 ~/.codex 换到别处；但个人 Skills 是跟着 HOME 走的，只改 CODEX_HOME 去不掉它们。所以讲师录课时会把 HOME 一起隔离，让画面接近刚装好时的样子。做法就是下面这几行：建一个临时目录，只把模型配置复制进去，再让 Codex 把它当作 HOME 启动。这一页只需看懂环境变化怎样影响请求，不要求复制命令或修改自己的配置。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "Codex 0.160.0 源码 codex-rs/ext/skills/src/host_roots.rs：个人 Skills 读自 $HOME/.agents/skills；$CODEX_HOME/skills 为兼容保留的旧位置；项目 Skills 读自仓库 .agents/skills。隔离运行时临时 HOME 下只放 .codex/config.toml（model 与 provider 两段）。"
        },
        {
          "title": "命令说明",
          "text": "画面命令与 2026-10-02 隔离运行的做法一致（codex exec）。用 ChatGPT 登录的，还要复制 ~/.codex/auth.json。临时目录里有密钥，用完删除。通过 claude-tap 启动时把 HOME=… 放在 uvx 前面：uv 缓存与 claude-tap 的 trace 位置是否也随 HOME 改变，尚未实测，写进配套页前要跑一遍。"
        },
        {
          "title": "讲师提示",
          "text": "不要在画面上展示 config.toml 内容，里面有 API 密钥。"
        }
      ],
      "source": "index.html#p15",
      "seconds": 90
    },
    {
      "id": "p16",
      "segment": "请求会变",
      "label": "换个权限",
      "title": "同一句话，换个权限，说明文字也变了",
      "kicker": "第 2 章 · 2.1 · 请求会变",
      "lead": "只读和可写两次运行，权限说明是两段不同的文字；可写时还会列出可写目录，环境信息也随之变长。Codex 按配置从不同模板拼出这段说明。这是讲师示例，可自主尝试。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<style>.x-w16{grid-template-columns:1.5fr 1fr}@media(max-width:600px){body[data-mode=scroll] .x-w16{grid-template-columns:1fr}body[data-mode=scroll] .x-w16 code{white-space:pre-wrap;overflow-wrap:anywhere}}</style><div class=\"p-walk x-w16\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:40px\"><div class=\"p-fn\">permissions instructions <span class=\"add\">+1</span><span class=\"del\">−1</span></div><div class=\"p-ln del\"><i>−</i><code>`sandbox_mode` is `read-only`: … only permits reading files.</code></div><div class=\"p-ln add\"><i>+</i><code>`sandbox_mode` is `workspace-write`: … editing files in `cwd` …</code></div><div class=\"p-ln add\"><i>+</i><code>The writable roots are `…/work`, …</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>约 340 → 670 字符</b><small>可写时多出可写目录</small></span></li><li class=\"is-ok\" data-reveal=\"1\"><span><b>按配置拼装</b><small>仓库里按沙箱模式分模板</small></span></li></ol></div><div class=\"p-term\" data-reveal=\"0\" style=\"margin-top:12px;font-size:17px\" data-copy=\"uvx claude-tap --tap-client codex --tap-target https://api.minimax.cn/v1 -s read-only\"><div class=\"dim\">$ uvx claude-tap --tap-client codex --tap-target … -s read-only</div><div class=\"dim\">$ uvx claude-tap --tap-client codex --tap-target … -s workspace-write</div></div>",
      "steps": [
        "两段说明",
        "按配置拼装"
      ],
      "script": [
        "再换一个维度：权限。同一句话，一次用只读，一次用可写。怎么切？启动时在命令最后加上 -s read-only 或者 -s workspace-write，claude-tap 会把它不认识的参数原样交给 Codex。两次各开一个新会话，这样两份请求只差权限这一处。看权限说明的差异：只读时说沙箱只允许读文件；可写时变成允许编辑当前目录，还多了一行，列出哪些目录可写。长度从大约 340 字符变成 670，环境信息也跟着变长。",
        "这段文字不是写死的。Codex 的仓库里，按沙箱模式和审批策略分别放了模板，Harness 按这次的配置拼出来。这就接上了 1.3：我们在界面上做的权限选择，会变成请求里的一段文字，同时变成本地沙箱的实际限制。看完了请求，回到我们的三条反馈，该做判断了。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "模板位于 codex-rs/prompts/templates/permissions/（sandbox_mode/*.md、approval_policy/*.md），2026-01 起由固定段落改为按配置拼装（提交 87f7226cca）。本页数据来自 codex exec，审批策略为 never；交互界面中的审批文字会不同。"
        },
        {
          "title": "命令说明",
          "text": "已核对：Codex 0.160.0 的 -s/--sandbox 取值为 read-only、workspace-write、danger-full-access；claude-tap 0.1.145 的帮助写明未列出的参数会转发给所启动的客户端。复制按钮复制的是只读那一条，可写时把最后一个参数换掉。会话中途也能在 Codex 界面里改权限，但前面的对话仍在上下文里，对比不干净，所以用启动参数。"
        }
      ],
      "source": "index.html#p16",
      "seconds": 60
    },
    {
      "id": "p17",
      "segment": "分类收尾",
      "label": "哪些要改，谁来决定",
      "title": "三条建议，三种性质",
      "kicker": "第 2 章 · 2.1 · 分类收尾",
      "lead": "把三条反馈分别贴上标签：视觉现象、既有决定、内容缺失。第 2 条要不要改是人的决定，不由 AI 决定；讲师示例选第 3 条进入 2.2；自己的内容已完整时，先确认一条值得补充的项目事实，不伪造缺陷。把标签补进 CH02_VIBE_ITERATIONS.md。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1.3fr) minmax(0,.9fr) minmax(0,1.4fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>反馈</span><span class=\"p-c\">性质</span><span>下一步</span></div><div data-reveal=\"0\"><span>1. 手机上有点挤</span><span class=\"p-c\"><span class=\"p-chip\" data-role=\"ctx\">视觉现象</span></span><span>已复现记剩余；否则待核对</span></div><div data-reveal=\"1\"><span>2. 卡片点了没反应</span><span class=\"p-c\"><span class=\"p-chip\" data-role=\"us\">既有决定</span></span><span>改不改，由人决定</span></div><div data-reveal=\"2\" class=\"is-key\"><span>3. 看不出做过什么</span><span class=\"p-c\"><span class=\"p-chip\" data-role=\"gate\">内容缺失</span></span><span>选定，进入 2.2</span></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">还有一类是<b>个人偏好</b>：记下来，不当缺陷</div>",
      "steps": [
        "第 1 条",
        "第 2 条",
        "第 3 条",
        "第四类"
      ],
      "script": [
        "现在给三条反馈贴标签。第 1 条，手机上有点挤，是一个视觉现象。已复现就记为剩余问题，没复现就保留核对条件；这一轮先不改布局。",
        "第 2 条，卡片点了没反应，行为属实，但它是我们在 1.4 做过的决定。改不改，要由人来决定，可以改，但那是一次需求变化，要重新确认；AI 不能替我们决定。",
        "第 3 条，看不出做过什么，是内容缺失。在讲师示例里，我们选它作为 2.2 的唯一目标。如果你的项目区已经写清做过什么，就记录“现有内容已满足”，再选一条自己愿意公开、确实值得补充的项目事实。这一轮仍只改项目区内容；不需要补充时，可以用课程示例练习，不必制造问题。",
        "反馈还有第四类：个人偏好，比如“我更喜欢蓝色”。记下来，但不当缺陷处理。请暂停视频，回到 CH02_VIBE_ITERATIONS.md，给每条补齐复现条件、期望、实际、证据，再加上类型标签。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "第 2 条按学员在 1.4 的决定判断；第 3 条区分已有缺口与新批准的内容补充。没有真实补充需求时，在独立练习副本使用 p06 的“学习笔记：记录课程练习”及 2.2 给出的合成内容，并标注课程练习。"
        }
      ],
      "source": "index.html#p17",
      "seconds": 120
    },
    {
      "id": "p18",
      "segment": "分类收尾",
      "label": "暂停自检",
      "title": "暂停自检",
      "kicker": "第 2 章 · 2.1 · 分类收尾",
      "lead": "先独立作答，再看解析。答案后面标出回到哪一页。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>请求里有哪些不是我们写的内容？缺了其中一类会怎样？</h3><div data-reveal=\"1\"><p>系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类说出后果<span class=\"p-back-to\" data-role=\"agent\">回到 请求解剖</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>熟人说手机上挤，你在 360×800 下看并不挤。这条删掉、标“没问题”，还是怎么记？</h3><div data-reveal=\"2\"><p>都不对。写明视口、浏览器和操作，标“未复现”，保留不删<span class=\"p-back-to\" data-role=\"us\">回到 核对记录</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题"
      ],
      "script": [
        "我们先暂停一下，各自回答两个问题。第一，请求里有哪些内容不是我们写的？至少说出四类，再说说缺了其中一类会怎样。第二，熟人说手机上挤，可你在 360 乘 800 下看并不挤。这条反馈是删掉、标成“没问题”，还是怎么记？",
        "第一题，系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类。比如没有工具定义，模型只能说不能做；没有环境信息，它不知道当前目录和日期。答不上来，回到请求解剖那几页再看一遍。",
        "第二题，删掉和标“没问题”都不对。反馈只是一个说法，我们核对过了，结果是没复现。写清楚在哪个视口、哪个浏览器、做了什么操作，标成“未复现”。它这一轮不算问题，但要留着，熟人可能是在别的设备、别的宽度上看到的，以后有新证据还能接着查。"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 90
    },
    {
      "id": "p19",
      "segment": "分类收尾",
      "label": "本节小结",
      "title": "先分清，再动手",
      "kicker": "第 2 章 · 2.1 · 分类收尾",
      "lead": "本节留下一份带证据的反馈清单和一个选定的问题；也第一次看到了一句话背后，Harness 实际发给模型的完整请求。下一节回答：要开始改了，继续这个会话，还是新建？",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h4 style=\"text-align:center\">一个习惯</h4><div class=\"p-star\" style=\"width:260px;font-size:24px\">先写证据<br>再分性质</div><p class=\"p-sub\" style=\"text-align:center\">复现 · 期望 · 实际 · 证据</p></div><div data-reveal=\"1\"><h4>一个认识</h4><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-pass\">请求由 Harness 组装</li><li class=\"is-fix\">回答要能指回依据</li><li class=\"is-stop\">换环境，请求就变</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h4>下一节</h4><div class=\"p-box\" data-role=\"us\"><h3>2.2 改一处</h3><p>继续会话，还是新建？</p></div></div></div>",
      "steps": [
        "一个习惯",
        "一个认识",
        "下一节"
      ],
      "script": [
        "这一节我们没有改一行代码，但留下了一份带证据的反馈清单：每条都有复现条件、期望、实际和证据，也贴好了性质标签。先写证据、再分性质，这是这一节最想留下的习惯。",
        "我们也第一次看到了一句话背后的完整请求：它由 Harness 组装，我们沿请求和工具返回追踪决定的来源；换一个环境、换一个权限，同一句话发出去的请求就不一样。需要回看时，打开本节 P09–P13，对照请求里的各块内容。",
        "下一节，我们要开始改第 3 条了。动手之前先面对一个选择：继续刚才这个会话、恢复它，还是新建一个？要回答这个问题，得先弄清楚多次请求之间到底发生了什么。"
      ],
      "teaching": [],
      "source": "index.html#p19",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "收到反馈",
      "seconds": 330
    },
    {
      "label": "逐条核对",
      "seconds": 450
    },
    {
      "label": "请求解剖",
      "seconds": 630
    },
    {
      "label": "请求会变",
      "seconds": 150
    },
    {
      "label": "分类收尾",
      "seconds": 300
    }
  ]
};
