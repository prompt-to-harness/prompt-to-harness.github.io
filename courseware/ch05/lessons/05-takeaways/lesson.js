window.lesson = {
  "title": "做着做着，还有哪些招数可以带走",
  "chapter": "第 5 章 · SDD",
  "section": "05.05",
  "summary": "前四节把功能做完之后，只看一组可带走的 Vibe Coding 招数；不必今天安装插件，也不作为进入第 6 章的门禁。",
  "scenes": [
    {
      "id": "p41",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "做着做着，还有哪些招数可以带走",
      "title": "还有哪些招数可以带走？",
      "lead": "5.1 至 5.4 已经留下通过本章验收的 JSON Diff 与检查点。做着做着，还有哪些招数可以带走？只看不跟做，也不是进入第 6 章的判断门禁。",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-done\"><b>5.2</b>合并图</li><li class=\"is-done\"><b>5.3</b>双输入</li><li class=\"is-done\"><b>5.4</b>整体验收</li><li class=\"is-now\"><b>5.5</b>可带走的招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">5.1 至 5.4 留下：<b>通过本章验收的 JSON Diff、Review 结果和本地检查点</b></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节只看做着做着就能用的招数：不冲乱主会话、把对话分出去、按画面改、压缩上下文、先生成再改的脚手架，再看一个官方插件。不跟做，不是进第 6 章的门禁</div>",
      "steps": [
        "本章位置",
        "5.1 至 5.4 留下什么",
        "本节要看什么"
      ],
      "script": [
        "【操作提示｜停留课件 p41 第 1 步，指向章节地图上的 5.5；不切窗口】\n\n前四节，我们留下了通过本章验收的 JSON Diff、Review 结果和本地检查点。地图上，这一节是 5.5。",
        "【操作提示｜推进第 2 步，指向 5.1 至 5.4 留下的验收结果与检查点；不切窗口】\n\nJSON Diff 的实现和验收到这里就停。这一节不再写新功能，也不回头总结前四节的模块结构。",
        "【操作提示｜推进第 3 步，指向本节要看的内容；讲完进入 p42】\n\n做着做着，还有哪些招数可以带走？这一节只看不跟做，也不是进入第 6 章的判断门禁。CR-01 留给第 6 章，不作为本节完成条件。我们先看做着做着就能用的官方技巧：不冲乱主会话、把对话分出去、会话变长时压缩上下文、先生成再改的项目脚手架，再加上按画面改；然后只深看一个官方插件。正在做一件事的时候，想问一个局部问题，怎样不冲乱主会话？先看最实用的那一招。"
      ],
      "teaching": [],
      "source": "index.html#p41",
      "seconds": 90
    },
    {
      "id": "p42",
      "segment": "侧聊",
      "label": "正在做一件事的时候，想问一个局部问题，怎样不冲乱主会话",
      "title": "正在做一件事的时候，想问一个局部问题，怎样不冲乱主会话？",
      "lead": "主会话正在实现时，也可以把一句报错或某个 API 问到旁边。这一页只看「主会话还在、局部问题被问到旁边」这一现象，不展开命令百科。",
      "html": "<style>#p42 .p42-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}#p42 .p42-row .p-box h3{font-size:22px;margin:8px 0 0}</style><div class=\"p42-row\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">主会话</span><h3>正在实现</h3><p>这是正在进行的那条对话，先不要把旁问写进去</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">侧聊</span><h3><code>/side</code>（CLI 里也写作 <code>/btw</code>）</h3><p>把一句报错或某个 API 问到旁边，侧聊给出局部回答</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">主记录保持连续。这是本节最实用、也最先看的机关，不必额外安装</div><p class=\"source-note\">课程自绘示意，用来说明侧聊和主会话的关系，不是产品界面；演示片段待按录制版本核验后嵌入，不预写这次侧聊的回答</p>",
      "steps": [
        "主会话还在",
        "问到侧聊",
        "主记录保持连续"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，指向主会话；不切窗口】\n\n主会话可能正在实现。这时如果突然想问一句报错，或查某个 API，不必把它写进正在进行的主对话里。",
        "【操作提示｜推进第 2 步，指向侧聊 /side 或 /btw；不切窗口】\n\n使用 /side。在 CLI 里，它也写作 /btw。把这个局部问题问到侧聊里，让侧聊给出回答。这一页只看「主会话还在、局部问题被问到旁边」这一现象，不展开命令百科。",
        "【操作提示｜推进第 3 步，指向主记录保持连续；讲完进入 p43】\n\n主记录保持连续，正在做的事不会被这句旁问冲乱。这是本节最实用、也最先看的机关，不必额外安装。画面是课程自绘示意；演示用的短片段或截图，要等按录制版本核验后再嵌入，这里不预写这次侧聊的具体回答。想换一种写法试试看，原来的对话怎么办？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Slash commands",
          "url": "https://learn.chatgpt.com/docs/reference/slash-commands"
        },
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Developer commands",
          "url": "https://learn.chatgpt.com/docs/developer-commands"
        }
      ],
      "teaching": [],
      "source": "index.html#p42",
      "seconds": 90
    },
    {
      "id": "p43",
      "segment": "把对话分出去",
      "label": "想换一种写法试试看，原来的对话怎么办",
      "title": "想换一种写法试试看，原来的对话怎么办？",
      "lead": "想换一种写法试试看时，可以把当前对话分出去。原来的记录还在。不要在这里展开 Worktree，那是第 7 章的正课。",
      "html": "<style>#p43 .p43-row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr) minmax(0,.95fr);gap:20px;margin-top:4px;align-items:stretch}#p43 .p43-row .p-box h3{font-size:22px;margin:8px 0 0}</style><div class=\"p43-row\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">当前对话</span><h3>这条记录还在</h3><p>不是问一个局部问题，而是想换一种写法试试看</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">/fork</span><h3>复制到新会话</h3><p>或一个新的工作副本入口，用来试另一种实现</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"ctx\">原来的记录</span><h3>还在原来的位置</h3><p>用来回答「不如换个写法看看」</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\"><code>/fork</code> 也可以复制到 worktree；<code>/worktree</code> 是在新的 Git worktree 里跑对话。深讲留给第 7 章，这里不展开隔离实验</div><p class=\"source-note\">课程自绘示意，不是产品界面；不预写分出去之后的实现结果，演示片段待按录制版本核验后嵌入</p>",
      "steps": [
        "当前对话",
        "用 /fork 分出去",
        "原记录还在"
      ],
      "script": [
        "【操作提示｜停留课件 p43 第 1 步，指向当前对话；不切窗口】\n\n有时候不是问一个局部问题，而是想换一种写法试试看。当前这条对话还在。",
        "【操作提示｜推进第 2 步，指向用 /fork 分出去；不切窗口】\n\n使用 /fork，把当前对话复制到新会话，或者一个新的工作副本入口里，去试另一种实现。",
        "【操作提示｜推进第 3 步，指向原记录还在，并补一句 worktree；讲完进入 p44】\n\n原来的记录还在。这一招用来回答「不如换个写法看看」。官方桌面版还写了：/fork 可以把本地对话复制到新的本地对话，也可以复制到 worktree；/worktree 则是在新的 Git worktree 里跑对话。这里只补这一句，不把 /worktree 做成演示，隔离实验的深讲留给第 7 章。同样，不预写分出去之后的实现结果；演示截图待核验后再补。实现做到一半时，怎样按眼前的画面改界面？"
      ],
      "teaching": [],
      "source": "index.html#p43",
      "seconds": 90
    },
    {
      "id": "p44",
      "segment": "按画面改",
      "label": "实现做到一半时，怎样按眼前的画面改界面",
      "title": "实现做到一半时，怎样按眼前的画面改界面？",
      "lead": "讲的是实现做到一半时怎么用。生活场景的入门用法仍留第 1 章。请对照这两种用法。",
      "html": "<style>#p44 .p44-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}#p44 .p44-row .p-box h3{font-size:22px;margin:8px 0 0}</style><div class=\"p44-row\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">第 1 章</span><h3>把截图、文件交给 AI 看</h3><p>生活场景的入门用法，门槛更低，仍留在第 1 章</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">本节</span><h3>对着当前界面截一张图，按画面改</h3><p>实现做到一半时，把眼前的画面贴进对话，让它按画面修改</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节只讲后一种，不再把截图用法当作入门介绍</div><p class=\"source-note\">课程自绘对照，不是一次实际修改；若录制版本做不到把图片贴进对话并按画面修改，该项从演示里拿掉，改成口播加官方说明。不预写本次修改结果，演示片段待核验后嵌入</p>",
      "steps": [
        "第 1 章的入门用法",
        "做到一半按画面改",
        "本节只讲后一种"
      ],
      "script": [
        "【操作提示｜停留课件 p44 第 1 步，指向第 1 章的入门用法；不切窗口】\n\n第 1 章已经介绍过一种门槛更低的用法：把截图、文件交给 AI 看。生活场景的入门用法仍留在那里，这里不再当入门介绍。",
        "【操作提示｜推进第 2 步，指向做到一半、按画面改；不切窗口】\n\n这一节要看的是实现做到一半时怎么用：对着当前界面截一张图，贴进对话，让它按画面修改。",
        "【操作提示｜推进第 3 步，指向本节只讲后一种；讲完进入 p45】\n\n请对照这两种用法。本节只讲后一种。若录制版本做不到把图片贴进对话并按画面修改，这项演示会拿掉，改成口播加官方说明，不会临场换未证实的替代操作。这里也不预写本次修改结果。实现做到一半、对话已经很长了，怎样压缩当前对话的上下文，继续往下做？"
      ],
      "teaching": [],
      "source": "index.html#p44",
      "seconds": 90
    },
    {
      "id": "p45",
      "segment": "压缩上下文",
      "label": "实现做到一半、对话已经很长了，怎样压缩当前对话的上下文，继续往下做",
      "title": "实现做到一半、对话已经很长了，怎样继续往下做？",
      "lead": "实现做到一半、对话已经很长了，怎样压缩当前对话的上下文，继续往下做？官方说明是：压缩当前对话的上下文。不预写压缩后的摘要长什么样。",
      "html": "<style>#p45 .p45-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}#p45 .p45-row .p-box h3{font-size:22px;margin:8px 0 0}</style><div class=\"p45-row\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">做到一半</span><h3>实现对话已经很长</h3><p>还要在这条对话里继续往下推，不是另开一个新功能</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">/compact</span><h3>压缩当前对话的上下文</h3><p>官方说明是 Compact the current chat’s context</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">压缩之后，仍在原来这条对话里继续做。这里不写出压缩后的摘要长什么样</div><p class=\"source-note\">课程自绘示意，不是一次实际压缩结果；演示片段待按录制版本核验后嵌入</p>",
      "steps": [
        "对话已经很长",
        "用 /compact 压缩上下文",
        "继续往下做"
      ],
      "script": [
        "【操作提示｜停留课件 p45 第 1 步，指向已经很长的实现对话；不切窗口】\n\n实现做到一半时，主对话可能已经很长。这时不是另开一个新功能，而是还要在这条对话里继续往下推。",
        "【操作提示｜推进第 2 步，指向 /compact；不切窗口】\n\n使用 /compact。官方说明是：压缩当前对话的上下文。",
        "【操作提示｜推进第 3 步，指向继续往下做；讲完进入 p46】\n\n压缩之后，仍在原来这条对话里继续做。这一页不预写压缩后的摘要长什么样；演示片段要等按录制版本核验后再嵌入。怎样先给当前项目生成一份 AGENTS.md 脚手架，再改它？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Slash commands",
          "url": "https://learn.chatgpt.com/docs/reference/slash-commands"
        }
      ],
      "teaching": [],
      "source": "index.html#p45",
      "seconds": 90
    },
    {
      "id": "p46",
      "segment": "生成脚手架",
      "label": "怎样先给当前项目生成一份 AGENTS.md 脚手架，再改它",
      "title": "怎样先生成一份 AGENTS.md 脚手架，再改它？",
      "lead": "怎样先给当前项目生成一份 AGENTS.md 脚手架，再改它？第 2 章已经讲过怎么写这份文件，这里只看「先生成再改」。",
      "html": "<style>#p46 .p46-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}#p46 .p46-row .p-box h3{font-size:22px;margin:8px 0 0}</style><div class=\"p46-row\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">/init</span><h3>生成 AGENTS.md 脚手架</h3><p>官方说明是 Generate an AGENTS.md scaffold for the current project</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">然后</span><h3>先生成，再改</h3><p>第 2 章已经讲过怎么写这份文件，这里不把写法再讲一遍</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">同一页带一句：<code>/project</code> 是给新对话选择项目，不必单开一页</div><p class=\"source-note\">课程自绘示意，不预写生成出来的文件内容；演示片段待按录制版本核验后嵌入</p>",
      "steps": [
        "用 /init 生成脚手架",
        "先生成，再改",
        "带一句 /project"
      ],
      "script": [
        "【操作提示｜停留课件 p46 第 1 步，指向 /init；不切窗口】\n\n使用 /init。官方说明是：为当前项目生成一份 AGENTS.md 脚手架。",
        "【操作提示｜推进第 2 步，指向先生成再改；不切窗口】\n\n第 2 章已经讲过怎么写这份文件。这里只看「先生成，再改」，不再把写法讲一遍。也不预写生成出来的文件内容。",
        "【操作提示｜推进第 3 步，指向 /project 那一句；讲完进入 p47】\n\n同一页再带一句：/project 是给新对话选择项目，不必单开一页。官方插件里，有什么好玩、又和前面做网页不一样的东西？"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Slash commands",
          "url": "https://learn.chatgpt.com/docs/reference/slash-commands"
        }
      ],
      "teaching": [],
      "source": "index.html#p46",
      "seconds": 90
    },
    {
      "id": "p47",
      "segment": "官方插件",
      "label": "官方插件里，有什么好玩、又和前面做网页不一样的东西",
      "title": "官方插件里，有什么好玩、又和前面做网页不一样的东西？",
      "lead": "技巧讲完后，只深看一个官方插件。用代码做视频，和前面做网页、改开源仓库的感觉都不同。不要求安装，也不在课上新建项目。",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">用 <code>/plugins</code> 打开官方目录，只深看一个插件</div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\" style=\"margin-top:12px;padding:12px 20px\"><span class=\"p-tag\" data-role=\"tool\">首选</span><h3 style=\"font-size:22px;margin:8px 0 0\">Remotion 的官方 Codex 插件</h3><p>用代码做视频。预先审查过的示例用 <code>$技能名</code> 显式调用，点到为止；不要求安装，也不在课上新建项目。若教学账号不可用，改用 Build Web Apps 的界面设计部分，避开 4.6 已提过的浏览器测试；Figma 不作为首选</p></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">展示前先看来源和权限，再决定用不用；不重讲 Skill / Plugin 概念</div><p class=\"source-note\">具体技能名与插件输出以录前审查为准，不在这里写定；演示片段待按录制版本核验后嵌入</p>",
      "steps": [
        "打开官方目录",
        "只深看 Remotion",
        "先看来源和权限"
      ],
      "script": [
        "【操作提示｜停留课件 p47 第 1 步，指向用 /plugins 打开官方目录；不切窗口】\n\n技巧讲完后，用 /plugins 打开官方目录。不要求学员安装，也不在课上新建项目。",
        "【操作提示｜推进第 2 步，指向 Remotion 和备选；不切窗口】\n\n我们只深看一个插件：Remotion 的官方 Codex 插件。它用代码做视频，和前面做网页、改开源仓库的感觉都不同，负责本节的「有趣」。演示会用预先审查过的官方示例或短片段，用 $技能名 显式调用，点到为止。具体技能名和插件输出以录前审查为准，这里不写定。如果录制时这个插件在教学账号里不可用，就改用官方目录里 Build Web Apps 的界面设计部分，只展示界面设计上的指导，避开 4.6 已经提过的浏览器测试。Figma 官方插件需要额外账号，不作为首选。",
        "【操作提示｜推进第 3 步，指向先看来源和权限；讲完进入 p48】\n\n展示前先看来源和权限，再决定用不用。不重讲 Skill、Plugin 的概念和审查步骤，第 3 章已经用 Game Studio 做过。带着什么离开第 5 章？我们把这一节能带走的东西收住。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "官方说明",
          "text": "Plugins",
          "url": "https://learn.chatgpt.com/docs/plugins"
        },
        {
          "kind": "live",
          "group": "插件说明",
          "text": "Remotion 的官方 Codex 插件",
          "url": "https://www.remotion.dev/docs/ai/codex-plugin"
        }
      ],
      "teaching": [],
      "source": "index.html#p47",
      "seconds": 90
    },
    {
      "id": "p48",
      "segment": "小结",
      "label": "带着什么离开第 5 章",
      "title": "带着什么离开第 5 章？",
      "lead": "这些招数可以带走，不必今天安装插件。请看这一节留下什么，以及怎样结束第 5 章。5.5 不是进入第 6 章的判断门禁。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">可带走的招数</h3><ul class=\"p-exits\" style=\"gap:6px\"><li class=\"is-pass\"><span><code style=\"white-space:nowrap\">/side</code>（CLI 里也写作 <code style=\"white-space:nowrap\">/btw</code>）</span></li><li class=\"is-pass\"><span><code style=\"white-space:nowrap\">/fork</code></span></li><li class=\"is-pass\"><span>把界面截图贴进对话，按画面改</span></li><li class=\"is-pass\"><span><code style=\"white-space:nowrap\">/compact</code> 压缩上下文</span></li><li class=\"is-pass\"><span><code style=\"white-space:nowrap\">/init</code> 先生成再改</span></li><li class=\"is-pass\"><span>一个官方插件：Remotion，或备选的界面设计部分</span></li></ul></div><div data-reveal=\"1\"><h3>怎样带走</h3><div class=\"p-star\" style=\"width:300px;font-size:22px\">这些招数可以带走<br>不必今天安装插件</div></div><div class=\"p-next\" data-reveal=\"2\"><h3>本章到此结束</h3><div class=\"p-box\" data-role=\"us\"><h3>交给第 6 章的</h3><p>5.4 已留下的验收结果。CR-01 仍留在第 6 章；5.5 不是进入第 6 章的判断门禁</p></div></div></div>",
      "steps": [
        "可带走的招数",
        "不必今天安装",
        "本章到此结束"
      ],
      "script": [
        "【操作提示｜停留课件 p48 第 1 步，指向可带走的招数；不切窗口】\n\n这一节看了做着做着就能用的官方技巧：/side，也就是 CLI 里的 /btw；/fork；把界面截图贴进对话、按画面改；/compact 压缩当前对话的上下文；以及 /init，先生成 AGENTS.md 脚手架再改，并带了一句 /project。然后看了一个官方插件。",
        "【操作提示｜推进第 2 步，指向不必今天安装；不切窗口】\n\n这些招数可以带走，不必今天安装插件。顺带提一句：产品自带的 /review，在需要看具体文件改动时再配上 /diff，可以检查未提交改动。官方说明是聚焦行为变化和缺测，并且不改工作区。它不能代替本章验收，也不重讲 5.4 的规格回环。/memories 也只提一句：在 Memories 可用时，可以配置这次对话能否使用或生成记忆。这一项还要等录制版本核验，未核验就不在画面上演示，也不猜测它会怎样工作。语音口述，或从 CLI 用 /app 接到桌面版，以及桌面版的 /pet，同样要等核验通过后才作为补充；未核验就不在画面上演示。/pet 即使出现，也只是大约十秒的趣味收尾，不占正片。",
        "【操作提示｜推进第 3 步，指向本章到此结束；不切窗口】\n\n第 5 章到这里结束。交给第 6 章的是 5.4 已经留下的验收结果与检查点。CR-01 仍留在第 6 章。5.5 不是进入第 6 章的判断门禁。"
      ],
      "teaching": [],
      "source": "index.html#p48",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "侧聊",
      "seconds": 90
    },
    {
      "label": "把对话分出去",
      "seconds": 90
    },
    {
      "label": "按画面改",
      "seconds": 90
    },
    {
      "label": "压缩上下文",
      "seconds": 90
    },
    {
      "label": "生成脚手架",
      "seconds": 90
    },
    {
      "label": "官方插件",
      "seconds": 90
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
