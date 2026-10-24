"""Build standalone records: uv run <this file>（make viewers 已包含）."""
import hashlib
import json
import sys
from pathlib import Path

here = Path(__file__).resolve().parent
sys.path.insert(0, str(here.parents[3] / 'tools'))
from tracekit import render_viewer  # noqa: E402  全课共用的渲染：固定 claude-tap 版本、默认中文、供应商脚本中文转义

target = here.parents[2] / 'lessons/01-request/trace'
manifest = {}
for arm in ('plain', 'named'):
    source = here / f'{arm}.json'
    records = json.loads(source.read_text())
    lines = [json.dumps(record, ensure_ascii=True) for record in records]
    output = target / f'compare-{arm}.html'
    (target / f'compare-{arm}.jsonl').write_text('\n'.join(lines) + '\n')
    # Start with the final reply; native sidebar still exposes every request.
    render_viewer(lines, output, f'compare-{arm}.jsonl', script="""selectEntry(filtered.length - 1);
requestAnimationFrame(() => {
  for (const section of document.querySelectorAll('#detail .section')) {
    const open = section.querySelector('.title')?.textContent === t('section_response');
    section.querySelector('.section-body')?.classList.toggle('open', open);
    section.querySelector('.chevron')?.classList.toggle('open', open);
  }
});""")
    manifest[arm] = {'source_sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
        'html_sha256': hashlib.sha256(output.read_bytes()).hexdigest(), 'requests': len(records)}
(here / 'viewer-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print('Generated two standalone static records; no embedded component.')
