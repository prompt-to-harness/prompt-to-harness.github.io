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
from playwright.sync_api import sync_playwright, expect

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
        # 3.2 rebuilds its reading data and evidence routes too; isolate the entire
        # chapter so no generated files or source edits can reach the lecturer's copy.
        shutil.copytree(ROOT / 'courseware/ch03', root / 'courseware/ch03')
        shutil.copytree(ROOT / 'tools/ch03-showcase', root / 'tools/ch03-showcase')
        server, base = start(root)
        try:
            for folder, selector, source in [('02-rules', '[data-scene="p07a"][data-part]', 'script.json'), ('03-debug', '[data-script-edit][data-screen]', 'screen-plan.js'), ('04-plugin', '[data-script-edit][data-scene]', 'script.json')]:
                print('Checking', folder, source, flush=True)
                url = base + '/courseware/ch03/lessons/' + folder + '/speaker.html'
                page = browser.new_page(); page.on('dialog', lambda d: (print('Dialog:', d.message, flush=True), d.dismiss())); page.goto(url)
                block = page.locator(selector).first
                page.wait_for_selector(selector + '[contenteditable="plaintext-only"]', state='attached')
                def source_contains(text):
                    return json.dumps(text, ensure_ascii=False)[1:-1] in (root / 'courseware/ch03/lessons' / folder / source).read_text()
                original = block.inner_text(); edited = original + '编辑验证'
                block.fill(edited); block.press('Enter')
                page.wait_for_selector(selector + '[data-state="saved"]', state='attached')
                assert source_contains(edited), (repr(edited), block.inner_text(), page.locator('.script-history').inner_text())
                page.reload(); page.wait_for_selector(selector + '[contenteditable="plaintext-only"]', state='attached')
                assert block.inner_text() == edited
                block.fill('撤销验证'); block.press('Escape'); assert block.inner_text() == edited
                # Saved history survives refresh and writes undo/redo back to the source.
                undo = page.get_by_role('button', name='撤销已保存修改', exact=True)
                redo = page.get_by_role('button', name='重做', exact=True)
                def wait_text(locator, text):
                    expect(locator).to_have_attribute('data-state', 'saved')
                    expect(locator).to_have_text(text)
                    expect(page.locator('.script-history button:disabled')).not_to_have_count(2)
                undo.click()
                wait_text(block, original)
                assert not source_contains(edited)
                page.reload(); page.wait_for_selector(selector + '[contenteditable="plaintext-only"]', state='attached')
                redo.click(); wait_text(block, edited)
                # Shortcuts work with focus outside the editor, as after Enter or navigation.
                page.keyboard.press('Meta+z'); wait_text(block, original)
                page.keyboard.press('Meta+Shift+z'); wait_text(block, edited)
                page.keyboard.press('Control+z'); wait_text(block, original)
                page.keyboard.press('Control+y'); wait_text(block, edited)
                # Unsaved native typing undo must not consume a saved transaction.
                block.click(); block.press('End'); block.press('x'); block.press('ControlOrMeta+z')
                expect(block).to_have_text(edited, use_inner_text=True)
                block.press('ControlOrMeta+Shift+z')
                expect(block).not_to_have_text(edited)
                block.press('Escape')
                # Cross-paragraph transactions undo in save order, regardless of current focus.
                second = page.locator(selector).nth(1)
                second_original = second.inner_text()
                second.fill(second_original + '跨段验证'); second.press('Enter')
                wait_text(second, second_original + '跨段验证')
                if folder == '02-rules':
                    page.locator('a[href="#unit-4"]').first.click()
                undo.click(); wait_text(second, second_original)
                undo.click(); wait_text(block, original)
                redo.click(); wait_text(block, edited)
                redo.click(); wait_text(second, second_original + '跨段验证')
                undo.click(); wait_text(second, second_original)
                # Failed undo leaves both text and history untouched and is retryable.
                page.route('**/__script/edit', lambda route: route.fulfill(status=503,
                    content_type='application/json', body='{"error":"暂时不可用"}'))
                undo.click()
                expect(page.locator('.script-history [role="status"]')).to_have_text('暂时不可用')
                expect(undo).to_be_enabled(); assert block.inner_text() == edited
                page.unroute('**/__script/edit')
                undo.click(); wait_text(block, original)
                redo.click(); wait_text(block, edited)
                # A new edit after undo starts a new branch, without resurrecting old redo.
                undo.click(); wait_text(block, original)
                block.fill(edited); block.press('Enter')
                expect(undo).to_be_enabled(); expect(redo).to_be_disabled()
                # Another tab saves first: original tab must offer conflict resolution.
                other = browser.new_page(); other.goto(url)
                other.wait_for_selector(selector + '[contenteditable="plaintext-only"]', state='attached')
                remote = other.locator(selector).first
                remote.fill(edited + '另一窗口'); remote.press('Enter')
                other.wait_for_selector(selector + '[data-state="saved"]', state='attached')
                # Undo must not overwrite a newer save from another window.
                undo.click()
                expect(page.locator('.script-history [role="status"]')).to_contain_text('源文件已在别处修改')
                assert source_contains(edited + '另一窗口')
                assert block.inner_text() == edited
                block.fill(edited + '本窗口'); block.press('Enter')
                page.wait_for_selector('dialog.script-conflict')
                assert '另一窗口' in page.locator('dialog pre').inner_text()
                page.get_by_label('本次要保存的文字').fill(original)
                page.get_by_text('保存整理后的这一段', exact=True).click()
                page.wait_for_selector(selector + '[data-state="saved"]', state='attached')
                assert block.inner_text() == original
                # A conflict resolution records the actual server value as the undo baseline.
                undo.click(); wait_text(block, edited + '另一窗口')
                redo.click(); wait_text(block, original)
                page.set_viewport_size({'width': 390, 'height': 850})
                box = page.locator('.script-history').bounding_box()
                assert box['x'] >= 0 and box['x'] + box['width'] <= 390
                page.close(); other.close()
                # Simulate public static hosting: a missing API must never enable editing.
                page = browser.new_page(); page.route('**/__script/ping', lambda route: route.fulfill(status=404, body='not found'))
                page.goto(url); page.wait_for_selector('.edit-banner', state='attached')
                assert page.locator('[contenteditable]').count() == 0
                assert page.locator('.script-history').count() == 0
                page.close()
            print('Isolated saves: PPT, standalone narration and template adapter; reload, saved undo/redo, shortcuts, native undo, failed saves, conflict and unavailable API passed', flush=True)
        finally:
            stop(server)
    browser.close()
