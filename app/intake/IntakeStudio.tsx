"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { STYLE_GOALS, QUESTION_CHIPS } from "../lib/content";
import { Gemstone } from "../components/Visuals";

/* ── Types & constants ─────────────────────────────────────────── */
type IntakeData = {
  firstName: string;
  email: string;
  phone: string;
  styleGoals: string[];
  styleGoalsText: string;
  colorsLove: string;
  colorsAvoid: string;
  hair: string;
  hairShade: string;
  prior: string;
  priorSeason: string;
  questionsText: string;
  questionChips: string[];
  heardAbout: string;
  consent: boolean;
};

const EMPTY: IntakeData = {
  firstName: "",
  email: "",
  phone: "",
  styleGoals: [],
  styleGoalsText: "",
  colorsLove: "",
  colorsAvoid: "",
  hair: "",
  hairShade: "",
  prior: "",
  priorSeason: "",
  questionsText: "",
  questionChips: [],
  heardAbout: "",
  consent: false,
};

type PhotoSlot = "face" | "neck" | "wrist";
type Photo = { url: string; hint: string | null };

const PHOTO_SLOTS: { key: PhotoSlot; title: string; help: string }[] = [
  { key: "face", title: "Your full face", help: "Hair back, no makeup, facing a window." },
  { key: "neck", title: "Neck & shoulders", help: "A neutral or white top works best." },
  { key: "wrist", title: "Inner wrist", help: "Bare skin — it shows your true undertone." },
];

const STORAGE_KEY = "aphrodite-intake-v1";
const STEP_TITLES = ["About you", "Capture your colors", "Style goals", "Your colors today", "Your questions", "Review & send"];
const TOTAL = STEP_TITLES.length;

const emailValid = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

/** sample average luminance to offer a gentle lighting hint */
async function lightingHint(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    try {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        try {
          const c = document.createElement("canvas");
          const w = (c.width = 48);
          const h = (c.height = 48);
          const ctx = c.getContext("2d");
          if (!ctx) return resolve(null);
          ctx.drawImage(img, 0, 0, w, h);
          const { data } = ctx.getImageData(0, 0, w, h);
          let sum = 0;
          for (let i = 0; i < data.length; i += 4) {
            sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
          }
          const avg = sum / (data.length / 4);
          URL.revokeObjectURL(url);
          if (avg < 70) return resolve("Looks a little dark — try facing a window in daylight.");
          if (avg > 215) return resolve("Looks a touch bright — soft, indirect daylight is ideal.");
          resolve(null);
        } catch {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = url;
    } catch {
      resolve(null);
    }
  });
}

