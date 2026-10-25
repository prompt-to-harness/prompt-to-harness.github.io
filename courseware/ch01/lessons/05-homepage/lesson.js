window.lesson = {
  "title": "生成并检查个人主页",
  "chapter": "第 1 章 · Prompt",
  "section": "01.05",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 个人主页。",
  "scenes": [
    {
      "id": "p26",
      "label": "生成并检查个人主页",
      "title": "生成并检查个人主页",
      "lead": "核对任务与工具，生成并检查本地个人主页；本节不发布",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>第一次 AI 协作闭环</li><li class=\"is-done\"><b>1.2</b>Agent 执行机制与 AI 协作基础</li><li class=\"is-done\"><b>1.3</b>工具使用与权限</li><li class=\"is-done\"><b>1.4</b>写清个人主页的需求</li><li class=\"is-now\"><b>1.5</b>生成并检查个人主页</li><li class=\"\"><b>1.6</b>最小权限：为什么不能给 Agent 所有权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">任务输入</span><p>已确认 Prompt + 文件范围</p></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">执行条件</span><p>CLI 能用 · Node/npm 已核对</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">只到<b>本地个人主页</b>，不发布</div>",
      "steps": [
        "核对任务",
        "核对环境",
        "明确终点"
      ],
      "script": [
        "【操作提示｜课件 p26 第 1 步 → 切 VS Code，打开独立练习副本及上一节保存的 PROMPT_V1.md 或证据文档，指认最终需求、文件清单和待确认项；不要在课件仓库生成项目】\n\n上一节我们写好了个人主页的任务。这一节做三件事：让 Codex 执行这份任务，检查结果，把通过检查的版本交付下来。\n\n先打开保存的 Prompt，核对首屏文字、项目区内容和按钮行为。还写着“待定”的地方，先补齐再交给 Codex。",
        "【操作提示｜回课件第 2 步 → Terminal 的“仓库检查”标签页，在练习根目录执行 pwd（PowerShell 用 Get-Location）、node --version、npm --version、git status --short、git diff；有暂存项再看 git diff --cached。VS Code 对照 docs/setup/ENVIRONMENT.md 与 docs/setup/TOOLCHAIN.md，保留初始状态】\n\n和 1.1 一样，先确认当前目录和仓库里原有的改动。这次多看一样：Node 和 npm 的版本。项目要靠它们安装依赖、运行脚本，版本要和课前记录对上。",
        "【操作提示｜返回课件 p26 第 3 步，指向“本地个人主页”；之后进入 p27，不在此处发送执行授权】\n\n这一版的终点是：页面能在浏览器打开，内容和按钮符合约定，构建通过，改动看过，最后保存在本地。换配色、加动画这些想法先记下来，留到下一轮。"
      ],
      "segment": "核对与生成",
      "seconds": 100,
      "source": "index.html#p26",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "按已确认的任务生成个人主页；今天交付可启动、可构建、可审阅的本地个人主页，不追求无限美化。"
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
          "text": "先对照上一节的最终版本，不从模糊需求重新开始。\n\nNode 未就绪、版本未核验就不能进入生成，不通过改源码掩盖环境失败。\n\n今天交付可启动、可构建、可审阅的本地个人主页，不追求无限美化。"
        }
      ],
      "closing": "打开上一节确认的个人主页任务，核对内容、按钮行为和文件范围。Codex CLI 与 Node/npm 都能使用，版本也已核对，再开始生成；本节只完成和检查本地个人主页，不推送、不发布。"
    },
    {
      "id": "p27",
      "label": "生成顺序要能对应到文件职责",
      "title": "生成顺序要能对应到文件职责",
      "lead": "生成分三步：先建骨架（包清单、锁文件、构建配置，版本与核验一致），再写页面（index.html 与 src，实现首屏、项目区和交互），最后启动开发服务器复盘。文件分工只是示意，出现新依赖或越界就先停。",
      "html": "<div class=\"p-flow is-big\" style=\"--n:3;column-gap:52px;--node-h:250px\"><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">01</span><h3>建骨架</h3><p style=\"color:#18202B;font-weight:700\">包清单 · 锁文件 · 构建配置</p><p style=\"margin-top:8px\">版本已核验</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">02</span><h3>写页面</h3><p style=\"color:#18202B;font-weight:700\">index.html · src/</p><p style=\"margin-top:8px\">首屏 · 项目区 · 交互</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"2\" style=\"text-align:left;padding:14px 18px\"><span class=\"p-num\">03</span><h3>运行复盘</h3><p style=\"color:#18202B;font-weight:700\">开发服务器</p><p style=\"margin-top:8px\">越界先停</p></div></div>",
      "steps": [
        "观察骨架",
        "观察实现",
        "回到清单"
      ],
      "script": [
        "【操作提示｜课件 p27 第 1 步 → Terminal 的 Codex CLI 会话，提交最终 Prompt，先要求核对任务、文件范围和小计划，暂不修改。逐项核对实际回复；一致后明确发送下文确认。新会话需补充最终文档及已确认决定，不能假定它记得上一节】\n\n先执行。把任务交给 Codex，流程和 1.1 一样：先核对，再授权。这次计划里要多看三样：技术栈是不是 React、TypeScript 和 Vite；有没有多出账号、后端或发布；依赖版本和核验过的是否一致。\n\n对上了，再明确授权：“按刚才的计划实现个人主页，只改批准的文件；遇到缺材料、额外依赖或清单外的改动，先停下来说明。”\n\n生成开始后，先出现的是项目骨架：包清单、锁文件和构建配置。它们也在这次的检查范围里。",
        "【操作提示｜课件第 2 步对应实操：CLI 观察生成与工具返回 → VS Code 展开实际文件树，打开根目录 index.html 和 src 下实际生成的入口、组件、样式。等待可剪辑；额外安装或越界请求先暂停，不能一律批准】\n\n接着是页面代码。在文件树里找到根目录的 index.html，再找到它接的应用入口、组件和样式。看它们是不是只围绕首屏、项目区和约定的交互；出现范围外的动作，比如接入外部服务，就让它说明原因。",
        "【操作提示｜回课件第 3 步 → VS Code 查看 package.json 的 scripts，确认 dev 脚本后，另开 Terminal 标签页“个人主页开发服务”，在练习根目录运行 npm run dev -- --host 127.0.0.1；保留实际启动输出及 Local 地址。启动失败则留日志处理；成功后先回 p28，不在旧 setup-check 页面验收】\n\n生成完，看 package.json 里的启动脚本，在新的终端标签页启动开发服务器，地址以终端实际打印的为准。setup-check 继续独立保留，个人主页从新的入口打开。"
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
      "lead": "切到真实开发页面，按三项清单逐项检查并当场记录：内容逐项对照自己的 Prompt，留下运行截图；真的点一下“查看项目”，记下实际点击结果；打开控制台看有没有明显报错，记下输出。找不到证据的项不打勾，单独列出。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到页面</h3><p>打开自己的个人主页，逐项检查</p><span class=\"p-env\">浏览器：个人主页</span><span class=\"p-env\">控制台</span></div><ol class=\"p-watch\"><li data-reveal=\"0\">内容<small>对照 Prompt · 存截图</small></li><li data-reveal=\"1\">行为<small>点“查看项目” · 记结果</small></li><li data-reveal=\"2\">错误<small>看控制台 · 记输出</small></li></ol></div>",
      "steps": [
        "先找内容",
        "操作交互",
        "查看错误"
      ],
      "script": [
        "【操作提示｜课件 p28 第 1 步 → 在 Chrome 新开标签页“个人主页”，粘贴 p27 终端实际打印的 Local 地址；例如输出 http://127.0.0.1:5173/ 才打开该地址。保留课件标签页。旁边用 VS Code 打开最终 Prompt，逐项核对内容并保存运行截图】\n\n执行完成，开始检查。1.1 只核对一句欢迎语，这次要核对整页，还要多查交互和控制台，每项查完当场记下来。\n\n第一项是内容。在 Chrome 新开标签页，打开刚才的本地地址，拿着自己的 Prompt 逐项找：名字、简介、项目描述，有没有漏，有没有被换成别的文字。核对完保存截图，放在对应标准旁边；没查到的部分列为待补查。",
        "【操作提示｜回课件推进第 2 步 → 复用 Chrome“个人主页”标签页；点击“查看项目”，观察滚动位置，再检查项目卡点击是否无跳转。若页面太短看不出滚动，结合元素目标和当前布局核对；如实记录，不预读“已跳转”】\n\n第二项是交互。点一次“查看项目”，看页面是否来到项目区；再点项目卡，确认没有意外跳转。把动作和结果写在一起，比如“点击查看项目，页面来到项目区”。结果不对，就照 1.1 的写法给 Codex 反馈：期望什么，实际怎样。",
        "【操作提示｜回课件推进第 3 步 → 同一 Chrome 标签页打开开发者工具的 Console，保留已有错误后刷新页面，再操作按钮；记录与本页相关的实际输出及截图。若要修正，回 CLI 提交具体问题和范围，改完复查；结束回课件 p29】\n\n第三项是控制台。打开开发者工具，刷新页面，再点一遍按钮，看有没有报错，记下结果。有报错就保留错误内容和文件位置，交给 Codex 定位，修完回来复查。页面检查到这里结束，接下来做工程检查。"
      ],
      "segment": "运行与检查",
      "seconds": 220,
      "source": "index.html#p28",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "切到页面：看内容、点交互、查错误；每项当场记录实际结果，没证据的不打勾；有错误先定位，不把页面能打开当作全部通过。"
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
          "text": "给观察清单后切到真实开发页面，逐项对照，不把这页示意当运行结果。\n\n真的点一次已要求的按钮和链接，把动作和结果写在一起；光看外观不能验收行为。\n\n保留实际控制台记录；有错误先定位，不把页面能打开当作全部通过。"
        }
      ]
    },
    {
      "id": "p29",
      "label": "页面能打开，构建也能通过吗？",
      "title": "页面能打开，构建也能通过吗？",
      "lead": "工程检查从构建开始：在真实项目里运行 npm run build。通过就记下退出状态和完整输出；失败就保留报错，分清环境问题还是实现问题，修复后重建。构建通过不能替代浏览器里的行为验证。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"tool\" data-reveal=\"0\" style=\"grid-column:2;padding:10px\"><div class=\"p-term\" data-copy=\"npm run build\" style=\"text-align:left\">$ npm run build</div></div><div class=\"p-fork\" style=\"grid-column:1/4\"><div class=\"l\" data-reveal=\"1\"><span>通过</span></div><div class=\"r\" data-reveal=\"2\"><span>失败</span></div></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"grid-row:3;grid-column:1\"><h3>通过证据</h3><p>退出状态 + 完整输出</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-row:3;grid-column:3\"><h3>失败去向</h3><p>保留报错 · 修复后重建</p></div></div>",
      "steps": [
        "执行检查",
        "保存通过记录",
        "处理失败"
      ],
      "script": [
        "【操作提示｜课件 p29 第 1 步 → Terminal 另开“构建检查”标签页，在同一练习根目录运行 npm run build；保留“个人主页开发服务”终端。命令结束后立即查看退出码：macOS/Linux 用 echo $?，PowerShell 用 $LASTEXITCODE】\n\n另开一个终端标签页，在项目根目录运行 npm run build。它具体做什么，由 package.json 里的 build 脚本决定。命令结束后，看退出码。",
        "【操作提示｜回课件推进第 2 步；仅在实际构建成功时，切 VS Code 保存完整输出、退出码、执行目录和工具版本。失败时直接进入第 3 步，不填通过】\n\n构建成功，就保存完整输出、退出码、执行目录和工具版本。页面检查看文字和点击，构建检查看源码能否生成部署用的文件，两份记录分开留。",
        "【操作提示｜推进第 3 步；成功时将本段作为失败处理说明。实际失败则展示首个有用报错，请 CLI 在原范围内定位，修复后重跑 build；影响页面时复查已有 Chrome 标签页。无法定位或需越界则保留阻塞，不进入保存基线操作】\n\n构建失败，从第一处有用的报错看起，交给 Codex 说明原因和要改的位置，在原范围里修，修完重跑；改到了页面，就回浏览器复查。"
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
      "lead": "每个人生成的代码不同，所以这里不放固定代码，而是回到自己的源码回答三个问题：index.html 怎样接到应用入口、首屏和项目区由哪些组件渲染、样式从哪里加载。每题写下文件、行号和一句话。",
      "html": "<div class=\"p-handoff\"><div class=\"p-handoff-card\" data-reveal=\"0\"><h3>切到你的源码</h3><p>每个人生成的代码不同，看自己的那一份</p><span class=\"p-env\">编辑器：个人主页项目</span><span class=\"p-env\">可以请 Agent 解释</span></div><div style=\"display:grid;gap:14px;align-content:start\"><ol class=\"p-watch\"><li data-reveal=\"0\">页面入口<small>index.html 怎样接到应用入口？</small></li><li data-reveal=\"1\">主要组件<small>首屏和项目区由哪些组件渲染？</small></li><li data-reveal=\"2\">样式入口<small>样式从哪里加载？影响了非目标内容吗？</small></li></ol><div class=\"p-bar is-light\" data-reveal=\"2\">每题写下：<b>文件 · 行号 · 一句话</b><br>看不懂先要求解释或拆小</div></div></div>",
      "steps": [
        "指认入口",
        "解释组件",
        "追问影响"
      ],
      "script": [
        "【操作提示｜课件 p29-code 第 1 步 → VS Code 打开实际 index.html，沿 script 引用进入应用入口，指认挂载元素和渲染调用。文件名与行号现场读取，不套用固定答案】\n\n接着检查代码。从 index.html 开始，找到它引用的脚本，打开入口文件，看应用挂到哪个元素、从哪里开始渲染，记下文件和行号。",
        "【操作提示｜回课件推进第 2 步 → VS Code 沿入口打开实际组件，定位首屏文案和项目数据。需要解释时切 CLI 发送“只解释当前个人主页入口、首屏与项目区的调用关系，指出文件和行号，暂不修改”，随后回源码核对】\n\n沿入口找到首屏和项目区的组件。名字、简介、项目描述是写在组件里，还是来自数据对象？找到一段，和浏览器里的文字对一下。看不懂就请 Codex 解释并指出位置，再回源码核对。",
        "【操作提示｜推进第 3 步 → VS Code 查样式 import 及对应选择器，查看是否有非目标引用；必要时复用 Chrome 页面定位元素。证据文档记录三个问题各自的“文件、行号、一句话”；完成回课件 p29-diff】\n\n最后找样式从哪里加载，留意作用范围大的规则，比如直接改所有按钮的样式。三个问题各写一句，附上文件和行号。说不清的改动，先要求解释或拆小。"
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
      "lead": "范围和产物要单独检查：完整改动对照批准清单和初始状态，包括未跟踪的新文件，不覆盖已有工作；构建产物里不能有 setup-check、secret 或私人资料。页面、build、代码理解、全部改动检查、产物五类证据互不替代。",
      "html": "<div class=\"p-pair\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">完整改动</span><p>对照批准清单 · <b>不覆盖已有工作</b></p></div><div class=\"p-join\" data-reveal=\"1\"><b>+</b></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">实际产物</span><p>无 setup-check · 无 secret 与私人资料</p></div></div><div data-reveal=\"2\"><p class=\"p-sub\" style=\"margin:0 0 8px\">不能互相替代</p><div class=\"p-chain\" style=\"font-size:21px\"><span>页面</span><i>·</i><span>build</span><i>·</i><span>代码理解</span><i>·</i><span>全部改动检查</span><i>·</i><span>产物</span></div></div>",
      "steps": [
        "检查范围",
        "检查产物",
        "汇总证据"
      ],
      "script": [
        "【操作提示｜课件 p29-diff 第 1 步 → Terminal 在练习根目录执行 git status --short、git diff --stat、git diff、git diff --cached；VS Code 对照初始状态与批准清单，逐个打开 ?? 新文件。普通 git diff 不展示未跟踪文件内容，不能漏看】\n\n然后看改动范围。用 git status 列出文件，和动手前的状态、批准清单对照。问号标记的新文件，普通 git diff 不显示内容，要在编辑器里打开看。范围外的改动，先分清是不是原来就有的，不要把原有工作一起覆盖掉。",
        "【操作提示｜推进第 2 步 → VS Code 检查实际 build 输出目录及 Vite 配置、应用入口、复制配置和 import；对应用源码与实际产物查 setup-check 引用及环境页特征文字，核对输出文件。检查源码、产物、待提交内容中的密钥及私人资料；发现敏感项先停止录屏并处理，不展示具体值】\n\n再看构建产物。确认输出目录，检查入口、引用和复制配置，再查实际文件里有没有 setup-check 的内容。同时检查源码、产物和待提交内容里有没有密钥或私人资料。",
        "【操作提示｜返回课件第 3 步，对照证据文档汇总五类检查；若缺项留待补，不新开 Chrome 页面】\n\n现在有五类记录：页面、构建、代码说明、改动范围和产物。每条完成标准都要能指到其中一项，缺哪项就补哪项。"
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
          "text": "同时检查已跟踪与未跟踪文件。多出的文件要解释，不能只挑一段好看的 git diff 输出。\n\n查实际构建输出和引用关系，不能因为目录名看起来独立就直接判通过。\n\n把每份证据接到完成标准，再判断是否可接受。"
        }
      ]
    },
    {
      "id": "p30",
      "label": "先判断结果，再保存检查点",
      "title": "先判断结果，再保存检查点",
      "lead": "练习：判断三种候选结果。页面正确但没有构建记录，暂不接受，先补跑构建；构建通过但产物里带进了环境检查页，去掉对 setup-check 的引用或复制，重新构建并复查产物；各类证据都符合标准，核对提交范围后保存检查点。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 三种结果，各怎么处理？</span><div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">A · 页面正确，没有构建记录</p><div data-reveal=\"1\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">暂不接受</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">补跑构建，失败则记录并处理</p></div></div><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">B · 构建通过，产物里有环境检查页</p><div data-reveal=\"2\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"agent\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">修正后重建</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">去掉对 setup-check 的引用或复制，重新构建并复查产物</p></div></div><div class=\"p-q\" style=\"min-height:200px;padding:16px 20px\"><p class=\"p-say\" style=\"padding-right:0;font-size:23px\">C · 各类证据都符合标准</p><div data-reveal=\"3\" style=\"margin-top:14px\"><span class=\"p-stamp\" data-role=\"ok\" style=\"position:static;display:inline-block;transform:rotate(-4deg);font-size:26px\">可以接受</span><p class=\"p-why\" style=\"font-size:20px;margin-top:10px\">核对提交范围后保存检查点</p></div></div></div>",
      "steps": [
        "暂停判断",
        "A · 页面正确，没有构建记录",
        "B · 构建通过，产物里有环境检查页",
        "C · 各类证据都符合标准"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步，先不揭示答案；三张卡是教学案例，不代表刚才真实结果。不切窗口，留出暂停视频的机会】\n\n检查完要做决定：接受、修正，还是停下。这三种结论 1.1 已经见过，这次换成工程证据来判断。A，页面正确，没有构建记录；B，构建通过，但产物里带进了环境检查页；C，各项证据都符合标准。可以暂停视频，先写下你的判断。",
        "【操作提示｜推进第 2 步，揭示 A；留在课件】\n\nA 暂不接受。页面查过了，构建这一项还没有证据。补跑构建：成功就补上记录，失败就先处理报错。",
        "【操作提示｜推进第 3 步，揭示 B；留在课件，不实际修改配置】\n\nB 也不能接受。构建成功只说明流程跑完了，产物里有什么要另外看。让 Codex 找出是哪里引用或复制了 setup-check，去掉以后重新构建，再查一次产物。",
        "【操作提示｜推进第 4 步，揭示 C；返回真实项目检查结果，只有满足条件才进入 p30-save 的保存分支】\n\nC 可以接受。回到自己的项目，按真实结果选择对应的处理。"
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
          "text": "三个都是候选教学结果。逐个给结论并指出缺什么证据。\n\n暂不接受；补跑构建，失败则记录并处理。\n\n构建成功不说明产物干净；去掉对 setup-check 的引用或复制，重新构建并复查产物。\n\n可以接受；核对提交范围后保存检查点。"
        }
      ]
    },
    {
      "id": "p30-save",
      "label": "检查通过，再提交并打 tag",
      "title": "检查通过，再提交并打 tag",
      "lead": "所有检查通过、待提交内容与批准范围一致，才保存本地提交并创建 ch01-prompt-baseline 这个 tag。提交和 tag 只用来定位版本，不证明质量；本节不推送、不发布，证据不全就停在待补做。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"ok\" data-reveal=\"0\"><span class=\"p-num\">01</span><h3>检查全部通过</h3><p>范围一致</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-num\">02</span><h3>保存本地提交</h3></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-num\">03</span><h3>创建 tag</h3><p class=\"p-mono\" style=\"font-size:18px\">ch01-prompt-baseline</p></div></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"margin-top:12px\"><span class=\"p-tag\" data-role=\"gate\">停止条件</span><p>无法验证 · 无法理解 · 需越界 → <b>不标通过</b></p></div>",
      "steps": [
        "确认范围",
        "保存定位",
        "保留阻塞"
      ],
      "script": [
        "【操作提示｜课件 p30-save 第 1 步 → VS Code 源代码管理逐项暂存已审阅文件，不全选；Terminal 执行 git diff --cached --stat 和 git diff --cached，确认暂存内容。未通过检查不暂存为验收基线；原有暂存项须辨认，不混入本次提交】\n\n检查通过，进入交付。在 VS Code 里逐个暂存审阅过的文件，不要全选。暂存完用 git diff --cached 再看一遍，确认没有无关文件、私人资料或本地生成的大文件。",
        "【操作提示｜第 2 步 → Terminal：git commit -m \"Build homepage v0\"；成功后 git status --short、git log -1 --oneline。确认无遗漏的任务改动，再运行 git tag --list ch01-prompt-baseline；名称不存在时执行 git tag ch01-prompt-baseline，随后 git rev-parse HEAD 与 git rev-parse ch01-prompt-baseline 核对 SHA。已有同名 tag 时核对所指版本，不强制覆盖。不执行 push；失败则停止后续命令】\n\n提交，再给这个提交打上 ch01-prompt-baseline 标签，以后按名字就能找到这一版。创建前先查有没有同名标签，有就核对它指向哪里，不覆盖。最后确认提交和标签指向同一个编号。本节只保存在本地，不推送。",
        "【操作提示｜回课件第 3 步；有阻塞则在 VS Code 证据文档写明阻塞项、日志位置和下一步，不创建“已验收”tag。若展示参考快照，明确来源及本人实际完成部分；已通过时作为失败处理说明】\n\n如果还有检查没通过，或者某段代码仍然说不清，就不打标签，记成待补做：卡在哪里、日志在哪、下一步查什么。"
      ],
      "segment": "判断与交付",
      "seconds": 90,
      "source": "index.html#p30-save",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "检查通过，再提交并打 tag；证据不全就停在待补做，不能为了得到 tag 假装通过。"
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
      "label": "保存源码、检查记录和版本",
      "title": "保存源码、检查记录和版本",
      "lead": "交接时放好三组材料：任务与实现（Prompt、源码、组件说明），检查与决定（截图、build、改动检查记录、Review），版本与后续（提交、tag、未决事项）。它们要能对应起来，说明这一版做了什么、怎样检查、接下来从哪里继续。",
      "html": "<style>.x-ch{display:flex;justify-content:center;align-items:center;margin:14px 0 6px}.x-ch-l{position:relative;width:380px;height:190px;margin:0 -34px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.x-ch-ring{position:absolute;inset:0;border:16px solid var(--c);border-radius:95px;filter:url(#p-rough);box-shadow:inset 0 0 0 3px rgba(255,255,255,.35)}.x-ch-l:nth-child(2) .x-ch-ring{border-width:16px;transform:translateY(0)}.x-ch-l h3{position:relative;font:400 28px/1.2 var(--p-title);color:var(--ct);margin:0 0 6px}.x-ch-l p{position:relative;margin:0;font-size:19px;color:#18202B;max-width:280px}.x-ch-break{display:flex;align-items:center;gap:14px;justify-content:center;margin-top:18px}.x-ch-break .bk{display:flex;align-items:center}.x-ch-break .bk i{display:block;width:54px;height:30px;border:7px solid #D9481C;border-radius:16px}.x-ch-break .bk i:first-child{transform:rotate(-14deg) translateX(4px)}.x-ch-break .bk i:last-child{transform:rotate(18deg) translateX(-4px)}.x-ch-break .bk b{font:400 26px/1 var(--p-title);color:#D9481C;margin:0 6px}</style><div class=\"x-ch\"><div class=\"x-ch-l\" data-role=\"agent\" data-reveal=\"0\" style=\"z-index:3\"><div class=\"x-ch-ring\"></div><h3>任务与实现</h3><p>Prompt · 源码 · 组件说明</p></div><div class=\"x-ch-l\" data-role=\"ok\" data-reveal=\"1\" style=\"z-index:2\"><div class=\"x-ch-ring\"></div><h3>验证与决定</h3><p>截图 · build · 改动检查 · Review</p></div><div class=\"x-ch-l\" data-role=\"tool\" data-reveal=\"2\" style=\"z-index:1\"><div class=\"x-ch-ring\"></div><h3>版本与后续</h3><p>提交 · tag · 未决事项</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:20px;display:flex;align-items:center;gap:16px\"><span class=\"x-ch-break\" style=\"margin:0\"><span class=\"bk\"><i></i><b>⁄</b><i></i></span></span><span>任何一环断开，交付就<b>说不清</b></span></div>",
      "steps": [
        "交接任务",
        "交接证据",
        "下一章"
      ],
      "script": [
        "【操作提示｜课件 p31 第 1 步 → VS Code 并排查看最终 Prompt、源码与入口/组件说明，选一条要求指认实现位置；完成后回课件】\n\n交付的不只是源码。拿出最终 Prompt，挑一条要求，比如展示“学习笔记”，指出它在哪个文件、由哪个组件显示。Prompt 和实现对得上，下次修改就有起点。",
        "【操作提示｜推进第 2 步 → VS Code 打开现有证据文档，抽查一条完成标准对应的截图、构建或改动检查记录（git diff 输出及新文件内容）及 Review 结论；这是独立自检，不要求同伴参与。需要重查页面时复用 Chrome“个人主页”标签页】\n\n再从记录里抽查一条完成标准，找到对应的截图、构建输出或改动检查，以及 Review 结论：接受、修正还是暂停，依据是什么。",
        "【操作提示｜返回课件 p31 第 3 步，指向版本与后续；核对记录中的提交、tag 与未决事项后收尾。不新开 Chrome 页面，不发布；未完成者使用“个人主页交接仍待补做”分支】\n\n最后把本地提交、ch01-prompt-baseline 标签和检查记录放在一起，未完成的事项单独列出。\n\n这一节，我们让 Codex 按任务执行，用页面、构建、代码和改动检查结果，再把接受的版本交付下来。这一版就是第二章继续迭代的起点。下一节，我们先回看今天用到了哪些权限。"
      ],
      "segment": "判断与交付",
      "seconds": 120,
      "source": "index.html#p31",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "保存源码、检查记录和版本；当前页面仍可继续迭代。第 2 章将从真实页面发现问题、建立反馈基线；下一节先总结权限取舍。"
        },
        {
          "title": "演示分支",
          "text": "未完成个人主页时读：“接下来可以参加权限判断，但个人主页交接仍标待补做。”不跳过缺失门禁。"
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
          "text": "请拿出最终任务和实现，说明二者如何对应。\n\n让学员暂停视频，独立抽查一条完成标准，确认能否沿证据找到实际结果；同伴复述可选。\n\n当前页面仍可继续迭代。第 2 章将从真实页面发现问题、建立反馈基线；下一节先总结权限取舍。"
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
