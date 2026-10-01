window.lesson = {
  "title": "环境搭建与第一次 AI 协作闭环",
  "chapter": "第 1 章 · Prompt",
  "section": "01.01",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 首页。",
  "scenes": [
    {
      "id": "p01",
      "label": "只改一句话，怎样证明改对？",
      "title": "只改一句话，怎样证明改对？",
      "kicker": "第 1 章 · 1.1 · 找准任务",
      "lead": "本章：首次闭环 → 执行机制 → 权限 → Prompt → 首页 v0 → 最小权限",
      "html": "<ol class=\"p-map\" data-reveal=\"0\"><li class=\"is-now\"><b>1.1</b>首次闭环</li><li class=\"\"><b>1.2</b>拆开执行过程</li><li class=\"\"><b>1.3</b>工具与权限</li><li class=\"\"><b>1.4</b>写清任务</li><li class=\"\"><b>1.5</b>完成首页</li><li class=\"\"><b>1.6</b>最小权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">修改前</span><p class=\"p-big\" style=\"font-weight:500\">你好，欢迎来到我的练习页面。</p></div><div class=\"p-join\" data-reveal=\"1\"><span>只改这一句</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">任务目标</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding 课堂！</p></div></div>",
      "steps": [
        "看原文",
        "比较目标"
      ],
      "script": [
        "第一章我们要做出一个个人主页，不过第一步很小：只改环境检查页上的这一句欢迎语。上面这条路线是本章的六节，今天在第一节。",
        "目标是把它改成“你好，欢迎来到 Vibe Coding 课堂！”。问题来了：改完以后，你怎么证明改对了？先把这个问题留着，这一节结束时，我们用页面和 Diff 来回答。要改对，第一步是找对文件。"
      ],
      "segment": "找准任务",
      "seconds": 45,
      "source": "index.html#p01",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 看原文\n\n2. 比较目标"
        },
        {
          "title": "追问与预期判断",
          "text": "只改一句话，怎样证明改对？；你准备怎样证明改对了？先留下这个问题，后面用页面和 Diff 回答。"
        },
        {
          "title": "演示分支",
          "text": "学员尚未准备项目时，提示下一页查看获取位置，不把环境搭建过程塞进封面讲解。"
        },
        {
          "title": "备课标记",
          "text": "M01、M02。起点与终点对应整章，本节交付限于独立环境页及首次协作记录。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先看这一句欢迎语。这节只改它，正式首页留到 1.5。\n\n你准备怎样证明改对了？先留下这个问题，后面用页面和 Diff 回答。"
        }
      ],
      "notes": "<p>预算 45 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p02",
      "label": "先找准你要改的那一份文件",
      "title": "先找准你要改的那一份文件",
      "kicker": "第 1 章 · 1.1 · 找准任务",
      "lead": "课程仓库里有两个容易混的目录：course-starter 是课程模板，只用来初始化；练习在 projects/personal-homepage 这份副本里进行。这次唯一要改的是 setup-check/index.html，动手前先记下当前分支和初始状态。",
      "html": "<ul class=\"p-tree\" style=\"font-size:25px;padding:22px 28px;line-height:1.9\"><li class=\"is-dim\" data-reveal=\"0\"><span class=\"p-path\">course-starter/</span><span class=\"p-note\">模板 · 不在这里练习</span></li><li class=\"is-open\" data-reveal=\"1\"><span class=\"p-path\">projects/personal-homepage/</span><span class=\"p-note\">练习副本 · 在这里打开</span><ul><li class=\"is-target\" data-reveal=\"2\"><span class=\"p-path\">setup-check/index.html</span><span class=\"p-note\">唯一目标</span></li></ul></li></ul><p class=\"source-note\"><a href=\"../../preparation.html\">课前准备与排障</a></p>",
      "steps": [
        "区分模板",
        "确认根目录",
        "定位文件"
      ],
      "script": [
        "课程仓库旁边有两个目录很容易混。course-starter 是课程模板，只用来初始化，我们不在这里练习。",
        "你的练习副本在 projects/personal-homepage。编码工具里打开的应该是这个目录；打开后先确认当前工作目录，目录不对就先纠正，再发任务。",
        "这次唯一要动的文件是 setup-check/index.html。动手前，先记下当前分支和初始状态；如果里面已经有改动，先弄清它从哪来，不要直接清掉。文件找到了，接下来准备工具和模型。"
      ],
      "segment": "找准任务",
      "seconds": 105,
      "source": "index.html#p02",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 区分模板\n\n2. 确认根目录\n\n3. 定位文件"
        },
        {
          "title": "追问与预期判断",
          "text": "先找准你要改的那一份文件；只改 setup-check/index.html。已有改动先辨认来源，不能清空。"
        },
        {
          "title": "演示分支",
          "text": "发现未知改动时，口播：“这里已有变化，我们先确认它的来源，再继续任务。”Git 尚未就绪者记录状态，第四页给出处理路径。"
        },
        {
          "title": "备课标记",
          "text": "M01、M03。任务文本中的文件范围是操作约定，不等于已经核实的技术隔离；实际权限在 1.3 展开。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先指出课程模板，再打开课程仓库同级的独立练习副本。\n\n让学员指认当前工作目录。目录不对时先纠正，不发修改任务。\n\n只改 setup-check/index.html。已有改动先辨认来源，不能清空。"
        }
      ],
      "notes": "<p>预算 105 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p02a",
      "label": "安装工具与选择模型是两件事",
      "title": "安装工具与选择模型是两件事",
      "kicker": "第 1 章 · 1.1 · 准备环境",
      "lead": "工具入口按官方 CLI 说明安装，在练习目录里启动并登录；模型是另一件事。课程主用 MiniMax M3，其余模型只作观察，不做排名。没有完成一次真实请求，就不能写成“可用”。",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">先安装</span><h3>工具入口</h3><p><a href=\"https://learn.chatgpt.com/docs/codex/cli\" target=\"_blank\" rel=\"noopener noreferrer\">官方 CLI 安装说明</a></p></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b><span>两件事</span></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">再选择</span><h3>课程模型</h3><p class=\"p-big\">主用 <a href=\"https://www.minimax.cn/models/text/m3\" target=\"_blank\" rel=\"noopener noreferrer\">MiniMax M3</a></p><p class=\"p-sub\">观察：<a href=\"https://openai.com/zh-Hans-CN/index/gpt-6-astra/\" target=\"_blank\" rel=\"noopener noreferrer\">GPT-6 Astra</a> · <a href=\"https://www.anthropic.com/claude-opus-5-5\" target=\"_blank\" rel=\"noopener noreferrer\">Claude Opus 5</a> · <a href=\"https://www.anthropic.com/claude-fable-and-mythos-5-1\" target=\"_blank\" rel=\"noopener noreferrer\">Claude Fable 5</a></p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\"><b>待核验 ≠ 可用</b></div>",
      "steps": [
        "先安装入口",
        "再看模型",
        "核实可用性"
      ],
      "script": [
        "先装工具入口。按官方 CLI 安装说明，在自己的系统上安装，然后在练习目录里启动并登录。下载慢或者安装失败，不要在课上干等，转到课前排障处理。",
        "工具和模型是两件事。课程主用 MiniMax M3；GPT-6 Astra、Claude Opus 5、Claude Fable 5 只作为观察对象，我们不做性能排名，也不需要下载模型权重。",
        "能不能用，以授课账号的实际核验为准。没有完成一次真实请求，就不算接入成功，待核验的项不要写成可用。装好之后，还要逐项确认环境能不能开工。"
      ],
      "segment": "准备环境",
      "seconds": 180,
      "source": "index.html#p02a",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先安装入口\n\n2. 再看模型\n\n3. 核实可用性"
        },
        {
          "title": "追问与预期判断",
          "text": "安装工具与选择模型是两件事；记录实际工具、模型与配置。未完成真实请求之前不算模型接入成功。"
        },
        {
          "title": "演示分支",
          "text": "- 官网不能访问：只使用已保存、标有来源和时间的页面回放；明确是回放，不改用无来源下载站。\n- 学员问具体接入配置：指向课程的接入材料与下一页自检，不临场编造 endpoint、API Key 或配置命令。\n- 页面入口发生变化：按当前官方资料定位，先核对再操作，不背诵已经失效的导航位置。"
        },
        {
          "title": "备课标记",
          "text": "M03、M05，V01、V02。模型来源与未完成的核验见文末。保留当前课件指定的模型和链接，不在这里增加 SOTA 定义，也不把备课状态逐条念给学员。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n切到录制版本的官方安装说明。不要现场等待长时间下载，失败转课前排障。\n\n沿用课程既定模型安排。根据课程维护者确认，M3 教学接入已测；Claude 名称与定位仍待官方核验；不声称需要下载模型权重。\n\n记录实际工具、模型与配置。未完成真实请求之前不算模型接入成功。"
        }
      ],
      "notes": "<p>预算 180 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p03",
      "label": "哪些条件不满足，就不能开始？",
      "title": "哪些条件不满足，就不能开始？",
      "kicker": "第 1 章 · 1.1 · 准备环境",
      "lead": "按 docs/setup/ENVIRONMENT.md 逐项检查三件事：浏览器能打开并刷新环境页，Git 能读出分支、状态和 Diff，Codex CLI 能从练习目录启动。CLI 暂不可用时，可以先用已核验的桌面入口，但要在 1.3 结束前补齐。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:16px 20px\"><h3 data-node=\"browser\">浏览器</h3><div style=\"display:grid;grid-template-columns:28px 1fr;gap:6px 10px;align-items:start;margin-top:8px\"><span style=\"width:26px;height:26px;border-radius:50%;background:#15803D;color:#fff;display:grid;place-items:center;font-size:15px\">✓</span><p data-node=\"browser_pass\" data-edge=\"browser:browser_pass\">打开并刷新环境页</p><span style=\"width:26px;height:26px;border-radius:50%;background:#D9481C;color:#fff;display:grid;place-items:center;font-size:15px\">✗</span><p data-node=\"browser_fail\" data-edge=\"browser:browser_fail\" class=\"p-sub\">核对路径或本地服务</p></div></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\" style=\"padding:16px 20px\"><h3 data-node=\"git\">Git</h3><div style=\"display:grid;grid-template-columns:28px 1fr;gap:6px 10px;align-items:start;margin-top:8px\"><span style=\"width:26px;height:26px;border-radius:50%;background:#15803D;color:#fff;display:grid;place-items:center;font-size:15px\">✓</span><p data-node=\"git_pass\" data-edge=\"git:git_pass\">分支、状态、Diff 可读</p><span style=\"width:26px;height:26px;border-radius:50%;background:#D9481C;color:#fff;display:grid;place-items:center;font-size:15px\">✗</span><p data-node=\"git_fail\" data-edge=\"git:git_fail\" class=\"p-sub\">补齐 Git 与仓库</p></div></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"2\" style=\"padding:16px 20px\"><h3 data-node=\"cli\">Codex CLI</h3><div style=\"display:grid;grid-template-columns:28px 1fr;gap:6px 10px;align-items:start;margin-top:8px\"><span style=\"width:26px;height:26px;border-radius:50%;background:#15803D;color:#fff;display:grid;place-items:center;font-size:15px\">✓</span><p data-node=\"cli_pass\" data-edge=\"cli:cli_pass\">从练习目录启动</p><span style=\"width:26px;height:26px;border-radius:50%;background:#D9481C;color:#fff;display:grid;place-items:center;font-size:15px\">✗</span><p data-node=\"cli_fail\" data-edge=\"cli:cli_fail\" class=\"p-sub\">临时用桌面入口</p></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">三处都<b>通过</b>才开始</div>",
      "steps": [
        "检查页面",
        "检查仓库",
        "检查 CLI"
      ],
      "script": [
        "打开 docs/setup/ENVIRONMENT.md，逐项填写。第一项是浏览器：环境页能打开、能刷新，就算通过；打不开，先核对路径或本地服务。",
        "第二项是 Git：版本、分支、状态和 Diff 都能读出来。顺手记下路径和初始工作树，辨认已经存在的改动。",
        "第三项是 Codex CLI：能从练习目录启动就通过。如果 CLI 暂时不可用，只能先用已核验的桌面入口临时起步，并在 1.3 结束前补齐 CLI 基线。三项都有证据，才进入下一步。不过，能启动、能登录，还不等于模型接入已经通过。"
      ],
      "segment": "准备环境",
      "seconds": 240,
      "source": "index.html#p03",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 检查页面\n\n2. 检查仓库\n\n3. 检查 CLI"
        },
        {
          "title": "追问与预期判断",
          "text": "哪些条件不满足，就不能开始？；CLI 不可用时只能走已核验的临时桌面路径；1.3 结束前补齐 CLI 基线。"
        },
        {
          "title": "演示分支",
          "text": "学员尚未执行检查时，口播：“先标待补做，执行以后再填写结果。”出现错误时，记录具体项目与下一步；不修改源码掩盖环境失败，不让学员在截图或记录中暴露密钥。"
        },
        {
          "title": "备课标记",
          "text": "M01、M03、M05，V01、V02。`ENVIRONMENT.md` 已随练习项目提供。失败处理已包含在本页，不再提示学员前往独立的失败页。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n打开 docs/setup/ENVIRONMENT.md。逐项填写通过或待补做，并保存实际输出。\n\n记录路径、版本、分支与初始工作树，辨认已有改动。\n\nCLI 不可用时只能走已核验的临时桌面路径；1.3 结束前补齐 CLI 基线。"
        }
      ],
      "notes": "<p>预算 240 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p03-access",
      "label": "能登录，不等于接入已经通过",
      "title": "能登录，不等于接入已经通过",
      "kicker": "第 1 章 · 1.1 · 准备环境",
      "lead": "能登录还不够：认证、真实请求、只读练习文件、核对实际模型与配置，要一路走通，任何一步失败都如实记录。Node.js 与 npm 本节用不到，但 1.5 生成首页前必须就绪。",
      "html": "<div class=\"p-flow\" style=\"--n:4\" data-reveal=\"0\"><div class=\"p-node\" data-role=\"agent\"><h3>认证</h3></div><div class=\"p-node\" data-role=\"agent\"><h3>真实请求</h3></div><div class=\"p-node\" data-role=\"tool\"><h3>只读文件</h3></div><div class=\"p-node\" data-role=\"ok\"><h3>配置一致</h3></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:6px\"><div class=\"p-box is-dashed\" data-role=\"tool\" data-reveal=\"1\"><h3>Node.js / npm</h3><p>本节不用 · 1.5 前就绪</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\"><h3>接入失败</h3><p>记录阻塞 · 先看回放</p></div></div>",
      "steps": [
        "验证真实请求",
        "隔离 Node 问题",
        "如实记录降级"
      ],
      "script": [
        "接入要一路走通：认证成功，发出一次真实请求，只读一下练习文件，再确认实际模型和配置一致。任何一步失败，都记录错误，不要当作成功。",
        "Node.js 和 npm 这一节用不到，欢迎语页面不依赖它们。但到 1.5 生成正式首页之前，必须完成固定工具链的核验。",
        "如果连桌面入口也用不了，就先看回放，把阻塞记下来，恢复后再补实操；也不要换别的智能体来冒充这一步通过。环境就绪，我们开始第一次协作。"
      ],
      "segment": "准备环境",
      "seconds": 180,
      "source": "index.html#p03-access",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 验证真实请求\n\n2. 隔离 Node 问题\n\n3. 如实记录降级"
        },
        {
          "title": "追问与预期判断",
          "text": "能登录，不等于接入已经通过；桌面入口也不可用就仅观察，保留阻塞。不能换其他智能体来冒充 Codex 操作通过。"
        },
        {
          "title": "演示分支",
          "text": "学员尚未执行检查时，口播：“先标待补做，执行以后再填写结果。”出现错误时，记录具体项目与下一步；不修改源码掩盖环境失败，不让学员在截图或记录中暴露密钥。"
        },
        {
          "title": "备课标记",
          "text": "M01、M03、M05，V01、V02。`ENVIRONMENT.md` 已随练习项目提供。失败处理已包含在本页，不再提示学员前往独立的失败页。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n登录后还要发出实际请求，并只读目标文件。无法认证或调用失败时记录错误，不伪装成功。\n\nNode 未就绪可以先完成无依赖欢迎语任务，但不能进入正式首页生成。\n\n桌面入口也不可用就仅观察，保留阻塞。不能换其他智能体来冒充 Codex 操作通过。"
        }
      ],
      "notes": "<p>预算 180 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p04",
      "label": "先交任务，再看计划，最后确认",
      "title": "先交任务，再看计划，最后确认",
      "kicker": "第 1 章 · 1.1 · 首次执行",
      "lead": "第一次协作分三步：先交完整任务，请 Agent 复述目标、非目标和计划，此时不允许写入；再核对计划里有没有多出样式修改、安装或发布；三者都对，才批准这一次单文件的文字修改。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>任务</b><small>只改 <code>h1#welcome-message</code></small></span></li><li data-reveal=\"1\"><span><b>计划</b><small>读取 → 替换文字 → 查页面与 Diff</small></span></li><li class=\"is-ok\" data-reveal=\"2\"><span><b>人工确认</b><small>都对才批准 · 越界先停</small></span></li></ol></div>",
      "steps": [
        "提交完整请求",
        "核对计划",
        "明确确认"
      ],
      "script": [
        "左边是这次发给 Codex 的完整请求，可以复制。先请它复述目标、非目标和小计划，这时还不允许写入。任务很具体：只改 h1#welcome-message，文字要和任务卡逐字一致。",
        "拿到计划后，核对它有没有偷偷加上样式修改、安装依赖或者发布。计划应该是：读取目标，只替换文字，再检查页面和 Diff。偏离了，就让它先改计划。",
        "复述、范围和计划都对，才明确批准这一次单文件的文字修改。这次同意不代表以后所有动作都被授权，越界就先停。确认之后，我们切到实操。"
      ],
      "segment": "首次执行",
      "seconds": 90,
      "source": "index.html#p04",
      "prompt": "只读取 setup-check/index.html 和必要的仓库状态。\n\n把 h1#welcome-message 改为：\n“你好，欢迎来到 Vibe Coding 课堂！”\n\n不改其他内容、结构或样式，不改其他文件，不装依赖，不发布。\n\n先复述目标、非目标和小计划，等我确认后再修改；越界先停。\n\n完成后说明改动与页面、diff 检查方法。",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 提交完整请求\n\n2. 核对计划\n\n3. 明确确认"
        },
        {
          "title": "追问与预期判断",
          "text": "先交任务，再看计划，最后确认；核对后明确批准本次单文件文字修改；不要把这次同意当成之后所有动作的授权。"
        },
        {
          "title": "演示分支",
          "text": "- 理解或计划有偏差：指出具体差异，让 AI 修正理解，暂不批准写入。\n- AI 提前写入：说“它没有等确认，这个流程要求没有满足”，停止继续修改并检查已有 diff，保留真实记录。\n- 右侧页面未加载：先检查 4174 服务与项目路径，不把空白面板当成页面成功运行。"
        },
        {
          "title": "备课标记",
          "text": "M01、M02，V01、V03。目标文案与任务卡一致。启动页面服务是课前操作，发送给 AI 的欢迎语任务不包括安装、启动服务或修改课件。"
        },
        {
          "title": "左右对读",
          "text": "左侧黑底完整请求，右侧逐步讲解。长请求在面板内滚动；复制保留全文，阅读模式展开。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n复制本页完整请求。先要求复述目标、非目标与小计划，此时不允许写入。\n\n检查计划是否偷偷增加样式修改、依赖或发布。发现偏离就要求修正计划。\n\n核对后明确批准本次单文件文字修改；不要把这次同意当成之后所有动作的授权。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>",
      "layout": "prompt-scene"
    },
    {
      "id": "p04-live",
      "label": "切到实操：盯住这三件事",
      "title": "切到实操：盯住这三件事",
      "kicker": "第 1 章 · 1.1 · 首次执行",
      "lead": "切到实操前先记住三件事：看的是不是同一份副本，是不是确认后才写入，是不是只改了指定文字。默认显示的是 Starter 原始预览，启动练习副本的 4174 服务后再连接，才是实际结果。",
      "html": "<div class=\"demo-visual\" data-reveal=\"1\"><div class=\"welcome-demo\"><div class=\"demo-toolbar\"><span data-demo-status>Starter 原始页面 · 仅供预览</span><button type=\"button\" data-demo-connect>连接练习副本</button><button data-demo-reload=\"\" type=\"button\">刷新案例</button><a href=\"http://localhost:4174/setup-check/\" rel=\"noopener\" target=\"_blank\">独立打开 ↗</a></div><iframe loading=\"lazy\" src=\"../../../../starters/personal-homepage/setup-check/index.html\" title=\"独立练习项目的环境检查页\"></iframe><p class=\"caption\">默认是 Starter 预览。实操先启动练习副本的 4174 服务，再连接；核对同一份文件。</p></div></div><aside class=\"demo-notes\"><h3 style=\"font:400 26px/1.3 var(--p-title);margin:0 0 10px\">边看边核对</h3><ol class=\"p-watch\" data-reveal=\"0\"><li>同一份副本</li><li>确认后写入</li><li>只改指定文字</li></ol></aside>",
      "steps": [
        "先给观察清单",
        "连接真实副本"
      ],
      "script": [
        "切过去之前，先记住三件事：展示的是不是同一份副本，是不是确认后才写入，是不是只改了指定文字。",
        "在练习副本里启动 4174 服务，再点“连接练习副本”。默认显示的是 Starter 原始预览，服务没启动时，它不能当作实际结果。做完，我们切回来，用证据检查。"
      ],
      "segment": "首次执行",
      "seconds": 90,
      "source": "index.html#p04-live",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先给观察清单\n\n2. 连接真实副本"
        },
        {
          "title": "追问与预期判断",
          "text": "切到实操：盯住这三件事；在练习副本启动 4174 服务，再点连接。默认 Starter 仅作原始预览；若服务未启动，不把预览当实际结果。"
        },
        {
          "title": "演示分支",
          "text": "- 理解或计划有偏差：指出具体差异，让 AI 修正理解，暂不批准写入。\n- AI 提前写入：说“它没有等确认，这个流程要求没有满足”，停止继续修改并检查已有 diff，保留真实记录。\n- 右侧页面未加载：先检查 4174 服务与项目路径，不把空白面板当成页面成功运行。"
        },
        {
          "title": "备课标记",
          "text": "M01、M02，V01、V03。目标文案与任务卡一致。启动页面服务是课前操作，发送给 AI 的欢迎语任务不包括安装、启动服务或修改课件。"
        },
        {
          "title": "左右对读",
          "text": "左侧实际 HTML 预览与连接控件，右侧观察清单。页面可滚动，独立打开可查看完整页面。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n接下来只看三件事：修改的是不是同一副本、有没有先确认、是否只替换文字。\n\n在练习副本启动 4174 服务，再点连接。默认 Starter 仅作原始预览；若服务未启动，不把预览当实际结果。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>",
      "layout": "html-scene"
    },
    {
      "id": "p05",
      "label": "页面正确，还要查改动范围",
      "title": "页面正确，还要查改动范围",
      "kicker": "第 1 章 · 1.1 · 检查与修正",
      "lead": "验收要两类证据：页面回答“改对没有”，刷新同一份副本逐字核对；Diff 回答“多改没有”，要对照初始状态看完整 Diff 和文件列表。两类都符合才接受，否则带着准确的差异去修正。",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><div class=\"p-head\"><h3>页面证据</h3><span class=\"p-tag\" data-role=\"ok\">对不对</span></div><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i><span>setup-check · 同一副本</span></div><div class=\"p-page-body\" style=\"font-size:23px\">你好，欢迎来到 Vibe Coding 课堂！</div></div></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><div class=\"p-head\"><h3>Diff 证据</h3><span class=\"p-tag\" data-role=\"gate\">多没多</span></div><div class=\"p-term\">git diff -- setup-check/index.html</div></div></div><ol class=\"p-watch is-row\" data-reveal=\"2\"><li class=\"is-done\">同一副本</li><li class=\"is-done\">确认后写入</li><li class=\"is-done\">指定文字变化</li></ol>",
      "steps": [
        "观察运行结果",
        "审查所有改动",
        "作出判断"
      ],
      "script": [
        "先看页面。刷新同一份副本，逐字核对欢迎语，原来的布局要保留。截图时，要能看出检查的是哪一份副本。",
        "再看 Diff。运行 git diff，而且要对照初始状态看完整的 Diff 和文件列表；只看目标文件里的一条新增行，证明不了别处没变。",
        "回到刚才那三件事，逐条打勾：同一副本、确认后写入、只改指定文字。两类证据都符合才接受；有多余变化或漏字，就带着准确的差异去修正。那么，单看一段 Diff 能说明多少？"
      ],
      "segment": "检查与修正",
      "seconds": 180,
      "source": "index.html#p05",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 观察运行结果\n\n2. 审查所有改动\n\n3. 作出判断"
        },
        {
          "title": "追问与预期判断",
          "text": "页面正确，还要查改动范围；两类证据都符合才接受。若有多余变化或漏字，带着准确差异进入修正。"
        },
        {
          "title": "演示分支",
          "text": "页面没变化时，先核对文件路径、服务目录与刷新结果。确有多余改动时，记录具体位置。全部通过时明确说通过，不为了下一页的讲解虚构失败。"
        },
        {
          "title": "备课标记",
          "text": "M01、M04，V01。本节不运行 React 应用或 production build；当前证据只覆盖欢迎语任务。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n切到真实页面，刷新并逐字核对。截图要能说明当前检查的是哪份副本。\n\n对照初始状态看完整 Diff。只看一条新增行，不能证明别处没变。\n\n两类证据都符合才接受。若有多余变化或漏字，带着准确差异进入修正。"
        }
      ],
      "notes": "<p>预算 180 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p05-diff",
      "label": "这份 Diff 能说明什么？",
      "title": "这份 Diff 能说明什么？",
      "kicker": "第 1 章 · 1.1 · 检查与修正",
      "lead": "这段 Diff 是教学截取：它能说明这句文字从旧改成新，但证明不了别的文件没变。每份证据只对应它能支持的那条结论，其余部分还要看完整 Diff、文件列表和实际页面。",
      "html": "<div class=\"p-walk\" style=\"grid-template-columns:1.35fr 1fr\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:44px\"><div class=\"p-fn\">setup-check/index.html <span class=\"add\">+1</span><span class=\"del\">−1</span></div><div class=\"p-ln del\"><i>−</i><code>你好，欢迎来到我的练习页面。</code></div><div class=\"p-ln add\"><i>+</i><code>你好，欢迎来到 Vibe Coding 课堂！</code></div></div><p class=\"source-note\" style=\"margin-top:8px\">教学截取；删除为红底，新增为绿底。</p></div><ol class=\"p-notes\"><li class=\"is-ok\" data-reveal=\"0\"><span><b>能说明</b><small>这段文字从旧改成新</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>还不能证明</b><small>没有修改其他文件</small></span></li><li data-reveal=\"1\"><span><b>继续检查</b><small>完整 Diff、文件列表与实际页面</small></span></li></ol></div>",
      "steps": [
        "先判断",
        "揭示边界"
      ],
      "script": [
        "这两行是教学截取，不是真实执行记录，删除是红底，新增是绿底。它能说明这段文字从旧版改成了新版。只看这两行，你能确认整个任务通过吗？",
        "不能。它证明不了没有修改其他文件，还要看完整 Diff、文件列表和实际页面。每份证据，只对应它能支持的那条结论。如果检查发现不对，接下来怎么反馈？"
      ],
      "segment": "检查与修正",
      "seconds": 60,
      "source": "index.html#p05-diff",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先判断\n\n2. 揭示边界"
        },
        {
          "title": "追问与预期判断",
          "text": "这份 Diff 能说明什么？；不能。还缺完整文件差异、其他文件状态和浏览器结果；把证据对应到它能支持的结论。"
        },
        {
          "title": "演示分支",
          "text": "页面没变化时，先核对文件路径、服务目录与刷新结果。确有多余改动时，记录具体位置。全部通过时明确说通过，不为了下一页的讲解虚构失败。"
        },
        {
          "title": "备课标记",
          "text": "M01、M04，V01。本节不运行 React 应用或 production build；当前证据只覆盖欢迎语任务。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n这是教学截取，不是真实执行记录。只给这两行，你能确认整个任务通过吗？\n\n不能。还缺完整文件差异、其他文件状态和浏览器结果；把证据对应到它能支持的结论。"
        }
      ],
      "notes": "<p>预算 60 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p06",
      "label": "“不对”要改成可执行的反馈",
      "title": "“不对”要改成可执行的反馈",
      "kicker": "第 1 章 · 1.1 · 检查与修正",
      "lead": "发现不对时，先准确说出实际和期望差在哪里，例如漏了“课堂”二字，而不是只说一句“不对”。反馈只要求补这两个字，不追加美化；修正后刷新同一页面，再复查完整 Diff。",
      "html": "<div class=\"demo-notes\"><div style=\"display:grid;gap:12px\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:12px 18px\"><span class=\"p-tag\" data-role=\"gate\">实际 · 教学示例</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding<span class=\"p-miss\">&nbsp;</span>！</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:12px 18px\"><span class=\"p-tag\" data-role=\"ok\">期望</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding <span class=\"p-ins\">课堂</span>！</p></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"font-size:21px\">只补“课堂”二字 → 刷新同一页面 → <b>复查完整 Diff</b></div></div></div>",
      "steps": [
        "指出现象",
        "限定修正",
        "再次验证"
      ],
      "script": [
        "假设结果漏了“课堂”两个字，这是一个教学示例。先准确说出实际和期望差在哪里，而不是只说一句“不对”。",
        "期望是“你好，欢迎来到 Vibe Coding 课堂！”。左边是这次的反馈请求：只补这两个字，不追加任何美化。",
        "修正之后，刷新同一个页面，再复查完整 Diff。修一次，查一次，这就是一个闭环。我们把刚才的步骤连起来看。"
      ],
      "segment": "检查与修正",
      "seconds": 150,
      "source": "index.html#p06",
      "prompt": "教学示例：页面显示“你好，欢迎来到 Vibe Coding！”；\n任务要求是“你好，欢迎来到 Vibe Coding 课堂！”。\n请只补回“课堂”二字，不改其余内容、结构或样式。\n修正后刷新同一页面，逐字核对，并检查完整 Diff。",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 指出现象\n\n2. 限定修正\n\n3. 再次验证"
        },
        {
          "title": "追问与预期判断",
          "text": "“不对”要改成可执行的反馈；修正后重新看页面和完整 Diff。若现场一次成功，使用标明来源的失败素材，不伪造现场失败。"
        },
        {
          "title": "演示分支",
          "text": "- 有真实问题：把屏幕占位内容替换成真实证据，提交反馈，复验并记录。\n- 首轮全对且有教学样例：说“实际任务已经通过，现在切换到教学样例练习修正”，两份记录分开。\n- 首轮全对且没有样例：说“刚才的标题改动只是一个假设。这里练习描述反馈，没有执行真实修正。”不能填写修复成功。\n- 修正仍失败：记录当前证据和下一步，不无限重试。"
        },
        {
          "title": "备课标记",
          "text": "M04。故障样例的准备状态、使用来源与实际操作结果分别记录。不强迫每次任务都产生错误。"
        },
        {
          "title": "左右对读",
          "text": "左侧黑底完整请求，右侧逐步讲解。长请求在面板内滚动；复制保留全文，阅读模式展开。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n假设结果漏掉课堂二字。先让学员准确说出实际与期望的差异。\n\n反馈只要求补两个字，不追加美化。复制完整反馈时说明这是教学示例。\n\n修正后重新看页面和完整 Diff。若现场一次成功，使用标明来源的失败素材，不伪造现场失败。"
        }
      ],
      "notes": "<p>预算 150 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>",
      "layout": "prompt-scene"
    },
    {
      "id": "p06-loop",
      "label": "什么时候继续，什么时候停？",
      "title": "什么时候继续，什么时候停？",
      "kicker": "第 1 章 · 1.1 · 检查与修正",
      "lead": "把整条路径连起来：说明目标、复述计划、人工确认，然后才写入；写入后检查页面和 Diff。检查之后有三个出口——通过就记录，不符就限定范围修正再检查，无法验证或需要越界就记录并停下。",
      "html": "<div class=\"p-flow\" style=\"--n:6;column-gap:28px\"><div class=\"p-node\" data-role=\"ink\" data-reveal=\"0\" data-node=\"goal\"><h3>说明目标</h3><p>范围与标准</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\" data-node=\"plan\" data-edge=\"goal:plan\"><h3>复述与计划</h3><p>核对理解</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\" data-node=\"confirm\" data-edge=\"plan:confirm\"><h3>人工确认</h3><p>写入前</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" data-node=\"edit\" data-edge=\"confirm:edit\"><h3>执行修改</h3><p>指定文字</p></div><div class=\"p-node\" data-role=\"ink\" data-reveal=\"1\" data-node=\"check\" data-edge=\"edit:check\"><h3>检查结果</h3><p>页面 + Diff</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"1\" data-node=\"record\" data-edge=\"check:record\"><h3>接受并记录</h3><p>留下证据</p></div><div class=\"p-fork\" data-reveal=\"1\" style=\"grid-column:4/7;--gap:28px\"><div class=\"l\" data-reveal=\"1\" data-edge=\"check:repair\"><span>不符</span></div><div class=\"r\" data-reveal=\"2\" data-edge=\"check:stop\"><span>无法继续</span></div></div><div class=\"p-node is-row2\" data-role=\"agent\" data-reveal=\"1\" data-node=\"repair\" data-edge=\"repair:check\" style=\"grid-column:4\"><h3>反馈并修正</h3><p>限定范围</p><span class=\"p-loopnote\">↺ 修正后再检查</span></div><div class=\"p-node is-row2\" data-role=\"gate\" data-reveal=\"2\" data-node=\"stop\" style=\"grid-column:6\"><h3>停止并记录</h3><p>无法验证 · 需越界</p></div></div>",
      "steps": [
        "检查前提",
        "判断检查结果",
        "保留停止出口"
      ],
      "script": [
        "回看整条路径：说明目标，复述和计划，人工确认，然后才执行修改。确认一定发生在写入之前。",
        "修改后检查结果。通过，就接受并记录证据；不符，就依据准确的差异反馈，限定范围修正，修完再检查。",
        "还有第三个出口：无法验证、缺材料，或者需要越界时，记录阻塞并停下来，不无限重试。现在轮到你自己走一遍。"
      ],
      "segment": "检查与修正",
      "seconds": 90,
      "source": "index.html#p06-loop",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 检查前提\n\n2. 判断检查结果\n\n3. 保留停止出口"
        },
        {
          "title": "追问与预期判断",
          "text": "什么时候继续，什么时候停？；如果无法验证、缺材料或需要越界，记录阻塞并暂停，不无限重试。"
        },
        {
          "title": "演示分支",
          "text": "- 有真实问题：把屏幕占位内容替换成真实证据，提交反馈，复验并记录。\n- 首轮全对且有教学样例：说“实际任务已经通过，现在切换到教学样例练习修正”，两份记录分开。\n- 首轮全对且没有样例：说“刚才的标题改动只是一个假设。这里练习描述反馈，没有执行真实修正。”不能填写修复成功。\n- 修正仍失败：记录当前证据和下一步，不无限重试。"
        },
        {
          "title": "备课标记",
          "text": "M04。故障样例的准备状态、使用来源与实际操作结果分别记录。不强迫每次任务都产生错误。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n回看从任务到执行的路径，确认发生在写入之前。\n\n通过才记录；不满足标准时依据证据反馈并限定修正，再检查。\n\n如果无法验证、缺材料或需要越界，记录阻塞并暂停，不无限重试。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p07",
      "label": "独立完成一次，再拿证据回答",
      "title": "独立完成一次，再拿证据回答",
      "kicker": "第 1 章 · 1.1 · 独立练习",
      "lead": "暂停视频，用自己的练习副本独立走一遍，不复制老师的截图。复述、计划、确认、前后截图、Diff 与修正记录写进 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md；页面正确但 Diff 越界，不能算通过。",
      "html": "<span class=\"p-tag\" data-role=\"us\" style=\"justify-self:start\">独立练习</span><div class=\"p-task\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><h3>输入与任务</h3><p>自己的副本 · 指定欢迎语</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>交付</h3><p>复述 · 计划 · 确认 · 截图 · Diff · 修正记录</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><h3>验收</h3><p>文案准确 · 范围合规 · 问题已复验</p></div></div>",
      "steps": [
        "暂停跟做",
        "整理记录",
        "对照验收"
      ],
      "script": [
        "请暂停视频，用你自己的练习副本，按刚才的流程独立完成一次欢迎语修改。不要复制老师的成功截图。",
        "完成后，把复述、计划、确认、前后截图、Diff、Review 和修正记录，写进 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md。如果没有发生真实修正，就注明练习素材来源和还缺的证据。",
        "对照验收：文案准确、范围合规、问题已经复验或明确记录。想一想，页面正确但 Diff 越界，能通过吗？不能。用桌面入口完成的，标为临时通过，1.3 前补齐 CLI。最后，我们把这一节收一下。"
      ],
      "segment": "独立练习",
      "seconds": 210,
      "source": "index.html#p07",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 暂停跟做\n\n2. 整理记录\n\n3. 对照验收"
        },
        {
          "title": "追问与预期判断",
          "text": "独立完成一次，再拿证据回答；页面正确但 Diff 越界能通过吗？不能。临时桌面路径标临时通过，1.3 前补 CLI。"
        },
        {
          "title": "演示分支",
          "text": "证据缺失就补检查，不凭回忆填写没执行过的结果。环境未就绪者保留“仅观察 / 待补做”状态。需要补练修正时使用标明来源的教学样例，不把样例错误归到真实首次任务。"
        },
        {
          "title": "备课标记",
          "text": "M02、M03、M04。证据由学员另行整理到 `docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md`，该文件尚需学员创建，不扩展第五页给 AI 的单文件修改授权。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n用自己的副本执行，不复制教师的成功截图。录播可暂停，完成后继续。\n\n写入 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md。没有真实修正时标明练习素材来源与尚缺证据。\n\n页面正确但 Diff 越界能通过吗？不能。临时桌面路径标临时通过，1.3 前补 CLI。"
        }
      ],
      "notes": "<p>预算 210 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p07-recap",
      "label": "先确认，再修改；拿证据收尾",
      "title": "先确认，再修改；拿证据收尾",
      "kicker": "第 1 章 · 1.1 · 独立练习",
      "lead": "这一节只改了一句话，却完整走过了确认、执行、检查和反馈。带走一个习惯：页面和 Diff 一起看，缺证据就不写通过。下一节用这份记录，把 Agent 的执行过程拆开来看。",
      "html": "<div class=\"p-sketch\" style=\"align-items:center\"><div data-reveal=\"0\"><h4 style=\"text-align:center\">一个习惯</h4><div class=\"p-star\" style=\"width:270px;font-size:27px\">页面与 Diff<br>一起看</div><p class=\"p-sub\" style=\"text-align:center\">缺证据不写通过</p></div><div data-reveal=\"1\"><h4>三个出口</h4><ul class=\"p-exits\" style=\"gap:14px\"><li class=\"is-pass\">通过就记录</li><li class=\"is-fix\">不符就修正复验</li><li class=\"is-stop\">受阻就停止</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h4>下一节</h4><div class=\"p-box\" data-role=\"us\"><h3>1.2 拆开执行过程</h3></div></div></div>",
      "steps": [
        "收拢习惯",
        "区分出口",
        "交接证据"
      ],
      "script": [
        "这一节只改了一句话，但你已经完整走过确认、执行、检查和反馈。带走一个习惯：页面和 Diff 一起看，缺证据就不写通过。",
        "检查之后有三个出口：通过就记录，不符就修正再复验，受阻就停下来记录。停下来，也是一个明确的工程决定。",
        "保留好你的原始记录。下一节，我们就用这份记录，把 Agent 的执行过程拆开看：你发出一句话之后，到底发生了什么。"
      ],
      "segment": "独立练习",
      "seconds": 60,
      "source": "index.html#p07-recap",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 收拢习惯\n\n2. 区分出口\n\n3. 交接证据"
        },
        {
          "title": "追问与预期判断",
          "text": "先确认，再修改；拿证据收尾；保留自己的原始记录，下一节用它区分信息、动作和结果。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n这次只改一句话，但你已经走过确认、执行、检查和反馈。\n\n修正之后仍要复查。做不下去时记录阻塞也是明确的工程决定。\n\n保留自己的原始记录，下一节用它区分信息、动作和结果。"
        }
      ],
      "notes": "<p>预算 60 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    }
  ],
  "segments": [
    {
      "label": "找准任务",
      "seconds": 150
    },
    {
      "label": "准备环境",
      "seconds": 600
    },
    {
      "label": "首次执行",
      "seconds": 180
    },
    {
      "label": "检查与修正",
      "seconds": 480
    },
    {
      "label": "独立练习",
      "seconds": 270
    }
  ]
};
