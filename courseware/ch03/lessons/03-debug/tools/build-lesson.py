#!/usr/bin/env python3
"""Build the seven slides for 3.3 using the chapter player."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[3] / "tools"))
from lessonkit import Lesson  # noqa: E402

lesson = Lesson(
    __file__, "3.3", "修改 Skill，并用它开发躲避游戏",
    summary="从同一个参考游戏生成两份 Skill，再用同一个开发任务核对实际复用了什么。",
)

def link(target, label):
    return f'<a href="evidence/{target}" target="_blank" rel="noopener">{label} ↗</a>'


def wrap(body, links):
    return '<div class="skill-slide">' + body + '<nav class="skill-evidence" aria-label="本页材料">' + links + '</nav></div>'


lesson.scene(
    id="skill-inputs", segment="生成与审阅", label="两种复用要求",
    title="同一款翻牌游戏，两种复用要求", lead="共用截图、源码和可见开发对话，在独立会话中生成",
    html=wrap(
        '<div class="skill-inputs"><figure class="skill-reference"><img src="evidence/reference.png" alt="紫色翻牌游戏，数据栏位于卡片上方"><figcaption>同一作品：截图、源码、开发对话</figcaption></figure>'
        '<div class="skill-requests" data-reveal="1"><div class="p-box" data-role="agent"><h3>整页模板组</h3><p>标题、横排 HUD、居中场地、结算浮层</p><strong>换玩法时，默认保留页面布局</strong></div>'
        '<div class="p-box" data-role="agent"><h3>按需组件组</h3><p>主题、数据卡、结算浮层可单独用</p><strong>实时读数靠近场地，位置按玩法安排</strong></div></div></div>',
        link('index.html#reference', '参考作品原图')),
    steps=["参考作品", "并行生成"],
)

lesson.scene(
    id="skill-files", segment="生成与审阅", label="正文与配套文件",
    title="沿正文找到开发要用的文件", lead="正文交代起点，也交代配套文件怎样使用",
    html=wrap(
        '<div class="skill-files"><div class="skill-route"><h3>整页模板组</h3><div class="p-box"><b>SKILL.md</b><p>从整页模板起步，保留布局</p></div><div class="skill-connector">↓ 作为项目起点</div><div class="p-box" data-role="context"><code>templates/index.html</code><p>页面结构与配套交互</p></div></div>'
        '<div class="skill-route" data-reveal="1"><h3>按需组件组</h3><div class="p-box"><b>SKILL.md</b><p>正文给布局规则，再取用部件</p></div><div class="skill-resources"><div><div class="skill-connector">↓ 查阅具体方案</div><div class="p-box" data-role="context"><code>references/layout.md</code><p>玩法、布局形式与类名</p></div></div><div data-reveal="2"><div class="skill-connector">↓ 采用实现</div><div class="p-box" data-role="context"><code>stat-cards.css</code><p>可直接用的数据卡样式</p></div></div></div></div></div>',
        link('index.html#layout-template-skill', '正文与模板') + link('index.html#layout-component-reference', '布局 Reference') + link('index.html#layout-component-resource', '数据卡 CSS')),
    steps=["整页模板", "布局 Reference", "可用资源"],
)

lesson.scene(
    id="skill-games", segment="开发与试玩", label="同任务的两款游戏",
    title="同样三项数据，两种场地布局", lead="任务规定时间、得分、生命；截图均取开局约 3 秒",
    html=wrap(
        '<div class="skill-games"><figure><figcaption><b>整页模板组</b>　场地上方横排（截图上部）</figcaption><a href="evidence/layout-template.png" target="_blank" rel="noopener"><img src="evidence/layout-template.png" alt="整页组：时间、得分和生命横排在场地上方"></a></figure>'
        '<figure><figcaption><b>按需组件组</b>　场地右侧竖排（截图上部）</figcaption><a href="evidence/layout-components.png" target="_blank" rel="noopener"><img src="evidence/layout-components.png" alt="组件组：时间、得分和生命竖排在场地右侧"></a></figure></div>'
        '<div class="skill-trace" data-reveal="1"><span>正文与 Reference：布局建议</span><span>读取记录 + 成品侧栏类名</span><b>核对查阅与实际采用</b></div>',
        link('index.html#layout-run-hud', '读取记录与侧栏类名')),
    steps=["同状态画面", "回查布局依据"],
)

lesson.scene(
    id="skill-reuse", segment="开发与试玩", label="实际复用的交互",
    title="结算时看见实际复用了什么", lead="回到同次运行的画面与代码，核对这次带进项目的内容",
    html=wrap(
        '<div class="skill-reuse"><div data-reveal="1"><h3>整页模板组：页面与已有交互</h3><div class="skill-result-pair"><div class="p-box"><b>第一局结算</b><p>得分 10 · 切到静音</p></div><span>刷新<br>再玩 →</span><div class="p-box"><b>第二局结算</b><p>得分 0 · 最佳 10</p><p>仍为静音</p></div></div><p class="skill-proof">模板的保存逻辑接到了新游戏</p>'
        '<div class="skill-local-links">' + link('layout-first-result.jpg', '第一局') + link('layout-second-result.jpg', '刷新后') + link('index.html#layout-run-storage', '模板与项目代码') + '</div></div>'
        '<div><h3>按需组件组：同一个浮层，两次使用</h3><div class="p-box skill-overlay"><code>ResultOverlay</code><p>同一个实例，各自提供内容和按钮</p></div><div class="skill-result-pair"><div class="p-box"><b>开场</b><p>规则 + 开始按钮</p></div><div class="p-box"><b>结算</b><p>成绩 + 重开按钮</p></div></div><div class="skill-local-links">' + link('layout-components-opening.jpg', '开场') + link('layout-components-ending.jpg', '结算') + link('index.html#layout-run-overlay', '两处调用') + '</div></div></div>'
        '<div class="skill-takeaway" data-reveal="2">以组件组为基础，保留布局选择，再补事件音效</div>', ''),
    steps=["开场与结算", "刷新复验", "回看两份 Skill"],
)

lesson.scene(
    id="audio-goal", segment="音效迭代", label="新增与保留",
    title="保留组件的自由，补上事件音效", lead="以组件组为基础，先说清这次想改变什么",
    html=wrap(
        '<div class="audio-goal"><figure><img src="evidence/layout-components.png" alt="历史组件游戏：场地与侧边读数"><figcaption>组件组 · 按玩法组织界面</figcaption></figure>'
        '<div class="audio-intent"><section><h3>继续保留</h3><p>侧边读数 · 开场确认</p><p>限时收集进度 · 可见反馈 · 结算重开</p></section>'
        '<section class="audio-add"><h3>这次增加</h3><p>收集、受伤时有声音</p><p>玩家可以关闭音效</p></section></div></div>'
        '<div class="skill-takeaway">检查新增能力，也检查原来想保留的体验</div>',
        link('audio-iteration/index.html#versions','两组历史游戏') + link('audio-iteration/index.html#origin','声音来源')),
    steps=["新增与保留"],
)

lesson.scene(
    id="audio-package", segment="音效迭代", label="指导与资源",
    title="指导说明怎么用，资源提供实现", lead="实际修改：正文追加接入要求，组件包新增一个声音文件",
    html=wrap(
        '<div class="audio-package"><section class="audio-file"><header>SKILL.md · 新增指导</header><p>复制、导入声音资源</p><p>收集与受伤各调用一次</p><p>接入静音，保留可见反馈</p><p>复查声音与原有体验</p></section>'
        '<div class="audio-join">指向<br>→</div>'
        '<section class="audio-file"><header>purple-sound.js · 独立资源</header><code>sfx.pickup()<br>sfx.hurt()<br>setSoundEnabled(value)</code><p>来自历史整页游戏的声音实现</p><p>不依赖 HUD 的位置</p></section></div>'
        '<div class="audio-unchanged">原有三个 CSS 与 UI kit 未改　→　还要用新游戏检查结果</div>',
        link('audio-iteration/index.html#change','实际修改差异') + link('audio-iteration/index.html#generate','共同请求与采用记录')),
    steps=["审阅修改范围"],
)

lesson.scene(
    id="audio-result", segment="音效迭代", label="按结果取舍",
    title="按需求验收，再决定是否保留", lead="本轮对照：原组件版与音效修复版，使用同一条开发请求",
    html=wrap(
        '<div class="audio-verdict"><section><h3>新增能力</h3><p>收集、受伤有声音</p><p>静音后停止播放</p><b>本轮已接入</b></section>'
        '<section><h3>请求明确的保留项</h3><p>开场确认、侧栏布局</p><p>限时进度、视觉反馈、重开</p><b>主要约定体验仍在</b></section>'
        '<section class="audio-remaining"><h3>继续处理</h3><p>结算显示了文字标签</p><p>若交付触屏操作，须补实现</p><b>回到游戏继续修</b></section></div>'
        '<div class="skill-takeaway">保留这次 Skill 修改；换玩法后继续实际验证</div>',
        link('audio-iteration/before/index.html','原组件版') + link('audio-iteration/after/index.html','音效修复版') + link('audio-iteration/index.html#compare','前后实拍与结果')),
    steps=["对照需求取舍"],
)

lesson.write()

# Preserve legacy evidence anchors as routes to retained original records.
import subprocess
subprocess.run([sys.executable, str(Path(__file__).resolve().parents[5] / "tools/ch03-showcase/sync-process-links.py")], check=True)
