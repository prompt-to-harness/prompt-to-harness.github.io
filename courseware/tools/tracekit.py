#!/usr/bin/env python3
"""课件里嵌入真实请求记录的公共构建库（提案见 docs/production/trace-evidence-proposal.md）。

每节一份 evidence.json：写明公开记录、指纹、各页的观察点和阅读节选。本库负责：
- 核对记录指纹与每个观察点（找不到原文、不唯一就停下，不默默沿用）；
- 生成 claude-tap 0.1.146 静态查看器（不调用模型），注入 shared/parts/trace-bridge.js；
- 生成页面里的 .p-evidence 零件 HTML（阅读视图从同一份记录取原文，节选逐行断言在原文里）。

生成查看器：uv run courseware/tools/tracekit.py <evidence.json>（make viewers 已包含）
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
CLAUDE_TAP = '0.1.146'

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

    def _check(self, p):
        r = self._record(p['request'])
        part = r['request']['body']['input'] if p['section'] == 'section_messages' else r['response']['body']['output']
        dump = json.dumps(part, ensure_ascii=False)
        if p.get('needle'):
            assert p['needle'] in dump, p['key'] + ' 在记录里找不到原文：' + p['needle']
        if p.get('callId'):
            assert p['callId'] in dump, p['key'] + ' 在记录里找不到调用 ' + p['callId']
        for card in p.get('reading', []):
            self._card_text(p, card)

    def _source(self, request, src):
        """按语义取原文，不用数组下标：下标在重新导出后会悄悄错位，语义找不到会直接停下。"""
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
        return text(found[0])

    def _card_text(self, p, card):
        raw = self._source(card.get('request', p['request']), card['from'])
        shown = lines_with(raw, card['lines']) if card.get('lines') else raw
        assert shown and all(line in raw for line in shown.splitlines()), card['title']
        return raw, shown

    def _card(self, p, card):
        raw, shown = self._card_text(p, card)
        more = '' if shown == raw else f'<details><summary>展开该项完整原文</summary><pre>{escape(raw)}</pre></details>'
        return f'<article><h3>{escape(card["title"])}</h3><pre>{escape(shown)}</pre>{more}</article>'

    def stage(self, scene, note=None):
        """页面里的 .p-evidence 零件：左侧观察点与播放器步骤一一对应，右侧阅读视图 / 完整原文。"""
        keys = self.spec['stages'][scene]
        points = [self.points[k] for k in keys]
        note = note or self.spec.get('note', '本次真实记录')
        steps = escape(json.dumps(keys, ensure_ascii=False))
        src = escape(self.viewer + '?' + VIEWER_QUERY)
        guide = ''.join(
            f'<button type="button" data-ev-key="{p["key"]}" aria-pressed="{str(i == 0).lower()}"><b>{escape(p["button"])}</b><span>{escape(p["hint"])}</span></button>'
            for i, p in enumerate(points))
        reading = ''
        if any(p.get('reading') for p in points):
            source = self.spec.get('source_label', note)
            reading = '<div class="p-ev-reading">' + ''.join(
                f'<section data-ev-reading="{p["key"]}" {"hidden" if i else ""}><p class="p-ev-source">{escape(source)} · {escape(p["button"])}</p>'
                + ''.join(self._card(p, c) for c in p.get('reading', [])) + '</section>'
                for i, p in enumerate(points)) + '</div>'
        views = ('<div class="p-ev-views" role="group" aria-label="记录展示方式"><button type="button" data-ev-view="reader" aria-pressed="true">阅读视图</button>'
                 '<button type="button" data-ev-view="raw" aria-pressed="false">原始记录</button></div>') if reading else ''
        return (f'<div class="p-evidence" data-ev-steps="{steps}" data-ev-viewer="{src}" data-ev-view="{"reader" if reading else "raw"}">'
                f'<nav class="p-ev-guide" aria-label="本次记录的观察顺序">{guide}</nav>'
                f'<div class="p-ev-panel"><div class="p-ev-bar"><span data-ev-status>{escape(note)}</span><div class="p-ev-actions">{views}'
                f'<a data-ev-open href="{src}&amp;point={keys[0]}" target="_blank" rel="noopener">单独打开 ↗</a>'
                f'<button type="button" data-ev-expand aria-haspopup="dialog">放大记录</button></div></div>'
                f'{reading}<iframe {"hidden " if reading else ""}title="claude-tap 静态记录" data-src="{src}&amp;hideHeader=1"></iframe></div></div>')

    def build_viewer(self):
        """生成自包含的静态查看器（claude-tap 固定版本渲染，不调用模型，生成物不提交）。"""
        from importlib.metadata import distribution, version
        from claude_tap.viewer import _generate_html_viewer_from_records
        assert version('claude-tap') == CLAUDE_TAP, '查看器固定用 claude-tap ' + CLAUDE_TAP
        out = self.lesson / self.viewer
        points = {k: {f: p[f] for f in ('request', 'section', 'needle', 'callId') if f in p} for k, p in self.points.items()}
        _generate_html_viewer_from_records([json.dumps(r, ensure_ascii=False) for r in self.ordered], out,
                                           display_trace_path='trace.json', display_html_path=out.name)
        s = out.read_text()
        old = "let currentLang = safeLocalStorageGet('claude-tap-lang') || detectLang();"
        assert old in s, 'claude-tap 查看器结构变了：先核对 trace-bridge.js 依赖的全局变量'
        s = s.replace(old, "let currentLang = 'zh-CN'; // 课程默认中文，不改浏览器持久设置")
        s = keep_scroll_inside(s)
        bridge = BRIDGE.read_text().replace('__COURSE_GUIDE_POINTS__', json.dumps(points, ensure_ascii=False))
        s = s.replace('</body>', '<script>\n' + bridge + '\n</script>\n</body>')
        # 生成的供应商脚本里把中文写成等价转义，页面文字不变（字体缺字检查不扫这些字）
        s = re.sub(r"(<script\b[^>]*>)([\s\S]*?)(</script>)", lambda m: m[1] + re.sub(r"[一-鿿]", lambda c: "\\u%04x" % ord(c[0]), m[2]) + m[3], s)
        s = re.sub(r"[一-鿿]", lambda m: "&#x%x;" % ord(m[0]), s)
        out.write_text(s)
        d = distribution('claude-tap')
        lic = next(x for x in d.files if str(x).endswith('licenses/LICENSE'))
        (out.parent / 'LICENSE-claude-tap.txt').write_text(d.locate_file(lic).read_text())
        print(f'{out.relative_to(REPO)}: {len(s.encode())} bytes, {len(points)} points')


if __name__ == '__main__':
    assert len(sys.argv) >= 2, __doc__
    for arg in sys.argv[1:]:
        Evidence(arg).build_viewer()
