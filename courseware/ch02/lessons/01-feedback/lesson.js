window.lesson = {
  "title": "只说了一句话，模型收到了什么",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.01",
  "summary": "用 claude-tap 打开 Codex 实际发出的请求：只说一句话，模型收到的远不止这句话；这些加在一起就是 context，换权限、换环境，它就不同。",
  "scenes": [
    {
      "id": "p01",
      "segment": "开始这一章",
      "layout": "lesson-cover",
      "label": "这一章做什么",
      "title": "补完整，发布上线",
      "lead": "把个人主页 v0 补完整、发布上线，一路打开请求看清 context",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>2.1</b>看请求</li><li><b>2.2</b>补经历</li><li><b>2.3</b>审改动</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>只是重构？</li></ol><div class=\"p-chain\" data-reveal=\"1\" style=\"margin-top:12px;font-size:20px\"><span>补完整</span><i>→</i><span>发布上线</span><i>·</i><span>一路看清 context</span></div><style>.x-p01 span{padding:6px 10px;font-size:19px}.x-p01 .is-head span{font-size:16px}</style><div class=\"p-matrix x-p01\" data-reveal=\"2\" style=\"margin-top:10px;grid-template-columns:minmax(0,.35fr) minmax(0,1.2fr) minmax(0,1.6fr)\"><div class=\"is-head\"><span>节</span><span>项目动作</span><span>用请求记录回答</span></div><div class=\"is-key\"><span>2.1</span><span>用 claude-tap 启动 Codex</span><span>只说一句话，模型收到了什么？</span></div><div><span>2.2</span><span>补上项目经历</span><span>多聊几轮，context 怎么变长？</span></div><div><span>2.3</span><span>审查改动，决定要不要接受</span><span>它是根据哪些内容改的？</span></div><div><span>2.4</span><span>发布到 GitHub Pages</span><span>Codex 怎样调用 gh？</span></div><div><span>2.5</span><span>分拣“只是重构”的改动</span><span>没有测试，它能证明行为没变吗？</span></div></div>",
      "repro": {
        "label": "从这一章开始？",
        "steps": [
          {
            "text": "先在自己的仓库里保存当前的工作（没有改动时会提示无可提交，不影响）",
            "code": "git add -A && git commit -m \"保存：开始第 2 章之前\""
          },
          {
            "text": "在仓库根目录启动 Codex，粘贴这段 Prompt",
            "code": "先只读检查，不修改我的项目文件。\n课程第 2 章的参考起点在 https://github.com/prompt-to-harness/course-starter.git 的 ch02-start-v1 标签。\n请把它克隆到临时目录（不要放进我的项目），只用来对照。\n请检查我的项目是否满足第 2 章开始前的前提：\n1. 有能 npm run build 的首页应用；\n2. 首页有首屏和项目区，“查看项目”跳到本页项目区；\n3. 项目卡是否跳转，有一条记录下来的决定。\n逐条说明：已满足 / 缺少 / 与参考不同但不影响，并给出依据。\n我的个人内容（姓名、简介、项目、已有的决定）一律保留，\n不要换成参考里的示例文字。\n列出建议补上的改动，等我确认后再改。"
          },
          {
            "text": "Codex 可能连续申请几次：联网克隆参考起点、在临时目录里复制项目试构建、清理临时目录。每次看清整条命令作用在哪个目录，只动临时目录的再选 Yes, proceed；不要选“以后不再问”。只有写明要联网的那次申请同意后才能联网",
            "code": ""
          },
          {
            "text": "读它的逐条判断，只确认补齐前提所必需的改动",
            "code": "只做补齐第 2 章前提所必需的改动，可选的建议先不做；我的个人内容和已有的决定保持不变。改完告诉我需要我运行哪些命令。"
          },
          {
            "text": "装依赖、构建，然后在浏览器里看一遍首屏、项目区和“查看项目”",
            "code": "npm install && npm run build && npm run preview"
          },
          {
            "text": "让 Codex 在回复里说明这次补齐的情况，不新建记录文件；你逐句核对，只留下确认过的内容",
            "code": "在回复里说明这次补齐：对照了哪个参考起点、补了什么、保留了什么。不要新建记录文件，不要写本机路径和用户名。"
          },
          {
            "text": "核对无误后提交，把确认过的补齐情况写进提交说明的正文",
            "code": "git add -A && git commit -m \"对照 ch02-start-v1 补齐第 2 章前提\" -m \"补了什么、保留了什么（换成你核对过的内容）\""
          }
        ],
        "note": "没做完第 1 章、或想直接从第 2 章开始时用；已经做完的跳过。参考起点是 course-starter 的 ch02-start-v1 标签，只放在临时目录里对照，不进你的仓库。不想用 Codex 时，可在 GitHub 上下载这个标签的 ZIP 对照。讲师 2026-10-06 用三种起点各试两次，Codex 都能判断对；笼统地说“按你的建议执行”时，它会连可选建议一起做，所以要只确认必需项。"
      },
      "steps": [
        "本章地图",
        "一句话主线",
        "五节各做什么"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向章节地图上的 2.1，再指页面上方“从这一章开始？”入口，只点位置不展开其中步骤；不切工具窗口】\n\n第 1 章结束时，我们做出了个人主页 v0：能启动、能构建，改动也能解释清楚。还没做完第 1 章也没关系：点开这一页上方的“从这一章开始？”，按步骤让 Codex 对照课程的参考起点补齐，再回来继续。",
        "【操作提示｜推进第 2 步，指向“补完整 → 发布上线 · 一路看清 context”一行；留在课件】\n\n这一章做两件事：把个人主页补完整，再发布上线，得到一个公开的网址。一路上，我们会打开 Codex 实际发给模型的请求，看清 context 到底长什么样、怎么变。第 1 章讲的是 context 里该放什么，这一章看它实际的样子。",
        "【操作提示｜推进第 3 步，从上到下指五行，每行先指项目动作，再指右列的问题，最后停在高亮的 2.1 行；留在课件，下一页再切浏览器】\n\n五节，每节做一个项目动作，同时用请求记录回答一个问题。2.1 用 claude-tap 启动 Codex，看只说一句话时模型收到了什么；2.2 补上项目经历，看对话多了 context 怎么变长；2.3 审查改动，看它是根据哪些内容改的；2.4 发布上线，看 Codex 怎样调用 gh；2.5 回头看一次“只是重构”，没有测试，它能不能证明行为没变。先从 2.1 开始。不过在打开请求之前，先把昨天的页面重新跑起来。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "本章只有这一处开篇地图；后续各节开篇沿用同一张地图，只移动当前位置。直接交代目标，不铺情节。"
        }
      ],
      "source": "index.html#p01",
      "seconds": 90
    },
    {
      "id": "p02",
      "segment": "开始这一章",
      "label": "昨天的页面去哪了",
      "title": "昨天的页面，怎么打不开了？",
      "lead": "隔了一天回到项目，本地地址打不开。在第 1 章做出个人主页 v0 的那个项目目录里重新运行 npm run dev，页面就回来了。为什么要重新启动，下一节再讲。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">浏览器</span><div class=\"p-term\" style=\"margin-top:10px\"><div class=\"err\">localhost 拒绝连接</div></div></div><div class=\"p-join\" data-reveal=\"1\"><span>终端</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">重新启动</span><div class=\"p-term\" data-copy=\"npm run dev\" style=\"margin-top:10px\"><div class=\"dim\">$ npm run dev</div><div class=\"ok\">Local: http://localhost:5173/</div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">在自己的项目目录里，重新运行 <b>npm run dev</b></div>",
      "steps": [
        "打不开",
        "重新启动"
      ],
      "script": [
        "【操作提示｜课件 p02 第 1 步 → 切 Chrome 新开标签页，访问第 1 章首页的本地地址（画面示例 http://localhost:5173/，以第 1 章实际 Vite 输出为准）。录前确认开发服务器确已停止，如实展示拒绝连接页；保留课件标签页】\n\n隔了一天回到项目，我们先打开昨天的本地地址。浏览器说拒绝连接，页面打不开。代码明明都还在，这是怎么回事？",
        "【操作提示｜回课件推进第 2 步 → 切 Terminal 新开标签页“首页开发服务”，进入第 1 章做出个人主页 v0 的练习项目根目录（不是课程原始起点），运行 npm run dev 并保持运行；用实际打印的 Local 地址刷新刚才的 Chrome 标签页，页面恢复后回课件 p06-tap。报找不到 package.json 时先核对目录】\n\n回到第 1 章做出个人主页 v0 的那个项目目录，重新运行 npm run dev，页面就回来了。注意是我们自己的项目，不是课程刚发下来的原始起点，那里还没有应用，npm run dev 会报找不到 package.json。为什么要重新启动，下一节再讲。大家跟做时也先做这一步，把页面打开。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "开发服务器的端口以学员自己的 Vite 输出为准，画面上的 5173 是常见默认值。这里只操作，为什么要重启留到 2.2 p21。"
        }
      ],
      "source": "index.html#p02",
      "seconds": 60
    },
    {
      "id": "p06-tap",
      "segment": "打开请求",
      "label": "用 claude-tap 启动 Codex",
      "title": "怎样看到 Codex 实际发出的请求？",
      "lead": "claude-tap 是一个开源的本地代理，夹在 Codex 和模型服务之间，把每一次请求记录下来；启动之后，Codex 的用法和平时一样。它会经手 API 密钥，也只看得到经过它的内容。这一节由讲师演示，自己运行是选做。",
      "html": "<div class=\"p-term\" data-copy=\"uvx claude-tap --tap-client codex --tap-target https://api.minimax.cn/v1\" data-reveal=\"0\"><div class=\"dim\">$ uvx claude-tap --tap-client codex \\</div><div class=\"dim\">    --tap-target https://api.minimax.cn/v1</div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:16px\"><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>本地代理</h3><p>夹在 Codex 和模型服务之间</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>会经手 API 密钥</h3><p>请求连同鉴权信息都从它这里过</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>只看得到经过它的</h3><p>Codex 发出的请求和模型的返回</p></div></div><ol class=\"p-watch is-row\" style=\"margin-top:16px\"><li data-reveal=\"2\">切到终端<small>用它启动 Codex</small></li><li data-reveal=\"3\">打开查看器<small>每次请求都被记下来</small></li></ol>",
      "refs": [
        {
          "kind": "live",
          "group": "项目主页",
          "text": "liaohch3/claude-tap",
          "url": "https://github.com/liaohch3/claude-tap"
        }
      ],
      "steps": [
        "启动方式",
        "三条说明",
        "启动 Codex",
        "打开查看器"
      ],
      "script": [
        "【操作提示｜停留课件 p06-tap 第 1 步，指向画面上的 uvx claude-tap 命令；不切窗口】\n\n这一章要一路看 Codex 实际发给模型的内容，所以这次换一种方式启动 Codex。画面上是 claude-tap 的启动命令。claude-tap 是一个开源工具，项目主页的链接放在页面最下面。",
        "【操作提示｜推进第 2 步，依次指三张卡片；留在课件】\n\n先说清它是什么。第一，它是一个本地代理，夹在 Codex 和模型服务之间，把每一次请求记下来。第二，正因为夹在中间，它会经手我们的 API 密钥，请求连同鉴权信息都从它这里过，所以画面上不会出现配置文件和密钥。第三，它只看得到经过它的内容，也就是 Codex 发出的请求和模型的返回。这一节由我来演示，大家自己运行算选做，不计入验收。",
        "【操作提示｜推进第 3 步 → 切 Terminal 新开标签页“claude-tap”，在练习项目根目录运行画面命令（录制用隔离 HOME，做法见讲师提示）；Codex 启动后停在输入处，本页不提交 Prompt。画面不出现 config.toml 或完整密钥】\n\n切到终端，在项目目录运行这条命令。它会替我们启动 Codex，启动之后，Codex 用起来和平时完全一样。",
        "【操作提示｜推进第 4 步；查看器地址以 claude-tap 实际输出为准，先指出地址，本页不打开，等 p08 的回答结束再看；随后进入 p08】\n\nclaude-tap 还会给出一个本地查看器的地址。等 Codex 回答完，打开它，就能一条一条看到刚才的请求。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "画面命令已于 2026-10-02 在 Codex 0.160.0 + MiniMax 自定义 provider 下实测，trace 写入 ~/.local/share/claude-tap/traces.sqlite3。需要先装好 uv。命令以录制时的 claude-tap 版本为准；录制用隔离 HOME 启动（做法见 tools/clean-codex.sh 的 --tap），查看器地址以工具输出为准。"
        },
        {
          "title": "讲师提示",
          "text": "API 密钥会经过本地代理；claude-tap 导出与存储时只保留鉴权头前缀。画面上不要出现 config.toml 或完整密钥。学员自己运行算选做，不计入验收，不另做排障文档。"
        }
      ],
      "source": "index.html#p06-tap",
      "seconds": 120
    },
    {
      "id": "p08",
      "segment": "打开请求",
      "layout": "prompt-scene",
      "prompt": "你好，用一句话介绍你能帮我做什么。",
      "label": "只说了一句话",
      "title": "只说了一句话，模型收到了什么？",
      "lead": "先发一句和项目无关的话，再打开查看器，看 Codex 为这句话实际发出的请求。我们写的那句只占很小一部分，排在最末尾。讲师用的是 Codex 接 MiniMax 模型，换模型、换配置，请求的内容会有差别。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:.8fr auto 1.3fr\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">我们写的</span><p class=\"p-big\">一句话</p><p class=\"p-sub\">17 个字</p><p class=\"p-sub\" data-reveal=\"2\"><b>排在整份请求的最末尾</b></p></div><div class=\"p-join\" data-reveal=\"1\"><span>Codex 发出</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">这一次请求</span><p class=\"p-big\">远不止这一句</p><p class=\"p-sub\">约 9 千 token · 约 3.8 万字符</p></div></div><p class=\"source-note\">数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash-Preview，codex exec）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "只发一句话",
        "实际发出",
        "我们那句在末尾"
      ],
      "script": [
        "【操作提示｜课件 p08 第 1 步 → 切 Terminal“claude-tap”标签页，在 Codex 里粘贴画面上的第一步 Prompt 并提交，等回答结束】\n\n先发一句和项目完全无关的话：你好，用一句话介绍你能帮我做什么。它不需要读任何文件，我们只看这一句话发出去，模型收到了什么。",
        "【操作提示｜推进第 2 步 → 切 Chrome 打开 claude-tap 查看器（地址以终端输出为准），打开这一次请求，指向 token 数和字符数；画面不露本机路径和用户名。数字按录制当次的记录读】\n\n回答结束了，打开查看器，看这一次请求。我们只写了十几个字，Codex 发出去的请求却有大约九千 token，三万多字符。这是讲师的一次运行，换个版本、换个模型，数字都会变，但量级差不多。",
        "【操作提示｜推进第 3 步，在查看器里滚到请求最末尾，指向我们那句话；再回课件指“排在整份请求的最末尾”】\n\n我们那句话在哪？一直滚到最后才看到它，排在整份请求的最末尾。前面这么多内容，都不是我们写的。它们是什么？我们把这份请求拆开看。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在 p06-tap 启动的 Codex 中提交这句话，等回答结束，打开查看器里这一次请求。录制前确认这一句在冻结版本下不会触发读文件；若触发，换成更短的问候并记下原因。"
        },
        {
          "title": "数字来源",
          "text": "2026-10-20 实测：1 次请求，没有工具调用；input_tokens 9042（模型服务返回的计数），各块字符合计约 3.77 万：系统指令 16979、工具定义 17767、Skills 列表 1985、权限说明 341、环境信息 642、我们的话 17。Codex 0.163.0 对这个模型名报“找不到模型元数据，使用后备值”，录制版本和模型名定下后复测一次，有出入按实际记录替换。旧版“34 字读标题任务、约 1.15 万 token”来自另一个 Prompt，不沿用。"
        },
        {
          "title": "讲师提示",
          "text": "画面截图需检查本机路径、用户名和个人 Skills 名称。这一页先让学员看到“远不止这句话”，不急着命名。"
        }
      ],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "逐块拆开",
      "label": "拆开这份请求",
      "title": "拆开这份请求：六块内容",
      "lead": "Harness 是包在模型外面的那一层程序，Codex 就是一个 Harness：它把系统指令、工具和这一次的情况组装成请求。这份请求可以拆成六块：系统指令、工具定义、Skills 列表、环境信息、权限说明，最后才是我们写的话。下面几页逐块回答“如果没有它会怎样”。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash-Preview，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<style>.x-stack{display:flex;gap:6px;height:64px}.x-stack>div{position:relative;border:2.5px solid var(--c);background:var(--cl);border-radius:10px 8px 11px 9px;display:flex;align-items:center;justify-content:center;font-size:19px;color:var(--ct);min-width:14px;overflow:hidden;white-space:nowrap}.x-key{display:flex;justify-content:flex-end;align-items:center;gap:18px;margin:8px 0 0;font-size:18px;color:var(--p-muted)}.x-key i{display:inline-block;width:9px;height:24px;margin-right:7px;vertical-align:-6px;border:2.5px solid var(--c);background:var(--cl);border-radius:4px 3px 4px 3px}@media(max-width:600px){body[data-mode=scroll] .x-stack{height:96px}body[data-mode=scroll] .x-stack>div{white-space:normal;font-size:14px;line-height:1.25;text-align:center;padding:2px}}</style><div class=\"p-grid\" style=\"--n:3;gap:12px\" data-reveal=\"0\"><div class=\"p-box is-soft\" data-role=\"agent\"><h3>系统指令</h3><p>怎么做事</p></div><div class=\"p-box is-soft\" data-role=\"tool\"><h3>工具</h3><p>能做什么</p></div><div class=\"p-box is-soft\" data-role=\"ctx\"><h3>本次情况</h3><p>目录、权限、我们的话</p></div></div><p class=\"p-sub\" data-reveal=\"0\" style=\"margin:6px 0 14px\">Codex 这层 Harness 组装请求时管的三样</p><div class=\"x-stack\" data-reveal=\"1\"><div data-role=\"agent\" style=\"flex:17\">系统指令 ≈1.7 万字符</div><div data-role=\"tool\" style=\"flex:18\">工具定义 9 个 ≈1.8 万</div><div data-role=\"ctx\" style=\"flex:2.2\" title=\"Skills 列表\"></div><div data-role=\"ink\" style=\"flex:1.2\" title=\"环境信息\"></div><div data-role=\"gate\" style=\"flex:1\" title=\"权限说明\"></div><div data-role=\"us\" style=\"flex:.6\" title=\"我们的话\"></div></div><p class=\"x-key\" data-reveal=\"1\">右侧小格：<span data-role=\"ctx\"><i></i>Skills 列表 ≈2 千</span><span data-role=\"ink\"><i></i>环境信息</span><span data-role=\"gate\"><i></i>权限说明</span><span data-role=\"us\"><i></i>我们的话</span></p><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:16px\">我们写的，只是<b>最右边最小的一格</b></div><p class=\"source-note\">下排是讲师用课程基线的一次记录，宽度大致对应大小；右侧小格依次是 Skills 列表（约 2 千字符）、环境信息（约 640 字符）、权限说明（约 340 字符）和我们的话（17 个字）。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash-Preview，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "Harness 管的三样",
        "逐块标注",
        "我们那一格"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，先指三个框说清它们管什么，再说出“Harness”这个名字；不切查看器】\n\n第 1 章我们说过，Agent 把模型、当前可用的信息和工具组织起来，让任务一轮一轮往前推进。包在模型外面、把这些组装成请求、再去执行工具的那一层程序，叫 Harness，Codex 就是一个 Harness。组装请求时它管三样：系统指令，告诉模型怎么做事；工具，告诉模型能做什么；还有这一次的情况，比如在哪个目录、有什么权限、我们说了什么。",
        "【操作提示｜推进第 2 步，从左到右指请求带上的三大块，再指右侧小格的图例；数字来自讲师用课程基线（隔离 HOME）的一次运行】\n\n落到请求上，可以拆成六块。下面这条就是刚才那份记录，宽度大致对应大小。最大的两块是系统指令，大约 1.7 万字符；工具定义，9 个工具，大约 1.8 万字符。Skills 列表大约两千字符，这份记录用的是干净环境，只有 Codex 自带的几个。右边是几个小格：Skills 列表、环境信息、权限说明，和我们的话。",
        "【操作提示｜推进第 3 步，指向最右那一小格和底部横条；留在课件】\n\n我们写的那句话，是最右边最小的一格。模型看到的，从来不只是我们写的话，而是 Harness 组装好的整份请求。那每一块为什么非有不可？我们一块一块问：如果没有它，会怎样。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "字符数来自 2026-10-20 课程基线（隔离 HOME）发第一步那句话的 claude-tap 记录：系统指令 16979 字符，是 input 里第一条 developer 消息（请求顶层的 instructions 字段为空，不要在面板里找那个字段）；工具定义 tools 的 JSON 17767 字符，9 个；Skills 列表 1985 字符，只有 Codex 自带的；权限说明 341 字符，和 Skills 列表放在第二条 developer 消息里；环境信息 642 字符，是 user 消息；我们的话 17 字。讲师日常环境的 Skills 列表约 1.24 万字符（2026-10-02），差别在 p15 讲。录制时按冻结记录核对，有出入就按实际记录替换。"
        },
        {
          "title": "讲师提示",
          "text": "第一次正式出现“Harness”这个词，先指着图说它做了什么，再给名字。这张图是本节的请求解剖地图，后面几页逐块放大，p16a 再整体框起来。"
        }
      ],
      "expressive": "按大小比例排开的一条请求带，后续页逐块放大",
      "source": "index.html#p09",
      "seconds": 90
    },
    {
      "id": "p10",
      "segment": "逐块拆开",
      "label": "如果没有系统指令",
      "title": "如果没有系统指令，模型不知道自己是谁",
      "lead": "模型本身只会接着往下写。系统指令告诉它：你是一个在终端里写代码的 Agent，该怎样工作、怎样验证、怎样汇报。Codex 是开源的，它的基础指令就放在公开仓库里。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:.9fr auto 1.3fr\"><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">没有它</span><p class=\"p-big\" style=\"font-weight:500\">只会接着往下写</p><p class=\"p-sub\">不知道要读仓库、改文件、停下来请示</p></div><div class=\"p-join\" data-reveal=\"1\"><span>Codex 基础指令</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">章节目录（摘出几节）</span><p style=\"margin-top:10px;line-height:1.8\">工作方式 · 性格<br><b>AGENTS.md 规范</b><br>执行任务 · 验证工作<br>汇报进度与结果</p></div></div><div class=\"p-bar\" data-reveal=\"2\">同一个模型，换一个 Harness，<b>行为就不同</b></div><p class=\"source-note\">来源：openai/codex 仓库 codex-rs/protocol/src/prompts/base_instructions/default.md（Apache-2.0），2026-10-02 核对；章节名为中文意译</p>",
      "steps": [
        "没有它",
        "Codex 的基础指令",
        "行为来自这里"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向左侧“没有它”虚线框；不切工具窗口】\n\n先问最大的一块：如果没有系统指令会怎样？模型本身只会根据前文接着往下写。它不知道自己是一个写代码的 Agent，不知道要先读仓库、要改文件、遇到风险要停下来请示。",
        "【操作提示｜推进第 2 步，指向右侧章节目录里的“AGENTS.md 规范”一行；不打开仓库原文、不朗读原文】\n\nCodex 是开源的，它的基础指令就放在公开仓库里，谁都能看。原文很长，我们只看它的章节目录，摘出其中几节：工作方式、性格、执行任务、验证工作、汇报进度和结果。注意中间有一节，专门讲 AGENTS.md 规范，告诉模型项目里可能有这种文件、该怎么对待它。这一点后面还会用到。",
        "【操作提示｜推进第 3 步，指向底部横条；留在课件】\n\n所以我们感受到的“Codex 很谨慎”“改完会说明做了什么”，很大一部分来自这份指令。同一个模型，换一个 Harness、换一份指令，表现就会不一样。系统指令说清了“怎么做事”，可模型真要做事，还得有手。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "讲师环境实际发出的指令与 default.md 一致，只少了 Planning 及其示例和 update_plan 两节：0.160.0 默认关闭计划工具，Harness 发送前删掉讲计划工具的章节（core/src/session/mod.rs，prompts/src/update_plan_instructions.rs）。若学员问起，可作为“指令和工具保持一致”的例子。画面以实际请求为准，仓库文件作对照，所以画面和口播都不列“计划”一节，也不说“先列计划”来自这份指令。"
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
      "segment": "逐块拆开",
      "label": "如果没有工具定义",
      "title": "如果没有工具定义，模型只能说，不能做",
      "lead": "这次请求里有 9 个工具，每个都用 JSON 结构写清名字、用途和参数。模型只能可靠地调用被描述过的工具；它只是提出调用，真正执行的是 Harness。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.25fr 1fr\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">一个工具的定义（只摘几行）</span><pre class=\"p-code\" style=\"margin-top:8px;font-size:17px;line-height:1.55\">{ \"name\": \"exec_command\",\n  \"description\": \"Runs a command …\",\n  \"parameters\": { \"cmd\": \"string\", … } }</pre></div><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"1\" style=\"align-self:start\"><span class=\"p-tag\" data-role=\"gate\">没有它</span><p class=\"p-big\" style=\"font-weight:500\">只能说，不能做</p><p class=\"p-sub\">没描述过的工具，调用不可靠</p></div></div><div class=\"p-bar\" data-reveal=\"1\">模型提出调用，<b>Harness 执行</b>，再把结果放回下一次请求</div>",
      "steps": [
        "工具长什么样",
        "谁在执行"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，依次指向左侧定义里的 name、description 和 cmd 参数；不切工具窗口】\n\n第二块，工具定义。这次请求里有 9 个工具，每个都用一段 JSON 写清楚：叫什么名字、做什么用、要哪些参数。左边是其中执行命令的那个，名字叫 exec_command。原文很长，这里只摘了几行：名字、一句用途说明，和最重要的参数，也就是要执行的命令。",
        "【操作提示｜推进第 2 步，指向右侧“没有它”，再指底部横条；留在课件】\n\n如果没有工具定义，模型就只能“说”，不能“做”，而且它只能可靠地调用被描述过的工具。还要记住一点：模型只是提出调用，真正执行的是 Harness，执行结果再放进下一次请求交给模型，这就是第 1 章讲过的 Agent 循环。工具是手，那装了那么多 Skills，是不是也都整份塞进请求里了？"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "调用了不存在的工具会怎样（read_file 一例），留到 2.2 p24，这里不展开。"
        }
      ],
      "source": "index.html#p11",
      "seconds": 60
    },
    {
      "id": "p12",
      "segment": "逐块拆开",
      "label": "Skills 只是一份目录",
      "title": "Skills 不是整份塞进去，只是一份目录",
      "lead": "请求里的 Skills 列表只有名字、一句描述和文件位置。模型判断用得上时，再去读那个 SKILL.md 全文。这叫渐进披露；装得越多，目录越长，每次请求都更重。Skill 本身留到第 3 章。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.2fr auto 1fr\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">请求里的一条</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.55;overflow-wrap:anywhere\">- skill-creator: Create or update a Codex skill … (file: r0/skill-creator/SKILL.md)</p></div><div class=\"p-join\" data-reveal=\"1\"><span>用得上才读</span><i class=\"p-arrow\"></i></div><div class=\"p-box is-dashed\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">SKILL.md 全文</span><p>步骤 · 规则 · 参考资料</p><p class=\"p-sub\">不在这次请求里</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">目录是指针 · 装得越多，<b>每次请求越重</b></div><p class=\"source-note\">示例条目是 Codex 自带的 Skill，取自 2026-10-02 隔离环境的一次运行</p>",
      "steps": [
        "目录里的一条",
        "用到才读全文",
        "代价"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向左侧条目的名字、描述和 file 路径；画面只用 Codex 自带 Skill，不切出讲师个人 Skills 列表】\n\n第三块，Skills 列表。左边是请求里的一条，来自 Codex 自带的一个 Skill：只有名字、一句英文描述，和这个 Skill 文件放在哪里。",
        "【操作提示｜推进第 2 步，指向右侧虚线框“不在这次请求里”；留在课件】\n\nSkill 的完整内容，也就是 SKILL.md 里的步骤和规则，并不在这次请求里。模型判断这个 Skill 用得上时，才会调用工具去读全文。这种先给目录、用到再展开的做法，叫渐进披露。",
        "【操作提示｜推进第 3 步，指向底部横条，可回指 p09 那块 Skills；留在课件】\n\n所以列表只是一份目录、一组指针。但目录本身也有代价：装的 Skills 越多，目录越长，每一次请求都要带着它。刚才那份记录是干净环境，列表只有两千字符左右；换成讲师日常的电脑，装了不少个人 Skills，列表有一万二千多字符，后面换个配置时再对比。剩下两块很小，可少了它们，模型连自己在哪台电脑上都不知道。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "画面只用 Codex 自带 Skill 的条目，不展示讲师个人 Skills 的名字。这里只指出“列在这里”，Skill 的编写与开关留到第 3 章。"
        }
      ],
      "source": "index.html#p12",
      "seconds": 90
    },
    {
      "id": "p13",
      "segment": "逐块拆开",
      "label": "环境和权限也写成文字",
      "title": "模型不知道它在哪台电脑、今天几号",
      "lead": "模型的知识停在训练截止的时候，也看不到我们的电脑。Harness 要把当前目录、Shell、日期、时区，以及这次的沙箱和审批设置写成文字放进请求。权限说明只是文字，真正的限制由本地沙箱执行。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">环境信息</span><pre class=\"p-code\" style=\"margin-top:8px;font-size:17px;line-height:1.55\">&lt;cwd&gt;…/work&lt;/cwd&gt;\n&lt;shell&gt;zsh&lt;/shell&gt;\n&lt;current_date&gt;2026-10-02&lt;/current_date&gt;\n&lt;timezone&gt;Asia/Shanghai&lt;/timezone&gt;</pre></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">权限说明（摘一句）</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.55\">`sandbox_mode` is `read-only`: The sandbox only permits reading files.</p></div></div><div class=\"p-bar\" data-reveal=\"2\">权限说明是<b>写给模型看的文字</b> · 真正拦住越界的是本地沙箱</div><p class=\"source-note\">取自 2026-10-02 隔离环境的一次运行，路径已缩写</p>",
      "steps": [
        "环境信息",
        "权限说明",
        "只是文字"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，按行指 cwd、shell、current_date、timezone；画面取自 2026-10-02 隔离环境的一次运行，路径已缩写，不切窗口】\n\n第四块，环境信息。模型的知识停在它训练截止的那一天，也看不到我们的电脑。所以 Harness 会写一小段文字告诉它：当前目录在哪，用的什么 Shell，今天几号，什么时区。没有这一段，它连“今天”是哪天都不知道。",
        "【操作提示｜推进第 2 步，指向右侧 sandbox_mode 那一句；留在课件】\n\n第五块，权限说明。右边这一句告诉模型：这次的沙箱模式是只读，只允许读文件。",
        "【操作提示｜推进第 3 步，指向底部横条；留在课件，下一页切回 Terminal】\n\n第 1 章讲最小权限时说过：权限说明只是写给模型看的文字，让它知道边界在哪；真正拦住越界操作的，是本地沙箱。模型就算没理会这段话，沙箱照样会拒绝写入。到这里，六块都看过了。刚才那句话跟项目无关，Codex 一个文件也没读。下面换一个和项目有关的问题，看请求会多出什么。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "环境信息与 AGENTS.md 以 user 角色注入，权限说明和 Skills 列表是 developer 角色；所以不能只按消息角色区分“我写的”和“Harness 加的”。若学员在工具里看到 user 角色的环境信息，用这一点解释。"
        }
      ],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p07",
      "segment": "工具调用",
      "layout": "prompt-scene",
      "prompt": "只读任务，不修改任何文件。\n这个个人主页 v0 当初定了哪些要求和完成标准？\n请说明依据来自哪个文件的哪一段；\n不确定就写“不确定”，不要猜。",
      "label": "问一个项目问题",
      "title": "问一个和项目有关的问题，请求会多出什么？",
      "lead": "第二步换一个和项目有关的只读问题。Prompt 不提示文件名，Codex 要自己去找依据；回答里说出的文件，就是下一页在记录里要找的东西。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>只读，不给文件名</b><small>让它自己去找</small></span></li><li data-reveal=\"1\"><span><b>回复逐句看</b><small>哪句是要求，哪句是完成标准，哪句不确定</small></span></li><li data-reveal=\"2\"><span><b>它说依据在哪</b><small>这次：PROJECT_BRIEF.md 的“首页 v0 的验收依据”、PROMPT_V1.md 的 Done when，带行号</small></span></li></ol></div><p class=\"source-note\">数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash-Preview，codex exec）；随版本、模型、配置和任务变化，只说明结构。 回答还标出了两处“不确定”。</p>",
      "steps": [
        "只读提问",
        "看回复",
        "圈出依据"
      ],
      "script": [
        "【操作提示｜课件 p07 第 1 步 → 切 Terminal“claude-tap”标签页，在同一个 Codex 里粘贴画面上的只读 Prompt 并提交】\n\n第二步，问一个和项目有关的问题：这个个人主页 v0 当初定了哪些要求和完成标准？依据来自哪个文件的哪一段，不确定就说不确定。注意，我们没告诉它去看哪个文件，它得自己去找。这一步只读，不修改任何文件。",
        "【操作提示｜推进第 2 步，等回答结束，在 Terminal 里逐句指回复：哪句是要求、哪句是完成标准、哪句说了不确定；按实际回复讲】\n\n回答出来了。我们一句一句看：哪些是它说的要求，哪些是完成标准，有没有哪句它说不确定。",
        "【操作提示｜推进第 3 步，圈出回复里提到的依据文件名和段落；没有提到就如实说明，留到下一页查记录】\n\n再看它说依据在哪。讲师这次运行里，它说要求和完成标准在 PROJECT_BRIEF.md，还提到 PROMPT_V1.md，连行号都给了。这些文件我们并没有告诉过它，那它是怎么知道的？回到请求记录里找。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在同一个 claude-tap 启动的 Codex 里提交此 Prompt，保留完整记录供 p14 使用。Codex 的回复录制时按实际记录截图，逐句贴标签，高亮它说出的依据文件。"
        },
        {
          "title": "实测记录",
          "text": "2026-10-20 课程基线（隔离 HOME，Codex 0.163.0 + MiniMax，codex exec -s read-only）在 starter 的 ch01-complete 快照上跑过一次：回答说要求在 PROJECT_BRIEF.md 的“已确定的目标与范围”，完成标准在同文件“首页 v0 的验收依据”五条，PROMPT_V1.md 的 Done when 是压缩版，都给了行号；还标了两处“不确定”：快照里的 PROMPT_V1.md 自称排练记录，以及没有本地 tag、没跑构建，只能确认标准、不能确认是否通过。讲师自己的仓库录制时内容会不同，按实际回复讲。工作区没有被修改。"
        },
        {
          "title": "讲师提示",
          "text": "Prompt 不出现 PROMPT_V1.md 等文件名，这样“它是怎么知道的”这个问题才是真的。只读，不修改文件。"
        }
      ],
      "source": "index.html#p07",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "工具调用",
      "label": "它是怎么知道的",
      "title": "它到底是怎么“知道”的？",
      "lead": "回到请求记录：Codex 提出读文件的工具调用，Harness 执行后把返回的内容放进下一次请求，模型再据此回答。工具调用和返回也进了 context。再对照回答，看它有没有正确使用这段返回。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>提出调用</h3><p>exec_command：<code>cat PROJECT_BRIEF.md</code></p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\"><h3>Harness 执行</h3><p>返回文件内容，约 1300 字符</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"1\"><h3>下一次请求</h3><p>带上这段调用和返回</p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>这一问：7 次请求</h3><p>12 次调用，都是 exec_command 跑 ls、cat、git log；input 从 4 项涨到 39 项</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"2\"><h3>读到了</h3><p>回答里的文件和行号，都能在返回里找到；再看它理解得对不对</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">下一步从<b>上一步的返回</b>里来</div><p class=\"source-note\">数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash-Preview，codex exec）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "调用和返回",
        "进入下一次请求",
        "对照回答"
      ],
      "script": [
        "【操作提示｜课件 p14 第 1 步 → 切 Chrome 查看器，打开 p07 这次提问的记录，找 Codex 提出读文件的那次工具调用和它的返回；画面上的命令和文件名按录制当次的记录改口】\n\n回到请求记录。在这次提问里，模型提出了工具调用：用 exec_command 跑 cat PROJECT_BRIEF.md。注意，它没有专门的“读文件”工具，读文件就是跑一条 shell 命令。Harness 执行它，把文件内容作为返回交了回去。",
        "【操作提示｜推进第 2 步 → 在查看器里打开下一次请求，定位刚才那段返回的内容并停留；没有读文件就如实说明，直接进入第 3 步】\n\n再打开下一次请求。刚才那段调用和返回，就出现在这里，跟着整份请求一起发给了模型。工具调用和返回也进了 context。讲师这一问一共发了 7 次请求，每一次都比上一次多带几段返回。这就是第 1 章讲过的 Agent 循环：下一步，从上一步的返回里来。",
        "【操作提示｜回课件推进第 3 步，按录制当次实际那一支讲；保留原始记录，不重跑凑结果。之后进入 p16】\n\n最后对照回答。这次它读到了：回答里引的文件和行号，都能在返回里找到。读到了还不够，还要核对它理解得对不对。要是它没读文件就作答，回答就缺了依据，这正是我们在 Prompt 里要它说明依据的原因。"
      ],
      "teaching": [
        {
          "title": "演示分支",
          "text": "按录制实际选用：\n\n读到了：在记录中指认读取文件的那次工具调用、工具返回，以及下一次请求中出现的文件内容；再对照回答，检查来源与理解是否相符。\n\n没读文件，凭目录名或代码猜：核对完整请求与工具返回后指出依据缺失，这正是 Prompt 要求“说明依据”的原因。\n\n读到了但理解错了，或没找到依据、回答不确定或继续查找：均按实际结果讲。仅凭没有读取某一个文件，不能断言所有来源中都没有依据。保留原始记录，不重跑凑结果。"
        },
        {
          "title": "实测记录",
          "text": "2026-10-20 课程基线一次运行：7 次请求、12 次工具调用（每次请求并行两次），全部是 exec_command 执行 shell 命令：ls、find、cat PROJECT_BRIEF.md、cat PROMPT_V1.md 等、git log、grep -n 取行号；没有专门的读文件工具，读文件就是跑 cat。每次请求的 input 都带上前面全部的调用和返回：4、10、16、22、28、34、39 项；input_tokens 从 9070 涨到 21986，其中缓存命中从 8376 涨到 20482。录制版本或讲师仓库不同，次数和数字会变，按实际记录改。"
        },
        {
          "title": "讲师提示",
          "text": "学员的要求和完成标准可能记在 PROMPT_V1.md 或其他文件里。回扣第 1 章的 Agent 循环。“input 一项项变长”只点一句，2.2 p22–p23 再展开。"
        }
      ],
      "source": "index.html#p14",
      "seconds": 90
    },
    {
      "id": "p16",
      "segment": "换个配置",
      "label": "换个权限",
      "title": "同一句话，换个权限，说明文字也变了",
      "lead": "第一步那句话，用只读和可写各发一次，权限说明是两段不同的文字；可写时还会列出可写目录，环境信息也随之变长。Codex 按配置从不同模板拼出这段说明。这是讲师示例，可自主尝试。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><style>.x-w16{grid-template-columns:1.5fr 1fr}</style><div class=\"p-term\" data-reveal=\"0\" style=\"margin-bottom:12px;font-size:17px\" data-copy=\"uvx claude-tap --tap-client codex --tap-target https://api.minimax.cn/v1 -s read-only\"><div class=\"dim\">$ uvx claude-tap --tap-client codex --tap-target … -s read-only</div><div class=\"dim\">$ uvx claude-tap --tap-client codex --tap-target … -s workspace-write</div></div><div class=\"p-walk x-w16\"><div data-reveal=\"1\"><div class=\"p-src\" style=\"--lh:40px\"><div class=\"p-fn\">permissions instructions <span class=\"add\">+1</span><span class=\"del\">−1</span></div><div class=\"p-ln del\"><i>−</i><code>`sandbox_mode` is `read-only`: … only permits reading files.</code></div><div class=\"p-ln add\"><i>+</i><code>`sandbox_mode` is `workspace-write`: … editing files in `cwd` …</code></div><div class=\"p-ln add\"><i>+</i><code>The writable roots are `…/work`, …</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"1\"><span><b>341 → 676 字符</b><small>可写时多出可写目录；环境信息 642 → 1628</small></span></li><li class=\"is-ok\" data-reveal=\"2\"><span><b>按配置拼装</b><small>仓库里按沙箱模式分模板</small></span></li></ol></div><p class=\"source-note\" data-reveal=\"2\">模板位置：openai/codex 仓库 codex-rs/prompts/templates/permissions/。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash-Preview，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录建一个带 Git 的练习目录；有自己的 .git，Codex 才不会读到课程仓库的 AGENTS.md",
            "code": "mkdir -p lab-runs/perm && cd lab-runs/perm && git init -q && echo '<h1>hello</h1>' > index.html"
          },
          {
            "text": "用课程基线（隔离 HOME + MiniMax）以只读权限跑一次；需要 MINIMAX_API_KEY，浏览器会打开请求面板",
            "code": "../../tools/clean-codex.sh --tap -- exec -s read-only \"你好，用一句话介绍你能帮我做什么。\" < /dev/null"
          },
          {
            "text": "同一句话换成可写权限再跑一次",
            "code": "../../tools/clean-codex.sh --tap -- exec -s workspace-write \"你好，用一句话介绍你能帮我做什么。\" < /dev/null"
          },
          {
            "text": "在面板里对照两次请求：developer 消息中 <permissions instructions> 一段，以及环境信息里的可写目录",
            "code": ""
          }
        ],
        "note": "讲师 2026-10-20 在 Codex 0.163.0 上按这几步用第一步那句话实测过（2026-10-05 在 0.160.0 上用另一句只读提问也测过）；权限说明与提问内容无关。字符数随版本和配置变化，只看两段说明的差别。末尾的 < /dev/null 让 codex exec 不再等待额外输入。"
      },
      "steps": [
        "两次启动",
        "两段说明",
        "按配置拼装"
      ],
      "script": [
        "【操作提示｜停留课件 p16 第 1 步，指两条命令末尾的 -s 参数；画面为讲师录制的两次运行，不现场重跑】\n\n看完了请求的组成，再换一个维度：权限。还是第一步那句话，一次用只读，一次用可写。怎么切？启动时在命令最后加上 -s read-only 或者 -s workspace-write，claude-tap 会把它不认识的参数原样交给 Codex。两次各开一个新会话，这样两份请求只差权限这一处。",
        "【操作提示｜推进第 2 步，指上方说明的删除行与新增行，再指右侧字符数；数字按录制当次的记录读】\n\n看权限说明的差异：只读时说沙箱只允许读文件；可写时变成允许编辑当前目录，还多了一行，列出哪些目录可写。说明从三百四十字符变成六百七十多，环境信息也跟着变长，从六百多变成一千六百多。",
        "【操作提示｜推进第 3 步，指向“按配置拼装”和模板位置；留在课件】\n\n这段文字不是写死的。Codex 的仓库里，按沙箱模式和审批策略分别放了模板，Harness 按这次的配置拼出来。这就接上了第 1 章选权限时的做法：我们做的权限选择，会变成请求里的一段文字，同时变成本地沙箱的实际限制。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "2026-10-20 课程基线实测第一步那句话：权限说明 341 → 676 字符，环境信息 642 → 1628 字符（可写时 permission_profile 里多出可写路径）；系统指令、工具定义两次完全相同。2026-10-02 在 0.160.0 上另一个 Prompt 的旧记录约 340 → 670，量级一致。录制版本定下后复测。"
        },
        {
          "title": "核对记录",
          "text": "模板位于 codex-rs/prompts/templates/permissions/（sandbox_mode/*.md、approval_policy/*.md），2026-01 起由固定段落改为按配置拼装（提交 87f7226cca）。旧数据来自 codex exec，审批策略为 never；交互界面中的审批文字会不同。"
        },
        {
          "title": "命令说明",
          "text": "已核对：Codex 0.160.0 的 -s/--sandbox 取值为 read-only、workspace-write、danger-full-access；claude-tap 0.1.145 的帮助写明未列出的参数会转发给所启动的客户端。复制按钮复制的是只读那一条，可写时把最后一个参数换掉。会话中途也能在 Codex 界面里改权限，但前面的对话仍在上下文里，对比不干净，所以用启动参数，两次各开新会话。"
        }
      ],
      "source": "index.html#p16",
      "seconds": 90
    },
    {
      "id": "p15",
      "segment": "换个配置",
      "label": "换个 HOME 目录",
      "title": "同一句话，换个干净的 HOME 目录，请求就变了",
      "lead": "请求由三层来源拼成：个人（~/.codex 的配置、登录、全局 AGENTS.md，~/.agents/skills 的个人 Skills）、项目（仓库里的 AGENTS.md 与 .agents/skills）、本次（目录、日期、权限）。换一个隔离的 HOME 运行，个人那一层就没了，所以每个人在自己电脑上看到的请求都会和讲师的不同。这是讲师的环境对比示例，不要求跟做。数字来自讲师机器上的一次运行（2026-10-02，Codex 0.160.0 + MiniMax，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">日常环境</span><p>Skills 列表 ≈1.24 万字符</p><p class=\"p-sub\">含讲师的个人 Skills</p></div><div class=\"p-join\" data-reveal=\"0\"><span>隔离 HOME</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ok\">隔离环境</span><p>Skills 列表 ≈2 千字符</p><p class=\"p-sub\">只剩 Codex 自带的，请求变短</p></div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"us\" data-reveal=\"1\"><h3>个人</h3><p>~/.codex · ~/.agents/skills</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>项目</h3><p>AGENTS.md · .agents/skills</p></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>本次</h3><p>目录 · 日期 · 权限</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">换掉 HOME，<b>个人那一层</b>就不在请求里了</div>",
      "repro": {
        "label": "自己对比一次",
        "steps": [
          {
            "text": "沿用上一页的练习目录 lab-runs/perm",
            "code": "cd lab-runs/perm"
          },
          {
            "text": "用你平时的配置经 claude-tap 跑一次",
            "code": "uvx claude-tap --tap-client codex -- exec -s read-only \"你好，用一句话介绍你能帮我做什么。\" < /dev/null"
          },
          {
            "text": "用隔离 HOME 再跑同一句；脚本每次新建一个 HOME，不读你的 ~/.codex，个人 Skills 也不会带进来",
            "code": "../../tools/clean-codex.sh --tap -- exec -s read-only \"你好，用一句话介绍你能帮我做什么。\" < /dev/null"
          },
          {
            "text": "在面板里对照两次请求的 Skills 列表与环境信息",
            "code": ""
          }
        ],
        "note": "只设 CODEX_HOME 不够：个人 Skills 读自 HOME 下的 .agents/skills，要连 HOME 一起换，tools/clean-codex.sh 就是这样做的。各人配置不同，第 2 步的结果会不一样。"
      },
      "steps": [
        "对比两次",
        "三层来源"
      ],
      "script": [
        "【操作提示｜停留课件 p15 第 1 步，指向两组对比数字；画面为讲师 2026-10-02 的日常与隔离两次运行记录，不现场重跑，不打开日常环境的 Skills 列表】\n\n换权限会变，换环境呢？讲师做了一个对比：同一句话，一次在日常环境里跑，一次换了一个干净的、隔离的 HOME 目录。Skills 列表从大约 1.24 万字符降到大约 2 千，剩下的只有 Codex 自带的几个，整份请求也跟着变短。",
        "【操作提示｜推进第 2 步，依次指向个人、项目、本次三格；留在课件】\n\n为什么会这样？因为请求的内容有三层来源。个人这一层，来自我们自己的用户目录：~/.codex 里的配置、登录信息和全局 AGENTS.md，还有 ~/.agents/skills 里的个人 Skills。项目这一层，来自仓库里的 AGENTS.md 和 .agents/skills。本次这一层，是当前目录、日期和这次的权限设置。所以，大家在自己电脑上看到的请求，会和讲师的不一样。想自己对比一次，步骤在页面上方。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "Skills 列表的大小与提问内容无关，沿用 2026-10-02 两次运行的记录；旧版画面上的首次请求 token 数来自读标题任务，已去掉，录制时如要展示按实际记录补。"
        },
        {
          "title": "核对记录",
          "text": "Codex 0.160.0 源码 codex-rs/ext/skills/src/host_roots.rs：个人 Skills 读自 $HOME/.agents/skills；$CODEX_HOME/skills 为兼容保留的旧位置；项目 Skills 读自仓库 .agents/skills。"
        },
        {
          "title": "讲师提示",
          "text": "不现场重跑，不打开日常环境的 Skills 列表。不要在画面上展示 config.toml 内容，里面可能有 API 密钥。"
        }
      ],
      "source": "index.html#p15",
      "seconds": 60
    },
    {
      "id": "p16a",
      "segment": "小结",
      "label": "这些加在一起",
      "title": "这些加在一起，就是 context",
      "lead": "系统指令、工具定义、Skills 列表、环境信息、权限说明、我们的话，再加上工具调用和返回，模型这一次能看到的全部内容，就是 context。第 1 章说 context 里该放什么，这里第一次看到它的实际样子；后面四节都回到这份记录。",
      "html": "<div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">这一次请求</span><div class=\"p-chain\" style=\"margin-top:4px;font-size:20px\"><span>系统指令</span><i>·</i><span>工具定义</span><i>·</i><span>Skills 列表</span><i>·</i><span>环境信息</span><i>·</i><span>权限说明</span><i>·</i><span>工具调用和返回</span><i>·</i><span>我们的话</span></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:10px\"><b>Context</b>：模型这一次能看到的全部内容</div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:10px\"><div class=\"p-box is-dashed\" data-role=\"ink\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ink\">官方说法</span><p class=\"p-sub\">〔官方解释原文〕</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"3\"><span class=\"p-tag\" data-role=\"ctx\">课程地图</span><p>第 1 章：Agent 循环 · 权限<br><b>第 2 章：Context</b> 点亮<span class=\"p-sub\">，后面几章还没走到</span></p></div></div>",
      "steps": [
        "整体框起",
        "叫它 context",
        "官方说法",
        "点亮地图"
      ],
      "script": [
        "【操作提示｜停留课件 p16a 第 1 步，用手势框住整排内容；不切窗口】\n\n把这一节看到的放在一起：系统指令、工具定义、Skills 列表、环境信息、权限说明、工具调用和返回，最后才是我们的话。",
        "【操作提示｜推进第 2 步，指向结论条】\n\n这些加在一起，就是 context：模型这一次能看到的全部内容。第 1 章我们讲过 context 里该放什么，这是第一次看到它实际长什么样。",
        "【操作提示｜推进第 3 步，指向官方说法；录制前替换成已核对的引文并读出来源】\n\n官方文档对 context 也有一段解释，我们对照着看一下。",
        "【操作提示｜推进第 4 步，指向点亮的 Context；留在课件】\n\n在课程地图上，第 2 章点亮的就是 Context。后面四节，我们都会回到这份请求记录，看它怎么变长、怎么清空，又怎样影响 Codex 的改动。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "“模型这一次能看到的全部内容”是我们自己的一句话定义。官方对 context 的解释尚未选定：定稿时选一份，引用不超过一两句，写明来源，录制前核对原文后替换虚线框；不自造引文。"
        },
        {
          "title": "讲师提示",
          "text": "最后一行是课程概念地图的保底版本，地图定稿后换成地图局部，只点亮 Context。"
        }
      ],
      "expressive": "把 p09 的请求带整体框起来，再接上课程概念地图，点亮 Context 这座城市",
      "source": "index.html#p16a",
      "seconds": 120
    },
    {
      "id": "p18",
      "segment": "小结",
      "label": "暂停自检",
      "title": "暂停自检",
      "lead": "先独立作答，再看解析。答案后面标出回到哪一页。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>从请求记录中指出四类不是你写的内容，缺了其中一类会怎样？</h3><div data-reveal=\"1\"><p>系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类说出后果<span class=\"p-back-to\" data-role=\"agent\">回到 拆开这份请求</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>你在自己电脑上用 claude-tap 看同一句话，Skills 列表比讲师的长得多。这说明什么？</h3><div data-reveal=\"2\"><p>请求按各人的环境现场拼装：你装的个人 Skills 多，列表就长。数字不同，结构一样<span class=\"p-back-to\" data-role=\"us\">回到 换个 HOME 目录</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，只显示两道题，不揭示解析；念完留出暂停视频的间隙，不切窗口】\n\n我们先暂停一下，各自回答两个问题。第一，从请求记录里指出四类不是你写的内容，再说说缺了其中一类会怎样。第二，你在自己电脑上用 claude-tap 看同一句话，Skills 列表比讲师的长得多。这说明什么？",
        "【操作提示｜推进第 2 步，揭示第 1 题解析，指向“回到 拆开这份请求”】\n\n第一题，系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类。比如没有工具定义，模型只能说不能做；没有环境信息，它不知道当前目录和日期。答不上来，回到“拆开这份请求”那几页再看一遍。",
        "【操作提示｜推进第 3 步，揭示第 2 题解析，指向“回到 换个 HOME 目录”】\n\n第二题，请求是按各人的环境现场拼出来的。你装的个人 Skills 多，列表就长。数字和讲师不同很正常，结构是一样的。"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 90
    },
    {
      "id": "p19",
      "segment": "小结",
      "label": "本节小结",
      "title": "模型收到的，远不止我们那句话",
      "lead": "只说一句话，Codex 发出的请求里有系统指令、工具定义、Skills 列表、环境信息和权限说明；工具调用和返回也会进入 context；换权限、换环境，同一句话的 context 就不同。下一节回答：对话多几轮，context 怎么变？",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一张地图</h3><div class=\"p-star\" style=\"width:260px;font-size:24px\">Context<br>六块，加上工具返回</div><p class=\"p-sub\" style=\"text-align:center\">我们的话只是最后一格</p></div><div><h3 data-reveal=\"1\">两个认识</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-point\" data-reveal=\"1\">工具调用和返回也会进入 context</li><li class=\"is-point\" data-reveal=\"2\">换权限、换环境，context 就不同</li></ul></div><div class=\"p-next\" data-reveal=\"3\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.2 补上项目经历</h3><p>对话多几轮，context 怎么变？</p></div></div></div>",
      "steps": [
        "拆开的请求",
        "工具调用也进来",
        "换配置就不同",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p19 第 1 步，指向星形里的 Context；不切工具窗口】\n\n这一节我们没有改一行代码，只说了一句话，就看到了模型实际收到的东西：六块内容，我们那句话只是最后一格。",
        "【操作提示｜推进第 2 步，指向第一条要点】\n\n问一个项目问题时，工具调用和它的返回也会进入 context，模型的下一步从这里来。",
        "【操作提示｜推进第 3 步，指向第二条要点】\n\n同一句话，换个权限、换个环境，context 就不同。",
        "【操作提示｜推进第 4 步，指向“2.2 补上项目经历”卡片。不退出 Terminal 中本节的 Codex 会话与开发服务器，2.2 要回看这次会话】\n\n下一节，我们要补上项目经历，和 Codex 多聊几轮。对话多了，context 会怎么变？我们接着看这份记录。"
      ],
      "teaching": [],
      "source": "index.html#p19",
      "seconds": 120
    }
  ],
  "segments": [
    {
      "label": "开始这一章",
      "seconds": 150
    },
    {
      "label": "打开请求",
      "seconds": 210
    },
    {
      "label": "逐块拆开",
      "seconds": 420
    },
    {
      "label": "工具调用",
      "seconds": 180
    },
    {
      "label": "换个配置",
      "seconds": 150
    },
    {
      "label": "小结",
      "seconds": 330
    }
  ]
};
