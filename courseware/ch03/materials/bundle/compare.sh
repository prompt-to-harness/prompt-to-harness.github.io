#!/usr/bin/env bash
# 3.5 对比材料：同一个首页，分别懒加载一个最小 Phaser 场景和一个最小 React Three Fiber 场景，比较 build 产物。
# 用法：courseware/ch03/materials/bundle/compare.sh <带记忆翻牌的首页目录> [输出目录]
# 只测“引入引擎本身”的体积，不是完整游戏；两个场景各只画一个方块。
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"; SRC="${1:?首页目录}"; OUT="${2:-lab-runs/ch03-bundle}"
mkdir -p "$OUT"; OUT="$(cd "$OUT" && pwd)"
for v in base phaser r3f; do
  rm -rf "$OUT/$v"; cp -R "$SRC" "$OUT/$v"; rm -rf "$OUT/$v/node_modules" "$OUT/$v/dist" "$OUT/$v/.git"
  if [ "$v" != base ]; then
    cp "$HERE/$v-DodgeGame.tsx" "$OUT/$v/src/DodgeGame.tsx"
    python3 - "$OUT/$v/src/App.tsx" <<'PY'
import sys
p = sys.argv[1]; s = open(p).read()
s = "import { lazy, Suspense } from 'react'\nconst DodgeGame = lazy(() => import('./DodgeGame'))\n" + s
s = s.replace("</>", "  <Suspense fallback={null}><DodgeGame /></Suspense>\n    </>", 1)
open(p, "w").write(s)
PY
  fi
  (cd "$OUT/$v" && npm ci --no-audit --no-fund > /dev/null 2>&1)
  [ "$v" = phaser ] && (cd "$OUT/$v" && npm install phaser@3 --no-audit --no-fund > /dev/null 2>&1)
  [ "$v" = r3f ] && (cd "$OUT/$v" && npm install three @react-three/fiber --no-audit --no-fund > /dev/null 2>&1)
  (cd "$OUT/$v" && npm run build 2>&1 | grep -E 'dist/assets/.*\.js' | sed "s/^/$v  /")
done
