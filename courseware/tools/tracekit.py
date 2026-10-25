#!/usr/bin/env python3
"""课件里嵌入真实请求记录的公共构建库（提案见 docs/production/trace-evidence-proposal.md）。

每节一份 evidence.json：写明公开记录、指纹、各页的观察点和阅读节选。本库负责：
- 核对记录指纹与每个观察点（找不到原文、不唯一就停下，不默默沿用）；
- 生成 claude-tap 0.1.146+pr475 静态查看器（不调用模型），注入 shared/parts/trace-bridge.js；
- 生成页面里的 .p-evidence 零件 HTML（阅读视图从同一份记录取原文，节选逐行断言在原文里）。

生成查看器：uv run courseware/tools/tracekit.py <evidence.json>（make viewers 已包含）
重跑后选观察点：uv run courseware/tools/tracekit.py <evidence.json> --list-candidates
单独打开的记录（不嵌入课件）也用 render_viewer 渲染，保证同一套默认设置。
页面构建脚本：from tracekit import Evidence; Evidence(path).stage("p22")
"""
import hashlib
import json
import re
import sys
from html import escape
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
BRIDGE = REPO / 'courseware/shared/parts/trace-bridge.js'
VIEWER_QUERY = 'embed=1&hidePath=1&hideHistory=1&theme=light'
CLAUDE_TAP = '0.1.146+pr475'

# 嵌入课件的 claude-tap 查看器加载时会对选中的记录调用 scrollIntoView，连带滚动外层课件页（阅读模式打开某页会跳走）。
# 嵌入时改成只滚动查看器里最近的可滚动容器；单独打开时不变。生成 viewer.html 时插到 <head> 后。
VIEWER_KEEP_PARENT = """<script>
if (window !== parent) Element.prototype.scrollIntoView = function (opts) {
  let p = this.parentElement;
  while (p && !(p.scrollHeight > p.clientHeight && /(auto|scroll)/.test(getComputedStyle(p).overflowY))) p = p.parentElement;
  if (!p) return;
  const r = this.getBoundingClientRect(), b = p.getBoundingClientRect();
  if (opts && opts.block === 'center') p.scrollTop += r.top - b.top - (b.height - r.height) / 2;
  else if (r.top < b.top) p.scrollTop += r.top - b.top;
  else if (r.bottom > b.bottom) p.scrollTop += r.bottom - b.bottom;
};
</script>"""


def keep_scroll_inside(html):
    assert "<head>" in html and VIEWER_KEEP_PARENT not in html
    return html.replace("<head>", "<head>" + VIEWER_KEEP_PARENT, 1)


def text(value):
    """记录项里人能读的文字：消息的 text、工具返回的 output、调用的 input/arguments。"""
    if isinstance(value, str):
        return value
    if isinstance(value, list):
        return '\n'.join(text(v) for v in value)
    for key in ('text', 'content', 'output', 'input', 'arguments'):
        if key in value:
            return text(value[key])
    return ''


def lines_with(raw, needles):
    """按 needle 的顺序取包含它的行；每个 needle 都必须找到。"""
    out = []
    for needle in needles:
        found = [line for line in raw.splitlines() if needle in line]
        assert found, f'节选找不到：{needle}'
        out += found
    return '\n'.join(out)


