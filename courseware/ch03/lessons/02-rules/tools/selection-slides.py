"""3.2 第一部分的画面。连续口播仍从 script.json 读取。"""
from html import escape

SOURCE = 'https://github.com/openai/plugins/blob/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/'
IDS = ['p07', 'p07a', 'p07install', 'p07b', 'p07c', 'p07d']

def actions(*entries):
    return '<div class="selection-actions">' + ''.join(
        f'<a href="{escape(url, quote=True)}" target="_blank" rel="noopener">{escape(label)} ↗</a>' for label,url in entries) + '</div>'

def build(lesson, evidence):
    def add(id,title,lead,html,steps,refs=None):
        lesson.scene(id=id,segment='调用与选用',title=title,lead=lead,html=html,
                     steps=steps,refs=refs or [],layout='selection-slide')
    add('p07','下一次任务怎样用上检查方法',
        '开发者反复遇到计步、重开和再次交代。现在的做法是每次再交代一次。下一步才把检查要求、经验方法和保存做法收进 Skill，供 AI 下次选用；实际是否采用以及结果怎样，仍需检查。',
        '<div class="selection-question"><p class="question">下一次任务怎样<br>用上检查方法？</p>'
        '<p class="answer" data-reveal="1">把经验、方法和检查要求<br>整理成 AI 可以选用的 <strong>Skill</strong></p></div>',
        ['接住第一节的问题','用现成指导组织开发'])

    add('p07a','Game Studio 中的多份 Skill',
        'Game Studio Plugin 里并列着多份 Skill。本次圈出 game-playtest，沿“展开这份”看到同一份 SKILL.md。文件头放名称和描述，下面的正文区只标出位置。description 的英文是原文节选，完整描述到原文件里读。',
        '<div class="selection-plugin" role="group" aria-label="Game Studio Plugin，包含多份 Skill 与配套资料">'
        '<header class="selection-plugin-heading"><h3>Game Studio <span>Plugin</span></h3>'
        '<p>将多份 Skill 与配套资料打包在一起</p></header>'
        '<div class="selection-plugin-body"><div class="selection-skills">'
        '<p class="selection-label">其中的 Skill（摘选）</p>'
        '<div class="selection-skill"><code>game-studio</code><span>前期规划</span></div>'
        '<div class="selection-skill is-selected"><code>game-playtest</code><span>试玩 · 本次选用</span></div>'
        '<div class="selection-skill"><code>phaser-2d-game</code><span>2D 游戏实现</span></div>'
        '<p class="selection-other">… 其他 Skill</p></div>'
        '<div class="selection-expand" aria-label="展开 game-playtest 这份 Skill"><span>展开这份</span><b aria-hidden="true"></b></div>'
        '<div class="selection-skill-detail"><h3>game-playtest <span>· SKILL.md</span></h3>'
        '<p class="selection-example">本次任务：为翻牌整理人工试玩清单</p>'
        '<div data-reveal="1"><pre class="selection-code">name: game-playtest\ndescription: Run browser-game\nplaytests and frontend QA. …</pre>'
        '<p class="selection-field-help"><b>name</b> 识别它　<b>description</b> 说明何时用</p></div></div></div>'
        '<p class="selection-resources">包内还有配套资料 <code>references/</code> 与脚本 <code>scripts/</code></p></div>'
        + actions(('打开真实 SKILL.md 文件头',SOURCE+'skills/game-playtest/SKILL.md#L1-L4'),
                  ('插件目录',SOURCE.replace('/blob/','/tree/'))),
        ['Plugin 与其中的 Skill','名称与描述，切到真实文件'])

    add('p07install','先安装，再确认可以选用',
        '先核对来源、版本和配套文件。本次采用项目安装，保留引用关系，再在 Codex CLI 中确认可发现；下一页才调用并核对结果。',
        '<table class="selection-compare"><tbody>'
        '<tr><th>获得 Skill</th><td>核对来源与版本，保留配套资料<br>也可请 <code>$skill-installer</code> 从仓库安装</td></tr>'
        '<tr data-reveal="1"><th>放到哪里</th><td>本次项目：<code>.agents/skills/</code><br>个人跨项目：<code>~/.agents/skills/</code></td></tr>'
        '<tr data-reveal="2"><th>确认可用</th><td>项目内启动 Codex → <code>/skills</code><br>找到 Game Playtest，核对来自当前项目</td></tr>'
        '</tbody></table><p class="selection-note">保留 SKILL.md 与引用资源的相对位置；能找到之后，还要实际调用</p>'
        +actions(('本课安装操作与固定版本','install-skill.html'),('官方安装说明','https://learn.chatgpt.com/docs/build-skills')),
        ['来源与完整文件','项目与个人范围','切终端安装并检查发现'],
        refs=[{'text':'SkillsMP','url':'https://skillsmp.com/community','kind':'live'}])

    add('p07b','主动指定 game-playtest',
        '三条选择入口收成一条任务请求：指定的指导是 $game-playtest，本次规则写计步、重开和只给清单。画面不是终端仿画。选中后仍要核对返回是否符合本次规则。完整请求可以复制。',
        '<p class="selection-label">Codex CLI · 已准备好 Skill 的演示目录</p>'
        '<pre class="selection-code">/skills   →   List skills   →   Game Playtest</pre>'
        '<p class="selection-note">选中后，输入框出现 <code>$game-playtest</code></p>'
        '<div class="prompt"><div class="prompt-label">先复制请求 · 终端选中 Skill 后粘贴<button type="button" class="copy-button" data-selection-copy>复制请求</button></div><pre><code>'
        +escape(evidence['prompt'])+'</code></pre></div>'
        +actions(('调用演示与原始屏幕文字','selection-evidence.html#explicit')),
        ['选择、提交，并核对读取与清单'])

    add('p07c','一次自然语言选用的依据与记录',
        '请求没有写 Skill 名称。浏览器游戏对应描述里的 browser-game，试玩清单对应 playtests and frontend QA。计步和重开是本次规则，不是选用依据，也不画成关键词相等。读取事实只展示 cat 命令、退出 0 和工具返回正文，不展示模型内部判断。',
        '<div class="selection-match"><div class="selection-match-head"><h3>用户需求</h3><h3 data-reveal="1">可用说明 · game-playtest</h3></div>'
        '<div class="selection-match-row"><p><strong class="match-game">浏览器翻牌游戏</strong></p><p data-reveal="1"><code class="match-game">browser-game</code></p></div>'
        '<div class="selection-match-row"><p><strong class="match-test">人工试玩清单</strong></p><p data-reveal="1"><code class="match-test">playtests and frontend QA</code></p></div>'
        '<p class="selection-note">本次重点：计步与重开<span data-reveal="1">　·　对应描述节选中的任务与情境</span></p></div>'
        '<p class="selection-match-limit" data-reveal="1">语义对应是选用依据；不表示关键词必然触发</p>'
        '<div class="selection-line" data-reveal="2"><h3>本次实际读取</h3><p><code>cat …/game-playtest/SKILL.md</code><br>命令退出 0，工具返回该文件内容</p></div>'
        +actions(('打开同次运行：请求、说明与读取','selection-evidence.html#implicit-request')),
        ['不写 Skill 名称的请求','对照描述，再切真实回放','从回放返回，用读取摘要收束'])

    add('p07d','description 怎样表达适用范围',
        '“帮助开发游戏”范围太宽。课程改写的 description 在同一页写清负责什么、什么时候用、什么情况不用。修改后复核先确认新会话已载入新版，再用应选用和不应选用的两类请求检查漏选与误选。本次原版、改写版均符合预期，不据此声称准确率提高。',
        '<p class="selection-label">只写“帮助开发游戏”太宽：这份指导负责哪些任务？</p>'
        '<table class="selection-compare"><tbody>'
        '<tr><th>负责的任务</th><td>为<mark>浏览器游戏</mark>做试玩与前端质量检查</td></tr>'
        '<tr data-reveal="1"><th>使用情境</th><td>准备<mark>人工试玩清单</mark>；进行烟雾测试、截图核验或界面检查</td></tr>'
        '<tr data-reveal="1"><th>边界</th><td>仅润色按钮文案、没有游戏检查任务时，不使用这份指导</td></tr>'
        '<tr data-reveal="2"><th>新版描述复核</th><td>整理试玩清单：<b>应选用</b>（检查漏选）<br>只润色按钮提示：<b>不应选用</b>（检查误选）</td></tr>'
        '</tbody></table>'
        '<p class="selection-note" data-reveal="2">课程改写 · 对照原版与改写版，实际观察见复核记录</p>'
        +actions(('描述原文、改写与复核记录','selection-evidence.html#description'),
                  ('继续：读懂 Skill 正文','index.html?mode=slides&part=2&step=0#p07i')),
        ['先说清负责什么','补适用情境与边界','用两类请求复核'])
