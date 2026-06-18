"use client";

import { useState } from "react";

/** Mirrors her real contact form (Name / Email / Phone / Message). Demo only. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="step-anim rounded-2xl p-8 text-center" style={{ background: "var(--color-canvas-2)" }}>
        <p className="font-display text-2xl text-ivory">Thank you — your note is on its way.</p>
        <p className="mt-3 text-sm text-dim">
          I&rsquo;ll reply personally with pricing and the next opening. (This is a demo — nothing was
          actually sent.)
        </p>
        <button type="button" className="line-link mt-5" onClick={() => setSent(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="c-name">
            Name
          </label>
          <input id="c-name" className="field" placeholder="Your name" required />
        </div>
        <div>
          <label className="field-label" htmlFor="c-email">
            Email
          </label>
          <input id="c-email" type="email" className="field" placeholder="you@email.com" required />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="c-phone">
          Phone <span className="font-normal text-dim">(optional)</span>
        </label>
        <input id="c-phone" className="field" placeholder="(000) 000-0000" />
      </div>
      <div>
        <label className="field-label" htmlFor="c-msg">
          Message
        </label>
        <textarea id="c-msg" className="field min-h-32 resize-y" placeholder="Tell me a little about what you're hoping for…" />
      </div>
      <button type="submit" className="btn btn-primary justify-self-start">
        Send Message
      </button>
    </form>
  );
}
