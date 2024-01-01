import {expect, test} from 'bun:test'

/**
 * Rotate right 90 degrees clockwise in place
 */
const rotateMatrix = (grid: number[][]) => {
  if (grid.length !== grid[0].length) {
    throw new Error('Input must be a square matrix')
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

test(rotateMatrix.name, () => {
  expect(
    rotateMatrix([
      [1, 2],
      [3, 4],
    ]),
  ).toEqual([
    [3, 1],
    [4, 2],
  ])

  expect(
    rotateMatrix([
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
    rotateMatrix([
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
