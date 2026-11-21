#!/usr/bin/env python3
"""Adapt archived records to Inspect View without running an evaluation or model.

Run with inspect-ai==0.3.282. All generated logs and the viewer stay in lab-runs.
"""
from pathlib import Path
import hashlib
import importlib.util
import json
import shutil
import sys
from inspect_ai.log import EvalLog, EvalSpec, EvalConfig, EvalDataset, EvalSample, write_eval_log, bundle_log_dir
from inspect_ai.model import ChatMessageUser, ChatMessageAssistant, ChatMessageTool, ChatMessageSystem
from inspect_ai.tool import ToolCall
from inspect_ai.event import InfoEvent
from inspect_focus import extract_focus

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
OUT = ROOT / 'lab-runs/ch03-showcase'
LOGS = OUT / 'inspect-logs'
BUNDLE = OUT / 'inspect'
MODULE = importlib.util.spec_from_file_location('gallery_build', HERE / 'build.py')
gallery = importlib.util.module_from_spec(MODULE)
MODULE.loader.exec_module(gallery)


def safe(value):
    if isinstance(value, str):
        return gallery.clean(value)
    if isinstance(value, list):
        return [safe(v) for v in value]
    if isinstance(value, dict):
        return {k: ('[加密字段保留在源文件]' if k == 'encrypted_content' and v else safe(v)) for k, v in value.items()}
    return value


def text_content(value):
    if isinstance(value, str):
        return value
    return '\n\n'.join(x.get('text', json.dumps(x, ensure_ascii=False)) for x in (value or []))


def messages_for(rows, source, mode):
    messages, mapping, calls = [], {}, {}
    for line, raw in enumerate(rows, 1):
        row = safe(raw)
        p = row.get('payload', {}) if mode == 'session' else row.get('item', {})
        kind = p.get('type')
        mid = f'L{line}'
        meta = {'source_file': source, 'source_line': line, 'record_type': row.get('type'), 'item_type': kind}
        created = []
        if mode == 'session' and row.get('type') == 'response_item':
            if kind == 'message':
                cls = {'user': ChatMessageUser, 'assistant': ChatMessageAssistant, 'system': ChatMessageSystem, 'developer': ChatMessageSystem}.get(p.get('role'), ChatMessageAssistant)
                meta['original_role'] = p.get('role')
                created = [cls(id=mid, content=text_content(p.get('content')), metadata=meta)]
            elif kind == 'reasoning':
                # This is the user's archived third-party model text, not generated commentary.
                content = text_content(p.get('content') or p.get('summary'))
                if content:
                    meta['original_kind'] = 'reasoning'
                    created = [ChatMessageAssistant(id=mid, content=content, metadata=meta)]
            elif kind in ('function_call', 'custom_tool_call'):
                cid = p.get('call_id', mid); name = p.get('name', 'tool'); calls[cid] = name
                value = p.get('arguments', p.get('input', ''))
                created = [ChatMessageAssistant(id=mid, content='', tool_calls=[ToolCall(id=cid, function=name, arguments={'raw_input': value})], metadata=meta)]
            elif kind in ('function_call_output', 'custom_tool_call_output'):
                cid = p.get('call_id', '')
                value = p.get('output', '')
                # Render text blocks with their original line breaks; raw events retain the envelope.
                if isinstance(value, list) and all(isinstance(block, dict) and block.get('type') in ('text', 'input_text', 'output_text') and isinstance(block.get('text'), str) for block in value):
                    value = text_content(value)
                created = [ChatMessageTool(id=mid, content=value if isinstance(value, str) else json.dumps(value, ensure_ascii=False, indent=2), tool_call_id=cid, function=calls.get(cid, 'tool'), metadata=meta)]
        elif mode == 'cli':
            if row.get('type') == 'item.started' and kind == 'command_execution':
                cid = p['id']; calls[cid] = 'command_execution'
                created = [ChatMessageAssistant(id=mid, content='', tool_calls=[ToolCall(id=cid, function='command_execution', arguments={'command': p.get('command', '')})], metadata=meta)]
            elif row.get('type') == 'item.completed':
                if kind == 'command_execution':
                    cid = p['id']
                    if cid not in calls:
                        calls[cid] = 'command_execution'
                        created.append(ChatMessageAssistant(id=mid+'-call', content='', tool_calls=[ToolCall(id=cid, function='command_execution', arguments={'command': p.get('command', '')})], metadata=meta))
                    meta['exit_code'] = p.get('exit_code')
                    created.append(ChatMessageTool(id=mid, content=p.get('aggregated_output', ''), tool_call_id=cid, function='command_execution', metadata=meta))
                else:
                    value = p.get('text')
                    created = [ChatMessageAssistant(id=mid, content=value if isinstance(value, str) else json.dumps(p, ensure_ascii=False, indent=2), metadata=meta)]
            elif row.get('type') in ('error', 'turn.failed'):
                created = [ChatMessageSystem(id=mid, content=json.dumps(row, ensure_ascii=False, indent=2), metadata=meta)]
        if created:
            messages.extend(created)
            mapping[str(line)] = mid
    return messages, mapping


