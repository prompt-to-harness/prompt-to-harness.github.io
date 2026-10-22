window.lesson = {
  "title": "参考一个主页改风格：它看到了什么",
  "chapter": "第 2 章 · Vibe Coding",
  "section": "02.03",
  "summary": "先给 2.2 的内容留一个检查点：只看范围和出处，提交 homepage-v1。再找一个喜欢的主页，分两轮改出自己的风格；每一轮都回到请求记录，看它拿到的参考到底是什么、有什么看不见，审过再提交或 git restore。",
  "scenes": [
    {
      "id": "p35",
      "segment": "先留检查点",
      "layout": "lesson-cover",
      "label": "这一节做什么",
      "title": "参考主页，改出自己的风格",
      "lead": "先给 2.2 留检查点，再参考主页改风格；每一轮都问它看到了什么",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>2.1</b>看请求</li><li class=\"is-done\"><b>2.2</b>补经历</li><li class=\"is-now\"><b>2.3</b>改风格</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:18px\"><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ok\">先</span><p class=\"p-big\" style=\"font-weight:500\">看范围和出处，提交 homepage-v1</p></div><div class=\"p-join\" data-reveal=\"2\"><span>再</span><i class=\"p-arrow\"></i></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">重点</span><p class=\"p-big\" style=\"font-weight:500\">参考一个主页，改两轮风格</p></div></div><div style=\"margin-top:14px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">系统指令</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">环境</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">规则</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">工具返回</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">这一句</div></div><div class=\"p-foot\">不在里面：<span class=\"p-item\" style=\"display:inline-block;margin:4px 6px 0 0;padding:2px 8px;font-size:17px;border-style:dashed\">没读的文件</span><span class=\"p-item\" style=\"display:inline-block;margin:4px 6px 0 0;padding:2px 8px;font-size:17px;border-style:dashed\">浏览器里的页面</span><span class=\"p-item\" style=\"display:inline-block;margin:4px 6px 0 0;padding:2px 8px;font-size:17px;border-style:dashed\">参考主页</span></div></div></div>",
      "steps": [
        "回到地图",
        "先留检查点",
        "再改风格"
      ],
      "script": [
        "【操作提示｜停留课件 p35 第 1 步，指向章节地图上的 2.3，不切工具窗口。录前在练习项目核对：2.2 的改动仍在工作区，未暂存、未提交】\n\n2.2 我们把个人信息放进了主页，页面看过了，build 也通过了。不过改动还只在工作区里，没有提交。",
        "【操作提示｜推进第 2 步，指左边的“先”】\n\n这一节先花几分钟给它留一个检查点：看看改了哪些文件，页面上的每一句是不是都来自 profile.md，然后提交。",
        "【操作提示｜推进第 3 步，指右边的“重点”，再指下方锚点图和列外三样；讲完进入 p36 再切 Terminal】\n\n然后是这一节的重点：找一个喜欢的主页，参考它改出自己的风格，改两轮。每一轮我们都回到这一列方块问一句：它看到了什么？画在列外的，浏览器里的页面、我们看的参考主页，它都看不见。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "本节重点是改风格（章文件 C2-61）；审 2.2 内容只看范围和出处，两页带过。"
        }
      ],
      "source": "index.html#p35",
      "seconds": 90
    },
    {
      "id": "p36",
      "segment": "先留检查点",
      "label": "范围和出处",
      "title": "先看范围和出处",
      "lead": "先用两条命令看范围，再对照 Done when 看内容：页面上的每一句，都能在 profile.md 里找到吗？git status --short 列出所有变化，包括还没被 Git 跟踪的新文件；git diff --stat 只统计已跟踪文件还没暂存的修改：新文件要另外打开看，已经 git add 的改动要用 git diff --cached --stat 看。讲师这次多了一行 ?? AGENTS.md：它是 2.2 我们自己写的规则，不是 Codex 建的，--stat 里看不到它。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:14px\"><div class=\"p-term\" data-copy=\"git status --short\" data-reveal=\"0\"><div class=\"dim\">$ git status --short</div><div> M src/App.tsx</div><div>?? AGENTS.md</div></div><div class=\"p-term\" data-copy=\"git diff --stat\" data-reveal=\"1\"><div class=\"dim\">$ git diff --stat</div><div> src/App.tsx | 12 ++++++++++--</div><div> 1 file changed, 10 insertions(+), 2 deletions(-)</div></div></div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;margin-top:14px\"><div class=\"p-box is-soft\" data-role=\"ok\" data-reveal=\"2\"><h3>src/App.tsx</h3><p>预期之内：项目数据就在这里</p></div><div class=\"p-box is-soft\" data-role=\"ctx\" data-reveal=\"2\"><h3>?? AGENTS.md</h3><p>新文件，不在 --stat 里；是我们在 2.2 写的规则，打开看一眼，一起提交</p></div></div><p class=\"source-note\">画面中的命令输出来自讲师用课程基线在交互界面里的一次运行（2026-10-21 20:30，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max），和 2.2 是同一次留下的工作区，Git 2.50.1；你的输出以自己的 diff 为准</p>",
      "steps": [
        "status",
        "diff --stat",
        "对得上吗"
      ],
      "script": [
        "【操作提示｜课件 p36 第 1 步 → 切 Terminal，在练习项目根目录运行 git status --short。课件画面是讲师 2026-10-21 20:30 那次运行（和 2.2 同一次）的输出，按录制时的实际输出指认；出现 ?? 开头的行就打开看是谁建的】\n\n先看范围，再看内容。在项目目录运行 git status --short。M 开头的是已跟踪文件被修改了，这里是 src/App.tsx。下面还有一行，两个问号开头：AGENTS.md。问号表示这是一个 Git 还没跟踪的新文件。它不是 Codex 建的，是我们在 2.2 自己写的那几行规则。",
        "【操作提示｜同一 Terminal 运行 git diff --stat，指认文件名与增删行数；实际数字与口播的 10 行、2 行不同时按实际数字说，不念画面数字】\n\n再运行 git diff --stat，它统计每个文件改了多少行：App.tsx 新增 10 行、删除 2 行。注意，AGENTS.md 不在这里。--stat 只统计已跟踪、而且还没暂存的修改：新建的文件不在里面，只看 --stat 就会漏掉；已经 git add 过的改动也不在里面，要加 --cached 才看得到。",
        "【操作提示｜回课件 p36 第 3 步；可切 VS Code 打开 AGENTS.md 看一眼。实际列出无关文件、Codex 新建的文件或 package.json 变化时就地指出，在提交前让它收回或放弃。说完暂停提示后再进入 p40】\n\n对照本轮目标：App.tsx 是项目数据所在的文件，预期之内。AGENTS.md 是我们自己写的，打开看一眼，还是那几行，等会儿一起提交。没有别的文件，也没有 package.json 的变化，就没有新依赖。范围对得上，再看内容。请暂停视频，在自己的项目里运行这两条命令；没写 AGENTS.md 的话，你不会看到那一行。"
      ],
      "teaching": [
        {
          "title": "命令说明",
          "text": "未跟踪文件所在目录整个都是新的时，git status --short 只显示目录名（如 ?? src/components/），加 --untracked-files=all 可列出目录里的每个文件。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-21 20:30 那次运行（lab-runs/ch02-context/2.2-simple-20261021-203050）结束后，在它的工作区运行 git status --short 和 git diff --stat，输出与画面一致：改了 src/App.tsx（+10 −2），另有未跟踪的 AGENTS.md（4 行，2.2 p27a 讲师写的）。Codex 在完成报告里说明 AGENTS.md 是它开工前就存在的未跟踪文件。16:22 那次输出相同。src/App.tsx 的改动与 materials/homepage-v1.diff 逐行相同。学员没写 AGENTS.md 时没有这一行。"
        },
        {
          "title": "讲师提示",
          "text": "若 2.2 的真实 diff 出现了无关文件或 package.json 变化，在这里就地指出，并在 p40 之前走“缩小”或“拒绝”（三种处置见 p40c）。"
        }
      ],
      "source": "index.html#p36",
      "seconds": 90
    },
    {
      "id": "p40",
      "segment": "先留检查点",
      "label": "留下检查点",
      "title": "提交一次，留下检查点",
      "lead": "范围对、每处改动都找得到依据、Prompt 之外的动作也都经过我们同意，就接受；三种处置（接受、缩小、拒绝）留到后面的风格改动再细讲，那里更可能用上。审过了就提交：只暂存审过的文件，这次是 src/App.tsx 和我们自己写的 AGENTS.md；再看一遍待提交的内容，然后提交，提交说明写本轮目标和改动文件。这次提交就是检查点。接受错了也回得去：还没提交的用 git restore 放弃修改，已经提交的用 git revert 加一个撤回提交，原来的提交留在历史里。/clear 和压缩只动对话，不动文件；回退靠 git。",
      "html": "<div class=\"p-term\" data-reveal=\"0\" data-copy=\"git add src/App.tsx AGENTS.md\"><div class=\"dim\">$ git add src/App.tsx AGENTS.md</div><div class=\"dim\">$ git diff --cached --stat</div><div> AGENTS.md   |  4 ++++</div><div> src/App.tsx | 12 ++++++++++--</div><div> 2 files changed, 14 insertions(+), 2 deletions(-)</div></div><div class=\"p-term\" data-reveal=\"1\" style=\"margin-top:8px\" data-copy=\"git commit -m &quot;homepage-v1: 补充项目经历&quot; -m &quot;本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx、AGENTS.md&quot;\"><div class=\"dim\">$ git commit -m \"homepage-v1: 补充项目经历\" \\</div><div class=\"dim\">    -m \"本轮目标：在项目区呈现我的项目经历。改动文件：src/App.tsx、AGENTS.md\"</div><div class=\"ok\">[main 7ce0e9f] homepage-v1: 补充项目经历</div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px\">接受错了：还没提交用 <b>git restore</b>，已经提交用 <b>git revert</b> · 回退靠 git，不靠对话</div><p class=\"source-note\">画面中的命令输出来自讲师用课程基线在交互界面里的一次运行（2026-10-21 20:30，Codex 0.163.0 + MiniMax-M3.1-Flash，能力目录开，推理档位 max），和 2.2 是同一次留下的工作区，Git 2.50.1；你的输出以自己的 diff 为准。 7ce0e9f 是示例短哈希，每次提交都不同。</p>",
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
        "暂存并再看一遍",
        "提交并写清说明",
        "接受错了怎么回去"
      ],
      "script": [
        "【操作提示｜停留课件 p40 第 1 步 → 切 Terminal，在练习项目根目录 git add src/App.tsx AGENTS.md（写明路径，不用 git add .；没写 AGENTS.md 的只加 src/App.tsx），再 git diff --cached --stat；回课件】\n\n审过了，就提交。只暂存审过的文件：App.tsx，加上我们自己写的 AGENTS.md。再用 git diff --cached 看一遍，确认要提交的就是这两个文件。",
        "【操作提示｜推进第 2 步 → Terminal 里提交，第一个 -m 写标题，第二个 -m 写本轮目标和改动文件；哈希按实际输出讲】\n\n然后提交。第一个 -m 是标题，第二个 -m 写本轮目标和改动了哪些文件，这次是 App.tsx 和 AGENTS.md。提交时输出的那一行里，有这次提交的短哈希：这就是我们的检查点。",
        "【操作提示｜推进第 3 步，指底部横条；revert 的完整步骤在页面的复现按钮里，讲师在临时分支演示，不在学员主线上做】\n\n万一接受错了，也回得去。还没提交的，用 git restore 放弃修改；已经提交的，用 git revert 再加一个撤回提交，原来的提交还留在历史里。记住一点：/clear 和压缩只动对话，不动文件，回退靠 git。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "这一页只讲提交一次留检查点；restore 和 revert 各一句，revert 的完整步骤在页面上的复现按钮里，讲师可在临时分支演示，学员看懂即可。不教改写历史（reset、amend）。哈希每次不同，按实际输出讲。"
        }
      ],
      "source": "index.html#p40",
      "seconds": 90
    },
    {
      "id": "p40a",
      "segment": "改风格",
      "layout": "prompt-scene",
      "prompt": "Goal：把工作经历改成时间线样式：左列日期，右列公司、职位和一句话。\nContext：参考 <参考主页地址> 的工作经历区块。打不开就按这段描述：\n<两三行描述：左列日期窄、颜色浅；右列加粗公司名，下一行职位>\nConstraints：只改工作经历区块的结构和样式，不改文字，不加依赖；\n先说计划，等我确认再改。\nDone when：我在浏览器里看过、觉得像；你跑 build 成功；文字和 profile.md 一致。",
      "label": "参考主页改一处",
      "title": "参考一个喜欢的主页，只改一处",
      "lead": "homepage-v1 提交了，有了检查点，再做一件更像真实做主页的事：找一个喜欢的主页，只学它的一处风格。讲师选工作经历这一块，改成左列日期、右列内容的时间线。Prompt 里给参考主页的地址，也写两三行描述：它打不开地址，就按描述做。不改文字，不加依赖，先说计划。参考的是风格，不照搬别人的代码和文字。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>只改一处</b><small>工作经历区块的结构和样式</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>地址加描述</b><small>它不一定打得开地址</small></span></li><li class=\"is-ok\" data-reveal=\"2\"><span><b>文字不变</b><small>还是 profile.md 里的那些</small></span></li></ol></div>",
      "steps": [
        "只改一处",
        "地址加描述",
        "文字不变"
      ],
      "script": [
        "【操作提示｜停留课件 p40a 第 1 步，指 Goal 和“只改一处”；Prompt 提前写好，尖括号两处已填】\n\nhomepage-v1 提交了，我们有了一个检查点。现在做一件更像真实做主页的事：找一个喜欢的主页，学它的一处风格。我选工作经历这一块，改成左边日期、右边内容的时间线。只改这一处。",
        "【操作提示｜推进第 2 步，指 Context 里的地址和描述】\n\nContext 里给了参考主页的地址，也写了两三行描述。为什么两样都给？它不一定打得开这个地址。打不开，就按我们的描述做。",
        "【操作提示｜推进第 3 步，指 Constraints 和 Done when；随后切 Terminal 提交 Prompt，等计划，确认后执行，再回课件 p40b】\n\n文字一个字都不改，还是 profile.md 里的那些；不加依赖；先说计划。参考的是风格，不照搬别人的代码和文字。请暂停视频，找一个你喜欢的主页，只挑一处来改。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "讲师的参考主页建议用 brittanychiang.com 的 Experience 区块（左列日期、右列职位与描述），录制前定；尖括号两处提前填好，排练脚本 materials/mainline/run-2.2.sh 用的是同一份。提交后等计划，确认后执行，回课件进入下一页看它拿到了什么。口播点一句出处：作者在源码仓库里允许 fork，要求注明出处，我们只学一处版式，不照搬代码和文字。"
        },
        {
          "title": "讲师提示",
          "text": "这一页的 Prompt 和计划都还没实测（2026-10-22 起新增，章文件 C2-56、C2-58）。学员选自己喜欢的主页，只学一处，不照搬代码和文字。"
        }
      ],
      "source": "index.html#p40a",
      "seconds": 90
    },
    {
      "id": "p40b",
      "segment": "改风格",
      "label": "它拿到了什么参考",
      "title": "它拿到的“参考”，到底是什么",
      "lead": "我们在浏览器里看到的主页，不会自己进入 context。参考送进去有三条路：给地址，它用工具去取；给截图，它收到一张图；自己写描述，它拿到的就是那几行。讲师排练了两次：它用 web_search 工具打开了地址，这个工具在模型服务那一侧执行，不经本地沙箱，也不用我们批准；取回的只有首页摘要，没有我们想参考的那一块，缺的部分它用我们的描述和自己“记得”的样子补上，也没说出来。请求记录里只看得到它打开了哪个网址，取回了什么看不到。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:14px\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">给地址</span><p>默认的网页搜索只拿到摘要</p><p class=\"p-sub\">让它用 curl 取、我们批准联网，才拿到完整 HTML</p></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">给截图</span><p>它收到一张图</p><p class=\"p-sub\">这个模型能读图（实测）</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">写描述</span><p>它拿到的，就是我们写的那几行</p><p class=\"p-sub\">最可控，也最容易漏</p></div></div><div style=\"margin-top:12px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">系统指令</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">环境</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">规则</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">工具返回</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">这一句</div></div><div class=\"p-foot\">排练两次：打开了地址，只拿到首页摘要；取回的内容不在请求记录里，缺的它自己补</div></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:10px\">我们看到的页面，<b>不等于它拿到的参考</b>；缺的部分它会自己补</div>",
      "steps": [
        "给地址",
        "截图和描述",
        "这次走了哪条",
        "结论"
      ],
      "script": [
        "【操作提示｜停留课件 p40b 第 1 步，指“给地址”一栏】\n\n改之前先想一个问题：我们在浏览器里看到的那个主页，它看到了吗？没有，浏览器里的页面不会自己进 context。给地址，它得用工具去取。",
        "【操作提示｜推进第 2 步，指另外两栏】\n\n给截图，它收到的就是一张图。这个模型能读图，我试过，图里的日期、职位，连文字是什么颜色都答得出来。自己写描述，它拿到的就是我们写的那几行，最可控，但我们没写到的，它就不知道。",
        "【操作提示｜推进第 3 步，指锚点图；切 claude-tap 查看器，找这一轮里打开网址的那次调用，按实际记录指认，再回课件】\n\n我排练了两次。它都去打开了地址，用的是 web_search 这个工具，它在模型服务那一侧执行，不经过我们电脑上的沙箱，也没有弹出批准框。请求记录里只看得到它打开了哪个网址，取回了什么，看不到。从它后面的推理看，它只拿到了首页的摘要，没有我们想参考的那一块。",
        "【操作提示｜推进第 4 步，指结论条；留在课件，进入 p40d】\n\n缺的那部分，它用我们写的描述，加上自己“记得”的那个网站补上了，也没告诉我们。这不是模型读不懂网页：我让它改用 curl 在本地取，我在批准框里同意联网，它拿到的是完整的 HTML 和样式，第一条的日期、职位、左右两列怎么排，全都说对了。差别在取网页的那条路。所以我们看到的页面，不等于它拿到的参考。它说“已经按参考改好了”，先问它实际拿到了什么。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "第 3 步切 claude-tap 查看器，找这一轮里和参考有关的那一块：web_search 打开网址的调用（只有网址，没有取回的内容）、本地联网的申请，或者只有 Prompt 里的描述。按实际记录讲，不预设走了哪一条；它的推理里如果写出了自己“记得”的页面结构，可以指出来。"
        },
        {
          "title": "核对记录",
          "text": "2026-10-22 讲师机器上用 curl 实测两个主页：brittanychiang.com 的 HTML 里有经历的文字（服务端渲染），但版式靠 Tailwind 的 class 名和 CSS 文件，HTML 本身看不出长什么样；miaodx.com 的在线简历页 HTML 里没有正文，只有“浏览器未启用 JavaScript”的提示，正文由脚本渲染。默认沙箱不联网见 2.4 的实测（2026-10-07）。2026-10-22 用 run-2.2.sh 排练两次（参考 brittanychiang.com、jonbarron.info，lab-runs/ch02-context/2.2-profile-*-20261022-174731，claude-tap 会话 87745911、bf2d2e01）：它用 Codex 的 web_search 工具打开了地址（brittanychiang.com 那次 4 次，jonbarron.info 那次 3 次，动作是 open_page），这个工具在模型服务那一侧执行，不经本地沙箱，也不用人批准；请求里这个工具的配置是 `external_web_access: false`。取回的只有首页摘要，brittanychiang.com 那次没拿到 Experience 区块，jonbarron.info 的 cv.html 没打开；缺的部分，它用 Prompt 里的描述加上自己“记得”的那个网站补齐（推理里写出了一段它以为的页面结构，没有核实）。取回的内容不在 claude-tap 记录的请求里，记录里只有“打开了哪个网址”。两次做出的时间线样式相近。最初只看画面记录，误记为“没有取地址”，已按请求记录更正（章文件 C2-62）。截图：2026-10-22 用 codex exec -i 实测，MiniMax-M3.1-Flash 读出了截图里的日期、职位和文字颜色，没调用工具，约 1 万 token；交互界面里怎样贴图录制前核对。网页搜索 cached 与 live 两种模式在 MiniMax 下实测看不出区别；关掉网页搜索、打开联网让它用 curl 取，Experience 第一条和左右两列的 class 全部答对，约 15 万 token。见章文件实测记录。录制时可以把 p40a 的 Prompt 写成“用 curl 取这个地址的 HTML 和 CSS”，人在批准框里同意联网。"
        }
      ],
      "source": "index.html#p40b",
      "seconds": 120
    },
    {
      "id": "p40d",
      "segment": "改风格",
      "label": "第二轮：说清哪里不像",
      "title": "第二轮：说清哪里不像",
      "lead": "第一轮改完，在浏览器里把自己的页面和参考并排看。哪里不像，用话说出来：哪一块、差在哪、想要什么样子，一次只说一两处。它看不见我们的浏览器，也看不见参考页面，我们说出来的这几句，就是它这一轮能拿到的全部参考。第二轮的请求会带着第一轮的对话历史，所以不用重复上一轮的要求。",
      "html": "<div class=\"p-flow\" style=\"--n:3\"><div class=\"p-node\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-num\">1</span><h3>并排看</h3><p>自己的页面和参考</p></div><div class=\"p-node\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-num\">2</span><h3>说清差别</h3><p>哪一块、差在哪、要什么样</p></div><div class=\"p-node\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-num\">3</span><h3>再改一轮</h3><p>还是先说计划</p></div></div><div style=\"margin-top:14px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">系统指令</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">环境</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">规则</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">对话历史</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">工具返回</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">这一句</div></div><div class=\"p-foot\">不在里面：<span class=\"p-item\" style=\"display:inline-block;margin:4px 6px 0 0;padding:2px 8px;font-size:17px;border-style:dashed\">浏览器里的效果</span><span class=\"p-item\" style=\"display:inline-block;margin:4px 6px 0 0;padding:2px 8px;font-size:17px;border-style:dashed\">参考页面</span></div><div class=\"p-foot\">第二轮：对话历史里有第一轮，这一句是我们说的差别</div></div></div>",
      "steps": [
        "并排看",
        "说清差别",
        "第二轮带着什么"
      ],
      "script": [
        "【操作提示｜停留课件 p40d 第 1 步；切浏览器，把自己的页面和参考主页左右并排，看一眼，再回课件】\n\n第一轮改完了，先在浏览器里把自己的页面和参考并排放着看。",
        "【操作提示｜推进第 2 步；切 Terminal，在同一个对话里用一两句话说出差别，按实际看到的说；等它回复计划，确认后执行，再回课件】\n\n哪里不像，用话说出来：哪一块，差在哪，想要什么样子。一次只说一两处。它看不见我们的浏览器，也看不见参考页面，我们说的这几句，就是它这一轮能拿到的全部参考。",
        "【操作提示｜推进第 3 步，指锚点图高亮的两块；留在课件，进入 p40c】\n\n这一轮的请求里，对话历史带着第一轮的全部内容，所以不用把上一轮的要求再说一遍；新加的只有我们说的差别。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "第二轮的话按录制时实际看到的差别现场说，例如“日期列太宽，缩到和参考差不多”“圆点去掉”；一次只说一两处。改完同样先看计划，再看 diff。"
        },
        {
          "title": "讲师提示",
          "text": "截图实测能读（2026-10-22，codex exec -i）；交互界面里怎样贴图录制前核对，核对后第二轮可以直接贴参考和自己页面的截图。第二轮还没排练过（run-2.2.sh 只跑了第一轮）。"
        }
      ],
      "source": "index.html#p40d",
      "seconds": 90
    },
    {
      "id": "p40c",
      "segment": "改风格",
      "label": "风格要不要接受",
      "title": "风格改得对吗，要不要接受",
      "lead": "审风格改动，和审内容改动一样先看范围：是不是只动了工作经历这一块的结构和样式，文字有没有变。“好不好看”只看 diff 判断不了，要我们自己在浏览器里和参考并排看一眼。接受，就再提交一次；不接受，git restore 回到 homepage-v1。前面有检查点，拒绝也很便宜。",
      "html": "<div class=\"p-claim\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">Codex 说</span><p class=\"p-big\" style=\"font-weight:500\">“已按参考改成时间线”</p></div><ul class=\"p-checks\"><li data-reveal=\"1\">只动了工作经历区块<small>git diff --stat 看范围</small></li><li data-reveal=\"1\">文字没变<small>和 profile.md 逐句对</small></li><li class=\"is-no\" data-reveal=\"2\">像不像参考<small>diff 里看不出来，由我们在浏览器里看</small></li></ul></div><div class=\"p-bar is-light\" data-reveal=\"3\" style=\"margin-top:12px\">接受：再提交一次 · 缩小：让它收回越界的部分 · 拒绝：<b>git restore</b> 回到 homepage-v1</div>",
      "steps": [
        "它的报告",
        "范围和文字",
        "好不好看",
        "接受或放弃"
      ],
      "script": [
        "【操作提示｜停留课件 p40c 第 1 步，切 Terminal 指 Codex 的完成报告，按实际原话讲，再回课件】\n\nCodex 说改好了。和审内容改动一样，先别急着接受。",
        "【操作提示｜推进第 2 步，切 Terminal 运行 git diff --stat 和 git diff，指范围和文字，再回课件】\n\n先看范围：是不是只动了工作经历这一块的结构和样式。再看文字有没有变，和 profile.md 对一下。",
        "【操作提示｜推进第 3 步，切浏览器，把自己的页面和参考主页并排，看一眼，再回课件】\n\n还有一项，diff 里看不出来：像不像，好不好看。这一项只能我们自己在浏览器里看。",
        "【操作提示｜推进第 4 步，指结论条；按实际决定，接受就提交，不接受就 git restore，在 Terminal 执行后回课件】\n\n满意，就再提交一次；不满意，git restore 回到 homepage-v1，重新写 Prompt 再来。前面有检查点，拒绝也很便宜。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "按录制时的实际 diff 讲；改动越界就让它收回，或直接 git restore，再说明为什么。学员选做的样式改动只要求审过再决定，不要求一定接受。"
        },
        {
          "title": "跟做产出",
          "text": "风格改动的处置：接受并提交，或用 git restore 放弃。"
        }
      ],
      "source": "index.html#p40c",
      "seconds": 120
    },
    {
      "id": "p42",
      "segment": "小结",
      "label": "本节小结",
      "title": "改风格之前，先问它看到了什么",
      "lead": "本节先留下 homepage-v1 这个检查点，再参考一个主页，分两轮改出了自己的风格。我们看到的参考页面和浏览器里的效果，都不在它的 context 里；给了地址，它取到的也不是我们看到的样子，缺的它会自己补。每一轮都先问它实际拿到了什么，审过再提交，不满意就 git restore。下一节：发布上线。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">先留检查点</h3><div class=\"p-star\" style=\"width:260px;font-size:24px\">范围和出处<br>提交一次</div><p class=\"p-sub\" style=\"text-align:center;margin-top:10px\">回退靠 git，不靠对话</p></div><div data-reveal=\"1\"><h3>它看到了什么</h3><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-point\">参考：取到的不是我们看到的样子</li><li class=\"is-point\">看不见：浏览器里的效果、参考页面</li><li class=\"is-point\">第二轮：带着第一轮，说清差别</li><li class=\"is-point\">看全了吗：长输出会被截断</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>2.4 发布上线</h3><p>context 发给了谁，又怎样送出去</p></div></div></div>",
      "steps": [
        "先留检查点",
        "它看到了什么",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p42 第 1 步，指左侧星形】\n\n回顾一下。改风格之前，我们先给 2.2 的内容留了一个检查点：看范围和出处，提交一次。之后怎么改，都回得去。",
        "【操作提示｜推进第 2 步，指中间四条】\n\n这一节最想留下的还是那个问题：它看到了什么？给了参考地址，它取到的也不是我们看到的样子，缺的它会自己补；浏览器里的效果、参考页面，它都看不见；第二轮的请求带着第一轮，我们只要说清差别。它说检查过了，还可以追问一句：看全了吗？",
        "【操作提示｜推进第 3 步，指“下一节 2.4”；结束本节】\n\n下一节，我们把个人主页发布上线，也看看 context 发给了谁，又是怎样把动作送出去的。"
      ],
      "teaching": [],
      "source": "index.html#p42",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "先留检查点",
      "seconds": 270
    },
    {
      "label": "改风格",
      "seconds": 420
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
