const chalk = require('chalk')
const hasYarn = require('../utils/has-yarn')
const spawnSync = require('child_process').spawnSync

/**
 * Install dependencies with Yarn or npm
 * @param {string} dir Install in this folder
 */
async function installDependencies (dir) {
  const oldDir = process.cwd()
  process.chdir(dir)

  const dependencies = [
    'normalize.css'
  ]

  const devDependencies = [
    '@babel/preset-env',
    '@babel/register',
    '@pangolin/core',
    '@pangolin/eslint-config',
    '@pangolin/stylelint-config',
    'autoprefixer',
    'cssnano'
  ]

  const options = { stdio: 'inherit' }
  const yarnAvailable = await hasYarn()

  console.log(chalk`\n{bold Installing dependencies…}\n`)

  if (yarnAvailable) {
    spawnSync('yarn', ['add', ...dependencies], options)
  } else {
    spawnSync('npm', ['install', ...dependencies], options)
  }

  console.log(chalk`\n{bold Installing development dependencies…}\n`)

  if (yarnAvailable) {
    spawnSync('yarn', ['add', '-D', ...devDependencies], options)
  } else {
    spawnSync('npm', ['install', '-D', ...devDependencies], options)
  }

  process.chdir(oldDir)
}

module.exports = installDependencies
