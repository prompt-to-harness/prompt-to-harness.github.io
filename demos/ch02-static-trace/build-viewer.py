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
       if c.get('type') in ('custom_tool_call','function_call')
       and 'src/App.tsx' in c.get('input',c.get('arguments',''))]
candidates={
 'calls':[{'request':r['request_id'],'call_id':c['call_id'],'input':c.get('input',c.get('arguments',''))} for r,c in calls],
 'returns':[{'request':r['request_id'],'call_id':item['call_id']} for r in records for item in r['request']['body']['input']
            if item.get('type') in ('custom_tool_call_output','function_call_output')
            and any(item.get('call_id')==c['call_id'] for _,c in calls)],
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
selected=[(r,c) for r,c in calls if r['request_id']==selection.get('call_request') and c['call_id']==selection.get('call_id')]
if len(selected)!=1:require_confirmation('所选读取调用不存在或不唯一')
call_record,call=selected[0]
matching_returns=[r for r in records if r['request_id']==selection.get('return_request')
                  and any(c.get('call_id')==call['call_id'] and c.get('type') in ('custom_tool_call_output','function_call_output')
                          for c in r['request']['body']['input'])]
if len(matching_returns)!=1:require_confirmation('所选返回位置不存在或不唯一')
result_record=matching_returns[0]
answers=[r for r in records if r['request_id']==selection.get('answer_request')
         and any(c.get('type')=='message' for c in r['response']['body'].get('output',[]))]
if len(answers)!=1:require_confirmation('所选回答不存在或不唯一')
answer_record=answers[0]
points={'answer':{'request':answer_record['request_id'],'section':'section_response'},
        'call':{'request':call_record['request_id'],'section':'section_response'},
        'result':{'request':result_record['request_id'],'section':'section_messages','callId':call['call_id']}}
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
