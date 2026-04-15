/**
 * Utility for ensuring values are not undefined or null.
 *
 * This module provides an {@linkcode ensure} function that asserts a value is defined
 * and returns the narrowed type, along with the {@linkcode AssertionError} class.
 *
 * @example
 * ```ts
 * import { ensure, AssertionError } from "@quentinadam/ensure";
 *
 * const a = ensure(1); // returns 1
 *
 * try {
 *   const b = ensure(undefined);
 * } catch (e) {
 *   // throws AssertionError
 * }
 *
 * try {
 *   const c = ensure(undefined, "Value is required");
 * } catch (e) {
 *   // throws AssertionError with custom message
 * }
 *
 * try {
 *   const d = ensure(undefined, new Error("Value is required"));
 * } catch (e) {
 *   // throws a custom Error
 * }
 *
 * const value: string | undefined = "hello";
 * const narrowedValue = ensure(value); // narrows the type to string
 * narrowedValue.toUpperCase(); // works
 * ```
 *
 * @module
 */

import { assert, AssertionError } from '@quentinadam/assert';

/**
 * Asserts that a value is not undefined or null and returns the defined value.
 *
 * @typeParam T The type of the value when defined.
 * @param value The value to assert is not undefined or null.
 * @param error The error to throw if the value is undefined or null.
 *   If not provided, an {@linkcode AssertionError} will be thrown.
 *   If a string is provided, it will be used as the error message for the {@linkcode AssertionError}.
 * @returns The value, narrowed to exclude undefined and null.
 * @throws {AssertionError} If the value is undefined or null and no custom error is provided.
 */
export function ensure<T>(value: T | undefined | null, error?: Error | string): T {
  assert(value !== undefined && value !== null, error);
  return value;
}

export { AssertionError };
