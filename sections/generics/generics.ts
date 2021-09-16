// <T> here means a type parameter. Doesn't have to be T but this is used as standard convention.
export const listToDict = <T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } => {
  const dict: { [k: string]: T } = {}

  list.forEach((element) => {
    const dictKey = idGen(element)
    dict[dictKey] = element
  })

  return dict
}

// Super simple example
export const wrapInArray = <T>(arg: T): T[] => {
  return [arg]
}
