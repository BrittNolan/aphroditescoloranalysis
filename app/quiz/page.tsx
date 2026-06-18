import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SeasonQuiz from "./SeasonQuiz";

export const metadata: Metadata = {
  title: "Discover Your Season — A Playful Two-Minute Guess",
  description:
    "A quick, playful quiz to guess your color season. For the real reading — your true undertone and a gemstone bracelet matched to your palette — book a human analysis.",
};

export default function QuizPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-5 pt-32 pb-24 sm:pt-40">
        <SeasonQuiz />
      </main>
      <SiteFooter />
    </>
  );
}
