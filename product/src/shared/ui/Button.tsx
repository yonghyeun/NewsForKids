"use client";

import clsx from "clsx";
import React from "react";
import { IoClose, IoArrowBack } from "react-icons/io5";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "neutral" | "warning";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...props
}) => {
  const baseStyles =
    "rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary:
      "bg-secondary text-black hover:bg-secondary-dark focus:ring-secondary",
    accent: "bg-accent text-white hover:bg-accent-dark focus:ring-accent",
    neutral: "bg-neutral text-black hover:bg-neutral-dark focus:ring-neutral",
    warning: "bg-warning text-white hover:bg-warning-dark focus:ring-warning",
  };
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export const CloseButton: React.FC<
  Omit<ButtonProps, "children" | "variant">
> = (props) => {
  return (
    <Button {...props}>
      <IoClose />
    </Button>
  );
};

export const BackwardButton: React.FC<
  Omit<ButtonProps, "children" | "variant">
> = (props) => {
  return (
    <Button {...props}>
      <IoArrowBack />
    </Button>
  );
};
