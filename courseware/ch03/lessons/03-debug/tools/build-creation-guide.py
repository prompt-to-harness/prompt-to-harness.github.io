"""Build instructor operation entrances from the same prompts used by the slides."""
from pathlib import Path
from html import escape
import json
base=Path(__file__).resolve().parents[1]
data=json.loads((base/'creation-demos.json').read_text())
parts=[]
for case in data['cases']:
 key=case['id']; run=f"/lab-runs/ch33-create-three-20261118/{case.get('run_directory', key)}"
 command=case['command']
 parts.append(f'''<section id="{key}"><h2>{escape(case['title'])}</h2><p>{escape(case['status'])}</p>
 <p>从仓库根目录执行，打开对应已准备的录制输入目录；这里没有预跑产物。每次用新会话，勿覆盖下方保存的预跑结果。再次重录用 tools/prepare-creation-demos.py --output 指定新目录。</p><pre>{escape(command)}</pre>
 <p><a href="index.html?mode=slides#create-{key}">PPT：完整请求与复制</a> · <a href="{run}/workspace/purple-game-ui/SKILL.md">本机预跑输出 SKILL.md</a> · <a href="http://127.0.0.1:4397/inspect/?topic=create-{key}">Inspect：本次真实记录</a></p>
 <p>先列出 source-game/ 与 source-dialogue.md；第三例还需 reference/game-ui-frontend.md。发送请求后等待生成，只确认输出目录，再切下一种方式。三种方式结束后统一打开原文和游戏；下列检查项及历史修复留作备课核对，不逐例主讲。等待可快进；现场追问或失败按实际情况处理并保存。</p>
 <ul>{''.join('<li>'+escape(x)+'</li>' for x in case['inspection'])}</ul></section>''')
html='''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>3.3 三次生成 · 录制操作</title><style>body{max-width:1000px;margin:32px auto;padding:0 24px;background:#f6f5ef;color:#273c33;font:19px/1.8 system-ui}section{margin:48px 0;border-top:1px solid #ccd5c8}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#e9eee5;padding:18px}a{color:#306347}</style><h1>三次 Skill 生成：录制操作</h1><p>材料沿用已有翻牌作品，三次为独立新会话。Codex CLI 0.163.0；预跑使用 MiniMax-M3.1-Flash。终端客户端与模型分别标明，不把结果归因于创建方式优劣。</p><p>这是讲师准备页。本机输出与完整日志只在本地编辑服务／Inspect 可用；跨机器需携带实验包。三次创建之后，集中看<a href="evidence/creation-comparison/index.html">三份 Skill 与游戏</a>：直接提炼和参考改写复用旧案例，创建工具组使用 11 月 18 日预跑 Skill 补跑游戏。录制时指明保存版本；后半段继续使用展示页方案三的历史 Skill，声音代码取自方案一游戏。</p><a href="speaker.html#group-creation-demos">返回讲述页</a>'''+''.join(parts)+'</html>'
(base/'creation-demo-guide.html').write_text(html)
