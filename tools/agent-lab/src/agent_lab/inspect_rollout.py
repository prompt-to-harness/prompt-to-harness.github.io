"""Convert Codex and Claude session messages to an Inspect EvalLog in the optional uv runtime."""

from datetime import datetime, timezone
import json
from pathlib import Path
import sys

from inspect_ai.log import EvalConfig, EvalDataset, EvalLog, EvalSample, EvalSpec, EvalStats, write_eval_log
from inspect_ai.model import ChatMessageAssistant, ChatMessageTool, ChatMessageUser
from inspect_ai.tool import ToolCall


def import_rollout(source: Path, output: Path, *, live: bool = False) -> None:
    messages, calls = [], {}
    user_inputs = []
    started = completed = datetime.fromtimestamp(source.stat().st_mtime, timezone.utc)
    with source.open() as entries:
        for line, entry in enumerate(entries, 1):
            if live and not entry.endswith("\n"):
                break
            row = json.loads(entry)
            payload = row.get("payload", {})
            kind = payload.get("type")
            if row.get("type") == "session_meta" and row.get("timestamp"):
                started = datetime.fromisoformat(row["timestamp"])
            if row.get("type") == "event_msg" and kind == "user_message":
                user_inputs.append(payload.get("message", ""))
            if row.get("type") != "response_item":
                continue
            fields = {"id": f"L{line}", "metadata": {"source_line": line}}
            if kind == "message":
                role = payload.get("role")
                if role not in {"user", "assistant"}:
                    continue
                content = payload.get("content", [])
                if isinstance(content, list):
                    content = "\n".join(block.get("text", "") for block in content)
                if role == "user" and content.lstrip().startswith(
                        ("<environment_context>", "# AGENTS.md instructions")):
                    continue
                cls = ChatMessageUser if role == "user" else ChatMessageAssistant
                messages.append(cls(content=content, **fields))
            elif kind in {"function_call", "custom_tool_call"}:
                call_id = payload["call_id"]
                calls[call_id] = payload["name"]
                argument = payload.get("arguments", payload.get("input", ""))
                messages.append(ChatMessageAssistant(content="", tool_calls=[
                    ToolCall(id=call_id, function=calls[call_id], arguments={"raw_input": argument}),
                ], **fields))
            elif kind in {"function_call_output", "custom_tool_call_output"}:
                call_id = payload["call_id"]
                result = payload.get("output", "")
                messages.append(ChatMessageTool(
                    content=result if isinstance(result, str) else json.dumps(result, ensure_ascii=False),
                    tool_call_id=call_id, function=calls.get(call_id, "tool"), **fields))
    if live and not messages:
        return
    if not messages:
        raise ValueError(f"未识别到会话消息：{source.name}")

    write_replay(source, output, "codex", "Codex", messages, user_inputs, started, completed, live=live)


def import_claude(source: Path, output: Path) -> None:
    messages, user_inputs, calls = [], [], {}
    timestamps = []
    with source.open() as entries:
        for line, entry in enumerate(entries, 1):
            row = json.loads(entry)
            role = row.get("type")
            if role not in {"user", "assistant"} or row.get("isSidechain") or row.get("isMeta"):
                continue
            if row.get("timestamp"):
                timestamps.append(datetime.fromisoformat(row["timestamp"]))
            content = row.get("message", {}).get("content", [])
            if isinstance(content, str):
                content = [{"type": "text", "text": content}]
            for index, block in enumerate(content, 1):
                fields = {"id": f"L{line}-{index}", "metadata": {"source_line": line}}
                kind = block.get("type")
                if kind == "text":
                    value = block["text"]
                    if role == "user":
                        if value.startswith(("<local-command-", "<command-name>")):
                            continue
                        user_inputs.append(value)
                        messages.append(ChatMessageUser(content=value, **fields))
                    else:
                        messages.append(ChatMessageAssistant(content=value, **fields))
                elif role == "assistant" and kind == "tool_use":
                    call_id, name = block["id"], block["name"]
                    calls[call_id] = name
                    messages.append(ChatMessageAssistant(content="", tool_calls=[
                        ToolCall(id=call_id, function=name, arguments=block.get("input", {})),
                    ], **fields))
                elif role == "user" and kind == "tool_result":
                    call_id = block["tool_use_id"]
                    result = block.get("content", "")
                    messages.append(ChatMessageTool(
                        content=result if isinstance(result, str) else json.dumps(result, ensure_ascii=False),
                        tool_call_id=call_id, function=calls.get(call_id, "tool"), **fields))
    if not messages:
        raise ValueError(f"未识别到 Claude 会话消息：{source.name}")
    fallback = datetime.fromtimestamp(source.stat().st_mtime, timezone.utc)
    started, completed = (min(timestamps), max(timestamps)) if timestamps else (fallback, fallback)
    write_replay(source, output, "claude", "Claude", messages, user_inputs, started, completed)


def write_replay(source, output, agent, title, messages, user_inputs, started, completed, *, live=False):
    log = EvalLog(
        status="success",
        eval=EvalSpec(
            created=started.isoformat(),
            task=f"{agent}-replay",
            task_display_name=f"{title} 会话记录" if live else f"{title} 会话回放",
            task_description="从既有会话导入。success 表示导入完成。",
            model=agent,
            dataset=EvalDataset(name=f"{title} session", samples=1),
            config=EvalConfig(),
        ),
        stats=EvalStats(started_at=started.isoformat(), completed_at=completed.isoformat()),
        samples=[EvalSample(
            id=agent, epoch=1, input=next(iter(user_inputs), source.name),
            target="", messages=messages,
        )],
        metadata={"import_only": True, "source_file": source.name},
    )
    stamp = started.strftime("%Y-%m-%dT%H-%M-%S")
    if live:
        destination = output / "codex-session.json"
        staging = output / ".codex-session.tmp"
        write_eval_log(log, staging, format="json")
        staging.replace(destination)
        viewer = output / ".viewer"
        viewer.mkdir(exist_ok=True)
        revision = viewer / ".revision.tmp"
        revision.write_text(str(destination.stat().st_mtime_ns), encoding="utf-8")
        revision.replace(viewer / "revision")
    else:
        write_eval_log(log, output / f"{stamp}_{agent}-replay_{log.eval.eval_id}.json", format="json")


if __name__ == "__main__":
    source, output = map(Path, sys.argv[1:3])
    if sys.argv[3:] == ["claude"]:
        import_claude(source, output)
    else:
        import_rollout(source, output, live=sys.argv[3:] == ["codex-live"])
