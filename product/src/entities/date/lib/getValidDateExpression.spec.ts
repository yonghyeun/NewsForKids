import { describe, it, expect } from "@jest/globals";
import { MINIMUM_DATE_EXPRESSION } from "../config";
import {
  convertDateToDateExpression,
  getValidDateExpression,
} from "./getValidDateExpression";

describe("getValidDateExpression", () => {
  it("유효한 yyyymmdd 문자열에 대해 유효한 날짜 표현식을 반환해야 한다.", () => {
    const dateString = `${Number(MINIMUM_DATE_EXPRESSION) + 1}`;
    const result = getValidDateExpression(dateString);
    expect(result).toBe(dateString);
  });

  it("유효하지 않은 yyyymmdd 문자열에 대해 현재 날짜 표현식을 반환해야 한다.", () => {
    const dateString = "invalid";
    const result = getValidDateExpression(dateString);
    const currentDate = new Date();
    const expectedDate = convertDateToDateExpression(currentDate);
    expect(result).toBe(expectedDate);
  });

  it("빈 문자열에 대해 현재 날짜 표현식을 반환해야 한다.", () => {
    const dateString = "";
    const result = getValidDateExpression(dateString);
    const currentDate = new Date();
    const expectedDate = convertDateToDateExpression(currentDate);
    expect(result).toBe(expectedDate);
  });

  it("유효하지 않은 날짜를 포함하는 yyyymmdd 문자열에 대해 현재 날짜 표현식을 반환해야 한다.", () => {
    const dateString = "20250230"; // 2월 30일은 유효하지 않은 날짜
    const result = getValidDateExpression(dateString);
    const currentDate = new Date();
    const expectedDate = convertDateToDateExpression(currentDate);
    expect(result).toBe(expectedDate);
  });

  it("최소 날짜 표현식보다 작은 yyyymmdd 문자열에 대해 현재 날짜 표현식을 반환해야 한다.", () => {
    const dateString = `${Number(MINIMUM_DATE_EXPRESSION) - 1}`; // MINIMUM_DATE_EXPRESSION보다 작은 날짜
    const result = getValidDateExpression(dateString);
    const currentDate = new Date();
    const expectedDate = convertDateToDateExpression(currentDate);
    expect(result).toBe(expectedDate);
  });

  it("유효한 yyyymmdd 문자열 배열에 대해 첫 번째 유효한 날짜 표현식을 반환해야 한다.", () => {
    const dateStrings = [`${Number(MINIMUM_DATE_EXPRESSION) + 1}`, "invalid"];
    const result = getValidDateExpression(dateStrings);
    expect(result).toBe(dateStrings[0]);
  });

  it("유효하지 않은 yyyymmdd 문자열 배열에 대해 현재 날짜 표현식을 반환해야 한다.", () => {
    const dateStrings = ["invalid", "20250230"];
    const result = getValidDateExpression(dateStrings);
    const currentDate = new Date();
    const expectedDate = convertDateToDateExpression(currentDate);
    expect(result).toBe(expectedDate);
  });
});
