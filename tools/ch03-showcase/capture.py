"""Capture actual game previews from the local generated gallery; no source edits."""
import asyncio,json,re
from pathlib import Path
from playwright.async_api import async_playwright
OUT=Path(__file__).resolve().parents[2]/'lab-runs/ch03-showcase'
BASE='http://127.0.0.1:4397'
async def main():
 data=json.loads((OUT/'data.js').read_text().split('=',1)[1].strip().rstrip(';'))
 async with async_playwright() as pw:
  browser=await pw.chromium.launch(channel='chrome')
  report=[]
  for r in data:
   context=await browser.new_context(viewport={'width':1000,'height':820},device_scale_factor=1)
   page=await context.new_page();errors=[];bad=[]
   page.on('pageerror',lambda e:errors.append(str(e)))
   page.on('response',lambda x:bad.append(x.url) if x.status>=400 else None)
   await page.goto(BASE+'/'+r['game'],wait_until='networkidle');await page.wait_for_timeout(250)
   info=await page.evaluate('''() => {
    const headings=[...document.querySelectorAll('h1,h2,h3')];
    const h=headings.find(x=>/记忆|翻牌/.test(x.textContent));
    const target=h?.closest('section') || (h?.closest('main')) || document.querySelector('main') || document.body;
    target.dataset.galleryCapture='true';
    return {title:document.title,heading:h?.textContent,buttons:[...document.querySelectorAll('button')].map(x=>({text:x.textContent.trim().slice(0,45),cls:x.className})).slice(0,8),target:target.tagName};
   }''')
   # Show a real first flip where possible; no hidden state or code modifications.
   if r['family']=='翻牌':
    candidates=page.locator('button[class*="card"]')
    if await candidates.count():
     try:await candidates.first.click(timeout=1500);await page.wait_for_timeout(350)
     except Exception:pass
   elif r['id']=='mm-dodge':
    start=page.get_by_role('button',name=re.compile('开始|Start',re.I))
    if await start.count():
     await start.first.click();await page.wait_for_timeout(700)
   target=page.locator('[data-gallery-capture]')
   box=await target.bounding_box()
   if r['batch']=='独立项目':
    await page.screenshot(path=str(OUT/'previews'/f"{r['id']}.png"))
   else:
    await target.screenshot(path=str(OUT/'previews'/f"{r['id']}.png"))
   report.append({'id':r['id'],'errors':errors,'http_errors':bad,**info})
   print(r['id'],len(errors),info.get('heading'),flush=True)
   await context.close()
  (OUT/'capture-checks.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
  await browser.close()
asyncio.run(main())
