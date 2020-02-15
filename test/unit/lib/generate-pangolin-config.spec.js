const generatePangolinConfig = require('../../../lib/utils/generate-pangolin-config')
const test = require('ava')

test('generates correct Pangolin config', t => {
  const result = generatePangolinConfig('test')
  t.snapshot(result)
})

test('returns string', t => {
  const result = generatePangolinConfig('test')
  t.is(typeof result, 'string')
})

test('throws on empty ‘name’ parameter', t => {
  const actual = t.throws(() => { generatePangolinConfig() }).message
  const expected = 'Paramater ‘name’ is necessary.'

  t.is(actual, expected)
})

test('throws on non-string ‘path’ parameter', t => {
  const actualArray = t.throws(() => { generatePangolinConfig([]) }).message
  const actualFunction = t.throws(() => { generatePangolinConfig(() => {}) }).message
  const actualNumber = t.throws(() => { generatePangolinConfig(2) }).message
  const actualObject = t.throws(() => { generatePangolinConfig({}) }).message
  const expected = 'Parameter ‘name’ must be a string.'

  t.is(actualArray, expected)
  t.is(actualFunction, expected)
  t.is(actualNumber, expected)
  t.is(actualObject, expected)
})
