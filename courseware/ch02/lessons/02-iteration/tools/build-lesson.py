#!/usr/bin/env python3
"""2.2 页面内容源；分镜在 STORYBOARD.md，口播唯一来源为 script.json。"""
import sys
from html import escape
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, anchor, chapter_map, redrawn, ref, teach

lesson = Lesson(__file__, "2.2", "补上个人经历，看对话怎么变长", summary="先把人写的个人资料放进主页：用 Plan 模式先出计划，人修订范围后再放行；检查页面和构建，再回看历史、缓存与压缩，选择下一步怎样继续会话。")
scene = lesson.scene

ROUND_PROMPT = """Goal：把 profile.md 中的基本信息、教育、工作经历和项目放进个人主页，替换对应的占位内容。
Context：profile.md 在项目根目录，由我提供个人事实与经历。当前页面已有首屏和占位项目区，项目卡不跳转。请先读取文件并检查当前实现。
Constraints：个人事实与经历只使用 profile.md 的内容，不补写。可为呈现内容调整结构与样式；不添加链接或依赖，项目卡保持不跳转。先提出改动计划，等我确认后再修改。
Done when：四块个人内容已呈现，事实与经历都能在 profile.md 中找到；你运行 npm run build 并报告结果；我在浏览器里检查文字与排版。"""

PLAN_FEEDBACK = """先调整计划，暂不改文件：保持原有风格和单列布局；基本信息并入首屏，姓名用“缪东旭（MiaoDX）”同一行；“现在关注”用原句一行文字，窄屏自然换行；保留“查看项目”跳到 #projects；只改页面所需文件和标题，不改 PROMPT_V1.md 或其他课程过程材料，不新增记录文件。浏览器由我检查，你只做 build 与内容、范围核对，不启动开发或预览服务、不驱动浏览器。请给出修订后的简短计划，等我确认。"""

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
    id='p21',
    segment='准备个人内容',
    title='这轮修改，用到会话、文件和页面',
    lead='眼前有 Codex 中的读取与操作历史、项目目录中的资料与代码，以及浏览器显示的主页。Codex 把已有对话和工具返回组织进下一次请求；文件内容要通过读取进入。浏览器效果由人检查，需要反馈时再明确提供。',
    html='<div class="p-grid" style="--n:3;gap:16px"><div class="p-box" data-role="ctx" data-reveal="0"><h3>Codex 会话</h3><p>上一轮的读取与问答<br>供后续工作参考</p></div><div class="p-box" data-role="tool" data-reveal="1"><h3>项目文件</h3><p>profile.md · 页面代码<br>读取后进入请求</p></div><div class="p-box" data-role="us" data-reveal="2"><h3>浏览器页面</h3><p>人查看文字与排版<br>把发现的问题说清楚</p></div></div>',
    steps=['看会话', '看文件', '看页面'],
)

scene(
    id='p27a',
    segment='准备个人内容',
    title='先保存项目规则，再 /clear',
    lead='接着上一节“规则进入请求”的观察，在根目录保存 AGENTS.md：改代码后运行并报告 build，不新增依赖。本轮选 /clear 开始新对话，随后直接发内容任务。本次 0.163.0 核验中，新对话首个任务请求含这些规则；中途新增文件未自动装入同一对话。清空没有撤销项目文件。学员写规则仍为选做。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-term" data-reveal="0"># 项目规则<br>- 不新增依赖<br>- 修改代码后运行 npm run build，并报告结果</div><div class="p-box" data-role="ctx" data-reveal="1"><h3>保存后 /clear</h3><p>开始新对话<br>下一条直接提交内容任务</p></div></div><div class="p-bar is-light" data-reveal="2">首个任务请求：初始内容 + 项目规则 + 本轮 Prompt</div>',
    steps=['把规则存成文件', '开始新对话', '在任务请求里看规则'],
)

