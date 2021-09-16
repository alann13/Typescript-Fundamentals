// example of callable interface
export interface TwoNumberMath {
  (x: number, y: number): number
}

// because the interface already defined the types of your params,
// you don't have to include it in your params here.
// Simply hover on it, and you will see the definitions.
export const add: TwoNumberMath = (a, b) => a + b
