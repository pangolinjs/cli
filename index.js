'use strict';



/* DEPENDENCIES
 * ========================================================================== */

const chalk = require('chalk');
const init  = require('front-end-styleguide-init');
const spawn = require('child_process').spawn;



/* SEARCH LOCAL INSTALLATION
 * ========================================================================== */

let searchLocalInstallation = (dir) => {
  try {
    require.resolve(`${dir}/node_modules/front-end-styleguide`);
  } catch (error) {
    console.error(`
${chalk.black.bgRed(' ERROR ')} Local front-end-styleguide not found in ${chalk.magenta(dir)}

Start a new project: front-end-styleguide init
Install locally:     npm install front-end-styleguide --save-dev
`);
    process.exit(1);
  }
};



/* RUN STYLEGUIDE with optional ARGUMENTS
 * ========================================================================== */

let spawnStyleguide = function(dir, args) {
  spawn(`"${dir}/node_modules/.bin/front-end-styleguide"`, args, {
    shell: true,
    stdio: 'inherit'
  }).on('close', (code) => {
    process.exit(code);
  });
};



/* EXPOSE to OUTER SPACE
 * ========================================================================== */

module.exports = function() {
  let processArgs = process.argv;
  let args = processArgs.slice(2, processArgs.length);

  if (args[0] === 'init') {
    init(process.cwd());
  } else {
    searchLocalInstallation(process.cwd());
    spawnStyleguide(process.cwd(), args);
  }
};
