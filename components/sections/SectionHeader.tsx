import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="text-xs font-semibold tracking-[0.28em] uppercase text-white/55">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-[15px] md:text-lg leading-7 text-white/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}

