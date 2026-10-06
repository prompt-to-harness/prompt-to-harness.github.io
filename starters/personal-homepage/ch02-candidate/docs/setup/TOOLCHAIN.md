# 1.5 工具链与应用创建说明

1.1 环境页不需要 Node.js。以下版本用于 1.5，在人工确认 Prompt 和文件清单后才创建应用。此文件提供工具链约束，不提供首页实现或完整 Prompt 答案。

## 固定版本

沿用本仓库原有应用的直接依赖版本；不要使用 `latest`、`^` 或 `~` 替换。

| 项目 | 版本 |
| --- | --- |
| Node.js | 22.19.0（`.nvmrc`） |
| npm | 11.17.0 |
| react / react-dom | 19.1.1 |
| @types/react | 19.1.10 |
| @types/react-dom | 19.1.7 |
| @vitejs/plugin-react | 5.0.4 |
| typescript | 5.9.2 |
| vite | 7.3.6 |

使用 nvm 时可在项目根目录执行 `nvm install`、`nvm use`，随后用 `node --version` 和 `npm --version` 核对。安装 Node 不保证 npm 自动等于表中版本；npm 不符时先调整环境，不改项目源码掩盖问题。

## 创建前核对

- 已有通过确认的 `PROMPT_V1.md`、小计划与具体文件清单；CLI 基线通过。
- 在自己的项目根目录执行 `git status --short`，辨认并保留 1.1 改动、材料和证据。
- 允许创建的范围：根目录 `index.html`、`package.json`、`package-lock.json`、`vite.config.ts`、`tsconfig*.json` 与 `src/`。需要其他文件或依赖先说明并等待确认。
- 正式应用从根目录 `index.html` 进入，引用 `src/` 内的 React 入口；不要把环境页复制到 `public/` 或加入构建入口。
- 不在非空仓库直接运行会清空、覆盖或另建嵌套项目的初始化命令。由 Agent 按计划逐文件创建，保留 Starter 原有材料。

## 必需命令与验证

在创建的 `package.json` 中使用 ESM（`"type": "module"`），安排以下 scripts：

| script | 命令 | 用途 |
| --- | --- | --- |
| dev | `vite` | 开发服务 |
| build | `tsc -b && vite build` | TypeScript 检查与生产构建 |
| preview | `vite preview` | 预览已有构建结果 |

`package.json` 还要加一段 `overrides`，固定 vite 间接依赖的 rollup：

```json
"overrides": {
  "rollup": "4.63.6"
}
```

vite 只要求 rollup `^4.43.0`，安装时会取最新版。2026-10-03 排练时装到 4.64.0（2026-10-02 发布），29 个模块的首页 `vite build` 要约 2 分 30 秒；固定为 4.63.6 后约 0.5 秒，构建产物相同。上游修复并重新核验前保留这段配置，可用 `npm ls rollup` 核对实际版本。

按表中版本创建包清单并运行 `npm install`，生成本次实现的 `package-lock.json`。保存并审阅锁文件，后续使用 `npm ci`，不要反复删锁文件重装。根目录初始没有锁文件是因为正式应用在 1.5 才创建。

启动 `npm run dev`，打开终端实际显示的地址，检查已确认的文字、按钮行为和浏览器控制台。运行 `npm run build`，保存实际输出与退出状态，并核对 `dist/` 不含环境页或私人资料。`npm run preview` 只做本地预览，不发布。

依赖安装失败、版本不符或需要越界时保留报错，说明原因后停止；不擅自升级工具链或标记通过。

## 本次核验边界

2026-09-28 在 macOS 本地临时目录使用 Node 22.19.0、npm 11.17.0，以改造前仓库的锁文件和构建配置、最小 React 页面执行 `npm ci --no-audit --no-fund` 与 `npm run build`，两者退出状态均为 0。这证明该组已有依赖与配置在此环境可完成最小构建；检查目录独立于学员起点，未将应用代码放回 Starter。

安装输出包含 esbuild/fsevents 安装脚本审批提示；本次构建成功，未据此修改全局审批设置。

2026-10-03 又按第 1 章课件完整排练了一次 1.5（Node 22.19.0、npm 11.17.0），发现上述 rollup 构建变慢问题并以 `overrides` 处理。

学员首次创建应用后会生成新的传递依赖锁文件，必须实际构建验证。完整 AI 生成闭环、授课模型接入、Windows/Linux 以及学员首页的浏览器行为未由这次工具链检查验证。录制前仍需冻结并记录正式授课环境与课程发布 commit。
