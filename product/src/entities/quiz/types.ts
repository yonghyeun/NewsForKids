export type Category = "news";

export interface GetQuizByCategoryParams {
  category: Category;
  date: string;
  page: number;
}

export type GetQuizByCategoryResponse = {
  category: Category;
  date: string;
  title: string;
  url: string;
  totalPage: number;
  currentPage: number;
} & {
  quiz: BlankQuizFool;
};

export interface BlankQuizFool {
  type: "blank";
  question: string;
  answer: string[];
  options: string[];
}
