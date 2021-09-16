// index signature example
// [k: string] means you can have whatever properties within phone
// example: home, work, altPhone etc.
export const phones: {
  [k: string]: {
    country: string
    area: string
    number: string
  }
} = {}
