import { Button, Flex } from "@/shared/ui";
import { WordWithKey } from "../../types";

interface FIllInBlankQuestionProps {
  optionsWords: WordWithKey[];
  onClick: (wordWithKey: WordWithKey) => void;
}

export const FillInBlankOptions: React.FC<FIllInBlankQuestionProps> = ({
  optionsWords,
  onClick,
}) => {
  return (
    <Flex gap="sm" align="center">
      {optionsWords.map(({ word, key }) => {
        return (
          <Button
            key={key}
            onClick={() => {
              onClick({ word, key });
            }}
            variant="primary"
            size="md"
          >
            {word}
          </Button>
        );
      })}
    </Flex>
  );
};