class Evidence:
    def __init__(self, path):
        self.path = Path(path).resolve()
        self.dir = self.path.parent
        self.spec = json.loads(self.path.read_text())
        raw = (REPO / self.spec['source']).read_bytes()
        digest = hashlib.sha256(raw).hexdigest()
        if self.spec['trace_sha256'] != digest:
            raise SystemExit(f'{self.path}: 记录已变化（{digest}）：先逐个核对观察点，再更新 trace_sha256')
        self.raw = raw
        self.ordered = json.loads(raw)
        self.records = {r['request_id']: r for r in self.ordered}
        self.points = {p['key']: p for p in self.spec['points']}
        assert len(self.points) == len(self.spec['points']), '观察点 key 重复'
        for scene, keys in self.spec['stages'].items():
            for k in keys:
                assert k in self.points, f'{scene} 的观察点 {k} 不存在'
        for p in self.spec['points']:
            self._check(p)
        # 查看器地址相对本节 index.html（evidence.json 所在目录或它的上一级）
        self.lesson = next(d for d in (self.dir, self.dir.parent) if (d / 'index.html').exists())
        self.viewer = self.spec.get('viewer', 'trace/viewer.html')

    def _record(self, request):
        r = self.records.get(request)
        assert r, f'记录 {request} 不存在'
        return r

    @staticmethod
    def kind(p):
        """观察点的类型：call（模型发出的调用）、result（工具返回）、answer（模型回答）、tool（工具定义）或 text。"""
        if p.get('kind'):
            return p['kind']
        if p['section'] == 'section_tools':
            return 'tool'
        tail = p['key'].rsplit('-', 1)[-1]
        return tail if tail in ('call', 'result', 'answer') else 'text'

    def _check(self, p):
        r = self._record(p['request'])
        kind, cid, needle = self.kind(p), p.get('callId'), p.get('needle')
        if kind == 'tool':
            assert any(t.get('name') == p['tool'] for t in r['request']['body'].get('tools', [])), p['key'] + ' 的工具定义不存在：' + p['tool']
        elif kind == 'call':
            calls = [c for c in r['response']['body']['output'] if c.get('type', '').endswith('_call') and (not cid or c.get('call_id') == cid)]
            assert len(calls) == 1 or (not cid and calls), p['key'] + ' 的调用不存在或不唯一'
        elif kind == 'result':
            items = [x for x in r['request']['body']['input'] if x.get('call_id') == cid and x.get('type', '').endswith('_output')]
            assert len(items) == 1, p['key'] + ' 的工具返回不存在或不唯一'
            assert not needle or needle in text(items[0]), p['key'] + ' 的返回里找不到原文：' + needle
        else:
            part = r['request']['body']['input'] if p['section'] == 'section_messages' else r['response']['body']['output']
            dump = json.dumps(part, ensure_ascii=False)
            assert not needle or needle in dump or needle in text(part), p['key'] + ' 在记录里找不到原文：' + needle
            assert not cid or cid in dump, p['key'] + ' 在记录里找不到调用 ' + cid
        for card in p.get('reading', []):
            self._card_text(p, card)

    def candidates(self):
        """重跑后选观察点用：列出每次调用、它的返回位置和每次回答的开头，由讲师确认后再写进 evidence.json。"""
        calls = [(r, c) for r in self.ordered for c in r['response']['body'].get('output', []) if c.get('type', '').endswith('_call')]
        def first_return(cid):
            return next((r['request_id'] for r in self.ordered for x in r['request']['body']['input']
                         if x.get('call_id') == cid and x.get('type', '').endswith('_output')), None)
        return {
            'calls': [{'request': r['request_id'], 'call_id': c.get('call_id'), 'input': text(c)[:200], 'first_return': first_return(c.get('call_id'))} for r, c in calls],
            'answers': [{'request': r['request_id'], 'excerpt': text([c for c in r['response']['body'].get('output', []) if c.get('type') == 'message'])[:120]} for r in self.ordered],
        }

    def _source(self, request, src):
        """按语义取原文，不用数组下标：下标在重新导出后会悄悄错位，语义找不到会直接停下。"""
        return text(self._source_item(request, src))

    def _source_item(self, request, src):
        r = self._record(request)
        items = r['request']['body']['input']
        if 'message' in src:
            found = [x for x in items if x.get('type') == 'message' and src['message'] in text(x)]
        elif 'call' in src:
            found = [x for x in items if x.get('call_id') == src['call'] and not x.get('type', '').endswith('_output')]
        elif 'result' in src:
            found = [x for x in items if x.get('call_id') == src['result'] and x.get('type', '').endswith('_output')]
        elif 'response' in src:
            found = [[x for x in r['response']['body']['output'] if x.get('type') == src['response']]]
        elif 'answer' in src:
            found = [[x for x in r['response']['body']['output'] if x.get('type') == 'message']]
        else:
            raise AssertionError(f'{request}: 不认识的取法 {src}')
        assert len(found) == 1 and found[0], f'{request} 里 {src} 找到 {len(found)} 处，应恰好一处'
        return found[0]

    def _card_text(self, p, card):
        raw = self._source(card.get('request', p['request']), card['from'])
        shown = lines_with(raw, card['lines']) if card.get('lines') else raw
        assert shown and all(line in raw for line in shown.splitlines()), card['title']
        return raw, shown

    def _card(self, p, card):
        raw, shown = self._card_text(p, card)
        more = '' if shown == raw else f'<details><summary>展开该项完整原文</summary><pre>{escape(raw)}</pre></details>'
        pics = ''
        if card.get('image'):
            # 贴进对话的截图：取该项里的 input_image，原样显示（text() 只取文字，图会被漏掉）
            item = self._source_item(card.get('request', p['request']), card['from'])
            urls = [c['image_url'] for c in item.get('content', []) if isinstance(c, dict) and c.get('type') == 'input_image']
            assert urls, card['title'] + '：卡片要求显示图片，但该项里没有 input_image'
            pics = ''.join(f'<img class="p-ev-image" src="{escape(u)}" alt="{escape(card["title"])}">' for u in urls)
        return f'<article><h3>{escape(card["title"])}</h3>{pics}<pre>{escape(shown)}</pre>{more}</article>'

    def stage(self, scene, note=None, reading=None):
        """页面里的 .p-evidence 零件：左侧观察点与播放器步骤一一对应，右侧阅读视图 / 原始记录。

        stages[scene] 是播放器各步的观察点；同一页还可以有不在步骤里的点（例如 2.1 p07 只按步骤走 A 链，
        C、D 的回答与调用由按钮切到），写在 extra[scene]。点带 group 时左侧先出分组标签。
        reading 可传 {key: html}，用本节自己生成的阅读视图（例如 2.1 p08a 的 Markdown 折叠）代替 evidence.json 里的节选卡片。"""
        keys = self.spec['stages'][scene]
        shown = set(keys) | set(self.spec.get('extra', {}).get(scene, []))
        # 按钮按 evidence.json 里点的先后排（分组内的位置要对得上），初始停在第一步的点
        points = [p for p in self.spec['points'] if p['key'] in shown]
        start = self.points[keys[0]]
        note = note or self.spec.get('note', '本次真实记录')
        steps = escape(json.dumps(keys, ensure_ascii=False))
        src = escape(self.viewer + '?' + VIEWER_QUERY)
        groups = list(dict.fromkeys(p['group'] for p in points if p.get('group')))
        tabs = ''
        if groups:
            titles = self.spec.get('groups', {})
            first = start.get('group')
            tabs = (f'<p class="p-ev-note">{escape(self.spec.get("groups_label", ""))}</p>' if self.spec.get('groups_label') else '') + \
                '<div class="p-ev-tabs" role="group" aria-label="分组">' + ''.join(
                    f'<button type="button" data-ev-group="{escape(g)}" aria-pressed="{str(g == first).lower()}" title="{escape(titles.get(g, {}).get("title", g))}">{escape(titles.get(g, {}).get("tab", g))}</button>'
                    for g in groups) + '</div>'
        guide = tabs + ''.join(
            f'<button type="button" data-ev-key="{p["key"]}"{(" data-ev-in=" + chr(34) + escape(p["group"]) + chr(34)) if p.get("group") else ""}'
            f'{" hidden" if p.get("group") and p["group"] != start.get("group") else ""} aria-pressed="{str(p is start).lower()}"><b>{escape(p["button"])}</b><span>{escape(p["hint"])}</span></button>'
            for p in points)
        if any(p.get('observe') for p in points):
            guide += '<p class="p-ev-observe" aria-live="polite">' + ''.join(
                f'<span data-ev-observe="{p["key"]}"{"" if p is start else " hidden"}>{escape(p.get("observe", ""))}</span>' for p in points) + '</p>'
        panel = ''
        if reading or any(p.get('reading') for p in points):
            source = self.spec.get('source_label', note)
            def body(p):
                if reading and p['key'] in reading:
                    return reading[p['key']]
                return f'<p class="p-ev-source">{escape(source)} · {escape(p["button"])}</p>' + ''.join(self._card(p, c) for c in p.get('reading', []))
            panel = '<div class="p-ev-reading">' + ''.join(
                f'<section data-ev-reading="{p["key"]}" {"" if p is start else "hidden"}>{body(p)}</section>' for p in points) + '</div>'
        views = ('<div class="p-ev-views" role="group" aria-label="记录展示方式"><button type="button" data-ev-view="reader" aria-pressed="true">阅读视图</button>'
                 '<button type="button" data-ev-view="raw" aria-pressed="false">原始记录</button></div>') if panel else ''
        return (f'<div class="p-evidence" data-ev-steps="{steps}" data-ev-viewer="{src}" data-ev-view="{"reader" if panel else "raw"}">'
                f'<nav class="p-ev-guide" aria-label="本次记录的观察顺序">{guide}</nav>'
                f'<div class="p-ev-panel"><div class="p-ev-bar"><span data-ev-status>{escape(note)}</span><div class="p-ev-actions">{views}'
                f'<a data-ev-open href="{src}&amp;point={keys[0]}" target="_blank" rel="noopener">单独打开 ↗</a>'
                f'<button type="button" data-ev-expand aria-haspopup="dialog">放大记录</button></div></div>'
                f'{panel}<iframe {"hidden " if panel else ""}title="claude-tap 静态记录" data-src="{src}&amp;hideHeader=1"></iframe></div></div>')

    def build_viewer(self):
        """生成自包含的静态查看器（claude-tap 固定版本渲染，不调用模型，生成物不提交）。"""
        out = self.lesson / self.viewer
        fields = ('request', 'section', 'needle', 'callId', 'tool')
        points = {k: dict({f: p[f] for f in fields if f in p}, kind=self.kind(p)) for k, p in self.points.items()}
        bridge = BRIDGE.read_text().replace('__COURSE_GUIDE_POINTS__', json.dumps(points, ensure_ascii=False))
        size = render_viewer([json.dumps(r, ensure_ascii=False) for r in self.ordered], out, 'trace.json', script=bridge, embedded=True)
        print(f'{out.relative_to(REPO)}: {size} bytes, {len(points)} points')


