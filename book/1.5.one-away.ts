import {setupTests} from '../utils/test'

/**
 * Determines whether two given strings are one (or zero) edits away from each other. An edit is defined
 * as an insertion, deletion, or replacement of a single character.
 *
 * The function iterates through both strings simultaneously, tracking the number of edits. If more than
 * one edit is required, the function returns false. It efficiently handles the different lengths of strings
 * and determines the type of edit needed accordingly.
 *
 * @complexity
 * Time: O(n + m), where n is the length of the input string and m is the length of the target string.
 * This is because in the worst case, the function may need to check each character in both strings once.
 * In practice, the complexity is O(n), where n is the length of the longer string.
 *
 * Space: O(1), constant space due to a fixed number of variables used, which does not increase with input size.
 */
const initialSolution = (input: string, target: string) => {
  const shouldInsert = input.length < target.length
  const shouldRemove = input.length > target.length

  let editsCount = 0
  let inputIndex = 0
  let targetIndex = 0

  while (true) {
    const inputChar = input[inputIndex]
    const targetChar = target[targetIndex]

    if (!inputChar && !targetChar) {
      return true
    }

    if (targetChar !== inputChar) {
      if (shouldInsert) {
        inputIndex--
      }

      if (shouldRemove) {
        inputIndex++
      }

      editsCount++

      if (editsCount > 1) {
        return false
      }
    }

    inputIndex++
    targetIndex++
  }
}

const moreReadable = (first: string, second: string) => {
  const isOneEditAwayByReplace = (s1: string, s2: string) => {
    let foundDifference = false

    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (foundDifference) {
          return false
        }
        foundDifference = true
      }
    }

    return true
  }

  const isOneEditAwayByInsert = (s1: string, s2: string) => {
    let index1 = 0
    let index2 = 0

    while (index1 < s1.length && index2 < s2.length) {
      if (s1[index1] !== s2[index2]) {
        // It means we've already incremented the index, and since no more edits are allowed
        // we can return false
        if (index1 !== index2) {
          return false
        }

        index2++
      } else {
        index1++
        index2++
      }
    }

    return true
  }

  // Replace
  if (first.length === second.length) {
    return isOneEditAwayByReplace(first, second)
  }

  // Insert
  if (first.length + 1 === second.length) {
    return isOneEditAwayByInsert(first, second)
  }

  // Remove (same as insert, but with different order of arguments)
  if (first.length - 1 === second.length) {
    return isOneEditAwayByInsert(second, first)
  }

  return false
}

const moreCompact = (first: string, second: string) => {
  // Definitely requires more than one edit
  if (Math.abs(first.length - second.length) > 1) {
    return false
  }

  const [short, long] =
    first.length > second.length ? [second, first] : [first, second]
  let shortIndex = 0
  let longIndex = 0
  let foundDifference = false

  while (shortIndex < short.length && longIndex < long.length) {
    if (short[shortIndex] !== long[longIndex]) {
      if (foundDifference) {
        return false
      }

      foundDifference = true

      if (short.length === long.length) {
        shortIndex++
      }
    } else {
      shortIndex++
    }

    longIndex++
  }

  return true
}

const test = setupTests([
  // initialSolution, moreReadable,
  moreCompact,
])

test(['pale', 'ple'], true)
test(['pales', 'pale'], true)
test(['pale', 'bale'], true)
test(['pale', 'bake'], false)
