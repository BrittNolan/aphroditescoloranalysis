import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import GiftStudio from "./GiftStudio";

export const metadata: Metadata = {
  title: "Gift a Session — A Color Study & Gemstone Keepsake",
  description:
    "Give someone the rare gift of seeing themselves clearly — a personal color analysis and a gemstone bracelet made just for them.",
};

export default function GiftPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-32 pb-24 sm:pt-40">
        <GiftStudio />
      </main>
      <SiteFooter />
    </>
  );
}
