window.lesson = {
  "title": "只说了一句话，模型收到了什么",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.01",
  "summary": "用 claude-tap 打开 Codex 实际发出的请求：只说一句话，模型收到的远不止这句话；这些加在一起就是 context，换权限、换模型配置，它就不同。",
  "scenes": [
    {
      "id": "p01",
      "segment": "开始这一章",
      "layout": "lesson-cover",
      "label": "这一章做什么",
      "title": "补完整，发布上线",
      "lead": "把个人主页补完整、发布上线，一路打开请求看清 context",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>2.1</b>看请求</li><li><b>2.2</b>补经历</li><li><b>2.3</b>审改动</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-chain\" data-reveal=\"1\" style=\"margin-top:12px;font-size:20px\"><span>补完整</span><i>→</i><span>发布上线</span><i>·</i><span>一路看清 context</span></div><style>.x-p01 span{padding:6px 10px;font-size:19px}.x-p01 .is-head span{font-size:16px}</style><div class=\"p-matrix x-p01\" data-reveal=\"2\" style=\"margin-top:10px;grid-template-columns:minmax(0,.35fr) minmax(0,1.2fr) minmax(0,1.6fr)\"><div class=\"is-head\"><span>节</span><span>项目动作</span><span>用请求记录回答</span></div><div class=\"is-key\"><span>2.1</span><span>用 claude-tap 启动 Codex</span><span>只说一句话，模型收到了什么？</span></div><div><span>2.2</span><span>补上项目经历</span><span>多聊几轮，context 怎么变长？</span></div><div><span>2.3</span><span>审查改动，决定要不要接受</span><span>它是根据哪些内容改的？</span></div><div><span>2.4</span><span>发布到 GitHub Pages</span><span>Codex 怎样调用 gh？</span></div><div><span>2.5</span><span>分拣“只是重构”的改动</span><span>没有测试，它能证明行为没变吗？</span></div></div>",
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
        "【操作提示｜停留课件 p01 第 1 步，指向章节地图上的 2.1，再指页面上方“从这一章开始？”入口，只点位置不展开其中步骤；不切工具窗口】\n\n第 1 章结束时，我们做出了个人主页：能启动、能构建，改动也能解释清楚。还没做完第 1 章也没关系：点开这一页上方的“从这一章开始？”，按步骤让 Codex 对照课程的参考起点补齐，再回来继续。",
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
      "lead": "隔了一天回到项目，本地地址打不开。在第 1 章做出个人主页的那个项目目录里重新运行 npm run dev，页面就回来了。为什么要重新启动，下一节再讲。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">浏览器</span><div class=\"p-term\" style=\"margin-top:10px\"><div class=\"err\">localhost 拒绝连接</div></div></div><div class=\"p-join\" data-reveal=\"1\"><span>终端</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">重新启动</span><div class=\"p-term\" data-copy=\"npm run dev\" style=\"margin-top:10px\"><div class=\"dim\">$ npm run dev</div><div class=\"ok\">Local: http://localhost:5173/</div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">在自己的项目目录里，重新运行 <b>npm run dev</b></div>",
      "steps": [
        "打不开",
        "重新启动"
      ],
      "script": [
        "【操作提示｜课件 p02 第 1 步 → 切 Chrome 新开标签页，访问第 1 章首页的本地地址（画面示例 http://localhost:5173/，以第 1 章实际 Vite 输出为准）。录前确认开发服务器确已停止，如实展示拒绝连接页；保留课件标签页】\n\n隔了一天回到项目，我们先打开昨天的本地地址。浏览器说拒绝连接，页面打不开。代码明明都还在，这是怎么回事？",
        "【操作提示｜回课件推进第 2 步 → 切 Terminal 新开标签页“个人主页开发服务”，进入第 1 章做出个人主页的练习项目根目录（不是课程原始起点），运行 npm run dev 并保持运行；用实际打印的 Local 地址刷新刚才的 Chrome 标签页，页面恢复后回课件 p06-tap。报找不到 package.json 时先核对目录】\n\n回到第 1 章做出个人主页的那个项目目录，重新运行 npm run dev，页面就回来了。注意是我们自己的项目，不是课程刚发下来的原始起点，那里还没有应用，npm run dev 会报找不到 package.json。为什么要重新启动，下一节再讲。大家跟做时也先做这一步，把页面打开。"
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
      "html": "<div class=\"p-term\" data-copy=\"uvx claude-tap@0.1.146 --tap-client codex --tap-target https://api.minimax.cn/v1\" data-reveal=\"0\"><div class=\"dim\">$ uvx claude-tap@0.1.146 --tap-client codex \\</div><div class=\"dim\">    --tap-target https://api.minimax.cn/v1</div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:16px\"><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"1\"><h3>本地代理</h3><p>夹在 Codex 和模型服务之间</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\"><h3>会经手 API 密钥</h3><p>请求连同鉴权信息都从它这里过</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"1\"><h3>只看得到经过它的</h3><p>Codex 发出的请求和模型的返回</p></div></div><ol class=\"p-watch is-row\" style=\"margin-top:16px\"><li data-reveal=\"2\">切到终端<small>用它启动 Codex</small></li><li data-reveal=\"3\">打开查看器<small>每次请求都被记下来</small></li></ol>",
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
        "【操作提示｜停留课件 p06-tap 第 1 步，指向画面上的 uvx claude-tap 命令；不切窗口】\n\n这一章要一路看 Codex 实际发给模型的内容，所以这次换一种方式启动 Codex。画面上是 claude-tap 的启动命令，版本号固定为 0.1.146，就是讲师实测用的版本。claude-tap 是一个开源工具，项目主页的链接放在页面最下面。",
        "【操作提示｜推进第 2 步，依次指三张卡片；留在课件】\n\n先说清它是什么。第一，它是一个本地代理，夹在 Codex 和模型服务之间，把每一次请求记下来。第二，正因为夹在中间，它会经手我们的 API 密钥，请求连同鉴权信息都从它这里过，所以画面上不会出现配置文件和密钥。第三，它只看得到经过它的内容，也就是 Codex 发出的请求和模型的返回。这一节由我来演示，大家自己运行算选做，不计入验收。",
        "【操作提示｜推进第 3 步 → 切 Terminal 新开标签页“claude-tap”，在练习项目根目录运行画面命令（录制用隔离 HOME，做法见讲师提示）；Codex 启动后停在输入处，本页不提交 Prompt。画面不出现 config.toml 或完整密钥】\n\n切到终端，在项目目录运行这条命令。它会替我们启动 Codex，启动之后，Codex 用起来和平时完全一样。",
        "【操作提示｜推进第 4 步；查看器地址以 claude-tap 实际输出为准，先指出地址，本页不打开，等 p08 的回答结束再看；随后进入 p08】\n\nclaude-tap 还会给出一个本地查看器的地址。等 Codex 回答完，打开它，就能一条一条看到刚才的请求。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "画面命令已于 2026-10-02 在 Codex 0.160.0 + MiniMax 自定义 provider 下实测，trace 写入 ~/.local/share/claude-tap/traces.sqlite3。需要先装好 uv。命令固定 claude-tap 0.1.146（2026-10-20 全章实测用的版本，讲师 2026-10-20 决定），换版本前先复测；录制用隔离 HOME 启动（做法见 tools/clean-codex.sh 的 --tap），查看器地址以工具输出为准。"
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
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:.8fr auto 1.3fr\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">我们写的</span><p class=\"p-big\">一句话</p><p class=\"p-sub\">17 个字</p><p class=\"p-sub\" data-reveal=\"2\"><b>排在整份请求的最末尾</b></p></div><div class=\"p-join\" data-reveal=\"1\"><span>Codex 发出</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">这一次请求</span><p class=\"p-big\">远不止这一句</p><p class=\"p-sub\">约 7.5 千 token · 约 2.8 万字符</p></div></div><p class=\"source-note\">数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "只发一句话",
        "实际发出",
        "我们那句在末尾"
      ],
      "script": [
        "【操作提示｜课件 p08 第 1 步 → 切 Terminal“claude-tap”标签页，在 Codex 里粘贴画面上的第一步 Prompt 并提交，等回答结束】\n\n先发一句和项目完全无关的话：你好，用一句话介绍你能帮我做什么。它不需要读任何文件，我们只看这一句话发出去，模型收到了什么。",
        "【操作提示｜推进第 2 步 → 切 Chrome 打开 claude-tap 查看器（地址以终端输出为准），打开这一次请求，指向 token 数和字符数；画面不露本机路径和用户名。数字按录制当次的记录读】\n\n回答结束了，打开查看器，看这一次请求。我们只写了十几个字，Codex 发出去的请求却有大约七千五百 token，近三万字符。这是讲师的一次运行，换个版本、换个模型，数字都会变，但量级差不多。",
        "【操作提示｜推进第 3 步，在查看器里滚到请求最末尾，指向我们那句话；再回课件指“排在整份请求的最末尾”】\n\n我们那句话在哪？一直滚到最后才看到它，排在整份请求的最末尾。前面这么多内容，都不是我们写的。它们是什么？我们把这份请求拆开看。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在 p06-tap 启动的 Codex 中提交这句话，等回答结束，打开查看器里这一次请求。录制前确认这一句在冻结版本下不会触发读文件；若触发，换成更短的问候并记下原因。"
        },
        {
          "title": "数字来源",
          "text": "2026-10-20 15:16 课程基线实测（能力目录开，推理档位 max）：1 次请求，没有工具调用；input_tokens 7519（模型服务返回的计数），各块字符合计约 2.76 万：系统指令 145、多代理团队说明 2235 与开关说明 271、工具定义 22028（5 个）、Skills 列表 1985、权限说明 341、环境信息 550、我们的话 17。同一句话在能力目录关时约 9 千 token，对比放在 p15b。录制版本定下后复测一次，有出入按实际记录替换。较早那次 9042 token、约 3.77 万字符的记录是能力目录关（后备元数据），不再用于本页。"
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
      "lead": "Harness 是包在模型外面的那一层程序，Codex 就是一个 Harness：它把系统指令、工具和这一次的情况组装成请求。这份请求可以拆成六块：系统指令、工具定义、Skills 列表、环境信息、权限说明，最后才是我们写的话。下面几页逐块回答“如果没有它会怎样”。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<style>.x-stack{display:flex;gap:6px;height:64px}.x-stack>div{position:relative;border:2.5px solid var(--c);background:var(--cl);border-radius:10px 8px 11px 9px;display:flex;align-items:center;justify-content:center;font-size:19px;color:var(--ct);min-width:14px;overflow:hidden;white-space:nowrap}.x-key{display:flex;justify-content:flex-end;align-items:center;gap:18px;margin:8px 0 0;font-size:18px;color:var(--p-muted)}.x-key i{display:inline-block;width:9px;height:24px;margin-right:7px;vertical-align:-6px;border:2.5px solid var(--c);background:var(--cl);border-radius:4px 3px 4px 3px}@media(max-width:600px){body[data-mode=scroll] .x-stack{height:96px}body[data-mode=scroll] .x-stack>div{white-space:normal;font-size:14px;line-height:1.25;text-align:center;padding:2px}body[data-mode=scroll] .x-key{flex-wrap:wrap;justify-content:flex-start;gap:4px 14px;font-size:15px}body[data-mode=scroll] .x-key span{white-space:nowrap}}</style><div class=\"p-grid\" style=\"--n:3;gap:12px\" data-reveal=\"0\"><div class=\"p-box is-soft\" data-role=\"agent\"><h3>系统指令</h3><p>怎么做事</p></div><div class=\"p-box is-soft\" data-role=\"tool\"><h3>工具</h3><p>能做什么</p></div><div class=\"p-box is-soft\" data-role=\"ctx\"><h3>本次情况</h3><p>目录、权限、我们的话</p></div></div><p class=\"p-sub\" data-reveal=\"0\" style=\"margin:6px 0 14px\">Codex 这层 Harness 组装请求时管的三样</p><div class=\"x-stack\" data-reveal=\"1\"><div data-role=\"agent\" style=\"flex:2.7\">系统指令</div><div data-role=\"tool\" style=\"flex:22\">工具定义 5 个 ≈2.2 万字符</div><div data-role=\"ctx\" style=\"flex:2\" title=\"Skills 列表\"></div><div data-role=\"ink\" style=\"flex:.55\" title=\"环境信息\"></div><div data-role=\"gate\" style=\"flex:.34\" title=\"权限说明\"></div><div data-role=\"us\" style=\"flex:.1\" title=\"我们的话\"></div></div><p class=\"x-key\" data-reveal=\"1\"><span data-role=\"agent\"><i></i>系统指令 ≈2.7 千（含多代理团队说明）</span><span data-role=\"ctx\"><i></i>Skills 列表 ≈2 千</span><span data-role=\"ink\"><i></i>环境信息</span><span data-role=\"gate\"><i></i>权限说明</span><span data-role=\"us\"><i></i>我们的话</span></p><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:16px\">我们写的，只是<b>最右边最小的一格</b></div><p class=\"source-note\">下排是讲师用课程基线的一次记录，宽度大致对应大小：系统指令约 2.7 千字符（含多代理团队说明），工具定义约 2.2 万字符；右侧小格依次是 Skills 列表（约 2 千字符）、环境信息（约 550 字符）、权限说明（341 字符）和我们的话（17 个字）。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
      "steps": [
        "Harness 管的三样",
        "逐块标注",
        "我们那一格"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，先指三个框说清它们管什么，再说出“Harness”这个名字；不切查看器】\n\n第 1 章我们说过，Agent 把模型、当前可用的信息和工具组织起来，让任务一轮一轮往前推进。包在模型外面、把这些组装成请求、再去执行工具的那一层程序，叫 Harness，Codex 就是一个 Harness。组装请求时它管三样：系统指令，告诉模型怎么做事；工具，告诉模型能做什么；还有这一次的情况，比如在哪个目录、有什么权限、我们说了什么。",
        "【操作提示｜推进第 2 步，从左到右指请求带上的三大块，再指右侧小格的图例；数字来自讲师用课程基线（隔离 HOME）的一次运行】\n\n落到请求上，可以拆成六块。下面这条就是刚才那份记录，宽度大致对应大小。最大的一块是工具定义，5 个工具，大约 2.2 万字符。系统指令这次很短，连同一段多代理团队说明，也只有两千七百字符左右。Skills 列表大约两千字符，这份记录用的是干净环境，只有 Codex 自带的几个。右边是几个小格：Skills 列表、环境信息、权限说明，和我们的话。",
        "【操作提示｜推进第 3 步，指向最右那一小格和底部横条；留在课件】\n\n我们写的那句话，是最右边最小的一格。模型看到的，从来不只是我们写的话，而是 Harness 组装好的整份请求。那每一块为什么非有不可？我们一块一块问：如果没有它，会怎样。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "字符数来自 2026-10-20 15:16 课程基线（隔离 HOME，能力目录开，推理档位 max）发第一步那句话的 claude-tap 记录。input 共 6 项：第一条 developer 消息是系统指令，只有一句，145 字符（请求顶层的 instructions 字段为空，不要在面板里找那个字段）；第二条 developer 消息是 Skills 列表 1985 字符（只有 Codex 自带的）加权限说明 341 字符；第三、四条 developer 消息是多代理团队说明 2235 字符和 multi_agent_mode 开关说明 271 字符；之后是 user 角色的环境信息 550 字符和我们的话 17 字。工具定义在顶层 tools 字段，5 个，22028 字符。画面上“系统指令”一块 = 145 + 2235 + 271 ≈ 2.7 千字符。录制时按冻结记录核对，有出入就按实际记录替换。"
        },
        {
          "title": "讲师提示",
          "text": "第一次正式出现“Harness”这个词，先指着图说它做了什么，再给名字。这张图是本节的请求解剖地图，后面几页逐块放大，p16a 再整体框起来。“六块”里，多代理团队说明和开关说明归入“系统指令”一块：它们也是 developer 消息，讲的是模型的身份和协作方式；如学员在面板里数出更多条 developer 消息，用这一点解释。"
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
      "lead": "模型本身只会接着往下写。系统指令告诉它自己是谁、和谁一起工作。这次请求里的系统指令只有一句话，另有一段多代理团队说明；命令怎么跑、文件怎么改这些细节，写进了工具定义，下一页看。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:.9fr auto 1.3fr\"><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"gate\">没有它</span><p class=\"p-big\" style=\"font-weight:500\">只会接着往下写</p><p class=\"p-sub\">不知道自己是写代码的 Agent</p></div><div class=\"p-join\" data-reveal=\"1\"><span>这次的系统指令</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">中文意译</span><p style=\"margin-top:10px;line-height:1.6\">你是 Codex，基于 MiniMax-M3.1-Flash 的编程 Agent；你和用户共用同一个工作区，一起完成用户的目标</p><p class=\"p-sub\" style=\"margin-top:8px\">另有一段多代理团队说明：你是总负责的代理，可以派子代理分头做事</p></div></div><div class=\"p-bar\" data-reveal=\"2\">命令怎么跑、文件怎么改，<b>写在工具定义里</b></div><p class=\"source-note\">来源：讲师用课程基线的一次运行记录（2026-10-20）。系统指令原文是英文一句话，团队说明是一句概括</p>",
      "steps": [
        "没有它",
        "这次的系统指令",
        "细节在工具定义里"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向左侧“没有它”虚线框；不切工具窗口】\n\n先问最大的一块：如果没有系统指令会怎样？模型本身只会根据前文接着往下写。它不知道自己是一个写代码的 Agent，不知道要先读仓库、要改文件、遇到风险要停下来请示。",
        "【操作提示｜推进第 2 步，指向右侧中文意译，再指下面一行团队说明；不朗读英文原文】\n\n这次请求里的系统指令只有一句话，原文是英文，意思是：你是 Codex，一个基于 MiniMax-M3.1-Flash 的编程 Agent，你和用户共用同一个工作区，一起完成用户的目标。另外还有一段多代理团队说明，告诉它：你是总负责的那个代理，可以派出子代理分头做事。",
        "【操作提示｜推进第 3 步，指向底部横条；留在课件】\n\n那命令怎么跑、文件怎么改，这些细节写在哪？这次写进了工具定义的说明里，下一页就看。系统指令也不总是这么短，换一份模型能力目录，它会变成一万多字符的长篇，这一节最后再对比。系统指令说清了它是谁，可模型真要做事，还得有手。"
      ],
      "teaching": [
        {
          "title": "核对记录",
          "text": "2026-10-20 15:16 课程基线（能力目录开）：系统指令是 input 里第一条 developer 消息，145 字符，原文“You are Codex, a coding agent based on MiniMax-M3.1-Flash. You and the user share the same workspace and collaborate to achieve the user's goals.”；多代理团队说明 2235 字符，内容是“你是 /root，可以用 spawn_agent 等派子代理”，另有 271 字符的 multi_agent_mode 开关说明。exec_command、apply_patch 等嵌套工具的用法写在 exec 工具的描述里（p11）。能力目录关时，系统指令是 Codex 内置的约 1.7 万字符基础指令，放到 p15b 对比，这页不展示它的章节目录。"
        },
        {
          "title": "讲师提示",
          "text": "只意译，不大段引用原文；不推断 Codex 或 MiniMax 这样安排的内部动机。"
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
      "lead": "这次请求里有 5 个工具，每个都写清名字、用途和用法。最大的是 exec：它的 type 是 custom，模型在里面写一段 JavaScript，调用 exec_command、apply_patch 等嵌套工具；这些嵌套工具怎么用，都写在 exec 的描述里。模型只能可靠地调用被描述过的工具；它只是提出调用，真正执行的是 Harness。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.25fr 1fr\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">最大的一个：exec（只摘几行）</span><pre class=\"p-code\" style=\"margin-top:8px;font-size:17px;line-height:1.55\">{ \"type\": \"custom\",\n  \"name\": \"exec\",\n  \"description\": \"… tools.exec_command(…) …\" }</pre><p class=\"p-sub\" style=\"margin-top:8px\">exec_command、apply_patch 等嵌套工具的用法都写在描述里；另外 4 个：wait · request_user_input · collaboration · web_search</p></div><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"1\" style=\"align-self:start\"><span class=\"p-tag\" data-role=\"gate\">没有它</span><p class=\"p-big\" style=\"font-weight:500\">只能说，不能做</p><p class=\"p-sub\">没描述过的工具，调用不可靠</p></div></div><div class=\"p-bar\" data-reveal=\"1\">模型提出调用，<b>Harness 执行</b>，再把结果放回下一次请求</div>",
      "steps": [
        "工具长什么样",
        "谁在执行"
      ],
      "script": [
        "【操作提示｜停留课件 p11 第 1 步，依次指向左侧定义里的 type、name 和 description，再指下面一行另外 4 个工具；不切工具窗口】\n\n第二块，工具定义。这次请求里有 5 个工具，每个都写清楚叫什么名字、做什么用、怎么调用。最大的一个叫 exec，光它的说明就有一万四千多字符。它的 type 是 custom：模型不是只填几个参数，而是在里面写一小段 JavaScript，调用 exec_command 跑命令、apply_patch 改文件。这些嵌套工具怎么用，都写在 exec 的说明里，上一页说的命令怎么跑、文件怎么改，就在这里。",
        "【操作提示｜推进第 2 步，指向右侧“没有它”，再指底部横条；留在课件】\n\n如果没有工具定义，模型就只能“说”，不能“做”，而且它只能可靠地调用被描述过的工具。还要记住一点：模型只是提出调用，真正执行的是 Harness，执行结果再放进下一次请求交给模型，这就是第 1 章讲过的 Agent 循环。工具是手。那 Skills 呢，是不是也整份塞进了请求里？"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "2026-10-20 15:16 课程基线（能力目录开）：顶层 tools 共 5 个，22028 字符：exec 14276（type 为 custom，code mode）、collaboration 4874、request_user_input 1425、wait 1391、web_search 52。exec 描述里写了嵌套工具 exec_command、apply_patch、write_stdin、view_image、create_goal / get_goal / update_goal 和 MCP 资源工具的用法。画面代码只摘结构，description 用省略号，不是原文。"
        },
        {
          "title": "讲师提示",
          "text": "失败的工具调用和返回会怎样，留到 2.2 p24（走过的弯路），这里不展开。能力目录关时工具是 9 个普通函数工具，exec_command 直接是顶层工具，对比放在 p15b。"
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
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1.2fr auto 1fr\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">请求里的一条</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.55;overflow-wrap:anywhere\">- skill-creator: Create or update a Codex skill … (file: r0/skill-creator/SKILL.md)</p></div><div class=\"p-join\" data-reveal=\"1\"><span>用得上才读</span><i class=\"p-arrow\"></i></div><div class=\"p-box is-dashed\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">SKILL.md 全文</span><p>步骤 · 规则 · 参考资料</p><p class=\"p-sub\">不在这次请求里</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">目录是指针 · 装得越多，<b>每次请求越重</b></div><p class=\"source-note\">示例条目是 Codex 自带的 Skill，取自 2026-10-20 课程基线的一次运行</p>",
      "steps": [
        "目录里的一条",
        "用到才读全文",
        "代价"
      ],
      "script": [
        "【操作提示｜停留课件 p12 第 1 步，指向左侧条目的名字、描述和 file 路径；画面只用 Codex 自带 Skill，不切出讲师个人 Skills 列表】\n\n第三块，Skills 列表。左边是请求里的一条，来自 Codex 自带的一个 Skill：只有名字、一句英文描述，和这个 Skill 文件放在哪里。",
        "【操作提示｜推进第 2 步，指向右侧虚线框“不在这次请求里”；留在课件】\n\nSkill 的完整内容，也就是 SKILL.md 里的步骤和规则，并不在这次请求里。模型判断这个 Skill 用得上时，才会调用工具去读全文。这种先给目录、用到再展开的做法，叫渐进披露。",
        "【操作提示｜推进第 3 步，指向底部横条，可回指 p09 那块 Skills；留在课件】\n\n所以列表只是一份目录、一组指针。但目录本身也有代价：装的 Skills 越多，目录越长，每一次请求都要带着它。刚才那份记录是干净环境，列表只有两千字符左右；换成讲师日常的电脑，装了不少个人 Skills，列表有一万二千多字符，所以每个人看到的列表长短都不一样。剩下两块很小，可少了它们，模型连自己在哪台电脑上都不知道。"
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
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ink\">环境信息 · 约 550 字符</span><pre class=\"p-code\" style=\"margin-top:8px;font-size:17px;line-height:1.55\">&lt;cwd&gt;…/repo&lt;/cwd&gt;\n&lt;shell&gt;zsh&lt;/shell&gt;\n&lt;current_date&gt;2026-10-20&lt;/current_date&gt;\n&lt;timezone&gt;Asia/Shanghai&lt;/timezone&gt;</pre></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">权限说明 · 341 字符（摘一句）</span><p class=\"p-mono\" style=\"margin-top:8px;line-height:1.55\">`sandbox_mode` is `read-only`: The sandbox only permits reading files.</p></div></div><div class=\"p-bar\" data-reveal=\"2\">权限说明是<b>写给模型看的文字</b> · 真正拦住越界的是本地沙箱</div><p class=\"source-note\">取自 2026-10-20 课程基线的一次运行，路径已缩写</p>",
      "steps": [
        "环境信息",
        "权限说明",
        "只是文字"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，按行指 cwd、shell、current_date、timezone；画面取自 2026-10-20 课程基线的一次运行，路径已缩写，不切窗口】\n\n第四块，环境信息。模型的知识停在它训练截止的那一天，也看不到我们的电脑。所以 Harness 会写一小段文字告诉它：当前目录在哪，用的什么 Shell，今天几号，什么时区。没有这一段，它连“今天”是哪天都不知道。",
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
      "prompt": "只读任务，不修改任何文件。\n这个个人主页当初定了哪些要求和完成标准？\n请说明依据来自哪个文件的哪一段；\n不确定就写“不确定”，不要猜。",
      "label": "问一个项目问题",
      "title": "问一个和项目有关的问题，请求会多出什么？",
      "lead": "第二步换一个和项目有关的只读问题。Prompt 不提示文件名，Codex 要自己去找依据；回答里说出的文件，就是下一页在记录里要找的东西。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>只读，不给文件名</b><small>让它自己去找</small></span></li><li data-reveal=\"1\"><span><b>回复逐句看</b><small>哪句是要求，哪句是完成标准，哪句不确定</small></span></li><li data-reveal=\"2\"><span><b>它说依据在哪</b><small>这次：PROJECT_BRIEF.md 的“首页 v0 的验收依据”（第 31–39 行）、PROMPT_V1.md 的“人工决定”“任务”两段</small></span></li></ol></div><p class=\"source-note\">数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。 回答还指出 PROMPT_V1.md 第 3 行自称排练记录。</p>",
      "steps": [
        "只读提问",
        "看回复",
        "圈出依据"
      ],
      "script": [
        "【操作提示｜课件 p07 第 1 步 → 切 Terminal“claude-tap”标签页，在同一个 Codex 里粘贴画面上的只读 Prompt 并提交】\n\n第二步，问一个和项目有关的问题：这个个人主页当初定了哪些要求和完成标准？依据来自哪个文件的哪一段，不确定就说不确定。注意，我们没告诉它去看哪个文件，它得自己去找。这一步只读，不修改任何文件。",
        "【操作提示｜推进第 2 步，等回答结束，在 Terminal 里逐句指回复：哪句是要求、哪句是完成标准、哪句说了不确定；按实际回复讲】\n\n回答出来了。我们一句一句看：哪些是它说的要求，哪些是完成标准，有没有哪句它说不确定。",
        "【操作提示｜推进第 3 步，圈出回复里提到的依据文件名和段落；没有提到就如实说明，留到下一页查记录】\n\n再看它说依据在哪。讲师这次运行里，它说要求在 PROMPT_V1.md 的“人工决定”和“任务”两段，完成标准在 PROJECT_BRIEF.md 的“首页 v0 的验收依据”，第 31 到 39 行，连行号都给了。这些文件我们并没有告诉过它，那它是怎么知道的？回到请求记录里找。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在同一个 claude-tap 启动的 Codex 里提交此 Prompt，保留完整记录供 p14 使用。Codex 的回复录制时按实际记录截图，逐句贴标签，高亮它说出的依据文件。"
        },
        {
          "title": "实测记录",
          "text": "2026-10-20 15:16 课程基线（隔离 HOME，能力目录开，推理档位 max，Codex 0.163.0 + MiniMax-M3.1-Flash，codex exec -s read-only）在 starter 的 ch01-complete 快照（没有 AGENTS.md）上跑过一次：回答说要求在 PROMPT_V1.md 的“人工决定”“任务”两段；范围在 PROJECT_BRIEF.md 的“已确定的目标与范围”“1.5 的实现范围”；完成标准在 PROJECT_BRIEF.md 的“首页 v0 的验收依据”（第 31–39 行）；还指出 PROMPT_V1.md 第 3 行自称排练记录。全部给了文件、段落和行号。讲师自己的仓库录制时内容会不同，按实际回复讲。工作区没有被修改。"
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
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\"><h3>提出调用</h3><p>exec 里调用 exec_command：<code>cat -n PROJECT_BRIEF.md</code> 等</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\"><h3>Harness 执行</h3><p>返回带行号的文件内容</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"1\"><h3>下一次请求</h3><p>带上这段调用和返回</p></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>这一问：8 次请求</h3><p>15 次调用，都是 exec 里调 exec_command 跑 cat、git log 等；input 从 6 项涨到 43 项</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"2\"><h3>读到了</h3><p>回答里的文件和行号，都能在返回里找到；再看它理解得对不对</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">下一步从<b>上一步的返回</b>里来</div><p class=\"source-note\">数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-21，codex exec，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max）；随版本、模型、配置和任务变化，只说明结构</p>",
      "steps": [
        "调用和返回",
        "进入下一次请求",
        "对照回答"
      ],
      "script": [
        "【操作提示｜课件 p14 第 1 步 → 切 Chrome 查看器，打开 p07 这次提问的记录，找 Codex 提出读文件的那次工具调用和它的返回；画面上的命令和文件名按录制当次的记录改口】\n\n回到请求记录。在这次提问里，模型提出了工具调用：在 exec 里写一小段 JavaScript，调用 exec_command 跑 cat -n PROJECT_BRIEF.md。注意，它没有专门的“读文件”工具，读文件就是跑一条 shell 命令。Harness 执行它，把文件内容作为返回交了回去。",
        "【操作提示｜推进第 2 步 → 在查看器里打开下一次请求，定位刚才那段返回的内容并停留；没有读文件就如实说明，直接进入第 3 步】\n\n再打开下一次请求。刚才那段调用和返回，就出现在这里，跟着整份请求一起发给了模型。工具调用和返回也进了 context。讲师这一问一共发了 8 次请求，15 次工具调用，每一次请求都比上一次多带几项调用和返回。这就是第 1 章讲过的 Agent 循环：下一步，从上一步的返回里来。",
        "【操作提示｜回课件推进第 3 步，按录制当次实际那一支讲；保留原始记录，不重跑凑结果。之后进入 p16】\n\n最后对照回答。这次它读到了：回答里引的文件和行号，都能在返回里找到。读到了还不够，还要核对它理解得对不对。要是它没读文件就作答，回答就缺了依据，这正是我们在 Prompt 里要它说明依据的原因。"
      ],
      "teaching": [
        {
          "title": "演示分支",
          "text": "按录制实际选用：\n\n读到了：在记录中指认读取文件的那次工具调用、工具返回，以及下一次请求中出现的文件内容；再对照回答，检查来源与理解是否相符。\n\n没读文件，凭目录名或代码猜：核对完整请求与工具返回后指出依据缺失，这正是 Prompt 要求“说明依据”的原因。\n\n读到了但理解错了，或没找到依据、回答不确定或继续查找：均按实际结果讲。仅凭没有读取某一个文件，不能断言所有来源中都没有依据。保留原始记录，不重跑凑结果。"
        },
        {
          "title": "实测记录",
          "text": "2026-10-21 课程基线（能力目录开）重跑，问句去掉“v0”：8 次请求、15 次工具调用，都是 exec 里调 exec_command：ls、find、逐个 cat PROJECT_BRIEF.md、PROMPT_V1.md、CHECKPOINTS.md、README.md 等，git log / tag / status，再读 index.html、package.json、src/ 和 setup-check，最后 cat -n 几份要求文件取行号。input 6、11、20、27、32、37、40、43 项；input_tokens 7610 → 24961，缓存命中 5063 → 23328。回答仍引用 PROJECT_BRIEF.md“首页 v0 的验收依据”第 31–39 行和 PROMPT_V1.md 的人工决定表，比上一次铺得更开（还列了未完成的证据文件、缺失的 tag）。运行目录 lab-runs/ch02-context/2.1-step2-20261021-150635，不提交。上一次：2026-10-20 15:16 课程基线（能力目录开）一次运行：7 次请求、6 次工具调用，全部是 exec 里的 JavaScript 调 tools.exec_command：pwd / ls / git log；cat -n PROJECT_BRIEF.md、PROMPT_V1.md、CHECKPOINTS.md、TASK_01_01.md；README.md、PLACEHOLDER_CONTENT.md；docs/setup/TOOLCHAIN.md 与 git tag；grep；git status。没有专门的读文件工具，读文件就是跑 cat。每次请求的 input 都带上前面全部的调用和返回：6、9、12、15、18、21、24 项；input_tokens 7603、8450、11778、13852、16630、18198、18896，其中缓存命中 6395、7765、8614、12118、14438、17591、18815。录制版本或讲师仓库不同，次数和数字会变，按实际记录改。"
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
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><style>.x-w16{grid-template-columns:1.5fr 1fr}</style><div class=\"p-term\" data-reveal=\"0\" style=\"margin-bottom:12px;font-size:17px\" data-copy=\"uvx claude-tap@0.1.146 --tap-client codex --tap-target https://api.minimax.cn/v1 -s read-only\"><div class=\"dim\">$ uvx claude-tap@0.1.146 --tap-client codex --tap-target … -s read-only</div><div class=\"dim\">$ uvx claude-tap@0.1.146 --tap-client codex --tap-target … -s workspace-write</div></div><div class=\"p-walk x-w16\"><div data-reveal=\"1\"><div class=\"p-src\" style=\"--lh:40px\"><div class=\"p-fn\">permissions instructions <span class=\"add\">+1</span><span class=\"del\">−1</span></div><div class=\"p-ln del\"><i>−</i><code>`sandbox_mode` is `read-only`: … only permits reading files.</code></div><div class=\"p-ln add\"><i>+</i><code>`sandbox_mode` is `workspace-write`: … editing files in `cwd` …</code></div><div class=\"p-ln add\"><i>+</i><code>The writable roots are `…/repo`, …</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"1\"><span><b>341 → 630 字符</b><small>可写时多出可写目录；环境信息 550 → 1306</small></span></li><li class=\"is-ok\" data-reveal=\"2\"><span><b>按配置拼装</b><small>仓库里按沙箱模式分模板</small></span></li></ol></div><p class=\"source-note\" data-reveal=\"2\">模板位置：openai/codex 仓库 codex-rs/prompts/templates/permissions/。数字来自讲师用课程基线（隔离 HOME）的一次运行（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，写入模型能力目录，推理档位 max，codex exec）；随版本、模型、配置和任务变化，只说明结构。</p>",
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
        "note": "讲师 2026-10-20 在 Codex 0.163.0 上按这几步用第一步那句话实测过（课程基线默认写入模型能力目录；2026-10-05 在 0.160.0 上用另一句只读提问也测过）；权限说明与提问内容无关。字符数随版本和配置变化，只看两段说明的差别。末尾的 < /dev/null 让 codex exec 不再等待额外输入。"
      },
      "steps": [
        "两次启动",
        "两段说明",
        "按配置拼装"
      ],
      "script": [
        "【操作提示｜停留课件 p16 第 1 步，指两条命令末尾的 -s 参数；画面为讲师录制的两次运行，不现场重跑】\n\n看完了请求的组成，再换一个维度：权限。还是第一步那句话，一次用只读，一次用可写。怎么切？启动时在命令最后加上 -s read-only 或者 -s workspace-write，claude-tap 会把它不认识的参数原样交给 Codex。两次各开一个新会话，这样两份请求只差权限这一处。",
        "【操作提示｜推进第 2 步，指上方说明的删除行与新增行，再指右侧字符数；数字按录制当次的记录读】\n\n看权限说明的差异：只读时说沙箱只允许读文件；可写时变成允许编辑当前目录，还多了一行，列出哪些目录可写。说明从三百四十一字符变成六百三十，环境信息也跟着变长，从五百五十变成一千三百多。",
        "【操作提示｜推进第 3 步，指向“按配置拼装”和模板位置；留在课件】\n\n这段文字不是写死的。Codex 的仓库里，按沙箱模式和审批策略分别放了模板，Harness 按这次的配置拼出来。这就接上了第 1 章选权限时的做法：我们做的权限选择，会变成请求里的一段文字，同时变成本地沙箱的实际限制。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "2026-10-20 15:16 课程基线（能力目录开）实测第一步那句话：权限说明 341 → 630 字符，环境信息 550 → 1306 字符（可写时 permission_profile 里多出可写路径）；input_tokens 7519 → 7899；系统指令、工具定义、Skills 列表、多代理说明两次完全相同。较早一次能力目录关的记录是 341 → 676、642 → 1628，不再使用。录制版本定下后复测。"
        },
        {
          "title": "核对记录",
          "text": "模板位于 codex-rs/prompts/templates/permissions/（sandbox_mode/*.md、approval_policy/*.md），2026-01 起由固定段落改为按配置拼装（提交 87f7226cca）。旧数据来自 codex exec，审批策略为 never；交互界面中的审批文字会不同。"
        },
        {
          "title": "命令说明",
          "text": "已核对：Codex 0.160.0 与 0.163.0 的 -s/--sandbox 取值为 read-only、workspace-write、danger-full-access；claude-tap 0.1.145 的帮助写明未列出的参数会转发给所启动的客户端；2026-10-20 用课程固定的 0.1.146 按这两条命令实测，-s 参数同样转给了 Codex。复制按钮复制的是只读那一条，可写时把最后一个参数换掉。会话中途也能在 Codex 界面里改权限，但前面的对话仍在上下文里，对比不干净，所以用启动参数，两次各开新会话。"
        }
      ],
      "source": "index.html#p16",
      "seconds": 90
    },
    {
      "id": "p15b",
      "segment": "换个配置",
      "label": "换个模型能力目录",
      "title": "同一句话，换一份模型能力目录，请求大变样",
      "lead": "Codex 要为所用的模型找一份元数据，我们叫它模型能力目录：这个模型配哪套系统指令、哪种工具、什么推理档位。课程默认写入 MiniMax 官方 Codex 接入文档给的那份目录；去掉它再发同一句话，Codex 启动时提示找不到模型元数据，改用后备值，请求就大不一样。请求还会随个人配置（~/.codex、个人 Skills）、项目里的 AGENTS.md 和这次的权限变化，所以每个人在自己电脑上看到的都会和讲师的不同。这是讲师的对比示例，可自主尝试。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ok\">能力目录开（课程默认）</span><p style=\"margin-top:8px;line-height:1.6\">系统指令：一句话 + 团队说明<br>工具 5 个 ≈2.2 万字符（命令套在 exec 里）<br>推理档位 max<br><b>约 7.5 千 token</b></p></div><div class=\"p-join\" data-reveal=\"1\"><span>只改这一项</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">能力目录关</span><p style=\"margin-top:8px;line-height:1.6\">启动提示：找不到模型元数据<br>系统指令 ≈1.7 万字符<br>工具 9 个 ≈1.8 万字符（不套 exec）<br>不发推理档位<br><b>约 9 千 token</b></p><p class=\"p-sub\" style=\"margin-top:6px\">基础指令的章节：工作方式 · 性格 · AGENTS.md 规范 · 执行任务 · 验证 · 汇报</p></div></div><div class=\"p-bar\" data-reveal=\"2\">只改了一项配置，<b>模型看到的 context 就大不相同</b> · 课程默认打开能力目录</div><p class=\"source-note\">两次都是讲师用课程基线（隔离 HOME）发第一步那句话（2026-10-20，Codex 0.163.0 + MiniMax-M3.1-Flash，codex exec），只差是否写入模型能力目录；章节名为中文意译</p>",
      "repro": {
        "label": "自己对比一次",
        "steps": [
          {
            "text": "沿用上一页的练习目录 lab-runs/perm",
            "code": "cd lab-runs/perm"
          },
          {
            "text": "用课程基线跑一次，默认写入模型能力目录；需要 MINIMAX_API_KEY，浏览器会打开请求面板",
            "code": "../../tools/clean-codex.sh --tap -- exec -s read-only \"你好，用一句话介绍你能帮我做什么。\" < /dev/null"
          },
          {
            "text": "去掉能力目录，再跑同一句；启动时会提示找不到模型元数据",
            "code": "CLEAN_CODEX_CATALOG=0 ../../tools/clean-codex.sh --tap -- exec -s read-only \"你好，用一句话介绍你能帮我做什么。\" < /dev/null"
          },
          {
            "text": "在面板里对照两次请求：input 里的系统指令、顶层 tools 的个数，以及 reasoning 字段",
            "code": ""
          }
        ],
        "note": "讲师 2026-10-20 在 Codex 0.163.0 上按这几步实测过。能力目录是仓库里的 tools/codex-model-catalog.json，来自 MiniMax 官方 Codex 接入文档；CLEAN_CODEX_CATALOG=0 时脚本不写入它。换别的模型或版本，两边的差别会不同。"
      },
      "steps": [
        "能力目录开",
        "能力目录关",
        "只改了一项"
      ],
      "script": [
        "【操作提示｜停留课件 p15b 第 1 步，依次指左栏四行；画面为讲师 2026-10-20 的两次运行记录，不现场重跑】\n\n换权限会变，换模型配置呢？Codex 要为所用的模型找一份元数据，我们叫它模型能力目录，里面写着这个模型配哪套系统指令、哪种工具、什么推理档位。课程默认写入 MiniMax 官方 Codex 接入文档给的那份目录，前面几页看到的就是这种情况：系统指令一句话加团队说明，5 个工具约 2.2 万字符，推理档位是 max，整份请求大约七千五百 token。",
        "【操作提示｜推进第 2 步，指中间“只改这一项”，再依次指右栏各行和章节名；留在课件】\n\n现在只去掉这份目录，再发同一句话。Codex 启动时提示找不到这个模型的元数据，改用后备值。请求马上变了：系统指令换成 Codex 内置的基础指令，大约 1.7 万字符，章节有工作方式、性格、AGENTS.md 规范、执行任务、验证、汇报；工具变成 9 个，exec_command 这些直接列成工具，不再套在 exec 里，大约 1.8 万字符；请求里不再带推理档位；整份大约九千 token。",
        "【操作提示｜推进第 3 步，指向底部横条，再指页面上方“自己对比一次”入口，不展开；之后进入 p16a】\n\n只改了一项配置，模型看到的 context 就大不相同。课程默认打开能力目录，这是 MiniMax 官方 Codex 接入文档给的配置。请求的来源还不止这一项：你自己的 ~/.codex 配置和个人 Skills、项目里的 AGENTS.md、这次的权限，都会让请求不同，所以大家在自己电脑上看到的，会和讲师的不一样。想自己对比一次，步骤在页面上方。"
      ],
      "teaching": [
        {
          "title": "数字来源",
          "text": "2026-10-20 15:16 两次运行，只差 CLEAN_CODEX_CATALOG。开：input_tokens 7519；系统指令 145 字符 + 多代理团队说明 2235 + 开关说明 271；工具 5 个 22028 字符（exec 为 custom，code mode）；reasoning 为 {\"effort\": \"max\"}。关：启动提示 Model metadata … not found，用后备元数据；input_tokens 8994；input 4 项，系统指令 16979 字符（Codex 内置完整基础指令，章节有 How you work、Personality、AGENTS.md spec、Task execution、Validating your work、Presenting your work 等），没有多代理团队说明；工具 9 个 17767 字符，都是普通函数工具：exec_command、write_stdin、request_user_input、view_image、multi_agent_v1、get_goal、create_goal、update_goal、web_search；reasoning 为 {\"summary\":\"auto\"}，不发档位。Skills 列表 1985、权限说明 341、环境信息 550、我们的话 17 两边相同。"
        },
        {
          "title": "讲师提示",
          "text": "质量 A/B（开 / 关各 5 次，用 2.2 的 Prompt）见 courseware/ch02/materials/model-config/README.md：样本小，差异可能只是偶然，不上画面，不说哪种配置“更好”。codex exec 头部显示的 reasoning effort 与实际发出的不一致，以请求记录为准。关时的基础指令对应 openai/codex 仓库 codex-rs/protocol/src/prompts/base_instructions/default.md，只列章节名的中文意译，不大段引用原文。"
        },
        {
          "title": "讲师提示",
          "text": "原 p15 的“个人 / 项目 / 本次”三层来源与隔离 HOME 对比移到配套页，这里只在第 3 步口播里用一句话带过。不现场重跑。"
        }
      ],
      "source": "index.html#p15b",
      "seconds": 90
    },
    {
      "id": "p16a",
      "segment": "小结",
      "label": "这些加在一起",
      "title": "这些加在一起，就是 context",
      "lead": "系统指令、工具定义、Skills 列表、环境信息、权限说明、我们的话，再加上工具调用和返回，模型这一次能看到的全部内容，就是 context。第 1 章说 context 里该放什么，这里第一次看到它的实际样子；后面四节都用同一套配置录下的请求记录来看。",
      "html": "<div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">这一次请求</span><div class=\"p-chain\" style=\"margin-top:4px;font-size:20px\"><span>系统指令</span><i>·</i><span>工具定义</span><i>·</i><span>Skills 列表</span><i>·</i><span>环境信息</span><i>·</i><span>权限说明</span><i>·</i><span>工具调用和返回</span><i>·</i><span>我们的话</span></div></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:10px\"><b>Context</b>：模型这一次能看到的全部内容</div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:10px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ink\">Anthropic 的说法</span><p>Context 是从大模型采样时包含的那一组 token</p><p class=\"p-sub\">包括系统指令、工具、MCP、外部数据、消息历史等 · 2025-09</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"3\"><span class=\"p-tag\" data-role=\"ctx\">课程地图</span><p>第 1 章：Agent 循环 · 权限<br><b>第 2 章：Context</b> 点亮<span class=\"p-sub\">，后面几章还没走到</span></p></div></div>",
      "refs": [
        {
          "kind": "read",
          "group": "Anthropic，2025-09-29",
          "text": "Effective context engineering for AI agents",
          "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
        }
      ],
      "steps": [
        "整体框起",
        "叫它 context",
        "官方说法",
        "点亮地图"
      ],
      "script": [
        "【操作提示｜停留课件 p16a 第 1 步，用手势框住整排内容；不切窗口】\n\n把这一节看到的放在一起：系统指令、工具定义、Skills 列表、环境信息、权限说明、工具调用和返回，最后才是我们的话。",
        "【操作提示｜推进第 2 步，指向结论条】\n\n这些加在一起，就是 context：模型这一次能看到的全部内容。第 1 章我们讲过 context 里该放什么，这是第一次看到它实际长什么样。",
        "【操作提示｜推进第 3 步，指向官方说法，读出来源；原文链接在阅读模式和讲解全文的参考链接里】\n\nAnthropic 有一篇讲 context 的文章，给的定义是：从大模型采样时包含的那一组 token。它还列了这一组里有什么：系统指令、工具、外部数据、消息历史。和我们刚才一块块拆出来的，基本对得上。",
        "【操作提示｜推进第 4 步，指向点亮的 Context；留在课件】\n\n在课程地图上，第 2 章点亮的就是 Context。后面四节，我们都会用同一套配置录下的请求记录，看它怎么变长、怎么清空，又怎样影响 Codex 的改动。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "“模型这一次能看到的全部内容”是我们自己的一句话定义。官方说法取自 Anthropic 2025-09-29 的文章 Effective context engineering for AI agents，画面是中文意译：原句把 context 定义为从大模型采样时包含的那一组 token，并列出 context 状态里有系统指令、工具、MCP、外部数据、消息历史等。2026-10-20 核对原文。可以顺带说一句：这篇文章讲的“context engineering”就是第 1 章说的“context 里该放什么”，本课后面几章还会用到。"
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
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>从请求记录中指出四类不是你写的内容，缺了其中一类会怎样？</h3><div data-reveal=\"1\"><p>系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类说出后果<span class=\"p-back-to\" data-role=\"agent\">回到 拆开这份请求</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>同一句话，有位同学的请求里系统指令很长、有 9 个工具，讲师的只有一句话和 5 个工具。最可能是哪里不同？</h3><div data-reveal=\"2\"><p>最可能是他的 Codex 没有为这个模型写入能力目录（启动时会提示找不到模型元数据），用了后备的系统指令和工具<span class=\"p-back-to\" data-role=\"us\">回到 换个模型能力目录</span></p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">3</span><div><h3>讲师第二步的记录里，模型是从哪里知道完成标准的？它在记录里的什么位置？</h3><div data-reveal=\"3\"><p>从读文件那次工具调用的返回：cat -n PROJECT_BRIEF.md 返回带行号的内容，紧跟在调用后面，之后每次请求都带着；回答里的“首页 v0 的验收依据”（第 31–39 行）就出自这里<span class=\"p-back-to\" data-role=\"ctx\">回到 它是怎么知道的</span></p></div></div></div></div>",
      "steps": [
        "暂停",
        "第 1 题",
        "第 2 题",
        "第 3 题"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，只显示三道题，不揭示解析；念完留出暂停视频的间隙，不切窗口】\n\n我们先暂停一下，各自回答三个问题。第一，从请求记录里指出四类不是你写的内容，再说说缺了其中一类会怎样。第二，同一句话，有位同学的请求里系统指令很长、有 9 个工具，讲师的只有一句话和 5 个工具。最可能是哪里不同？第三，讲师第二步的记录里，模型是从哪里知道完成标准的？它在记录里的什么位置？",
        "【操作提示｜推进第 2 步，揭示第 1 题解析，指向“回到 拆开这份请求”】\n\n第一题，系统指令、工具定义、Skills 列表、环境信息、权限说明，任选四类。比如没有工具定义，模型只能说不能做；没有环境信息，它不知道当前目录和日期。答不上来，回到“拆开这份请求”那几页再看一遍。",
        "【操作提示｜推进第 3 步，揭示第 2 题解析，指向“回到 换个模型能力目录”】\n\n第二题，最可能是模型配置不同：他的 Codex 没有为这个模型写入能力目录，启动时会提示找不到模型元数据，用的是后备的系统指令和工具。只改这一项，请求就大不相同。答不上来，回到“换个模型能力目录”那一页。",
        "【操作提示｜推进第 4 步，揭示第 3 题解析，指向“回到 它是怎么知道的”】\n\n第三题，从一次工具调用的返回里。Codex 在 exec 里调用 exec_command，跑 cat -n PROJECT_BRIEF.md 这些命令，Harness 执行后，把带行号的文件内容作为返回放进记录：调用后面紧跟着它的返回，之后的每一次请求都带着这一段。回答里说的“首页 v0 的验收依据”，第 31 到 39 行，就出自这段返回。答不上来，回到“它是怎么知道的”那一页。"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 120
    },
    {
      "id": "p19",
      "segment": "小结",
      "label": "本节小结",
      "title": "模型收到的，远不止我们那句话",
      "lead": "只说一句话，Codex 发出的请求里有系统指令、工具定义、Skills 列表、环境信息和权限说明；工具调用和返回也会进入 context；换权限、换模型配置，同一句话的 context 就不同。下一节回答：对话多几轮，context 怎么变？",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一张地图</h3><div class=\"p-star\" style=\"width:260px;font-size:24px\">Context<br>六块，加上工具返回</div><p class=\"p-sub\" style=\"text-align:center\">我们的话只是最后一格</p></div><div><h3 data-reveal=\"1\">两个认识</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-point\" data-reveal=\"1\">工具调用和返回也会进入 context</li><li class=\"is-point\" data-reveal=\"2\">换权限、换模型配置，context 就不同</li></ul></div><div class=\"p-next\" data-reveal=\"3\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.2 补上项目经历</h3><p>对话多几轮，context 怎么变？</p></div></div></div>",
      "steps": [
        "拆开的请求",
        "工具调用也进来",
        "换配置就不同",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p19 第 1 步，指向星形里的 Context；不切工具窗口】\n\n这一节我们没有改一行代码，只说了一句话，就看到了模型实际收到的东西：六块内容，我们那句话只是最后一格。",
        "【操作提示｜推进第 2 步，指向第一条要点】\n\n问一个项目问题时，工具调用和它的返回也会进入 context，模型的下一步从这里来。",
        "【操作提示｜推进第 3 步，指向第二条要点】\n\n同一句话，换个权限、换个模型配置，context 就不同。",
        "【操作提示｜推进第 4 步，指向“2.2 补上项目经历”卡片。不退出 Terminal 中本节的 Codex 会话与开发服务器，2.2 在这个会话里执行 /clear 开始本轮】\n\n下一节，我们要补上项目经历，和 Codex 多聊几轮。对话多了，context 会怎么变？我们接着用同一套配置看请求记录。"
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
      "seconds": 180
    },
    {
      "label": "小结",
      "seconds": 360
    }
  ]
};