scene(
    id='p29',
    segment='内容迭代',
    title='沿用四要素，写清这一轮的 Prompt',
    lead='沿用第一章 Goal、Context、Constraints、Done when 四要素：点名 profile.md，事实只来自这份资料，不加链接和依赖；先提出计划、等确认再改，完成标准写清谁检查什么。完整 Prompt 可复制。',
    html='<div class="demo-notes"><div class="p-box" data-role="tool" data-reveal="0"><h3>点名资料文件</h3><p>先读取，再检查当前实现</p></div><div class="p-box" data-role="us" data-reveal="1"><h3>事实只来自资料</h3><p>不补写，不加链接和依赖</p></div><div class="p-box" data-role="ctx" data-reveal="2"><h3>先计划、等确认</h3><p>接下来用 Plan 模式提交</p></div></div>',
    steps=['目标与背景', '约束', '完成标准'],
    layout='prompt-scene',
    prompt='Goal：把 profile.md 中的基本信息、教育、工作经历和项目放进个人主页，替换对应的占位内容。\nContext：profile.md 在项目根目录，由我提供个人事实与经历。当前页面已有首屏和占位项目区，项目卡不跳转。请先读取文件并检查当前实现。\nConstraints：个人事实与经历只使用 profile.md 的内容，不补写。可为呈现内容调整结构与样式；不添加链接或依赖，项目卡保持不跳转。先提出改动计划，等我确认后再修改。\nDone when：四块个人内容已呈现，事实与经历都能在 profile.md 中找到；你运行 npm run build 并报告结果；我在浏览器里检查文字与排版。',
)

scene(
    id='p29c',
    segment='内容迭代',
    title='Plan：先问清，再呈现可确认的计划',
    lead='清空后输入 /plan，确认界面显示 Plan，再提交这段 Prompt；首个任务请求里已有刚保存的规则。本次先出现两项交互题：保留查看项目按钮、基本信息并入首屏，再出现 Proposed Plan。初版计划还提议更新 PROMPT_V1.md，需人在确认前收窄范围。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-term" data-reveal="0">› /plan<br>› 这一轮的四要素 Prompt</div><div class="p-box" data-role="us" data-reveal="1"><h3>交互提问 · 本次两题</h3><p>查看项目 → 保留 #projects<br>基本信息 → 并入首屏</p></div></div><div class="p-bar is-light" data-reveal="2">Proposed Plan 出来后，先审范围与呈现要求</div>',
    steps=['切 Plan 并提交', '回答两道交互题', '看 Proposed Plan'],
    teaching=teach(
        ("讲师提示", "不用 /plan 也行：在 Prompt 里写明先提出计划、等确认再改。2026-10-23 同起点的普通模式也给出了文字计划并等待确认，只是交互形式不同（C2-92）。口播不展开对照。"),
    ),
)

scene(
    id='p30',
    segment='内容迭代',
    title='先修订计划，再确认执行',
    lead='选择 No, stay in Plan mode，追加修订要求：保留风格和单列、姓名同一行、关注内容用原句、保留 #projects，只改页面与标题，不改课程过程材料；浏览器由人检查。修订后看范围、事实和验证方式，再选 Yes, implement this plan；本次自动切回 Default，发送 Implement the plan.。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-box" data-role="us" data-reveal="0"><h3>先留下讨论</h3><p>No, stay in Plan mode<br>补呈现要求、收窄文件范围</p></div><div class="p-box" data-role="ctx" data-reveal="1"><h3>再看修订后的计划</h3><p>页面与标题 · 事实出处<br>build 由它做，浏览器由人看</p></div></div><div class="p-term" data-reveal="2">Yes, implement this plan<br>→ Default · Implement the plan.</div><details class="p-pop"><summary>查看完整修订要求</summary><div class="p-pop-body"><div class="p-pop-head"><span>修订原文</span><button type="button" onclick="this.closest(\'details\').open=false">关闭</button></div><p style="font-size:20px;line-height:1.6">先调整计划，暂不改文件：保持原有风格和单列布局；基本信息并入首屏，姓名用“缪东旭（MiaoDX）”同一行；“现在关注”用原句一行文字，窄屏自然换行；保留“查看项目”跳到 #projects；只改页面所需文件和标题，不改 PROMPT_V1.md 或其他课程过程材料，不新增记录文件。浏览器由我检查，你只做 build 与内容、范围核对，不启动开发或预览服务、不驱动浏览器。请给出修订后的简短计划，等我确认。</p></div></details>',
    steps=['修订而非立刻执行', '核对修订后的计划', '确认后自动切执行'],
    teaching=[{'title': '修订原文', 'text': '先调整计划，暂不改文件：保持原有风格和单列布局；基本信息并入首屏，姓名用“缪东旭（MiaoDX）”同一行；“现在关注”用原句一行文字，窄屏自然换行；保留“查看项目”跳到 #projects；只改页面所需文件和标题，不改 PROMPT_V1.md 或其他课程过程材料，不新增记录文件。浏览器由我检查，你只做 build 与内容、范围核对，不启动开发或预览服务、不驱动浏览器。请给出修订后的简短计划，等我确认。'}],
)

