import fs from 'fs'
import {LeetCode} from 'leetcode-query'
import {getReadmePath, getProblemDirectoryPath} from './utils.js'

const leetcode = new LeetCode()

/**
 * @param {string} slug
 */
export async function saveProblem(slug) {
  const problemDirectoryPath = getProblemDirectoryPath(slug)

  if (!fs.existsSync(problemDirectoryPath)) {
    fs.mkdirSync(problemDirectoryPath)

    console.log(`📁 "${slug}" directory created!`)
  }

  const readmePath = getReadmePath(slug)

  if (fs.existsSync(readmePath)) {
    console.log(`❗️ "${slug}" problem already exists, cancelling...`)
    return
  }

  const problem = await leetcode.problem(slug)

  fs.writeFileSync(readmePath, getDescriptionMarkdown(problem))

  console.log(`📥 "${slug}" description saved!`)
}

const DIFFICULTY_TO_COLOR = {
  Easy: 'brightgreen',
  Medium: 'yellow',
  Hard: 'red',
}

/**
 * @param {import('leetcode-query').Problem} problem
 */
function getDescriptionMarkdown({difficulty, title, titleSlug, content}) {
  const color = DIFFICULTY_TO_COLOR[difficulty]

  return `# [${title}](https://leetcode.com/problems/${titleSlug})
 
<img src='https://img.shields.io/badge/Difficulty-${difficulty}-${color}' alt='Difficulty: ${difficulty}' />
<hr />

${content}
`
}
