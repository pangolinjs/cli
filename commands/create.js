const { blue, bold } = require('kleur')
const fs = require('fs')
const path = require('path')
const prompts = require('prompts')

const copyDir = require('../lib/copy-dir.js')
const generateGitignore = require('../lib/generate-gitignore.js')
const generatePackage = require('../lib/generate-package.js')
const installDependencies = require('../lib/install-dependencies.js')
const version = require('../package.json').version

/**
 * Create a new project
 * @param {string} name Project name
 */
module.exports = async function create (name) {
  const context = process.cwd()
  const dir = path.join(context, name)

  console.log(bold().yellow(`\nPangolin.js CLI v${version}\n`))

  try {
    // Check whether dir already exists
    fs.lstatSync(dir)

    const response = await prompts({
      type: 'confirm',
      name: 'continue',
      message: `The directory ${blue(dir)} already exists.\n  Continue?`
    })

    // Cancel if user aborts
    if (!response.continue) {
      return
    }
  } catch (error) {
    // Create dir if it doesn’t exist
    fs.mkdirSync(dir, { recursive: true })
  }

  // Write package.json
  const defaultPackageName = path.basename(name) === '.'
    ? path.basename(context)
    : path.basename(name)

  const packageData = await generatePackage({ name: defaultPackageName })

  if (!packageData.license) {
    return
  }

  const packagePath = path.join(dir, 'package.json')
  fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2))

  // Write .gitignore
  const gitignoreData = generateGitignore()
  const gitignorePath = path.join(dir, '.gitignore')
  fs.writeFileSync(gitignorePath, gitignoreData)

  // Copy template files
  const templatePath = path.join(__dirname, '../template')
  copyDir(templatePath, dir)

  // Install dependencies
  installDependencies(dir)
}
