# is-non-nullable

[![test](https://github.com/pnlybubbles/is-non-nullable/actions/workflows/test.yml/badge.svg)](https://github.com/pnlybubbles/is-non-nullable/actions/workflows/test.yml)

Just function to predicate non nullable with type guard.

## Install

```
$ npm install is-non-nullable
```

## Usage

```
import isNonNullable from 'is-non-nullable'

isNonNullable('foo')
//=> true

isNonNullable('')
//=> true

isNonNullable(0)
//=> true

isNonNullable(false)
//=> true

isNonNullable(null)
//=> false

isNonNullable(undefined)
//=> false
```

Type narrowing with `Array.filter`

```
const items: (number | null | undefined)[] = [0, 1, null, undefined, 2]

const filtered = items.filter(isNonNullable)
//=> number[]
```
