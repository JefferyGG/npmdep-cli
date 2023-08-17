import fs from "fs";
import path from "path";
//递归生成树状对象的工具函数
function setValue(obj: { [key: string]: any}, key: string, value: object) {
    for (const k in obj) {
      if (k === key) {
        obj[k] = value;
      } else if (typeof obj[k] === "object") {
        
        setValue(obj[k], key, value);
      }
    }
    return obj;
  }

export const analyze = (dir: string, maxCount?:number) => {
    const topPkg = JSON.parse( fs.readFileSync(path.join(dir,"package.json"),"utf-8"));
    const { dependencies: deps = {}, devDependencies: devDeps = {} } = topPkg;
    const topDeps = { ...deps, ...devDeps };
    //递归分析依赖关系
    function analyzeDeps(dependencies:any, visited:Set<string>, result: any, links:any) {
        // 遍历每个依赖
        for (const dependency in dependencies) {
        if (!visited.has(dependency)) {
            visited.add(dependency);
            const depJsonPath = path.join(dir, "node_modules", dependency, "package.json");
            //路径是否有效
            if (!fs.existsSync(depJsonPath)) {
              continue;
            }
            const depJson = JSON.parse(fs.readFileSync(depJsonPath, "utf-8"));
            const depDeps = depJson.dependencies || {};
            
            // 添加依赖关系到结果中
            const dependencyDetil = {
                version: depJson.version,
                dependencies: depDeps
            };
            if (Object.keys(topDeps).includes(dependency)) {
            result[dependency] = dependencyDetil;
            }
            
          setValue(result, dependency, dependencyDetil);
          //保存关系
          links[dependency] = [];
          const dp = Object.keys(depDeps);
          links[dependency] = links[dependency].concat(dp);
          
            // 递归遍历上游依赖
            if (maxCount === undefined || maxCount > 0) {
              if (maxCount !== undefined) {
                maxCount--;//控制递归次数
              }
            analyzeDeps(depDeps, visited, result, links);
          }
            
        } else {
          result.repeatNodes.push(dependency);
        }
        }
    }
    
    // 从根目录的 package.json 开始分析依赖关系
    function mian(topDeps:object) {
        const visited :Set<string>= new Set();
        const result: { repeatNodes: string[] } = { repeatNodes: [] };
        const links: { [key: string]: string[] } = {};
        
        
        
        analyzeDeps(topDeps, visited, result, links);
        
      return { result: result, links: links };
    }
        
    // 根据 topDeps 调用分析函数
  const  { result: result, links: links } = mian(topDeps);
        
  return { result: result, links: links };

};