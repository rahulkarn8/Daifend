"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 daifend-grid opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_10%,rgba(41,240,255,0.14),transparent_55%),radial-gradient(circle_at_85%_60%,rgba(177,76,255,0.12),transparent_55%),radial-gradient(circle_at_55%_110%,rgba(76,125,255,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/55" />
      <Container className="relative py-16 md:py-22">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.9, 0.2, 1] }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold tracking-[0.28em] uppercase text-white/55">
            {eyebrow}
          </div>
          <h1 className="mt-3 text-balance text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-white">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-[15px] md:text-lg leading-7 text-white/70">
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

