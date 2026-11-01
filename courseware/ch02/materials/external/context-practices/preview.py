"""在本地播放器临时注入原文截图，不改课件。"""
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from threading import Thread
import base64, json
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[5]
D=Path(__file__).resolve().parent
server=ThreadingHTTPServer(('127.0.0.1',0),partial(SimpleHTTPRequestHandler,directory=str(ROOT)))
Thread(target=server.serve_forever,daemon=True).start()
candidates=[('openai-manual-edit-sync','手动改过，也要更新它的依据','https://learn.chatgpt.com/docs/prompting#iterate-on-ui-with-live-updates','OpenAI · Prompting · Iterate on UI with live updates'),('openai-short-agents','长期规则，也需要选择和维护','https://learn.chatgpt.com/guides/best-practices#make-guidance-reusable-with-agentsmd','OpenAI · Best practices · AGENTS.md')]
try:
 with sync_playwright() as p:
  browser=p.chromium.launch()
  for name,title,url,label in candidates:
   page=browser.new_page(viewport={'width':1280,'height':900},device_scale_factor=1)
   errors=[]
   page.on('pageerror',lambda e:errors.append(str(e)))
   img=base64.b64encode((D/(name+'.png')).read_bytes()).decode()
   scene={'id':'candidate','layout':'evidence-scene','segment':'经验分享','title':title,'label':'原文候选','lead':'','steps':['原文'],'html':'<div class="p-shot" style="--shot-h:350px"><div class="p-page"><div class="p-page-bar">OpenAI · 访问于 2026-11-01</div><img src="data:image/png;base64,'+img+'" alt="官方原文节选"></div></div>','refs':[{'text':label,'url':url,'kind':'live'}]}
   data=json.loads((ROOT/'courseware/ch02/lessons/05-experience/lesson.js').read_text()[len('window.lesson = '):].rstrip().rstrip(';'))
   data['scenes']=[scene]
   page.route('**/05-experience/lesson.js',lambda route:route.fulfill(content_type='application/javascript',body='window.lesson = '+json.dumps(data,ensure_ascii=False)+';'))
   page.goto(f'http://127.0.0.1:{server.server_port}/courseware/ch02/lessons/05-experience/index.html?mode=slides#candidate')
   page.evaluate("document.body.classList.add('recording');document.body.classList.remove('camera-hidden')")
   page.evaluate('document.fonts.ready')
   page.wait_for_timeout(500)
   page.screenshot(path=str(D/('preview-'+name+'.png')),clip=page.locator('.scene').bounding_box())
   print(name,page.locator('.scene-content').evaluate('(e)=>({height:e.scrollHeight,available:e.clientHeight})'),errors)
   page.close()
  browser.close()
finally:
 server.shutdown()
