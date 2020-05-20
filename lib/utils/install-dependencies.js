const { bold } = require('kleur')
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
    '@pangolinjs/core',
    '@pangolinjs/eslint-config',
    '@pangolinjs/stylelint-config',
    'babel-eslint',
    'core-js',
    'cssnano',
    'eslint-config-standard',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-plugin-standard',
    'eslint',
    'postcss-preset-env',
    'stylelint-order',
    'stylelint-scss',
    'stylelint'
  ]

  const options = { shell: true, stdio: 'inherit' }

  console.log(bold`\nInstalling dependencies…\n`)
  spawnSync('npm', ['install', ...dependencies], options)

  console.log(bold`\nInstalling development dependencies…\n`)
  spawnSync('npm', ['install', '-D', ...devDependencies], options)

  process.chdir(oldDir)
}

module.exports = installDependencies
