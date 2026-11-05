#!/usr/bin/env python3
"""4.1 接手大项目，还能边聊边改吗：页面源，生成 lesson.js；连贯内容以分镜为准。

分镜见 ../STORYBOARD.md；页面登记、章节地图与输出见 courseware/ch04/tools/lessonkit.py。
口播在 script.json；生成前先修改这些源文件。逐页表尚未讨论，本轮只建基线页 p02（p01 预留给开篇）。
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson, ref, repro  # noqa: E402

lesson = Lesson(__file__, "4.1", "接手大项目，还能边聊边改吗", summary="核对固定基线，用新人简报和最小用例认识已有工程，再由新增需求引出五层规格。")
scene = lesson.scene

UPSTREAM = "https://github.com/AykutSarac/jsoncrack.com"
RELEASE = "v5.0.0"
SHA = "e99288b4eff060dcd53428f2a3a5c2f28eecffa6"
BRANCH = "course/ch04-baseline"

# ---------- 固定起点 ----------
scene(
    id="p02", segment="固定起点",
    label="取得并核对基线", title="先拿到同一份起点",
    lead="课件给出上游仓库、Release 和完整 commit。依据它们取得副本，再核对手里的这一份是不是这一版。",
    html=(
        '<div style="display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:28px;align-items:start">'
        '<div class="p-matrix" data-reveal="0" style="grid-template-columns:minmax(0,.55fr) minmax(0,1.45fr)">'
        '<div class="is-head"><span>课件给出</span><span>内容</span></div>'
        '<div><span>上游仓库</span><span>AykutSarac/jsoncrack.com</span></div>'
        f'<div><span>Release</span><span>{RELEASE}</span></div>'
        f'<div class="is-key"><span>完整 commit</span><span style="font-family:var(--p-mono);font-size:17px;overflow-wrap:anywhere">{SHA}</span></div>'
        '</div>'
        '<div class="p-matrix" data-reveal="1" style="grid-template-columns:minmax(0,.6fr) minmax(0,1.4fr)">'
        '<div class="is-head"><span>本地核对</span><span>应该是</span></div>'
        '<div><span>HEAD</span><span>等于完整 commit</span></div>'
        f'<div><span>分支</span><span>{BRANCH}</span></div>'
        '<div><span>工作区</span><span>干净，没有未提交的改动</span></div>'
        '</div></div>'
        '<div class="p-bar is-light" data-reveal="2" style="margin-top:22px">Release 帮助识别版本，<b>完整 commit</b> 固定实际使用的代码；后面的结论都对应这一版</div>'
    ),
    steps=["课件给出的三项信息", "取得副本并核对", "为什么固定这一版"],
    refs=[
        ref("JSON Crack 上游仓库", UPSTREAM, "基线"),
        ref(f"Release {RELEASE}", f"{UPSTREAM}/releases/tag/{RELEASE}", "基线"),
        ref("完整 commit", f"{UPSTREAM}/commit/{SHA}", "基线"),
    ],
    repro=repro([
        ("在已有项目之外准备一个空目录，在这里克隆上游仓库并进入仓库目录。", f"git clone {UPSTREAM}.git\ncd jsoncrack.com"),
        (f"确认 Release 标签指向课件给出的完整 commit。输出应为 {SHA}。", f"git rev-parse '{RELEASE}^{{commit}}'"),
        ("从完整 commit 创建本地课程分支。main 会继续前进，标签也可能被移动；完整 commit 指向的代码不会变，所以分支从它创建。", f"git checkout -b {BRANCH} {SHA}"),
        (f"逐项核对：第一行等于完整 commit；第二行是 {RELEASE}，说明当前提交正好是这个 Release；第三行是刚建的课程分支；最后一条没有输出，表示工作区干净。", "git rev-parse HEAD\ngit describe --tags --exact-match\ngit branch --show-current\ngit status --short"),
        ("把核对结果记下来：上游地址、Release、完整 commit、课程分支、工作区状态和核对日期。后面的启动方式、目录介绍和调查结论都对应这份记录。", None),
        ("本地已有这个仓库且做过修改时，保留原目录，不要 reset 或丢弃改动；换一个目录另克隆一份练习副本，再从第 2 步做起。", f"git clone {UPSTREAM}.git jsoncrack-ch04\ncd jsoncrack-ch04"),
    ], note="本流程只取得并核对代码，不安装依赖、不启动；环境要求与启动在后面说明。2026-11-04 在讲师机器上探索核验过第 1–4 步，结果与上面的说明一致；第 6 步未执行，整套流程尚未录制排练。", label="实验说明：取得并核对固定基线"),
)

lesson.write()
