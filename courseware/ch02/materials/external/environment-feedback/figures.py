"""2.4 两次查询：据 Anthropic 环境反馈原则与本课发布演示整理，课程自绘。"""
INK, MUTED, GREEN = '#243042', '#5B6573', '#0B6B5F'

def feedback():
    items = []
    for x, heading, state, action, reveal in [
        (12, '发布前', 'GitHub 当前 Pages 设置', '判断是否需要修改设置', 0),
        (462, '推送后', '这次提交的部署状态', '判断等待、排错或继续验收', 1),
    ]:
        def text(y, label, size=24, color=INK, weight=400):
            return ('text', x+200, y, label, {'size':size,'anchor':'middle','color':color,'weight':weight,'reveal':reveal})
        def box(y, label, fill, stroke, size=24):
            return ('box', x, y, 400, 66, {'fill':fill,'stroke':stroke,'label':label,'label_size':size,'label_weight':500,'reveal':reveal})
        items += [text(30, heading,28,INK,700),
                  box(52,state,'#FFFDF7',MUTED),
                  ('arrow',x+200,126,x+200,180,{'reveal':reveal}),
                  ('text',x+220,160,'用 gh 查询',{'size':20,'color':MUTED,'reveal':reveal}),
                  box(192,'返回进入 Context','#DDF1EC',GREEN,27),
                  ('arrow',x+200,268,x+200,310,{'reveal':reveal}),
                  box(322,action,'#FFFDF7',MUTED,23)]
    return {'size':(880,410),'items':items}

FIGURES={'environment-feedback':feedback()}
