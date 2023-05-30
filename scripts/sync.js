import 'dotenv/config'

import {syncProblemDescriptions} from './sync-descriptions.js'
import {syncSubmissions} from './sync-submissions.js'
import {verifySession} from './verify-session.js'

const PROBLEMS_DIRECTORY = './submissions'

await verifySession()
await syncSubmissions(PROBLEMS_DIRECTORY)
await syncProblemDescriptions(PROBLEMS_DIRECTORY)

console.log('\n\n🎉 All done!')
process.exit(0)
