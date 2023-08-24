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
        const pkg = JSON.parse(fs.readFileSync(file, "utf-8"));
        if (pkg.name) {
            names.push(pkg.name);
            if (pkg.version) {
                const obj: obj = { name: pkg.name, value:pkg.version };
                nameVersions.push(obj);
            }
        }
        
        
    }
    return { names, nameVersions, files };
};    