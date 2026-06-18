import type { CSSProperties } from "react";

/* A single glossy gemstone bead, rendered with layered gradients. */
export function Gemstone({
  color,
  size = 34,
  style,
}: {
  color: string;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "inline-block",
        background: `radial-gradient(circle at 32% 26%, rgba(255,255,255,0.9), rgba(255,255,255,0) 42%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.34), rgba(0,0,0,0) 55%), ${color}`,
        boxShadow:
          "inset -2px -3px 7px rgba(0,0,0,0.38), inset 2px 2px 4px rgba(255,255,255,0.30), 0 3px 9px rgba(0,0,0,0.4)",
        flex: "0 0 auto",
        ...style,
      }}
    />
  );
}

/* A strand of gemstones on a fine gold thread — the signature bracelet. */
export function BraceletStrand({
  colors,
  size = 30,
  className = "",
}: {
  colors: string[];
  size?: number;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ gap: size * 0.28 }}>
      <span
        aria-hidden
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
        style={{
          height: 1.5,
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-gold) 75%, transparent) 12%, color-mix(in srgb, var(--color-gold) 75%, transparent) 88%, transparent)",
        }}
      />
      {colors.map((c, i) => {
        const mid = (colors.length - 1) / 2;
        const scale = 1 - (Math.abs(i - mid) / (mid + 2)) * 0.32;
        return <Gemstone key={`${c}-${i}`} color={c} size={Math.round(size * scale)} style={{ position: "relative" }} />;
      })}
    </div>
  );
}

/* A row of flat color swatches (the palette card). */
export function Swatches({ colors, className = "" }: { colors: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap ${className}`} style={{ gap: 6 }}>
      {colors.map((c, i) => (
        <span
          key={`${c}-${i}`}
          aria-hidden
          style={{ background: c, borderRadius: 6, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
          className="h-9 w-9 sm:h-10 sm:w-10"
        />
      ))}
    </div>
  );
}

/* A warm candlelit glow — atmospheric background light. */
export function Glow({
  color = "rgba(201,168,106,0.22)",
  size = 460,
  style,
  className = "",
}: {
  color?: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`glow ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 50% 50%, ${color}, transparent 68%)`,
        ...style,
      }}
    />
  );
}

/* A "draped fabric" panel — a smooth diagonal color field with sheen. */
export function ColorDrape({
  from,
  to,
  label,
  className = "",
}: {
  from: string;
  to: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})`, boxShadow: "inset 0 0 60px rgba(0,0,0,0.18)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "repeating-linear-gradient(118deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 16px)",
          mixBlendMode: "soft-light",
        }}
      />
      {label && (
        <span className="absolute bottom-3 left-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}

/* A delicate line-art rose — the recurring brand ornament. */
export function RoseMark({
  size = 40,
  className = "",
  stroke = "currentColor",
  style,
}: {
  size?: number;
  className?: string;
  stroke?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={(size * 64) / 48}
      viewBox="0 0 48 64"
      fill="none"
      aria-hidden
      className={className}
      style={style}
    >
      <g stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6C14 6 9 14 9 22c0 10 7 16 15 16s15-6 15-16C39 14 34 6 24 6Z" opacity="0.9" />
        <path d="M24 12c-5 1-7 6-5 10 2 4 9 4 10-1 1-4-3-7-7-5" opacity="0.85" />
        <path d="M16 20c0 7 4 13 8 13s8-6 8-13" opacity="0.7" />
        <path d="M24 38v20" />
        <path d="M24 46c-5-2-11-1-13 4 6 2 12 0 13-4Z" opacity="0.9" />
        <path d="M24 50c5-2 11-1 13 4-6 2-12 0-13-4Z" opacity="0.9" />
      </g>
    </svg>
  );
}

/* A small centered ornament: rose flanked by hairlines. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-12" style={{ background: "color-mix(in srgb, var(--color-gold) 50%, transparent)" }} />
      <RoseMark size={26} stroke="var(--color-rose)" />
      <span className="h-px w-12" style={{ background: "color-mix(in srgb, var(--color-gold) 50%, transparent)" }} />
    </div>
  );
}
