"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const path = require("path");
const serve = require("koa-static");
const app = new Koa();
const router = new Router();
//获取环境变量中的参数
const anaDir = process.env.ANA_DIR;
const arr = JSON.parse(process.env.CLI_ARGV);
// 存储提取出的参数
const params = {};
// 遍历数组
for (let i = 0; i < arr.length; i++) {
    // 判断元素是否以双横线开头（参数名称）
    if (arr[i].startsWith('--')) {
        const paramName = arr[i].slice(2); // 去除双横线前缀
        const paramValue = arr[i + 1];
        params[paramName] = paramValue;
        i++;
    }
}
// 解构赋值保存参数到变量中
const { depth, json } = params;
console.log(depth, json);
// app.use(async ctx => {
//     const depthIndex = process.argv.indexOf("--depth");
//     const jsonIndex = process.argv.indexOf("--json");
//     const depth = depthIndex !== -1 ? process.argv[depthIndex + 1] : null;
//     const json = jsonIndex !== -1;
//     // ctx.body = `depth: ${depth}, json: ${json}`;
//     ctx.body = process.argv;
// });
// app.use(serve(path.join(__dirname, "../public")));
app.listen(3000);
console.log("Service started:  http://localhost:3000");
//# sourceMappingURL=server.js.map