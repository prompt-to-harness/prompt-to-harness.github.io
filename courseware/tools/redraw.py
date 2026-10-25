#!/usr/bin/env python3
"""把外部图重画成两版 SVG：课程手绘风格和 Excalidraw 风格，供讲师挑选。

图写成一份图元清单（框、文字、箭头、曲线、折线），放在各章的
materials/external/context-engineering/figures.py 里，变量 FIGURES = {名字: {'size': (宽, 高), 'items': [...]}}。
同一份图元出两版：
- course：框和箭头用课件的手绘抖动滤镜 #p-rough（由课件页的 parts.js 提供），折线、网格保持工整；
- excalidraw：用 rough.js 4.6.6 画成草图风格，生成后存成静态 SVG，课件里不需要再加载脚本。
文字在两版里都是 SVG 文本，字体用课件字体（手写标题体是子集，新字要重建子集，见 docs/production/fonts.md）。

    uv run courseware/tools/redraw.py courseware/ch02/materials/external/context-engineering/figures.py
    uv run courseware/tools/redraw.py SPEC.py --only openai-codex-request

输出到 SPEC 所在目录：redraw-<名字>-course.svg、redraw-<名字>-excalidraw.svg。
Excalidraw 版需要联网从 cdn.jsdelivr.net 取 rough.js。规则见 docs/production/external-sources.md。

图元选项可加 reveal=N，生成 data-reveal 分步组；未指定时始终显示。

图元（坐标是 SVG 内的像素）：
    ('text', x, y, 文字, {'size': 20, 'color': INK, 'font': 'sans'|'title'|'mono', 'anchor': 'start', 'weight': 400, 'rotate': 0})
    ('box', x, y, w, h, {'stroke': INK, 'fill': '#FFFDF7', 'dash': False, 'width': 2.5, 'label': None, 'label_size': 20, 'label_weight': 700})
    ('arrow', x1, y1, x2, y2, {'color': MUTED})
    ('curve', 'SVG path d', {'color': MUTED})          两版都在末端画箭头
    ('poly', [(x, y), ...], {'color': INK, 'width': 3.5})   数据折线：两版都基本工整
    ('line', x1, y1, x2, y2, {'color': '#E2DED3', 'width': 1})  网格、坐标轴：两版都工整
"""
import argparse
import html
import importlib.util
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

FONTS = {'sans': "'Course Sans',sans-serif", 'title': "'Course Title','Course Sans',sans-serif", 'mono': "'Course Mono',monospace"}
ROUGH = 'https://cdn.jsdelivr.net/npm/roughjs@4.6.6/bundled/rough.js'


def text_svg(x, y, s, o, hand=False):
    o = {'size': 20, 'color': '#243042', 'font': 'sans', 'anchor': 'start', 'weight': 400, 'rotate': 0, **o}
    font = FONTS['title'] if hand and o['font'] == 'sans' else FONTS[o['font']]
    rot = f' transform="rotate({o["rotate"]} {x} {y})"' if o['rotate'] else ''
    # 字体写进 style：课件的 .lesson-diagram text 规则会盖掉 font-family 属性
    return (f'<text x="{x}" y="{y}" style="font-family:{font}" font-size="{o["size"]}" font-weight="{o["weight"]}" '
            f'fill="{o["color"]}" text-anchor="{o["anchor"]}"{rot}>{html.escape(s)}</text>')


def box_label(x, y, w, h, o, hand=False):
    if not o.get('label'):
        return ''
    return text_svg(x + w / 2, y + h / 2 + o.get('label_size', 20) * .36, o['label'],
                    {'size': o.get('label_size', 20), 'anchor': 'middle', 'weight': o.get('label_weight', 700)}, hand)


def course(fig, name):
    """课程风格：框、箭头、曲线抖动，数据线与网格工整。

    箭头 marker 的 id 带图名：同一课件页里有几张课程版图时，固定 id 会让 url(#…) 指到第一张（常在隐藏的页里），箭头就不显示。
    """
    w, h = fig['size']
    marker = f'rd-arrow-{name}'
    out = [f'<defs><marker id="{marker}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">'
           '<path d="M0 0L10 5L0 10z" fill="#5B6573"/></marker></defs>']
    for kind, *a in fig['items']:
        reveal = a[-1].get('reveal')
        if reveal is not None:
            out.append(f'<g data-reveal="{reveal}">')
        if kind == 'text':
            out.append(text_svg(*a))
        elif kind == 'box':
            x, y, bw, bh, o = a
            dash = ' stroke-dasharray="8 6"' if o.get('dash') else ''
            out.append(f'<rect x="{x}" y="{y}" width="{bw}" height="{bh}" rx="10" fill="{o.get("fill", "none")}" '
                       f'stroke="{o.get("stroke", "#243042")}" stroke-width="{o.get("width", 2.5)}"{dash} filter="url(#p-rough)"/>')
            out.append(box_label(x, y, bw, bh, o))
        elif kind == 'arrow':
            x1, y1, x2, y2, o = a
            out.append(f'<path d="M{x1} {y1}L{x2} {y2}" stroke="{o.get("color", "#5B6573")}" stroke-width="2.5" fill="none" marker-end="url(#{marker})"/>')
        elif kind == 'curve':
            d, o = a
            out.append(f'<path d="{d}" stroke="{o.get("color", "#5B6573")}" stroke-width="2.5" fill="none" marker-end="url(#{marker})" filter="url(#p-rough)"/>')
        elif kind == 'poly':
            pts, o = a
            out.append(f'<polyline points="{" ".join(f"{x:.1f},{y:.1f}" for x, y in pts)}" fill="none" '
                       f'stroke="{o.get("color", "#243042")}" stroke-width="{o.get("width", 3.5)}" stroke-linejoin="round"/>')
        elif kind == 'line':
            x1, y1, x2, y2, o = a
            out.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{o.get("color", "#E2DED3")}" stroke-width="{o.get("width", 1)}"/>')
        if reveal is not None:
            out.append('</g>')
    return f'<svg xmlns="http://www.w3.org/2000/svg" class="lesson-diagram" viewBox="0 0 {w} {h}" width="{w}" height="{h}">{"".join(out)}</svg>'


