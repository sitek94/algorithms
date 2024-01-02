import {expect, test} from 'bun:test'

type Matrix = number[][]

/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire
 * row and column are set to 0.
 *
 * Time: O(n * m), we touch every element in the matrix twice
 * Space: O(n + m), we store the rows and columns that need to be zeroed
 */
const zeroMatrix = (matrix: Matrix) => {
  if (!matrix.length) return false

  const h = matrix.length
  const w = matrix[0].length

  const rows = new Set<number>()
  const cols = new Set<number>()

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (matrix[y][x] === 0) {
        rows.add(y)
        cols.add(x)
      }
    }
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (rows.has(y) || cols.has(x)) {
        matrix[y][x] = 0
      }
    }
  }

  print(matrix)

  return matrix
}

/**
 * Space: O(1), we use the first row and column to store the rows and columns that need to be zeroed
 */
const zeroMatrixSpaceOptimized = (matrix: Matrix) => {
  if (!matrix.length) return false

  const h = matrix.length
  const w = matrix[0].length

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (matrix[y][x] === 0) {
        matrix[0][x] = 0
        matrix[y][0] = 0
      }
    }
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (matrix[0][x] === 0 || matrix[y][0] === 0) {
        matrix[y][x] = 0
      }
    }
  }

  print(matrix)

  return matrix
}

const print = (matrix: Matrix) => {
  console.log(
    matrix
      .map(row => row.map(n => String(n).padStart(2, ' ')).join(' '))
      .join('\n'),
  )
}

test(zeroMatrix.name, () => {
  const input = [
    [1, 2, 3, 4, 5],
    [6, 0, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 0, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 0],
    [31, 32, 33, 34, 35],
  ]

  const output = [
    [1, 0, 0, 4, 0],
    [0, 0, 0, 0, 0],
    [11, 0, 0, 14, 0],
    [0, 0, 0, 0, 0],
    [21, 0, 0, 24, 0],
    [0, 0, 0, 0, 0],
    [31, 0, 0, 34, 0],
  ]

  expect(zeroMatrixSpaceOptimized(input)).toEqual(output)
})
