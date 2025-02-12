import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta = {
  component: Text,
  title: "shared/Text",
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    as: {
      control: {
        type: "select",
        options: ["p", "span"],
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
    children: "Text",
    as: "p",
    size: "md",
    color: "black",
  },
};

export default meta;

export const Default: StoryObj<typeof Text> = {
  render: (args) => <Text {...args} />,
};

export const Primary: StoryObj<typeof Text> = {
  args: {
    color: "primary",
  },
};

export const Secondary: StoryObj<typeof Text> = {
  args: {
    color: "secondary",
  },
};

export const Accent: StoryObj<typeof Text> = {
  args: {
    color: "accent",
  },
};

export const Neutral: StoryObj<typeof Text> = {
  args: {
    color: "neutral",
  },
};

export const Warning: StoryObj<typeof Text> = {
  args: {
    color: "warning",
  },
};

export const Black: StoryObj<typeof Text> = {
  args: {
    color: "black",
  },
};

export const White: StoryObj<typeof Text> = {
  args: {
    color: "white",
    className: "bg-black p-2", // 배경색을 추가하여 흰색 텍스트가 보이도록 함
  },
};

export const Gray: StoryObj<typeof Text> = {
  args: {
    color: "gray",
  },
};

export const Red: StoryObj<typeof Text> = {
  args: {
    color: "red",
  },
};

export const Green: StoryObj<typeof Text> = {
  args: {
    color: "green",
  },
};

export const Blue: StoryObj<typeof Text> = {
  args: {
    color: "blue",
  },
};

export const Yellow: StoryObj<typeof Text> = {
  args: {
    color: "yellow",
  },
};
