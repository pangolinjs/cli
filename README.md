# CLI for Front End Styleguide
[https://github.com/mvsde/styleguide](https://github.com/mvsde/styleguide)

[![NPM version][npm-image]][npm-url] [![Dependencies][dependencies-image]][npm-url]


## Installation

Install globally with `npm install -g front-end-styleguide-cli`.


## Project Creation

Create a new project in an empty folder with `front-end-styleguide init`.


## Usage

The following tasks are available:
* `front-end-styleguide` to start the default task.
  * Watches for file changes.
  * Starts Browsersync.
* `front-end-styleguide development` to start the default task
  * No file watching / Browsersync.
* `front-end-styleguide preview` to create a prototype preview.
  * Minifies CSS, JavaScript and images.
  * Doesn't generate component HTML.
  * Errors break pipe.
* `front-end-styleguide production` to create production ready files.
  * Minifies CSS, JavaScript and images.
  * Doesn't generate any HTML.
  * Errors break pipe.

Custom configuration files can be specified:
`front-end-styleguide [task] --config=path/to/config.json --paths=path/to/paths.json`


[npm-image]: https://img.shields.io/npm/v/front-end-styleguide-cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/front-end-styleguide-cli

[dependencies-image]: https://img.shields.io/david/mvsde/styleguide-cli.svg?style=flat-square
