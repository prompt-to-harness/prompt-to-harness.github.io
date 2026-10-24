window.lesson = {
  "title": "补上个人经历，看对话怎么变长",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.02",
  "summary": "先把人写的个人资料放进主页：用 Plan 模式先出计划，人修订范围后再放行；检查页面和构建，再回看历史、缓存与压缩，选择下一步怎样继续会话。",
  "scenes": [
    {
      "id": "p20",
      "segment": "准备个人内容",
      "title": "把个人内容补进主页",
      "lead": "先补内容，再看这一轮的请求怎样变化",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-now\"><b>2.2</b>补经历</li><li><b>2.3</b>改风格</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>项目上</h3><p>把四块个人内容放进主页</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>请求里</h3><p>看规则、资料与历史怎样进入</p></div></div><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">系统指令</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">环境</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">规则</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px;font-weight:700\">工具返回</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px;background:transparent;color:var(--p-muted)\">新的 Prompt</div></div><div class=\"p-foot\">这一节看：多说几句以后，对话历史和工具返回怎样越来越长</div></div>",
      "steps": [
        "接上主页",
        "本轮任务",
        "回到请求"
      ],
      "script": [
        "【操作提示｜切浏览器展示现有主页首屏与占位项目区；回课件地图】\n\n上一节我们找到了主页的首屏和占位项目区。页面结构已经有了，现在把它补成自己的内容。",
        "【操作提示｜推进第 2 步，指两张任务卡】\n\n这一轮先准备个人资料，再请 Codex 放进页面。这次用 Plan 模式，先让它出计划，我们改好范围再放行。",
        "【操作提示｜推进第 3 步，指锚点图高亮的三块】\n\n做完以后再回看请求：规则什么时候进来，资料从哪里进来，对话又怎样积累。接着观察清空和压缩以后留下什么。"
      ],
      "layout": "lesson-cover",
      "teaching": [],
      "source": "index.html#p20",
      "seconds": 90
    },
    {
      "id": "p29a",
      "segment": "准备个人内容",
      "title": "页面上的事实，先写进 profile.md",
      "lead": "在项目根目录准备 profile.md，分基本信息、教育、工作经历、项目与开源四块。内容由人提供，Codex 负责呈现。讲师用自己已公开的信息；学员只写愿意公开的，也可用虚构人物。这个文件到发布时会随仓库公开。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div style=\"font-size:18px;line-height:1.25\" class=\"p-term\" data-reveal=\"0\"># 个人信息<br><br>## 基本信息<br>姓名：缪东旭（MiaoDX）<br><br>## 教育<br>……<br>## 工作经历<br>……<br>## 项目与开源<br>……</div><div style=\"display:flex;flex-direction:column;gap:14px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><h3>人准备内容</h3><p>基本信息 · 教育<br>工作经历 · 项目与开源</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><h3>只写愿意公开的</h3><p>也可以用虚构人物练习</p></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">Prompt 点名文件，Codex 再读取正文</div>",
      "steps": [
        "看资料文件",
        "公开边界",
        "点名再读取"
      ],
      "script": [
        "【操作提示｜切编辑器展示准备好的完整 profile.md；回课件节选】\n\n先在项目根目录准备 profile.md，分成基本信息、教育、工作经历、项目与开源四块。这里展示的是我的公开资料。事实由我们提供，Codex 负责放进页面。",
        "【操作提示｜推进第 2 步，指公开边界，留出暂停】\n\n发布时，这个文件也会跟着仓库公开。只写愿意公开的内容；不想用自己的真实资料，可以写一个虚构人物。请暂停视频，准备好自己的文件。",
        "【操作提示｜推进第 3 步，指文件名，进入规则准备】\n\n接下来 Prompt 只点名 profile.md，不把全文贴进去。Codex 读取以后，正文会出现在工具返回里，这正好接上上一节看过的那一块。"
      ],
      "teaching": [],
      "source": "index.html#p29a",
      "seconds": 90
    },
    {
      "id": "p21",
      "segment": "准备个人内容",
      "title": "这轮修改，用到会话、文件和页面",
      "lead": "眼前有 Codex 中的读取与操作历史、项目目录中的资料与代码，以及浏览器显示的主页。会话里还留着上一节的读取和问答，这一轮要不要带着它们，由我们选；文件内容要通过读取进入。浏览器效果由人检查，需要反馈时再明确提供。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:16px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><h3>Codex 会话</h3><p>上一节的读取与问答<br>这一轮要不要带上？</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>项目文件</h3><p>profile.md · 页面代码<br>读取后进入请求</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><h3>浏览器页面</h3><p>人查看文字与排版<br>把发现的问题说清楚</p></div></div>",
      "steps": [
        "看会话：要不要带上",
        "看文件",
        "看页面"
      ],
      "script": [
        "【操作提示｜切终端短看现有读取与问答，不恢复或重启任何服务】\n\n看一眼当前的 Codex 会话，这里还留着上一节的读取和问答。上一节结尾我们问过：再说一句，这些还会跟着发出去吗？要不要它们跟着？这一轮先做这个选择。",
        "【操作提示｜切编辑器，指 profile.md 与当前页面代码】\n\n资料和页面代码在项目目录里。我们把本轮需要的事实写进文件，Codex 读到以后，才拿到它的正文。",
        "【操作提示｜切浏览器看当前主页；回课件进入 p27a】\n\n浏览器里则是实际呈现的页面。这一轮由我们检查文字和排版，有问题就明确反馈给 Codex。先把这些材料准备好，再开始内容修改。"
      ],
      "teaching": [],
      "source": "index.html#p21",
      "seconds": 90
    },
    {
      "id": "p27a",
      "segment": "准备个人内容",
      "title": "先保存项目规则，再 /clear",
      "lead": "接着上一节“规则进入请求”的观察，在根目录保存 AGENTS.md：改代码后运行并报告 build，不新增依赖。上一节在弄懂项目区，这一轮需要的事实已经写进 profile.md，新写的规则也要新对话才会装入，所以选 /clear 开始新对话，随后直接发内容任务。本次 0.163.0 核验中，新对话首个任务请求含这些规则；中途新增文件未自动装入同一对话。清空没有撤销项目文件。学员写规则仍为选做。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-term\" data-reveal=\"0\"># 项目规则<br>- 不新增依赖<br>- 修改代码后运行 npm run build，并报告结果</div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>这一轮选 /clear</h3><p>上一节的问答用处不大<br>事实在 profile.md，规则要新对话才装入</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">首个任务请求：初始内容 + 项目规则 + 本轮 Prompt</div>",
      "steps": [
        "把规则存成文件",
        "为什么清空",
        "在任务请求里看规则"
      ],
      "script": [
        "【操作提示｜在编辑器保存根目录 AGENTS.md】\n\n上一节已经在请求里看到过规则。这次我们自己写一份：改完代码跑 build，并报告结果；不新增依赖。把它保存为项目根目录的 AGENTS.md。你跟做时，这一步选做。",
        "【操作提示｜在终端输入 /clear，清屏动作完整展示一次】\n\n现在回答刚才的选择。上一节是在弄懂项目区，这一轮要的事实已经写进 profile.md，任务也会重新说明；刚保存的规则，也要从新对话开始才会装进来。所以这一轮输入 /clear，开始新对话。清空以后直接发本轮任务。",
        "【操作提示｜推进第 3 步，指首个任务请求的组成；随后进入 p29，不在这里插入问候或提前回看尚未发出的请求】\n\n下一步直接提交本轮任务，随后就在它的第一个请求里看规则有没有进来。我们本次固定版本的核验里，中途才保存的规则没有自动进入原对话，从新对话开始以后才看到它。项目文件仍然在，清空没有撤销它们。"
      ],
      "teaching": [],
      "source": "index.html#p27a",
      "seconds": 90
    },
    {
      "id": "p29",
      "segment": "内容迭代",
      "title": "沿用四要素，写清这一轮的 Prompt",
      "lead": "沿用第一章 Goal、Context、Constraints、Done when 四要素：点名 profile.md，事实只来自这份资料，不加链接和依赖；先提出计划、等确认再改，完成标准写清谁检查什么。完整 Prompt 可复制。",
      "html": "<div class=\"demo-notes\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>点名资料文件</h3><p>先读取，再检查当前实现</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>事实只来自资料</h3><p>不补写，不加链接和依赖</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"2\"><h3>先计划、等确认</h3><p>接下来用 Plan 模式提交</p></div></div>",
      "steps": [
        "目标与背景",
        "约束",
        "完成标准"
      ],
      "script": [
        "【操作提示｜课件中指 Goal、Context；滚动 Prompt 到对应段】\n\n这段 Prompt 沿用第一章的四要素。Goal 是把四块个人内容放进主页。Context 点名根目录的资料文件，说明当前已有首屏和占位项目区，请它先读取并检查。",
        "【操作提示｜滚到 Constraints，指先计划、等确认】\n\nConstraints 限定事实只来自 profile.md，不补写。结构和样式可以为内容作调整，不加链接和依赖，项目卡不跳转。最后一句要求先提出计划、等我确认再改。",
        "【操作提示｜滚到 Done when；切终端准备 /plan】\n\nDone when 写清结果怎样检查：四块内容呈现，事实能找到出处，Codex 跑 build，我们在浏览器看文字与排版。接下来用 Plan 模式提交这段 Prompt。"
      ],
      "layout": "prompt-scene",
      "prompt": "Goal：把 profile.md 中的基本信息、教育、工作经历和项目放进个人主页，替换对应的占位内容。\nContext：profile.md 在项目根目录，由我提供个人事实与经历。当前页面已有首屏和占位项目区，项目卡不跳转。请先读取文件并检查当前实现。\nConstraints：个人事实与经历只使用 profile.md 的内容，不补写。可为呈现内容调整结构与样式；不添加链接或依赖，项目卡保持不跳转。先提出改动计划，等我确认后再修改。\nDone when：四块个人内容已呈现，事实与经历都能在 profile.md 中找到；你运行 npm run build 并报告结果；我在浏览器里检查文字与排版。",
      "teaching": [],
      "source": "index.html#p29",
      "seconds": 90
    },
    {
      "id": "p29c",
      "segment": "内容迭代",
      "title": "Plan：先问清，再呈现可确认的计划",
      "lead": "清空后输入 /plan，确认界面显示 Plan，再提交这段 Prompt；首个任务请求里已有刚保存的规则。本次先出现两项交互题：保留查看项目按钮、基本信息并入首屏，再出现 Proposed Plan。初版计划还提议更新 PROMPT_V1.md，需人在确认前收窄范围。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-term\" data-reveal=\"0\">› /plan<br>› 这一轮的四要素 Prompt</div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>交互提问 · 本次两题</h3><p>查看项目 → 保留 #projects<br>基本信息 → 并入首屏</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">Proposed Plan 出来后，先审范围与呈现要求</div>",
      "steps": [
        "切 Plan 并提交",
        "回答两道交互题",
        "看 Proposed Plan"
      ],
      "script": [
        "【操作提示｜已保存规则并 /clear；输入 /plan，确认模式后粘贴 p29 原文；提交后短切 tap 指首个任务请求中的 AGENTS.md，再回终端】\n\n输入 /plan，确认界面显示 Plan，再提交刚才的 Prompt。切到请求记录看一眼：第一个任务请求里已经有刚保存的项目规则，上一节的问答和工具返回没有接着发送。这是上一节结尾那个问题的一半答案：清空以后，前面的不会跟着发。",
        "【操作提示｜展示真实两项交互问题，选保留按钮与基本信息并入首屏】\n\n这次它先用交互题问两件事。我们选择保留查看项目按钮，仍然跳到项目区；基本信息并入首屏。回答以后再往下形成计划。",
        "【操作提示｜展示 Proposed Plan 及 PROMPT_V1.md 提议；停在确认选项】\n\n现在出现 Proposed Plan。它把方案整理出来，请我们决定是否实施。先别确认：这次计划里还提出更新旧的 PROMPT_V1.md。我们只要改页面，这一项需要收窄，同时把想要的排版说清楚。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "不用 /plan 也行：在 Prompt 里写明先提出计划、等确认再改。2026-10-23 同起点的普通模式也给出了文字计划并等待确认，只是交互形式不同（C2-92）。口播不展开对照。"
        }
      ],
      "source": "index.html#p29c",
      "seconds": 90
    },
    {
      "id": "p30",
      "segment": "内容迭代",
      "title": "先修订计划，再确认执行",
      "lead": "选择 No, stay in Plan mode，追加修订要求：保留风格和单列、姓名同一行、关注内容用原句、保留 #projects，只改页面与标题，不改课程过程材料；浏览器由人检查。修订后看范围、事实和验证方式，再选 Yes, implement this plan；本次自动切回 Default，发送 Implement the plan.。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><h3>先留下讨论</h3><p>No, stay in Plan mode<br>补呈现要求、收窄文件范围</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>再看修订后的计划</h3><p>页面与标题 · 事实出处<br>build 由它做，浏览器由人看</p></div></div><div class=\"p-term\" data-reveal=\"2\">Yes, implement this plan<br>→ Default · Implement the plan.</div><details class=\"p-pop\"><summary>查看完整修订要求</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>修订原文</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"font-size:20px;line-height:1.6\">先调整计划，暂不改文件：保持原有风格和单列布局；基本信息并入首屏，姓名用“缪东旭（MiaoDX）”同一行；“现在关注”用原句一行文字，窄屏自然换行；保留“查看项目”跳到 #projects；只改页面所需文件和标题，不改 PROMPT_V1.md 或其他课程过程材料，不新增记录文件。浏览器由我检查，你只做 build 与内容、范围核对，不启动开发或预览服务、不驱动浏览器。请给出修订后的简短计划，等我确认。</p></div></details>",
      "steps": [
        "修订而非立刻执行",
        "核对修订后的计划",
        "确认后自动切执行"
      ],
      "script": [
        "【操作提示｜选择 No, stay in Plan mode；展示修订原文（阅读层可复制）；不改 Prompt 起点】\n\n选择继续留在 Plan，先把要求补清楚：保持原有风格和单列，基本信息并入首屏，姓名同一行，关注内容沿用原句；保留查看项目按钮。只改页面所需文件和标题，课程过程材料不动。",
        "【操作提示｜展示修订后计划，指页面文件、标题、事实和 build 分工】\n\n再看修订后的计划：文件范围是否对得上，事实是否来自资料，验证是否分工明确。这里让它跑 build，浏览器由我们检查。计划如果还有越界，就继续修改，不必急着执行。",
        "【操作提示｜选 Yes, implement this plan；展示自动切回 Default 与 Implement the plan.，等修改结束；不另发重复确认，也不选清空并执行】\n\n修订确认以后，选 Yes, implement this plan。这次界面自动切回 Default，并发送 Implement the plan.，随后开始修改。"
      ],
      "teaching": [
        {
          "title": "修订原文",
          "text": "先调整计划，暂不改文件：保持原有风格和单列布局；基本信息并入首屏，姓名用“缪东旭（MiaoDX）”同一行；“现在关注”用原句一行文字，窄屏自然换行；保留“查看项目”跳到 #projects；只改页面所需文件和标题，不改 PROMPT_V1.md 或其他课程过程材料，不新增记录文件。浏览器由我检查，你只做 build 与内容、范围核对，不启动开发或预览服务、不驱动浏览器。请给出修订后的简短计划，等我确认。"
        }
      ],
      "source": "index.html#p30",
      "seconds": 90
    },
    {
      "id": "p31",
      "segment": "内容迭代",
      "title": "先看主页，再看 build 输出",
      "lead": "在浏览器里看首屏、教育、工作经历、项目与开源，检查文字和排版，再看本轮实际 build 输出。这里只收住本轮结果，逐句出处与改动范围的快速审查留到下一节。",
      "html": "<style>.x-result{width:100%;height:300px;object-fit:contain;object-position:top;border:1px solid var(--p-ink)}body[data-mode=\"scroll\"] .x-result{height:auto;max-height:550px}</style><div class=\"p-grid\" style=\"--n:2;gap:16px\"><div data-reveal=\"0\"><img class=\"x-result\" src=\"assets/plan-homepage.png\" alt=\"本次 Plan 成果：缪东旭个人主页的首屏、教育、工作经历与项目\"></div><div style=\"display:flex;flex-direction:column;gap:14px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><h3>本轮实际结果</h3><p>四块内容已呈现<br>npm run build 通过</p></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"2\"><h3>留给下一节</h3><p>逐句出处<br>改动范围</p></div></div></div>",
      "steps": [
        "人看页面",
        "核对构建",
        "留给下一节"
      ],
      "script": [
        "【操作提示｜切浏览器，从首屏滚到四块内容；可用设备工具栏看 360×800；回课件真实截图】\n\n先打开改好的主页，从首屏往下看教育、工作经历和项目。姓名、简介、关注内容有没有遗漏，文字有没有挤乱。你跟做时，也暂停看自己的页面。发现问题先记下来。",
        "【操作提示｜切本轮保存的 build 输出，显示 tsc、vite 成功；回课件】\n\n再看这轮的构建输出，类型检查和打包完成了。你也运行一次 npm run build。完整的事实出处和改动范围，我们下一节再快速审查。",
        "【操作提示｜推进第 3 步，指留给下一节的两项；准备 tap 记录】\n\n逐句出处和改动范围留到下一节。现在回看：这一轮每一步实际发送了什么？"
      ],
      "teaching": [],
      "source": "index.html#p31",
      "seconds": 90
    },
    {
      "id": "p22",
      "segment": "回看请求",
      "title": "补充一句要求，前面的工作也随请求发出",
      "lead": "回看这一轮的主任务记录 4、7、14、18。读文件的返回照样追加在末尾，和上一节看到的一样；这里看人补的两句：修订要求发出时，之前的文件返回、交互选择与计划都随之重发；实施时，模式切换指令和 Implement the plan. 也追加在末尾，前面不改。项数仅供定位，不是固定格式。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>本轮位置</span><span>这次请求里可见的内容</span></div><div data-reveal=\"0\"><span>初始任务</span><span>规则 + Prompt；尚无资料正文</span></div><div data-reveal=\"0\"><span>读过资料</span><span>前面的内容 + 读文件的调用与返回</span></div><div data-reveal=\"1\"><span>补充呈现要求</span><span>已有资料、选择和计划 + 新要求</span></div><div data-reveal=\"2\"><span>确认实施</span><span>前面的历史 + 模式指令 + Implement the plan.，都在末尾</span></div></div>",
      "steps": [
        "任务与资料进入",
        "追加要求",
        "进入执行"
      ],
      "script": [
        "【操作提示｜tap 打开主线记录 4，指规则与任务；再切记录 7，指末尾 profile.md 的调用和返回；隐藏完整开发者指令】\n\n打开最初的任务请求，这里有规则和刚才那段 Prompt。读完 profile.md 以后，资料正文追加在末尾，前面不变，和上一节看到的工具循环一样。",
        "【操作提示｜切记录 14，末尾定位人的修订要求，再指早先资料和计划】\n\n再跳到我们补充姓名同一行、关注内容用原句的那次请求。前面的任务、资料、交互选择和计划还在，末尾才是新要求。补充一句话能接上前面的工作，是因为这些历史又随请求发了出去。这是另一半答案：同一个对话里接着说，前面的都会跟着发。",
        "【操作提示｜切记录 18，定位模式切换指令与 Implement the plan.；回课件】\n\n实施计划时，界面加入了模式切换的指令，并发送 Implement the plan.。注意它们也都加在末尾，前面的工作一字不改。为什么要这样加，下一页说。看的是这一轮真实记录，不需要记它有多少项。"
      ],
      "teaching": [],
      "source": "index.html#p22",
      "seconds": 90
    },
    {
      "id": "p23",
      "segment": "回看请求",
      "title": "输入增长和缓存命中，分开看",
      "lead": "取同一 Plan 阶段、环境准备故障前的三次请求。输入从 10,451 增到 15,759 token；服务另报告缓存命中。前面的内容原样重发，前缀一致，服务才能复用上一次的计算；命中省的是 token 费用，这些历史仍在 input 里，模型照样要读。实际计费按所用服务规则核对，这里不作价格换算；再用下一页研究看长输入可能带来的表现变化。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>本轮位置</span><span>本次请求输入</span><span>其中报告为缓存命中</span></div><div data-reveal=\"0\"><span>初始任务</span><span>10,451 token</span><span>189 token</span></div><div data-reveal=\"0\"><span>已读个人资料</span><span>11,821 token</span><span>10,450 token</span></div><div data-reveal=\"0\"><span>初版计划生成前</span><span>15,759 token</span><span>15,109 token</span></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">前缀不变才命中缓存：省 token，不省内容</div><p class=\"source-note\">2026-10-23 一次运行：Codex CLI 0.163.0、MiniMax-M3.1-Flash。单次观察，结果随任务和配置变化。三条都在 Plan 阶段，不是整轮总用量。</p>",
      "steps": [
        "看输入量",
        "缓存为什么命中"
      ],
      "script": [
        "【操作提示｜指输入列三条数值，不混入模式切换后的记录】\n\n还是这一轮，在它读文件、提问和形成计划的过程中，每次请求的输入已经变多。这里选的是同一 Plan 阶段的三个位置。",
        "【操作提示｜指缓存列，再指底部一句；页底原文链接可现场打开；不现场换算价格】\n\n另一列是服务返回的缓存命中量。为什么能命中这么多？OpenAI 介绍 Codex 循环的文章里说，缓存只在前缀完全一致时才命中，所以配置有变化时，Codex 追加一条新消息，而不去改前面。刚才切回 Default 的指令也在末尾。命中缓存省的是 token 费用，这些历史仍然在 input 里，模型照样要读。具体换算留到后面的经验分享。这里接着看：信息越来越多，模型能否稳定用好？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "OpenAI，2026-01-23",
          "text": "深入解析 Codex 智能体循环 · 提示缓存",
          "url": "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/"
        }
      ],
      "teaching": [],
      "source": "index.html#p23",
      "seconds": 60
    },
    {
      "id": "p23a",
      "segment": "回看请求",
      "layout": "evidence-scene",
      "label": "长输入的表现",
      "title": "长输入下，表现可能变化",
      "lead": "Chroma《Context Rot》控制任务条件、改变输入长度，观察到表现会变化，长输入下可能变得不稳定。本页为其中的重复词任务，数据点为读图近似，只看趋势。这份研究提醒我们关注 Context 的长度和内容；本次主页是否改对，仍要检查文件和实际页面。",
      "html": "<div class=\"p-shot\" data-reveal=\"0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:440px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 840 444\" width=\"840\" height=\"444\"><defs><marker id=\"rd-arrow-chroma-context-rot\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><text x=\"0\" y=\"22\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"25\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">重复词任务：不同输入长度下的表现</text><line x1=\"70\" y1=\"334.66666666666663\" x2=\"630\" y2=\"334.66666666666663\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"340.66666666666663\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.5</text><line x1=\"70\" y1=\"278.0\" x2=\"630\" y2=\"278.0\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"284.0\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.6</text><line x1=\"70\" y1=\"221.33333333333334\" x2=\"630\" y2=\"221.33333333333334\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"227.33333333333334\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.7</text><line x1=\"70\" y1=\"164.66666666666663\" x2=\"630\" y2=\"164.66666666666663\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"170.66666666666663\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.8</text><line x1=\"70\" y1=\"107.99999999999999\" x2=\"630\" y2=\"107.99999999999999\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"113.99999999999999\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">0.9</text><line x1=\"70\" y1=\"51.33333333333334\" x2=\"630\" y2=\"51.33333333333334\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"60\" y=\"57.33333333333334\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"end\">1.0</text><line x1=\"170.25000591384298\" y1=\"40\" x2=\"170.25000591384298\" y2=\"380\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"170.25000591384298\" y=\"404\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">100</text><line x1=\"361.9770684856725\" y1=\"40\" x2=\"361.9770684856725\" y2=\"380\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"361.9770684856725\" y=\"404\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">1 千</text><line x1=\"553.7041310575019\" y1=\"40\" x2=\"553.7041310575019\" y2=\"380\" stroke=\"#E2DED3\" stroke-width=\"1\"/><text x=\"553.7041310575019\" y=\"404\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"middle\">1 万</text><line x1=\"70\" y1=\"380\" x2=\"630\" y2=\"380\" stroke=\"#243042\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"432\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\">输入长度（token，对数刻度）</text><text x=\"18\" y=\"210.0\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"middle\" transform=\"rotate(-90 18 210.0)\">得分（1 = 完全对）</text><polyline points=\"94.0,51.3 166.0,51.3 239.6,51.3 313.7,76.8 387.0,85.3 461.4,279.7 535.1,334.7 607.1,334.7\" fill=\"none\" stroke=\"#C2410C\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"70\" x2=\"686\" y2=\"70\" stroke=\"#C2410C\" stroke-width=\"4\"/><text x=\"696\" y=\"76\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">Claude Sonnet 4</text><polyline points=\"94.0,54.2 166.0,63.8 239.6,96.7 313.7,197.5 387.0,245.1 461.4,303.5 535.1,334.7\" fill=\"none\" stroke=\"#5A51D1\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"104\" x2=\"686\" y2=\"104\" stroke=\"#5A51D1\" stroke-width=\"4\"/><text x=\"696\" y=\"110\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">Qwen3-32B</text><polyline points=\"94.0,92.7 166.0,236.6 239.6,211.1 313.7,284.8 387.0,310.3 461.4,334.7 535.1,334.7 607.1,334.7\" fill=\"none\" stroke=\"#0B6B5F\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"138\" x2=\"686\" y2=\"138\" stroke=\"#0B6B5F\" stroke-width=\"4\"/><text x=\"696\" y=\"144\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">GPT-4.1</text><polyline points=\"94.0,80.8 166.0,233.8 239.6,228.7 313.7,310.9 387.0,323.9 461.4,330.1 535.1,359.0 607.1,334.1\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/><line x1=\"656\" y1=\"172\" x2=\"686\" y2=\"172\" stroke=\"#2563EB\" stroke-width=\"4\"/><text x=\"696\" y=\"178\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">Gemini 2.5 Flash</text><text x=\"656\" y=\"240\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\"></text></svg><p class=\"p-shot-note\" style=\"font-size:18px\">数据点为读图近似</p><p class=\"source-note\">据 Chroma《Context Rot》（2025-07-14）重复词任务重画</p></div>",
      "refs": [
        {
          "kind": "live",
          "group": "Chroma，2025-07-14",
          "text": "Context Rot",
          "url": "https://www.trychroma.com/research/context-rot"
        }
      ],
      "steps": [
        "看趋势"
      ],
      "script": [
        "【操作提示｜指研究图横轴与曲线；保持来源链接与读图近似说明可见】\n\nChroma 的研究控制任务条件，再改变输入长度，观察到表现会变化，长输入下可能变得不稳定。这里是其中的重复词任务，只看趋势。它提醒我们关注 Context 的长度与内容。我们这次主页是否改对，仍然要回到文件和实际页面检查。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "曲线据报告里 Repeated Words 任务的图重画（课程手绘风格，courseware/tools/redraw.py 生成，图元在 materials/external/context-rot/figures.py），四个模型的数据点是读图近似，只讲趋势，不读具体数值。2026-10-22 核对原文：报告测了 18 个模型，任务刻意做得简单，只为看输入长度本身的影响。"
        }
      ],
      "source": "index.html#p23a",
      "seconds": 30
    },
    {
      "id": "p24",
      "segment": "回看请求",
      "title": "工具的失败输出，也可能成为后续输入",
      "lead": "另一次独立运行中，预览服务启动返回 listen EPERM。在之后的请求记录中仍能找到同一失败返回。本页只说明失败输出也进入历史，与本轮运行及其 token 表分开。成功和失败的过程都可能成为后续输入，具体保留内容要看实际记录。",
      "html": "<div class=\"p-tag\" data-role=\"gate\" data-reveal=\"0\">另一次独立运行</div><div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-term\" data-reveal=\"0\">预览服务启动<br>listen EPERM · 退出失败</div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>之后的请求记录</h3><p>input 中仍有<br>这段失败的工具返回</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">回看历史，也看实际走过哪些步骤</div>",
      "steps": [
        "独立运行的失败",
        "之后仍有返回",
        "看实际过程"
      ],
      "script": [
        "【操作提示｜展示独立记录中的真实 EPERM，画面保留另一次独立运行标签】\n\n工具返回也可能是报错。这是讲师另一次独立运行：预览服务启动失败，返回 listen EPERM。",
        "【操作提示｜定位该次记录 40 的 input 第 69 项；只展示脱敏失败返回】\n\n看之后的请求，同一段失败输出也在历史里。它和刚才的主线不是同一次运行，我们不把两次的数字混在一起。",
        "【操作提示｜回课件；不重新制造错误，不加入主线增长表】\n\n成功和失败的过程都可能成为后续输入。所以回看历史，也看它实际走过哪些步骤。接下来观察：这些原始记录被压缩后，会怎样交接下去？"
      ],
      "teaching": [],
      "source": "index.html#p24",
      "seconds": 90
    },
    {
      "id": "p27",
      "segment": "压缩与继续",
      "title": "压缩换成摘要，要原文就重新读取",
      "lead": "在这一轮的会话中手动 /compact，观察已有历史怎样交接，而非窗口已满。本次压缩后原工具调用与返回换成摘要，部分任务与约束保留，项目规则重新装入。摘要没保留 DeepMotion.ai 经历的完整文字：禁止工具时答不出逐字原文，允许重读 profile.md 后正确引用。文件哈希与 tracked diff 均未改变。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><h3>压缩前</h3><p>读文件的原始返回<br>计划、修改与构建过程</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><h3>压缩后</h3><p>摘要承接过程<br>任务约束与重新装入的规则</p></div></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><h3>本次追问经历原文</h3><p>只凭摘要：无法逐字给出 → 重读 profile.md：找到原文</p></div><div class=\"p-bar is-light\" data-reveal=\"3\">请求里的历史表示变了，项目文件仍可读取</div>",
      "steps": [
        "已有历史",
        "观察 /compact",
        "追问并重读",
        "文件仍在"
      ],
      "script": [
        "【操作提示｜在这一轮的会话里对照压缩前 profile 返回、计划与构建记录】\n\n项目已经改完，刚才也看过历史怎样积累。现在手动压缩一次，观察它怎样把这段过程交接下去。此时窗口离满还很远。",
        "【操作提示｜展示同一会话 /compact 完成及首次后续请求，指摘要、规则和保留任务】\n\n压缩以后，这次请求里的原始工具调用和输出换成了摘要，任务和约束有部分保留，项目规则也重新放进来。具体摘要留下什么，要实际看。",
        "【操作提示｜展示禁止工具追问的实际回答，再展示允许只读 profile.md 后正确引用第 20 行；省略逐字节检查】\n\n这次摘要记了经历区已完成，却没留下 DeepMotion.ai 这条经历的完整文字。先要求不读文件逐字回答，它说给不出来。现在允许只读 profile.md，原文就通过读取回来了。",
        "【操作提示｜回课件；说明已核对文件哈希及 diff 不变，不引用有误的 build 末行回答】\n\n压缩改变了当前请求里历史的表示。这次前后核对，资料和页面文件没有变化。接下来要核对事实，就重新读取相应文件。"
      ],
      "teaching": [],
      "source": "index.html#p27",
      "seconds": 120
    },
    {
      "id": "p27b",
      "segment": "压缩与继续",
      "title": "/status：当前占用和累计用量分别看",
      "lead": "同一恢复会话手动压缩前后，Context window 报告从 31.8K used / 498K 变为 4.23K used / 498K；Token usage 从 60.1K total 变为 86.7K total。累计口径和当前窗口不同，压缩本身也调用模型。这些是本次界面读数，不是整节费用基准。另一次自动压缩实验把触发线调低到 10,000，便于观察任务中途压缩后继续，不能当默认配置。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>/status</span><span>压缩前</span><span>压缩后</span></div><div data-reveal=\"0\"><span>Context window</span><span>31.8K used / 498K</span><span>4.23K used / 498K</span></div><div data-reveal=\"1\"><span>Token usage</span><span>60.1K total</span><span>86.7K total</span></div></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"2\"><h3>另一次自动压缩实验</h3><p>调低触发线到 10,000 用于演示：中途压缩，任务继续</p></div>",
      "steps": [
        "当前窗口",
        "累计用量",
        "自动压缩的独立片段"
      ],
      "script": [
        "【操作提示｜对照主会话压缩前后 /status，仅指 used 与窗口值】\n\n不装请求查看工具，也能用 /status 看状态。先看 Context window 的 used 数，压缩以后当前占用变小。",
        "【操作提示｜指 Token usage，不用取整百分比推算占用，不换算整节费用】\n\nToken usage 是界面报告的累计用量，它还在增加，因为生成摘要本身也调用模型。这两行的口径要分开看。我们刚才是主动观察机制，并没有用满窗口。",
        "【操作提示｜切 2026-10-21 独立自动压缩记录，清楚标调低触发线；回课件】\n\n任务进行中也可能自动压缩。这个深入片段来自另一次实验：为了看清过程，把触发线调低到一万，读文件途中自动压缩后继续完成。画面上的一万是实验设置。你先看懂这个过程即可。"
      ],
      "teaching": [],
      "source": "index.html#p27b",
      "seconds": 90
    },
    {
      "id": "p28",
      "segment": "选择怎样继续",
      "title": "下一步要做什么，再选怎样继续会话",
      "lead": "先回看自己会话的读取与操作历史，再判断下一任务需要什么。继续、清空、压缩、新建交接都可能合理。Plan 是工作模式，本页四项是会话选择。讲师仍做同一主页，沿这份成果继续，需要逐句事实时重读文件；学员用界面中可见的一条依据说明自己的选择。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>做法</span><span>当前要接着做什么 / 哪些信息要带过去</span></div><div data-reveal=\"0\"><span>继续</span><span>同一件事，已有历史集中且有用</span></div><div data-reveal=\"0\"><span>/clear</span><span>重新说明任务与所需文件，文件改动还在</span></div><div data-reveal=\"1\"><span>压缩后继续</span><span>进度由摘要承接，需要原文时再读</span></div><div data-reveal=\"1\"><span>新建并交接</span><span>人说明结论、约束、文件和下一步</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">暂停：写下你的选择 + 一条可见的依据</div>",
      "steps": [
        "继续或清空",
        "压缩或交接",
        "自己的判断"
      ],
      "script": [
        "【操作提示｜回看当前 Codex 读取与操作历史，再指前两行】\n\n现在再作选择，就有具体依据了。先往回看，这个会话读过什么、改过什么，下一步还用得上什么？同一件事、历史有用，可以继续。从新对话开始，就重新说明任务和需要的文件。",
        "【操作提示｜推进后两行，联系刚才的摘要与文件原文】\n\n压缩后继续，由摘要承接进度，需要原文再读。新建并交接，则由人说明要沿用的结论、约束、文件和下一步。我们仍在做这个主页，后面沿这份成果继续，核对事实时重读资料。",
        "【操作提示｜留出暂停，让学员在自己笔记中写选择和可见理由】\n\n请暂停视频，写下你这次准备怎样继续，再说出界面里能看到的一条依据。用读过的文件、做过的操作来说明就够了，没有唯一答案。这里选的是会话处理方式，和前面的 Plan 工作模式是两件事。"
      ],
      "teaching": [],
      "source": "index.html#p28",
      "seconds": 90
    },
    {
      "id": "p33",
      "segment": "选择怎样继续",
      "title": "暂停自检：把判断落回这一轮操作",
      "lead": "四道自检允许暂停作答：区分点名文件与读取正文；说明清空后所需任务和文件；需要事实原文时重读；用当前界面的读取与操作解释会话选择。不要求代理、token 数和请求项数。",
      "html": "<style>body[data-mode=\"slides\"] #p33 .x-answer{display:none}body[data-mode=\"slides\"] #p33 .p-qrow h3{font-size:24px}body[data-mode=\"slides\"] #p33 .p-back-to{font-size:16px}</style><div class=\"p-qlist\"><div class=\"p-qrow\" data-reveal=\"0\"><span class=\"p-n\">1</span><div><h3>只点名 profile.md，正文什么时候进入？</h3><p class=\"x-answer\">读取返回加入历史后</p><span class=\"p-back-to\">回到 p22</span></div></div><div class=\"p-qrow\" data-reveal=\"1\"><span class=\"p-n\">2</span><div><h3>改完再 /clear，下一轮要给什么？文件呢？</h3><p class=\"x-answer\">重新说明任务、约束和文件；文件改动仍在</p><span class=\"p-back-to\">回到 p27a</span></div></div><div class=\"p-qrow\" data-reveal=\"2\"><span class=\"p-n\">3</span><div><h3>摘要只记经历已完成，怎样逐字核对？</h3><p class=\"x-answer\">重读资料和页面代码，对照原文</p><span class=\"p-back-to\">回到 p27</span></div></div><div class=\"p-qrow\" data-reveal=\"3\"><span class=\"p-n\">4</span><div><h3>继续、清空、压缩或新建，依据是什么？</h3><p class=\"x-answer\">说出自己会话里可见的读取或操作</p><span class=\"p-back-to\">回到 p28</span></div></div></div>",
      "steps": [
        "文件正文",
        "清空以后",
        "原文依据",
        "会话理由"
      ],
      "script": [
        "【操作提示｜显示第 1 题，口头留出暂停，再解释；阅读层提供答案】\n\n第一题，Prompt 只点名 profile.md，正文什么时候进入后续请求？请暂停想一想。读文件的返回进入历史以后，模型才拿到这份正文。",
        "【操作提示｜推进第 2 题，回指 p27a】\n\n第二题，内容改完以后清空对话，下一轮还要给什么？重新说明任务、必要约束和文件位置，让它读需要的内容。已修改的项目文件仍在，清空没有撤销它们。",
        "【操作提示｜推进第 3 题，回指 p27 重读原文】\n\n第三题，摘要只说经历已完成，现在要逐字核对一条经历，怎么办？重新读 profile.md 和当前页面代码，对照原文。摘要有没有留下原句，要看实际内容。",
        "【操作提示｜推进第 4 题，回指 p28，不公布统一选择】\n\n最后一题，下一步选择继续、清空、压缩还是新建？说出自己会话里看得见的一条理由。判断取决于哪些历史对下一任务还有用。"
      ],
      "teaching": [],
      "source": "index.html#p33",
      "seconds": 120
    },
    {
      "id": "p34",
      "segment": "选择怎样继续",
      "title": "带着这份内容，进入审查与风格调整",
      "lead": "本轮用人提供的资料补齐主页，查看页面和 build，再看规则、文件返回和对话历史如何进入请求。清空开始新对话，压缩用摘要承接历史，项目文件仍可读取。下一节先审内容与范围、保存 homepage-v1，再参考主页改风格。",
      "html": "<div class=\"p-grid\" style=\"--n:2;gap:16px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"0\"><h3>这一轮</h3><p>个人内容已呈现<br>页面与 build 已看过</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><h3>下一节</h3><p>审内容和范围<br>保存 homepage-v1<br>参考主页改风格</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">继续使用这一轮的成果</div>",
      "steps": [
        "收住本轮",
        "交接下一节"
      ],
      "script": [
        "【操作提示｜指本轮成果；保持项目尚未提交，不在这里建检查点】\n\n这一轮把人提供的内容放进主页，也看见了规则、资料、问答和操作怎样进入请求。清空重新开始对话，压缩用摘要承接历史；项目文件仍能读取。",
        "【操作提示｜指下一节三项，进入 2.3；不新增终端操作】\n\n接下来继续用这一轮的成果，先审改动的内容和范围，再保存 homepage-v1 检查点，然后参考一个主页调整风格。"
      ],
      "teaching": [],
      "source": "index.html#p34",
      "seconds": 60
    }
  ],
  "segments": [
    {
      "label": "准备个人内容",
      "seconds": 360
    },
    {
      "label": "内容迭代",
      "seconds": 360
    },
    {
      "label": "回看请求",
      "seconds": 270
    },
    {
      "label": "压缩与继续",
      "seconds": 210
    },
    {
      "label": "选择怎样继续",
      "seconds": 270
    }
  ]
};
