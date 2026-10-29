window.lesson = {
  "title": "最小权限：为什么不能给 Agent 所有权限",
  "chapter": "第 1 章 · Prompt",
  "section": "01.06",
  "summary": "回看个人主页开发中的请求与批准，按任务、对象和范围判断权限，再迁移到同一主页的本地链接检查。",
  "scenes": [
    {
      "id": "p32",
      "label": "生成个人主页，需要多少权限？",
      "title": "生成个人主页，需要多少权限？",
      "lead": "上一节已经生成并检查了本地个人主页。现在回看过程中的请求：读写项目、安装依赖、启动服务和浏览器检查，各自为什么需要？哪些能力超出了这次任务？",
      "html": "<style>body[data-mode=\"slides\"] #p32 h2{font-size:54px}</style><ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>第一次 AI 协作闭环</li><li class=\"is-done\"><b>1.2</b>Agent 执行机制与 AI 协作基础</li><li class=\"is-done\"><b>1.3</b>工具使用与权限</li><li class=\"is-done\"><b>1.4</b>写清个人主页的需求</li><li class=\"is-done\"><b>1.5</b>生成并检查个人主页</li><li class=\"is-now\"><b>1.6</b>最小权限：为什么不能给 Agent 所有权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">刚完成的任务</span><p class=\"p-big\" style=\"font-weight:500\">生成并检查本地个人主页</p></div><div class=\"p-join\" data-reveal=\"1\"><b>?</b></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">逐项判断</span><p>读写项目 · 安装依赖<br>本地运行 · 浏览器检查</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">每项能力，<b>对应哪个任务动作？</b></div>",
      "steps": [
        "回看主页任务",
        "辨认请求",
        "留下问题"
      ],
      "script": [
        "【操作提示｜课件 p32 第 1 步 → 回看上一节个人主页的已有页面或截图，再打开最终 Prompt，指向首屏、项目区和本地检查目标。服务已停时展示留存截图并说明，不重启或重新生成。回课件】\n\n上一节，我们已经让 Agent 生成了个人主页，还运行和检查了它。现在回头看这个过程：为了完成这份任务，到底需要给 Agent 多少权限？\n\n这里说的权限，就是允许它接触哪些资源、执行哪些动作。我们要分析的，是刚才从生成页面到本地检查的完整任务。",
        "【操作提示｜推进第 2 步 → 回看 1.5 实际会话中与读写项目、安装、启动或浏览器检查相关的请求。只展示记录里确有的动作，缺记录的项目按课件示例分析，不声称已批准。随后回课件】\n\n页面代码要写进项目；依赖还没准备好时，需要安装；检查页面，还要运行项目、打开浏览器。每个动作都有用途，但用途说得合理，还要继续看：它准备改哪里、运行什么、访问哪个地址？\n\n这些才是判断请求的具体对象。由我们手工完成的操作，也要和 Agent 实际获得的授权分开。",
        "【操作提示｜推进第 3 步，指向“对应哪个任务动作”；留在课件，不操作权限菜单】\n\n如果它还要读取私人目录、修改另一个项目，或者把页面发布出去，这些能力又对应哪项要求？\n\n接下来，我们把必要动作和范围放在一起看。判断依据是这次任务需要什么，以及现有条件还缺什么。"
      ],
      "segment": "任务与能力",
      "seconds": 50,
      "source": "index.html#p32",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "生成、运行和检查主页分别需要什么能力？每个请求都要对应具体动作、对象与范围。"
        },
        {
          "title": "演示材料",
          "text": "回看个人主页页面或截图、最终 Prompt 和上一节实际请求记录。服务已停时用留存截图并注明；缺请求记录时用课件分类讨论，不把示例说成已经批准。"
        },
        {
          "title": "讲师提示",
          "text": "只回看，不重新生成、安装或改变权限设置。产品是否弹窗、批准会持续多久，以实际记录和配置为准。"
        }
      ]
    },
    {
      "id": "p33",
      "label": "哪些动作需要，范围到哪里？",
      "title": "哪些动作需要，范围到哪里？",
      "lead": "实现主页需要读取相关文件，按批准清单创建或修改页面与配置；依赖未就绪时，才安装已确认的依赖。启动本地服务、运行构建、浏览页面分别对应检查目标。安装若需要下载，应核对来源和范围；不发布并不代表所有联网都没有必要。私人目录、其他项目和任意外站访问不属于本次目标，本地提交也不包含推送或发布。",
      "html": "<style>#p33 .p-matrix{align-items:stretch}</style><div class=\"p-matrix\" style=\"--n:1;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr) minmax(0,1.35fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>动作</span><span>为什么需要</span><span>范围与影响</span></div><div data-reveal=\"0\"><span>读写项目文件</span><span>实现约定页面</span><span>按批准清单<br>保留 setup-check/</span></div><div data-reveal=\"1\"><span>安装已确认依赖</span><span>依赖未就绪时</span><span>核对包与下载来源<br>新增依赖先说明</span></div><div data-reveal=\"2\"><span>本地运行与检查</span><span>预览 · build · 浏览器</span><span>限定项目与本地页面</span></div><div data-reveal=\"3\"><span>私人目录 · 任意外站<br>其他项目 · 推送发布</span><span>本次不需要</span><span>无关资料与改动<br>额外对外影响</span></div></div>",
      "steps": [
        "项目读写",
        "按需安装",
        "本地运行检查",
        "无关访问与发布"
      ],
      "script": [
        "【操作提示｜课件 p33 第 1 步 → VS Code 对照个人主页最终 Prompt 与实际文件树，指向根目录 index.html、src/、package.json 和构建配置；同时指出保留的 setup-check/。只查看，不修改。回课件】\n\n先看项目读写。Agent 要读取相关文件，知道页面从哪里启动、已有配置是什么；要实现首屏和项目区，就需要创建或修改对应文件。\n\n范围按我们确认的清单来：页面、组件、样式和必要配置。setup-check 要保留，其他项目也与这次任务无关。“做个人主页”没有把整个电脑都变成可修改范围。",
        "【操作提示｜推进第 2 步 → 查看 package.json、锁文件及上一节实际安装请求或输出，核对安装对象和来源；没有安装记录就按“依赖未就绪”的条件讨论。不重新安装。回课件】\n\n安装依赖要看条件。已确认的项目依赖还没准备好，安装才有对应的必要性。先看安装哪些包、从哪里获取、会执行什么；如果临时增加新依赖，就先说明为什么需要。\n\n安装若要下载，可能需要访问对应来源。这和把主页发布到网上是两件事，所以“不发布”不能直接解释成“所有联网都不需要”。",
        "【操作提示｜推进第 3 步 → 对照 package.json 中实际的 dev、build 脚本，以及上一节启动、构建和浏览器检查记录；指出项目目录与本地地址。不重跑命令、不打开外站。回课件】\n\n再看本地运行和检查。开发服务让我们预览页面，构建脚本检查项目能否完成构建，浏览器用来看内容、点交互和查报错。\n\n这些动作要对应具体项目、脚本和本地页面。允许一次本地检查，不能笼统理解成可以执行任意命令、访问任意网站。",
        "【操作提示｜推进第 4 步，指向最后一行；只用课件讨论私人目录、其他项目和对外动作，不实际访问或发布】\n\n最后看不需要的能力。私人目录、其他项目，都没有对应到这次主页任务；推送和发布也不在本节目标里。上一节保存本地提交，不等于要把代码传到远端。\n\n所以这里没有一份永久通用的权限清单。每项能力都要说明：为了哪个动作，作用到哪里，范围多大。"
      ],
      "segment": "任务与能力",
      "seconds": 90,
      "source": "index.html#p33",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "安装依赖是否必要，要看已确认需求和当前环境。开发任务需要的能力，也只用于对应的动作与范围。"
        },
        {
          "title": "证据与操作",
          "text": "对照个人主页最终 Prompt、批准清单、package.json、锁文件及上一节工具请求。安装行为以实际命令和包为准；不能把 reason 中的用途说明当作全部影响。"
        },
        {
          "title": "讲师提示",
          "text": "不把“允许安装依赖”讲成任意联网或执行；不把启动服务讲成任意监听；浏览器检查只针对约定的本地页面。图中分类不是某个产品的权限选项名称，不承诺工具能按相同粒度隔离。"
        }
      ]
    },
    {
      "id": "p34",
      "label": "过少、匹配、过大，分别会怎样？",
      "title": "过少、匹配、过大，分别会怎样？",
      "lead": "对生成并检查个人主页的任务，只读权限无法写入实现；匹配的能力应覆盖批准范围内的项目读写、必要的本地运行与检查，以及依赖未就绪时的安装。任意访问、改动其他项目和发布超出目标。只给完成当前任务所需的能力与范围，就是最小权限（Least Privilege）；具体限制能细到哪里，还要核对工具配置。",
      "html": "<style>.x-sl{position:relative;display:grid;grid-template-columns:1fr 1.1fr 1fr;column-gap:22px;row-gap:0}.x-sl-track{grid-column:1/4;position:relative;height:74px}.x-sl-track::before{content:'';position:absolute;left:0;right:0;top:30px;height:16px;border-radius:9px;background:#E7E2D6;border:2px solid #243042;filter:url(#p-rough)}.x-sl-zone{position:absolute;top:30px;height:16px;border:2px solid transparent}.x-sl-zone.lo{left:0;width:31.5%;background:#F4B9A4;border-radius:9px 0 0 9px}.x-sl-zone.ok{left:33.5%;width:33%;background:#86C99A}.x-sl-zone.hi{right:0;width:31.5%;background:#F4B9A4;border-radius:0 9px 9px 0}.x-sl-knob{position:absolute;top:14px;left:50%;width:44px;height:44px;margin-left:-22px;border-radius:50%;background:#15803D;border:4px solid #fff;box-shadow:0 0 0 2.5px #15803D,3px 4px 0 rgba(36,48,66,.18)}.x-sl-end{position:absolute;top:0;font:400 20px/1 var(--p-title);color:#4A5260}.x-sl-end.l{left:0}.x-sl-end.r{right:0;color:#A8350F}.x-sl-tick{position:absolute;top:52px;font:400 19px/1 var(--p-title);color:#A8350F;transform:translateX(-50%)}</style><div class=\"x-sl\"><div class=\"x-sl-track\"><span class=\"x-sl-end l\">权限少</span><span class=\"x-sl-end r\">权限多 →</span><i class=\"x-sl-zone lo\" data-reveal=\"0\"></i><i class=\"x-sl-zone ok\" data-reveal=\"1\"></i><i class=\"x-sl-zone hi\" data-reveal=\"2\"></i><span class=\"x-sl-knob\" data-reveal=\"1\"></span></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"grid-column:1;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">过少 · 只能读</h3><p style=\"font-weight:700\">无法写入主页实现</p><p class=\"p-sub\" style=\"margin-top:4px\">说明缺口，申请必要写入</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"grid-column:2;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">匹配 · 按任务开放</h3><p style=\"font-weight:700\">项目读写 · 必要运行</p><p class=\"p-sub\" style=\"margin-top:4px\">依赖按需安装，结果仍要查</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-column:3;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">过大 · 任意访问、发布</h3><p style=\"font-weight:700\">影响无关内容</p><p class=\"p-sub\" style=\"margin-top:4px\">收窄到任务所需</p></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:16px\">只给当前任务所需：<b>最小权限 · Least Privilege</b></div>",
      "steps": [
        "过少",
        "匹配",
        "过大",
        "命名原则"
      ],
      "script": [
        "【操作提示｜课件 p34 第 1 步，指向“只能读”；三种情况均为课件推演，不切终端更改权限】\n\n左边只允许读取。Agent 能看文件、提出修改建议，却不能把主页实现写进去，这就少了完成任务需要的能力。\n\n遇到这种情况，先把缺口说清楚：要写哪些文件、为什么需要。再判断是否允许，不能一受阻就直接开放全部权限。",
        "【操作提示｜推进第 2 步，指向“项目读写、必要运行”；结合上一页的条件说明匹配，不把图当成实际配置界面】\n\n中间这组覆盖了任务需要：按批准清单读写项目，完成必要的本地运行和检查；已确认依赖未就绪时，再处理安装。\n\n这里讲的是所需能力与范围。工具实际能限制到哪个目录、哪类动作，还要核对配置；不能只看这张图，就认定技术限制已经生效。",
        "【操作提示｜推进第 3 步，指向“任意访问、发布”；留在课件】\n\n右边给得过大了。原本是做一个本地主页，现在连无关资料、其他项目和对外发布也能涉及。任务一旦被理解错，可能影响的内容就更多。\n\n权限增加不会让结果自动变对，改完仍要对照要求检查。",
        "【操作提示｜推进第 4 步，指向 Least Privilege；经典背景只介绍原则来源，不添加未核实的原文或年代，不打开外站】\n\n把三种情况放在一起：少到完不成任务，需要说明缺口；多出用不上的能力，要收窄范围。只给完成当前任务所需的能力和范围，就是最小权限，英文叫 Least Privilege。\n\nSaltzer 和 Schroeder 关于系统保护的经典论述里就有这条原则。我们用它判断取舍，具体怎么配置，还要看所用工具。"
      ],
      "segment": "归纳原则",
      "seconds": 100,
      "source": "index.html#p34",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "只读少了实现主页需要的写入，任意访问和发布又超出目标。按任务寻找缺口与多余能力，不能一受阻就直接选择全部权限。"
        },
        {
          "title": "图示边界",
          "text": "滑块仅用于比较三种任务匹配程度，不对应某个产品的真实权限菜单。批准文件清单是任务范围，实际可写范围另看配置。"
        },
        {
          "title": "经典来源",
          "text": "Saltzer 与 Schroeder 的系统保护原则只作思想来源介绍，不引用未核实的原文、年份或当前产品配置。"
        }
      ]
    },
    {
      "id": "p34-boundary",
      "label": "写了“不许”，还要看实际限制",
      "title": "写了“不许”，还要看实际限制",
      "lead": "回看个人主页 Prompt 中的“不改 setup-check/、不发布”，这是任务范围。沿用工具使用与权限（1.3）的三项核对：看请求写了什么、当次配置限制了什么、批准记录实际同意了什么。reason 说明请求的用途，仍要对照实际动作、对象与影响范围；批准以后还要检查结果。",
      "html": "<div class=\"p-task\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box is-dashed\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">写下的</span><h3>任务范围</h3><p>不改 setup-check/<br>不发布</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">实际的</span><h3>配置限制</h3><p>可写范围 · 网络限制</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">这次的</span><h3>批准范围</h3><p>动作 · 对象 · 有效范围</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">核对<b>任务请求、限制配置和批准记录</b></div>",
      "steps": [
        "回看主页请求",
        "核对配置与批准"
      ],
      "script": [
        "【操作提示｜课件 p34-boundary 第 1 步 → 打开个人主页最终 Prompt，指向“不改 setup-check、不发布”。实际请求未留存时使用 1.4 p23 的示例并说明来源。随后回课件】\n\n回看个人主页的请求，里面写着“不改 setup-check、不发布”。这说明了我们要求的任务范围。\n\n文件能不能被技术上挡住、网络访问受什么限制，还要看当时的实际配置。写进 Prompt，是把要求说明白；接下来还要核对另外两栏。",
        "【操作提示｜推进第 2 步 → 并排查看个人主页任务当次的配置记录与一条实际批准请求，指认动作、文件或地址、批准有效范围。缺记录标待补；不沿用另一会话的配置推断，不更改权限菜单。回课件】\n\n先看配置限制了什么，再看批准记录同意了什么。比如，一次安装请求，除了 reason 写着“为了构建”，还要对照实际安装命令、依赖和访问来源。\n\n批准范围也要看清：这次同意覆盖哪些动作，是否还覆盖后续请求，按实际记录判断。理由看起来合理，不能替代这些核对。批准以后，结果仍然要检查。\n\n接下来还是这个主页，我们把任务缩小，看看需要的权限会怎样变化。"
      ],
      "segment": "归纳原则",
      "seconds": 50,
      "source": "index.html#p34-boundary",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "Prompt 中的“不改 setup-check、不发布”不会自动成为技术隔离。以个人主页任务当次配置和批准记录为证据，不能拿上一任务的配置代替。"
        },
        {
          "title": "演示材料",
          "text": "回看 1.5 的实际会话或截图，找出一条请求的动作、目标文件/地址及批准范围。缺配置或批准记录就标待补，不推测产品默认行为。"
        },
        {
          "title": "讲师提示",
          "text": "不只看 reason 是否合理，还要核对实际命令、访问对象、影响范围与批准有效范围。若记录显示的是更广的持续授权，应如实说明，不解释成仅允许一次。"
        }
      ]
    },
    {
      "id": "p35",
      "label": "同一个主页，只检查本地链接",
      "title": "同一个主页，只检查本地链接",
      "lead": "还是刚才的个人主页，现在任务缩小为检查本地链接并返回结果。题设给定服务已启动、地址已提供、浏览器工具已具备；不修代码、不访问外站、不安装、不发布。生成主页时需要的写入与按需安装，在这次任务中没有对应动作。这里的记录指返回观察结果，不要求 Agent 写入项目文件。",
      "html": "<span class=\"p-tag\" data-role=\"us\" style=\"justify-self:start\">同一主页 · 新任务</span><div class=\"p-task\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><h3>已知条件</h3><p>服务已启动 · 地址已提供<br>浏览器工具已具备</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>仅做观察</h3><p>检查本地链接<br>返回结果，不写项目文件</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\"><h3>任务边界</h3><p>不改代码 · 不访问外站<br>不安装 · 不发布</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">开发时需要的能力，<b>这次还需要吗？</b></div>",
      "steps": [
        "先读条件",
        "确认目标",
        "与开发任务对比"
      ],
      "script": [
        "【操作提示｜课件 p35 第 1 步，只读题卡；不启动服务、不调用浏览器工具。本题的服务、地址和工具均是给定条件】\n\n还是刚才的个人主页，这次只检查本地链接。题目给定：服务已经启动，地址已经提供，浏览器工具也具备。\n\n这些条件决定了，我们不需要再安装工具或准备运行环境。",
        "【操作提示｜推进第 2 步，指向“返回结果，不写项目文件”；仅解释任务，不现场检查链接】\n\n假如一个本地链接打不开，就返回点击位置、目标地址和看到的现象。本次只报告问题，是否修复由人看过结果后再决定。\n\n这里说的“记录”，是让 Agent 返回观察结果，没有要求它把报告写进项目文件。",
        "【操作提示｜推进第 3 步，对照开发任务和题卡边界；停顿供学员暂停思考，之后进入选项页】\n\n上一节要实现主页，所以需要写入；依赖未就绪时，还可能需要安装。现在任务变成观察和报告，这些能力就没有对应动作了。\n\n题目也限定了不访问外站、不发布。虽然项目没换，权限需求已经变了。可以先暂停视频，想一想这次给哪些能力就够了。"
      ],
      "segment": "迁移判断",
      "seconds": 80,
      "source": "index.html#p35",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "同一主页换成只查链接，写入、安装与发布都没有对应的必要动作。先判断当前任务，不直接沿用开发时的权限。"
        },
        {
          "title": "题设边界",
          "text": "本题只做判断，不实际浏览、安装、启动服务或发布。服务、地址、工具已具备是题设，不是对学员机器的实测结论。"
        },
        {
          "title": "停止条件",
          "text": "单个坏链接是要返回的检查结果；服务失效、需要额外工具或目标越出本地范围时，停止相关操作并说明。"
        }
      ]
    },
    {
      "id": "p35-choose",
      "label": "你会选 A、B，还是 C？",
      "title": "你会选 A、B，还是 C？",
      "lead": "选 A：在给定条件下，浏览本地页面与链接足以返回检查结果。B 增加写入，C 再增加安装、外站和发布，都是这次没有要求的动作。开发时需要的写入或安装能力，也不能直接沿用到本次任务。记下选择、理由和停止条件；服务失效、目标越出本地范围、需要额外工具时先说明。",
      "html": "<div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-q\" data-reveal=\"0\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">A</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">浏览本地页面与链接</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"ok\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">选 A</span></div></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">B</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">A ＋ 修改项目文件</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">过大</span></div></div><div class=\"p-q\" data-reveal=\"2\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">C</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">B ＋ 安装 · 外站 · 发布</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">过大</span></div></div></div><div class=\"p-bar\" data-reveal=\"3\">服务失效 · 跳到外站 · 要装工具 → <b>先停下说明</b></div>",
      "steps": [
        "看 A",
        "看 B",
        "看 C",
        "揭示理由"
      ],
      "script": [
        "【操作提示｜课件 p35-choose 第 1 步，只揭示 A，不提前推进答案】\n\nA 是浏览本地页面与链接。在给定的服务和工具条件下，它能观察页面、返回结果。先保留自己的选择，再看另外两项增加了什么。",
        "【操作提示｜推进第 2 步，比较 A、B；不切编辑器修链接】\n\nB 增加了修改项目文件。开发主页时这项能力有用，但现在发现坏链接就顺手修复，会改变这次只检查、报告的任务。等人确定修哪些，再为修复任务判断写入范围。",
        "【操作提示｜推进第 3 步，指向 C，停顿供判断；仍不展示答案标记】\n\nC 又增加了安装、外站访问和发布。题目给定的条件已经够用，这些动作都没有必要。不能因为开发时可能需要安装，就在后面的任务里一直保留这项能力。",
        "【操作提示｜推进第 4 步揭示 A → 展示一条判断记录示例：选择 A；已有服务与工具，只观察并返回结果；服务失效、目标越出本地范围或需要额外工具时停止相关操作并说明。记录形式自选，不新建专用仓库文件。说明这是题卡判断，不是实际检查已通过。回课件】\n\n所以选 A，因为它足以完成题目给定的任务。单个坏链接是要返回的检查结果，可以记下现象；如果本地服务失效、工具不够用，就先说明缺口。目标是外站时，不继续访问；意外跳出本地范围，也停止后续操作并记录情况。\n\n这些条件变化了，要重新确认任务范围，不能自行加上修代码、装工具或访问外站。按自己的习惯记下选择、理由和停止条件，不要求固定格式。我们手工记下判断，也没有给 Agent 增加写文件权限。"
      ],
      "segment": "迁移判断",
      "seconds": 100,
      "source": "index.html#p35-choose",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "选 A，因为已有服务和工具，当前任务只观察并返回结果。能解释为什么同一主页开发时需要写入、按需安装，而本题不需要。"
        },
        {
          "title": "记录要求",
          "text": "讲师展示一条判断记录示例；学员按习惯记下选择、理由与停止条件，不指定文件或固定表格。人工记录判断不代表给 Agent 追加写入权限。"
        },
        {
          "title": "停止条件",
          "text": "坏链接本身是题内结果；服务失效、目标越出本地范围或需要额外工具时，先停下说明。不为完成检查擅自扩展任务。"
        },
        {
          "title": "选项性质",
          "text": "A/B/C 是题卡给定的能力组合，不对应某一版本产品的真实菜单；不演示更改授权策略。"
        }
      ]
    },
    {
      "id": "p36",
      "label": "按自己的证据标记本章状态",
      "title": "按自己的证据标记本章状态",
      "lead": "按四项回看本章：首次欢迎语实践、个人主页 Prompt、个人主页检查、权限判断。权限判断要说明同一主页的开发和链接检查为何需要不同能力。检查完成标“通过”；有缺项标“待补做”，写明要补什么；还没实操标“仅观察”。记录形式自选。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:16px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:14px 18px\"><h3>首次闭环</h3><p>确认后修改<br>检查实际结果</p></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\" style=\"padding:14px 18px\"><h3>个人主页任务</h3><p>四要素 Prompt</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:14px 18px\"><h3>个人主页验收</h3><p>页面 · build · 改动检查</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"3\" style=\"padding:14px 18px\"><h3>权限选择</h3><p>开发与查链接<br>范围 · 理由 · 停止条件</p></div></div><div data-reveal=\"4\" style=\"display:flex;gap:14px;align-items:center;flex-wrap:wrap\"><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:20px\">通过</span><span style=\"font-size:20px\">证据齐全</span><span class=\"p-chip\" data-role=\"gate\" style=\"font-size:20px;margin-left:18px\">待补做</span><span style=\"font-size:20px\">有缺项</span><span class=\"p-chip is-mute\" style=\"font-size:20px;margin-left:18px\">仅观察</span><span style=\"font-size:20px\">还没实操</span></div>",
      "steps": [
        "回看首次修改",
        "找 Prompt",
        "找验收",
        "找权限理由",
        "标记状态"
      ],
      "script": [
        "【操作提示｜课件 p36 第 1 步 → 简短回看首次欢迎语任务的对话和检查结果；仅作全章实践回顾，不重新分析其权限。缺项如实说明，不新建专用记录文件】\n\n最后回看这一章的实际完成情况。第一次修改欢迎语时，是否在确认后执行，页面和改动有没有检查？用自己的对话和观察来回答。只看视频、还没做过，也照实记录。",
        "【操作提示｜推进第 2 步 → 打开个人主页最终 Prompt，找一条实际完成标准；准备与上一节已有结果对应，不新增标准】\n\n再找个人主页的一条完成标准，比如首屏应该显示哪些文字、按钮应该跳到哪里。接着找到相应检查结果：当时看到了什么，是否符合约定？只写了要求、还没检查的，就记为缺项。",
        "【操作提示｜推进第 3 步 → 查看上一节开发服务的实际地址。服务仍在运行时新开“个人主页证据回看”标签页；服务已停则展示已有截图并说明，缺截图标待补，不重跑服务。再看已有 build 日志、改动检查记录与新增文件内容，随后回课件】\n\n把页面、构建日志和改动检查记录放在一起看。页面对应内容和交互；构建日志说明构建是否完成；git diff 输出和新增文件内容用来核对修改范围。展示旧截图时，只能回看当时的画面，不能说明现在的服务还在运行。\n\nCLI 还没准备好，回课前准备（0.2）补齐；当前权限说不清，回工具使用与权限（1.3）核对。个人主页的构建或改动检查没做完，就回生成并检查个人主页（1.5）继续。",
        "【操作提示｜推进第 4 步 → 展示自己的最小权限判断记录，对照同一主页的开发与链接检查；不执行新任务】\n\n权限这一项，能不能解释：为什么开发主页需要写入，而只查链接不需要？安装依赖又在什么条件下才必要？再说出题设变化时的停止条件。理由要对应到当前任务。",
        "【操作提示｜推进第 5 步 → 按自己的实际检查结果记录通过、待补做或仅观察；缺项注明具体动作，不照抄讲师状态】\n\n现在标记自己的进度：检查完成、证据齐全，标通过；有缺项，标待补做，并写明要补什么，例如“待补个人主页构建检查”；还没实操，标仅观察。可以暂停视频，整理自己的状态。"
      ],
      "segment": "自检与收束",
      "seconds": 90,
      "source": "index.html#p36",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "对照自己已有的对话、页面和检查记录，能解释一条完成标准与检查结果，以及同一主页两种任务的权限差别。"
        },
        {
          "title": "补做入口",
          "text": "CLI 未就绪回课前准备（0.2），当前权限不清回工具使用与权限（1.3），个人主页构建或改动检查缺项回生成并检查个人主页（1.5）；首次实践未完成时回第一次 AI 协作闭环（1.1）。"
        },
        {
          "title": "记录边界",
          "text": "本页欢迎语仅用于回顾全章首次实践，不重新展开权限分析。截图只能回看当时画面；没有实际证据不能照抄讲师的通过状态。"
        }
      ]
    },
    {
      "id": "p36-recap",
      "label": "先对任务，再给权限，最后查证据",
      "title": "先对任务，再给权限，最后查证据",
      "lead": "把本地个人主页、最终 Prompt 和检查记录交给下一章，继续按真实反馈迭代。权限判断也随任务更新：生成主页和只查链接需要的能力不同；任务范围、实际配置和批准记录分别核对，受阻时说明缺口，完成后检查结果。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start;--big:1\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">本章习惯</h3><div class=\"p-star\" style=\"width:260px;font-size:23px\">先确认 · 小步做<br>看页面、查改动<br>不符就复验</div></div><div data-reveal=\"1\"><h3>权限判断</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-pass\">按当前任务给能力</li><li class=\"is-fix\">请求、配置、批准分别看</li><li class=\"is-stop\">受阻先说明，做完再查</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>接下来</h3><div class=\"p-box\" data-role=\"us\"><h3>第 2 章</h3><p>带着本地个人主页<br>按真实反馈继续迭代</p></div></div></div>",
      "steps": [
        "回顾闭环",
        "回顾权限",
        "交接"
      ],
      "script": [
        "【操作提示｜课件 p36-recap 第 1 步，按图简短回顾；收起编辑器和终端，只保留课件】\n\n这一章，我们先把请求说清楚，确认要做的动作，再检查页面和改动，发现问题后继续修正。个人主页就是这样一步步做出来的。",
        "【操作提示｜推进第 2 步，指向三条权限判断；不重新展开案例】\n\n权限也按当前任务判断。同一个主页，开发和只查链接需要的能力不同；任务范围、实际配置和批准记录分别核对，受阻先说明，做完再检查。",
        "【操作提示｜推进第 3 步，指向第 2 章；保留已有个人主页和记录，缺项沿前页入口补齐，不发布】\n\n留好本地个人主页、最终 Prompt 和检查记录，缺项按刚才的入口补齐。下一章，我们继续看页面、描述问题，让 AI 根据反馈迭代。第一章就到这里。"
      ],
      "segment": "自检与收束",
      "seconds": 40,
      "source": "index.html#p36-recap",
      "teaching": [
        {
          "title": "追问与预期判断",
          "text": "同一项目换了任务，需要重新判断能力与范围。交接已有个人主页、Prompt 和检查记录，缺项按对应入口补齐。"
        },
        {
          "title": "讲师提示",
          "text": "用简短回顾收尾，不重复展开前面的全部权限分析，不重新执行任务。"
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
