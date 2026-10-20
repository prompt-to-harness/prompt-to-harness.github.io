#!/usr/bin/env python3
"""汇总 run-ab.sh 的结果：每次运行一行客观指标，再按 on / off 汇总。

用法：python3 -I courseware/ch02/materials/model-config/summarize.py <运行目录>
指标只来自记录文件（事件日志、diff、build 退出码），不看模型怎么自述。
"""
import json
import re
import statistics
import sys
from pathlib import Path

ITEMS = Path(__file__).resolve().parent.parent / "mainline" / "fixtures" / "experiences.txt"
CJK = re.compile(r"[一-鿿]{2,}")


def usage_and_tools(run):
    """累计所有步骤的 token 用量和命令执行次数。"""
    u = dict(input=0, cached=0, output=0, reasoning=0)
    tools = 0
    for f in run.glob("*.events.jsonl"):
        for line in f.read_text().splitlines():
            try:
                e = json.loads(line)
            except ValueError:
                continue
            if e.get("type") == "turn.completed":
                x = e.get("usage", {})
                u["input"] += x.get("input_tokens", 0)
                u["cached"] += x.get("cached_input_tokens", 0)
                u["output"] += x.get("output_tokens", 0)
                u["reasoning"] += x.get("reasoning_output_tokens", 0)
            if e.get("type") == "item.completed" and e.get("item", {}).get("type") == "command_execution":
                tools += 1
    return u, tools


def diff_facts(patch, items_text):
    """从 diff 里数出：改动文件、增删行、新增链接、依赖变化、不在原文里的新增中文。"""
    files, added, removed = [], [], []
    for line in patch.splitlines():
        if line.startswith("+++ b/"):
            files.append(line[6:])
        elif line.startswith("+") and not line.startswith("+++"):
            added.append(line[1:])
        elif line.startswith("-") and not line.startswith("---"):
            removed.append(line[1:])
    allowed = items_text + "\n".join(removed)  # 原文和被替换掉的旧内容里出现过的中文，不算新增
    new_text = sorted({s for l in added for s in CJK.findall(l) if s not in allowed})
    return dict(
        files=files, added=len(added), removed=len(removed),
        new_links=sum("href=" in l or "http" in l for l in added),
        deps_changed=any(f in ("package.json", "package-lock.json") for f in files),
        new_text=new_text,
    )


def items_present(run, items_text):
    """每条项目的名称和描述是否都逐字出现在最终源码里（只用文字，不改写）。"""
    src = "".join(p.read_text(errors="ignore") for p in (run / "repo" / "src").rglob("*") if p.is_file())
    ok = 0
    entries = [l.strip() for l in items_text.splitlines() if l.strip()]
    for l in entries:
        name, _, desc = l.partition("：")
        ok += (name in src) and (desc in src)
    return ok, len(entries)


def verdict(m):
    """这一次运行算不算“合格”：只看 p29 Prompt 里写明的约束，不掺耗时和 token（代价在表里单独比）。

    对应 Prompt：build 成功；先说计划、等确认再改；项目文字原文照用；不补写（新增中文要人看，先按不合格计）；
    不加链接、依赖；只改项目区（只动 src/ 下的文件）。超时的运行没有完成，也不合格。
    """
    return (
        m["build_ok"]
        and not m["timed_out"]
        and m["waited_for_plan"]
        and m["items_ok"] == m["items_total"]
        and not m["new_text"]
        and m["new_links"] == 0
        and not m["deps_changed"]
        and bool(m["files"])
        and all(f.startswith("src/") for f in m["files"])
    )


def collect(run):
    items_text = ITEMS.read_text()
    u, tools = usage_and_tools(run)
    patch = (run / "diff.patch").read_text() if (run / "diff.patch").exists() else ""
    d = diff_facts(patch, items_text)
    ok, total = items_present(run, items_text)
    secs = sum(int(p.read_text() or 0) for p in run.glob("*.seconds"))
    m = dict(
        build_ok=(run / "build.exit").exists() and (run / "build.exit").read_text().strip() == "0",
        waited_for_plan=(run / "confirm").exists() and (run / "confirm").read_text().strip() == "confirmed",
        items_ok=ok, items_total=total, tools=tools, seconds=secs,
        timed_out=any(run.glob("*.timeout")),
        tokens_total=u["input"] + u["output"], tokens=u, **d,
    )
    m["verdict"] = verdict(m)
    return m


def main():
    root = Path(sys.argv[1])
    rows = {"on": [], "off": []}
    print(f"{'运行':<7}{'build':<7}{'等确认':<7}{'项目文字':<9}{'文件':<5}{'+行/-行':<9}{'新链接':<7}{'依赖':<5}{'新增中文':<9}{'命令数':<7}{'秒':<6}{'token':<9}合格")
    for run in sorted(p for p in root.iterdir() if p.is_dir() and re.match(r"(on|off)-\d+$", p.name)):
        m = collect(run)
        rows[run.name.split("-")[0]].append(m)
        v = {True: "是", False: "否", None: "-"}[m["verdict"]]
        print(f"{run.name:<7}{'ok' if m['build_ok'] else 'FAIL':<7}{'是' if m['waited_for_plan'] else '否':<7}"
              f"{m['items_ok']}/{m['items_total']:<7}{len(m['files']):<5}{m['added']}/{m['removed']:<7}{m['new_links']:<7}"
              f"{'变' if m['deps_changed'] else '-':<5}{len(m['new_text']):<9}{m['tools']:<7}{m['seconds']:<6}{m['tokens_total']:<9}{v}"
              f"{'  (超时)' if m['timed_out'] else ''}")
    print("\n按配置汇总（中位数 / 比例）：")
    for cfg, ms in rows.items():
        if not ms:
            continue
        n = len(ms)
        f = lambda k: statistics.median(m[k] for m in ms)
        print(f"  {cfg:<4} n={n}  build 通过 {sum(m['build_ok'] for m in ms)}/{n}  先等确认 {sum(m['waited_for_plan'] for m in ms)}/{n}  "
              f"项目文字齐全 {sum(m['items_ok'] == m['items_total'] for m in ms)}/{n}  有新增中文 {sum(bool(m['new_text']) for m in ms)}/{n}  "
              f"命令数 {f('tools'):.0f}  用时 {f('seconds'):.0f}s  token {f('tokens_total'):.0f}")
    for cfg, ms in rows.items():
        extra = sorted({t for m in ms for t in m["new_text"]})
        if extra:
            print(f"  {cfg} 的新增中文（不在原文里，需人工看是不是编造）：{extra[:12]}")


if __name__ == "__main__":
    main()
