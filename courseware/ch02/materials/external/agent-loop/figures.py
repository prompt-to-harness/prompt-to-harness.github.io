"""Agent loop 图元：一句 Prompt 引出多次请求；来源与状态见 ../README.md。"""

INK, MUTED, CTX, AGENT, TOOL, RISK = '#243042', '#5B6573', '#6E6043', '#5A51D1', '#0B6B5F', '#D9481C'
PAPER, SOFT_CTX, SOFT_RISK, SOFT_TOOL = '#FFFDF7', '#F1ECDF', '#FDE7DF', '#DDF1EC'


def codex_agent_loop():
    """据 OpenAI《深入解析 Codex 智能体循环》的循环图与 Snapshot 2 重画：每次请求 = 上一次的全部 + 新增条目。"""
    h = {'size': 22, 'weight': 700}
    items = [
        # 左：循环
        ('text', 0, 26, '一句话，几次请求', {**h, 'reveal': 0}),
        ('box', 40, 50, 220, 46, {'stroke': RISK, 'fill': SOFT_RISK, 'label': '你的一句 Prompt', 'label_size': 18, 'reveal': 0}),
        ('arrow', 150, 98, 150, 132, {'reveal': 0}),
        ('box', 40, 136, 220, 46, {'stroke': AGENT, 'fill': '#E4E1FA', 'label': '模型', 'label_size': 18, 'reveal': 0}),
        ('arrow', 150, 184, 150, 218, {'reveal': 0}),
        ('text', 160, 208, '要调用工具', {'size': 15, 'color': MUTED, 'reveal': 0}),
        ('box', 40, 222, 220, 46, {'stroke': TOOL, 'fill': SOFT_TOOL, 'label': 'Codex 执行工具', 'label_size': 18, 'reveal': 0}),
        ('curve', 'M 40 245 C 4 245, 4 159, 38 159', {'reveal': 0}),
        ('text', 30, 296, '返回追加进请求，再问一次', {'size': 15, 'color': MUTED, 'reveal': 0}),
        ('curve', 'M 260 159 C 300 159, 300 353, 262 353', {'reveal': 0}),
        ('text', 308, 255, '不用了', {'size': 15, 'color': MUTED, 'reveal': 0}),
        ('box', 40, 330, 220, 46, {'stroke': INK, 'fill': PAPER, 'label': '最终回答', 'label_size': 18, 'reveal': 0}),
        # 右：请求逐次变长
        ('text', 330, 26, '每次请求：上一次的全部 + 新增', {**h, 'reveal': 1}),
    ]
    col = lambda n: 330 + n * 190
    top, unit, w = 50, 28, 170

    def head(n, label, reveal):
        return ('text', col(n) + w / 2, top + 16, label, {'size': 17, 'weight': 700, 'anchor': 'middle', 'reveal': reveal})

    def strip(n, y, hh, label, stroke, fill, reveal, dash=False):
        return ('box', col(n), y, w, hh, {'stroke': stroke, 'fill': fill, 'width': 2, 'label': label, 'label_size': 15,
                                          'label_weight': 600, 'dash': dash, 'reveal': reveal})

    y0 = top + 28
    # 第 1 次：指令、工具、环境 + 新的 Prompt
    items += [head(0, '第 1 次', 1),
              strip(0, y0, unit * 2, '指令、工具、环境', CTX, SOFT_CTX, 1),
              strip(0, y0 + unit * 2, unit, '新的 Prompt', RISK, SOFT_RISK, 1)]
    # 每一轮在末尾追加三条：模型的推理、工具调用、工具返回（2026-10-24 重跑记录）
    def added(n, y, reveal):
        return [strip(n, y, unit, '推理', AGENT, '#E4E1FA', reveal),
                strip(n, y + unit, unit, '工具调用', TOOL, PAPER, reveal),
                strip(n, y + unit * 2, unit, '工具返回', TOOL, SOFT_TOOL, reveal)]
    h1 = unit * 3
    items += [head(1, '第 2 次', 2), strip(1, y0, h1, '第 1 次的全部', MUTED, '#ECEAE4', 2, dash=True), *added(1, y0 + h1, 2)]
    h2 = h1 + unit * 3
    items += [head(2, '第 3 次', 3), strip(2, y0, h2, '第 2 次的全部', MUTED, '#ECEAE4', 3, dash=True), *added(2, y0 + h2, 3),
              ('arrow', col(2) + w / 2, y0 + h2 + unit * 3 + 4, col(2) + w / 2, y0 + h2 + unit * 3 + 24, {'reveal': 3}),
              ('text', col(2) + w / 2, y0 + h2 + unit * 3 + 44, '模型给出最终回答', {'size': 16, 'weight': 700, 'anchor': 'middle', 'reveal': 3}),
              ('text', 330, 404, '虚线框：原样重发、一字不改　示意，轮数以实际记录为准', {'size': 15, 'color': MUTED, 'reveal': 3})]
    return {'size': (900, 414), 'items': items}


FIGURES = {
    'codex-agent-loop': codex_agent_loop(),
}
