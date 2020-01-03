const chalk = require('chalk')
const getGitUser = require('../utils/get-git-user')
const inquirer = require('inquirer')

/**
 * Generate base data for package.json
 * @param {string} name Project name
 * @returns {Object} package.json-style object
 */
async function generatePackage (name) {
  const gitUser = await getGitUser()

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project name',
      default: name,
      validate (value) {
        if (!value) {
          return 'The project name is required.'
        }

        return true
      },
      filter (value) {
        return value.replace(/\s/g, '-').toLowerCase()
      }
    },
    {
      type: 'input',
      name: 'version',
      message: 'Project version',
      default: '0.1.0',
      validate (value) {
        if (!value.match(/^\d+\.\d+\.\d+$/)) {
          return chalk`Please follow Semantic Versioning ({blue https://semver.org}).`
        }

        return true
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description',
      default (answers) {
        return `Design system for “${answers.name}”`
      }
    },
    {
      type: 'input',
      name: 'author.name',
      message: 'Author name',
      default: gitUser.name,
      validate (value) {
        if (!value) {
          return 'The author name is required.'
        }

        return true
      }
    },
    {
      type: 'input',
      name: 'author.email',
      message: 'Author email',
      default: gitUser.email,
      validate (value) {
        if (!value) {
          return 'The author email is required.'
        }

        if (!value.match(/^.+@.+\.[a-z]{2,63}$/i)) {
          return 'Please provide a valid email.'
        }

        return true
      }
    },
    {
      type: 'confirm',
      name: 'private',
      message: 'Private project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
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
      message: chalk`Enter a custom license\n  Available licenses: {blue https://spdx.org/licenses}`,
      when (answers) {
        return answers.license === 'Custom'
      },
      validate (value) {
        if (!value) {
          return 'The license is required.'
        }

        return true
      }
    }
  ])

  return {
    ...answers,
    scripts: {
      dev: 'pangolin-core dev',
      build: 'pangolin-core build',
      'build:dev': 'pangolin-core build --dev',
      'lint:css': 'pangolin-core lint css --cache',
      'lint:js': 'pangolin-core lint js --cache'
    }
  }
}

module.exports = generatePackage
