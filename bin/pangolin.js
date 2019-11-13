#!/usr/bin/env node

const chalk = require('chalk')
const program = require('commander')

program
  .version(require('../package.json').version)

program
  .command('create <name>')
  .description('Create a new Pangolin.js project')
  .action(name => {
    require('../lib/commands/create')(name)
  })

program
  .arguments('*')
  .action(cmd => {
    program.outputHelp()
    console.log(chalk`  Unknown command {red ${cmd}}.`)
  })

program.parse(process.argv)