scene(
    id='p31',
    segment='内容迭代',
    title='先看主页，再看 build 输出',
    lead='在浏览器里看首屏、教育、工作经历、项目与开源，检查文字和排版，再看本轮实际 build 输出。这里只收住本轮结果，逐句出处与改动范围的快速审查留到下一节。',
    html='<style>.x-result{width:100%;height:300px;object-fit:contain;object-position:top;border:1px solid var(--p-ink)}body[data-mode="scroll"] .x-result{height:auto;max-height:550px}</style><div class="p-grid" style="--n:2;gap:16px"><div data-reveal="0"><img class="x-result" src="assets/plan-homepage.png" alt="本次 Plan 成果：缪东旭个人主页的首屏、教育、工作经历与项目"></div><div style="display:flex;flex-direction:column;gap:14px"><div class="p-box" data-role="ok" data-reveal="1"><h3>本轮实际结果</h3><p>四块内容已呈现<br>npm run build 通过</p></div><div class="p-box" data-role="ink" data-reveal="2"><h3>留给下一节</h3><p>逐句出处<br>改动范围</p></div></div></div>',
    steps=['人看页面', '核对构建', '留给下一节'],
)

scene(
    id='p22',
    segment='回看请求',
    title='补充一句要求，前面的工作也随请求发出',
    lead='回看这一轮的主任务记录 4、7、14、18。初始任务含规则与 Prompt；读取后 profile.md 正文进入工具返回；修订要求前仍保留之前的文件返回、交互选择与计划；实施时再加入模式切换指令和 Implement the plan.。记录 4 的前 6 项与记录 7 前 6 项逐项相同。项数仅供定位，不是固定格式。',
    html='<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="is-head" data-reveal="0"><span>本轮位置</span><span>这次请求里可见的内容</span></div><div data-reveal="0"><span>初始任务</span><span>规则 + Prompt；尚无资料正文</span></div><div data-reveal="1"><span>读过资料</span><span>前面的内容 + 读文件的调用与返回</span></div><div data-reveal="2"><span>补充呈现要求</span><span>已有资料、选择和计划 + 新要求</span></div><div data-reveal="3"><span>确认实施</span><span>前面的历史 + Implement the plan.</span></div></div>',
    steps=['初始任务', '资料进入', '追加要求', '进入执行'],
)

scene(
    id='p23',
    segment='回看请求',
    title='输入增长和缓存命中，分开看',
    lead='取同一 Plan 阶段、环境准备故障前的三次请求。输入从 10,451 增到 15,759 token；服务另报告缓存命中。缓存命中不表示这些历史从 input 消失。实际计费按所用服务规则核对，这里不作价格换算；再用下一页研究看长输入可能带来的表现变化。',
    html='<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)"><div class="is-head" data-reveal="0"><span>本轮位置</span><span>本次请求输入</span><span>其中报告为缓存命中</span></div><div data-reveal="0"><span>初始任务</span><span>10,451 token</span><span>189 token</span></div><div data-reveal="0"><span>已读个人资料</span><span>11,821 token</span><span>10,450 token</span></div><div data-reveal="0"><span>初版计划生成前</span><span>15,759 token</span><span>15,109 token</span></div></div><div class="p-bar is-light" data-reveal="1">缓存命中后，历史仍在 input 中</div><p class="source-note">2026-10-23 一次运行：Codex CLI 0.163.0、MiniMax-M3.1-Flash。单次观察，结果随任务和配置变化。三条都在 Plan 阶段，不是整轮总用量。</p>',
    steps=['看输入量', '再看缓存'],
)

