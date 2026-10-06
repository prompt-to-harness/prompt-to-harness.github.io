#!/usr/bin/env python3
"""汇总多次 run-v1.sh 的结果，输出 Markdown 表，便于比较各轮差异、挑选冻结候选。

用法：python3 summarize.py <运行目录> [<运行目录> …]   # 例如 lab-runs/mainline/v1-run*
只读取每轮的 logs/，不改动任何东西。表中“由模型决定”的各列每轮可能不同；“由检查得到”的各列以 verify.py 与 git 为准。
"""
import json
import re
import sys
from pathlib import Path


def events(path):
    if not path.exists():
        return []
    out = []
    for line in path.read_text().splitlines():
        try:
            out.append(json.loads(line))
        except ValueError:
            pass
    return out


def commands(evts):
    return [e["item"].get("command", "") for e in evts
            if e.get("type") == "item.completed" and e.get("item", {}).get("type") == "command_execution"]


def seconds(steps, name):
    m = re.search(rf"{re.escape(name)} 完成，用时 (\d+) 秒", steps)
    return int(m.group(1)) if m else None


def row(run):
    log = run / "logs"
    steps = (log / "steps.log").read_text() if (log / "steps.log").exists() else ""
    p07 = (log / "2.1-p07.answer.md").read_text() if (log / "2.1-p07.answer.md").exists() else ""
    p07_cmds = " ".join(commands(events(log / "2.1-p07.events.jsonl")))
    plan = (log / "2.2-p29-plan.answer.md").read_text() if (log / "2.2-p29-plan.answer.md").exists() else ""
    review = json.loads((log / "review.json").read_text()) if (log / "review.json").exists() else {}
    diffstat = (log / "diffstat.txt").read_text().strip().splitlines()[-1:] if (log / "diffstat.txt").exists() else []
    confirm = (log / "2.2-confirm").read_text().strip() if (log / "2.2-confirm").exists() else ""
    checks = review.get("checks", {})
    return {
        "轮次": run.name,
        "2.1 读了 PROMPT_V1.md": "是" if "PROMPT_V1" in p07_cmds else "否",
        "2.1 回答指出“项目卡不跳转”是既有决定": "是" if re.search(r"PROMPT_V1[^\n]{0,80}(不跳转)|不跳转[^\n]{0,80}PROMPT_V1", p07) else "否",
        "2.1 引用讲师笔记 CHECKPOINT.md": "是" if "CHECKPOINT.md" in p07 else "否",
        "2.2 计划等确认": {"confirmed": "是", "edited-before-confirm": "否，直接改了"}.get(confirm, confirm or "—"),
        "2.2 计划提到改 src/App.tsx 以外的文件": "是" if re.search(r"(index\.css|index\.html|package\.json).{0,20}(修改|改动|新增)", plan) else "否",
        "diff": diffstat[0].strip() if diffstat else "—",
        "检查未通过": "、".join(k for k, ok in checks.items() if not ok) or ("无" if checks else "—"),
        "评审": review.get("verdict", "—"),
        "耗时（2.1 / 计划 / 执行，秒）": " / ".join(str(seconds(steps, n) or "—") for n in ("2.1-p07", "2.2-p29-plan", "2.2-p30-confirm")),
    }


def main():
    rows = [row(Path(p)) for p in sys.argv[1:] if Path(p, "logs").exists()]
    if not rows:
        sys.exit("没有找到运行目录")
    keys = list(rows[0])
    print("| 项目 | " + " | ".join(r["轮次"] for r in rows) + " |")
    print("| --- |" + " --- |" * len(rows))
    for k in keys[1:]:
        print(f"| {k} | " + " | ".join(str(r[k]) for r in rows) + " |")


if __name__ == "__main__":
    main()
