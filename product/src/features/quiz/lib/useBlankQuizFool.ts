import { useEffect, useState } from "react";
import { BlankQuizFool } from "@/entities/quiz/types";
import {
  setFiledByIndex,
  extractKey,
  hasValueInArray,
  isSameArray,
  isSameLength,
  isValueAtLast,
} from "@/shared/lib/array";

interface ValueWithKey {
  value: string;
  key: number;
}

export const useBlankQuizFool = ({
  question,
  answer,
  options,
}: Pick<BlankQuizFool, "question" | "answer" | "options">) => {
  const [filledWords, setFilledWords] = useState<ValueWithKey[]>([]);

  const questionWords = question.map(setFiledByIndex("key"));
  const submitAbleWords = options.map(setFiledByIndex("key")).map((item) => ({
    ...item,
    isUsed: hasValueInArray(item.key, filledWords.map(extractKey("key"))),
  }));

  const isCorrect = isSameArray(filledWords.map(extractKey("value")), answer);
  const isFullFilled = isSameLength(filledWords, answer);

  const handleFill = (wordWithKey: ValueWithKey) => {
    if (isSameLength(filledWords, answer)) {
      return;
    }

    setFilledWords([...filledWords, wordWithKey]);
  };

  const handleErase = (wordWithKey: ValueWithKey) => {
    if (isValueAtLast(wordWithKey, filledWords)) {
      setFilledWords(filledWords.slice(0, -1));
    }
  };

  useEffect(() => {
    setFilledWords([]);
  }, [question, answer, options]);

  return {
    // 원본 props
    question,
    answer,
    // state
    filledWords,
    // derived state
    questionWords,
    submitAbleWords,
    isCorrect,
    isFullFilled,
    // handlers
    handleFill,
    handleErase,
  };
};
