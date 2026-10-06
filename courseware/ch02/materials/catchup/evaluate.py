#!/usr/bin/env python3
"""评估追赶实验的各轮结果，输出 Markdown 表。

用法：python3 evaluate.py <运行目录> [<运行目录> …]   # 例如 lab-runs/catchup/*-r*
运行目录名以学员起点开头（a-personal / b-only-1.4 / c-card-links），按起点检查是否保留了个人内容。
"""
import json
import re
import sys
from pathlib import Path


def load(p, default=None):
    try:
        return json.loads(p.read_text())
    except Exception:
        return default


def commands(events):
    out = []
    if not events.exists():
        return out
    for line in events.read_text().splitlines():
        try:
            e = json.loads(line)
        except ValueError:
            continue
        it = e.get("item", {})
        if e.get("type") == "item.completed" and it.get("type") == "command_execution":
            out.append(it.get("command", ""))
    return out


def evaluate(run):
    log, app = run / "logs", run / "repo"
    v = load(log / "verify.json", {"viewports": {}})
    wide = v["viewports"].get("1440x900", {})
    page_text = " ".join(" ".join(x.get("cards", [])) for x in v["viewports"].values()) + " " + str(wide.get("h1"))
    links = wide.get("links", [])
    status = (log / "status.txt").read_text().splitlines() if (log / "status.txt").exists() else []
    changed = sorted({l[3:] for l in status})
    prompt_v1 = (app / "PROMPT_V1.md").read_text() if (app / "PROMPT_V1.md").exists() else ""
    cmds = commands(log / "check.events.jsonl")
    build = (log / "build-exit").read_text().strip() if (log / "build-exit").exists() else "—"
    r = {
        "轮次": run.name,
        "确认前就改了": "是" if (log / "confirm").exists() and "before" in (log / "confirm").read_text() else "否",
        "克隆参考起点": "是" if any("git clone" in c for c in cmds) else "否",
        "build 成功": "是" if build == "0" else f"否（{build}）",
        "有项目区": "是" if wide.get("cards") else "否",
        "“查看项目”跳到 #projects": "是" if any(l.get("href") == "#projects" for l in links) else "否",
        "有项目卡决定": "是" if re.search(r"项目卡", prompt_v1) else "否",
        "参考起点进了仓库": "是" if any(re.search(r"ch02-start|course-starter", c) for c in changed) else "否",
        "改动文件": "、".join(changed) or "无",
    }
    kind = run.name.split("-r")[0]
    if kind.startswith("a-personal"):
        r["个人内容保留"] = "是" if ("林小雨" in page_text and "摄影日记" in page_text and "示例同学" not in page_text) else f"否（{page_text[:60]}）"
    elif kind.startswith("c-card-links"):
        r["个人内容保留"] = "是" if any(re.search(r"example.com/notes|linxiaoyu.github.io/notes", l.get("href") or "") for l in links) else "否（作品链接不见了）"
    else:
        r["个人内容保留"] = "—"
    return r


def main():
    rows = [evaluate(Path(p)) for p in sys.argv[1:] if Path(p, "logs").exists()]
    keys = list(rows[0])
    print("| 项目 | " + " | ".join(r["轮次"] for r in rows) + " |")
    print("| --- |" + " --- |" * len(rows))
    for k in keys[1:]:
        print(f"| {k} | " + " | ".join(str(r.get(k, "—")) for r in rows) + " |")


if __name__ == "__main__":
    main()
