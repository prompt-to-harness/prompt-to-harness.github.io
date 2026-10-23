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


def anthropic_prompt_vs_context():
    """Anthropic《Effective context engineering for AI agents》第一张图：写 Prompt 与管 Context。"""
    b = lambda x, y, label, stroke, fill: ('box', x, y, 138, 42, {'stroke': stroke, 'fill': fill, 'width': 2, 'label': label, 'label_size': 18})
    purple, green, orange, brown = (AGENT, '#E4E1FA'), (TOOL, '#DDF1EC'), ('#C2410C', '#FBE3D6'), (CTX, '#EFE9DA')
    items = [('text', 10, 28, '写 Prompt：一问一答', {'size': 24, 'font': 'title'}),
             ('box', 10, 50, 200, 330, {'stroke': MUTED, 'dash': True, 'width': 1.5}),
             ('text', 22, 76, 'context window', {'size': 15, 'color': MUTED}),
             ('box', 30, 96, 160, 44, {'stroke': AGENT, 'fill': '#E4E1FA', 'width': 2, 'label': '系统提示词', 'label_size': 18}),
             ('box', 30, 152, 160, 44, {'stroke': AGENT, 'fill': '#E4E1FA', 'width': 2, 'label': '用户这一句', 'label_size': 18}),
             ('arrow', 220, 200, 280, 200, {}),
             ('box', 290, 176, 120, 48, {'stroke': INK, 'fill': PAPER, 'width': 2, 'label': '回答', 'label_size': 18}),
             ('text', 460, 28, '管 Context：每一轮都挑一遍', {'size': 24, 'font': 'title'}),
             ('box', 460, 50, 170, 330, {'stroke': MUTED, 'dash': True, 'width': 1.5}),
             ('text', 472, 76, '能放的东西', {'size': 15, 'color': MUTED})]
    for i, (label, (s, f)) in enumerate([('文档', green), ('工具', orange), ('记忆文件', brown), ('详细说明', purple), ('对话历史', (INK, PAPER))]):
        items.append(b(476, 92 + i * 54, label, s, f))
    items += [('arrow', 640, 215, 690, 215, {}), ('text', 665, 200, '挑选', {'size': 16, 'color': MUTED, 'anchor': 'middle'}),
              ('box', 700, 50, 170, 330, {'stroke': RISK, 'width': 2.5}),
              ('text', 712, 76, 'context window', {'size': 15, 'color': RISK})]
    for i, (label, (s, f)) in enumerate([('系统提示词', purple), ('文档 1', green), ('工具 2 个', orange), ('对话历史', (INK, PAPER)), ('用户这一句', purple)]):
        items.append(b(716, 92 + i * 54, label, s, f))
    items += [('curve', 'M 785 382 C 785 440, 545 440, 545 388', {}),
              ('text', 665, 458, '工具返回又变成下一轮能放的东西', {'size': 16, 'color': MUTED, 'anchor': 'middle'})]
    return {'size': (880, 470), 'items': items}


FIGURES = {
    'openai-codex-request': openai_codex_request(),
    'anthropic-prompt-vs-context': anthropic_prompt_vs_context(),
}
