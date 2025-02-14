import { NextRequest, NextResponse } from "next/server";
import { BlankQuizFool } from "@/entities/quiz/types";

const createRandomBlankQuiz = (): Omit<BlankQuizFool, "type"> => {
  const originalQuestion = "가나다라마바사".split("");
  const randomQuestionLength = 3;
  const randomStartIndex = Math.min(
    originalQuestion.length - 1 - randomQuestionLength,
    Math.floor(Math.random() * 10),
  );

  const question = [
    ...originalQuestion.slice(0, randomStartIndex),
    "*".repeat(randomQuestionLength),
    ...originalQuestion.slice(randomStartIndex + randomQuestionLength),
  ];

  const answer = originalQuestion.slice(
    randomStartIndex,
    randomStartIndex + randomQuestionLength,
  );

  const options = "가나다라마바사".split("");

  return {
    question: question.join(""),
    answer,
    options,
  };
};

export const GET = (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  const date = searchParams.get("date");
  const page = searchParams.get("page");

  return NextResponse.json({
    category: "news",
    date,
    totalPage: 5,
    currentPage: Number(page),
    title: "오늘의 뉴스 제목",
    // TODO : 뉴스 api 연동
    url: "https://news.com",
    quiz: {
      type: "blank",
      ...createRandomBlankQuiz(),
    },
  });
};
