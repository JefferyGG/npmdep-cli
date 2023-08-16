import Koa from "koa";
import { getOptions } from "./getOptions";
import { exportJson } from "./exportJson";
const path = require("path");
const serve = require("koa-static");

const app = new Koa();
//获取环境变量中的参数
const anaDir = process.env.ANA_DIR;


const { json } = getOptions(JSON.parse(process.env.CLI_ARGV));

//初步分析


//仅输出json
if (json) {
  console.log("Success!");
  
} else { 

  //进一步分析（生成渲染数据）

  //数据输出到服务器并启动

  app.use(serve(path.join(__dirname, "../public")));

  app.listen(3000);

  console.log("Service started:  http://localhost:3000");
}




