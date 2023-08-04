#!/usr/bin/env node

'use strict';

const path = require('path');
const { spawn } = require('child_process');

// 获取当前文件的上级目录
const currentDir = path.resolve(__dirname, '..');

// 启动子进程执行命令
const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'analyze'], {
  cwd: currentDir,
  stdio: 'inherit'
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