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
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "accent", "neutral", "warning"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export default meta;

// Primary Variants
export const Primary: StoryObj<typeof Button> = {
  render: (args) => (
    <>
      <Button {...args} size="sm">
        Primary Small
      </Button>
      <Button {...args} size="md">
        Primary Medium
      </Button>
      <Button {...args} size="lg">
        Primary Large
      </Button>
    </>
  ),
  args: {
    variant: "primary",
  },
};

// Secondary Variants
export const Secondary: StoryObj<typeof Button> = {
  render: (args) => (
    <>
      <Button {...args} size="sm">
        Secondary Small
      </Button>
      <Button {...args} size="md">
        Secondary Medium
      </Button>
      <Button {...args} size="lg">
        Secondary Large
      </Button>
    </>
  ),
  args: {
    variant: "secondary",
  },
};

// Accent Variants
export const Accent: StoryObj<typeof Button> = {
  render: (args) => (
    <>
      <Button {...args} size="sm">
        Accent Small
      </Button>
      <Button {...args} size="md">
        Accent Medium
      </Button>
      <Button {...args} size="lg">
        Accent Large
      </Button>
    </>
  ),
  args: {
    variant: "accent",
  },
};

// Neutral Variants
export const Neutral: StoryObj<typeof Button> = {
  render: (args) => (
    <>
      <Button {...args} size="sm">
        Neutral Small
      </Button>
      <Button {...args} size="md">
        Neutral Medium
      </Button>
      <Button {...args} size="lg">
        Neutral Large
      </Button>
    </>
  ),
  args: {
    variant: "neutral",
  },
};

// Warning Variants
export const Warning: StoryObj<typeof Button> = {
  render: (args) => (
    <>
      <Button {...args} size="sm">
        Warning Small
      </Button>
      <Button {...args} size="md">
        Warning Medium
      </Button>
      <Button {...args} size="lg">
        Warning Large
      </Button>
    </>
  ),
  args: {
    variant: "warning",
  },
};
