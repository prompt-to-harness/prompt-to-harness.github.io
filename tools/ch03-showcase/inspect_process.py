"""Import retained 3.2/3.3 records and resolve lecture topics against original text."""
import hashlib
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
CONFIG = HERE / 'inspect-process.json'


def roots():
    purple = Path(json.loads((ROOT/'lab-runs/ch03-purple-style-20261110/trial-location.json').read_text())['root'])
    return {'repo': ROOT, 'purple': purple, 'audio': purple.parent/'component-audio-20261114',
            'authoring': Path(json.loads((ROOT/'lab-runs/ch03-skill-authoring-20261107/trial-location.json').read_text())['path'])}


def add_records(api, manifest, raw_files):
    from inspect_ai.log import EvalLog, EvalSpec, EvalConfig, EvalDataset, EvalSample, write_eval_log
    from inspect_ai.model import ChatMessageUser, ChatMessageAssistant
    from inspect_ai.event import InfoEvent
    from inspect_focus import readable
    config = json.loads(CONFIG.read_text())
    locations = roots()
    samples_by_run = {}
    for rid, spec in config['records'].items():
        samples, maps, raw_paths = [], {}, {}
        for sid, source in spec['samples'].items():
            path = locations[spec['root']] / source['path']
            if not path.is_file():
                raise FileNotFoundError(f'{rid}/{sid}: missing retained source {path}')
            content = path.read_text()
            mode = source.get('mode', 'cli')
            metadata = {'source_file':source['path'], 'source_sha256':hashlib.sha256(path.read_bytes()).hexdigest(),
                        'boundary':source.get('boundary', spec['boundary']), 'import_only':True}
            if mode in ('cli', 'session'):
                rows = [json.loads(line) for line in content.splitlines()]
                messages, mapping = api.messages_for(rows, source['path'], mode)
                if source.get('prompt'):
                    prompt_path = locations[spec['root']] / source['prompt']
                    prompt = prompt_path.read_text()
                    messages.insert(0, ChatMessageUser(id='prompt', content=api.safe(prompt), metadata={
                        'source_file':source['prompt'], 'source_sha256':hashlib.sha256(prompt_path.read_bytes()).hexdigest(),
                        'boundary':'单独保存的请求文件；不是 CLI 事件中的新增用户轮次'}))
                events = [InfoEvent(uuid=f'raw-L{i}', timestamp=row.get('timestamp') or spec['date']+'T00:00:00Z',
                                   source=f'{source["path"]}:{i}', data=api.safe(row),
                                   metadata={'source_line':i, 'timestamp_recorded':bool(row.get('timestamp'))})
                          for i,row in enumerate(rows,1)]
                metadata['raw_records'] = len(rows)
                raw_name = f'{rid}-{sid}.jsonl'
                raw_files[raw_name] = '\n'.join(json.dumps(api.safe(r),ensure_ascii=False) for r in rows)+'\n'
            else:
                # A retained terminal/file export is a document, not a reconstructed conversation.
                messages = [ChatMessageAssistant(id='document', content='```'+source.get('language','text')+'\n'+api.safe(content)+'\n```',
                            metadata={**metadata, 'original_role':None, 'presentation_role':'文件原文容器，不代表助手消息'})]
                mapping = {'1':'document'}
                events = [InfoEvent(uuid='document', timestamp=spec['date']+'T00:00:00Z',source=source['path'],data=api.safe(content))]
                raw_name = f'{rid}-{sid}'+path.suffix
                raw_files[raw_name] = api.safe(content)
            samples.append(EvalSample(id=sid,epoch=1,input='',target='',messages=messages,events=events,metadata=metadata))
            maps[sid] = mapping; raw_paths[sid] = 'raw/'+raw_name
        filename = f'{spec["date"]}T00-00-00_ch03_{rid}.json'
        log = EvalLog(status='success',eval=EvalSpec(created=spec['date']+'T00:00:00Z',task='ch03_'+rid.replace('-','_'),
                      task_display_name=spec['title'],task_description=spec['boundary'],model=spec.get('model','archive'),
                      dataset=EvalDataset(name='已保存过程记录',samples=len(samples)),config=EvalConfig()),samples=samples,
                      metadata={'import_only':True,'boundary':'仅格式转换，success 不代表任务或验收成功'})
        write_eval_log(log, api.LOGS/filename, format='json')
        rows, targets = {}, {}
        for sample in samples:
            positions, calls, row, tool_targets = {}, {}, 0, {}
            for m in sample.messages:
                if m.role == 'tool': positions[m.id] = calls.get(m.tool_call_id,max(0,row-1))
                else:
                    positions[m.id] = row
                    for call in getattr(m,'tool_calls',None) or []:
                        calls[call.id]=row
                        tool_targets[m.id]=str(next(iter(call.arguments.values()),''))[:1000]
                    row += 1
            call_text={call.id: str(next(iter(call.arguments.values()),''))[:1000] for m in sample.messages for call in (getattr(m,'tool_calls',None) or [])}
            for m in sample.messages:
                if m.role=='tool':tool_targets[m.id]=call_text.get(m.tool_call_id,'')
            rows[str(sample.id)] = positions;targets[str(sample.id)] = tool_targets
        manifest[rid]={'file':filename,'title':spec['title'],'boundary':spec['boundary'],'original_name':spec['title'],
                       'archive_id':rid,'sources':[{'sample':str(s.id),**s.metadata} for s in samples],
                       'system_prefixes':{str(s.id):{m.id:readable(m)[:200] for m in s.messages if m.role=='system'} for s in samples},
                       'maps':maps,'rows':rows,'tool_targets':targets,'raw_paths':raw_paths,'focus':{},'events':{},'full':True}
        samples_by_run[rid] = {str(s.id):s for s in samples}
    topics = {}
    for name, spec in config['topics'].items():
        steps=[]
        for step in spec['steps']:
            rid,sid=step['run'],step['sample']
            mid=step.get('message') or manifest[rid]['maps'][sid][str(step['line'])]
            if 'text' not in step:
                focus = manifest[rid]['focus']
                passages = focus.get(f'{sid}/{mid}')
                if not passages:
                    raise ValueError(f'{name}: no existing highlights in {rid}/{sid}/{mid}')
                target = {'run':rid,'sample':sid,'message':mid,'label':step['label']}
                if 'highlight_groups' in step:
                    mark = name+'-'+str(len(steps))
                    focus[f'{sid}/{mid}/{mark}'] = [
                        {'text':'\n'.join(passages[index]['text'] for index in group),
                         'occurrence':passages[group[0]]['occurrence']}
                        for group in step['highlight_groups']
                    ]
                    target.update(mark=mark, show_all=True)
                steps.append(target)
                continue
            sample=samples_by_run[rid][sid]
            message=next(m for m in sample.messages if m.id==mid)
            text=readable(message)
            passages=[]
            for needle in step['text']:
                if needle not in text:raise ValueError(f'{name}: original text missing in {rid}/{sid}/{mid}: {needle}')
                passages.append({'text':needle,'occurrence':1})
            mark=name+'-'+str(len(steps))
            manifest[rid]['focus'][f'{sid}/{mid}/{mark}']=passages
            steps.append({'run':rid,'sample':sid,'message':mid,'mark':mark,'label':step['label']})
        topics[name]={'title':spec['title'],'steps':steps}
        if 'main_positions' in spec:
            topics[name]['main_positions'] = spec['main_positions']
    return topics
