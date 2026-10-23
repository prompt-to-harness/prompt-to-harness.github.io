"""Build escaped Markdown views from the complete public request; no API calls."""
import json,re
from html import escape
from pathlib import Path
from markdown_it import MarkdownIt
root=Path(__file__).resolve().parent
md=MarkdownIt('commonmark',{'html':False,'linkify':False})
b=json.loads((root/'trace.json').read_text())[0]['request']['body'];msgs=b['input']
def render(text):
 # XML envelope lines are labels, not executable HTML; fenced code is untouched.
 blocks=re.split(r'(```[\s\S]*?```)',text)
 for i in range(0,len(blocks),2):
  blocks[i]=re.sub(r'(?m)^\s*(</?[\w -]+>)\s*$',lambda m:'\n\n`'+m[1]+'`\n\n',blocks[i])
 return md.render(''.join(blocks))
def fold(title,content):return '<details><summary>'+escape(title)+'</summary>'+content+'</details>'
def point(key,title,role,content):return '<article data-reader-point id="'+key+'" hidden><div class="meta">'+escape(role)+'</div><h2>'+title+'</h2>'+content+'</article>'
texts=lambda m:'\n\n'.join(x['text'] for x in m['content'])
identity=render(texts(msgs[0]))+fold('展开协作模式、团队与多代理说明',render(msgs[1]['content'][2]['text'])+render(texts(msgs[2]))+render(texts(msgs[3])))
exec_tool=next(x for x in b['tools'] if x.get('name')=='exec');desc=exec_tool['description'];parts=re.split(r'(?m)(?=^### `)',desc);intro=parts[0];command=next(x for x in parts if x.startswith('### `exec_command`'))
tools='<h3>exec</h3>'+render(intro.splitlines()[0])+fold('展开 exec 的执行说明',render('\n'.join(intro.splitlines()[1:])))+render(command)+fold('展开 exec 的其余完整说明',render('\n'.join(x for x in parts[1:] if x!=command)))
for t in b['tools']:
 if t is exec_tool:continue
 tools+=fold('展开 '+t.get('name',t['type'])+' 的完整定义','<pre><code>'+escape(json.dumps(t,ensure_ascii=False,indent=2))+'</code></pre>')
skilltext=msgs[1]['content'][0]['text'];start=skilltext.index('### Available skills')
skills=fold('展开列表说明与目录',render(skilltext[:start]))+'<h3>Available skills</h3>'
for line in skilltext[start:].splitlines()[1:]:
 if line.startswith('- '):
  name=line[2:].split(':',1)[0];entry=fold(name,render(line[2:]));
  if name=='skill-creator':entry=entry.replace('<details>','<details open>',1)
  skills+=entry
f=json.loads((root/'skill-file-excerpt.json').read_text());skills+=fold('对照：对应 SKILL.md 里还有什么？','<p class="notice">'+escape(f['note'])+'</p>'+render(f['excerpt']))

env=msgs[4]['content'][0]['text'];preamble,sep,rest=env.partition('<filesystem>');environment='<pre><code>'+escape(preamble)+'</code></pre>'+fold('展开文件访问范围','<pre><code>'+escape(sep+rest)+'</code></pre>')
perm=msgs[1]['content'][1]['text'];first,sep,rest=perm.partition('\n# Escalation Requests');roots=re.search(r'The writable roots are .*?\.',perm)
permissions=render(first)+(('<div class="evidence">'+render(roots[0])+'</div>') if roots else '')+fold('展开审批与命令规则完整说明',render(sep+rest))
points=[point('identity','编程 Agent 与用户共用工作区','请求消息 · developer',identity),point('tools','工具的名字与调用方式','请求 tools · 工具定义',tools),point('skills','技能列表提供名字、简述和位置','请求消息 · developer',skills),point('environment','本次工作的现场信息','请求消息 · user；内容由 Codex 加入',environment),point('permissions','请求里的权限说明','请求消息 · developer',permissions)]
(root/'reader.html').write_text((root/'reader.template.html').read_text().replace('__POINTS__',''.join(points)))
