const { blue } = require('kleur')
const prompts = require('prompts')

const getGitUser = require('./get-git-user.js')

/**
 * Generate base data for package.json
 * @param {Object} options Options
 * @param {string} options.name Project name
 * @returns {Object} package.json-style object
 */
module.exports = async function generatePackage ({ name }) {
  const gitUser = await getGitUser()

  const response = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'Project name',
      initial: name,
      validate: value => value ? true : 'The project name is required.',
      format: value => value.replace(/\s/g, '-').toLowerCase()
    },
    {
      type: 'text',
      name: 'description',
      message: 'Project description',
      initial: previous => `Design system for “${previous}”.`
    },
    {
      type: 'text',
      name: 'version',
      message: 'Project version',
      initial: '0.1.0',
      validate: value => value.match(/^\d+\.\d+\.\d+$/)
        ? true
        : `Please follow Semantic Versioning (${blue('https://semver.org')}).`
    },
    {
      type: 'text',
      name: 'authorName',
      message: 'Author name',
      initial: gitUser.name,
      validate: value => value ? true : 'The author name is required.'
    },
    {
      type: 'text',
      name: 'author',
      message: 'Author email',
      initial: gitUser.email,
      validate: value => value.match(/^.+@.+\.[a-z]{2,63}$/i)
        ? true
        : 'Please provide a valid email.',
      format (email, values) {
        const author = { name: values.authorName, email }

        // Remove "placeholder" for author name.
        delete values.authorName

        return author
      }
    },
    {
      type: 'confirm',
      name: 'private',
      message: 'Private project'
    },
    {
      type: 'select',
      name: 'license',
      message: 'Choose a license',
      choices: [
        {
          title: 'Hippocratic License 2.1',
          value: 'Hippocratic-2.1',
          description: 'https://spdx.org/licenses/Hippocratic-2.1.html'
        },
        {
          title: 'Apache-2.0',
          value: 'Apache-2.0',
          description: 'https://spdx.org/licenses/Apache-2.0.html'
        },
        {
          title: 'GPL-3.0-or-later',
          value: 'GPL-3.0-or-later',
          description: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
        },
        {
          title: 'MIT',
          value: 'MIT',
          description: 'https://spdx.org/licenses/MIT.html'
        },
        {
          title: 'UNLICENSED',
          value: 'UNLICENSED',
          description: 'Mark project as proprietary'
        },
        {
          title: 'Custom',
          value: false,
          description: 'Switch to custom license input'
        }
      ]
    },
    {
      type: prev => prev ? false : 'text',
      name: 'license',
      message: `Enter a custom license from ${blue('https://spdx.org/licenses')}`,
      validate: value => value ? true : 'The license is required.'
    }
  ])

  return {
    ...response,
    type: 'module',
    scripts: {
      dev: 'pangolin-core dev',
      build: 'pangolin-core build',
      docs: 'pangolin-core docs',
      inspect: 'pangolin-core inspect',
      // eslint-disable-next-line no-useless-escape
      'lint:js': 'eslint --ignore-path .gitignore \"**/*.?(m)js\"',
      'lint:css': 'stylelint **/*.scss'
    },
    engines: {
      node: '15'
    }
  }
}
