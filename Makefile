# 推送前跑 `make check`；CI 跑同样的检查。首次使用先 `make setup`。
.PHONY: setup viewers check links

setup:
	uv run playwright install chromium

# 生成不提交的静态查看器（claude-tap 0.1.146+pr475，不调用模型）：单独打开的对照记录，以及各节 evidence.json 的嵌入查看器（courseware/tools/tracekit.py）。
viewers:
	uv run courseware/ch02/materials/request/config-pairs-20261023/build-records.py
	uv run courseware/ch02/materials/request/run-20261024/build-records.py
	uv run courseware/tools/tracekit.py courseware/ch02/lessons/01-request/trace/evidence.json courseware/ch02/lessons/02-iteration/trace/evidence.json courseware/ch02/lessons/03-review/trace/evidence.json

check: viewers
	uv run courseware/tools/check-courseware.py
	uv run tools/build-site.py
	uv run courseware/ch01/tools/check-progressive.py
	uv run courseware/tools/check-presentation.py
	uv run courseware/tools/check-links.py

# 列出全课外部链接并逐个访问（需联网，不进 CI；录制前跑一次）
links:
	uv run courseware/tools/check-links.py --list --online
