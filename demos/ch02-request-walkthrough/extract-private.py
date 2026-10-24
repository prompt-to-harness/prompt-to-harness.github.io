"""Build trace.json and source-manifest.json from the public 2026-10-24 greeting request. No API calls.

    python3 demos/ch02-request-walkthrough/extract-private.py

Source is courseware/ch02/materials/request/run-20261024/interactive.json, already cleaned by its
export-public.py from the private lab-runs repo. skill-file-excerpt.json is reused: the course HOME's
skill-creator/SKILL.md has the same sha256 as on 2026-10-23.
"""
import hashlib, json
from pathlib import Path

root = Path(__file__).resolve().parent
source = root.parents[1] / 'courseware/ch02/materials/request/run-20261024/interactive.json'
record = json.loads(source.read_text())[0]
body = record['request']['body']
assert len(body['input']) == 6 and body['input'][-1]['content'][0]['text'] == '你好，用一句话介绍你能帮我做什么。'
public = [dict(record, request_id='greeting-main-request', turn=1)]
raw = json.dumps(public, ensure_ascii=False, indent=2) + '\n'
(root / 'trace.json').write_text(raw)
usage = record['response']['body']['usage']
outputs = [o['type'] for o in record['response']['body']['output']]
manifest = {
    'date': '2026-10-24',
    'record': f"问候的初始主请求（输入 {usage['input_tokens']} token）",
    'source': 'courseware/ch02/materials/request/run-20261024/interactive.json 第 1 条',
    'source_sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
    'public_trace_sha256': hashlib.sha256(raw.encode()).hexdigest(),
    'input_messages': len(body['input']),
    'top_level_tools': len(body['tools']),
    'input_tokens': usage['input_tokens'],
    'response_output': outputs,
    'notes': [
        '仅选问候的这一份请求；手动命名后这次没有标题请求。',
        '全部消息正文与工具定义完整保留，无教学删节；鉴权、缓存与会话标识、推理密文不导出，本机路径按角色替换。',
        '这次的响应直接是文字回答，没有工具调用。',
    ],
}
(root / 'source-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
print('greeting request:', manifest['input_messages'], 'messages,', manifest['top_level_tools'], 'tools, input', manifest['input_tokens'], 'output', outputs)
