const { blue, bold } = require('kleur')
const generateGitignore = require('../utils/generate-gitignore')
const generatePackage = require('../utils/generate-package')
const generatePangolinConfig = require('../utils/generate-pangolin-config')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const installDependencies = require('../utils/install-dependencies')
const path = require('path')
const version = require('../../package.json').version

/**
 * Create a new project
 * @param {string} name Project name
 */
async function create (name) {
  const context = process.cwd()
  const dir = path.join(context, name)

  console.log(bold().yellow(`\nPangolin.js CLI v${version}\n`))

  try {
    // Check whether dir already exists
    fs.statSync(dir)
    const answers = await inquirer.prompt([{
      type: 'confirm',
      name: 'continue',
      message: `The directory ${blue(dir)} already exists.\n  Continue?`,
      default: false
    }])

    // Cancel if user aborts
    if (!answers.continue) {
      return
    }
  } catch (error) {
    // Create dir if it doesn’t exist
    fs.ensureDirSync(dir)
  }

  // Write package.json
  const packageName = path.basename(name) === '.'
    ? path.basename(context)
    : path.basename(name)
  const packageData = await generatePackage(packageName)
  const packagePath = path.join(dir, 'package.json')
  fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2))

  // Write .gitignore
  const gitignoreData = generateGitignore()
  const gitignorePath = path.join(dir, '.gitignore')
  fs.writeFileSync(gitignorePath, gitignoreData)

  // Write Pangolin.js config
  const pangolinConfigData = generatePangolinConfig(packageData.name)
  const pangolinConfigPath = path.join(dir, 'pangolin.config.js')
  fs.writeFileSync(pangolinConfigPath, pangolinConfigData)

  // Copy template files
  const templatePath = path.join(__dirname, '../../template')
  fs.copySync(templatePath, dir)

  // Install dependencies
  await installDependencies(dir)
}

module.exports = create
