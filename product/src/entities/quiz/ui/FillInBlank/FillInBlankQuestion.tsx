import { Flex, Button } from "@/shared/ui";
import type { WordWithKey } from "../../types";

interface FIllInBlankQuestionProps {
  questionWords: WordWithKey[];
  submittedWords: WordWithKey[];
  onClick: (key: number) => void;
}

export const FillInBlankQuestion: React.FC<FIllInBlankQuestionProps> = ({
  questionWords,
  submittedWords,
  onClick,
}) => {
  let submittedWordPointer = 0;

  return (
    <Flex gap="sm" align="center">
      {questionWords.map(({ word, key }) => {
        if (word === "*") {
          const submittedWord = submittedWords[submittedWordPointer++];

          return (
            <Button
              key={key}
              onClick={() => {
                onClick(submittedWord?.key || key);
              }}
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
