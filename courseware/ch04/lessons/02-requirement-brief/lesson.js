window.lesson = {
  "title": "贴上需求原文，就能直接写吗",
  "chapter": "第 4 章 · SDD",
  "section": "04.02",
  "summary": "用 MCP 读取需求原文并核对来源，带着需求调查源码，把愿望、事实和未决问题分开，写成第一份规格 Brief。",
  "scenes": [
    {
      "id": "p13",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "贴上需求原文，就能直接写吗",
      "title": "贴上原文，就能直接写吗？",
      "lead": "需求方把想法写进了飞书里的一份需求笔记。这一节把原文取回仓库，带着它调查源码，写出第一份规格 Brief",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>4.1</b>接手工程</li><li class=\"is-now\"><b>4.2</b>形成 Brief</li><li><b>4.3</b>批准 Spec</li><li><b>4.4</b>写验收</li><li><b>4.5</b>拆任务</li><li><b>4.6</b>MCP 工具</li></ol><div style=\"margin-top:26px\"><div class=\"p-stairs\" data-reveal=\"1\" style=\"--n:5;--rise:14px;column-gap:12px;height:auto\"><div class=\"p-stair\" style=\"--i:0\"><div class=\"p-box is-solid\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Brief</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">BRIEF.md</p></div></div><div class=\"p-stair\" style=\"--i:1\"><div class=\"p-box is-dashed\" data-role=\"ctx\" style=\"padding:8px 12px;opacity:.42\"><h3 style=\"font-size:20px;margin:0\">Spec</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">SPEC.md</p></div></div><div class=\"p-stair\" style=\"--i:2\"><div class=\"p-box is-dashed\" data-role=\"ctx\" style=\"padding:8px 12px;opacity:.42\"><h3 style=\"font-size:20px;margin:0\">Acceptance</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">ACCEPTANCE.md</p></div></div><div class=\"p-stair\" style=\"--i:3\"><div class=\"p-box is-dashed\" data-role=\"ctx\" style=\"padding:8px 12px;opacity:.42\"><h3 style=\"font-size:20px;margin:0\">Plan</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">PLAN.md</p></div></div><div class=\"p-stair\" style=\"--i:4\"><div class=\"p-box is-dashed\" data-role=\"ctx\" style=\"padding:8px 12px;opacity:.42\"><h3 style=\"font-size:20px;margin:0\">Tasks</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">TASKS.md</p></div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:18px\">这一节点亮 <b>Brief</b>：谁在什么场景下用，这次做到哪</div>",
      "steps": [
        "本章位置",
        "这一节补哪一层",
        "Brief 回答什么"
      ],
      "script": [
        "【操作提示｜停留课件 p13 第 1 步，指向章节地图上的 4.2；不切窗口】\n\n上一节我们拿到了一份对上版本的 JSON Crack 副本，要了一份能核对的简报，也跑通了一次最小用例。那句初始需求，到现在还只有一行字。",
        "【操作提示｜推进第 2 步，指向锚点图里实心的 Brief】\n\n这一节，需求方把更完整的想法写进了飞书里的一份需求笔记。我们要把它取回仓库，带着它去查源码，写出五层里的第一份文档：Brief。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p14】\n\nBrief 回答的是：谁在什么场景下用，这次做到哪里。可是，把需求原文贴进来，是不是就能直接写了？先看看原文写了什么。"
      ],
      "teaching": [],
      "source": "index.html#p13",
      "seconds": 90
    },
    {
      "id": "p14",
      "segment": "需求原文",
      "label": "需求方写了什么",
      "title": "需求方写了什么？",
      "lead": "这是需求方写在飞书里的需求笔记（课程合成材料）。先把原文读一遍，再看 Agent 怎样读到它。没有接入飞书 MCP 时，按实验说明把原文保存成快照，后面的步骤都一样。",
      "html": "<style>#p14 .x-note p,#p14 .x-note li{font-size:15px;line-height:1.4;margin:0}#p14 .x-note b,#p14 .x-note code{font-size:15px}</style><blockquote data-quote=\"需求笔记 note.md\" style=\"margin:0;padding:0;border:0;font-size:inherit;line-height:inherit\"><div class=\"p-box x-note\" data-role=\"us\" style=\"padding:12px 18px\"><div style=\"display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:22px\"><div><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 2px\">JSON 对比功能需求（草稿）</h3><p style=\"margin:0 0 6px;color:var(--p-muted)\">数据接口组 · 小林 · 2026 年 11 月</p><p style=\"margin:0\"><b>背景</b>　我们组平时要对比接口改动前后的返回结果，还有配置文件改动前后的内容。现在用 JSON Crack 看结构挺方便，但两份 JSON 只能来回切换着看，很容易漏掉改动。</p></div><div data-reveal=\"1\" style=\"margin-top:6px\"><b>希望做到</b><ol style=\"margin:2px 0 0;padding-left:22px\"><li>在 JSON Crack 里同时放两份 JSON（改之前、改之后），对比之后把不同的地方高亮出来。</li><li>数组也要支持。我们的数据里列表很多，比如商品列表、用户列表。</li><li>最好能只看变化的部分。大文件里没变的内容太多了，找起来很累。</li><li>删掉的字段也要能看出来，不能只显示改之后的样子。</li><li>有时候后端把数字改成了字符串，比如 <code>1</code> 变成 <code>\"1\"</code>，这种我们也想知道。</li><li>数据里可能有内部配置，最好不要上传到别的地方。</li><li>文件可能比较大，几千行的那种。</li><li>以后 VS Code 插件里也能用就更好了，这次先做网页版。</li></ol></div></div><div data-reveal=\"2\"><b>还没想清楚的</b><ul style=\"margin:4px 0 10px;padding-left:20px\"><li>后端返回的字段顺序有时会变，这算不算改动，组里意见不太一致。</li><li>列表中间插入一条之后，后面的元素怎么对上，我们也说不好。</li></ul><b>怎样算做好了</b><p style=\"margin:4px 0 0\">能一眼看出改了哪里，联调的时候少来回翻几次。</p><p style=\"margin:4px 0 0\">开发同学看完可以直接动手做，有问题再说。</p></div></div></div></blockquote><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:10px\">它在飞书里，不在仓库里：<b>Agent 怎样读到它？</b></div>",
      "steps": [
        "背景",
        "希望做到",
        "还没想清楚的",
        "它在哪里"
      ],
      "script": [
        "【操作提示｜停留课件 p14 第 1 步，指向标题、提出人和背景】\n\n这份需求笔记是数据接口组的小林写的。背景很清楚：他们经常要对比接口和配置改动前后的 JSON，用 JSON Crack 只能来回切换着看，容易漏掉改动。",
        "【操作提示｜推进第 2 步，从上到下指“希望做到”的八条】\n\n他们希望做到的有八条：同时放两份 JSON、高亮不同，数组也要支持，最好只看变化，删掉的字段也要能看出来，类型变了也想知道，不要上传，文件可能有几千行，以后 VS Code 插件也能用，这次先做网页版。",
        "【操作提示｜推进第 3 步，指向右栏】\n\n还有两件他们自己也没想清楚：字段顺序变了算不算改动，列表中间插入一条以后元素怎么对上。最后是怎样算做好：能一眼看出改了哪里。末尾还有一句，开发同学看完可以直接动手做。",
        "【操作提示｜推进第 4 步，指向底部横条；讲完进入 p15】\n\n这份笔记在飞书里，不在仓库里。Agent 要怎样读到它？可以复制粘贴，也可以让 Agent 自己去读。你那边没有接入飞书的话，按右上角的实验说明，把原文保存成一份快照，后面的步骤都一样。"
      ],
      "repro": {
        "label": "实验说明：用课程快照取得原文",
        "steps": [
          {
            "text": "在基线副本的根目录建好存放规格文档的目录。",
            "code": "mkdir -p docs/specs/sources"
          },
          {
            "text": "把下面的原文原样保存为 docs/specs/sources/requirement-note.md，不要改写。",
            "code": "# JSON 对比功能需求（草稿）\n\n> 课程合成材料：人物与团队均为虚构。\n\n**提出人**：数据接口组 · 小林\n**日期**：2026 年 11 月\n\n## 背景\n\n我们组平时要对比接口改动前后的返回结果，还有配置文件改动前后的内容。现在用 JSON Crack 看结构挺方便，但两份 JSON 只能来回切换着看，很容易漏掉改动。\n\n## 希望做到\n\n1. 在 JSON Crack 里同时放两份 JSON（改之前、改之后），对比之后把不同的地方高亮出来。\n2. 数组也要支持。我们的数据里列表很多，比如商品列表、用户列表。\n3. 最好能只看变化的部分。大文件里没变的内容太多了，找起来很累。\n4. 删掉的字段也要能看出来，不能只显示改之后的样子。\n5. 有时候后端把数字改成了字符串，比如 `1` 变成 `\"1\"`，这种我们也想知道。\n6. 数据里可能有内部配置，最好不要上传到别的地方。\n7. 文件可能比较大，几千行的那种。\n8. 以后 VS Code 插件里也能用就更好了，这次先做网页版。\n\n## 还没想清楚的\n\n- 后端返回的字段顺序有时会变，这算不算改动，组里意见不太一致。\n- 列表中间插入一条之后，后面的元素怎么对上，我们也说不好。\n\n## 怎样算做好了\n\n能一眼看出改了哪里，联调的时候少来回翻几次。\n\n开发同学看完可以直接动手做，有问题再说。"
          },
          {
            "text": "稍后写 Brief 时，在“来源”一节写明：原文来自课程快照，并记下保存时间。",
            "code": ""
          }
        ],
        "note": "讲师现场用飞书 MCP 读取同一份原文；用快照的学员，后面的调查与 Brief 步骤完全相同。"
      },
      "teaching": [],
      "source": "index.html#p14",
      "seconds": 120
    },
    {
      "id": "p15",
      "segment": "需求原文",
      "label": "MCP 是什么",
      "title": "MCP：让 Agent 调用外部工具",
      "lead": "MCP（Model Context Protocol）是让 Agent 连接外部工具的一种约定。客户端连上 MCP 服务，服务列出它提供的工具；Agent 决定调用哪个，工具的返回进入对话。讲师已在本机接好飞书 MCP，接入步骤与更多用法在 4.6。",
      "html": "<div class=\"p-flow\" style=\"--n:3;column-gap:60px\" data-reveal=\"0\"><div class=\"p-node\" data-role=\"agent\"><h3>Codex</h3><p>MCP 客户端</p></div><div class=\"p-node\" data-role=\"tool\"><h3>lark-mcp</h3><p>MCP 服务，在本机运行</p></div><div class=\"p-node\" data-role=\"ink\"><h3>飞书</h3><p>需求笔记所在的文档</p></div></div><div class=\"p-set is-solid\" data-role=\"tool\" data-reveal=\"1\" style=\"margin-top:14px;padding:10px 18px\"><h3 style=\"font-size:20px;margin:0 0 8px\">它列出的工具：名称、参数、说明</h3><div class=\"p-items\" style=\"display:flex;flex-direction:column;gap:6px\"><div class=\"p-item\" style=\"font-size:18px\"><code>wiki_v2_space_getNode</code>　解析知识库节点，拿到文档 ID</div><div class=\"p-item\" style=\"font-size:18px\"><code>docx_v1_document_rawContent</code>　按文档 ID 读取正文</div></div></div><p data-reveal=\"2\" style=\"margin:10px 0 0;font-size:19px\">Agent 决定调用哪个工具，返回进入对话，和第 2 章看到的工具返回是同一回事</p><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:10px\">它在本机运行、带着讲师的凭证，所以<b>只开放这两个读取工具</b></div>",
      "steps": [
        "三方",
        "工具列表",
        "调用与返回",
        "只开放读取"
      ],
      "script": [
        "【操作提示｜停留课件 p15 第 1 步，从左到右指三个节点】\n\n让 Agent 自己去读，靠的是 MCP。它是一种约定，让 Agent 能连接外部工具。这里有三方：Codex 是客户端，lark-mcp 是飞书官方提供的 MCP 服务，在我们本机运行，另一头是飞书里的云文档。",
        "【操作提示｜推进第 2 步，指向工具列表】\n\nMCP 服务会列出它能提供的工具，每个工具有名称、参数和说明。我这里只开了两个：一个解析知识库节点，拿到文档 ID；一个按文档 ID 读取正文。",
        "【操作提示｜推进第 3 步，指向中间那一行】\n\nAgent 看到这些工具，自己决定调用哪个，工具的返回进入对话。这和第二章我们打开请求看到的工具返回，是同一回事。",
        "【操作提示｜推进第 4 步，指向底部横条；讲完进入 p16】\n\n要注意的是，这个服务在本机运行，带着我的飞书凭证，能做什么取决于开放了哪些工具。所以这里只开放读取，不开写入，这和第一章讲的最小权限是同一个判断。接入的具体步骤和更多用法，放在 4.6 再讲。"
      ],
      "teaching": [],
      "source": "index.html#p15",
      "seconds": 120
    },
    {
      "id": "p18",
      "segment": "够不够",
      "label": "原文够不够决定行为",
      "title": "原文够不够让人决定行为？",
      "lead": "逐句看原文，会发现几种不同的话：愿望、约束、连需求方也没想清楚的，还有要回到代码里才能判断的。话写得再顺，也不会自己变成规则。",
      "html": "<style>#p18 .p-matrix span{padding:5px 10px}#p18 .p-chip{font-size:15px;padding:2px 10px}</style><div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) 150px\"><div class=\"is-head\" data-reveal=\"0\"><span>原文</span><span>这句话是</span></div><div><span data-reveal=\"0\" style=\"font-size:18px\">“在 JSON Crack 里同时放两份 JSON……把不同的地方高亮出来”</span><span data-reveal=\"1\"><span class=\"p-chip\" data-role=\"us\">愿望</span></span></div><div><span data-reveal=\"0\" style=\"font-size:18px\">“数组也要支持”</span><span data-reveal=\"1\"><span class=\"p-chip\" data-role=\"us\">愿望</span></span></div><div><span data-reveal=\"0\" style=\"font-size:18px\">“最好能只看变化的部分”</span><span data-reveal=\"1\"><span class=\"p-chip\" data-role=\"us\">愿望</span></span></div><div><span data-reveal=\"0\" style=\"font-size:18px\">“数据里可能有内部配置，最好不要上传到别的地方”</span><span data-reveal=\"1\"><span class=\"p-chip\" data-role=\"ink\">约束</span></span></div><div><span data-reveal=\"0\" style=\"font-size:18px\">“后端返回的字段顺序有时会变，这算不算改动，组里意见不太一致”</span><span data-reveal=\"1\"><span class=\"p-chip\" data-role=\"gate\">没想清楚</span></span></div><div><span data-reveal=\"0\" style=\"font-size:18px\">“文件可能比较大，几千行的那种”</span><span data-reveal=\"1\"><span class=\"p-chip\" data-role=\"ctx\">要回代码看</span></span></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\">还没说清：<b>什么算不同 · 数组怎样对上 · 只看变化时留下哪些</b></div>",
      "steps": [
        "逐句读",
        "这句话是什么",
        "还没说清的"
      ],
      "script": [
        "【操作提示｜停留课件 p18 第 1 步，从上到下指六句原文】\n\n原文读进来了，回到这一节的问题：这些话够不够让人决定实现行为？我们挑出六句，逐句看。",
        "【操作提示｜推进第 2 步，依次指右栏的标签】\n\n前三句是愿望：高亮不同、支持数组、只看变化。“不要上传”是一条约束。字段顺序那一句，需求方自己也没想清楚。“几千行”要回到代码里，看现有的能力才能判断。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p19】\n\n再看愿望本身，也有没说清的地方：什么算“不同”，数组的元素怎样对上，只看变化的时候还要留下哪些上下文。这些话写得再顺，也不会自己变成规则。接下来，带着这些问题去查代码。"
      ],
      "teaching": [],
      "source": "index.html#p18",
      "seconds": 90
    },
    {
      "id": "p21",
      "segment": "分开三类",
      "label": "事实与要人决定的",
      "title": "哪些是事实，哪些要人决定？",
      "lead": "有了原文和调查结果，就能把三类信息分开：愿望来自原文，事实要有源码或配置的出处，未决问题要人来决定。Agent 的建议可以连同依据记下，但仍是未决问题。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">愿望与目标</span><h3 style=\"margin:8px 0 6px\">同时放两份 JSON，对比后高亮不同</h3><p>依据：需求原文</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">已查实的事实</span><h3 style=\"margin:8px 0 6px\">图数据从哪个入口产生，节点上限由什么设定</h3><p>依据：源码与配置，附出处</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"gate\">未决问题</span><h3 style=\"margin:8px 0 6px\">键换序算不算差异，数组怎样对齐，删除的字段怎样显示</h3><p>依据：要人决定，留给 4.3</p></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:16px\">Agent 建议“数组按索引比较”：<b>记下建议和依据，它仍是未决问题</b></div>",
      "steps": [
        "愿望与目标",
        "已查实的事实",
        "未决问题",
        "Agent 的建议"
      ],
      "script": [
        "【操作提示｜停留课件 p21 第 1 步，指向第一张卡】\n\n有了原文，也查过了代码，就能把信息分成三类。第一类是愿望和目标，比如同时放两份 JSON、对比后高亮不同，依据是需求原文。",
        "【操作提示｜推进第 2 步，指向第二张卡】\n\n第二类是已经查实的事实，比如图数据从哪个入口产生、节点上限由什么设定。这一类每条都要附上源码或配置的出处。",
        "【操作提示｜推进第 3 步，指向第三张卡】\n\n第三类是未决问题：键换顺序算不算差异，数组怎样对齐，删除的字段怎样显示。这些要人来决定，留给下一节。",
        "【操作提示｜推进第 4 步，指向底部横条；讲完进入 p22】\n\nAgent 也会给建议，比如根据现有代码或常见做法，建议数组按索引比较。建议可以连同依据一起记下，但它仍然是未决问题，不会因为写得有道理就变成规则。"
      ],
      "teaching": [],
      "source": "index.html#p21",
      "seconds": 120
    },
    {
      "id": "p24",
      "segment": "自检与交接",
      "label": "两句话能当规则或授权吗",
      "title": "这两句话，能当规则或授权吗？",
      "lead": "判断一句话能不能直接用，先问它出自谁、有没有依据、由谁决定。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>Agent 建议“数组按索引比较”，能直接写进 Brief 当作已批准规则吗？</h3><div data-reveal=\"1\"><p>不能。记下建议和依据，采用与否要人决定，留在 Open 问题里，交给 4.3</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>原文最后一句“开发同学看完可以直接动手做”，算不算可以跳过 Open 问题的授权？</h3><div data-reveal=\"2\"><p>不算。这是需求方的说法，记下即可；会改变实现的问题还没定，就不能动手<br><a href=\"#p21\">回看三类信息</a></p></div></div></div></div>",
      "steps": [
        "两个问题",
        "Agent 的建议",
        "原文里的“直接动手”"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，指向暂停标记和两个问题；可以停顿几秒】\n\n来检查一下。两个问题：Agent 建议数组按索引比较，能不能直接写进 Brief，当作已批准的规则？原文最后那句“开发同学看完可以直接动手做”，算不算可以跳过未决问题的授权？可以暂停视频想一想。",
        "【操作提示｜推进第 2 步，揭示第 1 题答案】\n\n第一个，不能。这条建议和它的依据可以记下，但采用不采用，要人来决定，它留在 Open 问题里，交给下一节。",
        "【操作提示｜推进第 3 步，揭示第 2 题答案；讲完进入 p25】\n\n第二个，也不算。这是需求方的一句话，记下来就好。会改变实现的问题还没定，就不能动手。判断的时候先问三件事：这句话出自谁，有没有依据，由谁来决定。"
      ],
      "teaching": [],
      "source": "index.html#p24",
      "seconds": 90
    },
    {
      "id": "p25",
      "segment": "自检与交接",
      "label": "小结",
      "title": "这一节留下什么",
      "lead": "原文取回仓库并核对了来源，带着需求查清了相关的源码事实，写出了带出处的 Brief。下一节逐项决定 Open 问题里的行为。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:250px;font-size:22px\">出自谁<br>有没有依据<br>由谁决定</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">需求原文快照</li><li class=\"is-pass\">带来源和事实的 Brief</li><li class=\"is-pass\">Open 问题清单</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>4.3 要求写得再细，为什么还会跑偏？</h3><p>逐项决定 Open 问题里的行为</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p25 第 1 步，指向星形】\n\n回到开头的问题：贴上需求原文，就能直接写吗？不能。原文里有愿望、有约束，也有没想清楚的地方。遇到一句话，先问它出自谁、有没有依据、由谁决定。",
        "【操作提示｜推进第 2 步，依次指三项】\n\n这一节我们留下了三样东西：一份需求原文的快照，一份带着来源和源码事实的 Brief，还有一张 Open 问题清单。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节，我们逐项决定 Open 问题里的行为，让“高亮不同”有确定的含义。"
      ],
      "teaching": [],
      "source": "index.html#p25",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "需求原文",
      "seconds": 240
    },
    {
      "label": "够不够",
      "seconds": 90
    },
    {
      "label": "分开三类",
      "seconds": 120
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};
