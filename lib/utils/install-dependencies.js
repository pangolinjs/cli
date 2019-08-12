const chalk = require('chalk')
const spawnSync = require('child_process').spawnSync

/**
 * Install dependencies
 * @param {string} dir Install in this folder
 */
async function installDependencies (dir) {
  const oldDir = process.cwd()
  process.chdir(dir)

  const dependencies = [
    '@csstools/normalize.css'
  ]

  const devDependencies = [
    '@babel/preset-env',
    '@babel/register',
    '@pangolin/core',
    '@pangolin/eslint-config',
    '@pangolin/stylelint-config',
    'autoprefixer',
    'core-js',
    'cssnano'
  ]

  const options = { shell: true, stdio: 'inherit' }

  console.log(chalk`\n{bold Installing dependencies…}\n`)
  spawnSync('npm', ['install', ...dependencies], options)

  console.log(chalk`\n{bold Installing development dependencies…}\n`)
  spawnSync('npm', ['install', '-D', ...devDependencies], options)

  process.chdir(oldDir)
}

module.exports = installDependencies
