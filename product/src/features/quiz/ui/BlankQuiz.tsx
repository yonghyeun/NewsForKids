import { PropsWithChildren, use } from "react";
import { createContext } from "react";
import { BlankQuizFool } from "@/entities/quiz/types";
import { either } from "@/shared/lib/function";
import { Button, Flex } from "@/shared/ui";
import { useBlankQuizFool } from "../lib";

const BlankQuizContext = createContext<ReturnType<
  typeof useBlankQuizFool
> | null>(null);

const Container: React.FC<PropsWithChildren<BlankQuizFool>> = ({
  children,
  ...props
}) => {
  const value = useBlankQuizFool({ ...props });
  return (
    <BlankQuizContext value={value}>
      <Flex as="main" direction="column" gap="lg" align="center">
        {children}
      </Flex>
    </BlankQuizContext>
  );
};

const Question = () => {
  const { questionWords, filledWords, handleErase } = use(BlankQuizContext)!;

  let filledWordsPointer = 0;

  return (
    <Flex gap="sm" align="center">
      {questionWords.map(({ value, key }) => {
        if (value === "*") {
          const filledWord = filledWords[filledWordsPointer++];

          if (filledWord) {
            return (
              <Button
                key={`filled-${key}`}
                onClick={() => {
                  handleErase(filledWord);
                }}
                variant="accent"
                size="md"
              >
                {filledWord.value}
              </Button>
            );
          }

          return (
            <Button key={`unfilled-${key}`} variant="accent" size="md">
              __
            </Button>
          );
        }
        return value;
      })}
    </Flex>
  );
};

const Options = () => {
  const { submitAbleWords, handleFill } = use(BlankQuizContext)!;

  return (
    <Flex gap="sm" align="center">
      {submitAbleWords.map(({ value, key, isUsed }) => {
        return (
          <Button
            key={key}
            onClick={() => {
              handleFill({ value, key });
            }}
            variant="primary"
            size="md"
            disabled={isUsed}
          >
            {value}
          </Button>
        );
      })}
    </Flex>
  );
};

interface SubmitButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: React.ReactNode;
  onCorrect: () => void;
  onIncorrect: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  onCorrect,
  onIncorrect,
  ...props
}) => {
  const { isCorrect, isFullFilled } = use(BlankQuizContext)!;

  return (
    <Button
      onClick={() => {
        either(isCorrect, onIncorrect, onCorrect);
      }}
      disabled={!isFullFilled}
      {...props}
    > 
      {children}
    </Button>
  );
};

export const BlankQuiz = Object.assign(Container, {
  Question,
  Options,
  SubmitButton,
});
