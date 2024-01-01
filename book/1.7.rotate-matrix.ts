import {setupTests} from '../utils/test'

const rotateMatrix = (input: number[][]) => {
  const n = input.length
  const last = n - 1

  const output = Array.from({length: 5}).map(() =>
    Array.from({length: 5}),
  ) as number[][]

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      let newX = last - y
      let newY = x

      output[newY][newX] = input[y][x]
    }
  }

  console.log(output.map(row => row.join(' ')).join('\n'))

  return output
}

type P = [number, number]



const serialize = (input: number[][]) =>
  input.map(row => row.join(' ')).join('\n')

const test = setupTests([
  (input: number[][]) => serialize(rotateMatrix(input)),
])

/**
 * Rotate right 90 degrees clockwise in place
 */

const input = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]

const expectedOutput = [
  [21, 16, 11, 6, 1],
  [22, 17, 12, 7, 2],
  [23, 18, 13, 8, 3],
  [24, 19, 14, 9, 4],
  [25, 20, 15, 10, 5],
]

/* 
1 0,0 -> 4,0
2 1,0 -> 4,1
3 2,0 -> 4,2

6 0,1 -> 3,0
7 1,1 -> 3,1
8 2,1 -> 3,2

11 0,2 -> 2,0
12 1,2 -> 2,1
13 2,2 -> 2,2
*/

test([input], serialize(expectedOutput))
