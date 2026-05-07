import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/platform", label: "Platform" },
      { href: "/live-threats", label: "Live Threats" },
      { href: "/industries", label: "Industries" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Research",
    links: [
      { href: "/research", label: "Innovation" },
      { href: "/resources", label: "Whitepapers" },
      { href: "/resources", label: "Threat reports" },
      { href: "/resources", label: "Docs (soon)" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "/contact#demo", label: "Request demo" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/25 backdrop-blur-2xl">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            {/* Main brand lockup */}
            <div className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/daifend-logo.svg"
                alt="Daifend — Securing the AI Runtime"
                className="h-11 w-auto object-contain"
                draggable={false}
              />
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
              AI-native cybersecurity designed for autonomous threats, deception warfare,
              cognitive attacks, and self-healing AI infrastructure protection.
            </p>
            <div className="mt-5 flex items-center gap-3 text-sm">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white/75 hover:text-white transition"
              >
                Talk to our AI security experts <ArrowUpRight className="h-4 w-4" />
              </Link>
              <span className="text-white/25">•</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-white/60 hover:text-white transition"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
                  {c.title}
                </div>
                <div className="mt-4 grid gap-2">
                  {c.links.map((l) => (
                    <Link
                      key={l.href + l.label}
                      href={l.href}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} Daifend.AI. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-white/55">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span className="text-white/25">•</span>
            <Link href="/contact" className="hover:text-white transition">
              Security contact
            </Link>
            <span className="text-white/25">•</span>
            <a
              href={siteConfig.links.linkedin}
              className="hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.x}
              className="hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

