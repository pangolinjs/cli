# CLI for Front End Styleguide

[![JavaScript Style Guide][standard-image]][standard-url]

[![NPM version][npm-image]][npm-url]
[![Dependencies][dependencies-image]][npm-url]

This package provides a global CLI interface for the [Front End Styleguide](https://github.com/mvsde/styleguide).


## Installation

Install globally with `npm install -g front-end-styleguide-cli` or `yarn add global front-end-styleguide-cli`.


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


[standard-image]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standard-url]: https://github.com/feross/standard

[npm-image]: https://img.shields.io/npm/v/front-end-styleguide-cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/front-end-styleguide-cli

[dependencies-image]: https://img.shields.io/david/mvsde/styleguide-cli.svg?style=flat-square
