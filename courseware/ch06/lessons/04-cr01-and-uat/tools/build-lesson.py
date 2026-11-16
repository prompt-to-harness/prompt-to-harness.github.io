#!/usr/bin/env python3
"""6.4 用已验收的流程，怎样把 CR-01 做完并让人认可：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
非实操页按已确认的逐页内容制作；p34、p35、p37 先占位，待备课实跑后再写。不预写运行结果，也不预选实现分支。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map  # noqa: E402

lesson = Lesson(
    __file__, "6.4", "用已验收的流程，怎样把 CR-01 做完并让人认可",
    summary="先讲清失败测试先行，再按已验收流程做最小实现和回归，然后用人沿四个案例做 UAT；测试全绿不等于用户已经认可。",
)
scene = lesson.scene


def pending(pid, segment, question, note):
    scene(
        id=pid, segment=segment,
        label=question.rstrip("？"), title=question,
        lead="本页在演练之后再写",
        html=f'<div class="p-bar is-light" data-reveal="0">{note}</div>',
        steps=["待演练后制作"],
    )


scene(
    id="p32", segment="开篇", layout="lesson-cover",
    label="用已验收的流程，怎样把 CR-01 做完并让人认可",
    title="用已验收的流程，怎样把 CR-01 做完并让人认可？",
    lead="6.3 已经留下可进入实施的工作流和避坑。本节不再讨论要不要建这条流程，而是用它把变更真正做完，再由人实际操作一遍。",
    html=(
        chapter_map(4)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:22px">6.3 留下：<b>已验收的工作流</b>和避坑。本节不再重讲这些定义</div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:14px">本节问题：先失败测试，再最小实现与回归，最后由人实际操作验收</div>'
    ),
    steps=["本章位置", "6.3 留下什么", "本节问题"],
)

scene(
    id="p33", segment="失败测试先行",
    label="为什么要先看到测试失败，再去改提示",
    title="为什么要先看到测试失败，再去改提示？",
    lead="先写针对可见提示的测试，确认它因缺少旧结果提示、而以正确原因失败，再做最小实现，让同一条断言通过。不能先改实现再补永远能通过的测试。",
    html=(
        '<div class="p-qlist">'
        '<div class="p-bar" data-reveal="0">先写针对可见提示的测试。它应当因缺少旧结果提示，以正确原因失败</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">再做最小提示状态与文本，让同一条断言通过</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">人要检查：断言是否独立于实现、失败是否来自规则差距、修复有没有越界</div>'
        "</div>"
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:14px">若现场发现行为已有，改走受控变异检查点，不伪装成原始缺陷。不能靠跳过测试、改期望或吞异常制造绿色</div>'
    ),
    steps=["先写会失败的测试", "再做最小实现", "人检查失败原因和范围"],
)

pending(
    "p34", "失败测试先行",
    "失败测试有没有因正确原因失败？",
    "待备课实跑后再写；不预选分支，不预写失败日志或截图",
)

pending(
    "p35", "最小实现与回归",
    "最小实现和回归，怎样才算没有越界？",
    "待备课实跑后再写；不预写本次通过结果或文件名单",
)

scene(
    id="p36", segment="人工验收",
    label="自动检查都绿了以后，人还要看什么",
    title="自动检查都绿了以后，人还要看什么？",
    lead="自动检查可以汇总 lint、类型检查、测试、构建和 E2E，但它们不能代替用户路径。框架完成状态不是发布批准。用户回答必须来自实际观察。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1fr 1fr;gap:24px">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">自动检查</span>'
        '<h3 style="margin:10px 0 0">证明约定的检查过了</h3>'
        "<p>不能代替人在真实界面上的操作</p></div>"
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">UAT 路径</span>'
        '<h3 style="margin:10px 0 0">有效比较 → After 非法 → 两侧非法 → 仅一侧恢复 → 全部恢复</h3>'
        "<p>并单独看：从未成功比较过就非法</p></div></div>"
        '<div class="p-bar" data-reveal="2" style="margin-top:16px">人要看提示、错误侧、结果是否更新，以及计划里留给人工的键盘、窄屏、控制台和网络</div>'
    ),
    steps=["自动检查证明什么", "人要走的路径", "还要实际看哪些"],
)

pending(
    "p37", "人工验收",
    "人在界面上实际看到了什么？",
    "待备课实跑后再写；不预写本次界面结果或截图，不能未操作就回答通过",
)

scene(
    id="p38", segment="判断与自检",
    label="组件测试已经全绿，是不是就可以宣布用户已经认可",
    title="组件测试已经全绿，是不是就可以宣布用户已经认可？",
    lead="组件测试已经全绿，是不是就可以宣布用户已经认可这条提示？请先判断。这是本节学员判断，也是本章要带走的那句话。",
    html=(
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:16px 20px">'
        '<span class="p-tag" data-role="us">学员判断</span>'
        '<h3 style="font-size:24px;margin:10px 0 0">组件测试已经全绿，是不是就可以宣布用户已经认可？</h3></div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:16px"><b>不可以</b></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:12px">测试全绿，只证明约定的检查过了，<b>不等于用户已经认可</b></div>'
    ),
    steps=["先判断", "不可以", "全绿不等于用户已经认可"],
)

scene(
    id="p39", segment="判断与自检",
    label="测试失败让人不舒服时，这两种做法哪样对",
    title="测试失败让人不舒服时，这两种做法哪样对？",
    lead="测试失败让人不舒服时，请先自己判断这两种做法哪样对，再看参考结论。绿色必须来自正确原因。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div>'
        "<h3>改期望或跳过这条测试，让结果先变绿</h3>"
        '<div data-reveal="1"><p>不对。不能靠改期望、跳过测试或吞异常制造绿色</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        "<h3>先确认失败是否来自规则差距，再决定最小修复</h3>"
        '<div data-reveal="2"><p>对。绿色必须来自正确原因</p></div></div></div>'
        "</div>"
        '<p class="source-note">教学对照，不是某一次实际失败记录</p>'
    ),
    steps=["两种做法", "第一种", "第二种"],
)

scene(
    id="p40", segment="小结",
    label="带着什么进入 6.5", title="带着什么进入 6.5？",
    lead="第 7 章从独立仓库开始，不带走这份工作区。不要把 6.5 预告成另一轮验收。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">一个判断</h3>'
        '<div class="p-star" style="width:320px;font-size:22px">测试全绿<br>只证明约定的检查过了<br>不等于用户已经认可</div></div>'
        '<div data-reveal="1"><h3>留下的</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">完成 CR-01 的实现</li>'
        '<li class="is-pass">失败与通过证据、人工 UAT</li>'
        '<li class="is-pass">可追溯的计划和交付记录</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        "<h3>6.5 应用招数</h3>"
        "<p>改为分享 ChatGPT 应用技巧，不再复用这些证据做判断</p></div></div>"
        "</div>"
    ),
    steps=["一个判断", "留下的", "下一节"],
)

lesson.write()
