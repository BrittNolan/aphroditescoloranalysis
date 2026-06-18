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
        background: `radial-gradient(circle at 32% 26%, rgba(255,255,255,0.85), rgba(255,255,255,0) 40%), radial-gradient(circle at 70% 78%, rgba(0,0,0,0.28), rgba(0,0,0,0) 55%), ${color}`,
        boxShadow:
          "inset -2px -3px 7px rgba(0,0,0,0.30), inset 2px 2px 4px rgba(255,255,255,0.25), 0 3px 7px rgba(43,42,51,0.18)",
        flex: "0 0 auto",
        ...style,
      }}
    />
  );
}

/* A strand of gemstones on a fine thread — the signature bracelet. */
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
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ gap: size * 0.28 }}
    >
      <span
        aria-hidden
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
        style={{
          height: 1.5,
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-gild) 70%, transparent) 12%, color-mix(in srgb, var(--color-gild) 70%, transparent) 88%, transparent)",
        }}
      />
      {colors.map((c, i) => {
        // gentle graduation in size toward the centre, like a real strand
        const mid = (colors.length - 1) / 2;
        const scale = 1 - Math.abs(i - mid) / (mid + 2) * 0.32;
        return (
          <Gemstone
            key={`${c}-${i}`}
            color={c}
            size={Math.round(size * scale)}
            style={{ position: "relative" }}
          />
        );
      })}
    </div>
  );
}

/* A row or grid of flat color swatches (the palette card). */
export function Swatches({
  colors,
  className = "",
  rounded = true,
}: {
  colors: string[];
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div className={`flex flex-wrap ${className}`} style={{ gap: 6 }}>
      {colors.map((c, i) => (
        <span
          key={`${c}-${i}`}
          aria-hidden
          style={{
            background: c,
            borderRadius: rounded ? 6 : 0,
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.04)",
          }}
          className="h-9 w-9 sm:h-10 sm:w-10"
        />
      ))}
    </div>
  );
}

/* A soft watercolor "bloom" — used for atmospheric backgrounds. */
export function ColorBloom({
  color,
  size = 420,
  style,
  className = "",
}: {
  color: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 50% 50%, ${color}, transparent 68%)`,
        filter: "blur(8px)",
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
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        boxShadow: "inset 0 0 60px rgba(0,0,0,0.10)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(118deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 16px)",
          mixBlendMode: "soft-light",
        }}
      />
      {label && (
        <span className="absolute bottom-3 left-4 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/85">
          {label}
        </span>
      )}
    </div>
  );
}
