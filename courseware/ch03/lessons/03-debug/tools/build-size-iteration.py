#!/usr/bin/env python3
"""Archive the retained scheme-one iteration; never run a model or alter inputs."""
from pathlib import Path
import json, hashlib, shutil, html, re
HERE=Path(__file__).resolve().parents[1]
ROOT=HERE.parents[3]
BASE=Path(json.loads((ROOT/'lab-runs/ch03-purple-style-20261110/trial-location.json').read_text())['root'])
OUT=HERE/'evidence/size-iteration'
RUNS={'diagnosis':'diagnose-primary-cause-minimax-20261119-225934','change':'iterate-scheme1-minimax-20261119-231343','validation':'dodge-iterate-scheme1-20261119-232409'}
def clean(s):
 return s.replace(str(BASE),'<实验目录>').replace('/Users/fl/ws/prompt-to-harness.github.io','<课程仓库>').replace('/Users/fl','<用户目录>')
def page(title,body):
 return '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title><style>body{margin:0;background:#f8f7f3;color:#26332e;font:18px/1.7 system-ui}main{max-width:1100px;margin:auto;padding:36px 28px}h1{font-size:36px}h2{margin-top:48px}a{color:#28664d}nav{display:flex;gap:20px;flex-wrap:wrap}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#fff;border:1px solid #ddd;padding:20px;font:14px/1.65 monospace}img{width:100%;border-radius:12px}.source-stops{position:sticky;top:0;background:#f8f7f3;padding:12px 0;border-bottom:1px solid #ccc;z-index:5}.source-stops button{font:inherit;padding:4px 12px;cursor:pointer}section,pre span{scroll-margin-top:100px}pre span:target{background:#fff1bf;outline:2px solid #c4a954}.pair{display:grid;grid-template-columns:1fr 1fr;gap:24px}small{color:#647068}@media(max-width:700px){.pair{grid-template-columns:1fr}}</style><main>'+body+'</main></html>'
def fileview(title,path,id='source'):
 lines=path.read_text().splitlines()
 anchors=[]; stage_added=False
 for n,line in enumerate(lines,1):
  focus=not stage_added and ('## 场地容器怎么选' in line or '场地内容整体替换，但容器保留' in line)
  if focus: stage_added=True
  anchors.append('<span id="L'+str(n)+'">'+('<span id="stage-contract">' if focus else '')+html.escape(line)+('</span>' if focus else '')+'</span>')
 stops=[]
 rules=[('## 场地容器怎么选','容器选择'),('画布元素本身（','宽度与比例'),('- [ ] 场地内容整体替换','场地检查清单'),('## 反模式','避免样式冲突'),('1. **量一次场地尺寸**','实际验证'),('+.stage {','非网格场地样式'),('+  aspect-ratio: var(--stage-ratio','可调整的比例'),('--stage-max: 760px','本轮实际尺寸与比例')]
 for needle,label in rules:
  for n,line in enumerate(lines,1):
   if needle in line:
    target='stage-contract' if ('## 场地容器怎么选' in line or '场地内容整体替换，但容器保留' in line) else 'L'+str(n)
    if not any(x['id']==target for x in stops):
     stop={'id':target,'label':label}
     if needle=='--stage-max: 760px':
      end=next((i for i,value in enumerate(lines,1) if i>=n and '--stage-ratio: 16 / 10' in value),None)
      if end is None: raise ValueError('本轮游戏尺寸之后缺少 16:10 比例设置')
      stop['end']='L'+str(end)
     stops.append(stop)
    break
 source={'original-skill':'original-skill/SKILL.md','revised-skill':'revised-skill/SKILL.md','Skill 实际修改差异':'skill-changes.diff','本轮游戏：实际尺寸与比例':'game/styles.css'}.get(title,'')
 nav='<nav class="source-stops" data-source="'+html.escape(source,quote=True)+'" data-evidence-stops="'+html.escape(json.dumps(stops,ensure_ascii=False),quote=True)+'"></nav>' if stops else ''
 return page(title,'<a href="index.html">← 材料汇总</a><h1>'+title+'</h1>'+nav+'<pre>'+ '\n'.join(anchors)+'</pre><script src="../../evidence-navigation.js"></script>')
