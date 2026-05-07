"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: "cyan" | "violet" | "none";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(41,240,255,0.35)] focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm md:text-[15px]",
  lg: "h-14 px-6 text-base",
};

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "text-black bg-white/90 hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_12px_50px_rgba(0,0,0,0.55)]",
  secondary:
    "text-white bg-white/8 hover:bg-white/12 border border-white/12 backdrop-blur-xl",
  ghost:
    "text-white/80 hover:text-white bg-transparent hover:bg-white/6 border border-transparent",
};

const glowStyles: Record<NonNullable<CommonProps["glow"]>, string> = {
  none: "",
  cyan:
    "shadow-[0_0_0_1px_rgba(41,240,255,0.22),0_18px_70px_rgba(41,240,255,0.16)]",
  violet:
    "shadow-[0_0_0_1px_rgba(177,76,255,0.22),0_18px_70px_rgba(177,76,255,0.16)]",
};

export function Button({
  variant = "secondary",
  size = "md",
  glow = "none",
  className,
  children,
  ...rest
}: CommonProps &
  Omit<React.ComponentPropsWithoutRef<typeof motion.button>, keyof CommonProps>) {
  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={cn(base, sizes[size], variants[variant], glowStyles[glow], className)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  href,
  prefetch,
  variant = "secondary",
  size = "md",
  glow = "none",
  className,
  children,
  ...props
}: CommonProps &
  { href: string; prefetch?: boolean } &
  Omit<React.ComponentPropsWithoutRef<typeof MotionLink>, keyof CommonProps | "href">) {
  return (
    <MotionLink
      href={href}
      prefetch={prefetch}
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={cn(base, sizes[size], variants[variant], glowStyles[glow], className)}
      {...props}
    >
      {children}
    </MotionLink>
  );
}

