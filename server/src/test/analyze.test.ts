import { analyze } from "../analyze";
import { expect, describe, it } from "vitest";


describe("analyze", () => {
    // const dir = "F:\\projectFiles\\vite-demo";
    const dir = "C:\\Users\\ASUS\\Desktop\\project\\myblog\\website";
    const {result,links} = analyze(dir, 1);
    const { repeatNodes, ...tree } = result;
    // console.log(result);
    require("fs").writeFileSync("test-result.json", JSON.stringify(result, null, 2));
    require("fs").writeFileSync("test-links.json", JSON.stringify(links, null, 2));
    it("analyze return", () => {
        expect(typeof (result)).toBe("object");
    });
    it("typeof tree", () => {
        expect(typeof (tree)).toBe("object");
    });
    it("typeof repeatNodes", () => {
        expect(typeof (repeatNodes)).toBe("object");
    });
    it("typeof links", () => {
        expect(typeof (links)).toBe("object");
    });



});