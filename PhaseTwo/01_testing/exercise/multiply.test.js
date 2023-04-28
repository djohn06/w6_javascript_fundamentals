const multiply = require("./multiply");

describe("multiply", () => {
  it("multiplies 4 and 5", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  it("multiplies 18 and 4", () => {
    expect(multiply(18, 4)).toBe(72);
  });
});
