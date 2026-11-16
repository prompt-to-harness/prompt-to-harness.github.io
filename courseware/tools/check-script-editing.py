#!/usr/bin/env python3
"""Check every speaker entry via the editor service; writes use isolated copies."""
import json
import http.client
import importlib.util
from functools import partial
import shutil
import subprocess
import sys
import tempfile
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]

def start(root):
    server = subprocess.Popen([sys.executable, str(root / 'tools/serve-courseware.py'), '--port', '0'], stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True)
    line = server.stdout.readline().strip()
    assert line.startswith('Courseware: '), line
    return server, line.removeprefix('Courseware: ').removesuffix('/courseware/')

def stop(server):
    server.terminate(); server.wait(timeout=10); server.stdout.close()

# An ordinary static server must be rejected before opening any browser.
class QuietStatic(SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass
with ThreadingHTTPServer(('127.0.0.1', 0), QuietStatic) as static:
    thread = threading.Thread(target=static.serve_forever, daemon=True); thread.start()
    try:
        result = subprocess.run(['sh', 'tools/edit-courseware.sh', '--local', str(static.server_port)], cwd=ROOT, capture_output=True, text=True, timeout=15)
        assert result.returncode != 0 and '不提供编辑接口' in result.stderr, result.stderr
    finally:
        static.shutdown(); thread.join()
print('Launcher rejects a static-only occupied port', flush=True)

with sync_playwright() as pw:
    browser = pw.chromium.launch()
    server, base = start(ROOT)
    try:
        # Simulate a LAN client at the HTTP handler boundary, without a second device.
        sys.path.insert(0, str(ROOT / 'tools'))
        spec = importlib.util.spec_from_file_location('edit_server', ROOT / 'tools/serve-courseware.py')
        module = importlib.util.module_from_spec(spec); spec.loader.exec_module(module)
        class RemoteHandler(module.Handler):
            def loopback_client(self): return False
            def log_message(self, *args): pass
        with ThreadingHTTPServer(('127.0.0.1', 0), partial(RemoteHandler, directory=str(ROOT))) as readonly:
            thread = threading.Thread(target=readonly.serve_forever, daemon=True); thread.start()
            try:
                remote = http.client.HTTPConnection('127.0.0.1', readonly.server_port)
                for method, route, expected in [('GET', '/__script/ping', 404), ('POST', '/__script/edit', 403), ('GET', '/courseware/ch03/lessons/03-debug/speaker.html', 200)]:
                    remote.request(method, route, body='{}' if method == 'POST' else None,
                                   headers={'Origin': base, 'Content-Type': 'application/json'})
                    response = remote.getresponse(); assert response.status == expected; response.read()
                remote.close()
            finally:
                readonly.shutdown(); thread.join()
        for path in sorted((ROOT / 'courseware').rglob('speaker.html')):
            page = browser.new_page()
            page.goto(base + '/' + str(path.relative_to(ROOT)))
            # This entry deliberately has no script, only a Discussion link.
            if path.parent.name == '05-game-studio':
                assert page.locator('#script, [data-script-edit]').count() == 0
            else:
                page.wait_for_selector('[contenteditable="plaintext-only"]', state='attached')
                assert page.locator('p.narration:not([contenteditable]), [data-script-edit]:not([contenteditable])').count() == 0, path
                assert page.locator('.operation[contenteditable], .stage-direction[contenteditable], .switch-cue[contenteditable]').count() == 0
            page.close()
        print('All speaker entries: editable source nodes; Discussion-only placeholder unchanged', flush=True)
    finally:
        stop(server)
    with tempfile.TemporaryDirectory() as tmp:
        root = Path(tmp)
        (root / 'tools').mkdir(); (root / 'courseware/tools').mkdir(parents=True)
        for name in ('serve-courseware.py', 'script_comments.py'):
            shutil.copy(ROOT / 'tools' / name, root / 'tools' / name)
        shutil.copy(ROOT / 'courseware/tools/rebuild-lesson.py', root / 'courseware/tools/rebuild-lesson.py')
        (root / 'courseware/shared').symlink_to(ROOT / 'courseware/shared', target_is_directory=True)
        for folder in ('03-debug', '04-plugin'):
            source = ROOT / 'courseware/ch03/lessons' / folder
            target = root / source.relative_to(ROOT); target.mkdir(parents=True)
            if folder == '04-plugin':
                shutil.copytree(source / 'tools', target / 'tools')
            for file in source.iterdir():
                if file.is_file() and file.suffix in ('.html', '.js', '.json', '.css'):
                    shutil.copy(file, target / file.name)
        server, base = start(root)
        try:
            for folder, selector, source in [('03-debug', '#reference [data-script-edit]', 'script.json'), ('03-debug', '[data-screen]', 'screen-plan.js'), ('04-plugin', '[data-script-edit]', 'script.json')]:
                print('Checking', folder, source, flush=True)
                url = base + '/courseware/ch03/lessons/' + folder + '/speaker.html'
                page = browser.new_page(); page.on('dialog', lambda d: (print('Dialog:', d.message, flush=True), d.dismiss())); page.goto(url)
                block = page.locator(selector).first
                page.wait_for_selector(selector + '[contenteditable="plaintext-only"]', state='attached')
                original = block.inner_text(); edited = original + '编辑验证'
                block.fill(edited); block.press('Enter')
                page.wait_for_selector(selector + '[data-state="saved"]', state='attached')
                assert edited in (root / 'courseware/ch03/lessons' / folder / source).read_text()
                page.reload(); page.wait_for_selector(selector + '[contenteditable="plaintext-only"]', state='attached')
                assert block.inner_text() == edited
                block.fill('撤销验证'); block.press('Escape'); assert block.inner_text() == edited
                # Another tab saves first: original tab must offer conflict resolution.
                other = browser.new_page(); other.goto(url)
                other.wait_for_selector(selector + '[contenteditable="plaintext-only"]', state='attached')
                remote = other.locator(selector).first
                remote.fill(edited + '另一窗口'); remote.press('Enter')
                other.wait_for_selector(selector + '[data-state="saved"]', state='attached')
                block.fill(edited + '本窗口'); block.press('Enter')
                page.wait_for_selector('dialog.script-conflict')
                assert '另一窗口' in page.locator('dialog pre').inner_text()
                page.get_by_label('本次要保存的文字').fill(original)
                page.get_by_text('保存整理后的这一段', exact=True).click()
                page.wait_for_selector(selector + '[data-state="saved"]', state='attached')
                assert block.inner_text() == original
                page.close(); other.close()
                # Simulate public static hosting: a missing API must never enable editing.
                page = browser.new_page(); page.route('**/__script/ping', lambda route: route.fulfill(status=404, body='not found'))
                page.goto(url); page.wait_for_selector('.edit-banner', state='attached')
                assert page.locator('[contenteditable]').count() == 0
                page.close()
            print('Isolated saves: PPT, standalone narration and template adapter; reload, Escape, conflict and unavailable API passed', flush=True)
        finally:
            stop(server)
    browser.close()
