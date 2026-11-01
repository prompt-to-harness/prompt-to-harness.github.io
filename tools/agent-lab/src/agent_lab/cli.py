"""Dispatch agent-specific launchers without sharing their state or credentials."""

from __future__ import annotations

import argparse
import os
from pathlib import Path
import sys

from . import claude, codex


def parse_args(argv: list[str]) -> tuple[str, bool, list[str]]:
    if argv[:1] == ["home"]:
        # `agent-lab home [PATH]`: print the course environment Codex would use for PATH.
        return "home", False, argv[1:]
    own, forwarded = argv, []
    if "--" in argv:
        index = argv.index("--")
        own, forwarded = argv[:index], argv[index + 1:]
    parser = argparse.ArgumentParser(prog="agent-lab", description="用独立、持久的环境启动 agent")
    agents = parser.add_subparsers(dest="agent", required=True)
    codex_parser = agents.add_parser("codex", help="启动课程 MiniMax Codex 环境")
    agents.add_parser("home", help="显示某个项目目录（默认当前目录）对应的课程环境")
    codex_parser.add_argument("--tap", action="store_true", help="记录请求并打开查看器")
    claude_parser = agents.add_parser("claude", help="启动课程 MiniMax Claude Code 环境")
    claude_parser.add_argument("--tap", action="store_true", help="记录请求并打开查看器")
    args = parser.parse_args(own)
    if "--" in argv and not forwarded:
        parser.error("-- 后需要 agent 参数")
    if args.agent in {"codex", "claude"}:
        try:
            (codex if args.agent == "codex" else claude).validate_args(forwarded)
        except ValueError as error:
            parser.error(str(error))
    return args.agent, getattr(args, "tap", False), forwarded


def main() -> int:
    agent, tap, forwarded = parse_args(sys.argv[1:])
    if agent == "home":
        parser = argparse.ArgumentParser(prog="agent-lab home")
        parser.add_argument("--agent", choices=("codex", "claude"), default="codex")
        parser.add_argument("project", nargs="?", default=".")
        args = parser.parse_args(forwarded)
        try:
            launcher = codex if args.agent == "codex" else claude
            print(launcher.resolve_home(dict(os.environ), Path(args.project)))
        except ValueError as error:
            print(f"agent-lab home：{error}", file=sys.stderr)
            return 2
        return 0
    if agent == "claude":
        return claude.launch(tap, forwarded)
    return codex.launch(tap, forwarded)


if __name__ == "__main__":
    sys.exit(main())
