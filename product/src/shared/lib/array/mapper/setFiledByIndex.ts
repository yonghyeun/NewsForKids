export const setFiledByIndex =
  <T>(key: string) =>
  (value: T, index: number) => ({
    value,
    [key]: index,
  });
