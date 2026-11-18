"""第 6 章工作流、mapper 分工与排障路径手绘图元；来源与登记见 ../README.md。"""

INK, MUTED, CTX, AGENT, TOOL, RISK, OK = (
    '#243042', '#5B6573', '#6E6043', '#5A51D1', '#0B6B5F', '#D9481C', '#15803D'
)
RISK_TEXT = '#AC3615'
PAPER = '#FFFDF7'
SOFT_US = '#E8EAEE'
SOFT_CTX = '#F2EDE1'
SOFT_AGENT = '#EDEBFB'
SOFT_TOOL = '#E0F3EF'
SOFT_RISK = '#FCE6DD'
SOFT_OK = '#E3F2E6'


def gsd_mapper_roles():
    """6.1 p05a：GSD 四个 mapper 的只读调查、分区写入与主 Agent 核验边界。"""
    items = [
        # Step 0: 左侧只读输入（生产代码 + 已有五层规格）
        ('box', 8, 18, 252, 142, {'stroke': INK, 'fill': PAPER, 'reveal': 0}),
        ('text', 26, 52, 'JSON Crack 源码', {'size': 23, 'font': 'title', 'color': INK, 'reveal': 0}),
        ('text', 26, 84, 'apps/www · packages/', {'size': 18, 'font': 'mono', 'color': MUTED, 'reveal': 0}),
        ('box', 26, 102, 214, 40, {'stroke': RISK, 'fill': SOFT_RISK, 'width': 2, 'reveal': 0}),
        ('text', 133, 129, '生产代码只读 · 禁改', {'size': 18, 'color': RISK_TEXT, 'weight': 700, 'anchor': 'middle', 'reveal': 0}),

        ('box', 8, 178, 252, 142, {'stroke': CTX, 'fill': SOFT_CTX, 'reveal': 0}),
        ('text', 26, 212, '已有五层规格', {'size': 23, 'font': 'title', 'color': CTX, 'reveal': 0}),
        ('text', 26, 244, 'docs/specs/*.md', {'size': 18, 'font': 'mono', 'color': CTX, 'reveal': 0}),
        ('box', 26, 262, 214, 40, {'stroke': OK, 'fill': SOFT_OK, 'width': 2, 'reveal': 0}),
        ('text', 133, 289, '权威需求 · 禁止覆盖', {'size': 18, 'color': OK, 'weight': 700, 'anchor': 'middle', 'reveal': 0}),

        # Step 1: 中间四个命名 mapper 分区写入 .planning/codebase/
        ('box', 312, 10, 482, 316, {'stroke': AGENT, 'fill': 'none', 'dash': True, 'width': 2, 'reveal': 1}),
        ('text', 330, 38, '四个 mapper 独立上下文 → 分区写入 .planning/codebase/', {
            'size': 19, 'color': AGENT, 'weight': 700, 'reveal': 1
        }),
        ('arrow', 264, 92, 322, 92, {'color': MUTED, 'reveal': 1}),
        ('arrow', 264, 246, 322, 246, {'color': MUTED, 'reveal': 1}),
    ]

    mappers = [
        ('tech', 'STACK.md · INTEGRATIONS.md', '技术栈与外部集成'),
        ('arch', 'ARCHITECTURE.md · STRUCTURE.md', '模块边界与目录入口'),
        ('quality', 'CONVENTIONS.md · TESTING.md', '编码规范与测试现状'),
        ('concerns', 'CONCERNS.md', '潜在风险与遗留问题'),
    ]
    for idx, (role, files, desc) in enumerate(mappers):
        y = 54 + idx * 66
        items += [
            ('box', 328, y, 112, 52, {'stroke': AGENT, 'fill': SOFT_AGENT, 'width': 2, 'reveal': 1}),
            ('text', 384, y + 33, role, {'size': 21, 'font': 'mono', 'color': '#2A2380', 'weight': 700, 'anchor': 'middle', 'reveal': 1}),
            ('arrow', 444, y + 26, 474, y + 26, {'color': AGENT, 'reveal': 1}),
            ('box', 478, y, 300, 52, {'stroke': CTX, 'fill': PAPER, 'width': 2, 'reveal': 1}),
            ('text', 492, y + 24, files, {'size': 16, 'font': 'mono', 'color': INK, 'weight': 700, 'reveal': 1}),
            ('text', 492, y + 44, desc, {'size': 16, 'color': MUTED, 'reveal': 1}),
        ]

    # Step 2: 右侧主 Agent 抽查与人工把关
    items += [
        ('arrow', 798, 168, 842, 168, {'color': INK, 'reveal': 2}),
        ('box', 846, 18, 264, 302, {'stroke': INK, 'fill': SOFT_US, 'reveal': 2}),
        ('text', 866, 54, '主 Agent + 我们', {'size': 24, 'font': 'title', 'color': INK, 'reveal': 2}),
        ('box', 864, 74, 228, 58, {'stroke': INK, 'fill': PAPER, 'width': 2, 'reveal': 2}),
        ('text', 878, 99, '1. 抽查源码出处', {'size': 18, 'weight': 700, 'color': INK, 'reveal': 2}),
        ('text', 878, 122, '不拿文档行数当事实', {'size': 16, 'color': MUTED, 'reveal': 2}),
        ('box', 864, 144, 228, 58, {'stroke': INK, 'fill': PAPER, 'width': 2, 'reveal': 2}),
        ('text', 878, 169, '2. 裁决跨文档冲突', {'size': 18, 'weight': 700, 'color': INK, 'reveal': 2}),
        ('text', 878, 192, '未证实项明确标待核对', {'size': 16, 'color': MUTED, 'reveal': 2}),
        ('box', 864, 214, 228, 88, {'stroke': RISK, 'fill': SOFT_RISK, 'width': 2, 'reveal': 2}),
        ('text', 878, 241, '3. 守住已完成边界', {'size': 18, 'weight': 700, 'color': RISK_TEXT, 'reveal': 2}),
        ('text', 878, 265, '不把已验收的 JSON Diff', {'size': 16, 'color': RISK_TEXT, 'reveal': 2}),
        ('text', 878, 287, '重新拆成全套待开发任务', {'size': 16, 'color': RISK_TEXT, 'reveal': 2}),
    ]
    return {'size': (1118, 336), 'items': items}


