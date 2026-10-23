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
      "id": "p40a0",
      "segment": "改风格",
      "label": "几个参考主页",
      "title": "想要什么样的主页？先看几个参考",
      "lead": "同一份 profile.md，可以做成完全不同的样子。这里有四个公开的主页或模板：整块紫色的 Hyperspace，深蓝两栏的 Brittany Chiang，青绿页头的 Freelancer，白底蓝链接的 Jon Barron。这次的示例用 Hyperspace，它和我们现在的主页差别最大，改完一眼看得出来。你可以选别的，也可以找自己喜欢的主页；参考的是风格，用的时候按各自的许可注明出处。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:14px\" data-reveal=\"0\"><div class=\"p-page\" style=\"position:relative;outline:3px solid #D9481C;outline-offset:3px\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>html5up.net · CC BY 3.0</div><img src=\"external/ref-hyperspace.png\" alt=\"Hyperspace 模板首屏：整块紫色\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"><span class=\"p-tag\" data-role=\"us\" data-reveal=\"1\" style=\"position:absolute;right:8px;top:36px\">这次用</span></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>brittanychiang.com · 注明出处</div><img src=\"external/ref-brittanychiang.png\" alt=\"Brittany Chiang 的主页：深蓝两栏\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>Start Bootstrap · MIT</div><img src=\"external/ref-freelancer.png\" alt=\"Freelancer 模板首屏：青绿页头\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div><div class=\"p-page\" style=\"position:relative\"><div class=\"p-page-bar\" style=\"font-size:13px\"><i></i><i></i><i></i>jonbarron.info · 欢迎复用</div><img src=\"external/ref-jonbarron.png\" alt=\"Jon Barron 的主页：白底蓝链接\" style=\"display:block;width:100%;height:200px;object-fit:cover;object-position:top\"></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:16px\">学的是风格，<b>不照搬别人的代码和文字</b> · 用的时候注明出处</div>",
      "refs": [
        {
          "kind": "live",
          "group": "参考主页",
          "text": "Hyperspace",
          "url": "https://html5up.net/uploads/demos/hyperspace/"
        },
        {
          "kind": "live",
          "group": "参考主页",
          "text": "Brittany Chiang",
          "url": "https://brittanychiang.com/"
        },
        {
          "kind": "live",
          "group": "参考主页",
          "text": "Freelancer",
          "url": "https://startbootstrap.github.io/startbootstrap-freelancer/"
        },
        {
          "kind": "live",
          "group": "参考主页",
          "text": "Jon Barron",
          "url": "https://jonbarron.info/"
        },
        {
          "kind": "read",
          "group": "许可",
          "text": "HTML5 UP 许可（CC BY 3.0）",
          "url": "https://html5up.net/license"
        },
        {
          "kind": "read",
          "group": "许可",
          "text": "bchiang7/v4 的 README",
          "url": "https://github.com/bchiang7/v4"
        },
        {
          "kind": "read",
          "group": "许可",
          "text": "startbootstrap-freelancer（MIT）",
          "url": "https://github.com/StartBootstrap/startbootstrap-freelancer"
        }
      ],
      "steps": [
        "四个参考",
        "这次用哪个",
        "注明出处"
      ],
      "script": [
        "【操作提示｜停留课件 p40a0 第 1 步，四张截图一起出现，从左到右指认】\n\nhomepage-v1 提交了，我们有了一个检查点。接下来做一件更像真实做主页的事：改风格。同一份 profile.md，可以做成完全不同的样子。先看四个公开的主页和模板：整块紫色的 Hyperspace，深蓝两栏的 Brittany Chiang，青绿页头的 Freelancer，白底蓝链接的 Jon Barron。",
        "【操作提示｜推进第 2 步，指“这次用”标记；可切浏览器打开 Hyperspace，往下滚一屏再回课件】\n\n这次的示例用 Hyperspace。它和我们现在的主页差别最大，改完一眼就看得出来。你可以选别的，也可以找一个自己喜欢的主页。",
        "【操作提示｜推进第 3 步，指底部横条；随后进入 p40a】\n\n参考的是风格，不是照搬别人的代码和文字。这几个都允许参考，Hyperspace 要求注明出处，用的时候在页面上写一句就行。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "四张都是首屏截图（courseware/tools/capture-source.py，2026-10-23），Jon Barron 那张只截到第一篇论文，下面的合影不截。录制时可以在浏览器里点开第一行的链接，往下滚一屏让学员看整页。可剪辑时，换一个参考再跑一组，最后把两组结果并排给学员看（分镜 p40a0）。"
        }
      ],
      "source": "index.html#p40a0",
      "seconds": 90
    },
    {
      "id": "p40a",
      "segment": "改风格",
      "layout": "prompt-scene",
      "prompt": "Goal：参考 Hyperspace 的风格，把我的主页改出新样子：配色和版式都可以改。\nContext：参考 https://html5up.net/uploads/demos/hyperspace/ 。先用 curl 取这个页面的 HTML\n和它引用的 CSS（要联网，会弹申请，我来批准），告诉我它的风格是怎样的\n（配色、各区块怎么铺、版式），再提计划，等我确认再改。\nConstraints：页面上的文字不变，每一句都要能在 profile.md 里找到；不加依赖，\n不引入远程字体和图片；改结构时尽量沿用现有组件；正文和背景的对比度要够。\nDone when：我在浏览器里看过、觉得像；你跑 build 成功；页脚注明风格参考的出处；\n告诉我改了哪些区块、为什么。",
      "label": "照着参考改",
      "title": "照着参考改，样子可以变，内容不能变",
      "lead": "这次照着 Hyperspace 改，配色和版式都可以变。约束只留四条：页面上的文字不变，每一句都要能在 profile.md 里找到；不加依赖，不引入远程字体和图片；改结构时尽量沿用现有组件；正文和背景的对比度要够。守住的是“内容是我的”，不是“样子不变”。Prompt 里点明让它用 curl 取参考页面的 HTML 和 CSS，联网我们来批准；取回来以后先说看到的风格和计划，等我们确认再改。",
      "html": "<div class=\"demo-notes\"><ol class=\"p-notes\"><li data-reveal=\"0\"><span><b>样子可以变</b><small>配色和版式都可以改</small></span></li><li class=\"is-risk\" data-reveal=\"1\"><span><b>用 curl 取 HTML 和 CSS</b><small>要联网，我们来批准</small></span></li><li class=\"is-ok\" data-reveal=\"2\"><span><b>内容不能变</b><small>文字都在 profile.md 里；先说计划</small></span></li></ol></div>",
      "steps": [
        "样子可以变",
        "用 curl 取",
        "内容不能变"
      ],
      "script": [
        "【操作提示｜停留课件 p40a 第 1 步，指 Goal；Prompt 提前写好】\n\n这次就照着 Hyperspace 改。配色可以变，版式也可以变，整个页面都可以换个样子。",
        "【操作提示｜推进第 2 步，指 Context 里的地址和 curl 那一句】\n\nContext 里给了参考页面的地址，还点明让它用 curl 去取 HTML 和 CSS。为什么要点明？它默认会用网页搜索，可在我们这套配置下，网页搜索只拿得到一段摘要，看不到样子。curl 要联网，会弹出申请，我们看清它要访问哪个网址再批准。取回来以后，先让它说说看到的风格和计划，我们确认了再改。",
        "【操作提示｜推进第 3 步，指 Constraints；随后切 Terminal 提交 Prompt，批准联网，等它说完看到的风格和计划，确认后执行，再回课件 p40b】\n\n约束只留四条：页面上的文字不变，每一句都要能在 profile.md 里找到；不加依赖，不引入远程字体和图片；改结构时尽量沿用现有组件；对比度要够。我们守住的是“内容是我的”，不是“样子不变”。请暂停视频，选一个你喜欢的参考，提交 Prompt。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "参考主页用 Hyperspace（p40a0 圈出的那个），排练脚本 materials/mainline/run-2.2.sh 用的是同一份 Prompt。批准框出现时，读清它要访问的网址再同意。它说完看到的风格和计划后，确认再执行；第一轮约 9 分钟（排练：说风格和计划约 3.6 分钟，执行约 5 分钟），录制时剪掉等待，口播提一句“这一步要等几分钟”（C2-74）。页脚注明出处写进了 Done when（CC BY 3.0 要求署名，2026-10-23 排练里没要求时它没写），p40c 审查时核对。"
        },
        {
          "title": "讲师提示",
          "text": "2026-10-23 改为参考 Hyperspace、放开版式（C2-72）：只改颜色或只改一处时效果弱，放开后前后差别明显，文字约束都守住了（LOG.md 实测记录）。网页搜索在 MiniMax 下只拿到首屏摘要，所以仍点明用 curl。"
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
      "lead": "我们在浏览器里看到的主页，不会自己进入 context。把参考送进去有三条路：网页搜索、curl、截图。网页搜索是默认的工具，在 MiniMax 下由服务端执行，只返回首屏摘要，取回的内容也不进请求记录；这次我们让它用 curl 在本地取，联网由我们批准，取回的 HTML 和 CSS 作为工具返回进了 context，请求记录里看得见。可它拿到的是代码，不是我们看到的页面：样子要靠它读 CSS 推出来。截图正好相反，它看到的是样子，看不到代码。",
      "html": "<div class=\"p-grid\" style=\"--n:3;gap:14px\"><div class=\"p-box\" data-role=\"tool\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"tool\">网页搜索</span><p>默认工具，只拿到摘要</p><p class=\"p-sub\">服务端执行，内容不进记录</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">curl（这次）</span><p>拿到 HTML 和 CSS</p><p class=\"p-sub\">我们批准联网，内容进记录</p></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">截图</span><p>拿到的是样子</p><p class=\"p-sub\">这个模型能读图（实测）</p></div></div><div style=\"margin-top:12px\"><div class=\"p-set\" data-role=\"ctx\" data-reveal=\"2\" style=\"padding:10px 16px 12px\"><h3 style=\"font-size:20px;margin-bottom:6px\">这一次请求里有什么</h3><div class=\"p-items\" style=\"flex-direction:row;flex-wrap:wrap;gap:6px\"><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">系统指令</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">工具</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">环境</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">规则</div><div class=\"p-item\" style=\"padding:4px 10px;font-size:18px\">对话历史</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">工具返回</div><div class=\"p-item is-picked\" style=\"padding:4px 10px;font-size:18px\">这一句</div></div><div class=\"p-foot\">这次：curl 取回的 HTML 和 CSS 在“工具返回”这一块，记录里看得见</div></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:10px\">它拿到的是代码，<b>不是我们看到的页面</b>；先问它看到了什么</div>",
      "steps": [
        "网页搜索",
        "curl 和截图",
        "这次在哪一块",
        "结论"
      ],
      "script": [
        "【操作提示｜停留课件 p40b 第 1 步，指“网页搜索”一栏】\n\n先想一个问题：我们在浏览器里看到的那个主页，它看到了吗？没有，浏览器里的页面不会自己进 context。要把参考送进去，有三条路。第一条是网页搜索，这是它默认会用的工具。在我们这套配置下，它由模型服务那一侧执行，只拿回一段首屏的摘要，取回了什么，请求记录里也看不到。",
        "【操作提示｜推进第 2 步，指另外两栏】\n\n第二条，就是这次用的 curl：在我们电脑上取，联网由我们批准，拿回来的是原始的 HTML 和 CSS。第三条是截图，它拿到的是样子。这个模型能读图，我试过，图里的日期、职位，连文字的颜色都答得出来。",
        "【操作提示｜推进第 3 步，指锚点图；切 claude-tap 查看器，找 curl 的调用和返回，再找它说“看到了什么”的那段回答，按实际记录指认，再回课件】\n\n回到这一列方块。curl 取回的 HTML 和 CSS，就在工具返回这一块，记录里看得见。它刚才说的“左边日期、右边内容”，我们可以在返回里找到对应的那几行。",
        "【操作提示｜推进第 4 步，指结论条；留在课件，进入 p40d】\n\n不过要记住：它拿到的是代码，不是我们看到的页面。页面长什么样，是它读 CSS 推出来的。所以它说“已经按参考改好了”，我们先问它看到了什么，再到浏览器里自己看一眼。"
      ],
      "teaching": [
        {
          "title": "切到实操",
          "text": "第 3 步切 claude-tap 查看器，找这一轮里 curl 的那几次调用和返回：HTML 和 CSS 的原文就在工具返回里（长的会被截断，可以顺带指一下）。再指 p40a 那一轮它说“看到了什么”的那段回答，对照返回里的 class。如果它没用 curl、改用了网页搜索，就按实际讲：记录里只有打开的网址，内容看不到。"
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
          "text": "第二轮的话按录制时实际看到的差别现场说，例如“首屏的紫色太暗”“项目卡要更像参考的三宫格”；一次只说一两处。改完同样先看计划，再看 diff。"
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
      "lead": "这一轮的 diff 会很大，不逐行读。先看范围：动了哪些文件和区块；再看文字：和 profile.md 对一遍，它说自己核对过，也要抽查；再看有没有新加的行为，比如进场动画、滚动监听、新的脚本，它说明了没有；页脚有没有注明风格参考的出处；最后看像不像，这一项 diff 里看不出来，要在浏览器里和参考并排看。接受就再提交一次；缩小，就让它收回越界或没说明的部分；拒绝，就 git restore 回到 homepage-v1。前面有检查点，拒绝也很便宜。",
      "html": "<div class=\"p-claim\"><div class=\"p-box\" data-role=\"agent\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"agent\">Codex 说</span><p class=\"p-big\" style=\"font-weight:500\">“已按参考改好了”</p></div><ul class=\"p-checks\"><li data-reveal=\"1\">动了哪些文件和区块<small>git diff --stat，对照它的改动清单</small></li><li data-reveal=\"1\">文字没变<small>和 profile.md 对，抽查</small></li><li data-reveal=\"1\">新加的行为说明了吗<small>动画、滚动监听、新脚本</small></li><li data-reveal=\"1\">出处写了吗<small>页脚注明风格参考</small></li><li class=\"is-no\" data-reveal=\"2\">像不像参考<small>diff 里看不出来，由我们在浏览器里看</small></li></ul></div><div class=\"p-bar is-light\" data-reveal=\"3\" style=\"margin-top:12px\">接受：再提交一次 · 缩小：让它收回越界的部分 · 拒绝：<b>git restore</b> 回到 homepage-v1</div>",
      "steps": [
        "它的报告",
        "范围和文字",
        "好不好看",
        "接受或放弃"
      ],
      "script": [
        "【操作提示｜停留课件 p40c 第 1 步，切 Terminal 指 Codex 的完成报告和它列的改动清单，按实际原话讲，再回课件】\n\nCodex 说改好了，还列了它改了哪些区块。和审内容改动一样，先别急着接受。",
        "【操作提示｜推进第 2 步，切 Terminal 运行 git diff --stat，再按它的改动清单抽看 diff，回课件】\n\n这一轮的 diff 会很大，不用逐行读。先看范围：动了哪些文件、哪些区块。再看文字，和 profile.md 对一遍，它说自己核对过，我们也抽查几句。还有一项要专门看：有没有新加的行为，比如进场动画、滚动监听、新的脚本，它有没有说明。再看一眼页脚：参考了别人的风格，出处有没有写上。",
        "【操作提示｜推进第 3 步，切浏览器，把自己的页面和参考主页并排，从上滚到下看一遍，再回课件】\n\n像不像、好不好看，diff 里看不出来，只能在浏览器里看。记得从上滚到下：有些动画要滚到那里才显现。",
        "【操作提示｜推进第 4 步，指结论条；按实际决定，接受就提交，不接受就 git restore，在 Terminal 执行后回课件】\n\n满意，就再提交一次；有越界或没说明的部分，让它收回；不满意，git restore 回到 homepage-v1，重新写 Prompt 再来。前面有检查点，拒绝也很便宜。"
      ],
      "teaching": [
        {
          "title": "讲师提示",
          "text": "按录制时的实际 diff 讲。排练里出现过“滚动到才显现”的进场动画：内容默认透明，不滚动、截整页图时看起来是空白，这类改动要它说明，或者让它去掉。学员选做的样式改动只要求审过再决定，不要求一定接受。"
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
      "seconds": 510
    },
    {
      "label": "小结",
      "seconds": 90
    }
  ]
};