def build():
 OUT.mkdir(parents=True,exist_ok=True);manifest={'runs':{},'boundary':'公开副本仅对机器路径作占位替换；完整 CLI、会话与请求追踪保留在私有实验目录，Inspect 仅格式转换。'}
 inputs={'status':'实际发送请求；仅将本机绝对路径替换为占位符，原文及指纹留存在实验归档'}
 for key,name in RUNS.items():
  r=BASE/name; sub=OUT/key;sub.mkdir(exist_ok=True)
  prompt=r/'prompt.txt'; reply=r/('logs/final.md' if key=='validation' else 'final.md');events=r/('logs/events.jsonl' if key=='validation' else 'events.jsonl')
  inputs[key]=clean(prompt.read_text());(sub/'prompt.txt').write_text(inputs[key]);(sub/'reply.md').write_text(clean(reply.read_text()))
  manifest['runs'][key]={'directory':name,'files':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in [prompt,reply,events]},'thread':json.loads(events.read_text().splitlines()[0]).get('thread_id')}
  (sub/'index.html').write_text(page(key,'<a href="../index.html">← 材料汇总</a><h1>'+{'diagnosis':'先排查主要原因','change':'在原会话修改 Skill','validation':'新会话用相同请求生成游戏'}[key]+'</h1><p>实际请求与回复，机器路径已替换。回复是模型原文，包含待复核判断。</p><h2>实际请求</h2><pre>'+html.escape(inputs[key])+'</pre><h2>实际回复</h2><pre>'+html.escape(clean(reply.read_text()))+'</pre>'))
 original=BASE/'dodge-compare-layout-template-game/workspace/.agents/skills/purple-game-ui'; revised=BASE/RUNS['change']/'workspace/purple-game-ui';game=BASE/RUNS['validation']/'workspace'
 for name,src in [('original-skill',original),('revised-skill',revised)]:
  shutil.copytree(src,OUT/name,dirs_exist_ok=True)
  (OUT/(name+'.html')).write_text(fileview(name,src/'SKILL.md','stage-contract'))
 for p in game.rglob('*'):
  rel=p.relative_to(game)
  if p.is_file() and not any(x.startswith('.') for x in rel.parts):
   dest=OUT/'game'/rel;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,dest)
 review=BASE/RUNS['validation']/'browser-review'
 for p in review.iterdir():
  if p.is_file():shutil.copy2(p,OUT/p.name)
 diff=clean((BASE/RUNS['change']/'skill-changes.diff').read_text());(OUT/'skill-changes.diff').write_text(diff);(OUT/'diff.html').write_text(fileview('Skill 实际修改差异',OUT/'skill-changes.diff'))
 (OUT/'game-styles.html').write_text(fileview('本轮游戏：实际尺寸与比例',OUT/'game/styles.css'))
 links=''.join('<li><a href="game/'+str(p.relative_to(OUT/'game'))+'">'+str(p.relative_to(OUT/'game'))+'</a></li>' for p in sorted((OUT/'game').rglob('*')) if p.is_file())
 (OUT/'code.html').write_text(page('最终游戏源码','<a href="index.html">← 材料汇总</a><h1>最终游戏源码</h1><p>生成后未修改。</p><ul>'+links+'</ul>'))
 body='<h1>方案一：从场地过小到重新生成</h1><p>先定位原因，在原排查会话修改 Skill，再用新会话和原请求生成游戏。</p><nav><a href="#diagnosis">排查</a><a href="#change">修改</a><a href="#validation">验证</a><a href="game/index.html">试玩新游戏 ↗</a></nav>'
 labels={'diagnosis':'1. 排查主要原因','change':'2. 只修改 Skill 副本','validation':'3. 新会话、相同请求'}
 for key in RUNS:
  body+='<section id="'+key+'"><h2>'+labels[key]+'</h2><nav><a href="'+key+'/index.html">实际请求与回复</a><a href="http://127.0.0.1:4397/inspect/?topic=size-'+key+'">Inspect 运行记录 ↗</a></nav>'
  if key=='diagnosis':body+='<p>直接原因：新样式被后面的网格规则覆盖。上游问题：Skill 要求所有玩法保留网格容器。</p><a href="original-skill.html#stage-contract">核对原 Skill</a><p><small>回复是分析材料，不是结论本身；结合原文和代码复核。</small></p>'
  elif key=='change':body+='<p>新增非网格场地容器，正文和模板一起调整，尺寸与比例按玩法选择。</p><nav><a href="revised-skill.html#stage-contract">修改后 Skill</a><a href="diff.html">实际 diff</a></nav><details><summary>审阅保留项</summary><p>仍保留固定页面顺序与四格数据条等原要求；本轮只处理场地容器。文档与 CSS 的画布默认宽度描述仍不一致；没有为了本次验证继续修改。其他玩法尚未验证。</p></details>'
  else:body+='<p>三方案与本轮开发请求逐字一致；新项目只装修改后的 Skill，不带排查上下文。此次场地过小没有复现。</p><div class="pair"><figure><a href="../creation-comparison/direct/index.html"><img src="../creation-comparison/direct/playing.png" alt="原方案一场地过小"></a><figcaption>原方案一：场地约 99×74</figcaption></figure><figure><a href="game/index.html"><img src="playing.png" alt="修改 Skill 后重新生成的游戏"></a><figcaption>本轮：场地 760×475，1280×920 窗口</figcaption></figure></div><nav><a href="game/index.html">试玩最终游戏</a><a href="code.html">最终源码</a><a href="inspection.json">浏览器检查记录</a><a href="mobile.png">窄屏截图</a><a href="ending.png">结算截图</a></nav><p>已检查场地尺寸、窄屏无溢出、扣生命、结算与重开；无页面运行错误。未完成收集得分、声音听感和其他玩法回归，不宣称全面通过。单次生成也不能证明稳定效果。</p>'
  body+='</section>'
 body+='<h2>归档与使用</h2><p>原版 Skill 与修改版均保留。完整日志仅在本机 Inspect 展示，需启动 4397 服务；本页其余材料为静态文件。</p><a href="manifest.json">来源指纹与会话对应</a>'
 (OUT/'index.html').write_text(page('方案一 Skill 迭代',body));(OUT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2));(HERE/'size-case-inputs.json').write_text(json.dumps(inputs,ensure_ascii=False,indent=2)+'\n')
 print(OUT)
if __name__=='__main__':build()
