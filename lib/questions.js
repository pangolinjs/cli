const chalk = require('chalk')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const path = require('path')

const gitConfig = require('./git-config')()

exports.overwrite = dir => {
  return [
    {
      type: 'confirm',
      name: 'overwrite',
      message: 'Directory not empty! Continue and clean directory (‘.git’ and ‘node_modules’ are kept)',
      default: false,
      when () {
        let directoryContents = fs.readdirSync(dir)

        let onlyGitAndNode = directoryContents.every(element => {
          return element === '.git' || element === 'node_modules'
        })

        return directoryContents.length > 0 && !onlyGitAndNode
      }
    }
  ]
}

exports.list = (tempPath, dir) => {
  return [
    {
      type: 'list',
      name: 'styleguide.version',
      message: 'Select the styleguide version',
      choices: fs.readdirSync(path.join(tempPath, 'templates')),
      default: 'v4'
    },
    {
      type: 'list',
      name: 'styleguide.template',
      message: 'Select the styleguide template',
      choices (answers) {
        return fs.readdirSync(path.join(tempPath, 'templates', answers.styleguide.version))
      },
      default: 'example'
    },
    {
      type: 'input',
      name: 'project.name',
      message: 'Project name',
      default: path.parse(dir).name.toLowerCase().replace(/[^a-z\d-_]/, '-'),
      validate (value) {
        if (value.match(/^[^_.][a-z\d-_.]{1,213}$/)) {
          return true
        }

        return `Please follow these rules:
 - Max 214 characters
 - Can’t start with dot or underscore
 - Can contain dashes, dots and underscores elsewhere`
      },
      filter (value) {
        return value.toLowerCase()
      }
    },
    {
      type: 'input',
      name: 'project.description',
      message: 'Project description',
      default (answers) {
        return `Pattern library for ${answers.project.name}`
      },
      validate (value) {
        if (value) {
          return true
        }

        return 'Please enter a short description.'
      }
    },
    {
      type: 'input',
      name: 'project.version',
      message: 'Project version',
      default: '1.0.0',
      validate (value) {
        if (value.match(/^\d+\.\d+\.\d+$/)) {
          return true
        }

        return chalk`Please follow Semantic Versioning ({blue http://semver.org}).`
      }
    },
    {
      type: 'input',
      name: 'author.name',
      message: 'Author name',
      default: gitConfig.name,
      validate (value) {
        if (value) {
          return true
        }

        return 'Don’t you have a name?'
      }
    },
    {
      type: 'input',
      name: 'author.email',
      message: 'Author email',
      default: gitConfig.email,
      validate (value) {
        if (value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i)) {
          return true
        }

        return 'Please enter a valid email address.'
      }
    },
    {
      type: 'confirm',
      name: 'private',
      message: 'Flag project as private'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license',
      choices: [
        'Apache-2.0',
        'GPL-3.0',
        'MIT',
        'UNLICENSED',
        new inquirer.Separator(),
        'Custom'
      ]
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter a custom license (https://spdx.org/licenses/)',
      when (answers) {
        return answers.license === 'Custom'
      }
    }
  ]
}
