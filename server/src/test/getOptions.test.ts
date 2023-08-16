import { getOptions } from "../getOptions";
import { expect, describe, it } from "vitest";

describe("getOptions", () => {
    let arr = ["test", "test2", "--depth", "2", "--json", "./"];
    const result = { depth: "2", json: "./" };

    it("two Options", () => {
        const { depth, json  } = getOptions(arr);
        expect(depth).toBe(result.depth);
        expect(json).toBe(result.json);
    });

    it("one Option", () => {
        arr = ["test", "test2", "--depth", "2"];
        const { depth, json  } = getOptions(arr);
        expect(depth).toBe(result.depth);
        expect(json).toBe(undefined);
    });

    it("no Options", () => { 
        arr = ["test", "test2"];
        const { depth, json  } = getOptions(arr);
        expect(depth).toBe(undefined);
        expect(json).toBe(undefined);
        expect(getOptions(arr)).toStrictEqual({});
    });

});