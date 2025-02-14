import type { GetQuizByCategoryParams } from "../types";

export const QUIZ_QUERY_KEYS = {
  default: "quiz",
  getByCategory: ({ category, date, page }: GetQuizByCategoryParams) =>
    [QUIZ_QUERY_KEYS.default, category, date, page] as const,
} as const;
