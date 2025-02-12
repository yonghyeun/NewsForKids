import clsx from "clsx";
import React from "react";
import type { ProgressProps } from "./types";

interface ProgressBarProps extends ProgressProps {
  classNames?: {
    total?: string;
    progress?: string;
  };
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  classNames = {},
}) => {
  return (
    <div
      className={clsx(
        "bg-gray-200",
        "rounded-2xl w-full relative overflow-hidden",
        classNames.total,
      )}
    >
      <div
        className={clsx(
          "bg-accent h-full",
          "absolute top-0 left-0",
          "transition-all duration-500 ease-in-out",
          "rounded-2xl",
          classNames.progress,
        )}
        style={{
          width: `${(current / total) * 100}%`,
        }}
      ></div>
    </div>
  );
};
