# CLI for Front End Styleguide
[https://github.com/mvsde/styleguide](https://github.com/mvsde/styleguide)


## Installation

Global installation required: `npm install -g front-end-styleguide-cli`.


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
