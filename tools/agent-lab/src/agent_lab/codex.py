"""Run the installed Codex CLI with a persistent, MiniMax-only course home."""

from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path
import shutil
import socket
import subprocess
import sys
from importlib.resources import files
from urllib.request import ProxyHandler, build_opener

MODEL = "MiniMax-M3.1-Flash"
BASE_URL = "https://api.minimax.cn/v1"
MARKER = "agent-lab-codex-v1\n"
LEGACY_MARKER = "prompt-to-harness-course-codex-v1\n"


def dashboard_port(home: Path) -> int:
    # Avoid claude-tap's global default port and keep each course home separate.
    port = 20000 + int(hashlib.sha256(str(home).encode()).hexdigest()[:8], 16) % 20000
    with socket.socket() as probe:
        probe.settimeout(0.2)
        occupied = probe.connect_ex(("127.0.0.1", port)) == 0
    if occupied:
        try:
            with build_opener(ProxyHandler({})).open(
                    f"http://127.0.0.1:{port}/dashboard/health", timeout=2) as response:
                health = json.load(response)
            expected = str(home / ".local/share/claude-tap/traces.sqlite3")
            if health.get("db_path") == expected and health.get("version") == "0.1.146":
                return port
        except (OSError, ValueError):
            pass
        raise ValueError(f"课程查看器端口 {port} 被其他服务占用，已停止，不关闭现有服务。")
    return port


def managed_dir(path: Path) -> None:
    if path.is_symlink():
        raise ValueError(f"课程目录不能是软链接：{path}")
    path.mkdir(parents=True, exist_ok=True, mode=0o700)


def write_managed(path: Path, content: str) -> None:
    if path.is_symlink():
        raise ValueError(f"课程配置不能是软链接：{path}")
    # Replace atomically so another invocation never reads a partial config.
    import tempfile

    with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", dir=path.parent,
                                     delete=False) as output:
        temporary = Path(output.name)
        try:
            output.write(content)
            output.flush()
            os.replace(temporary, path)
        finally:
            temporary.unlink(missing_ok=True)


def prepare_environment(parent: dict[str, str]) -> tuple[dict[str, str], Path]:
    if not parent.get("MINIMAX_API_KEY", "").strip():
        raise ValueError("缺少 MINIMAX_API_KEY：请先 export；不会尝试个人 Codex 登录。")
    real_home = Path(parent["HOME"]).resolve()
    if parent.get("AGENT_LAB_HOME") and parent.get("COURSE_CODEX_HOME"):
        raise ValueError("AGENT_LAB_HOME 与兼容变量 COURSE_CODEX_HOME 不能同时设置")
    default = real_home / ".local/share/agent-lab/codex"
    legacy = real_home / ".local/share/prompt-to-harness/course-codex"
    if parent.get("AGENT_LAB_HOME"):
        home = Path(parent["AGENT_LAB_HOME"]).expanduser() / "codex"
    elif parent.get("COURSE_CODEX_HOME"):
        home = Path(parent["COURSE_CODEX_HOME"]).expanduser()
    else:
        # Preserve pre-rename sessions without moving or deleting any files.
        home = legacy if not default.exists() and legacy.exists() else default
    home = home.absolute()
    # A custom location is for local verification; never adopt an existing home.
    managed_dir(home)
    legacy_marker = home / ".course-codex-home"
    marker = legacy_marker if legacy_marker.exists() or legacy_marker.is_symlink() else home / ".agent-lab-home"
    if marker.is_symlink():
        raise ValueError("课程环境标记不能是软链接")
    if marker.exists():
        expected_marker = LEGACY_MARKER if marker == legacy_marker else MARKER
        if marker.read_text() != expected_marker:
            raise ValueError("课程环境标记不匹配")
    else:
        if any(home.iterdir()):
            raise ValueError(f"拒绝使用非空的非课程目录：{home}")
        write_managed(marker, MARKER)
    codex_home = home / ".codex"
    managed_dir(codex_home)
    # Do not delete or refresh an unexpected login, especially a symlink.
    if (codex_home / "auth.json").exists() or (codex_home / "auth.json").is_symlink():
        raise ValueError("课程目录出现 auth.json，已停止；请检查，不会读取或修改该登录。")
    catalog = codex_home / "model-catalogs"
    managed_dir(catalog)
    catalog_file = catalog / "minimax.json"
    write_managed(catalog_file, files("agent_lab").joinpath("model-catalog.json").read_text())
    config = f'''model = "{MODEL}"
model_provider = "minimax"
model_context_window = 524288
model_catalog_json = {json.dumps(str(catalog_file))}
model_reasoning_effort = "max"
forced_login_method = "api"
cli_auth_credentials_store = "file"
allow_login_shell = false

[model_providers.minimax]
name = "MiniMax"
base_url = "{BASE_URL}"
env_key = "MINIMAX_API_KEY"
wire_api = "responses"
requires_openai_auth = false

[shell_environment_policy]
inherit = "all"
exclude = ["MINIMAX_API_KEY"]

# 让终端自己保留 scrollback，长回复能往上滑；0.163.0 默认全屏 transcript，终端历史不留。
[tui]
fullscreen_transcript = false
'''
    write_managed(codex_home / "config.toml", config)
    env = parent.copy()
    for name in list(env):
        if (name.startswith(("CODEX_", "OPENAI_", "ANTHROPIC_", "CLAUDE_", "CLEAN_CODEX_"))
                or name in {"CLAUDECODE", "CLAUDE_CONFIG_DIR", "ZDOTDIR", "BASH_ENV", "ENV"}):
            env.pop(name)
    env.update(HOME=str(home), CODEX_HOME=str(codex_home), ZDOTDIR=str(home),
               XDG_CONFIG_HOME=str(home / ".config"),
               XDG_DATA_HOME=str(home / ".local/share"),
               XDG_CACHE_HOME=str(home / ".cache"),
               XDG_STATE_HOME=str(home / ".local/state"))
    # Preserve gh's own login without copying any token into the course config.
    gh_config = parent.get("GH_CONFIG_DIR") or str(
        Path(parent.get("XDG_CONFIG_HOME") or real_home / ".config") / "gh")
    env["GH_CONFIG_DIR"] = str(Path(gh_config).resolve())
    if sys.platform == "darwin" and (real_home / "Library/Keychains").is_dir():
        managed_dir(home / "Library")
        keychains = home / "Library/Keychains"
        target = real_home / "Library/Keychains"
        if keychains.is_symlink() and keychains.resolve() == target.resolve():
            pass
        elif keychains.exists() or keychains.is_symlink():
            raise ValueError("课程环境的 Keychains 已存在且不是预期链接，已停止")
        else:
            keychains.symlink_to(target, target_is_directory=True)
    return env, home


