"""Serve Inspect's own UI with refresh on saved Codex log changes."""

from pathlib import Path
import shutil
import sys

import uvicorn
from inspect_ai._view._dist import resolve_dist_directory
from inspect_ai._view.fastapi_server import (
    AsyncFilesystem,
    AsyncFilesystemMiddleware,
    resolve_viewer_network_policy,
    standalone_view_app,
)


REFRESH_SCRIPT = """
(async function refresh() {
    let revision;
    const waiting = document.getElementById("agent-lab-waiting");
    const viewer = document.getElementById("app");
    async function check() {
        try {
            const response = await fetch("./revision", { cache: "no-store" });
            if (response.ok) {
                const current = await response.text();
                if (revision !== undefined && current !== revision) {
                    window.location.reload();
                    return;
                }
                revision = current;
                waiting.hidden = current !== "waiting";
                viewer.hidden = !waiting.hidden;
            }
        } catch {
            // The local server may be temporarily unavailable.
        }
        setTimeout(check, 2000);
    }
    await check();
})();
"""


def serve(log_dir: Path, port: int) -> None:
    upstream = resolve_dist_directory()
    dist = log_dir / ".viewer"
    shutil.copytree(upstream, dist, dirs_exist_ok=True)
    index = (upstream / "index.html").read_text(encoding="utf-8")
    index = index.replace("</head>", '<script defer src="./agent-lab-live.js"></script></head>', 1)
    index = index.replace(
        '<div id="app"></div>',
        '<main id="agent-lab-waiting" hidden><h1>等待 Codex 会话</h1>'
        '<p>在终端发出第一条消息后，此页会自动显示会话记录。</p></main>'
        '<div id="app"></div>',
        1,
    )
    (dist / "index.html").write_text(index, encoding="utf-8")
    (dist / "revision").write_text("waiting", encoding="utf-8")
    (dist / "agent-lab-live.js").write_text(REFRESH_SCRIPT, encoding="utf-8")
    host = "127.0.0.1"
    app = standalone_view_app(
        log_dir=str(log_dir),
        network_policy=resolve_viewer_network_policy(bind_host=host, port=port),
        dist_dir=dist,
        recursive=False,
        trust_content=False,
    )
    uvicorn.run(AsyncFilesystemMiddleware(app, fs=AsyncFilesystem()), host=host, port=port,
                log_level="warning")


if __name__ == "__main__":
    serve(Path(sys.argv[1]), int(sys.argv[2]))
