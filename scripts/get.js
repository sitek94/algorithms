import {saveProblem} from './save-problem.js'

const input = process.argv[2]

const slug = getProblemSlug(input)

await saveProblem(slug)

// Input can be
// - link like: https://leetcode.com/problems/valid-parentheses/?envType=study-plan-v2&envId=top-interview-150
// - problem slug - string with only lowercase letters and dashes
// - problem title - string with spaces and uppercase letters
//
// Output should be problem slug.
//
// Example
// https://leetcode.com/problems/valid-parentheses/?envType=study-plan-v2&envId=top-interview-150 -> valid-parentheses
// valid-parentheses -> valid-parentheses
// Valid Parentheses -> valid-parentheses
function getProblemSlug(input) {
  let slug = input.trim().toLowerCase()
  if (slug.includes('leetcode.com/problems/')) {
    slug = slug.split('leetcode.com/problems/')[1]
    if (slug.includes('/')) {
      slug = slug.split('/')[0]
    }
  }
  slug = slug.replace(/ /g, '-')
  return slug
}
