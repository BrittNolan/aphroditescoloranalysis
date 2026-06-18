import Link from "next/link";
import { CONTACT, NAV } from "../lib/content";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#211f27", color: "#cfc9d0" }}>
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl text-marble" style={{ fontWeight: 400 }}>
              Aphrodite&rsquo;s Color Analysis
            </p>
            <p className="mt-4 max-w-sm font-display text-lg italic" style={{ color: "#c98b8b" }}>
              Artistry over algorithms. A palette you can wear.
            </p>
            <div className="mt-6 flex gap-2">
              {["#f2a98c", "#cf97a8", "#b9763f", "#5b3a59"].map((c) => (
                <span key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-marble">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-rose">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/quiz" className="transition-colors hover:text-rose">
                  Discover Your Season
                </Link>
              </li>
              <li>
                <Link href="/gift" className="transition-colors hover:text-rose">
                  Gift a Session
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-marble">The Studio</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-rose">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="transition-colors hover:text-rose break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
              <li className="text-rose">{CONTACT.instagram}</li>
            </ul>
            <Link href="/intake" className="btn btn-primary mt-6 !py-3 !px-5">
              Begin Your Intake
            </Link>
          </div>
        </div>

        <div className="hairline is-shown mt-14" />
        <div className="mt-6 flex flex-col gap-3 text-[0.66rem] uppercase tracking-[0.18em] text-[#8b8691] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Aphrodite&rsquo;s Color Analysis</span>
          <span>Read by a human · Bronx, NY · Worldwide by video</span>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none text-center font-display"
        style={{
          fontWeight: 300,
          fontSize: "clamp(70px, 15vw, 200px)",
          lineHeight: 0.7,
          color: "#fff",
          opacity: 0.04,
          letterSpacing: "0.08em",
          marginTop: "0.5rem",
          whiteSpace: "nowrap",
        }}
      >
        Aphrodite
      </p>
    </footer>
  );
}
