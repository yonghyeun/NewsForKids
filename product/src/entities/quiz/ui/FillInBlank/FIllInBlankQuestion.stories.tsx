import { action } from "@storybook/addon-actions";
import type { StoryObj } from "@storybook/react";
import { FillInBlankQuestion } from "./FillInBlankQuestion";

const fillInBlankProps = {
  questionWords: ["가", "나", "다", "*", "*", "바"].map((word, key) => ({
    word,
    key,
  })),
  submittedWords: [{ word: "라", key: 1 }],
  onClick: action("clicked!"),
};

export default {
  title: "entities/quiz/FillInBlankQuestion",
  component: FillInBlankQuestion,
  argTypes: {
    questionWords: {
      control: {
        type: "object",
      },
    },
    submittedWord: {
      control: {
        type: "object",
      },
    },
    onClick: {
      action: "onClick",
    },
  },
  args: fillInBlankProps,
};

export const Default: StoryObj<typeof FillInBlankQuestion> = {
  render: (args) => <FillInBlankQuestion {...args} />,
};
