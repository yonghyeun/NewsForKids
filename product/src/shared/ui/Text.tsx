import clsx from "clsx";
import React from "react";

const sizeClasses = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
} as const;

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
} as const;

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  as?: "p" | "span";
  size?: keyof typeof sizeClasses;
  color?: keyof typeof colorClasses;
}

export const Text: React.FC<TextProps> = ({
  as = "span",
  size = "md",
  color = "black",
  className,
  children,
  ...props
}) => {
  const Tag: React.ElementType = as;

  return (
    <Tag
      className={clsx(sizeClasses[size], colorClasses[color], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
