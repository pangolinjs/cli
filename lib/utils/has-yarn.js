const execSync = require('child_process').execSync

/**
 * Test whether Yarn is available
 */
function hasYarn () {
  try {
    execSync('yarn --version')
    return true
  } catch (error) {
    return false
  }
}

module.exports = hasYarn
