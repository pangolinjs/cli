import objectFromArray from './object-from-array'
import test from 'ava'

test('objectFromArray', t => {
  const result = objectFromArray(['hello', 'world'])
  const expect = { name: 'hello', value: 'world' }

  t.deepEqual(result, expect)
})
