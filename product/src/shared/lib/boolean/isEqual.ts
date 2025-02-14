/**
 * JSON.stringify를 이용하여 두 객체가 같은지 비교합니다.
 */
export const isEqual = (a: any, b: any) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
