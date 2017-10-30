const fs = require('fs-extra')
const inquirer = require('inquirer')
const rimraf = require('rimraf')

const copyTemplate = require('./copy-template')
const createPackageJSON = require('./create-package-json')
const downloadTemplates = require('./download-templates')
const log = require('./log')

module.exports = dir => {
  let tempPath

  fs.ensureDirSync(dir)

  log.introduction()

  downloadTemplates()
    .then(temp => {
      tempPath = temp
      return inquirer.prompt(require('./questions').overwrite(dir))
    }, error => {
      log.downloadingFailed(error)
    })
    .then(overwriteAnswers => {
      if (('overwrite' in overwriteAnswers) && !overwriteAnswers.overwrite) {
        log.cancellation()
        process.exit()
      } else {
        return inquirer.prompt(require('./questions').list(tempPath, dir))
      }
    })
    .then(answers => {
      return new Promise((resolve, reject) => {
        // Exclude .git and node_modules folders
        const options = {
          glob: {
            dot: true,
            ignore: [`${dir}/.git/**`, `${dir}/node_modules/**`]
          }
        }

        rimraf(`${dir}/**/*`, options, error => {
          if (error) {
            reject(error)
          } else {
            resolve(answers)
          }
        })
      })
    })
    .then(answers => {
      copyTemplate(tempPath, dir, answers)
      createPackageJSON(tempPath, dir, answers)

      log.conclusion()
    })
}
