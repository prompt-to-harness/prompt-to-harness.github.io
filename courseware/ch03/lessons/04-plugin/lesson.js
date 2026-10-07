window.lesson = {
  "title": "做游戏的经验，有人打包好了吗",
  "chapter": "第 3 章 · Vibe Coding + Plugin",
  "section": "03.04",
  "summary": "分清 Plugin 与 Skill，装之前先审；看懂 Skill 怎样按需进入请求。",
  "scenes": [
    {
      "id": "p23",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "有人打包好了吗",
      "title": "做游戏的经验，有现成的吗？",
      "kicker": "第 3 章 · 3.4 · 开篇",
      "lead": "做第二个游戏之前，先找找看",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>3.1</b>加个游戏</li><li class=\"is-done\"><b>3.2</b>谁定的规则</li><li class=\"is-done\"><b>3.3</b>按证据修</li><li class=\"is-now\"><b>3.4</b>审插件</li><li><b>3.5</b>插件的主张</li><li><b>3.6</b>说明在哪</li><li><b>3.7</b>重开清理</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">我们摸到的</span><p>状态要清楚 · 等待和重开要处理 · 成对的要真成对</p></div><div class=\"p-join\" data-reveal=\"2\"><span>有现成的？</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"tool\">Game Studio</span><p>OpenAI 官方插件目录里的一个插件</p></div></div>",
      "steps": [
        "地图",
        "我们摸到的",
        "找到 Game Studio"
      ],
      "script": [
        "到这里，记忆翻牌 v1 已经修好。接下来要做第二个游戏：60 秒躲避与收集。",
        "3.3 我们自己摸到了几条经验：状态要清楚，等待和重开要处理好，成对的东西要真的成对。这些都是一次次踩坑换来的。",
        "有没有人已经把做游戏的经验打包好了？有：OpenAI 官方插件目录里有一个 Game Studio。这一节先弄清它是什么，审一遍，再决定装不装。"
      ],
      "teaching": [],
      "source": "index.html#p23",
      "seconds": 90
    },
    {
      "id": "p24",
      "segment": "是什么",
      "label": "Plugin 和 Skill",
      "title": "一个 Plugin，九个 Skill",
      "kicker": "第 3 章 · 3.4 · 是什么",
      "lead": "Skill 是一个带 SKILL.md 的目录，写着某类任务的经验和做法；SKILL.md 是开放格式，多种 Agent 都能读。Plugin 是 Codex 把 Skill 和其他组件一起打包、安装、停用的单位；Game Studio 只含 Skill、本地脚本和图标。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);align-items:start\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">Plugin · game-studio</span><ul class=\"p-tree\" style=\"margin-top:8px;font-size:19px\"><li><span class=\"p-path\">.codex-plugin/plugin.json</span><span class=\"p-note\">manifest</span></li><li class=\"is-open\" data-reveal=\"1\"><span class=\"p-path\">skills/</span><span class=\"p-note\">9 个 Skill</span></li><li data-reveal=\"2\"><span class=\"p-path\">scripts/</span><span class=\"p-note\">3 个 Python 脚本</span></li><li data-reveal=\"2\"><span class=\"p-path\">assets/</span><span class=\"p-note\">图标</span></li></ul></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">Skill · 一个目录</span><ul class=\"p-tree\" style=\"margin-top:8px;font-size:19px\"><li class=\"is-target\"><span class=\"p-path\">phaser-2d-game/SKILL.md</span></li><li class=\"is-dim\"><span class=\"p-path\">agents/openai.yaml</span></li></ul><p class=\"p-sub\" style=\"margin-top:8px\">名称 + 描述 + 正文的做法</p></div></div><div class=\"p-bar is-light\" data-reveal=\"3\">Skill 是<b>经验说明</b>；Plugin 是<b>打包安装的单位</b></div>",
      "steps": [
        "manifest",
        "Skill",
        "脚本与图标",
        "一句话"
      ],
      "script": [
        "Game Studio 是一个 Plugin。打开它的目录，最上面是 plugin.json，叫 manifest，写着名字、版本、作者、许可证和它声明的能力。",
        "skills 目录里有 9 个 Skill。每个 Skill 就是一个目录，核心是一个 SKILL.md：开头是名称和一句描述，正文写着这类任务的经验和做法。SKILL.md 是开放格式，不只 Codex，别的 Agent 也能读。",
        "另外还有 3 个 Python 脚本和图标。按 Codex 的定义，Plugin 还可以带 MCP 服务器、应用连接器和 Hook；Game Studio 都没有。",
        "一句话区分：Skill 是一份经验说明；Plugin 是把它们打包、安装、停用的单位。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "原文",
          "text": "Game Studio 目录（固定版本）",
          "url": "https://github.com/openai/plugins/tree/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio"
        }
      ],
      "teaching": [],
      "source": "index.html#p24",
      "seconds": 120
    },
    {
      "id": "p25",
      "segment": "审查",
      "label": "装之前审什么",
      "title": "装之前，逐项审",
      "kicker": "第 3 章 · 3.4 · 审查",
      "lead": "沿用 1.3 的权限判断：它从哪来、能做什么、会运行什么、会不会联网。每一项都要有可以打开核对的证据。",
      "html": "<ul class=\"p-checks\" style=\"font-size:20px\"><li data-reveal=\"0\">来源、版本、许可证<small>openai/plugins 官方仓库 · 0.1.0 · MIT · 固定到提交 82fd64b</small></li><li data-reveal=\"1\">声明的能力<small>Interactive、Write：会在仓库里写代码</small></li><li data-reveal=\"2\">会运行的脚本<small>3 个本地图片处理脚本（需要 Pillow），不联网；本课用几何图形，不运行</small></li><li class=\"is-no\" data-reveal=\"3\">允许修改的范围<small>要由我们写：只改游戏模块、入口和必要的样式</small></li></ul><p class=\"source-note\">Game Studio 0.1.0，openai/plugins 提交 82fd64b（2026-10-06 Codex 启动时同步到的版本；Game Studio 目录最后改动于 27651a4）</p>",
      "steps": [
        "来源与版本",
        "能力",
        "脚本",
        "其余与范围"
      ],
      "script": [
        "装之前逐项审。来源：OpenAI 的官方 plugins 仓库，作者 OpenAI。我们固定到一个具体的提交，以后它更新了，我们审的也还是这一版。版本 0.1.0，MIT 许可证。",
        "manifest 里声明的能力是 Interactive 和 Write：它会在我们的仓库里写代码。这和 1.3 讲的一样：会写，就要划范围。",
        "会运行的脚本：3 个本地图片处理脚本，用来做精灵图，需要 Pillow，代码里没有网络请求。我们用几何图形，不需要它们，记下“不运行”。",
        "没有 MCP、连接器和 Hook。最后一项要我们自己写：允许它改哪里。只改游戏模块、入口和必要的样式。把这些写进 CH03_GAME_STUDIO_PLUGIN_LAB.md。请暂停视频，打开它的目录，逐项核对。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "原文",
          "text": "plugin.json",
          "url": "https://github.com/openai/plugins/blob/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/.codex-plugin/plugin.json"
        },
        {
          "kind": "live",
          "group": "原文",
          "text": "scripts/",
          "url": "https://github.com/openai/plugins/tree/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/scripts"
        }
      ],
      "teaching": [],
      "source": "index.html#p25",
      "seconds": 120
    },
    {
      "id": "p26",
      "segment": "审查",
      "label": "Skill 里写了什么",
      "title": "读两段 Skill 原文",
      "kicker": "第 3 章 · 3.4 · 审查",
      "lead": "第一段和 3.3 的经验对上了：计时器属于游戏状态。第二段先记住：2D 默认用 Phaser，除非用户另有要求。我们的 Brief 说要接进现有仓库，这会在 3.5 变成一个需要人做的决定。",
      "html": "<div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">web-game-foundations/SKILL.md</span><p class=\"p-mono\" style=\"margin-top:8px;font-size:21px\">Separate simulation from rendering.<br>Simulation owns entities, turns, <b>timers</b>, collisions …</p></div><p class=\"p-sub\" data-reveal=\"1\" style=\"margin:8px 0 12px\">对照 3.3：等待翻回的计时器、步数，都是游戏状态的一部分</p><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"tool\">game-studio/SKILL.md</span><p class=\"p-mono\" style=\"margin-top:8px;font-size:21px\">Default to a 2D <b>Phaser</b> path unless the user explicitly asks for …</p></div><div class=\"p-bar is-light\" data-reveal=\"3\">Skill 是<b>前人的经验</b>，不是我们的规则</div>",
      "steps": [
        "状态归属",
        "对照 3.3",
        "默认路线",
        "怎么看待"
      ],
      "script": [
        "审查不只看 manifest，也读几段 Skill 原文。web-game-foundations 里有一条架构规则：把模拟和渲染分开；模拟负责实体、回合、计时器、碰撞……",
        "对照 3.3：等待翻回的那个计时器、步数，都是游戏状态的一部分。我们踩坑摸到的经验，这里写成了一条规则。",
        "再看 game-studio 这个总入口的一句：2D 默认走 Phaser，除非用户明确要求别的。先记住这一句。我们的 Brief 会说“接进现有仓库、新依赖先说理由”，两者会在 3.5 碰上。",
        "所以怎么看待 Skill？它是前人的经验，写得很好，但它不是我们的规则。冲突的时候，由我们按证据决定。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "原文",
          "text": "web-game-foundations/SKILL.md",
          "url": "https://github.com/openai/plugins/blob/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/skills/web-game-foundations/SKILL.md"
        },
        {
          "kind": "live",
          "group": "原文",
          "text": "game-studio/SKILL.md",
          "url": "https://github.com/openai/plugins/blob/82fd64bce3869f0d4c0bb2bf0e36a6e262ca5ad8/plugins/game-studio/skills/game-studio/SKILL.md"
        }
      ],
      "teaching": [],
      "source": "index.html#p26",
      "seconds": 120
    },
    {
      "id": "p27",
      "segment": "怎么装",
      "label": "三种装法",
      "title": "同一份 Skill，三种装法",
      "kicker": "第 3 章 · 3.4 · 怎么装",
      "lead": "课程基线用 API key 登录，Codex 的官方插件目录是空的，也不能直接把官方仓库加成市场（市场名是保留名）。官方仓库里的 Skill 仍然能用：本课用课程准备的本地市场装插件，另外两种装法作对照。",
      "html": "<div class=\"p-matrix\" style=\"grid-template-columns:minmax(0,1.3fr) repeat(3,minmax(0,1fr))\"><div class=\"is-head\" data-reveal=\"0\"><span></span><span>本地市场装插件</span><span>skill-installer</span><span>仓库 .agents/skills/</span></div><div data-reveal=\"0\"><span>装在哪</span><span>本机插件缓存</span><span>本机 ~/.codex/skills</span><span>项目仓库</span></div><div data-reveal=\"1\"><span>进不进 git</span><span>不进</span><span>不进</span><span>进</span></div><div data-reveal=\"1\"><span>停用</span><span>一个开关管 9 个</span><span>删目录</span><span>改仓库、提交</span></div><div data-reveal=\"2\" class=\"is-key\"><span>本课</span><span>✓ 主路径</span><span>对照</span><span>对照</span></div></div><p class=\"source-note\">三种装法均在课程基线（tools/clean-codex.sh，API key 登录）下实测，见 courseware/ch03/materials/plugin/README.md。ChatGPT 账号登录下的官方目录未测。</p>",
      "steps": [
        "装在哪",
        "git 与停用",
        "本课的选择"
      ],
      "script": [
        "怎么装？先说一个实测结果：课程基线用 API key 登录，这时 Codex 的官方插件目录是空的，也不能把官方仓库直接加成市场，它的名字是保留名。但官方仓库里的 Skill 本身不需要账号，有三种装法。",
        "第一种，课程准备了一个只含 Game Studio 的本地市场，从里面装插件。第二种，用 Codex 内置的 skill-installer，只把需要的 Skill 装到本机。第三种，把 Skill 目录直接放进仓库的 .agents/skills。区别在于：装在哪，进不进 git。只有第三种跟着仓库走，换台电脑、换个人都一样。",
        "停用也不同：插件一个开关管 9 个 Skill；另外两种要删目录或改仓库。本课用第一种，因为我们要完整走一遍插件的生命周期：审查、安装、使用、停用。另外两种记在审查记录里，3.6 还会用到“进不进 git”这个问题。"
      ],
      "repro": {
        "label": "复现这个实验",
        "steps": [
          {
            "text": "在课程仓库根目录，准备只含 Game Studio 的本地市场（固定到官方仓库的一个提交）",
            "code": "courseware/ch03/materials/plugin/setup-marketplace.sh lab-runs/ch03-plugin/mkt"
          },
          {
            "text": "在隔离环境里加入这个市场并安装",
            "code": "CLEAN_CODEX_HOME=lab-runs/ch03-plugin/home tools/clean-codex.sh -- plugin list\nCLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=lab-runs/ch03-plugin/home tools/clean-codex.sh -- plugin marketplace add \"$PWD/lab-runs/ch03-plugin/mkt\"\nCLEAN_CODEX_KEEP_CONFIG=1 CLEAN_CODEX_HOME=lab-runs/ch03-plugin/home tools/clean-codex.sh -- plugin add game-studio@course-lab"
          }
        ],
        "note": "需要能访问 GitHub。用 ChatGPT 账号登录的 Codex 可直接在 /plugins 的官方目录里安装（未测）。"
      },
      "teaching": [],
      "source": "index.html#p27",
      "seconds": 90
    },
    {
      "id": "p28",
      "segment": "怎么装",
      "label": "装好了，Codex 看到了什么",
      "title": "装好了，请求里只多了 9 行",
      "kicker": "第 3 章 · 3.4 · 怎么装",
      "lead": "安装后开新会话。请求里出现 9 行“名称：描述（文件位置）”，一共约 2.3 KB；9 份 SKILL.md 全文约 37.8 KB，不在请求里。用到某个 Skill 时，Codex 才去读它的全文。",
      "html": "<div class=\"p-code\" data-reveal=\"0\"><div class=\"p-code-head\"><span>新会话的第一次请求（节选）</span><span>9 行 · 2,352 字节</span></div><pre><span style=\"display:block\">- game-studio:phaser-2d-game: Implement 2D browser games …</span><span style=\"display:block\">- game-studio:web-game-foundations: Set browser-game …</span><span style=\"display:block\">  …（共 9 行）</span></pre></div><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:12px\" data-reveal=\"1\"><div class=\"p-box is-soft\" data-role=\"ctx\"><h3>平时</h3><p>名称 + 描述：2.3 KB</p></div><div class=\"p-join\"><span>用到时</span><i class=\"p-arrow\"></i></div><div class=\"p-box is-soft\" data-role=\"tool\"><h3>读全文</h3><p>9 份合计 37.8 KB</p></div></div>",
      "steps": [
        "新会话的请求",
        "按需读取"
      ],
      "script": [
        "审查通过，安装。装完要开一个新会话，Skill 才生效。用 2.1 学过的请求查看工具看新会话的第一次请求：多了 9 行，每行是一个 Skill 的名称、一句描述和文件位置，一共约 2.3 KB。",
        "9 份 SKILL.md 的全文合起来约 37.8 KB，并不在请求里。平时只放名称和描述，Codex 判断用得上某个 Skill 时，才去读它的全文。这叫渐进披露。记住这个结构：平时只放摘要，需要时才展开。3.6 讲 Memory 时它还会出现。请暂停视频，安装，开新会话，在请求里找到这 9 行。"
      ],
      "teaching": [
        {
          "title": "备课参考",
          "text": "数字来自课程基线下的一次请求（claude-tap 记录，2026-10-06），见 materials/plugin/README.md；安装前同一请求里没有这 9 行。"
        }
      ],
      "source": "index.html#p28",
      "seconds": 60
    },
    {
      "id": "p29",
      "segment": "小结",
      "label": "本节小结",
      "title": "先审，再装，再看它进了哪里",
      "kicker": "第 3 章 · 3.4 · 小结",
      "lead": "本节留下一份审查记录（来源、版本、许可证、能力、脚本、允许范围、不运行的脚本）和安装证据。审查不通过或装不上时，使用课程快照继续 3.5 的分析，但不记作插件实操通过。下一节：调用它做第二个游戏。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一句话</h3><div class=\"p-star\" style=\"width:280px;font-size:22px\">Skill：经验<br>Plugin：打包</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">审查记录与允许范围</li><li class=\"is-pass\">安装与新会话证据</li><li class=\"is-stop\">不通过：课程快照，不记作实操</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"ctx\"><h3>3.5 插件的主张</h3><p>它说 Phaser，我们的 Brief 怎么说？</p></div></div></div>",
      "steps": [
        "一句话",
        "留下的",
        "下一节"
      ],
      "script": [
        "Skill 是经验，Plugin 是打包。",
        "这一节留下审查记录和安装证据，都写进 CH03_GAME_STUDIO_PLUGIN_LAB.md。如果审查不通过，或者你的环境装不上，就用课程快照继续 3.5 的分析，但要明确记下来：这不算插件实操通过。",
        "下一节，我们真的调用它做第二个游戏。它说 2D 默认 Phaser，我们的 Brief 会怎么说？"
      ],
      "teaching": [
        {
          "title": "跟做产出",
          "text": "CH03_GAME_STUDIO_PLUGIN_LAB.md：审查结论、允许修改的范围、不运行的脚本；安装与新会话请求中 9 个 Skill 的证据。"
        }
      ],
      "source": "index.html#p29",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "是什么",
      "seconds": 120
    },
    {
      "label": "审查",
      "seconds": 240
    },
    {
      "label": "怎么装",
      "seconds": 150
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
