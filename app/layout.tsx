import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--ff-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    default: "Aphrodite's Color Analysis — Find Your Unique Colors",
    template: "%s · Aphrodite's Color Analysis",
  },
  description:
    "Virtual color analysis, read by a human — no AI, no filters. One live session reveals the colors that enhance your natural beauty, and you leave with a written report and a bracelet made of stones in your own palette.",
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
    title: "Aphrodite's Color Analysis — Find Your Unique Colors",
    description:
      "Human-read color analysis. A live session, a written report, and a gemstone bracelet made of stones in your own colors.",
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
