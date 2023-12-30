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
  let output = ""
  let count = 1
  let current = ""

  for (let char of input) {
    console.log(char)

    if (char === current) {
      count++
    } else {
      if (current !== "") {
        output += current + String(count)
      }

      current = char
      count = 1
    }
  }

  output += current + String(count)

  return output
}

console.assert(compressString("aabcccccaaa") === "a2b1c5a3")
