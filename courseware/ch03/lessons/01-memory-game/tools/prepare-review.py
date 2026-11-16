#!/usr/bin/env python3
"""Prepare a local-only lecture entry redirecting to the single gallery or Inspect.

No model call, game modification, or public raw-log export. Re-run after the
gallery shell changes. The gallery's normal index and source tools are untouched.
"""
from pathlib import Path
import json
from urllib.parse import urlparse, parse_qs

HERE = Path(__file__).resolve().parents[1]
ROOT = HERE.parents[3]
OUT = ROOT / 'lab-runs/ch03-showcase'
source = OUT / 'index.html'
if not source.exists():
    raise SystemExit('Missing local gallery: run tools/ch03-showcase/build.py with the archived materials first.')
plan = json.loads((HERE / 'screen-plan.json').read_text())
for frame in plan['frames']:
    for _, url in frame['links']:
        query = parse_qs(urlparse(url).query)
        if 'run' in query and 'event' in query:
            rid, number = query['run'][0], int(query['event'][0])
            trace = json.loads((OUT / 'traces' / f'{rid}.json').read_text())
            assert any(e['n'] == number for e in trace['events']), (rid, number)
html = '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>材料入口</title><p>正在打开材料…</p><script src="lecture-route.js"></script></html>'
(OUT / 'lecture.html').write_text(html)
(OUT / 'lecture-route.js').write_text((HERE / 'tools/lecture-route.js').read_text())
print('Prepared local lecture.html; all referenced event numbers exist; original gallery unchanged.')
