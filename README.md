# @quentinadam/ensure

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple function that asserts that a value is not undefined or null and returns the narrowed value.

## Usage

```ts
import { AssertionError, ensure } from '@quentinadam/ensure';

const a = ensure(1); // returns 1

try {
  const b = ensure(undefined);
} catch (e) {
  // throws AssertionError
}

try {
  const c = ensure(undefined, 'Value is required');
} catch (e) {
  // throws AssertionError with custom message
}

try {
  const d = ensure(undefined, new Error('Value is required'));
} catch (e) {
  // throws a custom Error
}

const value: string | undefined = 'hello';
const narrowedValue = ensure(value); // narrows the type to string
narrowedValue.toUpperCase(); // works
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-ensure/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-ensure/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/ensure.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/ensure
[jsr-image]: https://jsr.io/badges/@quentinadam/ensure?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/ensure
