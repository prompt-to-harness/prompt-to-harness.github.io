"""PTY 驱动：用 2.1 的 demo.sh 启动 Codex，把原始输出写进 $RUN_LOG/out.log，按 cmds.jsonl 追加的内容逐字发送。
用法：RUN_LOG=<日志目录> CH02_DEMO_ROOT=<项目父目录> AGENT_LAB_HOME=<专用 HOME> uv run --with pexpect driver.py <课程仓库根目录>
不自动作答：每一步由人先用 screen.py 看清屏幕，再用 send.py 发送（2026-10-24 曾因盲按落在更新提示上）。"""
import json, os, sys, time, pexpect
D = os.environ["RUN_LOG"]; os.makedirs(D, exist_ok=True)
repo = sys.argv[1]
child = pexpect.spawn("sh", [f"{repo}/courseware/ch02/lessons/01-request/tools/demo.sh", "codex"],
                      env=dict(os.environ, TERM="xterm-256color"), cwd=repo,
                      dimensions=(50, 160), encoding="utf-8", codec_errors="replace")
log = open(f"{D}/out.log", "a"); done = 0
open(f"{D}/cmds.jsonl", "a").close()
while child.isalive():
    try:
        log.write(child.read_nonblocking(65536, timeout=0.5)); log.flush()
    except pexpect.TIMEOUT: pass
    except pexpect.EOF: break
    lines = open(f"{D}/cmds.jsonl").read().splitlines()
    for line in lines[done:]:
        c = json.loads(line)
        if "text" in c:
            for ch in c["text"]: child.send(ch); time.sleep(0.01)
        if "key" in c: child.send(c["key"])
        log.write(f"\n<<<SENT {line}>>>\n"); log.flush()
    done = len(lines)
log.write("\n<<<EXIT>>>\n")
