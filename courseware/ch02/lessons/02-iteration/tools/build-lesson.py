#!/usr/bin/env python3
"""2.2 页面内容源；分镜在 STORYBOARD.md，口播唯一来源为 script.json。"""
import sys
from html import escape
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
sys.path.insert(0, str(Path(__file__).resolve().parents[4] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, redrawn, ref
from tracekit import Evidence

lesson = Lesson(__file__, "2.2", "补上个人经历，看对话怎么变长", summary="先把人写的个人资料放进主页：用 Plan 模式先出计划，人审过范围后再放行；检查页面和构建，再回看历史、缓存与压缩，选择下一步怎样继续会话。", prep=[
    "接着 2.1 录制的项目和 Codex 会话：当天会话还开着就直接用。另一天录时，在个人主页项目根目录运行 agent-lab codex --tap -- resume ch02-标签（2.1 /rename 起的名字），确认会话里有 2.1 的问候和项目问题、claude-tap 查看器能打开；这条组合没有实测过，开录前先试一次。",
    "把课程仓库的 courseware/ch02/materials/profile/profile.md 复制到个人主页项目根目录，不现场让 Codex 从网站汇总（沙箱默认不联网）。项目根目录还没有 AGENTS.md。",
    "编辑器打开项目根目录，备好新建 AGENTS.md 的位置；浏览器保留个人主页的标签页；Terminal 备好运行 npm run build 的标签页。",
    "确认 Codex 和开发服务都在个人主页项目根目录启动，不是课程仓库或别的目录。",
    "查看器和终端里的本机路径、用户名上屏前遮盖或缩写。",
])
scene = lesson.scene

ROUND_PROMPT = """Goal：把 profile.md 中的基本信息、教育、工作经历和项目放进个人主页，替换对应的占位内容。
Context：profile.md 在项目根目录，由我提供个人事实与经历。当前页面已有首屏和占位项目区，项目卡不跳转。请先读取文件并检查当前实现。
Constraints：个人事实与经历只使用 profile.md 的内容，不补写。可为呈现内容调整结构与样式；不添加链接或依赖，项目卡保持不跳转。只改页面所需的文件和标题，项目里其他说明文档不动。先提出改动计划，等我确认后再修改。
Done when：四块个人内容已呈现，事实与经历都能在 profile.md 中找到；你运行 npm run build 并报告结果；我在浏览器里检查文字与排版，你不用启动开发或预览服务。"""

# p22、p24、p27 的真实记录：观察点、按钮文字和阅读节选都在 trace/evidence.json，零件见 shared/parts/evidence-trace.js
EVIDENCE = Evidence(Path(__file__).resolve().parents[1] / "trace/evidence.json")

# p28 的会话选择对照是课程自绘（不是外部佐证，不用 redrawn() 的证据页外框）；图元在 materials/external/cache-compaction/session_states_figures.py
SESSION_STATES = (Path(__file__).resolve().parents[3] / "materials/external/cache-compaction/redraw-session-states-excalidraw.svg").read_text().strip().replace(
    "<svg ", '<svg style="display:block;max-width:100%;height:auto;max-height:325px;margin:0 auto" ', 1) + \
    '<p class="source-note">课程自绘：据本节 2026-10-24 记录 14、6、28 示意，新建交接按 /clear 加人写的交接画；方块多少只示意有无，不代表 token 数</p>'

def box(title, text, step=0, role="ink"):
    return f'<div class="p-box" data-role="{role}" data-reveal="{step}"><h3>{title}</h3><p>{text}</p></div>'

def grid(*items, n=2):
    return f'<div class="p-grid" style="--n:{n};gap:16px">'+''.join(items)+'</div>'

def bar(text, step):
    return f'<div class="p-bar is-light" data-reveal="{step}">{text}</div>'

def term(text, step=0):
    return f'<div class="p-term" data-reveal="{step}">{escape(text).replace(chr(10), "<br>")}</div>'

def table(head, rows):
    cols=' '.join('minmax(0,1fr)' for _ in head)
    s=f'<div class="p-matrix" style="grid-template-columns:{cols}"><div class="is-head" data-reveal="0">'+''.join(f'<span>{x}</span>' for x in head)+'</div>'
    for step, row in rows:
        s+=f'<div data-reveal="{step}">'+''.join(f'<span>{x}</span>' for x in row)+'</div>'
    return s+'</div>'

def source_note(text):
    return f'<p class="source-note">{text}</p>'

scene(
    id='p20',
    segment='准备个人内容',
    title='把个人内容补进主页',
    lead='先补内容，再看这一轮的请求怎样变化',
    html='<ol class="p-map"><li class="is-done"><b>2.1</b>看请求</li><li class="is-now"><b>2.2</b>补经历</li><li><b>2.3</b>改风格</li><li><b>2.4</b>发布上线</li><li><b>2.5</b>用好 context</li></ol><div class="p-grid" style="--n:2;gap:16px"><div class="p-box" data-role="us" data-reveal="1"><h3>项目上</h3><p>把四块个人内容放进主页</p></div><div class="p-box" data-role="ctx" data-reveal="1"><h3>请求里</h3><p>看规则、资料与历史怎样进入</p></div></div>' + anchor(lit=("对话历史", "工具返回"), note="这一节看：多说几句以后，对话历史和工具返回怎样越来越长", reveal=2) + '',
    steps=['接上主页', '本轮任务', '回到请求'],
    layout='lesson-cover',
)

scene(
    id='p29a',
    segment='准备个人内容',
    title='页面上的事实，先写进 profile.md',
    lead='在项目根目录准备 profile.md，分基本信息、教育、工作经历、项目与开源四块。内容由人提供，Codex 负责呈现。讲师用自己已公开的信息；学员只写愿意公开的，也可用虚构人物。这个文件到发布时会随仓库公开。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div style="font-size:18px;line-height:1.25" class="p-term" data-reveal="0"># 个人信息<br><br>## 基本信息<br>姓名：缪东旭（MiaoDX）<br><br>## 教育<br>……<br>## 工作经历<br>……<br>## 项目与开源<br>……</div><div style="display:flex;flex-direction:column;gap:14px"><div class="p-box" data-role="us" data-reveal="0"><h3>人准备内容</h3><p>基本信息 · 教育<br>工作经历 · 项目与开源</p></div><div class="p-box" data-role="gate" data-reveal="1"><h3>只写愿意公开的</h3><p>也可以用虚构人物练习</p></div></div></div><div class="p-bar is-light" data-reveal="2">Prompt 点名文件，Codex 再读取正文</div>',
    steps=['看资料文件', '公开边界', '点名再读取'],
)

scene(
    id='p27a',
    segment='准备个人内容',
    title='要不要带上上一节的对话？先保存规则，再 /clear',
    lead='上一节结尾问过：再说一句，前面的还会跟着发吗？当前会话里还留着上一节的读取和问答。先在根目录保存 AGENTS.md：改代码后运行并报告 build，不新增依赖。上一节在弄懂项目区，这一轮需要的事实已经写进 profile.md，新写的规则也要新对话才会装入（本次 0.163.0 核验：中途新增的文件没有自动装入同一对话），所以选 /clear 开始新对话，随后直接发内容任务。清空没有撤销项目文件。学员写规则仍为选做。',
    html='<div class="p-box" data-role="ctx" data-reveal="0"><h3>当前会话</h3><p>上一节的读取与问答还在：这一轮要不要带上？</p></div><div class="p-grid" style="--n:2;gap:16px;margin-top:16px"><div class="p-term" data-reveal="1"># 项目规则<br>- 不新增依赖<br>- 修改代码后运行 npm run build，并报告结果</div><div class="p-box" data-role="ctx" data-reveal="2"><h3>这一轮选 /clear</h3><p>上一节的问答用处不大<br>事实在 profile.md，规则要新对话才装入</p></div></div>',
    steps=['看会话：要不要带上', '把规则存成文件', '为什么 /clear'],
)

scene(
    id='p29',
    segment='内容迭代',
    title='沿用四要素，写清这一轮的 Prompt',
    lead='沿用第一章 Goal、Context、Constraints、Done when 四要素：点名 profile.md，事实只来自这份资料，不加链接和依赖，只改页面所需文件；先提出计划、等确认再改，完成标准写清谁检查什么。完整 Prompt 可复制。',
    html='<div class="demo-notes"><div class="p-box" data-role="tool" data-reveal="0"><h3>点名资料文件</h3><p>先读取，再检查当前实现</p></div><div class="p-box" data-role="us" data-reveal="1"><h3>事实只来自资料</h3><p>不补写，不加链接和依赖</p></div><div class="p-box" data-role="ctx" data-reveal="2"><h3>先计划、等确认</h3><p>接下来用 Plan 模式提交</p></div></div>',
    steps=['目标与背景', '约束', '完成标准'],
    layout='prompt-scene',
    prompt='Goal：把 profile.md 中的基本信息、教育、工作经历和项目放进个人主页，替换对应的占位内容。\nContext：profile.md 在项目根目录，由我提供个人事实与经历。当前页面已有首屏和占位项目区，项目卡不跳转。请先读取文件并检查当前实现。\nConstraints：个人事实与经历只使用 profile.md 的内容，不补写。可为呈现内容调整结构与样式；不添加链接或依赖，项目卡保持不跳转。只改页面所需的文件和标题，项目里其他说明文档不动。先提出改动计划，等我确认后再修改。\nDone when：四块个人内容已呈现，事实与经历都能在 profile.md 中找到；你运行 npm run build 并报告结果；我在浏览器里检查文字与排版，你不用启动开发或预览服务。',
)

scene(
    id='p29c',
    segment='内容迭代',
    title='Plan：先问清，再呈现可确认的计划',
    lead='清空后输入 /plan，确认界面显示 Plan，再提交这段 Prompt。本次它先读资料和代码，再问三道交互题，我们都选了推荐项：首屏按钮改为“查看经历”跳到工作经历，四块分成独立分区，“现在关注”放在首屏一行标签。回答以后出现 Proposed Plan。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-term" data-reveal="0">› /plan<br>› 这一轮的四要素 Prompt</div><div class="p-box" data-role="us" data-reveal="1"><h3>交互提问 · 本次三题</h3><p>首屏按钮 → 查看经历<br>组织方式 → 四个独立分区<br>现在关注 → 首屏一行标签</p></div></div><div class="p-bar is-light" data-reveal="2">Proposed Plan 出来后，先审范围再放行</div>',
    steps=['切 Plan 并提交', '回答三道交互题', '看 Proposed Plan'],
)

scene(
    id='p30',
    segment='内容迭代',
    title='先审计划，再确认执行',
    lead='Proposed Plan 出来后先看三件事：改哪些文件、事实是否都来自 profile.md、谁来验证。本次计划只改 src/App.tsx、src/index.css 和 index.html 的标题，写明说明文档不动、不启动服务，没有越界，就直接选 Yes, implement this plan；界面自动切回 Default，发送 Implement the plan.。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-box" data-role="us" data-reveal="0"><h3>看文件范围</h3><p>App.tsx · index.css · 标题<br>说明文档不动</p></div><div class="p-box" data-role="ctx" data-reveal="1"><h3>看事实与验证</h3><p>事实只来自 profile.md<br>build 由它做，浏览器由人看</p></div></div><div class="p-term" data-reveal="2">Yes, implement this plan<br>→ Default · Implement the plan.</div>',
    steps=['看文件范围', '看事实与验证', '确认后自动切执行'],
)

scene(
    id='p22',
    segment='回看请求',
    title='补充一句要求，前面的工作也随请求发出',
    lead='回看这一轮的记录。清空后的第一个任务请求里有规则和 Prompt，没有上一节的问答；读文件的返回照样追加在末尾，和上一节看到的一样。这里重点看我们补的两句：回答交互题时，之前读过的资料和代码都随之重发；实施时，模式切换指令和 Implement the plan. 也追加在末尾，前面不改。左侧按钮切换观察点；阅读视图展示原文节选，原始记录核对它在请求中的位置，两种视图都可放大。',
    html=EVIDENCE.stage("p22"),
    steps=['清空后的第一个请求', '读到资料', '回答交互题', '进入执行'],
)

scene(
    id='p24',
    segment='回看请求',
    layout='evidence-scene',
    label='失败也留在历史里',
    title='工具的失败返回，也一直跟着发',
    lead='Manus 团队介绍上下文工程时主张保留错误：失败的尝试和报错留在 context 里，模型看到它，才不容易再错一次。这一轮也有一次：Plan 阶段它自己写的读文件脚本引号转义出错，返回 SyntaxError，它换了一种写法重读，读到了。这条失败返回没有被删掉，之后每次请求都带着它，一直到压缩前（压缩那页核对）。留着有用，也一直占输入。这次失败是运行中自然出现的，不是准备好的教学材料。右侧按钮切换观察点；阅读视图展示原文，原始记录核对它在请求中的位置，两种视图都可放大。',
    html='<style>#p24 .x-keep{display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:20px;align-items:start}body[data-mode="slides"] #p24 .p-evidence{grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:8px}body[data-mode="slides"] #p24 .p-ev-guide{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}body[data-mode="scroll"] #p24 .x-keep{grid-template-columns:1fr}</style><div class="x-keep">' + redrawn("cache-compaction", "keep-errors", "excalidraw", "据 Manus《AI代理的上下文工程》“保留错误的内容”配图右半重画，中文标签", max_height=330) + EVIDENCE.stage("p24") + '</div>',
    refs=[ref("保留错误的内容", "https://manus.im/zh-cn/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus", "Manus，2025-07-18", quote="保留错误的内容")],
    steps=['失败留在 context 里，本轮报错', '它自己换写法再读'],
)

scene(
    id='p23',
    segment='回看请求',
    title='输入增长和缓存命中，分开看',
    lead='取同一 Plan 阶段的三次请求。输入从 10,499 增到 17,896 token；服务另报告缓存命中。前面的内容原样重发，前缀一致，服务才能复用上一次的计算；命中省的是 token 费用，这些历史仍在 input 里，模型照样要读。实际计费按所用服务规则核对，这里不作价格换算；再用下一页研究看长输入可能带来的表现变化。',
    html='<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)"><div class="is-head" data-reveal="0"><span>本轮位置</span><span>本次请求输入</span><span>其中报告为缓存命中</span></div><div data-reveal="0"><span>初始任务</span><span>10,499 token</span><span>189 token</span></div><div data-reveal="0"><span>已读个人资料</span><span>11,629 token</span><span>10,498 token</span></div><div data-reveal="0"><span>回答交互题以后</span><span>17,896 token</span><span>17,029 token</span></div></div><div class="p-bar is-light" data-reveal="1">前缀不变才命中缓存：省 token，不省内容</div><p class="source-note">2026-10-24 一次运行：Codex CLI 0.163.0、MiniMax-M3.1-Flash。单次观察，结果随任务和配置变化。三条都在 Plan 阶段，不是整轮总用量。</p>',
    steps=['看输入量', '缓存为什么命中'],
    refs=[ref("深入解析 Codex 智能体循环 · 提示缓存", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23", quote="缓存命中仅在提示内部存在精确的前缀匹配时才可能发生")],
)

scene(
    id="p23a", segment='回看请求', layout="evidence-scene",
    label="长 context 的代价", title="会话越长，越早进入 dumb zone",
    lead="Matt Pocock 和 Dex Horthy 都把这种现象叫作 dumb zone：同一个模型，context 越积越多，就越粗心、越健忘、错得越多；从哪里开始因模型和任务而异，窗口上限还在更后面。Claude Code 的官方文档也写着，context 填满时性能会下降。本轮 Plan 阶段最长的一次请求不到 2 万 token，离这条线还远；一个会话接着做很多事，就会越走越靠后。主页改得对不对，仍要回到文件和页面检查。",
    html=redrawn("context-rot", "smart-zone", "course", "课程示意：据 Matt Pocock《AI Coding Dictionary》Smart zone 词条与 Dex Horthy “No Vibes Allowed” 演讲的说法，不画具体数字", max_height=360),
    refs=[ref("Smart zone", "https://www.aihero.dev/ai-coding-dictionary/smart-zone", "Matt Pocock"),
          ref("No Vibes Allowed", "https://ai.engineer/talks/context-engineering-for-complex-codebases", "Dex Horthy，2025")],
    steps=["看示意"],
)

scene(
    id='p31',
    segment='回到现场',
    title='先看主页，再看 build 输出',
    lead='在浏览器里看首屏、教育、工作经历、项目与开源，检查文字和排版，再看本轮实际 build 输出。实施跑完后回到现场看。改动范围在审计划时看过，页面在这里看过；提交之前，先看这个会话接下来怎样继续。',
    html='<style>.x-result{width:100%;height:300px;object-fit:contain;object-position:top;border:1px solid var(--p-ink)}body[data-mode="scroll"] .x-result{height:auto;max-height:550px}</style><div class="p-grid" style="--n:2;gap:16px"><div data-reveal="0"><img class="x-result" src="assets/plan-homepage.png" alt="本次 Plan 成果：缪东旭个人主页的首屏、教育、工作经历与项目"></div><div style="display:flex;flex-direction:column;gap:14px"><div class="p-box" data-role="ok" data-reveal="1"><h3>本轮实际结果</h3><p>四块内容已呈现<br>npm run build 通过</p></div><div class="p-box" data-role="ink" data-reveal="2"><h3>已经核对</h3><p>范围：审计划时看过<br>页面：这里看过</p></div></div></div>',
    steps=['人看页面', '核对构建', '范围与页面都看过'],
)

scene(
    id='p27',
    segment='压缩与继续',
    title='压缩换成摘要，要原文就重新读取',
    lead='在这一轮的会话中手动 /compact，观察已有历史怎样交接，而非窗口已满。压缩前，资料原文和上一页那条 SyntaxError 都还在历史里；压缩后的请求只有 9 项：基础指令、初始 Prompt、Skills 与团队说明、重新装入的项目规则、Implement the plan.、交接摘要和追问，原来的工具调用与返回都不在了。摘要没保留 DeepMotion.ai 经历的完整文字：禁止工具时答不出逐字原文，允许重读 profile.md 后正确引用。文件哈希与 tracked diff 均未改变。',
    html=EVIDENCE.stage("p27"),
    steps=['压缩前的历史', '压缩后的请求', '只凭摘要追问', '重读文件'],
)

scene(
    id='p27b',
    segment='压缩与继续',
    title='/status：当前占用和累计用量分别看',
    lead='同一会话压缩前，Context window 报告 26.3K used / 498K，Token usage 52.5K total；压缩并追问两次以后，分别是 12.2K used 和 86.7K total。累计口径和当前窗口不同，压缩本身也调用模型。这些是本次界面读数，不是整节费用基准。任务中也会自动压缩：OpenAI 介绍 Codex 循环的文章说，Token 总数超过设定的上限时，Codex 会用一个更小的列表替换历史再继续。',
    html='<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)"><div class="is-head" data-reveal="0"><span>/status</span><span>压缩前</span><span>压缩并追问两次后</span></div><div data-reveal="0"><span>Context window</span><span>26.3K used / 498K</span><span>12.2K used / 498K</span></div><div data-reveal="1"><span>Token usage</span><span>52.5K total</span><span>86.7K total</span></div></div><div class="p-box" data-role="ctx" data-reveal="2"><h3>任务中也会自动压缩</h3><p>超过设定的上限，用更小的列表替换历史，任务继续</p></div>',
    steps=['当前窗口', '累计用量', '任务中自动压缩'],
    refs=[ref("深入解析 Codex 智能体循环 · 压缩", "https://openai.com/zh-Hans-CN/index/unrolling-the-codex-agent-loop/", "OpenAI，2026-01-23", quote="为避免耗尽上下文窗口")],
)

scene(
    id='p28',
    segment='选择怎样继续',
    title='下一步要做什么，再选怎样继续会话',
    lead='先回看自己会话的读取与操作历史，再判断下一任务需要什么。继续、清空、压缩、新建交接都可能合理。Plan 是工作模式，本页四项是会话选择。讲师仍做同一主页，沿这份成果继续，需要逐句事实时重读文件；学员用界面中可见的一条依据说明自己的选择。',
    html=SESSION_STATES + '<div class="p-bar is-light" data-reveal="2">暂停：写下自己的选择 + 一条可见的依据</div>',
    steps=['继续或清空', '压缩或交接', '自己的判断'],
)

scene(
    id='p28a',
    segment='选择怎样继续',
    title='提交一次，留下 homepage-v1',
    lead='范围在审计划时看过，页面和 build 也看过，这一版值得保存。让 Codex 提交：它先列出 git status，再申请执行 git add、git commit。.git 在沙箱里只读，提交会弹出批准框，看清是哪几个文件、提交说明写了什么再确认。清空、压缩只改对话，回到这一版靠的是这次提交。',
    html='<div class="demo-notes">' + box('先列状态', '只有本轮的页面文件和 AGENTS.md、profile.md', 0, 'tool') + box('批准框里看清', '.git 在沙箱里只读，提交要申请到沙箱外', 1, 'us') + box('提交以后', '排练这次：9381567 homepage-v1<br>回到这一版靠提交，不靠对话', 2, 'ok') + '</div>',
    steps=['先列状态', '批准框里看清', '提交以后'],
    layout='prompt-scene',
    prompt='这一轮我在浏览器里看过、build 也通过了，请帮我提交。先列出 git status 给我看；\n只提交本轮改动的页面文件和 AGENTS.md、profile.md。提交说明第一行写\nhomepage-v1: 放进个人信息、经历和项目，正文写本轮目标和改动了哪些文件。',
)

scene(
    id='p33',
    segment='选择怎样继续',
    title='暂停自检：这四种情况，我们会怎么做？',
    lead='每题先暂停，写出自己的判断，再补一条依据或下一步操作。规则改过后看清空后的第一个请求；补充要求时考虑一起发送的历史；引用原句时核对原文；区分清空对话和撤销文件修改。参考答案在阅读模式中查看。',
    html='<style>body[data-mode="slides"] #p33 .x-answer{display:none}body[data-mode="slides"] #p33 .p-qrow h3{font-size:24px}body[data-mode="slides"] #p33 .p-back-to{font-size:16px}</style><div class="p-qlist"><div class="p-qrow" data-reveal="0"><span class="p-n">1</span><div><h3>会话进行到一半，刚改了 AGENTS.md，怎样让它生效、怎样确认？</h3><p class="x-answer">这一版 Codex 里，中途写的规则不会自动进原会话；/clear 或新开会话后，看第一个请求里有没有新规则</p><span class="p-back-to">回看：清空后的第一个请求</span></div></div><div class="p-qrow" data-reveal="1"><span class="p-n">2</span><div><h3>回答交互题时选“四个独立分区”，下一次请求还会带上什么？</h3><p class="x-answer">本次未压缩的实例中，原来的任务、已读资料、代码和问答仍在，新要求接在后面；输入量不只算这句话</p><span class="p-back-to">回看：补充要求后的请求</span></div></div><div class="p-qrow" data-reveal="2"><span class="p-n">3</span><div><h3>摘要只说“经历已补齐”，要引用原句该怎么办？</h3><p class="x-answer">先检查摘要是否保留原句；若没有，就重新读取 profile.md，依据新的工具返回引用。核对页面时还要对照页面代码。</p><span class="p-back-to">回看：压缩后重读资料</span></div></div><div class="p-qrow" data-reveal="3"><span class="p-n">4</span><div><h3>页面改错了，用 /clear 能撤销修改吗？</h3><p class="x-answer">不能。/clear 清空对话，不会撤销项目文件的改动；需要另行修改或恢复文件。清空后继续工作，还要重新说明任务和所需文件。</p><span class="p-back-to">回看：清空对话与项目文件</span></div></div></div>',
    steps=['规则改过后', '补充一句要求', '需要引用原句', '想撤销页面修改'],
)

scene(
    id='p34',
    segment='选择怎样继续',
    title='带着 homepage-v1，进入风格调整',
    lead='本轮用人提供的资料补齐主页，查看页面和 build，再看规则、文件返回和对话历史如何进入请求。清空开始新对话，压缩用摘要承接历史，项目文件仍可读取；这一版已提交为 homepage-v1。下一节从它开始，参考一个主页改风格，不满意随时回到这里。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-box" data-role="ok" data-reveal="0"><h3>这一轮</h3><p>个人内容已呈现<br>页面与 build 已看过<br>提交为 homepage-v1</p></div><div class="p-box" data-role="us" data-reveal="1"><h3>下一节</h3><p>参考一个主页改风格<br>不满意就回到 homepage-v1</p></div></div><div class="p-bar is-light" data-reveal="1">从 homepage-v1 开始</div>',
    steps=['收住本轮', '交接下一节'],
)

lesson.write()
