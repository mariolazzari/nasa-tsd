import { describe, it, expect } from "vitest";
import { greet, greetMem, greeting } from "../src/mem";

describe("Avoid heap memory", () => {
  const name = "Mario";
  it("should return correct greet", () => {
    expect(greet(name)).toBe(`${greeting} ${name}`);
  });

  it("should return correct greet with closure", () => {
    expect(greetMem(name)).toBe(`${greeting} ${name}`);
  });
});
