/**
 * @param {any[]} array
 * @param {any} target
 */
function binarySearch(array, target) {
  let start = 0
  let end = array.length

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    let value = array[middle]

    if (value === target) {
      return middle
    } else if (value > target) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }

  return null
}

console.assert(binarySearch([1, 2, 3, 4, 5], 3) === 2, 'Test case 1 failed')
console.assert(binarySearch([1, 2, 3, 4, 5], 6) === null, 'Test case 2 failed')
console.assert(binarySearch([], 1) === null, 'Test case 3 failed')
