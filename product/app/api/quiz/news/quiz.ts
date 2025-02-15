import type { BlankQuizFool } from "@/entities/quiz/types";

export const createRandomBlankQuiz = (): Omit<BlankQuizFool, "type"> => {
  const originalQuestion = "가나다라마바사".split("");
  const randomQuestionLength = 3;
  const randomStartIndex = Math.min(
    originalQuestion.length - 1 - randomQuestionLength,
    Math.floor(Math.random() * 10),
  );

  const question = [
    ...originalQuestion.slice(0, randomStartIndex),
    ..."*".repeat(randomQuestionLength).split(""),
    ...originalQuestion.slice(randomStartIndex + randomQuestionLength),
  ];

  const answer = originalQuestion.slice(
    randomStartIndex,
    randomStartIndex + randomQuestionLength,
  );

  const options = "가나다라마바사".split("");

  return {
    question,
    answer,
    options,
  };
};
