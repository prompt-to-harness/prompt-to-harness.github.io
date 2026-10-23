from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[4]
out=root/'courseware/ch02/materials/external'
with sync_playwright() as p:
 b=p.chromium.launch()
 page=b.new_page(viewport={'width':1440,'height':1000},device_scale_factor=1)
 page.goto((root/'courseware/ch02/lessons/01-request/index.html').as_uri()+'?mode=slides&step=1#p06-tap')
 page.evaluate('document.fonts.ready')
 for style in ('course','excalidraw'):
  svg=(out/f'redraw-tap-proxy-{style}.svg').read_text()
  page.evaluate('''svg=>{
   const s=document.querySelector('#p06-tap');
   s.querySelector('h2').textContent='用本地代理，看请求怎样发出去';
   s.querySelector('.scene-content').innerHTML=`<div style="display:flex;flex-direction:column;gap:6px">${svg}<div class="p-term" style="font-size:18px;padding:8px 16px;line-height:1.5">$ uvx claude-tap@0.1.146 --tap-client codex \\\\<br>　--tap-target https://api.minimax.cn/v1</div><p style="font-size:14px;color:#5B6573">据 liaohch3/claude-tap v0.1.146 README 整理 · 本章使用的反向代理路径</p></div>`;
   s.querySelector('svg').style.cssText='width:100%;height:260px;display:block';
  }''',svg)
  page.evaluate('document.fonts.ready')
  page.locator('#p06-tap').screenshot(path=str(out/f'tap-proxy-preview-{style}.png'))
  print(style,page.locator('#p06-tap .scene-content').evaluate('(e)=>({h:e.clientHeight,scroll:e.scrollHeight})'))
 b.close()
