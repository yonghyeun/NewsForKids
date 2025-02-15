import { ValidDateExpression } from "../date/types";

export type Category = "news";

export interface BlankQuizFool {
  type: "blank";
  question: string[];
  answer: string[];
  options: string[];
}

interface VideoInfo {
  videoId: string;
  title: string;
  thumbnail: {
    [key in "default" | "medium" | "high" | "standard" | "maxres"]: {
      url: string;
      width: number;
      height: number;
    };
  };
  ratio: "shorts" | "video";
}

export type QuizFool = BlankQuizFool;

export interface GetQuizByCategoryParams {
  category: Category;
  date: ValidDateExpression;
  page: number;
}

export type GetQuizByCategoryResponse = {
  category: Category;
  date: string;
  video: VideoInfo;
  totalPage: number;
  currentPage: number;
  quiz: QuizFool;
};
