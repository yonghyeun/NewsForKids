import { padLeftZero } from "@/shared/lib/string/padLeftZero";
import { MINIMUM_DATE_EXPRESSION } from "../config";
import type { ValidDateExpression } from "../types";

export const isValidDateExpression = (
  dateExpression?: string,
): dateExpression is ValidDateExpression => {
  if (
    !dateExpression ||
    dateExpression.length !== 8 ||
    isNaN(Number(dateExpression)) ||
    isNaN(convertDateExpressionToDate(dateExpression).getTime())
  ) {
    return false;
  }
  return true;
};

export const convertDateToDateExpression = (
  date: Date,
): ValidDateExpression => {
  const day = padLeftZero(date.getDate(), 2);
  const month = padLeftZero(date.getMonth() + 1, 2);
  const year = date.getFullYear();

  return `${year}${month}${day}` as ValidDateExpression;
};

const convertDateExpressionToDate = (dateExpression: string): Date => {
  const year = dateExpression.slice(0, 4);
  const month = dateExpression.slice(4, 6);
  const day = dateExpression.slice(6, 8);

  return new Date(`${year}-${month}-${day}`);
};

export const getValidDateExpression = (
  dateExpression?: string | string[],
): ValidDateExpression => {
  const currentDate = convertDateToDateExpression(new Date());

  if (Array.isArray(dateExpression)) {
    dateExpression = dateExpression[0];
  }

  if (
    isValidDateExpression(dateExpression) &&
    Number(dateExpression) > Number(MINIMUM_DATE_EXPRESSION) &&
    Number(dateExpression) <= Number(currentDate)
  ) {
    return dateExpression;
  }
  return currentDate;
};
