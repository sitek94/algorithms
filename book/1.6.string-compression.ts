import {benchmark} from '@/utils/benchmark'

/**
 * Perform basic string compression using the counts of repeated characters.
 *
 * Input string has only lowercase and uppercase letters a-z.
 *
 * @complexity
 * Time: O(n), we need to go through each char of input string
 * Space: O(n), in worst case scenario where we can't compress the string
 *
 * @note I assumed wrongly that I need to use array for performance reasons,
 * but it turns out string concatenation in JS is already optimized.
 */
function firstApproach(input: string): string {
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

function fasterApproach(input: string): string {
  let compressed = ''
  let count = 0

  for (let i = 0; i < input.length; i++) {
    count++

    const isLastChar = i === input.length - 1
    const isNotSameChar = input[i] !== input[i + 1]

    if (isLastChar || isNotSameChar) {
      // If at any point the compressed string is longer than the input string
      // we can return the input string immediately
      const isNotCompressed = compressed.length > input.length
      if (isNotCompressed) {
        return input
      }

      compressed += input[i] + count
      count = 0
    }
  }

  return compressed
}

benchmark(firstApproach, 'aabcccccaaa')
benchmark(fasterApproach, 'aabcccccaaa')
