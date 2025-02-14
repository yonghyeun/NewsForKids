export const padLeftZero = (
  target: string | number | boolean,
  padNumber: number,
): string => {
  return target.toString().padStart(padNumber, "0");
};
