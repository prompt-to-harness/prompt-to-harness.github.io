#!/usr/bin/env python3
"""6.5 ChatGPT app 有哪些 trick 值得带走：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图、外部截图与重画图内联见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
已完成整节视觉重设计（含项目隔离对照、对话分支树、Chat Bar 浮窗示意、p45a 官方桌面工作台截图页、p46 定时任务隔离墙手绘图与 p48 手机 Remote 双通路手绘图）。
技巧页全部只看不跟做，不预写本次演示结果；未核验的项只留官方说明；不用「ChatGPT App」代指 Codex App。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import NARROW, Lesson, chapter_map, redrawn, ref, shot  # noqa: E402

lesson = Lesson(
    __file__, "6.5", "ChatGPT app 有哪些 trick 值得带走",
    summary="先与 5.5 的 Codex CLI 招数分清边界，只讲网页、桌面和手机上的 ChatGPT 应用本身；七条招数只看不跟做，课上只演示核验过的项。",
    prep=[
        "录制前按当前账号套餐、所在地区与客户端版本逐项核验七条能力；不可用或与 5.5 预留演示重叠的项直接留官方说明，不临场改用未证实操作。",
        "如需切真实应用窗口演示，先开启临时或演示专用空项目，遮盖个人历史对话标题、邮箱与私人文件。",
        "全程严守术语表：终端主入口称 Codex CLI，可选编码图形界面称 Codex App，不用「ChatGPT App」泛指后者。",
    ],
)
scene = lesson.scene


scene(
    id="p41", segment="开篇", layout="lesson-cover",
    label="ChatGPT app 有哪些 trick 值得带走",
    title="ChatGPT app 有哪些 trick 值得带走？",
    lead="6.4 已完成 CR-01 与真人 UAT；本节不改产品、不作第 7 章门禁，轻松看一组 ChatGPT 应用技巧",
    html=(
        chapter_map(5)
        + '<div class="p-pair" style="grid-template-columns:1fr auto 1fr;gap:18px;margin-top:16px" data-reveal="1">'
        '<div class="p-box" data-role="ctx" style="padding:12px 18px">'
        '<div class="p-head"><h3 style="font-size:24px">5.5 已经讲过</h3><span class="p-tag" data-role="ctx">终端主入口</span></div>'
        '<p style="font-size:19px"><b>Codex CLI</b> 里的编码招数（<code>/side</code>、<code>/fork</code>、按截图改界面等）</p></div>'
        '<div class="p-join"><b style="font-size:34px">⇄</b><span>职责<br>分开</span></div>'
        '<div class="p-box" data-role="tool" style="padding:12px 18px">'
        '<div class="p-head"><h3 style="font-size:24px">6.5 本节来看</h3><span class="p-tag" data-role="tool">只看不跟做</span></div>'
        '<p style="font-size:19px"><b>ChatGPT 应用</b>（网页 · 桌面 · 手机）；可选编码图形界面仍称 <b>Codex App</b></p></div></div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:10px;font-size:20px">七条招数按录制版本核验挑选：核验过的看现象，未核验的只留官方说明，不作第 7 章门禁</div>'
    ),
    steps=["本章位置", "与 5.5 及 Codex App 分清边界", "只看不跟做的挑选用规"],
)

scene(
    id="p42", segment="可以带走的招数",
    label="怎样把一件事单独放在一起，避免和别的聊天串掉",
    title="怎样把一件事单独装好、不串掉？",
    lead="把文件、指令和对话放进同一个「项目」里；需要隔离时打开「仅项目记忆」，避免和别的聊天串在一起。",
    html=(
        '<div class="p-pair" style="grid-template-columns:1.28fr auto 1fr;gap:18px;align-items:stretch">'
        '<div class="p-set is-solid" data-role="tool" data-reveal="0" style="padding:12px 18px 14px">'
        '<h3 style="font-size:23px;margin-bottom:8px">项目（Project）独立空间 '
        '<span class="p-chip" data-role="ok" data-reveal="1" style="margin-left:8px;font-size:16px">开启：仅项目记忆</span></h3>'
        '<div class="p-items" style="gap:6px">'
        '<div class="p-item" style="font-size:18.5px;padding:5px 12px"><b>专属指令</b> · 只对这一件事生效的口吻与输出约定</div>'
        '<div class="p-item" style="font-size:18.5px;padding:5px 12px"><b>项目文件</b> · 背景文档、表格与参考资料集中存放</div>'
        '<div class="p-item is-picked" style="font-size:18.5px;padding:5px 12px"><b>内部对话</b> · 同项目内多轮聊天可彼此引用上下文</div>'
        '</div></div>'
        '<div class="p-join" data-reveal="1"><b style="font-size:36px;color:#D9481C">╫</b><span>记忆<br>隔离墙</span></div>'
        '<div class="p-box is-dashed" data-role="ctx" data-reveal="1" style="padding:14px 18px;display:flex;flex-direction:column;justify-content:center">'
        '<span class="p-tag" data-role="ctx" style="align-self:flex-start">项目外的其他聊天</span>'
        '<h3 style="font-size:23px">互不串味</h3>'
        '<p style="font-size:18.5px">外部日常闲聊习惯不带进来，项目内的阶段讨论也不外溢</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:8px;padding:7px 18px;font-size:19.5px">这是<b>项目内的定向隔离</b>，不是把整个账号的记忆一刀切关掉</div>'
        '<p class="source-note">结构示意；课上只演示核验过的项，未核验则只留官方说明，不预写本次项目里的文件清单</p>'
    ),
    steps=["把文件、指令与对话收进项目", "打开「仅项目记忆」立起隔离墙", "定向隔离不等于关掉全部记忆"],
    refs=[ref("ChatGPT 中的项目（Projects）", "https://help.openai.com/zh-hans-cn/articles/10169521-projects-in-chatgpt", "官方说明")],
)

scene(
    id="p43", segment="可以带走的招数",
    label="想另试一条路时，怎样不把主线带跑",
    title="想另试一条路时，怎样不把主线带跑？",
    lead="从一条回复点「在新对话中分支」：原主线还在，分出去的新对话用来试另一条路，正好呼应 6.3 的防止钻牛角尖。",
    html=(
        '<div class="p-flow" style="--n:3;column-gap:36px;row-gap:6px">'
        '<div class="p-node" data-role="ink" data-reveal="0" style="grid-column:2;padding:10px 14px">'
        '<span class="p-num">分岔起点</span><h3 style="font-size:23px;margin:2px 0 4px">主线第 3 轮回复</h3>'
        '<p style="font-size:17.5px">前文结论可用，想额外试另一种方案</p></div>'
        '<div class="p-fork" style="grid-column:1/4;--gap:36px;height:48px">'
        '<div class="l" data-reveal="1"><span>原对话继续</span></div>'
        '<div class="r" data-reveal="1"><span>在新对话中分支</span></div></div>'
        '<div class="p-node is-row2" data-role="ok" data-reveal="1" style="grid-column:1;padding:10px 14px">'
        '<h3 style="font-size:22px;margin:0 0 4px">主线稳在原地</h3>'
        '<p style="font-size:17.5px">不被试错指令污染，随时接着往下推</p></div>'
        '<div class="p-node is-row2" data-role="agent" data-reveal="1" style="grid-column:3;padding:10px 14px">'
        '<h3 style="font-size:22px;margin:0 0 4px">新对话独立试探</h3>'
        '<p style="font-size:17.5px">带齐前文另试一路，走不通直接关掉</p></div></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:10px;padding:7px 18px;font-size:19.5px">呼应 6.3 避坑：与其在无效路径上连续加指令硬推，不如从干净节点分出新对话</div>'
        '<p class="source-note">只看主线保留与分支独立现象，不预写分出去之后的回答，也不重复讲 6.3 避坑定义</p>'
    ),
    steps=["选定主线里的一条关键回复", "分出新对话：主线留稳、支线试错", "呼应 6.3：用分支代替原地硬推"],
)

scene(
    id="p44", segment="可以带走的招数",
    label="不必打开完整窗口时，怎样把眼前的画面问出去",
    title="不切完整窗口，怎样把眼前画面问出去？",
    lead="桌面版按 Option+Space 打开 Chat Bar，可直接截图提问；快捷键与入口以录制版本为准，不可用时只留官方说明。",
    html=(
        NARROW
        + '<div class="p-walk" style="grid-template-columns:1.2fr 1fr;gap:24px;align-items:center">'
        '<div class="p-page" data-reveal="0">'
        '<div class="p-page-bar"><i></i><i></i><i></i>当前正在阅读的文档或报错窗口（交互示意）</div>'
        '<div class="p-page-body" style="padding:16px 18px;background:#F8F6F0;font-weight:400">'
        '<div style="border:2px dashed #0F8A7A;background:#E0F3EF;border-radius:8px;padding:12px 14px;font-size:18.5px;color:#0B6B5F;font-weight:700">'
        '┌ 框选眼前这一块局部画面 ┐<span style="display:block;font-size:16px;font-weight:400;margin-top:4px;color:#243042">不必先切走当前工作窗口，也不用手动存图再上传</span></div>'
        '<div data-reveal="1" style="margin-top:12px;background:#243042;color:#fff;border-radius:999px;padding:9px 16px;display:flex;align-items:center;justify-content:space-between;font-size:18px">'
        '<span><code style="background:rgba(255,255,255,.16);padding:2px 8px;border-radius:6px;font-family:var(--p-mono)">Option + Space</code> 呼出 Chat Bar · 附图直问</span>'
        '<span style="background:#0F8A7A;padding:2px 10px;border-radius:999px;font-size:15px">发送 ↑</span></div>'
        '</div></div>'
        '<ol class="p-notes">'
        '<li data-reveal="0"><div><b>快捷键随叫随到</b><small>macOS 默认 <code>Option+Space</code>，Windows 以录制版为准</small></div></li>'
        '<li class="is-ok" data-reveal="1"><div><b>视线不离开当前屏幕</b><small>不必先切出完整主窗口，顺手把眼前画面问出去</small></div></li>'
        '<li class="is-risk" data-reveal="2"><div><b>不可用时只留官方说明</b><small>绝不临场改用未证实的替代手势，也不预写回答</small></div></li>'
        '</ol></div>'
        '<p class="source-note">桌面浮窗交互结构示意，不是某一次真实运行截图</p>'
    ),
    steps=["按快捷键呼出桌面 Chat Bar", "直接框选眼前画面发问", "守住核验边界：不可用只留官方说明"],
    refs=[ref("How to launch the Chat Bar", "https://help.openai.com/en/articles/9295241-how-to-launch-the-chat-bar", "官方说明")],
)

scene(
    id="p45", segment="可以带走的招数",
    label="Chat、Work 和 Codex，各适合干什么",
    title="Chat、Work 和 Codex，各适合干什么？",
    lead="问答用 Chat，长任务和成品用 Work，写代码用 Codex。只有桌面版 Work 才能用本地文件；应用内 Codex 要与 Codex CLI、Codex App 分清。",
    html=(
        '<div class="p-grid" style="--n:3;gap:16px">'
        '<div class="p-box" data-role="us" data-reveal="0" style="padding:14px 18px">'
        '<div class="p-head"><h3 style="font-size:25px">Chat</h3><span class="p-tag" data-role="us">日常问答</span></div>'
        '<p style="font-size:19px">短平快检索、概念追问与头脑风暴</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1" style="padding:14px 18px">'
        '<div class="p-head"><h3 style="font-size:25px">Work</h3><span class="p-tag" data-role="ctx">长任务与成品</span></div>'
        '<p style="font-size:19px">打磨文档、表格与多步材料；<b>只有桌面版 Work 才能用本地文件</b></p></div>'
        '<div class="p-box" data-role="agent" data-reveal="2" style="padding:14px 18px">'
        '<div class="p-head"><h3 style="font-size:25px">Codex</h3><span class="p-tag" data-role="agent">应用内编码</span></div>'
        '<p style="font-size:19px">ChatGPT 应用里的写代码入口，不是终端 <code>Codex CLI</code></p></div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:10px;padding:7px 18px;font-size:19px">云端与本机别选错；课程可选编码图形界面统一称 <b>Codex App</b>，与 5.5 重叠项不进本节正片</div>'
        '<p class="source-note">课上只演示核验过的项；不把名称混称为「ChatGPT App」</p>'
    ),
    steps=["日常问答用 Chat", "长任务与本机文件认准桌面版 Work", "写代码用 Codex，同时分清三套名字"],
    refs=[ref("ChatGPT Work and Codex", "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex", "官方说明")],
)

scene(
    id="p45a", segment="可以带走的招数", layout="evidence-scene",
    label="为什么桌面端名字这么容易叫混",
    title="为什么桌面端名字这么容易叫混？",
    lead="打开 OpenAI 官方桌面工作台页面：Projects、Codex 与文档成品已被合进同一个桌面窗口，更需要把课程里的名称叫准。",
    html=shot(
        "external/openai-chatgpt-desktop-workspace.png",
        "learn.chatgpt.com/codex/app · OpenAI — ChatGPT desktop app",
        "OpenAI 官方文档展示 ChatGPT 桌面端在同一工作台整合 Projects、Codex 与文档成品的界面截图",
        height=332,
        note="官方桌面端合流了项目、文档与 Codex；课程主线用 Codex CLI，可选界面叫 Codex App",
        reveal=0,
        note_reveal=1,
    ),
    steps=["看官方桌面工作台的合流界面", "合并之后更要把课程术语叫准"],
    refs=[
        ref("OpenAI 官方文档：ChatGPT desktop app", "https://learn.chatgpt.com/codex/app", "产品页面"),
    ],
)

scene(
    id="p46", segment="可以带走的招数",
    label="定时任务看起来安排好了，它一定能用到项目里的文件吗",
    title="定时任务建在项目里，能读项目文件吗？",
    lead="定时任务可以按时间运行，也可以按 Gmail、Slack、GitHub 等事件运行；但在项目里创建的任务，访问不到该项目里的文件。",
    html=redrawn(
        "gsd-workflow",
        "scheduled-task-wall",
        style="course",
        max_height=306,
        source="课程自绘：定时任务触发方式与同项目上传文件的访问隔离墙示意",
    ),
    steps=["按时间或外部事件自动触发", "课堂避坑：读不到同项目里的文件", "安排好了不等于运行时够得到材料"],
    refs=[ref("ChatGPT 中的定时任务", "https://help.openai.com/zh-hans-cn/articles/10291617-scheduled-tasks-in-chatgpt", "官方说明")],
)

scene(
    id="p47", segment="可以带走的招数",
    label="这次只想问完就走，怎样不留下、也不带进习惯设定",
    title="只想问完就走，怎样不留痕也不串习惯？",
    lead="打开临时对话（Temporary Chat）：默认不进历史，处于临时状态时不用于改进模型，开始前还可以选择不带个性化。",
    html=(
        NARROW
        + '<div class="p-claim" style="gap:30px;align-items:center">'
        '<div class="p-box" data-role="ink" data-reveal="0" style="padding:18px 20px">'
        '<span class="p-tag" data-role="ink">Temporary Chat</span>'
        '<h3 style="font-size:26px;margin:8px 0 8px">问完即走的单次空白对话</h3>'
        '<p style="font-size:19px;color:var(--p-muted)">适合做零散格式核对、独立小实验，或不想污染长期记忆的一次性发问</p></div>'
        '<ul class="p-checks" style="gap:9px">'
        '<li data-reveal="0" style="padding:9px 15px;font-size:20px"><div><b>默认不进入历史列表</b><small>关掉即收尾，不混进日常项目会话记录</small></div></li>'
        '<li data-reveal="1" style="padding:9px 15px;font-size:20px"><div><b>临时状态下不用于改进模型</b><small>适合边界清楚的单次排查与对照提问</small></div></li>'
        '<li data-reveal="2" style="padding:9px 15px;font-size:20px"><div><b>开始前可选「不带个性化」</b><small>把平时积累的口吻偏好与习惯设定一并摘干净</small></div></li>'
        '</ul></div>'
        '<p class="source-note">只看三层隐私与记忆边界，不预写本次临时对话内容</p>'
    ),
    steps=["打开临时对话：默认不进历史", "临时状态下不用于改进模型", "开聊前可选不带个性化"],
    refs=[ref("Temporary Chat 官方说明", "https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt", "官方说明")],
)

scene(
    id="p48", segment="可以带走的招数",
    label="手机里怎样接着看桌面上的任务？它和云端是同一条路吗",
    title="手机里接着看桌面任务，和云端同路吗？",
    lead="手机里的 Remote 页可以接着看桌面上的 Codex 任务，但它和云端任务不是同一条通路；课上只认清通路，不做成另一套编码课。",
    html=redrawn(
        "gsd-workflow",
        "mobile-remote-paths",
        style="course",
        max_height=334,
        source="课程自绘：手机 Remote 页承接桌面本地任务与云端独立任务通路对照",
    ),
    steps=["通路 A：手机 Remote 页接着看桌面任务", "通路 B：与云端任务分属两条不同通路", "课堂边界：认清通路即可，不做成编码课"],
)

scene(
    id="p49", segment="自检与收束",
    label="下面哪种说法是对的",
    title="产品边界自检：下面哪种说法是对的？",
    lead="这是产品与术语边界自检，不是项目验收：不要把 ChatGPT 应用和 Codex App 混叫，也不要把未核验的能力讲成已经会用。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先比较两种说法，自己选定再往下看</span>'
        '<div class="p-quiz" style="margin-top:12px">'
        '<div class="p-q" data-role="gate">'
        '<div class="p-say">说法 A：ChatGPT 应用和课程里的 Codex App 是同一个东西，平时混着叫也没关系</div>'
        '<span class="p-stamp" data-role="gate" data-reveal="1">✗ 名称混用</span>'
        '<div style="margin-top:8px;font-size:19px;color:#A8350F" data-reveal="1">不要用「ChatGPT App」代指 Codex App；未核验的能力也不能说成已经会用</div></div>'
        '<div class="p-q" data-role="ok">'
        '<div class="p-say">说法 B：ChatGPT 应用指网页、桌面和手机端产品；Codex App 指课程可选编码图形界面，名字与边界都要分开</div>'
        '<span class="p-stamp" data-role="ok" data-reveal="2">✓ 边界清楚</span>'
        '<div style="margin-top:8px;font-size:19px;color:#11652F" data-reveal="2">分清终端主入口、可选编码图形界面与日常应用入口，选工具才不踩空</div></div></div>'
        '<p class="source-note">产品边界自检，不作为本章退出门禁</p>'
    ),
    steps=["暂停比较两种说法", "说法 A：名称混用", "说法 B：边界清楚"],
)

scene(
    id="p50", segment="自检与收束",
    label="带着什么离开第 6 章", title="带着什么离开第 6 章？",
    lead="本章项目成果定格在 6.4 的 CR-01、验证记录与真人 UAT；第 7 章从 dependency-cruiser 独立仓库冷启动，6.5 不作门禁。",
    html=(
        '<div class="p-sketch">'
        '<div class="p-ribbon" data-reveal="0">第 6 章收官 · 社区 SDD 跑通闭环，应用招数看清边界</div>'
        '<div data-reveal="0"><h3 style="text-align:center">6.5 带走的</h3>'
        '<div class="p-star" style="width:224px;font-size:21px">看懂七招的<br>隔离墙与通路边界<br>不必今天全配齐</div></div>'
        '<div data-reveal="1"><h3>本章项目定格在 6.4</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass" style="font-size:21px">完成 CR-01 的 JSON Diff</li>'
        '<li class="is-pass" style="font-size:21px">失败与通过记录 + 真人 UAT</li>'
        '<li class="is-pass" style="font-size:21px">不把 <code>.planning/</code> 带去第 7 章</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一章</h3><div class="p-box" data-role="us">'
        '<h3>第 7 章 · 项目的 Harness</h3>'
        '<p>从 dependency-cruiser 独立仓库冷启动，建立可复用的上下文与检查入口</p></div></div>'
        '</div>'
    ),
    steps=["看清边界带走招数", "本章项目定格在 6.4", "第 7 章独立仓库冷启动"],
)

lesson.write()
