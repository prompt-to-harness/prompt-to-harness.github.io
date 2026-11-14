#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""5.5 做着做着，还有哪些招数可以带走：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch05/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。
八页均为只看、不跟做的非实操页；演示片段与截图待按录制版本核验后再嵌入。不预写命令回答、插件输出或技能名。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, chapter_map, ref  # noqa: E402

lesson = Lesson(
    __file__, "5.5", "做着做着，还有哪些招数可以带走",
    summary="前四节把功能做完之后，只看一组可带走的 Vibe Coding 招数；不必今天安装插件，也不作为进入第 6 章的门禁。",
)
scene = lesson.scene


# ---------- 开篇 ----------
scene(
    id="p41", segment="开篇", layout="lesson-cover",
    label="做着做着，还有哪些招数可以带走", title="还有哪些招数可以带走？",
    lead="5.1 至 5.4 已经留下通过本章验收的 JSON Diff 与检查点。做着做着，还有哪些招数可以带走？只看不跟做，也不是进入第 6 章的判断门禁。",
    html=(
        chapter_map(5)
        + '<div class="p-bar is-light" data-reveal="1" style="margin-top:22px">5.1 至 5.4 留下：<b>通过本章验收的 JSON Diff、Review 结果和本地检查点</b></div>'
        + '<div class="p-bar" data-reveal="2" style="margin-top:14px">本节只看做着做着就能用的招数：不冲乱主会话、把对话分出去、按画面改、压缩上下文、先生成再改的脚手架，再看一个官方插件。不跟做，不是进第 6 章的门禁</div>'
    ),
    steps=["本章位置", "5.1 至 5.4 留下什么", "本节要看什么"],
)


# ---------- 侧聊 ----------
scene(
    id="p42", segment="侧聊",
    label="正在做一件事的时候，想问一个局部问题，怎样不冲乱主会话",
    title="正在做一件事的时候，想问一个局部问题，怎样不冲乱主会话？",
    lead="主会话正在实现时，也可以把一句报错或某个 API 问到旁边。这一页只看「主会话还在、局部问题被问到旁边」这一现象，不展开命令百科。",
    html=(
        '<style>'
        '#p42 .p42-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}'
        '#p42 .p42-row .p-box h3{font-size:22px;margin:8px 0 0}'
        '</style>'
        '<div class="p42-row">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">主会话</span>'
        '<h3>正在实现</h3>'
        '<p>这是正在进行的那条对话，先不要把旁问写进去</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">侧聊</span>'
        '<h3><code>/side</code>（CLI 里也写作 <code>/btw</code>）</h3>'
        '<p>把一句报错或某个 API 问到旁边，侧聊给出局部回答</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">主记录保持连续。这是本节最实用、也最先看的机关，不必额外安装</div>'
        '<p class="source-note">课程自绘示意，用来说明侧聊和主会话的关系，不是产品界面；演示片段待按录制版本核验后嵌入，不预写这次侧聊的回答</p>'
    ),
    steps=["主会话还在", "问到侧聊", "主记录保持连续"],
    refs=[
        ref("Slash commands", "https://learn.chatgpt.com/docs/reference/slash-commands", "官方说明"),
        ref("Developer commands", "https://learn.chatgpt.com/docs/developer-commands", "官方说明"),
    ],
)


# ---------- 把对话分出去 ----------
scene(
    id="p43", segment="把对话分出去",
    label="想换一种写法试试看，原来的对话怎么办",
    title="想换一种写法试试看，原来的对话怎么办？",
    lead="想换一种写法试试看时，可以把当前对话分出去。原来的记录还在。不要在这里展开 Worktree，那是第 7 章的正课。",
    html=(
        '<style>'
        '#p43 .p43-row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr) minmax(0,.95fr);gap:20px;margin-top:4px;align-items:stretch}'
        '#p43 .p43-row .p-box h3{font-size:22px;margin:8px 0 0}'
        '</style>'
        '<div class="p43-row">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">当前对话</span>'
        '<h3>这条记录还在</h3>'
        '<p>不是问一个局部问题，而是想换一种写法试试看</p></div>'
        '<div class="p-box" data-role="agent" data-reveal="1"><span class="p-tag" data-role="agent">/fork</span>'
        '<h3>复制到新会话</h3>'
        '<p>或一个新的工作副本入口，用来试另一种实现</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="2"><span class="p-tag" data-role="ctx">原来的记录</span>'
        '<h3>还在原来的位置</h3>'
        '<p>用来回答「不如换个写法看看」</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px"><code>/fork</code> 也可以复制到 worktree；<code>/worktree</code> 是在新的 Git worktree 里跑对话。深讲留给第 7 章，这里不展开隔离实验</div>'
        '<p class="source-note">课程自绘示意，不是产品界面；不预写分出去之后的实现结果，演示片段待按录制版本核验后嵌入</p>'
    ),
    steps=["当前对话", "用 /fork 分出去", "原记录还在"],
)


