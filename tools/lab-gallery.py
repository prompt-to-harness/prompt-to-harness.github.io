"""讲师用：把若干次运行的 run.json 汇成一页对比，按组展示，每次运行嵌入可试玩的构建产物。

用法：
  python3 -I tools/lab-gallery.py --title "记忆翻牌运行对比" --out lab-runs/ch03-gallery.html <运行目录>...

每个运行目录里要有 run.json（tools/lab-collect.mjs 的输出格式），可选 diff.patch 与 dist/。
页面里的链接相对于 --out 所在目录；用 python3 -m http.server 在那个目录起服务打开（file:// 下 iframe 加载不了模块脚本）。
iframe 带 allow-same-origin，只用于讲师自己的运行；嵌入别人的页面时应指向对方自己的域名。
"""

import argparse
import html
import json
import os
from pathlib import Path

DRIVERS = {
    "human": "人交互",
    "simulated-user-local": "模拟学员（自建）",
    "simulated-user": "模拟学员（Harbor）",
    "simulated-user-promptfoo": "模拟学员（promptfoo）",
    "promptfoo": "promptfoo 自动",
}

ap = argparse.ArgumentParser()
ap.add_argument("--title", default="运行对比")
ap.add_argument("--out", required=True)
ap.add_argument("runs", nargs="+")
a = ap.parse_args()
out = Path(a.out).resolve()

runs = []
for d in a.runs:
    p = Path(d).resolve()
    if not (p / "run.json").exists():
        continue
    r = json.loads((p / "run.json").read_text())
    r["_rel"] = os.path.relpath(p, out.parent)
    r["_dist"] = (p / "dist" / "index.html").exists()
    r["_diff"] = (p / "diff.patch").exists()
    runs.append(r)

groups: dict[str, list] = {}
for r in runs:
    groups.setdefault(r.get("group") or "未分组", []).append(r)


def esc(s):
    return html.escape(str(s if s is not None else ""))


def card(i, r):
    tok = r.get("token_usage") or {}
    driver = r.get("driver") or "promptfoo"
    play = (
        f'<iframe src="{esc(r["_rel"])}/dist/index.html" sandbox="allow-scripts allow-same-origin" loading="lazy" title="第 {i} 次运行"></iframe>'
        if r["_dist"] and r.get("build_ok")
        else '<div class="fail">没有可试玩的页面</div>'
    )
    said = ""
    if r.get("prompts"):
        items = "".join(f"<li>{esc(p)}</li>" for p in r["prompts"])
        said = (f'<details><summary>实际输入（{len(r["prompts"])} 条）· 工具调用 {esc(r.get("tool_calls"))} · '
                f'推理档位 {esc(r.get("reasoning_effort"))}</summary><ol>{items}</ol></details>')
    files = "".join(f"<li><code>{esc(x)}</code></li>" for x in r.get("changed_files", []))
    diff = f'<a href="{esc(r["_rel"])}/diff.patch">diff.patch</a> · ' if r["_diff"] else ""
    ok = lambda v: "ok" if v else "bad"  # noqa: E731
    return f"""
<article class="card">
  <header><strong>第 {i} 次</strong><span class="tag">{esc(DRIVERS.get(driver, driver))}</span>
  <span class="{ok(r.get('build_ok'))}">构建{'成功' if r.get('build_ok') else '失败'}</span>
  <span class="{ok(r.get('typecheck_ok'))}">类型检查{'通过' if r.get('typecheck_ok') else '失败'}</span></header>
  {play}
  {said}
  <p class="meta">{esc(r.get('diff_stat'))} · 输入 {esc(tok.get('prompt', '?'))} token（缓存 {esc(tok.get('cached', '?'))}）· 输出 {esc(tok.get('completion', '?'))}</p>
  <details><summary>改动文件</summary><ul>{files}</ul></details>
  <details><summary>Codex 的最后回答</summary><pre>{esc(r.get('final_message'))}</pre></details>
  <p class="meta">{diff}会话 <code>{esc(r.get('session_id'))}</code></p>
</article>"""


sections = []
for g, rs in groups.items():
    first = rs[0]
    lead = first.get("prompt") or ((first.get("prompts") or [""])[0])
    cards = "".join(card(i + 1, r) for i, r in enumerate(rs))
    sections.append(f"""
<section>
  <h2>{esc(g)}</h2>
  <details open><summary>Prompt</summary><pre>{esc(lead)}</pre></details>
  <div class="grid">{cards}</div>
</section>""")

page = f"""<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{esc(a.title)}</title>
<style>
:root {{ --bg:#f6f7f9; --fg:#1d2330; --muted:#5b6475; --card:#fff; --line:#dde1e8; --ok:#1f7a3d; --bad:#b42318; }}
@media (prefers-color-scheme: dark) {{ :root {{ --bg:#14171c; --fg:#e7eaf0; --muted:#9aa3b2; --card:#1c2027; --line:#2c323c; --ok:#5ccb84; --bad:#ff8a80; }} }}
body {{ margin:0; padding:24px 16px; background:var(--bg); color:var(--fg); font:15px/1.6 system-ui,sans-serif; }}
main {{ max-width:1280px; margin:0 auto; }}
h1 {{ margin:0 0 4px; }} .lead {{ color:var(--muted); margin:0 0 24px; }}
section {{ margin:0 0 40px; }} pre {{ white-space:pre-wrap; background:var(--card); border:1px solid var(--line); padding:10px; border-radius:8px; font-size:13px; }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(380px,1fr)); gap:16px; }}
.card {{ background:var(--card); border:1px solid var(--line); border-radius:10px; padding:12px; }}
.card header {{ display:flex; gap:12px; align-items:baseline; margin-bottom:8px; flex-wrap:wrap; }}
.tag {{ font-size:12px; padding:1px 8px; border-radius:999px; border:1px solid var(--line); color:var(--muted); }}
iframe {{ width:100%; height:560px; border:1px solid var(--line); border-radius:6px; background:#fff; }}
.fail {{ height:120px; display:grid; place-items:center; color:var(--bad); border:1px dashed var(--line); border-radius:6px; }}
.ok {{ color:var(--ok); }} .bad {{ color:var(--bad); }} .meta {{ color:var(--muted); font-size:13px; margin:6px 0; }}
ol {{ margin:6px 0; padding-left:20px; font-size:13px; }} a {{ color:inherit; }}
@media (max-width:480px) {{ .grid {{ grid-template-columns:1fr; }} }}
</style></head><body><main>
<h1>{esc(a.title)}</h1>
<p class="lead">{len(runs)} 次运行，{len(groups)} 组。每张卡是一次真实运行的构建产物，可以直接试玩。</p>
{''.join(sections)}
</main></body></html>"""
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(page)
print(f"{len(runs)} 次运行，{len(groups)} 组 → {out}")
