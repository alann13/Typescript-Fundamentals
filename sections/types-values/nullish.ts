// This means that there is a value, but the value is nothing.
export const aNullValue = null

// This means that the value isn't necessarily available yet. It might be reassigned later in the code.
export let anUndefinedValue = undefined

// non-null !. operator is used to cast away the possibility that a value might be null or undefined.
// object example: cart.fruits!.push({name: "apple"})
