window.lesson = {
  "title": "AI 交回的改动，要不要接受",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.03",
  "summary": "先看范围再看内容，回看 Codex 当时看到了什么，再决定接受、缩小还是拒绝；用提交让“拒绝”变便宜。",
  "scenes": [
    {
      "id": "p35",
      "segment": "拿到 diff",
      "layout": "lesson-cover",
      "label": "说完成了，就能接受吗",
      "title": "Codex 说完成了，就能接受吗？",
      "lead": "改动还在工作区：先读懂 diff，回看它当时看到了什么，再决定接受、缩小还是拒绝",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-now\"><b>2.3</b>审改动</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>只是重构？</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">Codex 说</span><p class=\"p-big\" style=\"font-weight:500\">“已完成，项目区已更新”</p></div><div class=\"p-join\" data-reveal=\"2\"><span>还差</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">我们要做</span><p class=\"p-big\" style=\"font-weight:500\">读懂 diff，再决定</p></div></div>",
      "steps": [
        "回到地图",
        "Codex 的报告",
        "我们的决定"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步，指向章节地图上的 2.3，不切工具窗口。录前在练习项目核对：2.2 的改动仍在工作区，未暂存、未提交】\n\n2.2 我们完成了一轮迭代，三项检查也都过了。不过到现在为止，改动只在工作区里，还没有提交。",
        "【操作提示｜推进第 2 步；有 2.2 录制时 Codex 的实际完成报告就切 Terminal 的 Codex 会话指认最后一句，按实际原话讲，随后回课件；没有记录就留在课件，按概括讲】\n\nCodex 的最后一句话大概是：已完成，项目区已更新。这是它对自己工作的描述。",
        "【操作提示｜推进第 3 步，留在课件；讲完进入 p36 再切 Terminal】\n\n前面的检查核对了内容呈现、键盘行为和构建；接下来读 diff，核对改动的文件、具体内容和任务范围，再回到请求记录，看 Codex 当时是根据什么改的。读懂了再决定：接受、缩小，还是拒绝。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "Codex 的完成报告以 2.2 录制实际为准。"
        }
      ],
      "source": "index.html#p35",
      "seconds": 90
    },
    {
      "id": "p36",
      "segment": "拿到 diff",
      "label": "改了哪些文件",
      "title": "先看范围：改了哪些文件",
      "lead": "先用两条命令看范围，再看内容。git status --short 列出所有变化，包括还没被 Git 跟踪的新文件；git diff --stat 只统计已跟踪文件还没暂存的修改：新文件要另外打开看，已经 git add 的改动要用 git diff --cached --stat 看。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px\"><div class=\"p-term\" data-copy=\"git status --short\" data-reveal=\"0\"><div class=\"dim\">$ git status --short</div><div> M src/App.tsx</div></div><div class=\"p-term\" data-copy=\"git diff --stat\" data-reveal=\"1\"><div class=\"dim\">$ git diff --stat</div><div> src/App.tsx | 12 ++++++++++--</div><div> 1 file changed, 10 insertions(+), 2 deletions(-)</div></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"2\"><h3>src/App.tsx</h3><p>预期之内：项目数据就在这里</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"2\"><h3>没有 ?? 开头的行</h3><p>这次没有新建文件；有的话不在 --stat 里，要另外打开看</p></div></div><p class=\"source-note\">画面中的命令输出来自排练版 homepage-v1（courseware/ch02/materials/homepage-v1.diff）在 Git 2.50.1 下的一次运行；录制时换成 2.2 的真实 diff</p>",
      "steps": [
        "status",
        "diff --stat",
        "对得上吗"
      ],
      "script": [
        "【操作提示｜课件 p36 第 1 步 → 切 Terminal，在练习项目根目录运行 git status --short。课件画面是排练版 homepage-v1 的输出，按实际输出指认；出现 ?? 开头的行就如实指出是 Codex 新建的文件】\n\n先看范围，再看内容。在项目目录运行 git status --short。M 开头的是已跟踪文件被修改了，这里只有一行：src/App.tsx。如果 Codex 新建了文件，会多出两个问号开头的行。",
        "【操作提示｜同一 Terminal 运行 git diff --stat，指认文件名与增删行数；实际数字与口播的 10 行、2 行不同时按实际数字说，不念画面数字】\n\n再运行 git diff --stat，它统计每个文件改了多少行：App.tsx 新增 10 行、删除 2 行。注意，它只统计已跟踪、而且还没暂存的修改：新建的文件不在里面，只看 --stat 就会漏掉；已经 git add 过的改动也不在里面，要加 --cached 才看得到。我们现在还没暂存任何东西。",
        "【操作提示｜回课件 p36 第 3 步；实际列出无关文件、新文件或 package.json 变化时就地指出，并在 p39 走缩小或拒绝。说完暂停提示后再进入 p37】\n\n对照本轮目标：App.tsx 是项目数据所在的文件，预期之内。没有新建的文件，没有别的文件，也没有 package.json 的变化，就没有新依赖。范围对得上，再看内容。请暂停视频，在自己的项目里运行这两条命令。"
      ],
      "teaching": [
        {
          "title": "命令说明",
          "text": "未跟踪文件所在目录整个都是新的时，git status --short 只显示目录名（如 ?? src/components/），加 --untracked-files=all 可列出目录里的每个文件。"
        },
        {
          "title": "讲师提示",
          "text": "若 2.2 的真实 diff 出现了无关文件或 package.json 变化，在这里就地指出，并在 p39 走“缩小”或“拒绝”。"
        }
      ],
      "source": "index.html#p36",
      "seconds": 90
    },
    {
      "id": "p37",
      "segment": "走读 diff",
      "label": "改动做了什么",
      "title": "再看内容：每一处改动做了什么",
      "lead": "git diff 显示逐行改动。按“数据在哪 → 怎样渲染 → 影响哪些样式”读：这一轮只改了项目数组里的数据，渲染逻辑和样式都没动。排版规则没变，但内容变多了，有没有挤坏仍以 2.2 的视口检查为准。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:36px\"><div class=\"p-fn\">src/App.tsx <span class=\"add\">+10</span><span class=\"del\">−2</span></div><div class=\"p-ln\"><i>1</i><code>const projects = [</code></div><div class=\"p-ln del\"><i>3</i><code>    name: <span class=\"s\">'学习笔记'</span>,</code></div><div class=\"p-ln del\"><i>4</i><code>    description: <span class=\"s\">'记录课程练习'</span>,</code></div><div class=\"p-ln add\"><i>3</i><code>    name: <span class=\"s\">'红绿灯感知量产'</span>,</code></div><div class=\"p-ln add\"><i>4</i><code>    description: <span class=\"s\">'城市 NOA 红绿灯…'</span>,</code></div><div class=\"p-ln add\"><i>6</i><code>  { name: <span class=\"s\">'端侧多模态推理引擎'</span>, … },</code></div><div class=\"p-ln add\"><i>10</i><code>  { name: <span class=\"s\">'RoboHarness'</span>, … },</code></div><div class=\"p-ln\"><i>15</i><code>]</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>数据</b><small>换掉一条，又加了两条</small></span></li><li data-reveal=\"1\"><span><b>渲染</b><small>projects.map 那段没动</small></span></li><li data-reveal=\"2\"><span><b>样式</b><small>index.css 没动 · 挤没挤坏看 2.2 的检查</small></span></li><li class=\"is-ok\" data-reveal=\"3\"><span><b>文字与原文一致</b><small>逐字对过</small></span></li></ol></div><p class=\"source-note\">新增的两项各占 4 行，画面折叠为一行。画面中的命令输出来自排练版 homepage-v1（courseware/ch02/materials/homepage-v1.diff）在 Git 2.50.1 下的一次运行；录制时换成 2.2 的真实 diff。</p>",
      "steps": [
        "数据",
        "渲染",
        "样式",
        "文字"
      ],
      "script": [
        "【操作提示｜课件 p37 第 1 步 → 切 Terminal 运行 git diff，指认 src/App.tsx 顶部 projects 数组的删除行与新增行；画面代码是排练版 homepage-v1，按实际 diff 讲，不预设结构】\n\n运行 git diff，看逐行改动。按三个问题读。第一，数据在哪？项目信息放在 App.tsx 顶部的 projects 数组里。红色两行是旧的那一条，“学习笔记：记录课程练习”，被整条换掉了；绿色是新的第一条。后面又加了两条项目，画面上各折成了一行。",
        "【操作提示｜切 VS Code 打开 src/App.tsx，定位 projects.map 那段；实际 diff 若改了渲染，在这一步指出，并说清对三种视口和键盘的影响】\n\n第二，怎样渲染？页面下方用 projects.map 把数组里的每一项变成一张卡片。这段代码这次没有出现在 diff 里，说明渲染方式没变，只是多了两项数据。",
        "【操作提示｜回课件推进第 3 步；可切 Terminal 对照 git status --short，确认 src/index.css 不在列表里。实际改了样式时就地指出，对照 2.2 的视口检查结果】\n\n第三，影响哪些样式？index.css 没有改动，排版规则和原来一样。文字和卡片变多后，会占用更多空间；是否被截断或挤坏，要对照 2.2 在三种视口下的检查结果。",
        "【操作提示｜推进第 4 步 → VS Code 并排打开 2.2 Prompt 里给出的项目经历原文和 src/App.tsx，逐字核对；不一致时如实指出，留到 p39 处置。随后回课件 p38】\n\n最后逐字对一遍文字，和我们给的原文一致，没有被润色。一处很小的改动，用这三个问题读完，就能说清它的目的和影响面。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "按 2.2 的真实 diff 讲，不预设结构。若 Codex 改了渲染或样式，就在第 2、3 步指出，并说清它对三种视口和键盘的影响。"
        }
      ],
      "source": "index.html#p37",
      "seconds": 120
    },
    {
      "id": "p38",
      "segment": "走读 diff",
      "label": "对得上本轮目标吗",
      "title": "逐项对照本轮的完成标准",
      "lead": "把 2.2 Prompt 的 Done when 逐项拿来对照：前三项看 2.2 做过的检查，第四项看刚读过的 diff。四项都对得上，再回看 Codex 是根据什么改的。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-claim\" style=\"grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">Done when</span><p style=\"margin-top:8px;line-height:1.7\">三种视口可读<br>Tab 顺序不变<br>build 成功<br>diff 只含项目区</p></div><ul class=\"p-checks\"><li data-reveal=\"1\">三种视口<small>2.2 检查：三条经历完整显示</small></li><li data-reveal=\"1\">键盘<small>2.2 检查：Tab 仍只停在“查看项目”</small></li><li data-reveal=\"1\">构建<small>2.2 检查：退出码 0</small></li><li data-reveal=\"2\">diff 范围<small>刚才读过：只有 App.tsx 的项目数据</small></li></ul></div>",
      "steps": [
        "完成标准",
        "检查结果",
        "diff 范围"
      ],
      "script": [
        "【操作提示｜课件 p38 第 1 步 → 切 Terminal 里 2.2 的 Codex 会话（已 /clear 时看自己的笔记或课件 2.2 的 Prompt 页），指认 Done when 四项，再回课件】\n\n回到 2.2 我们写的 Done when，一共四项。它当时是给 Codex 的要求，现在变成我们的验收清单。",
        "【操作提示｜推进第 2 步；右侧文字是排练版，按讲师 2.2 的实际检查结果讲；没做的项标待补，不打勾】\n\n前三项，三种视口、键盘、构建，2.2 都亲手检查过，结果对得上。",
        "【操作提示｜推进第 3 步，留在课件；第四项依据 p36–p37 已读过的实际 diff 判断，不再切工具窗口】\n\n第四项，diff 只含项目区相关改动，证据就是刚才读过的 diff。如果自己的 diff 多出了无关文件、改了样式，或者加了依赖，这一项就打叉，那就是范围扩大。四项都对得上，还差一步：看看 Codex 是根据什么改的。"
      ],
      "teaching": [],
      "source": "index.html#p38",
      "seconds": 90
    },
    {
      "id": "p38a",
      "segment": "回看请求记录",
      "label": "它是根据什么改的",
      "title": "Codex 是根据什么改的？",
      "lead": "打开 2.1 起一直在看的那份请求记录，找到 2.2 这一轮的工具调用。看三件事：Codex 读了哪些文件；diff 里改动的每个文件，改之前读过没有；每处改动的依据，来自 Prompt 原文，还是读到的文件。判断看这一轮的记录，不看它上一次怎么做。范围扩大时，常能在这里找到原因：多读了无关内容，或者 Prompt 里缺了本轮目标。记录里找不到依据的改动，按“无法解释”处理。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-walk\"><div data-reveal=\"0\"><div class=\"p-src\" style=\"--lh:40px\"><div class=\"p-fn\">2.2 本轮的几次请求（示意）</div><div class=\"p-ln\"><i>1</i><code>user · 本轮 Prompt：目标、项目经历原文</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>2</i><code>模型 · 调用工具：读 src/App.tsx</code></div><div class=\"p-ln add\" data-reveal=\"1\"><i>3</i><code>工具返回 · App.tsx 的内容</code></div><div class=\"p-ln\" data-reveal=\"2\"><i>4</i><code>模型 · 调用工具：改 src/App.tsx</code></div><div class=\"p-ln\" data-reveal=\"3\"><i>5</i><code>模型 · 完成报告</code></div></div></div><ol class=\"p-notes\"><li data-reveal=\"1\"><span><b>读了哪些文件</b><small>多读了无关文件，范围容易扩大</small></span></li><li data-reveal=\"2\"><span><b>改的文件，之前读过吗</b><small>对照 diff 里的文件逐个找</small></span></li><li data-reveal=\"3\"><span><b>依据从哪来</b><small>Prompt 原文，还是读到的文件</small></span></li><li class=\"is-risk\" data-reveal=\"3\"><span><b>找不到依据</b><small>按“无法解释”处理</small></span></li></ol></div><p class=\"source-note\">请求记录为结构示意，录制时按实际记录替换；条目名为中文概括</p>",
      "steps": [
        "找到本轮请求",
        "读了哪些文件",
        "改前读过吗",
        "依据从哪来"
      ],
      "script": [
        "【操作提示｜课件 p38a 第 1 步 → 切浏览器的 claude-tap 查看器，打开 2.1 起使用的同一份请求记录，找到 2.2 本轮修改的那几次请求，指认第一条是本轮 Prompt；画面是结构示意，按实际记录讲，截图前检查路径和用户名】\n\n我们从 2.1 开始一直在看同一份请求记录。现在回到它，找到 2.2 这一轮修改的那几次请求。第一条是我们发的本轮 Prompt：目标，加上项目经历的原文。",
        "【操作提示｜在查看器里逐条指认读取文件的工具调用和返回；工具名、命令和次数以实际记录为准，不念画面上的示意条目】\n\n先看它读了哪些文件。模型发出工具调用，读了 src/App.tsx，工具返回把文件内容带回来，后面每次请求都会带着它。如果这里读了一堆和项目区无关的文件，范围就容易扩大。",
        "【操作提示｜在查看器里找到修改文件的那次工具调用，对照 p36 的 git status 列出的文件逐个确认改前读过】\n\n再对照 diff。diff 里改动的文件只有 App.tsx，改之前它读过，读到的就是我们刚才看到的那份旧内容。如果 diff 里有一个文件，记录里从来没读过，就要问：它凭什么改这个文件？",
        "【操作提示｜回课件推进第 4 步；讲师 diff 干净时说明每处都找得到依据；记录里真有多读或缺目标的情况，就地指出，留到 p39 处置】\n\n最后看依据。新的三条项目，文字来自 Prompt 里的原文；放在哪里、写成什么结构，来自读到的 App.tsx。每一处都找得到来源。判断看的是这一轮的记录，不是它上次怎么做。范围扩大时，原因常常就在这里：多读了无关的内容，或者 Prompt 里缺了本轮目标。记录里找不到依据的改动，就按“无法解释”处理。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "画面是结构示意。录制时打开 claude-tap 里 2.2 本轮那几次请求，按实际的工具调用和返回逐条指认，工具名、命令和次数以记录为准，截图前检查路径和用户名。讲师的 diff 干净时，本页说明“每处改动都找得到依据”即可；记录里真的有多读或缺目标的情况，就地指出，留到 p39 处置。"
        }
      ],
      "source": "index.html#p38a",
      "seconds": 120
    },
    {
      "id": "p39",
      "segment": "处置",
      "label": "接受、缩小还是拒绝",
      "title": "接受、缩小，还是拒绝",
      "lead": "接受还是不接受，看两件事：改动是否都在本轮目标之内、说得清依据；越界或说不清的部分能不能单独去掉。讲师这次的 diff 干净，选接受。范围扩大真的出现时，就地处理，不为了教学去制造。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,.7fr) minmax(0,1.4fr) minmax(0,1.6fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>处置</span><span>什么情况</span><span>怎么做</span></div><div data-reveal=\"0\" class=\"is-key\"><span>接受</span><span>都在目标内，四项对得上，依据找得到</span><span>暂存、检查、提交</span></div><div data-reveal=\"1\"><span>缩小</span><span>主体对，夹带了无关或说不清依据的修改</span><span>放弃越界的文件，或让 Codex 收回</span></div><div data-reveal=\"1\"><span>拒绝</span><span>方向错，或改得太多，读不懂也验不了</span><span>放弃全部改动，重写 Prompt</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">本次：<b>接受</b> · 只改了项目数据，每处都找得到依据</div>",
      "steps": [
        "接受",
        "缩小与拒绝",
        "本次结论"
      ],
      "script": [
        "【操作提示｜停留课件 p39 第 1 步，不切工具窗口；真实 diff 干净时本页快速带过，重点留给 p41】\n\n处置有三种。接受：改动都在目标之内，四项完成标准对得上，每处改动都找得到依据。那就暂存、检查、提交。",
        "【操作提示｜推进第 2 步，留在课件；不准备坏 diff，也不现场制造越界改动】\n\n缩小：主体是对的，但夹带了无关的修改，或者有一处在记录里找不到依据。可以放弃越界的那部分，或者让 Codex 把它收回。拒绝：方向错了，或者改得太多，我们读不懂、也验不了。那就放弃全部改动，重新写 Prompt，怎么回去本节最后会讲。",
        "【操作提示｜推进第 3 步，留在课件。实际 diff 若有范围扩大，按实际说缩小或拒绝，p40 不按接受流程录】\n\n讲师这次的 diff 很干净，只改了项目数据，每处都找得到依据，选接受。如果自己的 diff 出现了范围扩大，这里就是处理它的时候。结论和理由记在自己的笔记里，接下来提交。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "不准备坏 diff（决定 7）。真实 diff 干净时，本页快速带过，2.3 以 p41 演示回到检查点为主（决定 21）。"
        },
        {
          "title": "跟做产出",
          "text": "评审结论：接受 / 缩小 / 拒绝及理由，记在自己的笔记里。"
        }
      ],
      "source": "index.html#p39",
      "seconds": 90
    },
    {
      "id": "p40",
      "segment": "处置",
      "label": "留下检查点",
      "title": "提交，留下一个检查点",
      "lead": "和第 1 章保存检查点时一样：只暂存审过的文件，用 git diff --cached 再看一遍待提交内容，然后提交。第一个 -m 是标题，第二个 -m 写本轮目标和改动文件。这次提交就是新的回退点，用 git log --oneline -1 能看到它的短哈希。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git add src/App.tsx\"><div class=\"dim\">$ git add src/App.tsx</div></div><div class=\"p-term\" data-reveal=\"1\" style=\"margin-top:8px\" data-copy=\"git diff --cached --stat\"><div class=\"dim\">$ git diff --cached --stat</div><div> src/App.tsx | 12 ++++++++++--</div></div><div class=\"p-term\" data-reveal=\"2\" style=\"margin-top:8px\" data-copy=\"git commit -m &quot;homepage-v1: 补充项目经历&quot; -m &quot;本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx&quot;\"><div class=\"dim\">$ git commit -m \"homepage-v1: 补充项目经历\" \\</div><div class=\"dim\">    -m \"本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx\"</div><div class=\"ok\">[main 7ce0e9f] homepage-v1: 补充项目经历</div></div><div class=\"p-term\" data-reveal=\"3\" style=\"margin-top:8px\" data-copy=\"git log --oneline -1\"><div class=\"dim\">$ git log --oneline -1</div><div>7ce0e9f (HEAD -&gt; main) homepage-v1: 补充项目经历</div></div><p class=\"source-note\">画面中的命令输出来自排练版 homepage-v1（courseware/ch02/materials/homepage-v1.diff）在 Git 2.50.1 下的一次运行；录制时换成 2.2 的真实 diff。 提交哈希每次不同。</p>",
      "steps": [
        "暂存",
        "再看一遍",
        "提交并写清说明",
        "回退点"
      ],
      "script": [
        "【操作提示｜课件 p40 第 1 步 → Terminal 在练习项目根目录运行 git add src/App.tsx；录前先确认没有其他已暂存的改动（git diff --cached 为空）】\n\n决定接受，就提交。做法和第 1 章保存检查点时一样：只暂存审过的文件，写清楚文件名，不用 git add 点号一把全加。这次只暂存 src/App.tsx。",
        "【操作提示｜推进第 2 步，同一 Terminal 运行 git diff --cached --stat；列出的不止 src/App.tsx 时先用 git restore --staged 取消多余文件，再重看】\n\n暂存以后运行 git diff --cached --stat，看看即将提交的是不是只有 App.tsx。这一步能拦住手滑多加的文件。",
        "【操作提示｜推进第 3 步，运行页面上的 git commit 命令（两个 -m）；分支名和短哈希以实际输出为准，画面中的 7ce0e9f 是排练记录】\n\n然后提交。第一个 -m 是标题：homepage-v1，补充项目经历。第二个 -m 写本轮目标和改动了哪些文件。以后回头查，看提交说明就知道这一轮为什么改、改了哪里，不用另外记。",
        "【操作提示｜推进第 4 步，同一 Terminal 运行 git log --oneline -1，指认短哈希；再 git status 确认干净。随后回课件】\n\n运行 git log --oneline -1，最上面这一行就是刚才的提交。它就是新的回退点，记住这个短哈希，下一页会用到。提交完，git status 应该是干净的。请暂停视频，完成自己的提交。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "哈希每次不同，按实际输出讲。分支名以学员仓库为准，course-starter 默认分支为 main。提交说明的第二段写本轮目标和改动文件，用 git log -1 能完整看到。"
        }
      ],
      "source": "index.html#p40",
      "seconds": 120
    },
    {
      "id": "p41",
      "segment": "回到检查点",
      "label": "接受错了怎么回去",
      "title": "万一接受错了，怎样回去",
      "lead": "还没提交：用 git restore 放弃选定文件还没暂存的修改，已经 git add 的先用 git restore --staged 取消暂存；它不处理未跟踪的新文件，放弃的内容也找不回来。已经提交：用 git revert 加提交哈希，新建一个“撤回提交”，历史保留，不改写。不教 git reset --hard：2.4 要公开历史。/clear 和压缩改的是对话，不会撤销文件改动；回退靠 git。",
      "html": "<div class=\"p-chain\" data-reveal=\"0\"><span>改动</span><i>→</i><span>审查</span><i>→</i><span>提交 = 检查点</span></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">还没提交</span><div class=\"p-term\" data-copy=\"git restore -- src/App.tsx\" style=\"margin-top:8px\"><div class=\"dim\">$ git restore -- src/App.tsx</div></div><p class=\"p-sub\" style=\"margin-top:8px\">已 add 的先 --staged · 新文件不管 · 放弃了就找不回</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ctx\">已经提交</span><div class=\"p-term\" data-copy=\"git revert --no-edit 7ce0e9f\" style=\"margin-top:8px\"><div class=\"dim\">$ git revert --no-edit 7ce0e9f</div><div class=\"ok\">Revert \"homepage-v1: 补充项目经历\"</div></div><p class=\"p-sub\" style=\"margin-top:8px\">新增一个撤回提交 · 原来的提交还在历史里</p></div></div><div class=\"p-bar\" data-reveal=\"3\">commit 让<b>“拒绝”变便宜</b> · /clear 和压缩不撤销文件，回退靠 git</div>",
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录，用第 1 章参考快照建一个练习仓库，不动你自己的个人主页",
            "code": "cp -R starters/personal-homepage/ch01-complete lab-runs/revert && cd lab-runs/revert\ngit init -q -b main && git add -A && git commit -qm baseline"
          },
          {
            "text": "应用 homepage-v1 的改动并提交一次，提交说明写本轮目标与改动文件",
            "code": "git apply ../../courseware/ch02/materials/homepage-v1.diff && git add src/App.tsx\ngit commit -q -m 'homepage-v1: 补充项目经历' -m '本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx'"
          },
          {
            "text": "在演示分支上撤回这次提交",
            "code": "git switch -c demo-revert && git revert --no-edit HEAD && git log --oneline -3 && git show --stat HEAD"
          },
          {
            "text": "检查：撤回提交只改了 src/App.tsx，原来的提交还在历史里；然后回到 main，删掉演示分支",
            "code": "git switch main && git branch -D demo-revert"
          }
        ],
        "note": "讲师 2026-10-20 按此实测（Git 2.50.1）。需要已配置 git user.name 与 user.email。"
      },
      "steps": [
        "主流程",
        "还没提交",
        "已经提交",
        "为什么要提交"
      ],
      "script": [
        "【操作提示｜停留课件 p41 第 1 步，不切工具窗口。录前核对：p40 的提交已完成，工作区干净】\n\n最后一个问题：万一接受错了，怎样回去？先看主流程：改动、审查、提交。回去的方法取决于走到了哪一步。",
        "【操作提示｜推进第 2 步，留在课件；git restore 只讲解不现场执行，主线上没有要放弃的修改】\n\n还没提交，想放弃某个文件的修改，用 git restore，后面写清楚文件路径。先确认路径对，再执行。它放弃的是还没暂存的修改；如果已经 git add 过，要先用 git restore --staged 取消暂存，再 restore。还有两个边界：一是只管 Git 已经跟踪的文件，Codex 新建的文件它不管；二是放弃的内容找不回来，想留的先另存。",
        "【操作提示｜推进第 3 步 → 切 Terminal，在练习项目根目录先 git status 确认干净，再依次运行 git switch -c demo-revert、git revert --no-edit <homepage-v1 的短哈希>、git log --oneline -3、git show --stat HEAD，指认撤回提交只改了 src/App.tsx、原提交还在历史里；然后 git switch main、git branch -D demo-revert。不在 main 上 revert，不运行 git reset --hard】\n\n已经提交了，用 git revert，后面跟要撤回的那次提交的短哈希，也就是刚才 git log 看到的回退点。它不会把那次提交从历史里抹掉，而是新建一个“撤回提交”，内容正好相反。讲师在一个临时分支上演示一下：撤回提交只改了 App.tsx，原来那次提交还在历史里。为什么不教 git reset --hard？因为下一节要公开整段历史，改写历史容易出事，不在本课范围。",
        "【操作提示｜回课件推进第 4 步；切回前确认已回到 main、演示分支已删除】\n\n回头看，commit 的价值在这里：它让“拒绝”变得便宜。还有一点：2.2 讲过，/clear 和压缩改的是对话，文件不会跟着变回去。想撤回改动，靠的是 git，不是清空对话。能说出本次的回退点和回到它的命令，是这一节的验收要求。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "在临时分支演示，不在学员主线上做，开始前 git status 必须干净：git switch -c demo-revert → git revert --no-edit <homepage-v1 的短哈希> → git log --oneline -3 → git show --stat HEAD → git switch main → git branch -D demo-revert（-D 用于删除未合并的演示分支）。2026-10-20 在临时仓库按“一次提交”实测：撤回提交只改 App.tsx（+2 −10），原提交保留在历史里。2026-10-05 另测过：已暂存的修改 git restore 不生效，先 git restore --staged 再 restore 生效。"
        },
        {
          "title": "讲师提示",
          "text": "改写历史的方法（reset、amend、filter 类工具）不进主课；需要时参考 GitHub 官方文档，用之前人工复核。"
        }
      ],
      "source": "index.html#p41",
      "seconds": 120
    },
    {
      "id": "p42",
      "segment": "回到检查点",
      "label": "本节小结",
      "title": "读懂再接受，接受了也能退",
      "lead": "本节留下一个审过、可回退的 homepage-v1 提交和一条评审结论。接受之前先看范围再看内容，再回看请求记录：Codex 当时看到了什么。提交以后，接受错了也能用 git 退回去；/clear 和压缩只动对话，不动文件。2.3 判断范围：该不该接受；2.5 判断性质：是不是保持了行为。检查分三层：自动检查、自动 Review、人工 Review。本章已有构建这一项自动检查，Review 全靠人工。下一节：发布上线。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">接受之前</h3><div class=\"p-star\" style=\"width:260px;font-size:24px\">先看范围<br>再看内容</div><p class=\"p-sub\" style=\"text-align:center;margin-top:10px\">回看记录：它当时看到了什么</p><p class=\"p-sub\" data-reveal=\"1\" style=\"text-align:center;margin-top:6px\"><b>接受之后</b> · 回退靠 git，不靠对话</p></div><div data-reveal=\"2\"><h3>三层检查</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-pass\">自动检查 · 本章只有构建</li><li class=\"is-stop\">自动 Review · 以后</li><li class=\"is-pass\">人工 Review · 本章</li></ul></div><div class=\"p-next\" data-reveal=\"3\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.4 发布上线</h3><p>看 Codex 怎么用 gh</p></div></div></div>",
      "steps": [
        "接受之前",
        "接受之后",
        "三层检查",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，不切工具窗口】\n\n接受之前，先看范围，再看内容：status 和 --stat 看范围，diff 看内容，再对照完成标准；然后回看请求记录，问一句：它当时看到了什么。",
        "【操作提示｜推进第 2 步，留在课件】\n\n接受之后，提交就是检查点。接受错了，用 git 退回去；清空或压缩对话，退不回文件。",
        "【操作提示｜推进第 3 步，留在课件，指向“三层检查”；不演示测试或自动 Review】\n\n检查可以有三层：自动检查，比如测试和构建脚本；自动 Review，让另一个程序或 Agent 审代码；还有人工 Review。本章的自动检查只有 npm run build，它只证明能构建；Review 全靠人工。行为测试和自动 Review，后面的章节再补上。另外，这一节判断的是范围，该不该接受；2.5 会判断性质，AI 说“只是重构”时，行为到底变没变。",
        "【操作提示｜推进第 4 步，留在课件；本节不推送，讲完进入 2.4】\n\n现在我们有了一个审过的提交，但它还只在自己电脑上。下一节把它发布上线，也看看 Codex 是怎么用 gh 帮我们改 GitHub 设置的。"
      ],
      "teaching": [],
      "source": "index.html#p42",
      "seconds": 120
    }
  ],
  "segments": [
    {
      "label": "拿到 diff",
      "seconds": 180
    },
    {
      "label": "走读 diff",
      "seconds": 210
    },
    {
      "label": "回看请求记录",
      "seconds": 120
    },
    {
      "label": "处置",
      "seconds": 210
    },
    {
      "label": "回到检查点",
      "seconds": 240
    }
  ]
};
