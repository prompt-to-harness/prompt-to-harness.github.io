#!/usr/bin/env python3
"""2.5 AI 说“只是重构”：本节唯一的内容源，生成 lesson.js 与 script.md。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py。
证据图在 ../evidence/，由 courseware/ch02/materials/refactor-cards/shoot.py 生成。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import NARROW, Lesson, chapter_map, code_lines, diff_boxes, pop, teach  # noqa: E402

lesson = Lesson(__file__, "2.5", "AI 说“只是重构”", summary="判断一次改动是不是重构，看可观察行为有没有变，不看提交说明、diff 大小，也不看截图是否好看。")
scene, KICK = lesson.scene, lesson.kick

CARDS = Path(__file__).resolve().parents[3] / "materials" / "refactor-cards"
MATERIAL = "教学材料：五张卡基于 homepage-v1 制作（courseware/ch02/materials/refactor-cards/），每张单独应用；页面截图与数值来自 v1 冻结候选，2026-10-06 在 1440×900 下用浏览器实测（shoot.py）。录制版基于讲师冻结的 homepage-v1 重新制作、重新拍摄。"

# 五张卡：AI 交回时的说明（教学材料里写的，不是某次真实运行的输出）与 git diff --stat
SAY = {
    "①": "抽出 ProjectCard 组件，App.tsx 更清爽。只是重构，行为不变。",
    "②": "把项目数据移到 projects.ts，数据和页面分开。只是重构，行为不变。",
    "③": "项目列表按名称排序，找起来更方便。只是重构，行为不变。",
    "④": "统一类名风格，把 __description 缩短为 __desc。只是重构，行为不变。",
    "⑤": "给项目卡加上 tabIndex，键盘也能聚焦。只是重构，行为不变。",
}
STAT = {"①": "2 个文件 +16 −4", "②": "2 个文件 +15 −14", "③": "1 个文件 +1 −1", "④": "1 个文件 +1 −1", "⑤": "1 个文件 +1 −1"}
TWO = "display:grid;grid-template-columns:minmax(0,{l}fr) minmax(0,{r}fr);gap:16px;align-items:start"
FOLD = "display:block;color:#5B6573;background:#F1EEE4;margin:0 -12px;padding:0 12px;font-family:var(--p-body)"


def say(n, step):
    return f'<p class="p-bubble is-ai" data-reveal="{step}" style="margin:0 0 6px;font-size:16px;padding:6px 12px;justify-self:stretch">{n} {SAY[n]}</p>'


def excerpt(head, n, rows, step, wrap=False):
    """页面上的 diff 摘录：只放关键几行，内容照原样；完整 diff 在弹窗里。"""
    ws = "pre-wrap" if wrap else "pre"
    return (
        f'<div class="p-code" data-reveal="{step}" style="font-size:13px;line-height:1.45;justify-self:stretch"><div class="p-code-head" style="font-size:14px;padding:2px 12px"><span>{head}</span><span>refactor · {STAT[n]}</span></div>'
        f'<pre style="padding:5px 12px;white-space:{ws}">{code_lines(*rows)}</pre></div>'
    )


def full(n, name, step):
    return f'<div data-reveal="{step}">' + pop(f"{n} 完整 diff（{name}）", "完整 diff", diff_boxes(CARDS / name)) + "</div>"


def shot(src, alt, label, role):
    """一张页面截图，标签叠在右上角。"""
    return (
        f'<div class="p-page" style="position:relative"><img src="evidence/{src}" alt="{alt}" style="display:block;width:100%">'
        f'<span class="p-tag" data-role="{role}" style="position:absolute;right:10px;top:8px">{label}</span></div>'
    )


def shot_titled(src, alt, label, role):
    """标签放在图片上方单独一行，用于第一行就有正文、标签会压字的截图。"""
    return (
        f'<div style="display:grid;gap:6px;justify-items:start"><span class="p-tag" data-role="{role}">{label}</span>'
        f'<div class="p-page" style="justify-self:stretch"><img src="evidence/{src}" alt="{alt}" style="display:block;width:100%"></div></div>'
    )


def stamp(text, role_color, step, where="top:auto;bottom:-18px;right:8px"):
    return f'<span class="p-stamp" data-reveal="{step}" style="--c:{role_color};{where}">{text}</span>'


def check(label):
    return f'<span class="p-chip" data-role="ok" style="font-size:16px">✓ {label}</span>'


GREEN, RED = "#11652F", "#A8350F"


scene(
    id="p53", segment="分拣", layout="lesson-cover",
    label="只是重构，能信吗", title="AI 说“只是重构”，能信吗？", kicker="第 2 章 · 2.5 · 工程经验",
    lead="AI 交回改动时常说“只是重构”，五张卡里哪几张是真的？",
    html=(
        chapter_map(5) +
        '<div style="display:flex;align-items:center;gap:36px;margin-top:22px">'
        '<p class="p-bubble is-ai" data-reveal="1" style="margin:0">只是重构了一下，没改功能</p>'
        '<p class="p-hand" data-reveal="2" style="margin:0">怎么判断？</p></div>'
    ),
    steps=["最后一节", "AI 的说明", "问题"],
    script=[
        "本章最后一节，是一节工程经验。这一节不改自己的项目，看讲师在 homepage-v1 上准备的五张小卡。",
        "AI 交回改动时，常会附一句：只是重构了一下，没改功能。重构，英文是 refactor，很多提交说明就以这个词开头。",
        "这句话能不能信，我们怎么判断？先不下定义，直接看卡。",
    ],
    teaching=teach(("讲师提示", "五张卡是标明的教学判断题，不属于伪造的现场失败（决定 7）。" + MATERIAL)),
)


def overview_card(n, step):
    return (
        f'<div class="p-q" data-reveal="{step}" style="min-height:0;padding:10px 14px">'
        f'<p style="margin:0 0 6px;display:flex;align-items:baseline;gap:8px"><span style="font:400 28px/1 var(--p-title);color:#243042">{n}</span>'
        f'<span style="font-size:15px;color:#4A5260">refactor · {STAT[n]}</span></p>'
        f'<p style="margin:0;font-size:18px;font-weight:700;line-height:1.45">{SAY[n]}</p></div>'
    )


scene(
    id="p54", segment="分拣",
    label="五张卡，怎么查", title="五张卡，你打算怎么查？", kicker=KICK + "分拣",
    lead="五张卡都基于 homepage-v1，每张单独应用，AI 交回时都说“只是重构，行为不变”。先只看说明和改动大小，给每张选一种检查办法；拿不准就写“证据不足”。",
    html=(
        '<div class="p-quiz" style="grid-template-columns:repeat(3,minmax(0,1fr));gap:12px 14px">'
        + overview_card("①", 0) + overview_card("②", 0)
        + overview_card("③", 1) + overview_card("④", 1) + overview_card("⑤", 1)
        + '<div data-reveal="2" style="display:grid;align-content:center;gap:10px;padding:6px 4px">'
        '<span class="p-pause">暂停 · 每张怎么查</span>'
        '<p style="margin:0;font-size:18px;line-height:1.55">读说明 · 读 diff · 打开页面 · 并排比 · 按 Tab<br>拿不准：证据不足</p></div></div>'
        '<p class="source-note">' + MATERIAL + '</p>'
    ),
    steps=["①②", "③④⑤", "暂停"],
    script=[
        "先看五张卡的说明。第一张，AI 说把项目卡抽成了 ProjectCard 组件，改了两个文件，16 行新增、4 行删除。第二张，把项目数据移到 projects.ts，也是两个文件，加起来 29 行。",
        "后三张都只改了一行。第三张说项目列表按名称排序；第四张说把类名缩短了；第五张说给项目卡加了 tabIndex，键盘也能聚焦。五张的结尾都是同一句：只是重构，行为不变。",
        "请暂停视频。先别急着判断变没变，给每张卡选一种检查办法：读说明就够、要读 diff、要打开页面、要和原页面并排比，还是要按 Tab。拿不准就写“证据不足”。写进 CH02_VIBE_ITERATIONS.md，接下来一张一张看。",
    ],
    teaching=teach(("讲师提示", "学员看讲师提供的卡片与证据判断，不要求在自己项目上复现（分段分镜默认取舍 4）。评价看检查办法和理由，不看猜中几张。五张卡的完整 diff 在各自页面的“完整 diff”弹窗里，原文件见 courseware/ch02/materials/refactor-cards/。")),
)

CARD1 = excerpt("src/App.tsx · 另新建 ProjectCard.tsx", "①", [
    ("add", "+ import ProjectCard from './ProjectCard'"),
    ("", "  {projects.map((project) =&gt; ("),
    ("del", '-   &lt;li className="project-card" key={project.name}&gt;'),
    ("del", '-     &lt;h3 className="project-card__name"&gt;{project.name}&lt;/h3&gt;'),
    ("del", '-     &lt;p className="project-card__description"&gt;{project.description}&lt;/p&gt;'),
    ("del", "-   &lt;/li&gt;"),
    ("add", "+   &lt;ProjectCard key={project.name} project={project} /&gt;"),
], 0)

CARD2 = excerpt("src/App.tsx · 另新建 projects.ts", "②", [
    ("del", "- const projects = ["),
    ("del", "-   {"),
    ("del", "-     name: '红绿灯感知量产',"),
    ("fold", "⋯ 另外 10 行删除：其余两个项目与结尾的 ]"),
    ("add", "+ import { projects } from './projects'"),
    ("", " "),
    ("", "  export default function App() {"),
], 1).replace('<span class="fold">', f'<span style="{FOLD}">')


scene(
    id="p55-12", segment="看行为",
    label="①② 提取组件、移动数据", title="①② 改了 30 来行，行为呢？", kicker=KICK + "看行为",
    lead="两张卡都改了两个文件、30 行上下。页面上只放关键几行，完整改动点“完整 diff”查看；行为要逐项对照才能下结论。",
    html=(
        NARROW + f'<div class="p-aside" style="{TWO.format(l=1, r=1)}">'
        '<div style="display:grid;gap:8px;justify-items:start">' + say("①", 0)
        + '<div style="position:relative;justify-self:stretch">' + CARD1 + stamp("行为没变", GREEN, 3) + '</div>'
        + full("①", "01-extract-component.diff", 0) + '</div>'
        '<div style="display:grid;gap:8px;justify-items:start">' + say("②", 1)
        + '<div style="position:relative;justify-self:stretch">' + CARD2 + stamp("行为没变", GREEN, 3) + '</div>'
        + full("②", "02-move-data.diff", 1) + '</div></div>'
        '<div data-reveal="2" style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px">'
        '<span style="font-size:17px;font-weight:700;margin-right:4px">逐项对照：</span>'
        + check("文字与顺序") + check("并排比样式") + check("点击项目卡") + check("Tab") + check("三种视口")
        + '<span style="font-size:16px;color:#5B6573">渲染出的页面结构与改前逐字相同</span></div>'
        '<div class="p-bar" data-reveal="3" style="margin-top:10px;font-size:17px;padding:8px 14px">改了 30 来行，行为一点没变；但只有逐项查完，才能说“没变”</div>'
    ),
    steps=["① 提取组件", "② 移动数据", "逐项对照", "结论"],
    script=[
        "先看第一张。AI 说：抽出 ProjectCard 组件，App.tsx 更清爽，只是重构。左边是 App.tsx 的关键几行：原来写在列表里的四行卡片，换成了一行 ProjectCard；这四行搬进了新文件 ProjectCard.tsx。新文件的内容在“完整 diff”里，点开可以逐行对：类名、标签、顺序都和原来一样。",
        "第二张。AI 说：把项目数据移到 projects.ts，数据和页面分开。App.tsx 顶部整段删掉了三个项目的数组，换成一行 import；新文件 projects.ts 里是同样的数组，多了一个 export。删掉的和新加的是不是逐字相同，同样在完整 diff 里核对。",
        "读完 diff，我们有理由相信行为没变，但这还只是推断。拿 2.2 的清单逐项对照：文字和顺序、和原页面并排比样式、点击项目卡、按 Tab、三种视口，全都一样。我们还对比了浏览器渲染出来的页面结构，和改前逐字相同。",
        "结论：两张都没改行为，是重构。第二张删了 14 行、加了 15 行，行为一点没变；改动多，不等于危险。但“没变”这个结论，是逐项查完才得到的，不是因为说明里写了“只是重构”。",
    ],
    teaching=teach(
        ("讲师提示", "①② 合一页；页面只放关键几行，完整 diff 用页内弹窗（演示模式盖住正文区，阅读模式原地展开），弹窗内容由 refactor-cards/ 的原始 diff 生成。录制时可点开 ① 的完整 diff，滚到 ProjectCard.tsx 对一遍类名。"),
        ("核对记录", "shoot.py 2026-10-06：v1 冻结候选分别应用 ①②，构建后导出的 #root 与改前逐字相同，index.css 未改；卡高、顺序、Tab 落点均与改前一致。"),
    ),
)

CARD3 = excerpt("src/App.tsx", "③", [
    ("", '  &lt;ul className="projects__list"&gt;'),
    ("del", "-   {projects.map((project) =&gt; ("),
    ("add", "+   {[...projects].sort((a, b) =&gt; a.name.localeCompare(b.name, 'zh-CN')).map((project) =&gt; ("),
    ("", '      &lt;li className="project-card" key={project.name}&gt;'),
], 0, wrap=True)

scene(
    id="p55-3", segment="看行为",
    label="③ 按名称排序", title="③ “按名称排序，找起来更方便”", kicker=KICK + "看行为",
    lead="这张卡的说明自己就写出了新行为：用户看到的顺序会变。对照重构的定义，读说明就能发现它不是重构；打开页面再确认一遍。",
    html=(
        NARROW + f'<div class="p-aside" style="{TWO.format(l=1.2, r=.8)}">'
        '<div style="display:grid;gap:8px;justify-items:start">' + say("③", 0) + CARD3
        + '<div class="p-box is-soft" data-role="gate" data-reveal="1" style="justify-self:stretch;padding:10px 14px"><p style="font-size:18px;line-height:1.5">说明里写的是<b>新行为</b>：排序会改变用户看到的顺序。<br>“只是重构”和“按名称排序”自相矛盾</p></div>'
        '<div class="p-bar" data-reveal="3" style="justify-self:stretch;font-size:17px;padding:8px 14px">只改了一行，顺序就变了；构建照样通过</div></div>'
        '<div data-reveal="2" style="position:relative;display:grid;grid-template-columns:1fr 1fr;gap:10px">'
        + shot_titled("card3-before.png", "改前的项目顺序", "改前", "ok") + shot_titled("card3-after.png", "改后的项目顺序", "改后", "gate")
        + stamp("行为变了", RED, 3, "top:auto;bottom:-16px;right:-6px") + '</div></div>'
    ),
    steps=["说明与 diff", "读说明就能发现", "打开页面", "结论"],
    script=[
        "第三张。AI 说：项目列表按名称排序，找起来更方便，只是重构。diff 只有一行：原来直接遍历 projects，现在先复制一份、按名称排序，再遍历。",
        "这一张不用打开页面就能判断。说明自己写着“按名称排序”，排序就是要改变用户看到的顺序，这是一个新行为。“只是重构”和“按名称排序”放在一起，本身就自相矛盾。读说明的时候拿重构的定义对一下，就能发现。",
        "打开页面确认一下。左边是改前，顺序是红绿灯、端侧、RoboHarness；右边是改后，按拼音排，端侧排到了第一。",
        "结论：行为变了。只改了一行，用户看到的顺序就不一样了，构建照样通过。这个顺序要不要改，可以讨论，但它是一次需求变化，不是重构。",
    ],
    teaching=teach(("核对记录", "shoot.py 2026-10-06：v1 冻结候选应用 ③，顺序由“红绿灯感知量产、端侧多模态推理引擎、RoboHarness”变为“端侧多模态推理引擎、红绿灯感知量产、RoboHarness”；卡高与 Tab 落点不变。截图为 1440×900 下项目列表左侧。")),
)

CARD4 = excerpt("src/App.tsx", "④", [
    ("", '  &lt;h3 className="project-card__name"&gt;{project.name}&lt;/h3&gt;'),
    ("del", '- &lt;p className="project-card__description"&gt;{project.description}&lt;/p&gt;'),
    ("add", '+ &lt;p className="project-card__desc"&gt;{project.description}&lt;/p&gt;'),
], 0)

CSS4 = (
    '<div class="p-code" data-reveal="1" style="font-size:13px;line-height:1.4;justify-self:stretch"><div class="p-code-head" style="font-size:14px;padding:2px 12px"><span>src/index.css · 没有改动</span><span>搜新类名：<b style="color:#A8350F">0 处</b></span></div>'
    '<pre style="padding:5px 12px;white-space:pre">' + code_lines(
        ("hl", ".project-card__description {"), ("", "  margin: 0;"), ("", "  color: #626c65;"),
        ("", "  font-size: 16px;"), ("", "  line-height: 1.8;"), ("", "}"),
    ) + '</pre></div>'
)

scene(
    id="p55-4", segment="看行为",
    label="④ 缩短类名", title="④ “只是统一了类名”", kicker=KICK + "看行为",
    lead="说明听起来完全无害，diff 也只换了一个名字。顺着类名去找样式，再和原页面并排比，才看得出描述的样式整段丢了。",
    html=(
        NARROW + f'<div class="p-aside" style="{TWO.format(l=1.13, r=.87)}">'
        '<div style="display:grid;gap:8px;justify-items:start">' + say("④", 0) + CARD4 + CSS4
        + '<div class="p-bar" data-reveal="3" style="justify-self:stretch;font-size:17px;padding:8px 14px">新类名没有样式规则，描述的样式整段丢了；<b>构建照样通过</b></div></div>'
        '<div data-reveal="2" style="position:relative;display:grid;gap:10px">'
        + shot("card4-before.png", "改前的第一张项目卡", "改前 · 卡高 127px", "ok")
        + shot("card4-after.png", "改后的第一张项目卡", "改后 · 卡高 144px", "gate")
        + stamp("行为变了", RED, 3, "top:auto;bottom:-14px;right:-8px") + '</div></div>'
    ),
    steps=["说明与 diff", "顺着类名找样式", "并排比", "结论"],
    script=[
        "第四张。AI 说：统一类名风格，把冗长的 project-card__description 缩短成 project-card__desc，只是重构。diff 只有一个文件、一行，看起来确实只是换了个名字。",
        "类名本身不显示任何东西，它的作用是挂样式。所以顺着类名去找样式：index.css 里有一条规则，写的是旧名字 project-card__description，颜色、行高都在这里。这次 CSS 没有改，搜新名字 project-card__desc，一处都没有。读到这里，已经能猜到会出什么事。",
        "打开页面验证。上面是改前，下面是改后：描述文字从灰色变成了正文那样的深色，行距变小，上下还多出空白，整张卡从 127 像素高变成 144 像素。单看改后这一张，你未必觉得有问题，并排放才看得出来。",
        "结论：行为变了。新类名没有对应的样式规则，描述的样式整段丢了。构建照样通过，没有任何报错，构建只检查代码能不能打包，不检查样式有没有挂上。",
    ],
    teaching=teach(
        ("核对记录", "shoot.py 2026-10-06（1440×900）：描述颜色 #626c65 → #222d29，行高 28.8 → 24px，外边距 0 → 上下 16px；卡高 127 → 144px；构建成功。截图为第一张卡左侧。"),
        ("切到实操", "录制时可现场在两个标签页并排打开改前、改后的构建产物，替代静态截图。"),
    ),
)

CARD5 = excerpt("src/App.tsx", "⑤", [
    ("", "  {projects.map((project) =&gt; ("),
    ("del", '-   &lt;li className="project-card" key={project.name}&gt;'),
    ("add", '+   &lt;li className="project-card" key={project.name} tabIndex={0}&gt;'),
    ("", '      &lt;h3 className="project-card__name"&gt;{project.name}&lt;/h3&gt;'),
], 0)

scene(
    id="p55-5", segment="看行为",
    label="⑤ 可以聚焦", title="⑤ “键盘也能聚焦”", kicker=KICK + "看行为",
    lead="说明同样写出了新行为。截图、点击都和原来一样，只有按 Tab 才看得到：焦点多停了三次，按回车却没有任何反应。",
    html=(
        NARROW + f'<div class="p-aside" style="{TWO.format(l=1.05, r=.95)}">'
        '<div style="display:grid;gap:8px;justify-items:start">' + say("⑤", 0) + CARD5
        + '<div class="p-box is-soft" data-role="ctx" data-reveal="1" style="justify-self:stretch;padding:10px 14px"><p style="font-size:17px;line-height:1.5">改前：按完“查看项目”再按 Tab，焦点就离开了页面。<br>截图和点击，前后完全一样</p></div>'
        '<div class="p-bar" data-reveal="3" style="justify-self:stretch;font-size:17px;padding:8px 14px">焦点多停三次，按回车没反应；不按 Tab 看不出来</div></div>'
        '<div data-reveal="2" style="position:relative;display:grid;gap:10px">'
        + shot("card5-tab2.png", "按第 2 次 Tab：焦点停在第一张卡", "按第 2 次 Tab", "gate")
        + shot("card5-tab3.png", "按第 3 次 Tab：焦点停在第二张卡", "按第 3 次 Tab", "gate")
        + stamp("行为变了", RED, 3, "top:auto;bottom:-14px;right:-8px") + '</div></div>'
    ),
    steps=["说明与 diff", "截图看不出", "按 Tab", "结论"],
    script=[
        "第五张。AI 说：给项目卡加上 tabIndex，键盘也能聚焦，只是重构。diff 只有一行，在列表项上加了 tabIndex 等于 0。和第三张一样，说明里“键盘也能聚焦”就是一个新行为。",
        "如果只看页面，什么都发现不了：截图和原来一模一样，点击项目卡也还是没反应。改前，按完“查看项目”再按 Tab，焦点就离开了页面。",
        "现在从页面顶部连续按 Tab。第一次停在“查看项目”，第二次停在第一张卡上，出现了蓝色的焦点框；第三次停在第二张卡上。三张卡依次都会停一次。",
        "结论：行为变了。键盘用户要多按三次 Tab，停在卡上按回车，什么也不会发生。这个变化不按 Tab 根本看不出来。至于它是不是在回应 2.1 的第 2 条反馈，下一页再说。",
    ],
    teaching=teach(("核对记录", "shoot.py 2026-10-06（1440×900）：改前 Tab 落点为“查看项目”→ 页面外 →“查看项目”；改后为“查看项目”→ 第 1、2、3 张卡；焦点框为 Chromium 默认样式。截图为第 2、3 次按 Tab 时的第 1、2 张卡。")),
)

scene(
    id="p56", segment="看行为",
    label="凭什么这样分", title="凭什么这样分", kicker=KICK + "看行为",
    lead="Martin Fowler 在《重构》里给的定义：在不改变可观察行为的前提下，改善代码的内部结构。可观察行为就是用户能看到、能操作的东西；“只是重构”这句话和 diff 大小都不算数。⑤ 看起来回应了 2.1 的第 2 条反馈，它也是行为变化，要拆出来由人确认。",
    html=(
        '<div class="p-bar" data-reveal="0">重构 = <b>可观察行为不变</b>，内部结构变好</div>'
        '<div class="p-pair" data-reveal="1" style="grid-template-columns:1fr auto 1fr;margin-top:12px">'
        '<div class="p-box" data-role="ok"><span class="p-tag" data-role="ok">② 29 行</span><p>行为没变</p></div>'
        '<div class="p-join"><span>和大小无关</span></div>'
        '<div class="p-box" data-role="gate"><span class="p-tag" data-role="gate">③ 1 行</span><p>顺序变了</p></div></div>'
        '<div class="p-grid" style="--n:2;gap:14px;margin-top:12px">'
        '<div class="p-box is-soft" data-role="us" data-reveal="2"><h3>⑤ 与 2.1 第 2 条</h3><p>能聚焦了，按回车仍没反应<br>拆开：行为变化由人确认，再作为需求去做</p></div>'
        '<div class="p-box is-soft" data-role="ctx" data-reveal="3"><h3>回看 2.2</h3><p>补充项目经历是需求变化，也不是重构</p></div></div>'
    ),
    steps=["定义", "和大小无关", "第 2 条", "回看 2.2"],
    script=[
        "现在给出定义。Martin Fowler 在《重构》里说：重构，是在不改变可观察行为的前提下，改善代码的内部结构。可观察行为，就是用户能看到、能操作的东西：文字、顺序、样式、点击、键盘。按这个定义，只有第一、二张是重构。",
        "分拣时，很容易按 diff 大小判断：改得多就危险，改得少就安全。这五张卡正好反过来：第二张 29 行，行为没变；第三张一行，顺序就变了。说明能帮上一部分忙：第三、五张的说明自己就写出了新行为，对照定义就知道不是重构；第四张的说明听起来无害；第一、二张的说明是真的，可也要查完才知道。“只是重构”这句话本身，不能当证据。",
        "第五张最容易让人想收。回想 2.1 的第 2 条反馈：项目卡看着能点，点了没反应。它是既有决定，改不改由人决定。第五张让卡片能聚焦，看上去在回应这条反馈，可聚焦以后按回车仍然没有反应，键盘用户只是多停了三次。处理方式是拆开：行为变化单独提出来，由人决定要不要、怎么做，再作为一次需求变化去做。",
        "顺便回看 2.2：我们补充项目经历，改的是页面内容，那是需求变化，也不是重构。重构只有一种：行为不变，结构变了。",
    ],
)

scene(
    id="p57", segment="收尾",
    label="暂停自检", title="暂停自检", kicker=KICK + "收尾",
    lead="先独立作答，再看解析。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先独立作答</span><div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div><h3>AI 交回 ④ 时说“构建通过，没有报错”。这能说明行为没变吗？</h3>'
        '<div data-reveal="1"><p>不能。④ 实测构建成功，样式却丢了；类名写错不会报错，构建只说明代码能打包<span class="p-back-to" data-role="gate">回到 ④</span></p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div><h3>要确认 ① 没有改变行为，你需要重查哪些项目？</h3>'
        '<div data-reveal="2"><p>文字与顺序、和原页面并排比样式、点击项目卡、Tab、三种视口；没查的项标“待验证”<span class="p-back-to" data-role="ok">回到 2.2 检查</span></p></div></div></div></div>'
    ),
    steps=["暂停", "第 1 题", "第 2 题"],
    script=[
        "暂停一下，回答两个问题。第一，AI 交回第四张卡时说：构建通过，没有报错。这能说明行为没变吗？第二，要确认第一张卡没改行为，你需要重查哪些项目？",
        "第一题，不能。第四张实测构建成功，可描述的样式已经丢了。类名写错，构建工具不会报错，它只负责把代码打包出来。2.3 说过，本章的自动检查只有构建，其余要靠人看。",
        "第二题，要重查文字和顺序，和原页面并排比样式，点击项目卡，按 Tab，再看三种视口。哪项没查，就标成“待验证”，不能因为提交说明写着 refactor，就当它查过了。",
    ],
    teaching=teach(("跟做产出", "在 CH02_VIBE_ITERATIONS.md 写下哪几张只是重构，每张引用一条具体行为证据（顺序、样式、Tab 等）。")),
)

scene(
    id="p58", segment="收尾",
    label="每次都手工查吗", title="每次都这样手工重查吗？", kicker=KICK + "收尾",
    lead="现在的项目没有覆盖这些行为的自动测试。确认“行为不变”只能把文字与顺序、样式、点击、键盘和三种视口全部手工查一遍，每改一次就重复一次。验证很贵，这是后面规格与 Harness 章节要解决的问题。本章交付物：迭代记录、审过的提交、推送前检查记录、公开 URL 和 ch02-homepage-live tag。",
    html=(
        '<div class="p-grid" style="--n:2;gap:16px;align-items:stretch">'
        '<div class="p-box is-soft" data-role="gate" data-reveal="0"><h3>每次都要重查</h3><p>文字与顺序 · 并排比样式 · 点击 · Tab · 三种视口</p></div>'
        '<div class="p-bar" data-reveal="1" style="display:flex;align-items:center">没有测试，<b>验证很贵</b></div></div>'
        '<div class="p-flow" style="--n:5;margin-top:16px">'
        '<div class="p-node" data-role="us" data-reveal="2"><h3>2.1 反馈</h3><p>带证据的清单</p></div>'
        '<div class="p-node" data-role="agent" data-reveal="2"><h3>2.2 小改</h3><p>一轮一个结果</p></div>'
        '<div class="p-node" data-role="tool" data-reveal="2"><h3>2.3 审查</h3><p>可回退的提交</p></div>'
        '<div class="p-node" data-role="ok" data-reveal="2"><h3>2.4 发布</h3><p>公开 URL 与 tag</p></div>'
        '<div class="p-node" data-role="gate" data-reveal="2"><h3>2.5 重构</h3><p>看可观察行为</p></div></div>'
        '<div class="p-bar is-light" data-reveal="3" style="margin-top:14px">下一章 · 第 3 章：给首页加一个小游戏</div>'
    ),
    steps=["手工清单", "验证很贵", "回看本章", "下一章"],
    script=[
        "最后想一个问题：分拣这五张卡，我们用到了文字与顺序、并排比样式、点击、Tab 和三种视口。这个项目没有覆盖这些行为的自动测试，所以每改一次，就得手工全部重查一次。",
        "这一章我们一直在手工验证，每一轮都是。验证很贵，而且越往后改动越多，越容易漏。怎样把“行为”写下来、让检查自动跑起来，是后面规格和 Harness 章节要解决的问题。",
        "回看这一章：2.1 先听反馈，留下带证据的清单；2.2 只改一处，并证明没弄坏别的；2.3 读懂 diff 再收，留下可回退的提交；2.4 看清历史再推送，发布后用三项检查证明页面可用；2.5 判断重构，看的是可观察行为，不是提交说明和 diff 大小。首页 v0 变成了一个有公开 URL 的 v1。",
        "第 2 章到这里结束。下一章，我们给首页加一个小游戏，体验更快的迭代，也会遇到第一个需要真正调试的问题。",
    ],
    teaching=teach(("讲师提示", "伏笔只点到为止，不提前讲测试框架。第 3 章预告按第 3 章定稿调整。全章回顾 2026-10-05 起从 2.4 p52 移到本页（讲师确认）。")),
)


lesson.write()
