# 推送前跑 `make check`；CI 跑同样的检查。首次使用先 `make setup`。
.PHONY: setup check

setup:
	uv run playwright install chromium

check:
	uv run courseware/tools/check-courseware.py
	uv run tools/build-site.py
	uv run courseware/ch01/tools/check-progressive.py
	uv run courseware/tools/check-presentation.py
