/**
 * @param {any} target
 * @param {any[]} array
 * @param {number} start
 * @param {number} end
 */
function binarySearch(array, target, start = 0, end = array.length - 1) {
  const middle = Math.floor((start + end) / 2)
  const value = array[middle]

  if (start > end) {
    return null
  }

  if (value === target) {
    return middle
  }

  if (value > target) {
    return binarySearch(array, target, start, middle - 1)
  }

  if (value < target) {
    return binarySearch(array, target, middle + 1, end)
  }
}

console.assert(binarySearch([1, 2, 3, 4, 5, 7, 9], 7) === 5, 'Test 1 failed')
console.assert(binarySearch([1, 2, 3, 4, 5], 6) === null, 'Test case 2 failed')
console.assert(binarySearch([], 1) === null, 'Test case 3 failed')
