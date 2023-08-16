import { exportJson } from "../exportJson";
import { expect, describe, afterEach, it } from "vitest";
import fs from "fs";

describe("exportToJson", () => {
  const testObj = { name: "John", age: 30, city: "New York" };
  const filename = "test.json";
  const path = "./";
  afterEach(() => {
    // 删除测试文件
    if (fs.existsSync(filename)) {
      fs.unlinkSync(filename);
    }
  });
  it("exports data to JSON file", () => {
    // 导出数据到JSON文件
    exportJson(testObj, path, filename);

    // 验证文件是否存在
    expect(fs.existsSync(filename)).toBe(true);

  });
});