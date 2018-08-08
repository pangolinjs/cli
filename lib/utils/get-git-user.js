const exec = require('./exec')

/**
 * Get git user information
 *
 * Based on:
 * https://github.com/vuejs/vue-cli/blob/230314c980fb901095b9e18656c018be514aa1bf/lib/git-user.js
 */
function getGitUser () {
  const getName = exec('git config --get user.name')
  const getEmail = exec('git config --get user.email')

  return Promise
    .all([getName, getEmail])
    .then(([name, email]) => {
      return {
        name: (name && name.trim()) || '',
        email: (email && email.trim()) || ''
      }
    })
}

module.exports = getGitUser
