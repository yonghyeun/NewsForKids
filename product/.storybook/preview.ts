import React from "react";
import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { ReactQueryProvider } from "../src/app/ReactQueryProvider";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    decorators: [
      (story) => {
        React.createElement(ReactQueryProvider, {
          children: React.createElement(story),
        });
      },
    ],
  },
};

export default preview;
