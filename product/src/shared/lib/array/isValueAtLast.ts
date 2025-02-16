import { isShallowEqual, isDeepEqual } from "../boolean";
import { either } from "../function";

export const isValueAtLast = <T>(value: T, array: T[], deep?: boolean) => {
  return either(
    !!deep,
    isShallowEqual(array[array.length - 1], value),
    isDeepEqual(array[array.length - 1], value),
  );
};
