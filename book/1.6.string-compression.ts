/**
 * Perform basic string compression using the counts of repeated characters.
 *
 * Input string has only lowercase and uppercase letters a-z.
 *
 * @complexity
 * Time: O(n), we need to go through each char of input string
 * Space: O(n), in worst case scenario where we can't compress the string
 */
const compressString = (input: string): string => {
  // Edge cases
  if (input === '' || input.length === 1) {
    return input
  }

  let output = [] as Array<number | string>
  let count = 1
  let current = ''

  for (let char of input) {
    if (char === current) {
      count++
    } else {
      if (current !== '') {
        output.push(current, count)

        const isNotCompressed = output.length > input.length
        if (isNotCompressed) {
          return input
        }
      }

      current = char
      count = 1
    }
  }

  output.push(current, count)

  return output.join('')
}

console.assert(compressString('aabcccccaaa') === 'a2b1c5a3')
console.assert(compressString('abcdefg') === 'abcdefg')
console.assert(compressString('') === '')
console.assert(compressString('a') === 'a')
