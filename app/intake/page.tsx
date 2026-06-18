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
    <div className="flex min-h-screen flex-col" style={{ background: "var(--color-marble)" }}>
      {/* minimal, focused header */}
      <header className="border-b" style={{ borderColor: "color-mix(in srgb, var(--color-gild) 24%, transparent)" }}>
        <div className="container-x flex items-center justify-between py-4">
          <Link href="/" className="font-display text-lg" style={{ fontWeight: 500, letterSpacing: "0.02em" }}>
            Aphrodite&rsquo;s
            <span className="ml-2 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-ink-soft">
              Color Analysis
            </span>
          </Link>
          <Link href="/" className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-rose-deep">
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
