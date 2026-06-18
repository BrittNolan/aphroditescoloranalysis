"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SEASONS } from "../lib/content";
import { BraceletStrand, Swatches } from "../components/Visuals";

type SeasonKey = "spring" | "summer" | "autumn" | "winter";
type Weights = Partial<Record<SeasonKey, number>>;
type Q = { q: string; options: { label: string; w: Weights }[] };

const QUESTIONS: Q[] = [
  {
    q: "Look at the veins on your inner wrist. They read mostly…",
    options: [
      { label: "Blue or purple", w: { summer: 2, winter: 2 } },
      { label: "Green or olive", w: { spring: 2, autumn: 2 } },
      { label: "A bit of both — hard to tell", w: { spring: 1, summer: 1, autumn: 1, winter: 1 } },
    ],
  },
  {
    q: "Which metal makes your skin glow?",
    options: [
      { label: "Bright silver & platinum", w: { summer: 2, winter: 2 } },
      { label: "Warm yellow gold", w: { spring: 2, autumn: 2 } },
      { label: "Soft rose gold / either", w: { spring: 1, summer: 1, autumn: 1 } },
    ],
  },
  {
    q: "Your overall colouring is best described as…",
    options: [
      { label: "Light & delicate", w: { spring: 2, summer: 2 } },
      { label: "Deep & striking", w: { winter: 2, autumn: 1 } },
      { label: "Soft & blended", w: { summer: 2, autumn: 1 } },
      { label: "Rich & warm", w: { autumn: 2, spring: 1 } },
    ],
  },
  {
    q: "Which white looks right against your face?",
    options: [
      { label: "Crisp, pure white", w: { winter: 2, summer: 1 } },
      { label: "Soft cream or ivory", w: { spring: 2, autumn: 2 } },
      { label: "A cool, muted off-white", w: { summer: 2 } },
    ],
  },
  {
    q: "People most often compliment you in…",
    options: [
      { label: "Peach, coral, warm green", w: { spring: 2 } },
      { label: "Dusty rose, soft blue, lavender", w: { summer: 2 } },
      { label: "Rust, olive, mustard, terracotta", w: { autumn: 2 } },
      { label: "Emerald, fuchsia, true red, black", w: { winter: 2 } },
    ],
  },
  {
    q: "In summer sun, your skin tends to…",
    options: [
      { label: "Burn, then freckle", w: { spring: 1, summer: 2 } },
      { label: "Tan slowly to golden", w: { autumn: 2, spring: 1 } },
      { label: "Tan easily & deeply", w: { autumn: 1, winter: 2 } },
      { label: "Stay fair & cool", w: { summer: 1, winter: 2 } },
    ],
  },
];

export default function SeasonQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const result = useMemo(() => {
    if (!done) return null;
    const tally: Record<SeasonKey, number> = { spring: 0, summer: 0, autumn: 0, winter: 0 };
    answers.forEach((optIdx, qIdx) => {
      const w = QUESTIONS[qIdx].options[optIdx]?.w ?? {};
      (Object.keys(w) as SeasonKey[]).forEach((k) => {
        tally[k] += w[k] ?? 0;
      });
    });
    const best = (Object.keys(tally) as SeasonKey[]).sort((a, b) => tally[b] - tally[a])[0];
    return SEASONS.find((s) => s.token === best) ?? SEASONS[0];
  }, [done, answers]);

  const choose = (optIdx: number) => {
    const next = [...answers];
    next[index] = optIdx;
    setAnswers(next);
    if (index < QUESTIONS.length - 1) {
      setTimeout(() => setIndex(index + 1), 180);
    } else {
      setTimeout(() => setDone(true), 200);
    }
  };

  const restart = () => {
    setAnswers([]);
    setIndex(0);
    setDone(false);
  };

  const progress = Math.round(((done ? QUESTIONS.length : index) / QUESTIONS.length) * 100);

  if (done && result) {
    return (
      <div className="step-anim mx-auto max-w-2xl text-center">
        <span className="eyebrow">Our best guess</span>
        <h1 className="display-lg mt-4">
          You lean <em className="accent">{result.name}.</em>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-ink-soft">{result.feeling}</p>

        <div
          className="mx-auto mt-9 max-w-md rounded-[28px] p-7"
          style={{
            background: "color-mix(in srgb, var(--color-marble) 60%, white)",
            boxShadow: "0 30px 60px -40px rgba(43,42,51,0.4), inset 0 0 0 1px rgba(201,168,106,0.25)",
          }}
        >
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
            A {result.name} palette
          </span>
          <div className="mt-4 flex justify-center">
            <Swatches colors={result.swatches} className="justify-center" />
          </div>
          <div className="my-6 hairline is-shown" />
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-ink-soft">
            …and your bracelet
          </span>
          <div className="mt-4">
            <BraceletStrand colors={result.swatches} size={32} />
          </div>
        </div>

        <div
          className="mx-auto mt-9 max-w-lg rounded-2xl p-5 text-sm"
          style={{ background: "var(--color-blush)" }}
        >
          A quiz can only guess. The real magic is a human eye reading your true undertone, contrast
          and light — and a bracelet hand-matched to <em>your</em> exact palette, not a category.
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/intake" className="btn btn-primary">
            Get the Real Reading — Free Intake
          </Link>
          <button type="button" className="btn btn-ghost" onClick={restart}>
            Retake the Quiz
          </button>
        </div>
      </div>
    );
  }

  const current = QUESTIONS[index];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-10">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-ink-soft">
          <span>
            Question {index + 1} of {QUESTIONS.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="step-anim" key={index}>
        <span className="eyebrow">Discover your season</span>
        <h2 className="display-md mt-3">{current.q}</h2>
        <div className="mt-8 grid gap-3">
          {current.options.map((o, i) => (
            <button
              key={o.label}
              type="button"
              onClick={() => choose(i)}
              className="group flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor:
                  answers[index] === i
                    ? "var(--color-rose)"
                    : "color-mix(in srgb, var(--color-ink) 14%, transparent)",
                background: answers[index] === i ? "var(--color-blush)" : "#fff",
              }}
            >
              <span className="font-medium">{o.label}</span>
              <span className="text-rose-deep opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </button>
          ))}
        </div>
        {index > 0 && (
          <button
            type="button"
            className="mt-6 line-link"
            onClick={() => setIndex(index - 1)}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