scene(
    id="p23a", segment='回看请求', layout="evidence-scene",
    label="长输入的表现", title="长输入下，表现可能变化",
    lead="Chroma《Context Rot》控制任务条件、改变输入长度，观察到表现会变化，长输入下可能变得不稳定。本页为其中的重复词任务，数据点为读图近似，只看趋势。这份研究提醒我们关注 Context 的长度和内容；本次主页是否改对，仍要检查文件和实际页面。",
    html=redrawn("context-rot", "chroma-context-rot", "course", "据 Chroma《Context Rot》（2025-07-14）重复词任务重画", note="数据点为读图近似").replace("同一个简单任务，输入越长越做不好", "重复词任务：不同输入长度下的表现").replace("0.5 附近 ≈ 基本做不对", ""),
    refs=[ref("Context Rot", "https://www.trychroma.com/research/context-rot", "Chroma，2025-07-14")],
    steps=["看趋势"],
    teaching=teach(
        ("讲师提示", "曲线据报告里 Repeated Words 任务的图重画（课程手绘风格，courseware/tools/redraw.py 生成，图元在 materials/external/context-rot/figures.py），四个模型的数据点是读图近似，只讲趋势，不读具体数值。2026-10-22 核对原文：报告测了 18 个模型，任务刻意做得简单，只为看输入长度本身的影响。"),
    ),
)

scene(
    id='p24',
    segment='回看请求',
    title='工具的失败输出，也可能成为后续输入',
    lead='另一次独立运行中，预览服务启动返回 listen EPERM。在之后的请求记录中仍能找到同一失败返回。本页只说明失败输出也进入历史，与本轮运行及其 token 表分开。成功和失败的过程都可能成为后续输入，具体保留内容要看实际记录。',
    html='<div class="p-tag" data-role="gate" data-reveal="0">另一次独立运行</div><div class="p-grid" style="--n:2;gap:16px"><div class="p-term" data-reveal="0">预览服务启动<br>listen EPERM · 退出失败</div><div class="p-box" data-role="ctx" data-reveal="1"><h3>之后的请求记录</h3><p>input 中仍有<br>这段失败的工具返回</p></div></div><div class="p-bar is-light" data-reveal="2">回看历史，也看实际走过哪些步骤</div>',
    steps=['独立运行的失败', '之后仍有返回', '看实际过程'],
)

scene(
    id='p27',
    segment='压缩与继续',
    title='压缩换成摘要，要原文就重新读取',
    lead='在这一轮的会话中手动 /compact，观察已有历史怎样交接，而非窗口已满。本次压缩后原工具调用与返回换成摘要，部分任务与约束保留，项目规则重新装入。摘要没保留 DeepMotion.ai 经历的完整文字：禁止工具时答不出逐字原文，允许重读 profile.md 后正确引用。文件哈希与 tracked diff 均未改变。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-box" data-role="tool" data-reveal="0"><h3>压缩前</h3><p>读文件的原始返回<br>计划、修改与构建过程</p></div><div class="p-box" data-role="ctx" data-reveal="1"><h3>压缩后</h3><p>摘要承接过程<br>任务约束与重新装入的规则</p></div></div><div class="p-box" data-role="us" data-reveal="2"><h3>本次追问经历原文</h3><p>只凭摘要：无法逐字给出 → 重读 profile.md：找到原文</p></div><div class="p-bar is-light" data-reveal="3">请求里的历史表示变了，项目文件仍可读取</div>',
    steps=['已有历史', '观察 /compact', '追问并重读', '文件仍在'],
)

scene(
    id='p27b',
    segment='压缩与继续',
    title='/status：当前占用和累计用量分别看',
    lead='同一恢复会话手动压缩前后，Context window 报告从 31.8K used / 498K 变为 4.23K used / 498K；Token usage 从 60.1K total 变为 86.7K total。累计口径和当前窗口不同，压缩本身也调用模型。这些是本次界面读数，不是整节费用基准。另一次自动压缩实验把触发线调低到 10,000，便于观察任务中途压缩后继续，不能当默认配置。',
    html='<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)"><div class="is-head" data-reveal="0"><span>/status</span><span>压缩前</span><span>压缩后</span></div><div data-reveal="0"><span>Context window</span><span>31.8K used / 498K</span><span>4.23K used / 498K</span></div><div data-reveal="1"><span>Token usage</span><span>60.1K total</span><span>86.7K total</span></div></div><div class="p-box" data-role="ctx" data-reveal="2"><h3>另一次自动压缩实验</h3><p>调低触发线到 10,000 用于演示：中途压缩，任务继续</p></div>',
    steps=['当前窗口', '累计用量', '自动压缩的独立片段'],
)

