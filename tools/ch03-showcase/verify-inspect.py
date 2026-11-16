"""Verify source coverage, every current lecture deep link and viewer navigation."""
import json
import runpy
from pathlib import Path
from urllib.parse import parse_qs,urlparse
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'lab-runs/ch03-showcase'
HERE=ROOT/'courseware/ch03/lessons/01-memory-game'
manifest=json.loads((OUT/'inspect/course-manifest.json').read_text())
for rid,record in manifest.items():
    log=json.loads((OUT/'inspect-logs'/record['file']).read_text())
    for sample in log['samples']:
        if sample['id']=='archive': continue
        raw_path=record.get('raw_paths',{}).get(sample['id'],f'raw/{rid}-{sample["id"]}.jsonl')
        raw=(OUT/'inspect'/raw_path).read_text()
        if 'raw_records' not in sample['metadata']:
            assert sample['events'][0]['data']==raw
            continue
        rows=[json.loads(s) for s in raw.splitlines()]
        assert [e['data'] for e in sample['events']]==rows
        assert len(rows)==sample['metadata']['raw_records']
        # Every source-mapped message resolves to a real retained message.
        ids={m['id'] for m in sample['messages']}
        assert set(record['maps'][sample['id']].values())<=ids
plan=json.loads((HERE/'screen-plan.json').read_text())
topics=runpy.run_path(str(HERE/'tools/build-evidence.py'))['topic_urls']()
urls=sorted({url for f in plan['frames'] for _,url in f['links'] if '/inspect/' in url} | {url for _,url in topics.values()})
errors=[]
with sync_playwright() as p:
    browser=p.chromium.launch(channel='chrome',headless=True)
    page=browser.new_page(viewport={'width':1440,'height':1000})
    page.on('pageerror',lambda error:errors.append(str(error)))
    for url in urls:
        page.goto(url)
        page.wait_for_selector('[data-course-focus]',timeout=25000)
        assert not page.get_by_role('alert').count(),url
        assert page.locator('[data-course-focus]').inner_text().strip(),url
        query=parse_qs(urlparse(url).query)
        page.wait_for_function('''() => {
            const status=document.querySelector('#course-focus-status');
            return Number(status?.dataset.expected)>0 && status.dataset.expected===status.dataset.matched;
        }''',timeout=15000)
        assert page.locator('[data-course-focus]').evaluate('(el)=>getComputedStyle(el).outlineStyle')=='none'
        assert page.evaluate("CSS.highlights.get('course-match').size > 0")
        print('OK',query,flush=True)
    url='http://127.0.0.1:4397/inspect/?run=mm-memory&sample=session&line=34&find=Difficulty%20levels%3A'
    page.goto(url);page.wait_for_selector('[data-course-focus]')
    page.screenshot(path=str(OUT/'inspect-desktop.png'))
    page.reload();page.wait_for_selector('[data-course-focus]')
    page.get_by_role('button',name='回到标记').click()
    page.set_viewport_size({'width':390,'height':844})
    page.screenshot(path=str(OUT/'inspect-mobile.png'))
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
    browser.close()
assert not errors,errors
print(f'PASS: source JSON coverage; {len(urls)} deep links; highlight, refresh and narrow screen')
