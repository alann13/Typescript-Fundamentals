// If you don't explicitely type your variables, typescript in most cases can guess your type.
let age = 6

// index signature example
// [k: string] means you can have whatever properties within phone
// example: home, work, altPhone etc.
const phones: {
  [k: string]: {
    country: string
    area: string
    number: string
  }
} = {}

// example for typing arrays
const collection: string[] = []

// example of callable interface
interface TwoNumberMath {
  (x: number, y: number): number
}

// because the interface already defined the types of your params,
// you don't have to include it in your params here.
// Simply hover on it, and you will see the definitions.
const add: TwoNumberMath = (a, b) => a + b

// class example

class Car {
  constructor(public make: string, public model: string, public year: number) {}
}
