"""MiniMax Claude Code launcher, migrated from tools/clean-claude.sh."""
from __future__ import annotations

import json
import os
from pathlib import Path
import shutil
import subprocess
import sys

from . import codex

MODEL = codex.MODEL
BASE_URL = "https://api.minimax.cn/anthropic"
MARKER = "agent-lab-claude-v1\n"


def resolve_home(parent: dict[str, str], project: Path) -> Path:
    # The old Codex override must never select a Claude environment.
    settings = {key: value for key, value in parent.items() if key != "COURSE_CODEX_HOME"}
    return codex.resolve_home(settings, project).with_name("claude")


def prepare_environment(parent: dict[str, str], project: Path | None = None) -> tuple[dict[str, str], Path]:
    if not parent.get("MINIMAX_API_KEY", "").strip():
        raise ValueError("缺少 MINIMAX_API_KEY：请先 export；不会尝试个人 Claude 登录。")
    home = resolve_home(parent, Path.cwd() if project is None else project)
    codex.managed_dir(home)
    marker = home / ".agent-lab-home"
    if marker.is_symlink():
        raise ValueError("课程环境标记不能是软链接")
    if marker.exists():
        if marker.read_text() != MARKER:
            raise ValueError("课程环境标记不匹配")
    else:
        if any(home.iterdir()):
            raise ValueError(f"拒绝使用非空的非课程目录：{home}")
        codex.write_managed(marker, MARKER)
    config = home / ".claude"
    codex.managed_dir(config)
    credentials = config / ".credentials.json"
    if credentials.exists() or credentials.is_symlink():
        raise ValueError("课程目录出现 .credentials.json，已停止；不会读取或修改该登录。")
    model_env = {name: MODEL for name in (
        "ANTHROPIC_MODEL", "ANTHROPIC_DEFAULT_OPUS_MODEL", "ANTHROPIC_DEFAULT_SONNET_MODEL",
        "ANTHROPIC_DEFAULT_HAIKU_MODEL", "CLAUDE_CODE_SUBAGENT_MODEL")}
    model_env.update(CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC="1", API_TIMEOUT_MS="600000")
    # Never store endpoint/auth here: settings env would override tap's proxy endpoint.
    codex.write_managed(config / "settings.json", json.dumps(
        {"model": MODEL, "env": model_env}, indent=2) + "\n")
    state = home / ".claude.json"
    if state.is_symlink():
        raise ValueError("课程配置不能是软链接")
    if not state.exists():
        codex.write_managed(state, '{"hasCompletedOnboarding": true}\n')
    env = parent.copy()
    for name in list(env):
        if (name.startswith(("CODEX_", "OPENAI_", "ANTHROPIC_", "CLAUDE_", "CLEAN_CLAUDE_", "CLEAN_CODEX_"))
                or name in {"CLAUDECODE", "MINIMAX_API_KEY", "ZDOTDIR", "BASH_ENV", "ENV"}):
            env.pop(name)
    env.update(model_env)
    env.update(HOME=str(home), ZDOTDIR=str(home),
               XDG_CONFIG_HOME=str(home / ".config"), XDG_DATA_HOME=str(home / ".local/share"),
               XDG_CACHE_HOME=str(home / ".cache"), XDG_STATE_HOME=str(home / ".local/state"),
               ANTHROPIC_AUTH_TOKEN=parent["MINIMAX_API_KEY"], ANTHROPIC_BASE_URL=BASE_URL,
               CLAUDE_CODE_SUBPROCESS_ENV_SCRUB="1")
    return env, home


def validate_args(forwarded: list[str]) -> None:
    blocked = {"--model", "--fallback-model", "--settings", "--setting-sources", "--agent", "--agents",
               "--bare", "--cloud", "--remote", "--remote-control", "--rc", "--desktop",
               "--environment", "--bg", "--background"}
    for item in forwarded:
        if item.split("=", 1)[0] in blocked:
            raise ValueError("课程启动器固定本地 MiniMax 配置，不支持模型、设置或远程启动覆盖")
    if forwarded and forwarded[0] in {
        "auth", "setup-token", "gateway", "install", "update", "upgrade", "import",
        "mcp", "plugin", "plugins", "agents", "attach", "daemon", "ultrareview",
    }:
        raise ValueError("课程启动器只用于本地 MiniMax 会话；管理命令请使用日常 Claude 环境")


def launch(tap: bool, forwarded: list[str]) -> int:
    try:
        validate_args(forwarded)
        if os.name != "posix":
            raise ValueError("原生 Windows 暂不支持，请使用 WSL。")
        binary = shutil.which("claude")
        if not binary:
            raise ValueError("找不到 claude：请先安装 Claude Code CLI。")
        env, home = prepare_environment(dict(os.environ))
        version = subprocess.run([binary, "--version"], env=env, capture_output=True,
                                 text=True, check=True).stdout.strip()
        print(f"课程环境：{home}\n模型：{MODEL}\n上游：{BASE_URL}\n{version}", file=sys.stderr)
        if version != "2.1.304 (Claude Code)":
            print("提示：旧实验使用 Claude Code 2.1.304；当前版本的请求需另行核验。", file=sys.stderr)
        # Only managed user settings; project CLAUDE.md is still course context.
        args = ["--setting-sources", "user", "--model", MODEL, *forwarded]
        command = [binary, *args]
        if tap:
            command = [sys.executable, "-m", "claude_tap", "--tap-client", "claude",
                       "--tap-target", BASE_URL, "--tap-live-port", str(codex.dashboard_port(home)),
                       "--", *args]
        try:
            return subprocess.call(command, env=env)
        except KeyboardInterrupt:
            return 130
    except (ValueError, OSError, subprocess.CalledProcessError) as error:
        print(f"agent-lab claude：{error}", file=sys.stderr)
        return 1
