const fs = require('fs-extra')
const path = require('path')

module.exports = (tempPath, dir, answers) => {
  return new Promise((resolve, reject) => {
    const templateSource = path.join(tempPath, 'templates', answers.styleguide.version, answers.styleguide.template)

    // Exclude package.json from copying
    // It will be enhanced with the answers and later creeated
    const filter = src => path.parse(src).base !== 'package.json'

    // Copy the template contents except the files specified above
    fs.copy(templateSource, dir, { filter }, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}
