export const either = <T>(
  condition: boolean | (() => boolean),
  left: T | (() => T),
  right: T | (() => T),
): T => {
  const evaluate = <U>(value: U | (() => U)): U =>
    value instanceof Function ? value() : value;

  const resultCondition = evaluate(condition);
  return resultCondition ? evaluate(right) : evaluate(left);
};
