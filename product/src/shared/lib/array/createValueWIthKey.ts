import type { ValueWithKey } from "./types";

export const createValueWithKey = <T>(
  value: T,
  key: number,
): ValueWithKey<T> => ({
  value,
  key,
});
