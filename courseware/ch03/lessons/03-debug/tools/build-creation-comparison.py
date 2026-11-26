"""Build the short comparison from retained game inputs; never rerun or edit a Skill."""
from pathlib import Path
from html import escape
import hashlib,json,shutil
BASE=Path(__file__).resolve().parents[1]
REPO=BASE.parents[3]
ROOT=Path(json.loads((REPO/'lab-runs/ch03-purple-style-20261110/trial-location.json').read_text())['root'])
data=json.loads((BASE/'creation-comparison.json').read_text())
out=BASE/'evidence/creation-comparison';out.mkdir(parents=True,exist_ok=True)
style='''body{margin:36px auto;max-width:1500px;padding:0 28px;background:#f6f5ef;color:#273c33;font:20px/1.6 system-ui}h1{font-size:34px}h2{font-size:25px}a{color:#286447}nav{display:flex;gap:22px;flex-wrap:wrap}main{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;margin:30px 0}article{min-width:0}img{width:100%;border:1px solid #ccc}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:17px/1.7 ui-monospace,monospace;background:#fffef8;padding:24px}details{margin:24px 0}summary{cursor:pointer}small{font-size:17px}section{scroll-margin-top:24px;margin:36px 0}blockquote{margin:0;background:#fffef8;padding:18px;font-size:18px}table{width:100%;border-collapse:collapse}td,th{text-align:left;padding:12px;border-bottom:1px solid #ccc}@media(max-width:800px){main{grid-template-columns:1fr}}'''
def page(title,body):return '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>'+escape(title)+'</title><style>'+style+'</style><h1>'+escape(title)+'</h1>'+body+'</html>'
parts=[];records=[];cards=[]
for c in data['cases']:
 case=ROOT/c['run'];ws=case/'workspace';skill=ws/'.agents/skills/purple-game-ui/SKILL.md'
 text=skill.read_text();prompt=(case/'prompt.txt').read_text();assert prompt==data['prompt'],c['id']
 if c.get('iteration_game'):
  historical=BASE/'evidence/audio-iteration'/c['iteration_game']
  for saved in historical.rglob('*'):
   if saved.is_file() and saved.suffix in ('.html','.js','.css'):
    assert (ws/saved.relative_to(historical)).read_bytes()==saved.read_bytes(),saved
  if c['id']=='reference':
   assert skill.read_bytes()==(BASE/'evidence/audio-iteration/original-skill.txt').read_bytes()

 dest=out/c['id'];dest.mkdir(exist_ok=True)
 for p in ws.rglob('*'):
  rel=p.relative_to(ws)
  if any(x.startswith('.') or x=='node_modules' for x in rel.parts):continue
  if p.is_file() and p.suffix.lower() in ('.html','.css','.js','.mjs','.cjs','.svg','.png','.jpg','.webp','.json'):
   target=dest/rel;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,target)
 review=case/'browser-review'
 for name in ('playing.png','ending.png','mobile.png'):
  if (review/name).is_file():shutil.copy2(review/name,dest/name)
 excerpt=text[text.index(c['excerpt_start']):text.index(c['excerpt_end'])].strip()
 (out/(c['id']+'-skill.html')).write_text(page(c['label']+' · 实际使用的 Skill','<nav><a href="index.html#skills">返回对比</a></nav><pre>'+escape(text).replace('场地内容整体替换', '<span id="stage-contract" style="background:#fff0b5;scroll-margin-top:40px">场地内容整体替换</span>', 1)+'</pre>'))
 files=[str(p.relative_to(skill.parent)) for p in skill.parent.rglob('*') if p.is_file()]
 record={'id':c['id'],'run':c['run'],'skill_sha256':hashlib.sha256(skill.read_bytes()).hexdigest(),'prompt_sha256':hashlib.sha256(prompt.encode()).hexdigest(),'skill_files':sorted(files)}
 if (case/'logs/result.json').exists():record['completed']=json.loads((case/'logs/result.json').read_text()).get('completed',False)
 records.append(record)
 cards.append('<figure><a class="game-link" href="'+c['id']+'/index.html" target="_blank" rel="noopener" aria-label="打开'+escape(c['label'])+'游戏"><img src="'+c['id']+'/playing.png" alt="'+escape(c['label'])+'实际游戏快照"></a><figcaption><a href="'+c['id']+'/index.html" target="_blank" rel="noopener">'+escape(c['label'])+'</a></figcaption></figure>')
 parts.append('<article><h2>'+escape(c['label'])+'</h2><a href="'+c['id']+'/index.html" target="_blank"><img src="'+c['id']+'/playing.png" alt="'+escape(c['label'])+'的实际游戏"></a><p>'+escape(c['skill_note'])+'</p><nav><a href="'+c['id']+'/index.html" target="_blank">试玩</a><a href="'+c['id']+'/ending.png" target="_blank">结算</a></nav><details><summary>备查：Skill 与运行记录</summary><blockquote>'+escape(excerpt).replace('\n','<br>')+'</blockquote><nav><a href="'+c['id']+'-skill.html">Skill 全文</a><a href="http://127.0.0.1:4397/inspect/?topic='+c['topic']+'" target="_blank">运行记录</a></nav><pre>'+escape('\n'.join(sorted(files)))+'</pre></details></article>')

