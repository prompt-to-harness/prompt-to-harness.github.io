#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validate a complete set of text edits and retain original segment timing."""
import argparse
import csv
import json
from pathlib import Path
import tempfile
import datetime as dt


def timestamp(t):
    ms = round(float(t) * 1000)
    return '%02d:%02d:%02d.%03d' % (ms // 3600000, ms // 60000 % 60, ms // 1000 % 60, ms % 1000)


def validate(source, edits):
    segments = source['segments']
    ids = [x['id'] for x in segments]
    if len(set(ids)) != len(ids):
        raise ValueError('原稿存在重复分段 ID')
    mapped = {}
    for edit in edits:
        if set(edit) - {'id', 'text', 'review_notes'}:
            raise ValueError('润色只允许 id、text、review_notes，不能提交新时间戳')
        ident = edit['id']
        if ident in mapped:
            raise ValueError('重复润色 ID：' + ident)
        if not isinstance(edit.get('text'), str) or not edit['text'].strip():
            raise ValueError('分段文字不能为空；整段只有语气词时保留原文并在备注标记可剪：' + ident)
        notes = edit.get('review_notes', [])
        if not isinstance(notes, list) or any(not isinstance(x, str) for x in notes):
            raise ValueError('review_notes 应为字符串数组：' + ident)
        mapped[ident] = edit
    if set(mapped) != set(ids):
        missing = sorted(set(ids) - set(mapped))
        extra = sorted(set(mapped) - set(ids))
        raise ValueError('润色分段不完整。缺失：%s；多出：%s' % (missing, extra))
    return [dict(id=s['id'], start=s['start'], end=s['end'], original=s['text'],
                 text=mapped[s['id']]['text'].strip(),
                 review_notes=mapped[s['id']].get('review_notes', [])) for s in segments]


def main():
    parser = argparse.ArgumentParser(description='保存润色稿并校验所有原始分段及时间戳')
    parser.add_argument('source', type=Path, help='分段原稿.json')
    parser.add_argument('edits', type=Path, help='完整润色 JSON 数组：id、text、review_notes')
    parser.add_argument('--output', type=Path, help='保存父目录，默认原稿所在目录；自动创建新版本目录')
    args = parser.parse_args()
    source = json.loads(args.source.read_text(encoding='utf-8'))
    edits = json.loads(args.edits.read_text(encoding='utf-8'))
    rows = validate(source, edits)
    parent = (args.output or args.source.resolve().parent).expanduser().resolve()
    project = Path(source['project']).expanduser().resolve()
    if parent.is_relative_to(project):
        raise ValueError('润色输出不能放进原 Screen Studio 项目内')
    parent.mkdir(parents=True, exist_ok=True)
    out = Path(tempfile.mkdtemp(prefix='润色稿-' + dt.datetime.now().strftime('%Y%m%d-%H%M%S') + '-', dir=parent))
    lines = [Path(source['project']).stem, '润色稿｜原录制时间线，保留每段原始时间；非剪辑后成片时间。',
             '未逐字人工听校；不确定的词与剪辑建议见“校对备注.txt”。', '']
    notes = []
    for row in rows:
        mark = '[' + timestamp(row['start']) + ' – ' + timestamp(row['end']) + ']'
        lines.extend([mark + ' ' + row['text'], ''])
        for note in row['review_notes']:
            notes.append(mark + ' ' + row['id'] + '：' + note)
    (out / '润色-带时间戳.txt').write_text('\n'.join(lines), encoding='utf-8')
    (out / '校对备注.txt').write_text('\n'.join(notes) or '未标记待核对项；不代表已完成逐字听音校对。\n', encoding='utf-8')
    (out / '润色分段.json').write_text(json.dumps(dict(project=source['project'],
        track=source['track'], timeline=source['timeline'], segments=rows), ensure_ascii=False, indent=2), encoding='utf-8')
    with (out / '剪辑索引.tsv').open('w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f, delimiter='\t')
        writer.writerow(['ID', '开始', '结束', '润色文字', '原始文字', '校对备注'])
        for row in rows:
            writer.writerow([row['id'], timestamp(row['start']), timestamp(row['end']),
                             row['text'], row['original'], '；'.join(row['review_notes'])])
    print(out)


if __name__ == '__main__':
    main()
