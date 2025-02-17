import { isShallowEqual, isDeepEqual } from "../boolean";

export const isValueAtLast = <T>(value: T, array: T[], deep?: boolean) => {
  return deep
    ? isDeepEqual(array[array.length - 1], value)
    : isShallowEqual(array[array.length - 1], value);
};
