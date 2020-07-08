const childProcess = require('child_process')

/**
 * Primisified child process execution
 * @param {string} command Command to execute
 */
module.exports = function exec (command) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      }

      if (stderr) {
        reject(stderr)
      }

      resolve(stdout)
    })
  })
}
