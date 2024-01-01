export const benchmark = <T>(fn: (...args: T[]) => void, ...args: T[]) => {
  const name = fn.name
  if (!name) {
    throw new Error(
      `Function must have a name, use named function instead of anonymous function!`,
    )
  }

  console.time(name)
  fn(...args)
  console.timeEnd(name)
}
