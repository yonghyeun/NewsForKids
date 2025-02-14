"use client";

import { type PropsWithChildren, createContext, use } from "react";
import type { BlankQuizFool } from "@/entities/quiz/types";
import { isEqual } from "@/shared/lib/boolean";
import { Button, Flex } from "@/shared/ui";
import { useFillInBlankQuiz } from "../lib";
import { WordWithKey } from "../types";

interface FillInBlankQuizProps
  extends Pick<BlankQuizFool, "question" | "answer" | "options"> {
  children: React.ReactNode;
}

interface FillInBlankQuizContextValue {
  questionWords: WordWithKey[];
  submittedWords: WordWithKey[];
  submitAbleWords: WordWithKey[];
  answer: string[];

  handleSubmit: (wordWithKey: WordWithKey) => void;
  handleRemove: (key: number) => void;
}

const FillInBlankContext = createContext<FillInBlankQuizContextValue | null>(
  null,
);

const FillInBlankQuizContainer: React.FC<FillInBlankQuizProps> = ({
  question,
  answer,
  options,
  children,
}) => {
  const value = useFillInBlankQuiz({ question, answer, options });

  return (
    <FillInBlankContext value={value}>
      <Flex direction="column" gap="lg" align="center">
        {children}
      </Flex>
    </FillInBlankContext>
  );
};

const Questions = () => {
  const { questionWords, submittedWords, handleRemove } =
    use(FillInBlankContext)!;

  let submittedWordPointer = 0;

  return (
    <Flex gap="sm" align="center">
      {questionWords.map(({ word, key }) => {
        // TODO 버튼 사이즈에 w,h 추가
        if (word === "*") {
          const submittedWord = submittedWords[submittedWordPointer++];

          return (
            <Button
              key={key}
              onClick={() => handleRemove(submittedWord?.key || key)}
              variant="accent"
              size="md"
            >
              {submittedWord?.word}
            </Button>
          );
        }
        return word;
      })}
    </Flex>
  );
};

const Options = () => {
  const { submitAbleWords, handleSubmit } = use(FillInBlankContext)!;

  return (
    <Flex gap="sm">
      {submitAbleWords.map(({ word, key }) => {
        return (
          <Button key={key} onClick={() => handleSubmit({ word, key })}>
            {word}
          </Button>
        );
      })}
    </Flex>
  );
};

interface NextButtonProps {
  className?: string;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({
  className,
  onCorrect,
  onIncorrect,
}) => {
  const { submittedWords, answer } = use(FillInBlankContext)!;

  const isCorrect = isEqual(
    submittedWords.map((word) => word.word),
    answer,
  );

  return (
    <Button
      variant="primary"
      size="md"
      disabled={submittedWords.length !== answer.length}
      className={className}
      onClick={() => {
        if (isCorrect) {
          onCorrect();
        } else {
          onIncorrect();
        }
      }}
    >
      다음
    </Button>
  );
};

export const FillInBlankQuiz = Object.assign(FillInBlankQuizContainer, {
  Questions,
  Options,
  NextButton,
});
