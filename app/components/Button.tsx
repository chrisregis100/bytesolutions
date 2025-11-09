"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/40 disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl",
  secondary:
    "bg-secondary text-white shadow-lg shadow-secondary/30 hover:-translate-y-0.5",
  outline:
    "border border-(--dark-25) bg-white text-(--dark) hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-(--dark-75) hover:text-primary",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3 text-lg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  ...props
}: ButtonProps) {
  const content = (
    <motion.span
      className="flex w-full items-center justify-center gap-2"
      initial={{ y: 4, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </motion.span>
  );

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
