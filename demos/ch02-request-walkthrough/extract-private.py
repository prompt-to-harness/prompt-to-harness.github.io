"""Read an existing local capture; write complete instructional text with credentials excluded. No API calls.
uv run --with claude-tap==0.1.146 python <this file> --source <local-json> --database <local-sqlite>
"""
import argparse,copy,hashlib,json,re,sqlite3
from pathlib import Path
from claude_tap.compact_trace import decode_compact_record_payload
p=argparse.ArgumentParser();p.add_argument('--source',type=Path,required=True);p.add_argument('--database',type=Path,required=True);a=p.parse_args()
source=json.loads(a.source.read_text());c=sqlite3.connect(a.database.resolve().as_uri()+'?mode=ro',uri=True)
sid=source['trace_session'];row=c.execute('select payload_json from records where session_id=? and record_index=?',(sid,source['record_index'])).fetchone();assert row
record=decode_compact_record_payload(json.loads(row[0]),lambda ref:json.loads(c.execute('select payload_json from record_blobs where session_id=? and hash=? and kind=?',(sid,ref['hash'],ref.get('kind','json'))).fetchone()[0]));c.close()
b=source['request'];assert record['request']['body']==b
assert source['response_usage']['input_tokens']==8651 and len(b['input'])==6
assert b['input'][-1]['content'][0]['text']=='你好，用一句话介绍你能帮我做什么。'
root=Path(__file__).resolve().parent
# Paths are substituted by source role, rather than preserving personal usernames or temporary names.
env=b['input'][4]['content'][0]['text'];project=re.search(r'<cwd>(.*?)</cwd>',env).group(1)
skills=b['input'][1]['content'][0]['text'];skillroot=re.search(r'- `r0` = `([^`]+)`',skills).group(1)
def clean(text):
 text=text.replace(project,'[project]').replace(skillroot,'[course-home]/.codex/skills/.system')
 text=re.sub(r'/Users/[^\s<>"\x27`;,]+','[course-home]',text)
 text=re.sub(r'/private/(?:var/folders|tmp)/[^\s<>"\x27`;,]+','[temporary]',text)
 text=re.sub(r'\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b','[email-redacted]',text)
 return text
def cleaned(v):
 if isinstance(v,dict):return {k:cleaned(x) for k,x in v.items()}
 if isinstance(v,list):return [cleaned(x) for x in v]
 return clean(v) if isinstance(v,str) else v
messages=[{'type':m['type'],'role':m['role'],'content':cleaned(m['content'])} for m in b['input']]
tools=cleaned(b['tools']);assert tools==cleaned(b['tools'])
# Restore all instructional text; folding belongs to the presentation, not the data.
assert all(clean(orig['text'])==new['text'] for m,n in zip(b['input'],messages) for orig,new in zip(m['content'],n['content']))
assert '[教学删节' not in json.dumps(messages+tools,ensure_ascii=False)
skill=Path(skillroot)/'skill-creator/SKILL.md'
assert skill.exists()
filetext=skill.read_text()
excerpt=[]
for title in ['Core Principles','Create or Update a Skill','Validate and Iterate']:
 match=re.search(r'^#{1,6} .*'+re.escape(title)+r'.*$',filetext,re.M)
 if match:excerpt.append('\n\n'.join(filetext[match.start():].split('\n\n')[:2]).strip())
assert len(excerpt)>=2
(root/'skill-file-excerpt.json').write_text(json.dumps({'file':'r0/skill-creator/SKILL.md','source_sha256':hashlib.sha256(filetext.encode()).hexdigest(),'excerpt':'\n\n[…文件中间内容省略…]\n\n'.join(excerpt),'note':'配套文件摘录，不在这份问候的初始请求内；保留原文片段用于列表与全文对照。'},ensure_ascii=False,indent=2)+'\n')
body={k:copy.deepcopy(b[k]) for k in ['model','stream','tool_choice','parallel_tool_calls','reasoning','store'] if k in b}
body.update(input=messages,tools=tools)
response=record['response']['body'];assert response['usage']==source['response_usage'];output=[]
for x in response.get('output',[]):
 if x.get('type') in ('custom_tool_call','function_call'):
  y={k:clean(v) if isinstance(v,str) else v for k,v in x.items() if k in ['type','name','input','arguments','call_id']};y['call_id']='greeting-read-call';output.append(y)
assert len(output)==1 and 'package.json' in json.dumps(output)
public=[{'request_id':'greeting-main-request','turn':1,'timestamp':source['timestamp'],'duration_ms':record.get('duration_ms'),
 'request':{'method':'POST','path':'/v1/responses','body':body},
 'response':{'status_code':200,'body':{'output':output,'usage':source['response_usage']}},
 'capture':{'client':'codex','proxy_mode':'reverse'}}]
raw=json.dumps(public,ensure_ascii=False,indent=2)+'\n'
for secret in ['/Users/','/private/var/folders/','prompt_cache_key','client_metadata','authorization','api_key','encrypted_content']:
 assert secret.lower() not in raw.lower(),secret
assert not re.search(r'\bsk-[A-Za-z0-9_-]{12,}|Bearer\s+[A-Za-z0-9]',raw)
(root/'trace.json').write_text(raw)
manifest={'date':'2026-10-23','record':'前半组问候的初始主请求（原请求8651输入token）','original_request_sha256':hashlib.sha256(json.dumps(b,sort_keys=True,ensure_ascii=False).encode()).hexdigest(), 'public_trace_sha256':hashlib.sha256(raw.encode()).hexdigest(),'input_messages':6,'top_level_tools':5,'input_tokens':8651,'capture_usage_preserved':True,'notes':['仅选初始主请求，未并入标题请求和工具返回后的请求。','角色、文本块位置和本次身份/权限/环境/问候保留；全部消息正文与工具定义完整保留，无教学删节。','鉴权请求头、缓存及安装/会话标识、推理正文与密文不导出；本机路径按角色替换。','统计沿用原始API usage，不按路径替换后的文字计算；原响应是读文件工具调用，不是最终回答。']}
(root/'source-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n');print('Existing capture redacted: 6 messages, 5 tools, original usage 8651; no model request.')
