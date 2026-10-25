"""把 2026-10-25 2.4 发布排练的原始记录转成公开 JSON。不调用 API。

    python3 -I courseware/ch02/materials/publish/run-20261025/export-public.py ~/ws/lab-runs/ch02/2.4-20261025-claude

原始记录在私有仓库 prompt-to-harness/lab-runs 的 `ch02/2.4-20261025-claude/`（一个代理 session，记录 1–36）。去掉的内容与 2.3 的
run-20261025 相同：请求头（含鉴权）、include、prompt_cache_key、client_metadata、响应与会话标识、推理的加密部分；本机路径换成
占位、邮箱打码。另外，网页搜索带回的网页正文（回答里 url_citation 的 content）是第三方内容，只留网址、标题和字数。
只导出课件用到的记录（见 KEEP）。输出 trace.json 供 2.4 的静态查看器使用（lessons/04-publish/trace/）。
"""
import json, re, sys
from pathlib import Path

raw_root = Path(sys.argv[1]).expanduser()
here = Path(__file__).resolve().parent
KEEP_BODY = ['model', 'stream', 'input', 'tools', 'tool_choice', 'parallel_tool_calls', 'reasoning', 'store']
KEEP_RESPONSE = ['model', 'status', 'output', 'usage']
# 13：没查网页就说 enablement 默认 true；17：追问后一次回答里打开 27 个网页；18：压缩请求；19：压缩后的第一次请求；
# 33：GET 申请到沙箱外；35：GET 的返回（404）与 POST 申请；36：POST 与复查的返回
KEEP = {13, 17, 18, 19, 33, 35, 36}

records = [json.loads(line) for line in (raw_root / 'records.jsonl').read_text().splitlines()]
assert len(records) == 36 and len({r['_session'] for r in records}) == 1, len(records)
records = [r for r in records if r['_index'] in KEEP]
assert len(records) == len(KEEP)
first = records[0]['request']['body']['input']
env = next(c['text'] for x in first if x.get('type') == 'message' for c in x['content'] if '<cwd>' in c.get('text', ''))
project = re.search(r'<cwd>(.*?)</cwd>', env).group(1)
skills = next(c['text'] for x in first if x.get('type') == 'message' for c in x['content'] if '`r0` =' in c.get('text', ''))
home = re.search(r'- `r0` = `([^`]+)/\.codex/skills/\.system`', skills).group(1)
pairs = [(project, '[project]'), (home, '[course-home]')]


def clean(text):
    for old, new in pairs:
        text = text.replace(old, new)
    text = re.sub(r'/Users/[^\s<>"\'`;,)\\]+', '[local-path]', text)
    text = re.sub(r'(?:/private/tmp|(?:/private)?/var/folders)/[^\s<>"\'`;,)\\]+', '[temporary]', text)
    text = re.sub(r'(?m)^([-dlcbps][rwxsStT-]{9}[@+.]?\s+\d+\s+)(\S+)(\s+)(\S+)(?=\s+\d)', r'\1[user]\3[group]', text)
    text = re.sub(r'\bgh[opsu]_[A-Za-z0-9*]{6,}', 'gh*_[token-masked]', text)
    return re.sub(r'\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b', '[email-redacted]', text)


def walk(v, key=None):
    if isinstance(v, dict):
        if v.get('type') == 'url_citation' and isinstance(v.get('content'), str):
            v = dict(v, content=f"[网页正文 {len(v['content'])} 字，公开数据中略去]")
        return {k: walk(x, k) for k, x in v.items() if k != 'encrypted_content'}
    if isinstance(v, list):
        return [walk(x) for x in v]
    return clean(v) if isinstance(v, str) else v


public = []
for r in records:
    body = {k: r['request']['body'][k] for k in KEEP_BODY if k in r['request']['body']}
    resp = r['response']['body']
    public.append(walk({
        'request_id': f"session-{r['_index']}", 'turn': r['_index'], 'timestamp': r['timestamp'],
        'duration_ms': r.get('duration_ms'),
        'request': {'method': r['request']['method'], 'path': r['request']['path'], 'body': body},
        'response': {'status_code': r['response'].get('status_code', 200),
                     'body': {k: resp[k] for k in KEEP_RESPONSE if k in resp}},
        'capture': {'client': 'codex', 'proxy_mode': 'reverse'}}))
text = json.dumps(public, ensure_ascii=False, indent=2) + '\n'
for secret in ['/Users/', '/private/var/folders/', 'prompt_cache_key', 'client_metadata', 'authorization',
               'encrypted_content', 'safety_identifier']:
    assert secret.lower() not in text.lower(), secret
assert not re.search(r'\bsk-[A-Za-z0-9_-]{12,}|Bearer\s+[A-Za-z0-9]|\bgh[opsu]_[A-Za-z0-9]{8,}', text)
assert not re.search(r'(?m)^[-d][rwx-]{9}@?\s+\d+\s+(?!\[user\])\w', text), 'ls owner'
(here / 'trace.json').write_text(text)
usage = [p['response']['body'].get('usage', {}) for p in public]
print(len(public), 'records;', 'input tokens', [u.get('input_tokens') for u in usage], '; bytes', len(text.encode()))
