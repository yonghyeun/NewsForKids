import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FillInBlankQuiz } from "./FillInBlankQuiz";

export default {
  title: "features/quiz/FillInBlankQuiz",
  component: FillInBlankQuiz,
} as Meta<typeof FillInBlankQuiz>;

export const Default: StoryObj<typeof FillInBlankQuiz> = {
  args: {
    question: "이것은 ***입니다.",
    answer: ["테", "스", "트"],
    options: ["이", "것", "은", "테", "스", "트", "입", "니", "다"],
  },
  render: (args) => (
    <FillInBlankQuiz {...args}>
      <FillInBlankQuiz.Questions />
      <FillInBlankQuiz.Options />
      <FillInBlankQuiz.NextButton
        onCorrect={() => {
          console.log("정답입니다");
        }}
        onIncorrect={() => {
          console.log("오답입니다");
        }}
      />
    </FillInBlankQuiz>
  ),
};
