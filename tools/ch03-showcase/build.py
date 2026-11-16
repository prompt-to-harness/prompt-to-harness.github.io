#!/usr/bin/env python3
"""Build a LOCAL chapter 3 product gallery. Raw traces stay under ignored lab-runs/."""
from __future__ import annotations
import argparse, collections, hashlib, json, os, re, shutil
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
OUT = ROOT / 'lab-runs/ch03-showcase'

def read(p):
    return Path(p).read_text(encoding='utf-8')

def clean(s):
    if not isinstance(s, str):
        s = json.dumps(s, ensure_ascii=False, indent=2)
    s = s.replace(str(ROOT), '<课程仓库>').replace(str(Path.home()), '~')
    s = re.sub(r'/(?:private/)?var/folders/[^\s\"\x27]+', '<临时目录>', s)
    s = re.sub(r'\b(?:sk|ghp|github_pat)-?[A-Za-z0-9_\-]{24,}\b', '[凭据已隐藏]', s)
    s = re.sub(r'(Bearer\s+)[A-Za-z0-9_.\-]{20,}', r'\1[凭据已隐藏]', s, flags=re.I)
    s = re.sub(r'((?:[A-Z_]*(?:API_KEY|ACCESS_TOKEN|SECRET)|authorization)[\"\x27]?\s*[:=]\s*[\"\x27]?)(?!\$|\{|\[|None|null)([^\s\"\x27,;]{12,})', r'\1[凭据已隐藏]', s, flags=re.I)
    s = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', '[图片数据保留在原始记录]', s)
    return s

def content_text(c):
    if isinstance(c, str): return c
    if isinstance(c, dict): return content_text(c.get('content', c.get('text', json.dumps(c, ensure_ascii=False))))
    return '\n\n'.join(x.get('text', '[图片或非文字内容]') if isinstance(x, dict) else str(x) for x in (c or []))

def normalize_rollout(path):
    events=[]; ignored=collections.Counter(); calls={}
    for line, raw in enumerate(read(path).splitlines(), 1):
        d=json.loads(raw); p=d.get('payload', {}); kind=p.get('type'); base={'line':line,'source':path.name,'time':d.get('timestamp','')}
        if d['type'] != 'response_item':
            ignored[d['type']]+=1; continue
        e=None
        if kind=='message' and p.get('role') in ('user','assistant'):
            if p.get('channel')=='analysis': ignored['internal_reasoning']+=1; continue
            text=content_text(p.get('content')); role=p['role']
            if role=='user' and any(t in text for t in ('<environment_context>', '# AGENTS.md instructions', '<permissions instructions>')):
                role='context'
            e={**base,'kind':role,'text':clean(text),'title':{'user':'用户请求','assistant':'助手说明','context':'任务环境与约定'}[role]}
        elif kind in ('function_call','custom_tool_call'):
            cid=p.get('call_id',p.get('id','')); name=p.get('name','tool'); calls[cid]=name
            e={**base,'kind':'call','title':name,'call_id':cid,'text':clean(p.get('arguments',p.get('input','')))}
        elif kind in ('function_call_output','custom_tool_call_output'):
            cid=p.get('call_id','')
            e={**base,'kind':'result','title':calls.get(cid,'工具')+' · 返回','call_id':cid,'text':clean(p.get('output',''))}
        else: ignored['response_item/'+str(kind)]+=1
        if e: events.append(e)
    return events,dict(ignored)