def render_viewer(lines, out, display_trace_path, script='', embedded=False):
    """用固定版本的 claude-tap 渲染一份静态查看器：默认中文；embedded 时插入 keep_scroll_inside；
    script 追加在 </body> 前；供应商脚本里的中文写成等价转义（字体缺字检查不扫这些字）。课件嵌入与单独打开的记录都用它。"""
    from importlib.metadata import distribution, version
    from claude_tap.viewer import _generate_html_viewer_from_records
    assert version('claude-tap') == CLAUDE_TAP, '查看器固定用 claude-tap ' + CLAUDE_TAP
    out = Path(out)
    _generate_html_viewer_from_records(lines, out, display_trace_path=display_trace_path, display_html_path=out.name)
    s = out.read_text()
    old = "let currentLang = safeLocalStorageGet('claude-tap-lang') || detectLang();"
    assert old in s, 'claude-tap 查看器结构变了：先核对 trace-bridge.js 依赖的全局变量'
    s = s.replace(old, "let currentLang = 'zh-CN'; // 课程默认中文，不改浏览器持久设置")
    if embedded:
        s = keep_scroll_inside(s)
    if script:
        s = s.replace('</body>', '<script>\n' + script + '\n</script>\n</body>')
    s = re.sub(r"(<script\b[^>]*>)([\s\S]*?)(</script>)", lambda m: m[1] + re.sub(r"[一-鿿]", lambda c: "\\u%04x" % ord(c[0]), m[2]) + m[3], s)
    s = re.sub(r"[一-鿿]", lambda m: "&#x%x;" % ord(m[0]), s)
    out.write_text(s)
    d = distribution('claude-tap')
    lic = next(x for x in d.files if str(x).endswith('licenses/LICENSE'))
    (out.parent / 'LICENSE-claude-tap.txt').write_text(d.locate_file(lic).read_text())
    return len(s.encode())


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    assert args, __doc__
    for arg in args:
        if '--list-candidates' in sys.argv:
            print(json.dumps(Evidence(arg).candidates(), ensure_ascii=False, indent=2))
        else:
            Evidence(arg).build_viewer()
