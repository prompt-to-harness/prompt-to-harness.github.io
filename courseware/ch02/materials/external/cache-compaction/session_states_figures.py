"""2.2 p28 会话选择对照图元：四种做法之后，下一次请求里还剩什么；课程自绘，来源与状态见 ../README.md。"""

INK, MUTED, CTX, AGENT, TOOL, RISK = '#243042', '#5B6573', '#6E6043', '#5A51D1', '#0B6B5F', '#D9481C'
PAPER, SOFT_CTX, SOFT_RISK, SOFT_TOOL, SOFT_AGENT, GONE = '#FFFDF7', '#F1ECDF', '#FDE7DF', '#DDF1EC', '#E4E1FA', '#ECEAE4'


def session_states():
    """据 2026-10-24 记录 14（继续）、6（/clear）、28（压缩后）示意；新建交接按 /clear 加人写的交接画。方块多少只示意有无，不代表 token 数。"""
    w, gap, x0, top, unit = 250, 24, 8, 56, 34
    col = lambda n: x0 + n * (w + gap)

    def block(n, y, hh, label, stroke, fill, reveal, dash=False):
        return ('box', col(n), y, w, hh, {'stroke': stroke, 'fill': fill, 'width': 2, 'label': label, 'label_size': 19,
                                          'label_weight': 600, 'dash': dash, 'reveal': reveal})

    def column(n, title, blocks, when, reveal):
        out = [('text', col(n) + w / 2, top - 30, title, {'size': 23, 'weight': 700, 'anchor': 'middle', 'reveal': reveal})]
        y = top
        for units, label, stroke, fill, *dash in blocks:
            out.append(block(n, y, unit * units, label, stroke, fill, reveal, bool(dash)))
            y += unit * units
        out.append(('text', col(n) + w / 2, top + unit * 7 + 28, when, {'size': 18, 'color': MUTED, 'anchor': 'middle', 'reveal': reveal}))
        return out

    base = [(1, '指令与工具', CTX, SOFT_CTX), (1, '项目规则', CTX, SOFT_CTX)]
    items = []
    items += column(0, '继续', base + [(1, '我们说过的话', RISK, SOFT_RISK), (2, '读取、调用与返回', TOOL, SOFT_TOOL),
                                      (1, '它的回答', AGENT, SOFT_AGENT), (1, '新的一句', RISK, PAPER)],
                    '同一件事，历史有用', 0)
    items += column(1, '/clear', base + [(1, '之前的对话：没有', MUTED, GONE, True), (1, '新的 Prompt', RISK, PAPER)],
                    '重新说明任务和文件', 0)
    items += column(2, '压缩后继续', base + [(1, '我们发过的话', RISK, SOFT_RISK), (1, '交接摘要', AGENT, SOFT_AGENT),
                                          (1, '新的追问', RISK, PAPER)],
                    '进度靠摘要，原文再读', 1)
    items += column(3, '新建并交接', base + [(1, '之前的对话：没有', MUTED, GONE, True), (1, '人写的交接', RISK, SOFT_RISK),
                                          (1, '新的 Prompt', RISK, PAPER)],
                    '人说明结论、约束和文件', 1)
    fy = top + unit * 7 + 46
    items += [('box', x0, fy, col(3) + w - x0, 48, {'stroke': TOOL, 'fill': PAPER, 'dash': True, 'width': 2,
                                                   'label': '项目文件（profile.md、页面代码）在请求之外：四种做法都不改它，要原文就重新读取',
                                                   'label_size': 19, 'label_weight': 600, 'reveal': 1})]
    return {'size': (col(3) + w + 8, fy + 54), 'items': items}


FIGURES = {
    'session-states': session_states(),
}
