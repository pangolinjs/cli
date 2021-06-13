const { bold } = require('kleur')
const spawnSync = require('child_process').spawnSync

/**
 * Install dependencies
 * @param {string} dir Install in this folder
 */
module.exports = function installDependencies (dir) {
  const oldDir = process.cwd()
  process.chdir(dir)

  const devDependencies = [
    '@babel/core',
    '@babel/preset-env',
    '@pangolinjs/core',
    '@pangolinjs/eslint-config',
    '@pangolinjs/stylelint-config',
    'core-js',
    'eslint',
    'eslint-config-standard',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'postcss',
    'postcss-preset-evergreen',
    'sass',
    'stylelint',
    'stylelint-order',
    'stylelint-scss'
  ]

  const options = { shell: true, stdio: 'inherit' }

  console.log(bold('\nInstalling dependencies…\n'))
  spawnSync('npm', ['install', '-D', ...devDependencies], options)

  process.chdir(oldDir)
}
