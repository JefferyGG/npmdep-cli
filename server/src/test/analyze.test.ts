import { analyze } from "../analyze";
import { expect, describe, it } from "vitest";


describe("analyze", () => {
    // const dir = "F:\\projectFiles\\vite-demo";
    const dir = "C:\\Users\\ASUS\\Desktop\\project\\myblog\\website";
    const result = analyze(dir);
    // console.log(result);
    // require("fs").writeFileSync("test.json", JSON.stringify(result, null, 2));
    it("analyze return", () => {
        expect(typeof (result)).toBe("object");
    });
    it("analyze depth", () => {
        expect(typeof (result)).toBe("object");
    });


});