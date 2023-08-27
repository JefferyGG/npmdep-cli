import fg from "fast-glob";
import fs from "fs";

export const findPkgs = (anadir: string) => {
    const files = fg.sync("node_modules/**/package.json", {
        cwd: anadir,
        absolute: true,
    
    });

    const names: string[] = [];
    interface obj { name: string, value: string } 
    const nameVersions: obj[] = [];

    

    for (const file of files) {
        try {
            const pkg = JSON.parse(fs.readFileSync(file, "utf-8"));
            // 分析处理 pkg 的逻辑...
            if (pkg.name) {
                names.push(pkg.name);
                if (pkg.version) {
                    const obj: obj = { name: pkg.name, value:pkg.version };
                    nameVersions.push(obj);
                }
            }
        } catch (error) {
            console.error(`Error processing file ${file}: ${error.message}`);
            continue; // 跳过当前文件的处理，继续处理下一个文件
        }
        
        
    }
    return { names, nameVersions, files };
};    