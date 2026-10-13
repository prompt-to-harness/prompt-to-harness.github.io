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
      "lead": "先让 Codex 替换练习页的一句欢迎语，再看页面和代码差异，确认它只改了指定文字",
      "html": "<ol class=\"p-map\" data-reveal=\"0\"><li class=\"is-now\"><b>1.1</b>第一次 AI 协作闭环</li><li class=\"\"><b>1.2</b>Agent 执行机制与 AI 协作基础</li><li class=\"\"><b>1.3</b>工具使用与权限</li><li class=\"\"><b>1.4</b>写清个人主页任务：从模糊需求到可执行 Prompt</li><li class=\"\"><b>1.5</b>完成个人主页：从已确认 Prompt 到可验收的个人主页 v0</li><li class=\"\"><b>1.6</b>最小权限：为什么不能给 Agent 所有权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">修改前</span><p class=\"p-big\" style=\"font-weight:500\">你好，欢迎来到我的练习页面</p></div><div class=\"p-join\" data-reveal=\"1\"><span>只改这一句</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">任务目标</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding 课堂！</p></div></div>",
      "steps": [
        "看原文",
        "比较目标"
      ],
      "script": [
        "【操作提示｜课件 p01，第 1 步；暂不切窗口】\n\n我们先看屏幕左边这句话：“你好，欢迎来到我的练习页面。”今天要做的事情很小，就是请 AI 帮我们换掉这句欢迎语。\n\n我们可能会想，这几个字我自己改，不是更快吗？是的，手动改并不难。我们选这个小任务，是因为修改前后很容易比较。这样，我们可以把注意力放在另一件事上：我把任务交给 AI 之后，要看它做了什么，又该怎样检查它交回来的结果。",
        "【操作提示｜推进到第 2 步，指向右侧目标文案】\n\n这次要换成的文字是：“你好，欢迎来到 Vibe Coding 课堂！”先记住这句话，后面我们就拿它来核对。\n\n假如 AI 回我们一句“已经完成”，我们会直接接受吗？我们先不急着回答。等会儿我们会看到，浏览器里的页面和代码里的改动，各能帮我们检查一部分。\n\n上面这条路线是第一章的六节课。今天先走完这次小修改，正式的个人主页放到一点五再做。现在，我们先找准要修改的文件。"
      ],
      "segment": "找准任务",
      "seconds": 45,
      "source": "index.html#p01",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "只改一句话，怎样证明改对？\n\n你准备怎样证明改对了？先留下这个问题，后面用页面和 Diff 回答。"
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
          "text": "先看这一句欢迎语。这节只改它，个人主页留到 1.5。\n\n你准备怎样证明改对了？先留下这个问题，后面用页面和 Diff 回答。"
        }
      ]
    },
    {
      "id": "p02",
      "label": "先找准你要改的那一份文件",
      "title": "先找准你要改的那一份文件",
      "lead": "继续使用课前准备中克隆到本地的 course-starter 项目。终端、编辑器与浏览器都指向这份练习项目，本次只修改 setup-check/index.html。",
      "html": "<ul class=\"p-tree\" style=\"font-size:25px;padding:22px 28px;line-height:1.9\"><li data-reveal=\"0\"><span class=\"p-path\">GitHub · course-starter</span><span class=\"p-note\">课程模板 · 克隆来源</span></li><li class=\"is-open\" data-reveal=\"1\"><span class=\"p-path\">course-starter/</span><span class=\"p-note\">本地练习项目 · 在这里打开</span><ul><li class=\"is-target\" data-reveal=\"2\"><span class=\"p-path\">setup-check/index.html</span><span class=\"p-note\">本次修改目标</span></li></ul></li></ul><p class=\"source-note\"><a href=\"../../../ch00/lessons/02-preparation/index.html#p13\">课前准备：取得练习项目</a></p>",
      "steps": [
        "认准本地项目",
        "确认根目录",
        "定位文件"
      ],
      "script": [
        "【操作提示｜课件 p02 第 1 步；指向课程模板与本地项目的区别。未取得项目时打开“课前准备：取得练习项目”，已完成时继续使用原目录，不重新克隆或移动文件】\n\n上一节已经把课程模板克隆到本地。GitHub 上的 course-starter 是取得材料的来源，本地的 course-starter 文件夹就是我们接下来修改的练习项目。还没有准备好时，先回课前准备完成克隆，再继续实操。",
        "【操作提示｜推进第 2 步 → 切 VS Code，确认打开课前准备取得的 course-starter 根目录；再切项目终端运行 pwd，Windows PowerShell 用 Get-Location。核对编辑器、终端与欢迎页服务是同一目录；目录名自定义时展示实际路径】\n\n我现在切到 VS Code，先看文件列表的根目录，再看终端的当前目录。默认文件夹叫 course-starter；如果自己用了别的名字，就以自己的实际路径为准。关键是编辑器、终端和浏览器服务都使用同一份项目。\n\n后面说终端，指的就是运行命令的窗口，VS Code 的集成终端也可以。目录和文件名尽量完整地露出来，方便核对。",
        "【操作提示｜推进第 3 步 → VS Code 打开 setup-check/index.html，搜索 welcome-message；只展示原文，不手动修改。当前分支与已有改动在后面的操作前复核中记录】\n\n我们要找的是 setup-check 文件夹里的 index.html。找到 welcome-message，就能看到页面上的欢迎语。不同目录里可能都有 index.html，不能只凭文件名判断。\n\n现在先看位置，不手动修改。动手前还要记下当前分支和已有改动，等会儿看差异时，才分得清哪些原来就有、哪些是这次产生的。"
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
          "text": "发现未知改动时，口播：“这里已有变化，我们先确认它的来源，再继续任务。”Git 尚未就绪者记录状态，第四页给出处理路径。"
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
      "id": "p02a",
      "label": "工具与页面就绪，再开始修改",
      "title": "工具与页面就绪，再开始修改",
      "lead": "课前准备已安装工具、取得项目并启动欢迎页。这里复核当前目录和工具，缺项回到对应操作步骤。",
      "html": "<div class=\"p-box\" data-role=\"ctx\"><h3>回到自己的项目</h3><p>工具能用 · Git 能看变化 · 页面能打开</p></div><p class=\"p-links\"><a href=\"../../../ch00/lessons/02-preparation/index.html\">返回课前准备</a></p>",
      "steps": [
        "复核当前状态"
      ],
      "script": [
        "【操作提示｜打开课前准备时使用的项目目录与欢迎页】\n\n工具、Git 和欢迎页已经在课前准备中走过。现在回到同一项目，检查当前状态。还没有完成的部分，可以从准备小节展开相应命令补做。这次开始记录的是首次修改的过程，不要求补交课前环境作业。"
      ],
      "segment": "操作前复核",
      "seconds": 30,
      "source": "index.html#p02a",
      "teaching": []
    },
    {
      "id": "p03",
      "label": "哪些条件不满足，就不能开始？",
      "title": "哪些条件不满足，就不能开始？",
      "lead": "修改前复核当前页面、工作树和工具目录。只记录本次实际状态，不重复安装或提交课前准备记录。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:16px 20px\"><h3 data-node=\"browser\">浏览器</h3><div style=\"display:grid;grid-template-columns:28px 1fr;gap:6px 10px;align-items:start;margin-top:8px\"><span style=\"width:26px;height:26px;border-radius:50%;background:#15803D;color:#fff;display:grid;place-items:center;font-size:15px\">✓</span><p data-node=\"browser_pass\" data-edge=\"browser:browser_pass\">打开并刷新环境页</p><span style=\"width:26px;height:26px;border-radius:50%;background:#D9481C;color:#fff;display:grid;place-items:center;font-size:15px\">✗</span><p data-node=\"browser_fail\" data-edge=\"browser:browser_fail\" class=\"p-sub\">核对路径或本地服务</p></div></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\" style=\"padding:16px 20px\"><h3 data-node=\"git\">Git</h3><div style=\"display:grid;grid-template-columns:28px 1fr;gap:6px 10px;align-items:start;margin-top:8px\"><span style=\"width:26px;height:26px;border-radius:50%;background:#15803D;color:#fff;display:grid;place-items:center;font-size:15px\">✓</span><p data-node=\"git_pass\" data-edge=\"git:git_pass\">分支、状态、Diff 可读</p><span style=\"width:26px;height:26px;border-radius:50%;background:#D9481C;color:#fff;display:grid;place-items:center;font-size:15px\">✗</span><p data-node=\"git_fail\" data-edge=\"git:git_fail\" class=\"p-sub\">补齐 Git 与仓库</p></div></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"2\" style=\"padding:16px 20px\"><h3 data-node=\"cli\">Codex CLI</h3><div style=\"display:grid;grid-template-columns:28px 1fr;gap:6px 10px;align-items:start;margin-top:8px\"><span style=\"width:26px;height:26px;border-radius:50%;background:#15803D;color:#fff;display:grid;place-items:center;font-size:15px\">✓</span><p data-node=\"cli_pass\" data-edge=\"cli:cli_pass\">从练习目录启动</p><span style=\"width:26px;height:26px;border-radius:50%;background:#D9481C;color:#fff;display:grid;place-items:center;font-size:15px\">✗</span><p data-node=\"cli_fail\" data-edge=\"cli:cli_fail\" class=\"p-sub\">补齐 Codex CLI</p></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">三项条件都<b>满足</b>再开始</div>",
      "steps": [
        "检查页面",
        "检查仓库",
        "检查 CLI"
      ],
      "script": [
        "【操作提示｜打开准备好的原始环境页并刷新；录制内嵌预览时，按 0.2 启动步骤从练习根目录启动 4174 服务】\n\n先确认页面仍来自自己的练习副本，原来的欢迎语还在。保存修改前截图，等会儿对照。服务已经启动时直接复用，避免重复启动。",
        "【操作提示｜在练习根目录运行 git branch --show-current、git status --short、git diff；有暂存改动时补看 git diff --cached】\n\n开始修改前，再看一次分支与文件变化。零点二之后你可能编辑过项目文件，把这些已有变化注明，等会儿才分得清本次改动。发现不明改动先查来源并保留。",
        "【操作提示｜核对当前 Codex 会话的工作目录与权限】\n\n最后核对工具处理的是同一份副本，权限适合当前操作。CLI 不可用时，先补齐 CLI；可以继续看演示，自己的实操等工具恢复后再做。Codex App 是可选入口，不替代 CLI 的准备检查。工具与账号失败时回课前准备小节排查，恢复后再实操。"
      ],
      "segment": "操作前复核",
      "seconds": 120,
      "source": "index.html#p03",
      "teaching": [
        {
          "title": "操作前复核",
          "text": "本次修改前查看当前工作树、页面与权限；安装只在缺项时补做。"
        }
      ]
    },
    {
      "id": "p03-access",
      "label": "确认工具读到的是目标文件",
      "title": "确认工具读到的是目标文件",
      "lead": "工具读取对象应与当前欢迎页一致。会话或目录变化后，再读取一次目标文件。",
      "html": "<div class=\"p-box\" data-role=\"ctx\"><h3>对照原始欢迎语</h3><p>setup-check/index.html<br>h1#welcome-message</p></div><div class=\"p-bar is-light\">会话或目录变化时，补做只读检查</div>",
      "steps": [
        "核对读取对象"
      ],
      "script": [
        "【操作提示｜核对当前会话与项目目录；有变化时补做课前准备中的只读请求】\n\n确认工具读到的欢迎语与当前文件一致。会话或目录换过，就再读一次。认证或请求失败时先处理接入问题。接下来才发送正式的修改请求。"
      ],
      "segment": "操作前复核",
      "seconds": 30,
      "source": "index.html#p03-access",
      "teaching": []
    },
    {
      "id": "p04",
      "label": "先交任务，再看计划，最后确认",
      "title": "先交任务，再看计划，最后确认",
      "lead": "第一次协作分三步：先交完整任务，请 Agent 复述目标、非目标和计划，此时不允许写入；再核对计划里有没有多出样式修改、安装或发布；三者都对，才批准这一次单文件的文字修改。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>任务</b><small>只改 <code>h1#welcome-message</code></small></span></li><li data-reveal=\"1\"><span><b>计划</b><small>读取 → 替换文字 → 查页面与 Diff</small></span></li><li class=\"is-ok\" data-reveal=\"2\"><span><b>人工确认</b><small>都对才批准 · 越界先停</small></span></li></ol></div>",
      "steps": [
        "提交完整请求",
        "核对计划",
        "明确确认"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步，展开并阅读完整请求；此页讲解请求，暂不发送，统一在 p04-live 实操】\n\n我们先把要发的请求看一遍。第一句限定读取范围：只读 setup-check/index.html 和必要的仓库状态。接下来写清楚目标，要改的是 h1#welcome-message，也就是刚才找到的那个标题元素。\n\n目标文案直接给出完整的一句：“你好，欢迎来到 Vibe Coding 课堂！”这样后面检查时，就有一份可以逐字对照的标准。\n\n再往下看，其他内容、结构、样式都不改，也不安装依赖、不发布。因为今天要做的事情只有替换欢迎语，增加这些动作会超出当前任务。",
        "【操作提示｜推进第 2 步，指向“先复述目标、非目标和小计划，等我确认后再修改”；仍留在课件】\n\n注意这一句：先复述，再给小计划，等我确认后再修改。我们希望先听一听它准备怎么做。\n\n计划不需要很长。读到目标文字，只替换这句欢迎语，然后说明怎样检查页面和改动，就够了。我们要看的是，这个计划有没有对应刚才的任务。\n\n如果它说“顺便调整配色”，或者“先安装一套前端框架”，就指出这一项超出了范围，让它先改计划。今天把这些环节分开，是为了看清楚每一步；小任务不用写成一份很长的方案。",
        "【操作提示｜推进第 3 步；下一页再发送请求与确认，不在此处预读一份虚构的 AI 回答】\n\n等目标、范围和计划都对上，我们再明确回复：同意按这个计划，只修改指定文件里的欢迎语，其他内容保持不变。\n\n这次确认对应的是这一次修改。如果后面出现额外动作，还要看它是否在范围里。具体的工具权限提示，我们会在一点三专门讲。\n\n接下来切到真实操作。我们可以对照刚才这份请求，看它怎样读取文件、怎样回复，以及什么时候开始写入。"
      ],
      "segment": "首次执行",
      "seconds": 90,
      "source": "index.html#p04",
      "prompt": "只读取 setup-check/index.html 和必要的仓库状态。\n\n把 h1#welcome-message 改为：\n“你好，欢迎来到 Vibe Coding 课堂！”\n\n不改其他内容、结构或样式，不改其他文件，不装依赖，不发布。\n\n先复述目标、非目标和小计划，等我确认后再修改；越界先停。\n\n完成后说明改动与页面、diff 检查方法。",
      "teaching": [
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
          "text": "复制本页完整请求。先要求复述目标、非目标与小计划，此时不允许写入。\n\n检查计划是否偷偷增加样式修改、依赖或发布。发现偏离就要求修正计划。\n\n核对后明确批准本次单文件文字修改；不要把这次同意当成之后所有动作的授权。"
        }
      ],
      "layout": "prompt-scene"
    },
    {
      "id": "p04-live",
      "label": "切到实操：盯住这三件事",
      "title": "切到实操：盯住这三件事",
      "lead": "切到实操前先记住三件事：看的是不是同一份副本，是不是确认后才写入，是不是只改了指定文字。默认显示的是 Starter 原始预览，启动练习副本的 4174 服务后再连接，才是实际结果。",
      "html": "<div class=\"demo-visual\" data-reveal=\"1\"><div class=\"welcome-demo\"><div class=\"demo-toolbar\"><span data-demo-status>Starter 原始页面 · 仅供预览</span><button type=\"button\" data-demo-connect>连接练习副本</button><button data-demo-reload=\"\" type=\"button\">刷新案例</button><a href=\"../../../../starters/personal-homepage/setup-check/index.html\" rel=\"noopener\" target=\"_blank\">独立打开 ↗</a></div><iframe loading=\"lazy\" src=\"../../../../starters/personal-homepage/setup-check/index.html\" title=\"独立练习项目的环境检查页\"></iframe><p class=\"caption\">默认是 Starter 预览。实操先启动练习副本的 4174 服务，再连接；核对同一份文件。</p></div></div><aside class=\"demo-notes\"><h3 style=\"font:400 26px/1.3 var(--p-title);margin:0 0 10px\">边看边核对</h3><ol class=\"p-watch\" data-reveal=\"0\"><li>同一份副本</li><li>确认后写入</li><li>只改指定文字</li></ol></aside>",
      "steps": [
        "先给观察清单",
        "连接真实副本"
      ],
      "script": [
        "【操作提示｜课件 p04-live 第 1 步 → 确认现有“页面服务”终端仍在运行；不要重复占用 4174 端口。指向三项观察清单】\n\n切过去之前，先记住屏幕上的三件事。第一，工具和页面是不是同一份副本。第二，它有没有等我确认才写入。第三，最终是不是只改了指定文字。\n\n现在不用追着每一行日志读。先围绕这三个问题观察，看到有关的动作和输出时，我们再停下来解释。",
        "【操作提示｜课件第 2 步点击“连接练习副本”；切 Terminal，粘贴 p04 的完整请求并发送，等待实际回复。核对复述和计划；正确才发送本次确认，偏离则先纠正。执行后切 VS Code 查看目标行，再回 Chrome 已有“练习页面”标签页刷新】\n\n我先连接练习副本。课件默认的 Starter 预览展示的是原始页面；现在连到本地服务，才是在看我们实际操作的那份文件。\n\n然后回到终端，把刚才的完整请求发出去。先看它有没有把目标和范围说对，再看计划里准备改哪里。我们根据屏幕上实际返回的内容核对。\n\n【操作提示｜此处停顿，逐项指出真实返回中的目标、范围与计划。没有返回或计划不符就先处理，不继续念成已通过；若提前写入，指出“它没有等确认，这个流程要求没有满足”，停止后检查差异】\n\n核对清楚以后，我才发送确认。修改完成后，我们回到文件，找刚才那一行，再刷新浏览器。接下来正式验收，不只看它最后那句完成说明。"
      ],
      "segment": "首次执行",
      "seconds": 90,
      "source": "index.html#p04-live",
      "teaching": [
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
          "text": "接下来只看三件事：修改的是不是同一副本、有没有先确认、是否只替换文字。\n\n在练习副本启动 4174 服务，再点连接。默认 Starter 仅作原始预览；若服务未启动，不把预览当实际结果。"
        }
      ],
      "layout": "html-scene"
    },
    {
      "id": "p05",
      "label": "页面正确，还要查改动范围",
      "title": "页面正确，还要查改动范围",
      "lead": "验收要两类证据：页面回答“改对没有”，刷新同一份副本逐字核对；Diff 回答“多改没有”，要对照初始状态看完整 Diff 和文件列表。两类都符合才接受，否则带着准确的差异去修正。",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><div class=\"p-head\"><h3>页面证据</h3><span class=\"p-tag\" data-role=\"ok\">对不对</span></div><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i><span>setup-check · 同一副本</span></div><div class=\"p-page-body\" style=\"font-size:23px\">你好，欢迎来到 Vibe Coding 课堂！</div></div></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><div class=\"p-head\"><h3>Diff 证据</h3><span class=\"p-tag\" data-role=\"gate\">多没多</span></div><div class=\"p-term\" data-copy=\"git diff -- setup-check/index.html\">git diff -- setup-check/index.html</div></div></div><ol class=\"p-watch is-row\" data-reveal=\"2\"><li class=\"is-done\">同一副本</li><li class=\"is-done\">确认后写入</li><li class=\"is-done\">指定文字变化</li></ol>",
      "steps": [
        "观察运行结果",
        "审查所有改动",
        "作出判断"
      ],
      "script": [
        "【操作提示｜课件 p05 第 1 步 → Chrome 已有“练习页面”标签页，刷新 http://localhost:4174/setup-check/；与修改前截图比较，不新开另一份文件】\n\n先检查页面。地址还是刚才那个地址，服务也还是同一份副本。我们刷新后，拿任务卡的完整文字来对照：你好，欢迎来到 Vibe Coding 课堂！空格、文字和最后的标点都看一遍。\n\n再看看周围的页面。标题以外的内容有没有变化，布局有没有明显移动。把这个画面和修改前的截图放在一起，就更容易发现差异。\n\n如果刷新后还是旧文字，先核对服务目录、文件是否已经保存，以及打开的地址。确认检查对象没找错，再决定要不要让 AI 修正。",
        "【操作提示｜切 Terminal 的“仓库检查”标签页，依次运行 git status --short、git diff --stat、git diff；补看 git diff --cached，以覆盖暂存区。若 status 出现未跟踪文件，切 VS Code 检查其内容。对照修改前记录】\n\n然后看代码改动。先用 status 看有哪些文件变化，再用 diff 看里面具体改了什么。带减号的一行表示删除，带加号的一行表示新增。\n\n我们要找到原来的欢迎语被替换成目标文案的地方，也要继续往下看完整输出，确认有没有附带修改其他内容。\n\n普通 git diff 显示的是尚未暂存的修改。已经暂存的部分要另外看，新增但还没被 Git 跟踪的文件也要从状态列表里检查，不能因为某段 diff 很短就跳过去。\n\n最后对照开工前的记录，把原来就有的变化与这次修改区分开。",
        "【操作提示｜回课件 p05 第 3 步；依实际结果选择结论：全部符合则说明通过；有问题则指出具体位置，并保留给 p06 修正】\n\n现在可以回答开头的问题了。浏览器帮助我们确认用户实际看到的文字和布局，完整差异和文件状态帮助我们确认改动范围。\n\n再回看操作记录，它是否等到确认后才修改。三个问题都有对应证据，才可以接受这次结果。\n\n如果发现漏字或者多余修改，就把准确的位置和现象留下来，下一步据此修正。如果都符合，就如实记录通过。接着我们用课件上的一小段 diff，看看它单独能支持什么判断。"
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
          "text": "切到真实页面，刷新并逐字核对。截图要能说明当前检查的是哪份副本。\n\n对照初始状态看完整 Diff。只看一条新增行，不能证明别处没变。\n\n两类证据都符合才接受。若有多余变化或漏字，带着准确差异进入修正。"
        }
      ]
    },
    {
      "id": "p05-diff",
      "label": "这份 Diff 能说明什么？",
      "title": "这份 Diff 能说明什么？",
      "lead": "这段 Diff 是教学截取：它能说明这句文字从旧改成新，但证明不了别的文件没变。每份证据只对应它能支持的那条结论，其余部分还要看完整 Diff、文件列表和实际页面。",
      "html": "<div class=\"p-walk\" style=\"grid-template-columns:1.35fr 1fr\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:44px\"><div class=\"p-fn\">setup-check/index.html <span class=\"add\">+1</span><span class=\"del\">−1</span></div><div class=\"p-ln del\"><i>−</i><code>你好，欢迎来到我的练习页面</code></div><div class=\"p-ln add\"><i>+</i><code>你好，欢迎来到 Vibe Coding 课堂！</code></div></div><p class=\"source-note\" style=\"margin-top:8px\">教学截取；删除为红底，新增为绿底</p></div><ol class=\"p-notes\"><li class=\"is-ok\" data-reveal=\"0\"><span><b>能说明</b><small>这段文字从旧改成新</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>还不能证明</b><small>没有修改其他文件</small></span></li><li data-reveal=\"1\"><span><b>继续检查</b><small>完整 Diff、文件列表与实际页面</small></span></li></ol></div>",
      "steps": [
        "先判断",
        "揭示边界"
      ],
      "script": [
        "【操作提示｜留在课件 p05-diff 第 1 步；这是教学截取，不切真实终端。停顿片刻再揭示下一步】\n\n看这两行，红色这一行是旧文字，绿色这一行是新文字。这是课件里的教学截取，不是刚才终端输出的完整记录。\n\n只拿到这两行，我们会给整个任务打上“通过”吗？可以先暂停一下，想想还有什么没看到。",
        "【操作提示｜推进第 2 步，指向完整 Diff、文件列表和页面结果；无需新开 Chrome 标签页】\n\n这两行能说明，这一处文字按要求发生了替换。可是其他文件有没有变化，页面刷新以后显示什么，都没有出现在这张截取里。\n\n所以我们还要补上完整差异、文件状态和浏览器检查。回到刚才的实操，就能理解为什么要来回看两个地方了：每一份证据，都在回答一个具体问题。\n\n接下来，如果检查真的发现了问题，我们该怎么把它说清楚？"
      ],
      "segment": "检查与修正",
      "seconds": 60,
      "source": "index.html#p05-diff",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "这份 Diff 能说明什么？\n\n不能。还缺完整文件差异、其他文件状态和浏览器结果；把证据对应到它能支持的结论。"
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
          "text": "这是教学截取，不是真实执行记录。只给这两行，你能确认整个任务通过吗？\n\n不能。还缺完整文件差异、其他文件状态和浏览器结果；把证据对应到它能支持的结论。"
        }
      ]
    },
    {
      "id": "p06",
      "label": "“不对”要改成可执行的反馈",
      "title": "“不对”要改成可执行的反馈",
      "lead": "发现不对时，先准确说出实际和期望差在哪里，例如漏了“课堂”二字，而不是只说一句“不对”。反馈只要求补这两个字，不追加美化；修正后刷新同一页面，再复查完整 Diff。",
      "html": "<div class=\"demo-notes\"><div style=\"display:grid;gap:12px\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:12px 18px\"><span class=\"p-tag\" data-role=\"gate\">实际 · 教学示例</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding<span class=\"p-miss\">&nbsp;</span>！</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:12px 18px\"><span class=\"p-tag\" data-role=\"ok\">期望</span><p class=\"p-big\">你好，欢迎来到 Vibe Coding <span class=\"p-ins\">课堂</span>！</p></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"font-size:21px\">只补“课堂”二字 → 刷新同一页面 → <b>复查完整 Diff</b></div></div></div>",
      "steps": [
        "指出现象",
        "限定修正",
        "再次验证"
      ],
      "script": [
        "【操作提示｜课件 p06 第 1 步。优先使用刚才真实发现的问题；如果首次任务已通过，就保留课件的“漏了课堂二字”教学假设，不改坏原文件来伪装失败】\n\n我们先用屏幕上这个教学例子：假设页面显示的是“你好，欢迎来到 Vibe Coding！”，少了“课堂”两个字。\n\n如果我只回复“不对，再改一下”，它还要猜我指的是文字、配色，还是布局。现在我们已经看见具体差异，就直接把实际文字和期望文字一起给它。\n\n有真实问题时，就把这里的例子换成自己实际看到的内容。第一次已经全部改对，也不用特意制造一次错误。",
        "【操作提示｜推进第 2 步，逐句看反馈请求。有真实问题才切 Terminal 发送对应反馈；没有真实问题则在课件上讲解，不把教学请求发给已正确的文件】\n\n这份反馈先交代现象：现在显示的句子少了两个字。然后给出完整的期望文字，最后限定动作：只补这两个字，其他内容、结构和样式保持不变。\n\n这个时候也不要顺手加一句“再帮我美化一下”。否则任务范围变了，后面我们就很难分清，哪些是修正，哪些是新需求。\n\n把这一次差异处理清楚，再重新检查。",
        "【操作提示｜有实际修正：等待 Terminal 完成后，切 Chrome 原“练习页面”刷新，再切“仓库检查”终端复查状态与完整差异；无实际修正：留课件，明确说明本段只练习反馈表述。最后回课件 p06-loop】\n\n修正后，我们还是回到同一个页面，再对照完整欢迎语，接着复查改动范围。只有重新看过，才能判断刚才的问题是否已经解决。\n\n如果这一段只是课件上的假设，就记录为反馈写法练习，没有执行真实修正。实际任务的结果和教学例子分开记录。\n\n我们把这些动作连起来看，就能看清楚：什么时候继续，什么时候可以结束，还有什么时候应该停下来。"
      ],
      "segment": "检查与修正",
      "seconds": 150,
      "source": "index.html#p06",
      "prompt": "教学示例：页面显示“你好，欢迎来到 Vibe Coding！”；\n任务要求是“你好，欢迎来到 Vibe Coding 课堂！”。\n请只补回“课堂”二字，不改其余内容、结构或样式。\n修正后刷新同一页面，逐字核对，并检查完整 Diff。",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "“不对”要改成可执行的反馈；修正后重新看页面和完整 Diff。若录制时一次成功，使用标明来源的失败素材，不伪造失败。"
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
          "text": "假设结果漏掉课堂二字。请学员暂停视频，准确说出实际与期望的差异。\n\n反馈只要求补两个字，不追加美化。复制完整反馈时说明这是教学示例。\n\n修正后重新看页面和完整 Diff。若录制时一次成功，使用标明来源的失败素材，不伪造失败。"
        }
      ],
      "layout": "prompt-scene"
    },
    {
      "id": "p06-loop",
      "label": "什么时候继续，什么时候停？",
      "title": "什么时候继续，什么时候停？",
      "lead": "把整条路径连起来：说明目标、复述计划、人工确认，然后才写入；写入后检查页面和 Diff。检查之后有三个出口——通过就记录，不符就限定范围修正再检查，无法验证或需要越界就记录并停下。",
      "html": "<div class=\"p-flow\" style=\"--n:6;column-gap:28px\"><div class=\"p-node\" data-role=\"ink\" data-reveal=\"0\" data-node=\"goal\"><h3>说明目标</h3><p>范围与标准</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"0\" data-node=\"plan\" data-edge=\"goal:plan\"><h3>复述与计划</h3><p>核对理解</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\" data-node=\"confirm\" data-edge=\"plan:confirm\"><h3>人工确认</h3><p>写入前</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" data-node=\"edit\" data-edge=\"confirm:edit\"><h3>执行修改</h3><p>指定文字</p></div><div class=\"p-node\" data-role=\"ink\" data-reveal=\"1\" data-node=\"check\" data-edge=\"edit:check\"><h3>检查结果</h3><p>页面 + Diff</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"1\" data-node=\"record\" data-edge=\"check:record\"><h3>接受并记录</h3><p>留下证据</p></div><div class=\"p-fork\" data-reveal=\"1\" style=\"grid-column:4/7;--gap:28px\"><div class=\"l\" data-reveal=\"1\" data-edge=\"check:repair\"><span>不符</span></div><div class=\"r\" data-reveal=\"2\" data-edge=\"check:stop\"><span>无法继续</span></div></div><div class=\"p-node is-row2\" data-role=\"agent\" data-reveal=\"1\" data-node=\"repair\" data-edge=\"repair:check\" style=\"grid-column:4\"><h3>反馈并修正</h3><p>限定范围</p><span class=\"p-loopnote\">↺ 修正后再检查</span></div><div class=\"p-node is-row2\" data-role=\"gate\" data-reveal=\"2\" data-node=\"stop\" style=\"grid-column:6\"><h3>停止并记录</h3><p>无法验证 · 需越界</p></div></div>",
      "steps": [
        "检查前提",
        "判断检查结果",
        "保留停止出口"
      ],
      "script": [
        "【操作提示｜停留课件 p06-loop 第 1 步，沿图中的目标、复述和计划、人工确认、执行依次指示】\n\n图的前半段，就是刚才修改前做的事情。先把欢迎语的目标说清楚，再核对它的理解和小计划，然后确认这一次修改。\n\n顺序很关键。确认发生在写入之前，我们才有机会在动手前发现任务理解上的偏差。",
        "【操作提示｜推进第 2 步，指向检查后的通过出口和修正回路】\n\n执行以后，我们来到检查这里。页面和改动范围都符合要求，就接受结果、保存记录。\n\n如果有一处不符，就说清实际和期望的差异，让它在原来的范围里修正。修完还要回来检查，不能从“它说修好了”直接跳到结束。\n\n今天的任务小，检查也很具体：一句欢迎语、原来的布局，以及完整的文件改动。",
        "【操作提示｜推进第 3 步，指向停止出口；不切窗口】\n\n还有一种情况：现在没法判断。比如实际页面打不开，或者它要求做超出本次范围的事情。这个时候先停下来，写清楚卡在哪里、已经看到什么、下一步需要补什么。\n\n我们不需要连续发“再试一次”。有明确的错误，处理错误；缺少必要条件，补齐条件后再继续。\n\n下面我们各自用自己的练习副本，把这条路径走一遍。"
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
      "lead": "暂停视频，用自己的练习副本独立走一遍，不复制老师的截图。复述、计划、确认、前后截图、Diff 与修正记录写进 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md；页面正确但 Diff 越界，不能算通过。",
      "html": "<span class=\"p-tag\" data-role=\"us\" style=\"justify-self:start\">独立练习</span><div class=\"p-task\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"0\"><h3>输入与任务</h3><p>自己的副本 · 指定欢迎语</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>交付</h3><p>复述 · 计划 · 确认 · 截图 · Diff · 修正记录</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\"><h3>验收</h3><p>文案准确 · 范围合规 · 问题已复验</p></div></div>",
      "steps": [
        "暂停跟做",
        "整理记录",
        "对照验收"
      ],
      "script": [
        "【操作提示｜课件 p07 第 1 步，给暂停跟做提示；不等待学员反馈】\n\n现在可以暂停视频，完成自己的欢迎语修改。先检查环境，保留修改前状态，再发送请求，核对计划、确认修改，最后看页面和差异。\n\n不用复现老师屏幕上的每一行回复。只要围绕同一个任务，完成必要的操作和检查就可以。遇到问题，先把现象记下来，再按 0.2 课前准备小节的入口处理。",
        "【操作提示｜推进第 2 步 → 切 VS Code，在练习副本创建或打开 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md，由讲师本人整理记录；如已有内容则追加，不覆盖。此操作在欢迎语任务验收后单独进行】\n\n做完以后，我们把证据放进这个记录文件。可以按操作顺序写：开始时的环境状态、发出的请求、它的复述和计划、自己的确认，然后是修改前后截图、完整差异和检查结论。\n\nReview 就是审查结论。不要只写“看过了”，要写清楚欢迎语是否一致，布局有没有变化，文件改动有没有超出范围。\n\n这个记录文件是我们完成任务后另行整理的，不属于刚才授权 AI 修改欢迎语的范围。之后再看 Git 状态，会多出这份记录，要把它和那次单文件任务分清。\n\n如果有修正，保留修正前后的证据。没有真实修正，就写明首次任务通过；教学例子的练习另外标注来源，不填一个没有发生过的修复结果。",
        "【操作提示｜回课件 p07 第 3 步，对照验收项；保留原始记录供下一节使用】\n\n最后给自己一个判断题：欢迎语看起来对了，但 diff 显示它还改了页面颜色，这次能通过吗？\n\n按今天的要求，还不能。因为我们明确约定只替换文字，样式变化超出了范围。要把这处额外改动反馈清楚，处理后再检查。\n\nCodex CLI 还没能实际完成任务，就写待补做，下一次从记录里的阻塞位置继续。可选 App 的操作另外记录，不替代本节的 CLI 检查。"
      ],
      "segment": "独立练习",
      "seconds": 210,
      "source": "index.html#p07",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "独立完成一次，再拿证据回答；页面正确但 Diff 越界能通过吗？不能。CLI 未完成则标待补做；App 可选，不替代 CLI 检查。"
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
          "text": "用自己的副本执行，不复制教师的成功截图。录播可暂停，完成后继续。\n\n写入 docs/evidence/CH01_ENVIRONMENT_AND_FIRST_LOOP.md。没有真实修正时标明练习素材来源与尚缺证据。\n\n页面正确但 Diff 越界能通过吗？不能。CLI 未完成则标待补做；App 可选，不替代 CLI 检查。"
        }
      ]
    },
    {
      "id": "p07-recap",
      "label": "先确认，再修改；拿证据收尾",
      "title": "先确认，再修改；拿证据收尾",
      "lead": "这一节只改了一句话，却完整走过了确认、执行、检查和反馈。带走一个习惯：页面和 Diff 一起看，缺证据就不写通过。下一节用这份记录，把 Agent 的执行过程拆开来看。",
      "html": "<div class=\"p-sketch\" style=\"align-items:center\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个习惯</h3><div class=\"p-star\" style=\"width:270px;font-size:27px\">页面与 Diff<br>一起看</div><p class=\"p-sub\" style=\"text-align:center\">缺证据不写通过</p></div><div data-reveal=\"1\"><h3>三个出口</h3><ul class=\"p-exits\" style=\"gap:14px\"><li class=\"is-pass\">通过就记录</li><li class=\"is-fix\">不符就修正复验</li><li class=\"is-stop\">受阻就停止</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>1.2 拆开执行过程</h3></div></div></div>",
      "steps": [
        "收拢习惯",
        "区分出口",
        "交接证据"
      ],
      "script": [
        "【操作提示｜停留课件 p07-recap 第 1 步，不再切工具窗口】\n\n这一节，我们从一行欢迎语出发，看了一次任务怎样从请求走到验收。开头那个问题，现在有具体答案了：去看实际页面，再对照完整差异和文件状态。\n\n我们可以把这个习惯带到下一次小修改里。先给出明确的目标，确认要做的动作，再用实际结果判断是否完成。",
        "【操作提示｜推进第 2 步，依次指向三个出口】\n\n检查后有三个出口。符合要求，接受并记录；发现差异，反馈后重新检查；缺少条件，保留阻塞再继续。\n\n跟做暂时受阻的同学，先把卡在哪里写具体。以后回来，就知道要补哪一项，而不是重新从头试一遍。",
        "【操作提示｜推进第 3 步，结束本节；保留 Terminal 会话、截图和首次闭环记录，下一节复用】\n\n请保留这次的请求、执行过程和检查记录。下一节我们会回到这些材料，看我们发出一句话之后，工具怎样读取文件、执行动作，又把结果返回。\n\n今天先把欢迎语任务的证据整理好。我们下一节接着看。"
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
      "seconds": 180
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
    "你好，欢迎来到第一章。从这一章开始，我们要动手做一个自己的个人主页。你可以先想一个很简单的画面：有人打开这个页面，能看到你是谁、你在做什么，以及你想展示的作品。我们会从这个想法出发，一步一步把个人主页原型做出来。",
    "如果现在让你对 AI 说“帮我做一个个人主页”，它可能马上就开始写代码。不过，这句话里还有不少事情没有说清楚：页面要放哪些内容，哪些文件可以修改，做到什么程度才算完成？这一章，我们就围绕这个小项目，练习怎样把这些要求讲清楚，再检查它交回来的结果。",
    "工具与环境在零点二准备。本章从一次很小的修改开始。接着，回过头看 AI 是怎样读取文件、执行动作的，以及什么时候需要我们确认。等这些环节看明白了，再把个人主页的需求整理成一份明确的请求，交给它执行，最后一起看页面、检查代码改动，并验证项目能否构建。",
    "你可以跟着视频暂停操作，也可以先看完一遍，再用自己的项目练习。遇到报错或者结果和预期不一样，我们就把具体问题找出来，带着证据继续修改。现在先从一个容易看清结果的任务开始：请 AI 帮我们换掉页面上的一句欢迎语。"
  ]
};
