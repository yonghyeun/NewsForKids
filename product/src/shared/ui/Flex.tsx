import clsx from "clsx";
import React from "react";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "header" | "footer" | "aside" | "main";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  gap?: "none" | "sm" | "md" | "lg";
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "wrapReverse";
}

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const gapClasses = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

const directionClasses = {
  row: "flex-row",
  column: "flex-col",
};

const wrapClasses = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  wrapReverse: "flex-wrap-reverse",
};

export const Flex: React.FC<FlexProps> = ({
  as = "div",
  justify = "start",
  align = "stretch",
  gap = "none",
  direction = "row",
  wrap = "nowrap",
  className,
  children,
  ...props
}) => {
  const Component: React.ElementType = as;

  return (
    <Component
      className={clsx(
        "flex",
        justifyClasses[justify],
        alignClasses[align],
        gapClasses[gap],
        directionClasses[direction],
        wrapClasses[wrap],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
