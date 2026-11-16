"""Select teaching passages from retained original text; never rewrite their content."""
import json
import re
from pathlib import Path


def readable(message):
    text = message.content
    if getattr(message, 'tool_calls', None):
        text = '\n'.join(str(value) for call in message.tool_calls for value in call.arguments.values())
    if not isinstance(text, str):
        text = str(text)
    try:
        value = json.loads(text)
        if isinstance(value, list) and all(isinstance(x, dict) and 'text' in x for x in value):
            text = '\n'.join(x['text'] for x in value)
    except (ValueError, TypeError):
        pass
    return text.replace('\\n', '\n')


def extract_focus(run, samples):
    rules = json.loads(Path(__file__).with_name('inspect-focus.json').read_text())
    messages = {f'{run}/{s.id}/{m.id}': m for s in samples for m in s.messages}
    focus = {}
    for key, patterns in rules.items():
        if not key.startswith(run+'/'): continue
        base = '/'.join(key.split('/')[:3])
        if base not in messages: raise ValueError(f'Missing original message: {key}')
        lines = [line.strip() for line in readable(messages[base]).splitlines() if line.strip()]
        selected = []
        for rule in patterns:
            if isinstance(rule, str):
                indices = [i for i,line in enumerate(lines) if re.search(rule,line,re.I)]
            else:
                start = next(i for i,line in enumerate(lines) if rule['after'] in line)
                end = next((i for i in range(start+1,len(lines)) if rule.get('until') and rule['until'] in lines[i]),len(lines))
                indices = [i for i in range(start,end) if any(re.search(pattern,lines[i],re.I) for pattern in rule['patterns'])]
            for index in indices:
                line=lines[index]
                entry={'text':line, 'occurrence':sum(1 for previous in lines[:index] if previous==line)+1}
                if entry not in selected: selected.append(entry)
        if not selected: raise ValueError(f'No original passage matches: {key}')
        focus['/'.join(key.split('/')[1:])] = selected
    return focus
