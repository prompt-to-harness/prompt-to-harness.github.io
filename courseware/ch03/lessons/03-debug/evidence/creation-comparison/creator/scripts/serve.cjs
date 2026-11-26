#!/usr/bin/env node
/**
 * 零依赖静态服务器（只用 Node 标准库）。
 *
 * 为什么需要它：ES Modules 在 file:// 下会被 CORS 拦截，
 * 直接双击 index.html 打不开页面，必须走 http:// 源。
 *
 * 用法：
 *   node scripts/serve.cjs [目录] [端口]
 *   node scripts/serve.cjs . 8000
 *
 * 默认监听 127.0.0.1:8000，根目录为当前工作目录。
 * 路径穿越（../）会被拒绝并返回 403。
 */

'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.cjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

function send(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

/**
 * 构造请求处理函数。
 * @param {string} root 已解析的绝对路径，作为服务根目录
 * @returns {(req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse) => void}
 */
function createHandler(root) {
  return function handle(req, res) {
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch {
      return send(res, 400, 'Bad Request');
    }

    // 空字节会让 fs.stat 同步抛错，进程会挂掉——直接拒掉
    if (pathname.includes('\0')) {
      return send(res, 400, 'Bad Request');
    }

    if (pathname.endsWith('/')) pathname += 'index.html';

    const filePath = path.join(root, pathname);
    // 阻止 ../ 逃出根目录（path.relative 是可靠的包含性检查）
    const relative = path.relative(root, filePath);
    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      return send(res, 403, 'Forbidden');
    }

    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) return send(res, 404, 'Not Found');

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': MIME[ext] || 'application/octet-stream',
        'Content-Length': stat.size,
        'Cache-Control': 'no-store',
      });
      fs.createReadStream(filePath).pipe(res);
    });
  };
}

/**
 * @param {string} root
 * @returns {import('node:http').Server}
 */
function createServer(root) {
  return http.createServer(createHandler(path.resolve(root)));
}

module.exports = { createHandler, createServer };

if (require.main === module) {
  const root = path.resolve(process.argv[2] || '.');
  const port = Number(process.argv[3] || process.env.PORT || 8000);

  if (!Number.isInteger(port) || port < 0 || port > 65535) {
    console.error(`端口无效：${process.argv[3]}`);
    process.exit(1);
  }

  const server = createServer(root);

  server.listen(port, '127.0.0.1', () => {
    console.log(`静态服务器已启动：http://127.0.0.1:${port}/`);
    console.log(`根目录：${root}`);
    console.log('按 Ctrl+C 结束。');
  });
}
