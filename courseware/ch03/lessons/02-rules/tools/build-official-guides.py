#!/usr/bin/env python3
"""Capture official layouts locally and add lesson navigation; never publish full sources.

Run: uv run python courseware/ch03/lessons/02-rules/tools/build-official-guides.py
Serve: python3 tools/ch03-showcase/serve.py --no-build
"""
from datetime import datetime, timezone
import argparse
from hashlib import sha256
import json
from pathlib import Path
import re
import shutil
from urllib.parse import urljoin, urlsplit
from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parents[1]
ROOT = HERE.parents[3]
OUT = ROOT / 'lab-runs/ch03-showcase/sources/skill-authoring'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--guide', choices=('anthropic','openai'))
    parser.add_argument('--navigation-only', action='store_true', help='Refresh navigation against existing local snapshots, without fetching sources')
    args = parser.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    assets = OUT / 'assets'; assets.mkdir(exist_ok=True)
    guides = json.loads((HERE / 'official-guide-locations.json').read_text())
    for ext in ('js', 'css'):
        shutil.copy(HERE / f'official-guide-navigation.{ext}', OUT / f'guide-navigation.{ext}')
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for key, config in guides.items():
            if args.guide and args.guide != key: continue
            if args.navigation_only:
                output = OUT / f'{key}.html'
                html = output.read_text()
                pattern = r'window.courseOfficialGuide=(.*?);</script>'
                old = json.loads(re.search(pattern,html,re.S)[1])
                config = {**config, 'capturedAt':old['capturedAt'], 'sourceSha256':old['sourceSha256']}
                value = json.dumps(config,ensure_ascii=False).replace('<','\\u003c')
                html = re.sub(pattern,lambda _: 'window.courseOfficialGuide='+value+';</script>',html,count=1,flags=re.S)
                output.write_text(html)
                page = browser.new_page()
                page.goto(output.as_uri(),wait_until='domcontentloaded')
                page.wait_for_function('window.courseSourceRanges?.length === window.courseOfficialGuide.steps.length',timeout=10000)
                page.close()
                print(f'{key}: navigation updated; original snapshot retained',flush=True)
                continue
            print(f'{key}: loading official page',flush=True)
            page = browser.new_page(viewport={'width':1440, 'height':900})
            page.goto(config['url'], wait_until='domcontentloaded', timeout=60000)
            page.wait_for_selector(config['steps'][0]['start'])
            page.evaluate('Promise.race([document.fonts.ready,new Promise(resolve=>setTimeout(resolve,5000))])')
            rendered = page.content()
            page.close()
            # Transform a frozen DOM so the live site's hydration cannot replace
            # stylesheet/image nodes while we are collecting them.
            page = browser.new_page(java_script_enabled=False)
            page.route('**/*', lambda route:route.abort())
            frozen = re.sub(r'<script\b[^>]*>[\s\S]*?</script>', '', rendered, flags=re.I)
            frozen = frozen.replace('<head>', '<head><base href="'+config['url']+'">',1)
            page.set_content(frozen,wait_until='domcontentloaded')
            print(f'{key}: capturing styles and images',flush=True)
            cache = {}

            def asset(url):
                if not url.startswith(('http://', 'https://')):
                    return url
                if url in cache:
                    return cache[url]
                response = page.request.get(url, timeout=30000)
                if not response.ok:
                    raise RuntimeError(f'Asset {response.status}: {url}')
                body = response.body()
                mime = response.headers.get('content-type', '').split(';')[0]
                suffix = {'font/woff2':'.woff2','font/woff':'.woff','image/svg+xml':'.svg','image/png':'.png','image/jpeg':'.jpg','image/webp':'.webp','image/avif':'.avif'}.get(mime,Path(urlsplit(url).path).suffix or '.bin')
                name = sha256(body).hexdigest()[:20] + suffix
                (assets / name).write_bytes(body)
                cache[url] = 'assets/' + name
                return cache[url]

            # Inline the original styles; keep their font/image dependencies local too.
            for link in page.locator('link[rel="stylesheet"]').element_handles():
                url = link.evaluate('(e)=>e.href')
                response = page.request.get(url)
                if not response.ok: raise RuntimeError(f'Stylesheet {response.status}: {url}')
                css = re.sub(r'url\(([^)]+)\)', lambda m:'url("'+asset(urljoin(url,m[1].strip('"\'')))+'")', response.text())
                link.evaluate('(e,css)=>{const style=document.createElement("style");style.textContent=css;e.replaceWith(style)}',css)
            for img in page.locator('img').element_handles():
                url = img.evaluate('(e)=>e.currentSrc || e.src')
                path = asset(url)
                img.evaluate('(e,path)=>{e.src=path;e.removeAttribute("srcset");e.loading="eager"}',path)
            original = page.content()
            (OUT / f'{key}-original.html').write_text(original)
            config = {**config, 'capturedAt':datetime.now(timezone.utc).isoformat(), 'sourceSha256':sha256(original.encode()).hexdigest()}
            # Freeze rendered content; third-party application scripts must not rehydrate
            # or navigate a local snapshot. In-page links retain the original full context.
            page.evaluate('''url => {
              document.querySelectorAll('script,link[rel="preload"],link[rel="modulepreload"],link[rel="prefetch"]').forEach(e=>e.remove());
              document.querySelectorAll('a[href]').forEach(a=>{if(!a.getAttribute('href').startsWith('#')) a.href=new URL(a.getAttribute('href'),url).href});
              document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]').forEach(e=>e.remove());
              document.querySelectorAll('base').forEach(e=>e.remove());
              document.documentElement.classList.remove('dark');
            }''',config['url'])
            html = page.content()
            injection = '<link rel="stylesheet" href="guide-navigation.css"><script>window.courseOfficialGuide='+json.dumps(config,ensure_ascii=False).replace('<','\\u003c')+';</script><script src="guide-navigation.js"></script>'
            output = OUT / f'{key}.html'
            output.write_text(html.replace('</body>',injection+'</body>'))
            page.close()
            page = browser.new_page()
            page.goto(output.as_uri(), wait_until='domcontentloaded')
            page.wait_for_function('window.courseSourceRanges?.length === window.courseOfficialGuide.steps.length', timeout=10000)
            print(f'{key}: {len(config["steps"])} locations, {len(cache)} local assets',flush=True)
            page.close()
        browser.close()
    print('Local-only output:', OUT)


if __name__ == '__main__':
    main()
