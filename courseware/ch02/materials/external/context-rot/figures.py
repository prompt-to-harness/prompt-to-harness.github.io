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


def smart_zone():
    """据 Matt Pocock《AI Coding Dictionary》smart zone 词条与 Dex Horthy “No Vibes Allowed” 演讲的说法示意；
    分界不画具体数字：两个来源给的位置不同（125K–150K 有争议 / Claude Code 约 40%），都说因模型和任务而异。"""
    # 不画图内标题：页面标题已经说了这句（2026-10-25 样稿）
    L, W, Y, H = 40, 760, 90, 70
    cut = L + W * 0.42
    items = [('box', L, Y, cut - L, H, {'stroke': TOOL, 'fill': '#E3F1EC', 'label': 'smart zone', 'label_size': 24}),
             ('box', cut, Y, L + W - cut, H, {'stroke': RISK, 'fill': SOFT_RISK, 'label': 'dumb zone', 'label_size': 24}),
             ('text', L + 8, Y + H + 34, '清醒、专注、记得住', {'size': 18, 'color': TOOL}),
             ('text', cut + 8, Y + H + 34, '更粗心、更健忘、错更多', {'size': 18, 'color': RISK}),
             ('line', cut, Y - 46, cut, Y + H + 8, {'color': MUTED, 'width': 2}),
             ('text', cut, Y - 54, '从哪里开始：因模型和任务而异', {'size': 17, 'color': MUTED, 'anchor': 'middle'}),
             ('line', L + W, Y - 20, L + W, Y + H + 60, {'color': INK, 'width': 3}),
             ('text', L + W, Y + H + 84, '窗口上限', {'size': 18, 'anchor': 'end'}),
             ('text', L + W, Y + H + 108, '质量早在这之前就下降了', {'size': 16, 'color': MUTED, 'anchor': 'end'}),
             ('arrow', L, Y + H + 140, L + 420, Y + H + 140, {'color': MUTED}),
             ('text', L + 430, Y + H + 146, '同一个会话里，context 越积越多', {'size': 18, 'color': MUTED})]
    return {'size': (840, Y + H + 170), 'items': items}


FIGURES = {'chroma-context-rot': chroma_context_rot(), 'smart-zone': smart_zone()}
