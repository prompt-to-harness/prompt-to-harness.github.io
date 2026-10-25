"""把 2026-10-25 2.3 四要素重跑（两轮改风格、Codex 提交）的原始记录转成公开 JSON。不调用 API。

    python3 -I courseware/ch02/materials/style/run-20261025/export-public.py ~/ws/lab-runs/ch02/2.3-20261025

原始记录在私有仓库 prompt-to-harness/lab-runs 的 `ch02/2.3-20261025/`（一个代理 session，记录 1–54）。去掉的内容与 2.2 的
run-20261024 相同：请求头（含鉴权）、include、prompt_cache_key、client_metadata、响应与会话标识、推理的加密部分；本机路径换成
占位。保留的记录内部没有教学删节，只导出课件用到的记录（见 KEEP）。贴进对话的两张首屏截图以 data URL 原样保留。
输出 trace.json 供 2.3 的静态查看器使用（lessons/03-review/trace/）。
"""
import json, re, sys
from pathlib import Path

raw_root = Path(sys.argv[1]).expanduser()
here = Path(__file__).resolve().parent
KEEP_BODY = ['model', 'stream', 'input', 'tools', 'tool_choice', 'parallel_tool_calls', 'reasoning', 'store']
KEEP_RESPONSE = ['model', 'status', 'output', 'usage']
# Prompt、取参考与返回、挑着读、说出风格并提问、两组回答与计划、Implement；后面的请求带着前面全部内容，所以：
# 贴两张图那一次（前面有第一轮报告）、拒绝截图那一次（前面有 404、找到原图和画法）、提交那一次（前面有第二轮报告和 .git 只读）
KEEP = {1, 3, 5, 8, 10, 12, 14, 15, 16, 27, 37, 54}

records = [json.loads(line) for line in (raw_root / 'records.jsonl').read_text().splitlines()]
assert len(records) == 54 and len({r['_session'] for r in records}) == 1, len(records)
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
    # 系统临时目录换占位；/tmp 下的参考文件名有教学意义，保留
    text = re.sub(r'(?:/private/tmp|(?:/private)?/var/folders)/[^\s<>"\'`;,)\\]+', '[temporary]', text)
    text = re.sub(r'(?m)^([-dlcbps][rwxsStT-]{9}[@+.]?\s+\d+\s+)(\S+)(\s+)(\S+)(?=\s+\d)', r'\1[user]\3[group]', text)
    return re.sub(r'\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b', '[email-redacted]', text)


def walk(v):
    if isinstance(v, dict):
        return {k: walk(x) for k, x in v.items() if k != 'encrypted_content'}
    if isinstance(v, list):
        return [walk(x) for x in v]
    if isinstance(v, str) and v.startswith('data:image/'):
        return v
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
assert not re.search(r'\bsk-[A-Za-z0-9_-]{12,}|Bearer\s+[A-Za-z0-9]', text)
assert not re.search(r'(?m)^[-d][rwx-]{9}@?\s+\d+\s+(?!\[user\])\w', text), 'ls owner'
(here / 'trace.json').write_text(text)
usage = [p['response']['body'].get('usage', {}) for p in public]
print(len(public), 'records;', 'input sum', sum(u.get('input_tokens', 0) for u in usage), '; bytes', len(text.encode()))
