window.lesson = {
  "title": "环境搭建与第一次 AI 协作闭环",
  "chapter": "第 1 章 · Prompt",
  "section": "01.01",
  "scenes": [
    {
      "id": "opening",
      "label": "从一次小改动开始",
      "kicker": "第 1 节 · 第一次协作",
      "title": "让 Codex 改一段<br>项目介绍",
      "lead": "发出一个修改要求，再找到它改过的地方",
      "html": "<div class=\"task-scope\"><p><span>工具</span><b>Codex App</b></p><p><span>练习文件</span><b>README.md</b></p><p><span>动手之前</span><b>按课前准备页下载一份练习项目</b></p></div><p class=\"caption\">本章会做出一个网站，第 5 节开始生成首页 · <a href=\"preparation.html\">课前准备与排障</a></p>",
      "script": [
        "这一章，我们用 Codex 做一个网站。这一节先打开项目，让它改一段介绍，再看看文件里发生了什么变化。",
        "这段文字直接手改也很快。我们用它练一下 Codex 的操作，改动少，前后对照起来也容易。第一次演示，我会把阅读和修改分开发，方便大家看清每一步。熟悉以后，这样的小改动可以用一条请求完成。",
        "工具安装和项目下载放在课前准备页。准备好以后，先看这次要改的文件。"
      ]
    },
    {
      "id": "small-task",
      "label": "找到要改的段落",
      "kicker": "打开项目",
      "title": "先改一段项目介绍",
      "lead": "打开 README.md，找到「项目介绍」",
      "html": "<div class=\"evidence\"><p class=\"caption\">准备换上的介绍</p><p>这是「从 Prompt 到 Harness」的课程网站，包含课程讲义、讲师介绍和项目示例。</p></div><p class=\"caption\">只替换介绍段落，其他内容保留</p>",
      "script": [
        "用 Codex App 打开刚下载的练习项目，找到 README.md。README 是项目的说明文档，这次要改的是里面的「项目介绍」。",
        "我们要把这里的文字换成课程网站的介绍。屏幕上是准备换上的内容，其他段落先保留。等会儿就用这段文字和实际改动做对照。"
      ]
    },
    {
      "id": "environment",
      "label": "检查练习目录",
      "kicker": "环境检查",
      "title": "先确认打开的是练习项目",
      "lead": "核对目录，检查已有改动，记下起点",
      "commands": [
        {
          "label": "项目目录",
          "command": "git rev-parse --show-toplevel",
          "description": "输出应与 App 打开的练习目录一致"
        },
        {
          "label": "已有改动",
          "command": "git status --short",
          "description": "命令成功且没有输出，就可以继续"
        },
        {
          "label": "起点提交",
          "command": "git rev-parse HEAD",
          "description": "把完整编号存到项目目录之外的笔记里"
        }
      ],
      "html": "<p class=\"caption\">已有改动时就保留原目录，另建练习副本 · <a href=\"preparation.html#checks\">检查步骤与结果说明</a> · <a href=\"preparation.html#website\">后续网站运行准备</a></p>",
      "script": [
        "先在系统终端进入这份练习项目的根目录。第一条命令会显示项目路径，和 App 里打开的目录对一下。",
        "再运行 git status --short。命令成功、没有输出，我们就继续。如果列出了文件，先保留这个目录，按准备页另建一份练习副本。",
        "最后记下 git rev-parse HEAD 输出的提交编号，存到项目外的笔记里。之后检查改动时，可以用它找到这次练习的起点。这份副本只用来做本次练习，先不提交，也不要同时在别的窗口修改。"
      ]
    },
    {
      "id": "read-first",
      "label": "让 Codex 找到段落",
      "kicker": "提出请求",
      "title": "先让 Codex 找到这一段",
      "lead": "读一下原文，用一句话说明准备改哪里",
      "prompt": "我想更新 README.md 中的「项目介绍」。\n请读一下这个文件，找出这一段现在的内容，用一句话说明准备改哪里。\n先不要修改，等我提供新介绍。找不到这一段就告诉我。",
      "html": "<p class=\"caption\">把它找到的原文和 README 对照一下，再看它准备改哪里</p>",
      "script": [
        "把这条请求发给 Codex，让它先找到刚才那段介绍。它回复以后，我们回到 README 对一下，看看找得对不对。",
        "再看它准备改哪里。这次的计划用一句话就能说清楚：替换介绍段落，保留其他内容。如果它打算连页面一起调整，就先提醒它只改这段介绍。"
      ]
    },
    {
      "id": "make-change",
      "label": "修改项目介绍",
      "kicker": "执行修改",
      "title": "把新介绍发给它",
      "lead": "发送替换文字，等待修改结果",
      "prompt": "请将 README.md 的「项目介绍」段落替换为：\n\n这是「从 Prompt 到 Harness」的课程网站，包含课程讲义、讲师介绍和项目示例。\n\n保留其他段落，不修改其他文件，本轮不提交 commit。\n完成后告诉我改了哪里。",
      "html": "<p class=\"caption\">改完后，打开 diff 查看文件变化</p>",
      "script": [
        "确认它找对了位置，修改打算也合适，就把这段新介绍发给它。",
        "发送以后，看一下它正在处理哪个文件。如果弹出权限请求，先看清操作和目标目录，再决定是否允许。等它回复完成，我们就打开 diff。"
      ]
    },
    {
      "id": "review",
      "label": "检查修改结果",
      "kicker": "检查结果",
      "title": "用 diff 核对改动",
      "lead": "对照新旧文字，再看有没有改到其他文件",
      "html": "<div class=\"evidence\"><p class=\"caption\">README 修改示例 · 减号表示删除，加号表示新增</p><pre class=\"diff\"><span class=\"removed\">− 这里是项目介绍占位文字。</span><span class=\"added\">+ 这是「从 Prompt 到 Harness」的课程网站，包含课程讲义、讲师介绍和项目示例。</span></pre></div><ul class=\"review-points\"><li><code>git diff HEAD -- README.md</code>：查看 README 改了哪些内容</li><li><code>git diff --stat HEAD</code>：查看改动文件的统计</li><li><code>git status --short</code>：查看文件状态，包括新增文件</li></ul><p class=\"caption\">适用于本次从干净副本开始、未提交的练习 · <a href=\"preparation.html#verify\">检查步骤与例外情况</a></p>",
      "script": [
        "diff 就是修改前后的差异。先看这张示例：减号这一行是原来的占位文字，加号这一行是新的课程介绍。",
        "回到实际项目，运行第一条命令，看看介绍有没有换对、位置对不对，README 里还有没有别的变化。",
        "接着看文件统计，再用 git status --short 看一下文件状态。我们预期只有 README 被修改；如果出现了其他文件，就打开对应的差异看看。新增文件也要检查。",
        "文字和位置都正确，也没有额外改动，这次练习就做完了。这里只改说明文字，不需要启动网站或运行构建。"
      ]
    },
    {
      "id": "self-check",
      "label": "想一想",
      "kicker": "自检",
      "title": "多改了三个文件怎么办",
      "lead": "介绍已经改对，但 Codex 还顺手格式化了三个源码文件",
      "html": "<p class=\"question\">这次任务可以算完成吗？<br>先想想你的理由，再看解析</p><button type=\"button\" class=\"reveal-button\" aria-expanded=\"false\" aria-controls=\"self-check-answer\">查看解析</button><div id=\"self-check-answer\" class=\"answer\" hidden><strong>先检查三个文件的额外改动</strong><p>即使只改了格式，也超出了这次约定。确认这些改动来自本次练习后，按<a href=\"preparation.html#recovery\">恢复步骤</a>撤回，再重新检查。分不清来源时，先保留现场。</p></div>",
      "script": [
        "现在换一种情况：介绍已经改对了，但文件列表里还多了三个源码文件，Codex 说只是顺手格式化了一下。这时，你会把任务标成完成吗？可以暂停想一下。",
        "我会先打开这三个文件的差异。即使确实只改了格式，也多出了这次没有要求的改动。确认它们来自本次练习后，按准备页的恢复步骤撤回，再重新检查。分不清来源时，先保留现场。",
        "所以检查时，除了看介绍有没有换对，还要看文件列表。只读 Codex 的完成说明，就可能漏掉这三个文件。"
      ]
    },
    {
      "id": "wrap-up",
      "label": "自己试一次",
      "kicker": "课后练习",
      "title": "换成自己的介绍再试一次",
      "lead": "换一段自己的文字，发出请求，再检查 diff",
      "html": "<ul class=\"checklist\"><li><strong>文字和位置</strong><br>介绍是否换对、是否改在约定的段落</li><li><strong>其他改动</strong><br>README 其余内容和其他文件是否保持原样</li><li><strong>保存记录</strong><br>留下这次请求、回复和检查结果</li></ul><p class=\"caption\"><a href=\"preparation.html#record\">起点与结果记录模板</a> · <a href=\"preparation.html#help\">工具暂时不可用时</a></p><p class=\"takeaway\">下一节回看：Codex 怎样找到文件、完成修改</p>",
      "script": [
        "现在换一段自己的介绍，在新的练习副本里做一次。做完打开 diff，检查文字和位置，再看看有没有其他文件被改动。",
        "把这次请求、Codex 的回复和检查结果存到项目目录之外，和起点记录放在一起。准备页有记录模板。",
        "如果暂时用不了工具，可以先看本节的 diff 示例，等环境准备好再补实际操作。下一节我们回看这次对话：Codex 怎样找到文件，又怎样完成修改，从中认识 Agent、Context 和 Tool。"
      ]
    }
  ]
};
