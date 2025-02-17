export const setKeyByIndex = <T>(item: T, index: number) => {
  return {
    value: item,
    key: index,
  };
};
