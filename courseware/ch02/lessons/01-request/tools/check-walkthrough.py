"""Browser regression: complete request view, iframe navigation and course transitions. No model calls.
Run: uv run python courseware/ch02/lessons/01-request/tools/check-walkthrough.py
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json,hashlib,re,tempfile
root=Path(__file__).resolve().parents[5];out=Path(tempfile.mkdtemp(prefix='ch02-walkthrough-check-'))
keys=['identity','tools','skills','environment','permissions']
with sync_playwright() as p:
 b=p.chromium.launch();page=b.new_page(viewport={'width':1440,'height':900});errors=[];net=[];page.on('pageerror',lambda e:errors.append(str(e)));page.route('http://**/*',lambda r:(net.append(r.request.url),r.abort()));page.route('https://**/*',lambda r:(net.append(r.request.url),r.abort()))
 page.goto((root/'demos/ch02-request-walkthrough/index.html').as_uri());f=page.frames[1]
 for k in keys:
  page.locator('[data-subpoint="permissions"]' if k=='permissions' else '[data-point="'+k+'"]').click();f.wait_for_function('(k)=>document.body?.dataset.coursePoint===k',arg=k);assert f.locator('#'+k).is_visible();assert f.locator('[data-reader-point]:visible').count()==1
  page.screenshot(path=str(out/('sample-'+k+'.png')))
 page.locator('[data-view="raw"]').click();f.wait_for_function("document.body?.dataset.coursePoint==='permissions'");assert 'workspace-write' in f.locator('.course-focus').inner_text();assert '[教学删节' not in f.locator('body').inner_text()
 page.screenshot(path=str(out/'sample-raw.png'));page.locator('#enlarge').click();big=page.frames[-1];big.wait_for_function("document.body?.dataset.coursePoint==='permissions'");big.press('body','Escape');page.locator('#large').wait_for(state='hidden')
 formal=(root/'courseware/ch02/lessons/01-request/index.html').as_uri()
 page.goto(formal+'?mode=slides#p08a');page.wait_for_selector('#request-walk-frame');outer=page.locator('#request-walk-frame').content_frame
 for i,k in enumerate(keys):
  page.goto(formal+'?mode=slides&step='+str(i)+'#p08a');page.wait_for_selector('#request-walk-frame');o=next(f for f in page.frames if '/request/index.html' in f.url);o.wait_for_function('(k)=>document.querySelector("[data-point="+(k==="permissions"?"environment":k)+"]")?.getAttribute("aria-pressed")==="true"',arg=k)
  inner=next(f for f in page.frames if 'request/reader.html' in f.url);inner.wait_for_function('(k)=>document.body?.dataset.coursePoint===k',arg=k)
  page.screenshot(path=str(out/('formal-'+k+'.png')))
 o.locator('[data-view="raw"]').click();raw=o.child_frames[0];raw.wait_for_url('**/request/viewer.html?**');raw.wait_for_function("document.body?.dataset.coursePoint==='permissions'")
 o.locator('#enlarge').click();page.locator('dialog[aria-label="放大查看初始请求"]').wait_for(state='visible');bigouter=page.frames[-2] if 'viewer.html' in page.frames[-1].url else page.frames[-1]
 page.wait_for_timeout(200);page.screenshot(path=str(out/'formal-expanded.png'))
 # Browser native dialog cancel and cross-iframe close both available.
 bigraw=next(f for f in reversed(page.frames) if 'viewer.html' in f.url);bigraw.press('body','Escape');page.locator('dialog[aria-label="放大查看初始请求"]').wait_for(state='hidden')
 for old,step in [('p10',0),('p11',1),('p12',2),('p13',3)]:
  page.goto(formal+'?mode=slides#'+old);page.wait_for_url('**#p08a');assert 'step='+str(step) in page.url
 page.goto(formal+'?mode=slides#p08a');o=page.locator('#request-walk-frame').content_frame;o.locator('[data-point="skills"]').click();page.wait_for_url('**step=2#p08a');inner=next(f for f in page.frames if '/request/reader.html' in f.url);inner.wait_for_function("document.body?.dataset.coursePoint==='skills'");compare=inner.locator('details').filter(has_text='对照：对应 SKILL.md 里还有什么？');compare.locator('summary').click();assert 'Core Principles' in compare.inner_text();assert '不在这份问候的初始请求内' in compare.inner_text()
 page.locator('#next').click();page.wait_for_url('**step=3#p08a');inner.wait_for_function("document.body?.dataset.coursePoint==='environment'")
 page.goto(formal+'?mode=slides&step=2#p08');page.locator('#next').click();page.wait_for_url('**#p08a');assert page.locator('.scene:not([hidden])').get_attribute('id')=='p08a'
 page.goto(formal+'?mode=slides&step=4#p08a');page.locator('#next').click();page.wait_for_url('**#p09');assert page.locator('.scene:not([hidden])').get_attribute('id')=='p09'
 page.goto(formal+'?mode=slides&step=2#p09');page.locator('#next').click();page.wait_for_url('**#p07')
 page.set_viewport_size({'width':390,'height':844});page.goto((root/'demos/ch02-request-walkthrough/index.html').as_uri());page.wait_for_timeout(150);assert page.evaluate('document.documentElement.scrollWidth')==390;page.screenshot(path=str(out/'mobile.png'),full_page=True)
 assert not errors,errors;assert not net,net;print('PASS: five reader states, complete raw, expand/Escape, player steps, retired aliases, p08→p08a→p09→p07, mobile width, offline; no JS errors')
 b.close()