# ---------- 按画面改 ----------
scene(
    id="p44", segment="按画面改",
    label="实现做到一半时，怎样按眼前的画面改界面",
    title="实现做到一半时，怎样按眼前的画面改界面？",
    lead="讲的是实现做到一半时怎么用。生活场景的入门用法仍留第 1 章。请对照这两种用法。",
    html=(
        '<style>'
        '#p44 .p44-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}'
        '#p44 .p44-row .p-box h3{font-size:22px;margin:8px 0 0}'
        '</style>'
        '<div class="p44-row">'
        '<div class="p-box" data-role="ctx" data-reveal="0"><span class="p-tag" data-role="ctx">第 1 章</span>'
        '<h3>把截图、文件交给 AI 看</h3>'
        '<p>生活场景的入门用法，门槛更低，仍留在第 1 章</p></div>'
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">本节</span>'
        '<h3>对着当前界面截一张图，按画面改</h3>'
        '<p>实现做到一半时，把眼前的画面贴进对话，让它按画面修改</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">本节只讲后一种，不再把截图用法当作入门介绍</div>'
        '<p class="source-note">课程自绘对照，不是一次实际修改；若录制版本做不到把图片贴进对话并按画面修改，该项从演示里拿掉，改成口播加官方说明。不预写本次修改结果，演示片段待核验后嵌入</p>'
    ),
    steps=["第 1 章的入门用法", "做到一半按画面改", "本节只讲后一种"],
)


# ---------- 压缩上下文 ----------
scene(
    id="p45", segment="压缩上下文",
    label="实现做到一半、对话已经很长了，怎样压缩当前对话的上下文，继续往下做",
    title="实现做到一半、对话已经很长了，怎样继续往下做？",
    lead="实现做到一半、对话已经很长了，怎样压缩当前对话的上下文，继续往下做？官方说明是：压缩当前对话的上下文。不预写压缩后的摘要长什么样。",
    html=(
        '<style>'
        '#p45 .p45-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}'
        '#p45 .p45-row .p-box h3{font-size:22px;margin:8px 0 0}'
        '</style>'
        '<div class="p45-row">'
        '<div class="p-box" data-role="us" data-reveal="0"><span class="p-tag" data-role="us">做到一半</span>'
        '<h3>实现对话已经很长</h3>'
        '<p>还要在这条对话里继续往下推，不是另开一个新功能</p></div>'
        '<div class="p-box" data-role="ctx" data-reveal="1"><span class="p-tag" data-role="ctx">/compact</span>'
        '<h3>压缩当前对话的上下文</h3>'
        '<p>官方说明是 Compact the current chat’s context</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">压缩之后，仍在原来这条对话里继续做。这里不写出压缩后的摘要长什么样</div>'
        '<p class="source-note">课程自绘示意，不是一次实际压缩结果；演示片段待按录制版本核验后嵌入</p>'
    ),
    steps=["对话已经很长", "用 /compact 压缩上下文", "继续往下做"],
    refs=[
        ref("Slash commands", "https://learn.chatgpt.com/docs/reference/slash-commands", "官方说明"),
    ],
)


# ---------- 生成脚手架 ----------
scene(
    id="p46", segment="生成脚手架",
    label="怎样先给当前项目生成一份 AGENTS.md 脚手架，再改它",
    title="怎样先生成一份 AGENTS.md 脚手架，再改它？",
    lead="怎样先给当前项目生成一份 AGENTS.md 脚手架，再改它？第 2 章已经讲过怎么写这份文件，这里只看「先生成再改」。",
    html=(
        '<style>'
        '#p46 .p46-row{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:4px;align-items:stretch}'
        '#p46 .p46-row .p-box h3{font-size:22px;margin:8px 0 0}'
        '</style>'
        '<div class="p46-row">'
        '<div class="p-box" data-role="agent" data-reveal="0"><span class="p-tag" data-role="agent">/init</span>'
        '<h3>生成 AGENTS.md 脚手架</h3>'
        '<p>官方说明是 Generate an AGENTS.md scaffold for the current project</p></div>'
        '<div class="p-box" data-role="us" data-reveal="1"><span class="p-tag" data-role="us">然后</span>'
        '<h3>先生成，再改</h3>'
        '<p>第 2 章已经讲过怎么写这份文件，这里不把写法再讲一遍</p></div>'
        '</div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:14px">同一页带一句：<code>/project</code> 是给新对话选择项目，不必单开一页</div>'
        '<p class="source-note">课程自绘示意，不预写生成出来的文件内容；演示片段待按录制版本核验后嵌入</p>'
    ),
    steps=["用 /init 生成脚手架", "先生成，再改", "带一句 /project"],
    refs=[
        ref("Slash commands", "https://learn.chatgpt.com/docs/reference/slash-commands", "官方说明"),
    ],
)


