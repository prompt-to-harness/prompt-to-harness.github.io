"""Reading excerpts from the same 10-24 public records used by the raw viewer."""
import json
from html import escape
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
RECORDS = {r['request_id']: r for r in json.loads((ROOT / '../../materials/iteration/run-20261024/trace.json').read_text())}

def text(value):
    if isinstance(value, str):
        return value
    if isinstance(value, list):
        return '\n'.join(text(v) for v in value)
    for key in ('text', 'content', 'output', 'input', 'arguments'):
        if key in value:
            return text(value[key])
    return ''

def item(n, index):
    return text(RECORDS[f'session-{n}']['request']['body']['input'][index])

def answer(n):
    return text([x for x in RECORDS[f'session-{n}']['response']['body']['output'] if x['type'] == 'message'])

def excerpt(raw, needle):
    result = '\n'.join(line for line in raw.splitlines() if needle in line)
    assert result, needle
    return result

def card(label, raw, shown=None):
    shown = raw if shown is None else shown
    assert shown and all(line in raw for line in shown.splitlines()), label
    more = '' if shown == raw else f'<details><summary>展开该项完整原文</summary><pre>{escape(raw)}</pre></details>'
    return f'<article><h3>{escape(label)}</h3><pre>{escape(shown)}</pre>{more}</article>'

def reading_panels(items):
    profile = item(8, 8)
    summary = item(28, 7)
    # Exact source selections; indexes are zero-based and checked against visible phrases.
    rules = item(6, 4)
    retry = text([x for x in RECORDS['session-10']['response']['body']['output'] if x['type'] == 'custom_tool_call'])
    panels = {
        'p22-rules-msg': card('项目规则 · 原文节选', rules, '# 项目规则\n- 不新增依赖\n- 修改代码后运行 npm run build，并报告结果') + card('本轮任务 · 原文', item(6, 5)),
        'p22-profile-result': card('读取调用 · 原文', item(8, 7)) + card('工具返回 · 资料节选', profile, excerpt(profile, 'DeepMotion.ai')),
        'p22-answers-msg': card('之前读到的资料 · 原文节选', item(14, 8), excerpt(profile, 'DeepMotion.ai')) + card('交互题回答 · 原文', item(14, 24)),
        'p22-implement-msg': card('新增模式指令 · 原文节选', item(16, 27), excerpt(item(16, 27), '# Collaboration Mode: Default')) + card('实施确认 · 原文', item(16, 28)),
        'p24-fail-result': card('失败的工具返回 · 原文', item(10, 12)),
        'p24-retry-call': card('模型重新发出的读取调用 · 原文', retry),
        'p24-later-msg': card('压缩前请求中仍保留的失败返回 · 原文', item(25, 12)),
        'p27-before-msg': card('压缩前的资料返回 · 原文节选', item(25, 8), excerpt(profile, 'DeepMotion.ai')),
        'p27-summary-msg': card('交接摘要 · 原文节选', summary, excerpt(summary, 'Handoff Summary') + '\n' + excerpt(summary, 'experience')),
        'p27-noquote-answer': card('只凭摘要的回答 · 原文', answer(28)),
        'p27-reread-answer': card('重新读取的工具返回 · 原文节选', item(31, 14), excerpt(item(31, 14), 'DeepMotion.ai')) + card('重读后的回答 · 原文', answer(31)),
    }
    return '<div class="tl2-reading">' + ''.join(f'<section data-reading-key="{key}" {"hidden" if i else ""}><p class="tl2-source">10-24 本次记录 · {escape(title)}</p>{panels[key]}</section>' for i, (key, title, _) in enumerate(items)) + '</div>'
