"""uv run --with claude-tap==0.1.146 python <this file>. No model calls."""
import json,re,hashlib
from pathlib import Path
from html import escape as e
from importlib.metadata import version
from claude_tap.viewer import _generate_html_viewer_from_records
assert version('claude-tap')=='0.1.146'
here=Path(__file__).resolve().parent;target=here.parents[2]/'lessons/01-request/trace';s=json.loads((here/'summary.json').read_text());manifest={}
def serialize(raw):
 def script(m):return m[1]+re.sub(r'[\u4e00-\u9fff]',lambda x:'\\u%04x'%ord(x[0]),m[2])+m[3]
 raw=re.sub(r'(<script\b[^>]*>)([\s\S]*?)(</script>)',script,raw)
 return re.sub(r'[\u4e00-\u9fff]',lambda x:'&#x%x;'%ord(x[0]),raw)
for arm,stats in s['arms'].items():
 source=here/f'{arm}.json';records=json.loads(source.read_text());lines=[json.dumps(x,ensure_ascii=True) for x in records];name='config-'+arm;out=target/(name+'.html');(target/(name+'.jsonl')).write_text('\n'.join(lines)+'\n');_generate_html_viewer_from_records(lines,out,display_trace_path=name+'.jsonl',display_html_path=name+'.html')
 raw=out.read_text().replace("let currentLang = safeLocalStorageGet('claude-tap-lang') || detectLang();","let currentLang = 'zh-CN';")
 raw=raw.replace('</body>', '''<script>
selectEntry(0);
requestAnimationFrame(()=>{
 const point=new URLSearchParams(location.search).get('point')||'permissions';
 const title=point==='tools'?t('section_tools'):point==='reasoning'?t('section_json'):t('section_messages');
 for(const section of document.querySelectorAll('#detail .section')){
  const open=section.querySelector('.title')?.textContent===title;
  section.querySelector('.section-body')?.classList.toggle('open',open);
  section.querySelector('.chevron')?.classList.toggle('open',open);
 }
 const msg=point==='permissions'?[...document.querySelectorAll('#detail .msg')].find(m=>m.textContent.includes('<permissions instructions>')):document.querySelector('#detail .msg');
 const target=point==='reasoning'?[...document.querySelectorAll('#detail .jk')].find(k=>k.textContent==='\"reasoning\"')?.parentElement:msg;
 if(target){target.scrollIntoView({block:'start'});target.style.outline='2px solid #ad8c43';}
});
</script></body>''');out.write_text(serialize(raw));manifest[arm]={'source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'html_sha256':hashlib.sha256(out.read_bytes()).hexdigest()}
style='body{font:18px/1.6 system-ui,sans-serif;color:#243042;background:#f7f5ef;margin:0;padding:28px;max-width:1200px;margin:auto}h1{font-size:30px}h2{font-size:24px;scroll-margin-top:20px}a{color:#176149}nav{display:flex;flex-wrap:wrap;gap:20px;margin:20px 0}.pair{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:20px}.card{background:white;border:1px solid #c9c6bd;border-radius:10px;padding:18px;min-width:0}pre{white-space:pre-wrap;overflow-wrap:anywhere;font:16px/1.6 ui-monospace,monospace}table{border-collapse:collapse;width:100%;background:white}td,th{padding:10px;border-bottom:1px solid #ccc;text-align:left}small{color:#596575}section{margin:32px 0}@media(max-width:650px){.pair{grid-template-columns:1fr}body{padding:16px;font-size:16px}}'
def pair(arms,key,point):
 return '<div class="pair">'+''.join('<div class="card"><h3>'+label+'</h3><pre>'+e(json.dumps(s['arms'][arm][key],ensure_ascii=False,indent=2) if isinstance(s['arms'][arm][key],(dict,list)) else str(s['arms'][arm][key]))+'</pre><a href="config-'+arm+'.html?point='+point+'" target="_blank" rel="noopener">定位到原请求 ↗</a></div>' for arm,label in arms)+'</div>'
def table(arms,rows):
 return '<table><tr><th>原记录统计</th>'+''.join('<th>'+label+'</th>' for _,label in arms)+'</tr>'+''.join('<tr><td>'+label+'</td>'+''.join('<td>'+e(str(s['arms'][a][key]))+'</td>' for a,_ in arms)+'</tr>' for key,label in rows)+'</table>'
for group,arms,title in [('permissions',[('perm-read','只读'),('perm-write','工作区可写')],'权限怎样改变请求'),('model',[('model-on','有目录'),('model-off','缺少目录')],'MiniMax 模型适配对照')]:
 if group=='permissions':
  body='<nav><a href="#permissions">权限说明与可写目录</a><a href="#numbers">数量对照</a></nav><section id="permissions"><h2>原请求中的权限说明</h2>'+pair(arms,'permission_text','permissions')+'</section><section id="numbers"><h2>同一份记录生成的统计</h2>'+table(arms,[('permission_chars','权限说明字符'),('environment_chars','环境消息字符'),('input_tokens','API 输入 token')])+'</section>'
 else:
  body='<nav><a href="#base">基础指令</a><a href="#tools">工具定义</a><a href="#reasoning">实际推理参数</a><a href="#numbers">数量对照</a></nav><section id="base"><h2>基础指令开头（教学摘录）</h2>'+pair(arms,'base_excerpt','base')+'</section><section id="tools"><h2>原请求的顶层工具名称</h2>'+pair(arms,'tool_names','tools')+'</section><section id="reasoning"><h2>实际请求 reasoning 字段</h2>'+pair(arms,'reasoning','reasoning')+'<p>本轮只删除目录引用，仍保留相同的显式 max 配置；两边都发送 max，后备组多了 summary: auto。没有沿用旧实验“不发送档位”的结论。</p></section><section id="numbers"><h2>同一份记录生成的统计</h2>'+table(arms,[('base_instruction_chars','第一条基础指令字符'),('tools_top_level','顶层工具项数'),('input_tokens','API 输入 token')])+'</section>'
 raw='<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+title+'</title><style>'+style+'</style><h1>'+title+'</h1><p>2026-10-23 · Codex 0.163.0 · MiniMax-M3.1-Flash · claude-tap 0.1.146</p><p>同一起点、相同问候、两个独立新会话；审批均为 never。本次不含审批弹窗或任务质量比较。</p>'+body+'<p><small>字符数按原文 Unicode 字符计数，权限段去除首尾空白；基础指令只统计第一条，不代表全部系统说明。原始长度在脱敏前计算；路径已替换，摘录长度不能反算原统计。输入 token 是原 API usage，含缓存。本次每边只有一次请求，数字不用于推断质量或费用倍率。完整记录也已教学删节，保留差异片段和原回复，省略其他说明及工具定义全文。</small></p><p><a href="../index.html?mode=slides#'+'p08a'+'">返回课件</a></p></html>'
 out=target/f'config-{group}-compare.html';out.write_text(serialize(raw));manifest[group]={'html_sha256':hashlib.sha256(out.read_bytes()).hexdigest()}
manifest['summary_sha256']=hashlib.sha256((here/'summary.json').read_bytes()).hexdigest();(here/'viewer-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n');print('Built four native records and two standalone comparison pages from captured data')