def normalize_cli(path,prompt):
    events=[{'kind':'user','title':'用户请求','text':clean(read(prompt)),'source':prompt.name,'line':1,'time':''}]; starts={};ignored=collections.Counter()
    for line,raw in enumerate(read(path).splitlines(),1):
        d=json.loads(raw);p=d.get('item',{});k=p.get('type');typ=d['type']
        base={'line':line,'source':path.name,'time':'','item_id':p.get('id','')}
        if k=='reasoning': ignored['internal_reasoning']+=1;continue
        if typ=='item.started':
            starts[p['id']]=line
            if k=='command_execution':events.append({**base,'kind':'call','title':'执行命令','text':clean(p.get('command','')),'call_id':p['id']})
            continue
        if typ=='item.completed':
            if k=='command_execution':
                if p['id'] not in starts:events.append({**base,'kind':'call','title':'执行命令','text':clean(p.get('command','')),'call_id':p['id']})
                events.append({**base,'kind':'result','title':f"命令返回 · exit {p.get('exit_code')}",'text':clean(p.get('aggregated_output','')),'call_id':p['id']})
            elif k=='agent_message':events.append({**base,'kind':'assistant','title':'助手说明','text':clean(p.get('text',''))})
            elif k=='file_change':events.append({**base,'kind':'call','title':'修改文件','text':clean(p),'call_id':p['id']})
            else:events.append({**base,'kind':'call','title':k or '事件','text':clean(p)})
        elif typ in ('error','turn.failed'):events.append({**base,'kind':'error','title':'运行异常','text':clean(d)})
        else:ignored[typ]+=1
    return events,dict(ignored)

def legacy_trace(r,data):
    source='courseware/ch03/runs/data.js'
    events=[{'kind':'user','title':'原始请求','text':data['prompt'],'source':source,'line':0},
            {'kind':'assistant','title':'计划原文','text':r['plan'],'source':source,'line':0},
            {'kind':'user','title':'人的确认（代答）','text':data['confirm'],'source':source,'line':0}]
    for i,t in enumerate(r['timeline']):
        events.append({'kind':'call' if t['k'] in ('cmd','file') else 'assistant','title':{'cmd':'命令首行（历史节选）','file':'文件改动（历史节选）','msg':'助手说明（历史节选）'}[t['k']],'text':t['t'],'source':source,'line':0,'note':f'导出步骤 {i+1}；原始完整输出未归档到本机'})
    events.append({'kind':'assistant','title':'交付回复原文','text':r['answer'],'source':source,'line':0})
    return events,{'original_raw_trace_unavailable':1}

def scan_sources():
    result={}
    # Prune dependency trees; never traverse Codex plugin caches or environments.
    for folder, dirs, files in os.walk(ROOT/'lab-runs'):
        dirs[:]=[d for d in dirs if d not in ('node_modules','.git','.tmp','.venv','dist','site-packages','ch03-showcase')]
        for name in files:
            if name.startswith('rollout-') and name.endswith('.jsonl'):
                m=re.search(r'([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})',name)
                if m:result[m[1]]=Path(folder)/name
    return result

def fallback_phases(events):
    # Used only for initial inspection. Final output requires reviewed annotations.
    return [{'start':1,'title':'待标记','summary':'阶段尚未核对'}]

def write_js(path,name,data):
    path.write_text(name+' = '+json.dumps(data,ensure_ascii=False).replace('</','<\\/')+';\n')

