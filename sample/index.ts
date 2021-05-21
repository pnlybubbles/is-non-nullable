import isNonNullable from 'is-non-nullable'

const sample = [1, 2, null, 3, undefined, null, 4, 5, null]

// eslint-disable-next-line no-debugger
debugger

const result: number[] = sample.filter(isNonNullable)

console.log(sample)
console.log(result)
