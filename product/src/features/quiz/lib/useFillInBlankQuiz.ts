import { useEffect, useState } from "react";
import { BlankQuizFool } from "@/entities/quiz/types";
import { WordWithKey } from "../types";

const createWordWithKey = (words: string[]): WordWithKey[] => {
  return words.map((word, key) => ({ word, key }));
};

export const useFillInBlankQuiz = ({
  question,
  answer,
  options,
}: Pick<BlankQuizFool, "question" | "answer" | "options">) => {
  const [submittedWords, setSubmittedWords] = useState<WordWithKey[]>([]);

  const optionWords = createWordWithKey(options);
  const questionWords = createWordWithKey(question.split(""));

  const submitAbleWords = optionWords.filter(
    (option) =>
      !submittedWords.some((submittedWord) => submittedWord.key === option.key),
  );

  const handleSubmit = (wordWithKey: WordWithKey) => {
    if (submittedWords.length === answer.length) {
      return;
    }
    setSubmittedWords([...submittedWords, wordWithKey]);
  };

  const handleRemove = (key: number) => {
    const targetIndex = submittedWords.findIndex(
      (submittedWord) => submittedWord.key === key,
    );

    if (targetIndex === submittedWords.length - 1) {
      setSubmittedWords(submittedWords.slice(0, -1));
    }
  };

  // props가 변경되면 상태 초기화
  useEffect(() => {
    setSubmittedWords([]);
  }, [question, answer, options]);

  return {
    submittedWords,
    optionWords,
    questionWords,
    submitAbleWords,
    answer,

    handleSubmit,
    handleRemove,
  };
};
