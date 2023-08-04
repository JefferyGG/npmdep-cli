#!/usr/bin/env node

'use strict';

process.title = 'cli';
require('commander')
    .usage('<command> [options]')
    .version(require('../package').version)
    .description('package依赖分析工具')
    .command('analyze', '启动')
    .parse(process.argv);