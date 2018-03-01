const chalk = require('chalk')

exports.cancellation = () => {
  console.log(chalk`
{bold.red Initialization cancelled}
`)
}

exports.conclusion = () => {
  console.log(chalk`
{bold.green Thank you, that’s it!}

Please install the dependencies before you take-off.
Installation with Yarn:
  {bold yarn}
or with npm:
  {bold npm install}

Then run the styleguide with:
  {bold front-end-styleguide}
`)
}

exports.downloadingFailed = error => {
  console.log(chalk`{bold.red Template download failed. Please try again later!}
${error}
`)
}

exports.introduction = () => {
  console.log(chalk`
{bold.blue ╔═════════════════════════════════════╗}
{bold.blue ║} {bold Front-End-Styleguide Initialization} {bold.blue ║}
{bold.blue ╚═════════════════════════════════════╝}
`)
}

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
