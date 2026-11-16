#!/usr/bin/env python3
"""6.3 怎样判断这条 GSD 流程符合预期：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
本节不设新的 Agent 实操页，也不改生产代码。p24 只列检查点，不预写对照结果。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map  # noqa: E402

lesson = Lesson(
    __file__, "6.3", "怎样判断这条 GSD 流程符合预期",
    summary="先立住验收标准，再讲避坑；对照 6.2 留下的计划做现场观察，只列检查点、不预写结果。本节不改生产代码。",
)
scene = lesson.scene


scene(
    id="p21", segment="开篇", layout="lesson-cover",
    label="怎样判断这条 GSD 流程符合预期",
    title="怎样判断这条 GSD 流程符合预期？",
    lead="6.2 已经留下指向 CR-01 的工作流和计划。接下来很容易直接按计划去改产品。这一节先停一下，验收流程，再去实施。",
    html=(
        chapter_map(3)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:22px">6.2 留下：<b>指向 CR-01 的工作流</b>和计划。本节还不开始改提示</div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:14px">本节问题：怎样判断这条 GSD 流程符合预期？先验收流程，再去实施</div>'
    ),
    steps=["本章位置", "6.2 留下什么", "本节问题"],
)

scene(
    id="p22", segment="验收标准",
    label="框架标记完成了，是不是就等于流程通过了",
    title="框架标记完成了，是不是就等于流程通过了？",
    lead="核心标准不是框架有没有把阶段标记成完成，而是人有没有实际观察到该观察的东西。请先看清这两件事有什么不同。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:24px">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">框架状态</span>'
        '<h3 style="margin:10px 0 0">阶段被标记为完成</h3>'
        "<p>只说明步骤被走完</p></div>"
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">人的观察</span>'
        '<h3 style="margin:10px 0 0">规格、验证去向和停止条件</h3>'
        "<p>要实际看到该看的东西</p></div></div>"
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">前者不能代替观察。完成标记，不能单独当作发布批准</div>'
    ),
    steps=["框架完成状态", "人实际看到的", "完成标记不能代替观察"],
)

scene(
    id="p23", segment="验收标准",
    label="验收时到底要看哪几件事",
    title="验收时到底要看哪几件事？",
    lead="验收时至少核对这几件。缺了一项，工作流就算看起来完整，也不能进入 6.4 的实施。对照 6.2 产物时只写检查点，不预写现场表格内容。",
    html=(
        '<div class="p-qlist">'
        '<div class="p-bar" data-reveal="0">已有五层规格仍是需求依据，CR-01 是追加进去的变更，不是被偷换成另一套产品需求</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:10px">原验收和四个新案例都有验证去向；视觉体验明确留给人工</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px">每个任务都写清来源、允许文件、断言和停止条件，生产修改保持串行</div>'
        '<div class="p-bar is-light" data-reveal="3" style="margin-top:10px">人能在任务之间停下、抽查证据、否决越界修改；不能用「文档变长了」代替核验</div>'
        "</div>"
    ),
    steps=["规格是否仍是依据", "验证去向是否齐全", "允许范围与停止条件", "人能否在检查点介入"],
)

scene(
    id="p24", segment="验收标准",
    label="对照刚才建好的工作流，这些检查点能对上吗",
    title="对照刚才建好的工作流，这些检查点能对上吗？",
    lead="打开 6.2 留下的计划、验证矩阵和映射，按上一页的检查点逐条对照。这一页只列检查点，不预写现场结果。若 6.2 实跑尚未完成，就对着检查点讲以后要看什么。",
    html=(
        '<div class="p-bar" data-reveal="0">对照对象：6.2 留下的计划、验证矩阵和映射。若尚未实跑，就只讲以后要看什么，不把尚未存在的细节写成既有事实</div>'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:14px 20px;margin-top:14px">'
        '<span class="p-tag" data-role="ctx">逐条对照</span>'
        "<p style=\"font-size:22px;margin:10px 0 0\">已有规格是否仍是依据 · 验证去向是否齐全 · 停止条件是否可执行 · 人能否介入</p></div>"
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:14px">只列检查点，不预写对照结果。缺了这些，就不能进入 6.4</div>'
        '<p class="source-note">教学检查点，不是某一次现场表格</p>'
    ),
    steps=["打开 6.2 留下的产物", "按检查点逐条对照", "不预写现场结果"],
)

scene(
    id="p25", segment="使用中的坑",
    label="什么是钻牛角尖，课堂上怎么认出它",
    title="什么是钻牛角尖，课堂上怎么认出它？",
    lead="流程能用，不等于后面不会走偏。先看课堂上最容易碰到的第一种情况：同一条无效路径上连续加指令，却不回头问是不是一开始就走错了。",
    html=(
        '<div class="p-bar" data-reveal="0">同一条无效路径上，连续加指令、补限制、再试一次</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">上下文越来越长，步骤越来越多，问题却还是原来那个</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">判断：该停下来换问题，而不是把错误路径推到底</div>'
        '<p class="source-note">先讲判断；6.5 的「在新对话中分支」只在口播里提一句，本节不展开产品操作</p>'
    ),
    steps=["连续加指令再试", "问题还在原地", "该停下来换问题"],
)

scene(
    id="p26", segment="使用中的坑",
    label="什么是 X-Y problem，它和 CR-01 有什么关系",
    title="什么是 X-Y problem，它和 CR-01 有什么关系？",
    lead="第二种情况是：先想好一个手段，然后只问怎么实现这个手段，却没有先问真正要解决的问题是什么。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:24px">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">真正要解决的</span>'
        '<h3 style="margin:10px 0 0">用户能看出当前看见的是旧结果</h3></div>'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">先想好的手段</span>'
        '<h3 style="margin:10px 0 0">加某个字段、类名或新接口</h3></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">手段可能有用，但不能把它写成需求本身。验收时看计划是在验证可见行为，还是在验证某个预先想好的实现细节</div>'
    ),
    steps=["真正要解决的问题", "先想好的手段", "手段不是需求本身"],
)

scene(
    id="p27", segment="使用中的坑",
    label="遇到问题，应该先做什么",
    title="遇到问题，应该先做什么？",
    lead="遇到问题时，不要一出事就连续加指令硬推，也不要还没看清差距，就回头覆盖已有文档。这是 6.4 开始干活前的共用步骤。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:24px">'
        '<div class="p-box" data-role="gate" data-reveal="0"><span class="p-tag" data-role="gate">不要这样做</span>'
        '<h3 style="margin:10px 0 0">连续加指令硬推</h3>'
        "<p>或先改实现，再回头补文档</p></div>"
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">应该先做</span>'
        '<h3 style="margin:10px 0 0">先复现，再缩小范围</h3>'
        "<p>再对照已经批准的规格，最后才决定是改流程还是改实现</p></div></div>"
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">不要还没看清差距，就覆盖已有文档</div>'
    ),
    steps=["不要连续硬推", "先复现再对照规格", "看清差距再决定改什么"],
)

scene(
    id="p28", segment="使用中的坑",
    label="还有哪些做法，看起来像进展，其实已经走偏",
    title="还有哪些做法，看起来像进展，其实已经走偏？",
    lead="这些错误大纲里已经写过。本节只立住判断，6.4 不再重讲定义。不要把清单读成命令百科。",
    html=(
        '<div class="p-qlist">'
        '<div class="p-bar" data-reveal="0">还没核验映射就派发</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:10px">先改实现，再补永远能通过的测试</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px">把「流程跑完」当成「结果对了」</div>'
        '<div class="p-bar is-light" data-reveal="3" style="margin-top:10px">用测试数量、覆盖率或框架完成状态，代替行为证据</div>'
        "</div>"
    ),
    steps=["还没核验就派发", "先改实现再补测试", "把跑完当成对了", "用数量代替证据"],
)

scene(
    id="p29", segment="判断与自检",
    label="计划写全了、框架也显示完成了，是不是就可以直接发布",
    title="计划写全了、框架也显示完成了，是不是就可以直接发布？",
    lead="计划写全了、框架也显示阶段完成了，这条流程是不是就可以直接发布？请先判断。尚未实施的计划，不能当成 CR-01 已经完成。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:16px 20px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:24px;margin:10px 0 0">计划写全了、框架也显示完成了，是不是就可以直接发布？</h3></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:16px"><b>不可以</b>。还缺少人对检查点的实际观察，也还没有失败测试和人工 UAT</div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:12px">本节只证明：人知道该看什么，并且能指出至少一处必须实际观察的检查点</div>'
    ),
    steps=["先判断", "还不可以发布", "本节实际证明了什么"],
)

scene(
    id="p30", segment="判断与自检",
    label="工作流跑到一半失败了，这两种做法哪样对",
    title="工作流跑到一半失败了，这两种做法哪样对？",
    lead="工作流跑到一半失败时，请先自己判断这两种做法哪样对，再看参考结论。不要在同一条无效路径上连续硬推。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div>'
        "<h3>继续追加更细的指令，直到它给出一个完成标记</h3>"
        '<div data-reveal="1"><p>不对。不要在同一条无效路径上连续硬推</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        "<h3>先复现并缩小范围，对照已有规格，再决定改流程还是改实现</h3>"
        '<div data-reveal="2"><p>对。先看清差距，再决定改什么</p></div></div></div>'
        "</div>"
        '<p class="source-note">教学对照，不是某一次实际失败记录</p>'
    ),
    steps=["两种做法", "第一种", "第二种"],
)

scene(
    id="p31", segment="小结",
    label="带着什么进入 6.4", title="带着什么进入 6.4？",
    lead="本节不产出 CR-01 的实现。请看这一节留下什么，以及 6.4 会先做什么。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3>'
        '<div class="p-star" style="width:300px;font-size:22px">框架显示完成<br>还不能直接发布</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">已验收的工作流</li>'
        '<li class="is-pass">必须实际观察的检查点</li>'
        '<li class="is-pass">一组避坑，6.4 不再重讲定义</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        "<h3>6.4 完成 CR-01</h3>"
        "<p>用这条流程把 CR-01 做完，并做人工 UAT。下一节会先写失败测试</p></div></div>"
        "</div>"
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()
