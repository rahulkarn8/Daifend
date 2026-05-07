/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Compact symbol (mobile / tight spaces) */}
      <div className="relative h-9 w-9 rounded-xl border border-white/12 bg-white/6 overflow-hidden lg:hidden">
        <img
          src="/icon.svg"
          alt="Daifend mark"
          className="h-9 w-9 object-contain"
          draggable={false}
        />
      </div>

      {/* Main logo lockup (desktop) */}
      <div className="hidden lg:block">
        <img
          src="/daifend-logo.svg"
          alt="Daifend — Securing the AI Runtime"
          className="h-12 w-auto object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}

