window.lesson = {
  "title": "已有规格，为什么还要再接一套框架",
  "chapter": "第 6 章 · 社区 SDD",
  "section": "06.01",
  "summary": "先用一页回顾第 4、5 章已经是规格驱动，再认清 GSD 是用来接手已有规格的社区实现，立住不能另起规划覆盖已有文档的边界。",
  "scenes": [
    {
      "id": "p01",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "已有规格，为什么还要再接一套框架",
      "title": "已有规格，为什么还要再接一套框架？",
      "lead": "第 4、5 章已经留下规格和已验收的 JSON Diff。本章不是从零再建一套。这一节先认清名字，再上手。",
      "html": "<ol class=\"p-map\"><li class=\"is-now\"><b>6.1</b>定位 SDD 与 GSD</li><li><b>6.2</b>构建工作流</li><li><b>6.3</b>验收流程</li><li><b>6.4</b>完成 CR-01</li><li><b>6.5</b>应用招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">第 4、5 章留下：<b>已批准的规格</b>和<b>已验收的 JSON Diff</b>。本章不是从零再建一套</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节问题：已有规格，为什么还要再接一套框架？开场先认清名字，再上手</div>",
      "steps": [
        "本章位置",
        "第 4、5 章留下什么",
        "本节问题"
      ],
      "script": [
        "【操作提示｜停留课件 p01 第 1 步，指向章节地图上的 6.1；不切窗口】\n\n第 4、5 章已经留下规格，也留下了已经验收的 JSON Diff。从这一章开始，我们不是从零再建一套，而是在已有项目上继续。地图上，这一节是 6.1。",
        "【操作提示｜推进第 2 步，指向第 4、5 章已经留下的规格和已验收功能；不切窗口】\n\n先记住这一点：规格在 docs/specs/ 里，功能已经按第 5 章的验收做完。本章要做的，是在这个基础上接一套工作流，不是把前面的工作推倒重来。",
        "【操作提示｜推进第 3 步，指向本节问题；讲完进入 p02】\n\n已有规格，为什么还要再接一套框架？开场先认清名字，再上手。先不要谈安装步骤，也不要先预告 CR-01。"
      ],
      "teaching": [],
      "source": "index.html#p01",
      "seconds": 90
    },
    {
      "id": "p02",
      "segment": "认清 SDD 与 GSD",
      "label": "第 4、5 章已经在做的，为什么叫 SDD",
      "title": "第 4、5 章已经在做的，为什么叫 SDD？",
      "lead": "先用三句话把第 4、5 章已经在做的事情说完，不把 4.1 的五层定义再讲一遍。说完立刻进入 GSD。",
      "html": "<div class=\"p-qlist\"><div class=\"p-bar\" data-reveal=\"0\">第 4、5 章已经是<b>规格驱动</b></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:12px\">先把要改的行为写清楚，再改代码</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:12px\">规格写在 <code>docs/specs/</code> 里；换一套工具，也不要把已经批准的规格重写一遍</div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:16px\">三句话先说到这里。接下来看 GSD 是什么</div>",
      "steps": [
        "已经是规格驱动",
        "先写清再改代码",
        "规格不跟工具重写"
      ],
      "script": [
        "【操作提示｜停留课件 p02 第 1 步，指向第一句话；不切窗口】\n\n先用三句话，把第 4、5 章已经在做的事情说完。第一句：第 4、5 章已经是规格驱动。",
        "【操作提示｜推进第 2 步，指向第二句话；不切窗口】\n\n第二句：先把要改的行为写清楚，再改代码。这就是我们前面一直在做的事。",
        "【操作提示｜推进第 3 步，指向第三句话和过渡；讲完进入 p03】\n\n第三句：规格写在 docs/specs/ 里。换一套工具，也不要把已经批准的规格重写一遍。五层定义不在这里再讲一遍。三句话先说到这里，接下来看 GSD 是什么。"
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
      "lead": "GSD 是社区里的一套 SDD 实现，用来接手已有规格，把调查、规划、执行和验证组织起来。先看清它是什么，再记下课程使用的固定版本。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;gap:24px\" data-reveal=\"0\"><div class=\"p-box\" data-role=\"us\"><span class=\"p-tag\" data-role=\"us\">它是什么</span><h3 style=\"margin:10px 0 0\">社区里的一套 SDD 实现</h3><p>不是另一种需求，也不是要替换 <code>docs/specs/</code> 的新规格</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"agent\">它用来做什么</span><h3 style=\"margin:10px 0 0\">接手已经留下的规格</h3><p>把调查、规划、执行和验证组织起来</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:16px\"><code>open-gsd/gsd-core v1.13.0</code> · MIT。这个版本尚未实测，不能宣称已经走通</div><p class=\"source-note\">commit <code>b5b9814f033b6d32810562fd4068e1f107da29ec</code>；课程固定使用这个版本</p>",
      "steps": [
        "社区里的一套实现",
        "用来组织已有规格上的工作",
        "固定版本，尚未实测"
      ],
      "script": [
        "【操作提示｜停留课件 p03 第 1 步，指向「它是什么」；不切窗口】\n\nGSD 是社区里的一套 SDD 实现。它不是另一种需求，也不是要替换 docs/specs/ 的新规格。",
        "【操作提示｜推进第 2 步，指向「它用来做什么」；不切窗口】\n\n它用来接手已经留下的规格，把调查、规划、执行和验证组织起来。",
        "【操作提示｜推进第 3 步，指向固定版本，并标明尚未实测；讲完进入 p04】\n\n课程固定使用 open-gsd/gsd-core 的 v1.13.0，许可证是 MIT，commit 记在页面上。这个版本尚未实测，不能宣称已经走通。接下来先把边界讲清：它能接手什么，不能推翻什么？"
      ],
      "teaching": [],
      "source": "index.html#p03",
      "seconds": 90
    },
    {
      "id": "p04",
      "segment": "认清 SDD 与 GSD",
      "label": "GSD 能接手什么，不能推翻什么",
      "title": "GSD 能接手什么，不能推翻什么？",
      "lead": "能接手已经批准的规格、已经验收的功能和可核对的提交。不能另起一套规划去覆盖已有文档，也不能把工具流程当成新的需求。",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;gap:24px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">能接手</span><h3 style=\"margin:10px 0 0\">已经批准的规格和已经验收的功能</h3><p>以及可以核对的提交</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">不能推翻</span><h3 style=\"margin:10px 0 0\">不能另起一套规划去覆盖已有文档</h3><p>也不能把工具流程当成新的需求</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:16px\">权威需求仍留在 <code>docs/specs/</code>。GSD 用来组织工作，不用来改写已经批准的依据</div>",
      "steps": [
        "能接手什么",
        "不能推翻什么",
        "权威需求仍在 docs/specs/"
      ],
      "script": [
        "【操作提示｜停留课件 p04 第 1 步，指向「能接手」；不切窗口】\n\nGSD 能接手的，是已经批准的规格、已经验收的功能，以及可以核对的提交。",
        "【操作提示｜推进第 2 步，指向「不能推翻」；不切窗口】\n\n它不能推翻的是：另起一套规划去覆盖已有文档，或者把工具流程当成新的需求。",
        "【操作提示｜推进第 3 步，指向权威需求仍在 docs/specs/；讲完进入 p05】\n\n权威需求仍留在 docs/specs/。GSD 用来组织工作，不用来改写已经批准的依据。边界先立住。第一次上手，应该看什么、不做什么？"
      ],
      "teaching": [],
      "source": "index.html#p04",
      "seconds": 90
    },
    {
      "id": "p05",
      "segment": "第一次上手",
      "label": "第一次上手，应该看什么、不做什么",
      "title": "第一次上手，应该看什么、不做什么？",
      "lead": "上手前先核对版本、权限、可定位的第五章提交、五层规格和工作区。本节只做只读上手，不改生产代码。先看懂，这一页还不发出请求。",
      "html": "<div class=\"p-bar\" data-reveal=\"0\">上手前先核对：固定版本与权限、可定位的第五章提交、五层规格仍在、工作区状态清楚</div><div class=\"p-pair\" style=\"grid-template-columns:1fr 1fr;gap:24px;margin-top:16px\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"us\">本节做</span><h3 style=\"margin:10px 0 0\">完成 onboard，并做一次实际的 mapper 委派</h3><p>生产代码只读，主 Agent 抽查证据</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"gate\">本节不做</span><h3 style=\"margin:10px 0 0\">导入后不批准 CR-01，不改生产代码</h3><p>也不把 JSON Diff 重新拆成全套新任务</p></div></div><p class=\"source-note\">CR-01 要到 6.2 对照测试缺口时再提出；现场操作留在后面的实操页</p>",
      "steps": [
        "上手前的检查点",
        "本节做的事",
        "本节不做的事"
      ],
      "script": [
        "【操作提示｜停留课件 p05 第 1 步，指向上手前的检查点；不切窗口】\n\n上手前先核对这些检查点：固定版本与权限、可定位的第五章提交、五层规格仍在、工作区状态清楚。",
        "【操作提示｜推进第 2 步，指向本节做的事；不切窗口】\n\n这一节要做的，是完成 onboard，并做一次实际的 mapper 委派。生产代码只读，主 Agent 抽查证据。",
        "【操作提示｜推进第 3 步，指向本节不做的事；讲完进入 p06】\n\n这一节不做的是：导入后批准 CR-01、改生产代码，或把 JSON Diff 重新拆成全套新任务。CR-01 要到 6.2 对照测试缺口时再提出。当前副本对得上这些检查点吗？第一次上手怎么做？接下来会切到现场去做。"
      ],
      "teaching": [],
      "source": "index.html#p05",
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
      "title": "第一次接触做完了，是不是就可以开始改规则了？",
      "lead": "第一次接触做完了，是不是就可以开始改规则了？请先判断，再看这一节实际留下了什么。先不要下结论。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:16px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:24px;margin:10px 0 0\">第一次接触做完了，是不是就可以开始改规则了？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:16px\"><b>还不可以</b>。第一次上手只是认清框架、留下定位，并不是开始改规则</div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:12px\">这一节只留下定位、版本记录，以及一次经抽查的委派。指向 CR-01 的工作流，要到 6.2 才建立起来</div>",
      "steps": [
        "先判断",
        "还不可以",
        "本节实际留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p08 第 1 步，指向判断问题；停顿数秒；不切窗口】\n\n现在请判断：第一次接触做完了，是不是就可以开始改规则了？",
        "【操作提示｜推进第 2 步，指向参考判断；不切窗口】\n\n还不可以。第一次上手只是认清框架、留下定位，并不是开始改规则。",
        "【操作提示｜推进第 3 步，指向本节实际留下的内容；讲完进入 p09】\n\n这一节只留下定位、版本记录，以及一次经抽查的委派。指向 CR-01 的工作流，还没有建起来，要到 6.2 才建立。框架初始化时如果生成了另一套规划文档，哪种做法对？"
      ],
      "teaching": [],
      "source": "index.html#p08",
      "seconds": 90
    },
    {
      "id": "p09",
      "segment": "判断与自检",
      "label": "框架初始化时生成了另一套规划文档，哪种做法对",
      "title": "框架初始化时生成了另一套规划文档，哪种做法对？",
      "lead": "框架初始化时，有可能生成另一套规划文档。请先自己判断这两种做法哪样对，再看参考结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>用新规划覆盖原来的五层规格，后面都按新的走</h3><div data-reveal=\"1\"><p>不对。已经批准的规格是需求依据，不能被初始化生成的材料直接覆盖</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>保留已有规格作为需求依据，把新生成的材料当成待核对的工作资产</h3><div data-reveal=\"2\"><p>对。新材料可以留下核对，但不能改写已经批准的依据</p></div></div></div></div><p class=\"source-note\">教学对照，不是某一次实际运行</p>",
      "steps": [
        "两种做法",
        "第一种",
        "第二种"
      ],
      "script": [
        "【操作提示｜停留课件 p09 第 1 步，指向暂停标记和两种做法；停顿数秒；不切窗口】\n\n停下来看这两种做法。框架初始化时生成了另一套规划文档，哪种做法对？",
        "【操作提示｜推进第 2 步，指向第一种做法的参考判断；不切窗口】\n\n第一种做法是，用新规划覆盖原来的五层规格，后面都按新的走。这样不对。已经批准的规格是需求依据，不能被初始化生成的材料直接覆盖。",
        "【操作提示｜推进第 3 步，指向第二种做法的参考判断；讲完进入 p10】\n\n第二种做法是，保留已有规格作为需求依据，把新生成的材料当成待核对的工作资产。这样对。带着什么进入 6.2？我们把这一节要留下的东西收住。"
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
      "lead": "回到开头的问题，收住这一节要留下的东西，再进入 6.2。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:300px;font-size:22px\">再接一套框架<br>是为了接手已有规格<br>不是另起一套规划</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">SDD 与 GSD 的定位</li><li class=\"is-pass\">不能覆盖已有文档的边界</li><li class=\"is-pass\">固定版本记录和一次经抽查的上手</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>6.2 构建工作流</h3><p>怎样在当前仓库把 GSD 工作流建起来？</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p10 第 1 步，指向中间的判断；不切窗口】\n\n回到开头的问题。已有规格，还要再接一套框架，是为了用它接手已有规格，而不是另起一套规划。",
        "【操作提示｜推进第 2 步，指向“留下的”；不切窗口】\n\n这一节要留下 SDD 与 GSD 的定位、不能覆盖已有文档的边界、固定版本记录，以及一次经抽查的上手。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 6.2，我们看怎样在当前仓库把 GSD 工作流建起来。"
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
      "seconds": 270
    },
    {
      "label": "第一次上手",
      "seconds": 150
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
