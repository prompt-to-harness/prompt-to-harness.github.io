window.lesson = {
  "title": "第一次 AI 协作闭环",
  "chapter": "第 1 章 · Prompt",
  "section": "01.01",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 个人主页。",
  "scenes": [
    {
      "id": "p01",
      "label": "只改一句话，怎样证明改对？",
      "title": "只改一句话，怎样证明改对？",
      "lead": "先让 Codex 替换练习页的一句欢迎语，再看页面和 git diff 输出，确认它只改了指定文字",
      "html": "<ol class=\"p-map\" data-reveal=\"0\"><li class=\"is-now\"><b>1.1</b>第一次 AI 协作闭环</li><li class=\"\"><b>1.2</b>Agent 执行机制与 AI 协作基础</li><li class=\"\"><b>1.3</b>工具使用与权限</li><li class=\"\"><b>1.4</b>写清个人主页的需求</li><li class=\"\"><b>1.5</b>生成并检查个人主页</li><li class=\"\"><b>1.6</b>最小权限：为什么不能给 Agent 所有权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">修改前</span><p class=\"p-big\" style=\"font-weight:500\">你好，欢迎来到我的练习页面</p></div><div class=\"p-join\" data-reveal=\"1\"><span>只改这一句</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">任务目标</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding 课堂！</p></div></div>",
      "steps": [
        "看原文",
        "比较目标"
      ],
      "script": [
        "【操作提示｜课件 p01，第 1 步；暂不切窗口】\n\n我们先看屏幕左边这句话：“你好，欢迎来到我的练习页面。”今天要做的事情很小，就是请 AI 帮我们换掉这句欢迎语。\n\n我们可能会想，这几个字我自己改，不是更快吗？是的，手动改并不难。我们选这个小任务，是因为修改前后很容易比较。这样，我们可以把注意力放在另一件事上：我把任务交给 AI 之后，要看它做了什么，又该怎样检查它交回来的结果。",
        "【操作提示｜推进到第 2 步，指向右侧目标文案】\n\n我们要将这句话换成：“你好，欢迎来到 Vibe Coding 课堂！”先记住这句话，后面我们拿它来做对比。\n\n假如 AI 回我们一句“已经完成”，我们会直接接受吗？我们先不急着回答。等会儿我们会看到，浏览器里的页面和代码里的改动，各能帮我们检查一部分。\n\n上面这条路线是第一章的六节课。这节 1.1 小节我们先做一个小修改，正式的主页搭建放到一点五再做。现在，我们先找准要修改的文件。"
      ],
      "segment": "找准任务",
      "seconds": 45,
      "source": "index.html#p01",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "只改一句话，怎样证明改对？\n\n你准备怎样证明改对了？先留下这个问题，后面用页面和 git diff 输出回答。"
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
          "text": "先看这一句欢迎语。这节只改它，个人主页留到 1.5。\n\n你准备怎样证明改对了？先留下这个问题，后面用页面和 git diff 输出回答。"
        }
      ]
    },
    {
      "id": "p02",
      "label": "先找准你要改的那一份文件",
      "title": "先找准你要改的那一份文件",
      "lead": "继续使用课前准备中克隆到本地的 course-starter 项目。终端、编辑器与浏览器都指向这份练习项目，本次只修改 setup-check/index.html。",
      "html": "<ul class=\"p-tree\" style=\"font-size:25px;padding:22px 28px;line-height:1.9\"><li data-reveal=\"0\"><a class=\"p-path\" href=\"https://github.com/prompt-to-harness/course-starter\" target=\"_blank\" rel=\"noopener\">GitHub · course-starter</a><span class=\"p-note\">课程模板 · 克隆来源</span></li><li class=\"is-open\" data-reveal=\"1\"><span class=\"p-path\">course-starter/</span><span class=\"p-note\">本地练习项目 · 在这里打开</span><ul><li class=\"is-target\" data-reveal=\"2\"><span class=\"p-path\">setup-check/index.html</span><span class=\"p-note\">本次修改目标</span></li></ul></li></ul><p class=\"p-go\" style=\"margin:18px 0 0\"><a href=\"../../../ch00/lessons/02-preparation/index.html#p13\">取得 course-starter</a></p>",
      "steps": [
        "认准本地项目",
        "确认根目录",
        "定位文件"
      ],
      "script": [
        "【操作提示｜课件 p02 第 1 步；指向课程模板与本地项目的区别。未取得项目时打开“课前准备：取得练习项目”，已完成时继续使用原目录，不重新克隆或移动文件】\n\n课前准备小节已经把 course-starter 克隆到本地。本地的 course-starter 文件夹就是我们接下来修改的练习项目。如果还没准备好，可以先回到课前准备小节",
        "【操作提示｜推进第 2 步 → 切 VS Code，确认打开课前准备取得的 course-starter 根目录；再切项目终端运行 pwd，Windows PowerShell 用 Get-Location。核对编辑器、终端与欢迎页服务是同一目录；目录名自定义时展示实际路径】\n\n我现在切到 VS Code，先看文件列表的根目录，再看终端的当前目录。默认文件夹叫 course-starter；如果有更改的话，就以自己的实际路径为准。关键是编辑器、终端和浏览器服务都使用同一份项目。\n\n后面说终端，指的就是运行命令的窗口，VS Code 集成终端也可以，自己单独打开 terminal 也行。目录和文件名尽量完整地露出来，方便核对。",
        "【操作提示｜推进第 3 步 → VS Code 打开 setup-check/index.html，搜索 welcome-message；只展示原文，不手动修改。当前分支与已有改动在后面的操作前复核中记录】\n\n我们要找的是 setup-check 文件夹里的 index.html。找到 welcome-message，就能看到页面上的欢迎语。提醒一下，后续开发过程中，不同目录里可能都有 index.html，不能只凭文件名判断。\n\n使用 realpath 获取文件真实路径，然后通过浏览器打开，检查正常，暂时不要动手。要记下当前分支和已有改动；等会儿看差异时，才分得清哪些原来就有、哪些是这次修改产生的。"
      ],
      "segment": "找准任务",
      "seconds": 105,
      "source": "index.html#p02",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "先找准你要改的那一份文件；只改 setup-check/index.html。已有改动先辨认来源，不能清空。"
        },
        {
          "title": "演示分支",
          "text": "发现未知改动时，口播：“这里已有变化，我们先确认它的来源，再继续任务。”Git 尚未就绪者记录状态，按下一页的课前准备入口补齐。"
        },
        {
          "title": "备课标记",
          "text": "M01、M03。任务文本中的文件范围是操作约定，不等于已经核实的技术隔离；实际权限在 1.3 展开。"
        },
        {
          "title": "讲师提示",
          "text": "先指出课程模板，再打开 0.2 准备好的独立练习副本。\n\n请学员核对当前工作目录。目录不对时先纠正，不发修改任务。\n\n只改 setup-check/index.html。已有改动先辨认来源，不能清空。"
        }
      ]
    },
    {
      "id": "p03",
      "label": "沿用课前准备，开始第一次修改",
      "title": "沿用课前准备，开始第一次修改",
      "lead": "课前准备已完成工具接入、Git 操作与欢迎页启动。接下来把欢迎语修改交给 AI。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"agent\"><h3>Codex CLI</h3><p>能读取目标文件</p></div><div class=\"p-box\" data-role=\"tool\"><h3>Git</h3><p>git status &amp; git diff 输出正常</p></div><div class=\"p-box\" data-role=\"ok\"><h3>course-starter</h3><p>能打开自己的本地页面</p></div></div><p class=\"p-go\" style=\"margin:18px 0 0\"><a href=\"../../../ch00/lessons/02-preparation/index.html#p18\">回到课前准备</a></p>",
      "steps": [
        "沿用准备，保留修改前状态"
      ],
      "script": [
        "【操作提示｜课件 p03，一次展示三项准备结果；复用原项目、会话与服务。切已有欢迎页刷新并保存修改前截图；在同一项目的普通终端运行 git branch --show-current、git status --short、git diff，记录分支与已有改动，有暂存改动时补看 git diff --cached；核对 Codex 工作目录与权限，再回课件。不明改动先查来源并保留；会话或目录变化时按课前准备 p17 补做只读检查，失败时先处理】\n\n课前准备当中已经准备好 Codex CLI、Git 和 course-starter。现在继续使用同一份项目；有缺的就回课前准备补齐。还是那句话，动手前先确认页面和 Git 的当前状态，用作对照这次修改到底改了什么。接下来，我们把欢迎语修改交给 AI。"
      ],
      "segment": "操作前复核",
      "seconds": 45,
      "source": "index.html#p03",
      "teaching": [],
      "closing": "开始修改前，保存当前欢迎页截图，记录分支和工作树状态，核对 Codex 的工作目录与权限。已有改动先辨认来源并保留，后面据此区分本次修改。换过会话或目录时，按课前准备中的<a href=\"../../../ch00/lessons/02-preparation/index.html#p17\">只读请求</a>再核对一次目标文件；读取失败时先处理，再发送正式修改请求。"
    },
    {
      "id": "p04",
      "label": "先交任务，再看计划，最后确认",
      "title": "先交任务，再看计划，最后确认",
      "lead": "第一次协作分三步：先交完整任务，请 Agent 复述目标、非目标和计划，此时不允许写入；再核对计划里有没有多出样式修改、安装或发布；三者都对，才批准这一次单文件的文字修改。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>任务</b><small>只改 <code>h1#welcome-message</code></small></span></li><li data-reveal=\"1\"><span><b>计划</b><small>读取 → 替换文字 → 查页面与 git diff 输出</small></span></li><li class=\"is-ok\" data-reveal=\"2\"><span><b>人工确认</b><small>都对才批准 · 越界先停</small></span></li></ol></div>",
      "steps": [
        "提交完整请求",
        "核对计划",
        "明确确认"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步，展开并阅读完整请求；此页讲解请求，暂不发送，统一在 p04-live 实操】\n\n我们先把要发的 prompt 看一遍。第一句限定读取范围：只读 setup-check/index.html 和必要的仓库状态。接下来写清楚目标，要改的是 h1#welcome-message，也就是页面中的标题元素。\n\n我们的目标是将这个标题改为：“你好，欢迎来到 Vibe Coding 课堂！”\n\n再往下看，其他内容、结构、样式都不改，也不安装依赖、不发布。因为要做的事情只有替换标题，这些动作都不在任务范围内",
        "【操作提示｜推进第 2 步，指向“先复述目标、非目标和小计划，等我确认后再修改”；仍留在课件】\n\n注意这一句：先复述，再给小计划，等我确认后再修改。因为在动手之前，我们希望先听一听 AI 准备怎么做。\n\n给出的计划不需要很长。读到目标并替换，然后说明怎样检查改动，就够了。我们要关注的是，这个计划有没有对应目标任务。\n\n如果 AI 说“顺便调整配色”，或者“先安装一套奇怪的依赖”，就说明 AI 的计划超出了任务范围，让 AI 先改计划。今天把这些环节拆开，是为了看清每一步约束，限定任务范围；",
        "【操作提示｜推进第 3 步；下一页再发送请求与确认，不在此处预读一份虚构的 AI 回答】\n\n等目标、范围和计划都对上，我们再明确回复：同意这个计划，只修改指定文件里的欢迎语，其他内容保持不变。\n\n这次确认对应的是这次修改。如果后面出现额外动作，还要看它是否在范围里。具体的工具权限提示，我们会在一点三专门讲。\n\n先复制课件当中的 prompt ，接下来切到vscode打开 codex，我们可以对照刚才这份请求，看它怎样读取文件、怎样回复，以及什么时候开始写入。"
      ],
      "segment": "首次执行",
      "seconds": 90,
      "source": "index.html#p04",
      "prompt": "只读取 setup-check/index.html 和必要的仓库状态。\n\n把 h1#welcome-message 改为：\n“你好，欢迎来到 Vibe Coding 课堂！”\n\n不改其他内容、结构或样式，不改其他文件，不装依赖，不发布。\n\n先复述目标、非目标和小计划，等我确认后再修改；越界先停。\n\n完成后说明改动与页面、git diff 输出检查方法。",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "先交任务，再看计划，最后确认；核对后明确批准本次单文件文字修改；不要把这次同意当成之后所有动作的授权。"
        },
        {
          "title": "演示分支",
          "text": "- 理解或计划有偏差：指出具体差异，让 AI 修正理解，暂不批准写入。\n- AI 提前写入：说“它没有等确认，这个流程要求没有满足”，停止继续修改并检查已有 git diff 输出，保留真实记录。\n- 右侧页面未加载：先检查 4174 服务与项目路径，不把空白面板当成页面成功运行。"
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
          "text": "复制本页完整请求。先要求复述目标、非目标与小计划，此时不允许写入。\n\n检查计划是否偷偷增加样式修改、依赖或发布。发现偏离就要求修正计划。\n\n核对后明确批准本次单文件文字修改；不要把这次同意当成之后所有动作的授权。"
        }
      ],
      "layout": "prompt-scene"
    },
    {
      "id": "p04-live",
      "label": "切到实操：盯住这三件事",
      "title": "切到实操：盯住这三件事",
      "lead": "切到实操前先记住三件事：工具和页面是否使用同一个本地 course-starter，是否确认后才写入，是否只改了指定文字。默认显示原始欢迎页；从本地 course-starter 启动 4174 服务并连接后，才能查看自己的修改结果。",
      "html": "<div class=\"demo-visual\" data-reveal=\"1\"><div class=\"welcome-demo\"><div class=\"demo-toolbar\"><span data-demo-status>原始欢迎页 · 仅供预览</span><button type=\"button\" data-demo-connect>连接本地 course-starter</button><button data-demo-reload=\"\" type=\"button\">刷新案例</button><a href=\"../../../../starters/personal-homepage/setup-check/index.html\" rel=\"noopener\" target=\"_blank\">独立打开 ↗</a></div><iframe loading=\"lazy\" src=\"../../../../starters/personal-homepage/setup-check/index.html\" title=\"course-starter 欢迎页\"></iframe><p class=\"caption\">默认显示 course-starter 的原始欢迎页。实操前，从本地 course-starter 启动 4174 服务，再连接查看修改结果。</p></div></div><aside class=\"demo-notes\"><h3 style=\"font:400 26px/1.3 var(--p-title);margin:0 0 10px\">边看边核对</h3><ol class=\"p-watch\" data-reveal=\"0\"><li>同一个 course-starter</li><li>确认后写入</li><li>只改指定文字</li></ol></aside>",
      "steps": [
        "先给观察清单",
        "连接本地 course-starter"
      ],
      "script": [
        "【操作提示｜课件 p04-live 第 1 步 → 确认现有“页面服务”终端仍在运行；不要重复占用 4174 端口。指向三项观察清单】\n\n接下来我们开始实操，动手之前，先看屏幕上的三件事。第一，工具和页面是不是在使用同一个本地 course-starter。第二，AI 有没有在我确认之后才写入。第三，最终是不是只改了指定文字。\n\n现在不用追着每一行日志读。先围绕这三个问题观察，看到有关的动作和输出时，我们再停下来解释。",
        "【操作提示｜课件第 2 步点击“连接本地 course-starter”；切 Terminal，粘贴 p04 的完整请求并发送，等待实际回复。核对复述和计划；正确才发送本次确认，偏离则先纠正。执行后切 VS Code 查看目标行，再回 Chrome 已有“练习页面”标签页刷新】\n\n我先连接本地 course-starter。课件默认显示原始欢迎页；连接本地服务后，看到的就是我们正在修改的文件。\n\n然后回到终端，把刚才的完整请求发出去。先看它有没有把目标和范围说对，再看计划里准备改哪里。我们根据屏幕上实际返回的内容核对。\n\n【操作提示｜此处停顿，逐项指出真实返回中的目标、范围与计划。没有返回或计划不符就先处理，不继续念成已通过；若提前写入，指出“它没有等确认，这个流程要求没有满足”，停止后检查差异】\n\n核对清楚以后，我才发送确认。修改完成后，我们回到文件，找刚才那一行，再刷新浏览器。接下来正式验收，不只看它最后那句完成说明。"
      ],
      "segment": "首次执行",
      "seconds": 90,
      "source": "index.html#p04-live",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "切到实操：盯住这三件事；从本地 course-starter 启动 4174 服务，再点连接。默认欢迎页仅供预览；若服务未启动，不把预览当实际结果。"
        },
        {
          "title": "演示分支",
          "text": "- 理解或计划有偏差：指出具体差异，让 AI 修正理解，暂不批准写入。\n- AI 提前写入：说“它没有等确认，这个流程要求没有满足”，停止继续修改并检查已有 git diff 输出，保留真实记录。\n- 右侧页面未加载：先检查 4174 服务与项目路径，不把空白面板当成页面成功运行。"
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
          "text": "接下来只看三件事：修改的是不是同一个本地 course-starter、有没有先确认、是否只替换文字。\n\n从本地 course-starter 启动 4174 服务，再点连接。默认欢迎页仅供预览；若服务未启动，不把预览当实际结果。"
        }
      ],
      "layout": "html-scene"
    },
    {
      "id": "p05",
      "label": "页面正确，还要查改动范围",
      "title": "页面正确，还要查改动范围",
      "lead": "验收要两类证据：页面回答“改对没有”，刷新本地 course-starter 逐字核对；git diff 输出回答“多改没有”，要对照初始状态看完整 git diff 输出和文件列表。两类都符合才接受，否则带着准确的差异去修正。",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><div class=\"p-head\"><h3>页面证据</h3><span class=\"p-tag\" data-role=\"ok\">对不对</span></div><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i><span>course-starter/setup-check/index.html</span></div><div class=\"p-page-body\" style=\"font-size:23px\">你好，欢迎来到 Vibe Coding 课堂！</div></div></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><div class=\"p-head\"><h3>检查代码改动</h3><span class=\"p-tag\" data-role=\"gate\">多没多</span></div><div class=\"p-term\" style=\"white-space:pre-wrap\" data-copy=\"git status --short\ngit diff\ngit diff --cached\">git status --short\ngit diff\ngit diff --cached</div></div></div><ol class=\"p-watch is-row\" data-reveal=\"2\"><li class=\"is-done\">改了没有</li><li class=\"is-done\">改对没有</li><li class=\"is-done\">多改没有</li></ol>",
      "steps": [
        "观察运行结果",
        "审查所有改动",
        "作出判断"
      ],
      "script": [
        "【操作提示｜课件 p05 第 1 步 → Chrome 已有“练习页面”标签页，刷新 http://localhost:4174/setup-check/；与修改前截图比较，不新开另一份文件】\n\n可以看到，任务完成后，我们主要审查三件事：页面是否正确\n\n占位符\n\n占位符",
        "【操作提示｜切 Terminal 的“仓库检查”标签页，依次运行 git status --short、git diff --stat、git diff；补看 git diff --cached，以覆盖暂存区。若 status 出现未跟踪文件，切 VS Code 检查其内容。对照修改前记录】\n\ngit status 当中是否只有一个文件修改、git diff 是否只有一行修改\n\n占位符\n\n占位符\n\n占符",
        "【操作提示｜回课件 p05 第 3 步；依实际结果选择结论：全部符合则说明通过；有问题则指出具体位置，并保留给 p06 修正】\n\n总结下来就是三件事：改了没有、改对没有、多改没有；浏览器帮助我们确认用户实际看到的文字和布局，git diff 和 git status 帮我们确认改动范围。\n\n再回想我们的操作，先看 git status \\ git diff , 再看页面。我们三个方向都拿到证据，才接受了这次修改结果。\n\n如果发现不符合预期的修改，就把准确的位置和现象留下来，下一步据此修正。如果都符合，就记录通过。接着我们用课件上的一份 git diff 为例，分析这个证据单独能支持什么判断。"
      ],
      "segment": "检查与修正",
      "seconds": 180,
      "source": "index.html#p05",
      "teaching": [
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
          "text": "切到真实页面，刷新并逐字核对。截图要能说明当前检查的是本地 course-starter。\n\n对照初始状态看完整 git diff 输出。只看一条新增行，不能证明别处没变。\n\n两类证据都符合才接受。若有多余变化或漏字，带着准确差异进入修正。"
        }
      ],
      "closing": "git diff 查看已跟踪文件中尚未暂存的修改；已暂存的部分用 git diff --cached 查看。未跟踪的新文件要从 git status --short 的列表中找到，再单独打开检查内容。对照修改前的记录，区分原有变化与本次修改。"
    },
    {
      "id": "p05-diff",
      "label": "这两行变化能说明什么？",
      "title": "这两行变化能说明什么？",
      "lead": "这里是欢迎语修改前后的对照示意：它能说明这句文字从旧改成新，但证明不了别的文件没变。每份证据只对应它能支持的那条结论，其余部分还要看完整 git diff 输出、文件列表和实际页面。",
      "html": "<div class=\"p-walk\" style=\"grid-template-columns:1.35fr 1fr\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:44px\"><div class=\"p-fn\">setup-check/index.html <span class=\"add\">+1</span><span class=\"del\">−1</span></div><div class=\"p-ln del\"><i>−</i><code>你好，欢迎来到我的练习页面</code></div><div class=\"p-ln add\"><i>+</i><code>你好，欢迎来到 Vibe Coding 课堂！</code></div></div><p class=\"source-note\" style=\"margin-top:8px\">欢迎语变化示意；红底为原文，绿底为目标文字</p></div><ol class=\"p-notes\"><li class=\"is-ok\" data-reveal=\"0\"><span><b>能说明</b><small>这段文字从旧改成新</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>还不能证明</b><small>没有修改其他文件</small></span></li><li data-reveal=\"1\"><span><b>继续检查</b><small>完整 git diff 输出、文件列表与实际页面</small></span></li></ol></div>",
      "steps": [
        "先判断",
        "揭示边界"
      ],
      "script": [
        "【操作提示｜留在课件 p05-diff 第 1 步；这是欢迎语变化示意，不切真实终端。停顿片刻再揭示下一步】\n\n看这两行，红色这一行是旧文字，绿色这一行是新文字。git diff 当中也是这样显示的。\n\n占位符",
        "【操作提示｜推进第 2 步，指向完整 git diff 输出、文件列表和页面结果；无需新开 Chrome 标签页】\n\n这两行能说明，这一处文字按要求发生了替换。可是其他文件有没有变化，页面刷新以后显示什么，都没有出现在这份证据当中。\n\n所以我们还要补上完 git status 和浏览器检查。回想刚才的实操，就能理解为什么要来回看两个地方了，因为每一份证据，都在回答一个具体问题。\n\n问题来了，如果检查出问题，我们该怎么把它说清楚？"
      ],
      "segment": "检查与修正",
      "seconds": 60,
      "source": "index.html#p05-diff",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "这两行变化能说明什么？\n\n不能。还缺完整 git diff 输出、其他文件状态和浏览器结果；把证据对应到它能支持的结论。"
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
          "text": "这是欢迎语变化示意，不是真实执行记录。只给这两行，你能确认整个任务通过吗？\n\n不能。还缺完整 git diff 输出、其他文件状态和浏览器结果；把证据对应到它能支持的结论。"
        }
      ]
    },
    {
      "id": "p06",
      "label": "“不对”要改成可执行的反馈",
      "title": "“不对”要改成可执行的反馈",
      "lead": "发现不对时，先准确说出实际和期望差在哪里，例如漏了“课堂”二字，而不是只说一句“不对”。反馈只要求补这两个字，不追加美化；修正后刷新同一页面，再复查完整 git diff 输出。",
      "html": "<div class=\"demo-notes\"><div style=\"display:grid;gap:12px\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:12px 18px\"><span class=\"p-tag\" data-role=\"gate\">实际 · 教学示例</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding<span class=\"p-miss\">&nbsp;</span>！</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:12px 18px\"><span class=\"p-tag\" data-role=\"ok\">期望</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding <span class=\"p-ins\">课堂</span>！</p></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"font-size:21px\">只补“课堂”二字 → 刷新同一页面 → <b>复查完整 git diff 输出</b></div></div></div>",
      "steps": [
        "指出现象",
        "限定修正",
        "再次验证"
      ],
      "script": [
        "【操作提示｜课件 p06 第 1 步。优先使用刚才真实发现的问题；如果首次任务已通过，就保留课件的“漏了课堂二字”教学假设，不改坏原文件来伪装失败】\n\n因为我们没有遇到问题，我们先用屏幕上这个教学例子：假设页面显示的是“你好，欢迎来到 Vibe Coding！”，少了“课堂”两个字。\n\n如果我只回复“不对，再改一下”，它还要猜我指的是文字、配色，还是布局。既然我们已经看见了具体问题，就直接把实际现象和期望现象一起给它。\n\n可以参考左侧 prompt ，真有问题，就把这里的例子换成自己实际看到的内容。第一次全部改对的话，也不用特意制造错误。",
        "【操作提示｜推进第 2 步，逐句看反馈请求。有真实问题才切 Terminal 发送对应反馈；没有真实问题则在课件上讲解，不把教学请求发给已正确的文件】\n\n这份反馈先交代现象：现在显示的句子少了两个字。然后给出完整的期望文字，最后限定动作：只补这两个字，其他内容、结构和样式保持不变。\n\n这个时候也不要顺手加一句“再帮我美化一下”。否则任务范围变了，后面我们就很难分清，哪些是修正，哪些是新需求。\n\n把这一次差异处理清楚，再重新检查。",
        "【操作提示｜有实际修正：等待 Terminal 完成后，切 Chrome 原“练习页面”刷新，再切“仓库检查”终端复查状态与完整差异；无实际修正：留课件，明确说明本段只练习反馈表述。最后回课件 p06-loop】\n\n修正之后还是那三个问题：改了没有、改对没有、改多没有\n\n占位符\n\n占位符"
      ],
      "segment": "检查与修正",
      "seconds": 150,
      "source": "index.html#p06",
      "prompt": "教学示例：页面显示“你好，欢迎来到 Vibe Coding！”；\n任务要求是“你好，欢迎来到 Vibe Coding 课堂！”。\n请只补回“课堂”二字，不改其余内容、结构或样式。\n修正后刷新同一页面，逐字核对，并检查完整 git diff 输出。",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "“不对”要改成可执行的反馈；修正后重新看页面和完整 git diff 输出。若录制时一次成功，使用标明来源的失败素材，不伪造失败。"
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
          "text": "假设结果漏掉课堂二字。请学员暂停视频，准确说出实际与期望的差异。\n\n反馈只要求补两个字，不追加美化。复制完整反馈时说明这是教学示例。\n\n修正后重新看页面和完整 git diff 输出。若录制时一次成功，使用标明来源的失败素材，不伪造失败。"
        }
      ],
      "layout": "prompt-scene"
    },
    {
      "id": "p06-loop",
      "label": "什么时候继续，什么时候停？",
      "title": "什么时候继续，什么时候停？",
      "lead": "把整条路径连起来：说明目标、复述计划、人工确认，然后才写入；写入后检查页面和 git diff 输出。检查之后有三种处理——通过就记录，不符就限定范围修正再检查，无法验证或需要越界就记录并停下。",
      "html": "<div class=\"p-flow\" style=\"--n:6;column-gap:28px\"><div class=\"p-node\" data-role=\"ink\" data-reveal=\"0\" data-node=\"goal\"><h3>说明目标</h3><p>范围与标准</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\" data-node=\"plan\" data-edge=\"goal:plan\"><h3>复述与计划</h3><p>核对理解</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\" data-node=\"confirm\" data-edge=\"plan:confirm\"><h3>人工确认</h3><p>写入前</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" data-node=\"edit\" data-edge=\"confirm:edit\"><h3>执行修改</h3><p>指定文字</p></div><div class=\"p-node\" data-role=\"ink\" data-reveal=\"1\" data-node=\"check\" data-edge=\"edit:check\"><h3>检查结果</h3><p>页面<br>git diff 输出</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"1\" data-node=\"record\" data-edge=\"check:record\"><h3>接受并记录</h3><p>留下证据</p></div><div class=\"p-fork\" data-reveal=\"1\" style=\"grid-column:4/7;--gap:28px\"><div class=\"l\" data-reveal=\"1\" data-edge=\"check:repair\"><span>不符</span></div><div class=\"r\" data-reveal=\"2\" data-edge=\"check:stop\"><span>无法继续</span></div></div><div class=\"p-node is-row2\" data-role=\"agent\" data-reveal=\"1\" data-node=\"repair\" data-edge=\"repair:check\" style=\"grid-column:4\"><h3>反馈并修正</h3><p>限定范围</p><span class=\"p-loopnote\">↺ 修正后再检查</span></div><div class=\"p-node is-row2\" data-role=\"gate\" data-reveal=\"2\" data-node=\"stop\" style=\"grid-column:6\"><h3>停止并记录</h3><p>无法验证 · 需越界</p></div></div>",
      "steps": [
        "检查前提",
        "判断检查结果",
        "保留停止条件"
      ],
      "script": [
        "【操作提示｜停留课件 p06-loop 第 1 步，沿图中的目标、复述和计划、人工确认、执行依次指示】\n\n我们再回溯一下我们的操作；图的前半段，就是刚才我们执行修改之前做的事。先把任务目标说清楚，再核对 AI 的理解和计划，最后确认执行这一次修改。\n\n顺序很关键。确认行为发生在修改行为之前，我们才有机会在动手前发现任务理解上的偏差。",
        "【操作提示｜推进第 2 步，指向检查后的通过和修正回路】\n\n执行以后，我们来到检查这里。三个问题的答案都符合预期，就接受结果、保存记录。\n\n如果有不符合预期的地方，就说清实际结果和期望结果的差别，让 AI 在原来的范围里修正。修正完成之后继续问改了没有、改对没有、改多没有，不能看到 AI 说他修好了就直接结束\n\n今天的任务小，检查也很具体：一句欢迎语、原来的布局，以及完整的文件改动。",
        "【操作提示｜推进第 3 步，指向停止；不切窗口】\n\n还有一种情况：我们没法作出判断。比如实际页面打不开，或者 AI 要求做超出本次范围的事情。这个时候先停下来，捋清楚卡点在哪、现象是什么、下一步要补什么。\n\n我们不需要连续发“再试一次”。有明确的错误，处理错误；缺少必要条件，补齐条件后再继续。\n\n下面我们各自用本地的 course-starter，把这条路径再走一遍。"
      ],
      "segment": "检查与修正",
      "seconds": 90,
      "source": "index.html#p06-loop",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "什么时候继续，什么时候停？\n\n如果无法验证、缺材料或需要越界，记录阻塞并暂停，不无限重试。"
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
          "text": "回看从任务到执行的路径，确认发生在写入之前。\n\n通过才记录；不满足标准时依据证据反馈并限定修正，再检查。\n\n如果无法验证、缺材料或需要越界，记录阻塞并暂停，不无限重试。"
        }
      ]
    },
    {
      "id": "p07",
      "label": "独立完成一次，再拿证据回答",
      "title": "独立完成一次，再拿证据回答",
      "lead": "暂停视频，用本地 course-starter 独立完成一次欢迎语修改。观察 Codex 的操作，核对实际页面和完整 git diff 输出，按自己的习惯记下发现和问题。页面正确但改动超出范围，仍需处理后再检查。",
      "html": "<span class=\"p-tag\" data-role=\"us\" style=\"justify-self:start;align-self:start\">独立练习</span><div class=\"p-task\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><h3>输入与任务</h3><p>本地 course-starter 当中修改为你想要的欢迎语</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>观察与记录</h3><p>观察 AI 的操作<br>记下检查结果和遇到的问题</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><h3>验收</h3><p>文案准确 · 范围合规 · 问题已复验</p></div></div>",
      "steps": [
        "暂停跟做",
        "观察与记录",
        "对照验收"
      ],
      "script": [
        "【操作提示｜课件 p07 第 1 步，给暂停跟做提示；不等待学员反馈】\n\n现在可以暂停视频，完成自己的修改任务。先检查环境，保留修改前的状态，再发请求，核对计划、确认修改，最后看页面和差异。\n\n不用复现演示当中的每一行回复。只要围绕同一个任务，完成必要的操作和检查就可以。遇到问题，先把现象记下来，有错改错，缺啥补啥。",
        "【操作提示｜推进第 2 步，指向“观察与记录”；需要举例时回看已有的 Terminal 执行过程和页面检查，展示讲师自己的简短笔记，不新建专用文档】\n\n实际操作的时候，留意它有没有等你确认计划才修改。另外保留你觉得值得记录的现象，几句笔记，几个截图，方式随意。\n\n占位符",
        "【操作提示｜回课件 p07 第 3 步，对照验收项；保留现有对话和自己的观察，下一节回看】\n\n最后验收，还是那三个问题：改了没有、改对没有、多改没有\n\n占位符。\n\n占位符。"
      ],
      "segment": "独立练习",
      "seconds": 210,
      "source": "index.html#p07",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "独立完成一次，再拿证据回答；页面正确但 git diff 输出显示有越界改动能通过吗？不能。CLI 未完成则标待补做；App 可选，不替代 CLI 检查。"
        },
        {
          "title": "演示分支",
          "text": "证据缺失就补检查，不凭回忆填写没执行过的结果。环境未就绪者保留“仅观察 / 待补做”状态。需要补练修正时使用标明来源的教学样例，不把样例错误归到真实首次任务。"
        },
        {
          "title": "备课标记",
          "text": "M02、M03、M04。学员自行观察操作和检查结果，按习惯记录发现与问题，不指定记录文件或格式。"
        },
        {
          "title": "讲师提示",
          "text": "用本地 course-starter 独立完成修改，自行观察并记录发现与问题。\n\n没有真实修正时，只说明实际检查结果；教学样例标明来源。\n\n页面正确但改动超出范围时，处理后再检查。CLI 未完成则标待补做；App 可选，不替代 CLI 检查。"
        }
      ]
    },
    {
      "id": "p07-recap",
      "label": "先确认，再修改；拿证据收尾",
      "title": "先确认，再修改；拿证据收尾",
      "lead": "这一节只改了一句话，却完整走过了确认、执行、检查和反馈。带走一个习惯：页面和 git diff 输出一起看，缺证据就不写通过。下一节用这份记录，把 Agent 的执行过程拆开来看。",
      "html": "<div class=\"p-sketch\" style=\"align-items:center\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个习惯</h3><div class=\"p-star\" style=\"width:270px;font-size:27px\">页面与 git diff 输出<br>一起看</div><p class=\"p-sub\" style=\"text-align:center\">缺证据不写通过</p></div><div data-reveal=\"1\"><h3>三种处理</h3><ul class=\"p-exits\" style=\"gap:14px\"><li class=\"is-pass\">通过就记录</li><li class=\"is-fix\">不符就修正复验</li><li class=\"is-stop\">受阻就停止</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>1.2 拆开执行过程</h3></div></div></div>",
      "steps": [
        "收拢习惯",
        "区分处理",
        "交接证据"
      ],
      "script": [
        "【操作提示｜停留课件 p07-recap 第 1 步，不再切工具窗口】\n\n总结一下，这一节我们从一行标题出发，看了一次任务怎样从请求走到验收。本节标题提出的问题：\"只改一句话，怎样证明改对？\"，现在有具体答案了：去看实际页面，再对照完整差异和文件状态。\n\n我们可以把这个习惯带到下一次小修改里。先给出明确的目标，确认要做的动作，再用实际结果判断是否完成。",
        "【操作提示｜推进第 2 步，依次指向三种处理】\n\n检查后有三种处理。符合要求，接受并记录；发现差异的话，反馈修改后重新检查；没法继续的话，就停下来，有错改错，缺啥补啥\n\n跟做暂时受阻的同学，先把卡在哪里写具体。以后回来，就知道要补哪一项，而不是重新从头试一遍。",
        "【操作提示｜推进第 3 步，结束本节；保留 Terminal 中的现有对话和检查结果，下一节回看；学员笔记和截图按自己的习惯保存】\n\n下一节我们再次回溯这次对话，看工具怎样读取文件、执行动作，又把结果返回。你也可以结合自己的观察，记下想搞清楚的问题。我们下一节接着看。"
      ],
      "segment": "独立练习",
      "seconds": 60,
      "source": "index.html#p07-recap",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "先确认，再修改；拿证据收尾；保留自己的原始记录，下一节用它区分信息、动作和结果。"
        },
        {
          "title": "讲师提示",
          "text": "这次只改一句话，但你已经走过确认、执行、检查和反馈。\n\n修正之后仍要复查。做不下去时记录阻塞也是明确的工程决定。\n\n保留自己的原始记录，下一节用它区分信息、动作和结果。"
        }
      ]
    }
  ],
  "segments": [
    {
      "label": "找准任务",
      "seconds": 150
    },
    {
      "label": "操作前复核",
      "seconds": 45
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
  ],
  "intro": [
    "大家好，欢迎来到第一章。从这一章开始，我们要动手做一个自己的个人主页啦。你可以先想一个很简单的画面：有人打开这个页面，能看到你是谁、你在做什么，以及你想展示的作品。我们会从这个想法出发，一步一步把个人主页做出来。",
    "如果现在让你对 AI 说“帮我做一个个人主页”，它可能马上就开始写代码。不过，这句话里还有不少事情没有说清楚：页面要放哪些内容，哪些文件可以修改，做到什么程度才算完成？这一章，我们就围绕这个小项目，练习怎样把这些要求讲清楚，再检查 AI 交回来的结果。",
    "我们需要的工具与环境在零点二小节已经准备完成了。本章从一个小修改开始。然后回过头看 AI 是怎样读取文件、执行动作的，以及什么时候需要我们确认。等这些环节看明白了，再把 个人主页的 需求 整理成一份明确的请求，交给它执行，最后一起检查页面和代码改动，并验证我们的项目能否成功构建。",
    "你可以跟着 视频 暂停操作，也可以先看一遍，再用自己的项目练习。遇到报错或者结果和预期不一样，我们就把具体问题找出来，带着证据继续修改。现在先从一个容易看清结果的任务开始：请 AI 帮我们换掉页面上的一句欢迎语。"
  ]
};
