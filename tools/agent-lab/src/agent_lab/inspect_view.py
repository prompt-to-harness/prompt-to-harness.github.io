"""Replay a saved agent session in a local Inspect Viewer."""

import json
from pathlib import Path
import re
import shlex
import shutil
import socket
import subprocess
import sys
import tempfile
import time
from urllib.error import URLError
from urllib.request import urlopen
from uuid import UUID, uuid4
import webbrowser

INSPECT_VERSION = "inspect-ai==0.3.282"


def run_and_open(command, env, *, system_env, exec_mode, json_requested):
    uv = shutil.which("uv")
    if not uv:
        raise ValueError("--inspect 需要 uv，请先安装 uv。")
    if exec_mode:
        status, thread_id = run_exec(command, env, json_requested)
    else:
        status, thread_id = run_interactive(command, env)
    if not thread_id:
        if not status and exec_mode:
            raise ValueError("Codex 没有输出 thread_id。")
        if not status:
            print("Inspect 回放：退出时没有找到会话 ID。", file=sys.stderr)
        return status
    return replay(uv, env, system_env, status, thread_id)


def exit_thread_id(transcript):
    # The footer is written after the TUI restores the terminal.
    plain = re.sub(rb"\x1b\[[0-?]*[ -/]*[@-~]", b"", transcript)
    match = re.search(
        rb"(?:^|[\r\n])To continue this session, run:[\r\n]+"
        rb"[ \t]+codex resume ([0-9a-f-]{36})[\r\n]+"
        rb"(?:Script done on [^\r\n]*[\r\n]*)?\Z", plain,
    )
    return str(UUID(match[1].decode("ascii"))) if match else None


def run_interactive(command, env):
    script = shutil.which("script")
    if not script or not sys.stdin.isatty() or not sys.stdout.isatty():
        raise ValueError("交互式 --inspect 需要终端及 script 命令。")
    with tempfile.TemporaryDirectory(prefix="agent-lab-inspect-") as directory:
        transcript = Path(directory) / "terminal"
        if sys.platform == "darwin":
            wrapped = [script, "-q", str(transcript), *command]
        else:
            wrapped = [script, "-q", "-e", "-c", "exec " + shlex.join(command), str(transcript)]
            env = {**env, "SHELL": "/bin/sh"}
        status = subprocess.call(wrapped, env=env)
        with transcript.open("rb") as output:
            output.seek(max(0, transcript.stat().st_size - 8192))
            return status, exit_thread_id(output.read())


def run_exec(command, env, json_requested):
    with subprocess.Popen(
        command,
        env=env, stdout=subprocess.PIPE, text=True,
    ) as child:
        thread_id = None
        for line in child.stdout:
            try:
                event = json.loads(line)
            except ValueError:
                print(line, end="", flush=True)
                continue
            if event.get("type") == "thread.started":
                thread_id = event.get("thread_id")
            if json_requested:
                print(line, end="", flush=True)
            elif event.get("type") == "item.completed":
                item = event.get("item", {})
                if item.get("type") == "agent_message":
                    print(item["text"], flush=True)
            elif event.get("type") in {"error", "turn.failed"}:
                print(line, end="", file=sys.stderr, flush=True)
        status = child.wait()
    return status, thread_id


def replay(uv, env, system_env, status, thread_id):
    thread_id = str(UUID(thread_id))
    root = Path(env["CODEX_HOME"])
    matches = list((root / "sessions").rglob(f"rollout-*-{thread_id}.jsonl"))
    if len(matches) != 1:
        raise ValueError(f"会话 {thread_id} 匹配到 {len(matches)} 份 rollout。")
    return import_and_open(uv, root, system_env, status, thread_id, matches[0], "codex")


def run_claude_and_open(command, env, root, system_env):
    uv = shutil.which("uv")
    if not uv:
        raise ValueError("--inspect 需要 uv，请先安装 uv。")
    session_id = str(uuid4())
    status = subprocess.call([command[0], "--session-id", session_id, *command[1:]], env=env)
    matches = list((root / "projects").glob(f"*/{session_id}.jsonl"))
    if not matches:
        if not status:
            print("Inspect 回放：Claude 没有为本次会话保存日志。", file=sys.stderr)
        return status
    if len(matches) != 1:
        raise ValueError(f"Claude 会话 {session_id} 匹配到 {len(matches)} 份日志。")
    return import_and_open(uv, root, system_env, status, session_id, matches[0], "claude")


def import_and_open(uv, root, system_env, status, session_id, source, agent):
    replay_root = root / "inspect-replays"
    replay_root.mkdir(mode=0o700, exist_ok=True)
    logs = Path(tempfile.mkdtemp(prefix=f"{session_id}-", dir=replay_root))
    runner = [uv, "run", "--no-project", "--with", INSPECT_VERSION]
    viewer_env = {key: value for key, value in system_env.items()
                  if key not in {"MINIMAX_API_KEY", "INSPECT_VIEW_AUTHORIZATION_TOKEN"}}
    adapter = Path(__file__).with_name("inspect_rollout.py")
    try:
        subprocess.run([*runner, "python", str(adapter), str(source), str(logs), agent],
                       env=viewer_env, check=True)
        log = next(logs.glob("*.json"))
        open_viewer(runner, log, viewer_env)
    except (ValueError, OSError, subprocess.CalledProcessError) as error:
        if status:
            print(f"Inspect 回放：{error}", file=sys.stderr)
            return status
        raise
    return status


def open_viewer(runner, log, env):
    logs = log.parent
    with socket.socket() as listener:
        listener.bind(("127.0.0.1", 0))
        port = listener.getsockname()[1]
    url = f"http://127.0.0.1:{port}/"
    server_log = logs / "viewer.log"
    with server_log.open("wb") as output:
        server = subprocess.Popen(
            [*runner, "inspect", "view", "--host", "127.0.0.1", "--port", str(port),
             "--no-trust-content", "--log-dir", str(logs)],
            env=env, stdin=subprocess.DEVNULL, stdout=output, stderr=subprocess.STDOUT,
            start_new_session=True,
        )
    try:
        for _ in range(100):
            if server.poll() is not None:
                break
            try:
                with urlopen(f"{url}api/logs", timeout=0.5):
                    replay_url = f"{url}#/tasks/{log.name}/samples/messages"
                    print(f"Inspect Viewer：{replay_url}（服务 PID {server.pid}）", file=sys.stderr)
                    webbrowser.open(replay_url)
                    return
            except (URLError, TimeoutError):
                time.sleep(0.1)
        raise ValueError(f"Inspect Viewer 启动失败，见 {server_log}")
    except BaseException:
        if server.poll() is None:
            server.terminate()
        raise
