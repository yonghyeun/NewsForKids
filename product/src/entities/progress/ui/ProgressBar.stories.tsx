import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta = {
  component: ProgressBar,
  title: "entities/progress/ProgressBar",
  argTypes: {
    current: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
  args: {
    current: 50,
    total: 100,
  },
};

export default meta;

export const Default: StoryObj<typeof ProgressBar> = {
  render: (args) => (
    <div className="w-48 h-4 flex">
      <ProgressBar {...args} />
    </div>
  ),
};
