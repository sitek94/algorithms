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
const oneAway = (input: string, target: string) => {
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

console.assert(oneAway("pale", "ple") === true, `insert`)
console.assert(oneAway("pales", "pale") === true, `remove`)
console.assert(oneAway("pale", "bale") === true, `replace`)
console.assert(oneAway("pale", "bake") === false, `2 edits`)
