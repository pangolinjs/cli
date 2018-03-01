const fs = require('fs-extra')
const path = require('path')

const gitConfig = require('./git-config')()

module.exports = (tempPath, dir, answers) => {
  const templateSource = path.join(tempPath, 'templates', answers.styleguide.version, answers.styleguide.template)

  // Base package.json information
  const packageJSON = {
    name: answers.project.name,
    description: answers.project.description,
    version: answers.project.version,
    author: {
      name: answers.author.name,
      email: answers.author.email
    },
    license: answers.license
  }

  // Add optional private flag
  if (answers.private) {
    packageJSON.private = true
  }

  // Use Git URL and issues from remote config
  if (gitConfig.remote) {
    packageJSON.repository = {
      type: 'git',
      url: gitConfig.remote
    }

    packageJSON.bugs = {
      url: `${gitConfig.remote}/issues`,
      email: answers.author.email
    }
  }

  // Import the template package.json
  const templatePackageJSON = require(path.join(templateSource, 'package.json'))
  const outputPackageJSON = Object.assign(packageJSON, templatePackageJSON)

  // Write the package.json file
  fs.writeFile(path.join(dir, 'package.json'), JSON.stringify(outputPackageJSON, null, 2), 'utf8', error => {
    if (error) {
      throw new Error(error)
    }
  })
}
