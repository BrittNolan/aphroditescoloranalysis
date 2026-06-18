import type { Metadata } from "next";
import Link from "next/link";
import IntakeStudio from "./IntakeStudio";

export const metadata: Metadata = {
  title: "Before Your Consultation — The Color Intake",
  description:
    "A free, five-minute guided intake before your color analysis. Capture your skin in natural light, share your style goals, and bring your questions so your session goes straight to the good part.",
};

export default function IntakePage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--color-canvas)" }}>
      <header className="border-b" style={{ borderColor: "color-mix(in srgb, var(--color-gold) 22%, transparent)" }}>
        <div className="container-x flex items-center justify-between py-4">
          <Link href="/" className="font-display text-lg text-ivory" style={{ fontWeight: 600, letterSpacing: "0.01em" }}>
            Aphrodite&rsquo;s
            <span className="ml-2 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-dim">
              Color Analysis
            </span>
          </Link>
          <Link href="/" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-dim transition-colors hover:text-rose">
            Close
          </Link>
        </div>
      </header>
      <main className="flex-1 px-5 py-14 sm:py-20">
        <IntakeStudio />
      </main>
    </div>
  );
}
