import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";
import {
  BraceletStrand,
  ColorDrape,
  Gemstone,
  Glow,
  Ornament,
  RoseMark,
  Swatches,
} from "./components/Visuals";
import { CONTACT, FAQ, JOURNEY, METHOD, RECEIVE, SEASONS } from "./lib/content";

const HERO_STONES = ["#f0a884", "#d49aac", "#d98e94", "#c07b3e", "#8c9070", "#7a4b6e", "#c9a86a"];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="grain relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
          <Glow color="rgba(217,142,148,0.30)" size={620} style={{ top: -160, left: -120 }} />
          <Glow color="rgba(201,168,106,0.18)" size={520} style={{ top: 120, right: -120 }} />
          <Glow color="rgba(122,75,110,0.30)" size={560} style={{ bottom: -240, left: "35%" }} />
          <RoseMark
            size={300}
            stroke="rgba(217,142,148,0.10)"
            style={{ position: "absolute", top: 60, right: "6%" }}
          />

          <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal as="span" className="eyebrow block">
                100% Human · No Filters
              </Reveal>
              <Reveal as="h1" delay={90} className="display-xl mt-6">
                Find Your <em className="accent">Unique</em> Colors
              </Reveal>
              <Reveal as="p" delay={180} className="mt-7 max-w-xl text-lg text-text">
                We analyze to reveal the colors that enhance your natural beauty — by a skilled artist,
                without any AI or filters. Meet virtually to discover your secret colors, and leave with
                a written report and a bracelet made of stones in your own palette.
              </Reveal>
              <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/#contact" className="btn btn-primary">
                  Book Your Reading
                </Link>
                <Link href="/intake" className="btn btn-ghost">
                  Try the Intake Tool
                </Link>
              </Reveal>
              <Reveal delay={340} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-dim">
                <span className="flex items-center gap-2">
                  <Gemstone color="#d49aac" size={14} /> A written color report
                </span>
                <span className="flex items-center gap-2">
                  <Gemstone color="#c9a86a" size={14} /> A gemstone bracelet in your colors
                </span>
              </Reveal>
            </div>

            {/* Hero art */}
            <Reveal delay={200} className="relative">
              <div
                className="grain relative mx-auto max-w-md overflow-hidden rounded-[28px] p-8 sm:p-10"
                style={{
                  background: "linear-gradient(160deg, #241a1c, #1a1411 60%, #14100e)",
                  boxShadow: "0 50px 90px -45px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(201,168,106,0.22)",
                }}
              >
                <Glow color="rgba(217,142,148,0.25)" size={300} style={{ top: -60, right: -40 }} />
                <div className="relative flex items-center justify-between">
                  <span className="eyebrow">Your palette</span>
                  <RoseMark size={28} stroke="var(--color-rose)" />
                </div>
                <div className="relative mt-5 grid grid-cols-4 gap-2">
                  {["#f0a884", "#f7c59f", "#d49aac", "#d98e94", "#c07b3e", "#8c9070", "#7a4b6e", "#c9a86a"].map((c) => (
                    <span
                      key={c}
                      className="aspect-square rounded-lg"
                      style={{ background: c, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
                    />
                  ))}
                </div>
                <div className="relative my-8 hairline is-shown" />
                <BraceletStrand colors={HERO_STONES} size={38} className="relative" />
                <p className="relative mt-7 text-center font-display text-xl italic text-rose">
                  &ldquo;Worn, not just filed away.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────────── Promise strip ───────────────── */}
        <section style={{ background: "var(--color-canvas-2)" }}>
          <div className="container-x flex flex-col items-center gap-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
            {[
              ["No AI, no filters", "every reading is human"],
              ["A single session", "grounded in your input today"],
              ["A written report", "concrete color recommendations"],
              ["A gemstone bracelet", "stones in your unique colors"],
            ].map(([a, b]) => (
              <div key={a} className="flex flex-col">
                <span className="font-display text-lg text-ivory">{a}</span>
                <span className="text-[0.78rem] text-dim">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────────── The Reading ───────────────── */}
        <section id="reading" className="section-pad">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <Ornament />
              </Reveal>
              <Reveal as="span" delay={60} className="eyebrow mt-7 block">
                What is Aphrodite&rsquo;s Color Analysis?
              </Reveal>
              <Reveal as="h2" delay={120} className="display-lg mt-5">
                A reading that brings the real you out of the{" "}
                <em className="accent">canvas of life.</em>
              </Reveal>
              <Reveal as="p" delay={180} className="mx-auto mt-6 max-w-2xl text-lg text-text">
                A tailored, entirely human consultation that reveals your unique color palette — the
                shades that make you look and feel your best. One virtual session, grounded in your
                own input and choices, ending in concrete color recommendations you&rsquo;ll keep.
              </Reveal>
            </div>
          </div>
        </section>

        {/* ───────────────── The Method ───────────────── */}
        <section id="method" style={{ background: "var(--color-canvas-2)" }} className="section-pad">
          <div className="container-x">
            <div className="max-w-2xl">
              <Reveal as="span" className="eyebrow block">
                The Method
              </Reveal>
              <Reveal as="h2" delay={80} className="display-lg mt-5">
                Five lenses, one <em className="accent">palette.</em>
              </Reveal>
              <Reveal as="p" delay={140} className="mt-5 text-lg text-text">
                Your reading combines esthetics, traditional color analysis, the study of colors found
                in nature, world art history, and your environment. This is not available anywhere else.
              </Reveal>
            </div>

            <div
              className="mt-14 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-5"
              style={{ background: "color-mix(in srgb, var(--color-gold) 18%, transparent)" }}
            >
              {METHOD.map((m, i) => (
                <Reveal key={m.title} delay={i * 70} className="flex flex-col gap-3 p-7" style={{ background: "var(--color-canvas)" }}>
                  <span className="font-display text-3xl text-rose">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl text-ivory">{m.title}</h3>
                  <p className="text-sm text-text">{m.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── What you receive ───────────────── */}
        <section id="receive" className="section-pad">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow block">What You Receive</span>
              <h2 className="display-lg mt-5">
                You don&rsquo;t just learn your colors — <em className="accent">you keep them.</em>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {RECEIVE.map((d, i) => (
                <Reveal
                  key={d.name}
                  delay={i * 90}
                  className="rounded-2xl p-8"
                  style={{ background: "var(--color-canvas-2)", boxShadow: "inset 0 0 0 1px rgba(201,168,106,0.18)" }}
                >
                  <div className="flex items-center gap-3">
                    <Gemstone color={i === 0 ? "#d49aac" : "#c9a86a"} size={24} />
                    <h3 className="font-display text-2xl text-ivory">{d.name}</h3>
                  </div>
                  <p className="mt-4 text-text">{d.body}</p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {d.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-rose">✦</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── The Bracelet ───────────────── */}
        <section
          id="bracelet"
          className="grain relative overflow-hidden section-pad"
          style={{ background: "var(--color-canvas-3)" }}
        >
          <Glow color="rgba(217,142,148,0.20)" size={520} style={{ top: -120, right: -120 }} />
          <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow block">The Signature</span>
              <h2 className="display-lg mt-5">
                A bracelet made of <em className="accent">your colors.</em>
              </h2>
              <p className="mt-6 max-w-lg text-text">
                It&rsquo;s the part no one else offers. After your reading, natural stones are chosen to
                live inside your unique color set and strung into a bracelet made for you alone — so your
                palette goes with you, long after the session ends.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                {[
                  ["One of one", "matched to your palette"],
                  ["Natural stones", "hand-selected for your set"],
                  ["A keepsake", "worn, not filed away"],
                ].map(([a, b]) => (
                  <div key={a}>
                    <p className="font-display text-xl text-ivory">{a}</p>
                    <p className="text-sm text-dim">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="space-y-5">
              {SEASONS.map((s) => (
                <div key={s.name} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.035)" }}>
                  <span className="mb-4 block text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-dim">
                    A {s.name} set
                  </span>
                  <BraceletStrand colors={s.swatches} size={30} />
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ───────────────── The Seasons ───────────────── */}
        <section style={{ background: "var(--color-canvas-2)" }} className="section-pad">
          <div className="container-x">
            <Reveal className="flex flex-col items-center text-center">
              <span className="eyebrow">Where you might land</span>
              <h2 className="display-lg mt-5 max-w-2xl">Every palette begins with a season</h2>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SEASONS.map((s, i) => (
                <Reveal
                  key={s.name}
                  delay={i * 80}
                  className="rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1"
                  style={{ background: "var(--color-canvas)", boxShadow: "0 24px 50px -36px rgba(0,0,0,0.7)" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl text-ivory">{s.name}</h3>
                    <Gemstone color={s.hex} size={26} />
                  </div>
                  <p className="mt-3 min-h-[3.5rem] text-sm text-text">{s.feeling}</p>
                  <Swatches colors={s.swatches} className="mt-4" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── The Experience ───────────────── */}
        <section className="section-pad">
          <div className="container-x">
            <div className="max-w-2xl">
              <Reveal as="span" className="eyebrow block">
                The Experience
              </Reveal>
              <Reveal as="h2" delay={80} className="display-lg mt-5">
                From first hello to a palette you can <em className="accent">wear.</em>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {JOURNEY.map((step, i) => (
                <Reveal
                  key={step.no}
                  delay={i * 80}
                  className="relative flex gap-5 rounded-2xl p-7"
                  style={{ background: "var(--color-canvas-2)" }}
                >
                  <span className="font-display text-4xl leading-none text-rose">{step.no}</span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-2xl text-ivory">{step.title}</h3>
                      {step.free && (
                        <span className="rounded-full bg-rose px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em]" style={{ color: "#1a1310" }}>
                          Free
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-text">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────── The Tool (intake showcase) ───────────────── */}
        <section
          className="grain relative overflow-hidden section-pad"
          style={{ background: "var(--color-canvas-3)" }}
        >
          <Glow color="rgba(201,168,106,0.16)" size={500} style={{ bottom: -200, left: "10%" }} />
          <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="eyebrow block">Before We Meet</span>
              <h2 className="display-lg mt-5">
                A quiet five-minute <em className="accent">intake.</em>
              </h2>
              <p className="mt-6 max-w-xl text-text">
                Your session starts the moment you share your colors. This little tool captures your
                skin in honest daylight, your style goals, and your questions — so when we sit down
                together, we skip the small talk and go straight to the good part.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Guided skin-tone photos with gentle lighting tips",
                  "Your style goals and the questions on your mind",
                  "Saved as you go — pick up right where you left off",
                ].map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-rose">✦</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link href="/intake" className="btn btn-primary mt-8">
                Try the Intake Tool
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div
                className="rounded-2xl p-6"
                style={{ background: "var(--color-canvas-2)", boxShadow: "inset 0 0 0 1px rgba(201,168,106,0.2)" }}
              >
                <div className="mb-2 flex items-center justify-between text-xs text-dim">
                  <span>Step 2 of 6 · Capture your colors</span>
                  <span>33%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "33%" }} />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Full face", "Neck", "Inner wrist"].map((label) => (
                    <div
                      key={label}
                      className="flex aspect-[3/4] flex-col items-center justify-center rounded-xl border text-center"
                      style={{ borderColor: "color-mix(in srgb, var(--color-gold) 35%, transparent)" }}
                    >
                      <span className="text-2xl text-rose">＋</span>
                      <span className="mt-2 px-2 text-[0.7rem] text-dim">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-dim">
                  Natural daylight tells the truth; lamps and filters fib — I&rsquo;ll gently flag
                  anything too dark.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────────── FAQ ───────────────── */}
        <section style={{ background: "var(--color-canvas-2)" }} className="section-pad">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="eyebrow block">Questions</span>
              <h2 className="display-lg mt-5">
                Before you
                <br />
                reach out
              </h2>
              <p className="mt-5 text-text">
                A few things people often ask. Anything else, the form below reaches me directly.
              </p>
              <RoseMark size={64} stroke="rgba(217,142,148,0.25)" className="mt-8" />
            </Reveal>
            <Reveal delay={100} className="divide-y" style={{ borderColor: "color-mix(in srgb, var(--color-gold) 24%, transparent)" }}>
              {FAQ.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-ivory">
                    {item.q}
                    <span className="shrink-0 text-rose transition-transform duration-300 group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-text">{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ───────────────── Contact ───────────────── */}
        <section id="contact" className="grain relative overflow-hidden section-pad">
          <Glow color="rgba(217,142,148,0.22)" size={560} style={{ top: -160, right: "8%" }} />
          <Glow color="rgba(122,75,110,0.30)" size={460} style={{ bottom: -220, left: "5%" }} />
          <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <Ornament className="!justify-start" />
              <h2 className="display-lg mt-6">
                Let&rsquo;s find your <em className="accent">colors.</em>
              </h2>
              <p className="mt-5 max-w-md text-text">
                Pricing is shared by consultation — send a note and I&rsquo;ll reply personally with the
                details and the next opening. It&rsquo;s set at a price you can&rsquo;t afford to miss.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a href={CONTACT.emailHref} className="flex items-center gap-3 transition-colors hover:text-rose">
                  <Gemstone color="#d49aac" size={16} /> {CONTACT.email}
                </a>
                <a href={CONTACT.phoneHref} className="flex items-center gap-3 transition-colors hover:text-rose">
                  <Gemstone color="#c9a86a" size={16} /> {CONTACT.phone}
                </a>
                <p className="flex items-center gap-3">
                  <Gemstone color="#8c9070" size={16} /> {CONTACT.location}
                </p>
              </div>
              <div className="mt-8">
                <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-dim">Hours</span>
                <div className="mt-3 space-y-1 text-sm">
                  {CONTACT.hours.map(([d, h]) => (
                    <div key={d} className="flex justify-between gap-6" style={{ maxWidth: 280 }}>
                      <span>{d}</span>
                      <span className="text-dim">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="rounded-[24px] p-7 sm:p-9"
                style={{ background: "var(--color-canvas-2)", boxShadow: "0 40px 80px -45px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(201,168,106,0.16)" }}
              >
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* before/after, quiet footer band */}
        <section style={{ background: "var(--color-canvas-2)" }} className="py-16">
          <div className="container-x">
            <Reveal className="grid items-center gap-6 sm:grid-cols-[1fr_1fr_1fr]">
              <div>
                <span className="eyebrow block">The right light</span>
                <p className="mt-3 font-display text-2xl text-ivory">
                  The wrong colors wash you out. <em className="accent">Yours bring you alive.</em>
                </p>
              </div>
              <ColorDrape from="#9aa07e" to="#6f7458" label="Off — washed out" className="h-28" />
              <ColorDrape from="#d49aac" to="#d98e94" label="Yours — alive" className="h-28" />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
