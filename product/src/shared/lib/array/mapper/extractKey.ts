export const extractKey =
  <T>(key: keyof T) =>
  (value: T) =>
    value[key];
