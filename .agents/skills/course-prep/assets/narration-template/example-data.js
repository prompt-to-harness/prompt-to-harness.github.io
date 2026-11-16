/* Structural examples, not actual runs. Course scripts must come from the original source/adapter. */
window.narrationData = {
  section:'N.1', title:'讲述线 · 模板示例',
  ppt:{section:'N.1',url:'slides.html',pages:[{id:'example-slide',steps:['展示方法','替换规则']}]},
  pptPlan:{status:'示意课件；不是正式教学成果',pages:[{id:'example-slide',frames:'N.1.2.1.1',content:'对照通用检查方法与项目规则',progression:'先展示方法，再展开需要替换的规则'}]},
  parts:[
    {id:'unit-1',number:'N.1.1',title:'从请求到检查计划',content:'围绕一项请求，区分计划内容和已执行证据。',groups:[
      {id:'unit-1-group',number:'N.1.1.1',title:'提交与核对',screens:[
        {id:'step-01',number:'N.1.1.1.1',title:'交代规则并提交任务',aliases:['old-request'],segments:[
          {id:'request-segment',title:'先定本次范围，再发送',design:'先让观众找到项目规则和本轮只写计划的边界；发送后解释计划仍需核对，停在等待实际返回。',limits:'现场结果未知；此处是模板示意，不预填成功结果。',preparation:'录前确认已有项目可访问，并准备本项目规则原文。',blocks:[
            {type:'location',text:'Codex · 已选项目的新会话，消息尚未发送'},
            {type:'materials',items:[{label:'本次输入',purpose:'复制后补入项目规则',location:'输入只用于示意',text:'项目规则：使用本项目已确认版本。\n任务范围：只生成检查计划，不改代码。'}]},
            {type:'prompt',label:'生成检查计划',purpose:'提交前确认项目规则已随上下文提供',text:'请根据当前项目的游戏规则，整理人工检查计划。\n覆盖正常游玩、结束和重新开始。\n只给计划，不改代码；缺少规则时先提问。'},
            {type:'operation',steps:['核对项目规则与本轮范围。','复制请求，发送到当前会话。']},
            {type:'script',text:'这次先准备人工检查计划。检查的方法可以复用，但通过条件取决于当前项目的规则。\n我们把规则和本轮只写计划的范围交代清楚，再看返回是否能据此执行。'},
            {type:'operation',timing:'讲完后操作',text:'等待返回；如仍在运行，保留会话，转到预存说明再返回。'},
            {type:'branch',condition:'任务仍在等待，暂时没有返回',label:'查看等待时的备用讲法',blocks:[{type:'script',text:'趁它整理，我们先看检查计划应该包含哪些信息。返回出现后，再核对这次实际写了什么。'}]}
          ]}
        ]},
        {id:'step-02',number:'N.1.1.1.2',title:'同一材料两次定位',segments:[
          {id:'compare-segment',title:'起点和预期分别看',design:'先定位计划起点，再定位可见结果；两次观察共同判断一项步骤是否具体。',blocks:[
            {type:'location',text:'同一任务返回 · 一项结束或重开检查'},
            {type:'operation',text:'停在该项的起始状态说明。'},
            {type:'script',text:'先看它有没有交代从什么状态开始。起点不清楚，后面的操作即使写得详细，也不一定能复现。'},
            {type:'operation',text:'在同一项中定位预期可见结果，与项目规则对照。'},
            {type:'script',text:'再看执行之后要观察什么。预期应该能对照项目规则判断。这里核对的是计划，游戏检查还没有执行。'}
          ]}
        ]}
      ]}
    ]},
    {id:'unit-2',number:'N.1.2',title:'把方法用于下一项任务',groups:[
      {id:'unit-2-group',number:'N.1.2.1',title:'保留方法，替换规则',screens:[
        {id:'step-03',number:'N.1.2.1.1',title:'同一页分步展开',segments:[
          {id:'slide-segment',design:'方法与规则同屏对照；第二步只新增需替换的对象，不重复前一段实例。',blocks:[
            {type:'location',text:'PPT · 第一状态',ppt:{id:'example-slide',step:0}},
            {type:'script',text:'起点、操作、可见结果这套检查写法可以保留。换一个项目时，先辨认方法本身。'},
            {type:'operation',text:'推进到第二状态，保持原方法可见。'},
            {type:'location',text:'PPT · 第二状态',ppt:{id:'example-slide',step:1}},
            {type:'script',text:'现在替换当前项目的规则，再核对生成的计划。原项目的牌数、等待时间和重开规则，不能直接带到新项目。'},
            {type:'preview',label:'按需预览 PPT 示意页',url:'slides.html?mode=slides&step=1#example-slide'}
          ]}
        ]}
      ]}
    ]},
    {id:'unit-3',number:'N.1.3',title:'后续应用',groups:[
      {id:'unit-3-group',number:'N.1.3.1',title:'设计与旧内容共存',screens:[
        {id:'step-04',number:'N.1.3.1.1',title:'仅有设计',segments:[{id:'design-only',design:'待选好新任务后，比较两项条件，说明同一检查方法怎样采用不同的通过标准。',status:'工作稿：材料待选，尚不能制作成稿',blocks:[{type:'location',text:'材料未定，不使用旧 PPT 冒充'}]}]},
        {id:'legacy-step',number:'N.1.3.1.2',title:'旧字段兼容示意',screen:'旧版材料位置说明',operation:'对照当前规则核对旧稿。',points:'原要点保持原文，不自动认定为新版设计。',script:'这份旧稿仍保留在原位置。转换显示结构时，需要先核对原意和材料定位。',prompt:'旧请求第一行\n旧请求第二行'}
      ]}
    ]},
    {id:'unit-4',number:'N.1.4',title:'经验分享',status:'仅占位：尚未确定内容',groups:[]}
  ]
};
