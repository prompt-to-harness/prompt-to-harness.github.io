#!/usr/bin/env python3
"""Build a local edit audit with source/output timelines and per-event reasons."""
import argparse
import csv
import json
import os
from pathlib import Path
from urllib.parse import quote

from edit_project import intervals, read, sessions_for, subtract, map_ranges


def intersect(left, right):
    return [[max(a, c), min(b, d)] for a, b in left for c, d in right
            if min(b, d) - max(a, c) > .000001]


def total(spans):
    return sum(b - a for a, b in spans)


def output_time(wall_time, kept):
    return sum(max(0, min(end, wall_time) - start) for start, end in kept if start < wall_time)


def build_data(queue, directory, transcript=None):
    source = Path(queue['source'])
    sessions = sessions_for(source)
    recorded = [[s['start'], s['end']] for s in sessions]
    source_end = recorded[-1][1]
    media, issues = {}, []

    def register(path, key):
        path = Path(path).resolve()
        media[key] = {'path': str(path), 'relative': quote(os.path.relpath(path, directory), safe='/'),
                      'exists': path.is_file()}
        return key

    microphone = next(r for r in read(source / 'recording/metadata.json')['recorders'] if r['type'] == 'microphone')
    audio = []
    for i, (session, mic) in enumerate(zip(sessions, microphone['sessions'])):
        key = register(source / 'recording' / mic['outputFilename'], f'audio-{i}')
        audio.append(dict(start=session['start'], end=session['end'], media=key))
    segments = transcript.get('segments', []) if transcript else []
    validation_path = directory / 'export-validation.json'
    validation = read(validation_path) if validation_path.exists() else {}
    checked = {r['name']: r for r in validation.get('results', [])}
    result = dict(version=1, scope=queue.get('scope', 'examples'), source_name=source.name, source_end=source_end,
                  recorded_seconds=total(recorded), pause_seconds=source_end - total(recorded),
                  recorded_ranges=recorded, media=media, audio=audio, clips=[], issues=issues,
                  zoom_policy='读清小字为主；重要判断少量强调；固定目标，不追随鼠标；人像大小稳定')
    for c in queue['clips']:
        name = c['name']
        keep = intervals(c['wall_keep'])
        cuts = intervals(c.get('wall_cut', []))
        domain = intersect([[keep[0][0], keep[-1][1]]], recorded)
        kept = intersect(subtract(keep, cuts), recorded)
        removed = subtract(domain, kept)
        expected = map_ranges(subtract(keep, cuts), sessions)
        actual = c['source_ranges']
        if len(expected) != len(actual) or any(abs(x - y) > .001 for a, b in zip(expected, actual) for x, y in zip(a, b)):
            raise ValueError(name + '：墙钟记录与实际素材切片不一致，不能生成误导审阅页')
        if abs(total(kept) - c['expected_duration']) > .001:
            raise ValueError(name + '：预计时长与保留范围不一致')
        project_file = Path(c['project']) / 'project.json'
        if project_file.is_file():
            native = read(project_file)['json']['scenes'][0]
            native_ranges = [[s['sourceStartMs']/1000, s['sourceEndMs']/1000] for s in native['slices']]
            if (any(s['timeScale'] != 1 for s in native['slices'])
                    or len(native_ranges) != len(actual)
                    or any(abs(x-y) > .001 for a, b in zip(native_ranges, actual) for x, y in zip(a, b))):
                raise ValueError(name + '：工作项目切片已变化，先同步实际剪辑记录再生成审阅页')
            active_zooms = [z for z in native.get('zoomRanges', []) if not z.get('isDisabled')]
            if len(active_zooms) != len(c.get('zooms', [])):
                issues.append(name + '：工作项目放大数量与记录不一致')
        events, used = [], set()
        details = c.get('cut_details', [])
        for i, (start, end) in enumerate(removed):
            candidates = [(j, d) for j, d in enumerate(details)
                          if d['range'][0] <= start + .001 and d['range'][1] >= end - .001]
            if len(candidates) != 1:
                issues.append(name + f'：删除 {start:.3f}–{end:.3f} 缺少唯一逐条说明')
                detail = {}
            else:
                j, detail = candidates[0]
                used.add(j)
            if not detail.get('reason') or not detail.get('text'):
                issues.append(name + f'：删除 {start:.3f}–{end:.3f} 缺少内容或原因')
            if not detail.get('category') or not detail.get('review_status'):
                issues.append(name + f'：删除 {start:.3f}–{end:.3f} 缺少类型或校对状态')
            matched = [s for s in segments if s['start'] < end and s['end'] > start]
            events.append(dict(id=f'C{i+1:03}', kind='cut', start=start, end=end,
                seconds=end-start, at=output_time(start, kept),
                text=detail.get('text', '待补：尚未登记删除内容'),
                context=' '.join(s['text'] for s in matched),
                source_ids=detail.get('source_ids', [s['id'] for s in matched]),
                reason=detail.get('reason', '待补：未登记逐条删除原因'),
                category=detail.get('category', '待分类'),
                status=detail.get('review_status', '未登记听校状态'),
                retained=detail.get('retained', '')))
        if set(range(len(details))) - used:
            issues.append(name + '：存在未对应实际删除的说明，请检查过期或错误范围')
        for i, zoom in enumerate(c.get('zooms', [])):
            span = intersect([zoom['range']], kept)
            if not span:
                raise ValueError(name + '：放大未覆盖保留内容')
            for field in ('reason', 'target_label'):
                if not zoom.get(field):
                    issues.append(name + '：放大缺少 ' + field)
            if zoom.get('purpose') not in ('reading', 'emphasis'):
                issues.append(name + '：放大需标 reading 或 emphasis')
            events.append(dict(id=f'Z{i+1:03}', kind='zoom', start=zoom['range'][0],
                end=zoom['range'][1], seconds=total(span), at=output_time(span[0][0], kept),
                output_end=output_time(span[-1][1], kept),
                text=zoom.get('target_label', '待补放大目标'), reason=zoom.get('reason', '待补原因'),
                category='阅读小字' if zoom.get('purpose') == 'reading' else '强调判断',
                scale=zoom['scale'], target=zoom['target'],
                status=zoom.get('review_status', '已配置；人工确认状态未登记'), source_ids=[]))
        film = register(c['export'], f'video-{len(result["clips"])}')
        source_seconds = total(domain)
        chapters = [dict(title=x['title'], start=x['start'], at=output_time(x['start'], kept))
                    for x in c.get('chapters', [])]
        events.sort(key=lambda event: (event['start'], event['kind']))
        result['clips'].append(dict(name=name, window=[keep[0][0], keep[-1][1]],
            kept=kept, removed=removed, source_seconds=source_seconds,
            kept_seconds=total(kept), cut_seconds=total(removed),
            cut_percent=100 * total(removed) / source_seconds if source_seconds else 0,
            events=events, chapters=chapters, media=film, notes=c.get('notes', []),
            rendered=media[film]['exists'], validation_ok=checked.get(name, {}).get('ok', False)))
    return result


