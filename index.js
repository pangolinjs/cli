const fs = require('fs')
const path = require('path')
const spawn = require('child_process').spawn

const initialization = require('./lib/initialization')
const log = require('./lib/log')

const searchLocalInstallation = dir => {
  try {
    fs.readFileSync(path.join(dir, 'node_modules/front-end-styleguide/package.json'))
  } catch (error) {
    log.styleguideNotFound(dir)
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
      initialization(process.cwd())
      break
    default:
      searchLocalInstallation(process.cwd())
      spawnStyleguide(process.cwd(), args)
  }
}
