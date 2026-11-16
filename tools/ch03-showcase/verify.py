"""Check disclosures, recovery, every trace stage and actual embedded game inputs."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
OUT=Path(__file__).resolve().parents[2]/'lab-runs/ch03-showcase'
BASE='http://127.0.0.1:4397/'
def main():
 data=json.loads((OUT/'data.js').read_text().split('=',1)[1].strip().rstrip(';'))
 counts={'games':0,'flips':0,'dodge_starts':0,'details':0,'stages':0,'events':0};errors=[]
 with sync_playwright() as p:
  browser=p.chromium.launch(channel='chrome');page=browser.new_page(viewport={'width':1440,'height':1000})
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.goto(BASE,wait_until='networkidle');assert page.locator('.card').count()==21;assert page.locator('.experiment-group').count()==7
  assert page.locator('[data-group="repeat-a"] .card').count()==2
  assert page.locator('.process-details:not([open])').count()==21
  assert not page.locator('.process-facts').first.is_visible()
  page.locator('[data-id="a1"] .process-details summary').click()
  assert page.locator('[data-id="a1"] .process-facts').is_visible()
  page.locator('#expand-all').click()
  page.wait_for_function('document.querySelectorAll(".process-details[open]").length===21')
  assert page.locator('#expand-all').get_attribute('aria-pressed')=='true'
  assert page.locator('[data-id="a1"] .rounds-value').inner_text().startswith('单轮 · 1 轮')
  assert page.locator('[data-id="e2"] .rounds-value').inner_text().startswith('多轮 · 4 轮')
  assert page.locator('[data-id="cx-memory"] .rounds-value').inner_text().startswith('未核定')
  for rid,reason in [('d1','把翻回调为 1 秒'),('e2','改“狐狸” → 结束'),('f1','只读核查 → 修改'),('g2','催继续做'),('h1','接受现状')]:
   assert reason in page.locator(f'[data-id="{rid}"]').inner_text(),rid
  assert page.locator('[data-group="minimax-standalone"] .skill-on').count()==1
  assert page.locator('[data-group="minimax-standalone"] .skill-off').count()==1
  page.locator('[data-filter="同条件复跑"]').click();assert page.locator('.card').count()==6
  page.locator('[data-filter="全部"]').click();page.locator('#complete-only').check();assert page.locator('.card').count()==sum(x['full'] for x in data)
  page.locator('#complete-only').uncheck();page.locator('#search').fill('Neon');assert page.locator('.card').count()==1
  page.locator('#search').fill('不存在的作品');assert page.locator('#empty').is_visible()
  page.locator('#search').fill('')
  page.locator('#expand-all').click()
  page.wait_for_function('document.querySelectorAll(".process-details[open]").length===0')
  for r in data:
   id=r['id'];trace=json.loads((OUT/'traces'/f'{id}.json').read_text())
   page.locator(f'.card[data-id="{id}"] .about-button').click();assert page.locator('#about').is_visible();assert page.locator('#about-title').inner_text()==r['title']
   page.wait_for_function('''() => {const i=document.querySelector('.summary-picture');return i.complete&&i.naturalWidth>0}''')
   if id=='e2':assert '4 条用户输入并不等于 4 次开发返工' in page.locator('#summary-panel').inner_text()
   if id=='g2':assert '没有带来新一轮产品修正' in page.locator('#summary-panel').inner_text()
   page.locator('#trace-tab').click();page.wait_for_function('(id)=>!!window.GAME_TRACES[id]',arg=id)
   if trace['events']:
    page.wait_for_selector('.phase-nav button');assert page.locator('.phase-nav button').count()==len(trace['phases'])
    for i,phase in enumerate(trace['phases']):
     page.locator('.phase-nav button').nth(i).click();assert page.locator('.event').count()==phase['end']-phase['start']+1
     assert page.locator('.phase-detail h3').inner_text()==phase['title']
     first=page.locator('.event').first;first.locator('summary').click();first.locator('pre').wait_for();assert first.locator('pre').inner_text()==trace['events'][phase['start']-1]['text']
     counts['stages']+=1
    counts['events']+=len(trace['events'])
   else:
    page.wait_for_selector('#trace-panel .raw-details');page.locator('#trace-panel summary').click();assert '独立游戏初版' in page.locator('#trace-panel pre').inner_text()
   counts['details']+=1
   page.locator('[data-close="about"]').click();page.locator(f'.card[data-id="{id}"] .cover').click()
   page.locator('#player-loading').wait_for(state='hidden')
   assert not page.locator('#player-error').is_visible(),id
   frame=page.frame_locator('#game-frame');assert frame.locator('body').inner_text()
   if 'dodge' not in id:
    card=frame.locator('button[class*="card"]').first
    before=card.evaluate('(e)=>e.outerHTML');card.click()
    assert card.evaluate('(e)=>e.outerHTML')!=before,id
    counts['flips']+=1
   else:
    frame.get_by_role('button',name='开始游戏',exact=True).click()
    if id=='mm-dodge':
     frame.get_by_role('button',name='暂停游戏',exact=True).click()
     assert '已暂停' in frame.locator('body').inner_text()
    else:
     frame.get_by_role('button',name='暂停',exact=True).click()
     assert '已暂停' in frame.locator('body').inner_text()
    counts['dodge_starts']+=1
   page.locator('[data-close="player"]').click();counts['games']+=1
  page.locator('[data-id="a1"] .cover').click()
  page.locator('#player-loading').wait_for(state='hidden')
  page.locator('#player-next').click();page.locator('#player-loading').wait_for(state='hidden')
  assert page.locator('#player-title').inner_text().startswith('A2')
  page.locator('#player-prev').click();page.locator('#player-loading').wait_for(state='hidden')
  assert page.locator('#player-title').inner_text().startswith('A1')
  frame=page.frame_locator('#game-frame');frame.locator('button[class*="card"]').first.click()
  page.locator('#player-reload').click();page.locator('#player-loading').wait_for(state='hidden')
  assert frame.locator('button[class*="card"]').first.get_attribute('aria-label')=='未翻开的卡片'
  page.locator('#player-fullscreen').click()
  page.wait_for_function('document.fullscreenElement===document.documentElement')
  page.wait_for_function('document.querySelector("#player-fullscreen").textContent==="退出全屏"')
  page.locator('[data-close="player"]').click()
  page.wait_for_function('!document.fullscreenElement')
  page.route('**/games/a1/index.html',lambda route:route.abort())
  page.locator('[data-id="a1"] .cover').click();page.locator('#player-error').wait_for(state='visible')
  page.unroute('**/games/a1/index.html');page.locator('#player-retry').click()
  page.locator('#player-loading').wait_for(state='hidden');assert not page.locator('#player-error').is_visible()
  frame.locator('button[class*="card"]').first.click()
  assert '已翻开' in frame.locator('button[class*="card"]').first.get_attribute('aria-label')
  page.locator('[data-close="player"]').click()
  page.evaluate('scrollTo(0,0)');page.screenshot(path=str(OUT/'gallery-desktop.png'))
  page.set_viewport_size({'width':390,'height':844});page.evaluate('scrollTo(0,0)');assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  page.screenshot(path=str(OUT/'gallery-mobile.png'),full_page=False)
  page.locator('.about-button').first.click();assert page.evaluate('document.querySelector("#about").scrollWidth<=document.querySelector("#about").clientWidth')
  page.locator('#trace-tab').click();page.wait_for_selector('.phase-nav');page.screenshot(path=str(OUT/'trace-mobile.png'))
  assert page.evaluate('document.querySelector("#about").scrollWidth<=document.querySelector("#about").clientWidth')
  page.keyboard.press('Escape');assert not page.locator('#about').is_visible()
  assert page.locator('.about-button').first.evaluate('(e)=>e===document.activeElement')
  assert not errors,errors
  browser.close()
 (OUT/'gallery-checks.json').write_text(json.dumps({'passed':True,**counts,'browser_errors':errors,'viewports':['1440×1000','390×844']},ensure_ascii=False,indent=2))
 print(json.dumps(counts,ensure_ascii=False))
if __name__=='__main__':main()
