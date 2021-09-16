// A top type is a type that describes any possible value allowed by the system.
// There are 2 top types: any and unknown.

// any example
// any value allowed in javascript.
// console.log is a good use case for using any.
export const haha: any = 'lolol'

// unknown example
let unknownValue: unknown = 12

// unknownValue.haha.lol
// uncommenting above will have error

// Before we can use unknown types, we have to apply type guards.
if (typeof unknownValue === 'string') {
  console.log('string')
} else if (typeof unknownValue === 'number') {
  console.log('number!')
} else {
  console.log('leftovers here.')
}
