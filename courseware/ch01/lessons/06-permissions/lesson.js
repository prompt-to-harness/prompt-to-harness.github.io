window.lesson = {
  "title": "工程经验：为什么不能给 Agent 所有权限",
  "chapter": "第 1 章 · Prompt",
  "section": "01.06",
  "summary": "CLI 为主演示入口；1.1 完成欢迎语闭环，1.5 创建 React + TypeScript + Vite 首页。",
  "scenes": [
    {
      "id": "p32",
      "label": "改欢迎语，要多少权限？",
      "title": "改欢迎语，要多少权限？",
      "kicker": "第 1 章 · 1.6 · 任务与能力",
      "lead": "本章收尾：把权限选择对应到任务与证据",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>1.1</b>首次闭环</li><li class=\"is-done\"><b>1.2</b>拆开执行过程</li><li class=\"is-done\"><b>1.3</b>工具与权限</li><li class=\"is-done\"><b>1.4</b>写清任务</li><li class=\"is-done\"><b>1.5</b>完成首页</li><li class=\"is-now\"><b>1.6</b>最小权限</li></ol><div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr;margin-top:14px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">任务</span><p class=\"p-big\" style=\"font-weight:500\">只改一句欢迎语</p></div><div class=\"p-join\" data-reveal=\"1\"><b>?</b></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"gate\">额外能力</span><p>私人目录 · 其他项目 · 安装 · 发布</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">先对任务，<b>再谈授权</b></div>",
      "steps": [
        "回看任务",
        "判断必要性",
        "留下问题"
      ],
      "script": [
        "上一节我们交付了首页 v0，这一章也快走完了。最后一节，我们回头看一个一直在做、但还没正式讲透的问题：到底该给 Agent 多少权限。先回到 1.3 那个最小的任务：只改一句欢迎语，其余内容保持不变。",
        "那么右边这些能力呢？读取私人目录、修改其他项目、安装依赖、公开发布。大家可以逐项想一下：改一句欢迎语，用得上哪一项？其实一项都用不上。",
        "所以判断顺序是先对任务，再谈授权。不过有人会说：权限给大一点，Agent 不是更容易把事做成吗？下一页我们把每项能力的影响拆开看。"
      ],
      "segment": "任务与能力",
      "seconds": 50,
      "source": "index.html#p32",
      "layout": "lesson-cover",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 回看任务\n\n2. 判断必要性\n\n3. 留下问题"
        },
        {
          "title": "追问与预期判断",
          "text": "改欢迎语，需要这么多权限吗？；权限越大就一定越容易完成吗？下一页比较具体影响。"
        },
        {
          "title": "演示分支",
          "text": "有人建议现场演示访问私人目录时回应：“用合成材料足以分析后果，这里不访问真实私人数据。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M05、M12]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n只复用 1.3 的记录，不重新操作权限界面。\n\n请逐项说出这些能力为什么不是当前任务所需。\n\n权限越大就一定越容易完成吗？下一页比较具体影响。"
        }
      ],
      "notes": "<p>预算 50 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p33",
      "label": "必要能力与额外影响分开看",
      "title": "必要能力与额外影响分开看",
      "kicker": "第 1 章 · 1.6 · 任务与能力",
      "lead": "回到 1.3 只改一句欢迎语的任务，把每项能力按“这次需不需要”分开：读取目标、写入这一句是必要的；读私人目录、写无关文件、安装和发布都不是，只会带来额外影响。“以后可能用得上”不是这次授权的理由。",
      "html": "<div class=\"p-matrix\" style=\"--n:1;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) minmax(0,1.4fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>能力</span><span class=\"p-c\">改欢迎语需要吗</span><span>影响</span></div><div data-reveal=\"0\"><span>读目标与仓库状态</span><span class=\"p-c\" data-mk=\"fit\"> 需要</span><span>定位文字</span></div><div data-reveal=\"1\"><span>写指定欢迎语</span><span class=\"p-c\" data-mk=\"fit\"> 需要</span><span>改动目标文件，仍查 Diff</span></div><div data-reveal=\"2\"><span>读私人目录 / 写无关文件</span><span class=\"p-c\" data-mk=\"over\"> 不需要</span><span>资料暴露 / 误改其他工作</span></div><div data-reveal=\"3\"><span>安装依赖 / 发布</span><span class=\"p-c\" data-mk=\"over\"> 不需要</span><span>环境被改 / 内容公开</span></div></div>",
      "steps": [
        "必要读取",
        "必要写入",
        "额外读写",
        "额外安装发布"
      ],
      "script": [
        "先看必要的部分。读取目标文件和仓库状态是需要的，因为 Agent 得先定位那句文字；但读取也要限定在和任务有关的范围里。",
        "写入指定欢迎语也需要，否则任务根本完不成；但写入只到这一个目标，改完照样要看 Diff。",
        "再看多出来的。读取私人目录，可能把不该给的资料暴露出去；写入无关文件，可能误伤已有的工作。我们只在这里指出风险，不会真的去访问。",
        "安装依赖会改变环境，发布会让内容对外可见。“以后可能用得上”不构成这次授权的理由。那么权限给多少才算合适？下一页把三种情况放在一起比。"
      ],
      "segment": "任务与能力",
      "seconds": 90,
      "source": "index.html#p33",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 必要读取\n\n2. 必要写入\n\n3. 额外读写\n\n4. 额外安装发布"
        },
        {
          "title": "追问与预期判断",
          "text": "必要能力与额外影响分开看；以后可能用不构成本次授权理由，也不为演示风险真的执行。"
        },
        {
          "title": "演示分支",
          "text": "学员指出后续要安装 React 依赖时回应：“那是 1.5 的明确任务，要重新按其范围判断。它不能倒过来证明欢迎语任务也需要安装。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M05、M12]；产品界面若复用截图，引用 [核验 V03] 的版本记录。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n读取范围也要与任务有关。\n\n欢迎语任务需要写入，但只到完成它所需的范围。\n\n分别指出信息风险和对已有工作的影响，不实际访问私人目录。\n\n以后可能用不构成本次授权理由，也不为演示风险真的执行。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p34",
      "label": "过少、匹配、过大，分别会怎样？",
      "title": "过少、匹配、过大，分别会怎样？",
      "kicker": "第 1 章 · 1.6 · 归纳原则",
      "lead": "权限不是越少越好，也不是越多越稳。少到改不了，就说明缺口、申请必要的写入；多出来的能力不会让结果更正确，只会放大出错时的影响。只给完成当前任务所需的能力与范围，就是最小权限（Least Privilege）。",
      "html": "<style>.x-sl{position:relative;display:grid;grid-template-columns:1fr 1.1fr 1fr;column-gap:22px;row-gap:0}.x-sl-track{grid-column:1/4;position:relative;height:74px}.x-sl-track::before{content:'';position:absolute;left:0;right:0;top:30px;height:16px;border-radius:9px;background:#E7E2D6;border:2px solid #243042;filter:url(#p-rough)}.x-sl-zone{position:absolute;top:30px;height:16px;border:2px solid transparent}.x-sl-zone.lo{left:0;width:31.5%;background:#F4B9A4;border-radius:9px 0 0 9px}.x-sl-zone.ok{left:33.5%;width:33%;background:#86C99A}.x-sl-zone.hi{right:0;width:31.5%;background:#F4B9A4;border-radius:0 9px 9px 0}.x-sl-knob{position:absolute;top:14px;left:50%;width:44px;height:44px;margin-left:-22px;border-radius:50%;background:#15803D;border:4px solid #fff;box-shadow:0 0 0 2.5px #15803D,3px 4px 0 rgba(36,48,66,.18)}.x-sl-end{position:absolute;top:0;font:400 20px/1 var(--p-title);color:#4A5260}.x-sl-end.l{left:0}.x-sl-end.r{right:0;color:#A8350F}.x-sl-tick{position:absolute;top:52px;font:400 19px/1 var(--p-title);color:#A8350F;transform:translateX(-50%)}</style><div class=\"x-sl\"><div class=\"x-sl-track\"><span class=\"x-sl-end l\">权限少</span><span class=\"x-sl-end r\">权限多 →</span><i class=\"x-sl-zone lo\" data-reveal=\"0\"></i><i class=\"x-sl-zone ok\" data-reveal=\"1\"></i><i class=\"x-sl-zone hi\" data-reveal=\"2\"></i><span class=\"x-sl-knob\" data-reveal=\"1\"></span></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"0\" style=\"grid-column:1;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">过少 · 只能读</h3><p style=\"font-weight:700\">卡住：改不了欢迎语</p><p class=\"p-sub\" style=\"margin-top:4px\">说明缺口，申请必要写入</p></div><div class=\"p-box\" data-role=\"ok\" data-reveal=\"1\" style=\"grid-column:2;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">匹配 · 读目标 + 改这一句</h3><p style=\"font-weight:700\">刚好完成</p><p class=\"p-sub\" style=\"margin-top:4px\">执行后查 Diff</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\" style=\"grid-column:3;padding:12px 18px;margin-top:4px\"><h3 style=\"font-size:25px\">过大 · 任意写入、发布</h3><p style=\"font-weight:700\">多出风险</p><p class=\"p-sub\" style=\"margin-top:4px\">收窄到任务所需</p></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:16px\">滑块停在刚好的一段：<b>最小权限 · Least Privilege</b></div>",
      "steps": [
        "过少",
        "匹配",
        "过大",
        "命名原则"
      ],
      "script": [
        "第一种是过少：只给读取。Agent 能找到欢迎语，却改不了。最小权限不等于越少越好，少到完不成任务，就该说明缺口、申请必要的写入。",
        "中间是匹配：能读目标，能改那句文字。每一项能力都能对应到一个任务动作，刚好完成，执行后再查 Diff。",
        "第三种是过大：任意写入，甚至能发布。多给的能力不会让结果更正确，只会让一旦出错时的影响更大，所以要收窄范围。",
        "同一根滑杆上，只有中间这一段刚好。这条原则有个名字，叫最小权限，Least Privilege。它最早来自 Saltzer 和 Schroeder 关于系统保护的经典论文，是历史依据，不是哪个产品的配置说明。讲到这里还有一个常见误会，我们下一页单独说。"
      ],
      "segment": "归纳原则",
      "seconds": 100,
      "source": "index.html#p34",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 过少\n\n2. 匹配\n\n3. 过大\n\n4. 命名原则"
        },
        {
          "title": "追问与预期判断",
          "text": "过少、匹配、过大，分别会怎样？；这才是 Least Privilege。Saltzer 与 Schroeder 的原则是历史依据，不是当前产品配置说明。"
        },
        {
          "title": "演示分支",
          "text": "经典来源 V06 未核验时，略去作者归属句，改读：“我们先按任务证据理解最小权限，经典来源归属将在核验后补齐。”不引用未核实原文或年份。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；[核验 V06]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n最小权限不是越少越好；少到无法完成任务也不合适。\n\n把每项能力对应到任务动作。\n\n多给的能力增加错误影响，但并不自动提升正确性。\n\n这才是 Least Privilege。Saltzer 与 Schroeder 的原则是历史依据，不是当前产品配置说明。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p34-boundary",
      "label": "写了“不许”，还要看实际限制",
      "title": "写了“不许”，还要看实际限制",
      "kicker": "第 1 章 · 1.6 · 归纳原则",
      "lead": "Prompt 里写“不许发布”只是表达意图，也就是 1.3 讲过的第一层。真正有没有被限制，要看实际配置和批准范围；人工批准了，也不代表结果一定正确。三者要分别核对。",
      "html": "<div class=\"p-pair\"><div class=\"p-box is-dashed\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">写下的</span><h3>说明意图</h3><p>“不许发布”</p></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b><span>还要核对</span></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"tool\">实际的</span><h3>核对限制</h3><p>真实配置 · 批准范围</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\">意图 · 限制 · 批准，<b>三份证据</b></div>",
      "steps": [
        "回扣三层",
        "解释边界"
      ],
      "script": [
        "很多人会在 Prompt 里写一句“不许发布”，然后就觉得安全了。大家还记得 1.3 的三层吗？这句话属于哪一层？它只是写下的意图。",
        "实际有没有被限制，要去看真实配置和批准范围；而人工批准了，也不代表结果一定正确。意图、限制、批准，是三份不同的证据。好，原则讲完了，我们换一个新任务，看大家能不能自己用上。"
      ],
      "segment": "归纳原则",
      "seconds": 50,
      "source": "index.html#p34-boundary",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 回扣三层\n\n2. 解释边界"
        },
        {
          "title": "追问与预期判断",
          "text": "写了“不许”，还要看实际限制；它是任务约束，不能当作技术隔离已生效；人工批准也不能保证结果正确。"
        },
        {
          "title": "演示分支",
          "text": "经典来源 V06 未核验时，略去作者归属句，改读：“我们先按任务证据理解最小权限，经典来源归属将在核验后补齐。”不引用未核实原文或年份。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；[核验 V06]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n先让学员说出这句禁止语句属于哪层。\n\n它是任务约束，不能当作技术隔离已生效；人工批准也不能保证结果正确。"
        }
      ],
      "notes": "<p>预算 50 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p35",
      "label": "新任务：只检查本地链接",
      "title": "新任务：只检查本地链接",
      "kicker": "第 1 章 · 1.6 · 迁移判断",
      "lead": "把同样的判断迁移到一个新任务：人已启动本地服务、提供了浏览器工具，只需检查本页链接，坏链接记下来即可。和改欢迎语相比，这次连写入都不需要。先自己想一想需要哪些权限，再看下一页的三个选项。",
      "html": "<span class=\"p-tag\" data-role=\"us\" style=\"justify-self:start\">新任务 · 迁移判断</span><div class=\"p-task\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><h3>已知条件</h3><p>本地服务已启动 · 有浏览器工具</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"1\"><h3>仅做观察</h3><p>检查本页链接，坏链接只记录</p></div><div class=\"p-box\" data-role=\"gate\" data-reveal=\"2\"><h3>任务边界</h3><p>不改代码 · 不访问外站 · 不安装 · 不发布</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\">这次<b>连写入都不需要</b></div>",
      "steps": [
        "先读条件",
        "确认目标",
        "与旧任务对比"
      ],
      "script": [
        "新任务是：只检查本地页面上的链接。已知条件是，人已经启动了本地服务、给了 URL，浏览器工具也具备。",
        "目标只是观察和记录：坏的链接记下来就好，不负责修。",
        "边界也写得很清楚：不改代码、不访问外站、不安装、不发布。和改欢迎语对比一下，这次连写入都不需要。大家先自己想一想需要哪些权限，下一页给出三个选项。"
      ],
      "segment": "迁移判断",
      "seconds": 80,
      "source": "index.html#p35",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先读条件\n\n2. 确认目标\n\n3. 与旧任务对比"
        },
        {
          "title": "追问与预期判断",
          "text": "新任务：只检查本地链接；欢迎语需要写入，这题没有写入目标；先独立想需要哪些权限。"
        },
        {
          "title": "演示分支",
          "text": "若学员提出服务未启动，说明那是题设变化，应先停下确认是否授权启动；不要把教学题设当成真实环境状态。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；实际权限选项来自 [核验 V03]。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n这道题只做判断，不执行浏览、安装或发布。先看已有能力。\n\n目标是观察与记录，不是修复链接。\n\n欢迎语需要写入，这题没有写入目标；先独立想需要哪些权限。"
        }
      ],
      "notes": "<p>预算 80 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p35-choose",
      "label": "你会选 A、B，还是 C？",
      "title": "你会选 A、B，还是 C？",
      "kicker": "第 1 章 · 1.6 · 迁移判断",
      "lead": "答案是 A：浏览本地页面与链接就够了。B 多出的写入不是这次的目标，C 再加上安装、外站和发布，只会增加不必要的影响。别忘了写下停止条件：服务失效、链接跳到外站、需要额外工具时，先停下说明。",
      "html": "<div class=\"p-quiz\" style=\"grid-template-columns:repeat(3,minmax(0,1fr))\"><div class=\"p-q\" data-reveal=\"0\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">A</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">浏览本地页面与链接</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"ok\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">选 A</span></div></div><div class=\"p-q\" data-reveal=\"1\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">B</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">A ＋ 修改项目文件</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">过大</span></div></div><div class=\"p-q\" data-reveal=\"2\" style=\"min-height:170px;padding:16px 20px\"><p style=\"margin:0;font:400 44px/1 var(--p-title);color:#243042\">C</p><p class=\"p-say\" style=\"padding-right:0;font-size:22px\">B ＋ 安装 · 外站 · 发布</p><div data-reveal=\"3\" style=\"margin-top:10px\"><span class=\"p-stamp\" data-role=\"gate\" style=\"position:static;display:inline-block;transform:rotate(-4deg)\">过大</span></div></div></div><div class=\"p-bar\" data-reveal=\"3\">服务失效 · 跳到外站 · 要装工具 → <b>先停下说明</b></div>",
      "steps": [
        "看 A",
        "看 B",
        "看 C",
        "揭示理由"
      ],
      "script": [
        "A 只给浏览本地页面和链接的能力。够不够完成刚才那张题卡？先在心里保留答案。",
        "B 在 A 的基础上，再加修改项目文件。可这次的目标里根本没有写入。",
        "C 在 B 之上，又加了安装、访问外站和发布。这些能力会带来哪些不必要的影响？大家可以想一想。",
        "答案是 A。和欢迎语任务比，差别就在于这次没有写入目标。另外要补一条停止条件：服务失效、链接跳到外站、需要额外工具时，先停下来说明。把选择、理由和停止条件补进你已有的权限记录里。练完这道题，我们回头盘点一下整章。"
      ],
      "segment": "迁移判断",
      "seconds": 100,
      "source": "index.html#p35-choose",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 看 A\n\n2. 看 B\n\n3. 看 C\n\n4. 揭示理由"
        },
        {
          "title": "追问与预期判断",
          "text": "你会选 A、B，还是 C？；选 A，并解释与欢迎语任务的差别。补入已有权限记录：选择、理由、停止条件。"
        },
        {
          "title": "演示分支",
          "text": "若学员提出服务未启动，说明那是题设变化，应先停下确认是否授权启动；不要把教学题设当成真实环境状态。"
        },
        {
          "title": "备课标记",
          "text": "[素材 M12]；实际权限选项来自 [核验 V03]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n是否足以完成题卡？先保留答案。\n\n额外写入并不是当前目标。\n\n给出这些能力会增加哪些不必要影响？\n\n选 A，并解释与欢迎语任务的差别。补入已有权限记录：选择、理由、停止条件。"
        }
      ],
      "notes": "<p>预算 100 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p36",
      "label": "按自己的证据标记本章状态",
      "title": "按自己的证据标记本章状态",
      "kicker": "第 1 章 · 1.6 · 自检与收束",
      "lead": "最后用自己的记录按四项自查，不用课程示例代替：首次闭环、首页任务、首页验收、权限选择。证据齐全标“通过”；有缺项标“待补做”，回到对应练习；还没实操标“仅观察”。失败的记录也要保留。",
      "html": "<div class=\"p-grid\" style=\"--n:4;gap:16px\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\" style=\"padding:14px 18px\"><h3>首次闭环</h3><p>复述 · 确认 · 修正</p></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\" style=\"padding:14px 18px\"><h3>首页任务</h3><p>四要素 Prompt</p></div><div class=\"p-box\" data-role=\"tool\" data-reveal=\"2\" style=\"padding:14px 18px\"><h3>首页验收</h3><p>页面 · build · Diff</p></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"3\" style=\"padding:14px 18px\"><h3>权限选择</h3><p>范围与理由</p></div></div><div data-reveal=\"4\" style=\"display:flex;gap:14px;align-items:center;flex-wrap:wrap\"><span class=\"p-chip\" data-role=\"ok\" style=\"font-size:20px\">通过</span><span style=\"font-size:20px\">证据齐全</span><span class=\"p-chip\" data-role=\"gate\" style=\"font-size:20px;margin-left:18px\">待补做</span><span style=\"font-size:20px\">有缺项</span><span class=\"p-chip is-mute\" style=\"font-size:20px;margin-left:18px\">仅观察</span><span style=\"font-size:20px\">还没实操</span></div>",
      "steps": [
        "先找记录",
        "找 Prompt",
        "找验收",
        "找权限理由",
        "标记状态"
      ],
      "script": [
        "这一页请大家拿出自己的记录，按四项自查，不能用老师的示例代替自己的证据。第一项是首次闭环：复述、确认、修正有没有留痕。",
        "第二项是首页任务：指出你 Prompt 里的一条完成标准，以及它对应的检查动作。",
        "第三项是首页验收：页面、build、Diff 的证据都在吗？缺了 CLI 或 build 的，记下补做入口。",
        "第四项是权限选择：用自己的话解释，为什么这项能力是必要的，而不是背一个术语。",
        "最后如实标记状态：证据完整就是通过，有缺项就是待补做，还没动手实操就是仅观察。缺项回到对应练习，失败的记录也不要抹掉。"
      ],
      "segment": "自检与收束",
      "seconds": 90,
      "source": "index.html#p36",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 先找记录\n\n2. 找 Prompt\n\n3. 找验收\n\n4. 找权限理由\n\n5. 标记状态"
        },
        {
          "title": "追问与预期判断",
          "text": "按自己的证据标记本章状态；如实填写通过、待补做或仅观察。缺项回到对应练习，不抹掉失败记录。"
        },
        {
          "title": "演示分支",
          "text": "若部分门禁未通过，收尾：“你可以知道后续学习方向，但相关实操应先补齐这一章缺失的输入和证据。”"
        },
        {
          "title": "备课标记",
          "text": "[素材 M03、M12]。"
        },
        {
          "title": "画面关系",
          "text": "逐步展示手绘卡片；保留原比较维度与判断依据，卡片不代表已经通过。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n按四项自查，不能用教师示例代替自己的证据。\n\n指出一条完成标准和它对应的检查。\n\n缺 CLI 或 build 的，明确补做入口。\n\n解释为什么这项能力必要，而不是背权限术语。\n\n如实填写通过、待补做或仅观察。缺项回到对应练习，不抹掉失败记录。"
        }
      ],
      "notes": "<p>预算 90 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    },
    {
      "id": "p36-recap",
      "label": "先对任务，再给权限，最后查证据",
      "title": "先对任务，再给权限，最后查证据",
      "kicker": "第 1 章 · 1.6 · 自检与收束",
      "lead": "第 1 章交付的不只是首页 v0，还有一套做事习惯：先确认，再小步做，看页面和 Diff，不符合就复验；权限只给必要的，意图不等于限制，受阻时明确停下。第 2 章会带着这个 v0 和证据，从真实页面出发继续迭代。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start;--big:1\"><div data-reveal=\"0\"><h4 style=\"text-align:center\">本章习惯</h4><div class=\"p-star\" style=\"width:260px;font-size:23px\">先确认 · 小步做<br>看页面和 Diff<br>不符就复验</div></div><div data-reveal=\"1\"><h4>权限判断</h4><ul class=\"p-exits\" style=\"gap:12px\"><li class=\"is-pass\">只给必要能力</li><li class=\"is-fix\">意图不等于限制</li><li class=\"is-stop\">受阻时明确停</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h4>接下来</h4><div class=\"p-box\" data-role=\"us\"><h3>第 2 章</h3><p>带着本地 v0，按真实反馈迭代</p></div></div></div>",
      "steps": [
        "回顾闭环",
        "回顾权限",
        "交接"
      ],
      "script": [
        "回头看整个第 1 章，我们交付的不只是一个页面，还有一套习惯：先确认，再小步做，看页面和 Diff，不符合就复验。",
        "权限上也是三句话：只给必要的能力；写下的意图不等于实际限制；受阻时明确停下来。",
        "没通过的项目先补齐。第 2 章我们会带着这个本地 v0 和这些证据，从真实页面出发，按反馈继续迭代。第 1 章就到这里。"
      ],
      "segment": "自检与收束",
      "seconds": 40,
      "source": "index.html#p36-recap",
      "teaching": [
        {
          "title": "逐步讲述与判断",
          "text": "1. 回顾闭环\n\n2. 回顾权限\n\n3. 交接"
        },
        {
          "title": "追问与预期判断",
          "text": "先对任务，再给权限，最后查证据；未通过的项目先补齐，再进入后续验收。"
        },
        {
          "title": "讲师提示",
          "text": "重写口播前的讲解要点，保留其中的操作提醒与边界：\n\n这章交付的不只是一个页面，还有可解释的开发过程。\n\n不重演危险操作，用当前任务和证据决定范围。\n\n未通过的项目先补齐，再进入后续验收。"
        }
      ],
      "notes": "<p>预算 40 秒，含停顿、操作或练习；实际口播与课堂试讲未测。教学示意不能替代实际证据。</p>"
    }
  ],
  "segments": [
    {
      "label": "任务与能力",
      "seconds": 140
    },
    {
      "label": "归纳原则",
      "seconds": 150
    },
    {
      "label": "迁移判断",
      "seconds": 180
    },
    {
      "label": "自检与收束",
      "seconds": 130
    }
  ]
};
