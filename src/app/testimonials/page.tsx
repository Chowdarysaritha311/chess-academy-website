import type { Metadata } from "next";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials — Parent & Student Reviews",
  description:
    "Read what parents and students say about training at Sankar Chess Academy in Visakhapatnam.",
};

export default function TestimonialsPage() {
  return (
    <>
      <div className="section-pad pb-0 text-center">
        <p className="eyebrow mb-4">
          <span className="text-gold">O-O</span> — In their words
        </p>
        <h1 className="font-display text-4xl font-semibold text-ivory md:text-5xl">
          Parents and students, not paid actors
        </h1>
      </div>
      <TestimonialsSection items={testimonials} showHeading={false} />
      <FinalCTA />
    </>
  );
}
