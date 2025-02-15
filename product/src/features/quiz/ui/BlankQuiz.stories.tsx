import type { StoryObj } from "@storybook/react";
import { BlankQuiz } from "./BlankQuiz";

export default {
  title: "Features/Quiz/BlankQuiz",
  component: BlankQuiz,
  argTypes: {
    question: {
      control: {
        type: "array",
      },
    },
    answer: {
      control: {
        type: "array",
      },
    },
    options: {
      control: {
        type: "array",
      },
    },
  },

  args: {
    question: "가나다라***아자차".split(""),
    answer: "마바사".split(""),
    options: "라마바사아자".split(""),
  },
};

export const Default: StoryObj<typeof BlankQuiz> = {
  render: (args) => (
    <BlankQuiz {...args}>
      <BlankQuiz.Question />
      <BlankQuiz.Options />
      <div className="w-full flex justify-end">
        <BlankQuiz.SubmitButton
          onCorrect={() => console.log("correct")}
          onIncorrect={() => console.log("incorrect")}
        >
          제출
        </BlankQuiz.SubmitButton>
      </div>
    </BlankQuiz>
  ),
};
