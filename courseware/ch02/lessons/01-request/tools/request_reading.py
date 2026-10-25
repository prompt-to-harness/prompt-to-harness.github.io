"""2.1 p08a 的阅读视图：问候那一份请求（interactive.json 第 1 条）按七处观察点渲染成 Markdown，长段落折叠，不删内容。
原文用禁用 HTML 的 markdown-it 渲染，不执行原文里的 HTML；交给 tracekit 的 Evidence.stage(..., reading=...) 放进 .p-evidence。
skill-file-excerpt.json 来自同一课程 HOME 的实际 skill-creator 文件，不是请求的一部分，单独标注。"""
import json
import re
from html import escape
from pathlib import Path

from markdown_it import MarkdownIt

# p08a 第 1 步对照首句用；页底的阅读链接也取这一处（C2-99）
MINIMAX_DOC = 'https://platform.minimax.cn/docs/m-plan/codex#%E9%85%8D%E7%BD%AE-minimax-api'

RUN = Path(__file__).resolve().parents[3] / 'materials/request/run-20261024'
md = MarkdownIt('commonmark', {'html': False, 'linkify': False})


def render(text):
    # XML 外壳行是标签，不是要执行的 HTML；围栏代码不动
    blocks = re.split(r'(```[\s\S]*?```)', text)
    for i in range(0, len(blocks), 2):
        blocks[i] = re.sub(r'(?m)^\s*(</?[\w -]+>)\s*$', lambda m: '\n\n`' + m[1] + '`\n\n', blocks[i])
    return md.render(''.join(blocks))


def fold(title, content, open_=False):
    return f'<details{" open" if open_ else ""}><summary>{escape(title)}</summary>{content}</details>'


def point(title, role, content):
    # 标题不用 h2：演示模式会把页内 h2 当页标题定位
    return f'<div class="p-ev-md"><div class="meta">{escape(role)}</div><p class="p-ev-title">{title}</p>{content}</div>'


def greeting_reading():
    record = json.loads((RUN / 'interactive.json').read_text())[0]
    body = record['request']['body']
    msgs = body['input']
    assert len(msgs) == 6 and msgs[-1]['content'][0]['text'] == '你好，用一句话介绍你能帮我做什么。', '问候请求的结构变了：先核对 evidence.json 的 p08a 观察点'
    texts = lambda m: '\n\n'.join(x['text'] for x in m['content'])

    identity = (render(texts(msgs[0]))
                + f'<p class="notice">首句 based on MiniMax 来自模型能力目录，对照 <a href="{MINIMAX_DOC}" target="_blank" rel="noopener">MiniMax 官方 Codex 接入说明 ↗</a>（打开后点“方式二：手动配置”）</p>')
    mode = msgs[1]['content'][2]['text']
    # 节选只取开头两段并去掉外壳标签；完整原文在折叠里
    collab = (render('\n\n'.join(mode.removeprefix('<collaboration_mode>').replace('# ', '### ', 1).split('\n\n')[:2]))
              + fold('展开协作模式完整说明', render(mode))
              + '<h3>团队说明</h3>' + render(texts(msgs[2]).split('\n\n')[0]) + fold('展开团队说明全文', render(texts(msgs[2])))
              + '<h3>多代理限制</h3>' + render(texts(msgs[3])))

    exec_tool = next(x for x in body['tools'] if x.get('name') == 'exec')
    parts = re.split(r'(?m)(?=^### `)', exec_tool['description'])
    intro = parts[0]
    command = next(x for x in parts if x.startswith('### `exec_command`'))
    tools = ('<h3>exec</h3>' + render(intro.splitlines()[0]) + fold('展开 exec 的执行说明', render('\n'.join(intro.splitlines()[1:])))
             + render(command) + fold('展开 exec 的其余完整说明', render('\n'.join(x for x in parts[1:] if x != command))))
    for t in body['tools']:
        if t is not exec_tool:
            tools += fold('展开 ' + t.get('name', t['type']) + ' 的完整定义', '<pre><code>' + escape(json.dumps(t, ensure_ascii=False, indent=2)) + '</code></pre>')

    skilltext = msgs[1]['content'][0]['text']
    start = skilltext.index('### Available skills')
    skills = fold('展开列表说明与目录', render(skilltext[:start])) + '<h3>Available skills</h3>'
    for line in skilltext[start:].splitlines()[1:]:
        if line.startswith('- '):
            name = line[2:].split(':', 1)[0]
            skills += fold(name, render(line[2:]), open_=name == 'skill-creator')
    f = json.loads((RUN / 'skill-file-excerpt.json').read_text())
    skills += fold('对照：对应 SKILL.md 里还有什么？', '<p class="notice">' + escape(f['note']) + '</p>' + render(f['excerpt']))

    env = msgs[4]['content'][0]['text']
    preamble, sep, rest = env.partition('<filesystem>')
    environment = '<pre><code>' + escape(preamble) + '</code></pre>' + fold('展开文件访问范围', '<pre><code>' + escape(sep + rest) + '</code></pre>')

    perm = msgs[1]['content'][1]['text']
    first, sep, rest = perm.partition('\n# Escalation Requests')
    roots = re.search(r'The writable roots are .*?\.', perm)
    permissions = render(first) + (('<div class="evidence">' + render(roots[0]) + '</div>') if roots else '') + fold('展开审批与命令规则完整说明', render(sep + rest))

    r = record['response']['body']
    u = r['usage']
    answer = ''.join(c.get('text', '') for o in r['output'] if o['type'] == 'message' for c in o.get('content', []))
    calls = [o for o in r['output'] if o['type'].endswith('_call')]
    response = (('<p>这一次的返回直接是文字回答，没有调用工具：</p>' if not calls else '<p>这一次的返回里有工具调用：</p>')
                + '<blockquote>' + render(answer) + '</blockquote><p>本次用量：输入 ' + format(u['input_tokens'], ',') + ' token，输出 ' + format(u['output_tokens'], ',') + ' token。</p>')

    return {
        'identity': point('编程 Agent 与用户共用工作区', '请求消息 · developer', identity),
        'skills': point('技能列表提供名字、简述和位置', '请求消息 · developer', skills),
        'permissions': point('请求里的权限说明', '请求消息 · developer', permissions),
        'collab': point('协作模式、团队与多代理说明', '请求消息 · developer', collab),
        'environment': point('本次工作的现场信息', '请求消息 · user；内容由 Codex 加入', environment),
        'tools': point('工具的名字与调用方式', '请求 tools · 工具定义', tools),
        'response': point('这一次的返回：直接回答', '响应 output · 模型输出', response),
    }
