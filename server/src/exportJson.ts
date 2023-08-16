import fs from "fs";
import path from "path";
export const exportJson = (obj: object, outpath: string, filename: string) => {
    const op = path.join(outpath, filename);
    const json = JSON.stringify(obj);
    fs.writeFileSync(op, json, "utf8");
};
