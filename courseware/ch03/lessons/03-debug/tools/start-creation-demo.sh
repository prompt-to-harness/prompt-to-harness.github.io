#!/usr/bin/env bash
# Instructor launcher; keeps each demonstration's workspace and system skills isolated.
set -euo pipefail
case_name="${1:-}"
case "$case_name" in direct|creator|reference) ;; *) echo 'Usage: start-creation-demo.sh direct|creator|reference [recording-root]' >&2; exit 2;; esac
repo_root="$(cd "$(dirname "$0")/../../../../.." && pwd)"
recording_root="${2:-$repo_root/lab-runs/ch33-create-three-20261118/recording}"
case_workspace="$recording_root/$case_name"
[ -f "$case_workspace/source-dialogue.md" ] || { echo '先运行 prepare-creation-demos.py 准备输入。' >&2; exit 1; }
export CLEAN_CODEX_HOME="$recording_root/homes/$case_name"
mkdir -p "$CLEAN_CODEX_HOME"
CLEAN_CODEX_HOME="$(cd "$CLEAN_CODEX_HOME" && pwd)"
creator_args=()
if [ "$case_name" != creator ]; then
  disabled_config="$(python3 - "$CLEAN_CODEX_HOME" <<'PY'
import json,sys
print('skills.config=[{path='+json.dumps(sys.argv[1]+'/.codex/skills/.system/skill-creator/SKILL.md')+',enabled=false}]')
PY
)"
  creator_args=(-c "$disabled_config")
fi
exec bash "$repo_root/tools/clean-codex.sh" -- "${creator_args[@]}" -C "$case_workspace"
