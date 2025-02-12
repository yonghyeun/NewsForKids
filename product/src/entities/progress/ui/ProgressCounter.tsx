import React from "react";
import { Text } from "@/shared/ui";
import type { ProgressProps } from "./types";

const padLeftZero = (num: number) => num.toString().padStart(2, "0");

export const ProgressCounter: React.FC<ProgressProps> = ({
  current,
  total,
}) => {
  return (
    <Text as="p" className="flex gap-1">
      <Text as="span">{padLeftZero(current)}</Text>
      <Text as="span">/</Text>
      <Text as="span">{padLeftZero(total)}</Text>
    </Text>
  );
};
