"""用 VT 模拟器回放 $RUN_LOG/out.log，打印当前屏幕。用法：RUN_LOG=<日志目录> uv run --with pyte screen.py"""
import os, pyte
D = os.environ["RUN_LOG"]
s = pyte.Screen(160, 50); st = pyte.Stream(s)
st.feed(open(f"{D}/out.log", errors="replace").read().replace("<<<", "").replace(">>>", ""))
print("\n".join(l.rstrip() for l in s.display if l.strip()))
