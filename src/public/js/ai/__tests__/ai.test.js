// Load functions từ ai.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// Đọc nội dung file ai.js
const aiJsPath = path.join(__dirname, "../ai.js");
const aiJsContent = fs.readFileSync(aiJsPath, "utf8");

// Tạo context giống browser
const context = {
  window: {},
  console: console,
};
context.global = context;

// Execute ai.js trong context
vm.createContext(context);
vm.runInContext(aiJsContent, context);

// Lấy function hoanvi_all từ context
const hoanvi_all = context.hoanvi_all;

// Bắt đầu viết tests
describe("hoanvi_all", () => {
  test("sorts cards with different numbers", () => {
    const input = ["anh/03a.png", "anh/05b.png", "anh/04a.png"];
    const expected = ["anh/03a.png", "anh/04a.png", "anh/05b.png"];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts cards with same numbers but different suits", () => {
    const input = ["anh/03c.png", "anh/03a.png", "anh/03b.png"];
    const expected = ["anh/03a.png", "anh/03b.png", "anh/03c.png"];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts mixed cards correctly", () => {
    const input = ["anh/04b.png", "anh/03a.png", "anh/04a.png"];
    const expected = ["anh/03a.png", "anh/04a.png", "anh/04b.png"];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("handles empty array", () => {
    expect(hoanvi_all([])).toEqual([]);
  });

  test("handles single card", () => {
    const input = ["anh/03a.png"];
    expect(hoanvi_all([...input])).toEqual(input);
  });

  test("sorts all suits correctly", () => {
    const input = ["anh/03d.png", "anh/03c.png", "anh/03b.png", "anh/03a.png"];
    const expected = [
      "anh/03a.png",
      "anh/03b.png",
      "anh/03c.png",
      "anh/03d.png",
    ];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts cards with two-digit numbers", () => {
    const input = ["anh/12c.png", "anh/10a.png", "anh/11b.png"];
    const expected = ["anh/10a.png", "anh/11b.png", "anh/12c.png"];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts cards with mixed one-digit and two-digit numbers", () => {
    const input = ["anh/12c.png", "anh/03a.png", "anh/10b.png"];
    const expected = ["anh/03a.png", "anh/10b.png", "anh/12c.png"];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts cards with same numbers but all four suits", () => {
    const input = ["anh/07d.png", "anh/07a.png", "anh/07c.png", "anh/07b.png"];
    const expected = [
      "anh/07a.png",
      "anh/07b.png",
      "anh/07c.png",
      "anh/07d.png",
    ];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts a larger mixed set of cards", () => {
    const input = [
      "anh/05d.png",
      "anh/03a.png",
      "anh/05a.png",
      "anh/04c.png",
      "anh/03c.png",
      "anh/04a.png",
    ];
    const expected = [
      "anh/03a.png",
      "anh/03c.png",
      "anh/04a.png",
      "anh/04c.png",
      "anh/05a.png",
      "anh/05d.png",
    ];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts cards with same numbers in reverse order", () => {
    const input = ["anh/08d.png", "anh/08c.png", "anh/08b.png", "anh/08a.png"];
    const expected = [
      "anh/08a.png",
      "anh/08b.png",
      "anh/08c.png",
      "anh/08d.png",
    ];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts cards with extreme values", () => {
    const input = ["anh/16a.png", "anh/01d.png", "anh/16d.png", "anh/01a.png"];
    const expected = [
      "anh/01a.png",
      "anh/01d.png",
      "anh/16a.png",
      "anh/16d.png",
    ];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("preserves order when already sorted", () => {
    const input = ["anh/03a.png", "anh/04b.png", "anh/05c.png", "anh/06d.png"];
    expect(hoanvi_all([...input])).toEqual(input);
  });

  test("handles duplicate cards correctly", () => {
    const input = ["anh/03a.png", "anh/03a.png", "anh/04b.png"];
    const expected = ["anh/03a.png", "anh/03a.png", "anh/04b.png"];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts a complex mix of cards", () => {
    const input = [
      "anh/10c.png",
      "anh/03a.png",
      "anh/07b.png",
      "anh/03c.png",
      "anh/10a.png",
      "anh/07a.png",
    ];
    const expected = [
      "anh/03a.png",
      "anh/03c.png",
      "anh/07a.png",
      "anh/07b.png",
      "anh/10a.png",
      "anh/10c.png",
    ];
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts cards with leading zeros correctly", () => {
    const input = ["anh/03a.png", "anh/3a.png"];
    const expected = ["anh/03a.png", "anh/3a.png"]; // Hoặc ngược lại tùy vào cách xử lý
    expect(hoanvi_all([...input])).toEqual(expected);
  });

  test("sorts a very large set of cards", () => {
    // Tạo một tập dữ liệu lớn với nhiều lá bài khác nhau
    const input = [
      "anh/13d.png",
      "anh/02a.png",
      "anh/09c.png",
      "anh/05b.png",
      "anh/11a.png",
      "anh/07d.png",
      "anh/03c.png",
      "anh/08b.png",
      "anh/12d.png",
      "anh/01a.png",
      "anh/10c.png",
      "anh/06b.png",
      "anh/13a.png",
      "anh/02d.png",
      "anh/09b.png",
      "anh/05c.png",
    ];

    const expected = [
      "anh/01a.png",
      "anh/02a.png",
      "anh/02d.png",
      "anh/03c.png",
      "anh/05b.png",
      "anh/05c.png",
      "anh/06b.png",
      "anh/07d.png",
      "anh/08b.png",
      "anh/09b.png",
      "anh/09c.png",
      "anh/10c.png",
      "anh/11a.png",
      "anh/12d.png",
      "anh/13a.png",
      "anh/13d.png",
    ];

    expect(hoanvi_all([...input])).toEqual(expected);
  });
});
