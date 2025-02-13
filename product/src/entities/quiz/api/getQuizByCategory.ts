import { ValidDateExpression } from "@/entities/date/types";
import { apiClient } from "@/shared/api/lib";

export type QuizByCategoryResponse = {
  category: string;
  date: string;
  totalPage: number;
  currentPage: number;
} & {
  quiz: {
    type: "blank";
    question: string;
    answer: string[];
    options: string[];
  };
};

export const getQuizByCategory = (
  category: string,
  searchParams: {
    date: ValidDateExpression;
    page: number;
  },
) => {
  return apiClient.GET<QuizByCategoryResponse>({
    pathname: `/quiz/${category}`,
    searchParams,
  });
};
