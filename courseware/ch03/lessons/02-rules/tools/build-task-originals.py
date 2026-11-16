#!/usr/bin/env python3
"""从已核对的少量节选生成备用阅读页；不保存上游完整文件。"""
from pathlib import Path
from html import escape as e
import json
import re
HERE=Path(__file__).resolve().parents[1]
def build():
 d=json.loads((HERE/'assets/task-originals.json').read_text())
 routes={
 'workflow':[('继续：工具与条件','#tooling')],
 'tooling':[('继续：报告要求','#reporting')],
 'reporting':[('任务 1：返回 PPT 第 2 步','index.html?mode=slides&step=1#p07t1')],
 'references':[('任务 2：沿 Full checklist 阅读','#checklist'),('任务 3：沿 Frontend review cues 阅读','#frontend')],
 'checklist':[('任务 2：返回 PPT 第 2 步','index.html?mode=slides&step=1#p07t2')],
 'frontend':[('任务 3：返回 PPT 第 2 步','index.html?mode=slides&step=1#p07t3')]}
 sections=[]
 for s in d['sections']:
  lines='\n'.join(s['lines'])
  if len(re.findall(r'\b[\w-]+\b', lines)) > 15:
   raise ValueError(f"{s['id']} 的原文引文超过 15 个词")
  summary=f'<p class="summary"><strong>课程转述</strong>　{e(s["summary"])}</p>' if s.get('summary') else ''
  links=''.join(f'<a href="{e(url,quote=True)}">{e(label)} →</a>' for label,url in routes[s['id']])
  sections.append(f'''<section id="{s['id']}"><p class="file">{e(s['file'])}</p><h2>{e(s['heading'])}</h2><p class="source"><a href="{e(s['url'],quote=True)}" target="_blank" rel="noopener">查看固定版本完整原文 ↗</a> · OpenAI / plugins · <code>{d['commit'][:12]}</code></p><p class="note">英文原文短引，保留原有编号</p><blockquote><pre>{e(lines)}</pre></blockquote>{summary}<nav aria-label="课程阅读顺序">{links}</nav></section>''')
 nav=''.join(f'<a href="#{s["id"]}">{e(s["heading"])}</a>' for s in d['sections'])
 (HERE/'task-originals.html').write_text('''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>3.2.3 · 必要原文节选</title><style>
*{box-sizing:border-box}body{margin:0;background:#f4f2eb;color:#243042;font:20px/1.65 system-ui,sans-serif}header,main{max-width:1120px;margin:auto;padding:24px 36px}header{border-bottom:1px solid #c8c3b6}h1{font-size:30px;margin:0 0 8px}h2{font-size:32px;margin:4px 0 10px}.file,.source,.note{font-size:16px;margin:6px 0;color:#5b6573}.file{overflow-wrap:anywhere}a{color:#0b6b5f;text-underline-offset:4px}nav{display:flex;gap:12px 24px;flex-wrap:wrap}header nav{font-size:16px}section{padding:26px 0 42px;min-height:640px;border-bottom:1px solid #c8c3b6;scroll-margin-top:12px}blockquote{margin:24px 0;padding:20px 24px;border-left:4px solid #9c8b66;background:#fffdf7}pre{margin:0;white-space:pre-wrap;overflow-wrap:anywhere;font:22px/1.65 system-ui,sans-serif}section nav a{border-bottom:1px solid #0b6b5f;padding:8px 0}code{font-size:15px}@media(max-width:650px){header,main{padding:20px}pre{font-size:18px}h2{font-size:26px}}
</style></head><body><header><h1>3.2.3 · 必要原文节选</h1><p>原站无法访问时，可对照英文短引和课程转述。</p><nav>'''+nav+'</nav></header><main>'+''.join(sections)+'</main></body></html>\n')
if __name__=='__main__':build()
