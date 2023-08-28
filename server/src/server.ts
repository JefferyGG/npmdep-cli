import Koa from "koa";
import fs from "fs";
import { getOptions } from "./getOptions";
import { analyze } from "./analyze";
import { handleNodes, handleLinks } from "./process";
const path = require("path");
const serve = require("koa-static");

const app = new Koa();
//获取环境变量中的参数
const anaDir = process.env.ANA_DIR;


const { json: outpath } = getOptions(JSON.parse(process.env.CLI_ARGV));
let{depth} = getOptions(JSON.parse(process.env.CLI_ARGV));
if (!depth) {
  depth = "300";//depth默认值
}

//初步分析
const { result: jsonData, links, topDeps} = analyze(anaDir, parseInt(depth));


//仅输出json
if (outpath) {
  const exportJson = jsonData;
  const uniqueArr = [...new Set(exportJson.repeatNodes)];
  exportJson["repeatNodes"] = uniqueArr;
  const jsonStr = JSON.stringify(exportJson, null, 2);
  const op = path.join(anaDir, outpath, "deps-trees.json");
  fs.writeFile(op, jsonStr, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  
  
} else { 

  //进一步分析（生成渲染数据）
  handleNodes(anaDir, jsonData.repeatNodes, topDeps);
  handleLinks(links);

  app.use(serve(path.join(__dirname, "../public")));

  app.listen(3000);

  console.log("Service started:  http://localhost:3000");
}




