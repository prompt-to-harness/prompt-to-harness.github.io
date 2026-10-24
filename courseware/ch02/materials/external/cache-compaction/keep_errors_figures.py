"""2.2 p24 图元：据 Manus《AI代理的上下文工程》“保留错误的内容”配图重画，中文标签；来源与状态见 ../README.md。"""

INK, MUTED, RISK, OK = '#243042', '#5B6573', '#D9481C', '#0B6B5F'
PAPER, GREY, SOFT_RISK, SOFT_OK, PANEL = '#FFFDF7', '#ECEAE4', '#FDE7DF', '#DDF1EC', '#F4F2EC'


def keep_errors():
    """只画原图右半（失败的返回留在 context 里，下一次尝试成功）；左半“清掉失败再试”不画，p24 版面放不下。"""
    w, unit = 168, 36

    def strip(x, y, label, stroke=MUTED, fill=GREY, reveal=0):
        return ('box', x, y, w, unit - 6, {'stroke': stroke, 'fill': fill, 'width': 2, 'label': label, 'label_size': 18,
                                           'label_weight': 600, 'reveal': reveal})

    def stack(x, y, rows, reveal):
        return [strip(x, y + i * unit, *row, reveal=reveal) for i, row in enumerate(rows)]

    base = [('指令',), ('调用 1',), ('返回 1',)]
    fail = ('返回 2A：失败', RISK, SOFT_RISK)
    items = [
        ('text', 0, 26, '失败的返回留在 context 里', {'size': 22, 'weight': 700, 'reveal': 0}),
        ('text', w / 2, 62, '这一次', {'size': 17, 'color': MUTED, 'anchor': 'middle', 'reveal': 0}),
        *stack(0, 74, base + [('调用 2A',), fail], 0),
        ('arrow', 178, 160, 210, 160, {'reveal': 0}),
        ('text', 220 + w / 2, 62, '下一次', {'size': 17, 'color': MUTED, 'anchor': 'middle', 'reveal': 0}),
        *stack(220, 74, base + [('调用 2A',), fail, ('调用 2B',), ('返回 2B：成功', OK, SOFT_OK)], 0),
        ('text', 0, 340, '看到失败，下一次换一种做法', {'size': 17, 'color': MUTED, 'reveal': 0}),
    ]
    return {'size': (396, 352), 'items': items}


FIGURES = {
    'keep-errors': keep_errors(),
}