def gsd_specs_handoff():
    """6.2 p15：已有 docs/specs/ 接入 GSD 工作流 .planning/ 的单向依赖与防覆盖边界。"""
    items = [
        # Step 0: 左侧权威规格区 docs/specs/
        ('box', 8, 14, 344, 304, {'stroke': CTX, 'fill': SOFT_CTX, 'reveal': 0}),
        ('text', 28, 48, 'docs/specs/（权威需求）', {'size': 24, 'font': 'title', 'color': CTX, 'reveal': 0}),
        ('box', 26, 66, 308, 46, {'stroke': CTX, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 38, 95, 'BRIEF.md · 记 CR-01 变更原因', {'size': 17, 'color': INK, 'reveal': 0}),
        ('box', 26, 122, 308, 48, {'stroke': OK, 'fill': SOFT_OK, 'width': 2, 'reveal': 0}),
        ('text', 38, 152, 'SPEC.md · 追加 REQ-CR01', {'size': 17, 'weight': 700, 'color': OK, 'reveal': 0}),
        ('box', 26, 180, 308, 48, {'stroke': OK, 'fill': SOFT_OK, 'width': 2, 'reveal': 0}),
        ('text', 38, 210, 'ACCEPTANCE.md · 加 AC-CR01-1~4', {'size': 16.5, 'weight': 700, 'color': OK, 'reveal': 0}),
        ('box', 26, 238, 308, 44, {'stroke': CTX, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 38, 266, 'PLAN / TASKS · 追加链接与状态', {'size': 17, 'color': INK, 'reveal': 0}),
        ('text', 28, 304, '原五层规格保留，不把新规则说成旧缺陷', {'size': 16, 'color': CTX, 'weight': 700, 'reveal': 0}),

        # Step 1: 中间 GSD 建流三步 + 禁止反向覆盖
        ('arrow', 356, 134, 412, 134, {'color': TOOL, 'reveal': 1}),
        ('box', 416, 44, 276, 184, {'stroke': TOOL, 'fill': SOFT_TOOL, 'reveal': 1}),
        ('text', 434, 78, 'GSD 建流三步', {'size': 23, 'font': 'title', 'color': TOOL, 'reveal': 1}),
        ('text', 434, 112, '1. ingest-docs 读五份规格', {'size': 17.5, 'color': INK, 'weight': 700, 'reveal': 1}),
        ('text', 434, 146, '2. discuss-phase 1 锁范围', {'size': 17.5, 'color': INK, 'weight': 700, 'reveal': 1}),
        ('text', 434, 180, '3. plan-phase 1 排串行任务', {'size': 17.5, 'color': INK, 'weight': 700, 'reveal': 1}),
        ('text', 434, 210, '零新增依赖：内置 node:test', {'size': 16.5, 'color': TOOL, 'weight': 700, 'reveal': 1}),
        ('arrow', 696, 134, 752, 134, {'color': TOOL, 'reveal': 1}),

        ('box', 416, 248, 276, 64, {'stroke': RISK, 'fill': SOFT_RISK, 'dash': True, 'width': 2, 'reveal': 1}),
        ('text', 554, 275, '✕ 禁止另起产品需求', {'size': 18, 'color': RISK_TEXT, 'weight': 700, 'anchor': 'middle', 'reveal': 1}),
        ('text', 554, 299, '✕ 禁止反向覆盖 docs/specs/', {'size': 17, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),

        # Step 2: 右侧 .planning/ 执行工作区
        ('box', 756, 14, 354, 304, {'stroke': AGENT, 'fill': SOFT_AGENT, 'reveal': 2}),
        ('text', 776, 48, '.planning/（进度与计划）', {'size': 24, 'font': 'title', 'color': '#2A2380', 'reveal': 2}),
        ('box', 774, 68, 318, 56, {'stroke': AGENT, 'fill': PAPER, 'width': 2, 'reveal': 2}),
        ('text', 790, 94, '需求映射与单阶段 Roadmap', {'size': 18, 'weight': 700, 'color': INK, 'reveal': 2}),
        ('text', 790, 115, '每条都能回指 docs/specs/ 编号', {'size': 16, 'color': MUTED, 'reveal': 2}),
        ('box', 774, 136, 318, 56, {'stroke': AGENT, 'fill': PAPER, 'width': 2, 'reveal': 2}),
        ('text', 790, 162, 'AC → 验证方式矩阵', {'size': 18, 'weight': 700, 'color': INK, 'reveal': 2}),
        ('text', 790, 183, '单元 / 状态交互 / 浏览器回归 / 人工', {'size': 16, 'color': MUTED, 'reveal': 2}),
        ('box', 774, 204, 318, 68, {'stroke': INK, 'fill': PAPER, 'width': 2, 'reveal': 2}),
        ('text', 788, 230, '≤ 3 个串行任务（本节不改生产码）', {'size': 17.5, 'weight': 700, 'color': INK, 'reveal': 2}),
        ('text', 788, 255, '补缺口测 → CR-01 红绿 → 回归交付', {'size': 16, 'color': MUTED, 'reveal': 2}),
        ('text', 776, 302, '建好流 ≠ 做完 CR-01（6.3 先验流程）', {'size': 17, 'color': '#2A2380', 'weight': 700, 'reveal': 2}),
    ]
    return {'size': (1118, 332), 'items': items}


def troubleshoot_loop():
    """6.3 p27：出问题时的两条路——原地硬推死循环 vs 先复现对照规格四步法。"""
    items = [
        # Step 0: 上排错误路径（连续硬推死循环）
        ('box', 8, 12, 1102, 126, {'stroke': RISK, 'fill': SOFT_RISK, 'dash': True, 'width': 2, 'reveal': 0}),
        ('text', 26, 42, '错误路径：在无效方向连续硬推', {'size': 22, 'font': 'title', 'color': RISK_TEXT, 'reveal': 0}),
        ('box', 26, 58, 210, 56, {'stroke': RISK, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 131, 92, '看到报错或偏离', {'size': 19, 'weight': 700, 'color': INK, 'anchor': 'middle', 'reveal': 0}),
        ('arrow', 240, 86, 286, 86, {'color': RISK, 'reveal': 0}),
        ('box', 290, 58, 240, 56, {'stroke': RISK, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 410, 92, '连续加指令硬推', {'size': 19, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 0}),
        ('arrow', 534, 86, 580, 86, {'color': RISK, 'reveal': 0}),
        ('box', 584, 58, 250, 56, {'stroke': RISK, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 709, 92, '先改代码再改规格凑数', {'size': 19, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 0}),
        ('arrow', 838, 86, 882, 86, {'color': RISK, 'reveal': 0}),
        ('box', 886, 58, 206, 56, {'stroke': RISK, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 989, 84, '上下文膨胀', {'size': 18, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 0}),
        ('text', 989, 105, '↺ 仍在原地打转', {'size': 16, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 0}),

        # Step 1: 下排正确路径（先复现 → 缩小范围 → 对照已有规格）
        ('box', 8, 158, 1102, 168, {'stroke': INK, 'fill': PAPER, 'width': 2.5, 'reveal': 1}),
        ('text', 26, 190, '正确顺序：先看清差距，再决定动哪一层', {'size': 22, 'font': 'title', 'color': INK, 'reveal': 1}),
        ('box', 26, 210, 196, 88, {'stroke': INK, 'fill': SOFT_US, 'width': 2, 'reveal': 1}),
        ('text', 42, 240, '1. 先复现', {'size': 20, 'font': 'title', 'color': INK, 'reveal': 1}),
        ('text', 42, 268, '固定输入与现象', {'size': 17, 'color': MUTED, 'reveal': 1}),
        ('arrow', 226, 254, 266, 254, {'color': INK, 'reveal': 1}),

        ('box', 270, 210, 210, 88, {'stroke': TOOL, 'fill': SOFT_TOOL, 'width': 2, 'reveal': 1}),
        ('text', 286, 240, '2. 缩小范围', {'size': 20, 'font': 'title', 'color': TOOL, 'reveal': 1}),
        ('text', 286, 268, '定位哪一步偏离', {'size': 17, 'color': MUTED, 'reveal': 1}),
        ('arrow', 484, 254, 524, 254, {'color': INK, 'reveal': 1}),

        ('box', 528, 210, 232, 88, {'stroke': CTX, 'fill': SOFT_CTX, 'width': 2, 'reveal': 1}),
        ('text', 544, 240, '3. 对照已有规格', {'size': 20, 'font': 'title', 'color': CTX, 'reveal': 1}),
        ('text', 544, 268, '查 docs/specs/ 已批准项', {'size': 17, 'color': CTX, 'reveal': 1}),

        # Step 2: 分流决定改流程还是改实现
        ('arrow', 764, 232, 822, 212, {'color': AGENT, 'reveal': 2}),
        ('arrow', 764, 276, 822, 290, {'color': OK, 'reveal': 2}),
        ('box', 826, 178, 266, 62, {'stroke': AGENT, 'fill': SOFT_AGENT, 'width': 2, 'reveal': 2}),
        ('text', 842, 204, '4a. 计划漏检或越界', {'size': 18, 'weight': 700, 'color': '#2A2380', 'reveal': 2}),
        ('text', 842, 228, '→ 修 .planning/ 工作流', {'size': 17, 'color': INK, 'reveal': 2}),
        ('box', 826, 252, 266, 62, {'stroke': OK, 'fill': SOFT_OK, 'width': 2, 'reveal': 2}),
        ('text', 842, 278, '4b. 实现偏离已定规则', {'size': 18, 'weight': 700, 'color': OK, 'reveal': 2}),
        ('text', 842, 302, '→ 6.4 做最小串行修改', {'size': 17, 'color': INK, 'reveal': 2}),
    ]
    return {'size': (1118, 336), 'items': items}


def cr01_red_green_branches():
    """6.4 p33：失败测试先行与两条现场分流检查点（标准补提示 vs 行为已有受控变异）。"""
    items = [
        # Step 0: 左侧可见行为断言 + 上排检查点 A（现场缺提示 -> 红绿闭环）
        ('box', 8, 52, 226, 224, {'stroke': INK, 'fill': PAPER, 'reveal': 0}),
        ('text', 24, 88, '先写可见行为断言', {'size': 22, 'font': 'title', 'color': INK, 'reveal': 0}),
        ('text', 24, 120, 'node:test / 交互检查', {'size': 16.5, 'font': 'mono', 'color': TOOL, 'weight': 700, 'reveal': 0}),
        ('text', 24, 152, '锚定旧图保留与可见提示', {'size': 16.5, 'color': INK, 'reveal': 0}),
        ('text', 24, 178, '不绑 store 私有字段', {'size': 16, 'color': MUTED, 'reveal': 0}),
        ('box', 24, 202, 194, 52, {'stroke': CTX, 'fill': SOFT_CTX, 'width': 2, 'reveal': 0}),
        ('text', 121, 234, '按第 5 章现场事实分流', {'size': 16.5, 'color': CTX, 'weight': 700, 'anchor': 'middle', 'reveal': 0}),

        ('arrow', 238, 122, 272, 92, {'color': RISK, 'reveal': 0}),
        ('box', 276, 12, 558, 144, {'stroke': RISK, 'fill': 'none', 'width': 2, 'reveal': 0}),
        ('text', 294, 39, '检查点 A：现场缺提示 → 标准失败测试先行', {'size': 18, 'color': RISK_TEXT, 'weight': 700, 'reveal': 0}),
        ('box', 294, 54, 162, 84, {'stroke': RISK, 'fill': SOFT_RISK, 'width': 2, 'reveal': 0}),
        ('text', 375, 84, '1. 先见红', {'size': 20, 'font': 'title', 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 0}),
        ('text', 375, 112, '因缺提示而失败', {'size': 16, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 0}),
        ('arrow', 460, 96, 486, 96, {'color': INK, 'reveal': 0}),
        ('box', 490, 54, 162, 84, {'stroke': AGENT, 'fill': SOFT_AGENT, 'width': 2, 'reveal': 0}),
        ('text', 571, 84, '2. 最小修改', {'size': 20, 'font': 'title', 'color': '#2A2380', 'anchor': 'middle', 'reveal': 0}),
        ('text', 571, 112, '串行补状态与文案', {'size': 15.5, 'color': INK, 'anchor': 'middle', 'reveal': 0}),
        ('arrow', 656, 96, 682, 96, {'color': OK, 'reveal': 0}),
        ('box', 686, 54, 132, 84, {'stroke': OK, 'fill': SOFT_OK, 'width': 2, 'reveal': 0}),
        ('text', 752, 84, '3. 变绿', {'size': 20, 'font': 'title', 'color': OK, 'anchor': 'middle', 'reveal': 0}),
        ('text', 752, 112, '同断言通过', {'size': 16, 'color': OK, 'anchor': 'middle', 'reveal': 0}),

        # Step 1: 下排检查点 B（第 5 章已有提示 -> 受控变异验证断言有效）
        ('arrow', 238, 208, 272, 238, {'color': CTX, 'reveal': 1}),
        ('box', 276, 174, 558, 148, {'stroke': CTX, 'fill': SOFT_CTX, 'dash': True, 'width': 2, 'reveal': 1}),
        ('text', 294, 202, '检查点 B：第 5 章已有提示 → 受控变异（不装旧缺陷）', {'size': 17.5, 'color': CTX, 'weight': 700, 'reveal': 1}),
        ('box', 294, 218, 162, 86, {'stroke': CTX, 'fill': PAPER, 'width': 2, 'reveal': 1}),
        ('text', 375, 248, '1. 纳入契约', {'size': 19, 'font': 'title', 'color': CTX, 'anchor': 'middle', 'reveal': 1}),
        ('text', 375, 276, '如实记行为已有', {'size': 16, 'color': INK, 'anchor': 'middle', 'reveal': 1}),
        ('arrow', 460, 261, 486, 261, {'color': RISK, 'reveal': 1}),
        ('box', 490, 218, 162, 86, {'stroke': RISK, 'fill': SOFT_RISK, 'width': 2, 'reveal': 1}),
        ('text', 571, 248, '2. 受控移除', {'size': 19, 'font': 'title', 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),
        ('text', 571, 276, '隔离检查点见红', {'size': 15.5, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),
        ('arrow', 656, 261, 682, 261, {'color': OK, 'reveal': 1}),
        ('box', 686, 218, 132, 86, {'stroke': OK, 'fill': SOFT_OK, 'width': 2, 'reveal': 1}),
        ('text', 752, 248, '3. 恢复原码', {'size': 19, 'font': 'title', 'color': OK, 'anchor': 'middle', 'reveal': 1}),
        ('text', 752, 276, '证断言真有效', {'size': 15.5, 'color': OK, 'anchor': 'middle', 'reveal': 1}),

        # Step 2: 右侧人工守门三查
        ('arrow', 838, 96, 868, 126, {'color': INK, 'reveal': 2}),
        ('arrow', 838, 250, 868, 212, {'color': INK, 'reveal': 2}),
        ('box', 872, 16, 238, 304, {'stroke': INK, 'fill': SOFT_US, 'reveal': 2}),
        ('text', 890, 50, '我们把守三件事', {'size': 23, 'font': 'title', 'color': INK, 'reveal': 2}),
        ('box', 888, 66, 206, 64, {'stroke': INK, 'fill': PAPER, 'width': 2, 'reveal': 2}),
        ('text', 902, 92, '断言独立于实现', {'size': 17.5, 'weight': 700, 'color': INK, 'reveal': 2}),
        ('text', 902, 116, '失败确因规则差距', {'size': 15.5, 'color': MUTED, 'reveal': 2}),
        ('box', 888, 140, 206, 64, {'stroke': INK, 'fill': PAPER, 'width': 2, 'reveal': 2}),
        ('text', 902, 166, '修复范围不越界', {'size': 17.5, 'weight': 700, 'color': INK, 'reveal': 2}),
        ('text', 902, 190, '不动算法统计与筛选', {'size': 15.5, 'color': MUTED, 'reveal': 2}),
        ('box', 888, 214, 206, 88, {'stroke': RISK, 'fill': SOFT_RISK, 'width': 2, 'reveal': 2}),
        ('text', 902, 241, '拒绝人造假绿', {'size': 18, 'weight': 700, 'color': RISK_TEXT, 'reveal': 2}),
        ('text', 902, 265, '不跳测 · 不改期望', {'size': 15.5, 'color': RISK_TEXT, 'reveal': 2}),
        ('text', 902, 287, '不吞异常凑通过', {'size': 15.5, 'color': RISK_TEXT, 'reveal': 2}),
    ]
    return {'size': (1118, 336), 'items': items}


def uat_recovery_chain():
    """6.4 p36：自动检查边界、五步连续 UAT 恢复路径与空状态/人工核查项。"""
    items = [
        # Step 0: 顶部自动检查边界
        ('box', 8, 10, 1102, 68, {'stroke': CTX, 'fill': SOFT_CTX, 'width': 2, 'reveal': 0}),
        ('text', 28, 38, '自动检查汇总：lint · typecheck · node:test · build · 浏览器回归', {
            'size': 19, 'weight': 700, 'color': CTX, 'reveal': 0
        }),
        ('text', 28, 63, '能证明：约定命令全部跑过    |    不能代替：人在真实界面上的恢复路径操作与发布批准', {
            'size': 16.5, 'color': INK, 'reveal': 0
        }),

        # Step 1: 中排五步连续 UAT 路径
        ('box', 8, 92, 1102, 138, {'stroke': INK, 'fill': PAPER, 'width': 2.5, 'reveal': 1}),
        ('text', 26, 120, '人工 UAT 连续五步路径（按自己亲眼所见作答，不复述框架完成文案）', {
            'size': 19, 'font': 'title', 'color': INK, 'reveal': 1
        }),
    ]
    nodes = [
        ('1. 有效比较', '出新图 · 无提示', OK, SOFT_OK, OK),
        ('2. After 改 {', '留旧图 · 提示亮', RISK, SOFT_RISK, RISK_TEXT),
        ('3. Before 也改 {', '双侧错 · 提示在', RISK, SOFT_RISK, RISK_TEXT),
        ('4. 仅恢复 After', '提示不消失！', RISK, '#FAD7C8', RISK_TEXT),
        ('5. 恢复 Before', '提示收 · 0 差异', OK, SOFT_OK, OK),
    ]
    for idx, (title, sub, stroke, fill, tcolor) in enumerate(nodes):
        x = 24 + idx * 218
        items += [
            ('box', x, 134, 186, 82, {'stroke': stroke, 'fill': fill, 'width': 2, 'reveal': 1}),
            ('text', x + 93, 165, title, {'size': 18.5, 'font': 'title', 'color': tcolor, 'anchor': 'middle', 'reveal': 1}),
            ('text', x + 93, 195, sub, {'size': 16, 'weight': 700, 'color': INK, 'anchor': 'middle', 'reveal': 1}),
        ]
        if idx < 4:
            items.append(('arrow', x + 190, 175, x + 214, 175, {'color': INK, 'reveal': 1}))

    # Step 2: 下排两个独立必看项（空状态 + 键盘/窄屏/控制台/网络）
    items += [
        ('box', 8, 244, 514, 80, {'stroke': RISK, 'fill': SOFT_RISK, 'dash': True, 'width': 2, 'reveal': 2}),
        ('text', 26, 273, '单独必查空状态：从未成功比较就非法', {'size': 18.5, 'font': 'title', 'color': RISK_TEXT, 'reveal': 2}),
        ('text', 26, 303, '只显示当前输入错误，绝不谎称存在「上次有效结果」', {'size': 16.5, 'color': INK, 'reveal': 2}),

        ('box', 540, 244, 570, 80, {'stroke': INK, 'fill': SOFT_US, 'width': 2, 'reveal': 2}),
        ('text', 558, 273, '计划留给人工的现场观察项', {'size': 18.5, 'font': 'title', 'color': INK, 'reveal': 2}),
        ('text', 558, 303, '提示可读与位置 · 键盘操作 · 360px 窄屏 · 控制台与网络', {'size': 16.5, 'color': INK, 'reveal': 2}),
    ]
    return {'size': (1118, 336), 'items': items}


def scheduled_task_wall():
    """6.5 p46：ChatGPT 定时任务触发源与项目文件隔离墙示意图。"""
    items = [
        # Step 0: 左侧时间与事件触发源 -> 任务运行
        ('box', 8, 20, 294, 272, {'stroke': TOOL, 'fill': SOFT_TOOL, 'reveal': 0}),
        ('text', 26, 54, '定时任务的两类触发', {'size': 22, 'font': 'title', 'color': TOOL, 'reveal': 0}),
        ('box', 26, 74, 258, 86, {'stroke': TOOL, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 42, 104, '按时间运行', {'size': 19, 'weight': 700, 'color': INK, 'reveal': 0}),
        ('text', 42, 134, '每日 / 每周定时自动触发', {'size': 16.5, 'color': MUTED, 'reveal': 0}),
        ('box', 26, 176, 258, 94, {'stroke': TOOL, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 42, 206, '按外部事件运行', {'size': 19, 'weight': 700, 'color': INK, 'reveal': 0}),
        ('text', 42, 234, 'Gmail · Slack · GitHub 等', {'size': 16.5, 'color': MUTED, 'reveal': 0}),
        ('text', 42, 256, '事件源依套餐与版本而定', {'size': 15, 'color': TOOL, 'reveal': 0}),

        # Step 1: 右侧 Project 容器内部隔离墙（任务读不到同项目上传文件）
        ('arrow', 306, 152, 352, 152, {'color': TOOL, 'reveal': 1}),
        ('box', 356, 12, 754, 288, {'stroke': CTX, 'fill': SOFT_CTX, 'dash': True, 'width': 2.5, 'reveal': 1}),
        ('text', 378, 44, '同一个「项目（Project）」内部 —— 课堂最容易忽略的限制', {
            'size': 20, 'font': 'title', 'color': CTX, 'reveal': 1
        }),

        ('box', 378, 64, 272, 162, {'stroke': AGENT, 'fill': SOFT_AGENT, 'width': 2, 'reveal': 1}),
        ('text', 514, 102, '在项目里建的定时任务', {'size': 20, 'font': 'title', 'color': '#2A2380', 'anchor': 'middle', 'reveal': 1}),
        ('text', 514, 138, '入口看似挂在该项目下', {'size': 17, 'color': INK, 'anchor': 'middle', 'reveal': 1}),
        ('text', 514, 168, '到点自动启动新运行', {'size': 16.5, 'color': MUTED, 'anchor': 'middle', 'reveal': 1}),

        ('box', 674, 58, 82, 174, {'stroke': RISK, 'fill': SOFT_RISK, 'dash': True, 'width': 2.5, 'reveal': 1}),
        ('text', 715, 114, '✕', {'size': 30, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),
        ('text', 715, 150, '访问', {'size': 18, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),
        ('text', 715, 176, '不到', {'size': 18, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),

        ('box', 780, 64, 308, 162, {'stroke': CTX, 'fill': PAPER, 'width': 2, 'reveal': 1}),
        ('text', 934, 102, '该项目里存放的文件', {'size': 20, 'font': 'title', 'color': CTX, 'anchor': 'middle', 'reveal': 1}),
        ('text', 934, 138, '上传文档 · 表格 · 参考资料', {'size': 17, 'color': MUTED, 'anchor': 'middle', 'reveal': 1}),
        ('text', 934, 170, '普通项目对话可读，定时任务不可读', {'size': 16, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),

        # Step 2: 底部判断条
        ('box', 378, 240, 710, 44, {'stroke': INK, 'fill': SOFT_US, 'width': 2, 'reveal': 2}),
        ('text', 733, 269, '提醒：看起来安排好了 ≠ 够得到材料；别把依赖项目文件的分析交给定时任务盲跑', {
            'size': 16.5, 'weight': 700, 'color': INK, 'anchor': 'middle', 'reveal': 2
        }),
    ]
    return {'size': (1118, 312), 'items': items}


def mobile_remote_paths():
    """6.5 p48：手机 Remote 页接着看桌面 Codex 任务 vs 云端任务的两条不同通路。"""
    items = [
        # Step 0: 上排通路 A（桌面本地 Codex <-> 手机 Remote 页）
        ('box', 8, 12, 1102, 128, {'stroke': OK, 'fill': SOFT_OK, 'width': 2.5, 'reveal': 0}),
        ('text', 28, 42, '通路 A：手机 Remote 页 ── 接着看桌面上的 Codex 任务', {
            'size': 20, 'font': 'title', 'color': OK, 'reveal': 0
        }),
        ('box', 28, 56, 356, 68, {'stroke': INK, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 206, 85, '桌面端 Codex 任务', {'size': 19, 'weight': 700, 'color': INK, 'anchor': 'middle', 'reveal': 0}),
        ('text', 206, 110, '正在桌面环境里运行的那条会话', {'size': 16, 'color': MUTED, 'anchor': 'middle', 'reveal': 0}),

        ('arrow', 390, 90, 566, 90, {'color': OK, 'reveal': 0}),
        ('text', 478, 78, '同一条通路 · 接着看', {'size': 16, 'weight': 700, 'color': OK, 'anchor': 'middle', 'reveal': 0}),

        ('box', 572, 56, 516, 68, {'stroke': OK, 'fill': PAPER, 'width': 2, 'reveal': 0}),
        ('text', 830, 85, '手机 ChatGPT 应用 · Remote 页', {'size': 19, 'weight': 700, 'color': OK, 'anchor': 'middle', 'reveal': 0}),
        ('text', 830, 110, '离开电脑桌也能随时看进度，不必守在屏幕前', {'size': 16, 'color': INK, 'anchor': 'middle', 'reveal': 0}),

        # Step 1: 中排通路 B（云端独立任务通路，不能混为一谈）
        ('box', 8, 156, 1102, 112, {'stroke': CTX, 'fill': PAPER, 'dash': True, 'width': 2, 'reveal': 1}),
        ('text', 28, 185, '通路 B：云端任务 ── 另一条独立执行通路（不要和桌面本机混为一谈）', {
            'size': 20, 'font': 'title', 'color': CTX, 'reveal': 1
        }),
        ('box', 28, 198, 356, 54, {'stroke': CTX, 'fill': SOFT_CTX, 'width': 2, 'reveal': 1}),
        ('text', 206, 231, '云端托管运行环境', {'size': 18, 'weight': 700, 'color': CTX, 'anchor': 'middle', 'reveal': 1}),

        ('box', 416, 198, 124, 54, {'stroke': RISK, 'fill': SOFT_RISK, 'width': 2, 'reveal': 1}),
        ('text', 478, 231, '≠ 不同通路', {'size': 18, 'weight': 700, 'color': RISK_TEXT, 'anchor': 'middle', 'reveal': 1}),

        ('box', 572, 198, 516, 54, {'stroke': CTX, 'fill': SOFT_CTX, 'width': 2, 'reveal': 1}),
        ('text', 830, 231, '云端任务列表（与桌面本机任务分属两条路）', {'size': 18, 'color': INK, 'anchor': 'middle', 'reveal': 1}),

        # Step 2: 底部课堂边界条
        ('box', 8, 282, 1102, 44, {'stroke': INK, 'fill': SOFT_US, 'width': 2, 'reveal': 2}),
        ('text', 559, 310, '课堂边界：只点明「看的是哪一条任务通路」，不扩展成手机远程编码课；未核验时只留说明', {
            'size': 17, 'weight': 700, 'color': INK, 'anchor': 'middle', 'reveal': 2
        }),
    ]
    return {'size': (1118, 336), 'items': items}


FIGURES = {
    'gsd-mapper-roles': gsd_mapper_roles(),
    'gsd-specs-handoff': gsd_specs_handoff(),
    'troubleshoot-loop': troubleshoot_loop(),
    'cr01-red-green-branches': cr01_red_green_branches(),
    'uat-recovery-chain': uat_recovery_chain(),
    'scheduled-task-wall': scheduled_task_wall(),
    'mobile-remote-paths': mobile_remote_paths(),
}
