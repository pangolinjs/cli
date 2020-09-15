/**
 * Generate .gitignore contents
 * @returns {string} .gitignore contents
 */
module.exports = function generateGitignore () {
  return `node_modules
/dist
/public/assets
/static
`
}
