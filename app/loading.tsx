"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/site/Logo";

export default function Loading() {
  return (
    <div className="min-h-[calc(100dvh-112px)] flex items-center justify-center">
      <div className="relative w-full max-w-md px-6">
        <div className="absolute inset-0 -z-10 daifend-grid opacity-40" />
        <div className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 text-center daifend-glow-border">
          <div className="mx-auto w-fit">
            <Logo />
          </div>
          <div className="mt-6 text-sm text-white/65">
            Initializing autonomous defense runtime…
          </div>
          <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/6">
            <motion.div
              className="h-full w-[40%] bg-[linear-gradient(90deg,rgba(41,240,255,0.85),rgba(177,76,255,0.85),rgba(76,125,255,0.6))]"
              initial={{ x: "-60%" }}
              animate={{ x: ["-60%", "160%"] }}
              transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.div
            className="mt-5 text-xs font-mono text-white/40"
            animate={{ opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            handshake: edge ⇄ cloud ⇄ soc
          </motion.div>
        </div>
      </div>
    </div>
  );
}

