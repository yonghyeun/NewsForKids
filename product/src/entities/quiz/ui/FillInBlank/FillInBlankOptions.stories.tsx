import { action } from "@storybook/addon-actions";
import type { StoryObj } from "@storybook/react";
import { FillInBlankOptions } from "./FillInBlankOptions";

const fillInBlankProps = {
  optionsWords: ["가", "나", "다"].map((word, key) => ({ word, key })),
  onClick: action("onClick"),
};

export default {
  title: "entities/quiz/FillInBlankOptions",
  component: FillInBlankOptions,

  argTypes: {
    optionsWords: {
      control: {
        type: "object",
      },
    },
    onChange: {
      action: "onChange",
    },
  },
  args: fillInBlankProps,
};

export const Default: StoryObj<typeof FillInBlankOptions> = {
  render: (args) => <FillInBlankOptions {...args} />,
};
