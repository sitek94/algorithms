import chalk from 'chalk'
import fs from 'fs'

/**
 * @typedef {Object} Submission
 * @property {number} id
 * @property {string} lang
 * @property {string} lang_name
 * @property {string} time
 * @property {number} timestamp
 * @property {number} status
 * @property {string} status_display
 * @property {string} runtime
 * @property {string} url
 * @property {string} is_pending
 * @property {string} title
 * @property {string} memory
 * @property {string} code
 * @property {string} compare_result
 * @property {string} title_slug
 * @property {boolean} has_notes
 */

const LANGUAGE_TO_EXTENSION = {
  python: 'py',
  javascript: 'js',
  typescript: 'ts',
}

export async function syncSubmissions(problemsDirectory) {
  if (!fs.existsSync(problemsDirectory)) {
    fs.mkdirSync(problemsDirectory)
  }

  const submissions = await fetchAllSubmissions()

  submissions
    .filter(submission => submission.status_display === 'Accepted')
    .forEach(submission => {
      writeSubmissionToFile(submission, problemsDirectory)
    })
}

/**
 * @param {Submission} submission
 */
async function writeSubmissionToFile(submission, problemsDirectory) {
  const problemDir = `${problemsDirectory}/${submission.title_slug}`

  if (!fs.existsSync(problemDir)) {
    fs.mkdirSync(problemDir)
  }

  const submissionPath = `${problemDir}/${getSubmissionFileName(submission)}`

  if (fs.existsSync(submissionPath)) {
    return
  }

  fs.writeFileSync(submissionPath, submission.code)
}

/**
 * Returns an array of submissions.
 * @returns {Promise<Array<Submission>>} An array of submissions.
 */
async function fetchAllSubmissions() {
  const submissions = []

  let offset = 0
  let has_next = true

  while (has_next) {
    const response = await fetchSubmissions({offset})

    submissions.push(...response.submissions_dump)
    has_next = response.has_next
    offset += 20
  }

  return submissions
}

async function fetchSubmissions({offset = 0}) {
  const response = await fetch(
    `https://leetcode.com/api/submissions/?offset=${offset}&limit=20&lastkey=`,
    {
      headers: {
        accept: '*/*',
        'accept-language':
          'en-PL,en;q=0.9,pl-PL;q=0.8,pl;q=0.7,es-ES;q=0.6,es;q=0.5,en-GB;q=0.4,en-US;q=0.3',
        'sec-ch-ua':
          '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-newrelic-id': 'UAQDVFVRGwEAXVlbBAg=',
        'x-requested-with': 'XMLHttpRequest',
        cookie: `LEETCODE_SESSION=${process.env.LEETCODE_SESSION}`,
        Referer: 'https://leetcode.com/submissions/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: null,
      method: 'GET',
    },
  )

  const data = await response.json()

  if (response.ok) {
    console.log(chalk.green`✅ Fetched submissions: ${data.length}`)
  } else {
    console.log(chalk.red`🚨 Failed to fetch submissions! (offset: ${offset})`)
    console.log(data)
  }

  return data
}

const COUNTS = {}

/**
 *
 * @param {Submission} submission
 */
function getSubmissionFileName(submission) {
  const key = submission.title_slug

  COUNTS[key] = (COUNTS[key] || 0) + 1

  const count = COUNTS[key]
  const extension = LANGUAGE_TO_EXTENSION[submission.lang]

  return `${submission.title_slug}.${count}.${extension}`
}
