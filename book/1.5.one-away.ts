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
