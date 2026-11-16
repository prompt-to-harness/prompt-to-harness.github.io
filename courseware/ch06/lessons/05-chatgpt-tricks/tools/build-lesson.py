#!/usr/bin/env python3
"""6.5 ChatGPT app 有哪些 trick 值得带走：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch06/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
技巧页只看不跟做；不预写本次演示结果或截图。未核验的项只留官方说明。不要用「ChatGPT App」代指 Codex App。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map, ref  # noqa: E402

lesson = Lesson(
    __file__, "6.5", "ChatGPT app 有哪些 trick 值得带走",
    summary="先和 5.5 分开，只讲 ChatGPT 应用本身，只看不跟做；七条招数先留在清单里，课上只演示核验过的项。",
)
scene = lesson.scene


scene(
    id="p41", segment="开篇", layout="lesson-cover",
    label="ChatGPT app 有哪些 trick 值得带走",
    title="ChatGPT app 有哪些 trick 值得带走？",
    lead="6.4 已经完成 CR-01 与 UAT，本节不再改产品，也不再复用那些测试证据。这里的 ChatGPT app，指的是网页、桌面和手机上的 ChatGPT 应用本身。",
    html=(
        chapter_map(5)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:22px">和 5.5 分开：那边是 <b>Codex CLI</b> 招数；这边是 <b>ChatGPT 应用</b>（网页、桌面、手机），不要用「ChatGPT App」代指 Codex App</div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:14px">只看不跟做。课上只演示核验过的项，也不是进入第 7 章的门禁</div>'
    ),
    steps=["本章位置", "先和 5.5 分开", "只看不跟做"],
)

scene(
    id="p42", segment="可以带走的招数",
    label="怎样把一件事单独放在一起，避免和别的聊天串掉",
    title="怎样把一件事单独放在一起，避免和别的聊天串掉？",
    lead="把文件、指令和对话放进同一个项目里。需要隔离时打开「仅项目记忆」，避免和别的聊天串在一起。这是项目内的隔离，不是把所有记忆都关掉。",
    html=(
        '<div class="p-bar" data-reveal="0">把文件、指令和对话放进同一个「项目」里</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">需要隔离时，打开「仅项目记忆」，避免和别的聊天串在一起</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">这是项目内的隔离，不是把所有记忆都关掉</div>'
        '<p class="source-note">课上只演示核验过的项；未核验则只留官方说明，不预写本次项目里的文件清单</p>'
    ),
    steps=["放进同一个项目", "需要时打开仅项目记忆", "这不是关掉全部记忆"],
    refs=[ref("ChatGPT 中的项目", "https://help.openai.com/zh-hans-cn/articles/10169521-projects-in-chatgpt", "官方说明")],
)

scene(
    id="p43", segment="可以带走的招数",
    label="想另试一条路时，怎样不把主线带跑",
    title="想另试一条路时，怎样不把主线带跑？",
    lead="从一条回复「在新对话中分支」。主线还在，分出去的那条用来试另一条路。这和 6.3 的钻牛角尖是同一类判断。",
    html=(
        '<div class="p-bar" data-reveal="0">从一条回复「在新对话中分支」</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">主线还在，分出去的那条用来另试一条路</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">这和 6.3 的钻牛角尖是同一类判断：与其在无效路径上连续加指令，不如把尝试放到新对话里</div>'
        '<p class="source-note">只看现象，不预写分出去之后的回答，也不把 6.3 的避坑再讲一遍</p>'
    ),
    steps=["在新对话中分支", "主线还在", "和钻牛角尖是同一类判断"],
)

scene(
    id="p44", segment="可以带走的招数",
    label="不必打开完整窗口时，怎样把眼前的画面问出去",
    title="不必打开完整窗口时，怎样把眼前的画面问出去？",
    lead="桌面版可以用 Option+Space 打开 Chat Bar，直接截图提问。快捷键以录制版本为准。若桌面版或该入口不可用，只留官方说明，不临场换未证实的替代操作。",
    html=(
        '<div class="p-bar" data-reveal="0">桌面版用 Option+Space 打开 Chat Bar。Windows 上的对应快捷键，以录制版本为准</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">可以直接截图提问，不必先打开完整窗口</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">只看「不必先打开完整窗口，也能把眼前的画面问出去」</div>'
        '<p class="source-note">若该入口不可用，只留官方说明；不预写本次提问结果</p>'
    ),
    steps=["打开 Chat Bar", "直接截图提问", "不必先打开完整窗口"],
    refs=[ref("How to launch the Chat Bar", "https://help.openai.com/en/articles/9295241-how-to-launch-the-chat-bar", "官方说明")],
)

scene(
    id="p45", segment="可以带走的招数",
    label="Chat、Work 和 Codex，各适合干什么",
    title="Chat、Work 和 Codex，各适合干什么？",
    lead="问答用 Chat，长任务和成品用 Work，写代码用 Codex。只有桌面版 Work 才能用本地文件；云端和本机不要选错。这里的 Codex 是应用里的编码入口，要和课程里的 Codex CLI、Codex App 分清。",
    html=(
        '<div class="p-grid" style="--n:3">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">Chat</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">问答</h3></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">Work</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">长任务和成品</h3>'
        "<p>只有桌面版 Work 才能用本地文件</p></div>"
        '<div class="p-box" data-role="agent" data-reveal="2"><span class="p-tag" data-role="agent">Codex</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">写代码</h3>'
        "<p>这是应用里的编码入口，不是 Codex CLI，也不是 Codex App</p></div></div>"
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:14px">云端和本机不要选错。与 5.5 预留演示重叠的项，不进本节正片</div>'
        '<p class="source-note">课上只演示核验过的项；不把名称混称为「ChatGPT App」</p>'
    ),
    steps=["问答用 Chat", "长任务用 Work", "写代码用 Codex"],
    refs=[ref("ChatGPT Work and Codex", "https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex", "官方说明")],
)

scene(
    id="p46", segment="可以带走的招数",
    label="定时任务看起来安排好了，它一定能用到项目里的文件吗",
    title="定时任务看起来安排好了，它一定能用到项目里的文件吗？",
    lead="定时任务可以按时间运行，也可以按 Gmail、Slack、GitHub 等事件运行。课堂上要看清一个容易忽略的限制：在项目里创建的任务，访问不到该项目里的文件。",
    html=(
        '<div class="p-bar" data-reveal="0">定时任务可以按时间运行，也可以按 Gmail、Slack、GitHub 等事件运行</div>'
        '<div class="p-bar" data-reveal="1" style="margin-top:14px">课堂里的坑：在项目里创建的任务，<b>访问不到该项目里的文件</b></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:12px">看起来已经安排好了，其实它够不到你以为它能用的材料</div>'
        '<p class="source-note">未核验则只留官方说明，不编造事件源清单或本次任务结果</p>'
    ),
    steps=["可以按时间或事件运行", "项目里的任务够不到项目文件", "安排好了不等于用得到"],
    refs=[ref("ChatGPT 中的定时任务", "https://help.openai.com/zh-hans-cn/articles/10291617-scheduled-tasks-in-chatgpt", "官方说明")],
)

scene(
    id="p47", segment="可以带走的招数",
    label="这次只想问完就走，怎样不留下、也不带进习惯设定",
    title="这次只想问完就走，怎样不留下、也不带进习惯设定？",
    lead="打开临时对话。默认不进入历史；处于临时状态时，对话不用于改进模型。开始前还可以选择不带个性化。",
    html=(
        '<div class="p-bar" data-reveal="0">打开临时对话，默认不进入历史</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">处于临时状态时，对话不用于改进模型</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">开始前还可以选择不带个性化。这次只想问完就走，不要留下，也不要带进习惯设定</div>'
        '<p class="source-note">只看边界，不预写本次对话内容</p>'
    ),
    steps=["打开临时对话", "不用于改进模型", "还可以不带个性化"],
    refs=[ref("Temporary Chat", "https://help.openai.com/en/articles/8914046-temporary-chat-in-chatgpt", "官方说明")],
)

scene(
    id="p48", segment="可以带走的招数",
    label="手机里怎样接着看桌面上的任务？它和云端是同一条路吗",
    title="手机里怎样接着看桌面上的任务？它和云端是同一条路吗？",
    lead="手机里的 Remote 页可以接着看桌面上的 Codex 任务。它和云端任务不是同一条通路。不把这一页做成另一套编码课。",
    html=(
        '<div class="p-bar" data-reveal="0">手机里的 Remote 页，可以接着看桌面上的 Codex 任务</div>'
        '<div class="p-bar is-light" data-reveal="1" style="margin-top:12px">它和云端任务不是同一条通路</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">只点到「能接着看」和「不是同一条通路」，不把手机演示做成另一套编码课</div>'
        '<p class="source-note">未核验则只留说明，不猜测它能看到哪些状态，也不预写本次界面结果</p>'
    ),
    steps=["手机 Remote 页", "不是同一条通路", "不做成另一套编码课"],
)

scene(
    id="p49", segment="自检与收束",
    label="下面哪种说法是对的",
    title="下面哪种说法是对的？",
    lead="这是边界自检，不是项目验收。不要把 ChatGPT 应用和 Codex App 叫成同一个东西，也不要把未核验的能力讲成已经会用。",
    html=(
        '<span class="p-pause" data-reveal="0">暂停 · 先自己判断，再往下看</span>'
        '<div class="p-qlist">'
        '<div class="p-qrow"><span class="p-n">1</span><div>'
        "<h3>ChatGPT 应用和课程里的 Codex App 是同一个东西，可以混着叫</h3>"
        '<div data-reveal="1"><p>不对。不要用「ChatGPT App」代指 Codex App，也不要把未核验的能力讲成已经会用</p></div></div></div>'
        '<div class="p-qrow"><span class="p-n">2</span><div>'
        "<h3>ChatGPT 应用是网页、桌面和手机上的产品；Codex App 是课程里可选的编码界面，不要用前者代指后者</h3>"
        '<div data-reveal="2"><p>对。名字要分开，边界也要分开</p></div></div></div>'
        "</div>"
        '<p class="source-note">这是产品边界自检，不是项目完成判断</p>'
    ),
    steps=["两种说法", "第一种", "第二种"],
)

scene(
    id="p50", segment="自检与收束",
    label="带着什么离开第 6 章", title="带着什么离开第 6 章？",
    lead="本章项目成果停在 6.4 的 CR-01、证据和 UAT。第 7 章从独立仓库冷启动。6.5 不是进入第 7 章的门禁。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">带走的</h3>'
        '<div class="p-star" style="width:300px;font-size:22px">一组已经看懂边界的招数<br>不必今天全部配置</div></div>'
        '<div data-reveal="1"><h3>本章停在</h3><ul class="p-exits" style="gap:10px">'
        '<li class="is-pass">6.4 完成的 CR-01</li>'
        '<li class="is-pass">失败与通过证据、人工 UAT</li>'
        '<li class="is-pass">不把 GSD 工作区带进第 7 章</li></ul></div>'
        '<div class="p-next" data-reveal="2"><h3>下一章</h3><div class="p-box" data-role="us">'
        "<h3>第 7 章从独立仓库冷启动</h3>"
        "<p>6.5 不是进入第 7 章的门禁。不要把 CR-01 或工作区做成预告页</p></div></div>"
        "</div>"
    ),
    steps=["带走的招数", "本章停在 6.4", "第 7 章冷启动"],
)

lesson.write()
