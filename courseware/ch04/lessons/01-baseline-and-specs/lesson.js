window.lesson = {
  "title": "接手大项目，还能边聊边改吗",
  "chapter": "第 4 章 · SDD",
  "section": "04.01",
  "summary": "核对固定基线，用新人简报和最小用例认识已有工程，再由新增需求引出五层规格。",
  "scenes": [
    {
      "id": "p02",
      "segment": "固定起点",
      "label": "取得并核对基线",
      "title": "先拿到同一份起点",
      "lead": "课件给出上游仓库、Release 和完整 commit。依据它们取得副本，再核对手里的这一份是不是这一版。",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:28px;align-items:start\"><div class=\"p-matrix\" data-reveal=\"0\" style=\"grid-template-columns:minmax(0,.55fr) minmax(0,1.45fr)\"><div class=\"is-head\"><span>课件给出</span><span>内容</span></div><div><span>上游仓库</span><span>AykutSarac/jsoncrack.com</span></div><div><span>Release</span><span>v5.0.0</span></div><div class=\"is-key\"><span>完整 commit</span><span style=\"font-family:var(--p-mono);font-size:17px;overflow-wrap:anywhere\">e99288b4eff060dcd53428f2a3a5c2f28eecffa6</span></div></div><div class=\"p-matrix\" data-reveal=\"1\" style=\"grid-template-columns:minmax(0,.6fr) minmax(0,1.4fr)\"><div class=\"is-head\"><span>本地核对</span><span>应该是</span></div><div><span>HEAD</span><span>等于完整 commit</span></div><div><span>分支</span><span>course/ch04-baseline</span></div><div><span>工作区</span><span>干净，没有未提交的改动</span></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:22px\">Release 帮助识别版本，<b>完整 commit</b> 固定实际使用的代码；后面的结论都对应这一版</div>",
      "steps": [
        "课件给出的三项信息",
        "取得副本并核对",
        "为什么固定这一版"
      ],
      "script": [
        "【操作提示｜停留课件 p02 第 1 步，依次指向上游仓库、Release 和完整 commit；不切窗口】\n\n这一章要接手的是 JSON Crack，一个能把 JSON 数据转成交互图的开源工程。课件给出三项信息：上游仓库、Release v5.0.0，以及一串完整的 commit。Release 帮我们认出版本，完整 commit 才把实际使用的代码固定下来。",
        "【操作提示｜切到终端，在已有项目之外的空目录里现场执行本页“实验说明”第 1–4 步；逐条读出 HEAD、标签、分支和 status 的实际输出，再切回课件】\n\n现在取得副本。克隆之后，先确认 v5.0.0 指向的就是这串 commit，再从这串 commit 创建课程分支。接着核对三件事：HEAD 是不是这串 commit，分支是不是刚建的课程分支，工作区是不是干净。如果你本地早就有这个仓库，还做过修改，保留原来的目录，另外克隆一份练习副本。",
        "【操作提示｜推进课件第 3 步，指向底部横条】\n\n为什么要这么较真？因为后面的启动方式、目录介绍和调查结论，都要对应这一版。版本对不上，同一句结论就可能找不到依据。这个项目要求 Node.js 24 以上、pnpm 10 以上；如果你本地环境暂时不满足，先以看懂演示和掌握规格思路为主，这不影响后面对规格和架构的理解。"
      ],
      "refs": [
        {
          "kind": "live",
          "group": "基线",
          "text": "JSON Crack 上游仓库",
          "url": "https://github.com/AykutSarac/jsoncrack.com"
        },
        {
          "kind": "live",
          "group": "基线",
          "text": "Release v5.0.0",
          "url": "https://github.com/AykutSarac/jsoncrack.com/releases/tag/v5.0.0"
        },
        {
          "kind": "live",
          "group": "基线",
          "text": "完整 commit",
          "url": "https://github.com/AykutSarac/jsoncrack.com/commit/e99288b4eff060dcd53428f2a3a5c2f28eecffa6"
        }
      ],
      "repro": {
        "label": "实验说明：取得并核对固定基线",
        "steps": [
          {
            "text": "在已有项目之外准备一个空目录，在这里克隆上游仓库并进入仓库目录。",
            "code": "git clone https://github.com/AykutSarac/jsoncrack.com.git\ncd jsoncrack.com"
          },
          {
            "text": "确认 Release 标签指向课件给出的完整 commit。输出应为 e99288b4eff060dcd53428f2a3a5c2f28eecffa6。",
            "code": "git rev-parse 'v5.0.0^{commit}'"
          },
          {
            "text": "从完整 commit 创建本地课程分支。main 会继续前进，标签也可能被移动；完整 commit 指向的代码不会变，所以分支从它创建。",
            "code": "git checkout -b course/ch04-baseline e99288b4eff060dcd53428f2a3a5c2f28eecffa6"
          },
          {
            "text": "逐项核对：第一行等于完整 commit；第二行是 v5.0.0，说明当前提交正好是这个 Release；第三行是刚建的课程分支；最后一条没有输出，表示工作区干净。",
            "code": "git rev-parse HEAD\ngit describe --tags --exact-match\ngit branch --show-current\ngit status --short"
          },
          {
            "text": "把核对结果记下来：上游地址、Release、完整 commit、课程分支、工作区状态和核对日期。后面的启动方式、目录介绍和调查结论都对应这份记录。",
            "code": ""
          },
          {
            "text": "本地已有这个仓库且做过修改时，保留原目录，不要 reset 或丢弃改动；换一个目录另克隆一份练习副本，再从第 2 步做起。",
            "code": "git clone https://github.com/AykutSarac/jsoncrack.com.git jsoncrack-ch04\ncd jsoncrack-ch04"
          }
        ],
        "note": "本流程只取得并核对代码，不安装依赖、不启动；环境要求与启动在后面说明。2026-11-04 在讲师机器上探索核验过第 1–4 步，结果与上面的说明一致；第 6 步未执行，整套流程尚未录制排练。"
      },
      "teaching": [],
      "source": "index.html#p02",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "固定起点",
      "seconds": 90
    }
  ]
};