/* ── UI atoms ──────────────────────────────────────────────────── */
function Chips({ options, selected, onToggle }: { options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((o) => (
        <button key={o} type="button" className="chip" aria-pressed={selected.includes(o)} onClick={() => onToggle(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}

function StepShell({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children: ReactNode }) {
  return (
    <div className="step-anim">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display-md mt-3">{title}</h2>
      {intro && <p className="mt-3 max-w-xl text-text">{intro}</p>}
      <div className="mt-8 space-y-6">{children}</div>
    </div>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-rose)" }} />;
}

/* ── Main ──────────────────────────────────────────────────────── */
export default function IntakeStudio() {
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<IntakeData>(EMPTY);
  const [photos, setPhotos] = useState<Partial<Record<PhotoSlot, Photo>>>({});
  const [showErrors, setShowErrors] = useState(false);
  const [savedToast, setSavedToast] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") setData({ ...EMPTY, ...parsed });
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!started) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setSavedToast(true);
      const t = setTimeout(() => setSavedToast(false), 1400);
      return () => clearTimeout(t);
    } catch {
      /* ignore */
    }
  }, [data, started]);

  const set = useCallback(<K extends keyof IntakeData>(key: K, value: IntakeData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  }, []);

  const toggleIn = useCallback((key: "styleGoals" | "questionChips", v: string) => {
    setData((d) => {
      const arr = d[key];
      return { ...d, [key]: arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v] };
    });
  }, []);

  const onPhoto = useCallback(async (slot: PhotoSlot, file: File | undefined) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotos((p) => ({ ...p, [slot]: { url, hint: null } }));
    const hint = await lightingHint(file);
    setPhotos((p) => (p[slot] ? { ...p, [slot]: { url, hint } } : p));
  }, []);

  const removePhoto = useCallback((slot: PhotoSlot) => {
    setPhotos((p) => {
      const next = { ...p };
      if (next[slot]) URL.revokeObjectURL(next[slot]!.url);
      delete next[slot];
      return next;
    });
  }, []);

  const step1Valid = data.firstName.trim().length > 0 && emailValid(data.email);

  const goNext = () => {
    if (step === 1 && !step1Valid) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    if (step < TOTAL) {
      setStep((s) => s + 1);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const goBack = () => {
    setShowErrors(false);
    if (step > 1) {
      setStep((s) => s - 1);
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const jumpTo = (s: number) => {
    setStep(s);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = () => {
    if (!data.consent) {
      setShowErrors(true);
      return;
    }
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    setDone(true);
  };

  const photoCount = Object.keys(photos).length;
  const progress = useMemo(() => Math.round((step / TOTAL) * 100), [step]);

  if (done) return <Completion firstName={data.firstName} />;

  /* Welcome */
  if (!started) {
    return (
      <div className="step-anim mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-8 flex justify-center gap-2">
          {["#f0a884", "#d49aac", "#c07b3e", "#7a4b6e", "#c9a86a"].map((c) => (
            <Gemstone key={c} color={c} size={30} />
          ))}
        </div>
        <span className="eyebrow">Before Your Consultation</span>
        <h1 className="display-lg mt-4">
          This isn&rsquo;t a quiz — it&rsquo;s the <em className="accent">beginning of your color story.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-text">
          Tell me a little about you, capture your skin in honest daylight, and bring your questions.
          When we sit down together, we get to skip the small talk and go straight to the good part.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-dim">
          <span className="flex items-center gap-2">
            <Dot /> Free, always
          </span>
          <span className="flex items-center gap-2">
            <Dot /> About 5 minutes
          </span>
          <span className="flex items-center gap-2">
            <Dot /> No payment to finish
          </span>
          <span className="flex items-center gap-2">
            <Dot /> Your photos stay in your browser
          </span>
        </div>
        <button type="button" className="btn btn-primary mt-10" onClick={() => setStarted(true)}>
          Begin
        </button>
        <p className="mt-5 text-xs text-dim">
          Prefer to look around first?{" "}
          <Link href="/" className="line-link !text-xs">
            Back to the studio
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div ref={topRef} className="mx-auto max-w-2xl scroll-mt-28">
      <div className="mb-10">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-dim">
          <span>
            Step {step} of {TOTAL} · {STEP_TITLES[step - 1]}
          </span>
          <span className="flex items-center gap-2">
            <span className="text-rose transition-opacity duration-300" style={{ opacity: savedToast ? 1 : 0 }}>
              ✓ Progress saved
            </span>
            <span>{progress}%</span>
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* 1 — about you */}
      {step === 1 && (
        <StepShell eyebrow="A little about you" title="First, who am I meeting?" intro="Just enough to reach you before our session.">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="firstName">
                First name
              </label>
              <input id="firstName" className="field" placeholder="Your first name" value={data.firstName} onChange={(e) => set("firstName", e.target.value)} />
              {showErrors && !data.firstName.trim() && <p className="mt-2 text-sm text-rose">A first name helps me greet you properly.</p>}
            </div>
            <div>
              <label className="field-label" htmlFor="email">
                Email
              </label>
              <input id="email" type="email" className="field" placeholder="you@email.com" value={data.email} onChange={(e) => set("email", e.target.value)} />
              {showErrors && !emailValid(data.email) && <p className="mt-2 text-sm text-rose">A valid email so I can send your next steps.</p>}
            </div>
          </div>
          <div>
            <label className="field-label" htmlFor="phone">
              Phone <span className="font-normal text-dim">(optional)</span>
            </label>
            <input id="phone" className="field" placeholder="(000) 000-0000" value={data.phone} onChange={(e) => set("phone", e.target.value)} />
          </div>
        </StepShell>
      )}

      {/* 2 — photos */}
      {step === 2 && (
        <StepShell
          eyebrow="Capture your colors"
          title="Let me see the real you."
          intro="Face a window in soft daylight, push your hair back, skip makeup and filters. Three photos is plenty — and you can retake any of them."
        >
          <div
            className="rounded-2xl p-5 text-sm text-text"
            style={{ background: "color-mix(in srgb, var(--color-rose) 12%, var(--color-canvas-2))" }}
          >
            <strong className="font-semibold text-ivory">A quick word on light.</strong>{" "}
            Natural daylight tells the truth; lamps and filters fib. No need to be perfect — I&rsquo;ll
            gently flag anything too dark or backlit.
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {PHOTO_SLOTS.map((slot) => {
              const photo = photos[slot.key];
              return (
                <div key={slot.key} className="flex flex-col">
                  <label
                    className="group relative flex aspect-[3/4] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border text-center"
                    style={{
                      borderColor: "color-mix(in srgb, var(--color-gold) 40%, transparent)",
                      background: photo ? "transparent" : "var(--color-canvas)",
                    }}
                  >
                    {photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={photo.url} alt={slot.title} className="h-full w-full object-cover" />
                    ) : (
                      <span className="px-3">
                        <span className="block text-2xl text-rose">＋</span>
                        <span className="mt-2 block text-sm font-medium text-ivory">{slot.title}</span>
                        <span className="mt-1 block text-xs text-dim">{slot.help}</span>
                      </span>
                    )}
                    <input type="file" accept="image/*" capture="user" className="sr-only" onChange={(e) => onPhoto(slot.key, e.target.files?.[0])} />
                  </label>
                  {photo && (
                    <div className="mt-2 flex items-center justify-between text-xs">
                      <span className="font-medium text-ivory">{slot.title}</span>
                      <button type="button" className="text-rose underline-offset-2 hover:underline" onClick={() => removePhoto(slot.key)}>
                        Retake
                      </button>
                    </div>
                  )}
                  {photo?.hint && <p className="mt-1 text-xs" style={{ color: "var(--color-gold)" }}>{photo.hint}</p>}
                </div>
              );
            })}
          </div>
          <p className="text-xs text-dim">
            {photoCount > 0
              ? `${photoCount} of 3 added — photos never leave your browser in this demo.`
              : "Photos are optional to continue, but they make our session so much richer."}
          </p>
        </StepShell>
      )}

      {/* 3 — style goals */}
      {step === 3 && (
        <StepShell eyebrow="Your style goals" title="What would feel like a win?" intro="Pick anything that resonates — there are no wrong answers.">
          <Chips options={STYLE_GOALS} selected={data.styleGoals} onToggle={(v) => toggleIn("styleGoals", v)} />
          <div>
            <label className="field-label" htmlFor="goalsText">
              Anything else you&rsquo;re hoping for? <span className="font-normal text-dim">(optional)</span>
            </label>
            <textarea id="goalsText" className="field min-h-28 resize-y" placeholder="In your own words…" value={data.styleGoalsText} onChange={(e) => set("styleGoalsText", e.target.value)} />
          </div>
        </StepShell>
      )}

      {/* 4 — colors today */}
      {step === 4 && (
        <StepShell eyebrow="Your colors today" title="How do you dress right now?" intro="A little context primes our session — none of this is binding.">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="love">
                Colors you reach for &amp; love
              </label>
              <input id="love" className="field" placeholder="e.g. olive, rust, cream" value={data.colorsLove} onChange={(e) => set("colorsLove", e.target.value)} />
            </div>
            <div>
              <label className="field-label" htmlFor="avoid">
                Colors you avoid or feel wrong in
              </label>
              <input id="avoid" className="field" placeholder="e.g. neon, icy pastels" value={data.colorsAvoid} onChange={(e) => set("colorsAvoid", e.target.value)} />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <span className="field-label">Your hair right now</span>
              <div className="flex flex-wrap gap-2.5">
                {["Natural", "Colored", "A mix"].map((h) => (
                  <button key={h} type="button" className="chip" aria-pressed={data.hair === h} onClick={() => set("hair", data.hair === h ? "" : h)}>
                    {h}
                  </button>
                ))}
              </div>
              <input className="field mt-3" placeholder="Current shade (optional)" value={data.hairShade} onChange={(e) => set("hairShade", e.target.value)} />
            </div>
            <div>
              <span className="field-label">Had a color analysis before?</span>
              <div className="flex flex-wrap gap-2.5">
                {["No, first time", "Yes"].map((p) => (
                  <button key={p} type="button" className="chip" aria-pressed={data.prior === p} onClick={() => set("prior", data.prior === p ? "" : p)}>
                    {p}
                  </button>
                ))}
              </div>
              {data.prior === "Yes" && (
                <input className="field mt-3 step-anim" placeholder="What season were you told?" value={data.priorSeason} onChange={(e) => set("priorSeason", e.target.value)} />
              )}
            </div>
          </div>
        </StepShell>
      )}

      {/* 5 — questions */}
      {step === 5 && (
        <StepShell eyebrow="Your questions" title="What do you most want to ask?" intro="The session is yours. Tell me what's on your mind so we spend our time on what matters to you.">
          <div>
            <label className="field-label" htmlFor="questions">
              Your question for our session
            </label>
            <textarea id="questions" className="field min-h-32 resize-y" placeholder="Ask me anything…" value={data.questionsText} onChange={(e) => set("questionsText", e.target.value)} />
          </div>
          <div>
            <span className="field-label">Or start with a common one:</span>
            <Chips options={QUESTION_CHIPS} selected={data.questionChips} onToggle={(v) => toggleIn("questionChips", v)} />
          </div>
          <div>
            <label className="field-label" htmlFor="heard">
              How did you hear about the studio? <span className="font-normal text-dim">(optional)</span>
            </label>
            <input id="heard" className="field" placeholder="Instagram, a friend, a search…" value={data.heardAbout} onChange={(e) => set("heardAbout", e.target.value)} />
          </div>
        </StepShell>
      )}

      {/* 6 — review */}
      {step === 6 && (
        <StepShell eyebrow="Review & send" title="Here's what I'll see." intro="Take a look, edit anything, and send it to the studio when it feels right.">
          <ReviewRow label="About you" onEdit={() => jumpTo(1)}>
            {data.firstName || "—"} · {data.email || "—"}
            {data.phone ? ` · ${data.phone}` : ""}
          </ReviewRow>
          <ReviewRow label="Photos" onEdit={() => jumpTo(2)}>
            {photoCount > 0 ? (
              <span className="flex items-center gap-2">
                {PHOTO_SLOTS.filter((s) => photos[s.key]).map((s) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={s.key} src={photos[s.key]!.url} alt={s.title} className="h-12 w-12 rounded-lg object-cover" />
                ))}
                <span className="text-dim">{photoCount} of 3 added</span>
              </span>
            ) : (
              "None added yet — that's okay, we can capture them at the session."
            )}
          </ReviewRow>
          <ReviewRow label="Style goals" onEdit={() => jumpTo(3)}>
            {data.styleGoals.length ? data.styleGoals.join(", ") : "—"}
            {data.styleGoalsText ? ` · "${data.styleGoalsText}"` : ""}
          </ReviewRow>
          <ReviewRow label="Colors today" onEdit={() => jumpTo(4)}>
            {data.colorsLove ? `Loves: ${data.colorsLove}. ` : ""}
            {data.colorsAvoid ? `Avoids: ${data.colorsAvoid}. ` : ""}
            {data.hair ? `Hair: ${data.hair}${data.hairShade ? ` (${data.hairShade})` : ""}. ` : ""}
            {data.prior ? `Prior: ${data.prior}${data.priorSeason ? ` — ${data.priorSeason}` : ""}.` : ""}
            {!data.colorsLove && !data.colorsAvoid && !data.hair && !data.prior ? "—" : ""}
          </ReviewRow>
          <ReviewRow label="Questions" onEdit={() => jumpTo(5)}>
            {data.questionsText || (data.questionChips.length ? "" : "—")}
            {data.questionChips.length ? ` ${data.questionChips.join(", ")}` : ""}
          </ReviewRow>

          <label className="flex cursor-pointer items-start gap-3 rounded-2xl p-4" style={{ background: "var(--color-canvas-2)" }}>
            <input type="checkbox" className="mt-1 h-5 w-5 accent-[var(--color-rose)]" checked={data.consent} onChange={(e) => set("consent", e.target.checked)} />
            <span className="text-sm text-text">
              I understand my photos and answers are used only to prepare my color analysis — never sold,
              never used for ads, never fed to a tracker.
            </span>
          </label>
          {showErrors && !data.consent && <p className="text-sm text-rose">Please confirm so I can prepare your analysis with care.</p>}
        </StepShell>
      )}

      {/* nav */}
      <div className="mt-12 flex items-center justify-between">
        {step > 1 ? (
          <button type="button" className="btn btn-ghost" onClick={goBack}>
            Back
          </button>
        ) : (
          <Link href="/" className="btn btn-ghost">
            Exit
          </Link>
        )}
        {step < TOTAL ? (
          <button type="button" className="btn btn-primary" onClick={goNext}>
            Continue
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={submit}>
            Send to Aphrodite
          </button>
        )}
      </div>
    </div>
  );
}

function ReviewRow({ label, onEdit, children }: { label: string; onEdit: () => void; children: ReactNode }) {
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: "color-mix(in srgb, var(--color-gold) 30%, transparent)" }}>
      <div className="flex items-center justify-between">
        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-dim">{label}</span>
        <button type="button" className="line-link !text-[0.66rem]" onClick={onEdit}>
          Edit
        </button>
      </div>
      <p className="mt-2 text-sm text-text">{children}</p>
    </div>
  );
}

