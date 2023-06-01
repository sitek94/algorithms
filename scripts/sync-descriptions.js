import fs from 'fs'
import { PROBLEMS_DIRECTORY } from './utils.js'
import { saveProblem } from './save-problem.js'

export async function syncProblemDescriptions() {
  const allProblemDirectories = fs.readdirSync(PROBLEMS_DIRECTORY)

  for (const problemSlug of allProblemDirectories) {
    await saveProblem(problemSlug)
  }
}
