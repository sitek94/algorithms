import path from 'path'

export const PROBLEMS_DIRECTORY = './submissions'

export const getProblemDirectoryPath = problemSlug =>
  path.join(PROBLEMS_DIRECTORY, problemSlug)

export const getReadmePath = problemSlug =>
  path.join(getProblemDirectoryPath(problemSlug), 'README.md')
