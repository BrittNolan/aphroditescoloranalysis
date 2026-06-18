import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";
import { BraceletStrand, ColorBloom, ColorDrape, Gemstone, Swatches } from "./components/Visuals";
import {
  FAQ,
  JOURNEY,
  METHOD,
  PACKAGES,
  COMPARISON_ROWS,
  SEASONS,
  TESTIMONIALS,
} from "./lib/content";

const HERO_STONES = ["#f2a98c", "#cf97a8", "#c98b8b", "#b9763f", "#7c7a52", "#5b3a59", "#c9a86a"];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="grain relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <ColorBloom color="rgba(242,169,140,0.45)" size={520} style={{ top: -120, left: -120 }} />
          <ColorBloom color="rgba(207,151,168,0.40)" size={460} style={{ top: 40, right: -140 }} />
          <ColorBloom color="rgba(124,122,82,0.18)" size={520} style={{ bottom: -200, left: "30%" }} />

          <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal as="span" className="eyebrow block">
                Virtual seasonal color analysis · Read by a human
              </Reveal>
              <Reveal as="h1" delay={90} className="display-xl mt-6">
                Find the colors that were <em className="accent">always yours.</em>
              </Reveal>
              <Reveal as="p" delay={180} className="mt-7 max-w-xl text-lg text-ink-soft">
                A real artist studies your colors — and you leave with more than a report. You
                leave with a gemstone bracelet cut from your own palette.
              </Reveal>
              <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/intake" className="btn btn-primary">
                  Begin Your Color Intake — Free
                </Link>
                <Link href="#pricing" className="btn btn-ghost">
                  See Pricing
                </Link>
              </Reveal>
              <Reveal delay={340} className="mt-8 flex items-center gap-3 text-sm text-ink-soft">
                <span className="inline-flex h-2 w-2 rounded-full" style={{ background: "#7c7a52" }} />
                No filters. No two-minute app. Just a trained eye and the colors that are
                unmistakably you.
              </Reveal>
            </div>

            {/* Hero art: a color study with the signature bracelet */}
            <Reveal delay={200} className="relative">
              <div
                className="relative mx-auto max-w-md rounded-[28px] p-7 sm:p-9"
                style={{
                  background: "color-mix(in srgb, var(--color-marble) 70%, white)",
                  boxShadow:
                    "0 40px 80px -40px rgba(43,42,51,0.35), inset 0 0 0 1px rgba(201,168,106,0.25)",
                }}
              >
                <span className="eyebrow">Your palette, made wearable</span>
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {[
                    "#f7c59f",
                    "#f2a98c",
                    "#cf97a8",
                    "#c98b8b",
                    "#b9763f",
                    "#7c7a52",
                    "#5b3a59",
                    "#c9a86a",
                  ].map((c) => (
                    <span
                      key={c}
                      className="aspect-square rounded-lg"
                      style={{ background: c, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.05)" }}
                    />
                  ))}
                </div>
                <div className="my-7 hairline is-shown" />
                <BraceletStrand colors={HERO_STONES} size={38} />
                <p className="mt-6 text-center font-display text-xl italic text-ink-soft">
                  &ldquo;One of one, like you.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────────── Trust strip ───────────────── */}
        <section style={{ background: "var(--color-ink)", color: "var(--color-marble)" }}>
          <div className="container-x flex flex-col items-center gap-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
            {[
              ["100% human", "no AI, no filters"],
              ["The signature bracelet", "stones cut from your palette"],
              ["Free pre-session intake", "your session starts before we meet"],
              ["Virtual, worldwide", "from the Bronx to anywhere"],
            ].map(([a, b]) => (
              <div key={a} className="flex flex-col">
                <span className="font-display text-lg">{a}</span>
                <span className="text-[0.78rem] text-marble/60">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────── The Method ───────────────── */}
        <section id="method" className="section-pad">
          <div className="container-x">
            <div className="max-w-2xl">
              <Reveal as="span" className="eyebrow block">
                The Method
              </Reveal>
              <Reveal as="h2" delay={80} className="display-lg mt-5">
                I read your colors the way an artist reads a <em className="accent">canvas.</em>
              </Reveal>
              <Reveal as="p" delay={140} className="mt-5 text-lg text-ink-soft">
                Your undertone, the light you live in, the palettes nature already arranged, and
                centuries of how color has moved people — drawn together and brought to your skin.
              </Reveal>
            </div>

            <div
              className="mt-14 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-5"
              style={{ background: "color-mix(in srgb, var(--color-gild) 22%, transparent)" }}
            >
              {METHOD.map((m, i) => (
                <Reveal key={m.title} delay={i * 70} className="flex flex-col gap-3 bg-marble p-7">
                  <span className="font-display text-3xl text-rose-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl">{m.title}</h3>
                  <p className="text-sm text-ink-soft">{m.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── The four seasons ───────────────── */}
        <section style={{ background: "var(--color-marble-deep)" }} className="section-pad">
          <div className="container-x">
            <Reveal className="flex flex-col items-center text-center">
              <span className="eyebrow">Where you might land</span>
              <h2 className="display-lg mt-5 max-w-2xl">
                Four seasons, sixteen sub-tones, one of them yours
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SEASONS.map((s, i) => (
                <Reveal
                  key={s.name}
                  delay={i * 80}
                  className="group rounded-2xl bg-marble p-6 transition-transform duration-500 hover:-translate-y-1"
                  style={{ boxShadow: "0 24px 50px -36px rgba(43,42,51,0.4)" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl">{s.name}</h3>
                    <Gemstone color={s.hex} size={26} />
                  </div>
                  <p className="mt-3 min-h-[3.5rem] text-sm text-ink-soft">{s.feeling}</p>
                  <Swatches colors={s.swatches} className="mt-4" />
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="mt-12 flex flex-col items-center gap-4 text-center">
              <p className="text-ink-soft">Curious where you fall? Take the playful two-minute guess.</p>
              <Link href="/quiz" className="btn btn-ghost">
                Discover Your Season
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────────────── How it works ───────────────── */}
        <section id="journey" className="section-pad">
          <div className="container-x">
            <div className="max-w-2xl">
              <Reveal as="span" className="eyebrow block">
                How It Works
              </Reveal>
              <Reveal as="h2" delay={80} className="display-lg mt-5">
                Four steps — and the <em className="accent">first one is free.</em>
              </Reveal>
              <Reveal as="p" delay={140} className="mt-5 text-lg text-ink-soft">
                Step one takes five quiet minutes. Everything beautiful comes after.
              </Reveal>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {JOURNEY.map((step, i) => (
                <Reveal
                  key={step.no}
                  delay={i * 80}
                  className="relative flex gap-5 rounded-2xl p-7"
                  style={{ background: "var(--color-seaglass)" }}
                >
                  <span className="font-display text-4xl leading-none text-rose-deep">{step.no}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl">{step.title}</h3>
                      {step.free && (
                        <span className="rounded-full bg-rose px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-marble">
                          Free
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-ink-soft">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="mt-10">
              <Link href="/intake" className="btn btn-primary">
                Start Step One — Your Free Intake
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ───────────────── The Bracelet ───────────────── */}
        <section
          id="bracelet"
          className="relative overflow-hidden section-pad"
          style={{ background: "var(--color-ink)", color: "var(--color-marble)" }}
        >
          <ColorBloom color="rgba(201,139,139,0.25)" size={500} style={{ top: -100, right: -120 }} />
          <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow" style={{ color: "var(--color-rose)" }}>
                The Signature
              </span>
              <h2 className="display-lg mt-5 text-marble">
                Most analysts hand you a PDF.{" "}
                <em className="italic" style={{ color: "var(--color-rose)" }}>
                  I hand you something you can wear.
                </em>
              </h2>
              <p className="mt-6 max-w-lg text-marble/75">
                After your analysis, natural stones are chosen one by one to live inside your exact
                palette — then hand-strung into a bracelet made only for you. You walk away with two
                things: a written color study you&rsquo;ll keep returning to, and a gemstone bracelet
                that quietly carries your colors everywhere you go.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                {[
                  ["One of one", "matched to your palette"],
                  ["Natural stones", "hand-selected, hand-strung"],
                  ["A keepsake", "not a file to forget"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <p className="font-display text-xl text-marble">{a}</p>
                    <p className="text-sm text-marble/55">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="space-y-6">
              {SEASONS.map((s) => (
                <div key={s.name} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div className="mb-4">
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-marble/55">
                      If you&rsquo;re {s.name}
                    </span>
                  </div>
                  <BraceletStrand colors={s.swatches} size={30} />
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ───────────────── Pricing ───────────────── */}
        <section id="pricing" className="section-pad">
          <div className="container-x">
            <Reveal className="flex flex-col items-center text-center">
              <span className="eyebrow">Pricing &amp; Packages</span>
              <h2 className="display-lg mt-5 max-w-2xl">
                Real prices, right here — no &ldquo;contact us to find out.&rdquo;
              </h2>
              <p className="mt-5 max-w-xl text-ink-soft">
                Choose the experience that fits, and know exactly what you&rsquo;re getting before you
                decide. Every package begins with the free intake.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {PACKAGES.map((pkg, i) => (
                <Reveal
                  key={pkg.name}
                  delay={i * 90}
                  className="relative flex flex-col rounded-2xl p-8"
                  style={{
                    background: pkg.featured ? "var(--color-ink)" : "var(--color-marble)",
                    color: pkg.featured ? "var(--color-marble)" : "var(--color-ink)",
                    boxShadow: pkg.featured
                      ? "0 40px 80px -40px rgba(43,42,51,0.6)"
                      : "0 24px 50px -40px rgba(43,42,51,0.35), inset 0 0 0 1px rgba(201,168,106,0.28)",
                  }}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-rose px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-marble">
                      Most loved
                    </span>
                  )}
                  <h3 className="font-display text-3xl">{pkg.name}</h3>
                  <p className={`mt-2 text-sm ${pkg.featured ? "text-marble/70" : "text-ink-soft"}`}>
                    {pkg.tagline}
                  </p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="font-display text-5xl">{pkg.price}</span>
                  </div>
                  <p className={`text-xs ${pkg.featured ? "text-marble/55" : "text-ink-soft"}`}>
                    {pkg.note}
                  </p>
                  <div
                    className="my-6 h-px"
                    style={{
                      background: pkg.featured
                        ? "rgba(255,255,255,0.12)"
                        : "color-mix(in srgb, var(--color-gild) 28%, transparent)",
                    }}
                  />
                  <ul className="flex-1 space-y-3 text-sm">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex gap-3">
                        <span style={{ color: "var(--color-rose)" }}>✓</span>
                        <span className={pkg.featured ? "text-marble/85" : ""}>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/intake" className={`btn mt-8 ${pkg.featured ? "btn-light" : "btn-primary"}`}>
                    Begin with {pkg.name.replace("The ", "")}
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Comparison table */}
            <Reveal
              delay={100}
              className="mt-14 overflow-x-auto rounded-2xl"
              style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,106,0.28)" }}
            >
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr style={{ background: "var(--color-marble-deep)" }}>
                    <th className="p-4 text-left font-medium text-ink-soft">Compare</th>
                    {PACKAGES.map((p) => (
                      <th key={p.name} className="p-4 text-center font-display text-lg">
                        {p.name.replace("The ", "")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        background: i % 2 ? "transparent" : "color-mix(in srgb, var(--color-seaglass) 50%, transparent)",
                      }}
                    >
                      <td className="p-4 text-left">{row.feature}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className="p-4 text-center font-medium">
                          {v === "✓" ? <span className="text-rose-deep">✓</span> : v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={80} className="mt-6 text-center text-sm text-ink-soft">
              Not sure you&rsquo;re ready to book? The intake is free — complete it first, then decide.
              If your season doesn&rsquo;t feel right, we keep looking together until it does.
            </Reveal>
          </div>
        </section>

        {/* ───────────────── Stories ───────────────── */}
        <section id="stories" style={{ background: "var(--color-marble-deep)" }} className="section-pad">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Results &amp; Stories</span>
              <h2 className="display-lg mt-5">In their own words — and their own colors.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <Reveal
                  key={t.name}
                  delay={i * 70}
                  className="rounded-2xl bg-marble p-7"
                  style={{ boxShadow: "0 24px 50px -42px rgba(43,42,51,0.4)" }}
                >
                  <div className="mb-4 flex gap-1.5">
                    {SEASONS.map((s) => (
                      <span
                        key={s.name}
                        className="h-2 w-2 rounded-full"
                        style={{ background: s.hex, opacity: s.hex === t.season ? 1 : 0.25 }}
                      />
                    ))}
                  </div>
                  <p className="font-display text-xl leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    <Gemstone color={t.season} size={22} />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-ink-soft">{t.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Before / after drape */}
            <Reveal
              delay={120}
              className="mt-14 rounded-2xl bg-marble p-7"
              style={{ boxShadow: "0 24px 50px -42px rgba(43,42,51,0.4)" }}
            >
              <span className="eyebrow">Wrong colors vs. yours</span>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <ColorDrape from="#c9c2a0" to="#9aa17e" label="Before — washed out" className="h-32" />
                <ColorDrape from="#cf97a8" to="#c98b8b" label="After — alive" className="h-32" />
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                The right palette makes your skin look rested, your eyes brighter, and your whole face
                more &ldquo;you&rdquo; — before a stitch of makeup.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ───────────────── The Artist ───────────────── */}
        <section id="artist" className="section-pad">
          <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative">
              <div
                className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px]"
                style={{
                  background: "linear-gradient(150deg, #f1deda, #cf97a8 55%, #7c7a52)",
                  boxShadow: "0 40px 80px -45px rgba(43,42,51,0.45)",
                }}
              >
                <div className="grain absolute inset-0" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <BraceletStrand colors={["#f2a98c", "#cf97a8", "#b9763f", "#5b3a59", "#c9a86a"]} size={28} />
                  <p className="font-display text-2xl italic text-white">
                    &ldquo;Color is where beauty and art meet skin.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="eyebrow block">The Artist</span>
              <h2 className="display-lg mt-5">
                I named this studio for <em className="accent">Aphrodite</em> — the goddess of beauty.
              </h2>
              <div className="mt-6 space-y-4 text-lg text-ink-soft">
                <p>
                  Color, to me, is where beauty and art meet skin. I trained my eye across esthetics,
                  classical color theory, the palettes found in nature, and the history of how artists
                  have used color for centuries.
                </p>
                <p>
                  My job is simple: to bring the real you out of the canvas of life — and to send you
                  off not just knowing your colors, but wearing them.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["Human", "every analysis, every time"],
                  ["1-to-1", "never a template"],
                  ["Worldwide", "by video, from the Bronx"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <p className="font-display text-2xl">{a}</p>
                    <p className="text-xs text-ink-soft">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────────── FAQ ───────────────── */}
        <section style={{ background: "var(--color-marble-deep)" }} className="section-pad">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="eyebrow block">Questions</span>
              <h2 className="display-lg mt-5">
                Before you
                <br />
                begin
              </h2>
              <p className="mt-5 text-ink-soft">
                Everything you might be wondering — answered plainly. Still curious? Your intake has a
                space for any question at all.
              </p>
            </Reveal>
            <Reveal
              delay={100}
              className="divide-y"
              style={{ borderColor: "color-mix(in srgb, var(--color-gild) 30%, transparent)" }}
            >
              {FAQ.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl">
                    {item.q}
                    <span className="shrink-0 text-rose-deep transition-transform duration-300 group-open:rotate-45">
                      ＋
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-ink-soft">{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ───────────────── Final CTA ───────────────── */}
        <section
          className="relative overflow-hidden section-pad"
          style={{ background: "var(--color-ink)", color: "var(--color-marble)" }}
        >
          <ColorBloom color="rgba(242,169,140,0.30)" size={520} style={{ top: -160, left: "20%" }} />
          <ColorBloom color="rgba(91,58,89,0.5)" size={460} style={{ bottom: -200, right: "10%" }} />
          <div className="container-x relative flex flex-col items-center text-center">
            <Reveal as="span" className="eyebrow block" style={{ color: "var(--color-rose)" }}>
              The first brushstroke
            </Reveal>
            <Reveal as="h2" delay={80} className="display-lg mt-6 max-w-3xl text-marble">
              Ready to see yourself in the{" "}
              <em className="italic" style={{ color: "var(--color-rose)" }}>
                right light?
              </em>
            </Reveal>
            <Reveal as="p" delay={140} className="mt-5 max-w-xl text-marble/70">
              Begin your color intake — it&rsquo;s free, it takes five minutes, and it&rsquo;s the
              first step toward a palette you can finally trust.
            </Reveal>
            <Reveal delay={220} className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/intake" className="btn btn-light">
                Begin Your Free Intake
              </Link>
              <Link
                href="/gift"
                className="btn btn-ghost"
                style={{ color: "var(--color-marble)", borderColor: "rgba(255,255,255,0.3)" }}
              >
                Gift a Session
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
