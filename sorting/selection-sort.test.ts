import {selectionSort} from './selection-sort'

import {describe, expect, it} from 'bun:test'

describe('Selection Sort', () => {
  it('sorts an array in ascending order', () => {
    const array = [9, 8, 7, 6, 5, 3]
    const sortedArray = selectionSort(array)
    expect(sortedArray).toEqual([3, 5, 6, 7, 8, 9])
  })
})
