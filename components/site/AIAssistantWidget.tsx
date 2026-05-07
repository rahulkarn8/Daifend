"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/cn";

export function AIAssistantWidget() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mb-3 w-[340px] max-w-[calc(100vw-40px)] overflow-hidden rounded-[26px] border border-white/12 bg-black/45 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.65)] daifend-glow-border"
            role="dialog"
            aria-label="Daifend AI assistant (placeholder)"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-white/12 bg-white/6">
                  <Sparkles className="h-4 w-4 text-[rgba(41,240,255,0.9)]" />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-tight text-white">
                    Daifend Assistant
                  </div>
                  <div className="text-xs text-white/55">UI placeholder • API coming soon</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/80 hover:bg-white/10 transition"
                aria-label="Close assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70 leading-6">
                Ask about autonomous AI threats, memory poisoning, cognitive attacks, or platform
                architecture. This widget is wired for future API integration.
              </div>
              <div className="mt-3 flex gap-2">
                {["Request demo", "Platform modules", "Threat map"].map((x) => (
                  <button
                    key={x}
                    className="rounded-full border border-white/12 bg-white/6 px-3 py-2 text-xs text-white/70 hover:bg-white/10 transition"
                    onClick={() => {}}
                    type="button"
                  >
                    {x}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  className={cn(
                    "h-11 w-full rounded-2xl border border-white/12 bg-black/25 px-3 text-sm text-white/80 placeholder:text-white/35",
                    "focus:outline-none focus:ring-2 focus:ring-[rgba(41,240,255,0.28)]",
                  )}
                  placeholder="Ask Daifend…"
                  disabled
                />
                <button
                  disabled
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-4 text-sm text-white/60"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setOpen((s) => !s)}
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-white/6 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_90px_rgba(0,0,0,0.6)] transition hover:bg-white/10"
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        <MessageSquare className="h-5 w-5 text-white/80 group-hover:text-white transition" />
      </button>
    </div>
  );
}

