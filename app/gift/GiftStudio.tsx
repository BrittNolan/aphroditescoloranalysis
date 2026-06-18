"use client";

import Link from "next/link";
import { useState } from "react";
import { PACKAGES } from "../lib/content";
import { BraceletStrand } from "../components/Visuals";

export default function GiftStudio() {
  const [pkgIdx, setPkgIdx] = useState(1);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const pkg = PACKAGES[pkgIdx];

  if (sent) {
    return (
      <div className="step-anim mx-auto max-w-xl text-center">
        <div className="mx-auto mb-8">
          <BraceletStrand colors={["#f2a98c", "#cf97a8", "#b9763f", "#5b3a59", "#c9a86a"]} size={30} />
        </div>
        <span className="eyebrow">On its way</span>
        <h1 className="display-lg mt-4">
          A beautiful gift is <em className="accent">ready to send.</em>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">
          {to ? `${to} ` : "Your recipient "}will receive a digital gift for the{" "}
          <strong>{pkg.name}</strong> experience, with your note and a link to begin their free intake
          whenever they&rsquo;re ready.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Back to the Studio
          </Link>
          <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>
            Send Another
          </button>
        </div>
        <p className="mt-6 text-xs text-ink-soft">
          This is a demonstration — nothing was actually charged or sent.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1fr]">
      {/* form */}
      <div>
        <span className="eyebrow">Gift a Session</span>
        <h1 className="display-lg mt-4">
          Give someone the rare gift of <em className="accent">seeing themselves clearly.</em>
        </h1>
        <p className="mt-5 text-ink-soft">
          A personal color study and a gemstone keepsake, made just for them. Gift notes are sent
          digitally; they choose a time that suits them.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <span className="field-label">Choose the experience</span>
            <div className="grid gap-3">
              {PACKAGES.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => setPkgIdx(i)}
                  className="flex items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-all"
                  style={{
                    borderColor: i === pkgIdx ? "var(--color-rose)" : "color-mix(in srgb, var(--color-ink) 14%, transparent)",
                    background: i === pkgIdx ? "var(--color-blush)" : "#fff",
                  }}
                >
                  <span className="flex flex-col">
                    <span className="font-display text-xl">{p.name}</span>
                    <span className="text-sm text-ink-soft">{p.tagline}</span>
                  </span>
                  <span className="shrink-0 font-display text-2xl">{p.price}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="to">
                To
              </label>
              <input id="to" className="field" placeholder="Their name" value={to} onChange={(e) => setTo(e.target.value)} />
            </div>
            <div>
              <label className="field-label" htmlFor="from">
                From
              </label>
              <input id="from" className="field" placeholder="Your name" value={from} onChange={(e) => setFrom(e.target.value)} />
            </div>
          </div>
          <div>
            <label className="field-label" htmlFor="note">
              A short note <span className="font-normal text-ink-soft">(optional)</span>
            </label>
            <textarea
              id="note"
              className="field min-h-24 resize-y"
              placeholder="Something lovely to open with…"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary w-full sm:w-auto" onClick={() => setSent(true)}>
            Send This Gift — {pkg.price}
          </button>
        </div>
      </div>

      {/* live gift-card preview */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="mb-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
          Live preview
        </p>
        <div
          className="grain relative overflow-hidden rounded-[28px] p-8 text-center"
          style={{
            background: "linear-gradient(150deg, #2b2a33, #4a3a47)",
            color: "var(--color-marble)",
            boxShadow: "0 40px 80px -40px rgba(43,42,51,0.6)",
          }}
        >
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em]" style={{ color: "var(--color-rose)" }}>
            Aphrodite&rsquo;s Color Analysis
          </span>
          <p className="mt-6 font-display text-3xl">A Gift of Color</p>
          <div className="my-6">
            <BraceletStrand colors={["#f2a98c", "#cf97a8", "#c98b8b", "#b9763f", "#5b3a59"]} size={26} />
          </div>
          <p className="text-sm text-marble/70">For</p>
          <p className="font-display text-2xl">{to || "someone special"}</p>
          <p className="mt-4 min-h-[3rem] px-2 font-display text-lg italic text-marble/85">
            {note ? `“${note}”` : "“Here's to seeing yourself in your best light.”"}
          </p>
          <div className="my-5 h-px" style={{ background: "rgba(255,255,255,0.14)" }} />
          <div className="flex items-center justify-between text-sm">
            <span className="text-marble/60">From {from || "you"}</span>
            <span className="font-display text-lg">{pkg.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