def write_review(queue_path, transcript_path=None, strict=False):
    queue_path = Path(queue_path).resolve()
    data = build_data(read(queue_path), queue_path.parent,
                      read(transcript_path) if transcript_path else None)
    if strict and data['issues']:
        raise ValueError('\n'.join(data['issues']))
    directory = queue_path.parent
    (directory / 'review.json').write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    template = Path(__file__).with_name('review.html').read_text(encoding='utf-8')
    payload = json.dumps(data, ensure_ascii=False).replace('<', '\\u003c').replace('&', '\\u0026')
    (directory / 'review.html').write_text(template.replace('/*REVIEW_DATA*/null', payload), encoding='utf-8')
    with (directory / 'edit-audit.tsv').open('w', encoding='utf-8', newline='') as stream:
        writer = csv.writer(stream, delimiter='\t')
        writer.writerow(['示例', '事件', '类型', '原片开始秒', '原片结束秒', '秒数', '成片接缝或放大开始秒',
                         '原话或目标', '原因', '保留替代段', '源段ID', '校对状态'])
        for clip in data['clips']:
            for event in clip['events']:
                writer.writerow([clip['name'], event['id'], event['category'], event['start'], event['end'],
                    event['seconds'], event['at'], event['text'], event['reason'], event.get('retained', ''),
                    ','.join(event['source_ids']), event['status']])
    return data


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('queue', type=Path)
    parser.add_argument('--transcript', type=Path)
    parser.add_argument('--strict', action='store_true')
    args = parser.parse_args()
    try:
        data = write_review(args.queue, args.transcript, args.strict)
    except (ValueError, KeyError, OSError) as error:
        parser.exit(1, str(error) + '\n')
    print(args.queue.resolve().parent / 'review.html')
    for clip in data['clips']:
        print(f"{clip['name']}：保留 {clip['kept_seconds']:.3f}s，删除 {clip['cut_seconds']:.3f}s，{len(clip['events'])} 条事件")
    for issue in data['issues']:
        print('待补：' + issue)
