from pathlib import Path
import shutil
root = Path(__file__).resolve().parent
out = root / "dist"
out.mkdir(exist_ok=True)
for name in ("index.html", "style.css", "main.js"):
    shutil.copy2(root / name, out / name)
print("Built:", out)
