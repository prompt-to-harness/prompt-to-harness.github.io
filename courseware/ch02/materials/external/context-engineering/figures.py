"""Context 引入与请求组成图元；来源与状态见 ../README.md。"""

INK, MUTED, CTX, AGENT, TOOL, RISK = '#243042', '#5B6573', '#6E6043', '#5A51D1', '#0B6B5F', '#D9481C'
PAPER, SOFT_CTX, SOFT_RISK = '#FFFDF7', '#F1ECDF', '#FDE7DF'


def openai_codex_request():
    """OpenAI《深入解析 Codex 智能体循环》（2026-01）：一次请求按顺序拼成。只画文章的顺序，不再对到锚点图（C2-88）。"""
    rows = [('instructions', '模型自带的基础指令', AGENT),
            ('tools', 'shell、update_plan、网页搜索、MCP 工具', TOOL),
            ('developer', '沙箱权限说明', CTX),
            ('user', 'AGENTS.md 与技能列表', CTX),
            ('user', 'environment_context：目录、shell', CTX),
            ('user', '你的新 Prompt', RISK)]
    items = [('text', 0, 26, 'Codex 发出的一次请求，从上往下拼', {'size': 24, 'font': 'title'})]
    for i, (field, desc, color) in enumerate(rows):
        y, last = 46 + i * 58, i == len(rows) - 1
        items += [('box', 2, y, 640, 48, {'stroke': color, 'fill': SOFT_RISK if last else PAPER}),
                  ('text', 22, y + 32, field, {'size': 20, 'color': color, 'font': 'mono', 'weight': 700}),
                  ('text', 200, y + 32, desc, {'size': 20})]
    items.append(('text', 2, 46 + 6 * 58 + 22, '下一次请求：前面整段原样再发一遍，后面接上工具返回和新的 Prompt', {'size': 20, 'color': MUTED}))
    return {'size': (660, 46 + 6 * 58 + 34), 'items': items}


FIGURES = {
    'openai-codex-request': openai_codex_request(),
}
