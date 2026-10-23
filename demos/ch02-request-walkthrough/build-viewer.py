"""Build a self-contained viewer from the redacted existing capture. No API calls."""
import hashlib,json
from pathlib import Path
from importlib.metadata import distribution,version
from claude_tap.viewer import _generate_html_viewer_from_records
root=Path(__file__).resolve().parent
assert version('claude-tap')=='0.1.146'
raw=(root/'trace.json').read_bytes();manifest=json.loads((root/'source-manifest.json').read_text())
assert manifest['public_trace_sha256']==hashlib.sha256(raw).hexdigest(),'Public data changed; re-check provenance before building.'
records=json.loads(raw);assert len(records)==1
texts=[c['text'] for m in records[0]['request']['body']['input'] for c in m['content']]
for needle in ['You are Codex','<skills_instructions>','<permissions instructions>','<environment_context>']:
 assert sum(needle in x for x in texts)==1,needle
assert any(t.get('name')=='exec' for t in records[0]['request']['body']['tools'])
out=root/'viewer.html';_generate_html_viewer_from_records([json.dumps(x,ensure_ascii=True) for x in records],out,display_trace_path='trace.json',display_html_path='viewer.html')
s=out.read_text().replace("let currentLang = safeLocalStorageGet('claude-tap-lang') || detectLang();","let currentLang = 'zh-CN';")
s=s.replace('</body>','<script>\n'+(root/'viewer-bridge.js').read_text()+'\n</script>\n</body>');out.write_text(s)
d=distribution('claude-tap');license_path=next(x for x in d.files if str(x).endswith('licenses/LICENSE'));(root/'LICENSE-claude-tap.txt').write_text(d.locate_file(license_path).read_text())
(root/'viewer-manifest.json').write_text(json.dumps({'public_trace_sha256':manifest['public_trace_sha256'],'viewer_sha256':hashlib.sha256(s.encode()).hexdigest(),'renderer':'claude-tap 0.1.146'},indent=2)+'\n')
print('Built static request viewer from existing redacted capture:',len(s.encode()),'bytes')

from html import escape
scripts=json.loads((root/'script.json').read_text())
speaker=''.join('<p>'+escape(text).replace('\n\n','<br><br>')+'</p>' for text in scripts.values())
(root/'index.html').write_text((root/'index.template.html').read_text().replace('__SPEAKER_HTML__',speaker))

import runpy
runpy.run_path(str(root/'build-reader.py'))
# Bind every publishing source and output so lesson builds cannot silently copy stale UI.
names=['trace.json','source-manifest.json','index.template.html','index.html','script.json','page.js','viewer-bridge.js','viewer.html','reader.template.html','reader.html','build-reader.py','build-viewer.py','skill-file-excerpt.json']
m=json.loads((root/'viewer-manifest.json').read_text());m['files']={n:hashlib.sha256((root/n).read_bytes()).hexdigest() for n in names};(root/'viewer-manifest.json').write_text(json.dumps(m,indent=2)+'\n')
