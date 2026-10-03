#!/usr/bin/env python3
"""按 fonts.json 为全部课件生成字体子集，输出到 courseware/shared/fonts/。

先运行 fetch-fonts.py 取得 .font-sources/。需要 fonttools 与 brotli：
    python3 -m venv /tmp/fontenv && /tmp/fontenv/bin/pip install fonttools brotli
    /tmp/fontenv/bin/python courseware/tools/subset-fonts.py
扫描范围：courseware/ 下（不含 archive）与 demos/parts/ 的 .js .html .css .md .svg 文字。
fonts.json 中 extra 为 gb2312-level1 的字体额外收入 GB2312 一级常用字（3755 个）作余量。
同时写出 courseware/tools/font-coverage.json（各字体已覆盖的字符），
check-courseware.py 用它拦住缺字，不需要安装 fonttools。
新增或修改课件文字后重跑；--check 只报告缺字，不写文件。
"""
import argparse
import json
import shutil
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
parser.add_argument("--check", action="store_true", help="只检查现有子集是否覆盖全部课件文字")
args = parser.parse_args()

tools = Path(__file__).resolve().parent
courseware = tools.parent
repo = courseware.parent
manifest = json.loads((tools / "fonts.json").read_text())
sources = repo / ".font-sources"
out = courseware / "shared" / "fonts"

roots = [courseware, repo / "demos" / "parts"]
text = "".join(
    p.read_text(errors="ignore")
    for root in roots
    for p in sorted(root.rglob("*"))
    if p.suffix in {".js", ".html", ".css", ".md", ".svg"} and "archive" not in p.parts and "fonts" not in p.parts
)
text += "".join(chr(i) for i in range(32, 127))
text += "←→↑↓↗＋−×÷✓✗·…—–，。；：！？“”‘’、（）「」《》【】〔〕￥％第章节上下页段步"
chars = {c for c in text if c.isprintable()}


def gb2312_level1():
    """GB2312 一级汉字（0xB0A1–0xD7F9），即 3755 个常用字。"""
    out = set()
    for hi in range(0xB0, 0xD8):
        for lo in range(0xA1, 0xFF):
            try:
                out.add(bytes([hi, lo]).decode("gb2312"))
            except UnicodeDecodeError:
                pass
    return out


EXTRA = {"gb2312-level1": gb2312_level1}

if args.check:
    missing_total = 0
    for font in manifest["fonts"]:
        for item in font["outputs"]:
            cmap = TTFont(out / item["file"]).getBestCmap()
            missing = sorted(c for c in chars if "一" <= c <= "鿿" and ord(c) not in cmap)
            if font["id"] == "mono":
                continue  # 等宽字体不含中文，中文回退到正文字体
            missing_total += len(missing)
            print(f"{item['file']:16} 缺 {len(missing)} 字 {''.join(missing[:40])}")
    raise SystemExit(1 if missing_total else 0)

out.mkdir(parents=True, exist_ok=True)
coverage = {}
for font in manifest["fonts"]:
    src = sources / font["id"] / Path(font["path"]).name
    wanted = chars | (EXTRA[font["extra"]]() if font.get("extra") else set())
    for item in font["outputs"]:
        tt = TTFont(src)
        if "fvar" in tt:
            tt = instancer.instantiateVariableFont(tt, {"wght": item.get("wght", 400)})
        options = subset.Options()
        options.flavor = "woff2"
        options.layout_features = ["*"]
        options.name_IDs = ["*"]
        sub = subset.Subsetter(options=options)
        sub.populate(text="".join(wanted))
        sub.subset(tt)
        coverage[font["id"]] = "".join(sorted(chr(c) for c in tt.getBestCmap()))
        tt.flavor = "woff2"
        tt.save(out / item["file"])
        print(f"{item['file']:16} {(out / item['file']).stat().st_size / 1024:7.1f} KB  ← {font['family']}")
    shutil.copy2(sources / font["id"] / "OFL.txt", out / f"LICENSE-{font['id']}.txt")
(tools / "font-coverage.json").write_text(json.dumps(
    {"_comment": "由 subset-fonts.py 生成：各字体子集实际包含的字符。check-courseware.py 据此检查缺字。", **coverage},
    ensure_ascii=False, indent=0) + "\n")
print(f"课件用到 {len(chars)} 个字符；输出 {out.relative_to(repo)} 与 courseware/tools/font-coverage.json")
