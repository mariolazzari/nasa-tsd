# Write Code Like A NASA Engineer

10 Clean Code Principles From Outer Space
YouTube [playlist](https://www.youtube.com/watch?v=yTBXeGqO91Y)

## Avoid recursion

```ts
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
```

## All loops must have fixed limits

```ts
export const MAX_ITERATIONS = 1000;

export function findElementMax<T>(arr: T[], target: T): number {
  let i = 0;

  // infinie loop if not found: use MAX
  while (arr[i] !== target && i < MAX_ITERATIONS) {
    i++;
  }

  return i;
}

export function findElement<T>(arr: T[], target: T): number {
  // use collection size as limit
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```