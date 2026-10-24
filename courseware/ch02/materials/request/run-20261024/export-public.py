"""Turn the private 2026-10-24 re-run records into public JSON. No API calls.

    python3 courseware/ch02/materials/request/run-20261024/export-public.py ~/ws/lab-runs/ch02/2.1-20261024

Raw records live in the private prompt-to-harness/lab-runs repo. Removed here: request headers (auth),
the include option, prompt_cache_key, client_metadata, response/session identifiers, and the encrypted part of reasoning.
Everything the model was sent or returned in readable form stays, including reasoning text: no
teaching cuts. Local paths become placeholders.
"""
import json, re, sys
from pathlib import Path

raw_root = Path(sys.argv[1]).expanduser()
here = Path(__file__).resolve().parent
KEEP_BODY = ['model', 'stream', 'input', 'tools', 'tool_choice', 'parallel_tool_calls', 'reasoning', 'store']
KEEP_RESPONSE = ['model', 'status', 'output', 'usage']


def placeholders(records):
    env = records[0]['request']['body']['input'][4]['content'][0]['text']
    project = re.search(r'<cwd>(.*?)</cwd>', env).group(1)
    skills = records[0]['request']['body']['input'][1]['content'][0]['text']
    home = re.search(r'- `r0` = `([^`]+)/\.codex/skills/\.system`', skills).group(1)
    return [(project, '[project]'), (home, '[course-home]')]


def cleaner(pairs):
    def clean(text):
        for old, new in pairs:
            text = text.replace(old, new)
        text = re.sub(r'/Users/[^\s<>"\'`;,)]+', '[local-path]', text)
        text = re.sub(r'/private/(?:var/folders|tmp)/[^\s<>"\'`;,)]+', '[temporary]', text)
        # ls -l owner/group columns carry the local account name
        text = re.sub(r'(?m)^([-dlcbps][rwxsStT-]{9}[@+.]?\s+\d+\s+)(\S+)(\s+)(\S+)(?=\s+\d)', r'\1[user]\3[group]', text)
        return re.sub(r'\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b', '[email-redacted]', text)

    def walk(v):
        if isinstance(v, dict):
            return {k: walk(x) for k, x in v.items() if k != 'encrypted_content'}
        if isinstance(v, list):
            return [walk(x) for x in v]
        return clean(v) if isinstance(v, str) else v
    return walk


summary = {}
for arm in ('interactive', 'plain', 'named'):
    records = [json.loads(line) for line in (raw_root / arm / 'records.jsonl').read_text().splitlines()]
    walk = cleaner(placeholders(records))
    public = []
    for r in records:
        body = {k: r['request']['body'][k] for k in KEEP_BODY if k in r['request']['body']}
        resp = r['response']['body']
        public.append(walk({
            'request_id': f"{arm}-{r['_index']}", 'turn': r['_index'], 'timestamp': r['timestamp'],
            'duration_ms': r.get('duration_ms'),
            'request': {'method': r['request']['method'], 'path': r['request']['path'], 'body': body},
            'response': {'status_code': r['response'].get('status_code', 200),
                         'body': {k: resp[k] for k in KEEP_RESPONSE if k in resp}},
            'capture': {'client': 'codex', 'proxy_mode': 'reverse'}}))
    text = json.dumps(public, ensure_ascii=False, indent=2) + '\n'
    for secret in ['/Users/', '/private/var/folders/', 'prompt_cache_key', 'client_metadata', 'authorization',
                   'encrypted_content', 'safety_identifier']:
        assert secret.lower() not in text.lower(), (arm, secret)
    assert not re.search(r'\bsk-[A-Za-z0-9_-]{12,}|Bearer\s+[A-Za-z0-9]', text), arm
    assert '[教学删节' not in text
    assert not re.search(r'(?m)^[-d][rwx-]{9}@?\s+\d+\s+(?!\[user\])\w', text), (arm, 'ls owner')
    (here / f'{arm}.json').write_text(text)
    usage = [p['response']['body'].get('usage', {}) for p in public]
    calls = sum(1 for p in public for o in p['response']['body'].get('output', []) if o.get('type', '').endswith('_call'))
    summary[arm] = {'records': len(public), 'tool_calls': calls,
                    'input_tokens_sum': sum(u.get('input_tokens', 0) for u in usage),
                    'cached_input_tokens_sum': sum((u.get('input_tokens_details') or {}).get('cached_tokens', 0) for u in usage),
                    'output_tokens_sum': sum(u.get('output_tokens', 0) for u in usage),
                    'first_input_tokens': usage[0].get('input_tokens')}
(here / 'summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n')
print(json.dumps(summary, ensure_ascii=False))
