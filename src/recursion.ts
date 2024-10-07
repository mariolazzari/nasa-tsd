// avoid recursion

// with recursion
export function fact_r(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * fact_r(n - 1);
}

// without recursion
export function fact(n: number): number {
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }

  return res;
}
