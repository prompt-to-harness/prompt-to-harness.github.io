#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Check diagram topology, all reveal states, navigation and sibling compatibility.
Run with a Python environment containing Playwright and installed Chromium.
"""
import json
import re
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
lesson = json.loads((ROOT/'lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
assert sum(s['seconds'] for s in lesson['scenes']) == 900
for name in ('agent-loop','context','course-route'):
    spec=json.loads((ROOT/'diagrams'/f'{name}.archscribe.json').read_text())
    svg=(ROOT/'diagrams'/f'{name}.svg').read_text()
    mmd=(ROOT/'diagrams'/f'{name}.mmd').read_text()
    assert set(re.findall(r'data-node="([^"]+)"',svg)) == {n['id'] for n in spec['nodes']}
    assert set(re.findall(r'data-edge="([^"]+)"',svg)) == {f'{e["from"]}:{e["to"]}' for e in spec['edges']}
    for n in spec['nodes']: assert f'{n["id"]}["{n["label"]}"]' in mmd
    for e in spec['edges']:
        assert re.search(r'\b'+e['from']+r' -->.*\b'+e['to']+r'\b', mmd)
    # 课件用零件库重新呈现三张图：不再嵌入原 SVG，改为核对页面上的节点与连线
    # 与逻辑源逐项一致（data-node / data-edge），保证美化不改变流程含义。
    want=({n['id'] for n in spec['nodes']},{f'{e["from"]}:{e["to"]}' for e in spec['edges']})
    assert any((set(re.findall(r'data-node="([^"]+)"',s['html'])),set(re.findall(r'data-edge="([^"]+)"',s['html'])))==want for s in lesson['scenes']),name
errors=[]; requests=[]
with sync_playwright() as p:
    browser=p.chromium.launch()
    page=browser.new_page(viewport={'width':1280,'height':848},reduced_motion='reduce')
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.route('https://**/*',lambda route:(requests.append(route.request.url),route.abort()))
    page.route('http://**/*',lambda route:(requests.append(route.request.url),route.abort()))
    base=(ROOT/'index.html').as_uri()
    page.goto(base+'?mode=slides');page.evaluate('document.fonts.ready')
    def state():
        return page.evaluate('''() => ({id:document.querySelector('.scene:not([hidden])').id,
            step:Number(new URL(location.href).searchParams.get('step')),
            mode:document.body.dataset.mode})''')
    def layout_check():
        return page.evaluate('''() => {
            const s=document.querySelector('.scene:not([hidden])'), c=s.querySelector('.scene-content');
            const r=c.getBoundingClientRect(), h=s.querySelector('h2').getBoundingClientRect(), le=s.querySelector('.lede'), l=le&&le.getClientRects().length?le.getBoundingClientRect():null;
            const visible=[...c.querySelectorAll('*')].filter(e=>e.getClientRects().length && getComputedStyle(e).visibility!=='hidden');
            const over=visible.filter(e=>{const b=e.getBoundingClientRect();return b.bottom>r.bottom+2||b.right>r.right+2||b.left<r.left-2}).map(e=>e.tagName+'.'+e.getAttribute('class'));
            const cam=document.querySelector('.camera-guide').getBoundingClientRect();
            return {over,titleOverlap:!!l&&h.bottom>l.top, cameraOverlap:h.right>cam.left && h.bottom>cam.top};
        }''')
    count=0
    for scene in lesson['scenes']:
        for step in range(len(scene['steps'])):
            assert state()['id']==scene['id'] and state()['step']==step,state()
            assert page.locator('.scene:not([hidden]) .step-hidden').evaluate_all('(es)=>es.every(e=>e.getAttribute("aria-hidden")==="true" && e.hasAttribute("inert"))')
            result=layout_check();assert not result['over'] and not result['titleOverlap'] and not result['cameraOverlap'],(scene['id'],step,result)
            if step==len(scene['steps'])-1:
                assert page.locator('.scene:not([hidden]) .step-hidden, .scene:not([hidden]) .step-past').count()==0
            count+=1
            page.keyboard.press('ArrowRight')
    assert page.locator('#next').is_disabled()
    # Go backwards across a scene boundary and restore the last state.
    page.keyboard.press('Home');page.keyboard.press('ArrowRight');page.keyboard.press('ArrowRight')
    assert state()['id']=='p09-request' and state()['step']==0
    page.keyboard.press('ArrowLeft');assert state()['id']=='p09' and state()['step']==1
    # Reading reveals answers; switching back retains the current state.
    page.keyboard.press('t');assert state()['mode']=='scroll'
    assert page.locator('.step-hidden, .step-past').count()==0
    page.keyboard.press('t');assert state()=={'id':'p09','step':1,'mode':'slides'}
    # Deep links, clamp, and reload.
    page.goto(base+'?mode=slides&step=1#p11-judge');assert state()['step']==1
    page.reload();assert state()['id']=='p11-judge' and state()['step']==1
    page.goto(base+'?mode=slides&step=999#p09');assert state()['step']==1
    # 1280x720 recording coordinates / presenter safe zone.
    page.set_viewport_size({'width':1280,'height':720});page.keyboard.press('r')
    page.wait_for_function("document.querySelector('.scene:not([hidden])').getBoundingClientRect().width===1280")
    cam=page.locator('.camera-guide').bounding_box()
    assert all(abs(cam[k]-v)<1 for k,v in {'x':956,'y':24,'width':300,'height':225}.items()),cam
    page.keyboard.press('End');assert not layout_check()['over']
    # Responsive reading and keyboard-scrollable diagrams.
    page.keyboard.press('r');page.keyboard.press('t');page.set_viewport_size({'width':390,'height':844})
    assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), 'mobile horizontal overflow'
    # 零件图示在窄屏自动改为纵向排列，不再需要横向滚动容器。
    # Speaker links land on each exact step.
    page.goto((ROOT/'speaker.html').as_uri())
    assert page.locator('#script h3').filter(has_text=re.compile('第 [0-9]+ 步')).count()==count
    assert page.locator('#script a[href*="step="]').count()==count
    # Sibling lessons cross page boundaries from their last step.
    for sibling in ('01-environment','03-tools'):
        page.goto((ROOT.parent/sibling/'index.html').as_uri()+'?mode=slides')
        ids=page.evaluate('window.lesson.scenes.map(s=>s.id)');last=page.evaluate('(window.lesson.scenes[0].steps||[1]).length-1')
        page.goto((ROOT.parent/sibling/'index.html').as_uri()+f'?mode=slides&step={last}#'+ids[0])
        page.keyboard.press('ArrowRight');assert state()['id']==ids[1]
        page.keyboard.press('ArrowLeft');assert state()['id']==ids[0]
    browser.close()
assert not errors,errors
assert not requests,requests
print(json.dumps({'scenes':len(lesson['scenes']),'reveal_states':count,'diagram_topologies':3,'offline':True,'navigation':'passed','reading_and_mobile':'passed','speaker_steps':'passed','sibling_lessons':2,'browser_errors':errors},ensure_ascii=False,indent=2))
