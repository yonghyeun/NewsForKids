export type Category = "news";

export interface BlankQuizFool {
  type: "blank";
  question: string;
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
}

export interface GetQuizByCategoryParams {
  category: Category;
  date: string;
  page: number;
}

export type GetQuizByCategoryResponse = {
  category: Category;
  date: string;
  video: VideoInfo;
  totalPage: number;
  currentPage: number;
} & {
  quiz: BlankQuizFool;
};

export interface WordWithKey {
  word: string;
  key: number;
}
