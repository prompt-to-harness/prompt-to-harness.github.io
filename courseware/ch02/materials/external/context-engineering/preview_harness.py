"""只在浏览器内制作候选样稿，不修改正式课件。uv run 本文件。"""
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[5]
out=Path(__file__).resolve().parent
cases=[('harness-layers','Harness：两个使用层面', '''<div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;height:250px"><div style="border:2px solid #222;padding:26px;border-radius:14px"><div style="font-size:20px;color:#666">现在：拆开 Codex</div><h3 style="font-size:30px;margin:16px 0">工具的运行框架</h3><p style="font-size:24px;line-height:1.7">组织请求 → 调用模型<br>执行工具 → 带回结果</p></div><div style="border:2px solid #222;padding:26px;border-radius:14px"><div style="font-size:20px;color:#666">后面：围绕项目建设</div><h3 style="font-size:30px;margin:16px 0">项目的工作环境</h3><p style="font-size:24px;line-height:1.7">项目知识、工具与约束<br>检查 → 反馈 → 改进</p></div></div><p style="font-size:22px;margin:20px 0">两个使用层面，相互配合 · 课程据下列文章归纳</p>''', [('Codex agent loop','https://openai.com/index/unrolling-the-codex-agent-loop/'),('Harness engineering','https://openai.com/index/harness-engineering/')]),
('user-provenance','同样标为 user，文字来源可以不同', '''<div style="display:grid;grid-template-columns:120px 210px 1fr;font-size:25px;gap:24px;align-items:center;border:2px solid #222;border-radius:14px;padding:30px"><b>角色</b><b>来源</b><b>内容摘要</b><code>user</code><span>Codex 加入</span><span>当前目录、Shell、日期、时区……</span><code>user</code><span>人输入</span><span>你好，用一句话介绍你能帮我做什么。</span></div><p style="font-size:23px;line-height:1.6;margin:24px 0">看角色，还要看消息内容，才能判断它从哪里来。<br>这里对照的是本次问候请求中的两条消息。</p>''',[('Codex：Building the initial prompt','https://openai.com/index/unrolling-the-codex-agent-loop/')])]
with sync_playwright() as p:
 b=p.chromium.launch()
 page=b.new_page(viewport={'width':1440,'height':900},device_scale_factor=1)
 page.goto((root/'courseware/ch02/lessons/01-request/index.html').as_uri()+'?mode=slides&step=2#p09')
 page.evaluate('document.fonts.ready')
 for name,title,html,refs in cases:
  print(page.evaluate('''([title,html,refs])=>{const s=document.querySelector('#p09');s.querySelector('h2').textContent=title;s.querySelector('h2').style.fontFamily='sans-serif';const c=s.querySelector('.scene-content');c.innerHTML=html;c.style.fontFamily='sans-serif';let r=s.querySelector('.harness-candidate-refs'); if(!r){r=document.createElement('div');r.className='harness-candidate-refs';s.appendChild(r);}r.innerHTML=refs.map(([t,u])=>`<a href="${u}" style="color:#555;margin-right:24px">${t} ↗</a>`).join('');r.style.cssText='position:absolute;left:56px;bottom:68px;font:16px sans-serif;display:block';return {content:[c.clientHeight,c.scrollHeight],links:refs.length}}''',[title,html,refs]))
  page.locator('#p09').screenshot(path=str(out/f'preview-{name}.png'))
 b.close()
