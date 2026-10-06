#!/usr/bin/env python3
"""用参考记录生成压缩前后对照页 compare.html：不调用模型，离线可看。

用法：python3 compare.py [reference/<日期>-requests.json]   # 默认用最新一份参考记录
左栏是压缩请求里的完整历史（不含末尾的压缩提示），右栏是压缩后的第一次请求。
每条按去向标注：保留、移走、新增、重新注入。
"""
import glob
import html
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = "https://github.com/openai/codex/blob/a956835d020762cb2b570053af06f643a11c0ecc/codex-rs"
COMPACT_MARK = "CONTEXT CHECKPOINT COMPACTION"
SUMMARY_MARK = "Another language model started"


def body(item):
    return item.get("text") or item.get("output") or str(item.get("arguments") or item.get("note") or "")


def kind(item):
    """返回（类别, 显示名）。"""
    t, role, text = item["type"], item.get("role"), body(item)
    if t == "message" and role == "developer":
        return "ctx", "权限说明与 Skills"
    if t == "message" and role == "user" and text.startswith("<environment_context>"):
        return "ctx", "环境信息"
    if t == "message" and role == "user" and text.startswith(SUMMARY_MARK):
        return "summary", "交接摘要"
    if t == "message" and role == "user":
        return "user", "用户消息"
    if t == "message" and role == "assistant":
        return "assistant", "模型回答"
    if t.endswith("_output"):
        return "tool", "工具返回"
    if t.endswith("_call"):
        return "tool", "工具调用 · " + (item.get("name") or "")
    if t == "reasoning":
        return "assistant", "推理"
    return "other", t


def preview(text, n=90):
    text = " ".join(text.split())
    return text if len(text) <= n else text[:n] + "…"


def card(item, fate, note="", open_=False):
    cls, label = kind(item)
    text = body(item)
    fate_label = {"keep": "保留", "drop": "移走", "new": "新增", "inject": "重新注入"}[fate]
    extra = f'<p class="note">{html.escape(note)}</p>' if note else ""
    return (
        f'<li class="item k-{cls} f-{fate}">'
        f'<div class="row"><span class="tag">{html.escape(label)}</span><span class="fate">{fate_label}</span>'
        f'<span class="len">{len(text)} 字符</span></div>'
        f"{extra}"
        f'<details{" open" if open_ else ""}><summary>{html.escape(preview(text))}</summary>'
        f"<pre>{html.escape(text)}</pre></details></li>"
    )


def main():
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(sorted(glob.glob(str(HERE / "reference" / "*-requests.json")))[-1])
    data = json.loads(path.read_text())
    req = data["requests"]
    history = [i for i in req["compact_request"]["input"] if COMPACT_MARK not in body(i)]
    prompt = next(i for i in req["compact_request"]["input"] if COMPACT_MARK in body(i))
    after = req["after_compact"]["input"]
    answer = req["after_compact"].get("response_text", "")

    grep_note = "第 5 步追问的就是这份输出的首末行"
    left = []
    for i in history:
        cls, _ = kind(i)
        fate = "keep" if cls == "user" else "inject" if cls == "ctx" else "drop"
        has_grep = "11:" in body(i) and "className" in body(i) and "grep -n" not in body(i)
        note = grep_note if cls == "tool" and has_grep else "模型回答里贴出的 grep 原文同样移走" if cls == "assistant" and has_grep else ""
        left.append(card(i, fate, note))
    right = []
    for n, i in enumerate(after):
        cls, _ = kind(i)
        if cls == "summary":
            right.append(card(i, "new", "模型按压缩提示写的摘要，以一条 user 消息放进历史", open_=True))
        elif cls == "ctx":
            right.append(card(i, "inject"))
        elif n == len(after) - 1:
            right.append(card(i, "new", "第 5 步：禁止读文件后的追问"))
        else:
            right.append(card(i, "keep"))

    counts = {}
    for i in history:
        counts[kind(i)[1].split(" · ")[0]] = counts.get(kind(i)[1].split(" · ")[0], 0) + 1
    dropped = "、".join(f"{k} {v}" for k, v in counts.items() if k in ("工具调用", "工具返回", "模型回答", "推理"))

    page = TEMPLATE.format(
        source=html.escape(path.name),
        n_before=len(history),
        n_after=len(after),
        dropped=dropped,
        left="".join(left),
        right="".join(right),
        prompt=html.escape(body(prompt)),
        answer=html.escape(answer),
        src=SRC,
    )
    out = HERE / "compare.html"
    out.write_text(page)
    print(f"已生成 {out.relative_to(HERE.parents[3])}（{len(history)} → {len(after)} 条）")


