import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProgressCounter } from "./ProgressCounter";

const meta: Meta = {
  component: ProgressCounter,
  title: "entities/progress/ProgressCounter",
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
    current: 1,
    total: 10,
  },
};

export default meta;

export const Default: StoryObj<typeof ProgressCounter> = {
  render: (args) => <ProgressCounter {...args} />,
};
