import clsx from "clsx";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "warning"
    | "black"
    | "white"
    | "gray"
    | "red"
    | "green"
    | "blue"
    | "yellow";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
  warning: "text-warning",
  black: "text-black",
  white: "text-white",
  gray: "text-gray-500",
  red: "text-red-500",
  green: "text-green-500",
  blue: "text-blue-500",
  yellow: "text-yellow-500",
};

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  size = "xl",
  color = "white",
  className,
  children,
  ...props
}) => {
  const Tag: React.ElementType = `h${level}`;

  return (
    <Tag
      className={clsx(sizeClasses[size], colorClasses[color], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
