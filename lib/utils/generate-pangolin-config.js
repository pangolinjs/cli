function generatePangolinConfig (name) {
  if (!name) {
    throw new Error('Paramater ‘name’ is necessary.')
  }

  if (typeof name !== 'string') {
    throw new Error('Parameter ‘name’ must be a string.')
  }

  return `module.exports = {
  project: {
    name: '${name}'
  }
}
`
}

module.exports = generatePangolinConfig
