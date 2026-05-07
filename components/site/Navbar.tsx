"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/site";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-black/65 via-black/25 to-transparent" />
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3" aria-label="Daifend home">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-2 text-[13px] font-medium tracking-tight rounded-full",
                    "text-white/70 hover:text-white hover:bg-white/6 transition",
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <ButtonLink href="/contact" variant="secondary" size="sm" glow="none">
                Talk to experts <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact#demo" variant="primary" size="sm" glow="cyan">
                Request demo
              </ButtonLink>
            </div>

            <button
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/85 hover:bg-white/10 transition"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden border-b border-white/10 bg-black/35 backdrop-blur-2xl"
          >
            <div className="mx-auto w-full max-w-7xl px-5 md:px-8 py-4">
              <div className="grid gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    <div className="text-sm font-semibold tracking-tight">{l.label}</div>
                    <div className="text-xs text-white/55">Explore {l.label.toLowerCase()}.</div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <ButtonLink href="/contact" variant="secondary" size="md">
                  Talk to experts <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/contact#demo" variant="primary" size="md" glow="cyan">
                  Request demo
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

