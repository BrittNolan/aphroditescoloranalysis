import Link from "next/link";
import { CONTACT, NAV } from "../lib/content";
import { RoseMark } from "./Visuals";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--color-canvas-3)", color: "var(--color-text)" }}>
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <RoseMark size={30} stroke="var(--color-rose)" />
              <p className="font-display text-2xl text-ivory" style={{ fontWeight: 600 }}>
                Aphrodite&rsquo;s Color Analysis
              </p>
            </div>
            <p className="mt-5 max-w-sm font-display text-lg italic text-rose">
              The colors that enhance your natural beauty — revealed by a human, never an algorithm.
            </p>
            <div className="mt-6 flex gap-2">
              {["#f0a884", "#d49aac", "#c07b3e", "#7a4b6e"].map((c) => (
                <span key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-ivory">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-rose">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-ivory">The Studio</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-rose">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="break-all transition-colors hover:text-rose">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
            </ul>
            <Link href="/#contact" className="btn btn-primary mt-6 !py-3 !px-5">
              Book a Reading
            </Link>
          </div>
        </div>

        <div className="hairline is-shown mt-14" />
        <div className="mt-6 flex flex-col gap-3 text-[0.66rem] uppercase tracking-[0.18em] text-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Aphrodite&rsquo;s Color Analysis</span>
          <span>100% human · Bronx, NY · Virtual worldwide</span>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-display"
        style={{
          fontWeight: 500,
          fontSize: "clamp(64px, 14vw, 190px)",
          lineHeight: 0.74,
          color: "#fff",
          opacity: 0.035,
          letterSpacing: "0.04em",
          marginTop: "0.5rem",
          whiteSpace: "nowrap",
        }}
      >
        Aphrodite
      </p>
    </footer>
  );
}
