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

  const options = { shell: true, stdio: 'inherit' }
  const yarnAvailable = await hasYarn()

  console.log(chalk`\n{bold Installing dependencies…}\n`)

  if (yarnAvailable) {
    spawnSync('yarn', ['add', ...dependencies], options)
  } else {
    spawnSync('npm', ['install', ...dependencies], options)
  }

  console.log(chalk`\n{bold Installing development dependencies…}\n`)

  /* FIXME:
  Remove `--ignore-engines` once https://github.com/mozilla/nunjucks/pull/1161
  has been merged and released */

  if (yarnAvailable) {
    spawnSync('yarn', ['add', '--ignore-engines', '-D', ...devDependencies], options)
  } else {
    spawnSync('npm', ['install', '--ignore-engines', '-D', ...devDependencies], options)
  }

  process.chdir(oldDir)
}

module.exports = installDependencies
