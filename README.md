# <img alt="" src="https://cdn.rawgit.com/front-end-styleguide/brand/master/mark/mark.svg" width="24"> Front End Styleguide CLI

[![NPM version][npm-image]][npm-url]
[![Dependencies][dependencies-image]][npm-url]
[![JavaScript Standard Style][standard-image]][standard-url]

This package provides a global CLI interface for the [Front End Styleguide](https://github.com/front-end-styleguide/core). It uses the [Init package](https://github.com/front-end-styleguide/init) to create new projects.


## Installation

```bash
# Yarn
yarn global add front-end-styleguide-cli

# npm
npm install -g front-end-styleguide-cli
```

On some systems root (`sudo`) is needed to install global packages.


## Project Creation

Create a new project in an empty folder:
`front-end-styleguide init`

If the folder already contains a Git repository, this information will be used to populate the `package.json`.


## Usage

The following tasks are available:
* `front-end-styleguide dev` to start the default task.
  * Watches for file changes.
  * Starts Browsersync.
* `front-end-styleguide build:dev` to start the default task
  * No file watching / Browsersync.
* `front-end-styleguide build:prev` to create a prototype preview.
  * Minifies CSS, JavaScript and images.
  * Doesn't generate component HTML.
  * Errors break pipe.
* `front-end-styleguide build` to create production ready files.
  * Minifies CSS, JavaScript and images.
  * Doesn't generate any HTML.
  * Errors break pipe.

Custom configuration files can be specified: `front-end-styleguide [task] --config=path/to/config.json --paths=path/to/paths.json`.

For more information take a look at the [templates of the init package](https://github.com/front-end-styleguide/init/blob/master/templates).


## Test

```bash
# Yarn
yarn test

# npm
npm test
```

The test needs manual input during the styleguide init phase.


[npm-image]: https://img.shields.io/npm/v/front-end-styleguide-cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/front-end-styleguide-cli

[dependencies-image]: https://img.shields.io/david/front-end-styleguide/cli.svg?style=flat-square

[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://standardjs.com
