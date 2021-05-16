import isNonNullable from '../src/index'

test('null is not non-nullable', () => {
  expect(isNonNullable(null)).toBe(false)
})

test('undefined is not non-nullable', () => {
  expect(isNonNullable(undefined)).toBe(false)
})

test('others are non-nullable', () => {
  expect(isNonNullable(0)).toBe(true)
  expect(isNonNullable(1)).toBe(true)
  expect(isNonNullable('')).toBe(true)
  expect(isNonNullable('string')).toBe(true)
  expect(isNonNullable(true)).toBe(true)
  expect(isNonNullable(false)).toBe(true)
  expect(isNonNullable({})).toBe(true)
  expect(isNonNullable([])).toBe(true)
})
