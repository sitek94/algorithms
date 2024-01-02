import {expect, test} from 'bun:test'

/**
 * Rotate right 90 degrees clockwise
 *
 * Time: O(n^2)
 * Space: O(n^2)
 */
const rotateMatrix = (input: number[][]) => {
  const n = input.length
  const last = n - 1

  const output = Array.from({length: n}).map(() =>
    Array.from({length: n}),
  ) as number[][]

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      let newX = last - y
      let newY = x

      output[newY][newX] = input[y][x]
    }
  }

  return output
}

/**
 * Rotate right 90 degrees clockwise in place
 *
 * Time: O(n^2) - we need to touch every element
 * Space: O(1) - in place
 */
const rotateMatrixInPlace = (grid: number[][]) => {
  if (grid.length === 0 || grid.length !== grid[0].length) {
    return false
  }

  type P = {x: number; y: number}
  const numberOfLayers = Math.floor(grid.length / 2)
  const N = grid.length

  for (let layer = 0; layer < numberOfLayers; layer++) {
    const layerLength = grid.length - layer * 2

    for (let i = 0; i < layerLength - 1; i++) {
      let top: P = {x: layer + i, y: layer}
      let right: P = {x: N - layer - 1, y: layer + i}
      let bottom: P = {x: N - layer - i - 1, y: N - layer - 1}
      let left: P = {x: layer, y: N - layer - i - 1}

      const temp = grid[top.y][top.x]
      grid[top.y][top.x] = grid[left.y][left.x]
      grid[left.y][left.x] = grid[bottom.y][bottom.x]
      grid[bottom.y][bottom.x] = grid[right.y][right.x]
      grid[right.y][right.x] = temp
    }
  }

  return grid
}

const rotateMatrixInPlaceRefactored = (grid: number[][]) => {
  if (grid.length === 0 || grid.length !== grid[0].length) {
    return false
  }

  const n = grid.length

  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer
    const last = n - layer - 1

    for (let i = layer; i < last; i++) {
      const offset = i - first
      const top = grid[first][i]

      // left -> top
      grid[first][i] = grid[last - offset][first]

      // bottom -> left
      grid[last - offset][first] = grid[last][last - offset]

      // right -> bottom
      grid[last][last - offset] = grid[i][last]

      // top -> right
      grid[i][last] = top
    }
  }

  return grid
}

test(rotateMatrixInPlace.name, () => {
  expect(
    rotateMatrixInPlace([
      [1, 2],
      [3, 4],
    ]),
  ).toEqual([
    [3, 1],
    [4, 2],
  ])

  expect(
    rotateMatrixInPlace([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ])

  expect(
    rotateMatrixInPlace([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ]),
  ).toEqual([
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ])
})

const getTestCases = () => {
  const small = [
    [1, 2],
    [3, 4],
  ]
  const smallRotated = [
    [3, 1],
    [4, 2],
  ]

  const medium = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const mediumRotated = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]

  const large = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]
  const largeRotated = [
    [21, 16, 11, 6, 1],
    [22, 17, 12, 7, 2],
    [23, 18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [25, 20, 15, 10, 5],
  ]

  return [
    [small, smallRotated],
    [medium, mediumRotated],
    [large, largeRotated],
  ]
}

test.each(getTestCases())('rotateMatrix', (input, expected) => {
  expect(rotateMatrix(input)).toEqual(expected)
})

test.each(getTestCases())('rotateMatrix', (input, expected) => {
  expect(rotateMatrixInPlace(input)).toEqual(expected)
})

test.each(getTestCases())('rotateMatrix', (input, expected) => {
  expect(rotateMatrixInPlaceRefactored(input)).toEqual(expected)
})
