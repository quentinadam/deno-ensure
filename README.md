# @quentinadam/ensure

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple function that asserts that a value is not undefined or null and returns the narrowed value.

## Usage

```ts
import ensure from '@quentinadam/ensure';

const a = ensure(1); // doesn't throw

const b = ensure(undefined); // throws an AssertionError

ensure(undefined, 'message'); // throws an AssertionError with a custom error message

ensure(undefined, new Error('message')); // throws a custom Error

const value: string | undefined = 'hello';
const narrowedValue = ensure(value); // narrows the type of value to string;
value.toUpperCase(); // works
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-ensure/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-ensure/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/ensure.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/ensure
[jsr-image]: https://jsr.io/badges/@quentinadam/ensure?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/ensure