# ---------- 官方插件 ----------
scene(
    id="p47", segment="官方插件",
    label="官方插件里，有什么好玩、又和前面做网页不一样的东西",
    title="官方插件里，有什么好玩、又和前面做网页不一样的东西？",
    lead="技巧讲完后，只深看一个官方插件。用代码做视频，和前面做网页、改开源仓库的感觉都不同。不要求安装，也不在课上新建项目。",
    html=(
        '<div class="p-bar is-light" data-reveal="0">用 <code>/plugins</code> 打开官方目录，只深看一个插件</div>'
        '<div class="p-box" data-role="tool" data-reveal="1" style="margin-top:12px;padding:12px 20px"><span class="p-tag" data-role="tool">首选</span>'
        '<h3 style="font-size:22px;margin:8px 0 0">Remotion 的官方 Codex 插件</h3>'
        '<p>用代码做视频。预先审查过的示例用 <code>$技能名</code> 显式调用，点到为止；不要求安装，也不在课上新建项目。若教学账号不可用，改用 Build Web Apps 的界面设计部分，避开 4.6 已提过的浏览器测试；Figma 不作为首选</p></div>'
        '<div class="p-bar" data-reveal="2" style="margin-top:12px">展示前先看来源和权限，再决定用不用；不重讲 Skill / Plugin 概念</div>'
        '<p class="source-note">具体技能名与插件输出以录前审查为准，不在这里写定；演示片段待按录制版本核验后嵌入</p>'
    ),
    steps=["打开官方目录", "只深看 Remotion", "先看来源和权限"],
    refs=[
        ref("Plugins", "https://learn.chatgpt.com/docs/plugins", "官方说明"),
        ref("Remotion 的官方 Codex 插件", "https://www.remotion.dev/docs/ai/codex-plugin", "插件说明"),
    ],
)


# ---------- 小结 ----------
scene(
    id="p48", segment="小结",
    label="带着什么离开第 5 章", title="带着什么离开第 5 章？",
    lead="这些招数可以带走，不必今天安装插件。请看这一节留下什么，以及怎样结束第 5 章。5.5 不是进入第 6 章的判断门禁。",
    html=(
        '<div class="p-sketch" style="align-items:start">'
        '<div data-reveal="0"><h3 style="text-align:center">可带走的招数</h3>'
        '<ul class="p-exits" style="gap:6px">'
        '<li class="is-pass"><span><code style="white-space:nowrap">/side</code>（CLI 里也写作 <code style="white-space:nowrap">/btw</code>）</span></li>'
        '<li class="is-pass"><span><code style="white-space:nowrap">/fork</code></span></li>'
        '<li class="is-pass"><span>把界面截图贴进对话，按画面改</span></li>'
        '<li class="is-pass"><span><code style="white-space:nowrap">/compact</code> 压缩上下文</span></li>'
        '<li class="is-pass"><span><code style="white-space:nowrap">/init</code> 先生成再改</span></li>'
        '<li class="is-pass"><span>一个官方插件：Remotion，或备选的界面设计部分</span></li>'
        '</ul></div>'
        '<div data-reveal="1"><h3>怎样带走</h3>'
        '<div class="p-star" style="width:300px;font-size:22px">这些招数可以带走<br>不必今天安装插件</div></div>'
        '<div class="p-next" data-reveal="2"><h3>本章到此结束</h3><div class="p-box" data-role="us">'
        '<h3>交给第 6 章的</h3>'
        '<p>5.4 已留下的验收结果。CR-01 仍留在第 6 章；5.5 不是进入第 6 章的判断门禁</p></div></div>'
        '</div>'
    ),
    steps=["可带走的招数", "不必今天安装", "本章到此结束"],
)

lesson.write()