def sample(path, mode, sample_id, input_text, date):
    rows = [json.loads(line) for line in path.read_text().splitlines()]
    messages, mapping = messages_for(rows, path.name, mode)
    if mode == 'cli':
        messages.insert(0, ChatMessageUser(id='prompt', content=safe(input_text), metadata={'source_file':'memory-prompt.txt'}))
    events = [InfoEvent(uuid=f'raw-L{i}', timestamp=row.get('timestamp') or date,
                        source=f'{path.name}:{i}', data=safe(row),
                        metadata={'source_line': i, 'timestamp_recorded': bool(row.get('timestamp'))})
              for i, row in enumerate(rows, 1)]
    value = EvalSample(id=sample_id, epoch=1, input=safe(input_text), target='', messages=messages, events=events,
                       metadata={'source_file': path.name, 'source_sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
                                 'raw_records': len(rows), 'presentation': '消息按源顺序显示；Transcript 保留源 JSON。路径、凭据和图片数据按展示规则处理；加密字段仅留在源文件。没有新增摘要、评分或运行结果。'})
    return value, mapping, rows


def build():
    LOGS.mkdir(parents=True, exist_ok=True)
    records = json.loads((OUT / 'data.js').read_text().split('=', 1)[1].strip().rstrip(';'))
    records = {r['id']: r for r in records}
    rollouts = gallery.scan_sources()
    snapshot = Path(json.loads((ROOT / 'lab-runs/ch03-minimax-20261106/snapshot-location.json').read_text())['path']) / 'experiment'
    design = ROOT / 'lab-runs/ch03-design-decisions-20261108/rollout-2026-11-06T17-03-18-01a1b019-1faa-7de1-972b-dbc888fb184b.jsonl'
    case_map = {r['archive_id']:r for r in json.loads((HERE/'case-map.json').read_text())['cases']}
    screen_plan = ROOT / 'courseware/ch03/lessons/01-memory-game/screen-plan.json'
    demo_prompt = json.loads(screen_plan.read_text())['prompts']['initial-request']['text']
    manifest = {}
    raw_files = {}
    for rid in ['a1', 'a2', 'b2', 'old5', 'mm-memory', 'f1']:
        record = records[rid]
        date = record['date'] + 'T00:00:00Z'
        samples, maps = [], {}
        trace = json.loads((OUT / 'traces' / f'{rid}.json').read_text())
        if rid == 'old5':
            # Import the actual retained export, not the gallery's reconstructed trace.
            archive = json.loads((ROOT / 'courseware/ch03/runs/data.js').read_text().split('=', 1)[1].strip().rstrip(';'))
            run = next(r for r in archive['runs'] if r['id'].endswith('-5'))
            entries = [('prompt', archive['prompt'], ChatMessageUser), ('plan', run['plan'], ChatMessageAssistant), ('confirm', archive['confirm'], ChatMessageUser)]
            entries += [(f'timeline-{i+1}', t['t'], ChatMessageAssistant) for i,t in enumerate(run['timeline'])]
            entries += [('answer', run['answer'], ChatMessageAssistant), ('diff', run['diff'], ChatMessageAssistant)]
            msgs = [cls(id=key, content=('```diff\n'+safe(value)+'\n```') if key=='diff' else safe(value), metadata={'source': 'courseware/ch03/runs/data.js', 'field': key, 'boundary': '历史导出；原始完整运行日志缺失'}) for key,value,cls in entries]
            samples.append(EvalSample(id='archive', epoch=1, input=archive['prompt'], target='', messages=msgs,
                                     events=[InfoEvent(uuid='archive', timestamp=date, source='data.js', data=safe(run))],
                                     metadata={'source_file':'courseware/ch03/runs/data.js', 'archive_run_id':run['id'], 'source_sha256':hashlib.sha256((ROOT/'courseware/ch03/runs/data.js').read_bytes()).hexdigest(), 'boundary': '原始完整运行日志缺失。计划、交付和 diff 按现存导出原文展示；timeline 是当时保存的步骤节选，不是完整日志。'}))
            maps['archive'] = {str(i+1): key for i,(key,_,_) in enumerate(entries)}
            raw_files[f'{rid}-archive.json'] = json.dumps(safe({'prompt': archive['prompt'], 'confirm': archive['confirm'], 'run':run}), ensure_ascii=False, indent=2)
        else:
            inputs = [('session', design, 'session'), ('cli', snapshot/'memory-events.jsonl', 'cli')] if rid == 'mm-memory' else [('session', rollouts[record['sid']], 'session')]
            for sid, path, mode in inputs:
                value, mapping, rows = sample(path, mode, sid, record['prompt'], date)
                samples.append(value); maps[sid] = mapping
                raw_files[f'{rid}-{sid}.jsonl'] = '\n'.join(json.dumps(safe(r), ensure_ascii=False) for r in rows)+'\n'
        if rid in {'old5', 'mm-memory'}:
            sample_id = 'archive' if rid == 'old5' else 'cli'
            presentation_sample = next(value for value in samples if value.id == sample_id)
            prompt_message = next(m for m in presentation_sample.messages if m.id == 'prompt' and m.role == 'user')
            if rid == 'mm-memory':
                raw_files['mm-memory-cli-prompt.txt'] = prompt_message.content
            prompt_message.content = demo_prompt
            prompt_message.metadata = {
                'display': '3.1.2 课件演示版',
                'boundary': '该请求为课件展示文案，后续执行记录来自历史运行。',
            }
            presentation_sample.input = demo_prompt
        log = EvalLog(status='success', eval=EvalSpec(created=date, task='ch03_'+rid.replace('-','_'), task_display_name=case_map[rid]['display_id']+' 号游戏',
                       task_description='历史记录格式转换；success 只表示导入完成，不代表游戏验收通过。未运行模型或评测。',
                       model=record['model'], dataset=EvalDataset(name='历史开发记录', samples=len(samples)), config=EvalConfig()), samples=samples,
                       metadata={'import_only': True, 'boundary': '原始材料的本地展示；非本次评测或新实验'})
        filename = f'{record["date"]}T00-00-00_ch03_{rid}.json'
        write_eval_log(log, LOGS/filename, format='json')
        event_map = {}
        for e in trace['events']:
            sid = 'archive' if rid == 'old5' else 'cli' if rid == 'mm-memory' else 'session'
            key = str(e['n']) if sid == 'archive' else str(e['line'])
            if rid == 'mm-memory' and e['source'] == 'memory-prompt.txt':
                event_map[str(e['n'])] = {'sample':'cli', 'message':'prompt'}
            if key in maps[sid]: event_map[str(e['n'])] = {'sample':sid, 'message':maps[sid][key]}
        tool_targets = {}
        row_maps = {}
        for value in samples:
            positions, call_rows, row = {}, {}, 0
            for message in value.messages:
                if message.role == 'tool':
                    positions[message.id] = call_rows.get(message.tool_call_id, max(0, row-1))
                else:
                    positions[message.id] = row
                    for call in getattr(message, 'tool_calls', None) or []:
                        call_rows[call.id] = row
                    row += 1
            row_maps[str(value.id)] = positions
            call_text = {call.id: next(iter(call.arguments.values()), '') for m in value.messages for call in (getattr(m, 'tool_calls', None) or [])}
            targets = {}
            for m in value.messages:
                if getattr(m, 'tool_calls', None): targets[m.id] = str(call_text[m.tool_calls[0].id])[:1000]
                elif m.role == 'tool' and m.tool_call_id in call_text: targets[m.id] = str(call_text[m.tool_call_id])[:1000]
            tool_targets[str(value.id)] = targets
        manifest[rid] = {'file': filename, 'title':case_map[rid]['display_id']+' 号游戏', 'display_id':case_map[rid]['display_id'], 'original_name':case_map[rid]['original_name'], 'archive_id':rid, 'sources':[{'sample':str(v.id), **v.metadata} for v in samples], 'maps':maps, 'rows':row_maps, 'tool_targets':tool_targets, 'focus':extract_focus(rid, samples), 'events':event_map, 'full':rid!='old5'}
    manifest['mm-memory']['prompt_source'] = {'cli': 'raw/mm-memory-cli-prompt.txt'}
    from inspect_process import add_records
    topics = add_records(sys.modules[__name__], manifest, raw_files)
    bundle_log_dir(str(LOGS), str(BUNDLE), overwrite=True)
    (BUNDLE/'course-topics.json').write_text(json.dumps(topics, ensure_ascii=False, indent=2))
    (BUNDLE/'raw').mkdir(exist_ok=True)
    for name, content in raw_files.items(): (BUNDLE/'raw'/name).write_text(content)
    (BUNDLE/'course-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
    shutil.copyfile(HERE/'inspect-navigation.js', BUNDLE/'course-navigation.js')
    index = BUNDLE/'index.html'
    index.write_text(index.read_text().replace('</body>', '<script src="course-navigation.js"></script></body>'))
    print(f'Built Inspect View: {BUNDLE}; {len(manifest)} cases, original records + source mapping')

if __name__ == '__main__':
    build()
