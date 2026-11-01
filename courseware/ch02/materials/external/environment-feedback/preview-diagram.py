"""只在浏览器替换 lesson 数据，输出两版候选样稿，不写正式课件。"""
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from threading import Thread
import json
from playwright.sync_api import sync_playwright
ROOT = Path(__file__).resolve().parents[5]
D = Path(__file__).resolve().parent
server = ThreadingHTTPServer(('127.0.0.1', 0), partial(SimpleHTTPRequestHandler, directory=str(ROOT)))
Thread(target=server.serve_forever, daemon=True).start()
try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for style in ['course', 'excalidraw']:
            page = browser.new_page(viewport={'width':1280,'height':900}, device_scale_factor=1)
            errors=[]
            page.on('pageerror', lambda e: errors.append(str(e)))
            svg=(D/f'redraw-environment-feedback-{style}.svg').read_text()
            scene={'id':'p49b-diagram-preview','segment':'查询部署结果','layout':'evidence-scene',
                   'title':'下一步怎么走，要看实际返回','label':'环境反馈（候选样稿）','lead':'',
                   'steps':['回顾发布前查询','对照推送后查询'],
                   'html':svg,
                   'refs':[{'text':'Anthropic · Building effective agents · Agents',
                            'url':'https://www.anthropic.com/research/building-effective-agents#agents','kind':'live'}]}
            original=(ROOT/'courseware/ch02/lessons/04-publish/lesson.js').read_text()
            data=json.loads(original[len('window.lesson = '):].rstrip().rstrip(';'))
            data['scenes']=[scene]
            page.route('**/04-publish/lesson.js', lambda route:route.fulfill(content_type='application/javascript',body='window.lesson = '+json.dumps(data,ensure_ascii=False)+';'))
            page.goto(f'http://127.0.0.1:{server.server_port}/courseware/ch02/lessons/04-publish/index.html?mode=slides&step=1#p49b-diagram-preview')
            page.evaluate("document.body.classList.add('recording');document.body.classList.remove('camera-hidden')")
            page.add_style_tag(content='.scene-content > svg{display:block;width:880px;height:410px;flex:none}.scene-content .p-refs{margin-top:8px}')
            page.evaluate('document.fonts.ready')
            page.wait_for_timeout(700)
            page.screenshot(path=str(D/f'layout-diagram-{style}.png'), clip=page.locator('.scene').bounding_box())
            print(style, page.locator('.scene-content').evaluate('(e)=>({height:e.scrollHeight,available:e.clientHeight})'), 'errors',errors)
            page.close()
        browser.close()
finally:
    server.shutdown()
