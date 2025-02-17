import { it } from "@jest/globals";
import { setKeyByIndex } from "./setKeyByIndex";

it("setKeyByIndex 는 적절한 필드를 생성한 후, 주어진 index 로 값을 설정한다.", () => {
  const array = ["a", "b", "c", "d", "e"];
  const result = array.map(setKeyByIndex);
  const expected = [
    { value: "a", key: 0 },
    { value: "b", key: 1 },
    { value: "c", key: 2 },
    { value: "d", key: 3 },
    { value: "e", key: 4 },
  ];

  expect(result).toEqual(expected);
});