EXCALIDRAW_JS = """
([fig, texts]) => {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('xmlns', NS); svg.setAttribute('class', 'lesson-diagram');
  svg.setAttribute('viewBox', `0 0 ${fig.size[0]} ${fig.size[1]}`); svg.setAttribute('width', fig.size[0]); svg.setAttribute('height', fig.size[1]);
  document.body.append(svg);
  let seed = 1;
  const opt = o => ({seed: seed++, roughness: 1.3, bowing: 1, ...o});
  const head = (rc, layer, x1, y1, x2, y2, c) => {
    const ang = Math.atan2(y2 - y1, x2 - x1), k = 12;
    layer.append(rc.linearPath([[x2 - k * Math.cos(ang - .45), y2 - k * Math.sin(ang - .45)], [x2, y2], [x2 - k * Math.cos(ang + .45), y2 - k * Math.sin(ang + .45)]], opt({stroke: c, strokeWidth: 2})));
  };
  fig.items.forEach(([kind, ...a], i) => {
    const reveal = a[a.length - 1].reveal;
    const layer = reveal === undefined ? svg : document.createElementNS(NS, 'g');
    if (reveal !== undefined) { layer.setAttribute('data-reveal', reveal); svg.append(layer); }
    const rc = rough.svg(layer);
    if (kind === 'box') {
      const [x, y, w, h, o] = a;
      const fill = o.fill && o.fill !== 'none' ? {fill: o.fill, fillStyle: 'hachure', hachureGap: 7, fillWeight: 1.2} : {};
      layer.append(rc.rectangle(x, y, w, h, opt({stroke: o.stroke || '#243042', strokeWidth: o.width || 2, strokeLineDash: o.dash ? [8, 6] : undefined, ...fill})));
    } else if (kind === 'arrow') {
      const [x1, y1, x2, y2, o] = a; const c = o.color || '#5B6573';
      layer.append(rc.line(x1, y1, x2, y2, opt({stroke: c, strokeWidth: 2})));
      head(rc, layer, x1, y1, x2, y2, c);
    } else if (kind === 'curve') {
      // 曲线和课程版一样带箭头：沿路径末端的切线方向画箭头
      const [d, o] = a; const c = o.color || '#5B6573';
      layer.append(rc.path(d, opt({stroke: c, strokeWidth: 2})));
      const p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); svg.append(p);
      const n = p.getTotalLength(), e = p.getPointAtLength(n), b = p.getPointAtLength(Math.max(0, n - 4)); p.remove();
      head(rc, layer, b.x, b.y, e.x, e.y, c);
    } else if (kind === 'poly') {
      const [pts, o] = a; layer.append(rc.linearPath(pts, opt({stroke: o.color || '#243042', strokeWidth: (o.width || 3.5) * .8, roughness: .6})));
    } else if (kind === 'line') {
      const [x1, y1, x2, y2, o] = a; layer.append(rc.line(x1, y1, x2, y2, opt({stroke: o.color || '#E2DED3', strokeWidth: o.width || 1, roughness: .4})));
    }
    if (texts[i]) layer.insertAdjacentHTML('beforeend', texts[i]);
  });
  return svg.outerHTML;
}
"""


def excalidraw(page, fig):
    """Excalidraw 风格：形状交给 rough.js，文字由 Python 生成，一律用手写标题体（代码字段仍用等宽）。"""
    texts = []
    for kind, *a in fig['items']:
        if kind == 'text':
            texts.append(text_svg(*a, hand=True))
        elif kind == 'box':
            texts.append(box_label(*a, hand=True))
        else:
            texts.append('')
    return page.evaluate(EXCALIDRAW_JS, [fig, texts])


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('spec', type=Path)
    ap.add_argument('--only', action='append', default=[], help='只生成这几张，可重复')
    args = ap.parse_args()
    spec = importlib.util.spec_from_file_location('figures', args.spec)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    figures = {k: v for k, v in mod.FIGURES.items() if not args.only or k in args.only}
    if not figures:
        sys.exit('没有要生成的图')
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_content('<!doctype html><body></body>')
        page.add_script_tag(url=ROUGH)
        for name, fig in figures.items():
            fig = json.loads(json.dumps(fig))  # 元组转列表，便于传给页面
            for style, svg in (('course', course(fig, name)), ('excalidraw', excalidraw(page, fig))):
                out = args.spec.parent / f'redraw-{name}-{style}.svg'
                out.write_text(svg + '\n')
                print(out)
        browser.close()


if __name__ == '__main__':
    main()
