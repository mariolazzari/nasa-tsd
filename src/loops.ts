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
