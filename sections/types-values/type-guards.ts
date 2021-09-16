interface CarLike {
  make: string
  model: string
  year: number
}

// user defined type guard in the return type.
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === 'object' &&
    'make' in valueToTest &&
    typeof valueToTest['make'] === 'string' &&
    'model' in valueToTest &&
    typeof valueToTest['model'] === 'string' &&
    'year' in valueToTest &&
    typeof valueToTest['year'] === 'number'
  )
}
