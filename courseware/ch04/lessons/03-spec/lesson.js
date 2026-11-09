window.lesson = {
  "title": "要求写得再细，为什么还会跑偏",
  "chapter": "第 4 章 · SDD",
  "section": "04.03",
  "summary": "用几段小 JSON 看清同一句需求的几种合理结果，由人决定行为，再让 Agent 起草、讲师逐条审，写成第二份规格 Spec。",
  "scenes": [
    {
      "id": "p26",
      "segment": "开篇",
      "layout": "lesson-cover",
      "label": "要求写得再细，为什么还会跑偏",
      "title": "写细了，怎么还会跑偏？",
      "lead": "Brief 最后列着 Open 问题。这一节逐条看清它们有几种合理做法，由人决定，写成第二份规格 Spec",
      "html": "<ol class=\"p-map\"><li class=\"is-done\"><b>4.1</b>接手工程</li><li class=\"is-done\"><b>4.2</b>形成 Brief</li><li class=\"is-now\"><b>4.3</b>批准 Spec</li><li><b>4.4</b>写验收</li><li><b>4.5</b>拆任务</li><li><b>4.6</b>MCP 工具</li></ol><div style=\"margin-top:26px\"><div class=\"p-stairs\" data-reveal=\"1\" style=\"--n:5;--rise:14px;column-gap:12px;height:auto\"><div class=\"p-stair\" style=\"--i:0\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Brief</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">BRIEF.md</p></div></div><div class=\"p-stair\" style=\"--i:1\"><div class=\"p-box is-solid\" data-role=\"ctx\" style=\"padding:8px 12px;\"><h3 style=\"font-size:20px;margin:0\">Spec</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">SPEC.md</p></div></div><div class=\"p-stair\" style=\"--i:2\"><div class=\"p-box is-dashed\" data-role=\"ctx\" style=\"padding:8px 12px;opacity:.42\"><h3 style=\"font-size:20px;margin:0\">Acceptance</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">ACCEPTANCE.md</p></div></div><div class=\"p-stair\" style=\"--i:3\"><div class=\"p-box is-dashed\" data-role=\"ctx\" style=\"padding:8px 12px;opacity:.42\"><h3 style=\"font-size:20px;margin:0\">Plan</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">PLAN.md</p></div></div><div class=\"p-stair\" style=\"--i:4\"><div class=\"p-box is-dashed\" data-role=\"ctx\" style=\"padding:8px 12px;opacity:.42\"><h3 style=\"font-size:20px;margin:0\">Tasks</h3><p style=\"font-family:var(--p-mono);font-size:14px;margin:2px 0 0\">TASKS.md</p></div></div></div></div><div class=\"p-bar is-light\" data-reveal=\"2\" style=\"margin-top:18px\">手里有：<b>原文快照 · BRIEF.md · Open 问题</b></div>",
      "steps": [
        "本章位置",
        "这一节补哪一层",
        "从 Open 问题开始"
      ],
      "script": [
        "【操作提示｜停留课件 p26 第 1 步，指向章节地图上的 4.3；不切窗口】\n\n上一节，我们把需求原文取回了仓库，带着它查了源码，写出了第一份规格 Brief。Brief 的最后一节叫 Open 问题，列的是原文里没定下来、又会改变实现的地方。",
        "【操作提示｜推进第 2 步，指向锚点图里实心的 Spec】\n\n这一节补五层里的第二层：Spec。它回答的是，什么算不同，用户最后在界面上看到什么。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p27】\n\n需求原文写了好几条要求，Brief 也整理得很清楚。那为什么还要单独写一份 Spec？要求写得再细，为什么做出来还会跑偏？我们从 Open 问题开始看。"
      ],
      "teaching": [],
      "source": "index.html#p26",
      "seconds": 90
    },
    {
      "id": "p28",
      "segment": "几种结果",
      "label": "键换序与类型变化",
      "title": "键换了顺序，1 变成 \"1\"，算不算变？",
      "lead": "两组很小的输入。每组都有两种说得通的结论，需求原文自己也没有定下来",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:14px 22px;align-items:center\"><div data-reveal=\"0\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px\"><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>Before</span></div><pre style=\"font-size:21px\">{&quot;a&quot;:1,&quot;b&quot;:2}</pre></div><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>After</span></div><pre style=\"font-size:21px\">{&quot;b&quot;:2,&quot;a&quot;:1}</pre></div></div><div data-reveal=\"1\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"ctx\">逐个比字段</span><h3 style=\"font-size:22px;margin:6px 0 2px\">没有差异</h3><p style=\"font-size:18px;margin:0\">两个字段的值都没变</p></div><div class=\"p-box\" data-role=\"gate\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"gate\">逐行比文本</span><h3 style=\"font-size:22px;margin:6px 0 2px\">两行改动</h3><p style=\"font-size:18px;margin:0\">顺序换了，两行都不一样</p></div></div><div data-reveal=\"2\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px\"><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>Before</span></div><pre style=\"font-size:21px\">{&quot;n&quot;:1}</pre></div><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>After</span></div><pre style=\"font-size:21px\">{&quot;n&quot;:&quot;1&quot;}</pre></div></div><div data-reveal=\"3\" style=\"display:grid;grid-template-columns:1fr 1fr;gap:10px\"><div class=\"p-box\" data-role=\"ctx\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"ctx\">看显示</span><h3 style=\"font-size:22px;margin:6px 0 2px\">没变</h3><p style=\"font-size:18px;margin:0\">界面上都显示成 1</p></div><div class=\"p-box\" data-role=\"gate\" style=\"padding:10px 16px\"><span class=\"p-tag\" data-role=\"gate\">看值和类型</span><h3 style=\"font-size:22px;margin:6px 0 2px\">变了</h3><p style=\"font-size:18px;margin:0\">数字变成了字符串</p></div></div></div><div class=\"p-bar\" data-reveal=\"4\" style=\"margin-top:16px\">原文：字段顺序“组里意见不太一致”；<code>1</code> 变成 <code>\"1\"</code>“这种我们也想知道”</div>",
      "steps": [
        "键换了顺序",
        "两种结论",
        "1 变成 \"1\"",
        "两种结论",
        "原文怎么说"
      ],
      "script": [
        "【操作提示｜停留课件 p28 第 1 步，指向第一组 Before 和 After】\n\n先看最小的一组。Before 是 a 等于 1、b 等于 2，After 把两个字段换了个顺序，值一个都没变。",
        "【操作提示｜推进第 2 步，依次指两张结论卡】\n\n一种实现逐个字段去比，a 还是 1，b 还是 2，结论是没有差异。另一种按文本一行一行比，两行都和原来不一样，就标成两处改动。两种做法都说得通。",
        "【操作提示｜推进第 3 步，指向第二组 Before 和 After】\n\n再看第二组。n 原来是数字 1，现在变成了带引号的字符串 1。",
        "【操作提示｜推进第 4 步，依次指两张结论卡】\n\n界面上它们都显示成 1，只看显示会觉得没变；把值和类型一起看，它确实变了，数字变成了字符串。",
        "【操作提示｜推进第 5 步，指向底部横条】\n\n需求原文对这两件事是怎么说的？字段顺序那条，原文写的是组里意见不太一致；1 变成字符串 1，原文说这种他们也想知道。第一件需求方自己都没定，第二件只说了想知道，还没说算哪一种变化。"
      ],
      "teaching": [],
      "source": "index.html#p28",
      "seconds": 150
    },
    {
      "id": "p29",
      "segment": "几种结果",
      "label": "数组插入",
      "title": "数组中间插一项，后面怎么对上？",
      "lead": "按位置比，还是先认出同一个元素再比，结果差别很大。后一种更符合直觉，但要先回答“怎样算同一个元素”",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1fr) minmax(0,1fr);gap:20px;align-items:start\"><div data-reveal=\"0\" style=\"display:flex;flex-direction:column;gap:10px\"><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>Before</span></div><pre style=\"font-size:21px\">[10,20]</pre></div><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>After</span></div><pre style=\"font-size:21px\">[5,10,20]</pre></div></div><div class=\"p-box\" data-role=\"ctx\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ctx\">按索引</span><ul style=\"margin:10px 0 8px;padding-left:20px;font-size:20px;line-height:1.6;font-family:var(--p-mono)\"><li>[0] 10 → 5　changed</li><li>[1] 20 → 10　changed</li><li>[2] + 20　added</li></ul><h3 style=\"font-size:24px;margin:0\">3 处差异</h3></div><div class=\"p-box\" data-role=\"us\" data-reveal=\"2\"><span class=\"p-tag\" data-role=\"us\">按元素对齐</span><ul style=\"margin:10px 0 8px;padding-left:20px;font-size:20px;line-height:1.6;font-family:var(--p-mono)\"><li>+ 5　added</li><li>10　不变</li><li>20　不变</li></ul><h3 style=\"font-size:24px;margin:0\">1 处差异</h3></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:18px\">商品列表里的对象，<b>按哪个字段认是同一个</b>？LCS、业务主键都是对齐办法，选不选由人定</div>",
      "steps": [
        "插入一项",
        "按索引",
        "按元素对齐",
        "怎样算同一个"
      ],
      "script": [
        "【操作提示｜停留课件 p29 第 1 步，指向左侧 Before 和 After】\n\n数组的情况更复杂。Before 是 10、20，After 在最前面插了一个 5，变成 5、10、20。",
        "【操作提示｜推进第 2 步，从上到下指“按索引”一栏】\n\n按位置一项一项比：第 0 位从 10 变成 5，第 1 位从 20 变成 10，第 2 位多出一个 20。一共 3 处差异，可实际上只插了一项。",
        "【操作提示｜推进第 3 步，指向“按元素对齐”一栏】\n\n先认出同一个元素再比，结果就是开头新增了一个 5，10 和 20 都没变，只有 1 处差异。这个结果更符合直觉。",
        "【操作提示｜推进第 4 步，指向底部横条】\n\n可它要先回答一个问题：怎样算同一个元素？数字可以按值认，商品列表里的对象按哪个字段认？上一节 Agent 起草 Brief 时，可能在这条 Open 问题下面建议过 LCS 或者业务主键，这些都是对齐的办法。选哪一种、做不做，还是要人来定。"
      ],
      "teaching": [],
      "source": "index.html#p29",
      "seconds": 120
    },
    {
      "id": "p30",
      "segment": "几种结果",
      "label": "为什么还会跑偏",
      "title": "写细了，为什么还会跑偏？",
      "lead": "原文已经写了要高亮不同、要支持数组，但没说什么算不同、元素怎样对上。空白处，每个实现者都会用自己的默认做法补上",
      "html": "<div class=\"p-box\" data-role=\"us\" data-reveal=\"0\" style=\"padding:12px 20px\"><span class=\"p-tag\" data-role=\"us\">需求原文</span><h3 style=\"font-size:24px;margin:8px 0 0\">“把不同的地方高亮出来”　“数组也要支持”</h3></div><div class=\"p-grid\" style=\"--n:3;margin-top:16px\" data-reveal=\"1\"><div class=\"p-box\" data-role=\"ink\"><h3 style=\"font-size:22px\">实现者 A</h3><p>键序算变化，按索引比</p></div><div class=\"p-box\" data-role=\"ink\"><h3 style=\"font-size:22px\">实现者 B</h3><p>键序不算，按元素对齐</p></div><div class=\"p-box\" data-role=\"agent\"><h3 style=\"font-size:22px\">Agent</h3><p>按它采用的常见做法补上</p></div></div><div class=\"p-bar\" data-reveal=\"2\" style=\"margin-top:18px\">能消除分歧的，是<b>人看过结果和代价后作出的决定</b>，写成规则</div>",
      "steps": [
        "原文写了什么",
        "各自补上默认",
        "由人决定，写成规则"
      ],
      "script": [
        "【操作提示｜停留课件 p30 第 1 步，指向需求原文两句】\n\n回到这一节的问题。需求原文写了把不同的地方高亮出来，也写了数组要支持。要求本身写得不少，可刚才三组例子它都没回答：什么算不同，数组元素怎样对上。",
        "【操作提示｜推进第 2 步，依次指三张卡片】\n\n原文留下空白，每个实现者都会用自己习惯的做法补上。实现者 A 可能觉得键序也算变化、数组按索引比；实现者 B 可能正好相反。Agent 也一样，它会按自己采用的常见做法补。补出来的东西各不相同，就是跑偏。",
        "【操作提示｜推进第 3 步，指向底部横条；讲完进入 p31】\n\n所以，把要求写得更细，并不能替我们选出其中一种。能消除分歧的，是一个人看过各种结果和代价之后作出的决定，再把这个决定写成规则。"
      ],
      "teaching": [],
      "source": "index.html#p30",
      "seconds": 90
    },
    {
      "id": "p31",
      "segment": "人来决定",
      "label": "课程怎么定",
      "title": "三个问题，课程这样定",
      "lead": "本课程由讲师担任需求负责人，对每个问题说明选择和代价。按索引是控制范围的取舍：规则简单、结果容易人工核算，代价也要写进 Spec",
      "html": "<div class=\"p-qlist\"><div class=\"p-qrow\" data-reveal=\"0\"><span class=\"p-n\">1</span><div><h3>对象键换序算不算差异</h3><p><b>决定</b>　不算，对象键顺序忽略</p><p style=\"color:var(--p-muted)\"><b>代价或范围</b>　真正关心字段顺序的场景不在本次范围</p></div></div><div class=\"p-qrow\" data-reveal=\"1\"><span class=\"p-n\">2</span><div><h3>数组怎样比较</h3><p><b>决定</b>　按索引逐项比较</p><p style=\"color:var(--p-muted)\"><b>代价或范围</b>　中间插入一项，后面各项都显示为改动；按元素对齐、移动检测留在非目标</p></div></div><div class=\"p-qrow\" data-reveal=\"2\"><span class=\"p-n\">3</span><div><h3><code>1</code> 变成 <code>\"1\"</code></h3><p><b>决定</b>　值或类型改变都记为 changed</p><p style=\"color:var(--p-muted)\"><b>代价或范围</b>　不再细分“只是类型变了”</p></div></div></div>",
      "steps": [
        "键换序",
        "数组",
        "类型变化"
      ],
      "script": [
        "【操作提示｜停留课件 p31 第 1 步，指向第 1 行】\n\n这门课里，我来担任需求负责人，三个问题一个一个定。第一个，对象键换了顺序，不算差异。代价是，真正关心字段顺序的场景，这次不在范围里。",
        "【操作提示｜推进第 2 步，指向第 2 行】\n\n第二个，数组按索引逐项比较。我选它，是因为规则简单，结果容易人工核算。代价刚才也看到了：中间插入一项，后面各项都会显示成改动。这个代价要写进 Spec，让用户看到一串改动时知道是怎么回事。按元素对齐、识别移动，这次都不做。",
        "【操作提示｜推进第 3 步，指向第 3 行】\n\n第三个，值变了、或者类型变了，都记为 changed。不再单独细分“只是类型变了”这一种。"
      ],
      "teaching": [],
      "source": "index.html#p31",
      "seconds": 90
    },
    {
      "id": "p32",
      "segment": "人来决定",
      "label": "删掉的字段画在哪",
      "title": "删掉的字段，画在哪？",
      "lead": "只画 After，删掉的字段就从图上消失了。差异要画在一张合并图里：Before 独有的节点保留下来，祖先节点带一个派生标记，帮用户顺着找到下面的改动",
      "html": "<div style=\"display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,.8fr) minmax(0,1.2fr);gap:20px;align-items:start\"><div data-reveal=\"0\" style=\"display:flex;flex-direction:column;gap:10px\"><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>Before</span></div><pre style=\"font-size:21px\">{&quot;config&quot;:{&quot;retry&quot;:3,&quot;debug&quot;:true}}</pre></div><div class=\"p-code\" data-role=\"ink\"><div class=\"p-code-head\"><span>After</span></div><pre style=\"font-size:21px\">{&quot;config&quot;:{&quot;retry&quot;:5}}</pre></div></div><div data-reveal=\"1\"><h3 style=\"font-size:20px;margin:0 0 8px\">只画 After</h3><ul class=\"p-tree\"><li><span class=\"p-path\">config</span><ul><li><span class=\"p-path\">retry: 5</span></li></ul></li></ul><p style=\"font-size:18px;color:var(--p-muted);margin:8px 0 0\">debug 不见了</p></div><div data-reveal=\"2\"><h3 style=\"font-size:20px;margin:0 0 8px\">合并图（示意）</h3><ul class=\"p-tree\"><li class=\"is-open\"><span class=\"p-path\">config</span><span class=\"p-note\">unchanged · 下面有变化</span><ul><li class=\"is-target\"><span class=\"p-path\">retry: 3 → 5</span><span class=\"p-note\">changed</span></li><li class=\"is-block\"><span class=\"p-path\">debug: true</span><span class=\"p-note\">removed</span></li></ul></li></ul></div></div><div class=\"p-bar\" data-reveal=\"3\" style=\"margin-top:16px\">直接差异 <b>2 处</b>；config 带 <code>hasDiffDescendant</code>，不计入</div><p class=\"source-note\">合并图为课程自绘示意，JSON Diff 尚未实现</p>",
      "steps": [
        "一个嵌套例子",
        "只画 After",
        "合并图",
        "数一数"
      ],
      "script": [
        "【操作提示｜停留课件 p32 第 1 步，指向左侧 Before 和 After】\n\n值怎么比定下来了，还要定怎么画。JSON Crack 是把数据画成图的，差异也要在图上看得到。看这个嵌套的小例子：config 下面，retry 从 3 变成了 5，debug 整个被删掉了。",
        "【操作提示｜推进第 2 步，指向中间“只画 After”】\n\n如果只把 After 画出来，图上只剩 config 和 retry，debug 就消失了。需求原文第 4 条专门说过，删掉的字段也要能看出来。",
        "【操作提示｜推进第 3 步，依次指合并图里的三个节点】\n\n所以要画一张合并图。retry 标成 changed；debug 只在 Before 里有，标成 removed，留在图上。config 本身两边都是对象，没有增删、也没改类型，它的状态还是 unchanged，只是带一个派生标记 hasDiffDescendant，意思是下面有变化，帮用户顺着找下去。",
        "【操作提示｜推进第 4 步，指向底部横条】\n\n这样数下来，直接差异是 2 处，config 不计入。四种直接状态就是 added、removed、changed、unchanged，再加上祖先的这个派生标记。右边这张图是我画的示意，JSON Diff 还没有实现。"
      ],
      "teaching": [],
      "source": "index.html#p32",
      "seconds": 120
    },
    {
      "id": "p33",
      "segment": "人来决定",
      "label": "其余行为",
      "title": "筛选、输错、大文件，怎么办？",
      "lead": "差异怎样判定、怎样画出来已经定了。用户还会筛选、输错、贴进很大的文件，这些行为也要在交给验收前定下来。节点上限沿用现有设定，具体数值留给 4.4 按运行环境核算",
      "html": "<style>#p33 .p-matrix span{padding:6px 12px}</style><div class=\"p-matrix\" style=\"grid-template-columns:200px minmax(0,1fr)\"><div class=\"is-head\" data-reveal=\"0\"><span>行为</span><span>课程决定</span></div><div data-reveal=\"0\"><span style=\"font-weight:700;font-size:19px\">差异计数</span><span style=\"font-size:19px\">只数直接差异；带派生标记的祖先不计；整个对象或数组增删，只在根计 1 处</span></div><div data-reveal=\"0\"><span style=\"font-weight:700;font-size:19px\">只看变化</span><span style=\"font-size:19px\">隐藏未变化的节点，保留通向差异的祖先和 removed 节点；筛选不改变差异数</span></div><div data-reveal=\"1\"><span style=\"font-weight:700;font-size:19px\">输入出错</span><span style=\"font-size:19px\">指明是 Before 还是 After 出错，保留最后一次有效结果；还没比较过时显示空状态</span></div><div data-reveal=\"1\"><span style=\"font-weight:700;font-size:19px\">节点上限</span><span style=\"font-size:19px\">沿用现有上限设定，removed 节点计入；超限时不画图，只提示图太大</span></div><div data-reveal=\"2\"><span style=\"font-weight:700;font-size:19px\">本地处理</span><span style=\"font-size:19px\">比较在浏览器本地完成，JSON 内容不发送到网络</span></div><div data-reveal=\"2\"><span style=\"font-weight:700;font-size:19px\">可辨认、可操作</span><span style=\"font-size:19px\">状态除颜色外还有文字或符号；360px 宽的窗口里都能操作</span></div><div data-reveal=\"2\"><span style=\"font-weight:700;font-size:19px\">其他客户端、格式</span><span style=\"font-size:19px\">VS Code 插件、其他数据格式标为 Deferred</span></div></div>",
      "steps": [
        "计数与筛选",
        "出错与上限",
        "本地、可辨认与暂缓"
      ],
      "script": [
        "【操作提示｜停留课件 p33 第 1 步，指向前两行】\n\n用户真正用起来，还会筛选、会输错、会贴进很大的文件，这些也要在交给验收之前定下来。先看计数和筛选：只数直接差异，整个对象或数组被增删时，只在它的根上计 1 处。只看变化时，未变化的节点藏起来，但通向差异的祖先和删掉的节点要留着，筛选前后差异数不变。",
        "【操作提示｜推进第 2 步，指向中间两行】\n\n输入出错时，要指明是 Before 还是 After 出错，并保留最后一次有效的比较结果。4.1 我们在现有编辑器里看到过，输错时图会保留上一次的结果，这里沿用同样的思路。节点上限，上一节查到它来自仓库配置，这里决定合并图沿用现有设定，不另定新数值；删掉的节点也画在图上，所以一并计入。超过上限就不画图，只提示图太大。具体数值留给下一节，按运行环境来核算。",
        "【操作提示｜推进第 3 步，指向最后三行】\n\n最后三行：比较在浏览器本地完成，JSON 内容不发出去，这是原文第 6 条的要求。每种状态除了颜色，还要有文字或符号能认出来；360 像素宽的窗口里也要能操作。VS Code 插件、其他数据格式，标为暂缓，也就是 Deferred。"
      ],
      "teaching": [],
      "source": "index.html#p33",
      "seconds": 90
    },
    {
      "id": "p34",
      "segment": "写成 Spec",
      "label": "Spec 里写什么",
      "title": "Spec 里，写什么？",
      "lead": "4.1 立过一条分工：Spec 写用户能观察到的行为，代码改哪里留给 Plan。每条规则再带上编号、状态和来源，Brief 里的每个问题就都有了去处",
      "html": "<div class=\"p-pair\" style=\"grid-template-columns:1fr auto 1fr\"><div class=\"p-box\" data-role=\"us\" data-reveal=\"0\"><span class=\"p-tag\" data-role=\"us\">行为规则 · 进 Spec</span><h3 style=\"margin:8px 0 6px\">“对象键顺序不同，不产生差异”</h3><p>用户能看到、能检查；换一种实现也不用改</p></div><div class=\"p-join\" data-reveal=\"1\"><b>≠</b></div><div class=\"p-box\" data-role=\"ink\" data-reveal=\"1\"><span class=\"p-tag\" data-role=\"ink\">实现安排 · 留给 Plan</span><h3 style=\"margin:8px 0 6px\">“在解析函数里先把键排序再比较”</h3><p>换一种实现就要重写，4.5 结合源码决定</p></div></div><div class=\"p-grid\" style=\"--n:3;margin-top:18px\" data-reveal=\"2\"><div class=\"p-box\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">编号</span><h3 style=\"font-size:22px;margin:8px 0 0\">REQ-01、REQ-02……</h3></div><div class=\"p-box\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">状态</span><h3 style=\"font-size:22px;margin:8px 0 0\">Approved · Draft · Deferred</h3></div><div class=\"p-box\" data-role=\"ctx\"><span class=\"p-tag\" data-role=\"ctx\">来源</span><h3 style=\"font-size:22px;margin:8px 0 0\">Brief 的哪一节、哪个 Open 问题</h3></div></div>",
      "steps": [
        "行为规则",
        "实现安排",
        "编号、状态、来源"
      ],
      "script": [
        "【操作提示｜停留课件 p34 第 1 步，指向左栏】\n\n这些决定要写进 Spec。写的时候，记住 4.1 立过的分工。左边这句：对象键顺序不同，不产生差异。用户能看到、能拿输入检查，换一种实现方式它也不用改，它进 Spec。",
        "【操作提示｜推进第 2 步，指向右栏】\n\n右边这句：在解析函数里先把键排序再比较。它说的是代码怎么改，换一种实现就得重写。这种留给 4.5，到时候结合源码再决定。",
        "【操作提示｜推进第 3 步，依次指三张小卡】\n\n每条规则还要带三样东西：一个 REQ 编号，后面验收和任务都靠它来对应；一个状态，已批准是 Approved，还缺决定是 Draft，这次不做是 Deferred；再注明它来自 Brief 的哪一节、哪个 Open 问题。这样 Brief 里的每个问题都能找到去处。"
      ],
      "teaching": [],
      "source": "index.html#p34",
      "seconds": 90
    },
    {
      "id": "p37",
      "segment": "自检与交接",
      "label": "哪条该留在 Spec",
      "title": "这两条，哪条该留在 Spec？",
      "lead": "先问这句话在决定什么：用户能看到的行为，还是代码怎么改。",
      "html": "<span class=\"p-pause\" data-reveal=\"0\">暂停 · 先自己判断，再往下看</span><div class=\"p-qlist\"><div class=\"p-qrow\"><span class=\"p-n\">1</span><div><h3>“两个值类型不同，标记为 changed”</h3><div data-reveal=\"1\"><p>留在 Spec。用户能在图上看到，能用具体输入检查</p></div></div></div><div class=\"p-qrow\"><span class=\"p-n\">2</span><div><h3>“在合并图组件里调用比较函数”</h3><div data-reveal=\"2\"><p>回到 Plan。它说的是代码怎么改；审 Spec 时，同时找还没决定的边界和混进来的实现安排<br><a href=\"#p34\">回看 Spec 写什么</a></p></div></div></div></div>",
      "steps": [
        "两条规则",
        "类型不同",
        "调用比较函数"
      ],
      "script": [
        "【操作提示｜停留课件 p37 第 1 步，指向暂停标记和两条规则；停顿数秒】\n\n停下来判断一下。有人写的 Spec 里有这样两条，哪条该留在 Spec？",
        "【操作提示｜推进第 2 步，指向第 1 条的参考判断】\n\n第一条，两个值类型不同，标记为 changed。用户能在图上看到，也能拿具体输入检查，留在 Spec。",
        "【操作提示｜推进第 3 步，指向第 2 条的参考判断】\n\n第二条，在合并图组件里调用比较函数。它说的是代码怎么改，回到 Plan。审 Spec 的时候，两类问题一起找：还没决定的边界，和混进来的实现安排。"
      ],
      "teaching": [],
      "source": "index.html#p37",
      "seconds": 90
    },
    {
      "id": "p38",
      "segment": "自检与交接",
      "label": "小结",
      "title": "这一节留下什么",
      "lead": "同一句需求有几种合理结果，人看过代价后作出决定，写成带编号、状态和来源的 Spec。下一节拿具体输入逐项核算，检查这些规则能不能给出一致的答案。",
      "html": "<div class=\"p-sketch\" style=\"align-items:start\"><div data-reveal=\"0\"><h3 style=\"text-align:center\">一个判断</h3><div class=\"p-star\" style=\"width:250px;font-size:22px\">几种结果<br>谁来决定<br>写成规则</div></div><div data-reveal=\"1\"><h3>留下的</h3><ul class=\"p-exits\" style=\"gap:10px\"><li class=\"is-pass\">经过审查的 SPEC.md</li><li class=\"is-pass\">每个 Open 问题的去处</li></ul></div><div class=\"p-next\" data-reveal=\"2\"><h3>下一节</h3><div class=\"p-box\" data-role=\"us\"><h3>4.4 光靠文字规则，拿什么判对错？</h3><p>用具体输入核算这些规则</p></div></div></div>",
      "steps": [
        "一个判断",
        "留下的",
        "下一节"
      ],
      "script": [
        "【操作提示｜停留课件 p38 第 1 步，指向中间的判断】\n\n回到开头的问题。要求写得再细，也会留下空白，每个实现者都会用自己的默认去补。先看清有几种结果，由人决定，再写成规则。",
        "【操作提示｜推进第 2 步，指向“留下的”】\n\n这一节留下的，是一份经过审查的 SPEC.md，Brief 里每个 Open 问题都在里面有了去处。",
        "【操作提示｜推进第 3 步，指向下一节卡片】\n\n规则写成了文字，可文字还是可能各有各的理解。下一节，我们拿具体的输入一项一项核算，看这些规则能不能给出一致的答案。"
      ],
      "teaching": [],
      "source": "index.html#p38",
      "seconds": 90
    }
  ],
  "segments": [
    {
      "label": "开篇",
      "seconds": 90
    },
    {
      "label": "几种结果",
      "seconds": 360
    },
    {
      "label": "人来决定",
      "seconds": 300
    },
    {
      "label": "写成 Spec",
      "seconds": 90
    },
    {
      "label": "自检与交接",
      "seconds": 180
    }
  ]
};
