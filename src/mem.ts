// Avoid heap memory, use stack one

export const greeting = "Ciao";

export function greetMem(name: string): string {
  // greeting stays in memory as closure
  return `${greeting} ${name}`;
}

export function greet(name: string): string {
  const greeting = "Ciao";

  return `${greeting} ${name}`;
}
