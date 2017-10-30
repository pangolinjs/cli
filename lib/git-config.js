const execSync = require('child_process').execSync
const gitUp = require('git-up')

// Convert a Git SSH URL to HTTPS
const ssh2https = url => {
  let remote = gitUp(url)
  let path = remote.pathname.substring(0, remote.pathname.lastIndexOf('.git'))

  return `https://${remote.resource}${path}`
}

// Based on https://github.com/vuejs/vue-cli/blob/master/lib/git-user.js
module.exports = () => {
  let name
  let email
  let remote

  try {
    name = execSync('git config --get user.name')
    email = execSync('git config --get user.email')
    remote = execSync('git config --get remote.origin.url')
  } catch (error) {}

  name = name && name.toString().trim()
  email = email && email.toString().trim()
  remote = remote && ssh2https(remote.toString().trim())

  return {
    name: name || '',
    email: email || '',
    remote: remote || ''
  }
}