(out/'manifest.json').write_text(json.dumps({'boundary':data['boundary'],'cases':records},ensure_ascii=False,indent=2)+'\n')
gallery_css = """
*{box-sizing:border-box}body{margin:0;background:var(--color-paper);color:var(--color-ink);font:20px/1.7 var(--font-body),sans-serif}main,footer{max-width:1200px;margin:auto;padding:28px 36px}h1{font:38px/1.35 var(--font-body),sans-serif;margin:8px 0 20px}.boundary{font-size:18px;color:var(--color-muted);margin:0 0 28px}.gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px;padding:8px 0 28px}figure{margin:0;min-width:0}.game-link{display:block;border-radius:4px;overflow:hidden;background:#11152b;transition:box-shadow .15s}.game-link:hover{box-shadow:0 0 0 3px var(--color-accent)}figure img{width:100%;aspect-ratio:1280/900;display:block;object-fit:contain}figcaption{font-size:23px;text-align:center;margin-top:14px}a{color:var(--color-accent);text-underline-offset:5px}figcaption a{text-decoration:none}a:focus-visible,summary:focus-visible{outline:3px solid var(--color-accent);outline-offset:5px}footer{border-top:1px solid var(--color-rule);font-size:18px}footer nav{display:flex;flex-wrap:wrap;gap:12px 28px}details{margin-top:22px}summary{cursor:pointer;color:var(--color-muted)}.notes{padding:10px 0 24px}.notes article>h2,.notes article>p,.notes article>a,.notes article>nav{display:none}.notes article>details{margin-top:16px}pre,blockquote{white-space:pre-wrap;overflow-wrap:anywhere;font:16px/1.7 var(--font-body),sans-serif;margin:16px 0;padding:18px;background:var(--color-paper-raised)}blockquote{white-space:normal}.notes nav{font-size:16px}h2{font-size:23px}@media(max-width:760px){main,footer{padding:20px}.gallery{grid-template-columns:1fr;gap:30px}h1{font-size:30px}figure{max-width:540px;width:100%;margin:auto}}@media(prefers-reduced-motion:reduce){.game-link{transition:none}}
"""
# Follow 3.1 cases.html: image links and captions first; preparation material below.
for i,c in enumerate(data['cases']):
 parts[i]=parts[i].replace('备查：Skill 与运行记录',escape(c['label'])+' · Skill 与运行记录')
(out/'index.html').write_text('<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escape(data['title'])+'</title><link rel="stylesheet" href="../../../../../shared/tokens.css"><style>'+gallery_css+'</style></head><body><main id="skills"><h1>三种方案，三款游戏</h1><p class="boundary">提前准备的游戏结果，点击图片即可试玩。</p><div class="gallery">'+''.join(cards)+'</div></main><footer><nav><a href="../../index.html?mode=slides#skill-inputs">返回 3.3 课件</a><a href="../../speaker.html#review-defaults">返回讲述页</a></nav><details><summary>备课资料</summary><div class="notes"><p>'+escape(data['boundary'])+'</p><details id="prompt"><summary>三组共用的开发请求</summary><pre>'+escape(data['prompt'])+'</pre></details>'+''.join(parts)+'</div></details></footer></body></html>')

print('Comparison built:',out)
