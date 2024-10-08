export function divide(a: number, b: number): number {
  console.assert(typeof a === "number", "a must be a number");
  console.assert(b !== 0, "b musto be different than 0");

  return a / b;
}
