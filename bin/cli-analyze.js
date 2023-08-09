#!/usr/bin/env node

'use strict';

const path = require('path');
const { spawn } = require('child_process');
const program = require('commander');
// 获取当前文件的上级目录
const currentDir = path.resolve(__dirname, '..');
//获取被分析目录（使用本工具的目录）
const anaDir = process.cwd();

program
  .option('--depth <n>', '设置深度')
  .option('--json <file-path>', '设置JSON文件路径')
  .parse(process.argv);
// 启动子进程执行命令
const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'analyze'], {
  cwd: currentDir,
  stdio: 'inherit',
  env: {//把option保存到环境变量中
    ...process.env,
    CLI_ARGV: JSON.stringify(process.argv.slice(2)),
    ANA_DIR: anaDir,
  }
});

// 监听子进程的退出事件
child.on('exit', (code, signal) => {
    if (signal) {
      console.log(`子进程被终止，信号: ${signal}`);
    } else if (code !== 0) {
      console.log(`子进程退出，退出码: ${code}`);
    } else {
      console.log('子进程正常退出');
    }
  });