import { isShallowEqual, isDeepEqual } from "../boolean";

export const isValueAtLast = <T>(array: T[], value: T, deep?: boolean) => {
  return deep
    ? isShallowEqual(array[array.length - 1], value)
    : isDeepEqual(array[array.length - 1], value);
};
