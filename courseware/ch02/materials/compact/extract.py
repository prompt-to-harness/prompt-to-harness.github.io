#!/usr/bin/env python3
"""从 claude-tap 记录中取出一轮压缩实验的三次请求，打印对照指标；可选写出脱敏的参考记录。

用法：python3 extract.py <claude-tap 会话 id> [--out reference/<日期>-requests.json]
只保留 input 条目的类型、角色和文字；系统指令、工具定义、请求头、条目 id、推理内容不写出，本机 HOME 改为 ~/。
"""
import json, os, re, sqlite3, sys

DB = os.path.join(os.environ.get('XDG_DATA_HOME', os.path.expanduser('~/.local/share')), 'claude-tap', 'traces.sqlite3')
COMPACT_MARK = 'CONTEXT CHECKPOINT COMPACTION'


def load(session):
    db = sqlite3.connect(DB)
    blobs = {h: json.loads(p) for h, p in db.execute('select hash, payload_json from record_blobs where session_id=?', (session,))}

    def res(x):
        if isinstance(x, dict):
            if '__claude_tap_blob_ref__' in x:
                return res(blobs[x['__claude_tap_blob_ref__']['hash']])
            return {k: res(v) for k, v in x.items()}
        if isinstance(x, list):
            return [res(v) for v in x]
        return x

    rows = db.execute('select payload_json from records where session_id=? order by record_index', (session,))
    return [res(json.loads(p)['record']) for (p,) in rows]


def body(rec):
    b = rec['request'].get('body')
    return json.loads(b) if isinstance(b, str) else b


def text(item):
    if item.get('type') == 'message':
        return '\n'.join(c.get('text', '') for c in item['content'] if isinstance(c, dict))
    out = item.get('output')
    return out if isinstance(out, str) else json.dumps(out, ensure_ascii=False) if out else str(item.get('arguments') or '')


def slim(item):
    t = item.get('type')
    out = {'type': t, **({'role': item['role']} if 'role' in item else {})}
    if t == 'message':
        out['text'] = text(item)
    elif t.endswith('_call'):
        out['name'] = item.get('name')
        out['arguments'] = item.get('arguments') or item.get('input')
    elif t.endswith('_output'):
        out['output'] = text(item)
    elif t == 'reasoning':
        out['note'] = '（推理条目，内容省略）'
    return out


def response_text(rec):
    b = rec['response'].get('body')
    if not isinstance(b, dict):
        return ''
    return ''.join(c['text'] for o in (b.get('response') or b).get('output', []) for c in (o.get('content') or []) if c.get('type') == 'output_text')


def main():
    session = sys.argv[1]
    recs = [r for r in load(session) if r['request'].get('path', '').endswith('/responses')]
    # 去掉为会话起标题的辅助请求，只留主对话与压缩请求
    main_recs = [r for r in recs if 'task title' not in json.dumps(body(r)['input'], ensure_ascii=False)]
    ci = next((i for i, r in enumerate(main_recs) if COMPACT_MARK in text(body(r)['input'][-1])), None)
    if ci is None:  # 对照组（SKIP_COMPACT=1）：没有压缩，只报最后一次请求
        last = main_recs[-1]
        items = body(last)['input']
        print(json.dumps({'session': session, 'compacted': False, 'items': [len(items)],
                          'tool_outputs': [sum(1 for i in items if i.get('type', '').endswith('_output'))],
                          'answer': response_text(last)}, ensure_ascii=False, indent=1))
        return
    picked = {'before_compact': main_recs[ci - 1], 'compact_request': main_recs[ci], 'after_compact': main_recs[ci + 1]}

    before, after = (body(picked[k])['input'] for k in ('before_compact', 'after_compact'))
    summary = response_text(picked['compact_request'])
    answer = response_text(picked['after_compact'])
    tool_outputs = lambda items: sum(1 for i in items if i.get('type', '').endswith('_output'))
    all_text = json.dumps([body(r) for r in recs], ensure_ascii=False)
    print(json.dumps({
        'session': session,
        'compacted': True,
        'items': [len(before), len(after)],
        'tool_outputs': [tool_outputs(before), tool_outputs(after)],
        'text_chars': [sum(len(text(i)) for i in before), sum(len(text(i)) for i in after)],
        'repo_agents_md_loaded': 'Vibe Coding：从 Prompt 到 Harness' in all_text,
        'summary': summary,
        'answer': answer,
    }, ensure_ascii=False, indent=1))

    if '--out' in sys.argv:
        path = sys.argv[sys.argv.index('--out') + 1]
        data = {'requests': {k: {'input_items': len(body(r)['input']), 'input': [slim(i) for i in body(r)['input']]} for k, r in picked.items()}}
        data['requests']['compact_request']['summary'] = summary
        data['requests']['after_compact']['response_text'] = answer
        s = json.dumps(data, ensure_ascii=False, indent=1).replace(os.path.expanduser('~') + '/', '~/')
        s = re.sub(r'home\.[A-Za-z0-9]{6}', 'home.XXXXXX', s)
        with open(path, 'w') as f:
            f.write(s + '\n')


if __name__ == '__main__':
    main()
