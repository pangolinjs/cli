const generateGitignore = require('../../../lib/generate-gitignore')
const test = require('ava')

test('generates correct .gitignore', t => {
  const result = generateGitignore()
  t.snapshot(result)
})

test('returns string', t => {
  const result = generateGitignore()
  t.is(typeof result, 'string')
})
