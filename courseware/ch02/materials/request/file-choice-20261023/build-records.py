"""Build standalone records: uv run --with claude-tap==0.1.146 python <this file>."""
import hashlib
import json
import re
from importlib.metadata import version
from pathlib import Path
from claude_tap.viewer import _generate_html_viewer_from_records

assert version('claude-tap') == '0.1.146'
here = Path(__file__).resolve().parent
target = here.parents[2] / 'lessons/01-request/trace'
manifest = {}
for arm in ('plain', 'named'):
    source = here / f'{arm}.json'
    records = json.loads(source.read_text())
    lines = [json.dumps(record, ensure_ascii=True) for record in records]
    output = target / f'compare-{arm}.html'
    (target / f'compare-{arm}.jsonl').write_text('\n'.join(lines) + '\n')
    _generate_html_viewer_from_records(lines, output,
        display_trace_path=f'compare-{arm}.jsonl', display_html_path=output.name)
    raw = output.read_text().replace("let currentLang = safeLocalStorageGet('claude-tap-lang') || detectLang();", "let currentLang = 'zh-CN';")
    # Start with the final reply; native sidebar still exposes every request.
    raw = raw.replace('</body>', """<script>
selectEntry(filtered.length - 1);
requestAnimationFrame(() => {
  for (const section of document.querySelectorAll('#detail .section')) {
    const open = section.querySelector('.title')?.textContent === t('section_response');
    section.querySelector('.section-body')?.classList.toggle('open', open);
    section.querySelector('.chevron')?.classList.toggle('open', open);
  }
});
</script></body>""")
    # Equivalent Unicode serialization prevents bundled vendor translations from
    # entering the course's font subset scanner. No runtime service is needed.
    def script_ascii(match):
        return match[1] + re.sub(r'[\u4e00-\u9fff]', lambda m: '\\u%04x' % ord(m[0]), match[2]) + match[3]
    raw = re.sub(r'(<script\b[^>]*>)([\s\S]*?)(</script>)', script_ascii, raw)
    raw = re.sub(r'[\u4e00-\u9fff]', lambda m: '&#x%x;' % ord(m[0]), raw)
    output.write_text(raw)
    manifest[arm] = {'source_sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
        'html_sha256': hashlib.sha256(output.read_bytes()).hexdigest(), 'requests': len(records)}
(here / 'viewer-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print('Generated two standalone static records; no embedded component.')
