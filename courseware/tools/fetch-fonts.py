#!/usr/bin/env python3
"""按 fonts.json 下载源字体与许可证到 .font-sources/（不提交），并校验 sha256。

首次添加或更换字体时用 --record 把实际 sha256 写回 fonts.json。
"""
import argparse
import hashlib
import json
import urllib.parse
import urllib.request
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--record", action="store_true", help="把下载文件的 sha256 写回 fonts.json")
args = parser.parse_args()

repo = Path(__file__).resolve().parents[2]
manifest_path = Path(__file__).with_name("fonts.json")
manifest = json.loads(manifest_path.read_text())
dest = repo / ".font-sources"
dest.mkdir(exist_ok=True)
base = "https://raw.githubusercontent.com/google/fonts/" + manifest["source_commit"] + "/"

for font in manifest["fonts"]:
    for key in ("path", "license"):
        rel = font[key]
        target = dest / font["id"] / Path(rel).name
        target.parent.mkdir(exist_ok=True)
        if not target.exists():
            url = base + urllib.parse.quote(rel)
            print("下载", url)
            urllib.request.urlretrieve(url, target)
        digest = hashlib.sha256(target.read_bytes()).hexdigest()
        field = key + "_sha256"
        if args.record:
            font[field] = digest
        elif font.get(field) and font[field] != digest:
            raise SystemExit(f"{target}: sha256 不符，期望 {font[field]}，实际 {digest}")
        print(f"{font['id']:6} {target.name:32} {target.stat().st_size / 1e6:6.2f} MB  {digest[:12]}")

if args.record:
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n")
    print("已写回 fonts.json")
