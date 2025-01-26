/**
 * Merge all arrays
 *
 * @param lines An array of 8 rows, each containing 13 slots. 1 if a block is present, 0 otherwise.
 * @param lines2 An array of 8 rows, each containing 13 slots. 1 if a block is present, 0 otherwise.
 * @param lines3 An array of 8 rows, each containing 13 slots. 1 if a block is present, 0 otherwise.
 * @param lines4 An array of 8 rows, each containing 13 slots. 1 if a block is present, 0 otherwise.
 * @return An array of 8 rows, each containing 13 slots. 1 if a block is present, 0 otherwise.
 */
function artworkBlocks(
  lines: string[][],
  lines2: string[][],
  lines3: string[][],
  lines4: string[][],
): string[][] {
  // Write your code here

  return lines.map((row, y) => {
    return row.map((_, x) => {
      return [lines, lines2, lines3, lines4].some(l => l[y][x] === '1')
        ? '1'
        : '0'
    })
  })
}

/**
 * Circuit Diagram — ONLY 3 Cables you can use
 *
 * 348
 *
 */

/**
 * Mirror — 4
 */

export function solve(location = 'L927-KQRI-UHJ4-KEKI-AMA12', action = 'ON') {
  const signature = location
    .concat(action)
    .replace(/-/g, '')
    .split('')
    .reduce((acc, char) => {
      if (isNaN(+char)) {
        acc += char.charCodeAt(0) - 64
      } else {
        acc += +char
      }
      return acc
    }, 0)

  return `${location}:${action}/${signature}`
}

// https://escape.codingame.com/?invitation=61D-gSm-5NP-XAs

/**
 * The code is the number of lights that are on.
 *
 * @param lights A string containing 1 for a light on, 0 otherwise.
 */
export function compute(lights: string) {
  return lights.replace(/0/g, '').length
}

// -------

/**
 * @param lockersMap The list of locker numbers
 * @return The list of locker numbers to open
 */
export function theLockers(lockersMap: string[][]) {
  // Write your code here
  const targetSum = 12

  return lockersMap.flat().filter(locker => {
    const sum = locker
      .split('')
      .map(Number)
      .reduce((a, b) => a + b)
    return sum === targetSum
  })
}
