"""Convert Codex rollout messages to an Inspect EvalLog in the optional uv runtime."""

from datetime import datetime, timezone
import json
from pathlib import Path
import sys

from inspect_ai.log import EvalConfig, EvalDataset, EvalLog, EvalSample, EvalSpec, EvalStats, write_eval_log
from inspect_ai.model import ChatMessageAssistant, ChatMessageTool, ChatMessageUser
from inspect_ai.tool import ToolCall


def import_rollout(source: Path, output: Path) -> None:
    messages, calls = [], {}
    user_inputs = []
    started = completed = datetime.fromtimestamp(source.stat().st_mtime, timezone.utc)
    with source.open() as entries:
        for line, entry in enumerate(entries, 1):
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
    if not messages:
        raise ValueError(f"未识别到会话消息：{source.name}")

    log = EvalLog(
        status="success",
        eval=EvalSpec(
            created=started.isoformat(),
            task="codex-replay",
            task_display_name="Codex 会话回放",
            task_description="从既有会话导入。success 表示导入完成。",
            model="codex",
            dataset=EvalDataset(name="Codex rollout", samples=1),
            config=EvalConfig(),
        ),
        stats=EvalStats(started_at=started.isoformat(), completed_at=completed.isoformat()),
        samples=[EvalSample(
            id="codex", epoch=1, input=next(iter(user_inputs), source.name),
            target="", messages=messages,
        )],
        metadata={"import_only": True, "source_file": source.name},
    )
    stamp = started.strftime("%Y-%m-%dT%H-%M-%S")
    write_eval_log(log, output / f"{stamp}_codex-replay_{log.eval.eval_id}.json", format="json")


if __name__ == "__main__":
    import_rollout(Path(sys.argv[1]), Path(sys.argv[2]))
