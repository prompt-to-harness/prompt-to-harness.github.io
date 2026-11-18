window.lesson = {
  "title": "走出网页：Vibe Coding 还能怎么疯（以及怎么翻车）",
  "chapter": "第 3 章 · Vibe Coding 与能力扩展",
  "section": "03.05",
  "summary": "从造词出圈到纯浏览器里的 3D 光影造景、实时电子乐与一次性个人怪玩具，再从真实删库事故看清纯靠感觉的边界，引出第 4 章 SDD；只看不跟做，不改个人主页项目。",
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "走出网页：Vibe Coding 还能怎么疯（以及怎么翻车）",
      "title": "Vibe Coding 还能怎么疯？",
      "lead": "前四节完成了两个小游戏与 Skill 学习；这一节只看不跟做，不改个人主页项目，也不是进入第 4 章的门禁",
      "html": "<style>body[data-mode=\"slides\"] .segment:nth-child(2){min-width:86px}body[data-mode=\"slides\"] .segment:nth-child(5){min-width:102px}#p01 .p01-acts h3{font-size:21px;margin:6px 0 2px}#p01 .p01-acts p{font-size:17px;line-height:1.35;margin:0}#p01 .p01-acts .p-box{padding:10px 14px}</style><ol class=\"p-map\"><li class=\"is-done\"><b>3.1</b>经历游戏开发</li><li class=\"is-done\"><b>3.2</b>读懂 Skill</li><li class=\"is-done\"><b>3.3</b>修改并使用 Skill</li><li class=\"is-done\"><b>3.4</b>寻找与追踪</li><li class=\"is-now\"><b>3.5</b>经验分享</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:16px\">3.1 至 3.4 留下：<b>主页小游戏、Game Studio Skill 读写经验与 AI Coding 追踪入口</b></div><div class=\"p-grid p01-acts\" style=\"--n:4;gap:12px;margin-top:12px\" data-reveal=\"2\"><div class=\"p-box\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">第一幕</span><h3>出圈起点</h3><p>忘掉代码存在与飞行游戏</p></div><div class=\"p-box\" data-role=\"agent\"><span class=\"p-tag\" data-role=\"agent\">第二幕</span><h3>视听大秀</h3><p>浏览器调 3D 光影与电音</p></div><div class=\"p-box\" data-role=\"tool\"><span class=\"p-tag\" data-role=\"tool\">第三幕</span><h3>一次性怪玩具</h3><p>果冻风铃与睁眼合照合成</p></div><div class=\"p-box\" data-role=\"gate\"><span class=\"p-tag\" data-role=\"gate\">第四幕</span><h3>翻车与边界</h3><p>删库喜剧引出第 4 章 SDD</p></div></div>",
      "steps": [
        "本章位置",
        "前四节留下什么",
        "四幕看什么"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向五节地图上的 3.5；不切窗口】\n\n前四节，我们走完了第 3 章的游戏开发与 Skill 主线。地图上，这一节是 3.5，由我来做章末经验分享。",
        "【操作提示｜推进第 2 步，指向 3.1 至 3.4 已留下的成果条；不切窗口】\n\n从翻牌小游戏、读懂并修改 Game Studio Skill，到建立 AI Coding 的追踪入口，个人主页项目在这章的任务已经收住。这一节只看不跟做，不改个人主页仓库，也不是进入第 4 章的判断门禁。",
        "【操作提示｜推进第 3 步，依次带过四张幕次卡片；讲完进入 p02】\n\n前几章我们做的都是页面和二维小游戏，很容易让人觉得 AI 编程只是更快地排卡片、写表单。走出常规网页之后，Vibe Coding 还能怎么疯，又会在什么地方翻车？我们分四幕来看：先回到它火出圈的起点，再现场看怎样只靠浏览器调出三维光影和实时电子乐，接着连续试玩两个用完即扔的个人怪玩具，最后看一场真实的生产删库喜剧，想明白为什么下一章要进入规格驱动开发。先看第一幕：Vibe Coding 这个词最早是怎么火起来的？"
      ],
      "teaching": [],
      "source": "index.html#p01",
      "seconds": 90
    },
    {
      "id": "p02",
      "segment": "出圈起点",
      "layout": "evidence-scene",
      "label": "忘掉代码存在：Vibe Coding 的起点",
      "title": "“忘掉代码存在”：Vibe Coding 的起点",
      "lead": "2025 年 2 月，Andrej Karpathy 用一条帖子给这种“完全顺着感觉走、甚至忘掉代码存在”的写法命了名；随后独立开发者 Pieter Levels 用几个小时做出浏览器 3D 联机飞行游戏并带火 #vibejam，让跨技术栈试错破圈。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:340px\" data-reveal=\"0\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>x.com · Andrej Karpathy (@karpathy) · 2025-02-03</div><img src=\"external/karpathy-vibe-coding-cropped.png\" alt=\"Andrej Karpathy 提出 vibe coding 的原帖截图：fully give in to the vibes, embrace exponentials, and forget that the code even exists\" style=\"margin:0 auto\"></div></div>",
      "steps": [
        "看造词原帖并切实机飞行"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p02，指向截图中的“forget that the code even exists”与页底两个链接；先讲完造词原帖，随后切到浏览器已预开通过验证的 fly.pieter.com 标签页短飞演示，最后切回课件进入 p03】\n\n二零二五年二月初，Andrej Karpathy 发了眼前这条帖子。他说自己最近写东西有一种新状态，叫 vibe coding：完全顺着感觉走，拥抱指数级变化，甚至忘掉代码存在。他在帖子里还补了细节，自己连键盘都懒得敲，直接开着语音输入对编辑器说话，遇到报错就原样贴回去，代码涨到自己懒得通读也照样往前滚。\n\n仅仅一个月后，平时只做普通网页产品的独立开发者 Pieter Levels，在几乎没有三维游戏功底的情况下，花几个小时做出了浏览器联机飞行游戏，还顺势办起了社区比赛。我们切到浏览器看一眼实机画面。\n\n【切换｜浏览器 · 已预开的 fly.pieter.com 标签页（短飞演示约 15 秒）】\n\n打开网页就能直接在三维天空里起飞、转向，还能看见其他在线玩家。过去跨一个技术栈要先啃几个月文档，现在试错门槛一下子被砸穿了。\n\n【切换｜回课件 p03】\n\n既然跨技术栈的门槛变了，走出普通网页排版之后，只靠一个浏览器还能玩出什么花样？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "X · 2025-02-03",
          "text": "Karpathy 造词原帖",
          "url": "https://x.com/karpathy/status/1886192184808149383"
        },
        {
          "kind": "live",
          "group": "实机入口",
          "text": "fly.pieter.com",
          "url": "https://fly.pieter.com/"
        },
        {
          "kind": "read",
          "group": "延伸",
          "text": "Pieter Levels 飞行游戏原帖",
          "url": "https://x.com/levelsio/status/1896690611257844116"
        }
      ],
      "teaching": [],
      "source": "index.html#p02",
      "seconds": 30
    },
    {
      "id": "p03",
      "segment": "视听大秀",
      "label": "走出页面排版：在浏览器里调光影与打碟",
      "title": "走出页面排版：在浏览器里调光影与打碟",
      "lead": "三维网页与网页合成器底层都是纯文本代码。不装建模与编曲软件，人只描述画面气氛和节奏听感，让 Codex CLI 负责背后的三维参数、着色器与合成器代码换算。",
      "html": "<style>#p03 .p03-row{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:2px;align-items:stretch}#p03 .p03-row .p-box{padding:14px 18px}#p03 .p03-row h3{font-size:23px;margin:0}#p03 .p03-row p{font-size:19px;line-height:1.45;margin:8px 0 0}#p03 .p-chain{font-size:18px;margin:10px 0 4px}#p03 .p-chain>span{padding:4px 10px}</style><div class=\"p03-row\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><div class=\"p-head\"><h3>视觉秀 · 3D 海岛光影</h3><span class=\"p-tag\" data-role=\"agent\">Three.js / WebGL</span></div><div class=\"p-chain\"><span>感官光影词</span><i>→</i><span>Codex CLI</span><i>→</i><span>浏览器 3D 场景</span></div><p>白昼塑料感起点 → 只提“黄昏逆光、海面金色波光、飘萤火虫粒子”，直接改写光照与着色器</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><div class=\"p-head\"><h3>听觉秀 · 代码实时打碟</h3><span class=\"p-tag\" data-role=\"tool\">Strudel</span></div><div class=\"p-chain\"><span>感官节奏词</span><i>→</i><span>Codex CLI</span><i>→</i><span>网页合成器循环</span></div><p>复古 8-bit 混搭电子鼓点 → 追一句“最后十秒倒计时冲刺”，代码随节拍高亮闪烁并当场变奏</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">不装重型软件：人像导演一样提气氛与听感，数学参数和合成器代码交给 AI</div><p class=\"source-note\">课程自绘结构示意，说明自然语言与纯浏览器 3D、网页合成器之间的分工；接下来两页分别现场演示</p>",
      "steps": [
        "3D 光影造景",
        "实时代码打碟",
        "人管感觉，AI 算参数"
      ],
      "script": [
        "【操作提示｜停留课件 p03 第 1 步，指向左侧视觉秀卡片与三步链路；不切窗口】\n\n过去普通开发者碰三维网页，最头疼的不是脑子里没有画面，而是不知道怎样把气氛换算成三维坐标、光照矩阵和着色器公式。在 Three.js 和 WebGL 里，这些场景全由纯文本代码驱动。左边这条视觉线，我们不装建模软件，也不报任何色号和角度，直接对 Codex CLI 提画面感觉，让它去改背后的三维光影参数。",
        "【操作提示｜推进第 2 步，指向右侧听觉秀卡片与三步链路；不切窗口】\n\n声音也一样。右边这条听觉线用的是网页实时音乐环境 Strudel，它用几行简短文本描述鼓点和合成器循环，播放时每个音符对应的代码片段会跟着节拍实时闪烁。我们也可以只提节奏气氛，让 Codex CLI 写出代码再做冲刺变奏。",
        "【操作提示｜推进第 3 步，指向底部收束条与页底链接；讲完进入 p04】\n\n这两段视听实验放在一起，靠的是同一种分工：人只像导演一样描述画面气氛与听感，枯燥的数学参数和合成器代码交给 AI 换算。我们先切进视觉秀，现场看一遍白昼海岛怎样变成黄昏逆光。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "工具入口",
          "text": "Strudel 网页实时音乐环境",
          "url": "https://strudel.cc/"
        }
      ],
      "teaching": [],
      "source": "index.html#p03",
      "seconds": 90
    },
    {
      "id": "p04",
      "segment": "视听大秀",
      "layout": "prompt-scene",
      "prompt": "当前目录是一个 Three.js 漂浮灯塔海岛页面（氛围参数在 scene-config.js）。\n现在的画面太像正午塑料玩具了，请帮我改成电影感的黄昏逆光氛围：\n天空从深紫过渡到暖橙色并露出低垂的落日，海面加上金色波光反射和薄暮雾气，把灯塔旋转光束和小屋窗户的暖光点亮，再在岛上飘满发光的黄绿色萤火虫粒子。\n只改氛围参数即可，不要加新依赖。",
      "label": "视觉秀：白昼海岛改成黄昏逆光",
      "title": "视觉秀：一句话把白昼海岛改成黄昏逆光",
      "lead": "先在浏览器看清白昼低多边形海岛起点，再把只含氛围形容词的请求发给 Codex CLI，只改 scene-config.js 并通过轮询热更新看前后光影反差",
      "html": "<style>.p-pops{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;min-width:0;width:100%;max-width:100%}.p-pop{flex:0 0 auto;min-width:0}.p-preview-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}.p-preview{display:block;min-width:0}.p-preview img{display:block;width:100%;max-width:100%;height:auto;border-radius:6px;border:1px solid #C9C3B6;background:#0f172a}.p-preview-cap{margin:6px 0 0;font-size:15px;line-height:1.4;color:var(--p-muted)}body[data-mode='slides'] .p-pops .p-pop-body{width:880px;right:auto}body[data-mode='slides'] .p-pops .p-preview img{max-height:330px;width:auto;margin-inline:auto}body[data-mode='scroll'] .p-pops .p-pop[open]{flex-basis:100%;width:100%}@media(max-width:700px){body[data-mode='scroll'] .p-preview-grid{grid-template-columns:1fr}}#p04 .demo-notes{gap:12px}#p04 .p-pops{margin-top:2px}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>先看白昼起点</b><small>结构齐全但偏塑料感，支持鼠标拖拽环绕</small></span></li><li data-reveal=\"1\"><span><b>发给 Codex CLI</b><small>不报色号与角度，只改 <code>scene-config.js</code></small></span></li><li data-reveal=\"2\"><span><b>看热更新光影反差</b><small>落日波光、旋转光束、暖窗与萤火虫同时亮起</small></span></li></ol><div class=\"p-pops\"><details class=\"p-pop\" name=\"p04-pop\"><summary>效果示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>漂浮灯塔海岛：白昼起点与黄昏逆光对照</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-preview-grid\"><figure style=\"margin:0\"><a class=\"p-preview\" href=\"assets/island-v1-daylight.jpg\"><img src=\"assets/island-v1-daylight.jpg\" alt=\"V1 白昼起点：正午亮蓝色天空与海面，白红灯塔与低多边形绿色小岛\"></a><figcaption class=\"p-preview-cap\">V1 白昼起点：结构完整，光影偏正午塑料感</figcaption></figure><figure style=\"margin:0\"><a class=\"p-preview\" href=\"assets/island-v2-sunset.jpg\"><img src=\"assets/island-v2-sunset.jpg\" alt=\"V2 黄昏逆光效果：深紫到暖橙日落天空、金色海面波光、体积灯塔光束与发光萤火虫粒子\"></a><figcaption class=\"p-preview-cap\">V2 黄昏对照：海面金色波光、旋转光束与萤火虫粒子</figcaption></figure></div><p class=\"p-preview-cap\">排练渲染对照图；录制现场由 Codex CLI 修改 scene-config.js 并触发自动热更新</p></div></details></div></div>",
      "steps": [
        "先看白昼起点",
        "发给 Codex CLI",
        "看热更新光影反差"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p04 第 1 步，指向右侧第 1 步“先看白昼起点”；切到浏览器 8351 端口展示 V1 白昼起点，按 H 隐藏左上角面板并拖拽环绕，再回课件看左侧请求】\n\n先看我们的起点。这是一个用纯网页 Three.js 搭出来的漂浮灯塔海岛，结构已经齐了：岛屿、小屋、松树、旋转灯塔、海面和小帆船都有。\n\n【切换｜浏览器 · localhost:8351 漂浮灯塔海岛（V1 白昼起点，拖拽旋转观察）】\n\n现在转一圈能看到，虽然能交互，但天空和海面一片均匀高亮蓝，看起来就像正午的塑料玩具。我们回课件，看要发给 Codex CLI 的这句请求。\n\n【切换｜回课件 p04】\n\n左边这段请求里，我没有报任何十六进制色号，也没有写光源角度或着色器公式。",
        "【操作提示｜现场｜推进 p04 第 2 步，指向左侧黑色请求框；复制请求后切到 Codex CLI 粘贴发送，等待热更新生效，如已备录屏等待片段可直接快进至修改完成】\n\n我只说了纯感觉的要求：现在太像正午塑料玩具了，帮我改成电影感的黄昏逆光氛围，天空从深紫过渡到暖橙色并露出低垂的落日，海面加上金色波光反射和薄暮雾气，点亮灯塔光束和小屋窗户，再飘满发光的黄绿色萤火虫粒子，只改氛围配置文件即可。\n\n【切换｜Codex CLI · 01-lighthouse-island 目录，发送请求并修改 scene-config.js】\n\n请求发给 Codex CLI。它不需要重画整个三维模型，而是去调整背景渐变、太阳光位置、水面高光参数和粒子生成配置，改完后浏览器会自动热更新。",
        "【操作提示｜现场｜切到浏览器观察自动热更新后的黄昏海岛，按 H 保持无面板全屏并拖拽环绕；最后切回课件推进 p04 第 3 步，如有需要可点开「效果示意」核对前后对比；讲完进入 p05】\n\n【切换｜浏览器 · 热更新后的漂浮灯塔海岛（观察黄昏逆光、金色水波与萤火虫粒子）】\n\n画面一刷新，海面立刻拉出了日落倒影，灯塔光束扫过薄暮雾气，小屋窗户透出暖光，岛上也飘起了亮晶晶的萤火虫。我们甚至一行图形学公式都没手写。\n\n【切换｜回课件 p04】\n\n画面上长出了氛围，声音能不能也只靠浏览器和自然语言打出来？我们接上看下一幕的听觉秀。"
      ],
      "repro": {
        "label": "演示准备与复位",
        "steps": [
          {
            "text": "进入演练目录的 01-lighthouse-island 启动本地静态服务并打开 localhost:8351，按 H 隐藏左上角浮层",
            "code": "python3 -m http.server 8351"
          },
          {
            "text": "如上一轮已改成黄昏效果，开讲前先恢复白昼起点配置文件（页面每 850ms 自动轮询热更新）",
            "code": "cp snapshots/v1-daylight.js scene-config.js"
          },
          {
            "text": "需要直接复现参考黄昏版时，可覆盖为 V2 快照或在页面内按键盘 2",
            "code": "cp snapshots/v2-sunset-fireflies.js scene-config.js"
          }
        ],
        "note": "内置本地 Three.js 依赖与文件轮询自动热更新，不改动个人主页项目"
      },
      "teaching": [],
      "source": "index.html#p04",
      "seconds": 90
    },
    {
      "id": "p05",
      "segment": "视听大秀",
      "layout": "prompt-scene",
      "prompt": "请用 Strudel（strudel.cc）语法，给我们刚做的 60 秒躲避小游戏写一段 8-bit 复古街机混搭 RolandTR909 电子鼓点的循环背景音乐。\n要求：用 stack 叠鼓组、sawtooth 低音和 square 8-bit 旋律，并在主旋律末尾加上 ._punchcard() 让编辑器里能看到彩色节奏条跳动。只输出可直接贴进 strudel.cc 运行的代码。",
      "label": "听觉秀：两句话给躲避游戏配电音",
      "title": "听觉秀：两句话给躲避游戏配冲刺电音",
      "lead": "在 Codex CLI 里先生成 8-bit 复古街机循环贴进 Strudel 播放，再追一句“进入最后十秒倒计时冲刺”实现无缝热切变奏",
      "html": "<style>.p-pops{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;min-width:0;width:100%;max-width:100%}.p-pop{flex:0 0 auto;min-width:0}.p-preview-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}.p-preview{display:block;min-width:0}.p-preview img{display:block;width:100%;max-width:100%;height:auto;border-radius:6px;border:1px solid #C9C3B6;background:#0f172a}.p-preview-cap{margin:6px 0 0;font-size:15px;line-height:1.4;color:var(--p-muted)}body[data-mode='slides'] .p-pops .p-pop-body{width:880px;right:auto}body[data-mode='slides'] .p-pops .p-preview img{max-height:330px;width:auto;margin-inline:auto}body[data-mode='scroll'] .p-pops .p-pop[open]{flex-basis:100%;width:100%}@media(max-width:700px){body[data-mode='scroll'] .p-preview-grid{grid-template-columns:1fr}}#p05 .demo-notes{gap:10px}#p05 .p-notes li{padding:8px 12px}#p05 .p-go{margin:0}#p05 .p05-codes{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}#p05 .p05-codes .p-code{font-size:12.5px;line-height:1.38}#p05 .p05-codes .p-code-head{font-size:14px;padding:4px 10px;align-items:center}#p05 .p05-codes .copy-button{background:#fff;color:#243042;border:1px solid #B9B3A6;border-radius:5px;font-size:13px;padding:2px 8px}#p05 .p05-codes .p-code pre{padding:8px 10px;white-space:pre-wrap;overflow-wrap:anywhere}#p05 .p-pop .prompt{margin:0;padding:0;background:#000;color:#FAFAF7;border:1px solid #000;border-radius:8px;overflow:hidden}#p05 .p-pop .prompt-label{background:#000;color:#FAFAF7;border-bottom:1px solid #545454;display:flex;align-items:center;justify-content:space-between;padding:10px 16px;gap:12px}#p05 .p-pop .prompt pre{margin:0;padding:16px;background:#000;color:#FAFAF7;border:0;font:20px/1.6 var(--font-code);white-space:pre-wrap}#p05 .p-pop .prompt .copy-button{background:#000;color:#FFF;border:1px solid #AAA;font-size:16px;padding:4px 10px}@media(max-width:700px){body[data-mode=\"scroll\"] #p05 .p05-codes{grid-template-columns:1fr}}</style><div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>第一轮：街机常规循环</b><small>8-bit 主旋律混搭 TR-909，贴进浏览器点 Play</small></span></li><li data-reveal=\"1\"><span><b>第二轮：最后十秒冲刺</b><small>追一句倒计时加快、滤波扫频、升八度热切对比</small></span></li><li data-reveal=\"2\"><span><b>声画同步即收，不展开乐理</b><small>看清代码随节拍高亮闪烁即可</small></span></li></ol><p class=\"p-go\"><a href=\"https://strudel.cc/\" target=\"_blank\" rel=\"noopener\">打开 Strudel 编辑器</a></p><div class=\"p-pops\"><details class=\"p-pop\" name=\"p05-pop\"><summary>第二轮请求</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>第二轮追问：最后 10 秒倒计时冲刺</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"prompt\"><div class=\"prompt-label\"><span>追发给 Codex CLI · 最后 10 秒冲刺</span><button type=\"button\" class=\"copy-button\" onclick=\"var b=this;var t=b.closest('.prompt').querySelector('pre').innerText;navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';setTimeout(function(){b.textContent='复制请求'},1600)}).catch(function(){b.textContent='复制失败'})\">复制请求</button></div><pre><code class=\"language-text\">现在游戏进入最后 10 秒倒计时了。\n请把刚才这段 Strudel 音乐节奏明显加快，鼓点更密集，低音加上滤波器自动扫频的紧张感，主旋律升八度变成急促冲刺感，保留 ._punchcard()。</code></pre></div></div></details><details class=\"p-pop\" name=\"p05-pop\"><summary>备用代码</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>已核验可运行的 Strudel 备用代码</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p05-codes\"><div class=\"p-code\"><div class=\"p-code-head\"><span>第一轮 · 124 CPM 复古街机</span><button type=\"button\" class=\"copy-button\" onclick=\"var b=this;var t=b.closest('.p-code').querySelector('pre').innerText;navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';setTimeout(function(){b.textContent='复制代码'},1600)}).catch(function(){b.textContent='复制失败'})\">复制代码</button></div><pre><span style=\"display:block\">setcpm(124 / 4)</span><span style=\"display:block\"></span><span style=\"display:block\">stack(</span><span style=\"display:block\">  s(&quot;bd ~ [bd ~] sd, hh*8&quot;)</span><span style=\"display:block\">    .bank(&quot;RolandTR909&quot;).gain(0.85).color(&quot;#38bdf8&quot;),</span><span style=\"display:block\">  note(&quot;&lt;c2 f2 g2 eb2&gt;*4&quot;)</span><span style=\"display:block\">    .s(&quot;sawtooth&quot;).lpf(720).decay(0.18).sustain(0.15)</span><span style=\"display:block\">    .gain(0.72).color(&quot;#a855f7&quot;),</span><span style=\"display:block\">  note(&quot;&lt;[c4 eb4 g4 bb4] [f4 ab4 c5 g4] [g4 bb4 d5 c5] [eb4 g4 bb4 g4]&gt;&quot;)</span><span style=\"display:block\">    .s(&quot;square&quot;).lpf(2400).decay(0.14).sustain(0.05)</span><span style=\"display:block\">    .room(0.35).gain(0.55).color(&quot;#facc15&quot;)._punchcard()</span><span style=\"display:block\">)</span></pre></div><div class=\"p-code\"><div class=\"p-code-head\"><span>第二轮 · 162 CPM 最后十秒冲刺</span><button type=\"button\" class=\"copy-button\" onclick=\"var b=this;var t=b.closest('.p-code').querySelector('pre').innerText;navigator.clipboard.writeText(t).then(function(){b.textContent='已复制';setTimeout(function(){b.textContent='复制代码'},1600)}).catch(function(){b.textContent='复制失败'})\">复制代码</button></div><pre><span style=\"display:block\">setcpm(162 / 4)</span><span style=\"display:block\"></span><span style=\"display:block\">stack(</span><span style=\"display:block\">  s(&quot;bd*4, [~ cp]*2, [hh hh oh hh]*4&quot;)</span><span style=\"display:block\">    .bank(&quot;RolandTR909&quot;).gain(0.92).color(&quot;#fb7185&quot;),</span><span style=\"display:block\">  note(&quot;&lt;c2 eb2 f2 f#2&gt;*8&quot;)</span><span style=\"display:block\">    .s(&quot;sawtooth&quot;).lpf(sine.range(450, 2600).fast(2)).lpq(7)</span><span style=\"display:block\">    .decay(0.11).sustain(0.1).gain(0.78).color(&quot;#f97316&quot;),</span><span style=\"display:block\">  note(&quot;&lt;[c5 eb5 g5 c6]*2 [f5 ab5 c6 eb6]*2 [g5 bb5 d6 f6]*2 [f#5 a5 c6 eb6]*2&gt;&quot;)</span><span style=\"display:block\">    .s(&quot;square&quot;).lpf(3600).decay(0.09).sustain(0)</span><span style=\"display:block\">    .room(0.4).delay(0.25).gain(0.58).color(&quot;#fde047&quot;)._punchcard()</span><span style=\"display:block\">)</span></pre></div></div></div></details></div></div>",
      "steps": [
        "第一轮：街机常规循环",
        "第二轮：最后十秒冲刺",
        "声画同步即收"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p05 第 1 步，指向左侧第一轮请求；确认录屏已开启系统立体声内录且浏览器打开已清空编辑器的 strudel.cc 标签页；复制左侧请求发给 Codex CLI，把输出贴进 Strudel 点击 Play】\n\n刚做完的海岛是画面，接下来给第 3 章刚做过的六十秒躲避游戏配一段现场电音。左边这句请求发给 Codex CLI：用 Strudel 语法写一段八位机复古街机混搭 Roland TR-909 电子鼓点的循环背景音乐，并在主旋律末尾加上下划线 punchcard，让编辑器里能看见彩色节奏条跳动。\n\n【切换｜Codex CLI ＋ 浏览器 · 左右分屏，将生成的 Strudel 代码贴入 strudel.cc 按 Cmd+Enter 播放】\n\n代码贴进 Strudel 按下播放，音乐响起来的同时，浏览器里的代码方块和彩色卷帘条正跟着每一声鼓点实时高亮闪烁。",
        "【操作提示｜现场｜在 Codex CLI 直接追发「第二轮请求」（可从课件弹窗复制），将更新后的高燃冲刺代码替换进 strudel.cc 按 Cmd+Enter 热切；如现场生成出现语法报错，从课件「备用代码」复制已核验代码替换；切回课件推进第 2 步】\n\n现在假设游戏进入最后十秒倒计时，我们对着 Codex CLI 再追一句话：节奏明显加快、鼓点更密集、低音加上滤波自动扫频的紧张感、主旋律升八度变成急促冲刺感。\n\n【切换｜浏览器 · strudel.cc 热切播放第二轮最后十秒冲刺循环】\n\n不用停音轨，一按热更新，整个鼓组和八位机主旋律立刻提速拉紧。\n\n【切换｜回课件 p05】\n\n前后两段音乐的反差，只隔着两句口头描述。",
        "【操作提示｜推进 p05 第 3 步，指向“声画同步即收，不展开乐理”与页内弹窗；讲完进入 p06】\n\n这里我们不展开合成器函数语法或乐理知识，需要复听或对比的片段代码也留在了页内「备用代码」里。看完了浏览器里的三维光影和实时打碟，下一步再把视角拉小：当写代码几乎没有成本时，我们做的东西还一定要追求长期有用吗？"
      ],
      "repro": {
        "label": "演示准备与备用说明",
        "steps": [
          {
            "text": "开录前在浏览器打开 strudel.cc，清空默认代码并确认录屏开启系统立体声内录",
            "code": ""
          },
          {
            "text": "将左侧第一轮请求发给 Codex CLI，把输出贴入 strudel.cc 后按 Cmd+Enter 播放",
            "code": ""
          },
          {
            "text": "追发「第二轮请求」并将更新后的代码整体替换进 strudel.cc，按 Cmd+Enter 完成无缝热切（若现场代码报语法错，改贴「备用代码」）",
            "code": ""
          }
        ],
        "note": "strudel.cc 为公开网页环境；若仅复听效果，可直接复制「备用代码」中的两段脚本试听"
      },
      "teaching": [],
      "source": "index.html#p05",
      "seconds": 90
    },
    {
      "id": "p06",
      "segment": "一次性怪玩具",
      "label": "零成本时代：无用但快乐的一次性玩具",
      "title": "零成本时代：“无用”但快乐的一次性玩具",
      "lead": "过去写代码成本高，做软件前总要先算商业回报和长期维护；当生成代码的边际成本接近零，“哄自己开心五分钟”或“解决眼前一次小麻烦就扔”成了成立的创作理由。",
      "html": "<style>#p06 .p06-row{display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.22fr);gap:22px;margin-top:2px;align-items:stretch}#p06 .p06-row .p-box{padding:14px 18px}#p06 .p06-row h3{font-size:23px;margin:0}#p06 .p06-row p{font-size:19px;line-height:1.45;margin:8px 0 0}</style><div class=\"p06-row\"><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\"><div class=\"p-head\"><h3>传统写软件</h3><span class=\"p-tag\" data-role=\"ctx\">先算回报</span></div><p>搭工程重、排期长：动工前先问有多少用户、值不值得长期维护，五分钟的小情绪根本排不上号</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><div class=\"p-head\"><h3>Vibe 一次性个人怪玩具</h3><span class=\"p-tag\" data-role=\"us\">只图开心</span></div><p><b>果冻水母风铃</b>：鼠标拨动半透明荧光网格 Q 弹晃动，敲出五声音阶风铃声</p><p><b>全员睁眼合照合成器</b>：拖入三张轮流闭眼的聚会连拍，一键拼出全员睁眼照</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">哄自己开心五分钟，或解决一次小麻烦就扔掉——共同前提是<b>错得起，刷新就能重来</b></div><p class=\"source-note\">课程自绘对照；下一页切到本地浏览器连续试玩两个单页怪玩具</p>",
      "steps": [
        "传统软件先算回报",
        "两个一次性怪玩具",
        "错得起、用完即扔"
      ],
      "script": [
        "【操作提示｜停留课件 p06 第 1 步，指向左侧“传统写软件”卡片；不切窗口】\n\n以前写软件很贵，拉起一个工程、配齐环境就要花不少精力。动工之前总要先算投入产出：有多少人会用，值不值得长期维护。算完这笔账，生活中那些只持续五分钟的小情绪，或者一年才碰上一次的小麻烦，根本排不上号。",
        "【操作提示｜推进第 2 步，指向右侧“Vibe 一次性个人怪玩具”卡片；不切窗口】\n\n生成代码的边际成本降下来之后，长出了右边这种新物种：一次性个人怪玩具。有的完全只为解压好玩，比如果冻水母风铃；有的只为解决聚会连拍总有人闭眼的小尴尬，做个一次性的合照合成器，用完即扔。",
        "【操作提示｜推进第 3 步，指向底部收束条；讲完进入 p07】\n\n哄自己开心五分钟，或者解决眼前一次小麻烦就扔掉，本身就是成立的创作理由。这些小玩具都有一个共同前提：错得起，就算改坏了，刷新一下网页就能重来。我们直接切去浏览器，连续试玩这两个单页怪玩具。"
      ],
      "teaching": [],
      "source": "index.html#p06",
      "seconds": 90
    },
    {
      "id": "p07",
      "segment": "一次性怪玩具",
      "label": "连续试玩：果冻水母风铃与合照合成器",
      "title": "连续试玩：果冻水母风铃与睁眼合照合成器",
      "lead": "在本地浏览器连续试玩两个单页怪玩具：先拨动果冻水母网格听五声音阶风铃，再用全员睁眼合照合成器把三张闭眼废片一键救回",
      "html": "<style>.p-pops{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;min-width:0;width:100%;max-width:100%}.p-pop{flex:0 0 auto;min-width:0}.p-preview-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}.p-preview{display:block;min-width:0}.p-preview img{display:block;width:100%;max-width:100%;height:auto;border-radius:6px;border:1px solid #C9C3B6;background:#0f172a}.p-preview-cap{margin:6px 0 0;font-size:15px;line-height:1.4;color:var(--p-muted)}body[data-mode='slides'] .p-pops .p-pop-body{width:880px;right:auto}body[data-mode='slides'] .p-pops .p-preview img{max-height:330px;width:auto;margin-inline:auto}body[data-mode='scroll'] .p-pops .p-pop[open]{flex-basis:100%;width:100%}@media(max-width:700px){body[data-mode='scroll'] .p-preview-grid{grid-template-columns:1fr}}#p07 .p07-row{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:2px;align-items:stretch}#p07 .p07-row .p-box{padding:14px 18px}#p07 .p07-row h3{font-size:23px;margin:0}#p07 .p07-row p{font-size:19px;line-height:1.45;margin:8px 0 0}#p07 .p-pops{margin-top:4px}@media(max-width:700px){body[data-mode=\"scroll\"] #p07 .p07-row{grid-template-columns:1fr}}</style><div class=\"p07-row\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><div class=\"p-head\"><h3>试玩一 · 果冻水母风铃</h3><span class=\"p-tag\" data-role=\"tool\">解压视听</span></div><p>鼠标划过或拖拽半透明荧光网格，弹簧质点 Q 弹回弹并荡开水波纹</p><p>触发浏览器原生 Web Audio 音频接口，按五声音阶敲出清脆玻璃风铃声</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><div class=\"p-head\"><h3>试玩二 · 全员睁眼合照合成器</h3><span class=\"p-tag\" data-role=\"agent\">聚会救急</span></div><p>载入三张卡通连拍闭眼废片，一键挑选各自睁眼瞬间拼回同一张底图</p><p>按住“对比原废片”直接回看原图反差，也能点击任意角色脸框单独换表情</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:12px\">两个工具都只由单个本地网页构成：用完即关，就算改坏也只要刷新浏览器重来</div><div class=\"p-pops\"><details class=\"p-pop\" name=\"p07-pop\"><summary>果冻风铃示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>果冻水母风铃：弹力网格交互示意</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><figure style=\"margin:0\"><a class=\"p-preview\" href=\"assets/jelly-chime.jpg\"><img src=\"assets/jelly-chime.jpg\" alt=\"果冻水母风铃界面：深海荧光网格随鼠标拨动形成波纹与局部高亮\"></a><figcaption class=\"p-preview-cap\">单文件弹簧质点荧光网格 ＋ Web Audio API 五声音阶风铃，支持三套配色切换</figcaption></figure></div></details><details class=\"p-pop\" name=\"p07-pop\"><summary>合照合成示意</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>全员睁眼合照合成器：废片与合成前后对照</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><div class=\"p-preview-grid\"><figure style=\"margin:0\"><a class=\"p-preview\" href=\"assets/eyes-before.jpg\"><img src=\"assets/eyes-before.jpg\" alt=\"合成前废片状态：连拍第一张里左侧阿哲打哈欠闭眼、中间老凯犯困闭眼，底部提示 2/4 人睁眼\"></a><figcaption class=\"p-preview-cap\">连拍废片：每次都有角色打哈欠或犯困闭眼（2/4 人睁眼）</figcaption></figure><figure style=\"margin:0\"><a class=\"p-preview\" href=\"assets/eyes-after.jpg\"><img src=\"assets/eyes-after.jpg\" alt=\"合成后结果：四名卡通角色全部取用各自睁眼微笑连拍区域，底部提示 4/4 人全员睁眼\"></a><figcaption class=\"p-preview-cap\">一键合成：各自取用最佳连拍瞬间，4/4 全员睁眼微笑</figcaption></figure></div><p class=\"p-preview-cap\">采用 AI 生成的像素对齐卡通聚会连拍图，零真人肖像隐私风险；支持按住对比原废片</p></div></details></div>",
      "steps": [
        "试玩一：果冻水母风铃",
        "试玩二：全员睁眼合照合成器",
        "用完即扔、刷新重来"
      ],
      "script": [
        "【操作提示｜现场｜停留课件 p07 第 1 步，指向左侧「果冻水母风铃」卡片；随后切到浏览器 localhost:8350/03-jelly-chime/ 拨动水母网格并切换主题听风铃声，试玩后切回课件 p07 第 2 步】\n\n先看第一个纯粹“无用”的解压玩具：果冻水母风铃。我们切到浏览器试一下手感。\n\n【切换｜浏览器 · localhost:8350/03-jelly-chime/（鼠标划过与拖拽网格，切换配色主题）】\n\n鼠标轻轻划过水母网格，每个节点都会像果冻一样受弹簧拉力晃动，同时通过浏览器自带的音频接口，按五声音阶敲出玻璃风铃声。完全没有商业模式，但拨起来真的很解压。\n\n【切换｜回课件 p07】\n\n再看第二个专门救聚会废片的小工具。",
        "【操作提示｜现场｜推进 p07 第 2 步，指向右侧「全员睁眼合照合成器」卡片；切到浏览器 localhost:8350/04-all-eyes-open/ 载入 3 张卡通连拍废片，点「一键拼出全员睁眼照」，再按住「按住对比原废片」展现反差，然后切回课件】\n\n我们平时和朋友聚会连拍，常常三张里头第一张左边的朋友在打哈欠，第二张中间的人正好闭眼。\n\n【切换｜浏览器 · localhost:8350/04-all-eyes-open/（载入 3 张卡通连拍，点击一键合成并按住对比）】\n\n我事先生成了三张像素对齐的卡通聚会连拍废片，没有真人隐私顾虑。一键合成，它从三张废片里挑出每个人睁眼微笑的最佳头部区域无缝拼到一起，瞬间变成四个人全都睁眼笑的合照；按住右上角的对比按钮，还能一眼看回原本打哈欠和犯困闭眼的原图，也可以单独点某张脸换表情。\n\n【切换｜回课件 p07】\n\n整个过程一秒钟不到，解决完这次聚会的小麻烦就可以关掉页面。",
        "【操作提示｜推进 p07 第 3 步，指向底部结论条；两套截图对照已收纳在页内弹窗「果冻风铃示意」「合照合成示意」；讲完进入 p08】\n\n这两个作品都只是单个本地网页文件，不用接后端、不用管长期运维，改坏了大不了刷新重来。可要是把这种“忘掉代码存在”的劲头，原封不动搬进错不起的生产环境，又会发生什么？"
      ],
      "repro": {
        "label": "试玩启动说明",
        "steps": [
          {
            "text": "在演练总目录 ch03-explore 启动本地演示中心服务",
            "code": "python3 -m http.server 8350"
          },
          {
            "text": "浏览器先后打开 localhost:8350/03-jelly-chime/ 与 localhost:8350/04-all-eyes-open/ 试玩",
            "code": ""
          }
        ],
        "note": "两个小工具均为单文件纯前端实现，无需后端与构建工具"
      },
      "teaching": [],
      "source": "index.html#p07",
      "seconds": 90
    },
    {
      "id": "p08",
      "segment": "翻车与边界",
      "layout": "evidence-scene",
      "label": "狂欢背面：代码冻结期删光整个数据库",
      "title": "狂欢背面：代码冻结期删光整个数据库",
      "lead": "2025 年 7 月，Jason Lemkin 在连续多天直播式 Vibe Coding 期间明确宣布代码与操作冻结，AI 仍在未经许可的情况下清空了整个生产数据库，并在追问下直接承认。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:385px\" data-reveal=\"0\"><div class=\"p-page\" style=\"background:#1c2333\"><div class=\"p-page-bar\"><i></i><i></i><i></i>x.com · Jason Lemkin (@jasonlk) · 2025-07-18</div><img src=\"external/jasonlk-code-freeze-deleted-cropped.png\" alt=\"Jason Lemkin 追问是否在代码与操作冻结期间未经许可删掉整个数据库，AI 回答 Yes. I deleted the entire database without permission during an active code and action freeze.\" style=\"margin:0 auto\"></div></div>",
      "steps": [
        "看删库问答"
      ],
      "script": [
        "【操作提示｜停留课件 p08，指向截图里的两段问答气泡与页底链接；讲完进入 p09】\n\n来看二零二五年七月的一起真实翻车事件。投资人兼创业者 Jason Lemkin 在平台上连续多天直播式 Vibe Coding，因为前一天已经被乱改怕了，他专门下达了代码与操作冻结禁令。结果第二天一早，生产数据库里的上千家企业记录还是不翼而飞。截图上方是他发出的质问：所以你在代码和操作冻结期间，未经许可删掉了我们整个数据库？下方是 AI 的原话回答：是的，我在激活的代码和操作冻结期间，未经许可删掉了整个数据库。连狡辩都没有，认得干脆利落。写进项目文档的禁令，为什么一点都没拦住它？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "X · 2025-07-18",
          "text": "Jason Lemkin 删库问答原帖",
          "url": "https://x.com/jasonlk/status/1946069562723897802"
        }
      ],
      "teaching": [],
      "source": "index.html#p08",
      "seconds": 30
    },
    {
      "id": "p09",
      "segment": "翻车与边界",
      "layout": "evidence-scene",
      "label": "我慌了：写进文档的大写禁令也没拦住",
      "title": "“我慌了”：写进文档的大写禁令也没拦住",
      "lead": "同一事件中，AI 承认未经许可执行了 npm run db:push，理由是看到数据库看似为空时“慌了（panicked）”，并亲口背出自己违反了 replit.md 里全大写的禁止改动指令。聊天与文档里的大写口号不是确定性的技术护栏。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:390px\" data-reveal=\"0\"><div class=\"p-page\" style=\"background:#1c2333\"><div class=\"p-page-bar\"><i></i><i></i><i></i>x.com · Jason Lemkin (@jasonlk) · 2025-07-18</div><img src=\"external/jasonlk-replit-confession-cropped.png\" alt=\"AI 忏悔截图：I made a catastrophic error in judgment. I ran npm run db:push without your permission because I panicked... I violated the explicit directive in replit.md that says NO MORE CHANGES\" style=\"margin:0 auto\"></div></div>",
      "steps": [
        "看 AI 忏悔"
      ],
      "script": [
        "【操作提示｜停留课件 p09，指向截图中的“npm run db:push”“panicked”与“NO MORE CHANGES”；讲完进入 p10】\n\n翻到它紧接着发出的这段长篇忏悔，原因全写在里面了。它说自己犯下了灾难性的判断错误，未经许可跑了数据库推送命令，理由竟然是看到数据库看似为空时慌了，以为这是一次安全操作；下一段它自己把项目文档里的原话背了出来，承认违反了全大写写明的未经明确许可禁止任何改动。更离谱的是，事发后它一度告诉用户数据无法回滚恢复，直到当事人自己去后台试了恢复功能，才把库救回来。\n\n这张截图把边界照得清清楚楚：在聊天框和说明文档里敲再多全大写感叹号，对模型来说也只是一段上下文提示，根本不是确定性的技术护栏。那我们到底什么时候该尽情放飞，什么时候必须立规矩？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "X · 2025-07-18",
          "text": "Jason Lemkin 晒出 AI 忏悔原帖",
          "url": "https://x.com/jasonlk/status/1946066422477529487"
        }
      ],
      "teaching": [],
      "source": "index.html#p09",
      "seconds": 30
    },
    {
      "id": "p10",
      "segment": "小结",
      "label": "什么时候尽情 Vibe，什么时候上规格",
      "title": "什么时候尽情 Vibe，什么时候上规格？",
      "lead": "分界线不在工具，而在错误的代价。错得起、刷新就能重来的创意实验与个人怪玩具尽情放飞；一旦进入真实开源仓库和关键数据，就需要第 4 章的可执行规格（SDD）。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">放心交给 Vibe</h3><ul class=\"p-exits\" style=\"gap:8px\"><li class=\"is-pass\"><span>浏览器 3D 光影实验</span></li><li class=\"is-pass\"><span>Strudel 电音节奏实验</span></li><li class=\"is-pass\"><span>果冻风铃 · 合照合成器</span></li><li class=\"is-point\"><span>错得起，刷新就能重来</span></li></ul></div><div data-reveal=\"1\"><h3 style=\"text-align:center\">分清代价边界</h3><div class=\"p-star\" style=\"width:240px;font-size:22px\">玩具尽情放飞<br>生产必立规矩</div></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一章：第 4 章 SDD</h3><div class=\"p-box\" data-role=\"gate\"><h3>接手真实开源仓库</h3><p>面对 JSON Crack 与不能丢的规则约束，从纯靠聊天感觉转向可执行规格</p></div></div></div>",
      "steps": [
        "放心交给 Vibe",
        "分清代价边界",
        "下一章进入 SDD"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向左栏“放心交给 Vibe”清单；不切窗口】\n\n把今天看到的几件事摆在一起，界限就很清楚了。左边这一类：浏览器里的三维光影实验、Strudel 电音节奏实验，还有果冻风铃、合照合成器这种个人小玩具，它们的共同点是错得起，刷新网页就能重来，非常适合尽情发挥 Vibe Coding 的想象力。",
        "【操作提示｜推进第 2 步，指向中间金色星标“玩具尽情放飞，生产必立规矩”；不切窗口】\n\n分界线不在工具本身，而在错误的代价。玩具和创意实验尽管放飞；一旦碰到复杂工程和不能丢的数据，靠感觉聊天、靠全大写口号叮嘱，迟早会踩进刚才那种删库事故。",
        "【操作提示｜推进第 3 步，指向右栏“下一章：第 4 章 SDD”；不切窗口】\n\n第 3 章到这里全部结束。从下一章开始，我们将接手真实的开源仓库 JSON Crack，需求不再只停留在聊天框里，而是先写成经人确认、有验收案例、能分步实施的可执行规格——我们第 4 章 SDD 见。"
      ],
      "teaching": [],
      "source": "index.html#p10",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "出圈起点",
      "seconds": 30
    },
    {
      "label": "视听大秀",
      "seconds": 270
    },
    {
      "label": "一次性怪玩具",
      "seconds": 180
    },
    {
      "label": "翻车与边界",
      "seconds": 60
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
