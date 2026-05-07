"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const frames = [
  { ts: "00:00.000Z", line: "sensor/edge: anomaly detected in RAG retrieval path" },
  { ts: "00:00.112Z", line: "intel: autonomous agent fingerprint match — deception-aware variant" },
  { ts: "00:00.198Z", line: "policy: elevate severity=HIGH • intent score=82/100" },
  { ts: "00:00.231Z", line: "deception: activating synthetic infrastructure (honeynet cluster=7)" },
  { ts: "00:00.410Z", line: "containment: isolating embedding store • snapshot=secured" },
  { ts: "00:00.672Z", line: "self-heal: restoring memory from verified provenance checkpoint" },
  { ts: "00:00.918Z", line: "verify: supply-chain trust score: 0.98 • policy hash verified" },
  { ts: "00:01.143Z", line: "result: threat neutralized • post-incident analysis queued" },
] as const;

export function TerminalConsole({ className }: { className?: string }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % (frames.length + 1)), 900);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className={cn(
        "rounded-[26px] border border-white/12 bg-black/35 backdrop-blur-2xl overflow-hidden",
        className,
      )}
      aria-label="Animated terminal console"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[rgba(255,61,212,0.75)]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[rgba(76,125,255,0.75)]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[rgba(124,255,107,0.75)]" />
        </div>
        <div className="text-xs font-mono text-white/50">daifend://runtime</div>
      </div>
      <div className="p-4 font-mono text-[12px] leading-5">
        <div className="text-white/45">$ daifend simulate --scenario autonomous-ai-attack</div>
        <div className="mt-2 grid gap-1">
          {frames.slice(0, i).map((f, idx) => (
            <motion.div
              key={f.ts + idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="flex gap-3"
            >
              <span className="text-white/35">{f.ts}</span>
              <span className="text-white/70">{f.line}</span>
            </motion.div>
          ))}
          <motion.div
            className="flex gap-3"
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 1.0, repeat: Infinity }}
          >
            <span className="text-white/35">{frames[Math.min(i, frames.length - 1)]?.ts ?? "00:00.000Z"}</span>
            <span className="text-[rgba(41,240,255,0.85)]">▍</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

