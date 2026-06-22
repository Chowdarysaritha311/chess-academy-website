import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import WhyChessMatters from "@/components/sections/WhyChessMatters";
import ProgramsOverview from "@/components/sections/ProgramsOverview";
import SuccessMetrics from "@/components/sections/SuccessMetrics";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PuzzleOfTheDay from "@/components/sections/PuzzleOfTheDay";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chess Academy Vizag — FIDE-Rated Coaching for Ages 5-18",
  description:
    "Sankar Chess Academy offers FIDE-rated chess coaching in Visakhapatnam. Book a free demo class and see why parents trust us for ages 5-18.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <WhyChessMatters />
      <ProgramsOverview />
      <SuccessMetrics />
      <TestimonialsSection items={testimonials.slice(0, 3)} />
      <PuzzleOfTheDay />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
