#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Verify the five progressive lessons and the P10 step in 1.2 using Chromium.
Requires Playwright and its Chromium browser. Screenshots go to --output.
"""
import argparse
import json
import re
from pathlib import Path
from playwright.sync_api import sync_playwright
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--output',type=Path,default=Path('/tmp/ch01-progressive-qa'))
args=parser.parse_args();args.output.mkdir(parents=True,exist_ok=True)
root=Path(__file__).resolve().parents[1]
names=['01-environment','03-tools','04-prompt','05-homepage','06-permissions']
budgets=[1680,900,1200,1200,600]
r=root/'lessons/01-environment/diagrams'
spec=json.loads((r/'first-loop.archscribe.json').read_text());svg=(r/'first-loop.svg').read_text();mmd=(r/'first-loop.mmd').read_text()
assert set(re.findall(r'data-node="([^"]+)"',svg))=={n['id'] for n in spec['nodes']}
assert set(re.findall(r'data-edge="([^"]+)"',svg))=={e['from']+':'+e['to'] for e in spec['edges']}
for n in spec['nodes']:assert f'{n["id"]}["{n["label"]}"]' in mmd
for e in spec['edges']:assert re.search(r'\b'+e['from']+r' -->.*\b'+e['to']+r'\b',mmd)
# 课件页面上的节点与连线（data-node / data-edge）也须与逻辑源一致：美化不改变流程含义。
lesson11=json.loads((root/'lessons/01-environment/lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
for name in ('first-loop','environment-checks'):
    s=json.loads((r/f'{name}.archscribe.json').read_text())
    want=({n['id'] for n in s['nodes']},{e['from']+':'+e['to'] for e in s['edges']})
    assert any((set(re.findall(r'data-node="([^"]+)"',x['html'])),set(re.findall(r'data-edge="([^"]+)"',x['html'])))==want for x in lesson11['scenes']),name
errors=[];network=[];states=0;scenes=0
with sync_playwright() as p:
    browser=p.chromium.launch()
    context=browser.new_context(viewport={'width':1280,'height':848},reduced_motion='reduce')
    page=context.new_page();page.on('pageerror',lambda e:errors.append(str(e)))
    # All lesson resources must work without network access.
    page.route('https://**/*',lambda route:(network.append(route.request.url),route.abort()))
    page.route('http://**/*',lambda route:(network.append(route.request.url),route.abort()))
    def state():return page.evaluate('({id:document.querySelector(".scene:not([hidden])").id,step:Number(new URL(location.href).searchParams.get("step"))})')
    def check_layout():
        return page.evaluate('''() => {
          const s=document.querySelector('.scene:not([hidden])'), c=s.querySelector('.scene-content'),r=c.getBoundingClientRect(),h=s.querySelector('h2').getBoundingClientRect(),l=s.querySelector('.lede').getBoundingClientRect(),cam=document.querySelector('.camera-guide').getBoundingClientRect();
          return {over:[...c.querySelectorAll('*')].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden'&&!e.matches('.prompt pre *')).filter(e=>{const b=e.getBoundingClientRect();return b.bottom>r.bottom+2||b.right>r.right+2||b.left<r.left-2}).map(e=>e.tagName+'.'+e.getAttribute('class')),title:h.bottom>l.top&&l.height>0,camera:h.right>cam.left&&h.bottom>cam.top};
        }''')
    for name,budget in zip(names,budgets):
        base=(root/'lessons'/name/'index.html').as_uri()
        page.goto(base+'?mode=slides');page.evaluate('document.fonts.ready')
        lesson=page.evaluate('window.lesson');assert sum(s['seconds'] for s in lesson['scenes'])==budget
        assert sum(s['seconds'] for s in lesson['segments'])==budget
        assert page.locator('.evidence-table').count()==0
        count=0
        for scene in lesson['scenes']:
            assert len(scene['steps'])==len(scene['script'])
            for step in range(len(scene['steps'])):
                assert state()=={'id':scene['id'],'step':step},state()
                result=check_layout();assert result=={'over':[],'title':False,'camera':False},(name,scene['id'],step,result)
                assert page.locator('.scene:not([hidden]) .step-hidden').evaluate_all('(es)=>es.every(e=>e.hasAttribute("inert")&&e.getAttribute("aria-hidden")==="true")')
                if step==len(scene['steps'])-1:assert page.locator('.scene:not([hidden]) .step-hidden,.scene:not([hidden]) .step-past').count()==0
                page.screenshot(path=str(args.output/f'{name}-{scene["id"]}-{step}.png'))
                page.keyboard.press('ArrowRight');count+=1
        assert page.locator('#next').is_disabled();states+=count;scenes+=len(lesson['scenes'])
        # Back across a boundary restores the previous page's complete state.
        second=lesson['scenes'][1];first=lesson['scenes'][0]
        page.goto(base+'?mode=slides#'+second['id']);page.keyboard.press('ArrowLeft')
        assert state()=={'id':first['id'],'step':len(first['steps'])-1}
        page.keyboard.press('t');assert page.locator('.step-hidden,.step-past').count()==0
        page.keyboard.press('t');assert state()['step']==len(first['steps'])-1
        page.goto(base+'?mode=slides&step=1#'+second['id']);page.reload();assert state()=={'id':second['id'],'step':1}
        # A 64px logo strip sits above the full-size 1280x720 recording canvas.
        page.set_viewport_size({'width':1280,'height':784});page.keyboard.press('r')
        page.wait_for_function("document.querySelector('.scene:not([hidden])').getBoundingClientRect().width===1280")
        logo=page.locator('.recording-branding .institution-logo');assert logo.is_visible()
        assert logo.evaluate('(e)=>e.complete&&e.naturalWidth===2420')
        assert logo.bounding_box()['y']+logo.bounding_box()['height']<=page.locator('.scene:not([hidden])').bounding_box()['y']
        cam=page.locator('.camera-guide').bounding_box();assert all(abs(cam[k]-v)<1 for k,v in {'x':956,'y':88,'width':300,'height':225}.items()),cam
        page.keyboard.press('r');page.keyboard.press('t');page.set_viewport_size({'width':390,'height':844})
        assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),name
        page.set_viewport_size({'width':1280,'height':848})
        page.goto((root/'lessons'/name/'speaker.html').as_uri())
        assert page.locator('#script a[href*="step="]').count()==count
        # Clipboard success and failure branches; injected clipboard records the exact payload.
        for scene in lesson['scenes']:
            if not scene.get('prompt'):continue
            page.goto(base+'?mode=slides#'+scene['id'])
            panel=page.locator('.scene:not([hidden]) .prompt')
            assert panel.evaluate('(e)=>getComputedStyle(e).backgroundColor')=='rgb(0, 0, 0)'
            left=panel.bounding_box();right=page.locator('.scene:not([hidden]) .demo-notes').bounding_box()
            assert left['x']+left['width']<right['x'] and abs(left['y']-right['y'])<2
            request=panel.locator('pre');assert request.inner_text()==scene['prompt']
            if request.evaluate('(e)=>e.scrollHeight>e.clientHeight'):
                request.focus();before=state();page.keyboard.press('End')
                page.wait_for_function("document.querySelector('.scene:not([hidden]) .prompt pre').scrollTop>0")
                assert state()==before
                page.screenshot(path=str(args.output/f'{name}-{scene["id"]}-prompt-end.png'))
            page.evaluate('Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:async text=>{window.copied=text}}})')
            page.locator('.scene:not([hidden]) [data-copy]').click();assert page.evaluate('window.copied')==scene['prompt']
            page.evaluate('() => {navigator.clipboard.writeText=async()=>{throw Error("denied")}}')
            page.locator('.scene:not([hidden]) [data-copy]').click();assert '直接选中' in page.locator('#feedback').inner_text()
    # Desktop reading also keeps evidence next to notes; the entire request is visible.
    page.goto((root/'lessons/04-prompt/index.html').as_uri()+'?mode=scroll#p23')
    page.evaluate('document.fonts.ready')
    left=page.locator('#p23 .prompt').bounding_box();right=page.locator('#p23 .demo-notes').bounding_box()
    assert left['x']+left['width']<right['x'] and abs(left['y']-right['y'])<2
    assert page.locator('#p23 .prompt pre').evaluate('(e)=>e.scrollHeight<=e.clientHeight+1')
    page.locator('#p23').screenshot(path=str(args.output/'prompt-reading.png'))
    page.goto((root/'lessons/01-environment/index.html').as_uri()+'?mode=scroll#p04-live')
    page.evaluate('document.fonts.ready')
    left=page.locator('#p04-live .demo-visual').bounding_box();right=page.locator('#p04-live .demo-notes').bounding_box()
    assert left['x']+left['width']<right['x'] and abs(left['y']-right['y'])<2
    page.locator('#p04-live').screenshot(path=str(args.output/'html-reading.png'))
    # 零件库重刷后 diff 行为 .p-ln.del / .p-ln.add；旧写法 .minus / .plus 仍兼容。
    assert page.locator('#p05-diff .minus, #p05-diff .p-ln.del').first.evaluate('(e)=>getComputedStyle(e).backgroundColor')=='rgb(252, 230, 221)'
    assert page.locator('#p05-diff .plus, #p05-diff .p-ln.add').first.evaluate('(e)=>getComputedStyle(e).backgroundColor')=='rgb(227, 242, 230)'
    # The default standalone view must open the same offline Starter as the iframe.
    panel=page.locator('#p04-live .welcome-demo')
    preview_url=(root.parents[1]/'starters/personal-homepage/setup-check/index.html').as_uri()
    assert panel.locator('iframe').evaluate('(e)=>e.src')==preview_url
    assert panel.locator('a').evaluate('(e)=>e.href')==preview_url
    with page.expect_popup() as popup:panel.locator('a').click()
    popup.value.wait_for_url(preview_url);popup.value.locator('#welcome-message').wait_for();popup.value.close()
    assert not network,network
    # Exercise the preview controls against a local fixture, never a learner's project.
    page.unroute('http://**/*')
    fixture=(root.parents[1]/'starters/personal-homepage/setup-check/index.html').read_text()
    context.route('http://localhost:4174/setup-check/',lambda route:route.fulfill(status=200,body=fixture,content_type='text/html'))
    page.goto((root/'lessons/01-environment/index.html').as_uri()+'?mode=slides&step=1#p04-live')
    panel=page.locator('.scene:not([hidden]) .welcome-demo');panel.locator('[data-demo-connect]').click()
    assert panel.locator('iframe').get_attribute('src')=='http://localhost:4174/setup-check/'
    assert panel.locator('a').get_attribute('href')=='http://localhost:4174/setup-check/'
    page.frame_locator('.scene:not([hidden]) iframe').locator('#welcome-message').wait_for()
    panel.locator('[data-demo-reload]').click();page.frame_locator('.scene:not([hidden]) iframe').locator('#welcome-message').wait_for()
    with page.expect_popup() as popup:panel.locator('a').click()
    popup.value.wait_for_url('http://localhost:4174/setup-check/');popup.value.locator('#welcome-message').wait_for();popup.value.close()
    # Protect P10's independent Context Window step and navigation.
    base=(root/'lessons/02-agent/index.html').as_uri()
    page.goto(base+'?mode=slides#p10');agent=page.evaluate('window.lesson.scenes.find(s=>s.id==="p10")')
    assert any('Window' in beat or '容量' in beat for beat in agent['steps'])
    for step in range(len(agent['steps'])):
        assert state()=={'id':'p10','step':step};page.keyboard.press('ArrowRight')
    page.keyboard.press('ArrowLeft');assert state()=={'id':'p10','step':len(agent['steps'])-1}
    browser.close()
assert not errors,errors
report={'scenes':scenes,'reveal_states':states,'layout':'passed','side_by_side_and_dark_prompts':'passed','prompt_keyboard_scroll':'passed','diff_colors':'passed','legacy_tables_removed':True,'navigation':'passed','deep_links':'passed','speaker_steps':'passed','clipboard_handlers':'passed (success/failure mocks)','preview_controls':'passed (local fixture)','mobile_reading_and_practice':'passed','offline_resources':'passed','diagram_topology':'passed','agent_p10':'passed','browser_errors':errors}
(args.output/'result.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False,indent=2))
