window.lesson = {
  "title": "用好 context 的三个做法",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.05",
  "summary": "另一位讲师分享三条平时用好 context 的做法：看懂重发的代价，换会话时自己写交接，换一个工具看它往 context 里放了什么。每条都回到本章的请求记录，看懂即可。",
  "scenes": [
    {
      "id": "p59",
      "segment": "开场",
      "layout": "lesson-cover",
      "label": "换一位讲师",
      "title": "平时怎么用好 context？",
      "lead": "换一位讲师，分享三条平时的做法",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-done\"><b>2.3</b>审改动</li><li class=\"is-done\"><b>2.4</b>发布上线</li><li class=\"is-now\"><b>2.5</b>用好 context</li></ol><div class=\"p-grid\" style=\"--n:3;gap:14px;margin-top:22px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ink\">一</span><h3>看懂重发的代价</h3><p>一问花了多少，缓存省了多少</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ctx\">二</span><h3>换会话时自己写交接</h3><p>决定下一轮带上什么</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"tool\">三</span><h3>换一个工具看请求</h3><p>同一句话，context 不一样</p></div></div>",
      "steps": [
        "最后一节",
        "换一位讲师",
        "三条做法"
      ],
      "script": [
        "【操作提示｜停留课件 p59 第 1 步，章节地图上 2.1–2.4 已标完成；指向 2.5，不切工具窗口】\n\n第 2 章的最后一节。前面四节，我们一直在打开请求记录：看它由什么组成，怎么变长，Codex 依据什么改，怎样调用 gh。",
        "【操作提示｜推进第 2 步，讲师切换（按录制约定显示讲师小窗）】\n\n这一节换我来讲，分享几条我平时用好 context 的做法。",
        "【操作提示｜推进第 3 步，三张卡一起出现，依次指认】\n\n一共三条：第一，看懂重发的代价；第二，换会话的时候，自己写一份交接；第三，换一个工具，看看同一句话发出去是什么样。每一条都回到这一章看过的请求记录。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "本节由另一位讲师讲（章文件 C2-37）。开场一句说明换了人、这一节是经验分享；讲师切换的画面衔接（小窗、开场语）按 docs/production/ 的约定，未定稿前口播一句即可。三条都只回到本章的请求记录，不要求学员安装或操作新工具。"
        }
      ],
      "source": "index.html#p59",
      "seconds": 90
    },
    {
      "id": "p60",
      "segment": "看懂代价",
      "label": "重发的代价",
      "title": "一问花了多少，缓存省了多少",
      "lead": "2.1 第二步只问了一句，Codex 读了一圈文件，前后发了 8 次请求；每次都把前面的内容重发，输入一次比一次长，但大部分命中了缓存。按 MiniMax 官方价格算，这一问大约 0.055 元；没有缓存，大约 0.15 元。缓存让重复的部分便宜，但不是免费，模型也仍要读完整段历史。所以话题换了就 /clear，长期规则写进 AGENTS.md，不要指望一个长会话记住一切。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:22px;align-items:start\"><div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,0.8fr) minmax(0,1fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>2.1 那一问</span><span>输入 token</span><span>其中缓存命中</span></div><div data-reveal=\"0\"><span>第 1 次</span><span>约 7.6 千</span><span>约 5.1 千</span></div><div data-reveal=\"0\"><span>第 4 次</span><span>约 1.55 万</span><span>约 1.11 万</span></div><div data-reveal=\"0\"><span>第 8 次</span><span>约 2.50 万</span><span>约 2.33 万</span></div><div data-reveal=\"0\" class=\"is-key\"><span>8 次合计</span><span>约 12.6 万</span><span>约 11.1 万</span></div></div><div class=\"p-grid\" style=\"--n:1;gap:10px\"><div class=\"p-box is-soft\" data-role=\"ink\" data-reveal=\"1\"><h3>官方价格（元 / 百万 token）</h3><p>输入 1.00 · 缓存命中 0.10 · 输出 4.00</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\"><h3>这一问约 0.055 元</h3><p>没有缓存约 0.15 元</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">话题换了就 <b>/clear</b>，长期规则写进 <b>AGENTS.md</b></div><p class=\"source-note\">数字来自讲师的一次运行（2026-10-21，课程基线，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开）；随版本、模型、配置和任务变化，只说明结构</p>",
      "refs": [
        {
          "kind": "live",
          "group": "价格（2026-10-21 查阅）",
          "text": "MiniMax 开放平台：定价",
          "url": "https://platform.minimax.cn/docs/guides/pricing"
        }
      ],
      "steps": [
        "一问的 8 次请求",
        "按价格换算",
        "一个习惯"
      ],
      "script": [
        "【操作提示｜停留课件 p60 第 1 步，指左边表格从第 1 次到第 8 次，再指合计行；录制时如重跑，按当天记录讲】\n\n先看代价。2.1 第二步，我们只问了一句“这个个人主页当初定了哪些要求”，Codex 读了一圈文件，前后发了 8 次请求。每次都把前面的内容重发，输入从七千多 token 涨到两万五。8 次加起来，输入大约十二万六千 token，其中十一万左右命中了缓存。",
        "【操作提示｜推进第 2 步，指右边价格和金额】\n\n按 MiniMax 官方价格，每百万 token 输入 1 块钱，缓存命中 1 毛，输出 4 块钱。这么算，这一问大约 5 分 5 厘钱；要是没有缓存，大约 1 毛 5。缓存让重复的部分便宜很多，但不是免费，模型也照样要读完整段历史。",
        "【操作提示｜推进第 3 步，指底部横条】\n\n所以我的习惯是：话题换了，就 /clear，开一段新对话；需要一直遵守的规则，写进 AGENTS.md，每次新对话都会带上。不要指望一个越来越长的会话，替你记住所有事情。"
      ],
      "teaching": [
        {
          "title": "实测记录",
          "text": "2026-10-21 重跑 2.1 第二步（codex exec，lab-runs/ch02-context/2.1-step2-20261021-150635）：8 次请求、15 次工具调用；claude-tap 汇总 126,466 输入 / 110,501 缓存读取 / 6,995 输出 token。逐次输入 7610、8561、10786、15483、17193、19763、22109、24961，缓存命中 5063、7745、8686、11054、16033、17935、20657、23328。估算：(126466 − 110501) × 1 + 110501 × 0.10 + 6995 × 4，单位元/百万 token，约 0.016 + 0.011 + 0.028 ≈ 0.055 元；全按未命中算约 0.126 + 0.028 ≈ 0.154 元。"
        },
        {
          "title": "讲师提示",
          "text": "价格取自 MiniMax 开放平台定价页（2026-10-21 查阅：MiniMax-M3.1-Flash 输入 1.00、输出 4.00、缓存读取 0.10 元/百万 token，页面没有列缓存写入价格），录制当天再查一次，变了就按新价格重算。缓存是否另有计费规则、Codex 界面能否直接看到用量，录制前核对；核对不了就只讲“重复部分更便宜”，不报具体金额。"
        }
      ],
      "source": "index.html#p60",
      "seconds": 90
    },
    {
      "id": "p61",
      "segment": "接着做",
      "label": "换会话时写交接",
      "title": "换个新会话接着做，怎样不丢东西？",
      "lead": "2.2 压缩时，Codex 自己写了一份交接摘要，留什么由它决定。换一个新会话接着做时，也可以由我们自己写交接：本轮目标、已做、还剩、关键文件，几行就够。讲师试了一次：新会话的第一次请求只有 6 项，交接就是那条用户消息；Codex 没有照单全收，先重新读了 App.tsx、index.css 和 git diff，回答里把“交接里写的”“刚读到的”“自己推算的”分开。长期规则放 AGENTS.md，这一轮的进度放交接。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:20px;align-items:start\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">压缩</span><h3>Codex 写的交接摘要</h3><p>2.2 那次约 2550 字符；留什么由它决定</p></div><div data-reveal=\"0\"><div class=\"p-code\" style=\"font-size:14px;line-height:1.45\"><div class=\"p-code-head\"><span>新会话的第一句</span><span>我们写的交接</span></div><pre style=\"padding:6px 12px;white-space:pre-wrap\"><span style=\"display:block\">交接（上一轮会话写的）</span><span style=\"display:block\">- 本轮目标：在项目区呈现三条项目经历，原文照用</span><span style=\"display:block\">- 已做：只改了 src/App.tsx 的 projects 数组，build 通过，未提交</span><span style=\"display:block\">- 还剩：360 宽下三条经历的换行，人还没检查</span><span style=\"display:block\">- 关键文件：src/App.tsx、src/index.css</span></pre></div></div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:10px\"><div class=\"p-box is-soft\" data-role=\"ink\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>第一次请求 6 项</h3><p>交接就是那条用户消息</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>先重新读文件</h3><p>App.tsx、index.css、git diff</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>依据分开写</h3><p>交接 · 刚读到的 · 推算的</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\">长期规则放 <b>AGENTS.md</b>，这一轮的进度放<b>交接</b></div><p class=\"source-note\">数字来自讲师的一次运行（2026-10-21，课程基线，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开）；随版本、模型、配置和任务变化，只说明结构。重新读文件核对是这一次的观察，不是每次都会这样</p>",
      "steps": [
        "两种交接",
        "新会话怎么用它",
        "放在哪里"
      ],
      "script": [
        "【操作提示｜停留课件 p61 第 1 步，先指左边“压缩”，再指右边的交接文字】\n\n第二条，换会话。2.2 压缩的时候，Codex 自己写了一份交接摘要，那次大约两千五百字，留什么、丢什么，是它决定的。换一个新会话接着做的时候，我更喜欢自己写交接：本轮目标、已经做了什么、还剩什么、关键文件，几行就够。",
        "【操作提示｜推进第 2 步，三张小卡依次指认】\n\n我拿 2.2 改完的仓库试了一次。新会话的第一次请求只有 6 项，这段交接就是那条用户消息。有意思的是，Codex 没有照单全收：它先重新读了 App.tsx、index.css 和 git diff，回答的时候，把“交接里写的”“刚读到的”“自己推算的”分开写。这只是一次的观察，不是每次都会这样，但这正是我想要的用法：交接告诉它从哪看起，事实还是要回到文件里。",
        "【操作提示｜推进第 3 步，指底部横条】\n\n分工也就清楚了：长期都要守的规则，放 AGENTS.md；这一轮做到哪了，放交接。"
      ],
      "teaching": [
        {
          "title": "实测记录",
          "text": "2026-10-21，起点是 2026-10-20 那次 2.2 改完、还没提交的仓库，codex exec -s read-only 发“交接 + 继续：只读，三条经历在 360 宽下会不会难看地换行？先说要看哪些文件，结论注明依据来自交接还是刚读到的”。11 次请求、约 21 万输入 token；第 1 次请求 6 项。它先读了 App.tsx、index.css、git diff、PROJECT_BRIEF.md，没有浏览器，就写 node 脚本估算字宽和断行，回答末尾分“交接里写的”“我刚读到的”“我自己算的”三类，并说明没有真的渲染。运行目录在讲师本机 ~/.cache/p2h-lab/2.5-handoff-20261021-151326。"
        },
        {
          "title": "讲师提示",
          "text": "交接的写法只给一个例子，不立模板。和 2.2 压缩的区别只讲一句：留什么由谁决定。它这次花了 11 次请求估算字宽，可以顺带一句“没有浏览器时它会想办法，代价就在请求里”，不展开。"
        }
      ],
      "source": "index.html#p61",
      "seconds": 90
    },
    {
      "id": "p62",
      "segment": "换个工具",
      "label": "换一个工具看请求",
      "title": "换一个工具，同一句话发出去是什么样？",
      "lead": "同一句问候，用 Codex 和 Claude Code 各发一次，都走 MiniMax，都经 claude-tap 记录。Claude Code 的系统指令更长、工具更多，整份请求约 4.5 万字符；Codex 的系统指令只有一句，整份约 3 万字符。规则文件找法也不同：Codex 只在当前 Git 仓库里找 AGENTS.md；Claude Code 会一直往上级目录找，讲师第一次把实验目录放在课程仓库里面，它就把课程仓库的 AGENTS.md 也读进了请求。工具不同，组装出的 context 就不同，同一句 Prompt 的效果也就可能不同。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.2fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>同一句问候</span><span>Codex</span><span>Claude Code</span></div><div data-reveal=\"0\"><span>系统指令</span><span>1 句，约 150 字符</span><span>3 段，约 5800 字符</span></div><div data-reveal=\"0\"><span>工具</span><span>5 个，约 2.2 万字符</span><span>12 个，约 2.8 万字符</span></div><div data-reveal=\"0\" class=\"is-key\"><span>整份请求</span><span>约 3 万字符 · 约 7.5 千 token</span><span>约 4.5 万字符 · 约 1.08 万 token</span></div><div data-reveal=\"1\"><span>规则文件</span><span>AGENTS.md，只在当前 Git 仓库里找</span><span>一直往上级目录找</span></div></div><div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:12px;margin-top:10px\"><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>在课程仓库里面做实验时</h3><p>Claude Code 把课程仓库的 AGENTS.md 也带进了请求</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"2\" style=\"padding:8px 14px\"><h3>工具不同</h3><p>组装出的 context 就不同</p></div></div><p class=\"source-note\">数字来自讲师的一次运行（2026-10-21，课程基线，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开）；随版本、模型、配置和任务变化，只说明结构；Claude Code 2.1.304，用课程仓库的 tools/clean-claude.sh 启动，也走 MiniMax</p>",
      "steps": [
        "同一句问候",
        "规则文件从哪找",
        "结论"
      ],
      "script": [
        "【操作提示｜停留课件 p62 第 1 步，按行指认表格；不要求学员安装 Claude Code】\n\n第三条，跳出 Codex 看一看。同一句问候，我用 Codex 和 Claude Code 各发了一次，都接的 MiniMax，都用 claude-tap 记录。Codex 的系统指令只有一句话，5 个工具，整份请求大约三万字；Claude Code 的系统指令有三段，将近六千字，12 个工具，整份大约四万五千字。",
        "【操作提示｜推进第 2 步，指“规则文件”一行和下面的提醒框】\n\n规则文件的找法也不一样。Codex 只在当前这个 Git 仓库里找 AGENTS.md；Claude Code 会一直往上级目录找。我第一次把实验目录放在课程仓库里面，它就把课程仓库的 AGENTS.md 也读进了请求。所以做这种对比，要把目录放在仓库外面。",
        "【操作提示｜推进第 3 步，指底部横条】\n\n工具不同，组装出来的 context 就不同，同一句 Prompt 的效果也就可能不一样。换工具之前，可以先看看它往 context 里放了什么。"
      ],
      "teaching": [
        {
          "title": "实测记录",
          "text": "2026-10-21，同一目录（课程仓库之外，第 1 章参考快照的副本），同一句“你好，用一句话介绍你能帮我做什么。”：tools/clean-claude.sh --tap -- -p 与 tools/clean-codex.sh --tap -- exec -s read-only。Claude Code 第一次请求：system 3 段约 5800 字符，12 个工具约 2.8 万字符，整份约 4.5 万字符，输入 10830 token；Codex：系统指令 145 字符，5 个工具约 2.2 万字符，整份约 3 万字符，输入 7510 token。第一次把实验目录放在 lab-runs/ 下时，Claude Code 的请求里出现了“Contents of …/prompt-to-harness.github.io/AGENTS.md”。"
        },
        {
          "title": "讲师提示",
          "text": "只做对照，不比较哪个工具更好，不要求学员安装 Claude Code。截图前检查请求里有没有个人信息：从另一个 Claude Code 会话里跑脚本时，会继承 CLAUDE_CODE_USER_EMAIL 等变量，Claude Code 会把邮箱写进请求；两个 clean-*.sh 2026-10-21 起已清掉这些变量，录制仍用讲师自己的终端。Claude Code 读取上级目录的规则文件是官方文档写明的行为（How Claude remembers your project：从当前目录逐层往上读 CLAUDE.md，没有 CLAUDE.md 时读 AGENTS.md；可用 claudeMdExcludes 排除），不是 clean-claude.sh 隔离不够：脚本隔离的是 HOME 下的个人配置。"
        }
      ],
      "source": "index.html#p62",
      "seconds": 90
    },
    {
      "id": "p63",
      "segment": "小结",
      "label": "本节小结",
      "title": "三条做法，和这一章",
      "lead": "三条做法：看懂重发的代价，换会话时自己写交接，换一个工具先看它往 context 里放了什么。回看这一章：每一节都回到请求记录里找答案；项目上留下了审过的提交、公开 URL 和 ch02-homepage-live tag。下一章，给个人主页加一个小游戏。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:12px\"><div class=\"p-box is-soft\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>看代价</h3><p>重发要钱，缓存只让它便宜</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>写交接</h3><p>留什么由我们决定</p></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>换工具</h3><p>先看它放了什么</p></div></div><div class=\"p-flow\" style=\"--n:5;margin-top:14px\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"1\"><h3>2.1</h3><p>只说了一句话，模型收到了什么</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><h3>2.2</h3><p>补上项目经历，看对话怎么变长</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><h3>2.3</h3><p>AI 交回的改动，要不要接受</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"1\"><h3>2.4</h3><p>发布上线，看 Codex 怎么用 gh</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"1\"><h3>2.5</h3><p>用好 context 的三个做法</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:14px\">下一章 · 第 3 章：给个人主页加一个小游戏</div>",
      "steps": [
        "三条做法",
        "回看本章",
        "下一章"
      ],
      "script": [
        "【操作提示｜停留课件 p63 第 1 步，指三张卡】\n\n三条做法：重发要花钱，缓存只是让它便宜；换会话时自己写交接，留什么由我们决定；换工具之前，先看它往 context 里放了什么。",
        "【操作提示｜推进第 2 步，五个节点一起出现，按 2.1 到 2.5 的顺序逐个指认】\n\n回看这一章：2.1 只发一句话，看清模型收到了什么；2.2 补上项目经历，看对话怎么变长、怎么清空和压缩；2.3 审 AI 交回的改动，看它依据什么改；2.4 发布上线，看 Codex 怎么用 gh；最后这一节，分享用好 context 的几个做法。项目上，我们留下了审过的提交、一个公开的 URL，和 ch02-homepage-live 这个 tag。",
        "【操作提示｜推进第 3 步，指向底部的第 3 章预告；第 2 章到此结束，不再切工具窗口】\n\n第 2 章到这里结束。下一章，我们给个人主页加一个小游戏。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "全章回看原在 2.5 p58，随本节重做移到这里。第 3 章预告按第 3 章定稿调整。"
        }
      ],
      "source": "index.html#p63",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开场",
      "seconds": 90
    },
    {
      "label": "看懂代价",
      "seconds": 90
    },
    {
      "label": "接着做",
      "seconds": 90
    },
    {
      "label": "换个工具",
      "seconds": 90
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
