import { describe, it, expect } from "vitest";
import { findElement, findElementMax, MAX_ITERATIONS } from "../src/loops";

describe("Avoid recursion", () => {
  const nums = [1, 2, 333, 4, 5];
  const num = 1;
  const not = 0;

  it("should return 0", () => {
    expect(findElement(nums, num)).toBe(0);
  });

  it("should return -1", () => {
    expect(findElement(nums, not)).toBe(-1);
  });

  it("should return MAX", () => {
    expect(findElementMax(nums, not)).toBe(MAX_ITERATIONS);
  });
});
