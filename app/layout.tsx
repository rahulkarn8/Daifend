import type { Metadata } from "next";
import { JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { AttackTicker } from "@/components/site/AttackTicker";
import { AIAssistantWidget } from "@/components/site/AIAssistantWidget";

const daifendSans = Sora({
  variable: "--font-daifend-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const daifendMono = JetBrains_Mono({
  variable: "--font-daifend-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daifend.ai"),
  title: {
    default: "Daifend.AI — Autonomous AI Cyber Defense",
    template: "%s — Daifend.AI",
  },
  description:
    "Daifend builds AI-native cybersecurity systems capable of detecting, deceiving, containing, and self-healing against next-generation autonomous cyber attacks.",
  applicationName: "Daifend.AI",
  keywords: [
    "AI-native cybersecurity",
    "autonomous AI threats",
    "AI deception engine",
    "AI memory poisoning",
    "cognitive cyber attacks",
    "AI supply chain security",
    "self-healing security",
    "threat intelligence",
    "defense tech",
    "zero trust AI",
  ],
  openGraph: {
    type: "website",
    siteName: "Daifend.AI",
    title: "Daifend.AI — Defending Humanity Against Autonomous AI Threats",
    description:
      "AI-native cybersecurity for the era of autonomous cyber warfare: deception, containment, self-healing runtime, and next-gen AI infrastructure protection.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Daifend.AI — Autonomous AI Cyber Defense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daifend.AI — Autonomous AI Cyber Defense",
    description:
      "Defending humanity against autonomous AI threats with deception, containment, and self-healing security.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${daifendSans.variable} ${daifendMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col daifend-noise">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:border focus:border-white/15 focus:bg-black/60 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:backdrop-blur-xl"
        >
          Skip to content
        </a>
        <Navbar />
        <AttackTicker />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <AIAssistantWidget />
      </body>
    </html>
  );
}
