#!/usr/bin/env node
// 讲师用：一次运行结束后，在被改的项目里收尾，生成 run.json、diff.patch 和可试玩的构建产物 dist/。
// 交互运行、模拟学员和批量运行都用它，所有执行方式产出同一种 run.json，用 driver 区分（格式见课程实验台提案）。
//
// 用法（在项目目录里运行，或用 --repo 指定）：
//   node tools/lab-collect.mjs --start <开始前的提交> --codex-home <目录> --group <组名> --out <输出目录>
//     [--driver human|simulated-user-local|promptfoo|simulated-user] [--prompt <说明>] [--repo <项目目录>]
//
// --codex-home 可以是 clean-codex 的 HOME（含 .codex/sessions），也可以是 CODEX_HOME（含 sessions）
// 只按字段白名单写 run.json：不含会话原文、本机路径和账号信息（ChatGPT 登录时会话记录里有 creator_account_id 等字段）。
// diff 用临时索引计算，不动项目自己的暂存区；构建用相对路径（--base ./），产物放进任意子目录都能打开。
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), []),
);
if (!args.start || !args['codex-home'] || !args.group || !args.out) {
  console.error('需要 --start <提交> --codex-home <目录> --group <组名> --out <输出目录>');
  process.exit(2);
}
const repo = path.resolve(args.repo || '.');
const out = path.resolve(args.out);
const home = path.resolve(args['codex-home']);

const run = (cmd, a, opts = {}) => {
  try {
    return { ok: true, out: execFileSync(cmd, a, { cwd: repo, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts }) };
  } catch (e) {
    return { ok: false, out: `${e.stdout || ''}${e.stderr || ''}` };
  }
};

// 1. 代码改动：相对开始前的提交，含未跟踪文件
fs.mkdirSync(out, { recursive: true });
const tmpIndex = path.join(out, '.index');
const env = { ...process.env, GIT_INDEX_FILE: tmpIndex };
run('git', ['read-tree', args.start], { env });
run('git', ['add', '-A'], { env });
const diff = run('git', ['diff', '--cached', args.start], { env }).out;
const files = run('git', ['diff', '--cached', '--name-only', args.start], { env }).out.split('\n').filter(Boolean);
const stat = run('git', ['diff', '--cached', '--shortstat', args.start], { env }).out.trim();
fs.rmSync(tmpIndex, { force: true });
fs.writeFileSync(path.join(out, 'diff.patch'), diff);

// 2. 检查与构建
const tsc = run('npx', ['tsc', '-b']);
const build = run('npx', ['vite', 'build', '--base', './', '--outDir', path.join(out, 'dist'), '--emptyOutDir']);

// 3. 会话记录：工作目录是本项目、且最晚的那份 Codex 会话
const sessionsDir = [path.join(home, '.codex', 'sessions'), path.join(home, 'sessions')].find((d) => fs.existsSync(d));
const rollouts = sessionsDir
  ? fs.readdirSync(sessionsDir, { recursive: true }).filter((f) => f.endsWith('.jsonl')).map((f) => path.join(sessionsDir, f))
  : [];
let session = null;
for (const f of rollouts.sort()) {
  const first = JSON.parse(fs.readFileSync(f, 'utf8').split('\n')[0]);
  const cwd = first.payload && first.payload.cwd;
  if (cwd && fs.existsSync(cwd) && fs.realpathSync(cwd) === fs.realpathSync(repo)) session = f;
}
const s = { prompts: [], tool_calls: 0, turns: 0, model: null, effort: null, codex: null, tokens: null, id: null, last_message: null };
if (session) {
  for (const line of fs.readFileSync(session, 'utf8').split('\n').filter(Boolean)) {
    const e = JSON.parse(line);
    const p = e.payload || {};
    if (e.type === 'session_meta') { s.id = p.id; s.codex = p.cli_version || null; }
    if (e.type === 'turn_context') {
      const cm = (p.collaboration_mode && p.collaboration_mode.settings) || {};
      s.model = p.model || cm.model || s.model;
      s.effort = p.effort || cm.reasoning_effort || s.effort || '默认（未显式设置）';
    }
    // 会话记录不写批准事件（code mode 下批准发生在嵌套调用里），批准次数要看屏幕或 claude-tap，这里不记
    if (e.type === 'response_item' && /(function|custom_tool)_call$/.test(p.type || '')) s.tool_calls += 1;
    if (e.type === 'event_msg' && p.type === 'item_completed' && p.item && p.item.type === 'UserMessage') {
      s.prompts.push(p.item.content.filter((c) => c.type === 'text').map((c) => c.text).join('\n'));
    }
    if (e.type === 'event_msg' && p.type === 'task_complete') { s.turns += 1; s.last_message = p.last_agent_message || s.last_message; }
    if (e.type === 'event_msg' && p.type === 'token_count' && p.info) s.tokens = p.info.total_token_usage;
  }
}

const result = {
  run_json_version: 1,
  driver: args.driver || 'human',
  group: args.group,
  prompt: args.prompt || null,
  start_commit: run('git', ['rev-parse', args.start]).out.trim(),
  session_id: s.id,
  codex: s.codex,
  model: s.model,
  reasoning_effort: s.effort,
  prompts: s.prompts,
  turns: s.turns,
  tool_calls: s.tool_calls,
  token_usage: s.tokens && { prompt: s.tokens.input_tokens, cached: s.tokens.cached_input_tokens, completion: s.tokens.output_tokens },
  changed_files: files,
  diff_stat: stat,
  typecheck_ok: tsc.ok,
  build_ok: build.ok,
  final_message: s.last_message,
};
fs.writeFileSync(path.join(out, 'run.json'), JSON.stringify(result, null, 2));
if (!build.ok) fs.writeFileSync(path.join(out, 'build.log'), build.out);
console.log(`run.json 已写到 ${out}：${s.prompts.length} 条输入，${s.tool_calls} 次工具调用，${files.length} 个文件改动，构建${build.ok ? '成功' : '失败'}`);
if (!session) console.log('没找到这个项目的 Codex 会话记录，prompts 等字段为空；检查 --codex-home');
