#!/usr/bin/env python3
"""Read complete ED rules without loading the surrounding editorial handbook."""
import argparse
from pathlib import Path
import re
import sys


def extract_rules(text):
    headers = list(re.finditer(r'^### (ED-\d{3})\s+·[^\n]*', text, re.M))
    rules = {}
    for i, header in enumerate(headers):
        key = header.group(1)
        if key in rules:
            raise ValueError(f'重复规则：{key}')
        end = headers[i + 1].start() if i + 1 < len(headers) else len(text)
        block = text[header.start():end]
        section = re.search(r'^## (?!#)', block, re.M)
        if section:
            block = block[:section.start()]
        block = re.sub(r'\n(?:<a id="[^"]+"></a>\s*)+$', '', block)
        rules[key] = block.strip()
    if not rules:
        raise ValueError('未找到 ### ED-NNN · 标题')
    return rules


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('ids', nargs='+', help='ED-001 或 001；可用逗号分隔')
    parser.add_argument('--source', type=Path, default=Path(__file__).resolve().parents[1] / 'docs/production/editorial-checklist.md')
    parser.add_argument('--max-chars', type=int, default=8000, help='单次输出字符上限；超限报错，不截断正文')
    args = parser.parse_args()
    try:
        if args.max_chars <= 0:
            raise ValueError('--max-chars 必须为正整数')
        ids = []
        for value in args.ids:
            for part in value.split(','):
                if not re.fullmatch(r'(?:ED-)?\d{3}', part, re.I):
                    raise ValueError(f'非法编号：{part}；使用 ED-001 或 001')
                key = 'ED-' + part[-3:]
                if key not in ids:
                    ids.append(key)
        rules = extract_rules(args.source.read_text(encoding='utf-8'))
        missing = [key for key in ids if key not in rules]
        if missing:
            raise ValueError('缺少规则：' + ', '.join(missing))
        output = '\n\n'.join(rules[key] for key in ids)
        output += '\n\n<!-- ED-READ-COMPLETE: ' + ', '.join(ids) + ' -->\n'
        if len(output) > args.max_chars:
            sizes = ', '.join(f'{key}={len(rules[key])}' for key in ids)
            raise ValueError(f'输出 {len(output)} 字符超过 {args.max_chars}；按编号分批读取。条目字符数：{sizes}')
        sys.stdout.write(output)
    except (OSError, ValueError) as exc:
        print(f'ED 读取失败：{exc}', file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
