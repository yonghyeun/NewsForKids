export const extractKey =
  <T>(key: keyof T) =>
  (item: T) =>
    item[key];
