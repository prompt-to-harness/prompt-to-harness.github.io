"""p06-tap 原理图；据 claude-tap v0.1.146 README 的 How it works 整理。
只画课程的 Codex CLI + 自定义 provider 反向代理路径；不是所有模式的总图。
生成：uv run courseware/tools/redraw.py courseware/ch02/materials/external/tap_proxy_figures.py
"""
INK, MUTED, AGENT, TOOL, CTX = '#243042', '#5B6573', '#5A51D1', '#0B6B5F', '#6E6043'
items = [
 ('box', 8, 8, 755, 264, {'stroke': MUTED, 'dash': True, 'width': 1.5}),
 ('text', 25, 35, '我们的电脑', {'size': 20, 'color': MUTED}),
 ('text', 950, 35, '远端', {'size': 20, 'color': MUTED}),
 ('box', 30, 60, 205, 90, {'stroke': AGENT, 'fill': '#EDEBFB'}),
 ('text', 132, 96, 'Codex CLI', {'size': 25, 'weight': 700, 'anchor': 'middle', 'color': AGENT}),
 ('text', 132, 128, '组装好这次请求', {'size': 20, 'anchor': 'middle'}),
 ('box', 420, 60, 315, 90, {'stroke': TOOL, 'fill': '#E0F3EF'}),
 ('text', 577, 96, 'claude-tap 本地代理', {'size': 25, 'weight': 700, 'anchor': 'middle', 'color': TOOL}),
 ('text', 577, 128, '接收、记录、转发', {'size': 20, 'anchor': 'middle'}),
 ('box', 955, 60, 205, 90, {'stroke': INK, 'fill': '#FFFDF7'}),
 ('text', 1057, 96, '模型服务', {'size': 25, 'weight': 700, 'anchor': 'middle'}),
 ('text', 1057, 128, '本章：MiniMax', {'size': 20, 'anchor': 'middle'}),
 ('arrow', 247, 80, 406, 80, {'color': CTX}),
 ('text', 325, 68, '请求 →', {'size': 20, 'anchor': 'middle', 'color': CTX}),
 ('arrow', 750, 80, 941, 80, {'color': CTX}),
 ('text', 845, 68, '转发请求', {'size': 20, 'anchor': 'middle', 'color': CTX}),
 ('arrow', 406, 128, 247, 128, {'color': TOOL}),
 ('text', 325, 157, '← 返回', {'size': 20, 'anchor': 'middle', 'color': TOOL}),
 ('arrow', 941, 128, 750, 128, {'color': TOOL}),
 ('text', 845, 157, '返回（流式）', {'size': 20, 'anchor': 'middle', 'color': TOOL}),
 ('arrow', 577, 154, 577, 204, {'color': TOOL}),
 ('box', 420, 212, 315, 52, {'stroke': CTX, 'fill': '#F2EDE1'}),
 ('text', 577, 245, '本地记录 → 浏览器查看器', {'size': 21, 'anchor': 'middle'}),
 ('text', 25, 221, '启动时，把 API 地址', {'size': 20}),
 ('text', 25, 251, '临时指向本地代理', {'size': 20}),
 ('text', 775, 221, '鉴权信息也经过代理', {'size': 20, 'color': '#AC3615'}),
 ('text', 775, 251, '只记录经过这里的请求和返回', {'size': 20, 'color': MUTED}),
]
# 常驻节点先显示；第 1 步请求，第 2 步返回，第 3 步记录。
for i, item in enumerate(items):
    if 12 <= i <= 15 or i in (23, 24, 25):
        item[-1]['reveal'] = 0
    elif 16 <= i <= 19:
        item[-1]['reveal'] = 1
    elif 20 <= i <= 22 or i == 26:
        item[-1]['reveal'] = 2

FIGURES = {'tap-proxy': {'size': (1168, 280), 'items': items}}
