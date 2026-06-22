import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import FinalCTA from "@/components/sections/FinalCTA";
import { site } from "@/lib/data";
import { Award, Heart, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sankar Balaga — FIDE-Rated Chess Coach in Visakhapatnam",
  description:
    "Meet Sankar Balaga, FIDE-rated chess coach with 5+ years of experience training students to FIDE ratings and tournament wins in Visakhapatnam.",
};

const timeline = [
  { year: "2019", title: "Began competitive play", detail: "Earned FIDE rating through district and state-level rated tournaments." },
  { year: "2020", title: "First students coached", detail: "Started training a small group of school students in Visakhapatnam." },
  { year: "2022", title: "Volunteer coaching begins", detail: "Joined St. Jude India ChildCare Centre as a volunteer chess coach for children undergoing treatment." },
  { year: "2023", title: "Academy formalised", detail: "Structured the curriculum into Beginner, Intermediate, and Advanced programs." },
  { year: "2025", title: "First student FIDE ratings", detail: "Multiple academy students earned their own official FIDE ratings." },
  { year: "2026", title: "350+ students trained", detail: "Academy expands online batches to reach students beyond Visakhapatnam." },
];

const values = [
  { icon: Target, title: "Patient, not passive", detail: "Every student learns differently. Coaching adapts to the student, not the other way around." },
  { icon: Award, title: "Results that hold up", detail: "Progress is measured in actual tournament performance and FIDE ratings, not just attendance." },
  { icon: Heart, title: "Chess as a tool for good", detail: "Volunteer coaching at St. Jude India ChildCare Centre reflects a belief that chess should be accessible, not exclusive." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-pad border-b border-gold-muted/20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">
              <span className="text-gold">Bb5</span> — The founder
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ivory md:text-5xl">
              {site.founder}
            </h1>
            <p className="mt-2 font-body text-base text-gold-light">
              FIDE-Rated Chess Coach · {site.city}
            </p>
            <p className="mt-6 font-body text-ivory/70">
              Sankar has spent over five years coaching students from their very first game to
              their first FIDE-rated tournament. His own path through competitive, rated play
              shapes how he teaches — not as a list of openings to memorise, but as a way of
              thinking that holds up under real pressure.
            </p>
            <p className="mt-4 font-body text-ivory/70">
              Outside the academy, Sankar volunteers as a chess coach at St. Jude India
              ChildCare Centre, teaching the game to children undergoing treatment — a
              reflection of his belief that chess builds confidence and joy regardless of
              circumstance.
            </p>
          </div>
          <div className="mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center rounded-sm border border-gold-muted/30 bg-charcoal text-ivory/30">
            <span className="font-body text-sm">Founder photo</span>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-gold-muted/20 bg-charcoal/30">
        <SectionHeading move="Re1" kicker="Teaching philosophy" title="Coaching that builds thinkers, not memorisers" />
        <p className="mt-6 max-w-2xl font-body text-ivory/65">
          Sankar's approach centres on one idea: a student who understands *why* a move works
          will always out-perform one who only remembers *that* it works. Every lesson, from a
          five-year-old's first checkmate pattern to an advanced student's tournament prep,
          is built around that same principle.
        </p>
      </section>

      <section className="section-pad border-b border-gold-muted/20">
        <SectionHeading move="Nd5" kicker="The journey" title="From rated player to academy founder" />
        <div className="mt-12 space-y-0">
          {timeline.map((t, i) => (
            <div key={t.year} className="flex gap-6 border-t border-gold-muted/15 py-6 first:border-t-0">
              <span className="w-16 flex-shrink-0 font-display text-lg font-semibold text-gold">
                {t.year}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-ivory">{t.title}</p>
                <p className="mt-1 font-body text-sm text-ivory/60">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-b border-gold-muted/20 bg-charcoal/30">
        <SectionHeading move="O-O-O" kicker="Mission, vision, values" title="What the academy stands for" align="center" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="card-luxe p-6 text-center">
              <v.icon className="mx-auto text-gold" size={28} />
              <p className="mt-4 font-display text-base font-semibold text-ivory">{v.title}</p>
              <p className="mt-2 font-body text-sm text-ivory/60">{v.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
