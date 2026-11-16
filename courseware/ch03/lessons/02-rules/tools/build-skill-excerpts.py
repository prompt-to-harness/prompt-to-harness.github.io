"""固定版本原文节选的重排截图；不生成或复制完整第三方文件。"""
from pathlib import Path
from html import escape
from playwright.sync_api import sync_playwright
r=Path(__file__).resolve().parents[1]/'assets/skill-excerpts'
r.mkdir(parents=True,exist_ok=True)
from urllib.request import urlopen
base='https://raw.githubusercontent.com/openai/plugins/0722921d5542fc593105c27bd52630babd8b8c2a/plugins/game-studio/'
s=urlopen(base+'skills/game-studio/SKILL.md').read().decode();e=urlopen(base+'references/engine-selection.md').read().decode()
items=[('identity','game-studio / SKILL.md · 文件头节选','---\nname: game-studio\ndescription: Route early browser-game work.\n…\n---'),('workflow','game-studio / SKILL.md · 工作流程节选','## Default Workflow\n1. Lock the game fantasy and player verbs.\n…'),('reference','game-studio / SKILL.md · 引用节选','## References\n- Engine selection: `../../references/engine-selection.md`'),('conditions','engine-selection.md · 适用条件节选','## Phaser is the best fit when\n\n- the game is sprite- or tile-based\n- the game is top-down, side-view, or grid tactics\n…')]
with sync_playwright() as p:
 b=p.chromium.launch();pg=b.new_page(viewport={'width':1100,'height':400},device_scale_factor=1)
 for name,title,code in items:
  for line in code.splitlines():
   if line not in ['…',''] and not line.startswith('description:'): assert line in (e if name=='conditions' else s),line
  assert 'description: Route early browser-game work.' in s
  pg.set_content('<meta charset="utf-8"><style>body{margin:0;background:#fffdf6;color:#243042;font-family:Arial,sans-serif}article{padding:32px;border:2px solid #9c8b66}header{font-size:24px;color:#6e6043;margin-bottom:30px}pre{font:32px/1.6 Menlo,monospace;white-space:pre-wrap;overflow-wrap:anywhere;margin:0}footer{margin-top:24px;color:#59695f;font-size:20px}</style><article><header>'+escape(title)+'</header><pre>'+escape(code)+'</pre><footer>原文节选重排截图 · … 表示省略 · 固定提交 0722921</footer></article>')
  pg.locator('article').screenshot(path=str(r/(name+'.png')))
 b.close()