TEMPLATE = """<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>压缩前后对照</title>
<style>
:root{{--bg:#F6F5F0;--panel:#FFFFFF;--ink:#1F2328;--muted:#5B6573;--line:#D9D7D0;
--keep:#2F6B4F;--keep-bg:#E6F1EA;--drop:#9A3B2E;--drop-bg:#F6E7E3;--new:#7A5A10;--new-bg:#F7EFD9;--inject:#3D5A80;--inject-bg:#E5ECF4;color-scheme:light}}
@media (prefers-color-scheme:dark){{:root:not([data-theme="light"]){{--bg:#16181B;--panel:#1F2226;--ink:#E7E5DF;--muted:#9AA3AE;--line:#33373D;
--keep:#7CC39C;--keep-bg:#1E3329;--drop:#E59383;--drop-bg:#3A2420;--new:#E2C06E;--new-bg:#3A311C;--inject:#94B4DA;--inject-bg:#1F2B3A;color-scheme:dark}}}}
:root[data-theme="dark"]{{--bg:#16181B;--panel:#1F2226;--ink:#E7E5DF;--muted:#9AA3AE;--line:#33373D;
--keep:#7CC39C;--keep-bg:#1E3329;--drop:#E59383;--drop-bg:#3A2420;--new:#E2C06E;--new-bg:#3A311C;--inject:#94B4DA;--inject-bg:#1F2B3A;color-scheme:dark}}
*{{box-sizing:border-box}}
body{{margin:0;background:var(--bg);color:var(--ink);font:15px/1.6 -apple-system,BlinkMacSystemFont,"PingFang SC","Noto Sans SC","Microsoft YaHei",sans-serif}}
main{{max-width:1240px;margin:0 auto;padding:32px 20px 56px}}
h1{{font-size:28px;margin:0 0 6px}}
.meta{{color:var(--muted);margin:0 0 20px}}
.lead{{font-size:17px;max-width:880px;margin:0 0 18px}}
.legend{{display:flex;flex-wrap:wrap;gap:8px 16px;margin:0 0 24px;padding:0;list-style:none}}
.legend li{{display:flex;align-items:center;gap:6px;color:var(--muted)}}
.legend b{{display:inline-block;padding:1px 8px;border-radius:4px;font-weight:600}}
.cols{{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}}
@media (max-width:820px){{.cols{{grid-template-columns:1fr}}}}
h2{{font-size:19px;margin:0 0 4px}}
.sub{{color:var(--muted);margin:0 0 12px;font-size:14px}}
ol{{list-style:none;margin:0;padding:0;display:grid;gap:6px}}
.item{{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--line);border-radius:6px;padding:8px 12px}}
.row{{display:flex;flex-wrap:wrap;align-items:center;gap:8px}}
.tag{{font-weight:600}}
.fate{{font-size:13px;padding:0 8px;border-radius:4px}}
.len{{margin-left:auto;font-size:12px;color:var(--muted)}}
.note{{margin:4px 0 0;font-size:13px;font-weight:600}}
details summary{{cursor:pointer;color:var(--muted);font-size:13px;margin-top:2px;overflow-wrap:anywhere}}
pre{{white-space:pre-wrap;overflow-wrap:anywhere;font:12.5px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace;margin:8px 0 2px;max-height:420px;overflow:auto;background:var(--bg);padding:10px;border-radius:4px}}
.f-keep{{border-left-color:var(--keep)}}.f-keep .fate,.legend .keep{{color:var(--keep);background:var(--keep-bg)}}
.f-drop{{border-left-color:var(--drop);opacity:.72}}.f-drop .fate,.legend .drop{{color:var(--drop);background:var(--drop-bg)}}
.f-drop .tag{{text-decoration:line-through;text-decoration-color:var(--drop)}}
.f-new{{border-left-color:var(--new)}}.f-new .fate,.legend .new{{color:var(--new);background:var(--new-bg)}}
.f-inject{{border-left-color:var(--inject)}}.f-inject .fate,.legend .inject{{color:var(--inject);background:var(--inject-bg)}}
.f-drop .note{{color:var(--drop)}}.f-new .note{{color:var(--new)}}
section.extra{{margin-top:28px;background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:14px 16px}}
section.extra h2{{margin-bottom:8px}}
footer{{margin-top:24px;color:var(--muted);font-size:13px}}
a{{color:var(--inject)}}
</style></head>
<body><main>
<h1>压缩前后，请求里还剩什么</h1>
<p class="meta">第 2 章 p27 配套 · 数据来自 {source}（2026-10-05 讲师第 1 次运行，Codex 0.160.0，clean-codex.sh / MiniMax，本地压缩）· 不调用模型</p>
<p class="lead">左边是执行 <code>/compact</code> 时的完整历史，共 {n_before} 条；右边是压缩后下一次请求的全部输入，共 {n_after} 条。被移走的有：{dropped}。工具返回原文能否留下，取决于右边那份交接摘要有没有抄进去。</p>
<ul class="legend">
<li><b class="keep">保留</b>用户消息原文</li>
<li><b class="drop">移走</b>工具调用、工具返回、模型回答、推理</li>
<li><b class="new">新增</b>交接摘要、新问题</li>
<li><b class="inject">重新注入</b>权限说明、Skills、环境信息</li>
</ul>
<div class="cols">
<section><h2>压缩前 · {n_before} 条</h2><p class="sub">系统指令在单独的 instructions 字段，前后相同，未列出</p><ol>{left}</ol></section>
<section><h2>压缩后 · {n_after} 条</h2><p class="sub">顺序：用户消息 → 摘要 → 初始上下文 → 新问题</p><ol>{right}</ol></section>
</div>
<section class="extra"><h2>压缩提示（追加在历史末尾）</h2><details><summary>展开原文</summary><pre>{prompt}</pre></details></section>
<section class="extra"><h2>第 5 步的回答</h2><details open><summary>模型只凭摘要和用户消息作答</summary><pre>{answer}</pre></details></section>
<footer>哪些条目被保留由源码决定：<a href="{src}/core/src/compact.rs">core/src/compact.rs</a>（rust-v0.160.0）；压缩提示见 <a href="{src}/prompts/templates/compact/prompt.md">prompts/templates/compact/prompt.md</a>。摘要内容每次不同，5 次运行的汇总见同目录 README.md。</footer>
</main></body></html>
"""

if __name__ == "__main__":
    main()
