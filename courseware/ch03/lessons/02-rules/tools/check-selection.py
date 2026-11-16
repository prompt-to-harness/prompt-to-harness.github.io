#!/usr/bin/env python3
"""第一部分专项检查：逐画面映射、展开、复制、真实跳转、旧稿入口与窄屏。"""
import json
from pathlib import Path
import subprocess
import sys
import socket
import time
from playwright.sync_api import sync_playwright

HERE=Path(__file__).resolve().parents[1]
ROOT=HERE.parents[3]
scripts=json.loads((HERE/'script.json').read_text())
plan=json.loads((HERE/'screen-plan.json').read_text())
lesson=json.loads((HERE/'lesson.js').read_text().removeprefix('window.lesson = ').strip().removesuffix(';'))
evidence=json.loads((HERE/'selection-evidence.json').read_text())
ids=lesson['activeSceneIds'];current=[s for s in lesson['scenes'] if s['id'] in ids]
mapped=set()
for f in plan['frames']:
    for part in range(f['start'],f['end']+1):
        key=(f['scene'],f['step'],part)
        assert key not in mapped,('duplicate',key)
        mapped.add(key)
expected={(s['id'],step,part) for s in current for step,text in enumerate(scripts[s['id']]) for part in range(len(text.split('\n\n')))}
assert mapped==expected
assert len(evidence['runs'])==4 and all(r['metadataVerified'] for r in evidence['runs'])
assert evidence['read']['exitCode']==0
assert not any(t in json.dumps(evidence,ensure_ascii=False) for t in ['Bearer ','/Users/','api_key','access_token'])

with socket.socket() as sock:sock.bind(('127.0.0.1',0));port=sock.getsockname()[1]
server=subprocess.Popen([sys.executable,'-m','http.server',str(port),'--bind','127.0.0.1','--directory',str(ROOT)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
base=f'http://127.0.0.1:{port}/courseware/ch03/lessons/02-rules/'
try:
    with sync_playwright() as pw:
        browser=pw.chromium.launch()
        context=browser.new_context(viewport={'width':1280,'height':784},permissions=['clipboard-read','clipboard-write'])
        page=context.new_page();errors=[];page.on('pageerror',lambda error:errors.append(str(error)))
        for attempt in range(30):
            try:page.goto(base+'index.html?part=1&mode=slides#p07');break
            except Exception:time.sleep(.1)
        page.wait_for_selector('.scene');assert all(page.locator('#'+s['id']).count()==1 for s in current)
        for scene in current:
            page.goto(base+'index.html?part=1&mode=slides#'+scene['id'])
            page.evaluate('document.fonts.ready')
            if not page.locator('body').evaluate('(e)=>e.classList.contains("recording")'):page.keyboard.press('r')
            for step in range(len(scene['steps'])):
                if step:page.keyboard.press('ArrowRight')
                page.wait_for_timeout(400)
                issue=page.locator('#'+scene['id']).evaluate('''scene=>{
                  const frame=scene.getBoundingClientRect(),scale=frame.width/1280;
                  const elements=[...scene.querySelectorAll('.scene-content p,.scene-content pre,.scene-content h3,.scene-content th,.scene-content td,.selection-actions')].filter(e=>!e.closest('.step-hidden'));
                  const failures=[];
                  for(const e of elements){const r=e.getBoundingClientRect();if((r.bottom-frame.top)/scale>637)failures.push('below content area: '+e.textContent.slice(0,35));if(e.clientHeight&&e.scrollHeight>e.clientHeight+2&&getComputedStyle(e).overflow==='hidden')failures.push('clipped: '+e.textContent.slice(0,35));}
                  const actions=scene.querySelector('.selection-actions'),prompt=scene.querySelector('.prompt');
                  if(actions&&prompt){const a=actions.getBoundingClientRect(),p=prompt.getBoundingClientRect();if(p.left<a.right&&p.right>a.left&&p.top<a.bottom&&p.bottom>a.top)failures.push('prompt overlaps material link');}
                  return failures;
                }''')
                assert not issue,(scene['id'],step,issue)
            page.screenshot(path='/tmp/ch03-321-'+scene['id']+'.png')
            if scene['id']=='p07b':
                page.locator('[data-selection-copy]').click()
                assert page.evaluate('navigator.clipboard.readText()')==evidence['prompt']
            # Exercise every material link and ensure the original deck stays put.
            for link in page.locator('#'+scene['id']+' .selection-actions a').all():
                original=page.url;target=link.get_attribute('href')
                with page.expect_popup() as opened:link.click()
                popup=opened.value
                assert page.url==original
                if '/inspect/' in target:
                    popup.wait_for_selector('[data-course-focus]',timeout=25000)
                elif target.startswith('https://'):
                    # Check the actual new-tab destination; external rendering is
                    # outside this local deck check. Source bytes are hash-pinned.
                    popup.wait_for_url(target,wait_until='commit')
                else:
                    popup.wait_for_load_state('domcontentloaded')
                    if '#' in target:
                        assert popup.locator('#'+target.split('#')[1]).is_visible()
                    else:
                        assert popup.locator('h1').inner_text()=='安装本课 Skill'
                popup.close()
        page.goto(base+'speaker.html');page.wait_for_selector('.screen-frame')
        assert all(page.locator('#'+f['id']).count()==1 for f in plan['frames'])
        for node in page.locator('#script [data-scene]').all():
            if node.get_attribute('data-scene') not in ids:continue
            key=(node.get_attribute('data-scene'),int(node.get_attribute('data-step')),int(node.get_attribute('data-part')))
            assert node.inner_text()==scripts[key[0]][key[1]].split('\n\n')[key[2]]
        for anchor in ['metadata','read','result','description','explicit','implicit-request']:
            page.goto(base+'selection-evidence.html#'+anchor)
            page.wait_for_url('**/inspect/?topic=*',timeout=25000)
            page.wait_for_function("()=>{const s=document.querySelector('#course-focus-status');return Number(s?.dataset.expected)>0&&s.dataset.expected===s.dataset.matched}",timeout=15000)
        page.set_viewport_size({'width':390,'height':844})
        for name in ['speaker.html','index.html','selection-evidence.html#description']:
            page.goto(base+name);page.wait_for_timeout(200)
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),name
        assert not errors,errors
        browser.close()
    print(f'通过：{len(current)} 页、{sum(len(s["steps"]) for s in current)} 个状态、{len(plan["frames"])} 段画面、{len(expected)} 个口播/操作块；链接、复制与窄屏正常')
finally:
    server.terminate();server.wait(timeout=5)
