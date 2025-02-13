import React from "react";
import { padLeftZero } from "@/shared/lib/string";
import { Text } from "@/shared/ui";
import type { ProgressProps } from "./types";

export const ProgressCounter: React.FC<ProgressProps> = ({
  current,
  total,
}) => {
  return (
    <Text as="p" className="flex gap-1 font-semibold">
      <Text as="span" color="accent">
        {padLeftZero(current, 2)}
      </Text>
      <Text as="span" color="accent">
        /
      </Text>
      <Text as="span" color="accent">
        {padLeftZero(total, 2)}
      </Text>
    </Text>
  );
};
