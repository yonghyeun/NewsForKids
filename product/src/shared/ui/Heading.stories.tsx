import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta = {
  component: Heading,
  title: "shared/Heading",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    level: {
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl"],
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "accent",
          "neutral",
          "warning",
          "black",
          "white",
          "gray",
          "red",
          "green",
          "blue",
          "yellow",
        ],
      },
    },
  },
  args: {
    children: "Heading",
    level: 1,
    size: "xl",
    color: "primary",
  },
};

export default meta;

export const Default: StoryObj<typeof Heading> = {
  render: (args) => <Heading {...args} />,
};

export const Primary: StoryObj<typeof Heading> = {
  args: {
    color: "primary",
  },
};

export const Secondary: StoryObj<typeof Heading> = {
  args: {
    color: "secondary",
  },
};

export const Accent: StoryObj<typeof Heading> = {
  args: {
    color: "accent",
  },
};

export const Neutral: StoryObj<typeof Heading> = {
  args: {
    color: "neutral",
  },
};

export const Warning: StoryObj<typeof Heading> = {
  args: {
    color: "warning",
  },
};

export const Black: StoryObj<typeof Heading> = {
  args: {
    color: "black",
  },
};

export const White: StoryObj<typeof Heading> = {
  args: {
    color: "white",
    className: "bg-black p-2", // 배경색을 추가하여 흰색 텍스트가 보이도록 함
  },
};

export const Gray: StoryObj<typeof Heading> = {
  args: {
    color: "gray",
  },
};

export const Red: StoryObj<typeof Heading> = {
  args: {
    color: "red",
  },
};

export const Green: StoryObj<typeof Heading> = {
  args: {
    color: "green",
  },
};

export const Blue: StoryObj<typeof Heading> = {
  args: {
    color: "blue",
  },
};

export const Yellow: StoryObj<typeof Heading> = {
  args: {
    color: "yellow",
  },
};
