"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";
import { IoClose, IoArrowBack } from "react-icons/io5";

const baseStyles =
  "rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
  secondary:
    "bg-secondary text-black hover:bg-secondary-dark focus:ring-secondary",
  accent: "bg-accent text-white hover:bg-accent-dark focus:ring-accent",
  neutral: "bg-neutral text-black hover:bg-neutral-dark focus:ring-neutral",
  warning: "bg-warning text-white hover:bg-warning-dark focus:ring-warning",
} as const;

const sizeStyles = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...props
}) => {
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
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick: () => void;
  }
> = (props) => {
  return (
    <button {...props} className="p-4 hover:bg-gray-100 rounded-md">
      <IoClose />
    </button>
  );
};

export const BackwardButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="p-4 hover:bg-gray-100 rounded-md"
    >
      <IoArrowBack />
    </button>
  );
};
