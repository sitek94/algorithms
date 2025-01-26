/**
 * Sorts an array in ascending order using Selection Sort algorithm.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @param array The array to sort (will be mutated)
 * @returns The same array, sorted
 */
export function selectionSort(array: number[]) {
  if (array.length <= 1) return array

  for (let i = 0; i < array.length; i++) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    // Swap if needed
    if (minIndex !== i) {
      ;[array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }

  return array
}
