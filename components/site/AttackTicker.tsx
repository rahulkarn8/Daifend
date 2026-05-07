"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const items = [
  { sev: "CRITICAL", text: "Autonomous agent probing synthetic honeynet", color: "text-[rgba(255,61,212,0.95)]" },
  { sev: "HIGH", text: "Vector memory poisoning attempt blocked", color: "text-[rgba(41,240,255,0.95)]" },
  { sev: "MEDIUM", text: "Cognitive phishing deepfake detected", color: "text-[rgba(76,125,255,0.95)]" },
  { sev: "HIGH", text: "RAG pipeline manipulation contained", color: "text-[rgba(177,76,255,0.95)]" },
  { sev: "LOW", text: "Supply chain model hash re-validated", color: "text-[rgba(124,255,107,0.95)]" },
] as const;

export function AttackTicker({ className }: { className?: string }) {
  const line = React.useMemo(() => {
    const doubled = [...items, ...items, ...items];
    return doubled;
  }, []);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-white/10 bg-black/20 backdrop-blur-xl",
        className,
      )}
      aria-label="Live attack ticker"
    >
      <div className="absolute inset-0 pointer-events-none opacity-70 bg-[radial-gradient(circle_at_20%_0%,rgba(41,240,255,0.14),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(177,76,255,0.10),transparent_45%)]" />
      <motion.div
        className="flex items-center gap-8 py-2.5"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        {line.map((it, idx) => (
          <div
            key={`${it.sev}-${idx}`}
            className="flex items-center gap-2 whitespace-nowrap text-[12px] md:text-[13px]"
          >
            <span className={cn("font-semibold tracking-[0.12em] uppercase", it.color)}>
              {it.sev}
            </span>
            <span className="text-white/65">•</span>
            <span className="text-white/70">{it.text}</span>
            <span className="text-white/25">—</span>
            <span className="font-mono text-white/45">
              {new Date(Date.now() - (idx % 5) * 1000 * 7).toISOString().slice(11, 19)}Z
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

