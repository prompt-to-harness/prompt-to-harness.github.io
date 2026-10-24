"""Context 引入与请求组成图元；来源与状态见 ../README.md。"""

INK, MUTED, CTX, AGENT, TOOL, RISK = '#243042', '#5B6573', '#6E6043', '#5A51D1', '#0B6B5F', '#D9481C'
PAPER, SOFT_CTX, SOFT_RISK = '#FFFDF7', '#F1ECDF', '#FDE7DF'


def openai_codex_request():
    """OpenAI《深入解析 Codex 智能体循环》：一次请求按顺序拼成，对上锚点图。"""
    rows = [('instructions', '模型自带的基础指令', '系统指令', AGENT),
            ('tools', 'shell、update_plan、网页搜索、MCP 工具', '工具', TOOL),
            ('developer', '沙箱权限说明', '环境', CTX),
            ('user', 'AGENTS.md 与技能列表', '规则', CTX),
            ('user', 'environment_context：目录、shell', '环境', CTX),
            ('user', '你这一句', '这一句', RISK)]
    items = [('text', 0, 26, 'Codex 发出的一次请求，从上往下拼', {'size': 24, 'font': 'title'}),
             ('text', 660, 26, '锚点图', {'size': 24, 'font': 'title'})]
    for i, (field, desc, block, color) in enumerate(rows):
        y, last = 46 + i * 58, i == len(rows) - 1
        items += [('box', 2, y, 590, 48, {'stroke': color, 'fill': SOFT_RISK if last else PAPER}),
                  ('text', 22, y + 32, field, {'size': 20, 'color': color, 'font': 'mono', 'weight': 700}),
                  ('text', 200, y + 32, desc, {'size': 20}),
                  ('arrow', 602, y + 24, 652, y + 24, {}),
                  ('box', 660, y + 4, 150, 40, {'stroke': CTX, 'fill': SOFT_CTX, 'width': 2, 'label': block})]
    items.append(('text', 2, 46 + 6 * 58 + 22, '下一次请求：前面整段原样再发一遍，后面接上工具返回和新的一句', {'size': 20, 'color': MUTED}))
    return {'size': (820, 46 + 6 * 58 + 34), 'items': items}


FIGURES = {
    'openai-codex-request': openai_codex_request(),
}
