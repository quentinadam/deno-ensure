import { AssertionError, default as assert } from '@quentinadam/assert';

/**
 * Asserts that a value is not undefined or null and returns defined value.
 *
 * @param value The value to assert
 * @param error The error to throw if the value is undefined or null. If not provided, an {@linkcode AssertionError} will be thrown. If a string is provided, it will be used as the error message for the {@linkcode AssertionError}.
 * @returns
 */
export default function ensure<T>(value: T | undefined | null, error?: Error | string): T {
  assert(value !== undefined && value !== null, error);
  return value;
}

export { AssertionError };
