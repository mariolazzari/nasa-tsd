# Write Code Like A NASA Engineer

10 Clean Code Principles From Outer Space
YouTube [playlist](https://www.youtube.com/watch?v=yTBXeGqO91Y)

## Avoid recursion

```ts
// with recursion
function fact_r(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * fact_r(n - 1);
}

// without recursion
function fact(n: number): number {
  let res = 1;
  for (let i = n; i > 1; i--) {
    res *= i;
  }

  return res;
}
```

## All loops must have fixed limits

```ts
const MAX_ITERATIONS = 1000;

function findElementMax<T>(arr: T[], target: T): number {
  let i = 0;

  // infinie loop if not found: use MAX
  while (arr[i] !== target && i < MAX_ITERATIONS) {
    i++;
  }

  return i;
}

function findElement<T>(arr: T[], target: T): number {
  // use collection size as limit
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}
```

## Avoid Heap memory, use stack one

- Prefer local vars
- Prefer primitive types to objects
- Pass vars as arguments, avoiding closures

```ts
// Avoid heap memory, use stack one
 const greeting = "Ciao";

function greetMem(name: string): string {
  // greeting stays in memory as closure
  return `${greeting} ${name}`;
}

function greet(name: string): string {
  const greeting = "Ciao";

  return `${greeting} ${name}`;
}
```

## Restrict functions to single printed page (60 lines)

- Solid principles restpected
- Split longer function into more ones

## Use a minimun of 2 runtime assertions per function

- Graceful degratation
- System keep on working in a controlled manner even when unexpected conditions occur

```ts
function divide(a: number, b: number): number {
  console.assert(typeof a === "number", "a must be a number");
  console.assert(b !== 0, "b musto be different than 0");

  return a / b;
}
```

## Smallest scope as possible

- Avoid gloabl vars
- Keep vars as private as possible

## Check return values of non void functions

## Use code preprocessor sparingly

## Restrinct reference pointers to one level

```ts
const rocket = {
  name:"Falcon 1",
  engines: {
    model: "Kestrel",
    thrust: 35_000
  }
}

const engine = rocket.engines;
const thrust = engine.thrust;
```

## Compile with all possible warnings

- linter rules
- TypeScript
- [SonarCube](https://github.com/SonarSource/sonarqube)
- dependency scan