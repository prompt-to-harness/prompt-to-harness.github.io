"""uv run courseware/ch02/lessons/02-iteration/trace/build-viewer.py
从 2.2 的公开记录生成自包含静态查看器 viewer.html（claude-tap 0.1.146 渲染，不调用模型，不提交）。
定位点写在 selection.json：每个点要在指定记录里找到原文，否则停下，不默默沿用；记录指纹变化也停下。
适配层沿用 2.1 已核验的 demos/ch02-static-trace/viewer-bridge.js。"""
import hashlib, json, re, sys
from importlib.metadata import distribution, version
from pathlib import Path
from claude_tap.viewer import _generate_html_viewer_from_records

here = Path(__file__).resolve().parent
repo = here.parents[4]
sys.path.insert(0, str(repo / 'courseware/ch02/tools'))
from lessonkit import keep_scroll_inside
assert version('claude-tap') == '0.1.146'
sel = json.loads((here / 'selection.json').read_text())
raw = (repo / sel['source']).read_bytes()
digest = hashlib.sha256(raw).hexdigest()
if sel['trace_sha256'] != digest:
    raise SystemExit(f'记录已变化（{digest}）：先逐个核对 selection.json 的定位点，再更新 trace_sha256')
records = {r['request_id']: r for r in json.loads(raw)}
points = {}
for p in sel['points']:
    r = records.get(p['request'])
    assert r, p['key'] + ' 的记录不存在'
    part = r['request']['body']['input'] if p['section'] == 'section_messages' else r['response']['body']['output']
    text = json.dumps(part, ensure_ascii=False)
    if p.get('needle'):
        assert p['needle'] in text, p['key'] + ' 在记录里找不到原文：' + p['needle']
    if p.get('callId'):
        assert p['callId'] in text, p['key'] + ' 在记录里找不到调用 ' + p['callId']
    points[p['key']] = {k: p[k] for k in ('request', 'section', 'needle', 'callId') if k in p}
ordered = [json.dumps(r, ensure_ascii=False) for r in json.loads(raw)]
_generate_html_viewer_from_records(ordered, here / 'viewer.html', display_trace_path='trace.json', display_html_path='viewer.html')
s = (here / 'viewer.html').read_text()
s = s.replace("let currentLang = safeLocalStorageGet('claude-tap-lang') || detectLang();", "let currentLang = 'zh-CN'; // 课程默认中文，不改浏览器持久设置")
s = keep_scroll_inside(s)  # 嵌入时不连带滚动外层课件页，见 lessonkit
bridge = (repo / 'demos/ch02-static-trace/viewer-bridge.js').read_text().replace('__COURSE_GUIDE_POINTS__', json.dumps(points, ensure_ascii=False))
s = s.replace('</body>', '<script>\n' + bridge + '\n</script>\n</body>')
# 与 2.1 相同：生成的供应商脚本里把中文写成等价转义，页面文字不变
s = re.sub(r"(<script\b[^>]*>)([\s\S]*?)(</script>)", lambda m: m[1] + re.sub(r"[一-鿿]", lambda c: "\\u%04x" % ord(c[0]), m[2]) + m[3], s)
s = re.sub(r"[一-鿿]", lambda m: "&#x%x;" % ord(m[0]), s)
(here / 'viewer.html').write_text(s)
d = distribution('claude-tap'); lic = next(x for x in d.files if str(x).endswith('licenses/LICENSE'))
(here / 'LICENSE-claude-tap.txt').write_text(d.locate_file(lic).read_text())
print('2.2 static viewer:', len(s.encode()), 'bytes,', len(points), 'points')
