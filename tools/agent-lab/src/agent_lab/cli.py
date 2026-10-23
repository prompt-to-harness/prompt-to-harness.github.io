"""Dispatch agent-specific launchers without sharing their state or credentials."""

from __future__ import annotations

import argparse
import sys

from . import codex


def parse_args(argv: list[str]) -> tuple[str, bool, list[str]]:
    own, forwarded = argv, []
    if "--" in argv:
        index = argv.index("--")
        own, forwarded = argv[:index], argv[index + 1:]
    parser = argparse.ArgumentParser(prog="agent-lab", description="用独立、持久的环境启动 agent")
    agents = parser.add_subparsers(dest="agent", required=True)
    codex_parser = agents.add_parser("codex", help="启动课程 MiniMax Codex 环境")
    codex_parser.add_argument("--tap", action="store_true", help="记录请求并打开查看器")
    claude_parser = agents.add_parser("claude", help="预留入口，尚未实现", description="Claude 支持尚未实现")
    claude_parser.add_argument("--tap", action="store_true", help="预留选项，尚未实现")
    args = parser.parse_args(own)
    if "--" in argv and not forwarded:
        parser.error("-- 后需要 agent 参数")
    if args.agent == "codex":
        try:
            codex.validate_args(forwarded)
        except ValueError as error:
            parser.error(str(error))
    return args.agent, getattr(args, "tap", False), forwarded


def main() -> int:
    agent, tap, forwarded = parse_args(sys.argv[1:])
    if agent == "claude":
        print("agent-lab claude：尚未实现；当前仅支持 agent-lab codex。", file=sys.stderr)
        return 2
    return codex.launch(tap, forwarded)


if __name__ == "__main__":
    sys.exit(main())
