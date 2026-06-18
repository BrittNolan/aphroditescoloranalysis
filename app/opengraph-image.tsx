import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Aphrodite's Color Analysis — find the colors that were always yours";

export default function OG() {
  const stones = ["#f2a98c", "#cf97a8", "#c98b8b", "#b9763f", "#7c7a52", "#5b3a59", "#c9a86a"];
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
          background: "linear-gradient(135deg, #faf7f2 0%, #f1deda 55%, #e8ebe6 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#b3736f",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          Aphrodite&rsquo;s Color Analysis
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, lineHeight: 1.05, color: "#2b2a33" }}>
            Find the colors that were
          </div>
          <div style={{ fontSize: 78, lineHeight: 1.05, color: "#b3736f", fontStyle: "italic" }}>
            always yours.
          </div>
          <div style={{ fontSize: 30, color: "#6c6873", marginTop: 24, fontFamily: "sans-serif" }}>
            Read by a human — a session, a written report, and a gemstone bracelet in your palette.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          {stones.map((c) => (
            <div
              key={c}
              style={{ width: 44, height: 44, borderRadius: 999, background: c }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
