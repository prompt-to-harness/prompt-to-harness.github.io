#!/usr/bin/env python3
"""6.4 用已验收的流程，怎样把 CR-01 做完并让人认可：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图、外部截图与重画图内联见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
已完成非实操页视觉重设计（含 p33 两条红绿检查点分流图、p36 五步连续 UAT 恢复路径图、p38 正反对照、p38a Martin Fowler 测试细网外部佐证页）；
实操页 p34、p35、p37 保持诚实占位，待第 5 章交接与备课实跑后补齐，不预写运行结果，也不预选实现分支。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import NARROW, Lesson, chapter_map, redrawn, ref, shot  # noqa: E402

GSD_COMMIT = "b5b9814f033b6d32810562fd4068e1f107da29ec"

lesson = Lesson(
    __file__, "6.4", "用已验收的流程，怎样把 CR-01 做完并让人认可",
    summary="先讲清失败测试先行与两条现场分流检查点，再按已验收流程做最小串行修改与回归，最后走一遍五步恢复路径人工 UAT；收口于「测试全绿不等于用户已经认可」。",
    prep=[
        "承接 6.3 已核验通过的 .planning/ 工作流与 docs/specs/；实操前先核对第 5 章交接提交是否已包含等价提示，按事实选择检查点 A（补提示）或检查点 B（受控变异）。",
        "自动检查优先使用 Node.js 24+ 内置 node:test 与仓库既有检查，不修改 JSON Crack 依赖锁文件；UAT 在真实浏览器按五步连续路径与 360×800 屏幕尺寸核验。",
        "p34、p35、p37 为实操占位页，完成第 5 章交接与本章实跑后再填入真实日志、git diff 输出与界面截图。",
    ],
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
    lead="6.3 已经核验了指向 CR-01 的工作流与避坑；本节按流程走完失败测试先行、最小修改与真人 UAT",
    html=(
        chapter_map(4)
        + '<div class="p-flow" style="--n:3;column-gap:38px;margin-top:18px" data-reveal="1">'
        '<div class="p-node" data-role="ok"><span class="p-num">6.3 已放行</span><h3>已验收的工作流</h3><p>规格依据、验证去向与停止条件已齐</p></div>'
        '<div class="p-node" data-role="agent"><span class="p-num">前半程 · 实施</span><h3>先见红再最小修改</h3><p>内置 <code>node:test</code> 跑通四案例与回归</p></div>'
        '<div class="p-node" data-role="us"><span class="p-num">后半程 · 验收</span><h3>真人走查恢复路径</h3><p>亲眼确认提示、错误侧与空状态</p></div></div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:12px">本节主线：开场不直接改产品源码，先让测试因正确原因失败，最后由人实际操作收口</div>'
    ),
    steps=["本章位置", "从已验流程到实施与 UAT", "本节主线"],
)

scene(
    id="p33", segment="失败测试先行",
    label="为什么要先看到测试失败，再去改提示",
    title="为什么要先看到测试失败，再去改提示？",
    lead="先写针对可见提示的断言，按第 5 章现场事实分流到标准补提示或受控变异检查点；绝不先改实现再补必过测试，也不靠跳测或吞异常制造假绿。",
    html=redrawn(
        "gsd-workflow",
        "cr01-red-green-branches",
        style="course",
        max_height=318,
        source="课程自绘：CR-01 失败测试先行与两条现场检查点（不预选分支，按第 5 章交接事实选择）",
    ),
    steps=["检查点 A：现场缺提示时先红后绿", "检查点 B：行为已有时做受控变异", "人工把守三件事：独立、不越界、无假绿"],
    refs=[
        ref("GSD Core 固定提交：仓库与阶段执行说明", f"https://github.com/open-gsd/gsd-core/tree/{GSD_COMMIT}", "框架参考"),
    ],
)

pending(
    "p34", "失败测试先行",
    "失败测试有没有因正确原因失败？",
    "待第 5 章交接与备课实跑后补齐：现场核对走检查点 A 或 B，观察失败是否确因缺少约定提示，不预选分支、不预写日志",
)

pending(
    "p35", "最小实现与回归",
    "最小实现和回归，怎样才算没有越界？",
    "待备课实跑后补齐：核对 git diff 输出是否只围绕提示状态与文案，跑通四个案例与原路径回归，不预写通过结果或文件名单",
)

scene(
    id="p36", segment="人工验收",
    label="自动检查都绿了以后，人还要看什么",
    title="自动检查都绿了以后，人还要看什么？",
    lead="自动检查可以汇总 lint、类型检查、node:test、构建与浏览器回归，但不能代替人在真实界面上的恢复路径操作，框架完成状态也不是发布批准。",
    html=redrawn(
        "gsd-workflow",
        "uat-recovery-chain",
        style="course",
        max_height=336,
        source="课程自绘：自动检查边界、五步连续恢复路径与空状态人工观察单",
    ),
    steps=["自动检查能证明与不能代替的边界", "人工必走的五步连续恢复路径", "单独必查空状态与现场观察项"],
)

pending(
    "p37", "人工验收",
    "人在界面上实际看到了什么？",
    "待备课实跑后补齐：沿五步恢复路径与首次非法空状态实际操作，如实记录亲眼所见，不未操作就答通过",
)

scene(
    id="p38", segment="判断与自检",
    label="组件测试已经全绿，是不是就可以宣布用户已经认可",
    title="测试全绿了，能宣布用户已经认可吗？",
    lead="组件与状态测试已经全绿，是不是就可以宣布用户已经认可这条提示？请先判断，再拆开已证明与未证明的两面。",
    html=(
        NARROW
        + '<div class="p-claim" style="gap:32px">'
        '<div class="p-box" data-role="ok" data-reveal="0" style="padding:14px 18px">'
        '<span class="p-tag" data-role="ok" style="margin-bottom:6px">自动测试汇总示意</span>'
        '<q style="font-size:24px;margin-top:6px;color:#11652F">node:test · 4 cases PASS ✓<br><em>0 failed · exit code 0</em></q>'
        '<p style="margin-top:10px;font-size:18.5px;color:var(--p-ink)">学员判断：看到全绿，能直接宣布用户已经认可吗？</p></div>'
        '<ul class="p-checks">'
        '<li data-reveal="1"><div><b>已经证明：约定的检查过了</b><small>失败断言曾因规则差距报红，修改后通过且原路径无明显回归</small></div></li>'
        '<li class="is-no" data-reveal="1"><div><b>还没证明：提示一眼找得到、读得懂</b><small>字号、摆放位置与错误侧归属是否清楚，脚本不会替用户判断</small></div></li>'
        '<li class="is-no" data-reveal="1"><div><b>还没证明：双错恢复过程不让人困惑</b><small>仅修好一侧时界面是否让人误判已全好，必须由人亲手走过</small></div></li>'
        '</ul></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px;padding:8px 20px;font-size:21px"><b>不可以</b>：测试全绿，只证明约定的检查过了，<b>不等于用户已经认可</b></div>'
    ),
    steps=["先做判断：全绿能代表用户认可吗", "拆开已证明与未证明的两面", "带走这句话：全绿不等于用户认可"],
)

scene(
    id="p38a", segment="判断与自检", layout="evidence-scene",
    label="为什么自动测试兜不住全部体验",
    title="为什么自动测试兜不住全部体验？",
    lead="对照 Martin Fowler 的「测试细网」隐喻与 Dijkstra 的经典论断：脚本测试只能检验写进脚本的已知条件，网眼之外的真实体验必须靠人去探。",
    html=shot(
        "external/fowler-testing-net.png",
        "martinfowler.com · Martin Fowler · Exploratory Testing (2019-11-18)",
        "Martin Fowler 文章 Exploratory Testing 中关于脚本化自动测试细网局限性的正文与配图截图",
        height=332,
        note="细网只抓得住写进脚本的已知条件；提示好不好懂、恢复顺不顺手，必须靠真人验收",
        reveal=0,
        note_reveal=1,
    ),
    steps=["看 Fowler 的「测试细网」边界图", "网外体验必须由人亲自走查"],
    refs=[
        ref(
            "Martin Fowler：Exploratory Testing",
            "https://martinfowler.com/bliki/ExploratoryTesting.html",
            "经典视角",
            quote="Scripted testing can only verify what is in the script",
        ),
    ],
)

scene(
    id="p39", segment="判断与自检",
    label="测试失败让人不舒服时，这两种做法哪样对",
    title="测试报红碍眼时，这两种做法哪样对？",
    lead="测试失败让人不舒服时最容易手滑走捷径；请先暂停比较下面两种做法，再看盖章结论。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先比较两种做法，自己选定再往下看</span>'
        '<div class="p-quiz" style="margin-top:12px">'
        '<div class="p-q" data-role="gate">'
        '<div class="p-say">做法 A：顺手改掉断言期望，或者先跳过这条失败测试，让终端面板先变绿</div>'
        '<span class="p-stamp" data-role="gate" data-reveal="1">✗ 人造假绿</span>'
        '<div style="margin-top:8px;font-size:19px;color:#A8350F" data-reveal="1">靠改期望、跳测或吞异常拿到的绿色只是拔掉了警报，规则差距还在原地</div></div>'
        '<div class="p-q" data-role="ok">'
        '<div class="p-say">做法 B：先核对失败是否确因已定规格差距引起，再做最小串行修改让同一断言通过</div>'
        '<span class="p-stamp" data-role="ok" data-reveal="2">✓ 真实变绿</span>'
        '<div style="margin-top:8px;font-size:19px;color:#11652F" data-reveal="2">绿色必须来自正确原因；断言先见证差距，再见证最小修复</div></div></div>'
        '<p class="source-note">教学对照，不是某一次实际失败记录</p>'
    ),
    steps=["暂停比较两种做法", "做法 A：人造假绿", "做法 B：真实变绿"],
)

scene(
    id="p40", segment="小结",
    label="带着什么进入 6.5", title="带着什么进入 6.5？",
    lead="第 4–6 章的 JSON Diff 项目交付在本节正式收官；第 7 章从独立仓库冷启动，6.5 改为分享 ChatGPT 应用技巧。",
    html=(
        '<div class="p-sketch">'
        '<div class="p-ribbon" data-reveal="0">6.4 小结 · 全绿只证约定检查已过，用户认可要靠真人走查</div>'
        '<div data-reveal="0"><h3 style="text-align:center">本章带走的那句话</h3>'
        '<div class="p-star" style="width:228px;font-size:21px">测试全绿<br>只证明约定的检查过了<br>不等于用户已经认可</div></div>'
        '<div data-reveal="1"><h3>项目收官交付</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass" style="font-size:21px">完成 CR-01 的最小串行修改</li>'
        '<li class="is-pass" style="font-size:21px">失败与通过记录 + 真人 UAT</li>'
        '<li class="is-pass" style="font-size:21px">可追溯计划与最终交付说明</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us">'
        '<h3>6.5 应用招数</h3>'
        '<p>改为分享 ChatGPT 应用技巧，不再复用测试记录做判断；第 7 章不带走本工作区</p></div></div>'
        '</div>'
    ),
    steps=["本章带走的那句话", "项目收官交付", "下一节 6.5"],
)

lesson.write()
