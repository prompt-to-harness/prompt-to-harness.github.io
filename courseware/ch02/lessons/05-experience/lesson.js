window.lesson = {
  "title": "用好 context 的五个做法",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.05",
  "summary": "从费用、主动交接，到换工具、换服务、换版本：用已有实验观察 context 在不同使用条件下的差异。",
  "prep": [
    "费用采用 2026-11-01 补跑，其他页使用 10-21、10-22 独立实验及既有 Phistory 截图；录制时讲冻结记录，不现场重跑；不要说成刚录完的连续过程。",
    "p60 按 2026-11-01 核对的单价估算，不是账单；不计订阅折算。录制要讲当前价格时先核对价格与计费口径，再重算，不需要重跑模型。",
    "p61 交接沿用旧项目三条经历的例子；p62a 推理返回另含 high 档位补跑，两处均按画面说明来源。",
    "p62b 直接讲已有截图，不依赖现场网站加载；原文链接录前打开备用。要切原始记录时先遮盖账号、令牌、邮箱和本机路径。"
  ],
  "scenes": [
    {
      "id": "p59",
      "segment": "开场",
      "layout": "lesson-cover",
      "label": "五个扩展观察",
      "title": "平时怎么用好 context？",
      "lead": "个人主页已经上线。这一节从任务费用和主动交接，再到工具、模型服务与版本的差异，补充前面没有展开的五个观察。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-done\"><b>2.3</b>改风格</li><li class=\"is-done\"><b>2.4</b>发布上线</li><li class=\"is-now\"><b>2.5</b>用好 context</li></ol><div class=\"p-grid\" style=\"--n:5;gap:10px;margin-top:22px\"><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">一</span><h3>看懂重发的代价</h3><p>一问花了多少，缓存省了多少</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">二</span><h3>换会话时自己写交接</h3><p>决定下一轮带上什么</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">三</span><h3>换一个工具看请求</h3><p>同一句话，context 不一样</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">四</span><h3>换一个模型服务</h3><p>分别看请求与返回</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">五</span><h3>看系统指令的版本</h3><p>它会随版本变</p></div></div>",
      "steps": [
        "项目之后",
        "五个观察"
      ],
      "script": [
        "【操作提示｜停留 p59 第 1 步，指章节地图，不切窗口】\n\nhello ，大家好，想不到吧我又回来了；话说个人主页已经上线了。前面我们跟着个人主页项目，看了请求里有什么、对话怎样变长，以及 参考材料 和 远端状态 怎样进入请求。最后这一节，把视角再拉开一点。",
        "【操作提示｜推进第 2 步，依次指五张卡】\n\n我们用几组备课时留下的独立实验，再看五件事：一次任务花了多少，切换 session 时怎样交接新旧 session，以及换工具、换模型服务、升级版本，会给请求带来什么变化。"
      ],
      "repro": {
        "label": "讲师接手：材料与复现范围",
        "steps": [
          {
            "text": "先取得包含本轮 2.5 改动的课程分支或文件；Agent Lab 安装包只包含启动工具，不包含课件、讲稿和旧请求。打开本节 index.html 与 speaker.html，核对本页说明、p62 使用说明以及 p62b 的截图。",
            "code": ""
          },
          {
            "text": "p60：采用 11-01 补跑的 8 次完整请求，已提供输入、缓存、输出明细与复算代码。私有实验包 fee-rerun 可离线逐条查看；金额按当日核对单价估算，未核对账单。",
            "code": ""
          },
          {
            "text": "p61：私有讲师实验包 2.5-20261101 已保存完整 Prompt、11 条请求、项目基线和未提交改动。先打开包内 index.html；需要重跑时用恢复脚本创建项目副本，不要使用 p62 的空目录。",
            "code": ""
          },
          {
            "text": "p62：按该页使用说明重跑。自己准备 uv、两种 CLI、MINIMAX_API_KEY 和可用网络；两端分别使用启动输出中的 Dashboard 地址，不复用原讲师的端口或 HOME。",
            "code": ""
          },
          {
            "text": "p62a：三组脱敏记录已收入私有讲师实验包，可离线查看；high 使用不同问题，是独立补跑。原临时项目已不存在，包内提供核对过核心文件的重建候选。Agent Lab 0.1.4 不能切换 ChatGPT；重跑需自有登录和服务配置。",
            "code": ""
          },
          {
            "text": "p62b：使用本节 external 目录里的 Phistory 截图；文件已入库，不依赖现场网站可用。小结和七题也都在本节内。",
            "code": ""
          }
        ],
        "note": "默认按现有表格和截图录制，p62 可独立重跑。完整交接清单在本节 STORYBOARD.md 的“换一台机器交接检查”。缺少原始记录的页不要临场切到旧查看器；若要换成新实验，先补材料再更新画面和口播。"
      },
      "teaching": [],
      "source": "index.html#p59",
      "seconds": 60
    },
    {
      "id": "p60",
      "segment": "看懂代价",
      "label": "重发的代价",
      "title": "一问花了多少，缓存省了多少",
      "lead": "2026-11-01 的一次独立实验，一问产生 8 次请求。累计输入 118,540 token，其中缓存读取 97,920，输出 5,673。按本次核对的单价，并按输入包含缓存读取部分的口径估算：未命中输入约 0.0206 元、缓存读取约 0.0098 元、输出约 0.0227 元，合计约 0.053 元；同样用量全按未命中输入价格算约 0.141 元。这是费用估算，不是账单或当前报价，也不是单次请求长度。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:22px;align-items:start\"><div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,0.8fr) minmax(0,1fr) minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>11-01 独立实验</span><span>输入 token</span><span>其中缓存命中</span></div><div data-reveal=\"0\"><span>第 1 次</span><span>约 7.5 千</span><span>128</span></div><div data-reveal=\"0\"><span>第 4 次</span><span>约 1.31 万</span><span>约 1.05 万</span></div><div data-reveal=\"0\"><span>第 8 次</span><span>约 2.36 万</span><span>约 2.15 万</span></div><div data-reveal=\"0\" class=\"is-key\"><span>8 次合计</span><span>约 11.9 万</span><span>约 9.8 万</span></div></div><div class=\"p-grid\" style=\"--n:1;gap:10px\"><div class=\"p-box is-soft\" style=\"padding:10px 14px\" data-role=\"ink\" data-reveal=\"1\"><h3>本次核对单价（元 / 百万 token）</h3><p>输入 1.00 · 缓存命中 0.10 · 输出 4.00</p></div><div class=\"p-box is-soft\" style=\"padding:10px 14px\" data-role=\"ok\" data-reveal=\"1\"><h3>按上述口径估算约 0.053 元</h3><p>输出 5,673 token 也计费<br>输入 0.0206 + 缓存 0.0098 + 输出 0.0227<br>同用量全按未命中算：约 0.141 元</p></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">单次长度 ≠ 累计用量；按不同用量的单价估算费用</div><p class=\"source-note\">2026-11-01 独立补跑；Agent Lab 0.1.4、Codex 0.163.0、MiniMax-M3.1-Flash。分项四舍五入，合计按未舍入值计算</p>",
      "refs": [
        {
          "kind": "live",
          "group": "价格（2026-11-01 核对）",
          "text": "MiniMax 开放平台：定价",
          "url": "https://platform.minimax.cn/docs/pricing/overview#%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B"
        }
      ],
      "steps": [
        "一问的 8 次请求",
        "按本次核对单价估算",
        "长度、用量与费用"
      ],
      "script": [
        "【操作提示｜停留 p60 第 1 步，指第 1、4、8 次及合计行】\n\n先看一次任务的代价。这是之前的一次独立实验。一句话发出去，Codex 读文件、继续回答，前后用了八次模型请求。我们挑了三次出来单独展示，最下面是全部八次的合计：输入大约十一万九千 token，其中九万八千左右命中了缓存。这是整个任务累计的用量，不是一次请求有这么长。",
        "【操作提示｜推进第 2 步，指本次核对单价、输出用量和费用分项】\n\n按当前 minimax 模型单价，每百万 token，普通输入一元，命中缓存一角，输出四元。这里的总输入已经包括了缓存命中，计算时要先减掉命中缓存的部分，分别计价。再加上大约五千七百个输出 token，合计约五分三厘；同样的用量，如果输入全按未命中算，大约是一角四。这是按当前单价做的估算，实际费用还要看账单。",
        "【操作提示｜推进第 3 步，指底部结论条】\n\n所以，只看最后一次请求有多长，还算不出任务的总费用。要把几次请求的用量加起来，再按各自的单价计算。"
      ],
      "repro": {
        "label": "实验说明：复算费用与核对口径",
        "steps": [
          {
            "text": "本页采用 2026-11-01 的新运行，完整记录在私有实验包 fee-rerun 查看器；公开用量明细在 fee-evidence.json。先指出表格只选第 1、4、8 次，合计行包含全部 8 次；不是把屏幕上的三行相加。下列代码只复算已有数字，不访问模型或读取原讲师文件。",
            "code": "python3 - <<'PY'\nfrom decimal import Decimal as D\ninputs = [7548, 8584, 10417, 13117, 15545, 19204, 20549, 23576]\ncached = [128, 7680, 8704, 10496, 13312, 16000, 20096, 21504]\noutput = sum([209, 203, 258, 272, 511, 922, 1070, 2228])\ni, c = sum(inputs), sum(cached)\ncost = (D(i-c)*D('1.00') + D(c)*D('0.10') + D(output)*D('4.00')) / D(1000000)\nno_cache = (D(i)*D('1.00') + D(output)*D('4.00')) / D(1000000)\nprint('input:', i, 'cached:', c, 'output:', output)\nprint('estimated CNY:', cost, 'same usage without cache:', no_cache)\nPY"
          },
          {
            "text": "核对结果：输入 118540，缓存读取 97920，输出 5673；费用 0.053104 元，对照为 0.141232 元。各次输出明细已随 trace 保存。表格显示的是四舍五入值。",
            "code": ""
          },
          {
            "text": "这里按本次 Responses 的 input_tokens 包含 cached_tokens 的口径计算，先减缓存，再按各自单价计算。如果使用自己的新记录，先核对接口的 usage 定义；缓存另计的记录不能再从输入里减一次。同用量全未命中的金额只是算术对照，不是另跑过的一次实验。",
            "code": ""
          },
          {
            "text": "若要替换材料：取一条任务从发问到最终回答的全部模型请求，保留请求 ID、各次 usage、所用模型、日期和对应单价。不要把工具调用数当模型请求数，不要只取最后一条请求；如有其他计费项也须说明。",
            "code": ""
          }
        ],
        "note": "来源为 11-01 补跑完整 trace、fee-evidence.json 与当日官方价格。输出含推理 token，不重复加计。估算不等于账单或订阅费用；旧 10-21 汇总不再用于本页。"
      },
      "teaching": [],
      "source": "index.html#p60",
      "seconds": 90
    },
    {
      "id": "p61",
      "segment": "接着做",
      "label": "换会话时写交接",
      "title": "换个新会话接着做，怎样不丢东西？",
      "lead": "自动压缩之外，需要换会话继续工作时，也可以自己选择留下什么。这里沿用 2026-10-21 的独立交接实验：目标是旧项目中的三条经历，未提交、尚待检查移动端换行。交接进入新会话的用户消息；这次 Codex 继续读取文件和 diff，并按请求要求区分交接、读取和推算的依据。交接提供起点，不等于已经验证结果。",
      "html": "<style>@media(max-width:600px){body[data-mode=scroll] .p-walk,body[data-mode=scroll] .p-claim,body[data-mode=scroll] .p-aside{grid-template-columns:minmax(0,1fr)!important}body[data-mode=scroll] .p-walk .p-ln,body[data-mode=scroll] .p-walk .p-ln code{height:auto;min-height:var(--lh,38px);white-space:pre-wrap;overflow-wrap:anywhere;min-width:0}}</style><div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:20px;align-items:start\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">压缩</span><h3>Codex 写的交接摘要</h3><p>压缩已有历史，选择保留的信息</p></div><div data-reveal=\"0\"><div class=\"p-code\" style=\"font-size:14px;line-height:1.45\"><div class=\"p-code-head\"><span>新会话的第一句</span><span>我们写的交接</span></div><pre style=\"padding:6px 12px;white-space:pre-wrap\"><span style=\"display:block\">交接（10-21 独立实验）</span><span style=\"display:block\">- 本轮目标：在项目区呈现三条项目经历，原文照用</span><span style=\"display:block\">- 已做：只改了 src/App.tsx 的 projects 数组，build 通过，未提交</span><span style=\"display:block\">- 还剩：360 宽下三条经历的换行，人还没检查</span><span style=\"display:block\">- 关键文件：src/App.tsx、src/index.css</span></pre></div></div></div><div class=\"p-grid\" style=\"--n:3;gap:12px;margin-top:10px\"><div class=\"p-box is-soft\" data-role=\"ink\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>第一次请求 6 项</h3><p>交接就是那条用户消息</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>先重新读文件</h3><p>App.tsx、index.css、git diff</p></div><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"1\" style=\"padding:8px 14px\"><h3>按要求区分依据</h3><p>交接 · 读取 · 推算</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\">长期规则放 <b>AGENTS.md</b>，这一轮的进度放<b>交接</b></div><p class=\"source-note\">数字来自讲师的一次运行（2026-10-21，课程基线，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开）；随版本、模型、配置和任务变化，只说明结构。重新读文件核对是这一次的观察，不是每次都会这样</p>",
      "steps": [
        "两种交接",
        "新会话怎么用它",
        "放在哪里"
      ],
      "script": [
        "【操作提示｜停留 p61 第 1 步，指压缩摘要与交接例子】\n\n刚才我们计算了连续请求的 token 开销。我们接下来看如果切新 session 继续工作，需要带哪些信息？前面看过 Codex 自动压缩时写的摘要，我们也可以自己留几行话用来做交接。这里给出一个例子，右边是之前三条项目经历的实验，主要说了四件事：要做什么，已经做了什么，还剩什么没有做，最后指出关键文件。",
        "【操作提示｜推进第 2 步，指三张结果卡】\n\n那次新会话的第一条消息就是这份交接。Codex 接着读了文件和 diff。当时的请求还要求它注明依据，所以它把交接里写的、实际读到的和自己推算的分开。",
        "【操作提示｜推进第 3 步，指长期规则与本轮进度】\n\n长期规则推荐放在 AGENTS.md，比如 commit msg 的书写规则、branch 命名规则之类的；这一轮的进度和待检查项留在交接里。先留这几行，新会话再顺着文件核实。"
      ],
      "repro": {
        "label": "实验说明：交接的起点与检查项",
        "steps": [
          {
            "text": "默认讲现有交接和结果卡。左侧是自动摘要的概念对照，不是这一次旧摘要的原文；右侧是页面采用的交接文本。原实验还要求注明依据，页面上的交接并不是完整历史 Prompt。",
            "code": ""
          },
          {
            "text": "如果另做一次实验，先准备自己的主页项目副本：确有 App.tsx 和 index.css，交接里描述的改动、build 状态和待检查项都与文件一致。未提交改动必须随副本保留，只有 Git 提交号不足以恢复它们；不要直接使用 p62 的空目录。先只读检查状态。",
            "code": "git status --short\ngit diff -- src/App.tsx src/index.css"
          },
          {
            "text": "新会话里先贴按实际状态填写的交接，再提出后续任务。下面是新实验可用的请求模板，不是补出的历史原文；模板中的页面状态和尺寸需与你准备的项目一致。",
            "code": "请接着核对项目区在 360px 宽度下的换行。先只读检查相关文件和当前 diff，说明哪些依据来自交接、哪些来自实际读取、哪些只是推算。如果没有真正打开浏览器渲染，请明确哪些内容还需要人工检查。"
          },
          {
            "text": "核对三个位置：第一条模型请求里的用户消息是否包含交接；后续工具调用实际读了哪些文件和 diff；最终回复是否把三类依据分开。查看 build 日志只能证明构建状态，不能证明移动端布局通过。",
            "code": ""
          }
        ],
        "note": "新运行不保证也有 6 项输入、11 次请求或相同读取顺序。完整旧 Prompt、项目状态和 11 条记录已收入私有讲师实验包；先按包内 README 恢复状态。旧结果没有经过浏览器渲染验证。"
      },
      "teaching": [],
      "source": "index.html#p61",
      "seconds": 90
    },
    {
      "id": "p62",
      "segment": "换个工具",
      "label": "换一个工具看请求",
      "title": "换一个工具，同一句话发出去是什么样？",
      "lead": "2026-10-21 的对比实验：Codex 与 Claude Code 各收到同一句问候，都连接 MiniMax。先看系统指令，再看工具定义，最后看整份请求规模。这里的字符数和工具数来自当次配置，只帮助定位差异，不能据此判断工具好坏。两份请求不同，也不能单凭这一点断定具体任务表现的差异由它造成。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.2fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>同一句问候</span><span>Codex</span><span>Claude Code</span></div><div data-reveal=\"0\"><span>系统指令</span><span>1 句，约 150 字符</span><span>3 段，约 5800 字符</span></div><div data-reveal=\"1\"><span>工具</span><span>5 个，约 2.2 万字符</span><span>12 个，约 2.8 万字符</span></div><div data-reveal=\"1\" class=\"is-key\"><span>整份请求</span><span>约 3 万字符 · 约 7.5 千 token</span><span>约 4.5 万字符 · 约 1.08 万 token</span></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">同一句话之外，工具还带来了不同的指令与工具定义</div><p style=\"font-size:15px\">2026-10-21 · Codex 0.163.0 / Claude Code 2.1.304 · 同接 MiniMax · 一次对比</p><p class=\"source-note\">数字来自讲师的一次运行（2026-10-21，课程基线，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开）；随版本、模型、配置和任务变化，只说明结构；Claude Code 2.1.304，用课程仓库的 tools/clean-claude.sh 启动，也走 MiniMax</p>",
      "steps": [
        "系统指令",
        "工具与请求规模",
        "工具怎样组织请求"
      ],
      "script": [
        "【操作提示｜停留 p62 第 1 步，指两列系统指令；使用已有实验表，不现场启动工具】\n\n刚才看的是我们自己留下的信息。请求里还有一些内容，是 Agent 工具带进来的。这次把同一句 prompt 分别交给 Codex 和 Claude Code，两边都接 MiniMax。先看系统指令：在当前的配置下，Codex 是一句话，Claude Code 是三段。我们发送的都是一样的 prompt ，但在不同的 agent 工具当中会添加不同的 system prompt",
        "【操作提示｜推进第 2 步，指工具定义与整份请求两行】\n\n再看工具定义，这次记录里分别是五个和十二个，描述本身也占了不少内容。整份请求大约三万和四万五千字符。这里数字只帮助我们看规模，真正要看的是工具给模型提供了哪些说明、哪些能力。",
        "【操作提示｜推进第 3 步，指结论条】\n\n同一句话，换一个 coding agent，模型收到的说明和可用工具就可能不同。要判断哪个好用，还得看完成具体任务的表现。"
      ],
      "repro": {
        "label": "使用说明：复现 Codex / Claude 对照实验",
        "steps": [
          {
            "text": "准备：macOS，或另行验证的 Linux / WSL；装好 uv、Codex CLI、Claude Code CLI，在自己的终端提供 MINIMAX_API_KEY。安装命令同时用于升级已有 Agent Lab；不要在录屏中输入 Key。",
            "code": "uv tool install --force https://github.com/prompt-to-harness/prompt-to-harness.github.io/releases/download/agent-lab-v0.1.4/agent_lab-0.1.4-py3-none-any.whl"
          },
          {
            "text": "记录实际版本。页面数字来自 Codex 0.163.0、Claude Code 2.1.304 与旧 clean 脚本；新入口可以重做观察，不保证得到相同的字符数和工具数。",
            "code": "uv tool list\ncodex --version\nclaude --version"
          },
          {
            "text": "在课程仓库以外创建一个空目录，两边都在这里运行。检查上级目录也没有课程 AGENTS.md / CLAUDE.md，避免自动带入课程规则；新目录会得到独立会话和记录。清掉当前终端旧的环境路径覆盖。",
            "code": "lab_project=$(mktemp -d \"${TMPDIR:-/tmp}/agent-lab-compare.XXXXXX\")\ncd \"$lab_project\"\nunset AGENT_LAB_HOME COURSE_CODEX_HOME"
          },
          {
            "text": "先运行 Codex：只读模式、允许在这个非 Git 目录执行，发送一句问候。等返回完成；记下启动输出中的课程环境和查看器地址。",
            "code": "agent-lab codex --tap -- exec --skip-git-repo-check -s read-only \"你好\""
          },
          {
            "text": "仍在同一个目录运行 Claude Code，发送相同的问候。-p 是非交互运行；等返回完成，再打开它输出的 Dashboard 地址，点 Details 看问答，点 Full viewer 查看原始请求。",
            "code": "agent-lab claude --tap -- -p \"你好\""
          },
          {
            "text": "两个查看器分别选本次问候的第一个模型请求：核对用户消息相同、模型为 MiniMax-M3.1-Flash。Codex 走 Responses 接口，Claude 走 Anthropic 兼容接口。随后对照系统指令的内容、工具定义的数量与内容、整份请求规模；不要把累计用量当作首个请求长度，也不要用字符数直接换算 token。",
            "code": ""
          },
          {
            "text": "保存本次日期、CLI 版本、请求 ID 和三个观察点。课程 HOME 与 tap 数据位置可用以下命令找回；记录在各 HOME 的 .local/share/claude-tap/ 下。截图前检查账号、邮箱、令牌、路径和项目内容。",
            "code": "agent-lab home\nagent-lab home --agent claude"
          },
          {
            "text": "Claude Code 2.1.309 可能提示未识别 MiniMax 模型名、按 200k 上下文窗口处理；本次问候仍成功返回。这不是 API 失败，也不说明上游实际窗口只有 200k。缺 Key 或找不到 CLI，先补前置条件；若查看器端口占用，按输出检查进程归属。旧版本查看器要先关闭再重试，不直接结束不认识的进程。Codex 也可能有附加模型元数据提示或 featured plugins 401；本次模型请求仍成功。用模型请求状态和实际回复判断，API 报错或没有记录时先停下来检查，不拿旧数字当本次结果。",
            "code": ""
          }
        ],
        "note": "这组步骤复现的是 p62 的双工具问候实验；p60 费用、p61 交接、p62a 服务对比和 p62b 版本快照使用各自历史材料。本页仍展示旧实验；新入口改变了环境持久化、设置来源和 tap 数据位置，组织策略也可能生效。录前先完成一次最小问候和记录核对；更换课件证据时同步日期、版本和实际数字。"
      },
      "teaching": [],
      "source": "index.html#p62",
      "seconds": 90
    },
    {
      "id": "p62a",
      "segment": "换个服务",
      "label": "换一个模型服务",
      "title": "同一个 Codex，换一个模型服务",
      "lead": "2026-10-22，同一 Codex 0.163.0、同一起点和只读问题，分别连接 MiniMax 与 ChatGPT 登录服务。前两行比较客户端发出的请求；最后一行比较返回的可见形式，其中 ChatGPT 推理条目来自另一次 high 档位补跑，不能说成原 low 档位请求的返回。模型、推理档位和接口配置也有差别，这不是只改变模型名称的质量评测。请求差异不都来自服务端处理；可见推理也不用于判断推理质量。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,.9fr) minmax(0,1.2fr) minmax(0,1.3fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>同一句只读问题</span><span>MiniMax（课程基线）</span><span>ChatGPT 登录</span></div><div data-reveal=\"0\"><span>发送：系统指令</span><span>一句话，约 280 字符</span><span>完整内置指令，约 2.2 万字符</span></div><div data-reveal=\"0\"><span>发送：工具表示</span><span>在 tools 字段</span><span>在 input 的 additional_tools 消息中</span></div><div data-reveal=\"1\"><span>返回：推理条目</span><span>有正文，另有密文</span><span>high 补跑：正文为空，有密文</span></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">分别看<b>客户端发出的请求</b>与<b>服务端返回的内容</b></div><p style=\"font-size:15px\">2026-10-22 · 请求各一次；推理返回另含 high 档位补跑 · 不比较质量</p><p class=\"source-note\">数字来自讲师的各一次运行（2026-10-22，Codex 0.163.0，同一个起点和问题；ChatGPT 登录用讲师自己的订阅）；随版本、账号和模型变化，只说明结构</p>",
      "steps": [
        "客户端发送",
        "返回的可见内容",
        "分清两侧"
      ],
      "script": [
        "【操作提示｜停留 p62a 第 1 步，指“发送”两行；不把两边配置说成只换模型名称】\n\n刚才换的是工具。接下来保持 Codex 的版本不变，换它连接的模型服务。这组实验从同一起点发出同一句只读问题，分别接 MiniMax 和讲师自己的 ChatGPT 登录服务。先看发出去的两份请求：系统指令不同，工具定义的位置也不同，右边放在了 additional_tools 消息里。这里比较的是客户端组装出来的内容。",
        "【操作提示｜推进第 2 步，指“返回”一行和 high 补跑标记】\n\n再看返回。MiniMax 的记录里有可读的推理正文，也有密文。右边用的是另一次 high 档位补跑：正文和摘要为空，只有密文。它和上面 low 档位的请求来自两次运行。模型、档位和接口配置都有差别，这里只观察返回了什么，不比较推理质量。",
        "【操作提示｜推进第 3 步，指客户端与服务端两侧】\n\n因此，换服务后要分两边看：客户端发了什么，服务返回了什么。看到系统指令不同，先查发送端的配置，不能直接归因于服务端。"
      ],
      "repro": {
        "label": "实验说明：三份样本与观察位置",
        "steps": [
          {
            "text": "先辨认三份材料：A 是 MiniMax 请求及返回，B 是 ChatGPT 登录服务的 low 档位请求，C 是 ChatGPT 的另一次 high 补跑。页面前两行用 A/B 的发送内容，最后一行用 A/C 的返回；不能把 C 说成 B 的响应。",
            "code": ""
          },
          {
            "text": "历史共同条件：Codex 0.163.0，同一个第 1 章主页起点，分别新会话、只读运行，发送相同问题。记录各自模型、接口、推理档位和请求 ID，不仅记工具版本。历史问题如下。",
            "code": "项目区现在显示什么、数据在哪个文件"
          },
          {
            "text": "发送端看第一条请求：系统指令的实际内容；工具定义是在 tools 字段，还是 input 中的 additional_tools 消息。返回端选实际含 reasoning 条目的响应，分别找正文、summary、content 和 encrypted_content；某条响应没有 reasoning 条目时，不要写成该服务永远不返回推理。",
            "code": ""
          },
          {
            "text": "若准备重跑，先给两边准备相同项目状态，使用自己的 MiniMax Key 与 ChatGPT 登录。Agent Lab 0.1.4 固定 MiniMax，不能传模型名就切换服务。历史 clean-codex.sh 的 ChatGPT 模式只支持文件方式登录，重跑前需核对自己机器的登录存储方式；不复制别人的 auth.json。",
            "code": ""
          },
          {
            "text": "历史脚本的配置位置：通过 clean-codex.sh --tap 传参数时，-c 必须放在 exec 前；补跑 high 要单独保存会话及返回。三组记录可在私有讲师实验包离线查看。high 的问题与 A/B 不同，完整原文分别保存在各组 user-prompt.txt。项目为重建候选；离线查看已验证，服务重跑仍需自己的登录和配置。",
            "code": ""
          }
        ],
        "note": "默认录制直接讲现有汇总表。看不到推理正文不等于没有推理；这里比较可见形式，不比较质量。具体请求 ID 与历史配置在章 LOG 的 2026-10-22 对比记录中。"
      },
      "teaching": [],
      "source": "index.html#p62a",
      "seconds": 90
    },
    {
      "id": "p62b",
      "segment": "看版本",
      "layout": "evidence-scene",
      "label": "系统指令的版本历史",
      "title": "系统指令会随版本变",
      "lead": "Phistory 收录不同版本的系统指令快照。现有截图对比 Codex CLI 0.156.0 与 0.157.0：对外发送消息的授权表述增加了明确调用的技能或插件，并要求点明来源。它说明指令会随版本维护，不能仅凭这处变化断言实际行为的原因。截图来自 OpenAI 模型配置，不是课程 MiniMax 配置的指令；可作为升级后排查差异的入口。",
      "html": "<div class=\"p-shot\" style=\"--shot-h:390px\" data-reveal=\"0\"><div class=\"p-page\"><div class=\"p-page-bar\"><i></i><i></i><i></i>phistory.cc · Codex CLI 0.156.0 → 0.157.0 · 系统指令对比（OpenAI 模型下的快照）</div><img src=\"external/phistory-codex-0.156.0-0.157.0.png\" alt=\"Phistory 查看器：Codex CLI 0.156.0 与 0.157.0 系统指令的逐行对比，红色是删去的一句，绿色是改写后的一句\"></div></div>",
      "refs": [
        {
          "kind": "live",
          "group": "Codex 0.156.0 → 0.157.0",
          "text": "Phistory 对比页",
          "url": "https://phistory.cc/?agent=codex&from=0.156.0&to=0.157.0"
        },
        {
          "kind": "live",
          "group": "v0.1.146",
          "text": "claude-tap README",
          "url": "https://github.com/liaohch3/claude-tap/blob/v0.1.146/README.md#built-with-claude-tap"
        }
      ],
      "steps": [
        "看对比"
      ],
      "script": [
        "【操作提示｜停留 p62b 第 1 步，直接讲已有截图，指红绿差异；不切网站、不重跑】\n\n工具和服务选定以后，还会遇到升级。系统指令会不会跟着变？Phistory 收录了不同版本的指令快照，可以逐行对比。图里是 Codex 的两个相邻版本：旧版要求得到明确授权才能替人发消息；新版补充了明确调用的技能或插件也可以提供授权，并要求点明来源。\n\n这张图来自 OpenAI 模型配置，和课上 MiniMax 那份指令要分清。以后升级工具，发现表现变了，可以从这种差异里找线索，再结合实际请求和运行结果判断。"
      ],
      "repro": {
        "label": "实验说明：截图定位与离线讲解",
        "steps": [
          {
            "text": "直接使用本页截图，原文件在本节 external/phistory-codex-0.156.0-0.157.0.png。录前在本机确认图能打开；不需要安装两个旧 Codex，也不需要模型 Key。",
            "code": ""
          },
          {
            "text": "核对截图顶部：Codex CLI；左边 0.156.0，右边 0.157.0，两边均为 Default。选原文视图，重点指第 15 行红绿变化；第 13 行的通用授权段不是这次讲解重点。",
            "code": ""
          },
          {
            "text": "按画面解释：左侧要求先有明确授权才能替人发消息；右侧增加了明确调用的技能或插件也可提供授权，并要求在回复中点明并链接该技能或插件。只讲这一处文本变化，不把它解释成任意插件都能自行授权。",
            "code": ""
          },
          {
            "text": "若在线查看，使用下方 Phistory 对比页入口并核对同一工具、版本和变体，再定位到这段差异。网页打不开、布局改变或找不到相同快照，就回到已保存截图，不临时换成最新版本截图。",
            "code": ""
          }
        ],
        "note": "截图来自 OpenAI 模型配置，和课程 MiniMax 的系统指令分开讲。它证明指令文本有变化，不证明某次运行行为必然由这处变化导致。"
      },
      "teaching": [],
      "source": "index.html#p62b",
      "seconds": 30
    },
    {
      "id": "p63",
      "segment": "小结",
      "label": "本节小结",
      "title": "五条做法，和这一章",
      "lead": "五个扩展观察：一次任务的累计费用、主动选择交接信息，以及工具、模型服务和版本带来的差异。全章从请求组成、历史变化，到依据与可见范围，再到工具返回支持发布判断。项目留下审过的提交、公开 URL 和发布版本 ch02-homepage-release；下一章给个人主页加一个小游戏。",
      "html": "<div class=\"p-grid\" style=\"--n:5;gap:10px\"><div class=\"p-box is-soft\" data-role=\"ink\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>看代价</h3><p>累计用量，分别计价</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>写交接</h3><p>留什么由我们决定</p></div><div class=\"p-box is-soft\" data-role=\"tool\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>换工具</h3><p>先看它放了什么</p></div><div class=\"p-box is-soft\" data-role=\"agent\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>换服务</h3><p>分别看请求与返回</p></div><div class=\"p-box is-soft\" data-role=\"gate\" data-reveal=\"0\" style=\"padding:8px 14px\"><h3>看版本</h3><p>指令会随版本变</p></div></div><div class=\"p-flow\" style=\"--n:5;margin-top:14px\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"1\"><h3>2.1</h3><p>只说了一句话，模型收到了什么</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><h3>2.2</h3><p>补上个人经历，看对话怎么变长</p></div><div class=\"p-node\" data-role=\"tool\" data-reveal=\"1\"><h3>2.3</h3><p>参考一个主页改风格：它看到了什么</p></div><div class=\"p-node\" data-role=\"ok\" data-reveal=\"1\"><h3>2.4</h3><p>发布上线，看 Codex 怎么用 gh</p></div><div class=\"p-node\" data-role=\"ctx\" data-reveal=\"1\"><h3>2.5</h3><p>用好 context 的五个做法</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:14px\">下一章 · 第 3 章：给个人主页加一个小游戏</div>",
      "steps": [
        "五条做法",
        "回看本章",
        "下一章"
      ],
      "script": [
        "【操作提示｜停留 p63 第 1 步，依次指五张卡】\n\n回到开头这五件事：算累计费用、自己留交接，以及比较工具、服务和版本。它们都在提醒我们：输入的那句话，只是模型收到的内容的一部分。",
        "【操作提示｜推进第 2 步，按顺序指章节节点】\n\n回看全章：先认识请求组成；补个人经历时，看历史怎样增长、清空和压缩；改风格时，分辨它拿到了什么参考、还看不到什么；发布时，再看查询得到的工具返回，怎样支持下一步判断。项目上，我们留下了审过的提交、公开地址，以及 ch02-homepage-release 这个发布版本。",
        "【操作提示｜推进第 3 步，指下一章预告】\n\n下一章，我们给个人主页加一个小游戏。"
      ],
      "teaching": [],
      "source": "index.html#p63",
      "seconds": 90
    },
    {
      "id": "p63a",
      "segment": "小结",
      "label": "章末自检",
      "title": "章末自检：这一章的七个问题",
      "lead": "这七个问题就是第 2 章的目标。先独立作答，答在自己的笔记里；哪一题答不上来，就回到右边那一节再看一遍。不计分。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先独立作答</span><style>.x-p63a span{padding:3px 10px;font-size:17px;line-height:1.35}</style><div class=\"p-matrix x-p63a\" data-reveal=\"1\" style=\"margin-top:6px;grid-template-columns:minmax(0,.2fr) minmax(0,2.4fr) minmax(0,.5fr)\"><div class=\"is-head\"><span>#</span><span>问题</span><span>回到</span></div><div><span>1</span><span>我只说了一句话，模型收到了哪些别的东西？</span><span>2.1</span></div><div><span>2</span><span>这些东西是谁、按什么规则放进去的？</span><span>2.1</span></div><div><span>3</span><span>怎样让它少读、读对？</span><span>2.1</span></div><div><span>4</span><span>第二句话发出去时，带上了什么？代价是什么？</span><span>2.2</span></div><div><span>5</span><span>/clear、压缩、新会话之后，分别还剩什么？文件呢？</span><span>2.2</span></div><div><span>6</span><span>它这样改，依据在请求里的哪一块？它看全了吗，有什么看不见？</span><span>2.3</span></div><div><span>7</span><span>工具列表里没有 gh，它是怎样用上的？GitHub 上的设置和部署状态，怎样进到请求里？</span><span>2.4</span></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:8px\">答不上来的，回到那一节；第 2 章到此结束</div>",
      "steps": [
        "暂停",
        "七个问题",
        "答不上来就回去"
      ],
      "script": [
        "【操作提示｜停留 p63a 第 1 步，指暂停标记；下一步展示题目后留出暂停】\n\n离开这一章前，用这七个问题检查一下自己。看到题目后，可以暂停视频想一想。",
        "【操作提示｜推进第 2 步，指七题，停留供学员暂停】\n\n前面六题，从请求组成一直问到它的依据和可见范围。最后一题接发布：工具列表里没有 gh，Codex 怎样用上它？GitHub 的设置和部署状态，又怎样进入请求？试着用我们看过的例子回答。",
        "【操作提示｜推进第 3 步，指右侧回看节号与结论条】\n\n哪一题还说不清，就回到右边对应的小节再看一遍。第 2 章到这里结束，我们第 3 章见。"
      ],
      "teaching": [],
      "source": "index.html#p63a",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开场",
      "seconds": 60
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
      "label": "换个服务",
      "seconds": 90
    },
    {
      "label": "看版本",
      "seconds": 30
    },
    {
      "label": "小结",
      "seconds": 180
    }
  ]
};
