"""追加一条要发送的内容。用法：RUN_LOG=<日志目录> python3 send.py text "<文字>" | key enter|esc|down|up|tab | paste "<多行文字>"（括号粘贴，换行不会提前发送）"""
import json, os, sys
D = os.environ["RUN_LOG"]
kind, val = sys.argv[1], sys.argv[2]
keys = {"enter": "\r", "esc": "\x1b", "down": "\x1b[B", "up": "\x1b[A", "tab": "\t"}
val = keys.get(val, val) if kind == "key" else val
if kind == "paste": kind, val = "key", "\x1b[200~" + val + "\x1b[201~"
open(f"{D}/cmds.jsonl", "a").write(json.dumps({kind: val}, ensure_ascii=False) + "\n")
