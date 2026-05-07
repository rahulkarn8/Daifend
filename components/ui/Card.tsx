import * as React from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--r-lg)] border border-white/10 bg-white/[0.06] backdrop-blur-2xl",
        "daifend-glow-border",
        className,
      )}
    >
      {children}
    </div>
  );
}

