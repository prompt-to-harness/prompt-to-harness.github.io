window.lesson = {
  "title": "完成首页任务：从已确认 Prompt 到可验收的首页 v0",
  "chapter": "第 1 章 · Prompt",
  "section": "01.05",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 首页。",
  "scenes": [
    {
      "id": "p26",
      "label": "从已确认任务，走到首页 v0",
      "title": "从已确认任务，走到首页 v0",
      "kicker": "第 1 章 · 1.5 · 核对与生成",
      "lead": "1.4 已确认 Prompt → 1.5 本地首页 v0 → 第 2 章迭代",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-done\"><b>1.2</b>拆开执行过程</li><li class=\"is-done\"><b>1.3</b>工具与权限</li><li class=\"is-done\"><b>1.4</b>写清任务</li><li class=\"is-now\"><b>1.5</b>完成首页</li><li class=\"\"><b>1.6</b>最小权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">任务输入</span><p>已确认 Prompt + 文件范围</p></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">执行条件</span><p>CLI 基线 + 工具链就绪</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">只到<b>本地首页</b>，不发布</div>",
      "steps": [
        "核对任务",
        "核对环境",
        "明确终点"
      ],
      "script": [
        "【操作提示｜课件 p26 第 1 步 → 切 VS Code，打开独立练习副本及上一节保存的 PROMPT_V1.md 或证据文档，指认最终需求、文件清单和待确认项；不要在课件仓库生成项目】\n\n上一节，我们已经把“做一个好看的主页”整理成了一份具体任务。现在打开保存的那份 Prompt，看看这次到底要做什么：首屏放哪些文字，项目区展示什么，按钮点下去要发生什么。今天就按这份任务，把首页做出来。\n\n这里的 v0，可以理解为第一版。我们先让约定的内容和交互跑起来，再留下检查记录。先核对文档里有没有还没决定的地方。比如按钮行为还写着“待定”，那就先补齐，不能直接让 AI 替我们选。执行计划和写入确认，等会儿在真实会话里核对。",
        "【操作提示｜回课件第 2 步 → Terminal 的“仓库检查”标签页，在练习根目录执行 pwd（PowerShell 用 Get-Location）、node --version、npm --version、git status --short、git diff；有暂存项再看 git diff --cached。VS Code 对照 docs/setup/ENVIRONMENT.md 与准备页工具链记录，保留初始状态】\n\n我现在切到终端，先确认位置，再看 Node 和 npm 的版本。Node 是运行这套前端工具的环境，npm 用来执行项目脚本、管理依赖。我们要把实际版本和课前核验记录对上。\n\n接着看仓库里原来有哪些改动。前面练习留下的内容要认出来，后面才知道哪些文件是这次新增的。如果工具链还没准备好，就回第一节配套材料的环境检查入口处理，先记录阻塞。自己的环境没通过，也可以继续看演示，但实操要等环境补齐再开始。",
        "【操作提示｜返回课件 p26 第 3 步，指向“本地首页”；之后进入 p27，不在此处发送执行授权】\n\n今天做到什么程度就可以收尾？浏览器能打开首页，内容和按钮符合约定；构建跑过，代码和文件差异也看过；最后把接受的版本保存在本地。\n\n这些是这一版的终点。看到页面以后，你可能还会想到换配色、加动画，先记下来，后面再迭代。我们先完成手里这份任务。接下来切到生成过程，看它怎样把这份文字要求变成项目文件。"
      ],
      "segment": "核对与生成",
      "seconds": 100,
      "source": "index.html#p26",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "从已确认任务，走到首页 v0；今天交付可启动、可构建、可审阅的本地 v0，不追求无限美化。"
        },
        {
          "title": "演示分支",
          "text": "未通过时说：“目前先保留 Prompt，记录环境阻塞。接下来可以观察演示，但自己的实操不计为通过。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M01、M10、M11]；[核验 V04]。"
        },
        {
          "title": "讲师提示",
          "text": "先对照上一节的最终版本，不从模糊需求重新开始。\n\nNode 未就绪、版本未核验就不能进入生成，不通过改源码掩盖环境失败。\n\n今天交付可启动、可构建、可审阅的本地 v0，不追求无限美化。"
        }
      ]
    },
    {
      "id": "p27",
      "label": "生成顺序要能对应到文件职责",
      "title": "生成顺序要能对应到文件职责",
      "kicker": "第 1 章 · 1.5 · 核对与生成",
      "lead": "生成分三步：先建骨架（包清单、锁文件、构建配置，版本与核验一致），再写页面（index.html 与 src，实现首屏、项目区和交互），最后启动开发服务器复盘。文件分工只是示意，出现新依赖或越界就先停。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3;column-gap:52px;--node-h:250px\"><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">01</span><h3>建骨架</h3><p style=\"color:#18202B;font-weight:700\">包清单 · 锁文件 · 构建配置</p><p style=\"margin-top:8px\">版本已核验</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">02</span><h3>写页面</h3><p style=\"color:#18202B;font-weight:700\">index.html · src/</p><p style=\"margin-top:8px\">首屏 · 项目区 · 交互</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">03</span><h3>运行复盘</h3><p style=\"color:#18202B;font-weight:700\">开发服务器</p><p style=\"margin-top:8px\">越界先停</p></div></div>",
      "steps": [
        "观察骨架",
        "观察实现",
        "回到清单"
      ],
      "script": [
        "【操作提示｜课件 p27 第 1 步 → Terminal 的 Codex CLI 会话，提交最终 Prompt，先要求核对任务、文件范围和小计划，暂不修改。逐项核对实际回复；一致后明确发送下文确认。新会话需补充最终文档及已确认决定，不能假定它记得上一节】\n\n先把最终任务交给 Codex，请它核对目标、允许修改的文件，以及准备怎么做。我们看实际回复：技术栈是不是 React、TypeScript 和 Vite？有没有把账号、后端或者发布加进来？依赖和版本是不是按核验过的工具链来？\n\n计划一致以后，我再明确确认：“同意按刚才核对的计划实现首页 v0，只在已批准的文件范围内操作。依赖使用已核验的版本；遇到缺材料、额外依赖或清单外的改动，先停下来说明。”如果计划还没对上，就先修正计划。\n\n开始生成后，先看项目骨架。包清单告诉我们用了哪些依赖、有哪些命令，锁文件记录依赖的锁定信息，构建配置则告诉工具怎样处理源码。它们也是这次要审阅的文件。",
        "【操作提示｜课件第 2 步对应实操：CLI 观察生成与工具返回 → VS Code 展开实际文件树，打开根目录 index.html 和 src 下实际生成的入口、组件、样式。等待可剪辑；额外安装或越界请求先暂停，不能一律批准】\n\n再看页面部分。左边文件树里出现了哪些文件？先找到根目录的 index.html，再找到它接到的应用入口。页面组件和样式放在哪里，也先认一遍。具体文件名以你生成的那份为准。\n\n我们现在观察的是：这些文件是不是围绕首屏、项目区和约定的交互来写。比如任务只要展示一个项目，就看看它有没有额外接入外部服务。出现不在范围里的动作，先问清楚原因。\n\n生成需要一点时间。你可以跟着看它读取了什么、写入了什么，遇到了什么工具返回。后面检查源码时，我们还会回到这些文件。",
        "【操作提示｜回课件第 3 步 → VS Code 查看 package.json 的 scripts，确认 dev 脚本后，另开 Terminal 标签页“首页开发服务”，在练习根目录运行 npm run dev -- --host 127.0.0.1；保留实际启动输出及 Local 地址。启动失败则留日志处理；成功后先回 p28，不在旧 setup-check 页面验收】\n\n文件生成后，我先看 package.json 里的启动脚本，再启动开发服务器。这个终端要保持运行，接下来浏览器就通过它提供的本地地址访问首页。地址以这一次终端打印的为准，端口可能和老师录屏里的不同。\n\n如果启动报错，我们先看报错发生在哪一步：依赖没有准备好，还是某个文件有问题？把具体输出保留下来，再定位原因。不能让它没有边界地反复改配置。\n\n还有一个文件夹要留意：setup-check 是前面环境检查用的，要继续独立保留。正式首页从新的应用入口打开。服务启动后，我们就拿完成标准去看真实页面。"
      ],
      "segment": "核对与生成",
      "seconds": 320,
      "source": "index.html#p27",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "生成顺序要能对应到文件职责；生成后按同一清单复盘；setup-check 不能进入正式应用或发布产物。"
        },
        {
          "title": "演示分支",
          "text": "等待太久时说：“这里有实际等待，后续画面将跳到完成时刻。”若转回放明确标来源。失败时说：“当前失败在这一步，先保留日志并定位，不让它无限改配置重试。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M10、M11]；[核验 V01、V04]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "先给观察清单：技术栈和范围是否匹配、内容是否对应、额外动作是否停止。再切到实际生成。\n\n指认入口、组件和样式文件，别把职责示意当作 Starter 已有文件。\n\n生成后按同一清单复盘；setup-check 不能进入正式应用或发布产物。"
        }
      ]
    },
    {
      "id": "p28",
      "label": "切到页面：看内容、点交互、查错误",
      "title": "切到页面：看内容、点交互、查错误",
      "kicker": "第 1 章 · 1.5 · 运行与检查",
      "lead": "切到真实开发页面前，先拿好三项清单：内容逐项对照自己的 Prompt；真的点一下“查看项目”，确认跳到本页项目区；打开控制台看有没有明显报错。三项分别记录检查结果。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到页面</h3><p>PPT 暂停，打开本地首页</p><span class=\"p-env\">浏览器：首页 v0</span><span class=\"p-env\">控制台</span></div><ol class=\"p-watch\"><li data-reveal=\"0\">内容<small>对照 Prompt</small></li><li data-reveal=\"1\">行为<small>点“查看项目”</small></li><li data-reveal=\"2\">错误<small>看控制台</small></li></ol></div>",
      "steps": [
        "先找内容",
        "操作交互",
        "查看错误"
      ],
      "script": [
        "【操作提示｜课件 p28 第 1 步 → 在 Chrome 新开标签页“首页 v0”，粘贴 p27 终端实际打印的 Local 地址；例如输出 http://127.0.0.1:5173/ 才打开该地址。保留课件标签页。旁边用 VS Code 打开最终 Prompt，逐项核对内容并保存运行截图】\n\n我现在在 Chrome 里新开一个标签页，打开刚才开发服务器给出的地址。先确认地址栏，看到的应该是这份练习项目的正式首页。\n\n我们先看文字。按课程示例，名字是“示例同学”，首屏有指定的简介，项目区有“学习笔记”和对应描述。实际核对时，要拿你自己最终确认的 Prompt，一项一项找。名字有没有写对？简介有没有漏？项目描述有没有被 AI 自行换成另一段？\n\n先把内容看完，再保存截图。截图里要能看清你要证明的那一块内容；首屏和项目区放不下，可以分别截图。",
        "【操作提示｜回课件推进第 2 步 → 复用 Chrome“首页 v0”标签页；点击“查看项目”，观察滚动位置，再检查项目卡点击是否无跳转。若页面太短看不出滚动，结合元素目标和当前布局核对；如实记录，不预读“已跳转”】\n\n接下来点按钮。我们约定“查看项目”跳到本页的项目区，那就真的点一次，看看页面有没有来到对应位置。如果项目区本来就在眼前，变化不明显，就结合链接指向和目标区域一起确认。\n\n再看项目卡。课程示例里，项目卡只展示信息，没有约定跳去另一个页面。试一下有没有意外跳转。这里要比较的是我们约定的行为和实际发生的行为。\n\n如果按钮没反应，或者跳到了错误位置，先写下这个具体问题。后面给 AI 的修正请求，就可以直接说清楚点了哪里、原本期望什么、实际出现了什么。",
        "【操作提示｜回课件推进第 3 步 → 同一 Chrome 标签页打开开发者工具的 Console，保留已有错误后刷新页面，再操作按钮；记录与本页相关的实际输出及截图。若要修正，回 CLI 提交具体问题和范围，改完复查；结束回课件 p28-review】\n\n最后打开浏览器的控制台。刷新一次页面，再重复刚才的点击，看看有没有和这个页面有关的明显错误。控制台里如果有报错，先保留完整信息，特别是错误内容和指向的文件位置。\n\n现在我们就能把三项结果分别记下来：内容核对到了什么，点击实际发生了什么，控制台看到了什么。发现问题时，给出期望、实际和必要的截图，再请 Codex 定位。\n\n修完以后，回到这个标签页重新检查相关内容。页面本来就符合标准，就直接记录结果，继续下一项。我们回课件，把手里的证据整理一下。"
      ],
      "segment": "运行与检查",
      "seconds": 150,
      "source": "index.html#p28",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "切到页面：看内容、点交互、查错误；保留实际控制台记录；有错误先定位，不把页面能打开当作全部通过。"
        },
        {
          "title": "演示分支",
          "text": "启动失败时口播：“浏览器检查还没开始，当前是运行阻塞。”页面符合标准时直接记录，不为制造调试戏剧性追加故障。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。"
        },
        {
          "title": "讲师提示",
          "text": "给观察清单后切到真实开发页面，逐项对照，不把这页示意当运行结果。\n\n真的点一次已要求的按钮和链接，光看外观不能验收行为。\n\n保留实际控制台记录；有错误先定位，不把页面能打开当作全部通过。"
        }
      ]
    },
    {
      "id": "p28-review",
      "label": "切回来，用同一张清单复盘",
      "title": "切回来，用同一张清单复盘",
      "kicker": "第 1 章 · 1.5 · 运行与检查",
      "lead": "切回来，用同一张清单复盘：内容要有对应 Prompt 的运行截图，行为要有实际点击结果，错误要有控制台记录。找不到证据的项不打勾，单独列出。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1.1fr;gap:36px\"><ol class=\"p-watch\"><li class=\"is-done\" data-reveal=\"0\">内容<small>运行截图</small></li><li class=\"is-done\" data-reveal=\"1\">行为<small>点击结果</small></li><li class=\"is-done\" data-reveal=\"2\">错误<small>控制台记录</small></li></ol><div class=\"p-box is-dashed\" data-role=\"ink\" data-reveal=\"0\" style=\"align-self:start\"><span class=\"p-tag\" data-role=\"us\">同一张清单</span><p>没证据的项<b>不打勾</b></p></div></div>",
      "steps": [
        "内容复盘",
        "行为复盘",
        "错误复盘"
      ],
      "script": [
        "【操作提示｜返回课件 p28-review 第 1 步 → VS Code 打开现有证据文档，放出刚保存的内容截图及对应标准；只填真实结果。课件勾选图形是清单示意，不代表本次实测通过】\n\n先看内容这一项。比如我们要证明项目区写的是“学习笔记”，那就在记录里放上这条标准和对应截图。以后回看时，能直接找到页面上的那段文字。\n\n如果截图只拍了首屏，项目区还没查到，就把项目区列成待补查。先把记录和真正看过的内容对上。",
        "【操作提示｜推进第 2 步，仍在证据文档记录实际点击结果；缺项时切回已有 Chrome“首页 v0”标签页补查，不必新开页面】\n\n行为这一项，要把动作和结果写在一起。比如“点击查看项目，页面来到项目展示区”，这句话只有在刚才确实发生了以后才能填。只有一张按钮截图，还看不出点击以后会怎样。\n\n回忆不清楚，就再点一次。练习时你也可以暂停视频，按同一张清单补查自己的页面。",
        "【操作提示｜推进第 3 步，记录控制台检查结果和未解决项；完成后回课件 p29】\n\n控制台这一项，也按实际情况写。检查过没有明显报错，就记下检查动作和结果；发现了错误，就留下错误内容和处理状态。\n\n整理到这里，哪项有证据，哪项还需要补查，就比较清楚了。接下来我们去终端做构建检查，看这份源码能否生成用于部署的文件。"
      ],
      "segment": "运行与检查",
      "seconds": 70,
      "source": "index.html#p28-review",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "切回来，用同一张清单复盘；记录实际结果，再进入工程检查。此处没有预填通过状态。"
        },
        {
          "title": "演示分支",
          "text": "启动失败时口播：“浏览器检查还没开始，当前是运行阻塞。”页面符合标准时直接记录，不为制造调试戏剧性追加故障。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "请指认一条内容标准和对应截图。\n\n把真实点击结果写清楚，缺少操作证据就补查。\n\n记录实际结果，再进入工程检查。此处没有预填通过状态。"
        }
      ]
    },
    {
      "id": "p29",
      "label": "页面能打开，构建也能通过吗？",
      "title": "页面能打开，构建也能通过吗？",
      "kicker": "第 1 章 · 1.5 · 工程证据",
      "lead": "工程检查从构建开始：在真实项目里运行 npm run build。通过就记下退出状态和完整输出；失败就保留报错，分清环境问题还是实现问题，修复后重建。构建通过不能替代浏览器里的行为验证。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" style=\"grid-column:2;padding:10px\"><div class=\"p-term\" data-copy=\"npm run build\" style=\"text-align:left\">$ npm run build</div></div><div class=\"p-fork\" style=\"grid-column:1/4\"><div class=\"l\" data-reveal=\"1\"><span>通过</span></div><div class=\"r\" data-reveal=\"2\"><span>失败</span></div></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"grid-row:3;grid-column:1\"><h3>通过证据</h3><p>退出状态 + 完整输出</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-row:3;grid-column:3\"><h3>失败去向</h3><p>保留报错 · 修复后重建</p></div></div>",
      "steps": [
        "执行检查",
        "保存通过记录",
        "处理失败"
      ],
      "script": [
        "【操作提示｜课件 p29 第 1 步 → Terminal 另开“构建检查”标签页，在同一练习根目录运行 npm run build；保留“首页开发服务”终端。命令结束后立即查看退出码：macOS/Linux 用 echo $?，PowerShell 用 $LASTEXITCODE】\n\n我现在回到终端，另外开一个标签页做构建检查。开发服务器继续留着，方便后面返回页面。确认目录正确以后，运行 npm run build。\n\n这条命令具体做什么，要看 package.json 里的 build 脚本。我们观察它实际执行的步骤，等命令结束后再看结果。production build，就是为部署准备的构建过程，这里只在本地生成产物。",
        "【操作提示｜回课件推进第 2 步；仅在实际构建成功时，切 VS Code 保存完整输出、退出码、执行目录和工具版本。失败时直接进入第 3 步，不填通过】\n\n如果这次构建成功，就把完整输出和退出状态保存下来，执行目录、工具版本也放进记录。以后再查问题时，就知道这份结果是在哪一份项目、什么环境下得到的。\n\n浏览器里，我们检查了文字和点击；终端里，我们检查了构建流程。把这两份记录分别留下，后面接受版本时就能逐项核对。",
        "【操作提示｜推进第 3 步；成功时将本段作为失败处理说明。实际失败则展示首个有用报错，请 CLI 在原范围内定位，修复后重跑 build；影响页面时复查已有 Chrome 标签页。无法定位或需越界则保留阻塞，不进入保存基线操作】\n\n如果构建失败，先从第一处有用的报错看起。它说找不到依赖，还是指出某个源码文件有错误？把这段信息交给 Codex，请它说明原因和准备修改的位置。\n\n修复仍然要在约定范围里。涉及环境就处理环境，涉及代码就看对应代码；改好后重新运行构建。如果修到了页面内容或交互，也回浏览器再查一次。问题没解决，就记录阻塞。接下来，我们再看这些代码怎样组成页面。"
      ],
      "segment": "工程证据",
      "seconds": 80,
      "source": "index.html#p29",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "页面能打开，构建也能通过吗？\n\n失败就保留输出，范围不明时停下。不能为了赶进度跳过构建。"
        },
        {
          "title": "演示分支",
          "text": "构建失败则先记录失败；发现无法解释的候选代码时说：“这部分还不能接受，先缩小或解释清楚，再验证。”不把一次人工隐私检查说成全面安全证明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。上述检查均待实操，不预填“通过”。"
        },
        {
          "title": "讲师提示",
          "text": "在真实项目运行构建，不在教学幻灯片伪造终端成功输出。\n\n构建记录对应产物生成；浏览器记录对应内容、点击和控制台。分别核对这两类结果。\n\n失败就保留输出，范围不明时停下。不能为了赶进度跳过构建。"
        }
      ]
    },
    {
      "id": "p29-code",
      "label": "你能指出这些代码分别做什么吗？",
      "title": "你能指出这些代码分别做什么吗？",
      "kicker": "第 1 章 · 1.5 · 工程证据",
      "lead": "每个人生成的代码不同，所以这里不放固定代码，而是回到自己的源码回答三个问题：index.html 怎样接到应用入口、首屏和项目区由哪些组件渲染、样式从哪里加载。每题写下文件、行号和一句话。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到你的源码</h3><p>每个人生成的代码不同，看自己的那一份</p><span class=\"p-env\">编辑器：首页 v0 项目</span><span class=\"p-env\">可以请 Agent 解释</span></div><div style=\"display:grid;gap:14px;align-content:start\"><ol class=\"p-watch\"><li data-reveal=\"0\">页面入口<small>index.html 怎样接到应用入口？</small></li><li data-reveal=\"1\">主要组件<small>首屏和项目区由哪些组件渲染？</small></li><li data-reveal=\"2\">样式入口<small>样式从哪里加载？影响了非目标内容吗？</small></li></ol><div class=\"p-bar is-light\" data-reveal=\"2\">每题写下：<b>文件 · 行号 · 一句话</b><br>看不懂先要求解释或拆小</div></div></div>",
      "steps": [
        "指认入口",
        "解释组件",
        "追问影响"
      ],
      "script": [
        "【操作提示｜课件 p29-code 第 1 步 → VS Code 打开实际 index.html，沿 script 引用进入应用入口，指认挂载元素和渲染调用。文件名与行号现场读取，不套用固定答案】\n\n现在切到 VS Code。我们从浏览器最先加载的 index.html 开始，找到它引用的脚本，再打开那个入口文件。顺着看，应用是挂到页面里的哪个元素上的？从哪里开始渲染？\n\n你不需要在这里讲完 React 的所有原理。先能用自己的话说清楚：HTML 引入了哪个文件，这个文件又从哪里把应用接到页面上。把实际文件和行号记下来，这就是入口的说明。",
        "【操作提示｜回课件推进第 2 步 → VS Code 沿入口打开实际组件，定位首屏文案和项目数据。需要解释时切 CLI 发送“只解释当前首页入口、首屏与项目区的调用关系，指出文件和行号，暂不修改”，随后回源码核对】\n\n接着沿入口往下找，看看首屏和项目区在哪里。名字、简介和项目描述，是直接写在组件里，还是从数据对象里取出来的？找到其中一段，再和浏览器里的文字对一下。\n\n看不懂时，可以请 Codex 解释这几个文件之间的关系，并指出位置。听完解释，再回到源码核对。它说项目卡从一个数组里生成，那就找到那个数组和使用它的地方。这样你才能判断，以后换项目内容时应该从哪里入手。",
        "【操作提示｜推进第 3 步 → VS Code 查样式 import 及对应选择器，查看是否有非目标引用；必要时复用 Chrome 页面定位元素。证据文档记录三个问题各自的“文件、行号、一句话”；完成回课件 p29-diff】\n\n最后找样式从哪里加载。看入口或组件里的样式引用，再看看标题、按钮和项目区用了哪些样式。尤其留意范围比较大的规则，比如直接作用于所有按钮的样式，会影响哪些地方？\n\n三个问题分别写一句说明：入口怎样连接，主要内容由谁渲染，样式从哪里来。每句旁边放上文件和行号。如果某段改动还是说不清，就先要求解释；确实过于复杂，再讨论是否拆小，修改后重新检查。接下来，我们把视线从单个文件移到全部改动。"
      ],
      "segment": "工程证据",
      "seconds": 80,
      "source": "index.html#p29-code",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "你能指出这些代码分别做什么吗？\n\n不理解改动就先要求解释或拆小，不能只复述 AI 的结论。"
        },
        {
          "title": "演示分支",
          "text": "构建失败则先记录失败；发现无法解释的候选代码时说：“这部分还不能接受，先缩小或解释清楚，再验证。”不把一次人工隐私检查说成全面安全证明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。上述检查均待实操，不预填“通过”。"
        },
        {
          "title": "讲师提示",
          "text": "切到实际源码，由学员指认调用关系，不背教师文件名。\n\n让 Agent 解释后仍要对照代码，学员说清主要结构。\n\n不理解改动就先要求解释或拆小，不能只复述 AI 的结论。"
        }
      ]
    },
    {
      "id": "p29-diff",
      "label": "范围和产物，要单独检查",
      "title": "范围和产物，要单独检查",
      "kicker": "第 1 章 · 1.5 · 工程证据",
      "lead": "范围和产物要单独检查：完整改动对照批准清单和初始状态，包括未跟踪的新文件，不覆盖已有工作；构建产物里不能有 setup-check、secret 或私人资料。页面、build、代码理解、Diff、产物五类证据互不替代。",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">完整改动</span><p>对照批准清单 · <b>不覆盖已有工作</b></p></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">实际产物</span><p>无 setup-check · 无 secret 与私人资料</p></div></div><div data-reveal=\"2\"><p class=\"p-sub\" style=\"margin:0 0 8px\">不能互相替代</p><div class=\"p-chain\" style=\"font-size:21px\"><span>页面</span><i>·</i><span>build</span><i>·</i><span>代码理解</span><i>·</i><span>Diff</span><i>·</i><span>产物</span></div></div>",
      "steps": [
        "检查范围",
        "检查产物",
        "汇总证据"
      ],
      "script": [
        "【操作提示｜课件 p29-diff 第 1 步 → Terminal 在练习根目录执行 git status --short、git diff --stat、git diff、git diff --cached；VS Code 对照初始状态与批准清单，逐个打开 ?? 新文件。普通 git diff 不展示未跟踪文件内容，不能漏看】\n\n先看 status 列出了哪些文件，再和动手前的状态、批准的文件清单比较。新增的配置、页面源码、锁文件，都要能说明为什么属于这次任务。\n\n这里有个很容易漏的地方：新创建、还没被 Git 跟踪的文件，普通 git diff 不会展示它的内容。看到问号标记的文件，要在编辑器里打开检查。已经暂存的变化，也要单独看。\n\n如果发现范围外的改动，先分清是不是用户原来就有的。只处理本次造成的问题，不能为了把状态清干净，把原有工作一起覆盖掉。",
        "【操作提示｜推进第 2 步 → VS Code 检查实际 build 输出目录及 Vite 配置、应用入口、复制配置和 import；对应用源码与实际产物查 setup-check 引用及环境页特征文字，核对输出文件。检查源码、产物、待提交内容中的密钥及私人资料；发现敏感项先停止录屏并处理，不展示具体值】\n\n再看构建产物。先从构建输出和配置里确认文件生成到了哪里，然后打开那个目录。setup-check 可以留在练习仓库里，但它不应该被正式应用引用，也不应该被复制进发布用的产物。\n\n所以要看入口、引用关系和复制配置，再查实际输出的文件。只看到目录里没有一个叫 setup-check 的文件夹，还不足以确认它的内容没有被带进去。可以结合环境页的特征文字一起查。\n\n同时检查源码、产物和待提交内容，有没有密钥或私人资料。发现具体问题就先处理。这次人工检查的范围和结果如实记录，不把一次检查写成全面安全保证。",
        "【操作提示｜返回课件第 3 步，对照证据文档汇总五类检查；若缺项留待补，不新开 Chrome 页面】\n\n现在把五类记录放在一起看。页面记录对应文字和交互，build 记录对应构建，代码说明对应你对实现的理解，diff 对应修改范围，产物检查对应实际输出的内容。\n\n每一条完成标准，都应该能指到一项实际检查。缺哪项就补哪项，有问题就写清楚下一步要修什么。接下来我们用三个小例子，练习怎样作出接受、修正或者暂时停下的决定。"
      ],
      "segment": "工程证据",
      "seconds": 100,
      "source": "index.html#p29-diff",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "范围和产物，要单独检查；把每份证据接到完成标准，再判断是否可接受。"
        },
        {
          "title": "演示分支",
          "text": "构建失败则先记录失败；发现无法解释的候选代码时说：“这部分还不能接受，先缩小或解释清楚，再验证。”不把一次人工隐私检查说成全面安全证明。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M11]；[核验 V04]。上述检查均待实操，不预填“通过”。"
        },
        {
          "title": "讲师提示",
          "text": "同时检查已跟踪与未跟踪文件。多出的文件要解释，不能只挑一段好看的 Diff。\n\n查实际构建输出和引用关系，不能因为目录名看起来独立就直接判通过。\n\n把每份证据接到完成标准，再判断是否可接受。"
        }
      ]
    },
    {
      "id": "p30",
      "label": "先判断结果，再保存检查点",
      "title": "先判断结果，再保存检查点",
      "kicker": "第 1 章 · 1.5 · 判断与交付",
      "lead": "练习：判断三种候选结果。页面正确但没有构建记录，暂不接受，先补跑构建；构建通过但改了无关文件，修正越界、保留原有工作再复验；各类证据都符合标准，核对提交范围后保存检查点。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 三种结果，各怎么处理？</span><div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">A · 页面正确，没有构建记录</p><div data-reveal=\"1\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">暂不接受</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">补跑构建，失败则记录并处理</p></div></div><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">B · 构建通过，改了无关文件</p><div data-reveal=\"2\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"agent\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">修正越界</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">修正本次越界，保留原有工作，再复验</p></div></div><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">C · 各类证据都符合标准</p><div data-reveal=\"3\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"ok\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">可以接受</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">核对提交范围后保存检查点</p></div></div></div>",
      "steps": [
        "暂停判断",
        "A · 页面正确，没有构建记录",
        "B · 构建通过，改了无关文件",
        "C · 各类证据都符合标准"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步，先不揭示答案；三张卡是教学案例，不代表刚才真实结果。不切窗口，留出暂停视频的机会】\n\n先看这三种情况。A，页面看起来正确，但没有构建记录。B，构建通过了，可是改了无关文件。C，页面、构建、代码和范围等检查都有证据，也符合标准。\n\n你可以暂停一下，分别写出自己的决定，再加一句接下来要做什么。我们逐个看。",
        "【操作提示｜推进第 2 步，揭示 A；留在课件】\n\nA 先不接受。页面检查已经做了，接下来补跑构建，把结果留下。构建成功，就补齐这项证据；构建失败，就先处理报错。\n\n这里缺的是一次具体检查，我们的下一步也很明确，不需要重新提出一整套首页需求。",
        "【操作提示｜推进第 3 步，揭示 B；留在课件，不实际执行回退命令】\n\nB 要先修正范围。比如本来只让它创建首页，结果它顺手改了环境检查页，那就找出这次额外产生的差异，修正越界部分。\n\n处理之前仍然要对照初始状态，保留原有工作。修正之后，再复查受影响的内容和构建，不能拿修正前的成功记录直接给新版本作结论。",
        "【操作提示｜推进第 4 步，揭示 C；返回真实项目检查结果，只有满足条件才进入 p30-save 的保存分支】\n\nC 可以接受。因为要求和结果已经逐项对上，我们就有依据把这一版保存下来。\n\n先核对这次到底准备提交哪些文件，再保存检查点。接受这一版，表示它完成了当前约定；后面想改进的视觉细节，可以放进下一轮任务。现在回到自己的项目，按真实证据选择对应分支。"
      ],
      "segment": "判断与交付",
      "seconds": 90,
      "source": "index.html#p30",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "先判断结果，再保存检查点；可以接受；核对提交范围后保存检查点。"
        },
        {
          "title": "演示分支",
          "text": "使用参考快照时口播：“这是参考恢复状态，我实际完成的部分记录在这里。”不能把参考作者的构建结果记为本人实测。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M11]。"
        },
        {
          "title": "讲师提示",
          "text": "三个都是候选教学结果。逐个给结论并指出缺什么证据。\n\n暂不接受；补跑构建，失败则记录并处理。\n\n修正本次越界，保留原有工作，再复验。\n\n可以接受；核对提交范围后保存检查点。"
        }
      ]
    },
    {
      "id": "p30-save",
      "label": "检查通过，才保存本地基线",
      "title": "检查通过，才保存本地基线",
      "kicker": "第 1 章 · 1.5 · 判断与交付",
      "lead": "所有检查通过、待提交内容与批准范围一致，才保存本地提交并创建 ch01-prompt-baseline 这个 tag。提交和 tag 只用来定位版本，不证明质量；本节不推送、不发布，证据不全就停在待补做。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-num\">01</span><h3>检查全部通过</h3><p>范围一致</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-num\">02</span><h3>保存本地提交</h3></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-num\">03</span><h3>创建 tag</h3><p class=\"p-mono\" style=\"font-size:18px\">ch01-prompt-baseline</p></div></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:12px\"><span class=\"p-tag\" data-role=\"gate\">停止条件</span><p>无法验证 · 无法理解 · 需越界 → <b>不标通过</b></p></div>",
      "steps": [
        "确认范围",
        "保存定位",
        "保留阻塞"
      ],
      "script": [
        "【操作提示｜课件 p30-save 第 1 步 → VS Code 源代码管理逐项暂存已审阅文件，不全选；Terminal 执行 git diff --cached --stat 和 git diff --cached，确认暂存内容。未通过检查不暂存为验收基线；原有暂存项须辨认，不混入本次提交】\n\n检查都通过以后，我切回 VS Code，逐项选择这次要提交的文件。源码、必要配置，以及准备跟版本保存的公开检查记录，都先看清楚再暂存。\n\n暂存可以理解为选择这一次提交要包含的内容。选完以后再看暂存区的差异，确认没有混进无关文件、私人资料或本地生成的大文件。如果原来就有暂存内容，也要先辨认来源。提交之前，我们最后核对的是这一份具体内容。",
        "【操作提示｜第 2 步 → Terminal：git commit -m \"Build homepage v0\"；成功后 git status --short、git log -1 --oneline。确认无遗漏的任务改动，再运行 git tag --list ch01-prompt-baseline；名称不存在时执行 git tag ch01-prompt-baseline，随后 git rev-parse HEAD 与 git rev-parse ch01-prompt-baseline 核对 SHA。已有同名 tag 时核对所指版本，不强制覆盖。不执行 push；失败则停止后续命令】\n\n确认暂存范围以后，我们保存一个本地提交。提交会保存这次选中的内容，后面就能按提交编号找到它。提交成功后，再看一次状态，确认没有漏掉属于这次任务的改动。\n\n然后给这个提交加上 ch01-prompt-baseline 这个标签。tag 就是给某个版本起一个便于查找的名字。创建前先检查有没有同名标签；如果已经存在，就核对它指向哪里，不直接覆盖。\n\n最后把当前提交和标签指向的编号对一下，并写进证据记录。这一节保存到本地即可，后面的发布课再处理推送与上线。",
        "【操作提示｜回课件第 3 步；有阻塞则在 VS Code 证据文档写明阻塞项、日志位置和下一步，不创建“已验收”tag。若展示参考快照，明确来源及本人实际完成部分；已通过时作为失败处理说明】\n\n如果现在还没办法验证，或者某段代码仍然无法理解，就先把这一项记成待补做。把卡在哪里、有什么日志、下一步准备查什么写清楚。\n\n需要清单外的动作，也先停下来讨论范围。标签应该指向我们真正检查过并接受的版本。还没有达到这个状态，就先保留已有文件和证据，处理完阻塞再继续。最后，我们看看交接时要把哪些东西放到一起。"
      ],
      "segment": "判断与交付",
      "seconds": 90,
      "source": "index.html#p30-save",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "检查通过，才保存本地基线；证据不全就停在待补做，不能为了得到 tag 假装通过。"
        },
        {
          "title": "演示分支",
          "text": "使用参考快照时口播：“这是参考恢复状态，我实际完成的部分记录在这里。”不能把参考作者的构建结果记为本人实测。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M11]。"
        },
        {
          "title": "讲师提示",
          "text": "先审阅待提交文件，不用全选暂存掩盖无关变化。\n\n提交和 tag 用来定位已检查的版本，检查结果另行留存；本节不推送和发布。\n\n证据不全就停在待补做，不能为了得到 tag 假装通过。"
        }
      ]
    },
    {
      "id": "p31",
      "label": "交付的是源码，也是一条证据链",
      "title": "交付的是源码，也是一条证据链",
      "kicker": "第 1 章 · 1.5 · 判断与交付",
      "lead": "交付的是三环相扣的证据链：任务与实现（Prompt、源码、组件说明），验证与决定（截图、build、Diff、Review），版本与后续（提交、tag、未决事项）。任一环断开，交付就说不清。v0 仍是原型，第 2 章继续迭代。",
      "html": "<style>.x-ch{display:flex;justify-content:center;align-items:center;margin:14px 0 6px}.x-ch-l{position:relative;width:380px;height:190px;margin:0 -34px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.x-ch-ring{position:absolute;inset:0;border:16px solid var(--c);border-radius:95px;filter:url(#p-rough);box-shadow:inset 0 0 0 3px rgba(255,255,255,.35)}.x-ch-l:nth-child(2) .x-ch-ring{border-width:16px;transform:translateY(0)}.x-ch-l h3{position:relative;font:400 28px/1.2 var(--p-title);color:var(--ct);margin:0 0 6px}.x-ch-l p{position:relative;margin:0;font-size:19px;color:#18202B;max-width:280px}.x-ch-break{display:flex;align-items:center;gap:14px;justify-content:center;margin-top:18px}.x-ch-break .bk{display:flex;align-items:center}.x-ch-break .bk i{display:block;width:54px;height:30px;border:7px solid #D9481C;border-radius:16px}.x-ch-break .bk i:first-child{transform:rotate(-14deg) translateX(4px)}.x-ch-break .bk i:last-child{transform:rotate(18deg) translateX(-4px)}.x-ch-break .bk b{font:400 26px/1 var(--p-title);color:#D9481C;margin:0 6px}</style><div class=\"x-ch\"><div class=\"x-ch-l\" data-role=\"agent\" data-reveal=\"0\" style=\"z-index:3\"><div class=\"x-ch-ring\"></div><h3>任务与实现</h3><p>Prompt · 源码 · 组件说明</p></div><div class=\"x-ch-l\" data-role=\"ok\" data-reveal=\"1\" style=\"z-index:2\"><div class=\"x-ch-ring\"></div><h3>验证与决定</h3><p>截图 · build · Diff · Review</p></div><div class=\"x-ch-l\" data-role=\"tool\" data-reveal=\"2\" style=\"z-index:1\"><div class=\"x-ch-ring\"></div><h3>版本与后续</h3><p>提交 · tag · 未决事项</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:20px;display:flex;align-items:center;gap:16px\"><span class=\"x-ch-break\" style=\"margin:0\"><span class=\"bk\"><i></i><b>⁄</b><i></i></span></span><span>任何一环断开，交付就<b>说不清</b></span></div>",
      "steps": [
        "交接任务",
        "交接证据",
        "下一章"
      ],
      "script": [
        "【操作提示｜课件 p31 第 1 步 → VS Code 并排查看最终 Prompt、源码与入口/组件说明，选一条要求指认实现位置；完成后回课件】\n\n先拿出最终的任务，再看源码和说明。比如任务要求展示“学习笔记”，你能不能指出这段内容在哪个文件里，由哪个组件显示到页面上？\n\n能把这一条连起来，后面再改项目内容时，就有明确的起点。把最终 Prompt 和这份实现对应保存，也方便下一次继续工作时知道，这一版到底按什么要求做的。",
        "【操作提示｜推进第 2 步 → VS Code 打开现有证据文档，抽查一条完成标准对应的截图、构建或 diff 记录及 Review 结论；这是独立自检，不要求同伴参与。需要重查页面时复用 Chrome“首页 v0”标签页】\n\n再抽查一条完成标准，看能不能找到对应结果。比如“查看项目”要跳到项目区，那记录里有没有实际点击结果？要求构建成功，那完整输出放在哪里？\n\n你可以暂停视频，自己抽查一条。Review 就是这次审阅的结论：接受、需要修正，或者因为什么暂时停下。结论旁边写上依据和待处理项，下一次打开记录，就知道工作应该从哪里接着做。",
        "【操作提示｜返回课件 p31 第 3 步，指向版本与后续；核对记录中的提交、tag 与未决事项后收尾。不新开 Chrome 页面，不发布；未完成者使用“首页交接仍待补做”分支】\n\n最后，把本地提交、ch01-prompt-baseline 标签和检查记录对应起来。有待改进的地方，也单独留下。这样交出去的就是一份能定位版本、能查看依据的首页 v0。\n\n回看这一节，我们从已确认的请求出发，观察生成，打开页面检查，再回到代码、构建和差异，最后决定是否接受。以后再把任务交给 AI，你也可以沿着这些具体对象检查结果。\n\n首页还没完成的同学，先把交接状态留在待补做，后面补齐。已经完成的这一版，会成为第二章继续迭代的起点。在那之前，下一节我们先回看今天哪些动作需要权限，为什么只给当前任务需要的权限。"
      ],
      "segment": "判断与交付",
      "seconds": 120,
      "source": "index.html#p31",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "交付的是源码，也是一条证据链；v0 仍是原型。第 2 章将从真实页面发现问题、建立反馈基线；下一节先总结权限取舍。"
        },
        {
          "title": "演示分支",
          "text": "未完成 v0 时读：“接下来可以参加权限判断，但首页交接仍标待补做。”不跳过缺失门禁。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M11]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "请拿出最终任务和实现，说明二者如何对应。\n\n让学员暂停视频，独立抽查一条完成标准，确认能否沿证据找到实际结果；同伴复述可选。\n\nv0 仍是原型。第 2 章将从真实页面发现问题、建立反馈基线；下一节先总结权限取舍。"
        }
      ]
    }
  ],
  "segments": [
    {
      "label": "核对与生成",
      "seconds": 420
    },
    {
      "label": "运行与检查",
      "seconds": 220
    },
    {
      "label": "工程证据",
      "seconds": 260
    },
    {
      "label": "判断与交付",
      "seconds": 300
    }
  ]
};
