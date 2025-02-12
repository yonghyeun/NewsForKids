import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta = {
  component: Button,
  title: "shared/Button",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "Button",
  },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  render: ({ children }) => <Button>{children}</Button>,
};
