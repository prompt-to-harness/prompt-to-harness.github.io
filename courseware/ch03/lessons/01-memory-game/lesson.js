window.lesson = {
  "title": "经历一次真实的游戏开发",
  "chapter": "第 3 章 · Vibe Coding 与能力扩展",
  "section": "03.01",
  "summary": "给主页增加翻牌游戏，从案例理解过程变化与质量，复用方法并核对自己的交付。",
  "scenes": [
    {
      "id": "p01",
      "segment": "作品目标",
      "title": "给个人主页增加一个翻牌游戏",
      "label": "给个人主页增加一个翻牌游戏",
      "lead": "",
      "layout": "memory-slide m31-slide m31-p01",
      "html": "<div class=\"m31-content\"><div class=\"m31-opening\">\n      <div class=\"m31-opening-copy\"><h3>让来访者在你的主页上，<br>玩一局</h3><a class=\"m31-demo\" href=\"http://127.0.0.1:4397/games/a2/index.html\" target=\"_blank\" rel=\"noopener\">打开游戏，看看玩法 <span aria-hidden=\"true\">↗</span></a></div>\n      <div class=\"m31-home-sketch\" role=\"img\" aria-label=\"作品示意：个人主页中加入一个翻牌游戏，卡片里有一对相同的星星图案。\">\n        <div class=\"m31-browser-bar\"><i></i><i></i><i></i><span>我的个人主页</span></div>\n        <div class=\"m31-home-body\"><div class=\"m31-profile\"><strong>示例同学</strong><span>正在学习 AI 协作开发</span><div class=\"m31-home-nav\"><b>查看项目</b><b>记忆翻牌</b></div></div><div class=\"m31-game-sketch\"><div class=\"m31-sketch-label\">记忆翻牌<span>作品示意</span></div><div class=\"m31-card-grid\"><span class=\"is-pair\">★</span><span>?</span><span>?</span><span>?</span><span class=\"is-pair\">★</span><span>?</span></div></div></div>\n      </div>\n    </div></div>",
      "steps": [
        "给个人主页增加一个翻牌游戏"
      ],
      "script": [
        "【操作提示｜说明主页新增游戏的目标，借示意图认识翻牌配对，再打开参照游戏。】\n\n第二章，我们已经把个人主页发布出去了。第三章，我们就在这个主页项目里做两个小游戏：记忆翻牌和躲避游戏。我们先从一个问题开始：把同样的翻牌任务交给 AI 做几次，为什么有的版本玩起来顺手，有的却还要返工？"
      ],
      "source": "index.html#p01",
      "seconds": 60
    },
    {
      "id": "p01b",
      "segment": "开发请求",
      "title": "给 Codex 的完整开发请求",
      "label": "给 Codex 的完整开发请求",
      "lead": "",
      "layout": "prompt-scene m31-prompt",
      "html": "<section class=\"m31-launch\" aria-label=\"启动命令\"><p>在个人主页项目目录启动 Codex，可实时查看会话记录</p><div class=\"p-term\" data-copy=\"agent-lab codex --inspect\">$ agent-lab codex --inspect</div></section>",
      "steps": [
        "给 Codex 的完整开发请求"
      ],
      "script": [
        "【操作提示｜在已有主页项目中用页面上的命令启动 Codex，打开终端打印的 Viewer 链接，再复制并发送完整请求。】\n\n这次我们还是按前两章的四要素来写。目标是在主页加入一个记忆翻牌小游戏，上下文就是第二章已经完成的个人主页。\n\n最终试玩和验收由我负责，Codex 也可以自行做浏览器检查。完成标准是它跑 build 成功。这里把原来的要求分开写清楚，图案、布局等细节仍没有逐一规定。\n\n现在把这段请求发出去。趁它还在运行，我们来看看之前做过的几份翻牌游戏。最后再回到这次的作品，检查实际结果。"
      ],
      "source": "index.html#p01b",
      "seconds": 60,
      "repro": {
        "label": "使用课程独立环境",
        "steps": [
          {
            "text": "准备 uv、Codex CLI，并在当前终端设置 MINIMAX_API_KEY"
          },
          {
            "text": "安装或更新到本节使用的 Agent Lab 0.1.8",
            "code": "uv tool install --force https://github.com/prompt-to-harness/prompt-to-harness.github.io/releases/download/agent-lab-v0.1.8/agent_lab-0.1.8-py3-none-any.whl"
          },
          {
            "text": "在第二章完成的个人主页项目目录启动 Codex",
            "code": "agent-lab codex --inspect"
          },
          {
            "text": "打开终端打印的 Inspect Viewer 链接，再复制本页请求发送。Viewer 会自动显示后续消息与工具记录。"
          }
        ]
      },
      "prompt": "Goal：在主页加入一个记忆翻牌小游戏。\nContext：当前项目是第二章完成的个人主页。\nConstraints：最终试玩和验收由我负责\nDone when：你跑 build 成功。"
    },
    {
      "id": "p05",
      "segment": "过程与质量",
      "title": "AI 的随机性：同一任务，也可能走出不同过程",
      "label": "AI 的随机性：同一任务，也可能走出不同过程",
      "lead": "",
      "layout": "memory-slide m31-slide m31-p05 m31-knowledge",
      "html": "<div class=\"v-group\"><div class=\"v-branch\"><section class=\"v-branch-task memory-frame\"><h3>同一个开发任务</h3><p>相同的目标与条件</p></section><svg class=\"v-branch-arrows\" viewBox=\"0 0 90 220\" aria-hidden=\"true\"><g fill=\"none\" stroke=\"#68717b\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 110 C40 110 40 48 78 48 M66 38 L79 48 L66 58\"/><path d=\"M10 110 C40 110 40 172 78 172 M66 162 L79 172 L66 182\"/></g></svg><div class=\"v-branch-routes\"><section><p class=\"v-label\">一种可能的过程</p><p class=\"v-route-line\">先规划 <span>→</span> 实现 <span>→</span> 检查规则与画面</p></section><section><p class=\"v-label\">另一种可能的过程</p><p class=\"v-route-line\">直接实现 <span>→</span> 构建检查 <span>→</span> 交付</p></section></div></div><h3 class=\"v-conclusion\">一次成功，不保证下一次仍采用同样的做法</h3><a class=\"m31-demo m31-gallery-link\" href=\"cases.html#overview\" target=\"_blank\" rel=\"noopener\">试玩六个翻牌游戏 <span aria-hidden=\"true\">↗</span></a></div>",
      "steps": [
        "AI 的随机性：同一任务，也可能走出不同过程"
      ],
      "script": [
        "【操作提示｜对比两种可能的开发过程，指出检查覆盖范围的差别，再解释为什么一次成功不能保证下次采用同样做法。示意不作为随机性实验。】\n\n前面我们讲过，大模型的输出有随机性。放到开发任务里，同样的要求，每次生成的方案、采用的步骤，也可能有差别。它会参考任务和已有信息来做，但这些信息通常还留有选择的空间。\n比如，可能先把玩法和界面一起规划好，再开始写代码，也可能直接动手；检查时，可能只跑构建，也可能继续试玩、看截图。这些做法变了，最后的体验、能发现哪些问题，也可能跟着变。两种布局可以都符合要求，但如果漏掉了通关检查，提前结束的问题就可能留下来。\n刚才几份游戏的任务条件不同，我们用它们来看开发过程怎样影响质量。回到一个新的任务，即使上一次做得很好，也还要看这一次准备怎么做、怎么检查。我们希望它继续采用哪些做法，就可以提前说明。"
      ],
      "source": "index.html#p05",
      "seconds": 60
    },
    {
      "id": "p06",
      "segment": "方法与复用",
      "title": "目标之外，还要说明关键做法",
      "label": "目标之外，还要说明关键做法",
      "lead": "",
      "layout": "memory-slide m31-slide m31-p06 m31-knowledge",
      "html": "<div class=\"v-group\"><p class=\"v-intro\">目标说明要做出什么，指导补充怎样开展工作</p><div class=\"v-guides\"><section><h3>规划</h3><p>先考虑完整的<br>使用过程</p></section><section><h3>要求</h3><p>明确必须满足的<br>规则与限制</p></section><section><h3>验证</h3><p>检查功能与实际画面<br>修改后复查</p></section></div><p class=\"v-boundary\">明确关键做法，同时保留具体设计的选择空间</p></div>",
      "steps": [
        "目标之外，还要说明关键做法"
      ],
      "script": [
        "【操作提示｜目标说明要什么；三项指导说明决策依据，不是三个强制动画步骤。】\n\n刚才这些做法，如果我们希望下一次也用上，就可以在开始任务前写下来，交给 AI。只说要做一个游戏，怎样安排工作、怎样检查，就有不少地方要由它自己决定。我们可以再补上三类指导。\n第一，动手前先考虑什么。比如先把玩家从开始到结束的过程想一遍，再确定整体的视觉风格。第二，写代码时要满足哪些要求。游戏规则要保留，各部分也要按已经确定的设计来做。第三，做完以后怎么检查。根据要求写清预期，运行检查，再看实际效果；改了问题，还要重新检查。\n图案和布局这些细节，仍然可以让它自己选择。我们把在意的要求和必要的检查说清楚，它做决定时就有了可以参照的内容。至于这次有没有照着做，我们还要看实际过程。那么，下次换一个游戏，这些内容是不是都得重新写？"
      ],
      "source": "index.html#p06",
      "seconds": 60
    },
    {
      "id": "p06c",
      "segment": "方法与复用",
      "title": "本次任务与可复用指导，共同指导工作",
      "label": "本次任务与可复用指导，共同指导工作",
      "lead": "",
      "layout": "memory-slide m31-slide m31-p06c m31-knowledge",
      "html": "<div class=\"v-group\"><div class=\"v-inputs\"><section class=\"memory-frame\"><div><p class=\"v-label\">本次任务</p><h3>这次要交付什么</h3><p>目标、具体条件与限制</p><p class=\"v-example\">例如：配齐六对才通关</p></div></section><i>＋</i><section class=\"memory-frame\"><div><p class=\"v-label\">可复用指导</p><h3>这类工作怎样做</h3><p>适用做法与检查要求</p><p class=\"v-example\">例如：按当前规则检查通关和重开</p></div></section></div><div class=\"v-merge\">↓</div><h3 class=\"v-conclusion\">结合当前任务，决定具体方案并执行</h3></div>",
      "steps": [
        "本次任务与可复用指导，共同指导工作"
      ],
      "script": [
        "【操作提示｜先解释任务与指导的分工，再用一行游戏例子确认理解。】\n\n我们可以把这次特有的要求，和以后也能用的做法分开。本次任务里，说清楚要做什么、有什么条件和限制；同类任务都用得上的方法，就单独保存。AI 做当前任务时，要把这两部分结合起来。\n比如，“配齐六对才通关”，说的是这次游戏的规则。下次可能换成八对，也可能换一种玩法。但是，“按游戏规则检查还没完成、已经完成和重新开始这几种状态”，这个方法还可以继续用。视觉要求也一样。这次想用紫色，可以在任务里说明；如果以后做一组游戏，都希望用同一种风格，也可以把这些要求单独写成指导，反复使用。\n所以，我们可以把适合同类任务的方法和要求保存下来。以后换一个任务，只补充这次的具体条件，就不用从头再整理一遍共同的做法。"
      ],
      "source": "index.html#p06c",
      "seconds": 60
    },
    {
      "id": "p06d",
      "segment": "方法与复用",
      "title": "Skill：一份可按需读取的任务指导",
      "label": "Skill：一份可按需读取的任务指导",
      "lead": "",
      "layout": "memory-slide m31-slide m31-p06d m31-knowledge",
      "html": "<div class=\"v-group\"><div class=\"v-skill-flow\"><section class=\"v-endpoint\"><h3>当前任务</h3><p>目标与具体条件</p></section><i>→</i><section class=\"v-skill memory-frame\"><p class=\"v-label\">读取适用的 Skill</p><h3>一类任务可复用的指导</h3><p>适合什么任务<br>怎样开展工作<br>怎样检查与交付</p></section><i>→</i><section class=\"v-endpoint\"><h3>结合任务执行</h3><p>落实到当前项目</p></section></div><p class=\"v-boundary\">读取了指导，仍要检查是否落实、结果是否正确</p></div>",
      "steps": [
        "Skill：一份可按需读取的任务指导"
      ],
      "script": [
        "【操作提示｜定义 Skill，并说明按需读取、结合任务执行及验证的关系；随后回现场。】\n\n那这些反复要用的指导，可以保存在哪里？我们可以把它们整理成 Skill，供 AI 在需要的时候读取。里面说明这份指导适合什么任务、应该怎样开展工作，以及做完以后怎么检查和交付。比如，我们保存一份游戏开发指导，下次做新游戏时，就能继续用里面的规划和检查方法。\n\n接到新任务以后，AI 读取适用的 Skill，再结合这次的目标、条件和现有项目来做。这样，同类任务就有了一份可以反复参照的指导，具体的游戏方案仍然可以不同。\n这里还要分清几件事：读到了 Skill，接下来要看有没有按里面的要求去做；做了以后，还要检查结果是否符合要求。我们仍然需要看实际过程、验证成品。下一节再具体看怎样调用和读懂 Skill。现在先回到刚才的主页任务，看看这次做出来的游戏。"
      ],
      "source": "index.html#p06d",
      "seconds": 60,
      "repro": {
        "label": "讲师材料",
        "steps": [
          {
            "text": "回到现场试玩与发布",
            "jump": true,
            "links": [
              {
                "text": "回到现场试玩与发布",
                "url": "speaker.html#f18"
              }
            ]
          }
        ]
      }
    },
    {
      "id": "p06b",
      "segment": "交付与回顾",
      "title": "做出游戏，也要判断它做得怎么样",
      "label": "做出游戏，也要判断它做得怎么样",
      "lead": "",
      "layout": "memory-slide m31-slide m31-p06b m31-knowledge",
      "html": "<div class=\"v-group\"><div class=\"v-recap\"><section><p class=\"v-label\">作品收获</p><h3>主页上多了一个<br>可玩的翻牌游戏</h3><p>能进入 · 能完成一局 · 能重新开始</p></section><section><p class=\"v-label\">认识收获</p><h3>验证这次的结果<br>留下可复用的做法</h3><p>过程可能变化，结果需要验证。<br>可复用的指导可以整理为 Skill</p></section></div></div>",
      "steps": [
        "做出游戏，也要判断它做得怎么样"
      ],
      "script": [
        "【操作提示｜本次公开主页通过检查后，才返回本页回顾。】\n\n这一节，我们给个人主页加了一个能玩的游戏。开发过程中，我们也看到，方案怎么选、代码怎么写、做完怎么检查，都会影响最后的质量。同样的目标，AI 每次采用的方案和步骤可能有变化，所以拿到成品以后，我们仍然要按要求去验证。\n我们还找到了几种以后可以继续用的做法，比如提前规划玩法和视觉风格，再按规则检查游戏和实际画面。这些方法可以整理成 Skill，下次做同类任务时继续使用。"
      ],
      "source": "index.html#p06b",
      "seconds": 60
    },
    {
      "id": "p06a",
      "segment": "交付与回顾",
      "title": "换一个游戏，<br>怎样延续<br>这套视觉风格？",
      "label": "换一个游戏，怎样延续这套视觉风格？",
      "lead": "",
      "layout": "memory-slide m31-slide m31-p06a",
      "html": "<div class=\"m31-content\"><figure class=\"m31-reference\"><img src=\"evidence/minimax-20261106/screenshot-initial.png\" alt=\"紫色翻牌游戏的背景、牌背与操作区域\" width=\"1200\" height=\"900\"></figure><div class=\"m31-reflection\"><p>保留哪些特点？</p><p>怎样写成可执行的指导？</p><p>怎样检查新游戏？</p><small>暂停写下初稿，下一节带着方法回看</small></div></div>",
      "steps": [
        "换一个游戏，怎样延续这套视觉风格？"
      ],
      "script": [
        "【操作提示｜展示参照与三个问题，邀请暂停写初稿并保存；下一节学方法后回看。】\n\n现在我们已经把游戏调整成了自己喜欢的样子。如果接下来换一种玩法，还希望新游戏看起来属于同一个系列，应该怎样告诉 AI？\n大家可以先暂停，试着写一份指导：哪些特点需要保留，哪些可以随着玩法变化，最后又怎么检查。也可以让 Codex 帮你整理成一份 Skill，先保存这个初版。\n\n下一节，我们会进一步认识 Skill，学习怎样调用、读懂和组织里面的指导。带着这些方法，也可以尝试修改、编写自己的 Skill。学完以后，再回来看看：你刚才写的指导，有哪些地方需要补充？"
      ],
      "source": "index.html#p06a",
      "seconds": 60,
      "repro": {
        "label": "讲师材料",
        "steps": [
          {
            "text": "下一节：认识与使用 Skill",
            "jump": true,
            "links": [
              {
                "text": "下一节：认识与使用 Skill",
                "url": "../02-rules/index.html?mode=slides#p07"
              }
            ]
          }
        ]
      }
    }
  ],
  "segments": [
    {
      "label": "作品目标",
      "seconds": 60
    },
    {
      "label": "开发请求",
      "seconds": 60
    },
    {
      "label": "过程与质量",
      "seconds": 60
    },
    {
      "label": "方法与复用",
      "seconds": 180
    },
    {
      "label": "交付与回顾",
      "seconds": 120
    }
  ]
};
