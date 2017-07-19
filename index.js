const chalk = require('chalk')
const init = require('front-end-styleguide-init')
const spawn = require('child_process').spawn

const searchLocalInstallation = dir => {
  try {
    require.resolve(`${dir}/node_modules/front-end-styleguide`)
  } catch (error) {
    console.error(`
${chalk.black.bgRed('ERROR')} Local front-end-styleguide not found in ${chalk.magenta(dir)}

Start a new project: front-end-styleguide init
Install locally:     npm install front-end-styleguide --save-dev
`)
    process.exit(1)
  }
}

const spawnStyleguide = (dir, args) => {
  spawn(`"./node_modules/.bin/front-end-styleguide"`, args, {
    cwd: dir,
    shell: true,
    stdio: 'inherit'
  }).on('close', (code) => {
    process.exit(code)
  })
}

module.exports = () => {
  let processArgs = process.argv
  let args = processArgs.slice(2, processArgs.length)

  switch (args[0]) {
    case 'init':
      init(process.cwd())
      break
    default:
      searchLocalInstallation(process.cwd())
      spawnStyleguide(process.cwd(), args)
  }
}
