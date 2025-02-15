export const isSameArray = <T>(a: T[], b: T[]): boolean => {
  return a.length === b.length && a.every((value, index) => value === b[index]);
};
