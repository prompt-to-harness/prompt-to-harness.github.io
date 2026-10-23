# 推送前跑 `make check`；CI 跑同样的检查。首次使用先 `make setup`。
.PHONY: setup viewers check links

setup:
	uv run playwright install chromium

# 生成不提交的静态查看器（claude-tap 0.1.146，不调用模型）。顺序有依赖：先原始记录和样稿，最后 01-request 把它们收进本节。
viewers:
	uv run demos/ch02-static-trace/build-viewer.py
	uv run demos/ch02-request-walkthrough/build-viewer.py
	uv run courseware/ch02/materials/request/config-pairs-20261023/build-records.py
	uv run courseware/ch02/materials/request/file-choice-20261023/build-records.py
	uv run courseware/ch02/lessons/01-request/tools/build-lesson.py

check: viewers
	uv run courseware/tools/check-courseware.py
	uv run tools/build-site.py
	uv run courseware/ch01/tools/check-progressive.py
	uv run courseware/tools/check-presentation.py
	uv run courseware/tools/check-links.py

# 列出全课外部链接并逐个访问（需联网，不进 CI；录制前跑一次）
links:
	uv run courseware/tools/check-links.py --list --online
