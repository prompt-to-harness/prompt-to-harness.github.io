#!/usr/bin/env python3
"""在 claude-tap 记录的某个会话里，逐次请求查找若干文字是否出现，可选把第 N 次请求的全文写出供人读。

用法：python3 reqscan.py <claude-tap 会话 id> [--dump N 文件] 文字1 文字2 …
只读本机 claude-tap 数据库；写出的全文含本机路径，留在 lab-runs/，不提交。
"""
import json, os, sqlite3, sys

DB = os.path.join(os.environ.get('XDG_DATA_HOME', os.path.expanduser('~/.local/share')), 'claude-tap', 'traces.sqlite3')


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


def main():
    args = sys.argv[1:]
    session, dump = args.pop(0), None
    if args[:1] == ['--dump']:
        dump = (int(args[1]), args[2]); args = args[3:]
    recs = load(session)
    for i, r in enumerate(recs, 1):
        b = r['request'].get('body')
        s = b if isinstance(b, str) else json.dumps(b, ensure_ascii=False)
        hits = {w: s.count(w) for w in args}
        print(f'请求 {i}：{len(s)} 字符；' + '；'.join(f'{w}×{n}' for w, n in hits.items()))
        if dump and dump[0] == i:
            body = json.loads(b) if isinstance(b, str) else b
            with open(dump[1], 'w') as f:
                json.dump(body, f, ensure_ascii=False, indent=1)
    if not recs:
        print('没有记录')


if __name__ == '__main__':
    main()
