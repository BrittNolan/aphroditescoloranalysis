import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aphrodite's Color Analysis — find your unique colors";

export default function OG() {
  const stones = ["#f0a884", "#d49aac", "#d98e94", "#c07b3e", "#8c9070", "#7a4b6e", "#c9a86a"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "radial-gradient(circle at 78% 18%, #3a2329 0%, #1a1411 45%, #120d0c 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 7,
            textTransform: "uppercase",
            color: "#d98e94",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          Aphrodite&rsquo;s Color Analysis
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.04, color: "#f4eae4" }}>Find Your</div>
          <div style={{ fontSize: 84, lineHeight: 1.04, color: "#d98e94", fontStyle: "italic" }}>Unique Colors</div>
          <div style={{ fontSize: 28, color: "#c8b7af", marginTop: 24, fontFamily: "sans-serif" }}>
            Read by a human — a session, a written report, and a gemstone bracelet in your colors.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {stones.map((c) => (
            <div key={c} style={{ width: 44, height: 44, borderRadius: 999, background: c }} />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
