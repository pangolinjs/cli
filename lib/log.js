const chalk = require('chalk')

exports.styleguideNotFound = dir => {
  console.error(chalk`
{bold.white.bgRed ERROR} Local front-end-styleguide not found in {magenta ${dir}}

  Start a new project:

    front-end-styleguide init

  Install locally with npm or Yarn:

    npm install -D front-end-styleguide
    yarn add -D front-end-styleguide
`)
}
