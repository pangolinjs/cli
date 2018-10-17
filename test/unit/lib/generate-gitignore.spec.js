import generateGitignore from '../../../lib/utils/generate-gitignore'
import test from 'ava'

test('generates correct .gitignore', t => {
  const result = generateGitignore()
  t.snapshot(result)
})

test('returns string', t => {
  const result = generateGitignore()
  t.is(typeof result, 'string')
})
