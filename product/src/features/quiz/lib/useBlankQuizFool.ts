import { useEffect, useState } from "react";
import { BlankQuizFool } from "@/entities/quiz/types";
import {
  createValueWithKey,
  extractKey,
  isSameArray,
  isSameLength,
  isValueAtLast,
} from "@/shared/lib/array";
import type { ValueWithKey } from "@/shared/lib/array";

export const useBlankQuizFool = ({
  question,
  answer,
  options,
}: Pick<BlankQuizFool, "question" | "answer" | "options">) => {
  const [filledWords, setFilledWords] = useState<ValueWithKey<string>[]>([]);

  const questionWords = question.map(createValueWithKey);
  const submitAbleWords = options.map(createValueWithKey).map((item) => ({
    ...item,
    isUsed: filledWords.map(extractKey("key")).includes(item.key),
  }));

  const handleFill = (ValueWithKey: ValueWithKey<string>) => {
    if (isSameLength(filledWords, answer)) {
      return;
    }

    setFilledWords([...filledWords, ValueWithKey]);
  };

  const handleErase = (valueWithKey: ValueWithKey<string>) => {
    if (isValueAtLast(valueWithKey, filledWords)) {
      setFilledWords(filledWords.slice(0, -1));
    }
  };

  const isCorrect = isSameArray(filledWords.map(extractKey("value")), answer);

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
    // handlers
    handleFill,
    handleErase,
  };
};
