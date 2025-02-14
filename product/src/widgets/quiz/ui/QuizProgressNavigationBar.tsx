import React from "react";
import {
  ProgressBar,
  ProgressCounter,
  type ProgressProps,
} from "@/entities/progress/ui";
import { BackwardButton, Flex } from "@/shared/ui";

export const QuizProgressNavigationBar: React.FC<ProgressProps> = (props) => {
  return (
    <Flex gap="sm" align="center" as="nav">
      <BackwardButton />
      <ProgressBar
        {...props}
        classNames={{
          total: "h-4",
        }}
      />
      <ProgressCounter {...props} />
    </Flex>
  );
};
