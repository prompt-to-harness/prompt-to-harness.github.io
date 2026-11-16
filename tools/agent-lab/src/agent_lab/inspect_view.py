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
from threading import Event, Thread
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
    watch_interactive = not exec_mode and shutil.which("lsof") is not None
    if not exec_mode and not watch_interactive:
        print("Inspect 实时查看需要 lsof，本次将在退出后打开回放。", file=sys.stderr)
    live = LiveCodexView(uv, Path(env["CODEX_HOME"]), system_env)
    with live:
        if exec_mode:
            status, thread_id = run_exec(command, env, json_requested, live)
        else:
            status, thread_id = run_interactive(command, env, live if watch_interactive else None)
        live.thread_id = thread_id or live.thread_id
    if live.opened:
        return status
    thread_id = live.thread_id
    if not thread_id:
        if not status and exec_mode:
            raise ValueError("Codex 没有输出 thread_id。")
        if not status:
            print("Inspect 回放：退出时没有找到会话 ID。", file=sys.stderr)
        return status
    return replay(uv, env, system_env, status, thread_id)


class LiveCodexView:
    def __init__(self, uv, root, system_env):
        self.root = root.resolve()
        self.runner = [uv, "run", "--quiet", "--no-project", "--python", "3.12", "--with", INSPECT_VERSION]
        self.env = {key: value for key, value in system_env.items()
                    if key not in {"MINIMAX_API_KEY", "INSPECT_VIEW_AUTHORIZATION_TOKEN"}}
        self.finished = Event()
        self.pid = None
        self.thread_id = None
        self.opened = False
        self.worker = Thread(target=self.watch, daemon=True)

    def __enter__(self):
        self.worker.start()
        return self

    def __exit__(self, *_):
        self.finished.set()
        self.worker.join()

    def source(self):
        sessions = self.root / "sessions"
        if self.thread_id:
            return next(sessions.rglob(f"rollout-*-{UUID(self.thread_id)}.jsonl"), None)
        if self.pid:
            return interactive_rollout(self.pid, sessions)
        return None

    def watch(self):
        logs = None
        previous = None
        adapter = Path(__file__).with_name("inspect_rollout.py")
        try:
            while True:
                final = self.finished.is_set()
                source = self.source()
                if source:
                    stat = source.stat()
                    revision = (source, stat.st_mtime_ns, stat.st_size)
                    if revision != previous:
                        if logs is None:
                            root = self.root / "inspect-replays"
                            root.mkdir(mode=0o700, exist_ok=True)
                            logs = Path(tempfile.mkdtemp(prefix="codex-live-", dir=root))
                        subprocess.run([*self.runner, "python", str(adapter), str(source),
                                        str(logs), "codex-live"],
                                       env=self.env, check=True, timeout=60)
                        previous = revision
                        log = logs / "codex-session.json"
                        if log.is_file() and not self.opened:
                            open_viewer(self.runner, log, self.env, live=True)
                            self.opened = True
                if final:
                    return
                self.finished.wait(1)
        except (OSError, ValueError, subprocess.SubprocessError) as error:
            print(f"Inspect 实时查看：{error}", file=sys.stderr)


def interactive_rollout(pid, sessions):
    # The PTY wrapper, tap and app server can add processes between us and the writer.
    rows = subprocess.check_output(["ps", "-axo", "pid=,ppid="], text=True, timeout=3)
    parents = dict(tuple(map(int, row.split())) for row in rows.splitlines())
    descendants = {pid}
    while True:
        children = {child for child, parent in parents.items() if parent in descendants}
        if children <= descendants:
            break
        descendants.update(children)
    files = subprocess.run(["lsof", "-nP", "-p", ",".join(map(str, descendants)), "-Fan"],
                           capture_output=True, text=True, timeout=3).stdout
    candidates = set()
    access = ""
    for row in files.splitlines():
        if row.startswith(("p", "f")):
            access = ""
        elif row.startswith("a"):
            access = row[1:]
        elif row.startswith("n") and access in {"w", "u"}:
            path = Path(row[1:])
            if path.is_relative_to(sessions) and path.match("rollout-*.jsonl"):
                with path.open() as stream:
                    first = stream.readline()
                if first.endswith("\n"):
                    metadata = json.loads(first).get("payload", {})
                    if metadata.get("source") in ("cli", "exec"):
                        candidates.add(path)
    # Never guess when the process owns multiple interactive rollouts.
    return next(iter(candidates)) if len(candidates) == 1 else None


def exit_thread_id(transcript):
    # The footer is written after the TUI restores the terminal.
    plain = re.sub(rb"\x1b\[[0-?]*[ -/]*[@-~]", b"", transcript)
    match = re.search(
        rb"(?:^|[\r\n])To continue this session, run:[\r\n]+"
        rb"[ \t]+codex resume ([0-9a-f-]{36})[\r\n]+"
        rb"(?:Script done on [^\r\n]*[\r\n]*)?\Z", plain,
    )
    return str(UUID(match[1].decode("ascii"))) if match else None


def run_interactive(command, env, live):
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
        with subprocess.Popen(wrapped, env=env) as child:
            if live is not None:
                live.pid = child.pid
            status = child.wait()
        with transcript.open("rb") as output:
            output.seek(max(0, transcript.stat().st_size - 8192))
            return status, exit_thread_id(output.read())


def run_exec(command, env, json_requested, live):
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
                live.thread_id = thread_id
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


def open_viewer(runner, log, env, *, live=False):
    logs = log.parent
    with socket.socket() as listener:
        listener.bind(("127.0.0.1", 0))
        port = listener.getsockname()[1]
    url = f"http://127.0.0.1:{port}/"
    server_log = logs / "viewer.log"
    if live:
        command = ["python", str(Path(__file__).with_name("inspect_live_server.py")), str(logs), str(port)]
    else:
        command = ["inspect", "view", "--host", "127.0.0.1", "--port", str(port),
                   "--no-trust-content", "--log-dir", str(logs)]
    with server_log.open("wb") as output:
        server = subprocess.Popen(
            [*runner, *command],
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
