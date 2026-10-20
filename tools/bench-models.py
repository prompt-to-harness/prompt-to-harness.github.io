#!/usr/bin/env python3
"""讲师用：测 MiniMax（或其他 responses 兼容端点）的真实响应速度。

和 tools/clean-codex.sh 用同一个接口（/v1/responses，流式），量：
  首事件   发出请求到收到第一个流式事件（网络 + 排队）
  首 token 到第一个推理或正文 delta（用户感觉到“开始动了”）
  总耗时   到流结束
  速度     输出 tokens / (总耗时 - 首 token)，tokens 取服务端 usage，没有则估算

两档负载：short（几十 token 输入）和 long（约 N 千 token 输入，模拟 Codex 带着上下文的一轮）。

用法：
  tools/bench-models.py                         # 默认模型，short+long 各 3 次
  tools/bench-models.py -n 5 -m MiniMax-M3.1-Flash -m 另一个模型
  tools/bench-models.py --base-url https://api.minimaxi.com/v1   # 对比国际站

密钥读环境变量 MINIMAX_API_KEY（可用 --key-env 改名），不打印、不写文件。
"""
import argparse, json, os, statistics, sys, time, urllib.request, urllib.error

DEFAULT_MODEL = "MiniMax-M3.1-Flash"
DEFAULT_BASE = "https://api.minimax.cn/v1"

SHORT = "用两三句话解释什么是 HTTP 缓存，不要列表。"


def long_prompt(kchars):
    filler = "".join(
        f"def handler_{i}(req):\n    # 处理第 {i} 类请求，校验参数后写入缓存\n"
        f"    return cache.set('k{i}', validate(req.args))\n\n"
        for i in range(kchars * 1000 // 120 + 1)
    )[: kchars * 1000]
    return f"下面是一段代码，读完后用三句话概括它的结构，不要逐行复述。\n\n{filler}"


def one_run(base, key, model, prompt, timeout):
    body = json.dumps({"model": model, "input": prompt, "stream": True,
                       "max_output_tokens": 400}).encode()
    req = urllib.request.Request(
        base.rstrip("/") + "/responses", data=body, method="POST",
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"})
    t0 = time.perf_counter()
    first_event = first_tok = None
    text_chars = 0
    out_tokens = None
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            for raw in r:
                line = raw.decode("utf-8", "replace").strip()
                if not line.startswith("data:"):
                    continue
                now = time.perf_counter() - t0
                if first_event is None:
                    first_event = now
                data = line[5:].strip()
                if data == "[DONE]":
                    continue
                try:
                    ev = json.loads(data)
                except ValueError:
                    continue
                typ = ev.get("type", "")
                if typ.endswith(".delta") and first_tok is None:
                    first_tok = now
                if typ == "response.output_text.delta":
                    text_chars += len(ev.get("delta", ""))
                if typ in ("response.completed", "response.incomplete"):
                    u = (ev.get("response") or {}).get("usage") or {}
                    out_tokens = u.get("output_tokens")
    except urllib.error.HTTPError as e:
        return {"error": f"HTTP {e.code}: {e.read()[:200].decode('utf-8', 'replace')}"}
    except Exception as e:  # 超时、连接中断等
        return {"error": f"{type(e).__name__}: {e}"}
    total = time.perf_counter() - t0
    if first_tok is None:
        return {"error": "没有收到任何 delta 事件"}
    if out_tokens is None:
        out_tokens = max(1, text_chars // 2)  # 粗估，标记在输出里
        est = True
    else:
        est = False
    gen = total - first_tok
    return {"first_event": first_event, "ttft": first_tok, "total": total,
            "tokens": out_tokens, "tps": out_tokens / gen if gen > 0 else None, "est": est}


def med(xs):
    xs = [x for x in xs if x is not None]
    return statistics.median(xs) if xs else None


def fmt(x, nd=2):
    return "-" if x is None else f"{x:.{nd}f}"


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("-m", "--model", action="append", help="模型名，可重复")
    ap.add_argument("-n", type=int, default=3, help="每档负载的次数（默认 3）")
    ap.add_argument("--base-url", default=DEFAULT_BASE)
    ap.add_argument("--key-env", default="MINIMAX_API_KEY")
    ap.add_argument("--long-k", type=int, default=12, help="long 档输入的千字符数（默认 12，约 4–6k token）")
    ap.add_argument("--timeout", type=int, default=120)
    a = ap.parse_args()

    key = os.environ.get(a.key_env)
    if not key:
        sys.exit(f"没有找到 {a.key_env}：请先 export（见 tools/clean-codex.sh 的说明）")
    loads = [("short", SHORT), (f"long~{a.long_k}k字符", long_prompt(a.long_k))]

    print(f"端点 {a.base_url}  每档 {a.n} 次  （时间单位：秒）")
    print(f"{'模型':<30}{'负载':<14}{'首事件':>8}{'首token':>9}{'总耗时':>8}{'tok/s':>8}{'最慢总耗时':>11}  失败")
    for model in a.model or [DEFAULT_MODEL]:
        for name, prompt in loads:
            runs = [one_run(a.base_url, key, model, prompt, a.timeout) for _ in range(a.n)]
            ok = [r for r in runs if "error" not in r]
            errs = [r["error"] for r in runs if "error" in r]
            est = " (tokens 为估算)" if any(r["est"] for r in ok) else ""
            print(f"{model:<30}{name:<14}"
                  f"{fmt(med([r['first_event'] for r in ok])):>8}"
                  f"{fmt(med([r['ttft'] for r in ok])):>9}"
                  f"{fmt(med([r['total'] for r in ok])):>8}"
                  f"{fmt(med([r['tps'] for r in ok]), 1):>8}"
                  f"{fmt(max([r['total'] for r in ok], default=None)):>11}"
                  f"  {len(errs)}/{a.n}{est}")
            if errs:
                print(f"    首个错误：{errs[0]}")


if __name__ == "__main__":
    main()
