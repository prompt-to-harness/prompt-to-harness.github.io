window.lesson = {
  "title": "一边输入错了，已经得到的结果怎么办",
  "chapter": "第 5 章 · SDD",
  "section": "05.03",
  "summary": "先用同一组嵌套素材做一次正常比较，立住两侧输入和一张结果图，再看一侧输入出错时，错误状态和上次成功结果是两件事，错误不能把已有结果冲掉。",
  "scenes": [
    {
      "id": "p21",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "一边输入错了，已经得到的结果怎么办",
      "title": "已经得到的结果怎么办？",
      "lead": "前两节留下了已验证的差异模型和合并图映射，网页里还不能同时输入两份 JSON。这一节要回答：一边输入错了，已经得到的结果怎么办？",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>5.1</b>差异模型</li><li class=\"is-done\"><b>5.2</b>合并图</li><li class=\"is-now\"><b>5.3</b>双输入</li><li><b>5.4</b>整体验收</li><li><b>5.5</b>可带走的招数</li></ol><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:22px\">5.1、5.2 留下：<b>已验证的差异模型和合并图映射</b>；网页里还不能同时输入两份 JSON</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">本节要留下：可操作的双输入和错误路径，并更新 <code>CH05_IMPLEMENTATION.md</code></div>",
      "steps": [
        "本章位置",
        "5.1、5.2 留下什么",
        "本节要留下什么"
      ],
      "script": [
        "【操作提示｜停留课件 p21 第 1 步，指向章节地图上的 5.3；不切窗口】\n\n前两节，我们留下了已验证的差异模型和合并图映射，网页里还不能同时输入两份 JSON。地图上，这一节是 5.3。",
        "【操作提示｜推进第 2 步，指向 5.1、5.2 留下的模型与映射；不切窗口】\n\n先确认当前副本仍在同一条功能分支上，差异模型和映射任务已经完成。然后打开自己的双输入任务，以及它关联的规则和案例。讲师演示用的是当前基线上的 TASK-03，以及关联的 REQ 和 AC；每个人的编号不必相同，但都要能在自己的文件里找到对应内容。",
        "【操作提示｜推进第 3 步，指向本节要留下的内容；讲完进入 p22】\n\n这一节要留下可操作的双输入和错误路径，并更新 CH05_IMPLEMENTATION.md。一边输入错了，已经得到的结果怎么办？我们先不要从界面步骤讲起，先用 4.4、5.1、5.2 同一组嵌套素材，做一次正常比较。"
      ],
      "teaching": [],
      "source": "index.html#p21",
      "seconds": 90
    },
    {
      "id": "p22",
      "segment": "已经得到的结果",
      "label": "一次正常比较，界面上要同时看见什么",
      "title": "一次正常比较，界面上要同时看见什么？",
      "lead": "先不要讲错误处理。用同一组 fixtures/nested 做一次正常比较，把两侧输入和一张结果图立住，作为后面对照的「已经得到的结果」。",
      "html": "<style>#p22 .p22-row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:20px;margin-top:8px;align-items:stretch}#p22 .p22-inputs{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:stretch;min-width:0}#p22 .p53-field,#p22 .p22-result{display:flex;flex-direction:column;min-width:0;height:100%;box-sizing:border-box}#p22 .p53-field{border:1px solid var(--p-rule);border-radius:12px;padding:10px 12px;background:var(--p-card)}#p22 .p53-field-head .p-tag{margin:0}#p22 .p53-field-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 6px}#p22 .p53-field h3,#p22 .p22-result h3{font-size:18px;margin:0}#p22 .p53-field pre{margin:0;flex:1;font-family:var(--p-mono);font-size:15px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere}#p22 .p22-result .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}#p22 .p-tree li{padding:1px 0}#p22 .p-tree ul{padding-left:24px;margin-left:8px}</style><div class=\"p22-row\"><div data-reveal=\"0\"><h3 style=\"font-size:20px;margin:0 0 8px\">两个可编辑输入</h3><div class=\"p22-inputs\"><div class=\"p53-field\" data-role=\"ink\"><div class=\"p53-field-head\"><h3>Before</h3></div><pre>{\"user\":{\"name\":\"Lin\",\"age\":20},\"active\":true}</pre></div><div class=\"p53-field\" data-role=\"ink\"><div class=\"p53-field-head\"><h3>After</h3></div><pre>{\"user\":{\"name\":\"Lin\",\"age\":21},\"role\":\"student\"}</pre></div></div></div><div class=\"p22-result\" data-reveal=\"1\"><h3 style=\"font-size:20px;margin:0 0 8px\">一张结果图</h3><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"p-note\">unchanged · 下面有变化</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"p-note\">changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"p-note\">removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"p-note\">added</span></li></ul><div class=\"p-bar is-light\" style=\"margin-top:10px\">差异数 <b>3</b> · <code>/active</code>、<code>/role</code>、<code>/user/age</code></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">输入 → 解析 → 已有模型与映射 → 更新界面；UI 只调用已有逻辑，不复制算法</div><p class=\"source-note\">输入区为课程自绘示意，不固化布局；结果图用来对照要看见的内容，不是产品界面</p>",
      "steps": [
        "两侧输入",
        "一张结果图",
        "输入怎样变成界面"
      ],
      "script": [
        "【操作提示｜停留课件 p22 第 1 步，指向两侧输入位置上的 Before 和 After；不切窗口】\n\n打开 docs/specs/fixtures/nested/。界面上要同时有两个可编辑的输入位置，分别标注 Before 与 After。这是规格里已经固定的输入。",
        "【操作提示｜推进第 2 步，指向唯一的结果图、差异数和三条路径；不切窗口】\n\n比较完成后，应只有一张结果图。差异数为 3，/active、/role、/user/age 能在这张图上被看见。当前基线上是 REQ-001、AC-001，以实际文件为准。请先把这次成功结果立住，后面对照时，指的就是它。",
        "【操作提示｜推进第 3 步，指向输入到界面的路径；讲完进入 p23】\n\n两侧输入先经过合法性解析，再交给已经有的差异模型和合并图映射，最后更新界面。UI 只调用已有逻辑，不再复制一套算法。先不要讲错误处理。有了这张已经得到的结果图，再看一边输入错了会怎样。"
      ],
      "teaching": [],
      "source": "index.html#p22",
      "seconds": 90
    },
    {
      "id": "p23",
      "segment": "已经得到的结果",
      "label": "一边输入错了，已经得到的结果怎么办",
      "title": "一边输入错了，已经得到的结果怎么办？",
      "lead": "有了已经得到的结果图，再把 Before 改成非法 JSON。请对照「被清空成空状态」和「错误和结果分开」。这一页把现象讲清，不展开实现细节。",
      "html": "<style>#p23 .p23-input{margin-top:4px}#p23 .p53-field{border:1px solid var(--p-rule);border-radius:12px;padding:10px 14px;background:var(--p-card);max-width:420px}#p23 .p53-field.is-error{border-color:var(--c);background:var(--cl)}#p23 .p53-field-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 6px}#p23 .p53-field-head .p-tag{margin:0}#p23 .p53-field h3{font-size:18px;margin:0}#p23 .p53-field pre{margin:0;font-family:var(--p-mono);font-size:18px;line-height:1.45}#p23 .p23-row{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:14px;align-items:stretch}#p23 .p23-col{display:flex;flex-direction:column;min-width:0}#p23 .p23-col h3{font-size:20px;margin:0 0 8px}#p23 .p23-empty{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;min-height:168px;border:1.5px dashed var(--p-rule);border-radius:12px;color:var(--p-muted);font-size:20px;padding:16px}#p23 .p23-col .p-tree{flex:1;padding:8px 14px;font-size:18px;line-height:1.4}#p23 .p-tree li{padding:1px 0}#p23 .p-tree ul{padding-left:24px;margin-left:8px}body[data-mode=\"slides\"] #p23 .scene-content{top:220px;height:440px;gap:10px}body[data-mode=\"slides\"] #p23 .p53-field{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 12px}body[data-mode=\"slides\"] #p23 .p53-field-head{margin:0}body[data-mode=\"slides\"] #p23 .p53-field pre{padding:6px 12px}body[data-mode=\"slides\"] #p23 .p23-row{margin-top:0}body[data-mode=\"slides\"] #p23 .p23-col .p-bar{padding:8px 12px;font-size:18px;line-height:1.4}body[data-mode=\"slides\"] #p23 .p23-col .p-tree{line-height:1.3}body[data-mode=\"slides\"] #p23 .scene-content>.p-bar{margin-top:0!important;padding:8px 12px;font-size:20px;line-height:1.4}</style><div class=\"p23-input\" data-reveal=\"0\"><div class=\"p53-field is-error\" data-role=\"gate\"><div class=\"p53-field-head\"><h3>Before</h3><span class=\"p-tag\" data-role=\"gate\">出错侧</span></div><pre>{\"user\": }</pre></div></div><div class=\"p23-row\"><div class=\"p23-col\" data-reveal=\"1\"><h3>被清空成空状态</h3><div class=\"p23-empty\">上次结果消失</div></div><div class=\"p23-col\" data-reveal=\"2\"><h3>错误和结果分开</h3><div class=\"p-bar is-light\" style=\"margin-bottom:10px\">错误提示指向 <b>Before</b></div><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">user</span><span class=\"p-note\">unchanged · 下面有变化</span><ul><li><span class=\"p-path\">name: Lin</span></li><li class=\"is-target\"><span class=\"p-path\">age: 20 → 21</span><span class=\"p-note\">changed</span></li></ul></li><li class=\"is-block\"><span class=\"p-path\">active: true</span><span class=\"p-note\">removed</span></li><li class=\"is-allow\"><span class=\"p-path\">role: student</span><span class=\"p-note\">added</span></li></ul><div class=\"p-bar is-light\" style=\"margin-top:10px\">合并图仍在，差异数仍为 <b>3</b></div></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:14px\">错误状态和上次成功结果是两件事，错误不能把已有结果冲掉</div><p class=\"source-note\">非法输入来自 docs/specs/fixtures/error/invalid-before.json；对照为课程自绘示意，不是产品界面</p>",
      "steps": [
        "Before 改成非法 JSON",
        "被清空成空状态",
        "错误和结果分开"
      ],
      "script": [
        "【操作提示｜停留课件 p23 第 1 步，指向改成非法 JSON 的 Before；不切窗口】\n\n现在把 Before 改成 docs/specs/fixtures/error/invalid-before.json，内容是 {\"user\": }，这是故意不合法的 JSON。请先判断：已经得到的结果该怎么办？",
        "【操作提示｜推进第 2 步，指向「被清空成空状态」；不切窗口】\n\n先看一种做法：上次成功比较的结果被清空，界面变成空状态。已经得到的结果消失了。",
        "【操作提示｜推进第 3 步，指向「错误和结果分开」与结论；讲完进入 p24】\n\n再看应有的对照：错误提示要指向出错的那一侧，也就是 Before；但合并图还在，差异数仍读作 3，不能被清空成空状态。当前基线上是 REQ-020、REQ-021、AC-014，以实际文件为准。错误状态和上次成功结果是两件事，错误不能把已经得到的结果冲掉。这一页把现象讲清，不展开实现细节。"
      ],
      "teaching": [],
      "source": "index.html#p23",
      "seconds": 90
    },
    {
      "id": "p24",
      "segment": "已经得到的结果",
      "label": "本节要检查到哪一步，才算双输入和错误路径做完",
      "title": "本节要检查到哪一步，才算双输入和错误路径做完？",
      "lead": "这一页先说明本节还要核对的错误路径，先不下完成结论。本节检查的是可操作的双输入和错误恢复，不是整功能验收。",
      "html": "<div class=\"p-grid\" style=\"--n:2\"><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">首次即出错</span><h3 style=\"font-size:22px;margin:8px 0 0\">空状态，提示指向 Before</h3><p>从未成功比较过，界面上不能出现比较结果</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"ctx\">After 侧出错</span><h3 style=\"font-size:22px;margin:8px 0 0\">提示指向 After</h3><p>不能同时把 Before 说成出错方</p></div></div><div class=\"p-bar is-light\" data-reveal=\"1\" style=\"margin-top:14px\">恢复成合法的 nested 输入后，结果按<b>当前两侧</b>更新，不停留在上一轮错误或旧结果上</div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:10px\">「只看变化」、摘要、超限提示和 360px 正式走查属于 <b>5.4</b>；差异数仍能读到，不等于摘要区已经完成</div><p class=\"source-note\">期望表放到看完检查之后再完整对照；编号以当前规格基线的实际文件为准</p>",
      "steps": [
        "还要核对的错误路径",
        "恢复合法输入后要更新",
        "摘要和筛选留给 5.4"
      ],
      "script": [
        "【操作提示｜停留课件 p24 第 1 步，指向首次出错和 After 侧出错；不切窗口】\n\n还要检查另外两种情况。刚打开页面、从未成功比较过，Before 一开始就是非法 JSON：这时没有历史结果可留，应显示空状态和指向 Before 的错误提示，界面上不能出现比较结果。当前基线上是 REQ-022、AC-012。After 侧出错时，提示要明确指向 After，不能同时把 Before 说成出错方。当前基线上是 AC-013。",
        "【操作提示｜推进第 2 步，指向恢复合法输入后要更新；不切窗口】\n\n把非法输入恢复成合法的 nested 案例后，结果要按当前两侧输入更新，不能停在上一轮错误或旧结果上。",
        "【操作提示｜推进第 3 步，指向留给 5.4 的部分；讲完进入 p25】\n\n本节检查的是可操作的双输入和错误恢复，不是整功能验收。「只看变化」开关、差异摘要、超限提示和 360px 窄屏的正式走查，属于 5.4。差异数在上次结果里仍能读到，也不等于摘要区已经完成。完整的期望表，放到看完检查之后再对照。现在先看，怎样让 Agent 只完成双输入和错误恢复，不顺手做筛选。"
      ],
      "teaching": [],
      "source": "index.html#p24",
      "seconds": 90
    },
    {
      "id": "p25",
      "segment": "怎样发出请求",
      "label": "怎样让 Agent 只完成双输入和错误恢复，不顺手做筛选",
      "title": "怎样让 Agent 只完成双输入和错误恢复，不顺手做筛选？",
      "lead": "有了要核对的界面范围，再确定这次怎么让 Agent 只完成双输入和错误恢复。先看清起点、验证方式，以及请求里要写清的几件事。先看懂，这一页还不发出请求。",
      "html": "<div class=\"p-grid\" style=\"--n:3\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">起点</span><h3 style=\"font-size:22px;margin:8px 0 0\">接着 5.2 的功能分支</h3><p>核对模型与映射仍在，工作区可继续</p></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">验证</span><h3 style=\"font-size:22px;margin:8px 0 0\">lint，再走查网页</h3><p>按错误路径走查，并用 <code>?json=</code> 与导入弹窗做单输入回归；不引入测试框架</p></div><div class=\"p-box\" data-role=\"agent\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"agent\">请求要素</span><h3 style=\"font-size:22px;margin:8px 0 0\">任务、案例和允许范围</h3><p>输入是已验证的模型与映射；产出可操作的双输入和错误恢复</p></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:14px\">允许新增两份输入区、独立 Diff 状态和 Diff 视图分支；不改 <code>useJson</code> 与单输入链路，也不改既有 Graph / Tree / 导入 / <code>?json=</code> / widget。不要把「只看变化」、摘要、超限或 360px 走查当作本节完成条件</div><div style=\"margin-top:12px\" data-reveal=\"2\"><details class=\"p-pop\"><summary>一份请求草案</summary><div class=\"p-pop-body\"><div class=\"p-pop-head\"><span>演示请求草案（按自己的规格调整）</span><button type=\"button\" onclick=\"this.closest('details').open=false\">关闭</button></div><p style=\"margin:0 0 8px\">这份草案供备课实跑使用，不是固定的复制模板。用自己已经审过的规格和任务组织请求。</p><p style=\"margin:0 0 8px\">要写清：只完成当前的双输入与错误状态任务；输入是已验证的差异模型和图映射；用 <code>nested</code> 和 <code>error</code> 素材在界面上核对正常比较、出错后保留上次结果、首次出错、After 侧出错和恢复后更新，不要用正在实现的界面逻辑生成期望；然后运行 <code>pnpm --filter www run lint</code>，再启动 <code>pnpm dev:www</code> 走查，并用 <code>?json=</code> 与导入弹窗各走一次。执行比较时可以打开网络面板，核对比对请求里不出现这两份 JSON 的内容；不要切换「只看变化」，也不要把摘要、超限提示或 360px 走查作为这次的完成条件。</p><p style=\"margin:0\">布局与输入方式仍是未决项，不要固化。第 6 章才会批准「明确提示当前图是上次有效结果」，不要把该提示设为必做，也不要刻意移除已经有的等价行为。</p></div></details></div>",
      "steps": [
        "确定起点",
        "怎样验证",
        "请求里要写清什么"
      ],
      "script": [
        "【操作提示｜停留课件 p25 第 1 步，指向起点；不切窗口】\n\n先确定起点。接着 5.2 的功能分支，核对差异模型和映射还在，工作区可以继续。已有改动或检查受阻时，保留现场并先处理起点；不能把未运行或失败的检查记为通过。",
        "【操作提示｜推进第 2 步，指向验证方式；不切窗口】\n\n这个仓库没有测试框架。验证方式是：运行 pnpm --filter www run lint，再启动 pnpm dev:www，按首次出错、After 侧出错、出错后保留上次结果来走查；再用 ?json= 与导入弹窗各走一次，确认单输入路径没有被 Diff 状态污染。执行比较时可以打开网络面板，只核对比对请求里有没有带走这两份 JSON 的内容，不要切换「只看变化」。不要引入测试框架，也不要把「只看变化」、摘要、超限提示或 360px 正式走查当作本节的完成条件。",
        "【操作提示｜推进第 3 步，指向请求要素和允许范围；讲完进入 p26】\n\n请求里要让 Agent 读到当前的双输入与错误状态任务、关联的 Spec 和 Acceptance、固定素材，以及全局约束和非目标。还要写清：输入是已经验证的差异模型和图映射，本次产出可操作的双输入界面和错误恢复，用哪些案例核对界面，允许改到哪里。当前基线上，允许在网页版新增 Diff 视图的两份输入区，新增独立的 Diff 状态，并在现有编辑页增加 Diff 视图分支；不改 useJson，不改 useFile.setContents 链路，也不改 GraphView、TreeView、导入弹窗、?json= 和 widget 的既有行为。不要在界面里复制一套差异算法，输入合法性沿用网页版既有解析依赖。两份输入的最终形态与落位方式仍是未决项，保持可调整，不要固化布局。第 6 章才会批准「明确提示当前图是上次有效结果」，这次不要把该提示设为必做，也不要刻意移除已经有的等价行为。用自己已经审过的规格组织请求。分镜里有一份演示请求草案，供备课实跑使用，不是固定的复制模板。当前副本对得上起点吗？请求该怎么发出？接下来会切到现场去做。"
      ],
      "teaching": [],
      "source": "index.html#p25",
      "seconds": 90
    },
    {
      "id": "p26",
      "segment": "怎样发出请求",
      "label": "当前副本对得上起点吗？请求该怎么发出",
      "title": "当前副本对得上起点吗？请求该怎么发出？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写 Agent 回答</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p26 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p26",
      "seconds": 30
    },
    {
      "id": "p27",
      "segment": "完成边界",
      "label": "怎样判断双输入和错误路径做到了完成边界",
      "title": "怎样判断双输入和错误路径做到了完成边界？",
      "lead": "本页在演练之后再写",
      "html": "<div class=\"p-bar is-light\" data-reveal=\"0\">待备课实跑后再写；不预写运行结果</div>",
      "steps": [
        "待演练后制作"
      ],
      "script": [
        "【操作提示｜停留课件 p27 第 1 步】\n\n本页待演练后再写。"
      ],
      "teaching": [],
      "source": "index.html#p27",
      "seconds": 30
    },
    {
      "id": "p28",
      "segment": "完成边界",
      "label": "一侧输入非法时，错误状态与上次成功结果各由什么证据确认",
      "title": "一侧输入非法时，错误状态与上次成功结果各由什么证据确认？",
      "lead": "一侧输入非法时，错误状态与上次成功的比较结果各由什么证据确认？请先判断，再看要核对的对象。这是本节的学员判断，先不要下结论。",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:12px 20px\"><span class=\"p-tag\" data-role=\"us\">学员判断</span><h3 style=\"font-size:24px;margin:8px 0 0\">一侧输入非法时，错误状态与上次成功结果各由什么证据确认？</h3></div><div class=\"p-bar\" data-reveal=\"1\" style=\"margin-top:14px\">要看页面和刚才的输入操作：错误提示指向哪一侧；上次结果是否仍在——合并图还在，差异数仍为 <b>3</b>，没有变成空状态</div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:10px\">只看 Agent 回复或一次正常路径，还不够；筛选、摘要和窄屏留给 5.4</div><p class=\"source-note\">期望以当前规格基线的实际文件为准</p>",
      "steps": [
        "先判断",
        "错误和结果各看什么",
        "只看回复还不够"
      ],
      "script": [
        "【操作提示｜停留课件 p28 第 1 步，指向判断问题；停顿数秒；不切窗口】\n\n现在请判断：一侧输入非法时，错误状态与上次成功的比较结果，各由什么证据确认？",
        "【操作提示｜推进第 2 步，指向错误提示和上次结果各看什么；不切窗口】\n\n要结合页面和刚才的输入操作来回答。错误提示指向哪一侧；上次结果是否仍在——合并图还在，差异数仍为 3，没有变成空状态。",
        "【操作提示｜推进第 3 步，指向只看回复还不够；讲完进入 p29】\n\n只看 Agent 回复，或只看一次正常比较的路径，还不足以说明错误恢复符合验收。筛选、摘要和窄屏留给 5.4。检查结果和期望不一致时怎么处理，前面已经判断过，这里不再重讲。刚打开页面、还从未成功比较过，一侧输入就非法，这两种做法哪样对？"
      ],
      "teaching": [],
      "source": "index.html#p28",
      "seconds": 90
    },
    {
      "id": "p29",
      "segment": "自检与交接",
      "label": "刚打开页面、还从未成功比较过，一侧输入就非法，这两种做法哪样对",
      "title": "刚打开页面、还从未成功比较过，一侧输入就非法，这两种做法哪样对？",
      "lead": "刚打开页面、还从未成功比较过，一侧输入就非法。这一问和上一页「成功后再出错」不是同一件事。请先自己判断这两种做法哪样对，再看参考结论。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>界面上还可以留着某次演示用过的旧结果</h3><div data-reveal=\"1\"><p>不对。此时没有可保留的上次结果，不能拿别的结果来充数</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>此时没有历史结果，应显示空状态和指向出错侧的提示，不能拿别的结果来充数</h3><div data-reveal=\"2\"><p>对。首次出错和「成功后再出错」不是同一件事</p></div></div></div></div><p class=\"source-note\">教学对照，不是某一次实际运行</p>",
      "steps": [
        "两种做法",
        "第一种",
        "第二种"
      ],
      "script": [
        "【操作提示｜停留课件 p29 第 1 步，指向暂停标记和两种做法；停顿数秒；不切窗口】\n\n停下来看这两种做法。刚打开页面、还从未成功比较过，一侧输入就非法时，哪样对？",
        "【操作提示｜推进第 2 步，指向第一种做法的参考判断；不切窗口】\n\n第一种做法是，界面上还可以留着某次演示用过的旧结果。这样不对。此时没有可保留的上次结果，不能拿别的结果来充数。",
        "【操作提示｜推进第 3 步，指向第二种做法的参考判断；讲完进入 p30】\n\n第二种做法是，此时没有历史结果，应显示空状态和指向出错侧的提示。这样对。首次出错和「成功后再出错」不是同一件事。带着什么进入 5.4？我们把这一节要留下的东西收住。"
      ],
      "teaching": [],
      "source": "index.html#p29",
      "seconds": 90
    },
    {
      "id": "p30",
      "segment": "自检与交接",
      "label": "带着什么进入 5.4",
      "title": "带着什么进入 5.4？",
      "lead": "实现可以与讲师不同，但要能解释固定输入、预期、实际界面和代码改动。受阻时记录实际进展，不承诺章节级恢复点。请看这一节留下什么，以及怎样进入 5.4。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:280px;font-size:22px\">错误和上次结果是两件事<br>错误不能把已有结果冲掉</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">可操作的双输入和错误路径</li><li class=\"is-pass\">更新后的 CH05_IMPLEMENTATION.md</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>5.4 整体验收</h3><p>再补上摘要与筛选，对照整组验收判断整个功能有没有做完</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步，指向中间的判断；不切窗口】\n\n回到开头的问题。一边输入错了，已经得到的结果怎么办？错误状态和上次成功结果是两件事，错误不能把已经得到的结果冲掉。",
        "【操作提示｜推进第 2 步，指向“留下的”；不切窗口】\n\n这一节要留下可操作的双输入和错误路径，以及更新后的 CH05_IMPLEMENTATION.md。实现可以与讲师不同，但要能解释固定输入、预期、实际界面和代码改动。运行或环境受阻时，记录实际进展与错误，从已有的本地提交和课程提供的排障材料继续；不能承诺章节级恢复点。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n下一节 5.4，我们再补上摘要与筛选，对照整组验收判断整个功能有没有做完。"
      ],
      "teaching": [],
      "source": "index.html#p30",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "已经得到的结果",
      "seconds": 270
    },
    {
      "label": "怎样发出请求",
      "seconds": 120
    },
    {
      "label": "完成边界",
      "seconds": 120
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};