def build(inspect=False):
    OUT.mkdir(parents=True,exist_ok=True);(OUT/'traces').mkdir(exist_ok=True);(OUT/'games').mkdir(exist_ok=True);(OUT/'previews').mkdir(exist_ok=True)
    annotations=json.loads(read(HERE/'annotations.json')) if (HERE/'annotations.json').exists() else {}
    sources=scan_sources(); runs=[]
    locations=sorted((ROOT/'lab-runs/ch03-promptfoo/out').glob('*/run.json'))+[ROOT/'lab-runs/sim-student/student-3.1-20261022-141720/lab-out/run.json']
    counters=collections.Counter()
    for meta in locations:
        d=json.loads(read(meta));letter=d['group'].split('-')[0] if meta.parent.parent.name=='out' else 'H';counters[letter]+=1;rid=letter.lower()+str(counters[letter])
        source=sources.get(d['session_id'])
        events,excluded=normalize_rollout(source) if source else ([],{'source_missing':1})
        runs.append({'id':rid,'date':'2026-10-21' if letter in 'ABCD' else '2026-10-22','model':d['model'],'tool':'Codex '+d['codex'],'group':d['group'],'family':'翻牌','batch':'短请求' if letter=='A' else '明确要求' if letter in 'BC' else '多轮交互','driver':d.get('driver','promptfoo'),'full':bool(source),'events':events,'excluded':excluded,'source_path':source,'game_source':meta.parent/'dist','prompt':d.get('prompt') or '\n\n'.join(d.get('prompts',[])),'final':d.get('final_message',''),'diff':read(meta.parent/'diff.patch'),'checks':'历史构建与类型检查通过；不等于完整试玩通过。','base':'第二章个人主页冻结候选','sid':d['session_id']})
    legacy=json.loads(read(ROOT/'courseware/ch03/runs/data.js').split('=',1)[1].strip().rstrip(';'))
    for r in legacy['runs']:
        if r['status']!='ok':continue
        rid='old'+r['id'].split('-')[-1];ev,ex=legacy_trace(r,legacy)
        runs.append({'id':rid,'date':'2026-10-07','model':'MiniMax-M3.1-Flash-Preview','tool':'Codex 0.160.1','group':'早期主线 · '+r['label'],'family':'翻牌','batch':'早期样本','full':False,'events':ev,'excluded':ex,'game_source':ROOT/'courseware/ch03/runs/builds'/r['id'],'prompt':legacy['prompt'],'final':r['answer'],'diff':r['diff'],'checks':'历史构建通过；已知问题见摘要。原始执行输出缺失，保留的是当时导出的计划、步骤摘要及 diff。','base':'第二章个人主页冻结候选','sid':r['id']})
    snap=json.loads(read(ROOT/'lab-runs/ch03-minimax-20261106/snapshot-location.json'));experiment=Path(snap['path'])/'experiment'
    for game in ['memory','dodge']:
        rid='mm-'+game;events,excluded=normalize_cli(experiment/f'{game}-events.jsonl',experiment/f'{game}-prompt.txt')
        runs.append({'id':rid,'date':'2026-11-06','model':'MiniMax-M3.1-Flash','tool':'Codex 0.163.0','group':'MiniMax 独立开发','family':'翻牌' if game=='memory' else '躲避','batch':'独立项目','full':True,'events':events,'excluded':excluded,'source_path':experiment/f'{game}-events.jsonl','game_source':experiment/game/('dist' if game=='dodge' else ''),'prompt':read(experiment/f'{game}-prompt.txt'),'final':read(experiment/f'{game}-final.txt'),'diff':'','checks':'23 项规则测试、69 项浏览器断言；脚本读取隐藏配对信息。' if game=='memory' else '34 项规则检查、31 项浏览器断言；计时结束用例维持玩家存活。','base':'空目录独立项目；未集成主页','sid':rid})
    for game in ['memory','dodge']:
        rid='cx-'+game;p=ROOT/'starters/ch03-games-20261105'/game
        runs.append({'id':rid,'date':'2026-11-05','model':'原开发 Agent（型号未核定）','tool':'Codex','group':'独立游戏初版','family':'翻牌' if game=='memory' else '躲避','batch':'独立项目','full':False,'events':[],'excluded':{'source_missing':1},'game_source':p/('dist' if game=='dodge' else ''),'prompt':'开始准备游戏（据开发记录；完整对话定位待核对）','final':'','diff':'','checks':'开发与试玩记录保留在 starters/ch03-games-20261105/README.md；当前未找到可独立还原该游戏的原始完整会话。','base':'独立项目，随后联合验证','sid':rid})
    inspection=[];public=[]
    for r in runs:
        rid=r['id'];ann=annotations.get(rid,{})
        r.update({k:v for k,v in ann.items() if k!='phases'})
        r.setdefault('title',r['group']);r.setdefault('summary','');r.setdefault('why','');r.setdefault('tags',[]);r.setdefault('recommended',False);r.setdefault('caveat','')
        for i,e in enumerate(r['events'],1):e['n']=i
        phases=ann.get('phases',fallback_phases(r['events']) if r['events'] else [])
        if not inspect and r['events']: assert rid in annotations and 'phases' in ann, 'Missing phase annotation: '+rid
        for i,phase in enumerate(phases):phase['end']=(phases[i+1]['start']-1 if i+1<len(phases) else len(r['events']))
        if not inspect and r['events']:
            assert phases and phases[0]['start']==1,rid
            assert all(1<=p['start']<=p['end']<=len(r['events']) for p in phases),rid
            assert sum(p['end']-p['start']+1 for p in phases)==len(r['events']),rid
        user_events=[e for e in r['events'] if e['kind']=='user']
        r['user_rounds']=len(user_events) if user_events else None
        r['round_label']=(f"{'多轮 · ' if len(user_events)>1 else '单轮 · '}{len(user_events)} 轮"+('（历史导出）' if not r['full'] else '')) if user_events else '未核定（缺原始会话）'
        r['round_inputs']=[{'n':i+1,'event':e['n'],'text':e['text']} for i,e in enumerate(user_events)]
        r['phases']=phases;r['event_count']=len(r['events']);r['call_count']=sum(e['kind']=='call' for e in r['events']);r['phase_count']=len(phases)
        trace={'id':rid,'events':r['events'],'excluded':r['excluded'],'phases':phases,'full':r['full'],'diff':clean(r['diff']),'final':clean(r['final'])}
        if rid.startswith('cx-'):
            trace['recap']=clean(read(ROOT/'starters/ch03-games-20261105/README.md'))
            trace['recap_source']='starters/ch03-games-20261105/README.md'
        if r.get('source_path'):trace['source_file']=r['source_path'].name;trace['source_sha256']=hashlib.sha256(r['source_path'].read_bytes()).hexdigest()
        write_js(OUT/'traces'/f'{rid}.js','window.GAME_TRACES['+json.dumps(rid)+']',trace)
        (OUT/'traces'/f'{rid}.json').write_text(json.dumps(trace,ensure_ascii=False,indent=2))
        dest=OUT/'games'/rid
        if not dest.exists():
            if rid in ['mm-memory','cx-memory']:
                dest.mkdir()
                for n in ['index.html','style.css','styles.css','main.js','src','assets']:
                    src=r['game_source']/n
                    if src.is_dir():shutil.copytree(src,dest/n)
                    elif src.is_file():shutil.copy2(src,dest/n)
            else:shutil.copytree(r['game_source'],dest)
        index=dest/'index.html';index.chmod(0o644);s=read(index);s=s.replace('src="/assets/','src="./assets/').replace('href="/assets/','href="./assets/');index.write_text(s)
        r['game']='games/'+rid+'/index.html';r['preview']='previews/'+rid+'.png'
        r['prompt']=clean(r['prompt']);r['coverage']='完整执行记录' if r['full'] else '历史节选' if r['events'] else '仅开发复盘'
        public.append({k:v for k,v in r.items() if k not in ['events','excluded','source_path','game_source','diff','final']})
        inspection.append('\n### '+rid+' '+r['title']+'\n'+ '\n'.join(f"{e['n']:03d} L{e['line']} {e['kind']:9s} {e['title']} {e['text'].replace(chr(10),' ')[:175]}" for e in r['events'] if e['kind']!='result'))
    write_js(OUT/'data.js','window.GALLERY_DATA',public)
    (OUT/'inspection.txt').write_text('\n'.join(inspection))
    for name in ['index.html','gallery.css','gallery.js','game-only.html','case-map.json']:
        if (HERE/name).exists():shutil.copy2(HERE/name,OUT/name)
    print(json.dumps({'runs':len(runs),'full_traces':sum(r['full'] for r in runs),'events':sum(len(r['events']) for r in runs),'out':str(OUT)},ensure_ascii=False))

if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('--inspect',action='store_true');args=ap.parse_args();build(args.inspect)
