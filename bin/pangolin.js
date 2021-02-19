#!/usr/bin/env node

const { red, yellow } = require('kleur')
const { version } = require('../package.json')

const command = process.argv[2]

function outputHeader () {
  console.log(`${yellow('Pangolin.js CLI')} v${version}`)
}

/**
 * Handle create command.
 * @param {string} name Name for project folder
 */
function handleCreate (name) {
  if (!name) {
    outputHeader()

    console.log('\nPlease provide a name:')
    console.log('  - create <name>')

    return
  }

  require('../commands/create')(name)
}

/**
 * Fallback for unrecognized commands.
 * @param {string} [command] Command name
 */
function handleDefault (command) {
  outputHeader()

  console.log('\nPlease use one of the following commands:')
  console.log('  - create <name>')

  if (command) {
    console.log(red(`\nUnknown command <${yellow(command)}>.`))
  }
}

switch (command) {
  case 'create':
    handleCreate(process.argv[3])
    break
  default:
    handleDefault(command)
}
