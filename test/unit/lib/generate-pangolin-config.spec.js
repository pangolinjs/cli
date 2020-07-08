const generatePangolinConfig = require('../../../lib/generate-pangolin-config')
const test = require('ava')

test('generates correct Pangolin config', t => {
  const result = generatePangolinConfig({ name: 'test' })
  t.snapshot(result)
})

test('returns string', t => {
  const result = generatePangolinConfig({ name: 'test' })
  t.is(typeof result, 'string')
})
