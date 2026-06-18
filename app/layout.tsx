import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--ff-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--ff-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://aphroditescoloranalysis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aphrodite's Color Analysis — Find the colors that were always yours",
    template: "%s · Aphrodite's Color Analysis",
  },
  description:
    "Virtual seasonal color analysis, read by a human, not an algorithm. A live consultation, a written color report, and a custom gemstone bracelet hand-matched to your palette. Begin with a quiet, beautiful intake before we meet.",
  keywords: [
    "color analysis",
    "seasonal color analysis",
    "virtual color analysis",
    "personal color palette",
    "what season am I",
    "gemstone bracelet",
    "Bronx color analyst",
  ],
  openGraph: {
    title: "Aphrodite's Color Analysis — Find the colors that were always yours",
    description:
      "Human-read seasonal color analysis. A live session, a written report, and a custom gemstone bracelet in your palette.",
    url: siteUrl,
    siteName: "Aphrodite's Color Analysis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aphrodite's Color Analysis",
    description:
      "Human-read seasonal color analysis — a live session, a written report, and a gemstone bracelet in your palette.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
