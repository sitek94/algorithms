import {LeetCode} from 'leetcode-query'
import fs from 'fs'

const leetcode = new LeetCode()

export async function syncProblemDescriptions(problemsDirectory) {
  const allProblemDirectories = fs.readdirSync(problemsDirectory)

  for (const directory of allProblemDirectories) {
    const readmePath = `${problemsDirectory}/${directory}/README.md`

    if (fs.existsSync(readmePath)) {
      console.log(`✅ "${directory}" has README.md skipping...`)
      continue
    }

    const problem = await leetcode.problem(directory)

    fs.writeFileSync(
      `${problemsDirectory}/${directory}/README.md`,
      getDescriptionMarkdown(problem),
    )

    console.log(`📥 "${directory}" description saved!`)
  }
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
