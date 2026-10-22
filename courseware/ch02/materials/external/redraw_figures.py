"""第 2 章外部图的重画图元，用 courseware/tools/redraw.py 生成课程手绘版和 Excalidraw 版。

来源与状态见同目录 README.md；每张图底部的“据 某某 重画”写在页面上，不画进 SVG。
"""
import math

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
    'chroma-context-rot': chroma_context_rot(),
    'anthropic-prompt-vs-context': anthropic_prompt_vs_context(),
}
