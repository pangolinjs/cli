#!/usr/bin/env node

const { red, yellow } = require('kleur')
const program = require('commander')

program
  .version(require('../package.json').version)

program
  .command('create <name>')
  .description('Create a new Pangolin.js project')
  .action(name => {
    require('../commands/create')(name)
  })

program
  .arguments('*')
  .action(cmd => {
    program.outputHelp()
    console.log(red(`\nUnknown command <${yellow(cmd.args)}>.`))
  })

program.parse(process.argv)
