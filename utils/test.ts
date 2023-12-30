import chalk from 'chalk'

type TestFunction = (...args: any[]) => any

export function setupTests(functions: TestFunction[]) {
  return function test(input: any[], expectedOutput: any): void {
    console.log(
      chalk.bold(`solution(${input.join(',')}) === ${expectedOutput}`),
    )
    functions.forEach(func => {
      const result = func(...input)
      const name = func.name

      if (result === expectedOutput) {
        console.log(chalk.green(`  ${name} passed`))
      } else {
        console.assert(result === expectedOutput, chalk.red(`  ${name} failed`))
      }
    })
    console.log()
  }
}
