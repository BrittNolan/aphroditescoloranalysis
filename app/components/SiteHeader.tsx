"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV } from "../lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500"
        style={{
          background: scrolled ? "color-mix(in srgb, var(--color-canvas) 85%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid color-mix(in srgb, var(--color-gold) 22%, transparent)"
            : "1px solid transparent",
        }}
      >
        <div className="container-x flex items-center justify-between py-4">
          <Link href="/" className="font-display text-xl text-ivory" style={{ letterSpacing: "0.01em" }}>
            <span style={{ fontWeight: 600 }}>Aphrodite&rsquo;s</span>
            <span className="ml-2 align-middle text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-dim">
              Color Analysis
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-text transition-colors hover:text-rose"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/#contact" className="btn btn-primary hidden sm:inline-flex !py-3 !px-5">
              Book a Reading
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center text-ivory lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Menu</span>
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
                <path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-7 transition-opacity duration-500 lg:hidden"
        style={{
          background: "var(--color-canvas)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute right-5 top-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-rose"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="font-display text-3xl text-ivory" onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/#contact" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
          Book a Reading
        </Link>
      </div>
    </>
  );
}
