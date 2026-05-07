"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm({ id }: { id?: string }) {
  const [state, setState] = React.useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "loading" });
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(j?.error || "Request failed.");
      }
      (e.target as HTMLFormElement).reset();
      setState({ status: "success" });
      setTimeout(() => setState({ status: "idle" }), 3500);
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  const input =
    "h-11 w-full rounded-2xl border border-white/12 bg-black/25 px-3 text-sm text-white/80 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-[rgba(41,240,255,0.28)]";

  return (
    <form id={id} onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs text-white/55">Full name</span>
          <input className={input} name="name" placeholder="Alex Chen" required />
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-white/55">Work email</span>
          <input className={input} name="email" type="email" placeholder="alex@company.com" required />
        </label>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs text-white/55">Company</span>
          <input className={input} name="company" placeholder="Daifend Enterprise" />
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-white/55">Role</span>
          <input className={input} name="role" placeholder="CISO / CTO / Security Eng" />
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-xs text-white/55">What are you defending?</span>
        <textarea
          className={cn(input, "min-h-[120px] py-3 resize-none")}
          name="message"
          placeholder="Tell us about your AI infrastructure, RAG/memory systems, agents, or threat concerns…"
          required
        />
      </label>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2">
        <Button type="submit" variant="primary" glow="cyan" disabled={state.status === "loading"}>
          {state.status === "loading" ? "Sending…" : "Request demo / contact"}
        </Button>

        <div className="text-xs text-white/50">
          {state.status === "success" ? (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[rgba(124,255,107,0.9)]">
              Received. We’ll reach out shortly.
            </motion.span>
          ) : state.status === "error" ? (
            <span className="text-[rgba(255,61,212,0.9)]">{state.message}</span>
          ) : (
            <span>Enterprise inquiries only • Placeholder submission endpoint</span>
          )}
        </div>
      </div>
    </form>
  );
}

