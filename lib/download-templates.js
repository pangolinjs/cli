const download = require('download')
const fs = require('fs-extra')
const ora = require('ora')
const path = require('path')
const tempDir = require('os').tmpdir()

const repository = 'https://github.com/front-end-styleguide/templates/archive/master.zip'
const temp = path.join(tempDir, 'front-end-styleguide-templates')

const options = {
  extract: true,
  headers: {
    accept: 'application/zip'
  },
  strip: 1
}

module.exports = () => {
  return new Promise((resolve, reject) => {
    const spinner = ora('Downloading templates').start()

    fs.emptyDirSync(temp)

    // Disable console.log() to hide the zip extraction messages
    // It's a bit hacky but we don't want to flood the console
    // with useless messages
    console.log = function () {}

    download(repository, temp, options)
      .then(() => {
        spinner.succeed('')

        // Restore console.log()
        delete console.log

        // Insert empty line after spinner
        console.log()

        resolve(temp)
      }, error => {
        spinner.fail('')
        // Restore console.log()
        delete console.log

        // Insert empty line after spinner
        console.log()

        reject(error)
      })
  })
}
