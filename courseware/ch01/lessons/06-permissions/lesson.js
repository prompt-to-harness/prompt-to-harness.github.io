window.lesson = {
  "title": "工程经验：为什么不能给 Agent 所有权限",
  "chapter": "第 1 章 · Prompt",
  "section": "01.06",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 首页。",
  "scenes": [
    {
      "id": "p32",
      "label": "改欢迎语，要多少权限？",
      "title": "改欢迎语，要多少权限？",
      "kicker": "第 1 章 · 1.6 · 任务与能力",
      "lead": "本章收尾：把权限选择对应到任务与证据",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-done\"><b>1.2</b>拆开执行过程</li><li class=\"is-done\"><b>1.3</b>工具与权限</li><li class=\"is-done\"><b>1.4</b>写清任务</li><li class=\"is-done\"><b>1.5</b>完成首页</li><li class=\"is-now\"><b>1.6</b>最小权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">任务</span><p class=\"p-big\" style=\"font-weight:500\">只改一句欢迎语</p></div><div class=\"p-join\" data-reveal=\"1\"><b>?</b></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">额外能力</span><p>私人目录 · 其他项目 · 安装 · 发布</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">先对任务，<b>再谈授权</b></div>",
      "steps": [
        "回看任务",
        "判断必要性",
        "留下问题"
      ],
      "script": [
        "【操作提示｜课件 p32 第 1 步 → 切 VS Code，打开独立练习项目的 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md，定位欢迎语任务的原始请求；旁边打开 setup-check/index.html，搜索 welcome-message。只回看，不重新发送修改请求；展示后回课件】\n\n上一节，我们已经围绕个人主页做了一轮生成和检查。现在回到最开始那个小任务：把页面上的一句欢迎语换成指定的文字。你看这份记录，当时我们要求改的是哪个文件、哪句话，都写得很清楚。\n\n这节我们就拿这件小事，想明白一个问题：为了把它做完，到底需要给 Agent 多少权限？这里说的权限，就是允许它接触哪些资源、执行哪些动作。",
        "【操作提示｜回课件 p32 第 2 步，逐项指向右侧“私人目录、其他项目、安装、发布”；不打开这些目录或执行这些动作】\n\n右边列了四类额外能力。读私人目录，能帮我们找到这句欢迎语吗？修改另一个项目，和这个页面有什么关系？只换一段文字，需要安装新依赖吗？本地改完以后，是否还要把它发布到网上？\n\n按刚才那份任务，四项都不需要。我们已经知道目标文件在哪，也知道要换成什么文字。把这些能力加进来，并没有补上当前任务缺少的条件。",
        "【操作提示｜推进第 3 步，指向“先对任务，再谈授权”；留在课件】\n\n所以，先别从“哪个选项最省事”开始选。先说清要做什么，再看完成它需要哪些动作。\n\n你可能会觉得，多给一点权限，至少能少弹几次确认，做起来更顺。这个想法很常见。接下来我们把“任务需要什么”和“额外能力会带来什么影响”放到一起看，就知道该怎么取舍了。"
      ],
      "segment": "任务与能力",
      "seconds": 50,
      "source": "index.html#p32",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "改欢迎语，需要这么多权限吗？\n\n权限越大就一定越容易完成吗？下一页比较具体影响。"
        },
        {
          "title": "演示分支",
          "text": "学员想看访问私人目录的真实演示时，这样说明：“用合成材料足以分析后果，这里不访问真实私人数据。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M05、M12]。"
        },
        {
          "title": "讲师提示",
          "text": "只复用 1.3 的记录，不重新操作权限界面。\n\n请逐项说出这些能力为什么不是当前任务所需。\n\n权限越大就一定越容易完成吗？下一页比较具体影响。"
        }
      ]
    },
    {
      "id": "p33",
      "label": "必要能力与额外影响分开看",
      "title": "必要能力与额外影响分开看",
      "kicker": "第 1 章 · 1.6 · 任务与能力",
      "lead": "回到 1.3 只改一句欢迎语的任务，把每项能力按“这次需不需要”分开：读取目标、写入这一句是必要的；读私人目录、写无关文件、安装和发布都不是，只会带来额外影响。“以后可能用得上”不是这次授权的理由。",
      "html": "<div class=\"p-matrix\" style=\"--n:1;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) minmax(0,1.4fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>能力</span><span class=\"p-c\">改欢迎语需要吗</span><span>影响</span></div><div data-reveal=\"0\"><span>读目标与仓库状态</span><span class=\"p-c\" data-mk=\"fit\"> 需要</span><span>定位文字</span></div><div data-reveal=\"1\"><span>写指定欢迎语</span><span class=\"p-c\" data-mk=\"fit\"> 需要</span><span>改动目标文件，仍查 Diff</span></div><div data-reveal=\"2\"><span>读私人目录 / 写无关文件</span><span class=\"p-c\" data-mk=\"over\"> 不需要</span><span>资料暴露 / 误改其他工作</span></div><div data-reveal=\"3\"><span>安装依赖 / 发布</span><span class=\"p-c\" data-mk=\"over\"> 不需要</span><span>环境被改 / 内容公开</span></div></div>",
      "steps": [
        "必要读取",
        "必要写入",
        "额外读写",
        "额外安装发布"
      ],
      "script": [
        "【操作提示｜课件 p33 第 1 步 → 切 Terminal 的“仓库检查”标签页，在独立练习根目录运行 pwd（PowerShell 用 Get-Location）、git status --short；切 VS Code 指向 setup-check/index.html 的目标文字。说明这是当前状态，不是当时的初始状态；随后回课件】\n\n先看表格第一行，读目标和仓库状态。这些信息有具体用途：读目标文件，是为了找到要替换的文字；看目录和仓库状态，是为了确认正在处理哪份项目，有没有原来就留下的改动。\n\n这里终端显示的是我们现在的状态。要回看第一次修改前是什么样，还得找当时保存的记录。当前输出和历史记录，要分清楚。",
        "【操作提示｜推进第 2 步 → VS Code 打开欢迎语任务留存的完整 Diff，指向文件路径、删除行和新增行；若已提交且当前 Diff 为空，使用已保存的任务差异，不把空 Diff 当作历史证明。缺记录则标待补；回课件】\n\n第二行是写入。要把欢迎语换掉，就得允许修改目标文件。我们看这份差异时，先看文件路径，再看删掉和加上的文字，最后看有没有其他变化。\n\n允许它写入，解决的是能不能动手的问题。至于有没有改对、有没有顺手改了别处，还要用实际差异来检查。你可以对照自己的记录，找一找当时这两类证据分别放在哪里。",
        "【操作提示｜推进第 3 步，指向“资料暴露”和“误改其他工作”；仅用课件分析，不访问私人目录或无关项目】\n\n再看第三行。读私人目录，即使没有修改文件，也可能让原本与任务无关的资料进入处理过程。写无关文件，则可能影响你正在做的其他工作。\n\n这两类影响不一样：一个涉及资料被读取，一个涉及已有内容被改动。但在欢迎语任务里，判断依据是一样的——它们都找不到对应的必要动作，所以这次不用给。",
        "【操作提示｜推进第 4 步，比较“安装依赖”和“发布”；不执行命令，不打开发布页面】\n\n最后是安装和发布。安装会改变依赖或环境；发布会把内容带到本地项目之外，让别人能够访问。只是改一句文字，为什么要同时承担这些影响呢？\n\n上一节做 React 首页时，我们确实讨论过安装依赖。那是另一个任务，有自己的前提和范围。不能因为后面某一步会用到，就提前把所有能力交出去。每次都回到眼前这件事，判断它到底需要什么。"
      ],
      "segment": "任务与能力",
      "seconds": 90,
      "source": "index.html#p33",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "必要能力与额外影响分开看；以后可能用不构成本次授权理由，也不为演示风险真的执行。"
        },
        {
          "title": "演示分支",
          "text": "学员指出后续要安装 React 依赖时回应：“那是 1.5 的明确任务，要重新按其范围判断。它不能倒过来证明欢迎语任务也需要安装。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M05、M12]；产品界面若复用截图，引用 [核验 V03] 的版本记录。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "读取范围也要与任务有关。\n\n欢迎语任务需要写入，但只到完成它所需的范围。\n\n分别指出信息风险和对已有工作的影响，不实际访问私人目录。\n\n以后可能用不构成本次授权理由，也不为演示风险真的执行。"
        }
      ]
    },
    {
      "id": "p34",
      "label": "过少、匹配、过大，分别会怎样？",
      "title": "过少、匹配、过大，分别会怎样？",
      "kicker": "第 1 章 · 1.6 · 归纳原则",
      "lead": "权限不是越少越好，也不是越多越稳。少到改不了，就说明缺口、申请必要的写入；多出来的能力不会让结果更正确，只会放大出错时的影响。只给完成当前任务所需的能力与范围，就是最小权限（Least Privilege）。",
      "html": "<style>.x-sl{position:relative;display:grid;grid-template-columns:1fr 1.1fr 1fr;column-gap:22px;row-gap:0}.x-sl-track{grid-column:1/4;position:relative;height:74px}.x-sl-track::before{content:'';position:absolute;left:0;right:0;top:30px;height:16px;border-radius:9px;background:#E7E2D6;border:2px solid #243042;filter:url(#p-rough)}.x-sl-zone{position:absolute;top:30px;height:16px;border:2px solid transparent}.x-sl-zone.lo{left:0;width:31.5%;background:#F4B9A4;border-radius:9px 0 0 9px}.x-sl-zone.ok{left:33.5%;width:33%;background:#86C99A}.x-sl-zone.hi{right:0;width:31.5%;background:#F4B9A4;border-radius:0 9px 9px 0}.x-sl-knob{position:absolute;top:14px;left:50%;width:44px;height:44px;margin-left:-22px;border-radius:50%;background:#15803D;border:4px solid #fff;box-shadow:0 0 0 2.5px #15803D,3px 4px 0 rgba(36,48,66,.18)}.x-sl-end{position:absolute;top:0;font:400 20px/1 var(--p-title);color:#4A5260}.x-sl-end.l{left:0}.x-sl-end.r{right:0;color:#A8350F}.x-sl-tick{position:absolute;top:52px;font:400 19px/1 var(--p-title);color:#A8350F;transform:translateX(-50%)}</style><div class=\"x-sl\"><div class=\"x-sl-track\"><span class=\"x-sl-end l\">权限少</span><span class=\"x-sl-end r\">权限多 →</span><i class=\"x-sl-zone lo\" data-reveal=\"0\"></i><i class=\"x-sl-zone ok\" data-reveal=\"1\"></i><i class=\"x-sl-zone hi\" data-reveal=\"2\"></i><span class=\"x-sl-knob\" data-reveal=\"1\"></span></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"grid-column:1;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">过少 · 只能读</h3><p style=\"font-weight:700\">卡住：改不了欢迎语</p><p class=\"p-sub\" style=\"margin-top:4px\">说明缺口，申请必要写入</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"grid-column:2;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">匹配 · 读目标 + 改这一句</h3><p style=\"font-weight:700\">刚好完成</p><p class=\"p-sub\" style=\"margin-top:4px\">执行后查 Diff</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-column:3;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">过大 · 任意写入、发布</h3><p style=\"font-weight:700\">多出风险</p><p class=\"p-sub\" style=\"margin-top:4px\">收窄到任务所需</p></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:16px\">滑块停在刚好的一段：<b>最小权限 · Least Privilege</b></div>",
      "steps": [
        "过少",
        "匹配",
        "过大",
        "命名原则"
      ],
      "script": [
        "【操作提示｜课件 p34 第 1 步，指向左侧“只能读”；本页三种情况均为课件推演，不切 Terminal 更改配置】\n\n先看左边，假如这次只允许读取。Agent 可以找到欢迎语，也可以告诉你应该怎么改，但它没法直接把修改写进文件。这样就缺了一项完成任务所需的能力。\n\n遇到这种情况，应该把缺口说具体：为了替换这句文字，需要对目标文件进行写入。我们再判断是否允许这项动作。不能一遇到受阻，就直接跳到最大的权限。",
        "【操作提示｜推进第 2 步，指向中间“读目标＋改这一句”和“执行后查 Diff”】\n\n中间这组就和任务对得上了：能定位目标，也能完成这次修改。每项能力都有用得上的地方，改完还要检查结果。\n\n图里“改这一句”说的是我们要求的任务范围。实际工具能把写入限制到什么粒度，还得看当时的配置；不能看到这张图，就认定系统已经只允许改这一行。下一页我们会把这件事单独拆开。",
        "【操作提示｜推进第 3 步，指向右侧“任意写入、发布”；保持课件画面】\n\n右边则给得太大了。原本只需要改一个目标文件，现在其他内容也可能被修改，甚至还能对外发布。假如它理解错了任务，可能影响的地方就更多。\n\n多出这些能力，并没有告诉它哪句欢迎语才是正确答案。结果是否符合要求，仍然要靠任务说明和检查。我们要收窄的是用不上的能力，而不是省掉该做的检查。",
        "【操作提示｜推进第 4 步，指向 Least Privilege；经典背景沿用大纲，只作思想来源介绍，不引用未核实的原文、年份或当前产品配置。无需新开 Chrome 外站】\n\n现在把三种情况放在一起看：少到做不了，不合适；多到能影响无关内容，也没必要。只给完成当前任务所需的能力和范围，这就叫最小权限，英文是 Least Privilege。\n\nSaltzer 和 Schroeder 关于系统保护的经典论述里，就有这条原则。我们借它理解今天的授权取舍，具体软件怎么配置，还得看软件本身。你要记住的判断很简单：这项能力，对应的是当前任务里的哪个动作？如果说不出来，就先别加进去。"
      ],
      "segment": "归纳原则",
      "seconds": 100,
      "source": "index.html#p34",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "过少、匹配、过大，分别会怎样？\n\n这才是 Least Privilege。Saltzer 与 Schroeder 的原则是历史依据，不是当前产品配置说明。"
        },
        {
          "title": "演示分支",
          "text": "经典背景只作原则来源介绍；不引用未核实的原文、年份或把经典原则当成当前产品配置说明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；[核验 V06]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "最小权限不是越少越好；少到无法完成任务也不合适。\n\n把每项能力对应到任务动作。\n\n多给的能力增加错误影响，但并不自动提升正确性。\n\n这才是 Least Privilege。Saltzer 与 Schroeder 的原则是历史依据，不是当前产品配置说明。"
        }
      ]
    },
    {
      "id": "p34-boundary",
      "label": "写了“不许”，还要看实际限制",
      "title": "写了“不许”，还要看实际限制",
      "kicker": "第 1 章 · 1.6 · 归纳原则",
      "lead": "Prompt 里写“不许发布”只是表达意图，也就是 1.3 讲过的第一层。真正有没有被限制，要看实际配置和批准范围；人工批准了，也不代表结果一定正确。三者要分别核对。",
      "html": "<div class=\"p-pair\"><div class=\"p-box is-dashed\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">写下的</span><h3>说明意图</h3><p>“不许发布”</p></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b><span>还要核对</span></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">实际的</span><h3>核对限制</h3><p>真实配置 · 批准范围</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">意图 · 限制 · 批准，<b>三份证据</b></div>",
      "steps": [
        "回扣三层",
        "解释边界"
      ],
      "script": [
        "【操作提示｜课件 p34-boundary 第 1 步 → VS Code 打开 1.3 留存的请求，指向“不发布”等任务约束；再回课件左侧。没有真实记录时按课件示例讲，不声称已配置】\n\n来看这句话：“不许发布。”它有没有用？有用，它明确告诉 Agent，这次任务做到本地就停下。我们应该把这样的边界说清楚。\n\n但仅凭这句话，能不能知道发布能力已经被系统关掉了？还不能。我们看到的是一条任务指令，还没看到实际环境是怎样限制动作的。",
        "【操作提示｜推进第 2 步 → VS Code 并排查看 docs/setup/ENVIRONMENT.md 中 1.3 留存的实际权限记录，以及任务的批准片段；若记录保存在 Terminal 会话中，切到对应历史输出。指出配置依据与批准范围，不重新操作权限菜单；缺哪份就标哪份待补。随后回课件】\n\n所以这里要看三份不同的证据。第一份是请求，说明我们想让它做什么。第二份是实际配置，说明环境限制了哪些资源和动作。第三份是批准记录，说明人具体同意了什么。\n\n比如，我们同意修改欢迎语，就不能把这次同意解释成“以后所有文件都可以改”。如果下一步要安装依赖，就要重新说明它为什么必要，以及会影响哪里。\n\n批准以后也还有结果检查。我们可以完全同意一次修改，但它仍可能把文字改错。所以先核对能做什么，再检查实际做成什么。接下来换一个任务，看看权限是否也该跟着变。"
      ],
      "segment": "归纳原则",
      "seconds": 50,
      "source": "index.html#p34-boundary",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "写了“不许”，还要看实际限制；它是任务约束，不能当作技术隔离已生效；人工批准也不能保证结果正确。"
        },
        {
          "title": "演示分支",
          "text": "经典背景只作原则来源介绍；不引用未核实的原文、年份或把经典原则当成当前产品配置说明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；[核验 V06]。"
        },
        {
          "title": "讲师提示",
          "text": "请学员暂停视频，先说出这句禁止语句属于哪层。\n\n它是任务约束，不能当作技术隔离已生效；人工批准也不能保证结果正确。"
        }
      ]
    },
    {
      "id": "p35",
      "label": "新任务：只检查本地链接",
      "title": "新任务：只检查本地链接",
      "kicker": "第 1 章 · 1.6 · 迁移判断",
      "lead": "把同样的判断迁移到一个新任务：人已启动本地服务、提供了浏览器工具，只需检查本页链接，坏链接记下来即可。和改欢迎语相比，这次连写入都不需要。先自己想一想需要哪些权限，再看下一页的三个选项。",
      "html": "<span class=\"p-tag\" data-role=\"us\" style=\"justify-self:start\">新任务 · 迁移判断</span><div class=\"p-task\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><h3>已知条件</h3><p>本地服务已启动 · 有浏览器工具</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>仅做观察</h3><p>检查本页链接，坏链接只记录</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\"><h3>任务边界</h3><p>不改代码 · 不访问外站 · 不安装 · 不发布</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">这次<b>连写入都不需要</b></div>",
      "steps": [
        "先读条件",
        "确认目标",
        "与旧任务对比"
      ],
      "script": [
        "【操作提示｜课件 p35 第 1 步；只读题卡，不新开 Chrome 页面，不启动服务，不调用 Agent 浏览器工具。本题按大纲只做权限判断；首页证据展示留到 p36】\n\n这次任务换了：只检查本地页面上的链接。先把题目给的条件读完整。人已经启动了本地服务，也提供了地址，浏览器工具已经具备。\n\n也就是说，在这道题里，我们不需要再安装工具，或者先搭一套运行环境。先认清已有条件，才能判断还缺不缺能力。",
        "【操作提示｜推进第 2 步，指向“坏链接只记录”；在课件上说明交付物，不现场执行链接检查】\n\n交付物也很明确：哪些本地链接有问题，把它们记下来。比如某个链接打不开，就记录从哪里点击、目标地址是什么、看到了什么现象。这里是在说明记录方式，不是在说我们已经发现了坏链接。\n\n发现问题以后要不要马上修？这张任务卡没有要求修。我们把观察结果返回给人，是否修改代码，可以作为后续任务再决定。",
        "【操作提示｜推进第 3 步，逐项指向四条边界；给学员暂停思考的时间，再进入选项页】\n\n现在和欢迎语任务对比。刚才要改变文件内容，所以需要写入；这次只观察并报告，没有修改代码的目标。任务中的“记录”，这里指返回检查结果，也没有要求 Agent 把报告写进项目文件。\n\n题目还限定了不访问外站、不安装、不发布。你可以暂停一下，先用自己的话说说：为了交回这份检查结果，哪些能力就够了？想好以后，再看下一页的选项。"
      ],
      "segment": "迁移判断",
      "seconds": 80,
      "source": "index.html#p35",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "新任务：只检查本地链接；欢迎语需要写入，这题没有写入目标；先独立想需要哪些权限。"
        },
        {
          "title": "演示分支",
          "text": "若学员提出服务未启动，说明那是题设变化，应先停下确认是否授权启动；不要把教学题设当成真实环境状态。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；实际权限选项来自 [核验 V03]。"
        },
        {
          "title": "讲师提示",
          "text": "这道题只做判断，不执行浏览、安装或发布。先看已有能力。\n\n目标是观察与记录，不是修复链接。\n\n欢迎语需要写入，这题没有写入目标；先独立想需要哪些权限。"
        }
      ]
    },
    {
      "id": "p35-choose",
      "label": "你会选 A、B，还是 C？",
      "title": "你会选 A、B，还是 C？",
      "kicker": "第 1 章 · 1.6 · 迁移判断",
      "lead": "答案是 A：浏览本地页面与链接就够了。B 多出的写入不是这次的目标，C 再加上安装、外站和发布，只会增加不必要的影响。别忘了写下停止条件：服务失效、链接跳到外站、需要额外工具时，先停下说明。",
      "html": "<div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-q\" data-reveal=\"0\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">A</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">浏览本地页面与链接</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"ok\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">选 A</span></div></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">B</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">A ＋ 修改项目文件</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">过大</span></div></div><div class=\"p-q\" data-reveal=\"2\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">C</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">B ＋ 安装 · 外站 · 发布</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">过大</span></div></div></div><div class=\"p-bar\" data-reveal=\"3\">服务失效 · 跳到外站 · 要装工具 → <b>先停下说明</b></div>",
      "steps": [
        "看 A",
        "看 B",
        "看 C",
        "揭示理由"
      ],
      "script": [
        "【操作提示｜课件 p35-choose 第 1 步，只揭示 A，不提前推进答案】\n\nA 是浏览本地页面与链接。对照题目，它可以打开已有的本地页面，观察允许范围内的链接，再返回结果。到这里，你先保留自己的选择，接着看另外两项多了什么。",
        "【操作提示｜推进第 2 步，比较 A、B；不要切到编辑器修链接】\n\nB 在 A 的基础上增加了修改项目文件。它听上去很方便：发现坏链接，顺手就修好。但“顺手修好”已经改变了任务目标，也会产生新的代码差异。\n\n我们现在要交的是问题记录，所以这项写入能力用不上。等人看完记录，决定要修哪些，再为修复任务确定范围。",
        "【操作提示｜推进第 3 步，指向 C；停顿供学员判断，仍不展示答案标记】\n\nC 又加了安装、访问外站和发布。再回头看题目，服务和工具都已经准备好了，这次也只查本地链接。这些额外能力，没有对应的必要动作。\n\n如果你选了 B 或 C，可以再问自己一句：我是按题目已经说清的任务来选，还是把以后可能要做的事，也一起算进来了？",
        "【操作提示｜推进第 4 步揭示 A → 切 VS Code，在现有 docs/setup/ENVIRONMENT.md 的权限记录中由讲师补一行：任务＝仅查本地链接；选择＝A；理由＝已有服务与工具，只观察并返回记录；停止条件＝服务失效、目标越出本地范围或需要额外工具。注明这是题卡判断，不是实操通过；回课件】\n\n所以这道题选 A。理由不是“选项最少”，而是它已经足够完成给定任务，其他能力又没有必要。\n\n还要留下停止条件。页面打不开、服务失效了，就先报告；看到目标是外站，就不继续访问；现有工具不够，也先说明缺口。如果点击后意外跳出了本地范围，就停止后续操作，记录情况。\n\n这些情况意味着题设和实际条件对不上了，需要重新确认。不能为了凑出一个完成结果，自己扩大任务。现在把选择、理由和停止条件补进已有权限记录。这里由我们手工记下判断，并不是给刚才的 Agent 任务追加写文件权限。"
      ],
      "segment": "迁移判断",
      "seconds": 100,
      "source": "index.html#p35-choose",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "你会选 A、B，还是 C？\n\n选 A，并解释与欢迎语任务的差别。补入已有权限记录：选择、理由、停止条件。"
        },
        {
          "title": "演示分支",
          "text": "若学员提出服务未启动，说明那是题设变化，应先停下确认是否授权启动；不要把教学题设当成真实环境状态。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；实际权限选项来自 [核验 V03]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "是否足以完成题卡？先保留答案。\n\n额外写入并不是当前目标。\n\n给出这些能力会增加哪些不必要影响？\n\n选 A，并解释与欢迎语任务的差别。补入已有权限记录：选择、理由、停止条件。"
        }
      ]
    },
    {
      "id": "p36",
      "label": "按自己的证据标记本章状态",
      "title": "按自己的证据标记本章状态",
      "kicker": "第 1 章 · 1.6 · 自检与收束",
      "lead": "最后用自己的记录按四项自查，不用课程示例代替：首次闭环、首页任务、首页验收、权限选择。证据齐全标“通过”；有缺项标“待补做”，回到对应练习；还没实操标“仅观察”。失败的记录也要保留。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:16px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:14px 18px\"><h3>首次闭环</h3><p>复述 · 确认 · 修正</p></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\" style=\"padding:14px 18px\"><h3>首页任务</h3><p>四要素 Prompt</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:14px 18px\"><h3>首页验收</h3><p>页面 · build · Diff</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"3\" style=\"padding:14px 18px\"><h3>权限选择</h3><p>范围与理由</p></div></div><div data-reveal=\"4\" style=\"display:flex;gap:14px;align-items:center;flex-wrap:wrap\"><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:20px\">通过</span><span style=\"font-size:20px\">证据齐全</span><span class=\"p-chip\" data-role=\"gate\" style=\"font-size:20px;margin-left:18px\">待补做</span><span style=\"font-size:20px\">有缺项</span><span class=\"p-chip is-mute\" style=\"font-size:20px;margin-left:18px\">仅观察</span><span style=\"font-size:20px\">还没实操</span></div>",
      "steps": [
        "先找记录",
        "找 Prompt",
        "找验收",
        "找权限理由",
        "标记状态"
      ],
      "script": [
        "【操作提示｜课件 p36 第 1 步 → VS Code 打开 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md，定位首次闭环记录；缺项如实标记。后续各项复用已有材料，不新建一整套记录】\n\n最后，我们把这一章留下的东西串起来。先看首次闭环：最初提出了什么要求，Agent 怎么复述，我们确认了什么，结果不符合时又给过什么反馈。\n\n如果过程中出现过失败，也保留着。后面接着做时，这些记录能帮我们知道卡在哪里、已经试过什么。你跟着做了的话，就对照自己的记录；暂时只看视频，也可以先记下这些检查入口。",
        "【操作提示｜回课件推进第 2 步 → VS Code 打开 1.4 最终 Prompt，指向一条实际完成标准与 1.5 对应检查记录；例如首屏应出现哪些已确认信息。只采用记录中确有的标准】\n\n第二项，找出首页任务的一条完成标准。别只看有没有保存 Prompt，还要能说出这条标准后来是怎么检查的。\n\n例如，约定首屏要出现哪些内容，就去页面上逐项找。若某项只写在请求里，后面没有检查记录，我们就知道还缺哪一步。这样，一份要求才能和一份结果对应起来。",
        "【操作提示｜回课件推进第 3 步 → Terminal 查看 1.5“首页开发服务”的实际 Local 地址。服务仍在运行时，在 Chrome 新开标签页“首页 v0 证据回看”，粘贴该地址，例如仅在输出为 http://127.0.0.1:5173/ 时使用此地址；保留课件页。只展示首页，不执行 p35 的链接检查题。服务已停则在新标签页打开已有本地截图，口播明确“这是上一节保存的截图”；无截图则标待补，不为本节重跑服务。随后 VS Code 打开已保存的 build 日志与完整 Diff，完成后回课件】\n\n我们把首页证据打开来看。先对照页面和刚才那条标准，确认需要的内容有没有出现。如果这里展示的是之前的截图，就只按截图回看当时的画面，不能据此说现在的服务还在运行。\n\n再看构建日志和代码差异。这三份证据各有用途：页面帮助我们检查看得见的内容和表现，构建日志记录项目能否完成构建，差异帮助我们核对改动范围。哪份缺了，就把哪份记下来。\n\n缺 CLI 基线的，回第一节环境检查和第三节工具记录补齐；首页的构建或差异没检查完，就回第五节对应步骤继续。我们不在收尾时用一句“应该没问题”把它带过去。",
        "【操作提示｜推进第 4 步 → VS Code 回到刚补的最小权限判断行，指向“理由”和“停止条件”；随后回课件】\n\n第四项就是刚才的权限选择。你能不能解释，为什么欢迎语任务需要写入，而链接检查题不需要？又能不能说出，遇到什么情况应该先停下来？\n\n能把理由对应到动作，就说明你在按任务判断。以后任务换了，也可以用同样的办法重新选，而不是一直沿用上次的权限。",
        "【操作提示｜推进第 5 步 → VS Code 按实际证据填写通过、待补做或仅观察；缺项写清对应课节和动作。不要照抄讲师状态，不覆盖失败记录；回课件】\n\n现在给自己的进度标一个真实状态。相关检查完成、证据齐全，标通过；已经做了但还有缺项，标待补做，并写明要补什么；还没有实操，就标仅观察。\n\n这份记录是为了让下一次开始时有明确起点。比如写“待补第五节构建检查”，就比只写一个“未完成”更容易接着做。你可以暂停视频，把自己的状态整理好。"
      ],
      "segment": "自检与收束",
      "seconds": 90,
      "source": "index.html#p36",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "按自己的证据标记本章状态；如实填写通过、待补做或仅观察。缺项回到对应练习，不抹掉失败记录。"
        },
        {
          "title": "演示分支",
          "text": "若部分门禁未通过，收尾：“你可以知道后续学习方向，但相关实操应先补齐这一章缺失的输入和证据。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M12]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "按四项自查，不能用教师示例代替自己的证据。\n\n指出一条完成标准和它对应的检查。\n\n缺 CLI 或 build 的，明确补做入口。\n\n解释为什么这项能力必要，而不是背权限术语。\n\n如实填写通过、待补做或仅观察。缺项回到对应练习，不抹掉失败记录。"
        }
      ]
    },
    {
      "id": "p36-recap",
      "label": "先对任务，再给权限，最后查证据",
      "title": "先对任务，再给权限，最后查证据",
      "kicker": "第 1 章 · 1.6 · 自检与收束",
      "lead": "第 1 章交付的不只是首页 v0，还有一套做事习惯：先确认，再小步做，看页面和 Diff，不符合就复验；权限只给必要的，意图不等于限制，受阻时明确停下。第 2 章会带着这个 v0 和证据，从真实页面出发继续迭代。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start;--big:1\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本章习惯</h3><div class=\"p-star\" style=\"width:260px;font-size:23px\">先确认 · 小步做<br>看页面和 Diff<br>不符就复验</div></div><div data-reveal=\"1\"><h3>权限判断</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-pass\">只给必要能力</li><li class=\"is-fix\">意图不等于限制</li><li class=\"is-stop\">受阻时明确停</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>接下来</h3><div class=\"p-box\" data-role=\"us\"><h3>第 2 章</h3><p>带着本地 v0，按真实反馈迭代</p></div></div></div>",
      "steps": [
        "回顾闭环",
        "回顾权限",
        "交接"
      ],
      "script": [
        "【操作提示｜课件 p36-recap 第 1 步，按图回顾闭环；收起 VS Code 和 Terminal，保留 Chrome 课件页】\n\n回头看第一章，我们从改一句欢迎语开始，走到了本地首页原型。中间反复做的，是先把请求说清楚，确认要做的动作，再看页面和改动；发现问题，就带着具体证据继续修正。\n\n你以后让 AI 帮忙改别的项目，这些动作也用得上。任务可以变大，但每一步要观察什么、用什么判断是否完成，仍然需要说清楚。",
        "【操作提示｜推进第 2 步，指向权限要点；不再打开授权界面】\n\n权限上，再带走三个判断。第一，这项能力是否为当前任务所需。第二，写下的任务边界，有没有对应的实际限制和批准依据。第三，条件不满足时，应该在哪一步停下来说明。\n\n授权之前把这几件事想清楚，做完以后再核对结果，我们才知道这次协作到底完成了什么。",
        "【操作提示｜推进第 3 步，完成第一章收尾；不打开发布网站或执行推送。已有缺项保留在记录中】\n\n接下来，把本地首页 v0、最终请求和已有检查记录留好。还缺的实操证据，按刚才标出的入口补齐。\n\n第二章我们会继续看真实页面，把不满意的地方描述清楚，再让 AI 根据反馈迭代。到那时，今天留下的记录，就是我们继续工作的起点。第一章就到这里，我们下一章见。"
      ],
      "segment": "自检与收束",
      "seconds": 40,
      "source": "index.html#p36-recap",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "先对任务，再给权限，最后查证据；未通过的项目先补齐，再进入后续验收。"
        },
        {
          "title": "讲师提示",
          "text": "这章交付的不只是一个页面，还有可解释的开发过程。\n\n不重演危险操作，用当前任务和证据决定范围。\n\n未通过的项目先补齐，再进入后续验收。"
        }
      ]
    }
  ],
  "segments": [
    {
      "label": "任务与能力",
      "seconds": 140
    },
    {
      "label": "归纳原则",
      "seconds": 150
    },
    {
      "label": "迁移判断",
      "seconds": 180
    },
    {
      "label": "自检与收束",
      "seconds": 130
    }
  ]
};
