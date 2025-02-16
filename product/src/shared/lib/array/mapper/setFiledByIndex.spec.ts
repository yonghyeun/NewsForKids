import { describe, it } from "@jest/globals";
import { setFiledByIndex } from "./setFiledByIndex";

it("setFiledByIndex 는 주어진 key 로 적절한 필드를 생성한 후, 주어진 index 로 값을 설정한다.", () => {
  const KEY_NAME = "key";

  const array = ["a", "b", "c", "d", "e"];
  const result = array.map(setFiledByIndex(KEY_NAME));
  const expected = [
    { value: "a", [KEY_NAME]: 0 },
    { value: "b", [KEY_NAME]: 1 },
    { value: "c", [KEY_NAME]: 2 },
    { value: "d", [KEY_NAME]: 3 },
    { value: "e", [KEY_NAME]: 4 },
  ];

  expect(result).toEqual(expected);
});
