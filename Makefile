# 推送前跑 `make check`；CI 跑同样的检查。首次使用先 `make setup`。
.PHONY: setup check links

setup:
	uv run playwright install chromium

check:
	uv run courseware/tools/check-courseware.py
	uv run tools/build-site.py
	uv run courseware/ch01/tools/check-progressive.py
	uv run courseware/tools/check-presentation.py
	uv run courseware/tools/check-links.py

# 列出全课外部链接并逐个访问（需联网，不进 CI；录制前跑一次）
links:
	uv run courseware/tools/check-links.py --list --online
