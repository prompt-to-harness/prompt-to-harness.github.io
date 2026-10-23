"""Context Rot 曲线图元；来源与状态见 ../README.md，数据点为读图近似。"""
import math

INK, MUTED, CTX, AGENT, TOOL, RISK = '#243042', '#5B6573', '#6E6043', '#5A51D1', '#0B6B5F', '#D9481C'
PAPER, SOFT_CTX, SOFT_RISK = '#FFFDF7', '#F1ECDF', '#FDE7DF'


def chroma_context_rot():
    """Chroma《Context Rot》重复词任务；数据点为读图近似，页面上要注明。"""
    xs = [40, 95, 230, 560, 1350, 3300, 8000, 19000]
    series = [('Claude Sonnet 4', '#C2410C', [1.0, 1.0, 1.0, .955, .94, .597, .50, .50]),
              ('Qwen3-32B', AGENT, [.995, .978, .92, .742, .658, .555, .50, None]),
              ('GPT-4.1', TOOL, [.927, .673, .718, .588, .543, .50, .50, .50]),
              ('Gemini 2.5 Flash', '#2563EB', [.948, .678, .687, .542, .519, .508, .457, .501])]
    L, T, W, H = 70, 40, 560, 340
    sx = lambda v: L + (math.log10(v) - math.log10(30)) / (math.log10(25000) - math.log10(30)) * W
    sy = lambda v: T + (1.02 - v) / (1.02 - .42) * H
    items = [('text', 0, 22, '同一个简单任务，输入越长越做不好', {'size': 25, 'font': 'title'})]
    for v in (.5, .6, .7, .8, .9, 1.0):
        items += [('line', L, sy(v), L + W, sy(v), {}),
                  ('text', L - 10, sy(v) + 6, f'{v:.1f}', {'size': 16, 'color': MUTED, 'anchor': 'end'})]
    for v, lab in ((100, '100'), (1000, '1 千'), (10000, '1 万')):
        items += [('line', sx(v), T, sx(v), T + H, {}),
                  ('text', sx(v), T + H + 24, lab, {'size': 16, 'color': MUTED, 'anchor': 'middle'})]
    items += [('line', L, T + H, L + W, T + H, {'color': INK, 'width': 1.5}),
              ('text', L + W / 2, T + H + 52, '输入长度（token，对数刻度）', {'size': 18, 'anchor': 'middle'}),
              ('text', 18, T + H / 2, '得分（1 = 完全对）', {'size': 18, 'anchor': 'middle', 'rotate': -90})]
    for i, (name, color, ys) in enumerate(series):
        items.append(('poly', [(sx(x), sy(y)) for x, y in zip(xs, ys) if y is not None], {'color': color}))
        ly = T + 30 + i * 34
        items += [('line', L + W + 26, ly, L + W + 56, ly, {'color': color, 'width': 4}),
                  ('text', L + W + 66, ly + 6, name, {'size': 18})]
    items.append(('text', L + W + 26, T + 200, '0.5 附近 ≈ 基本做不对', {'size': 16, 'color': MUTED}))
    return {'size': (840, T + H + 64), 'items': items}


FIGURES = {'chroma-context-rot': chroma_context_rot()}
