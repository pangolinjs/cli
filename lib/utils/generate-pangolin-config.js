function generatePangolinConfig (name) {
  return `module.exports = {
  project: {
    name: '${name}'
  }
}
`
}

module.exports = generatePangolinConfig
