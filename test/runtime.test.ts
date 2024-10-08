import { describe, it, expect } from "vitest";
import { divide } from "../src/runtime";

describe("Asserts", () => {
  it("should compute divie correctly", () => {
    expect(divide(4, 2)).toBe(2);
  });

  it("should handle divide by 0", () => {
    expect(divide(4, 0)).toBe(Infinity);
  });
});
