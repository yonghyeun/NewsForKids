import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { QuizProgressNavigationBar } from "./QuizProgressNavigationBar";

const meta: Meta = {
  component: QuizProgressNavigationBar,
  title: "widgets/quiz/QuizProgressNavigationBar",
  argTypes: {
    current: {
      control: {
        type: "range",
        min: 0,
        max: 10,
      },
    },
  },
  args: {
    current: 1,
    total: 10,
  },
};

export default meta;

export const Default: StoryObj<typeof QuizProgressNavigationBar> = {
  parameters: {
    nextjs: {
      appDirectory: "product",
    },
  },

  render: (args) => (
    <div className="w-96">
      <QuizProgressNavigationBar {...args} />
    </div>
  ),
};
