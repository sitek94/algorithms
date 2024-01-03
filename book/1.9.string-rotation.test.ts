import {expect, test} from 'bun:test'

/**
 *
 */
const isRotation = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) return false

  const s2s2 = s2 + s2

  return s2s2.includes(s1)
}

test('1.9.string-rotation', () => {
  expect(isRotation('waterbottle', 'erbottlewat')).toEqual(true)
  expect(isRotation('waterbottle', 'erbottlewatt')).toEqual(false)
  expect(isRotation('waterbottle', 'erbottlewatt')).toEqual(false)
})
