/**
 * Generate Pangolin.js config
 * @param {Object} options Options
 * @param {string} options.name Project name
 * @returns {string} Contents of the config file
 */
module.exports = function generatePangolinConfig ({ name }) {
  return `module.exports = {
  project: {
    name: '${name}'
  }
}
`
}
