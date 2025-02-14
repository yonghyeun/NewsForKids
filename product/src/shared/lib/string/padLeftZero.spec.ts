import { describe, it, expect } from "@jest/globals";
import { padLeftZero } from "./padLeftZero";

describe("padLeftZero Test", () => {
  it("target의 길이가 padNumber 보다 작다면 padNumber만큼 0을 채운다.", () => {
    expect(padLeftZero(1, 2)).toBe("01");
    expect(padLeftZero(1, 3)).toBe("001");
    expect(padLeftZero(1, 4)).toBe("0001");
  });

  it("target의 길이가 padNumber 보다 크다면 target을 그대로 반환한다.", () => {
    expect(padLeftZero(10, 1)).toBe("10");
    expect(padLeftZero(100, 2)).toBe("100");
    expect(padLeftZero(1000, 3)).toBe("1000");
  });
});
