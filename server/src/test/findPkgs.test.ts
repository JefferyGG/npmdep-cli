import { findPkgs } from "../findPkgs";
import { expect, test } from "vitest";

test("returns packages", async () => {
    const dir = "F:\\projectFiles\\vite-demo";
    const { names, nameVersions, files } = findPkgs(dir);
    // console.log(names);
    console.log(nameVersions);
    // console.log(files);
    
    expect(typeof names).toBe("object");
    

});