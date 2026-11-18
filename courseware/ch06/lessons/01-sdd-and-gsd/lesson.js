window.lesson = {
  "title": "已有规格，为什么还要再接一套框架",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.01",
  "summary": "先用一页回顾第 4、5 章已经是规格驱动，再认清 GSD 是用来接手已有规格的社区实现，立住不能另起规划覆盖已有文档的边界。",
  "prep": [
    "在通过第 5 章验收的 JSON Crack 课程副本上确认 git status --short 无未提交改动，docs/specs/ 五份规格齐全。",
    "确认本机 node --version 为 v24+、npm --version 为 10+，满足 @opengsd/gsd-core@1.13.0 的运行门槛。",
    "开录前单独检查 npx @opengsd/gsd-core@1.13.0 --codex --local 的写入目录与权限声明，不在上屏命令中改用 @latest。",
    "若当前录制环境 Sub-agent 派发受限，提前备好标明来源的回放记录，并在口播中如实区分实际派发与降级观察。"
  ],
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "已有规格，为什么还要再接一套框架",
      "title": "已有规格，为什么还要再接一套框架？",
      "lead": "第 4、5 章已经留下五层规格和通过验收的 JSON Diff；本章在已有项目上接工作流，不推倒重来",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>6.1</b>定位 SDD 与 GSD</li><li><b>6.2</b>构建工作流</li><li><b>6.3</b>验收流程</li><li><b>6.4</b>完成 CR-01</li><li><b>6.5</b>应用招数</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>第 4、5 章已交出</h3><span class=\"p-tag\" data-role=\"ctx\">既有成果</span></div><p><code>docs/specs/</code> 五层规格 ＋ 已验收的 JSON Diff</p></div><div class=\"p-join\"><span>第 6 章接着做</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"us\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>接入社区工作流</h3><span class=\"p-tag\" data-role=\"us\">增量变更</span></div><p>组织摸底、验证与规则变更，不从零再建一套</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">本节问题：手里已有规格，为什么还要再接一套框架？先认清名字和边界，再上手</div>",
      "steps": [
        "本章位置",
        "第 4、5 章交出什么",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向顶部五节章节地图上的 6.1；不切窗口】\n\n从这一章开始，我们进入第六章。先看章节地图上的位置：全章一共五节，这一节是 6.1，我们先认清 SDD 和 GSD 的关系，再做第一次上手。",
        "【操作提示｜推进第 2 步，指向左侧第 4、5 章留下的规格与功能，再指向右侧第 6 章的动作；不切窗口】\n\n先看左边：第 4 章已经在 JSON Crack 里写出了五层规格，第 5 章也按这套规格做出了通过本章验收的 JSON Diff。到了第六章，我们不是推倒重来、从零再建一套，而是在这份已有工程和既有规格上接一套社区工作流，完成一次小型规则变更。",
        "【操作提示｜推进第 3 步，指向下方本节核心问题；讲完进入 p02】\n\n这就会引出一个很直接的问题：手里已经有写好的规格了，为什么还要再接一套框架？开场我们先不敲安装命令，先把名字和边界认清楚。第 4、5 章已经在做的事，为什么本身就叫 SDD？"
      ],
      "teaching": [],
      "source": "index.html#p01",
      "seconds": 90
    },
    {
      "id": "p02",
      "segment": "认清 SDD 与 GSD",
      "label": "第 4、5 章已经在做的，为什么叫 SDD",
      "title": "前面两章在做的，为什么叫 SDD？",
      "lead": "用三句话收住对 SDD 的回顾，不再重讲第 4 章的五层定义；说完立刻进入 GSD。",
      "html": "<div class=\"p-stairs\" data-reveal=\"0\" style=\"--n:5;--rise:14px;column-gap:12px;height:auto\"><div class=\"p-stair\" style=\"--i:0\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Brief</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">BRIEF.md</p></div></div><div class=\"p-stair\" style=\"--i:1\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Spec</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">SPEC.md</p></div></div><div class=\"p-stair\" style=\"--i:2\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Acceptance</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">ACCEPTANCE.md</p></div></div><div class=\"p-stair\" style=\"--i:3\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Plan</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">PLAN.md</p></div></div><div class=\"p-stair\" style=\"--i:4\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Tasks</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">TASKS.md</p></div></div></div><div class=\"p-grid\" style=\"--n:3;margin-top:8px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"us\" style=\"margin-bottom:6px\">1 · 名字定位</span><h3 style=\"font-size:23px;margin-bottom:4px\">前面两章已是 SDD</h3><p style=\"font-size:18px\">不依赖特定框架，照样是规格驱动开发</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"ctx\" style=\"margin-bottom:6px\">2 · 工作顺序</span><h3 style=\"font-size:23px;margin-bottom:4px\">先写清行为再改码</h3><p style=\"font-size:18px\">由人批准可观察规则与案例，再分片实现</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\" style=\"padding:10px 14px\"><span class=\"p-tag\" data-role=\"ok\" style=\"margin-bottom:6px\">3 · 权威位置</span><h3 style=\"font-size:23px;margin-bottom:4px\">规格留在 docs/specs/</h3><p style=\"font-size:18px\">换工具或接框架，都不重写已批准的文档</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:8px;padding:7px 18px;font-size:20px\">三句话定位完毕：前面已经是工具无关的 SDD；接下来看社区实现 <b>GSD</b> 管什么</div>",
      "steps": [
        "前面两章已是 SDD",
        "先写清行为再改码",
        "规格不随工具重写"
      ],
      "script": [
        "【操作提示｜停留课件 p02 第 1 步，指向缩小版五层规格阶梯图与第一张卡片；不切窗口】\n\n对 SDD 的回顾，我们只留三句话，不再把第 4 章讲过的五层定义重讲一遍。第一句：第 4、5 章已经在做的，就是规格驱动开发，也就是 SDD。你看上面这五级台阶，从 Brief 到 Tasks 都已经在仓库里落了盘。",
        "【操作提示｜推进第 2 步，指向中间第二张卡片；不切窗口】\n\n第二句：SDD 的核心不是绑死某一个工具，而是工作顺序——先把要改的可观察行为写清楚、由人批准，再去动生产代码。",
        "【操作提示｜推进第 3 步，指向右侧第三张卡片和底部过渡条；讲完进入 p03】\n\n第三句：权威规格就写在 docs/specs/ 目录里。哪怕换一套工具或者引入新框架，也不该把已经批准的规格推翻重写。这三句话立住之后，我们马上看：GSD 又是什么？"
      ],
      "teaching": [],
      "source": "index.html#p02",
      "seconds": 90
    },
    {
      "id": "p03",
      "segment": "认清 SDD 与 GSD",
      "label": "那么 GSD 是什么",
      "title": "那么 GSD 是什么？",
      "lead": "GSD 是开源社区里的一套 SDD 工作流实现，用来接手已有规格，把调查、规划、执行和验证串起来。课程锁定固定版本，使用前先审查。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;gap:18px\"><div class=\"p-box is-dashed\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>它不是什么</h3><span class=\"p-tag\" data-role=\"gate\">别混淆</span></div><p>不是另一份产品需求，也不是用来替代 <code>docs/specs/</code> 的新规格</p></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b><span>角色边界</span></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:14px 18px\"><div class=\"p-head\"><h3>它是什么</h3><span class=\"p-tag\" data-role=\"tool\">社区实现</span></div><p>接手已有项目与规格，把调查、规划、执行和验证组织成固定阶段</p></div></div><div class=\"p-code\" data-reveal=\"2\" style=\"margin-top:12px\"><div class=\"p-code-head\"><span>课程锁定版本（先审查再安装，不追 @latest）</span><span>MIT · Node.js &gt;= 24</span></div><pre><span style=\"display:block\">repo:   open-gsd/gsd-core (v1.13.0)</span><span class=\"hl\">commit: b5b9814f033b6d32810562fd4068e1f107da29ec</span><span style=\"display:block\">note:   录制前须实机核验安装与派发，未实测前不宣称已走通</span></pre></div>",
      "steps": [
        "它不是新需求",
        "它是社区工作流实现",
        "锁定版本，先看再装"
      ],
      "script": [
        "【操作提示｜停留课件 p03 第 1 步，指向左侧卡片“不是另一份需求”；不切窗口】\n\n先把最容易混淆的一点撇清：GSD 不是另一种产品需求，也不是拿来替换 docs/specs/ 的新规格模板。",
        "【操作提示｜推进第 2 步，指向右侧卡片“社区里的一套 SDD 实现”；不切窗口】\n\n它是开源社区里的一套 SDD 工作流实现。当我们接手一个已经有代码、有规格的项目时，它帮我们把代码库摸底、阶段讨论、任务拆分、执行和验证串成固定的步骤。",
        "【操作提示｜推进第 3 步，指向下方固定版本信息块与底部链接；讲完进入 p03a】\n\n课程固定使用 open-gsd/gsd-core 的 v1.13.0 版本，MIT 许可证，要求 Node.js 二十四以上，具体 commit 哈希已经印在画面上，右上角也收着本地审查与安装的参考步骤。要注意，在录制环境完成实机核验之前，我们不宣称这套操作已经走通。那官方仓库自己是怎么介绍 GSD Core 的？我们打开原文看一眼。"
      ],
      "repro": {
        "label": "参考命令：版本核对与本地安装",
        "steps": [
          {
            "text": "在安装前先核对本机 Node.js 与 npm 版本（GSD 1.13.0 发布包要求 Node.js 24+、npm 10+）。",
            "code": "node --version\nnpm --version"
          },
          {
            "text": "查看固定版本包信息与许可证声明，不使用浮动的 @latest。",
            "code": "npm view @opengsd/gsd-core@1.13.0 version license engines"
          },
          {
            "text": "在 JSON Crack 课程副本根目录做本地安装示例；安装后需新开 Codex CLI 会话。正式实操留在 p06 演练。",
            "code": "npx @opengsd/gsd-core@1.13.0 --codex --local"
          }
        ],
        "note": "本折叠框仅供核对固定版本与环境门槛；本页只做概念定位，尚不执行安装。"
      },
      "refs": [
        {
          "kind": "live",
          "group": "版本依据",
          "text": "GSD Core v1.13.0 Release",
          "url": "https://github.com/open-gsd/gsd-core/releases/tag/v1.13.0"
        }
      ],
      "teaching": [],
      "source": "index.html#p03",
      "seconds": 90
    },
    {
      "id": "p03a",
      "segment": "认清 SDD 与 GSD",
      "layout": "evidence-scene",
      "label": "官方仓库怎么定位 GSD Core",
      "title": "官方仓库怎么定位 GSD Core？",
      "lead": "打开固定提交下的官方 README，看它怎样描述自己的定位、为什么拆给独立 subagent，以及每个阶段重复哪五步。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:340px\" data-reveal=\"0\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>github.com · open-gsd/gsd-core · v1.13.0 README</div><a href=\"external/github-gsd-core-overview.png\"><img src=\"external/github-gsd-core-overview.png\" alt=\"GSD Core 官方 README 中 What is GSD Core 与 How it works 截图\"></a></div><p class=\"p-shot-note\" style=\"font-size:19px\" data-reveal=\"1\">五步循环 Discuss → Plan → Execute → Verify → Ship；课程固定锁在 v1.13.0，不追 @latest</p></div>",
      "steps": [
        "看官方定位与五步循环",
        "锁固定版本，不追 latest"
      ],
      "script": [
        "【操作提示｜停留课件 p03a 第 1 步，指向截图中 What is GSD Core 与 How it works 两段；不切窗口】\n\n这是固定提交下官方 README 的原文截图。第一段写得很明白：GSD Core 是一套面向 Claude Code、Codex 等编程智能体的上下文工程与规格驱动开发框架。它解决的一个痛点叫 context rot——主对话越聊越长时质量下降，所以它把繁重的调查、规划和执行拆给带全新上下文的 subagent 去跑，让主会话保持精简。再往下看 How it works，每个阶段都走同样的五步：Discuss、Plan、Execute、Verify、Ship。",
        "【操作提示｜推进第 2 步，指向截图下方说明与页底原文链接；讲完进入 p04】\n\n官方快速开始里会写安装 latest，但做工程项目和录播跟做时，我们绝不追滚动分支，统一锁在 v1.13.0 这一个固定提交上。看清了它的定位，接下来就要立住全章最硬的一条边界：把 GSD 接进项目时，它能接手什么，不能推翻什么？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "GSD Core 固定提交 README",
          "url": "https://github.com/open-gsd/gsd-core/tree/b5b9814f033b6d32810562fd4068e1f107da29ec#what-is-gsd-core"
        }
      ],
      "teaching": [],
      "source": "index.html#p03a",
      "seconds": 60
    },
    {
      "id": "p04",
      "segment": "认清 SDD 与 GSD",
      "label": "GSD 能接手什么，不能推翻什么",
      "title": "GSD 能接手什么，不能推翻什么？",
      "lead": "进场前立住全章最硬的一条边界：框架用来接手既有规格和代码，绝不能另起一套规划去覆盖已经批准的文档。",
      "html": "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:stretch\"><div class=\"p-set is-solid\" data-role=\"ok\" data-reveal=\"0\"><h3>能接手的既有资产</h3><div class=\"p-items\"><div class=\"p-item is-picked\"><code>docs/specs/</code> 已批准的五层规格<span class=\"p-mark\">需求依据</span></div><div class=\"p-item\">第 5 章已通过验收的 JSON Diff 实现</div><div class=\"p-item\">本地可定位、可回看的提交检查点</div></div></div><div class=\"p-set\" data-role=\"gate\" data-reveal=\"1\"><h3>不能推翻的三条红线</h3><div class=\"p-items\"><div class=\"p-item is-wrong\">另起一套规划，覆盖 <code>docs/specs/</code></div><div class=\"p-item is-wrong\">把框架生成的流程文件当成新产品需求</div><div class=\"p-item is-wrong\">把已完成的 JSON Diff 重列成全套新任务</div></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">权威需求始终留在 <code>docs/specs/</code>；GSD 负责组织后续工作，无权改写既有依据</div>",
      "steps": [
        "能接手的既有资产",
        "不能推翻的三条红线",
        "权威需求留在 docs/specs/"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步，指向左侧绿色实线集合“能接手的既有资产”；不切窗口】\n\n看左边的集合。GSD 进场时，能接手的是我们已经做出来的三样资产：docs/specs/ 里经人批准的五层规格、第 5 章已经通过验收的 JSON Diff 功能，以及本地可核对的提交检查点。",
        "【操作提示｜推进第 2 步，指向右侧红色虚线集合“不能推翻的三条红线”；不切窗口】\n\n再看右边三条红线：第一，不能另起一套规划去覆盖已有文档；第二，不能把框架自动生成的流程文件当成新需求；第三，已经做完并验收的 JSON Diff，绝不能被重新列成全套待开发任务。",
        "【操作提示｜推进第 3 步，指向底部深色结论条；讲完进入 p05】\n\n记住底下这句话：权威需求始终留在 docs/specs/。GSD 是拿来组织后续工作的，不是拿来篡改既有依据的。边界立住了，第一次上手接触它时，我们该看什么、不做什么？"
      ],
      "teaching": [],
      "source": "index.html#p04",
      "seconds": 90
    },
    {
      "id": "p05",
      "segment": "第一次上手",
      "label": "第一次上手，应该看什么、不做什么",
      "title": "第一次上手，先看什么、不做什么？",
      "lead": "切去现场前先核对四项检查点，并划清本节只做只读摸底（onboard 与一次 mapper 委派），不导入改规格，也不改生产代码。",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\" style=\"font-size:20px\">上手前四项检查点：<b>v1.13.0 版本与权限</b> · <b>第 5 章检查点可定位</b> · <b>docs/specs/ 完好</b> · <b>工作区干净</b></div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:12px\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>本节只做（只读摸底）</h3><span class=\"p-tag\" data-role=\"tool\">6.1 范围</span></div><ul class=\"p-exits\" style=\"margin-top:10px;gap:8px\"><li class=\"is-pass\" style=\"font-size:20px\">运行 <code>$gsd-onboard</code> 认识现有仓库</li><li class=\"is-pass\" style=\"font-size:20px\">发起一次实际 mapper 调查，生产代码只读</li><li class=\"is-pass\" style=\"font-size:20px\">主 Agent 抽查源码出处与跨文档结论</li></ul></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"padding:16px 20px\"><div class=\"p-head\"><h3>本节不做（留给后续）</h3><span class=\"p-tag\" data-role=\"gate\">严守边界</span></div><ul class=\"p-exits\" style=\"margin-top:10px;gap:8px\"><li class=\"is-stop\" style=\"font-size:20px\">不执行完整规格导入，不提前批准 CR-01</li><li class=\"is-stop\" style=\"font-size:20px\">不修改任何生产代码或已有五层规格</li><li class=\"is-stop\" style=\"font-size:20px\">不把已验收功能重拆成全套待开发任务</li></ul></div></div>",
      "steps": [
        "上手前四项检查点",
        "本节只做只读摸底",
        "本节不越界改代码"
      ],
      "script": [
        "【操作提示｜停留课件 p05 第 1 步，指向顶部四项上手前检查点；不切窗口】\n\n切进终端之前，先核对四项起点：固定版本号与许可证权限看过没有、第 5 章留下的本地检查点能不能定位、docs/specs/ 五份文件是不是完好、当前工作区干不干净。",
        "【操作提示｜推进第 2 步，指向左下“本节只做”卡片；不切窗口】\n\n这一节的第一次接触只做两件事：跑一次 onboard 认识现有工程，再发起一次实际的 mapper 委派，而且全程保持生产代码只读，由主 Agent 抽查源码出处。",
        "【操作提示｜推进第 3 步，指向右下“本节不做”卡片；讲完进入 p05a】\n\n凡是越过摸底边界的事，这一节都不碰：不导入并改写规格，不提前批准 CR-01，也不改一行生产代码。那刚才提到的四个 mapper 到底怎么分工，调查出来的结果又由谁负责核对？我们看一张结构图。"
      ],
      "teaching": [],
      "source": "index.html#p05",
      "seconds": 90
    },
    {
      "id": "p05a",
      "segment": "第一次上手",
      "label": "四个 mapper 怎么分工，谁来核对结果",
      "title": "四个 mapper 怎么分工，谁来核对？",
      "lead": "GSD 的完整调查把任务按 tech、arch、quality、concerns 分给四个独立上下文角色，分别写入 .planning/codebase/ 的七份文档；主 Agent 与人仍须抽查源码依据。",
      "html": "<div style=\"display:flex;flex-direction:column;align-items:center;gap:6px;min-width:0\"><svg style=\"display:block;max-width:100%;height:auto;max-height:306px\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lesson-diagram\" viewBox=\"0 0 1118 336\" width=\"1118\" height=\"336\"><defs><marker id=\"rd-arrow-gsd-mapper-roles\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"8\" markerHeight=\"8\" orient=\"auto\"><path d=\"M0 0L10 5L0 10z\" fill=\"#5B6573\"/></marker></defs><g data-reveal=\"0\"><rect x=\"8\" y=\"18\" width=\"252\" height=\"142\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"26\" y=\"52\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"23\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">JSON Crack 源码</text></g><g data-reveal=\"0\"><text x=\"26\" y=\"84\" style=\"font-family:'Course Mono',monospace\" font-size=\"18\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">apps/www · packages/</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"102\" width=\"214\" height=\"40\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"133\" y=\"129\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"middle\">生产代码只读 · 禁改</text></g><g data-reveal=\"0\"><rect x=\"8\" y=\"178\" width=\"252\" height=\"142\" rx=\"10\" fill=\"#F2EDE1\" stroke=\"#6E6043\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"26\" y=\"212\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"23\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"start\">已有五层规格</text></g><g data-reveal=\"0\"><text x=\"26\" y=\"244\" style=\"font-family:'Course Mono',monospace\" font-size=\"18\" font-weight=\"400\" fill=\"#6E6043\" text-anchor=\"start\">docs/specs/*.md</text></g><g data-reveal=\"0\"><rect x=\"26\" y=\"262\" width=\"214\" height=\"40\" rx=\"10\" fill=\"#E3F2E6\" stroke=\"#15803D\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"0\"><text x=\"133\" y=\"289\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#15803D\" text-anchor=\"middle\">权威需求 · 禁止覆盖</text></g><g data-reveal=\"1\"><rect x=\"312\" y=\"10\" width=\"482\" height=\"316\" rx=\"10\" fill=\"none\" stroke=\"#5A51D1\" stroke-width=\"2\" stroke-dasharray=\"8 6\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"330\" y=\"38\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"19\" font-weight=\"700\" fill=\"#5A51D1\" text-anchor=\"start\">四个 mapper 独立上下文 → 分区写入 .planning/codebase/</text></g><g data-reveal=\"1\"><path d=\"M264 92L322 92\" stroke=\"#5B6573\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-mapper-roles)\"/></g><g data-reveal=\"1\"><path d=\"M264 246L322 246\" stroke=\"#5B6573\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-mapper-roles)\"/></g><g data-reveal=\"1\"><rect x=\"328\" y=\"54\" width=\"112\" height=\"52\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"384\" y=\"87\" style=\"font-family:'Course Mono',monospace\" font-size=\"21\" font-weight=\"700\" fill=\"#2A2380\" text-anchor=\"middle\">tech</text></g><g data-reveal=\"1\"><path d=\"M444 80L474 80\" stroke=\"#5A51D1\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-mapper-roles)\"/></g><g data-reveal=\"1\"><rect x=\"478\" y=\"54\" width=\"300\" height=\"52\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"492\" y=\"78\" style=\"font-family:'Course Mono',monospace\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">STACK.md · INTEGRATIONS.md</text></g><g data-reveal=\"1\"><text x=\"492\" y=\"98\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">技术栈与外部集成</text></g><g data-reveal=\"1\"><rect x=\"328\" y=\"120\" width=\"112\" height=\"52\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"384\" y=\"153\" style=\"font-family:'Course Mono',monospace\" font-size=\"21\" font-weight=\"700\" fill=\"#2A2380\" text-anchor=\"middle\">arch</text></g><g data-reveal=\"1\"><path d=\"M444 146L474 146\" stroke=\"#5A51D1\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-mapper-roles)\"/></g><g data-reveal=\"1\"><rect x=\"478\" y=\"120\" width=\"300\" height=\"52\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"492\" y=\"144\" style=\"font-family:'Course Mono',monospace\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">ARCHITECTURE.md · STRUCTURE.md</text></g><g data-reveal=\"1\"><text x=\"492\" y=\"164\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">模块边界与目录入口</text></g><g data-reveal=\"1\"><rect x=\"328\" y=\"186\" width=\"112\" height=\"52\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"384\" y=\"219\" style=\"font-family:'Course Mono',monospace\" font-size=\"21\" font-weight=\"700\" fill=\"#2A2380\" text-anchor=\"middle\">quality</text></g><g data-reveal=\"1\"><path d=\"M444 212L474 212\" stroke=\"#5A51D1\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-mapper-roles)\"/></g><g data-reveal=\"1\"><rect x=\"478\" y=\"186\" width=\"300\" height=\"52\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"492\" y=\"210\" style=\"font-family:'Course Mono',monospace\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">CONVENTIONS.md · TESTING.md</text></g><g data-reveal=\"1\"><text x=\"492\" y=\"230\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">编码规范与测试现状</text></g><g data-reveal=\"1\"><rect x=\"328\" y=\"252\" width=\"112\" height=\"52\" rx=\"10\" fill=\"#EDEBFB\" stroke=\"#5A51D1\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"384\" y=\"285\" style=\"font-family:'Course Mono',monospace\" font-size=\"21\" font-weight=\"700\" fill=\"#2A2380\" text-anchor=\"middle\">concerns</text></g><g data-reveal=\"1\"><path d=\"M444 278L474 278\" stroke=\"#5A51D1\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-mapper-roles)\"/></g><g data-reveal=\"1\"><rect x=\"478\" y=\"252\" width=\"300\" height=\"52\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#6E6043\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"1\"><text x=\"492\" y=\"276\" style=\"font-family:'Course Mono',monospace\" font-size=\"16\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">CONCERNS.md</text></g><g data-reveal=\"1\"><text x=\"492\" y=\"296\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">潜在风险与遗留问题</text></g><g data-reveal=\"2\"><path d=\"M798 168L842 168\" stroke=\"#243042\" stroke-width=\"2.5\" fill=\"none\" marker-end=\"url(#rd-arrow-gsd-mapper-roles)\"/></g><g data-reveal=\"2\"><rect x=\"846\" y=\"18\" width=\"264\" height=\"302\" rx=\"10\" fill=\"#E8EAEE\" stroke=\"#243042\" stroke-width=\"2.5\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"866\" y=\"54\" style=\"font-family:'Course Title','Course Sans',sans-serif\" font-size=\"24\" font-weight=\"400\" fill=\"#243042\" text-anchor=\"start\">主 Agent + 我们</text></g><g data-reveal=\"2\"><rect x=\"864\" y=\"74\" width=\"228\" height=\"58\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"878\" y=\"99\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">1. 抽查源码出处</text></g><g data-reveal=\"2\"><text x=\"878\" y=\"122\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">不拿文档行数当事实</text></g><g data-reveal=\"2\"><rect x=\"864\" y=\"144\" width=\"228\" height=\"58\" rx=\"10\" fill=\"#FFFDF7\" stroke=\"#243042\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"878\" y=\"169\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#243042\" text-anchor=\"start\">2. 裁决跨文档冲突</text></g><g data-reveal=\"2\"><text x=\"878\" y=\"192\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#5B6573\" text-anchor=\"start\">未证实项明确标待核对</text></g><g data-reveal=\"2\"><rect x=\"864\" y=\"214\" width=\"228\" height=\"88\" rx=\"10\" fill=\"#FCE6DD\" stroke=\"#D9481C\" stroke-width=\"2\" filter=\"url(#p-rough)\"/></g><g data-reveal=\"2\"><text x=\"878\" y=\"241\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#AC3615\" text-anchor=\"start\">3. 守住已完成边界</text></g><g data-reveal=\"2\"><text x=\"878\" y=\"265\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"start\">不把已验收的 JSON Diff</text></g><g data-reveal=\"2\"><text x=\"878\" y=\"287\" style=\"font-family:'Course Sans',sans-serif\" font-size=\"16\" font-weight=\"400\" fill=\"#AC3615\" text-anchor=\"start\">重新拆成全套待开发任务</text></g></svg><p class=\"source-note\">据 open-gsd/gsd-core v1.13.0 固定提交 codebase mapper 分区设计与 OpenAI Codex Subagents 文档绘制；Brooks/Conway 为协作成本类比</p></div>",
      "steps": [
        "左侧源码只读与规格禁改",
        "四个角色分区写七份文档",
        "主 Agent 与人抽查把关"
      ],
      "script": [
        "【操作提示｜停留课件 p05a 第 1 步，指向示意图左侧源码框与五层规格框；不切窗口】\n\n先看图的最左边。调查面对的是两份输入：上面是 JSON Crack 的生产源码，标着只读禁改；下面是 docs/specs/ 五层规格，标着权威需求、禁止覆盖。",
        "【操作提示｜推进第 2 步，指向中间虚线框内的四个 mapper 角色及右侧对应的七份文档；不切窗口】\n\n再看中间。GSD 的 map-codebase 会按四个职责派发 subagent：tech 负责摸清技术栈与外部集成，写进 STACK.md 和 INTEGRATIONS.md；arch 梳理架构与目录入口，写进 ARCHITECTURE.md 和 STRUCTURE.md；quality 检查编码规范与测试现状，写进 CONVENTIONS.md 和 TESTING.md；concerns 专门找遗留包袱与风险点，写进 CONCERNS.md。四个角色各自用独立上下文读取代码，写不同的文件，互不覆盖。",
        "【操作提示｜推进第 3 步，指向右侧“主 Agent + 我们”把关框及底部官方链接；讲完进入 p06】\n\n但分工能隔离上下文，却省不掉协作与核对成本——这就像软件工程里 Brooks 和 Conway 提醒过的组织沟通成本。而且 OpenAI 官方 Subagents 文档也专门提醒：嘴上叫智能体别改文件，不等于真正的只读沙箱边界。所以看最右边：主 Agent 和我们必须亲自抽查源码行号出处、裁决跨文档冲突，拦住任何把已验收功能重列为新任务的倾向。准备好了，下一步切去现场核对起点并发出请求。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方依据",
          "text": "Codex 官方文档：Subagents",
          "url": "https://learn.chatgpt.com/codex/agent-configuration/subagents"
        },
        {
          "kind": "live",
          "group": "框架源码",
          "text": "GSD Core v1.13.0 固定源码",
          "url": "https://github.com/open-gsd/gsd-core/tree/b5b9814f033b6d32810562fd4068e1f107da29ec"
        }
      ],
      "teaching": [],
      "source": "index.html#p05a",
      "seconds": 90
    },
    {
      "id": "p06",
      "segment": "第一次上手",
      "label": "当前副本对得上起点吗？第一次接触该怎么发出",
      "title": "当前副本对得上起点吗？第一次接触该怎么发出？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写 Agent 回答或运行结果</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p06 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p06",
      "seconds": 30
    },
    {
      "id": "p07",
      "segment": "第一次上手",
      "label": "怎样判断这次上手没有把已有规格覆盖掉",
      "title": "怎样判断这次上手没有把已有规格覆盖掉？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写 Agent 回答或运行结果</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p07 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p07",
      "seconds": 30
    },
    {
      "id": "p08",
      "segment": "判断与自检",
      "label": "第一次接触做完了，是不是就可以开始改规则了",
      "title": "摸底做完了，现在就能改规则吗？",
      "lead": "第一次接触做完后，先看我们处在本章四步路线里的哪一格，判断现在能不能直接动手改规则和生产代码。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:12px 18px\"><div class=\"p-head\"><h3 style=\"font-size:24px\">学员判断：摸底文档生成好了，现在就能直接改规则和代码吗？</h3><span class=\"p-tag\" data-role=\"us\">先想一步</span></div></div><div class=\"p-flow\" style=\"--n:4;column-gap:32px;margin-top:12px\" data-reveal=\"1\"><div class=\"p-node\" data-role=\"ok\"><span class=\"p-num\">6.1 · 当前停在这</span><h3>认清边界与摸底</h3><p>规格未丢，完成只读抽查</p></div><div class=\"p-node\" data-role=\"ctx\" style=\"opacity:.65\"><span class=\"p-num\">6.2 · 下一步</span><h3>明确 CR-01 并建流</h3><p>导入规格，排验证矩阵</p></div><div class=\"p-node\" data-role=\"ctx\" style=\"opacity:.65\"><span class=\"p-num\">6.3 · 再下一步</span><h3>验收工作流</h3><p>核对去向，拦住跑偏</p></div><div class=\"p-node\" data-role=\"ctx\" style=\"opacity:.65\"><span class=\"p-num\">6.4 · 最后实施</span><h3>红绿测试与 UAT</h3><p>最小修改并人工验收</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\"><b>还不可以</b>：本节只完成定位与只读摸底；指向 CR-01 的工作流要到 6.2 才建立</div>",
      "steps": [
        "先做判断",
        "看清四步路线位置",
        "本节还不改规则"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步，指向本节判断问题；停顿数秒；不切窗口】\n\n从操作记录退回来，先做一个判断：第一次接触做完了，调查文档也写出来了，现在是不是就可以直接动手改规则、改代码了？",
        "【操作提示｜推进第 2 步，指向四步工作流图中的第 1 步当前位置与后续三步；不切窗口】\n\n看这条四步路线就清楚了：还不可以。我们现在刚走完第一节的定位与只读摸底，后面还有三道关没过——6.2 才亮出变更目标 CR-01 并建立工作流，6.3 要先验收这条流程有没有跑偏，到 6.4 才会写失败测试和改代码。",
        "【操作提示｜推进第 3 步，指向底部结论条；讲完进入 p09】\n\n所以这一节只证明两件事：已有规格没被冲掉，我们也真正做过一次经抽查的只读委派。接下来暂停一下，用一道自检题检验刚才那条硬边界。"
      ],
      "teaching": [],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "判断与自检",
      "label": "框架初始化时生成了另一套规划文档，哪种做法对",
      "title": "初始化多出一套规划文档，怎么处理？",
      "lead": "框架初始化时若生成了新的规划材料，请先暂停判断下面两种做法哪一种守住了本章边界，再看盖章结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先比较两种做法，自己选定再往下看</span><div class=\"p-quiz\" style=\"margin-top:12px\"><div class=\"p-q\" data-role=\"gate\"><div class=\"p-say\">做法 A：用框架新生成的规划覆盖原来的五层规格，后面全按新的走</div><span class=\"p-stamp\" data-role=\"gate\" data-reveal=\"1\">✗ 越界覆盖</span><div style=\"margin-top:8px;font-size:19px;color:#A8350F\" data-reveal=\"1\">已批准的 <code>docs/specs/</code> 是需求依据，覆盖后会丢失前面锁定的产品边界</div></div><div class=\"p-q\" data-role=\"ok\"><div class=\"p-say\">做法 B：保留已有规格作为需求依据，把新生成的材料当成待核对的工作资产</div><span class=\"p-stamp\" data-role=\"ok\" data-reveal=\"2\">✓ 守住依据</span><div style=\"margin-top:8px;font-size:19px;color:#11652F\" data-reveal=\"2\">框架产物只管辅助调查与执行进度，每一条都须对回既有规格核对</div></div></div>",
      "steps": [
        "暂停比较两种做法",
        "做法 A：越界覆盖",
        "做法 B：守住既有依据"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，指向暂停标签与左右两张题卡；停顿数秒；不切窗口】\n\n假设框架初始化的时候，顺手生成了另一套全新的规划文档。请先暂停几秒，比较屏幕上这两种做法，各自选出你的判断。",
        "【操作提示｜推进第 2 步，指向左侧第一张题卡上的红色印章与解析；不切窗口】\n\n看第一种做法：直接用新生成的规划覆盖原来的五层规格，后面全按新的走。这显然不对。docs/specs/ 里是我们逐条核实、批准过的依据，一旦被覆盖，前面定好的边界条件就全丢了。",
        "【操作提示｜推进第 3 步，指向右侧第二张题卡上的绿色印章与解析；讲完进入 p10】\n\n再看第二种做法：保留已有规格作为唯一的需求依据，把框架新生成的材料当成待核对的工作资产，逐条比对。这才是稳妥的做法。最后我们把 6.1 收个尾，看看带着什么进入 6.2。"
      ],
      "teaching": [],
      "source": "index.html#p09",
      "seconds": 90
    },
    {
      "id": "p10",
      "segment": "小结",
      "label": "带着什么进入 6.2",
      "title": "带着什么进入 6.2？",
      "lead": "收束 6.1 的核心判断与三项产出，准备在 6.2 明确变更目标 CR-01 并建立工作流。",
      "html": "<div class=\"p-sketch\"><div class=\"p-ribbon\" data-reveal=\"0\">6.1 小结 · 先立住规格主权，再接社区框架</div><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个核心判断</h3><div class=\"p-star\" style=\"width:220px;font-size:22px\">再接一套框架<br>是为了接手规格<br>不是另起炉灶</div></div><div data-reveal=\"1\"><h3>本节留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\" style=\"font-size:21px\">SDD 与 GSD 的角色定位</li><li class=\"is-pass\" style=\"font-size:21px\">不覆盖 <code>docs/specs/</code> 的硬边界</li><li class=\"is-pass\" style=\"font-size:21px\">固定版本与一次经抽查的摸底</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>6.2 构建工作流</h3><p>亮出目标 CR-01，把已有规格接进 GSD 工作流</p></div></div></div>",
      "steps": [
        "一个核心判断",
        "本节留下的",
        "下一节 6.2"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向彩带标题与左侧五角星核心判断；不切窗口】\n\n回到开场那个问题：已有规格，为什么还要再接一套框架？答案写在左边的星形里——引入框架是为了接手并组织已有规格上的后续工作，绝不是另起炉灶。",
        "【操作提示｜推进第 2 步，指向中间“本节留下的”三项清单；不切窗口】\n\n离开 6.1 时，我们手里留下三样东西：SDD 与 GSD 的清晰定位、不能覆盖已有文档的硬边界，以及固定版本记录和一次经抽查的 mapper 摸底。",
        "【操作提示｜推进第 3 步，指向右侧下一节预告卡】\n\n下一节 6.2，我们就亮出本章要改的具体规则 CR-01，看看怎样在当前这份 JSON Crack 副本里把 GSD 工作流真正建起来。"
      ],
      "teaching": [],
      "source": "index.html#p10",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "认清 SDD 与 GSD",
      "seconds": 330
    },
    {
      "label": "第一次上手",
      "seconds": 240
    },
    {
      "label": "判断与自检",
      "seconds": 180
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
