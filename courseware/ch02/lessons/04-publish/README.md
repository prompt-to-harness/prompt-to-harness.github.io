# 2.4 发布上线，看 Codex 怎么用 gh

[打开课件](index.html) · [逐步讲稿](speaker.html) · [分镜](STORYBOARD.md)

第一次推送前看清即将公开的整段历史，由人判断能否公开；审查 Codex 写的部署配置，Pages 来源交给 Codex 用 gh 设置、人批准每条命令，再在请求记录里看清这次 gh 调用的命令、返回和批准；推送后用三项检查证明页面可用，只推送 ch02-homepage-live 一个 tag。11 页。依据[内部大纲](../../../../docs/outline/course-outline-internal.md)与[第 2 章 Context 主线提案](../../../../docs/outline/proposals/2026-10-19-ch02-context-storyline.md)。首版（2026-10-03），2026-10-20 按 Context 主线改版；未经讲师审阅，未试讲、未录制。

## 维护

`tools/build-lesson.py` 是本节唯一的内容源，生成 `lesson.js`，不要直接改生成物。结构与 [2.1](../01-feedback/README.md) 相同（页面零件、字体、跨章引用的播放器文件见那里）。全章共用的页面登记、章节地图、窄屏样式和输出写在 [`../../tools/lessonkit.py`](../../tools/lessonkit.py)；改它会影响五节，改完逐节重新生成并比对。

```sh
python3 courseware/ch02/lessons/04-publish/tools/build-lesson.py
uv run courseware/tools/check-courseware.py
```

## 素材状态

- 2026-10-12 讲师确认先直接克隆课程模板、发布前再建立个人远端；p44 补建立个人空仓库与核对 origin，p45 用 HEAD 检查完整历史，p49 首次推送使用 `git push -u origin HEAD`。Git 2.56.0 的临时本地仓库验证通过：模板提交、后来删除的文件和全部作者都包含在检查中，首次推送与分支跟踪正常；未执行 GitHub 建仓或部署。原 Template 远端增量检查的实测属于旧路径。
- 2026-10-20 按讲师决定改：p43 首次写“GitHub CLI（gh）”；p46 判断清单加“首屏的名字和简介是不是自己的”；p49 第 2 步口播拆短，异常分支和没装 gh 的做法只留在操作提示与展开步骤；p49a 改为“刚才那次会话的请求记录”，不说成与全章同一次运行。全章用同一套配置下的请求记录，2.4 因 gh 要读本机登录另起一次。详见分镜末节。
- p49a 取自 2026-10-20 16:14 在组织下临时仓库的一次实测（能力目录开，9 次批准）：需要批准的调用带 `require_escalated` 标记和理由，人点的同意不在记录里；细节见 [`materials/pages-source/`](../../materials/pages-source/README.md)。录制时按 p49 那次会话的实际请求讲。
- 画面输出为示意，作者用占位；示范例子仍是提交作者邮箱，不依赖之前各章的证据文件；noreply 邮箱的事实依据见 p46 核对记录。
- p48 左侧摘自 2026-10-20 Codex 按 p47 的 Prompt 实际生成的文件（仓库名用示例 my-homepage，细节见 p48 实测记录）；录制时按当次生成的文件逐行讲。
- p49 的 Pages 设置界面按录制时 GitHub 版本核对；首次部署若自然失败，保留真实过程（决定 7）。
- 不做“改写历史方法说明”配套页（2026-10-05 讲师确认）：p46 口播指向 GitHub 官方文档，链接在讲解全文的“参考链接”；2.3 p41 只说明改写历史不在本课范围。