scene(
    id='p28',
    segment='选择怎样继续',
    title='下一步要做什么，再选怎样继续会话',
    lead='先回看自己会话的读取与操作历史，再判断下一任务需要什么。继续、清空、压缩、新建交接都可能合理。Plan 是工作模式，本页四项是会话选择。讲师仍做同一主页，沿这份成果继续，需要逐句事实时重读文件；学员用界面中可见的一条依据说明自己的选择。',
    html='<div class="p-matrix" style="grid-template-columns:minmax(0,1fr) minmax(0,1fr)"><div class="is-head" data-reveal="0"><span>做法</span><span>当前要接着做什么 / 哪些信息要带过去</span></div><div data-reveal="0"><span>继续</span><span>同一件事，已有历史集中且有用</span></div><div data-reveal="0"><span>/clear</span><span>重新说明任务与所需文件，文件改动还在</span></div><div data-reveal="1"><span>压缩后继续</span><span>进度由摘要承接，需要原文时再读</span></div><div data-reveal="1"><span>新建并交接</span><span>人说明结论、约束、文件和下一步</span></div></div><div class="p-bar is-light" data-reveal="2">暂停：写下你的选择 + 一条可见的依据</div>',
    steps=['继续或清空', '压缩或交接', '自己的判断'],
)

scene(
    id='p33',
    segment='选择怎样继续',
    title='暂停自检：把判断落回这一轮操作',
    lead='四道自检允许暂停作答：区分点名文件与读取正文；说明清空后所需任务和文件；需要事实原文时重读；用当前界面的读取与操作解释会话选择。不要求代理、token 数和请求项数。',
    html='<style>body[data-mode="slides"] #p33 .x-answer{display:none}body[data-mode="slides"] #p33 .p-qrow h3{font-size:24px}body[data-mode="slides"] #p33 .p-back-to{font-size:16px}</style><div class="p-qlist"><div class="p-qrow" data-reveal="0"><span class="p-n">1</span><div><h3>只点名 profile.md，正文什么时候进入？</h3><p class="x-answer">读取返回加入历史后</p><span class="p-back-to">回到 p22</span></div></div><div class="p-qrow" data-reveal="1"><span class="p-n">2</span><div><h3>改完再 /clear，下一轮要给什么？文件呢？</h3><p class="x-answer">重新说明任务、约束和文件；文件改动仍在</p><span class="p-back-to">回到 p27a</span></div></div><div class="p-qrow" data-reveal="2"><span class="p-n">3</span><div><h3>摘要只记经历已完成，怎样逐字核对？</h3><p class="x-answer">重读资料和页面代码，对照原文</p><span class="p-back-to">回到 p27</span></div></div><div class="p-qrow" data-reveal="3"><span class="p-n">4</span><div><h3>继续、清空、压缩或新建，依据是什么？</h3><p class="x-answer">说出自己会话里可见的读取或操作</p><span class="p-back-to">回到 p28</span></div></div></div>',
    steps=['文件正文', '清空以后', '原文依据', '会话理由'],
)

scene(
    id='p34',
    segment='选择怎样继续',
    title='带着这份内容，进入审查与风格调整',
    lead='本轮用人提供的资料补齐主页，查看页面和 build，再看规则、文件返回和对话历史如何进入请求。清空开始新对话，压缩用摘要承接历史，项目文件仍可读取。下一节先审内容与范围、保存 homepage-v1，再参考主页改风格。',
    html='<div class="p-grid" style="--n:2;gap:16px"><div class="p-box" data-role="ok" data-reveal="0"><h3>这一轮</h3><p>个人内容已呈现<br>页面与 build 已看过</p></div><div class="p-box" data-role="us" data-reveal="1"><h3>下一节</h3><p>审内容和范围<br>保存 homepage-v1<br>参考主页改风格</p></div></div><div class="p-bar is-light" data-reveal="1">继续使用这一轮的成果</div>',
    steps=['收住本轮', '交接下一节'],
)

lesson.write()
