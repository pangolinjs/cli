/**
 * Generate .gitignore contents
 * @returns {string} .gitignore contents
 */
module.exports = function generateGitignore () {
  return `# OS specific stuff
Thumbs.db
Desktop.ini
.DS_Store
._*
*~

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Dependencies
node_modules

# Generated
/.temp
/dev
/dist
`
}
