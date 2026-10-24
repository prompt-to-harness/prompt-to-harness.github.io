#!/usr/bin/env python3
"""uv run --with claude-tap==0.1.146 python demos/ch02-static-trace/build-viewer.py"""
import json
from pathlib import Path
from importlib.metadata import version, distribution
from claude_tap.viewer import _generate_html_viewer_from_records
root=Path(__file__).resolve().parent
assert version('claude-tap')=='0.1.146'
import argparse
import hashlib
parser=argparse.ArgumentParser()
parser.add_argument('--trace', type=Path, default=root/'trace.json')
parser.add_argument('--selection', type=Path, default=root/'selection.json')
parser.add_argument('--list-candidates', action='store_true')
args=parser.parse_args()
raw=args.trace.read_bytes()
records=json.loads(raw)
calls=[(r,c) for r in records for c in r['response']['body'].get('output',[])
       if c.get('type') in ('custom_tool_call','function_call')]
def returned(cid):
    return [r for r in records for item in r['request']['body']['input']
            if item.get('type') in ('custom_tool_call_output','function_call_output') and item.get('call_id')==cid]
def text_of(item):
    out=item.get('output','');return '\n'.join(b.get('text','') for b in out) if isinstance(out,list) else str(out)
candidates={
 'calls':[{'request':r['request_id'],'call_id':c['call_id'],'input':c.get('input',c.get('arguments',''))[:200],
           'first_return':(returned(c['call_id']) or [{}])[0].get('request_id')} for r,c in calls],
 'answers':[{'request':r['request_id'],'excerpt':''.join(v.get('text','') for v in c.get('content',[]))[:120]}
            for r in records for c in r['response']['body'].get('output',[]) if c.get('type')=='message'],
}
def require_confirmation(reason):
 print(json.dumps(candidates,ensure_ascii=False,indent=2))
 raise SystemExit('需要讲师确认：'+reason+'。请先核对上面的候选，再更新 selection.json；未选择第一个候选，未覆盖查看器。')
if args.list_candidates:
 print(json.dumps(candidates,ensure_ascii=False,indent=2))
 raise SystemExit(0)
if not args.selection.exists():require_confirmation('缺少已确认的依据链')
selection=json.loads(args.selection.read_text())
if selection.get('trace_sha256')!=hashlib.sha256(raw).hexdigest():require_confirmation('记录已变化，旧选择不能自动沿用')
points={}
for chain in selection['chains']:
    cid=chain['call_id']
    if len([1 for r,c in calls if r['request_id']==chain['call_request'] and c['call_id']==cid])!=1:require_confirmation(chain['id']+' 的读取调用不存在或不唯一')
    ret=[r for r in returned(cid) if r['request_id']==chain['return_request']]
    if len(ret)!=1:require_confirmation(chain['id']+' 的返回位置不存在或不唯一')
    item=next(i for i in ret[0]['request']['body']['input'] if i.get('call_id')==cid and i.get('type','').endswith('output'))
    if chain['return_needle'] not in text_of(item):require_confirmation(chain['id']+' 的返回里找不到依据原文')
    ans=next((r for r in records if r['request_id']==chain['answer_request']),None)
    answer=''.join(v.get('text','') for c in (ans or {'response':{'body':{'output':[]}}})['response']['body'].get('output',[]) if c.get('type')=='message' for v in c.get('content',[]))
    if chain['answer_needle'] not in answer:require_confirmation(chain['id']+' 的回答里找不到引用')
    k=chain['id']
    points[k+'-answer']={'request':chain['answer_request'],'section':'section_response','needle':chain['answer_needle']}
    points[k+'-call']={'request':chain['call_request'],'section':'section_response','callId':cid}
    points[k+'-result']={'request':chain['return_request'],'section':'section_messages','callId':cid,'needle':chain['return_needle']}
_generate_html_viewer_from_records([json.dumps(x,ensure_ascii=False) for x in records],root/'trace.html',display_trace_path='trace.json',display_html_path='trace.html')
s=(root/'trace.html').read_text()
s=s.replace("let currentLang = safeLocalStorageGet('claude-tap-lang') || detectLang();", "let currentLang = 'zh-CN'; // 此课程样稿默认中文，不改浏览器持久设置")
bridge=(root/'viewer-bridge.js').read_text().replace('__COURSE_GUIDE_POINTS__',json.dumps(points))
s=s.replace('</body>','<script>\n'+bridge+'\n</script>\n</body>')
(root/'trace.html').write_text(s)
d=distribution('claude-tap');license_path=next(x for x in d.files if str(x).endswith('licenses/LICENSE'))
(root/'LICENSE-claude-tap.txt').write_text(d.locate_file(license_path).read_text())
(root/'viewer-manifest.json').write_text(json.dumps({'trace_sha256':hashlib.sha256(raw).hexdigest(),'selection':selection},ensure_ascii=False,indent=2)+'\n')
print('Self-contained static viewer generated:',len(s.encode()),'bytes')
