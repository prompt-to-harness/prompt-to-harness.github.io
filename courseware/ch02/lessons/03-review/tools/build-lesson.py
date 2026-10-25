#!/usr/bin/env python3
"""2.3 参考一个主页改风格：它看到了什么：本节唯一的内容源，生成 lesson.js。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch02/tools/lessonkit.py；口播见 ../script.json。
PPT 自包含，证据来自 2026-10-24 两轮排练（同一 Codex 会话）；录制时每段先讲 PPT，再切现场讲相同和不同。
"""
import base64
import re
import sys
from html import escape
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
sys.path.insert(0, str(Path(__file__).resolve().parents[4] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, ref, teach  # noqa: E402
from tracekit import Evidence, text  # noqa: E402

lesson = Lesson(__file__, "2.3", "参考一个主页改风格：它看到了什么", summary="从上一节提交的 homepage-v1 开始，参考一个主页改两轮风格。每一轮都回到请求看它拿到了什么：取回来不等于看到了，页面的样子不在 context 里，要靠我们把截图和看法带进去。审过再让 Codex 提交。")
scene = lesson.scene

# p40b、p40a1、p40d 的观察点和阅读节选在 trace/evidence.json；公开数据见 materials/style/run-20261024-round2
E = Evidence(Path(__file__).resolve().parents[1] / "trace/evidence.json")
RUN = "2026-10-24 两轮排练：从 homepage-v1 开始，同一个 Codex 会话，Codex CLI 0.163.0、MiniMax-M3.1-Flash"

# 两轮的原话都来自排练记录，构建时核对，不另写一段“更好”的冒充原文
PROMPT = "我想参考 https://html5up.net/uploads/demos/hyperspace/ 的风格改一下这个个人主页，喜欢它的侧栏导航和大块背景。请用 curl 看看参考页的 HTML 和 CSS，再结合当前代码给个修改计划，先别改。保留我的个人内容，不新增依赖，页面效果我会在浏览器里看。"
CONFIRM = "按这个计划改吧，页脚注明风格参考 Hyperspace 和 HTML5 UP 的链接。改完运行 build，浏览器我来检查，不要提交。"
FEEDBACK = "第一张是现在的效果，第二张是参考页。现在背景的小箭头太密、太抢眼了，我更喜欢参考里那种淡淡的、疏一些的细线。帮我把背景往这个感觉调整一下，其他部分先保持。"
TEMPLATE = "第一张是现在，第二张是参考；现在＿＿，我更喜欢参考里＿＿，其他先保持。"
COMMIT_PROMPT = """我在浏览器里看过了，接受这一轮。先列出 git status 给我看，再提交本轮改动的文件；
提交说明第一行写 homepage-v2: 参考 Hyperspace 调整主页风格，正文写改了哪些文件。"""
assert PROMPT == E._source("r1-2", {"message": "我想参考 https://"})
assert CONFIRM == E._source("r1-13", {"message": "按这个计划改吧"})
assert FEEDBACK in E._source("r2-2", {"message": "第一张是现在的效果"})
# p40b1 引用的推理原句：它想看页面，也知道 curl 看不到渲染后的样子
PEEK = "React renders client-side, so curl only shows root div"
assert PEEK in text(E._source_item("r1-20", {"response": "reasoning"}))


def panel(html, start, end=None):
    """review.js 的镜头：演示模式只显示当前步骤所在的镜头，阅读模式全部显示。"""
    return f'<div class="review-panel" data-panel-start="{start}" data-panel-end="{end if end is not None else start}">{html}</div>'


def shot(name, label, height=250):
    return f'<figure class="review-shot"><figcaption>{label}</figcaption><a href="assets/{name}" target="_blank" rel="noopener"><img src="assets/{name}" alt="{escape(label)}" style="height:{height}px"></a></figure>'


def pair(a, b):
    return '<div class="review-pair">' + a + b + '</div>'


def bar(x, light=True):
    return f'<div class="p-bar{" is-light" if light else ""} review-bar">{x}</div>'


def detail(name, label, x, y, w, h, height=190):
    """原图的局部：SVG 视窗放大，不改像素。"""
    ih = 1473 if name == "before-full.png" else 3291 if name == "round2-full.png" else 800
    return (f'<figure class="review-shot"><figcaption>{label} · 原图局部</figcaption><a href="assets/{name}" target="_blank" rel="noopener">'
            f'<svg role="img" aria-label="{escape(label)}" viewBox="{x} {y} {w} {h}" style="width:100%;height:{height}px;background:#eee"><image href="assets/{name}" width="1440" height="{ih}"/></svg></a></figure>')


def reading_panel(html, key, content):
    return re.sub(r'(<section data-ev-reading="' + key + r'"[^>]*>).*?</section>', lambda m: m[1] + content + '</section>', html, flags=re.S)


def request_images(request):
    """请求里那条消息的两项 input_image：核对与 assets 里的两张逐字节相同，页面上用 assets 的文件显示。"""
    message = E._source_item(request, {"message": "第一张是现在的效果"})
    pictures = [c for c in message["content"] if c.get("type") == "input_image"]
    assert len(pictures) == 2, request
    for picture, name in zip(pictures, ["round1.png", "reference.png"]):
        assert base64.b64decode(picture["image_url"].split(",")[1]) == (E.lesson / "assets" / name).read_bytes(), (request, name)
    return pair(shot("round1.png", "input_image · 第 1 张", 120), shot("reference.png", "input_image · 第 2 张", 120))


def feedback_stage():
    html = E.stage("p40d")
    html = reading_panel(html, "feedback",
                         '<p class="p-ev-source">10-24 排练 · 同一会话贴两张图，再说一句</p>'
                         + pair(shot("round1.png", "图 1 · 当前效果", 100), shot("reference.png", "图 2 · 参考", 100))
                         + '<blockquote class="review-prompt compact">' + escape(FEEDBACK) + '</blockquote>')
    html = reading_panel(html, "images",
                         '<p class="p-ev-source">10-24 排练 · 贴图那次请求 · 我们这一条（新的 Prompt）</p>'
                         + request_images("r2-2") + '<p class="review-evidence-note">后面跟着那句话：' + escape(FEEDBACK[:24]) + '……</p>')
    html = reading_panel(html, "still",
                         '<p class="p-ev-source">10-24 排练 · 第二轮最后一次请求 · 同一条还在</p>'
                         + request_images("r2-9") + '<p class="review-evidence-note">之后每次请求都带着这两张图和那句话</p>')
    answer = E._source("r2-9", {"answer": True}).splitlines()[0]
    return reading_panel(html, "result-answer",
                         '<p class="p-ev-source">10-24 排练 · 第二轮改完，同一位置</p>'
                         + pair(detail("round1.png", "反馈前", 350, 180, 1000, 420, 170), detail("round2.png", "反馈后", 350, 180, 1000, 420, 170))
                         + '<p class="review-evidence-note">它的报告：' + escape(answer) + '</p>')


HYPERSPACE = ref("Hyperspace · HTML5 UP", "https://html5up.net/uploads/demos/hyperspace/", "参考主页")

scene(
    id="p35", segment="提参考", layout="lesson-cover",
    label="这一节做什么", title="参考主页，改出自己的风格",
    lead="从上一节提交的 homepage-v1 开始，参考一个主页改两轮风格；每一轮都问一句：它看到了什么",
    html=(
        chapter_map(3) +
        '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;margin-top:18px">'
        '<div class="p-box" data-role="ok" data-reveal="1"><span class="p-tag" data-role="ok">起点</span><p class="p-big" style="font-weight:500">homepage-v1：不满意随时回到这里</p></div>'
        '<div class="p-join" data-reveal="1"><span>再</span><i class="p-arrow"></i></div>'
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">重点</span><p class="p-big" style="font-weight:500">参考一个主页，改两轮风格</p></div></div>' +
        '<div style="margin-top:14px">' + anchor(lit=("工具返回", "对话历史", "新的 Prompt"), outside=("浏览器里的页面",), note="我们看得到参考长什么样，它看得到吗？它改风格的依据，只能在请求里的这几块", reveal=2) + '</div>'
    ),
    steps=["回到地图", "从 homepage-v1 开始", "它看得到吗"],
    teaching=teach(("讲师提示", "上一节结尾已经让 Codex 提交了 homepage-v1，这一节不再审内容。没跟上的从快照分支 ch02/2.2-done-20261024 开始（C2-99）。")),
)

# 2.3 风格参考的候选主页（截图与许可见 materials/external/README.md 的“2.3 风格参考”一节，2026-10-23 截取）
REFS = [
    ("ref-hyperspace.png", "html5up.net · CC BY 3.0", "Hyperspace 模板首屏：整块紫色", True),
    ("ref-brittanychiang.png", "brittanychiang.com · 注明出处", "Brittany Chiang 的主页：深蓝两栏", False),
    ("ref-freelancer.png", "Start Bootstrap · MIT", "Freelancer 模板首屏：青绿页头", False),
    ("ref-jonbarron.png", "jonbarron.info · 欢迎复用", "Jon Barron 的主页：白底蓝链接", False),
]


def ref_card(src, label, alt, picked):
    tag = '<span class="p-tag" data-role="us" data-reveal="1" style="position:absolute;right:8px;top:36px">这次用</span>' if picked else ""
    edge = ";outline:3px solid #D9481C;outline-offset:3px" if picked else ""
    return (f'<div class="p-page" style="position:relative{edge}">'
            f'<div class="p-page-bar" style="font-size:13px"><i></i><i></i><i></i>{label}</div>'
            f'<img src="external/{src}" alt="{escape(alt)}" style="display:block;width:100%;height:200px;object-fit:cover;object-position:top">{tag}</div>')


scene(
    id="p40a0", segment="提参考",
    label="挑一个参考", title="想要什么样的主页？先挑一个参考",
    lead="同一份 profile.md，可以做成完全不同的样子。这里有四个公开的主页或模板：整块紫色的 Hyperspace，深蓝两栏的 Brittany Chiang，青绿页头的 Freelancer，白底蓝链接的 Jon Barron。这次的示例用 Hyperspace，它和我们现在的主页差别最大。把两张首屏放在一起，说清想借鉴什么：左侧的侧栏导航，每一块不同底色的大块背景。你可以选别的参考；学的是风格，不照搬别人的代码和文字，用的时候按各自的许可注明出处。",
    html=(
        panel('<div class="p-grid" style="--n:4;gap:14px">' + "".join(ref_card(*r) for r in REFS) + '</div>', 0, 1)
        + panel(pair(shot("before.png", "现在：homepage-v1", 240), shot("reference.png", "想借鉴：Hyperspace · HTML5 UP", 240))
                + bar("想借鉴：<b>侧栏导航</b>、<b>大块背景</b> · 不照搬别人的代码和文字"), 2)
    ),
    refs=[HYPERSPACE, ref("HTML5 UP 许可（CC BY 3.0）", "https://html5up.net/license", "许可", kind="read")],
    steps=["四个参考", "这次用哪个", "想借鉴什么"],
    teaching=teach(("讲师提示", "四个候选：brittanychiang.com、startbootstrap.github.io/startbootstrap-freelancer、jonbarron.info，各自许可见 materials/external/README.md。四张候选是首屏截图（courseware/tools/capture-source.py，2026-10-23）；两张对照是 10-24 排练时 Chromium 1440×800 的首屏。参考在 1280 宽会把侧栏变成顶部横条，录制时浏览器开宽一点再看侧栏。")),
)

scene(
    id="p40a", segment="提参考", layout="prompt-scene", prompt=PROMPT,
    label="把参考交给它", title="一段话写清四件事",
    lead="这次的任务不大，Prompt 写成一段话，四要素都在里面：目标是参考 Hyperspace 改风格、喜欢它的侧栏和大块背景；背景是参考页的网址，点明用 curl 看 HTML 和 CSS，结合当前代码；约束是先给计划别改、保留个人内容、不新增依赖；完成标准里写明页面效果由我们在浏览器里看。新任务用 /clear 或新会话，再 /plan。",
    html=(
        '<div class="demo-notes"><ol class="p-notes">'
        '<li data-reveal="0"><span><b>Goal · Context</b><small>参考 Hyperspace 改风格；用 curl 看 HTML 和 CSS，结合当前代码</small></span></li>'
        '<li class="is-ok" data-reveal="1"><span><b>Constraints</b><small>先给计划别改；保留个人内容，不新增依赖</small></span></li>'
        '<li class="is-risk" data-reveal="2"><span><b>Done when</b><small>页面效果我们自己在浏览器里看</small></span></li></ol></div>'
    ),
    steps=["目标与背景", "约束", "完成标准"],
    teaching=teach(("讲师提示", "点明用 curl：不点明时它可能用网页搜索，在这套配置下只拿到首屏摘要（2026-10-22 实测）。Prompt 是 10-24 排练的原文，没有为课件改写。")),
)

scene(
    id="p40b", segment="它拿到了什么",
    label="它拿到了什么", title="取回来，不等于看到了",
    lead="我们给的是网址，它拿到的是什么？回看排练的记录：curl 在沙箱里联网失败，它申请到沙箱外，把 HTML 和 CSS 存进 /tmp 下的文件；进入请求的工具返回只有两个文件的大小。接着它用 sed 看 HTML 的前 140 行，CSS 有六万多字节，它用 grep、sed 一段一段挑着读。它说“看过了”，深紫侧栏、18em 宽，这些判断能在它读到的 CSS 片段里找到，但那是代码片段，不是渲染出来的页面。左侧按钮切换观察点，阅读视图展示原文节选。",
    html=E.stage("p40b"),
    steps=["取回来", "工具返回", "挑着读", "它说看过了"],
    refs=[ref("Effective context engineering · Context retrieval and agentic search", "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents", "Anthropic，2025-09-29")],
    teaching=teach(("核对记录", RUN + "。公开数据见 materials/style/run-20261024-round2，只导出课件用到的记录；存进文件、挑着读，在 10-24 的四次排练里都出现过。")),
)

scene(
    id="p40a1", segment="它拿到了什么",
    label="答案和计划去了哪", title="我们的答案和它的计划，去了哪？",
    lead="读完参考，它问了两组偏好：配色、侧栏形态、背景纹理，再问字体和区块排版，排练时都选了推荐项。我们选的答案，是那个提问工具的返回，在请求的“工具返回”这一块；它写的计划是它自己的回答，下一次请求里就到了“对话历史”。之后每次请求都带着这两样，它改的时候照着。计划只动页面文件、不加依赖，就确认实施，再补一句：页脚注明出处，改完运行 build，浏览器我来检查，不要提交。",
    html=E.stage("p40a1"),
    steps=["我们的答案", "它的计划", "之后还在"],
    teaching=teach(("核对记录", RUN + "；交互题和计划每次排练都不一样，题目内容只作例子。")),
)

scene(
    id="p40b1", segment="看效果再反馈",
    label="第一轮改完", title="第一轮改完，哪里和想的不一样？",
    lead="第一轮改完，build 通过。在浏览器里和参考并排看同样宽度的首屏：侧栏、大块配色都做出来了，滚到工作经历，导航也会提示当前位置。不一样的地方，排练这次是背景：一片密集的小箭头铺在文字后面，参考是淡淡的、疏一些的细线。这个差别我们一眼就看到了，它看不到：渲染出来的页面不在 context 里。它自己也想看，实施完起了预览服务，推理里写着 React 在浏览器里渲染、curl 只拿得到一个空的 root。",
    html=(
        panel(pair(shot("round1.png", "第一轮：当前效果", 290), shot("reference.png", "参考", 290)), 0)
        + panel(shot("round1-experience.png", "滚到工作经历：导航已经提示当前位置", 330), 1)
        + panel(pair(detail("round1.png", "当前：密集小箭头", 350, 180, 1000, 420, 250), detail("reference.png", "参考：淡淡的细线", 350, 180, 1000, 420, 250)), 2)
        + panel(pair(detail("round1.png", "当前：密集小箭头", 350, 180, 1000, 420, 170), detail("reference.png", "参考：淡淡的细线", 350, 180, 1000, 420, 170))
                + bar("我们一眼看到的差别，它看不到：<b>页面的样子不在 context 里</b>", light=False)
                + '<pre class="p-term review-term">它的推理（排练这次）：… ' + escape(PEEK) + ' …</pre>', 3)
    ),
    refs=[HYPERSPACE],
    steps=["并排看", "做到了的", "哪里不一样", "它看不到"],
    teaching=teach(
        ("讲师提示", "当天第一轮不一样的地方很可能不是背景，按现场讲：它做到了什么、哪里和想的不一样。排练这次的箭头来自参考 CSS 里下拉框的图标，它读到了代码，却把它当成整页纹理，计划里就写了；可以一句带过，不展开 CSS。"),
        ("核对记录", RUN + "；截图是 Chromium 1440×800。起服务、想截图在四次排练里都出现过：它在沙箱里后台起服务不弹框，要用无头 Chrome 截图时弹出批准框就拒绝。"),
    ),
)

scene(
    id="p40d", segment="看效果再反馈",
    label="把看到的带进去", title="把看到的样子，带进请求",
    lead="继续同一个会话，截两张首屏：先贴现在的效果，再贴参考，然后说一句哪里不满意、想要什么样。图给出我们看到的页面，话说出这次的偏好；换成自己的，可以照这个样子填空：“" + TEMPLATE + "”回看请求：这一条是新的 Prompt，里面是两项图片和这句话；第二轮最后一次请求里，两张图还在，之后每次请求都带着。改完回浏览器看同一位置：细线淡了、疏了，其他部分没动。它看见了我们贴的图，自己做出来的页面它仍然看不见；要让它自己截图看页面，得专门把浏览器接进它的运行环境，后面的章节再做。",
    html=feedback_stage(),
    steps=["贴图和反馈", "请求里的图", "后面还带着", "第二轮结果"],
    refs=[
        ref("Codex 文档 · Image inputs", "https://learn.chatgpt.com/docs/image-inputs?surface=cli#write-the-prompt-around-the-image", "OpenAI，访问于 2026-10-24"),
        ref("Harness engineering", "https://openai.com/index/harness-engineering/", "OpenAI，2026-02-11"),
    ],
    teaching=teach(
        ("讲师提示", "贴图：把图片文件拖进终端，或复制后在 Codex 里 Ctrl+V，输入框出现 [Image #1]、[Image #2]，再写那句话。贴自己的页面，是因为它看不见自己做出来的页面；参考那张让它知道想要什么样。"),
        ("核对记录", RUN + "；贴图那次请求的两项 input_image 与 assets/round1.png、assets/reference.png 逐字节相同，构建时核对。不把一次结果说成图片单独起了多大作用。"),
    ),
)

scene(
    id="p40e", segment="接受并保存",
    label="两轮下来", title="同一份内容，两个样子",
    lead="两轮下来的结果：左边是上一节提交的 homepage-v1，右边是参考 Hyperspace 改了两轮的样子。个人信息一字没改，样子完全换了：侧栏导航、大块背景、淡淡的细线。像不像、好不好看，由我们自己判断。",
    html=pair(shot("before-full.png", "homepage-v1 · 上一节", 380), shot("round2-full.png", "两轮之后 · 这一节", 380)),
    steps=["两个样子"],
    teaching=teach(("核对记录", RUN + "；整页截图 Chromium 1440 宽。")),
)

scene(
    id="p40c", segment="接受并保存",
    label="要不要接受", title="风格改得对吗，要不要接受",
    lead="diff 很大，不逐行读。像不像，只有我们在浏览器里看得出来：从上滚到下和参考并排看，再缩到手机宽度看一眼。再看它新加了什么：排练这次是一段滚动高亮的脚本，计划里写了；背景纹理是内联的 SVG，没有引远程资源；页脚写了参考出处。满意就让 Codex 提交，批准框里看清是哪几个文件、提交说明写了什么；不满意，还没提交的改动让它 git restore 放弃，回到 homepage-v1。官方文档推荐的 UI 迭代也是这样：小步改，在浏览器里看，喜欢的提交，不喜欢的回退。",
    html=(
        panel(pair(detail("round2-full.png", "页脚：参考出处", 400, 3210, 520, 80, 130), shot("round2-mobile.png", "手机宽度的首屏", 300)), 0)
        + panel('<div class="p-claim"><div class="p-box" data-role="agent"><span class="p-tag" data-role="agent">Codex 说</span><p class="p-big" style="font-weight:500">“背景纹理换掉了，其他部分没动”</p></div>'
                '<ul class="p-checks">'
                '<li class="is-no">像不像参考<small>diff 里看不出来，由我们在浏览器里看</small></li>'
                '<li>新加了什么<small>排练这次：滚动高亮的脚本、内联 SVG 背景、页脚出处</small></li>'
                '<li>范围对不对<small>只动页面文件，个人内容没变，没加依赖</small></li></ul></div>', 1)
        + panel('<pre class="p-term review-term">' + escape(COMMIT_PROMPT) + '</pre>' + bar("接受：让 Codex 提交，<b>批准框里看清文件和提交说明</b> · 不满意：git restore 回到 homepage-v1"), 2)
    ),
    refs=[ref("Codex 文档 · Iterate on UI with live updates", "https://learn.chatgpt.com/docs/prompting#iterate-on-ui-with-live-updates", "OpenAI，访问于 2026-10-24")],
    steps=["像不像", "新加了什么", "提交或放弃"],
    teaching=teach(
        ("讲师提示", "提交在现场做：粘贴提交 Prompt，批准框里核对后确认，和 2.2 结尾提交 homepage-v1 一样。排练这次的接受提交由备课方完成（188f1ad，只含 App.tsx 与 index.css），不是 Codex 执行的，画面不放它的输出。"),
        ("跟做产出", "至少一轮风格改动，审过后让 Codex 提交，或用 git restore 放弃。"),
    ),
)

QUESTIONS = [
    ("它说参考是“深紫侧栏、18em 宽”，这个判断的依据在请求的哪一块？它看到页面了吗？",
     "在“工具返回”里它挑着读的 CSS 片段；它看到的是代码，不是渲染出来的页面", "回看：取回来，不等于看到了"),
    ("第二轮贴的两张图，出现在请求的哪一块？后面的请求里还有吗？",
     "在“新的 Prompt”，和我们那句话在同一条消息里；之后每次请求都带着", "回看：把看到的样子带进请求"),
    ("它说“改好了”，像不像由谁判断？为什么不能由它自己判断？",
     "由我们在浏览器里看；渲染出来的页面不在 context 里，它看不见自己做出来的页面", "回看：第一轮改完"),
]

scene(
    id="p41b", segment="小结",
    label="暂停自检", title="暂停自检：它看到了什么？",
    lead="每题先暂停，写出你的判断，再补一条依据。三题的答案都在这一节的记录里，换一次运行也成立。参考答案在阅读模式中查看。",
    html='<style>body[data-mode="slides"] #p41b .x-answer{display:none}body[data-mode="slides"] #p41b .p-qrow h3{font-size:24px}body[data-mode="slides"] #p41b .p-back-to{font-size:16px}</style><div class="p-qlist">'
    + "".join(f'<div class="p-qrow" data-reveal="{i}"><span class="p-n">{i + 1}</span><div><h3>{escape(q)}</h3><p class="x-answer">{escape(a)}</p><span class="p-back-to">{escape(b)}</span></div></div>'
              for i, (q, a, b) in enumerate(QUESTIONS))
    + '</div>',
    steps=["依据在哪", "图在哪", "谁来判断"],
)

scene(
    id="p42", segment="小结",
    label="本节小结", title="改风格之前，先问它看到了什么",
    lead="本节从 homepage-v1 开始，参考一个主页改了两轮风格。取回来不等于看到了：进入 context 的只是它挑着读的代码片段；页面的样子不在 context 里，像不像要我们自己看；看到的样子要靠我们带进去：截图加一句话，放进新的 Prompt。审过再让 Codex 提交。下一节：发布上线。",
    html=(
        '<div class="p-sketch" style="align-items:start"><div data-reveal="0"><h3 style="text-align:center">项目</h3>'
        '<div class="p-star" style="width:260px;font-size:24px">homepage-v1<br>→ homepage-v2</div>'
        '<p class="p-sub" style="text-align:center;margin-top:10px">回退靠 git，不靠对话</p></div>'
        '<div data-reveal="1"><h3>它看到了什么</h3><ul class="p-exits" style="gap:12px"><li class="is-point">取回来不等于看到了：只有挑着读的片段</li><li class="is-point">页面的样子不在 context 里</li><li class="is-point">看到的样子要靠我们带进去：截图加一句话</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一节</h3><div class="p-box" data-role="us"><h3>2.4 发布上线</h3><p>context 发给了谁，又怎样送出去</p></div></div></div>'
    ),
    steps=["项目", "它看到了什么", "下一节"],
)

lesson.write()
