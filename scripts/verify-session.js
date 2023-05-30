import chalk from 'chalk'
import fs from 'fs'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export async function verifySession() {
  if (!process.env.LEETCODE_SESSION) {
    await promptForLeetCodeSession()
  }
}
async function promptForLeetCodeSession() {
  return new Promise(resolve => {
    console.log(`Go to LeetCode, open DevTools, and LEETCODE_SESSION cookie value:\n
🔗 ${chalk.blue('https://leetcode.com/problemset/all/\n\n')}`)

    rl.question('Please provide LEETCODE_SESSION:\n', session => {
      if (!session) {
        console.log(chalk.red`🚨 You haven't privided session!`)
      } else if (session.length < 300) {
        console.log(chalk.red`🚨 The session seems too short!`)
      } else {
        session = session
        fs.writeFileSync('.env', `LEETCODE_SESSION="${session}"`)
        process.env.LEETCODE_SESSION = session

        console.log(chalk.green`\n\n🍪 LeetCode session saved!`)

        rl.close()

        resolve()
      }
    })
  })
}