def validate_args(forwarded: list[str]) -> None:
    # Keep provider/auth configuration owned by this launcher. This also avoids
    # claude-tap's known problem with -c overrides following `exec`.
    blocked = {"--config", "--model", "--profile", "--oss", "--local-provider", "--ignore-user-config",
               "--remote", "--remote-auth-token-env", "--enable", "--disable"}
    for item in forwarded:
        if item.split("=", 1)[0] in blocked or (
                item.startswith("-") and not item.startswith("--")
                and item[1:2] in {"c", "m", "p"}):
            raise ValueError("课程启动器固定 MiniMax 配置，不支持模型、profile 或配置覆盖")
    if any(item in {"login", "logout", "app", "app-server", "remote-control", "cloud"}
           for item in forwarded):
        raise ValueError("课程启动器只用于本地 MiniMax 会话，不支持登录或远程服务命令")


def launch(tap: bool, forwarded: list[str]) -> int:
    try:
        validate_args(forwarded)
        if os.name != "posix":
            raise ValueError("本地验证版支持 macOS/Linux；Windows 请使用 WSL，原生 Windows 尚未验证。")
        codex = shutil.which("codex")
        if not codex:
            raise ValueError("找不到 codex：请先安装 Codex CLI。")
        env, home = prepare_environment(dict(os.environ))
        version = subprocess.run([codex, "--version"], env=env, capture_output=True,
                                 text=True, check=True).stdout.strip()
        print(f"课程环境：{home}\n模型：{MODEL}\n上游：{BASE_URL}\n{version}", file=sys.stderr)
        if version != "codex-cli 0.163.0":
            print("提示：本地核验版本为 Codex CLI 0.163.0，当前版本需另行验证。", file=sys.stderr)
        # Avoid connecting to a personal shared app-server daemon.
        enforced = [
            f'model="{MODEL}"', 'model_provider="minimax"',
            'tui.fullscreen_transcript=false',
            'forced_login_method="api"', 'cli_auth_credentials_store="file"',
            'allow_login_shell=false', f'model_providers.minimax.base_url="{BASE_URL}"',
            'model_providers.minimax.env_key="MINIMAX_API_KEY"',
            'model_providers.minimax.requires_openai_auth=false',
            'shell_environment_policy.exclude=["MINIMAX_API_KEY"]',
        ]
        codex_args = ["--no-daemon", *[part for value in enforced for part in ("-c", value)],
                      *forwarded]
        command = [codex, *codex_args]
        if tap:
            executable = shutil.which("claude-tap")
            if not executable:
                raise ValueError("找不到包依赖 claude-tap，请通过 uvx 或 uv tool install 运行。")
            command = [executable, "--tap-client", "codex", "--tap-target", BASE_URL,
                       "--tap-live-port", str(dashboard_port(home)),
                       "--", *codex_args]
        try:
            return subprocess.call(command, env=env)
        except KeyboardInterrupt:
            return 130
    except (ValueError, OSError, subprocess.CalledProcessError) as error:
        print(f"agent-lab codex：{error}", file=sys.stderr)
        return 1
