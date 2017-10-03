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


## Project Creation

```bash
mkdir new-project
cd new-project
front-end-styleguide init
```


## Usage

```bash
# Start dev server
yarn dev
# or
npm run dev

# Build files for production
yarn build
# or
npm run build

# Create static styleguide
yarn build:dev
# or
npm run build:dev

# Run linting
yarn lint
# or
npm run lint

# Run unit and e2e tests
yarn test
# or
npm run test
```

For more information take a look at the [templates of the init package](https://github.com/front-end-styleguide/init/blob/master/templates).


## Test the CLI package

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
