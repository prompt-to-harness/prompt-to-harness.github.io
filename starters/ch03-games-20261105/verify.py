from pathlib import Path
from playwright.sync_api import sync_playwright
import json
root=Path(__file__).resolve().parents[2]/'lab-runs/ch03-standalone-20261105'
root.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 browser=p.chromium.launch()
 page=browser.new_page(viewport={'width':1000,'height':1000});errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:4183');page.wait_for_selector('.card')
 # Discover faces through real flips, restarting before a clean complete round.
 faces={}
 for i in range(12):
  page.locator('.card').nth(i).click();faces[i]=page.locator('.card').nth(i).inner_text()
  if i%2:page.wait_for_timeout(800)
 # Start a clean round, inspect identities from the source simulation via browser module lexical eval unavailable; solve by player-visible exploration.
 page.locator('#restart').click();seen={};matched=set();tries=0
 while len(matched)<12 and tries<100:
  candidates=[i for i in range(12) if i not in matched]
  a=next((i for i in candidates if i not in seen),candidates[0]);page.locator('.card').nth(a).click();face=page.locator('.card').nth(a).inner_text();seen[a]=face
  b=next((i for i in candidates if i!=a and seen.get(i)==face),next(i for i in candidates if i!=a))
  # Prefer an unvisited second card when a matching face is not known.
  if seen.get(b)!=face:b=next((i for i in candidates if i!=a and i not in seen),b)
  page.locator('.card').nth(b).click();seen[b]=page.locator('.card').nth(b).inner_text()
  if seen[a]==seen[b]:matched.update([a,b])
  else:page.wait_for_timeout(800)
  tries+=1
 assert page.locator('#pairs').inner_text()=='6'
 assert '全部配对完成' in page.locator('#status').inner_text()
 page.screenshot(path=str(root/'memory-complete.png'))
 page.locator('#restart').click();page.locator('.card').nth(0).click();page.locator('.card').nth(1).click();page.locator('#restart').click();page.locator('.card').nth(0).click();page.wait_for_timeout(900);assert page.locator('.open').count()==1
 page.set_viewport_size({'width':390,'height':844});page.screenshot(path=str(root/'memory-mobile.png'));assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
 page.goto('http://127.0.0.1:4184');page.wait_for_selector('canvas');page.locator('#start').click();page.keyboard.press('ArrowRight');page.locator('#pause').click();assert page.locator('#pause').inner_text()=='继续';page.locator('#pause').click();assert page.locator('#pause').inner_text()=='暂停';page.screenshot(path=str(root/'dodge-mobile.png'));assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
 page.set_viewport_size({'width':1000,'height':1000});page.screenshot(path=str(root/'dodge-desktop.png'))
 # Deterministic simulation checks use real exported rules, avoiding a hidden cheat API in the game.
 result=page.evaluate('''async()=>{const {createState,step}=await import('/simulation.js');const input={up:false,down:false,left:false,right:false};let s=createState();s.phase='playing';s.spawn=99;s.items=[{x:s.x,y:s.y,speed:0}];step(s,.01,input);if(s.score!==10)throw Error('collect');s.hazards=[{x:s.x,y:s.y,speed:0},{x:s.x,y:s.y,speed:0}];step(s,.01,input);if(s.lives!==2)throw Error('invulnerability');s.phase='paused';const t=s.elapsed;step(s,.05,input);if(s.elapsed!==t)throw Error('pause');s=createState();s.phase='playing';s.elapsed=59.99;step(s,.02,input);if(s.phase!=='over')throw Error('timeout');s=createState();s.phase='playing';s.lives=1;s.spawn=99;s.hazards=[{x:s.x,y:s.y,speed:0}];step(s,.01,input);if(s.phase!=='over')throw Error('death');s=createState();s.phase='playing';for(let i=0;i<200;i++)step(s,.05,{...input,left:true});if(s.x<16)throw Error('bounds');return {collection:true,invulnerability:true,pause:true,timeout:true,death:true,bounds:true};}''')
 assert not errors,errors
 (root/'checks.json').write_text(json.dumps({'memory_complete':True,'memory_restart_pending':True,'mobile_overflow':False,'dodge_rules':result,'browser_errors':errors},ensure_ascii=False,indent=2))
 browser.close()
print('Browser and simulation checks passed')
