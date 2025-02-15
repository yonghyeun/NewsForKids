import { useEffect, useState } from "react";
import { BlankQuizFool } from "@/entities/quiz/types";
import {
  createValueWithKey,
  isSameLength,
  isIncludeValue,
  isValueAtLast,
} from "@/shared/lib/array";
import type { ValueWithKey } from "@/shared/lib/array";

export const useFillInBlankQuiz = ({
  question,
  answer,
  options,
}: Pick<BlankQuizFool, "question" | "answer" | "options">) => {
  const [submittedWords, setSubmittedWords] = useState<ValueWithKey<string>[]>(
    [],
  );

  const questionWords = question.map(createValueWithKey);
  const submitAbleWords = options
    .map(createValueWithKey)
    .filter((value) => isIncludeValue(submittedWords, value));

  const handleSubmit = (ValueWithKey: ValueWithKey<string>) => {
    if (isSameLength(submittedWords, question)) {
      return;
    }

    setSubmittedWords([...submittedWords, ValueWithKey]);
  };

  const handleRemove = (valueWithKey: ValueWithKey<string>) => {
    if (isValueAtLast(submittedWords, valueWithKey)) {
      setSubmittedWords(submittedWords.slice(0, -1));
    }
  };

  useEffect(() => {
    setSubmittedWords([]);
  }, [question, answer, options]);

  return {
    submittedWords,
    questionWords,
    submitAbleWords,
    answer,

    handleSubmit,
    handleRemove,
  };
};