function Completion({ firstName }: { firstName: string }) {
  const gems = ["#f0a884", "#d49aac", "#d98e94", "#c07b3e", "#8c9070", "#7a4b6e", "#c9a86a"];
  return (
    <div className="step-anim relative mx-auto max-w-2xl overflow-hidden text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {gems.map((c, i) => (
          <span key={c} className="gem-fall" style={{ left: `${8 + i * 13}%`, width: 12, height: 12, background: c, animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
      <div className="relative">
        <div className="mx-auto mb-8 flex justify-center gap-2">
          {gems.slice(0, 5).map((c) => (
            <Gemstone key={c} color={c} size={28} />
          ))}
        </div>
        <span className="eyebrow">Sent</span>
        <h1 className="display-lg mt-4">
          Your colors are on their way to the <em className="accent">studio.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-text">
          {firstName ? `Thank you, ${firstName}. ` : "Thank you. "}
          I&rsquo;ll be looking at the real you — not a filter — and our time together will be all the
          richer for it. Expect a personal note within one business day to find a time that suits you.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/#contact" className="btn btn-primary">
            Book Your Reading
          </Link>
          <Link href="/" className="btn btn-ghost">
            Back to the Studio
          </Link>
        </div>
        <p className="mt-6 text-xs text-dim">This is a demonstration intake — your details weren&rsquo;t actually sent anywhere.</p>
      </div>
    </div>
  );
}
