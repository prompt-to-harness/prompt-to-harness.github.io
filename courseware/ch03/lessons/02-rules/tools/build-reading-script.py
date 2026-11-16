#!/usr/bin/env python3
"""将 3.2.2–3.2.3 的已有口播接入讲述线与编辑、评论节点。"""
import json
from urllib.parse import urlsplit, parse_qs, quote
from pathlib import Path

HERE = Path(__file__).resolve().parents[1]

def build():
    from markdown_it import MarkdownIt
    evidence = HERE.parents[1] / 'materials/playtest-old5-20261111'
    body = MarkdownIt('commonmark', {'html': True}).enable('table').render((evidence / 'README.md').read_text())
    body = body.replace('<p><code>a-discover/continued-events.jsonl', '<a id="run-a-output"></a><p><code>a-discover/continued-events.jsonl')
    body = body.replace('<p>以下是 <code>a-discover/continued-reply.md', '<a id="run-a-report"></a><p>以下是 <code>a-discover/continued-reply.md')
    (evidence / 'evidence.html').write_text('''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>3.2.3 三轮预跑材料</title><style>body{max-width:960px;margin:40px auto;padding:0 24px;font:18px/1.75 system-ui;color:#222}img{max-width:100%}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f3f4f5;padding:20px}table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:10px}a{color:#175c9d}h2{margin-top:64px}</style><main>''' + body.replace('<a name=', '<a id=') + '</main></html>\n')
    scripts = json.loads((HERE / 'script.json').read_text())
    plan = json.loads((HERE / 'screen-plan.json').read_text())
    reading = plan['reading']
    lesson = json.loads((HERE / 'lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
    ppt_ids = lesson['readingSceneIds']
    ppt_by_id = {s['id']: s for s in lesson['scenes'] if s['id'] in ppt_ids}
    frames, items, scenes = [], {}, []
    reading['recordingFrames'] = {}
    placements = [(number, scene) for number, sources in reading['placements'].items() for scene in sources]
    assert sorted(scene for _, scene in placements) == sorted(reading['routes'])
    for number, scene in placements:
        title = reading['recordingLabels'][scene]
        frame_id = f'b{30 + int(scene.rsplit("-", 1)[1])}'
        group = next(unit['group'] for unit in reading['units'] if unit['section'] == number.rsplit('.', 1)[0])
        reuse, screens = [], []
        coverage = []
        for route in reading['routes'][scene]:
            step = route['step']
            parts = scripts[scene][step].split('\n\n')
            indices = []
            for part in route.get('parts', range(1, len(parts))):
                assert part > 0 and part < len(parts), (scene, step, part)
                coverage.append((step, part))
                indices.append(len(reuse))
                reuse.append({'scene':scene, 'step':step, 'part':part})
            for key in route['materials']:
                assert key in reading['materials'], key
            surface = route['surface']
            action = route.get('action', parts[0].split('｜', 1)[1][:-1])
            for key in route['materials']:
                target = urlsplit(reading['materials'][key]['url'])
                if target.fragment not in ppt_by_id or not target.path.endswith('index.html'):
                    continue
                page = ppt_by_id[target.fragment]
                ordinal = ppt_ids.index(target.fragment) + 1
                state = int(parse_qs(target.query).get('step', ['0'])[0])
                assert 0 <= state < len(page['steps']), (key, state)
                surface = f"PPT 第 {ordinal} 页 · {page['title']}"
                if len(page['steps']) > 1:
                    surface += f" · 第 {state + 1} 步：{page['steps'][state]}"
                action = '打开此页，' + ('停在对应展开状态' if len(page['steps']) > 1 else '展示当前画面')
                reading['materials'][key]['label'] = f"PPT {ordinal} · {page['title']}" + (f"（第 {state+1} 步）" if len(page['steps']) > 1 else '')
                break
            screens.append({'surface':surface, 'action':action,
                            'materials':route['materials'], 'reuse':indices})
        expected = [(step, part) for step, block in enumerate(scripts[scene])
                    for part in range(1, len(block.split('\n\n')))]
        assert coverage == expected, (scene, coverage, expected)
        frames.append({'id':frame_id, 'title':title, 'group':group, 'screens':screens,
                       'reuse':reuse, 'status':'按实际操作映射原文定位、PPT 页与展开状态；口播来自 script.json。'})
        if number.startswith('3.2.2.'):
            items.setdefault('3.2.2', []).append({'frame':frame_id, 'title':title, 'screens':screens})
        else:
            reading['recordingFrames'].setdefault(number, []).append(frame_id)
        scenes.append({'id':scene, 'label':title, 'script':scripts[scene]})
    for frame in reading.get('plannedFrames', []):
        planned_screens = [screen.copy() for screen in frame['screens']]
        source = frame.get('scriptSource')
        frame['reuse'] = []
        used = []
        screen_sources = set()
        for screen in frame['screens']:
            assert all(key in reading['materials'] for key in screen['materials'])
            screen_source = screen.get('scriptSource', source)
            if screen_source:
                screen_sources.add(screen_source)
                step = screen['scriptStep']
                parts = scripts[screen_source][step].split('\n\n')
                assert parts[0].startswith('【操作提示｜'), (source, step)
                screen['action'] = parts[0].split('｜', 1)[1][:-1]
                screen['reuse'] = []
                for part in range(1, len(parts)):
                    screen['reuse'].append(len(frame['reuse']))
                    frame['reuse'].append(dict(scene=screen_source, step=step, part=part))
                    used.append((step, part))
                if screen.get('ppt'):
                    page = ppt_by_id[screen['ppt']['id']]
                    state = screen['ppt']['step']
                    assert state < len(page['steps'])
                    screen['surface'] = f"PPT {page['id']} · {page['title']} · 第 {state+1} 步：{page['steps'][state]}"
        if source:
            expected = [(step, part) for step, block in enumerate(scripts[source]) for part in range(1, len(block.split('\n\n')))]
            assert sorted(used) == expected, (source, used, expected)
            scenes.append(dict(id=source, label=frame['title'], script=scripts[source]))
        if not source:
            screen_sources.update(ref['scene'] for ref in frame.get('previousReuse', []))
            for preserved_source in sorted(screen_sources):
                scenes.append(dict(id=preserved_source, label=frame['title'], script=scripts[preserved_source]))
        number = frame['number']
        existing = reading['recordingFrames'].get(number, [])
        for old in frames:
            if old['id'] in existing:
                old['historical'] = True
                old['title'] = '已有口播取材 · ' + old['title']
                old['boundary'] = '历史取材：原稿及编辑坐标保留。当前录制采用上方三轮讲述线。'
        reading['recordingFrames'][number] = [frame['id'], *existing]
        items.setdefault(number.rsplit('.', 1)[0], []).append({
            'frame':number, 'title':f"{number} {frame['title']}",
            'screens':planned_screens, 'recordingFrames':reading['recordingFrames'][number],
            **({'legacyAliases':frame['legacyAliases']} if frame.get('legacyAliases') else {}),
        })
    reading['frames'] = [*frames, *reading.get('plannedFrames', [])]
    reading['contentDesign'] = {'units':[
        {'title':f"{unit['section']} {unit['group']}", 'section':unit['section'],
         'discussion':f"../../../../docs/outline/ch03-discussion.md#:~:text={quote(unit['section'] + ' ' + unit['group'])}",
         'items':items.get(unit['section'], []),
         **({'pptPlan':reading['pluginSlidePlan']} if unit['section'] == '3.2.4' else {})}
        for unit in reading['units']
    ]}

    payload = 'window.readingPlan = ' + json.dumps(reading, ensure_ascii=False, indent=2) + ';\n'
    payload += """(() => {
 const p = new URLSearchParams(location.search);
 if (p.has('archive') || p.has('legacy') || location.pathname.endsWith('/speaker-archive.html')) return;

 window.lesson.scenes.push(...""" + json.dumps(scenes, ensure_ascii=False) + ");\n})();\n"
    (HERE / 'reading-data.js').write_text(payload)

if __name__ == '__main__':
    build()
