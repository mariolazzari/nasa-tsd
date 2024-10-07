import { describe, it, expect } from "vitest";
import { fact, fact_r } from "../src/recursion";

describe("Avoid recursion", () => {
  const num = 6;
  const res = 720;

  it("should compute factorial with recursion", () => {
    expect(fact_r(num)).toBe(res);
  });

  it("should compute factorial without recursion", () => {
    expect(fact(num)).toBe(res);
  });
});
